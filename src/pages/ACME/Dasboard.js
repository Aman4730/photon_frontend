import React, { useContext, useEffect, useState } from "react";
import { Stack } from "@mui/material";
import Head from "../../layout/head/Head";
import "react-datepicker/dist/react-datepicker.css";
import { UserContext } from "../../context/UserContext";
import DataGridCard from "../../components/dashboardPages/DataGridCard";
import ProgressBarchat from "../../components/dashboardPages/ProgressBarchat";
import MainLogo from "../../components/MainLogo";

const Dashboard = () => {
  // Destructure useContext variables
  const { dashboard } = useContext(UserContext);
  const [tableData, setTableData] = useState([]);
  useEffect(() => {
    getDashboardTable();
  }, []);
  //dashboard table
  const getDashboardTable = () => {
    dashboard(
      {},
      (apiRes) => {
        setTableData(apiRes?.data);
      },
      (apiErr) => {
        console.log(apiErr, "apiRes");
      }
    );
  };
  const headCells = [
    { id: "Sites", label: "Sites" },
    { id: "Capacity", label: "Capacity" },
    { id: "Network", label: "Network" },
    { id: "Status", label: "Status" },
    // { id: "Last_Event", label: "Last Event" },
    // { id: "Power_Generation", label: "Power Generation" },
    { id: "GHI", label: "GHI" },
    { id: "GTI", label: "GTI" },
    { id: "Module Temp", label: "Module Temp" },
  ];
  return (
    <React.Fragment>
      <Head title="Dashboard - Regular"></Head>
      <Stack style={{ marginTop: "75px", position: "relative" }} p={1}>
        <ProgressBarchat />
        <DataGridCard tableData={tableData} headCells={headCells} />
        <MainLogo />
      </Stack>
    </React.Fragment>
  );
};
export default Dashboard;
