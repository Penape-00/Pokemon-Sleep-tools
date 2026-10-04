// ==================================================
// ▼ 初期化（detail ver2 用）
// ==================================================

document.addEventListener("DOMContentLoaded", () => {

  // ▼ クリアボタン
  document.getElementById("clearBtn")
    .addEventListener("click", clearSettings);

  // ▼ 計算ボタン
  document.getElementById("calcBtn")
    .addEventListener("click", calculateAndRender);

  // ▼ メニュー開閉
  setupMenuToggle();

  // ▼ セクション折り畳み（デフォルトで開く）
  setupSectionToggle();
});


// ==================================================
// ▼ メニュー開閉
// ==================================================

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


// ==================================================
// ▼ セクションヘッダー開閉（デフォルトで開いた状態）
// ==================================================

function setupSectionToggle() {
  document.querySelectorAll(".section-header").forEach(header => {
    const targetSelector = header.dataset.target;
    const body = document.querySelector(targetSelector);

    // ▼ デフォルトで開く
    body.classList.add("open");
    header.classList.add("open");
    header.querySelector(".toggle-icon").textContent = "−";

    // ▼ クリックで開閉
    header.addEventListener("click", () => {
      body.classList.toggle("open");
      header.classList.toggle("open");
      const icon = header.querySelector(".toggle-icon");
      icon.textContent = body.classList.contains("open") ? "−" : "+";
    });
  });
}

// ==================================================
// ▼ 設定クリア（完全版）
// ==================================================

function clearSettings() {

  // ▼ 1. ポケモン検索欄
  const pokemonContainer = document.getElementById("pokemonDropdown");
  const pokemonInput = document.getElementById("pokemonInput");
  const pokemonOptions = pokemonContainer.querySelector(".pokemon-options");

  pokemonInput.value = "";
  pokemonContainer.dataset.dexNo = "";
  pokemonContainer.dataset.formId = "";
  pokemonContainer.dataset.name = "";
  pokemonContainer.classList.remove("has-value", "focused");
  pokemonOptions.style.display = "none";

  updateIngredientSelectors(null); // 食材リセット
  updateFieldTokui();              // フィールド適正リセット
  updateEXBonus();                 // EXボーナスリセット


  // ▼ 2. 性格欄
  const natureContainer = document.getElementById("natureDropdown");
  const natureInput = document.getElementById("natureInput");
  const natureOptions = natureContainer.querySelector(".nature-options");

  natureInput.value = "";
  natureContainer.dataset.value = "";
  natureContainer.classList.remove("focused", "active");
  natureOptions.style.display = "none";


  // ▼ 3. レベル欄
  const lvInput = document.getElementById("level");
  lvInput.value = "";
  const lvField = lvInput.closest(".lv-field");
  lvField.classList.remove("has-value");


  // ▼ 4. リボン欄
  const ribbonContainer = document.getElementById("ribbonDropdown");
  ribbonContainer.dataset.value = "";
  ribbonContainer.classList.remove("active", "focused");
  ribbonContainer.querySelector(".dropdown-selected-text").textContent = "おやすみリボン";


  // ▼ 5. 食材欄（Lv1 / Lv30 / Lv60）
  updateIngredientSelectors(null);


  // ▼ 6. サブスキル欄（Lv10 / Lv25 / Lv50 / Lv70 / Lv80）
  subskillIds.forEach(id => {
    const container = document.getElementById(id);
    const input = container.querySelector(".subskill-input");

    input.value = "";
    container.dataset.value = "";

    // 状態をすべてリセット
    container.classList.remove("active", "focused", "open", "has-value");
  });
  
  updateSubskillAll(); // 重複禁止ロジックを初期化

  // ▼ 7. その他のおてボ数
  const teamContainer = document.getElementById("teamBonusDropdown");
  teamContainer.dataset.value = "";
  teamContainer.classList.remove("active", "focused");
  teamContainer.querySelector(".dropdown-selected-text").textContent = "その他のおてボ数";


  // ▼ 8. キャンプチケット
  const campContainer = document.getElementById("campTicketDropdown");
  campContainer.dataset.value = "";
  campContainer.classList.remove("active", "focused");
  campContainer.querySelector(".dropdown-selected-text").textContent = "キャンプチケット";


  // ▼ 9. フィールド選択
  const fieldContainer = document.getElementById("fieldDropdown");
  fieldContainer.dataset.value = "";
  fieldContainer.classList.remove("active", "focused");
  fieldContainer.querySelector(".dropdown-selected-text").textContent = "フィールド選択";


  // ▼ 10. フィールド適正
  const tokuiContainer = document.getElementById("fieldTokuiDropdown");
  tokuiContainer.dataset.value = "";
  tokuiContainer.classList.remove("active", "focused", "disabled");
  tokuiContainer.querySelector(".dropdown-selected-text").textContent = "フィールド適正";


  // ▼ 11. EXボーナス
  const exContainer = document.getElementById("exBonusDropdown");
  exContainer.dataset.value = "";
  exContainer.classList.remove("active", "focused", "disabled");
  exContainer.querySelector(".dropdown-selected-text").textContent = "EXボーナス";


  // ▼ 12. フィールドボーナス（% の位置も初期化）
  const fieldBonusInput = document.getElementById("fieldBonus");
  const percentField = fieldBonusInput.closest(".percent-field");
  const percentUnit = percentField.querySelector(".input-unit");

  fieldBonusInput.value = "";
  percentField.classList.remove("has-value");
  percentUnit.style.left = ""; // 初期位置に戻す


  // ▼ 13. 結果欄クリア
  document.getElementById("summary").innerHTML = "";
  document.getElementById("tableArea").innerHTML = "";
}

