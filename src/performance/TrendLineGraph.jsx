import React, { useEffect, useState } from "react";
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

const TrendLineGraph = ({
  system_Info,
  height,
  heading,
  y1CategoryParameters,
}) => {
  const graph = system_Info?.charts?.data || [];

  const lines = [];
  const colors = [
    "#8884d8",
    "#82ca9d",
    "#ffc658",
    "#3B71CA",
    "#DC4C64",
    "#14A44D",
    "#E4A11B",
    "#54B4D3",
    "#CC004C",
    "#6460AA",
    "#0DB14B",
    "#0089D0",
    "#81BF97",
    "#4FA9D2",
    "#DF6756",
    "#4A154B",
    "#E3B34C",
    "#CE375C",
    "#ED642B",
    "#F26C7D",
    "#3F8F8B",
    "#225675",
    "#6460AA",
    "#8FD974",
    "#83D1C4",
    "#4DAAA7",
    "#F26764",
    "#54AFBC",
    "#F9B117",
    "#5BB462",
    "#072F54",
    "#D5DF37",
    "#58B1CE",
    "#76C065",
    "#19C0FF",
    "#7894FF",
  ];

  const keys = Object.keys(graph[0] || {});
  for (let i = 1; i < keys.length; i++) {
    const key = keys[i];
    lines.push(
      <Line
        key={key}
        type="monotone"
        dataKey={key}
        stroke={colors[(i - 1) % colors.length]}
        dot={{ fill: colors[(i - 1) % colors.length] }}
        curve="catmullRom"
        strokeWidth={2}
      />
    );
  }

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
          <LineChart data={graph}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="timestamp" angle={-7} />
            <YAxis />
            <Tooltip />
            <Legend />
            {lines}
          </LineChart>
        </ResponsiveContainer>
      </Grid>
    </Card>
  );
};

export default TrendLineGraph;
