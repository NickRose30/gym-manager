import * as React from 'react';
import Paper from '@mui/material/Paper';
import MUITable from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex: 1;
  .MuiPaper-root {
    flex: 1;
    display: flex;
    flex-direction: column;
  }
  .MuiTableContainer-root {
    flex: 1 0 0 !important;
  }
  .MuiTableRow-root {
    :hover {
      cursor: pointer;
    }
  }
`;

const Table = ({ onRowClick, rows = [], columns = [] }) => {
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  return (
    <Container>
      <Paper sx={{ width: '100%', overflow: 'hidden' }}>
        <TableContainer sx={{ height: 100 }}>
          <MUITable stickyHeader aria-label="sticky table">
            <TableHead>
              <TableRow>
                {columns.map((column) => (
                  <TableCell
                    key={column.id}
                    align={column.align}
                    style={{ minWidth: column.minWidth }}
                  >
                    {column.label}
                  </TableCell>
                ))}
              </TableRow>
            </TableHead>
            <TableBody>
              {rows
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map((row, i) => {
                  return (
                    <TableRow hover role="checkbox" tabIndex={-1} key={i} onClick={() => onRowClick(row)}>
                      {columns.map((column, j) => {
                        const value = row[column.id];
                        return (
                          <TableCell key={j} align={column.align}>
                            {!column.format && !column.columnRenderer && value}
                            {column.format && !column.columnRenderer && column.format(value)}
                            {column.columnRenderer && <column.columnRenderer value={value} />}
                          </TableCell>
                        );
                      })}
                    </TableRow>
                  );
                })}
            </TableBody>
          </MUITable>
        </TableContainer>
        <TablePagination
          rowsPerPageOptions={[10, 25, 100]}
          component="div"
          count={rows.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      </Paper>
    </Container>
  );
};

export default Table;