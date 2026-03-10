/* ==========================================================
   ▼ 初期化
========================================================== */
document.addEventListener("DOMContentLoaded", () => {
  generatePokemonInputs();      // ★ テンプレートから5体生成
  setupMenuToggle();
  setupTabs();
  setupTypeSelectors();
  setupSubSkillSelectors();
  setupNatureSelectors();
  setupPartyAutocomplete();

  loadState();                  // ★ LocalStorage 復元（UI 初期化後）

  document.getElementById("exMode").addEventListener("change", updateTypeLabels);
  document.getElementById("fieldSelect").addEventListener("change", onFieldChange);

  document.getElementById("clearAllButton").addEventListener("click", clearAllPokemon);

  document.querySelectorAll(".btn-clear").forEach(btn => {
    btn.addEventListener("click", () => clearOnePokemon(btn.dataset.clear));
  });

  document.getElementById("calcButton").addEventListener("click", calculateParty);

  // ★ 入力変更時に自動保存
  document.addEventListener("input", saveState);
  document.addEventListener("change", saveState);
});

/* ==========================================================
   ▼ テンプレートから5体分の入力欄を生成
========================================================== */
function generatePokemonInputs() {
  const container = document.getElementById("pokemon-container");
  const template = document.getElementById("pokemon-template");

  for (let i = 1; i <= 5; i++) {
    const clone = template.content.cloneNode(true);
    const tab = clone.querySelector(".tab-content");

    tab.id = "tab" + i;
    clone.querySelector("h3").textContent = `${i}体目`;

    tab.querySelectorAll(".pokeName, .pokeLevel, .pokeNature, .pokeSubSkill").forEach(el => {
      el.dataset.id = i;
    });

    // ▼ ★ autocomplete-list にも data-id を付与（これが抜けていた）
    const listEl = tab.querySelector(".autocomplete-list");
    listEl.dataset.id = i;

    // ▼ クリアボタン
    clone.querySelector(".btn-clear").dataset.clear = i;

    container.appendChild(clone);
  }
}

/* ==========================================================
   ▼ LocalStorage 保存
========================================================== */
function saveState() {
  const state = {};

  // ▼ 全体設定
  state.global = {
    fieldSelect: fieldSelect.value,
    exMode: exMode.value,
    type1: type1.value,
    type2: type2.value,
    type3: type3.value,
    fieldBonus: fieldBonus.value,
    campTicket: campTicket.value,
    exBonus: exBonus.value
  };

  // ▼ ポケモン5体
  state.pokemon = [];
  for (let i = 1; i <= 5; i++) {
    const entry = {
      name: document.querySelector(`.pokeName[data-id="${i}"]`).value,
      level: document.querySelector(`.pokeLevel[data-id="${i}"]`).value,
      nature: document.querySelector(`.pokeNature[data-id="${i}"]`).value,
      subskills: []
    };

    for (let s = 1; s <= 5; s++) {
      entry.subskills.push(
        document.querySelector(`.pokeSubSkill[data-id="${i}"][data-slot="${s}"]`).value
      );
    }

    state.pokemon.push(entry);
  }

  // ▼ タブ状態
  const activeTab = document.querySelector(".tab-btn.active")?.dataset.tab || "1";
  state.activeTab = activeTab;

  localStorage.setItem("partyState", JSON.stringify(state));
}

/* ==========================================================
   ▼ LocalStorage 復元
========================================================== */
function loadState() {
  const saved = localStorage.getItem("partyState");
  if (!saved) return;

  const state = JSON.parse(saved);

  // ▼ 全体設定
  for (const key in state.global) {
    const el = document.getElementById(key);
    if (el) el.value = state.global[key];
  }

  // ▼ フィールド適正の自動設定を反映
  onFieldChange();

  // ▼ ポケモン5体
  state.pokemon.forEach((p, i) => {
    const id = i + 1;

    document.querySelector(`.pokeName[data-id="${id}"]`).value = p.name;
    document.querySelector(`.pokeLevel[data-id="${id}"]`).value = p.level;
    document.querySelector(`.pokeNature[data-id="${id}"]`).value = p.nature;

    p.subskills.forEach((s, idx) => {
      document.querySelector(`.pokeSubSkill[data-id="${id}"][data-slot="${idx + 1}"]`).value = s;
    });
  });

  // ▼ タブ復元
  const tab = state.activeTab;
  document.querySelectorAll(".tab-btn").forEach(btn => {
    btn.classList.toggle("active", btn.dataset.tab === tab);
  });
  document.querySelectorAll(".tab-content").forEach(content => {
    content.classList.toggle("active", content.id === `tab${tab}`);
  });
}

