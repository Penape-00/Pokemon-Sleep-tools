/* ================================
   ui.js — UI操作専用モジュール
================================ */

/* -------------------------------
   ▼ スライドメニュー制御
-------------------------------- */
const menuBtn = document.getElementById("menuBtn");
const sideMenu = document.getElementById("sideMenu");
const overlay = document.getElementById("overlay");

menuBtn.addEventListener("click", () => {
  sideMenu.classList.add("open");
  overlay.classList.add("show");
});

overlay.addEventListener("click", () => {
  sideMenu.classList.remove("open");
  overlay.classList.remove("show");
});


/* -------------------------------
   ▼ 詳細パネル（モーダル）制御
-------------------------------- */
const detailOverlay = document.getElementById("detailOverlay");
const detailPanel = document.getElementById("detailPanel");
const closeDetailBtn = document.getElementById("closeDetailBtn");

function closeDetail() {
  detailPanel.classList.remove("show");
  detailOverlay.classList.remove("show");

  showShiny = false;
  localStorage.setItem("showShiny", "false");

  const toggle = document.getElementById("shinyToggleDetail");
  if (toggle) toggle.checked = false;
}

closeDetailBtn.addEventListener("click", closeDetail);
detailOverlay.addEventListener("click", closeDetail);


/* -------------------------------
   ▼ タブ切り替え
-------------------------------- */
const tabButtons = document.querySelectorAll(".detail-tab");
const tabSections = document.querySelectorAll(".tab-section");

tabButtons.forEach(btn => {
  btn.addEventListener("click", () => {
    const target = btn.dataset.tab;

    // ボタンの active 切り替え
    tabButtons.forEach(b => b.classList.remove("active"));
    btn.classList.add("active");

    // セクションの active 切り替え
    tabSections.forEach(sec => {
      sec.classList.remove("active");
      if (sec.id === "tab-" + target) {
        sec.classList.add("active");
      }
    });
  });
});


/* -------------------------------
   ▼ 詳細パネルを開く
-------------------------------- */
function openDetailPanelUI() {
  detailPanel.classList.add("show");
  detailOverlay.classList.add("show");
}

/* -------------------------------
   ▼ カード初期表示
-------------------------------- */
window.addEventListener("DOMContentLoaded", () => {
  applySort();        // ソート初期化（filter.js側の関数）
  resetAndRender();   // カード描画
});