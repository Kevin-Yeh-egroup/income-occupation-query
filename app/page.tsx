"use client"

import { useState, useMemo } from "react"
import { SearchBar } from "@/components/search-bar"
import { CategoryTabs } from "@/components/category-tabs"
import { ResultCard } from "@/components/result-card"
import { DetailModal } from "@/components/detail-modal"
import { Tabs, TabsContent } from "@/components/ui/tabs"
import { incomeCategories, occupationCategories, type IncomeCategory, type OccupationCategory } from "@/lib/income-data"
import { Calculator, FileText, Briefcase } from "lucide-react"

export default function HomePage() {
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedItem, setSelectedItem] = useState<IncomeCategory | OccupationCategory | null>(null)
  const [selectedType, setSelectedType] = useState<"income" | "occupation">("income")
  const [isModalOpen, setIsModalOpen] = useState(false)

  // 搜尋過濾邏輯
  const filteredIncomeCategories = useMemo(() => {
    if (!searchQuery.trim()) return incomeCategories

    const query = searchQuery.toLowerCase().trim()
    return incomeCategories.filter(
      (item) =>
        item.name.toLowerCase().includes(query) ||
        item.code.toLowerCase().includes(query) ||
        (item.description && item.description.toLowerCase().includes(query)) ||
        (item.examples && item.examples.some((example) => example.toLowerCase().includes(query))) ||
        (item.notes && item.notes.toLowerCase().includes(query)),
    )
  }, [searchQuery])

  const filteredOccupationCategories = useMemo(() => {
    if (!searchQuery.trim()) return occupationCategories

    const query = searchQuery.toLowerCase().trim()
    return occupationCategories.filter(
      (item) =>
        item.name.toLowerCase().includes(query) ||
        item.code.toLowerCase().includes(query) ||
        (item.category && item.category.toLowerCase().includes(query)),
    )
  }, [searchQuery])

  const handleItemClick = (item: IncomeCategory | OccupationCategory, type: "income" | "occupation") => {
    setSelectedItem(item)
    setSelectedType(type)
    setIsModalOpen(true)
  }

  const handleCloseModal = () => {
    setIsModalOpen(false)
    setSelectedItem(null)
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b bg-card/50 backdrop-blur-sm sticky top-0 z-40">
        <div className="container mx-auto px-4 py-6">
          <div className="text-center mb-6">
            <div className="flex items-center justify-center gap-3 mb-2">
              <div className="p-2 rounded-lg bg-primary/10">
                <Calculator className="h-8 w-8 text-primary" />
              </div>
              <h1 className="text-3xl font-bold text-foreground">所得類別及職務類別查詢器</h1>
            </div>
            <p className="text-muted-foreground text-lg">快速查詢所得類別與職務類別的代碼、名稱及扣繳稅率資訊</p>
          </div>

          <SearchBar onSearch={setSearchQuery} placeholder="輸入名稱或代碼進行搜尋..." />
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8">
        <Tabs defaultValue="income" className="w-full">
          <CategoryTabs />
          
          {/* Income Tab Content */}
          <TabsContent value="income" className="space-y-6">
            <div className="text-center">
              <div className="flex items-center justify-center gap-2 mb-2">
                <FileText className="h-5 w-5 text-primary" />
                <h2 className="text-xl font-semibold">所得類別</h2>
              </div>
              <p className="text-muted-foreground">
                {searchQuery
                  ? `找到 ${filteredIncomeCategories.length} 個結果`
                  : `共 ${incomeCategories.length} 個所得類別`}
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredIncomeCategories.map((item) => (
                <ResultCard
                  key={item.code}
                  code={item.code}
                  name={item.name}
                  taxRate={item.taxRate}
                  description={item.description}
                  healthInsuranceCode={item.healthInsuranceCode}
                  healthInsuranceName={item.healthInsuranceName}
                  type="income"
                  onClick={() => handleItemClick(item, "income")}
                  exemptionLimit={item.exemptionLimit}
                  withholdingThreshold={item.withholdingThreshold}
                />
              ))}
            </div>

            {filteredIncomeCategories.length === 0 && searchQuery && (
              <div className="text-center py-12">
                <FileText className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
                <h3 className="text-lg font-medium mb-2">找不到相關的所得類別</h3>
                <p className="text-muted-foreground">請嘗試使用不同的關鍵字或檢查拼寫</p>
              </div>
            )}
          </TabsContent>

          {/* Occupation Tab Content */}
          <TabsContent value="occupation" className="space-y-6">
            <div className="text-center">
              <div className="flex items-center justify-center gap-2 mb-2">
                <Briefcase className="h-5 w-5 text-primary" />
                <h2 className="text-xl font-semibold">職務類別</h2>
              </div>
              <p className="text-muted-foreground">
                {searchQuery
                  ? `找到 ${filteredOccupationCategories.length} 個結果`
                  : `共 ${occupationCategories.length} 個職務類別`}
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredOccupationCategories.map((item) => (
                <ResultCard
                  key={item.code}
                  code={item.code}
                  name={item.name}
                  taxRate={item.taxRate}
                  type="occupation"
                  onClick={() => handleItemClick(item, "occupation")}
                  category={item.category}
                />
              ))}
            </div>

            {filteredOccupationCategories.length === 0 && searchQuery && (
              <div className="text-center py-12">
                <Briefcase className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
                <h3 className="text-lg font-medium mb-2">找不到相關的職務類別</h3>
                <p className="text-muted-foreground">請嘗試使用不同的關鍵字或檢查拼寫</p>
              </div>
            )}
          </TabsContent>
        </Tabs>
      </main>

      {/* Footer */}
      <footer className="border-t bg-card/50 mt-16">
        <div className="container mx-auto px-4 py-8">
          <div className="text-center text-sm text-muted-foreground">
            <p>© 2024 所得類別及職務類別查詢器</p>
            <p className="mt-1">資料來源：財政部財政資訊中心</p>
          </div>
        </div>
      </footer>

      {/* Detail Modal */}
      <DetailModal isOpen={isModalOpen} onClose={handleCloseModal} data={selectedItem} type={selectedType} />
    </div>
  )
}
