import React, { useState } from "react";
import "./CollapsibleTable.css";
import TableMainContainer from "./TableMainContainer";

interface CollapsibleTableProps {
  toggleRow: (rowIndex: number) => void;
  openRows: boolean[];
}

const CollapsibleTable: React.FC = () => {
  const [openRows, setOpenRows] = useState<boolean[]>([]);

  const toggleRow = (rowIndex: number) => {
    const updatedOpenRows = [...openRows];
    updatedOpenRows[rowIndex] = !updatedOpenRows[rowIndex];
    setOpenRows(updatedOpenRows);
  };

  return <TableMainContainer toggleRow={toggleRow} openRows={openRows} />;
}

export default CollapsibleTable;
