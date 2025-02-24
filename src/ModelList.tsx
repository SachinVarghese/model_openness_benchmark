import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { TableVirtuoso, TableComponents } from 'react-virtuoso';
import Badge from "./Badge.tsx"

interface ModelData {
  id: number;
  name: string;
  org: string;
  url: string;
  class: number;
}

interface ColumnData {
  dataKey: keyof ModelData;
  label: string;
  width?: number;
}

const columns: ColumnData[] = [
  {
    width: 100,
    label: 'Model Name',
    dataKey: 'name',
  },
  {
    width: 100,
    label: 'Organization',
    dataKey: 'org',
  },
  {
    width: 150,
    label: 'MOF Class',
    dataKey: 'class',
  }
];

const VirtuosoTableComponents: TableComponents<ModelData> = {
  Scroller: React.forwardRef<HTMLDivElement>((props, ref) => (
    <TableContainer component={Paper} {...props} ref={ref} sx={{ bgcolor: "transparent" }} />
  )),
  Table: (props) => (
    <Table {...props} sx={{ borderCollapse: 'separate', tableLayout: 'fixed' }} />
  ),
  TableHead: React.forwardRef<HTMLTableSectionElement>((props, ref) => (
    <TableHead {...props} ref={ref} />
  )),
  TableRow,
  TableBody: React.forwardRef<HTMLTableSectionElement>((props, ref) => (
    <TableBody {...props} ref={ref} />
  )),
};

function fixedHeaderContent() {
  return (
    <TableRow sx={{ bgcolor: "black" }}>
      {columns.map((column) => (
        <TableCell
          key={column.dataKey}
          variant="head"
          align={'center'}
          style={{ width: column.width, color: "white", borderTop: '1px solid white' }}
        >
          {column.label}
        </TableCell>
      ))}
    </TableRow>
  );
}

function rowContent(_index: number, row: ModelData) {
  return (
    <React.Fragment>
      <TableCell
        key={"name"}
        align={'center'}
        sx={{ color: "white", border: 'none' }}
      >
        <a href={`https://github.com/lfai/model_openness_tool/blob/main${row["url"]}`}>{row["name"]}</a>
      </TableCell>
      <TableCell
        key={"org"}
        align={'center'}
        sx={{ color: "white", border: 'none' }}
      >
        <span >{row["org"]}</span>
      </TableCell>
      <TableCell
        key={"class"}
        align={'center'}
        sx={{ color: "white", border: 'none' }}
      >
        {Badge()}
      </TableCell>
    </React.Fragment>
  );
}

interface ModelListProps {
  models: ModelData[]
}

export default function ModelList(props: ModelListProps) {
  return (
    <div style={{ height: "calc(100% - 160px)", width: "100%" }} >
      <TableVirtuoso
        data={props.models}
        components={VirtuosoTableComponents}
        fixedHeaderContent={fixedHeaderContent}
        itemContent={rowContent}
      />
    </div>
  );
}
