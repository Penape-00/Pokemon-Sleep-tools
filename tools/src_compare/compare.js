// ==================================================
// ▼ ひらがな → カタカナ変換
// ==================================================
function hiraToKana(str) {
  return str.replace(/[\u3041-\u3096]/g, ch =>
    String.fromCharCode(ch.charCodeAt(0) + 0x60)
  );
}

// ==================================================
// ▼ タブ切り替え
// ==================================================
function setupTabs() {
  document.querySelectorAll('.tab-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      document.querySelectorAll('.tab-content').forEach(c => c.classList.remove('active'));
      document.getElementById(btn.dataset.tab).classList.add('active');
    });
  });
}

// ==================================================
// ▼ タイプ選択 → ポケモン候補更新
// ==================================================
function updatePokemonList(typeSelectId, pokemonSelectId) {
  const type = document.getElementById(typeSelectId).value;
  const sel = document.getElementById(pokemonSelectId);
  sel.innerHTML = "";

  if (type && pokemonData[type]) {
    pokemonData[type].forEach(entry => {
      const [name] = entry.split("|");
      const opt = document.createElement("option");
      opt.value = entry;
      opt.textContent = name;
      sel.appendChild(opt);
    });
  }
}

function setupPokemonListEvents() {
  document.getElementById("type1").addEventListener("change", () => updatePokemonList("type1", "pokemon1"));
  document.getElementById("type2").addEventListener("change", () => updatePokemonList("type2", "pokemon2"));
}

// ==================================================
// ▼ 性格セレクト生成
// ==================================================
function populateNatureSelect(selectId) {
  const sel = document.getElementById(selectId);
  sel.innerHTML = "";

  Object.keys(natureLabels).forEach(key => {
    const opt = document.createElement("option");
    opt.value = key;
    opt.textContent = natureLabels[key];
    sel.appendChild(opt);
  });

  sel.value = "hardy"; // 初期値
}

function setupNatureSelects() {
  populateNatureSelect("natureSelect1");
  populateNatureSelect("natureSelect2");
}

// ==================================================
// ▼ オートコンプリート（共通化）
// ==================================================
function setupPokemonSearch(searchId, listId, selectId, typeSelectId) {
  const searchInput = document.getElementById(searchId);
  const autocompleteList = document.getElementById(listId);
  const select = document.getElementById(selectId);

  searchInput.addEventListener("input", function () {
    const raw = this.value.trim();
    const keyword = hiraToKana(raw);
    const type = document.getElementById(typeSelectId).value;

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
        searchInput.value = item.name;
        select.innerHTML = `<option value="${item.entry}">${item.name}</option>`;
        select.value = item.entry;
        autocompleteList.style.display = "none";
      });

      autocompleteList.appendChild(div);
    });

    autocompleteList.style.display = "block";
  });

  document.addEventListener("click", function (e) {
    if (!autocompleteList.contains(e.target) && e.target !== searchInput) {
      autocompleteList.style.display = "none";
    }
  });
}

function setupSearchBoxes() {
  setupPokemonSearch("pokemonSearch1", "autocompleteList1", "pokemon1", "type1");
  setupPokemonSearch("pokemonSearch2", "autocompleteList2", "pokemon2", "type2");
}

// ==================================================
// ▼ 設定クリア
// ==================================================
function clearSettings(tabIndex) {
  const mapping = tabIndex === 1 ? [
    "type1","pokemon1","level1","natureSelect1","speedSkill1","teamBonus1",
    "berryCountSkill1","fieldBonus1","fieldBerryBonus1","campTicket1",
    "ingredientSkill1","skillSkill1","EXtype1","EXBonus1"
  ] : [
    "type2","pokemon2","level2","natureSelect2","speedSkill2","teamBonus2",
    "berryCountSkill2","fieldBonus2","fieldBerryBonus2","campTicket2",
    "ingredientSkill2","skillSkill2","EXtype2","EXBonus2"
  ];

  mapping.forEach(id => {
    const el = document.getElementById(id);
    if (!el) return;

    if (el.tagName === "SELECT") el.selectedIndex = 0;
    else if (el.type === "number") el.value = id.includes("level") ? 65 : 0;
    else el.value = "";
  });

  // 検索欄クリア
  const searchId = tabIndex === 1 ? "pokemonSearch1" : "pokemonSearch2";
  const listId   = tabIndex === 1 ? "autocompleteList1" : "autocompleteList2";

  document.getElementById(searchId).value = "";
  document.getElementById(listId).style.display = "none";

  // ポケモン欄クリア
  const pokemonSelectId = tabIndex === 1 ? "pokemon1" : "pokemon2";
  document.getElementById(pokemonSelectId).innerHTML = "";
}

