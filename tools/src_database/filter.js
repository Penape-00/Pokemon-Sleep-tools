/* ================================
   filter.js — 絞り込み・ソート
================================ */

/* ▼ 固定リスト */
const TYPE_LIST = ["ノーマル","ほのお","みず","でんき","くさ","こおり","かくとう","どく","じめん","ひこう","エスパー","むし","いわ","ゴースト","ドラゴン","あく","はがね","フェアリー"];
const TOKUI_LIST = ["きのみ","食材","スキル","オール"];
const SLEEP_LIST = ["うとうと","すやすや","ぐっすり"];
const FIELD_LIST = ["ワカクサ本島","シアンの砂浜","トープ洞窟","ウノハナ雪原","ラピスラズリ湖畔","ゴールド旧発電所","アンバー渓谷","ワカクサ本島EX"];

let filteredList = [...pokedexData_All];
const selectedFilters = { type:[], tokui:[], skill:[], ingredient:[], sleep:[], field:[] };
let ingredientMode = "OR";

/* ▼ 表示名 */
const FILTER_DISPLAY_NAMES = {
  type:"タイプ", tokui:"とくいタイプ", skill:"メインスキル",
  ingredient:"食材", sleep:"睡眠タイプ", field:"出現フィールド"
};

/* ▼ ドロップダウン生成 */
function createDropdownMulti(container, list, filterKey) {

  const display = document.createElement("div");
  display.className = "dropdown-selected-text";
  display.textContent = FILTER_DISPLAY_NAMES[filterKey];

  const menu = document.createElement("div");
  menu.className = "dropdown-options";
  menu.style.display = "none";

  /* ▼ 食材だけ AND/OR */
  if (filterKey === "ingredient") {
    const modeOpt = document.createElement("div");
    modeOpt.className = "dropdown-option";

    const toggle = document.createElement("input");
    toggle.type = "checkbox";
    toggle.id = "ingredientMode";

    const label = document.createElement("span");
    label.textContent = "すべての食材を含む";

    modeOpt.append(toggle, label);
    menu.append(modeOpt);

    toggle.addEventListener("change", () => {
      ingredientMode = toggle.checked ? "AND" : "OR";
      updateDropdownDisplay(container, filterKey);
      applyFilters();
    });

    modeOpt.addEventListener("click", (e) => {
      e.stopPropagation();

      if (e.target.tagName !== "INPUT") {
        toggle.checked = !toggle.checked;
      }

      ingredientMode = toggle.checked ? "AND" : "OR";
      updateDropdownDisplay(container, filterKey);
      applyFilters();
    });

    const hr = document.createElement("hr");
    hr.style.margin = "6px 0";
    menu.append(hr);
  }

  /* ▼ 通常リスト */
  list.forEach(item => {
    const opt = document.createElement("div");
    opt.className = "dropdown-option";

    const cb = document.createElement("input");
    cb.type = filterKey === "field" ? "radio" : "checkbox";
    cb.name = filterKey === "field" ? "fieldFilter" : "";
    cb.value = item;

    const label = document.createElement("span");
    label.textContent = item;

    opt.append(cb, label);
    menu.append(opt);

    /* ▼ チェックボックス変更時 */
    cb.addEventListener("change", () => {
      updateDropdownDisplay(container, filterKey);
      applyFilters();
    });

    /* ▼ 文字・空白クリックでもチェック反転 */
    opt.addEventListener("click", (e) => {
      e.stopPropagation();

      if (e.target.tagName !== "INPUT") {
        cb.checked = !cb.checked;
      }

      updateDropdownDisplay(container, filterKey);
      applyFilters();
    });
  });

  /* ▼ 開閉は display のみ */
  display.addEventListener("click", (e) => {
    e.stopPropagation();
    const isOpen = menu.style.display === "block";
    document.querySelectorAll(".dropdown-options").forEach(m => m.style.display = "none");
    menu.style.display = isOpen ? "none" : "block";
  });

  /* ▼ 外側クリックで閉じる */
  document.addEventListener("click", () => menu.style.display = "none");

  container.append(display, menu);
}

/* ▼ 表示更新 */
function updateDropdownDisplay(container, filterKey) {
  const checks = container.querySelectorAll("input[type='checkbox'], input[type='radio']");
  const selected = [...checks]
    .filter(c => c.checked && c.id !== "ingredientMode")
    .map(c => c.value);

  const display = container.querySelector(".dropdown-selected-text");
  display.textContent = selected.length === 0 ? FILTER_DISPLAY_NAMES[filterKey] : selected.join(", ");

  selectedFilters[filterKey] = selected;
  container.classList.toggle("active", selected.length > 0);
}

