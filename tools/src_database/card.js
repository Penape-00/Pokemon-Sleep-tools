/* ================================
   card.js — カード生成・一覧描画
================================ */

/* -------------------------------
   ▼ 定数・状態
-------------------------------- */
const cardGrid = document.getElementById("cardGrid");
const showMoreBtn = document.getElementById("showMoreBtn");

const PAGE_SIZE = 40;
let currentIndex = 0;

// 全ポケモン数（固定）
const totalPokemonCount = pokedexData_All.length;


/* -------------------------------
   ▼ とくいタイプ / タイプ色
-------------------------------- */
const TOKUI_COLOR_MAP = {
  "きのみ": "0, 201, 80",
  "食材": "253, 199, 0",
  "スキル": "80, 162, 255",
  "オール": "251, 100, 182"
};

const TYPE_COLOR_MAP = {
  "ノーマル": "171, 171, 171",
  "ほのお": "255, 102, 44",
  "みず": "44, 153, 255",
  "でんき": "255, 223, 0",
  "くさ": "69, 201, 36",
  "こおり": "69, 223, 255",
  "かくとう": "255, 167, 2",
  "どく": "158, 78, 215",
  "じめん": "176, 125, 57",
  "ひこう": "161, 216, 255",
  "エスパー": "255, 104, 134",
  "むし": "169, 177, 35",
  "いわ": "201, 200, 150",
  "ゴースト": "113, 72, 117",
  "ドラゴン": "92, 109, 240",
  "あく": "84, 76, 76",
  "はがね": "109, 183, 223",
  "フェアリー": "255, 181, 255"
};


/* -------------------------------
   ▼ きのみアイコン
-------------------------------- */
  function renderBerryIcon(type) {
    const berry = berryData[type];
    if (!berry) return "";
    return `<img src="${berry.image}" style="width:18px; height:18px; vertical-align:middle; margin-left:4px;">`;
  }


/* -------------------------------
   ▼ カード生成（1枚）
-------------------------------- */
function createPokemonCard(p) {
  const template = document.getElementById("pokemon-card-template");
  const card = template.content.cloneNode(true);

  card.querySelector(".card-image").src = p.imageCard;
  card.querySelector(".card-image").alt = p.name;

  card.querySelector(".card-dex").textContent =
    `No.${String(p.dexNo).padStart(4, "0")}`;

  card.querySelector(".card-name").textContent = p.name;
  const typeEl = card.querySelector(".card-type");
  typeEl.innerHTML = `タイプ：${p.type.join("・")} ${renderBerryIcon(p.type[0])}`;
  card.querySelector(".card-tokui").textContent = `とくい：${p.tokui}`;

  // とくいタイプ色
  const tokuiAccent = card.querySelector(".tokui-accent");
  const tokuiColor = TOKUI_COLOR_MAP[p.tokui] || "200,200,200";
  tokuiAccent.style.backgroundColor = `rgba(${tokuiColor}, 0.4)`;

  // タイプ色
  const accent = card.querySelector(".type-accent");
  const mainType = p.type[0];
  accent.style.backgroundColor = `rgba(${TYPE_COLOR_MAP[mainType]}, 0.4)`;

  // クリックで詳細パネル（detail.js 側の関数を呼ぶ）
  card.querySelector(".pokemon-card").addEventListener("click", () => {
    openDetailPanel(p);      // detail.js の関数
    openDetailPanelUI();     // ui.js の関数（モーダル表示）
  });

  return card;
}


/* -------------------------------
   ▼ 件数カウンター更新
-------------------------------- */
function updatePokemonCount() {
  const countEl = document.getElementById("pokemonCount");
  countEl.textContent = `表示中: ${filteredList.length} / ${totalPokemonCount}`;
}


/* -------------------------------
   ▼ カード一覧リセット → 再描画
-------------------------------- */
function resetAndRender() {
  cardGrid.innerHTML = "";
  currentIndex = 0;
  renderCardsFiltered();
  updatePokemonCount();
}


/* -------------------------------
   ▼ 絞り込み後のカードを表示
-------------------------------- */
function renderCardsFiltered() {
  const end = currentIndex + PAGE_SIZE;
  const slice = filteredList.slice(currentIndex, end);

  slice.forEach(p => {
    const card = createPokemonCard(p);
    cardGrid.appendChild(card);
  });

  currentIndex = end;

  // もっと見るの表示制御
  showMoreBtn.style.display =
    currentIndex >= filteredList.length ? "none" : "block";

  updatePokemonCount();
}


/* -------------------------------
   ▼ 「もっと見る」ボタン
-------------------------------- */
showMoreBtn.addEventListener("click", renderCardsFiltered);