/* ==========================================================
   ▼ スライドメニュー
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
   ▼ タブ切り替え
========================================================== */
function setupTabs() {
  const buttons = document.querySelectorAll(".tab-btn");
  const contents = document.querySelectorAll(".tab-content");

  buttons.forEach(btn => {
    btn.addEventListener("click", () => {
      const tab = btn.dataset.tab;

      buttons.forEach(b => b.classList.remove("active"));
      contents.forEach(c => c.classList.remove("active"));

      btn.classList.add("active");
      document.getElementById("tab" + tab).classList.add("active");

      saveState(); // ★ タブ切り替えも保存
    });
  });
}

/* ==========================================================
   ▼ タイプ選択
========================================================== */
const TYPE_LIST = [
  "ノーマル","ほのお","みず","でんき","くさ","こおり","かくとう","どく",
  "じめん","ひこう","エスパー","むし","いわ","ゴースト","ドラゴン",
  "あく","はがね","フェアリー"
];

function setupTypeSelectors() {
  ["type1","type2","type3"].forEach(id => {
    const sel = document.getElementById(id);
    sel.innerHTML = `<option value="">選択</option>` +
      TYPE_LIST.map(t => `<option value="${t}">${t}</option>`).join("");

    sel.addEventListener("change", preventTypeDuplicate);
  });
}

function preventTypeDuplicate() {
  const t1 = type1.value;
  const t2 = type2.value;
  const t3 = type3.value;

  const arr = [t1, t2, t3].filter(v => v !== "");

  if (new Set(arr).size !== arr.length) {
    alert("同じタイプは選べません");
    this.value = "";
  }
}

/* ==========================================================
   ▼ EXモード時のラベル切替
========================================================== */
function updateTypeLabels() {
  const ex = exMode.value;

  if (ex === "1") {
    typeLabel1.textContent = "きのみ①（メイン適正）";
    typeLabel2.textContent = "きのみ②（サブ適正①）";
    typeLabel3.textContent = "きのみ③（サブ適正②）";
  } else {
    typeLabel1.textContent = "きのみ①";
    typeLabel2.textContent = "きのみ②";
    typeLabel3.textContent = "きのみ③";
  }
}

/* ==========================================================
   ▼ フィールド適正（自動設定）
========================================================== */
const FIELD_TYPES = {
  "ワカクサ本島": null,
  "シアンの砂浜": ["みず","ひこう","フェアリー"],
  "トープ洞窟": ["ほのお","じめん","いわ"],
  "ウノハナ雪原": ["ノーマル","こおり","あく"],
  "ラピスラズリ湖畔": ["くさ","かくとう","エスパー"],
  "ゴールド旧発電所": ["でんき","ゴースト","はがね"],
  "アンバー渓谷": ["どく","むし","ドラゴン"]
};

function onFieldChange() {
  const field = fieldSelect.value;

  if (field !== "ワカクサ本島") {
    exMode.value = "0";
    exMode.disabled = true;
    updateTypeLabels();

    const types = FIELD_TYPES[field];
    ["type1","type2","type3"].forEach((id, i) => {
      const sel = document.getElementById(id);
      sel.value = types[i];
      sel.disabled = true;
    });

  } else {
    exMode.disabled = false;

    ["type1","type2","type3"].forEach(id => {
      const sel = document.getElementById(id);
      sel.disabled = false;
      sel.value = "";
    });
  }
}

/* ==========================================================
   ▼ サブスキル（optgroup）
========================================================== */
function setupSubSkillSelectors() {
  const html =
    Object.entries(subSkillList)
      .map(([group, arr]) =>
        `<optgroup label="${group}">` +
        arr.map(s => `<option value="${s}">${s}</option>`).join("") +
        `</optgroup>`
      ).join("");

  document.querySelectorAll(".pokeSubSkill").forEach(sel => {
    sel.innerHTML = `<option value="">選択</option>` + html;
  });
}

/* ==========================================================
   ▼ 性格
========================================================== */
function setupNatureSelectors() {
  const names = Object.keys(natureLabels);

  document.querySelectorAll(".pokeNature").forEach(sel => {
    sel.innerHTML =
      `<option value="">選択</option>` +
      names.map(n => `<option value="${n}">${natureLabels[n]}</option>`).join("");
  });
}

/* ==========================================================
   ▼ オートコンプリート
========================================================== */
function hiraToKana(str) {
  return str.replace(/[\u3041-\u3096]/g, ch =>
    String.fromCharCode(ch.charCodeAt(0) + 0x60)
  );
}

