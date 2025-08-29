"use client"

import type React from "react"

import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"

interface CategoryTabsProps {
  children: React.ReactNode
  defaultValue?: string
}

export function CategoryTabs({ children, defaultValue = "income" }: CategoryTabsProps) {
  return (
    <Tabs defaultValue={defaultValue} className="w-full">
      <TabsList className="grid w-full grid-cols-2 mb-8">
        <TabsTrigger value="income" className="text-lg py-3">
          所得類別
        </TabsTrigger>
        <TabsTrigger value="occupation" className="text-lg py-3">
          職務類別
        </TabsTrigger>
      </TabsList>
      {children}
    </Tabs>
  )
}
