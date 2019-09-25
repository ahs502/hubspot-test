import React, { Fragment, useState, useEffect } from "react";
import ListingHeader from "../components/listing/ListingHeader";
import Body from "../components/Body";
import { Typography } from "@material-ui/core";
import queryString from "query-string";
import ListingTable from "../components/listing/ListingTable";

const ListingPage = () => {
  const [query, setQuery] = useState(() => window.location.search.slice(1));
  const params = new URLSearchParams(query);
  let searchPhrase = params.get("search") || "";
  let sortDirection = params.get("sort_direction") || "asc";
  let pageSize = Number(params.get("page[size]") || 10);
  let pageNumber = Number(params.get("page[number]") || 1);

  const [data, setData] = useState(null);

  useEffect(() => {
    fetch(`https://hur-pages-api.herokuapp.com/api/authorization/rights_and_roles_elements?${makeQueryParams()}`)
      .then(response => {
        if (response.ok) return response.json();
        throw new Error("Response is not ok.");
      })
      .then(
        data => setData(data),
        error => {
          alert("Some error happened when fetching data.");
          console.error(error);
        }
      );
    return () => setData(null);
  }, [query]);

  const totalItemsCount = (data && data.meta && Number(data.meta.total_entries || 0)) || 0;
  const items =
    (data &&
      data.included &&
      data.included.map(item => ({
        type: item.type,
        label: item.attributes.label
      }))) ||
    [];

  if (data) {
    const maximumPossiblePageNumber = Math.ceil(totalItemsCount / pageSize);
    if (pageNumber > maximumPossiblePageNumber) {
      pageNumber = maximumPossiblePageNumber;
      setQueryParams();
    }
  }

  return (
    <Fragment>
      <ListingHeader
        search={searchPhrase}
        onSearchChange={search => {
          searchPhrase = search;
          setQueryParams();
        }}
      />
      <Body>
        {!data && <Typography variant="subtitle1">Loading data...</Typography>}
        {data && (
          <Fragment>
            <Typography variant="subtitle1">
              <strong>{totalItemsCount} </strong>
              item{totalItemsCount === 1 ? "" : "s"} found
            </Typography>
            {items.length > 0 && (
              <ListingTable
                totalItemsCount={totalItemsCount}
                sortDirection={sortDirection}
                onSortDirectionChange={newSortDirection => {
                  sortDirection = newSortDirection;
                  setQueryParams();
                }}
                items={items}
                pageSize={pageSize}
                onPageSizeChange={newPageSize => {
                  pageSize = newPageSize;
                  setQueryParams();
                }}
                pageNumber={pageNumber}
                onPageNumberChange={newPageNumber => {
                  pageNumber = newPageNumber;
                  setQueryParams();
                }}
              />
            )}
          </Fragment>
        )}
      </Body>
    </Fragment>
  );

  function makeQueryParams() {
    return queryString.stringify({
      search: searchPhrase,
      sort_direction: sortDirection,
      sort_type: "label",
      "page[size]": String(pageSize),
      "page[number]": String(pageNumber)
    });
  }
  function setQueryParams() {
    const newQuery = makeQueryParams();
    window.history.pushState("", "", window.location.origin + window.location.pathname + "?" + newQuery);
    setQuery(newQuery);
  }
};

export default ListingPage;
