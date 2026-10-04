// ==================================================
// ▼ その他のおてぼ数とキャンプチケットのカスタムドロップダウン生成
// ==================================================

// ▼ その他のおてボ数
const TEAMBONUS_LIST = [
  { value: "0", label: "0匹" },
  { value: "1", label: "1匹" },
  { value: "2", label: "2匹" },
  { value: "3", label: "3匹" },
  { value: "4", label: "4匹" }
];

// ▼ キャンプチケット
const CAMPTICKET_LIST = [
  { value: "1", label: "不使用" },
  { value: "1.2", label: "使用" }
];

document.addEventListener("DOMContentLoaded", () => {
  // その他のおてボ数
  const teamContainer = document.getElementById("teamBonusDropdown");
  createDropdownSingle(teamContainer, TEAMBONUS_LIST, "その他のおてボ数");

  // キャンプチケット
  const campContainer = document.getElementById("campTicketDropdown");
  createDropdownSingle(campContainer, CAMPTICKET_LIST, "キャンプチケット");
});

// ==================================================
// ▼ フィールドボーナスの % 表示制御
// ==================================================

const fieldBonusInput = document.getElementById("fieldBonus");
const percentField = fieldBonusInput.closest(".percent-field");
const percentUnit = percentField.querySelector(".input-unit");

const measureCanvas = document.createElement("canvas");
const measureCtx = measureCanvas.getContext("2d");

function updatePercentUnit() {
  const value = fieldBonusInput.value;

  if (value === "") {
    percentField.classList.remove("has-value");
    return;
  }

  percentField.classList.add("has-value");

  const style = window.getComputedStyle(fieldBonusInput);
  measureCtx.font = `${style.fontStyle} ${style.fontWeight} ${style.fontSize} ${style.fontFamily}`;

  const valueWidth = measureCtx.measureText(value).width;
  const paddingLeft = parseFloat(style.paddingLeft);
  const gap = 4;

  percentUnit.style.left = `${paddingLeft + valueWidth + gap}px`;
}

fieldBonusInput.addEventListener("input", updatePercentUnit);
updatePercentUnit();


// ==================================================
// ▼ フィールド選択＆フィールド適正
// ==================================================

// ▼ フィールド一覧
const FIELD_LIST = [
  { value: "wakakusa", label: "ワカクサ本島" },
  { value: "cyan", label: "シアンの砂浜" },
  { value: "tope", label: "トープ洞窟" },
  { value: "unohana", label: "ウノハナ雪原" },
  { value: "lapis", label: "ラピスラズリ湖畔" },
  { value: "gold", label: "ゴールド旧発電所" },
  { value: "anber", label: "アンバー渓谷" },
  { value: "wakakusaEX", label: "ワカクサ本島EX" },
  { value: "cyanEX", label: "シアンの砂浜EX" }
];

// ▼ 通常フィールドの固定適正タイプ
const FIELD_TYPE_MAP = {
  cyan: ["みず", "ひこう", "フェアリー"],
  tope: ["ほのお", "じめん", "いわ"],
  unohana: ["ノーマル", "こおり", "あく"],
  lapis: ["くさ", "かくとう", "エスパー"],
  gold: ["でんき", "ゴースト", "はがね"],
  anber: ["むし", "どく", "ドラゴン"]
};


// ==================================================
// ▼ カスタムドロップダウン生成（安全版）
// ==================================================

if (!window._dropdownGlobalHandlerAdded) {
  document.addEventListener("click", () => {
    document.querySelectorAll(".dropdown-options").forEach(m => m.style.display = "none");
    document.querySelectorAll(".dropdown-single").forEach(c => c.classList.remove("focused"));
  });
  window._dropdownGlobalHandlerAdded = true;
}

/**
 * createDropdownSingle
 * - container: DOM element (div.dropdown-single)
 * - list: [{value,label}, ...]
 * - placeholderText: string
 * - onSelectCallback: function(selectedValue)
 */
function createDropdownSingle(container, list, placeholderText, onSelectCallback = null) {
  container.innerHTML = "";

  container.classList.remove("active");
  container.dataset.value = "";

  const display = document.createElement("div");
  display.className = "dropdown-selected-text";
  display.textContent = placeholderText;

  const menu = document.createElement("div");
  menu.className = "dropdown-options";

  list.forEach(item => {
    const opt = document.createElement("div");
    opt.className = "dropdown-option";
    opt.textContent = item.label;
    opt.dataset.value = item.value;

    opt.addEventListener("click", (e) => {
      // container が disabled のときは無視
      if (container.classList.contains("disabled")) return;

      display.textContent = item.label;
      container.dataset.value = item.value;
      container.classList.add("active");
      container.classList.remove("focused");
      menu.style.display = "none";

      if (typeof onSelectCallback === "function") {
        onSelectCallback(item.value);
      }
    });

    menu.appendChild(opt);
  });

  display.addEventListener("click", (e) => {
    if (container.classList.contains("disabled")) return;

    e.stopPropagation();
    const isOpen = menu.style.display === "block";
    document.querySelectorAll(".dropdown-options").forEach(m => m.style.display = "none");
    document.querySelectorAll(".dropdown-single").forEach(c => c.classList.remove("focused"));
    menu.style.display = isOpen ? "none" : "block";
    if (!isOpen) container.classList.add("focused");
  });

  container.append(display, menu);
}


// ==================================================
// ▼ フィールド適正の更新（カスタムドロップダウン版）
// ==================================================

