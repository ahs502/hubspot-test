import React from "react";
import { TablePagination } from "@material-ui/core";

const ListingTablePagination = ({
  totalItemsCount,
  pageSize,
  pageNumber,
  onPageNumberChange,
  onPageSizeChange
}) => (
  <TablePagination
    rowsPerPageOptions={[5, 10, 20]}
    colSpan={2}
    count={totalItemsCount}
    rowsPerPage={pageSize}
    page={pageNumber - 1}
    SelectProps={{
      inputProps: { "aria-label": "rows per page" },
      native: true
    }}
    onChangePage={(event, newPage) => onPageNumberChange(Number(newPage) + 1)}
    onChangeRowsPerPage={event => onPageSizeChange(Number(event.target.value))}
  />
);

export default ListingTablePagination;
