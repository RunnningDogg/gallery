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

/**
 * 根据一天后的留存率，假设指数函数的近似,反算出S的值应该是多少
 * y = L + (1-L) exp(t/-S)
 * @param rention 表示一天后知识的留存率，以第一天为100为例子
 */
function calculateSFromRetentionDayOne(rention: number, L: number): number {
  return -1 / Math.log((rention - L) / (1 - L));
}

/**
 * 艾宾浩斯遗忘曲线近似函数
 * @param t x坐标
 * @param S 衰减系数
 * @param [L=0.21] 这是t趋向于无穷大的时候, 指数函数趋向的值
 * @param [alpha=1] 默认的衰减系数
 * @returns
 */
function calculateRetention(
  t: number,
  S: number,
  L: number = 0.21,
  alpha: number = 1,
): number {
  const rentionRate = L + (1 - L) * Math.exp(-(t ** alpha) / S);
  return Math.floor(100 * rentionRate);
}

// 按照百度百科的说法,第一天后的留存率是33%
const S1 = calculateSFromRetentionDayOne(0.33, 0.2);
const S2 = calculateSFromRetentionDayOne(0.45, 0.3);
const S3 = calculateSFromRetentionDayOne(0.57, 0.4);

const rangeData = Array.from({ length: 15 }, (_, idx) => {
  return {
    day: idx,
    // retention: ebbinghausRetention(idx),
    retention1: calculateRetention(idx, S1, 0.21, 0.5),
    retention2: calculateRetention(idx, S2, 0.42, 0.5),
    retention3: calculateRetention(idx, S3, 0.63, 0.5),
  };
});

/**
 * 艾宾浩斯遗忘曲线
 * @param time
 * @returns
 */
function ebbinghausRetention(time: number) {
  const percentage = 100 / (1 + 1.08 * Math.pow(time, 0.21));
  return Math.floor(percentage); // 使用 Math.floor 来只保留整数部分
}

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
          dataKey="retention1"
          stroke="#8884d8"
          activeDot={{ r: 8 }}
        />
        <Line type="monotone" dataKey="retention2" stroke="#82ca9d" />
        <Line type="monotone" dataKey="retention3" stroke="#d8b884" />
        {/* <Line type="monotone" dataKey="retention3" stroke="#ca8282" /> */}
      </LineChart>
    </ResponsiveContainer>
  );
}
