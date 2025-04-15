"use client"

import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

export function EncodingForm() {
  // Mock data - in a real app, this would come from your backend
  const categoricalVariables = [
    { variable: "Gender", uniqueValues: ["Male", "Female"], encoding: "label" },
    { variable: "Education", uniqueValues: ["High School", "Bachelor", "Master", "PhD"], encoding: "label" },
    { variable: "Occupation", uniqueValues: ["Engineer", "Doctor", "Teacher", "Other"], encoding: "label" },
    { variable: "MaritalStatus", uniqueValues: ["Single", "Married", "Divorced"], encoding: "label" },
  ]

  return (
    <div className="space-y-4">
      <div className="rounded-md border">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Variable</TableHead>
              <TableHead>Unique Values</TableHead>
              <TableHead>Encoding Method</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {categoricalVariables.map((row) => (
              <TableRow key={row.variable}>
                <TableCell>{row.variable}</TableCell>
                <TableCell>{row.uniqueValues.join(", ")}</TableCell>
                <TableCell>
                  <Select defaultValue={row.encoding}>
                    <SelectTrigger className="w-32">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="label">Label Encoding</SelectItem>
                      <SelectItem value="onehot">One-Hot Encoding</SelectItem>
                      <SelectItem value="binary">Binary Encoding</SelectItem>
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
