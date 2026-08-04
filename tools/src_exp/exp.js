// Expシミュレーター ver3.0.0

// ▼ EXPテーブル・性格・ポケモン倍率は expTable.js を前提

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

// ▼ ポケモンセレクト生成
function populatePokemonSelect() {
  const select = document.getElementById("pokemonSelect");
  select.innerHTML = "";

  const other = document.createElement("option");
  other.value = "other";
  other.textContent = "その他";
  other.dataset.multiplier = 1.0;
  select.appendChild(other);

  Object.keys(pokemonGroups).forEach(groupName => {
    if (groupName === "single") return;

    const optgroup = document.createElement("optgroup");
    optgroup.label = groupName;

    const group = pokemonGroups[groupName] || [];
    group.forEach(p => {
      const op = document.createElement("option");
      op.value = p.value;
      op.textContent = p.label;
      op.dataset.multiplier = p.multiplier;
      optgroup.appendChild(op);
    });

    select.appendChild(optgroup);
  });
}

// ▼ 性格セレクト生成
function populateNatureSelect() {
  const select = document.getElementById("natureSelect");
  select.innerHTML = "";

  const other = document.createElement("option");
  other.value = "other";
  other.textContent = "その他";
  other.dataset.bonus = 1.00;
  select.appendChild(other);

  Object.keys(natureGroups).forEach(groupName => {
    if (groupName === "single") return;

    const optgroup = document.createElement("optgroup");
    optgroup.label = groupName;

    const group = natureGroups[groupName] || [];
    group.forEach(n => {
      const op = document.createElement("option");
      op.value = n.value;
      op.textContent = n.label;
      op.dataset.bonus = n.bonus;
      optgroup.appendChild(op);
    });

    select.appendChild(optgroup);
  });
}

// ▼ 目標レベル制御
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

// ▼ 現在レベル → 次レベルまでの必要EXPを更新
function updateRemainingExp() {
  const lv = Number(document.getElementById("currentLevel").value);
  const table = getExpTableForPokemon();
  const nextExp = table[lv] ?? 0;
  document.getElementById("currentExp").value = nextExp;
}

// ▼ モード取得
function getSelectedMode() {
  const btn = document.querySelector(".mode-buttons button.active");
  return btn ? btn.dataset.mode : "candy";
}

function setupModeButtons() {
  const buttons = document.querySelectorAll(".mode-buttons button");
  const panels = document.querySelectorAll(".mode-panel");

  buttons.forEach(btn => {
    btn.addEventListener("click", () => {
      const mode = btn.dataset.mode;

      buttons.forEach(b => b.classList.remove("active"));
      btn.classList.add("active");

      panels.forEach(p => {
        p.style.display = p.id === `mode-${mode}` ? "block" : "none";
      });
    });
  });
}

// ▼ アメ1個あたりのEXP
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

