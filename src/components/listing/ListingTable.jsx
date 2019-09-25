import React from "react";
import { makeStyles } from "@material-ui/core";
import {
  Paper,
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
  TableSortLabel,
  TableFooter
} from "@material-ui/core";
import ListingTablePagination from "./ListingTablePagination";

const useStyles = makeStyles(theme => ({
  tableRoot: {
    marginTop: theme.spacing(1.5)
  }
}));

const ListingTable = ({
  totalItemsCount,
  sortDirection,
  onSortDirectionChange,
  items,
  pageSize,
  onPageSizeChange,
  pageNumber,
  onPageNumberChange
}) => {
  const classes = useStyles();

  return (
    <Paper classes={{ root: classes.tableRoot }}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Type</TableCell>
            <TableCell sortDirection={sortDirection}>
              <TableSortLabel
                active={true}
                direction={sortDirection}
                onClick={() =>
                  onSortDirectionChange(
                    sortDirection === "asc" ? "desc" : "asc"
                  )
                }
                classes={{ root: "listing-sort-direction-selector" }}
              >
                Label
              </TableSortLabel>
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody className="listing-table-body-selector">
          {items.map((item, index) => (
            <TableRow key={index}>
              <TableCell>{item.type}</TableCell>
              <TableCell>{item.label}</TableCell>
            </TableRow>
          ))}
        </TableBody>
        <TableFooter>
          <TableRow>
            <ListingTablePagination
              totalItemsCount={totalItemsCount}
              pageSize={pageSize}
              pageNumber={pageNumber}
              onPageNumberChange={onPageNumberChange}
              onPageSizeChange={onPageSizeChange}
            />
          </TableRow>
        </TableFooter>
      </Table>
    </Paper>
  );
};

export default ListingTable;