function updateFieldTokui() {
  const field = document.getElementById("fieldDropdown").dataset.value;
  const tokuiContainer = document.getElementById("fieldTokuiDropdown");

  // ▼ 初期化
  tokuiContainer.innerHTML = "";
  tokuiContainer.dataset.value = "";
  tokuiContainer.classList.remove("active", "disabled");

  const placeholder = "フィールド適正";
  let list = [];

  if (!field) {
    createDropdownSingle(tokuiContainer, [], placeholder, (selected) => {
      updateEXBonus();
    });
    tokuiContainer.classList.add("disabled");
    return;
  }

  if (field === "wakakusaEX") {
    list = [
      { value: "main", label: "メイン適正" },
      { value: "sub", label: "サブ適正" },
      { value: "none", label: "非適正" }
    ];
    createDropdownSingle(tokuiContainer, list, placeholder, (selectedValue) => {
      // dataset は createDropdownSingle 内でセットされるが念のため
      tokuiContainer.dataset.value = selectedValue;
      updateEXBonus();
    });
    return;
  }

  if (field === "cyanEX") {
    const monName = document.getElementById("pokemonInput").value;
    const mon = pokedexData_All.find(m => m.name === monName);

    const mainTypes = ["みず", "ひこう", "フェアリー"];
    const isMainCandidate = mon && mon.type.some(t => mainTypes.includes(t));

    if (isMainCandidate) {
      list = [
        { value: "main", label: "メイン適正" },
        { value: "sub", label: "サブ適正" },
        { value: "none", label: "非適正" }
      ];
    } else {
      list = [
        { value: "sub", label: "サブ適正" },
        { value: "none", label: "非適正" }
      ];
    }

    createDropdownSingle(tokuiContainer, list, placeholder, (selectedValue) => {
      tokuiContainer.dataset.value = selectedValue;
      updateEXBonus();
    });
    return;
  }

  // ▼ ワカクサ本島（通常）→ ユーザー選択
  if (field === "wakakusa") {
    list = [
      { value: "ok", label: "適正" },
      { value: "ng", label: "非適正" }
    ];
    createDropdownSingle(tokuiContainer, list, placeholder, (selectedValue) => {
      tokuiContainer.dataset.value = selectedValue;
      updateEXBonus();
    });
    return;
  }

  // ▼ 通常フィールド（固定適正タイプ → 自動判定＋disabled）
  const types = FIELD_TYPE_MAP[field];
  if (!types) {
    createDropdownSingle(tokuiContainer, [], placeholder, () => {
      updateEXBonus();
    });
    tokuiContainer.classList.add("disabled");
    return;
  }

  const monName = document.getElementById("pokemonInput").value;
  const mon = pokedexData_All.find(m => m.name === monName);

  let isTokui = false;

  if (mon) {
    isTokui = mon.type.some(t => types.includes(t));
  }

  // ▼ 適正/非適正の2択を生成
  list = [
    { value: "ok", label: "適正" },
    { value: "ng", label: "非適正" }
  ];

  createDropdownSingle(tokuiContainer, list, placeholder);
  
  // ▼ 自動選択（表示更新）
  tokuiContainer.dataset.value = isTokui ? "ok" : "ng";
  const disp = tokuiContainer.querySelector(".dropdown-selected-text");
  if (disp) disp.textContent = isTokui ? "適正" : "非適正";
  tokuiContainer.classList.add("active");

  // ▼ ★ 通常フィールドは選択不可（disabled風）
  tokuiContainer.classList.add("disabled");

  // ▼ 自動選択が完了したので EXボーナスを更新
  updateEXBonus();
}


// ==================================================
// ▼ EXボーナス（カスタムドロップダウン版）
//  - 有効化条件を簡潔化：tokui が "main" または "sub" のときだけ有効
// ==================================================

const EXBONUS_LIST = [
  { value: "exberry", label: "きのみ" },
  { value: "exingredient", label: "食材" },
  { value: "exskill", label: "スキル" }
];

function updateEXBonus() {
  const tokui = document.getElementById("fieldTokuiDropdown").dataset.value;
  const exContainer = document.getElementById("exBonusDropdown");

  // 初期化
  exContainer.innerHTML = "";
  exContainer.dataset.value = "";
  exContainer.classList.remove("active", "disabled");

  const placeholder = "EXボーナス";

  // 有効化条件：フィールド適正が main または sub のときだけ
  if (tokui === "main" || tokui === "sub") {
    createDropdownSingle(exContainer, EXBONUS_LIST, placeholder, (val) => {
      exContainer.dataset.value = val;
      // 必要ならここで他の処理を呼ぶ
    });
    return;
  }

  // それ以外は disabled（薄く表示）
  createDropdownSingle(exContainer, EXBONUS_LIST, placeholder);
  exContainer.classList.add("disabled");
}

// ==================================================
// ▼ 初期化（DOMContentLoaded）
// ==================================================

document.addEventListener("DOMContentLoaded", () => {
  // ▼ フィールド選択（選択時に fieldTokui を更新）
  createDropdownSingle(
    document.getElementById("fieldDropdown"),
    FIELD_LIST,
    "フィールド選択",
    (selectedValue) => {
      // dataset は createDropdownSingle 内でセットされるが念のため
      const fld = document.getElementById("fieldDropdown");
      fld.dataset.value = selectedValue;

      updateFieldTokui();
      updateEXBonus();
    }
  );

  // ▼ フィールド適正（初期は空だが生成しておく）
  createDropdownSingle(
    document.getElementById("fieldTokuiDropdown"),
    [],
    "フィールド適正",
    (selectedValue) => {
      const tok = document.getElementById("fieldTokuiDropdown");
      tok.dataset.value = selectedValue;
      updateEXBonus();
    }
  );

  // ▼ EXボーナス欄を初期生成（薄く表示）
  updateEXBonus();
});
