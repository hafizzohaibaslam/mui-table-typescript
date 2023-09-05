import React from 'react';
import TableContainer from '@mui/material/TableContainer';
import Table from '@mui/material/Table';
import TableHead from '@mui/material/TableHead';
import TableBody from '@mui/material/TableBody';
import TableRow from '@mui/material/TableRow';
import TableCell from '@mui/material/TableCell';
import IconButton from '@mui/material/IconButton';
import Paper from '@mui/material/Paper';
import Collapse from '@mui/material/Collapse';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import { RowData, rows } from './TableData'; 


interface TableMainContainerProps {
  toggleRow: (index: number) => void;
  openRows: boolean[];
}

const TableMainContainer: React.FC<TableMainContainerProps> = ({
  toggleRow,
  openRows,
}) => {
  return (
    <TableContainer component={Paper} className="custom-table-container">
      <Table aria-label="collapsible table" className="custom-table">
        <TableHead>
          <TableRow className="table-header-row">
            <TableCell />
            <TableCell>Item Name</TableCell>
            <TableCell align="right">Calories</TableCell>
            <TableCell align="right">Fat (g)</TableCell>
            <TableCell align="right">Carbs (g)</TableCell>
            <TableCell align="right">Protein (g)</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row, index) => (
            <React.Fragment key={row.name}>
              <TableRow
                className="table-row"
                style={{ padding: '0', margin: '0' }}
              >
                <TableCell>
                  <IconButton
                    aria-label="expand row"
                    size="small"
                    onClick={() => toggleRow(index)}
                  >
                    {openRows[index] ? <RemoveIcon /> : <AddIcon />}
                  </IconButton>
                </TableCell>
                <TableCell>{row.name}</TableCell>
                <TableCell align="right">{row.calories}</TableCell>
                <TableCell align="right">{row.fat}</TableCell>
                <TableCell align="right">{row.carbs}</TableCell>
                <TableCell align="right">{row.protein}</TableCell>
              </TableRow>
              <TableRow>
                <TableCell colSpan={6} style={{ padding: '0', margin: '0' }}>
                  <Collapse in={openRows[index]} timeout="auto" unmountOnExit>
                    <div className="additional-details">
                      <p className="details-title">Additional Details:</p>
                      <div className="details-grid">
                        <div className="detail-column">
                          <p>
                            <strong>Price:</strong> ${row.price}
                          </p>
                          <p>
                            <strong>Calories:</strong> {row.calories} kcal
                          </p>
                        </div>
                        <div className="detail-column">
                          <p>
                            <strong>Protein:</strong> {row.protein} g
                          </p>
                        </div>
                        <div className="detail-column">
                          <p>
                            <strong>Fat:</strong> {row.fat} g
                          </p>
                          <p>
                            <strong>Carbs:</strong> {row.carbs} g
                          </p>
                        </div>
                        <div className="detail-column">
                          <p>
                            <strong>Fat:</strong> {row.fat} g
                          </p>
                          <p>
                            <strong>Carbs:</strong> {row.carbs} g
                          </p>
                        </div>
                      </div>
                    </div>
                  </Collapse>
                </TableCell>
              </TableRow>
            </React.Fragment>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default TableMainContainer;
