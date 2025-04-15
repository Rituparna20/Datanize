"use client"

import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

export function MissingValuesTable() {
  // Mock data - in a real app, this would come from your backend
  const missingValues = [
    { variable: "Age", count: 25, dataType: "numeric", strategy: "mean" },
    { variable: "Income", count: 15, dataType: "numeric", strategy: "median" },
    { variable: "Education", count: 10, dataType: "categorical", strategy: "most_frequent" },
    { variable: "Occupation", count: 30, dataType: "categorical", strategy: "most_frequent" },
  ]

  return (
    <div className="space-y-4">
      <div className="rounded-md border">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Variable</TableHead>
              <TableHead>Missing Count</TableHead>
              <TableHead>Data Type</TableHead>
              <TableHead>Strategy</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {missingValues.map((row) => (
              <TableRow key={row.variable}>
                <TableCell>{row.variable}</TableCell>
                <TableCell>{row.count}</TableCell>
                <TableCell>{row.dataType}</TableCell>
                <TableCell>
                  <Select defaultValue={row.strategy}>
                    <SelectTrigger className="w-32">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      {row.dataType === "numeric" ? (
                        <>
                          <SelectItem value="mean">Mean</SelectItem>
                          <SelectItem value="median">Median</SelectItem>
                          <SelectItem value="constant">Constant</SelectItem>
                        </>
                      ) : (
                        <>
                          <SelectItem value="most_frequent">Most Frequent</SelectItem>
                          <SelectItem value="constant">Constant</SelectItem>
                        </>
                      )}
                      <SelectItem value="drop">Drop</SelectItem>
                    </SelectContent>
                  </Select>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  )
}
