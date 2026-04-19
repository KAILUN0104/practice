# 林楷倫 個人網站作品集 | LIN KAI-LUN's Portfolio

**線上網站：** https://kailun0104.github.io/practice/

---

## 📋 項目概述

這是一個個人網站作品集項目，記錄了 2026 年 2 月至 6 月間的前端網頁設計學習過程。項目涵蓋 HTML、CSS、JavaScript、Vue.js 等技術的實踐應用，並通過 GitHub Pages 發佈。

**主要特色：**
- ✨ 響應式設計 (RWD) - 支援桌面與行動設備
- 🎨 現代化 UI 設計 - 極簡風格與細緻線條美學
- 🔄 Vue.js 3 互動功能 - 狀態管理與動態渲染
- 📚 課程內容整理 - 每週學習進度追蹤
- 🔗 完整導航系統 - 多頁面應用 (SPA 概念)

---

## 🗂️ 文件結構與說明

### 核心頁面

#### **index.html** 🏠 (首頁)
- **用途：** 網站首頁與作品集入口
- **功能：**
  - 個人簡介與網站主題展示
  - 四大主要項目卡片導航
  - 固定導航栏 (Header)，包含：
    - **HOME** - 返回首頁（所有頁面可點擊返回）
    - **TIME** - 實時數位時鐘顯示
    - **TAIPEI / TAIWAN** - 地點標示
    - **FOLLOW +** - 下拉菜單，連結至 Instagram (https://www.instagram.com/kk1ro4/)
    - **CREATE BY LIN KAI-LUN** - 製作者信息
  - 打字動畫效果 - 滑鼠進入導航栏時觸發
  - 設計哲學說明

#### **classpractice.html** 📚 (課程練習)
- **用途：** 整合所有每週課程內容與實驗練習
- **功能：**
  - 側邊欄菜單 - 顯示所有課程日期與主題
  - 主內容區域 - 動態載入不同週次的內容
  - **已實裝的課程內容：**
    - **02/26** - 基礎 HTML & Vue.js (狀態切換測試)
    - **03/05** - 個人檔案連結實作
    - **03/12** - 修改主要練習網頁 (Flexbox、Grid、RWD)
    - **03/19** - JavaScript 實驗五合一：
      - 實驗二：DOM 操作 - 隨機背景色
      - 實驗三：倒數計時器
      - 實驗四：數位時鐘
      - 實驗五：進度條
    - **03/26** - 內嵌式網頁 (iframe 嵌入 0326.html)
    - **04/02** - Vue 基本知識
    - **04/09** - 學習基本 Vue 架構 (iframe 嵌入 0409.html)
    - **04/16** - Vue 基本練習 (iframe 嵌入 0416.html)
    - **04/23 - 06/04** - 後續課程 (預留)
  - 響應式設計 - 小螢幕自動調整為單欄布局

#### **profile.html** 👤 (個人檔案)
- **用途：** 個人檔案展示頁面
- **功能：**
  - 個人信息卡片
  - 固定導航栏 - 與 index.html 一致
  - 響應式卡片布局

#### **project.html** 🛍️ (二手交易平台)
- **用途：** 最終專題項目展示
- **標題：** "PRODUCT | Second-hand Exchange Platform"
- **功能：**
  - HOME 導航已支援點擊返回
  - 產品展示頁面
  - 現代化設計與互動

#### **about.html** ℹ️ (關於我們)
- **用途：** 關於頁面
- **功能：**
  - 漸層背景設計
  - 個人檔案卡片展示
  - 清晰的排版結構

#### **test.html** 🧪 (測試頁面)
- **用途：** 實驗性功能測試
- **功能：**
  - Vue.js 3 測試環境
  - 課程進度追蹤
  - 實驗功能驗證

---

### 課程內容頁面

#### **0326.html** (03/26 實作內容)
- **主題：** 內嵌式網頁
- **功能：** 展示多頁面導航選項卡與內容切換
- **嵌入位置：** classpractice.html 的 03/26 內容區

#### **0409.html** (04/09 學習內容)
- **主題：** 學習基本 Vue 架構
- **內容：**
  - NVM (Node Version Manager) 安裝指南
  - Node.js 版本管理
  - pnpm 套件管理工具
  - 使用 create-vue 建立 Vue 專案
  - 開發環境配置步驟
  - Vue.js 基本架構與特點介紹
  - 學習完成檢查清單
- **嵌入位置：** classpractice.html 的 04/09 內容區

#### **0416.html** (04/16 Vue 基本練習)
- **主題：** Vue.js 基礎架構練習指南
- **內容：** 涵蓋 6 大核心概念
  1. **聲明式渲染 (Declarative Rendering)**
     - SFC (Single File Component)
     - 響應式狀態 (reactive()、ref())
     - Mustache 語法 {{ expression }}

  2. **屬性綁定 (Attribute Bindings)**
     - v-bind 指令與簡寫 :
     - 常用屬性 (:id, :class, :style, :src, :href)

  3. **事件監聽器 (Event Listeners)**
     - v-on 指令與簡寫 @
     - 常用事件 (@click, @submit, @input, @change, @mouseover 等)

  4. **表單綁定 (Form Bindings)**
     - v-model 雙向資料綁定
     - 支援元素 (input, textarea, checkbox, radio, select)

  5. **條件渲染 (Conditional Rendering)**
     - v-if、v-else、v-else-if
     - v-show vs v-if 比較

  6. **清單渲染 (List Rendering)**
     - v-for 迭代渲染
     - :key 屬性的重要性
     - 陣列更新方式 (mutation vs. replacement)

- **嵌入位置：** classpractice.html 的 04/16 內容區

---

### 輔助文件

#### **analyze.js**
- **用途：** 流量分析或數據追蹤腳本
- **狀態：** 輔助性質

#### **photo.jpg、profile.jpg**
- **用途：** 網站資源圖片
- **用途：** 個人檔案與內容展示用的媒體資源

---

## 🎯 主要功能與特性

### 1. 導航系統
| 項目 | 功能 |
|------|------|
| HOME | 點擊返回首頁 (已在所有頁面實裝) |
| TIME | 實時顯示當前時間 (時:分:秒) |
| TAIPEI / TAIWAN | 位置標示 |
| FOLLOW + | 下拉菜單，連結至 Instagram |
| CREATE BY LIN KAI-LUN | 製作者標示 |

### 2. 打字動畫效果
- 實現原理：監聽 mouseenter 事件
- 觸發位置：導航栏各項目
- 技術方案：使用 `<span class="type-text">` 包裝文字，防止清空下拉菜單

### 3. 課程內容管理
- **動態加載系統** - JavaScript 集中管理所有課程數據
- **內容結構化** - 每週課程獨立管理，便於擴展
- **嵌入式設計** - 使用 iframe 整合子頁面，避免代碼重複

### 4. 響應式設計
- **斷點設定** - 768px 為行動設備判斷點
- **彈性布局** - Flexbox + CSS Grid
- **自適應元素** - 導航栏、卡片、菜單自動調整

### 5. 交互功能
- 狀態管理 (Vue.js)
- 事件監聽 (點擊、懸停、輸入)
- DOM 動態操作 (計時器、時鐘、進度條)

---

## 🛠️ 技術棧

| 技術 | 用途 |
|------|------|
| **HTML5** | 語義化標記 |
| **CSS3** | 樣式、動畫、響應式設計 |
| **JavaScript (Vanilla)** | DOM 操作、事件處理、邏輯實現 |
| **Vue.js 3** | 互動功能、狀態管理 |
| **Git / GitHub** | 版本控制與部署 |
| **GitHub Pages** | 靜態網站託管 |

---

## 📱 響應式支援

- ✅ 桌面設備 (1200px+)
- ✅ 平板設備 (768px - 1199px)
- ✅ 行動設備 (< 768px)

---

## 🎨 設計風格

- **配色方案：** 極簡灰階 (#ECECEC 背景、#121212 文字、#A0A0A0 線條)
- **字體：** Inter (主要)、JetBrains Mono (程式碼、導航栏)
- **設計理念：** 細緻線條、留白設計、極簡美學

---

## 📚 學習進度記錄

### 已完成
- ✅ 基礎 HTML & CSS
- ✅ JavaScript DOM 操作
- ✅ Vue.js 基本概念
- ✅ 響應式網頁設計 (RWD)
- ✅ 導航系統實作
- ✅ 下拉菜單功能
- ✅ 打字動畫效果
- ✅ 課程內容整理系統

### 進行中
- 🔄 Vue.js 深入學習 (Components、Router、Pinia)
- 🔄 Node.js & NPM 環境配置

### 計劃中
- 📅 04/23 - 後續主題
- 📅 04/30 - 後續主題
- 📅 05/07 - 後續主題
- 📅 05/14 - 後續主題
- 📅 05/21 - 後續主題
- 📅 05/28 - 後續主題
- 📅 06/04 - 期末統整與專題

---

## 🚀 如何使用

### 本地查看
```bash
# 1. 克隆或下載本專案
git clone https://github.com/kailun0104/practice.git

# 2. 進入目錄
cd practice

# 3. 使用 Live Server 或本地伺服器打開
# 推薦使用 VS Code 的 Live Server 擴充功能
```

### 線上訪問
直接訪問：https://kailun0104.github.io/practice/

---

## 📖 功能指南

### 進入課程內容
1. 打開 **classpractice.html**
2. 在左側菜單選擇日期
3. 右側會動態載入該週內容
4. 某些週次包含嵌入式內容頁面 (iframe)

### 查看 Vue 基本練習
1. 進入 **classpractice.html**
2. 點擊左側菜單中的 **04/16 Vue 基本練習**
3. 或直接打開 **0416.html**

### 連結社群
1. 在任何頁面的導航栏點擊 **FOLLOW +**
2. 選擇 **Link of IG** 即可前往 Instagram

---

## 🔄 更新記錄

### 最近更新 (2026/04/19)
- ✨ 完成 0416.html - Vue 基本練習指南
- 🔗 將 0416.html 嵌入 classpractice.html (04/16 內容)
- ✅ 修復下拉菜單問題 (分離文字與菜單 HTML)
- ✅ 所有頁面 HOME 導航可點擊返回首頁
- ✅ 完成 README.md 文檔

---

## 📝 備註

- 此項目為學習用途，記錄前端開發技能進度
- 所有內容由 GitHub Copilot 協助開發
- 遵循 GitHub Pages 部署標準
- 持續更新中，最後更新於 2026/04/19

---

## 👨‍💻 製作者

**林楷倫 (LIN KAI-LUN)**  
學號：11128217  
社群：[@kk1ro4](https://www.instagram.com/kk1ro4/)

---

## 📄 許可證

此專案為個人學習作品，歡迎參考但請註明出處。

