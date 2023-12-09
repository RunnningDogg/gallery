"use client";
import React from "react";

type Props = {};
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  Brush,
} from "recharts";

const rangeData = [
  {
    day: "05-01",
    cards: Math.floor(Math.random() * 31),
    reviewedCards: Math.floor(Math.random() * 31),
  },
  {
    day: "05-02",
    cards: Math.floor(Math.random() * 31),
    reviewedCards: Math.floor(Math.random() * 31),
  },
  {
    day: "05-03",
    cards: Math.floor(Math.random() * 31),
    reviewedCards: Math.floor(Math.random() * 31),
  },
  {
    day: "05-04",
    cards: Math.floor(Math.random() * 31),
    reviewedCards: Math.floor(Math.random() * 31),
  },
  {
    day: "05-05",
    cards: Math.floor(Math.random() * 31),
    reviewedCards: Math.floor(Math.random() * 31),
  },
  {
    day: "05-06",
    cards: Math.floor(Math.random() * 31),
    reviewedCards: Math.floor(Math.random() * 31),
  },
  {
    day: "05-07",
    cards: Math.floor(Math.random() * 31),
    reviewedCards: Math.floor(Math.random() * 31),
  },
  {
    day: "05-08",
    cards: Math.floor(Math.random() * 31),
    reviewedCards: Math.floor(Math.random() * 31),
  },
  {
    day: "05-09",
    cards: Math.floor(Math.random() * 31),
    reviewedCards: Math.floor(Math.random() * 31),
  },
];

export default function LineChartDashBoard({}: Props) {
  return (
    <ResponsiveContainer width="100%" height={350} className="mr-2">
      <LineChart
        width={500}
        height={300}
        data={rangeData}
        margin={{
          top: 5,
          right: 0,
          left: 0,
          bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="day" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Line
          type="monotone"
          dataKey="cards"
          stroke="#8884d8"
          activeDot={{ r: 8 }}
        />
        <Line type="monotone" dataKey="reviewedCards" stroke="#82ca9d" />
        <Brush />
      </LineChart>
    </ResponsiveContainer>
  );
}
