/* ==========================================================
   データ参照ヘルパー（expTable.js を前提）
========================================================== */
function getExpTableForPokemon() {
  const select = document.getElementById("pokemonSelect");
  const mult = Number(select.options[select.selectedIndex]?.dataset?.multiplier) || 1.0;

  if (mult === 1.5) return expTables.x1_5;
  if (mult === 1.8) return expTables.x1_8;
  if (mult === 2.2) return expTables.x2_2;
  return expTables.base;
}

function getNatureBonus() {
  const sel = document.getElementById("natureSelect");
  return Number(sel.options[sel.selectedIndex]?.dataset?.bonus) || 1.0;
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
   目標レベル制御（プリセット + 任意入力）
========================================================== */
function setupTargetLevelControl() {
  const sel = document.getElementById("targetLevelSelect");
  const input = document.getElementById("targetLevel");

  function syncFromSelect() {
    if (sel.value === "custom") {
      input.style.display = "block";
      input.disabled = false;
      input.focus();
    } else {
      input.style.display = "none";
      input.disabled = true;
      input.value = sel.value;
    }
  }

  sel.addEventListener("change", syncFromSelect);

  // 初期同期
  syncFromSelect();
}

function getTargetLevel() {
  const sel = document.getElementById("targetLevelSelect");
  const input = document.getElementById("targetLevel");
  if (sel.value === "custom") {
    const v = Number(input.value);
    if (!Number.isFinite(v)) return null;
    return Math.max(1, Math.min(70, Math.floor(v)));
  }
  return Number(sel.value);
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
  if (level <= 24) return 40;
  if (level <= 29) return 35;
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
   進行シミュレーション（合計 + レベル別累計を返す）
========================================================== */
function simulateProgress(currentLv, remainingExp, targetLv, natureBonus, candyBoost) {
  const table = getExpTableForPokemon();

  let lv = currentLv;
  let expLeft = remainingExp;

  let candyCount = 0;
  let shardTotal = 0;

  // ★ 純粋な累計EXP（EXPテーブルの値のみを足す）
  //    15→16 の行には exp[15]、
  //    17 の行には exp[15] + exp[16] …という形になる
  let cumulativeExp = 0;

  const breakdown = [];

  while (lv < targetLv) {
    const candyExp = getCandyExpPerUse(lv, natureBonus, candyBoost);

    let shardCost = shardTable[lv] ?? 0;
    if (candyBoost === "mini") shardCost *= 4;
    if (candyBoost === "full") shardCost *= 5;

    expLeft -= candyExp;
    candyCount++;
    shardTotal += shardCost;

    if (expLeft <= 0) {
      // ★ レベルアップ前のレベルの EXP を累計に加算
      //    15→16 のときは exp[15] を加算する
      cumulativeExp += table[lv] ?? 0;

      lv++;

      breakdown.push({
        levelToReach: lv,
        candySoFar: candyCount,
        shardsSoFar: shardTotal,
        cumulativeExp: cumulativeExp
      });

      if (lv >= targetLv) break;

      const overflow = Math.abs(expLeft);
      expLeft = (table[lv] ?? 0) - overflow;
    }
  }

  return {
    totalCandy: candyCount,
    totalShards: shardTotal,
    breakdown
  };
}

/* ==========================================================
   メイン計算（結果表示・所持数差分・段階別出力）
========================================================== */
function calculateExp() {
  const currentLv = Number(document.getElementById("currentLevel").value);
  const remainingExp = Number(document.getElementById("currentExp").value);
  const targetLv = getTargetLevel();

  if (!targetLv) {
    alert("目標レベルを正しく入力してください。");
    return;
  }

  const sleepExp = Number(document.getElementById("sleepExp").value);
  const sleepBonus = Number(document.getElementById("sleepBonus")?.value || 0);
  const candyBoost = document.getElementById("candyBoost").value;

  const natureBonus = getNatureBonus();
  const table = getExpTableForPokemon();

  if (currentLv >= targetLv) {
    document.getElementById("resultTable").innerHTML =
      "<tr><td colspan='2'>エラー：現在のレベルが目標レベル以上です。</td></tr>";
    document.getElementById("resultNote").style.display = "none";
    document.getElementById("breakdownDetails").style.display = "none";
    return;
  }

  // 必要EXP合計
  let totalExp = remainingExp;
  for (let lv = currentLv + 1; lv < targetLv; lv++) {
    totalExp += table[lv] ?? 0;
  }

  // アメ＆かけらのシミュレーション（合計 + breakdown）
  const sim = simulateProgress(currentLv, remainingExp, targetLv, natureBonus, candyBoost);
  const candyCount = sim.totalCandy;
  const shardTotal = sim.totalShards;

  // 睡眠EXPによる日数計算
  let sleepExpPerDay = sleepExp * (1 + sleepBonus * 0.14);
  sleepExpPerDay *= natureBonus;
  sleepExpPerDay = Math.round(sleepExpPerDay);

  let days = "—";
  if (sleepExpPerDay > 0) {
    days = Math.ceil(totalExp / sleepExpPerDay) + "日";
  } else {
    days = "計算不可（睡眠EXPが0）";
  }

  // 所持数（任意）
  const ownedCandyRaw = document.getElementById("ownedCandy")?.value;
  const ownedShardsRaw = document.getElementById("ownedShards")?.value;
  const ownedCandy = ownedCandyRaw === "" || ownedCandyRaw == null ? null : Math.max(0, Math.floor(Number(ownedCandyRaw)));
  const ownedShards = ownedShardsRaw === "" || ownedShardsRaw == null ? null : Math.max(0, Math.floor(Number(ownedShardsRaw)));

  // 所持差分
  let candyDiffHtml = "";
  if (ownedCandy !== null) {
    const diff = ownedCandy - candyCount;
    if (diff >= 0) {
      candyDiffHtml = `<tr><td>アメの残り</td><td class="status-positive">${diff} 個</td></tr>`;
    } else {
      candyDiffHtml = `<tr><td>アメの不足</td><td class="status-negative">${Math.abs(diff)} 個</td></tr>`;
    }
  }

  let shardDiffHtml = "";
  if (ownedShards !== null) {
    const diff = ownedShards - shardTotal;
    if (diff >= 0) {
      shardDiffHtml = `<tr><td>ゆめのかけらの残り</td><td class="status-positive">${diff} 個</td></tr>`;
    } else {
      shardDiffHtml = `<tr><td>ゆめのかけらの不足</td><td class="status-negative">${Math.abs(diff)} 個</td></tr>`;
    }
  }

  // 結果テーブル生成
  const html = `
    <tr><th>項目</th><th>値</th></tr>
    <tr><td>必要EXP合計</td><td>${totalExp}</td></tr>
    <tr><td>必要アメ数</td><td>${candyCount} 個</td></tr>
    ${candyDiffHtml}
    <tr><td>必要ゆめのかけら</td><td>${shardTotal} 個</td></tr>
    ${shardDiffHtml}
    <tr><td>必要日数（睡眠）</td><td>${days}</td></tr>
  `;

  document.getElementById("resultTable").innerHTML = html;
  document.getElementById("resultNote").style.display = "block";

  // 段階別累計の表示（累計EXP 列に変更）
  const breakdownDetails = document.getElementById("breakdownDetails");
  const breakdownContainer = document.getElementById("breakdownContainer");

  if (sim.breakdown && sim.breakdown.length > 0) {
    // build table
    let tableHtml = `<table class="breakdown-table">
      <tr>
        <th>到達レベル</th>
        <th>累積アメ</th>
        <th>累積ゆめのかけら</th>
        <th>累計EXP</th>
      </tr>
    `;

    sim.breakdown.forEach(row => {
      const candySoFar = row.candySoFar;
      const shardsSoFar = row.shardsSoFar;
      const cumulativeExp = row.cumulativeExp;

      let candyDiffCell = "";
      if (ownedCandy !== null) {
        const diff = ownedCandy - candySoFar;
        candyDiffCell = diff >= 0
          ? `<td class="status-positive">${diff}</td>`
          : `<td class="status-negative">${Math.abs(diff)}</td>`;
      }

      let shardDiffCell = "";
      if (ownedShards !== null) {
        const diff = ownedShards - shardsSoFar;
        shardDiffCell = diff >= 0
          ? `<td class="status-positive">${diff}</td>`
          : `<td class="status-negative">${Math.abs(diff)}</td>`;
      }

      tableHtml += `
        <tr>
          <td>${row.levelToReach}</td>
          <td>${candySoFar}</td>
          <td>${shardsSoFar}</td>
          <td>${cumulativeExp}</td>
        </tr>
      `;
    });

    tableHtml += `</table>`;
    breakdownContainer.innerHTML = tableHtml;
    breakdownDetails.style.display = "block";
    breakdownDetails.open = false;
  } else {
    breakdownContainer.innerHTML = "";
    breakdownDetails.style.display = "none";
  }
}

/* ==========================================================
   入力クリア（既存の挙動を踏襲）
========================================================== */
function clearInputs() {
  document.getElementById("currentLevel").value = 15;
  document.getElementById("targetLevel").value = 60;
  // select をプリセット 60 に戻す
  const sel = document.getElementById("targetLevelSelect");
  sel.value = "60";

  document.getElementById("sleepExp").value = 100;
  document.getElementById("sleepBonus").value = 0;
  document.getElementById("candyBoost").value = "none";

  document.getElementById("ownedCandy").value = "";
  document.getElementById("ownedShards").value = "";

  updateRemainingExp();
  document.getElementById("resultNote").style.display = "none";
  document.getElementById("resultTable").innerHTML = "";
  document.getElementById("breakdownContainer").innerHTML = "";
  document.getElementById("breakdownDetails").style.display = "none";
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
   オプション折り畳みトグル
========================================================== */
function setupOptionsToggleSwitch() {
  const toggleSwitch = document.getElementById("optionsToggleSwitch");
  const optionsPanel = document.getElementById("optionsPanel");
  if (!toggleSwitch || !optionsPanel) return;

  toggleSwitch.addEventListener("change", () => {
    optionsPanel.style.display = toggleSwitch.checked ? "block" : "none";
  });
}

/* ==========================================================
   初期化
========================================================== */
document.addEventListener("DOMContentLoaded", () => {
  populatePokemonSelect();
  populateNatureSelect();
  updateRemainingExp();

  setupTargetLevelControl();
  setupOptionsToggleSwitch();

  document.getElementById("currentLevel").addEventListener("input", updateRemainingExp);
  document.getElementById("pokemonSelect").addEventListener("change", updateRemainingExp);

  document.getElementById("calcButton").addEventListener("click", calculateExp);
  document.getElementById("clearButton").addEventListener("click", clearInputs);

  setupMenuToggle();
});