// ==================================================
// ▼ 暫定出力
// ==================================================

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

function calculateAndRender() {

  // ==================================================
  // ▼ 1. pokedexData から取得する基礎データ
  // ==================================================

  const monName = document.getElementById("pokemonInput").value;
  if (!monName) {
    alert("ポケモンを選択してください");
    return;
  }

  const mon = pokedexData_All.find(m => m.name === monName);
  if (!mon) {
    alert("ポケモンデータが見つかりません");
    return;
  }

  const type = mon.type[0];
  const berry = berryData[type];

  const baseHelpTime = mon.baseHelpTime;
  const evolutionStage = mon.evolutionStage;
  const baseIngRate = mon.ingRate;
  const baseSkillRate = mon.skillRate;
  const baseMaxHold = mon.maxHold;
  const baseBerryEnergy = berry.energy;


  // ==================================================
  // ▼ 2. 入力欄から取得するデータ
  // ==================================================

  const level = Number(document.getElementById("level")?.value || 60);
  const natureKey = document.getElementById("natureDropdown")?.dataset?.value || "hardy";

  const subskillValues = {};
  subskillIds.forEach(id => {
    const container = document.getElementById(id);
    subskillValues[id] = container?.dataset?.value || "";
  });

  const teamBonusCount = Number(document.getElementById("teamBonusDropdown")?.dataset?.value || 0);
  const ribbonValue = document.getElementById("ribbonDropdown")?.dataset?.value || "non";

  const fieldValue = document.getElementById("fieldDropdown")?.dataset?.value || "";
  const fieldTokui = document.getElementById("fieldTokuiDropdown")?.dataset?.value || "none";

  const campTicketValue = document.getElementById("campTicketDropdown")?.dataset?.value || "1";

  const fieldBonusPercent = Number(document.getElementById("fieldBonus")?.value || 85);
  const exBonus = document.getElementById("exBonusDropdown")?.dataset?.value || "";


  // ==================================================
  // ▼ 3. 計算に必要なその他データ
  // ==================================================

  const ribbonImageValue = document.getElementById("ribbonDropdown").dataset.value;
  const ribbonImageMap = {
    "200": "src_detail/img/おやすみリボン1.png",
    "500": "src_detail/img/おやすみリボン2.png",
    "1000": "src_detail/img/おやすみリボン3.png",
    "2000": "src_detail/img/おやすみリボン4.png"
  };
  const ribbonImage = ribbonImageMap[ribbonImageValue] || "";

  const typeColorRGB = TYPE_COLOR_MAP[type] || "170,170,170";


  // ==================================================
  // ▼ 4. 各種計算
  // ==================================================

  const standardHelpTime = calcStandardHelpTime(
    baseHelpTime,
    level,
    natureKey,
    subskillValues,
    teamBonusCount,
    ribbonValue,
    evolutionStage
  );

  const actualHelpTime = calcActualHelpTime(
    standardHelpTime,
    fieldValue,
    fieldTokui,
    campTicketValue
  );

  const berryEnergyOne = calcBerryEnergyOne(
    level,
    baseBerryEnergy,
    fieldBonusPercent,
    fieldTokui,
    exBonus
  );

  const ingredientRate = calcIngredientRate(
    baseIngRate,
    natureKey,
    level,
    subskillValues
  );

  const skillRate = calcSkillRate(
    baseSkillRate,
    natureKey,
    level,
    subskillValues,
    fieldTokui,
    exBonus
  );

  const maxHold = calcMaxHold(
    baseMaxHold,
    level,
    subskillValues,
    ribbonValue,
    campTicketValue,
    fieldValue,
    fieldTokui
  );

  const { expectedGain: helpGainExpected, berryCount, ingredientExpected } =
  calcHelpGainExpected(
    mon,
    level,
    ingredientRate,
    subskillValues,
    fieldTokui,
    exBonus
  );

  const reachMaxHoldCount = calcReachMaxHoldCount(
    maxHold,
    helpGainExpected
  );

  const helpCounts = calcHelpCounts(
    actualHelpTime,
    reachMaxHoldCount
  );

  const { effectiveCount, ineffectiveCount } = helpCounts;

  const totalBerryEnergy = calcTotalBerryEnergy(
    berryEnergyOne,
    berryCount,
    ingredientRate,
    effectiveCount,
    ineffectiveCount
  );

  const ingredientCount = effectiveCount * ingredientRate;

  const ingredientTotals = calcIngredientTotals(
    mon,
    level,
    ingredientCount,
    ingredientData,
    fieldTokui,
    exBonus
  );

  const { dayCount, sleepCount } = helpCounts;

  const skillCounts = calcSkillCount(
    mon,
    skillRate,
    dayCount,
    reachMaxHoldCount
  );

  const totalSkillCount = skillCounts.totalSkillCount;

  // ==================================================
  // ▼ 5. HTML構築（profileRight はここで初めて DOM に生成される）
  // ==================================================

  const cardHTML = `
    <div class="card-wrapper">
      <div class="card-container" style="--type-color-rgb:${typeColorRGB};">
        <img src="${mon.imageCard}" class="card-image">
      </div>
      ${ribbonImage ? `<img src="${ribbonImage}" class="ribbon-image">` : ""}
    </div>
  `;

// ▼ 食材行の生成（最大3行）
function buildIngredientRows(ingredientTotals) {
  const rows = [];

  // 食材行
  ingredientTotals.forEach(row => {
    rows.push(`
      <div class="right-row three-cols">
        <div class="right-value">
          <img src="${row.image}" class="ingredient-icon">
        </div>
        <div class="right-value">${row.totalCount.toFixed(1)}個</div>
        <div class="right-value">${Math.round(row.totalEnergy)}</div>
      </div>
    `);
  });

  // グレーアウト行
  const missing = 3 - ingredientTotals.length;
  const grayRows = [];

  for (let i = 0; i < missing; i++) {
    grayRows.push(`
      <div class="right-row three-cols gray-row">
        <div></div>
        <div></div>
        <div></div>
      </div>
    `);
  }

  return { ingredientRows: rows, grayRows: grayRows };
}

const { ingredientRows, grayRows } = buildIngredientRows(ingredientTotals);

// 最下段は「総スキル発動回数」か「グレーアウト行」
let lastRowHtml = "";

// 食材が3種類 → 最下段は総スキル発動回数
if (ingredientTotals.length === 3) {
  lastRowHtml = `
    <div class="right-row two-cols no-bottom">
      <div class="right-label">総スキル発動回数</div>
      <div class="right-value">${totalSkillCount.toFixed(2)} 回/day</div>
    </div>
  `;
}

// 食材が1〜2種類 → 最下段はグレーアウト行
else {
  // グレーアウト行の最後に no-bottom を付ける
  const lastGrayIndex = grayRows.length - 1;
  grayRows[lastGrayIndex] = grayRows[lastGrayIndex].replace(
    'right-row three-cols gray-row',
    'right-row three-cols gray-row no-bottom'
  );

  lastRowHtml = `
    <div class="right-row two-cols">
      <div class="right-label">総スキル発動回数</div>
      <div class="right-value">${totalSkillCount.toFixed(2)} 回/day</div>
    </div>
    ${grayRows.join("")}
  `;
}

let html = `
  <div class="result-table">

  <!--左列-->
  <div class="result-left">
    <div class="left-main">
      ${cardHTML}
    </div>

    <div class="left-middle">
      <div class="left-value">${type} / ${mon.tokui}</div>
    </div>

    <div class="left-bottom">
      <div class="left-value">${mon.mainSkill}</div>
    </div>
  </div>

  <!--中央列-->
  <div class="result-center">
    <div class="center-row">
      <div class="center-label">標準おてつだい時間</div>
      <div class="center-value">${standardHelpTime} 秒</div>
    </div>

    <div class="center-row">
      <div class="center-label">実おてつだい時間</div>
      <div class="center-value">${actualHelpTime} 秒</div>
    </div>

    <div class="center-row">
      <div class="center-label">きのみエナジー単価</div>
      <div class="center-value">${berryEnergyOne} <img src="${berry.image}" class="berry-icon"></div>
    </div>

    <div class="center-row">
      <div class="center-label">食材確率</div>
      <div class="center-value">${(ingredientRate * 100).toFixed(1)}%</div>
    </div>

    <div class="center-row">
      <div class="center-label">スキル確率</div>
      <div class="center-value">${(skillRate * 100).toFixed(1)}%</div>
    </div>

    <div class="center-bottom">
      <div class="center-label">最大所持数</div>
      <div class="center-value">${maxHold}個</div>
    </div>
  </div>

  <!--右列-->
  <div class="result-right">
    <div class="right-row two-cols">
      <div class="right-label">総きのみエナジー</div>
      <div class="right-value">${Math.round(totalBerryEnergy)} energy/day</div>
    </div>

    <div class="right-row three-cols">
      <div class="right-label">食材</div>
      <div class="right-label">個数</div>
      <div class="right-label">エナジー</div>
    </div>

      ${ingredientRows.join("")}

      ${lastRowHtml}

      </div>
</div>

<small>※常時げんき80%以上で算出</small>

`;

document.getElementById("summary").innerHTML = html;
}