function onPartySearchInput(e) {
  const input = e.target;
  const id = input.dataset.id;
  const raw = input.value.trim();
  const keyword = hiraToKana(raw);

  const listEl = document.querySelector(`.autocomplete-list[data-id="${id}"]`);
  listEl.innerHTML = "";
  listEl.style.display = "none";

  if (!keyword) return;

  let list = [];

  Object.keys(pokemonData).forEach(typeKey => {
    pokemonData[typeKey].forEach(entry => {
      const name = entry.split("|")[0];
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
      input.value = item.name;
      listEl.style.display = "none";
      saveState();
    });

    listEl.appendChild(div);
  });

  listEl.style.display = "block";
}

function setupPartyAutocomplete() {
  document.querySelectorAll(".pokeName").forEach(input => {
    input.addEventListener("input", onPartySearchInput);
  });
}

/* ==========================================================
   ▼ クリア処理
========================================================== */
function clearOnePokemon(id) {
  document.querySelector(`.pokeName[data-id="${id}"]`).value = "";
  document.querySelector(`.pokeLevel[data-id="${id}"]`).value = "";
  document.querySelector(`.pokeNature[data-id="${id}"]`).value = "";

  for (let i = 1; i <= 5; i++) {
    document.querySelector(`.pokeSubSkill[data-id="${id}"][data-slot="${i}"]`).value = "";
  }

  saveState();
}

function clearAllPokemon() {
  for (let i = 1; i <= 5; i++) clearOnePokemon(i);
  localStorage.removeItem("partyState");
}

/* ==========================================================
   ▼ ポケモン基礎データ取得
========================================================== */
function getPokemonEntry(name) {
  for (const type in pokemonData) {
    for (const row of pokemonData[type]) {
      const cols = row.split("|");
      if (cols[0] === name) return row;
    }
  }
  return null;
}

/* ==========================================================
   ▼ パーティ総合計算（calc.js）
========================================================== */
function getPokemonDataFromInput(id) {
  const name = document.querySelector(`.pokeName[data-id="${id}"]`).value;
  if (!name) return null;

  const level = parseInt(document.querySelector(`.pokeLevel[data-id="${id}"]`).value || 1);
  const natureKey = document.querySelector(`.pokeNature[data-id="${id}"]`).value;

  const subSkills = [];
  for (let i = 1; i <= 5; i++) {
    const val = document.querySelector(`.pokeSubSkill[data-id="${id}"][data-slot="${i}"]`).value;
    subSkills.push(val || "");
  }

  const entry = getPokemonEntry(name);
  if (!entry) return null;

  const [pName, pType, tokui, baseTime, berryBase, ingRate, skillRate] = entry.split("|");

  return {
    name: pName,
    type: pType,
    tokui,
    baseTime: parseFloat(baseTime),
    berryBase: parseFloat(berryBase),
    ingRate: parseFloat(ingRate),
    skillRate: parseFloat(skillRate),
    level,
    natureKey,
    subSkills
  };
}

