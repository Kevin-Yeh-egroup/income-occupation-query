"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ChevronRight, FileText, Briefcase, AlertCircle } from "lucide-react"

interface ResultCardProps {
  code: string
  name: string
  taxRate: {
    resident: string
    nonResident: string
  }
  description?: string
  healthInsuranceCode?: string
  healthInsuranceName?: string
  type: "income" | "occupation"
  onClick: () => void
  exemptionLimit?: string
  withholdingThreshold?: string
  category?: string
}

export function ResultCard({
  code,
  name,
  taxRate,
  description,
  healthInsuranceCode,
  healthInsuranceName,
  type,
  onClick,
  exemptionLimit,
  withholdingThreshold,
  category,
}: ResultCardProps) {
  const Icon = type === "income" ? FileText : Briefcase

  return (
    <Card className="hover:shadow-lg transition-shadow cursor-pointer group" onClick={onClick}>
      <CardHeader className="pb-3">
        <div className="flex items-start justify-between">
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-lg bg-primary/10">
              <Icon className="h-5 w-5 text-primary" />
            </div>
            <div>
              <CardTitle className="text-lg group-hover:text-primary transition-colors">{name}</CardTitle>
              <CardDescription className="text-sm font-mono">代碼: {code}</CardDescription>
              {category && (
                <CardDescription className="text-xs text-muted-foreground mt-1">類別: {category}</CardDescription>
              )}
            </div>
          </div>
          <ChevronRight className="h-5 w-5 text-muted-foreground group-hover:text-primary transition-colors" />
        </div>
      </CardHeader>
      <CardContent className="pt-0">
        {description && <p className="text-sm text-muted-foreground mb-3 line-clamp-2">{description}</p>}
        <div className="space-y-2">
          <div className="flex flex-wrap gap-2">
            <Badge variant="secondary" className="text-xs">
              居住者: {taxRate.resident}
            </Badge>
            <Badge variant="outline" className="text-xs">
              非居住者: {taxRate.nonResident}
            </Badge>
          </div>
          {exemptionLimit && (
            <div className="flex items-center gap-1 text-xs text-green-600">
              <AlertCircle className="h-3 w-3" />
              免稅額度: {exemptionLimit}
            </div>
          )}
          {withholdingThreshold && (
            <div className="text-xs text-muted-foreground">起扣標準: {withholdingThreshold}</div>
          )}
          {healthInsuranceCode && healthInsuranceName && (
            <div className="text-xs text-muted-foreground">
              補充健保: {healthInsuranceCode} - {healthInsuranceName}
            </div>
          )}
        </div>
      </CardContent>
    </Card>
  )
}
