"use client"

import {
  Bar,
  BarChart as RechartsBarChart,
  Line,
  LineChart as RechartsLineChart,
  Pie,
  PieChart as RechartsPieChart,
  Scatter,
  ScatterChart as RechartsScatterChart,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  Cell,
  ResponsiveContainer,
} from "recharts"

interface ChartPreviewProps {
  chartType: string
  xColumn: string
  yColumn: string
}

export function ChartPreview({ chartType, xColumn, yColumn }: ChartPreviewProps) {
  // Mock data - in a real app, this would come from your backend
  const data = [
    { name: "18-24", Age: 20, Income: 30000, CreditScore: 650 },
    { name: "25-34", Age: 30, Income: 50000, CreditScore: 700 },
    { name: "35-44", Age: 40, Income: 70000, CreditScore: 750 },
    { name: "45-54", Age: 50, Income: 90000, CreditScore: 780 },
    { name: "55-64", Age: 60, Income: 80000, CreditScore: 800 },
    { name: "65+", Age: 70, Income: 60000, CreditScore: 820 },
  ]

  const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042", "#8884D8", "#82ca9d"]

  if (!xColumn || !yColumn) {
    return (
      <div className="flex h-full items-center justify-center text-muted-foreground">
        Select columns to preview chart
      </div>
    )
  }

  return (
    <ResponsiveContainer width="100%" height="100%">
      {chartType === "bar" ? (
        <RechartsBarChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey={yColumn} fill="#8884d8" />
        </RechartsBarChart>
      ) : chartType === "line" ? (
        <RechartsLineChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey={yColumn} stroke="#8884d8" />
        </RechartsLineChart>
      ) : chartType === "pie" ? (
        <RechartsPieChart>
          <Pie data={data} dataKey={yColumn} nameKey="name" cx="50%" cy="50%" outerRadius={80} label>
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
          <Tooltip />
          <Legend />
        </RechartsPieChart>
      ) : (
        <RechartsScatterChart>
          <CartesianGrid />
          <XAxis type="number" dataKey={xColumn} name={xColumn} />
          <YAxis type="number" dataKey={yColumn} name={yColumn} />
          <Tooltip cursor={{ strokeDasharray: "3 3" }} />
          <Legend />
          <Scatter name="Data Points" data={data} fill="#8884d8" />
        </RechartsScatterChart>
      )}
    </ResponsiveContainer>
  )
}