/* ==========================================================
   ▼ 結果表示（折りたたみ対応）
========================================================== */
function calculateParty() {

  const field = fieldSelect.value;
  const exModeVal = exMode.value;

  const type1Val = type1.value;
  const type2Val = type2.value;
  const type3Val = type3.value;

  const fieldBonusVal = parseFloat(fieldBonus.value || 0);
  const campTicketVal = parseFloat(campTicket.value) || 1;
  const exBonusVal = exBonus.value;

  const party = [];
  for (let i = 1; i <= 5; i++) {
    const data = getPokemonDataFromInput(i);
    if (data) party.push(data);
  }

  if (party.length === 0) {
    alert("ポケモンが入力されていません");
    return;
  }

  const detailHelpTime = [];
  const detailBerry = [];
  const detailSkill = [];

  let totalBerry = 0;
  let totalSkill = 0;

  let bonus_yume = 0;
  let bonus_research = 0;
  let bonus_sleep = 0;
  let bonus_genki = 0;

  let teamBonus = 0;

  // ▼ チームボーナス集計
  for (const p of party) {
    const unlocked = getUnlockedSubSkills(p.level, p.subSkills);
    if (unlocked.includes("おてつだいボーナス")) {
      teamBonus += 1;
    }
  }

  // ▼ 各ポケモン計算
  for (const p of party) {

    const nature = natureModifiers[p.natureKey || "hardy"];

    const exType = getExType(p.type, type1Val, type2Val, type3Val, exModeVal);
    const fieldBerryBonus = getFieldBerryBonus(p.type, type1Val, type2Val, type3Val);

    const unlocked = getUnlockedSubSkills(p.level, p.subSkills);

    let subSpeed = 0;
    let subIng = 0;
    let subSkill = 0;
    let berryCountSkill = 0;

    for (const s of unlocked) {
      if (s === "おてつだいスピードS") subSpeed += 0.07;
      if (s === "おてつだいスピードM") subSpeed += 0.14;

      if (s === "スキル確率S") subSkill += 0.18;
      if (s === "スキル確率M") subSkill += 0.36;

      if (s === "食材確率S") subIng += 0.18;
      if (s === "食材確率M") subIng += 0.36;

      if (s === "きのみの数S") berryCountSkill += 1;

      if (s === "ゆめのかけらボーナス") bonus_yume++;
      if (s === "リサーチEXPボーナス") bonus_research++;
      if (s === "睡眠EXPボーナス") bonus_sleep++;
      if (s === "げんき回復ボーナス") bonus_genki++;
    }

    const { standardHelpTime, helpTime } = calcHelpTime(
      p.baseTime,
      p.level,
      nature,
      subSpeed,
      teamBonus,
      exType,
      campTicketVal,
      exModeVal
    );

    const actionsPerHour = 3600 / helpTime;

    detailHelpTime.push({ name: p.name, value: standardHelpTime });

    const berryEnergySingle = calcBerryEnergySingle(
      p.level,
      p.berryBase,
      fieldBerryBonus,
      fieldBonusVal,
      exBonusVal,
      exType
    );

    // ▼ きのみ個数
    const berryCount = calcBerryCount(1, p.tokui, berryCountSkill);

    // ▼ 固有食材確率
    const baseIng = p.ingRate || 0;

    // ▼ サブスキル食材確率
    const subIngRate = subIng;

    // ▼ Sleep仕様の掛け合わせ
    const finalIngRate = 1 - (1 - baseIng) * (1 - subIngRate);

    // ▼ きのみを持ってくる確率
    const berryRate = 1 - finalIngRate;

    // ▼ 24時間のきのみエナジー
    const berry24 =
      berryEnergySingle *
      berryCount *
      berryRate *
      actionsPerHour *
      24;

    // ▼ スキル発動回数（24h）
    const skill24 =
      calcSkillPerHour(
        p.skillRate,
        nature,
        subSkill,
        exBonusVal,
        exType,
        actionsPerHour
      ) * 24;

    totalBerry += berry24;
    totalSkill += skill24;

    detailBerry.push({ name: p.name, value: berry24 });
    detailSkill.push({ name: p.name, value: skill24 });
  }

  /* ==========================================================
     ▼ 結果テーブル生成（折りたたみ対応）
  ========================================================== */

  const table = document.getElementById("resultTable");
  table.innerHTML = "";

  const addCollapsibleRow = (label, value, id) => {
    const tr = document.createElement("tr");
    tr.classList.add("collapsible-header");
    tr.dataset.target = id;

    tr.innerHTML = `
      <th>${label}</th>
      <td class="collapsible-toggle">${value} <span class="arrow">▽</span></td>
    `;

    tr.addEventListener("click", () => {
      const rows = document.querySelectorAll(`.collapsible-content[data-group="${id}"]`);
      const arrow = tr.querySelector(".arrow");

      rows.forEach(r => r.classList.toggle("hidden"));
      arrow.classList.toggle("open");
    });

    table.appendChild(tr);
  };

  const addCollapsibleContent = (label, value, groupId) => {
    const tr = document.createElement("tr");
    tr.classList.add("collapsible-content", "hidden");
    tr.dataset.group = groupId;

    tr.innerHTML = `<th>${label}</th><td>${value}</td>`;
    table.appendChild(tr);
  };

  /* ▼ 総きのみエナジー */
  addCollapsibleRow("総きのみエナジー", Math.round(totalBerry) + " energy/day", "berry");

  detailBerry.forEach((d, i) => {
    addCollapsibleContent(`┗ ${i+1}：${d.name}`, Math.round(d.value) + " energy/day", "berry");
  });

  /* ▼ 総スキル発動回数 */
  addCollapsibleRow("総スキル発動回数", totalSkill.toFixed(2) + " 回/day", "skill");

  detailSkill.forEach((d, i) => {
    addCollapsibleContent(`┗ ${i+1}：${d.name}`, d.value.toFixed(2) + " 回/day", "skill");
  });

  /* ▼ 標準おてつだい時間 */
  addCollapsibleRow("標準おてつだい時間", "展開して確認", "helpTime");

  detailHelpTime.forEach((d, i) => {
    addCollapsibleContent(`┗ ${i+1}：${d.name}`, `${d.value} 秒`, "helpTime");
  });

  /* ▼ 全体ボーナス */
  addCollapsibleRow("全体ボーナス", "展開して確認", "bonus");

  addCollapsibleContent("ゆめのかけらボーナス", `${bonus_yume} 個`, "bonus");
  addCollapsibleContent("リサーチEXPボーナス", `${bonus_research} 個`, "bonus");
  addCollapsibleContent("睡眠EXPボーナス", `${bonus_sleep} 個`, "bonus");
  addCollapsibleContent("げんき回復ボーナス", `${bonus_genki} 個`, "bonus");
}
