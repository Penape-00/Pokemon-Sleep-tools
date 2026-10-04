// ==================================================
// ▼ ひらがな変換テーブル
// ==================================================
function toHiragana(str) {
  return str
    .replace(/[ァ-ン]/g, ch => String.fromCharCode(ch.charCodeAt(0) - 0x60))
    .toLowerCase();
}

// ==================================================
// ▼ ポケモン名検索 UI
// ==================================================

document.addEventListener("DOMContentLoaded", () => {
  const container = document.getElementById("pokemonDropdown");
  const input = document.getElementById("pokemonInput");
  const optionsBox = container.querySelector(".pokemon-options");

  // ▼ 候補リスト生成
  function renderOptions(filterText = "") {
    optionsBox.innerHTML = "";

    const hiraFilter = toHiragana(filterText);

    const filtered = pokedexData_All.filter(mon => {
      const nameJP = mon.name;
      const nameHira = toHiragana(nameJP);
      return (
        nameJP.includes(filterText) ||
        nameHira.includes(hiraFilter)
      );
    });

    filtered.forEach(mon => {
      const opt = document.createElement("div");
      opt.className = "pokemon-option";
      const no4 = String(mon.dexNo).padStart(4, "0");
      opt.textContent = `${mon.name}（No.${no4}）`;
      opt.dataset.dexNo = mon.dexNo;
      opt.dataset.formId = mon.formId;
      opt.dataset.name = mon.name;

      opt.addEventListener("click", () => {
        input.value = mon.name;
        container.dataset.dexNo = mon.dexNo;
        container.dataset.formId = mon.formId;
        container.dataset.name = mon.name;

        optionsBox.style.display = "none";
        container.classList.remove("focused");

        container.classList.add("has-value");   // ★ これで × が必ず表示される

        onPokemonSelected(mon);
        updateFieldTokui();
        updateEXBonus();
      });

      optionsBox.appendChild(opt);
    });

    optionsBox.style.display = filtered.length > 0 ? "block" : "none";
  }

  // ▼ 入力欄フォーカス → 候補展開
  input.addEventListener("focus", () => {
    container.classList.add("focused");
    renderOptions(input.value);
  });

  // ▼ 入力で絞り込み
  input.addEventListener("input", () => {
    renderOptions(input.value);
  });

  // ▼ 外側クリックで閉じる
  document.addEventListener("click", (e) => {
    if (!container.contains(e.target)) {
      optionsBox.style.display = "none";
      container.classList.remove("focused");
    }
  });
});

document.addEventListener("DOMContentLoaded", () => {
  const container = document.getElementById("pokemonDropdown");
  const input = document.getElementById("pokemonInput");
  const optionsBox = container.querySelector(".pokemon-options");

  // ▼ クリアボタン追加
  const clearBtn = document.createElement("div");
  clearBtn.className = "pokemon-clear";
  clearBtn.textContent = "×";
  container.appendChild(clearBtn);

  clearBtn.addEventListener("click", () => {
    input.value = "";
    container.dataset.dexNo = "";
    container.dataset.formId = "";
    container.dataset.name = "";

    optionsBox.style.display = "none";
    container.classList.remove("focused");
    container.classList.remove("has-value");

    updateFieldTokui(); // ★ ポケモンが消えたので適正もリセット
  });

  // ▼ 入力時に × を表示
  input.addEventListener("input", () => {
    if (input.value === "") {
      container.classList.remove("has-value");
    } else {
      container.classList.add("has-value");
    }
  });

  // ▼ 既存の検索処理（あなたのコード）
  // renderOptions() などはそのまま
});

// ==================================================
// ▼ 性格一覧（日本語＋補正）
// ==================================================

