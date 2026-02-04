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
    color: "#c78184",
    hoverColor: "#9f3c40"
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
    id: "exp",
    title: "Exp算出",
    href: "tools/exp.html",
    icon: "src/Jigglypuff's Fruity Flan.png",
    desc: "経験値計算ツール",
    color: "#ffb74d",
    hoverColor: "#fb8c00"
  }
];

/* ===============================
   ▼ 更新履歴データ
================================ */
const updateHistory = [
  { date: "2025-01-26", tool: "Exp算出", color: "rgba(255,238,119,0.8)", content: "ハンバーガーメニュー追加(ver1.1.0)" },
  { date: "2025-01-23", tool: "詳細評価", color: "rgba(255,187,255,0.8)", content: "公開(ver1.6.1)" },
  { date: "2025-01-23", tool: "比較評価", color: "rgba(102,187,255,0.8)", content: "公開(ver1.1.0)" },
  { date: "2025-01-23", tool: "Exp算出", color: "rgba(255,238,119,0.8)", content: "公開(ver1.0.0)" }
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
    tr.innerHTML = `
      <td>${item.date}</td>
      <td style="color: ${item.color}; font-weight: bold;">${item.tool}</td>
      <td>${item.content}</td>
    `;
    tbody.appendChild(tr);
  });
}

/* ===============================
   ▼ 絞り込み
================================ */
document.getElementById("filterTool").addEventListener("change", () => {
  const selected = document.getElementById("filterTool").value;

  const filtered = selected === "all"
    ? updateHistory
    : updateHistory.filter(item => item.tool === selected);

  renderHistory(filtered);
});

/* ===============================
   ▼ メニュー開閉
================================ */
document.getElementById("menuBtn").addEventListener("click", () => {
  document.getElementById("sideMenu").classList.add("open");
  document.getElementById("overlay").classList.add("show");
});

document.getElementById("overlay").addEventListener("click", () => {
  document.getElementById("sideMenu").classList.remove("open");
  document.getElementById("overlay").classList.remove("show");
});

/* ===============================
   ▼ 初期表示
================================ */
document.addEventListener("DOMContentLoaded", () => {
  renderTools();
  renderHistory(updateHistory);
});