/* ▼ 初期化 */
function initDropdowns() {
  createDropdownMulti(document.querySelector("[data-filter='type']"), TYPE_LIST, "type");
  createDropdownMulti(document.querySelector("[data-filter='tokui']"), TOKUI_LIST, "tokui");

  const skillList = [...new Set(pokedexData_All.map(p => p.mainSkill))].sort();
  createDropdownMulti(document.querySelector("[data-filter='skill']"), skillList, "skill");

  const ingList = [...new Set(pokedexData_All.flatMap(p => p.ingredients.map(i => i.name)))].sort();
  createDropdownMulti(document.querySelector("[data-filter='ingredient']"), ingList, "ingredient");

  createDropdownMulti(document.querySelector("[data-filter='sleep']"), SLEEP_LIST, "sleep");
  createDropdownMulti(document.querySelector("[data-filter='field']"), FIELD_LIST, "field");
}

/* ▼ 絞り込み */
function applyFilters() {
  filteredList = pokedexData_All.filter(p => {

    if (selectedFilters.type.length && !p.type.some(t => selectedFilters.type.includes(t))) return false;
    if (selectedFilters.tokui.length && !selectedFilters.tokui.includes(p.tokui)) return false;
    if (selectedFilters.skill.length && !selectedFilters.skill.includes(p.mainSkill)) return false;

    if (selectedFilters.ingredient.length) {
      const ingNames = p.ingredients.map(i => i.name);
      if (ingredientMode === "AND" && !selectedFilters.ingredient.every(i => ingNames.includes(i))) return false;
      if (ingredientMode === "OR" && !selectedFilters.ingredient.some(i => ingNames.includes(i))) return false;
    }

    if (selectedFilters.sleep.length && !selectedFilters.sleep.includes(p.sleepType)) return false;

    if (selectedFilters.field.length) {
      const fieldNames = p.fields.map(f => f.name);
      if (!selectedFilters.field.some(f => fieldNames.includes(f))) return false;
    }

    return true;
  });

  applySort();
  resetAndRender();
}

/* ▼ ソート */
function applySort() {
  const sortType = document.getElementById("sortSelect").value;
  const order = document.getElementById("sortOrder").value;

  filteredList.sort((a,b)=>{
    let result = 0;

    if(sortType==="dex") result = a.dexNo - b.dexNo;
    if(sortType==="name") result = a.name.localeCompare(b.name,"ja");
    if(sortType==="help") result = a.baseHelpTime - b.baseHelpTime;
    if(sortType==="berry") result = b.berryIndex - a.berryIndex;
    if(sortType==="ing") result = b.ingIndex - a.ingIndex;
    if(sortType==="skill") result = b.skillIndicator - a.skillIndicator;

    return order==="asc" ? result : -result;
  });
}

/* ▼ イベント登録 */
window.addEventListener("DOMContentLoaded", () => {

  initDropdowns();

  document.getElementById("sortSelect").addEventListener("change", () => {
    applySort();
    resetAndRender();
  });

  document.getElementById("sortOrder").addEventListener("change", () => {
    applySort();
    resetAndRender();
  });

  document.querySelectorAll(".section-header").forEach(header => {
    header.addEventListener("click", () => {
      const targetSelector = header.dataset.target;
      const body = document.querySelector(targetSelector);
      body.classList.toggle("open");
      header.classList.toggle("open");
      const icon = header.querySelector(".toggle-icon");
      icon.textContent = body.classList.contains("open") ? "−" : "+";
    });
  });
});

/* ▼ クリア */
document.getElementById("filterClearBtn").addEventListener("click", () => {

  Object.keys(selectedFilters).forEach(k => selectedFilters[k] = []);

  document.querySelectorAll(".dropdown-multi").forEach(d => {
    d.querySelectorAll("input[type='checkbox'], input[type='radio']").forEach(cb => cb.checked = false);
    const filterKey = d.dataset.filter;
    const display = d.querySelector(".dropdown-selected-text");
    display.textContent = FILTER_DISPLAY_NAMES[filterKey];
    d.classList.remove("active");
  });

  ingredientMode = "OR";
  const ingToggle = document.getElementById("ingredientMode");
  if (ingToggle) ingToggle.checked = false;

  filteredList = [...pokedexData_All];
  applySort();
  resetAndRender();
});