const NATURE_LIST = [
  { value: "hardy",    label: "がんばりや（無補正）" },
  { value: "lonely",   label: "さみしがり（おてスピ up / げんき down）" },
  { value: "brave",    label: "ゆうかん（おてスピ up / Ｅｘｐ down）" },
  { value: "adamant",  label: "いじっぱり（おてスピ up / 食材 down）" },
  { value: "naughty",  label: "やんちゃ（おてスピ up / スキル down）" },
  { value: "bold",     label: "ずぶとい（げんき up / おてスピ down）" },
  { value: "docile",   label: "すなお（無補正）" },
  { value: "relaxed",  label: "のんき（げんき up / Ｅｘｐ down）" },
  { value: "impish",   label: "わんぱく（げんき up / 食材 down）" },
  { value: "lax",      label: "のうてんき（げんき up / スキル down）" },
  { value: "timid",    label: "おくびょう（Ｅｘｐ up / おてスピ down）" },
  { value: "hasty",    label: "せっかち（Ｅｘｐ up / げんき down）" },
  { value: "serious",  label: "まじめ（無補正）" },
  { value: "jolly",    label: "ようき（Ｅｘｐ up / 食材 down）" },
  { value: "naive",    label: "むじゃき（Ｅｘｐ up / スキル down）" },
  { value: "modest",   label: "ひかえめ（食材 up / おてスピ down）" },
  { value: "mild",     label: "おっとり（食材 up / げんき down）" },
  { value: "quiet",    label: "れいせい（食材 up / Ｅｘｐ down）" },
  { value: "bashful",  label: "てれや（無補正）" },
  { value: "rash",     label: "うっかりや（食材 up / スキル down）" },
  { value: "calm",     label: "おだやか（スキル up / おてスピ down）" },
  { value: "gentle",   label: "おとなしい（スキル up / げんき down）" },
  { value: "sassy",    label: "なまいき（スキル up / Ｅｘｐ down）" },
  { value: "careful",  label: "しんちょう（スキル up / 食材 down）" },
  { value: "quirky",   label: "きまぐれ（無補正）" }
];

// ==================================================
// ▼ 性格ドロップダウンの初期化
// ==================================================

document.addEventListener("DOMContentLoaded", () => {
  const container = document.getElementById("natureDropdown");
  const input = document.getElementById("natureInput");
  const optionsBox = container.querySelector(".nature-options");

  // ▼ 候補リストを生成
  function renderOptions(filterText = "") {
    optionsBox.innerHTML = "";

    const filtered = NATURE_LIST.filter(item =>
      item.label.includes(filterText)
    );

    filtered.forEach(item => {
      const opt = document.createElement("div");
      opt.className = "nature-option";
      opt.textContent = item.label;
      opt.dataset.value = item.value;

      opt.addEventListener("click", () => {
        input.value = item.label;
        container.dataset.value = item.value;
        optionsBox.style.display = "none";
        container.classList.remove("focused");
      });

      optionsBox.appendChild(opt);
    });

    optionsBox.style.display = filtered.length > 0 ? "block" : "none";
  }

  // ▼ 入力欄クリック → 全リスト展開
  input.addEventListener("focus", () => {
    container.classList.add("focused");
    renderOptions("");
  });

  // ▼ 入力で絞り込み
  input.addEventListener("input", () => {
    renderOptions(input.value);
  });

  // ▼ 外側クリックで閉じる
  document.addEventListener("click", (e) => {
    if (!container.contains(e.target)) {
      optionsBox.style.display = "none";
      container.classList.remove("focused");
    }
  });

});

// ==================================================
// ▼ Lv.の表示制御（完全版）
// ==================================================

function updateUnitVisibility() {
  const lvInput = document.getElementById("level");

  // Lv. 表示制御
  const lvField = lvInput.closest(".lv-field");
  lvField.classList.toggle("has-value", lvInput.value !== "");

}

// ▼ 入力時に監視
document.addEventListener("DOMContentLoaded", () => {
  const lvInput = document.getElementById("level");

  lvInput.addEventListener("input", updateUnitVisibility);

  updateUnitVisibility(); // 初期状態も反映
});

// ==================================================
//  ▼ カスタムドロップダウン(おやすみリボン)
// ==================================================

/* ▼ おやすみリボンの選択肢 */
const RIBBON_LIST = [
  { value: "non", label: "なし" },
  { value: "200", label: "200時間" },
  { value: "500", label: "500時間" },
  { value: "1000", label: "1000時間" },
  { value: "2000", label: "2000時間" }
];

function createDropdownSingle(container, list, placeholderText) {
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

    opt.addEventListener("click", () => {
      display.textContent = item.label;
      container.dataset.value = item.value;
      container.classList.add("active");
      container.classList.remove("focused");
      menu.style.display = "none";
    });

    menu.appendChild(opt);
  });

  // ▼ container 全体クリックで開閉
  container.addEventListener("click", (e) => {
    // option をクリックした場合は何もしない
    if (e.target.classList.contains("dropdown-option")) return;

    e.stopPropagation();
    const isOpen = menu.style.display === "block";
    document.querySelectorAll(".dropdown-options").forEach(m => m.style.display = "none");
    document.querySelectorAll(".dropdown-single").forEach(c => c.classList.remove("focused"));
    menu.style.display = isOpen ? "none" : "block";
    if (!isOpen) container.classList.add("focused");
  });

  // ▼ 外側クリックで閉じる
  document.addEventListener("click", () => {
    menu.style.display = "none";
    container.classList.remove("focused");
  });

  container.append(display, menu);
}

/* ▼ 初期化 */
document.addEventListener("DOMContentLoaded", () => {
  const ribbonContainer = document.getElementById("ribbonDropdown");
  ribbonContainer.dataset.type = "ribbon";
  createDropdownSingle(ribbonContainer, RIBBON_LIST, "おやすみリボン");
});

