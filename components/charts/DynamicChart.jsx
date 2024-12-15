import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const DynamicChart = ({ data, title, dataKey, color }) => {
  const validData = Array.isArray(data) ? data : [];

  return (
    <div className="w-full p-4">
      <h3 className="text-center mb-4 font-bold">{title}</h3>
      <ResponsiveContainer width="100%" height={400}>
        <LineChart data={validData}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis
            dataKey="timestamp"
            tickFormatter={(value) => {
              try {
                return new Date(value).toLocaleTimeString();
              } catch (e) {
                return "";
              }
            }}
          />
          <YAxis domain={[0, "auto"]} />
          <Tooltip
            labelFormatter={(value) => {
              try {
                return new Date(value).toLocaleTimeString();
              } catch (e) {
                return "";
              }
            }}
            formatter={(value) => [Number(value).toFixed(2), ""]}
          />
          <Line
            type="monotone"
            dataKey={dataKey}
            stroke={color}
            dot={false}
            isAnimationActive={false}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default DynamicChart;
