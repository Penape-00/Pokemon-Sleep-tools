// ==================================================
// ▼ 初期化
// ==================================================

document.addEventListener("DOMContentLoaded", () => {
  setupMenuToggle();
  renderTools();
  renderHistory(updateHistory);
});

/* ===============================
   ▼ メニュー開閉
================================ */
function setupMenuToggle() {
  const menuBtn = document.getElementById("menu-button");
  const sideMenu = document.getElementById("side-menu");
  const overlay = document.getElementById("overlay");

  menuBtn.addEventListener("click", () => {
    sideMenu.classList.add("open");
    overlay.classList.add("show");
  });

  overlay.addEventListener("click", () => {
    sideMenu.classList.remove("open");
    overlay.classList.remove("show");
  });
}

/* ===============================
   ▼ ツール一覧データ
================================ */
const tools = [
  {
    id: "detail",
    title: "詳細評価",
    href: "tools/detail.html",
    icon: "src/Clodsire Eclair.png",
    desc: "個別ポケモンの詳細評価",
    color: "#ef5350",
    hoverColor: "#d52925"
  },
  {
    id: "compare",
    title: "比較評価",
    href: "tools/compare.html",
    icon: "src/Flower Gift Macarons.png",
    desc: "2体の性能を比較",
    color: "#64b5f6",
    hoverColor: "#1e88e5"
  },
  {
    id: "party",
    title: "パーティ評価",
    href: "tools/party.html",
    icon: "src/Scary Face Pancakes.png",
    desc: "パーティを総合的に評価",
    color: "#ffb74d",
    hoverColor: "#fb8c00"
  },
  {
    id: "exp",
    title: "Exp算出",
    href: "tools/exp.html",
    icon: "src/Jigglypuff's Fruity Flan.png",
    desc: "経験値計算ツール",
    color: "#81c784",
    hoverColor: "#43a047"
  },
  {
    id: "sleepPower",
    title: "ねむけパワー算出",
    href: "tools/SleepPower.html",
    icon: "src/Petal Dance Chocolate Tart.png",
    desc: "ねむけパワー計算ツール",
    color: "#ba68c8",
    hoverColor: "#ab47bc"
  },
  {
    id: "database",
    title: "データベース",
    href: "tools/database.html",
    icon: "src/Role Play Pumpkaboo Stew.png",
    desc: "ポケモンデータベース",
    color: "#78909c",
    hoverColor: "#546e7a"
  }
];

/* ===============================
   ▼ 更新履歴データ
================================ */
const categoryColors = {
  GAME: "#ff9800",
  TOOL: "#4caf50",
  FIX:  "#f44336",
  UI:   "#2196f3"
};

const updateHistory = [
  { date: "2026/11/16", category: "GAME" ,content: "「モンメン」「エルフーン」「イーブイ(ハロウィン(パープル))」追加" },
  { date: "2026/11/16", category: "UI" ,content: "トップページ改修" },
  { date: "2026/10/26", category: "GAME" ,content: "「ムウマ」「ムウマージ」追加" },
  { date: "2026/10/01", category: "TOOL" ,content: "詳細評価ツール更新(ver 2.0.0)" },
  { date: "2026/09/01", category: "TOOL" ,content: "EXP算出ツール更新(ver 3.0.0)" }
];

/* ===============================
   ▼ ツール一覧描画
================================ */
function renderTools() {
  const grid = document.getElementById("toolGrid");
  grid.innerHTML = "";

  tools.forEach(tool => {
    const a = document.createElement("a");
    a.href = tool.href;
    a.className = "tool-card";

    // カードごとの色設定
    a.style.setProperty("--accent-color", tool.color);
    a.style.setProperty("--accent-hover", tool.hoverColor);

    a.innerHTML = `
      <img src="${tool.icon}" alt="${tool.title}" class="tool-icon" />
      <div class="tool-text">
        <div class="tool-title">${tool.title}</div>
        <div class="tool-desc">${tool.desc}</div>
      </div>
    `;

    grid.appendChild(a);
  });
}

/* ===============================
   ▼ 更新履歴描画
================================ */
function renderHistory(list) {
  const tbody = document.getElementById("historyBody");
  tbody.innerHTML = "";

  list.forEach(item => {
    const tr = document.createElement("tr");

    const color = categoryColors[item.category] || "#ffffff";

    tr.innerHTML = `
      <td>${item.date}</td>
      <td>
        <span class="history-tag" style="background:${color};">
          ${item.category}
        </span>
        ${item.content}
      </td>
    `;

    tbody.appendChild(tr);
  });
}