// ==================================================
// ▼ ポケモン選択時：食材スロット更新
// ==================================================

function onPokemonSelected(mon) {
  if (!mon) {
    updateIngredientSelectors(null);
    return;
  }
  updateIngredientSelectors(mon);
}

// ==================================================
// ▼ 食材スロット更新（pokedexData対応・初期表示対応）
// ==================================================

function updateIngredientSelectors(mon) {
  const lv1  = document.getElementById("ingredientLv1");
  const lv30 = document.getElementById("ingredientLv30");
  const lv60 = document.getElementById("ingredientLv60");

  // ▼ 未選択時は初期表示（wrapper を壊さない安全版）
  if (!mon || !mon.ingredients) {
    [lv1, lv30, lv60].forEach(select => {
      select.innerHTML = "";

      // ▼ 高さ維持のための空 option（選択不可）
      const emptyOpt = document.createElement("option");
      emptyOpt.value = "";
      emptyOpt.textContent = "";
      emptyOpt.disabled = true;
      select.appendChild(emptyOpt);

      // ▼ 実際の placeholder（選択不可 + 初期表示）
      const placeholder = document.createElement("option");
      placeholder.value = "";
      placeholder.textContent = "ポケモンを選択してください";
      placeholder.disabled = true;
      placeholder.selected = true;
      select.appendChild(placeholder);

      // ▼ select は disabled にしない（これが重要）
      select.disabled = false;
    });
    return;
  }

  // ▼ ingredients からレベル別の候補を抽出
  const lv1List  = [];
  const lv30List = [];
  const lv60List = [];

  mon.ingredients.forEach(ing => {
    if (ing.countsByLevel[1]  !== undefined) lv1List.push(ing.name);
    if (ing.countsByLevel[30] !== undefined) lv30List.push(ing.name);
    if (ing.countsByLevel[60] !== undefined) lv60List.push(ing.name);
  });

  // ▼ セレクトに反映する共通関数
  function setOptions(selectEl, options) {
    selectEl.innerHTML = "";

    options.forEach(item => {
      const opt = document.createElement("option");
      opt.value = item;
      opt.textContent = item;
      selectEl.appendChild(opt);
    });

    selectEl.value = options[0];

    // 候補が1つなら変更不可
    selectEl.disabled = (options.length === 1);
  }

  setOptions(lv1,  lv1List);
  setOptions(lv30, lv30List);
  setOptions(lv60, lv60List);
}

// ==================================================
// ▼ サブスキル一覧（正式名称）
// ==================================================

const SUBSKILL_LIST = [
  { value: "speedS",      label: "おてつだいスピードS",      rarity: "white" },
  { value: "ingredientS", label: "食材確率アップS",           rarity: "white" },
  { value: "skillS",      label: "スキル確率アップS",         rarity: "white" },
  { value: "holdS",       label: "最大所持数アップS",         rarity: "white" },

  { value: "speedM",      label: "おてつだいスピードM",      rarity: "blue" },
  { value: "ingredientM", label: "食材確率アップM",           rarity: "blue" },
  { value: "skillM",      label: "スキル確率アップM",         rarity: "blue" },
  { value: "holdM",       label: "最大所持数アップM",         rarity: "blue" },
  { value: "holdL",       label: "最大所持数アップL",         rarity: "blue" },
  { value: "skillLvS",    label: "スキルレベルアップS",       rarity: "blue" },

  { value: "berryS",      label: "きのみの数S",               rarity: "gold" },
  { value: "helpBonus",   label: "おてつだいボーナス",       rarity: "gold" },
  { value: "skillLvM",    label: "スキルレベルアップM",       rarity: "gold" },
  { value: "dreamBonus",  label: "ゆめのかけらボーナス",     rarity: "gold" },
  { value: "researchExp", label: "リサーチEXPボーナス",      rarity: "gold" },
  { value: "sleepExp",    label: "睡眠EXPボーナス",          rarity: "gold" },
  { value: "energyBonus", label: "げんき回復ボーナス",       rarity: "gold" }
];

const subskillIds = ["subskill10", "subskill25", "subskill50", "subskill70", "subskill80"];

// ==================================================
// ▼ 重複禁止ロジック
// ==================================================

function getUsedSubskills() {
  const used = new Set();
  subskillIds.forEach(id => {
    const val = document.getElementById(id).dataset.value;
    if (val) used.add(val);
  });
  return used;
}

// ==================================================
// ▼ 性格欄と同じ構造のサブスキル描画（重複禁止対応）
// ==================================================