// ==================================================
// ▼ ポケモン1 → ポケモン2 コピー
// ==================================================
function setupCopyButton() {
  document.getElementById("copyBtn").addEventListener("click", () => {
    const mapping = [
      ["type1", "type2"],
      ["pokemon1", "pokemon2"],
      ["level1", "level2"],
      ["natureSelect1", "natureSelect2"],
      ["speedSkill1", "speedSkill2"],
      ["teamBonus1", "teamBonus2"],
      ["berryCountSkill1", "berryCountSkill2"],
      ["fieldBonus1", "fieldBonus2"],
      ["fieldBerryBonus1", "fieldBerryBonus2"],
      ["campTicket1", "campTicket2"],
      ["ingredientSkill1", "ingredientSkill2"],
      ["skillSkill1", "skillSkill2"],
      ["EXtype1", "EXtype2"],
      ["EXBonus1", "EXBonus2"]
    ];

    mapping.forEach(([id1, id2]) => {
      const src = document.getElementById(id1);
      const dst = document.getElementById(id2);
      if (src && dst) dst.value = src.value;
    });

    // 検索欄コピー
    document.getElementById("pokemonSearch2").value =
      document.getElementById("pokemonSearch1").value;

    // ポケモン欄コピー
    document.getElementById("pokemon2").innerHTML =
      document.getElementById("pokemon1").innerHTML;

    document.getElementById("pokemon2").value =
      document.getElementById("pokemon1").value;
  });
}

// ==================================================
// ▼ 比較処理（どちらのタブからでも compareBtn で実行）
// ==================================================
function setupCompareButton() {
  document.querySelectorAll(".compareBtn").forEach(btn => {
    btn.addEventListener("click", () => {

      const p1Entry = document.getElementById("pokemon1").value;
      if (!p1Entry) {
        document.getElementById("compareResult").innerHTML =
          "<p>ポケモン1を選択してください。</p>";
        return;
      }

      const p1 = calcBerryEfficiency(
        p1Entry,
        parseInt(document.getElementById("level1").value),
        document.getElementById("natureSelect1").value,
        document.getElementById("speedSkill1").value,
        document.getElementById("ingredientSkill1").value,
        document.getElementById("skillSkill1").value,
        document.getElementById("berryCountSkill1").value === "yes" ? 1 : 0,
        document.getElementById("teamBonus1").value,
        document.getElementById("fieldBonus1").value,
        document.getElementById("fieldBerryBonus1").value,
        document.getElementById("campTicket1").value,
        document.getElementById("EXtype1").value,
        document.getElementById("EXBonus1").value
      );

      const p2Entry = document.getElementById("pokemon2").value;
      const p2 = p2Entry ? calcBerryEfficiency(
        p2Entry,
        parseInt(document.getElementById("level2").value),
        document.getElementById("natureSelect2").value,
        document.getElementById("speedSkill2").value,
        document.getElementById("ingredientSkill2").value,
        document.getElementById("skillSkill2").value,
        document.getElementById("berryCountSkill2").value === "yes" ? 1 : 0,
        document.getElementById("teamBonus2").value,
        document.getElementById("fieldBonus2").value,
        document.getElementById("fieldBerryBonus2").value,
        document.getElementById("campTicket2").value,
        document.getElementById("EXtype2").value,
        document.getElementById("EXBonus2").value
      ) : null;

      let html = `
        <table>
          <tr><th>項目</th><th>ポケモン1（${p1.name}）</th>${p2 ? `<th>ポケモン2（${p2.name}）</th>` : ""}</tr>
          <tr><td>標準おてつだい時間</td><td>${p1.standardHelpTime} 秒</td>${p2 ? `<td>${p2.standardHelpTime} 秒</td>` : ""}</tr>
          <tr><td>きのみエナジー</td><td>${p1.berryEnergy}</td>${p2 ? `<td>${p2.berryEnergy}</td>` : ""}</tr>
          <tr><td>食材確率</td><td>${p1.ingredientRate}%</td>${p2 ? `<td>${p2.ingredientRate}%</td>` : ""}</tr>
          <tr><td>エナジー効率(通常)</td><td>${p1.normalEfficiency}</td>${p2 ? `<td>${p2.normalEfficiency}</td>` : ""}</tr>
          <tr><td>エナジー効率(きのみ)</td><td>${p1.berryOnlyEfficiency}</td>${p2 ? `<td>${p2.berryOnlyEfficiency}</td>` : ""}</tr>
          <tr><td>食材回数</td><td>${p1.ingredientCount}回/day</td>${p2 ? `<td>${p2.ingredientCount}回/day</td>` : ""}</tr>
          <tr><td>スキル回数</td><td>${p1.skillCount}回/day</td>${p2 ? `<td>${p2.skillCount}回/day</td>` : ""}</tr>
        </table>
      `;

      document.getElementById("compareResult").innerHTML = html;
    });
  });
}

// ==================================================
// ▼ メニュー開閉
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
// ▼ 初期化
// ==================================================
document.addEventListener("DOMContentLoaded", () => {
  setupTabs();
  setupMenuToggle();
  setupNatureSelects();
  setupPokemonListEvents();
  setupSearchBoxes();
  setupCopyButton();
  setupCompareButton();

  document.getElementById("clearBtn1").addEventListener("click", () => clearSettings(1));
  document.getElementById("clearBtn2").addEventListener("click", () => clearSettings(2));
});