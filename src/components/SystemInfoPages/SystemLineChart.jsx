import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  CartesianGrid,
  ResponsiveContainer,
} from "recharts";
import { Card, Grid } from "@mui/material";

const SystemLineChart = ({ system_Info, height, heading }) => {
  console.log(system_Info, "graph");

  // Find minimum and maximum values of ghi and gti
  let minY = Infinity;
  let maxY = -Infinity;
  system_Info.forEach((entry) => {
    minY = Math.min(minY, entry.ghi, entry.gti);
    maxY = Math.max(maxY, entry.ghi, entry.gti);
  });

  // Adjust minY and maxY to create a difference of 20
  minY -= 10;
  maxY += 10;

  return (
    <Card
      sx={{
        ml: 2,
        mr: 2,
        mb: 1.1,
      }}
      elevation={6}
      style={{
        fontFamily: "Arial, sans-serif",
        padding: "15px",
        borderRadius: "10px",
        overflowX: "auto",
        borderRadius: "5px",
      }}
    >
      <h6>{heading}</h6>
      <Grid container>
        <ResponsiveContainer width="100%" height={height}>
          <LineChart data={system_Info}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="createdAt" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line
              type="monotone"
              dataKey="ghi"
              stroke="#8884d8"
              dot={{ fill: "#8884d8" }}
              curve="catmullRom"
              strokeWidth={2}
            />
            <Line
              type="monotone"
              dataKey="gti"
              stroke="#DA9619"
              dot={{ fill: "#8884d8" }}
              curve="catmullRom"
              strokeWidth={2}
            />
          </LineChart>
        </ResponsiveContainer>
      </Grid>
    </Card>
  );
};

export default SystemLineChart;