// --- renderSubskillOptions を描画専用に変更 ---
// showFlag を渡して true のときだけ open クラスを付ける（デフォルト false）
function renderSubskillOptions(container, input, optionsBox, currentValue, usedSet, showFlag = false) {
  optionsBox.innerHTML = "";

  SUBSKILL_LIST.forEach(item => {
    if (usedSet && usedSet.has(item.value) && item.value !== currentValue) return;

    const opt = document.createElement("div");
    opt.className = `subskill-option subskill-${item.rarity}`;
    opt.textContent = item.label;
    opt.dataset.value = item.value;

    opt.addEventListener("click", () => {
      input.value = item.label;
      container.dataset.value = item.value;
      container.classList.add("active", "has-value");
      container.classList.remove("focused");
      // 描画は閉じるが open クラスは外す
      container.classList.remove("open");

      updateSubskillAll(); // 他の欄の選択肢を再描画（開かない）
    });

    optionsBox.appendChild(opt);
  });

  // showFlag が true のときだけ開く
  if (showFlag) {
    container.classList.add("open");
  } else {
    container.classList.remove("open");
  }
}

function updateSubskillAll() {
  const used = getUsedSubskills();

  subskillIds.forEach(id => {
    const container = document.getElementById(id);
    const input = container.querySelector(".subskill-input");
    const optionsBox = container.querySelector(".subskill-options");
    const current = container.dataset.value;

    // showFlag は false にして開かないようにする
    renderSubskillOptions(container, input, optionsBox, current, used, false);
  });
}

// ==================================================
// ▼ 初期化（性格欄と同じ構造＋重複禁止）
// ==================================================

document.addEventListener("DOMContentLoaded", () => {
  // ループ外で一度だけ登録：どこをクリックしても、開いているコンテナだけ閉じる
  document.addEventListener("click", (e) => {
    subskillIds.forEach(id => {
      const c = document.getElementById(id);
      if (!c) return;
      if (!c.contains(e.target)) {
        c.classList.remove("open", "focused");
      }
    });
  });

    subskillIds.forEach(id => {
    const container = document.getElementById(id);
    const input = container.querySelector(".subskill-input");
    const optionsBox = container.querySelector(".subskill-options");

    // 右端クリア要素（既に追加済みなら取得）
    let clearZone = container.querySelector(".subskill-clear-zone");
    if (!clearZone) {
      clearZone = document.createElement("div");
      clearZone.className = "subskill-clear-zone";
      container.appendChild(clearZone);
    }

    // clearZone のクリックは伝播させない（確実に拾う）
    clearZone.addEventListener("click", (e) => {
      e.stopPropagation();
      if (container.classList.contains("has-value")) {
        input.value = "";
        container.dataset.value = "";
        container.classList.remove("active", "has-value", "open");
        updateSubskillAll();
      }
    });

    // optionsBox 内クリックも伝播を止める（リスト内クリックで閉じられないように）
    optionsBox.addEventListener("click", (e) => {
      e.stopPropagation();
    });

    // input の click: 開閉。必ず stopPropagation()
    input.addEventListener("click", (e) => {
      e.stopPropagation();
      const isOpen = container.classList.contains("open");
      if (isOpen) {
        container.classList.remove("open", "focused");
      } else {
        container.classList.add("focused");
        const used = getUsedSubskills();
        const current = container.dataset.value;
        renderSubskillOptions(container, input, optionsBox, current, used, true);
      }
    });

    input.addEventListener("focus", (e) => {
      e.stopPropagation();
      container.classList.add("focused");
    });

    // input の input（文字削除での復活処理） — 開閉は行わない
    input.addEventListener("input", (e) => {
      // ここでは伝播は不要だが、念のため stopPropagation しても安全
      e.stopPropagation();
      if (input.value === "") {
        container.dataset.value = "";
        container.classList.remove("active", "has-value");
        updateSubskillAll(); // 再描画のみ。open は触らない
        return;
      }
      // フィルタリングしてこの欄だけ開く
      const filter = input.value;
      const used = getUsedSubskills();
      const current = container.dataset.value;

      optionsBox.innerHTML = "";
      SUBSKILL_LIST.forEach(item => {
        if (!item.label.includes(filter)) return;
        if (used.has(item.value) && item.value !== current) return;

        const opt = document.createElement("div");
        opt.className = `subskill-option subskill-${item.rarity}`;
        opt.textContent = item.label;
        opt.dataset.value = item.value;

        opt.addEventListener("click", (ev) => {
          ev.stopPropagation();
          input.value = item.label;
          container.dataset.value = item.value;
          container.classList.add("active", "has-value");
          container.classList.remove("focused", "open");
          updateSubskillAll();
        });

        optionsBox.appendChild(opt);
      });

      container.classList.add("open");
    });
  });

});