// ▼ アメ進行シミュレーション（累計EXPはテーブルベース）
function simulateCandyProgress(currentLv, remainingExp, targetLv, natureBonus, candyBoost) {
  const table = getExpTableForPokemon();

  let lv = currentLv;
  let expLeft = remainingExp;
  let candyCount = 0;
  let shardTotal = 0;

  // ★ 累計EXPは「remainingExp」からスタート（ここは正しい）
  let cumulativeExp = remainingExp;

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

      // ★ 最初のレベルアップ時は table[currentLv] を加算しない
      if (lv !== currentLv) {
        cumulativeExp += table[lv] ?? 0;
      }

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

// ▼ おひるね島計算
function calculateNapMode(currentLv, remainingExp, targetLv, natureBonus, ticketOn) {
  const table = getExpTableForPokemon();

  let totalExp = remainingExp;
  for (let lv = currentLv + 1; lv < targetLv; lv++) {
    totalExp += table[lv] ?? 0;
  }

  const nature = natureBonus > 1 ? natureBonus : 1.0;
  const ticketExp = ticketOn ? 450 : 0;

  const expPerDayNormal = (150 + ticketExp) * nature;
  const expPerDayPenalty = (75 + ticketExp * 0.5) * nature;

  let days = Math.ceil(totalExp / expPerDayNormal);
  if (days < 7) days = Math.ceil(totalExp / expPerDayPenalty);

  // ★ 累計EXPは remainingExp からスタート
  let cumulativeExp = remainingExp;
  const breakdown = [];

  for (let lv = currentLv; lv < targetLv; lv++) {

    // ★ 最初のレベルアップ時は table[currentLv] を加算しない
    if (lv !== currentLv) {
      cumulativeExp += table[lv] ?? 0;
    }

    let needDays = Math.ceil(cumulativeExp / expPerDayNormal);
    if (needDays < 7) needDays = Math.ceil(cumulativeExp / expPerDayPenalty);

    breakdown.push({
      levelToReach: lv + 1,
      cumulativeExp: cumulativeExp,
      days: needDays
    });
  }

  return {
    totalExp,
    days,
    breakdown
  };
}

// ▼ 睡眠モード計算
function calculateSleepMode(currentLv, remainingExp, targetLv, natureBonus, sleepExp, sleepBonus) {
  const table = getExpTableForPokemon();

  let totalExp = remainingExp;
  for (let lv = currentLv + 1; lv < targetLv; lv++) {
    totalExp += table[lv] ?? 0;
  }

  let sleepExpPerDay = sleepExp * (1 + sleepBonus * 0.14);
  sleepExpPerDay *= natureBonus;
  sleepExpPerDay = Math.round(sleepExpPerDay);

  let days = sleepExpPerDay > 0 ? Math.ceil(totalExp / sleepExpPerDay) + "日" : "計算不可（睡眠EXPが0）";

  // ★ 累計EXPは remainingExp からスタート
  let cumulativeExp = remainingExp;
  const breakdown = [];

  for (let lv = currentLv; lv < targetLv; lv++) {

    // ★ 最初のレベルアップ時は table[currentLv] を加算しない
    if (lv !== currentLv) {
      cumulativeExp += table[lv] ?? 0;
    }

    let needDays = sleepExpPerDay > 0
      ? Math.ceil(cumulativeExp / sleepExpPerDay) + "日"
      : "計算不可";

    breakdown.push({
      levelToReach: lv + 1,
      cumulativeExp: cumulativeExp,
      days: needDays
    });
  }

  return {
    totalExp,
    days,
    breakdown
  };
}

// ▼ メイン計算
function calculateExp() {
  const currentLv = Number(document.getElementById("currentLevel").value);
  const remainingExp = Number(document.getElementById("currentExp").value || 0);
  const targetLv = getTargetLevel();

  if (!targetLv) {
    alert("目標レベルを正しく入力してください。");
    return;
  }

  const natureBonus = getNatureBonus();
  const table = getExpTableForPokemon();

  if (currentLv >= targetLv) {
    document.getElementById("resultTable").innerHTML =
      "<tr><td colspan='2'>エラー：現在のレベルが目標レベル以上です。</td></tr>";
    document.getElementById("resultNote").style.display = "none";
    document.getElementById("breakdownDetails").style.display = "none";
    return;
  }

  const mode = getSelectedMode();
  const resultTable = document.getElementById("resultTable");
  const breakdownDetails = document.getElementById("breakdownDetails");
  const breakdownContainer = document.getElementById("breakdownContainer");

  let html = "";
  let breakdown = [];

  if (mode === "candy") {
    const sleepExp = Number(document.getElementById("sleepExp").value || 0);
    const sleepBonus = Number(document.getElementById("sleepBonus")?.value || 0);
    const candyBoost = document.getElementById("candyBoost").value;

    let totalExp = remainingExp;
    for (let lv = currentLv + 1; lv < targetLv; lv++) {
      totalExp += table[lv] ?? 0;
    }

    const sim = simulateCandyProgress(currentLv, remainingExp, targetLv, natureBonus, candyBoost);
    const candyCount = sim.totalCandy;
    const shardTotal = sim.totalShards;

    let sleepExpPerDay = sleepExp * (1 + sleepBonus * 0.14);
    sleepExpPerDay *= natureBonus;
    sleepExpPerDay = Math.round(sleepExpPerDay);

    let days = "—";
    if (sleepExpPerDay > 0) {
      days = Math.ceil(totalExp / sleepExpPerDay) + "日";
    } else {
      days = "計算不可（睡眠EXPが0）";
    }

    const ownedCandyRaw = document.getElementById("ownedCandy")?.value;
    const ownedShardsRaw = document.getElementById("ownedShards")?.value;
    const ownedCandy = ownedCandyRaw === "" || ownedCandyRaw == null ? null : Math.max(0, Math.floor(Number(ownedCandyRaw)));
    const ownedShards = ownedShardsRaw === "" || ownedShardsRaw == null ? null : Math.max(0, Math.floor(Number(ownedShardsRaw)));

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

    html = `
      <tr><th>項目</th><th>値</th></tr>
      <tr><td>EXP合計</td><td>${totalExp}</td></tr>
      <tr><td>アメ数</td><td>${candyCount} 個</td></tr>
      ${candyDiffHtml}
      <tr><td>ゆめのかけら</td><td>${shardTotal} 個</td></tr>
      ${shardDiffHtml}
    `;

    breakdown = sim.breakdown;

    if (breakdown && breakdown.length > 0) {
      let tableHtml = `
        <table class="breakdown-table">
          <tr>
            <th>到達レベル</th>
            <th>アメ数</th>
            <th>ゆめのかけら</th>
            <th>累計EXP</th>
          </tr>
      `;

      breakdown.forEach(row => {
        tableHtml += `
          <tr>
            <td>${row.levelToReach}</td>
            <td>${row.candySoFar}</td>
            <td>${row.shardsSoFar}</td>
            <td>${row.cumulativeExp}</td>
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

  } else if (mode === "sleep") {
    const sleepExp = Number(document.getElementById("sleepExp").value || 0);
    const sleepBonus = Number(document.getElementById("sleepBonus")?.value || 0);

    const res = calculateSleepMode(currentLv, remainingExp, targetLv, natureBonus, sleepExp, sleepBonus);

    html = `
      <tr><th>項目</th><th>値</th></tr>
      <tr><td>EXP合計</td><td>${res.totalExp}</td></tr>
      <tr><td>日数（睡眠）</td><td>${res.days}</td></tr>
    `;

    breakdown = res.breakdown;

    if (breakdown && breakdown.length > 0) {
      let tableHtml = `
        <table class="breakdown-table">
          <tr>
            <th>到達レベル</th>
            <th>累計EXP</th>
            <th>日数</th>
          </tr>
      `;

      breakdown.forEach(row => {
        tableHtml += `
          <tr>
            <td>${row.levelToReach}</td>
            <td>${row.cumulativeExp}</td>
            <td>${row.days}</td>
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

  } else if (mode === "nap") {
    const ticketOn = document.getElementById("napRelaxTicket").checked;
    const res = calculateNapMode(currentLv, remainingExp, targetLv, natureBonus, ticketOn);

    html = `
      <tr><th>項目</th><th>値</th></tr>
      <tr><td>EXP合計</td><td>${res.totalExp}</td></tr>
      <tr><td>日数（おひるね島）</td><td>${res.days}日</td></tr>
    `;

    breakdown = res.breakdown;

    if (breakdown && breakdown.length > 0) {
      let tableHtml = `
        <table class="breakdown-table">
          <tr>
            <th>到達レベル</th>
            <th>累計EXP</th>
            <th>日数</th>
          </tr>
      `;

      breakdown.forEach(row => {
        tableHtml += `
          <tr>
            <td>${row.levelToReach}</td>
            <td>${row.cumulativeExp}</td>
            <td>${row.days}</td>
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

  resultTable.innerHTML = html;
  document.getElementById("resultNote").style.display = "block";
}

// ▼ 入力クリア
function clearInputs() {
  document.getElementById("currentLevel").value = 15;
  document.getElementById("targetLevel").value = 60;
  document.getElementById("targetLevelSelect").value = "60";

  document.getElementById("currentExp").value = "";
  document.getElementById("sleepExp").value = 100;
  document.getElementById("sleepBonus").value = 0;
  document.getElementById("candyBoost").value = "none";
  document.getElementById("ownedCandy").value = "";
  document.getElementById("ownedShards").value = "";
  document.getElementById("napRelaxTicket").checked = false;

  updateRemainingExp();

  document.getElementById("resultNote").style.display = "none";
  document.getElementById("resultTable").innerHTML = "";
  document.getElementById("breakdownContainer").innerHTML = "";
  document.getElementById("breakdownDetails").style.display = "none";

  const buttons = document.querySelectorAll(".mode-buttons button");
  const panels = document.querySelectorAll(".mode-panel");
  buttons.forEach(b => b.classList.remove("active"));
  const candyBtn = document.querySelector('.mode-buttons button[data-mode="candy"]');
  if (candyBtn) candyBtn.classList.add("active");
  panels.forEach(p => {
    p.style.display = p.id === "mode-candy" ? "block" : "none";
  });
}

// ▼ メニュー開閉
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

// ▼ 初期化
document.addEventListener("DOMContentLoaded", () => {
  populatePokemonSelect();
  populateNatureSelect();
  updateRemainingExp();

  setupTargetLevelControl();
  setupModeButtons();
  setupMenuToggle();

  document.getElementById("currentLevel").addEventListener("input", updateRemainingExp);
  document.getElementById("pokemonSelect").addEventListener("change", updateRemainingExp);

  document.getElementById("calcButton").addEventListener("click", calculateExp);
  document.getElementById("clearButton").addEventListener("click", clearInputs);
});
