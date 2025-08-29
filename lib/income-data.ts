export interface IncomeCategory {
  code: string
  name: string
  formatCode?: string
  taxRate: {
    resident: string
    nonResident: string
  }
  description?: string
  healthInsuranceCode?: string
  healthInsuranceName?: string
  feeCategory?: string
  examples?: string[]
  notes?: string
  exemptionLimit?: string
  withholdingThreshold?: string
}

// 執行業務者業別資料
export interface OccupationCategory {
  code: string
  name: string
  taxRate: {
    resident: string
    nonResident: string
  }
  description?: string
  category?: string
}

export const incomeCategories: IncomeCategory[] = [
  {
    code: "0",
    name: "免列所得",
    taxRate: {
      resident: "免稅",
      nonResident: "免稅",
    },
    description: "不需列入所得計算的項目",
    examples: [
      "導師費、主管加給(編制內主管)",
      "入學考試試務人員各種工作費、命題、閱卷費",
      "論文考試口試費、車馬費",
      "公務員之福利互助金",
      "執行職務差旅費、日支費、加班費(不超過規定標準)",
      "退休人員三節慰問金",
      "死亡員工之喪葬補助費",
      "成績排名之獎學金、僑生公費、運動比賽優異獎助學金",
      "清寒優秀學生獎學金(以成績為條件者)",
      "教育部及各單位來文表示其補助為免稅項目",
    ],
    notes:
      "依勞動基準法第24條規定「延長工作時間之工資」及第32條規定「每月平日延長工作總時數」限度內支領之加班費，可免納所得稅",
  },
  {
    code: "50",
    name: "薪資所得",
    formatCode: "50",
    taxRate: {
      resident: "固定薪資：按薪資所得扣繳稅額表扣繳 / 非固定薪資：5% (起扣標準88,501元)",
      nonResident: "基本工資1.5倍以下(41,205元)：6% / 超過基本工資1.5倍：18%",
    },
    description: "包含酬勞、工資、工作酬勞、助理薪資、兼職酬金、工作所得、助理費、人事費、工讀費等",
    healthInsuranceCode: "62/63",
    healthInsuranceName: "獎金/兼職所得",
    examples: [
      "薪資：包含酬勞、工資、工作酬勞、助理薪資、兼職酬金、工作所得、助理費、人事費、工讀費、工讀助學金、工作費、臨時工資、各類津貼、年終獎金、考績獎金、調薪差額、晉級差額等",
      "授課鐘點費：包含學校開課、訓練班、講習會等排定課程發給之鐘點費",
      "科技部等撥付研究生獎助學金",
      "各機關、單位委託專案研究補助費",
      "公務員之各種補助費收入",
      "研究費（無研究計畫及定期定額給付）",
      "結婚、眷喪、生育、子女教育、健康檢查、休假旅遊補助費",
      "諮詢費、實驗受測費、問卷調查費、訪談費、輔導費、出席費、主持費、講座費、講評費、論文發表費、一般審查費（專案研究報告及著作等審查）、教材編輯費、打字費、資料蒐集費、清潔費、口語翻譯費",
    ],
    withholdingThreshold: "88,501元",
    notes: "授課鐘點費與講演鐘點費需區分：授課鐘點費屬薪資所得，講演鐘點費屬執行業務所得",
  },
  {
    code: "9A",
    name: "執行業務所得",
    formatCode: "9A",
    taxRate: {
      resident: "10% (扣繳稅額不超過2,000元免予扣繳)",
      nonResident: "20% (無論金額大小)",
    },
    description:
      "律師、會計師、建築師、技師、醫師、藥師、著作人、代書、工匠和表演人及其他以技藝自力營生者的業務收入或演技收入",
    healthInsuranceCode: "65",
    healthInsuranceName: "執行業務收入",
    withholdingThreshold: "20,010元",
    examples: [
      "律師、會計師、醫師、建築師、技師、藥師、地政士、記帳士、專利代理人等（須取有證書或執照），及其事務所、診所、醫院",
      "專業表演人（演員、歌手、模特兒、節目主持人、舞者、相聲、魔術、特技、樂器等）、書畫家、著作人、漫畫家、編劇者等",
    ],
    notes: "上述人員如係採聘僱方式任用，則其報酬應屬薪資，而非執行業務",
  },
  {
    code: "9B",
    name: "執行業務所得稿費、演講費等",
    formatCode: "9B",
    taxRate: {
      resident: "10% (扣繳稅額不超過2,000元免予扣繳)",
      nonResident: "20% (每次給付金額不超過5,000元免予扣繳)",
    },
    description: "稿費、演講費、演講鐘點費等，定額免稅18萬元",
    healthInsuranceCode: "65",
    healthInsuranceName: "執行業務收入",
    feeCategory: "98/99",
    exemptionLimit: "18萬元",
    withholdingThreshold: "20,010元",
    examples: [
      "專題演講鐘點費：於公眾集會場所且無固定場所、時間、對象之演講(不特定人士參與)",
      "稿費、編撰費、翻譯費（非僱用關係自由投稿並經出版或刊登報章雜誌之期刊、學刊等；含翻譯、改稿、審查、審訂等）",
      "論文指導費、口試費",
      "審查費(專任教師升等著作、期刊、學報、畢業論文等)、系所評鑑品保報告審查",
      "版稅(非自行出版9B98、自行出版9B99)",
    ],
    notes:
      "稿費係以本人著作、翻譯、創作之文稿，並按字計酬。與稿費、版稅、樂譜、作曲、編劇、漫畫等全年合計數不超過新台幣18萬元者，免納所得稅",
  },
  {
    code: "51",
    name: "租賃所得",
    formatCode: "51",
    taxRate: {
      resident: "10% (扣繳稅額不超過2,000元免予扣繳)",
      nonResident: "20% (無論金額大小)",
    },
    description: "租賃房屋、土地、車位等收入",
    healthInsuranceCode: "68",
    healthInsuranceName: "租金",
    withholdingThreshold: "20,010元",
    examples: ["租賃房屋、土地、車位", "借用場地所付的使用費、清理費"],
    notes: "取得統一發票者，免扣繳。場地租金需提供房屋稅籍編號及土地地段地號",
  },
  {
    code: "53",
    name: "權利金",
    formatCode: "53",
    taxRate: {
      resident: "10% (扣繳稅額不超過2,000元免予扣繳)",
      nonResident: "20% (無論金額大小)",
    },
    description: "專利權、商標權、著作權供他人使用而取得之權利金所得",
    withholdingThreshold: "20,010元",
    examples: ["專利權（技轉金）", "商標權使用費", "著作權授權費"],
  },
  {
    code: "91",
    name: "競技競賽及機會中獎之獎金",
    formatCode: "91",
    taxRate: {
      resident: "10% (扣繳稅額不超過2,000元免予扣繳)",
      nonResident: "20% (無論金額大小)",
    },
    description: "各項比賽獎金、抽獎獎金及獎品價值",
    withholdingThreshold: "20,010元",
    examples: [
      "各項比賽獎金（實物依購買成本認列）",
      "活動摸彩、年終尾牙摸彩之獎金或獎品",
      "各類競技比賽及抽獎之獎金及獎品價值",
    ],
    notes: "版權歸公改列【9B】。參加活動送的小獎品是贈品不列所得(人人有獎)",
  },
  {
    code: "92",
    name: "其他所得",
    formatCode: "92",
    taxRate: {
      resident: "免扣繳（應列單）",
      nonResident: "20%",
    },
    description: "不屬於其他類別之所得",
    examples: [
      "表演團體、劇團、急難救助金（無統一發票者）",
      "財團法人醫療院所之醫療費用",
      "特殊優良教師獎金、資深優良教師獎勵金、模範公務人員及傑出貢獻獎之獎金",
      "技術移轉分配有功獎勵金",
      "各類研討會報名費及註冊費(入會費、年費免列)、教育訓練費等",
    ],
  },
  {
    code: "93",
    name: "退職所得",
    formatCode: "93",
    taxRate: {
      resident: "6%",
      nonResident: "18%",
    },
    description: "退休金、資遣費、退職金、離職金、終身俸及非屬保險給付之養老金等所得",
    examples: [
      "凡個人領取之退休金、資遣費、退職金、離職金、終身俸及非屬保險給付之養老金等所得",
      "分期領取退職所得之退休公務人員所領之年終慰問金及子女教育補助",
    ],
    notes: "個人領取歷年自薪資所得中自行繳付儲金之部分及其孳息，不在此限。退職所得有定額免稅標準",
  },
  {
    code: "95",
    name: "政府補助款",
    formatCode: "95A/95B",
    taxRate: {
      resident: "免扣繳（應列單）",
      nonResident: "免扣繳（應列單）",
    },
    description: "政府補助款分為實報實銷(95A)和非實報實銷(95B)",
    examples: ["政府補助款(非實報實銷) 95B", "政府補助款(實報實銷) 95A"],
  },
]

