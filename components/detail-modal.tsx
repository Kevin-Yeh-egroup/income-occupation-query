"use client"

import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { FileText, Briefcase, Users, Calculator, AlertCircle, BookOpen, Info } from "lucide-react"
import type { IncomeCategory, OccupationCategory } from "@/lib/income-data"

interface DetailModalProps {
  isOpen: boolean
  onClose: () => void
  data: IncomeCategory | OccupationCategory | null
  type: "income" | "occupation"
}

export function DetailModal({ isOpen, onClose, data, type }: DetailModalProps) {
  if (!data) return null

  const Icon = type === "income" ? FileText : Briefcase
  const isIncomeData = type === "income" && "description" in data
  const incomeData = data as IncomeCategory
  const occupationData = data as OccupationCategory

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <div className="flex items-center gap-3 mb-2">
            <div className="p-3 rounded-lg bg-primary/10">
              <Icon className="h-6 w-6 text-primary" />
            </div>
            <div>
              <DialogTitle className="text-xl">{data.name}</DialogTitle>
              <DialogDescription className="font-mono text-base">代碼: {data.code}</DialogDescription>
              {isIncomeData && incomeData.formatCode && (
                <DialogDescription className="font-mono text-sm text-muted-foreground">
                  格式代碼: {incomeData.formatCode}
                </DialogDescription>
              )}
              {!isIncomeData && occupationData.category && (
                <DialogDescription className="text-sm text-muted-foreground">
                  類別: {occupationData.category}
                </DialogDescription>
              )}
            </div>
          </div>
        </DialogHeader>

        <div className="space-y-6">
          {data.description && (
            <div>
              <h3 className="font-semibold mb-2 flex items-center gap-2">
                <FileText className="h-4 w-4" />
                說明
              </h3>
              <p className="text-muted-foreground">{data.description}</p>
            </div>
          )}

          <Separator />

          <div>
            <h3 className="font-semibold mb-3 flex items-center gap-2">
              <Calculator className="h-4 w-4" />
              扣繳稅率
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="p-4 rounded-lg bg-card border">
                <h4 className="font-medium mb-2 flex items-center gap-2">
                  <Users className="h-4 w-4" />
                  居住者
                </h4>
                <Badge variant="secondary" className="text-sm">
                  {data.taxRate.resident}
                </Badge>
              </div>
              <div className="p-4 rounded-lg bg-card border">
                <h4 className="font-medium mb-2 flex items-center gap-2">
                  <Users className="h-4 w-4" />
                  非居住者
                </h4>
                <Badge variant="outline" className="text-sm">
                  {data.taxRate.nonResident}
                </Badge>
              </div>
            </div>
          </div>

          {isIncomeData && (incomeData.exemptionLimit || incomeData.withholdingThreshold) && (
            <>
              <Separator />
              <div>
                <h3 className="font-semibold mb-3 flex items-center gap-2">
                  <AlertCircle className="h-4 w-4" />
                  稅務資訊
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {incomeData.exemptionLimit && (
                    <div className="p-4 rounded-lg bg-green-50 border border-green-200">
                      <h4 className="font-medium mb-2 text-green-800">免稅額度</h4>
                      <Badge variant="secondary" className="bg-green-100 text-green-800">
                        {incomeData.exemptionLimit}
                      </Badge>
                    </div>
                  )}
                  {incomeData.withholdingThreshold && (
                    <div className="p-4 rounded-lg bg-blue-50 border border-blue-200">
                      <h4 className="font-medium mb-2 text-blue-800">起扣標準</h4>
                      <Badge variant="secondary" className="bg-blue-100 text-blue-800">
                        {incomeData.withholdingThreshold}
                      </Badge>
                    </div>
                  )}
                </div>
              </div>
            </>
          )}

          {isIncomeData && incomeData.healthInsuranceCode && (
            <>
              <Separator />
              <div>
                <h3 className="font-semibold mb-3">補充健保資訊</h3>
                <div className="p-4 rounded-lg bg-card border">
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">代碼:</span>
                      <span className="font-mono">{incomeData.healthInsuranceCode}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">名稱:</span>
                      <span>{incomeData.healthInsuranceName}</span>
                    </div>
                    {incomeData.feeCategory && (
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">費用別:</span>
                        <span className="font-mono">{incomeData.feeCategory}</span>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </>
          )}

          {isIncomeData && incomeData.examples && incomeData.examples.length > 0 && (
            <>
              <Separator />
              <div>
                <h3 className="font-semibold mb-3 flex items-center gap-2">
                  <BookOpen className="h-4 w-4" />
                  適用範例
                </h3>
                <div className="space-y-2">
                  {incomeData.examples.map((example, index) => (
                    <div key={index} className="p-3 rounded-lg bg-muted/50 border">
                      <p className="text-sm">{example}</p>
                    </div>
                  ))}
                </div>
              </div>
            </>
          )}

          {isIncomeData && incomeData.notes && (
            <>
              <Separator />
              <div>
                <h3 className="font-semibold mb-3 flex items-center gap-2">
                  <Info className="h-4 w-4" />
                  注意事項
                </h3>
                <div className="p-4 rounded-lg bg-amber-50 border border-amber-200">
                  <p className="text-sm text-amber-800">{incomeData.notes}</p>
                </div>
              </div>
            </>
          )}

          <Separator />

          <div className="text-xs text-muted-foreground">
            <p>* 居住者：每年1月1日起算至12月31日止，在台居留滿183天者</p>
            <p>* 非居住者：每年1月1日起算至12月31日止，在台未居留滿183天者</p>
            <p className="mt-2 font-medium">資料來源：財政部財政資訊中心、各類所得扣繳暨免扣繳項目參考</p>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}
