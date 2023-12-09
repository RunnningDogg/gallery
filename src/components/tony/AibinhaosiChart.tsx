"use client";
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
import React from "react";

type Props = {};

function memoryRetention(time: number) {
  const initialRetention = 100; // R0，初始保留率
  const decayParameter = 5; // s，衰减速度参数，这个需要通过试验来调整以匹配图表的实际数据
  const retention = initialRetention * Math.exp(-time / decayParameter);
  return parseFloat(retention.toFixed(2));
}

function ebbinghausRetention(time: number) {
  const percentage = 100 / (1 + 1.08 * Math.pow(time, 0.21));
  return Math.floor(percentage); // 使用 Math.floor 来只保留整数部分
}

console.log(memoryRetention(1));

const rangeData = Array.from({ length: 15 }, (_, idx) => {
  return {
    day: idx,
    retention: ebbinghausRetention(idx),
  };
});

export default function AibinhaosiChart({}: Props) {
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
          dataKey="retention"
          stroke="#8884d8"
          activeDot={{ r: 8 }}
        />
      </LineChart>
    </ResponsiveContainer>
  );
}