export const occupationCategories: OccupationCategory[] = [
  { code: "10", name: "律師", taxRate: { resident: "10%", nonResident: "20%" }, category: "法律專業" },
  { code: "11", name: "會計師", taxRate: { resident: "10%", nonResident: "20%" }, category: "會計專業" },
  { code: "12", name: "精算師", taxRate: { resident: "10%", nonResident: "20%" }, category: "金融專業" },
  { code: "13", name: "地政士", taxRate: { resident: "10%", nonResident: "20%" }, category: "地政專業" },
  { code: "14", name: "記帳士", taxRate: { resident: "10%", nonResident: "20%" }, category: "會計專業" },
  { code: "15", name: "仲裁人", taxRate: { resident: "10%", nonResident: "20%" }, category: "法律專業" },
  { code: "16", name: "民間公證人", taxRate: { resident: "10%", nonResident: "20%" }, category: "法律專業" },
  { code: "17", name: "不動產估價師", taxRate: { resident: "10%", nonResident: "20%" }, category: "不動產專業" },
  {
    code: "18",
    name: "受委託代辦國有非公用不動產之承租、續租、過戶及繼承等申請者",
    taxRate: { resident: "10%", nonResident: "20%" },
    category: "不動產專業",
  },
  { code: "19", name: "記帳及報稅代理業務人", taxRate: { resident: "10%", nonResident: "20%" }, category: "會計專業" },
  { code: "20", name: "技師", taxRate: { resident: "10%", nonResident: "20%" }, category: "工程專業" },
  { code: "21", name: "建築師", taxRate: { resident: "10%", nonResident: "20%" }, category: "建築專業" },
  { code: "22", name: "公共安檢人員", taxRate: { resident: "10%", nonResident: "20%" }, category: "安全檢查" },
  {
    code: "23",
    name: "未具會計師資格，辦理工商登記等業務者",
    taxRate: { resident: "10%", nonResident: "20%" },
    category: "商業服務",
  },
  {
    code: "24",
    name: "工匠(工資收入)",
    taxRate: { resident: "10%", nonResident: "20%" },
    category: "技藝工作",
    description: "不以執行業務所得投保",
  },
  {
    code: "25",
    name: "工匠(工料收入)",
    taxRate: { resident: "10%", nonResident: "20%" },
    category: "技藝工作",
    description: "不以執行業務所得投保",
  },
  { code: "26", name: "引水人", taxRate: { resident: "10%", nonResident: "20%" }, category: "航運服務" },
  { code: "29", name: "美術工藝家(工料收入)", taxRate: { resident: "10%", nonResident: "20%" }, category: "藝術創作" },
  { code: "30", name: "內科醫師", taxRate: { resident: "10%", nonResident: "20%" }, category: "醫療專業" },
  { code: "31", name: "外科醫師", taxRate: { resident: "10%", nonResident: "20%" }, category: "醫療專業" },
  { code: "32", name: "小兒科醫師", taxRate: { resident: "10%", nonResident: "20%" }, category: "醫療專業" },
  { code: "33", name: "婦產科醫師", taxRate: { resident: "10%", nonResident: "20%" }, category: "醫療專業" },
  { code: "34", name: "眼科醫師", taxRate: { resident: "10%", nonResident: "20%" }, category: "醫療專業" },
  { code: "35", name: "耳鼻喉科醫師", taxRate: { resident: "10%", nonResident: "20%" }, category: "醫療專業" },
  { code: "36", name: "牙科醫師", taxRate: { resident: "10%", nonResident: "20%" }, category: "醫療專業" },
  { code: "37", name: "精神科醫師", taxRate: { resident: "10%", nonResident: "20%" }, category: "醫療專業" },
  { code: "38", name: "骨科醫師", taxRate: { resident: "10%", nonResident: "20%" }, category: "醫療專業" },
  { code: "39", name: "其他科別醫師", taxRate: { resident: "10%", nonResident: "20%" }, category: "醫療專業" },
  { code: "40", name: "助產師(士)", taxRate: { resident: "10%", nonResident: "20%" }, category: "醫療專業" },
  { code: "41", name: "藥師", taxRate: { resident: "10%", nonResident: "20%" }, category: "醫療專業" },
  { code: "42", name: "醫事檢驗師(生)", taxRate: { resident: "10%", nonResident: "20%" }, category: "醫療專業" },
  { code: "43", name: "整合照護", taxRate: { resident: "10%", nonResident: "20%" }, category: "醫療專業" },
  { code: "44", name: "駐診拆帳西醫", taxRate: { resident: "10%", nonResident: "20%" }, category: "醫療專業" },
  { code: "45", name: "營養師", taxRate: { resident: "10%", nonResident: "20%" }, category: "醫療專業" },
  {
    code: "46",
    name: "醫師經核准至該他醫療機構服務但與該他醫療機構不具僱傭關係者",
    taxRate: { resident: "10%", nonResident: "20%" },
    category: "醫療專業",
  },
  { code: "47", name: "獸醫師", taxRate: { resident: "10%", nonResident: "20%" }, category: "獸醫專業" },
  { code: "48", name: "皮膚科醫師", taxRate: { resident: "10%", nonResident: "20%" }, category: "醫療專業" },
  { code: "49", name: "家庭醫學科醫師", taxRate: { resident: "10%", nonResident: "20%" }, category: "醫療專業" },
  { code: "50", name: "中醫師", taxRate: { resident: "10%", nonResident: "20%" }, category: "醫療專業" },
  { code: "51", name: "語言治療師", taxRate: { resident: "10%", nonResident: "20%" }, category: "醫療專業" },
  { code: "52", name: "人壽保險醫療檢查", taxRate: { resident: "10%", nonResident: "20%" }, category: "保險服務" },
  { code: "53", name: "物理治療師", taxRate: { resident: "10%", nonResident: "20%" }, category: "醫療專業" },
  { code: "54", name: "職能治療師", taxRate: { resident: "10%", nonResident: "20%" }, category: "醫療專業" },
  { code: "55", name: "心理師", taxRate: { resident: "10%", nonResident: "20%" }, category: "醫療專業" },
  { code: "56", name: "牙體技術師(生)", taxRate: { resident: "10%", nonResident: "20%" }, category: "醫療專業" },
  {
    code: "57",
    name: "配合政府政策辦理老人、兒童、中低收入者、身心障礙者及其他特定對象補助",
    taxRate: { resident: "10%", nonResident: "20%" },
    category: "社會服務",
  },
  { code: "58", name: "自費疫苗注射收入", taxRate: { resident: "10%", nonResident: "20%" }, category: "醫療專業" },
  { code: "61", name: "書畫家、版畫家", taxRate: { resident: "10%", nonResident: "20%" }, category: "藝術創作" },
  { code: "62", name: "命理卜卦", taxRate: { resident: "10%", nonResident: "20%" }, category: "民俗服務" },
  { code: "70", name: "表演人", taxRate: { resident: "10%", nonResident: "20%" }, category: "表演藝術" },
  { code: "71", name: "保險經紀人", taxRate: { resident: "10%", nonResident: "20%" }, category: "保險服務" },
  { code: "72", name: "節目製作人", taxRate: { resident: "10%", nonResident: "20%" }, category: "媒體製作" },
  { code: "73", name: "公益彩券甲類經銷商", taxRate: { resident: "10%", nonResident: "20%" }, category: "彩券銷售" },
  { code: "76", name: "一般經紀人", taxRate: { resident: "10%", nonResident: "20%" }, category: "經紀服務" },
  { code: "90", name: "其他", taxRate: { resident: "10%", nonResident: "20%" }, category: "其他專業" },
  { code: "91", name: "商標代理人", taxRate: { resident: "10%", nonResident: "20%" }, category: "智慧財產" },
  { code: "92", name: "程式設計師", taxRate: { resident: "10%", nonResident: "20%" }, category: "資訊技術" },
  { code: "93", name: "專利師及專利代理人", taxRate: { resident: "10%", nonResident: "20%" }, category: "智慧財產" },
  {
    code: "94",
    name: "未具律師資格，辦理訴訟代理人業務",
    taxRate: { resident: "10%", nonResident: "20%" },
    category: "法律服務",
  },
  {
    code: "95",
    name: "未具建築師資格，辦理建築規劃設計及監造等業務者",
    taxRate: { resident: "10%", nonResident: "20%" },
    category: "建築服務",
  },
  {
    code: "96",
    name: "未具地政士資格，辦理土地登記等業務者",
    taxRate: { resident: "10%", nonResident: "20%" },
    category: "地政服務",
  },
  {
    code: "97",
    name: "受大陸地區人民委託辦理繼承、公法給付或其他事務者",
    taxRate: { resident: "10%", nonResident: "20%" },
    category: "跨境服務",
  },
]

export const feeCategories = {
  "98": "非自行出版之稿費、版稅、樂譜、作曲、編劇、漫畫及演講之鐘點費等七項",
  "99": "自行出版之稿費、版稅、作曲、編劇、漫畫等",
}

export const detailedIncomeItems = [
  { id: 1, name: "口譯費(非屬演講性質)", code: "50", formatCode: "50", feeCode: "63", healthInsurance: "N" },
  { id: 2, name: "口譯費(屬演講性質)", code: "9B", formatCode: "9B", feeCode: "98", healthInsurance: "N" },
  { id: 3, name: "子女教育補助費", code: "50", formatCode: "50", feeCode: "63", healthInsurance: "Y" },
  { id: 4, name: "小兒科醫師", code: "9A", formatCode: "9A", feeCode: "32", healthInsurance: "N" },
  {
    id: 5,
    name: "工匠(含工資及材料)",
    code: "9A",
    formatCode: "9A",
    feeCode: "25",
    healthInsurance: "N",
    notes: "藝術，不以執行業務所得投保",
  },
  // ... 更多項目可以繼續添加
]
