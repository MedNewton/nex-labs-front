import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import DataTable, { TableColumn } from "react-data-table-component";
import Select from "react-dropdown-select";

// State
import useTradeStore from "~/store/tradeStore";

interface DataRow {
  symbol: string;
  last: number;
  change: number;
  changePct: number;
}

const DrawerContent: React.FC = () => {
  const [tableType, setTableType] = useState("indices");

  const tableTypes = [
    {
        key: 1,
        value: "indices",
        label: "Indices"
    },
    {
        key: 2,
        value: "forex",
        label: "Forex"
    },
    {
        key: 3,
        value: "nfpc",
        label: "NFT Floor Price Collection"
    },
    {
        key: 4,
        value: "commodities",
        label: "Commodities"
    },
    {
        key: 5,
        value: "commodities_index",
        label: "Commodities Index"
    }
    
  ];

  const columns: TableColumn<DataRow>[] = [
    {
      name: "Symbol",
      selector: (row) => row.symbol,
      style: {
        fontWeight: "700",
      },
      sortable: true,
    },
    {
      name: "Last",
      selector: (row) => row.last,
      sortable: true,
    },
    {
      name: "Chg",
      selector: (row) => row.change,
      conditionalCellStyles: [
        {
          when: (row) => row.change < 0,
          style: {
            color: "#FF0800",
          },
        },
      ],
      sortable: true,
    },
    {
      name: "Chg%",
      selector: (row) => row.changePct,
      conditionalCellStyles: [
        {
          when: (row) => row.changePct < 0,
          style: {
            color: "#FF0800",
          },
        },
      ],
      sortable: true,
    },
  ];

  const data = [
    {
      symbol: "VIX",
      last: 14.6,
      change: -0.4,
      changePct: -2.06,
    },
    {
      symbol: "GSPC",
      last: 14.6,
      change: -0.4,
      changePct: -2.06,
    },
    {
      symbol: "DJI",
      last: 14.6,
      change: -0.4,
      changePct: -2.06,
    },
    {
      symbol: "IXIC",
      last: 14.6,
      change: -0.4,
      changePct: -2.06,
    },
    {
      symbol: "NYA",
      last: 14.6,
      change: -0.4,
      changePct: -2.06,
    },
    {
      symbol: "N100",
      last: 14.6,
      change: -0.4,
      changePct: -2.06,
    },
    {
      symbol: "VIX",
      last: 14.6,
      change: -0.4,
      changePct: -2.06,
    },
    {
      symbol: "GSPC",
      last: 14.6,
      change: -0.4,
      changePct: -2.06,
    },
    {
      symbol: "DJI",
      last: 14.6,
      change: -0.4,
      changePct: -2.06,
    },
    {
      symbol: "IXIC",
      last: 14.6,
      change: -0.4,
      changePct: -2.06,
    },
    {
      symbol: "NYA",
      last: 14.6,
      change: -0.4,
      changePct: -2.06,
    },
    {
      symbol: "N100",
      last: 14.6,
      change: -0.4,
      changePct: -2.06,
    },
  ];

  const customStyles = {
    table: {
      style: {
        backgroundColor: "transparent",
        maxHeight: "45vh",
        overflowY: "scroll",
        scrollbarColor: "red yellow",
        marginTop: "2%"
      },
    },
    head: {
      style: {
        backgroundColor: "transparent",
        color: "#fff",
        fontFace: "CircularBold",
        fontSize: "14px",
      },
    },
    headRow: {
      style: {
        backgroundColor: "transparent",
        color: "#fff",
        fontFace: "CircularBold",
      },
    },
    rows: {
      style: {
        backgroundColor: "transparent",
      },
    },
    headCells: {
      style: {
        backgroundColor: "transparent",
      },
    },
    cells: {
      style: {
        backgroundColor: "transparent",
        color: "#fff",
        fontFace: "CircularBold",
      },
    },
  };

  return (
    <div className=" flex h-fit w-full flex-col items-start justify-start overflow-y-auto overflow-x-hidden">
      <div className="bprder-l-0 h-1/2 w-full border border-r-0 border-t-0 border-solid border-b-white pb-0 pt-4">
        <Select
          options={tableTypes}
          values={[]}
          onChange={(value) => console.log(value[0])}
          color="#fff"
        />
        <DataTable columns={columns} data={data} customStyles={customStyles} />
      </div>
    </div>
  );
};

export default DrawerContent;
