"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { MissingValuesTable } from "@/components/missing-values-table"
import { FeatureSelectionForm } from "@/components/feature-selection-form"
import { EncodingForm } from "@/components/encoding-form"
import { DataSplitForm } from "@/components/data-split-form"
import { FolderSelection } from "@/components/folder-selection"

export default function PreprocessPage() {
  const [activeTab, setActiveTab] = useState("missing-values")

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Data Preprocessing</h1>
        <p className="text-muted-foreground">Clean, transform, and prepare your data for analysis</p>
      </div>

      <FolderSelection />

      <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-4">
        <TabsList className="grid grid-cols-4 w-full">
          <TabsTrigger value="missing-values">Missing Values</TabsTrigger>
          <TabsTrigger value="encoding">Encoding</TabsTrigger>
          <TabsTrigger value="feature-selection">Feature Selection</TabsTrigger>
          <TabsTrigger value="data-split">Data Split</TabsTrigger>
        </TabsList>

        <TabsContent value="missing-values" className="space-y-4">
          <MissingValuesTable />
        </TabsContent>

        <TabsContent value="encoding" className="space-y-4">
          <EncodingForm />
        </TabsContent>

        <TabsContent value="feature-selection" className="space-y-4">
          <FeatureSelectionForm />
        </TabsContent>

        <TabsContent value="data-split" className="space-y-4">
          <DataSplitForm />
        </TabsContent>
      </Tabs>

      <div className="flex justify-end">
        <Button onClick={() => console.log("Processing data...")}>Process Data</Button>
      </div>
    </div>
  )
}
