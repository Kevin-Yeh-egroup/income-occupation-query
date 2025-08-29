"use client"

import type React from "react"

import { TabsList, TabsTrigger } from "@/components/ui/tabs"

export function CategoryTabs() {
  return (
    <TabsList className="grid w-full grid-cols-2 mb-8">
      <TabsTrigger value="income" className="text-lg py-3">
        所得類別
      </TabsTrigger>
      <TabsTrigger value="occupation" className="text-lg py-3">
        職務類別
      </TabsTrigger>
    </TabsList>
  )
}
