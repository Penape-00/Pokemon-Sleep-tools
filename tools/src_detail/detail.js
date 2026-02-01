// ==================================================
//  ▼ 初期化
// ==================================================

document.addEventListener("DOMContentLoaded", () => {

  // ▼ 性格の初期値を「がんばりや（hardy）」に設定
  const natureSelect = document.getElementById("natureSelect");
  natureSelect.value = "hardy";

  // ▼ タイプ選択イベント
  document.getElementById("typeSelect")
    .addEventListener("change", updatePokemonList);

  // ▼ ポケモン選択イベント
  document.getElementById("pokemonSelect")
    .addEventListener("change", onPokemonSelected);

  // ▼ 検索欄イベント
  document.getElementById("pokemonSearch")
    .addEventListener("input", onSearchInput);

  // ▼ クリアボタン
  document.getElementById("clearBtn")
    .addEventListener("click", clearSettings);

  // ▼ 計算ボタン
  document.getElementById("calcBtn")
    .addEventListener("click", calculateAndRender);

  // ▼ メニュー開閉
  setupMenuToggle();
});


// ==================================================
//  ▼ メニュー開閉
// ==================================================

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


// ==================================================
//  ▼ タイプ選択 → ポケモン候補更新
// ==================================================

function updatePokemonList() {
  const type = document.getElementById("typeSelect").value;
  const select = document.getElementById("pokemonSelect");

  select.innerHTML = '<option value="">選択してください</option>';

  if (!pokemonData[type]) return;

  pokemonData[type].forEach(entry => {
    const name = entry.split("|")[0];
    const opt = document.createElement("option");
    opt.value = entry;
    opt.textContent = name;
    select.appendChild(opt);
  });
}


// ==================================================
//  ▼ ポケモン選択時：食材スロット更新
// ==================================================

function onPokemonSelected() {
  const selected = this.value;
  if (!selected) {
    updateIngredientSelectors(null);
    return;
  }
  const pokemonName = selected.split("|")[0];
  updateIngredientSelectors(pokemonName);
}


// ==================================================
//  ▼ 食材スロット更新
// ==================================================

function updateIngredientSelectors(pokemonName) {
  const lv1  = document.getElementById("ingredientLv1");
  const lv30 = document.getElementById("ingredientLv30");
  const lv60 = document.getElementById("ingredientLv60");

  // 未選択時はリセット
  if (!pokemonName || !ingredientOptions[pokemonName]) {
    const reset = '<option value="">ポケモンを選択してください</option>';
    lv1.innerHTML = lv30.innerHTML = lv60.innerHTML = reset;
    return;
  }

  const data = ingredientOptions[pokemonName];

  function setOptions(selectEl, options) {
    selectEl.innerHTML = "";
    options.forEach(item => {
      const opt = document.createElement("option");
      opt.value = item;
      opt.textContent = item;
      selectEl.appendChild(opt);
    });
    selectEl.value = options[0];
    selectEl.disabled = (options.length === 1);
  }

  setOptions(lv1,  data.level1);
  setOptions(lv30, data.level30);
  setOptions(lv60, data.level60);
}


// ==================================================
//  ▼ ポケモン検索（オートコンプリート）
// ==================================================

function hiraToKana(str) {
  return str.replace(/[\u3041-\u3096]/g, ch =>
    String.fromCharCode(ch.charCodeAt(0) + 0x60)
  );
}

function onSearchInput() {
  const raw = this.value.trim();
  const keyword = hiraToKana(raw);
  const type = document.getElementById("typeSelect").value;

  const autocompleteList = document.getElementById("autocompleteList");
  autocompleteList.innerHTML = "";
  autocompleteList.style.display = "none";

  if (!keyword) return;

  let list = [];

  Object.keys(pokemonData).forEach(typeKey => {
    pokemonData[typeKey].forEach(entry => {
      const name = entry.split("|")[0];

      if (type && type !== typeKey) return;
      if (!name.startsWith(keyword)) return;

      list.push({ name, entry });
    });
  });

  list.sort((a, b) => a.name.localeCompare(b.name, "ja"));

  if (list.length === 0) return;

  list.forEach(item => {
    const div = document.createElement("div");
    div.className = "autocomplete-item";
    div.textContent = item.name;

    div.addEventListener("click", () => {
      document.getElementById("pokemonSearch").value = item.name;

      const select = document.getElementById("pokemonSelect");
      select.innerHTML = `<option value="${item.entry}">${item.name}</option>`;
      select.value = item.entry;

      const pokemonName = item.entry.split("|")[0];
      updateIngredientSelectors(pokemonName);

      autocompleteList.style.display = "none";
    });

    autocompleteList.appendChild(div);
  });

  autocompleteList.style.display = "block";
}


// ==================================================
//  ▼ 設定クリア
// ==================================================

function clearSettings() {
  const ids = [
    "typeSelect", "pokemonSelect", "level",
    "natureSelect", "subskillSpeed", "subskillIngredient", "subskillSkill",
    "berryCountSkill", "teamBonus", "fieldBonus", "fieldBerryBonus",
    "campTicket", "EXtype", "EXBonus"
  ];

  ids.forEach(id => {
    const el = document.getElementById(id);
    if (!el) return;

    if (el.tagName === "SELECT") {
      el.selectedIndex = 0;
    } else if (el.type === "number") {
      el.value = (id === "level") ? 65 : 0;
    }
  });

  // 性格は「がんばりや」に戻す
  document.getElementById("natureSelect").value = "hardy";

  // 検索欄リセット
  document.getElementById("pokemonSearch").value = "";

  // ポケモン欄初期化
  document.getElementById("pokemonSelect").innerHTML =
    '<option value="">タイプを選択してください</option>';

  // 食材欄初期化
  updateIngredientSelectors(null);

  // 結果クリア
  document.getElementById("summary").innerHTML = "";
  document.getElementById("tableArea").innerHTML = "";
}


