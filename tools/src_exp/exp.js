/* ==========================================================
   ▼ Expテーブルの取得（expTable.js を使用）
========================================================== */
function getExpTableForPokemon() {
  const select = document.getElementById("pokemonSelect");
  const mult = Number(select.options[select.selectedIndex].dataset.multiplier);

  if (mult === 1.5) return expTables.x1_5;
  if (mult === 1.8) return expTables.x1_8;
  if (mult === 2.2) return expTables.x2_2;
  return expTables.base;
}

/* ==========================================================
   ▼ 性格ボーナス取得
========================================================== */
function getNatureBonus() {
  const sel = document.getElementById("natureSelect");
  return Number(sel.options[sel.selectedIndex].dataset.bonus) || 1.0;
}

/* ==========================================================
   ▼ ポケモンセレクト生成（optgroup付き）
========================================================== */
function populatePokemonSelect() {
  const select = document.getElementById("pokemonSelect");
  select.innerHTML = "";

  // その他（single）
  const other = document.createElement("option");
  other.value = "other";
  other.textContent = "　その他";
  other.dataset.multiplier = 1.0;
  select.appendChild(other);

  // 1.5倍 / 1.8倍 / 2.2倍
  for (const groupName of ["1.5倍", "1.8倍", "2.2倍"]) {
    const optgroup = document.createElement("optgroup");
    optgroup.label = groupName;

    pokemonGroups[groupName].forEach(p => {
      const op = document.createElement("option");
      op.value = p.value;
      op.textContent = p.label;
      op.dataset.multiplier = p.multiplier;
      optgroup.appendChild(op);
    });

    select.appendChild(optgroup);
  }
}

/* ==========================================================
   ▼ 性格セレクト生成（optgroup付き）
========================================================== */
function populateNatureSelect() {
  const select = document.getElementById("natureSelect");
  select.innerHTML = "";

  // その他
  const other = document.createElement("option");
  other.value = "other";
  other.textContent = "　その他";
  other.dataset.bonus = 1.00;
  select.appendChild(other);

  for (const groupName of ["▷Exp上昇", "▷Exp下降"]) {
    const optgroup = document.createElement("optgroup");
    optgroup.label = groupName;

    natureGroups[groupName].forEach(n => {
      const op = document.createElement("option");
      op.value = n.value;
      op.textContent = n.label;
      op.dataset.bonus = n.bonus;
      optgroup.appendChild(op);
    });

    select.appendChild(optgroup);
  }
}

/* ==========================================================
   ▼ 現在レベル → 次レベルまでの必要EXPを更新
========================================================== */
function updateRemainingExp() {
  const lv = Number(document.getElementById("currentLevel").value);
  const table = getExpTableForPokemon();
  const nextExp = table[lv] ?? 0;
  document.getElementById("currentExp").value = nextExp;
}

/* ==========================================================
   ▼ アメ1個あたりのEXP
========================================================== */
function getBaseCandyExp(level) {
  if (level <= 24) return 35;
  if (level <= 29) return 30;
  return 25;
}

function getCandyExp(level, natureBonus) {
  return Math.round(getBaseCandyExp(level) * natureBonus);
}

function applyCandyBoost(exp, boostType) {
  if (boostType === "mini") return exp * 2;
  if (boostType === "full") return exp * 2;
  return exp;
}

function getCandyExpPerUse(level, natureBonus, boostType) {
  return applyCandyBoost(getCandyExp(level, natureBonus), boostType);
}

/* ==========================================================
   ▼ アメ使用＋かけらシミュレーション
========================================================== */
function simulateCandyAndShard(currentLv, remainingExp, targetLv, natureBonus, candyBoost) {
  const table = getExpTableForPokemon();

  let lv = currentLv;
  let expLeft = remainingExp;

  let candyCount = 0;
  let shardTotal = 0;

  while (lv < targetLv) {
    let candyExp = getCandyExpPerUse(lv, natureBonus, candyBoost);

    let shardCost = shardTable[lv];
    if (candyBoost === "mini") shardCost *= 4;
    if (candyBoost === "full") shardCost *= 5;

    shardTotal += shardCost;
    expLeft -= candyExp;
    candyCount++;

    if (expLeft <= 0) {
      lv++;
      if (lv >= targetLv) break;

      const overflow = Math.abs(expLeft);
      expLeft = table[lv] - overflow;
    }
  }

  return { candyCount, shardTotal };
}

/* ==========================================================
   ▼ メイン計算
========================================================== */
function calculateExp() {
  const currentLv = Number(document.getElementById("currentLevel").value);
  const remainingExp = Number(document.getElementById("currentExp").value);
  const targetLv = Number(document.getElementById("targetLevel").value);

  const sleepExp = Number(document.getElementById("sleepExp").value);
  const sleepBonus = Number(document.getElementById("sleepBonus").value);
  const candyBoost = document.getElementById("candyBoost").value;

  const natureBonus = getNatureBonus();
  const table = getExpTableForPokemon();

  if (currentLv >= targetLv) {
    document.getElementById("resultTable").innerHTML =
      "<tr><td colspan='2'>エラー：現在のレベルが目標レベル以上です。</td></tr>";
    document.getElementById("resultNote").style.display = "none";
    return;
  }

  // 必要EXP合計
  let totalExp = remainingExp;
  for (let lv = currentLv + 1; lv < targetLv; lv++) {
    totalExp += table[lv];
  }

  // アメ＆かけら
  const { candyCount, shardTotal } = simulateCandyAndShard(
    currentLv,
    remainingExp,
    targetLv,
    natureBonus,
    candyBoost
  );

  // 睡眠EXP
  let sleepExpPerDay = sleepExp * (1 + sleepBonus * 0.14);
  sleepExpPerDay *= natureBonus;
  sleepExpPerDay = Math.round(sleepExpPerDay);

  const days = Math.ceil(totalExp / sleepExpPerDay);

  // 結果テーブル
  const html = `
    <tr><th>項目</th><th>値</th></tr>
    <tr><td>必要EXP</td><td>${totalExp}</td></tr>
    <tr><td>必要アメ数</td><td>${candyCount}</td></tr>
    <tr><td>必要ゆめのかけら</td><td>${shardTotal}</td></tr>
    <tr><td>必要日数</td><td>${days}日</td></tr>
  `;

  document.getElementById("resultTable").innerHTML = html;
  document.getElementById("resultNote").style.display = "block";
}

/* ==========================================================
   ▼ 入力クリア
========================================================== */
function clearInputs() {
  document.getElementById("currentLevel").value = 15;
  document.getElementById("targetLevel").value = 60;
  document.getElementById("sleepExp").value = 100;
  document.getElementById("sleepBonus").value = 0;
  document.getElementById("candyBoost").value = "none";

  updateRemainingExp();
  document.getElementById("resultNote").style.display = "none";
  document.getElementById("resultTable").innerHTML = "";
}

/* ==========================================================
   ▼ メニュー開閉
========================================================== */
function setupMenuToggle() {
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
}

/* ==========================================================
   ▼ 初期化
========================================================== */
document.addEventListener("DOMContentLoaded", () => {
  populatePokemonSelect();
  populateNatureSelect();
  updateRemainingExp();

  document.getElementById("currentLevel").addEventListener("input", updateRemainingExp);
  document.getElementById("pokemonSelect").addEventListener("change", updateRemainingExp);

  document.getElementById("calcButton").addEventListener("click", calculateExp);
  document.getElementById("clearButton").addEventListener("click", clearInputs);

  setupMenuToggle();
});