// ==================================================
//  ▼ 計算 → 結果描画
// ==================================================

function calculateAndRender() {

  // ▼ ポケモン選択
  const selected = document.getElementById("pokemonSelect").value;
  if (!selected) {
    alert("ポケモンを選択してください");
    return;
  }

  const [
    name, type, tokui,
    baseTimeStr, berryEnergyBaseStr,
    ingRateStr, skillRateStr
  ] = selected.split("|");

  const level = parseInt(document.getElementById("level").value);

  // ▼ 性格
  const natureKey = document.getElementById("natureSelect").value;
  const nature = natureModifiers[natureKey];

  // ▼ サブスキル
  const subSpeed = parseFloat(document.getElementById("subskillSpeed").value);
  const subIng = parseFloat(document.getElementById("subskillIngredient").value);
  const subSkill = parseFloat(document.getElementById("subskillSkill").value);
  const berryCountSkill = parseInt(document.getElementById("berryCountSkill").value);
  const teamBonus = parseInt(document.getElementById("teamBonus").value);

  // ▼ フィールド・キャンプ
  const fieldBonus = parseFloat(document.getElementById("fieldBonus").value);
  const fieldBerryBonus = parseFloat(document.getElementById("fieldBerryBonus").value);
  const campTicket = parseFloat(document.getElementById("campTicket").value);

  // ▼ EX
  const exType = document.getElementById("EXtype").value;
  const exBonus = document.getElementById("EXBonus").value;

  // ▼ 食材スロット
  const ingredientLv1 = document.getElementById("ingredientLv1").value;
  const ingredientLv30 = document.getElementById("ingredientLv30").value;
  const ingredientLv60 = document.getElementById("ingredientLv60").value;

  // ▼ おてつだい時間
  const { standardHelpTime, helpTime } = calcHelpTime(
    parseFloat(baseTimeStr), level, nature, subSpeed, teamBonus, exType, campTicket
  );

  // ▼ 1日の行動回数
  const actionsPerDay = 86400 / helpTime;

  // ▼ きのみエナジー（1回）
  const berryEnergyPerHelp = calcBerryEnergy(
    level, parseFloat(berryEnergyBaseStr), 1,
    fieldBerryBonus, berryCountSkill, fieldBonus,
    exBonus, tokui, exType
  );

  // ▼ きのみエナジー（通常）
  const finalIngredientRate =
    parseFloat(ingRateStr) * nature.ingredient * (1 + subIng);

  const berryEnergyPerDay =
    berryEnergyPerHelp * actionsPerDay * (1 - finalIngredientRate);

  // ▼ きのみのみモード
  const berryOnlyEnergyPerDay =
    berryEnergyPerHelp * actionsPerDay;

  // ▼ スキル発動
  const skillPerDay = calcSkillPerDay(
    parseFloat(skillRateStr), nature, subSkill,
    exBonus, exType, actionsPerDay
  );

  // ▼ 食材計算
  const ingredientPerDayMap = calcIngredientPerDay(
    name, level, parseFloat(ingRateStr), nature, subIng,
    exBonus, tokui, exType,
    ingredientLv1, ingredientLv30, ingredientLv60,
    actionsPerDay
  );

  // ▼ 食材エナジー集計
  let ingredientEnergyTotal = 0;
  let ingredientRows = "";

  Object.keys(ingredientPerDayMap).forEach(ingName => {
    const count = ingredientPerDayMap[ingName];
    const baseEnergy = ingredientEnergy[ingName] || 0;
    const boostedEnergy = baseEnergy * (1 + fieldBonus / 100);
    const totalEnergy = count * boostedEnergy;

    ingredientEnergyTotal += totalEnergy;

    ingredientRows += `
      <tr>
        <td>${ingName}</td>
        <td>${count.toFixed(2)}</td>
        <td>${totalEnergy.toFixed(1)}</td>
      </tr>
    `;
  });

  if (!ingredientRows) {
    ingredientRows = `<tr><td colspan="3">（食材なし）</td></tr>`;
  }

  // ▼ 総合エナジー
  const totalEnergy = Math.round(berryEnergyPerDay + ingredientEnergyTotal);

  // ▼ 出力
  document.getElementById("summary").innerHTML = `
    <p><strong>おてつだい時間:</strong> ${helpTime.toFixed(1)} 秒（標準: ${standardHelpTime} 秒）</p>
    <p><strong>きのみエナジー（通常）:</strong> ${Math.round(berryEnergyPerDay)} energy/day</p>
    <p><strong>きのみエナジー（きのみのみ）:</strong> ${Math.round(berryOnlyEnergyPerDay)} energy/day</p>
    <p><strong>スキル発動:</strong> ${skillPerDay.toFixed(2)} 回/day</p>
    <p><strong>食材エナジー:</strong> ${ingredientEnergyTotal.toFixed(1)} energy/day</p>
    <p><strong>総合エナジー:</strong> ${totalEnergy} energy/day</p>
  `;

  document.getElementById("tableArea").innerHTML = `
    <h3>1日あたりの食材内訳</h3>
    <table>
      <tr><th>食材</th><th>個数/day</th><th>合計エナジー/day</th></tr>
      ${ingredientRows}
    </table>
  `;
}