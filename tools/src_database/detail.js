/* ================================
   detail.js — 詳細パネル生成
================================ */

/* ▼ グローバル：色違い表示状態 */
let showShiny = localStorage.getItem("showShiny") === "true";

/* ▼ 画像存在チェック */
function checkImageExists(url) {
  return new Promise(resolve => {
    const img = new Image();
    img.onload = () => resolve(true);
    img.onerror = () => resolve(false);
    img.src = url;
  });
}

/* -------------------------------
   ▼ 詳細パネルを開く
-------------------------------- */
function openDetailPanel(p) {

  window.currentDetailPokemon = p;

  document.querySelectorAll(".detail-tab").forEach(btn => btn.classList.remove("active"));
  document.querySelector('.detail-tab[data-tab="info"]').classList.add("active");

  document.querySelectorAll(".tab-section").forEach(sec => sec.classList.remove("active"));
  document.getElementById("tab-info").classList.add("active");

  renderTabInfo(p);

  const shinyUrl = getImagePath("shiny", p.dexNo, p.formId || "normal");

  checkImageExists(shinyUrl).then(exists => {

    const toggle = document.getElementById("shinyToggleDetail");

    if (toggle) {
      if (exists) {
        toggle.classList.remove("disabled");
        toggle.checked = showShiny;
      } else {
        toggle.classList.add("disabled");
        toggle.checked = false;
      }

      toggle.onchange = () => {
        if (toggle.classList.contains("disabled")) {
          toggle.checked = false;
          return;
        }
        showShiny = toggle.checked;
        localStorage.setItem("showShiny", showShiny);
        openDetailPanel(p);
      };
    }

    const imgSrc = (exists && showShiny)
      ? shinyUrl
      : p.imageDetail;

    const imgEl = document.querySelector(".detail-image-small");
    if (imgEl) imgEl.src = imgSrc;
  });

  renderTabSkill(p);
  renderEvolutionTab(p);
  renderFieldTab(p);

  openDetailPanelUI(); // ← モーダル表示（ui.js）
}


/* ================================
   ▼ タブ1：基本情報
================================ */

function renderTabInfo(p) {

  const html = `
    <div class="info-wrapper">
      <div class="info-left">
        <div class="info-title-block badge-round" style="--type-color: ${TYPE_COLOR_MAP[p.type[0].trim()]};">

          <div class="title-top-row">
            <div class="dex-badge">No.${String(p.dexNo).padStart(4, "0")}</div>

            <div class="title-right">
              <span class="shiny-label">色違い✨</span>
              <label class="shiny-switch">
                <input id="shinyToggleDetail" type="checkbox">
                <span class="slider"></span>
              </label>
            </div>
          </div>

          <div class="info-name">${p.name}</div>
        </div>

        <img src="${p.imageDetail}" class="detail-image-small">

        <div class="info-grid">
          <div><b>タイプ：</b> ${p.type.join("・")} ${renderBerryIcon(p.type[0])}</div>
          <div><b>とくい：</b> ${p.tokui}</div>
          <div class="info-ingredients">
            <b>食材：</b>
            ${p.ingredients.map(i => `
              <img class="ing-icon" src="${ingredientData[i.name].image}" title="${i.name}">
            `).join("")}
          </div>
          <div class="info-mainSkill">
            <b>メインスキル：</b> ${p.mainSkill}
          </div>
          <div><b>睡眠タイプ：</b> ${p.sleepType}</div>
          <div><b>基礎おてつだい時間：</b> ${p.baseHelpTime} 秒</div>
          <div><b>食材確率：</b> ${(p.ingRate * 100).toFixed(1)}%</div>
          <div><b>スキル発動確率：</b> ${(p.skillRate * 100).toFixed(1)}%</div>
          <div><b>最大所持数：</b> ${p.maxHold} 個</div>

        </div>

        <hr class="info-hr">

        <div class="index-grid">
          <div>
            <b>きのみ指数：</b> ${p.berryIndex.toFixed(2)}
            <span class="info-icon" data-info="berry">ⓘ
              <div class="tooltip-box" style="display:none;">
                「きのみの数S」、食材確率を加味したきのみエナジー効率の指標
              </div>
            </span>
          </div>

          <div>
            <b>食材指数：</b> ${p.ingIndex.toFixed(2)}
            <span class="info-icon" data-info="ingredient">ⓘ
              <div class="tooltip-box" style="display:none;">
                睡眠時間を加味したLv60での食材期待エナジー効率の指標
              </div>
            </span>
          </div>

          <div>
            <b>スキル発動指標：</b> ${p.skillIndicator.toFixed(2)}
            <span class="info-icon" data-info="skill">ⓘ
              <div class="tooltip-box" style="display:none;">
                睡眠時間を加味したLv60での1日当たりのスキル発動期待値
              </div>
            </span>
          </div>
        </div>
      </div>
    </div>
  `;

  document.getElementById("tab-info").innerHTML = html;
}

document.addEventListener("click", (e) => {
  document.querySelectorAll(".tooltip-box").forEach(t => t.style.display = "none");

  const icon = e.target.closest(".info-icon");
  if (!icon) return;

  const type = icon.dataset.info;
  const messages = {
    berry: "「きのみの数S」、食材確率を加味したきのみエナジー効率の指標",
    ingredient: "睡眠時間を加味したLv60での食材期待エナジー効率の指標",
    skill: "睡眠時間を加味したLv60での1日当たりのスキル発動期待値"
  };

  let tooltip = icon.querySelector(".tooltip-box");
  if (!tooltip) {
    tooltip = document.createElement("div");
    tooltip.className = "tooltip-box";
    tooltip.textContent = messages[type];
    icon.appendChild(tooltip);
  }

  tooltip.style.display = "block";
});

/* ▼ 指数説明 tooltip（PCはhover、スマホはtap） */
const isTouch = matchMedia("(pointer: coarse)").matches;

if (!isTouch) {
  /* PC版：hoverで表示 */
  document.addEventListener("mouseover", (e) => {
    const icon = e.target.closest(".info-icon");
    if (!icon) return;

    const tooltip = icon.querySelector(".tooltip-box");
    if (tooltip) tooltip.style.display = "block";
  });

  document.addEventListener("mouseout", (e) => {
    const icon = e.target.closest(".info-icon");
    if (!icon) return;

    const tooltip = icon.querySelector(".tooltip-box");
    if (tooltip) tooltip.style.display = "none";
  });

} else {
  /* スマホ版：tapで表示、他を触ると閉じる */
  document.addEventListener("click", (e) => {
    // 他の tooltip を閉じる
    document.querySelectorAll(".tooltip-box").forEach(t => t.style.display = "none");

    const icon = e.target.closest(".info-icon");
    if (!icon) return;

    const tooltip = icon.querySelector(".tooltip-box");
    if (tooltip) tooltip.style.display = "block";
  });
}

/* ================================
   ▼ タブ2：食材・スキル
================================ */
function renderTabSkill(p) {

  const skillData = mainSkillData[p.mainSkill];

  /* ▼ 食材テーブル */
  let ingredientHTML = `
    <h2>食材</h2>
    <table class="ingredient-table">
      <colgroup>
        <col style="width: 80px;">
        <col style="width: calc((100% - 80px) / 3);">
        <col style="width: calc((100% - 80px) / 3);">
        <col style="width: calc((100% - 80px) / 3);">
      </colgroup>

      <tr>
        <th>食材</th>
        <th>Lv1</th>
        <th>Lv30</th>
        <th>Lv60</th>
      </tr>
  `;

  p.ingredients.forEach(ing => {
    const img = ingredientData[ing.name]?.image || "";

    const lv1  = ing.countsByLevel[1]  ?? null;
    const lv30 = ing.countsByLevel[30] ?? null;
    const lv60 = ing.countsByLevel[60] ?? null;

    ingredientHTML += `
      <tr>
        <td class="ingredient-name-cell">
          <img class="ingredient-img" src="${img}">
        </td>
        <td class="${lv1  === null ? 'empty-cell' : ''}">${lv1  ?? ''}</td>
        <td class="${lv30 === null ? 'empty-cell' : ''}">${lv30 ?? ''}</td>
        <td class="${lv60 === null ? 'empty-cell' : ''}">${lv60 ?? ''}</td>
      </tr>
    `;
  });

  ingredientHTML += `</table><hr>`;


  /* ▼ メインスキルテーブル */
  let skillHTML = `
    <h2>メインスキル</h2>
    <table class="skill-table">
  `;

  if (!skillData.levels) {
    skillHTML += `
      <colgroup>
        <col style="width: 50px;">
        <col style="width: calc(100% - 50px);">
      </colgroup>

      <tr><th colspan="2" class="skill-title">スキル名：${p.mainSkill}</th></tr>
      <tr><td colspan="2" class="skill-desc">${skillData.desc}</td></tr>
      <tr><td colspan="2" class="skill-note">
        選ばれたメインスキルの効果量は、「${p.mainSkill}」のメインスキルのレベルによって決まります。
      </td></tr>
    </table>
    `;

  } else {

    const firstLevel = Object.values(skillData.levels)[0];
    const keys = Object.keys(firstLevel);
    const paramCount = keys.length;

    skillHTML += `<colgroup><col style="width: 50px;">`;
    const eachWidth = `calc((100% - 50px) / ${paramCount})`;
    keys.forEach(() => skillHTML += `<col style="width:${eachWidth};">`);
    skillHTML += `</colgroup>`;

    skillHTML += `
      <tr><th colspan="${paramCount + 1}" class="skill-title">スキル名：${p.mainSkill}</th></tr>
      <tr><td colspan="${paramCount + 1}" class="skill-desc">${skillData.desc}</td></tr>
      <tr><th class="col-lv-header">Lv</th>
    `;

    keys.forEach(k => skillHTML += `<th class="col-param-header">${k}</th>`);
    skillHTML += `</tr>`;

    Object.entries(skillData.levels).forEach(([lv, values]) => {
      skillHTML += `<tr><td class="col-lv">${lv}</td>`;
      keys.forEach(k => skillHTML += `<td class="col-param">${values[k]}</td>`);
      skillHTML += `</tr>`;
    });

    skillHTML += `</table>`;
  }

  document.getElementById("tab-skill").innerHTML = ingredientHTML + skillHTML;
}

/* ================================
   ▼ タブ3：進化段階
================================ */
function renderEvolutionTab(p) {

  const chain = p.evolutionChain;

  if (!chain || chain.length === 0 || (chain.length === 1 && !chain[0].evolveTo)) {
    document.getElementById("tab-evolution").innerHTML = `
      <table class="evo-table">
        <tr><td class="evo-cell">
          <div class="evo-item">
            <img class="evo-img" src="${p.imageCard}">
            <div>${p.name}</div>
          </div>
        </td></tr>
      </table>
    `;
    return;
  }

  const s0 = chain[0];
  const s1 = chain[1] || null;
  const s2 = chain[2] || null;

  const len0 = (s0.evolveTo || []).length;
  const len1 = s1 ? (s1.evolveTo || []).length : 0;
  const len2 = s2 ? (s2.evolveTo || []).length : 0;

  let html = "";

  if (len0 <= 1 && len1 <= 1) {
    html = renderEvolutionLinear(chain);
  }
  else if (len0 >= 2 && len1 === 0) {
    html = renderEvolutionFirstBranch(chain);
  }
  else if (len0 === 1 && len1 >= 2) {
    html = renderEvolutionSecondBranch(chain);
  }
  else {
    html = renderEvolutionDoubleBranch(chain);
  }

  document.getElementById("tab-evolution").innerHTML = html;
}

function renderEvolutionLinear(chain) {
  let html = `<table class="evo-table"><tr>`;

  for (let i = 0; i < chain.length; i++) {
    const stage = chain[i];
    const current = pokedexData_All.find(
      x => x.dexNo === stage.dexNo && x.formId === stage.formId
    );

    html += `
      <td class="evo-cell">
        <div class="evo-item">
          <img class="evo-img" src="${current.imageCard}">
          <div>${current.name}</div>
        </div>
      </td>
    `;

    if (!stage.evolveTo || stage.evolveTo.length === 0) continue;

    const evo = stage.evolveTo[0];
    const next = pokedexData_All.find(
      x => x.dexNo === evo.targetDexNo && x.formId === evo.targetFormId
    );

    const condText = evo.conditions
      .map(c => `<div>${formatEvolutionCondition(c)}</div>`)
      .join("");

    // 条件＋矢印
    html += `
      <td class="evo-cell evo-cond-cell">
        <div class="evo-cond-block">
          <div class="evo-conditions">${condText}</div>
          <div class="evo-long-arrow"></div>
        </div>
      </td>
    `;
  }

  html += `</tr></table>`;
  return html;
}

function renderEvolutionFirstBranch(chain) {
  const base = chain[0];
  const basePoke = pokedexData_All.find(
    x => x.dexNo === base.dexNo && x.formId === base.formId
  );

  const branches = base.evolveTo;
  const rowCount = branches.length;

  let html = `<table class="evo-table">`;

  for (let i = 0; i < rowCount; i++) {
    const branch = branches[i];

    const next = pokedexData_All.find(
      x => x.dexNo === branch.targetDexNo && x.formId === branch.targetFormId
    );

    const condText = branch.conditions
      .map(c => `<div>${formatEvolutionCondition(c)}</div>`)
      .join("");

    html += `<tr>`;

    // A（イーブイ）を rowspan で縦結合
    if (i === 0) {
      html += `
        <td class="evo-cell" rowspan="${rowCount}">
          <div class="evo-item">
            <img class="evo-img" src="${basePoke.imageCard}">
            <div>${basePoke.name}</div>
          </div>
        </td>
      `;
    }

    // 条件＋矢印
    html += `
      <td class="evo-cell evo-cond-cell">
        <div class="evo-cond-block">
          <div class="evo-conditions">${condText}</div>
          <div class="evo-long-arrow"></div>
        </div>
      </td>
    `;

    // 進化先
    html += `
      <td class="evo-cell">
        <div class="evo-item">
          <img class="evo-img" src="${next.imageCard}">
          <div>${next.name}</div>
        </div>
      </td>
    `;

    html += `</tr>`;
  }

  html += `</table>`;
  return html;
}

function renderEvolutionSecondBranch(chain) {
  const s0 = chain[0];
  const s1 = chain[1];

  const baseA = pokedexData_All.find(
    x => x.dexNo === s0.dexNo && x.formId === s0.formId
  );

  const midB = pokedexData_All.find(
    x => x.dexNo === s1.dexNo && x.formId === s1.formId
  );

  const evoAtoB = s0.evolveTo[0];
  const condAtoB = evoAtoB.conditions
    .map(c => `<div>${formatEvolutionCondition(c)}</div>`)
    .join("");

  const branches = s1.evolveTo;
  const rowCount = branches.length;

  let html = `<table class="evo-table">`;

  for (let i = 0; i < rowCount; i++) {
    const branch = branches[i];

    const next = pokedexData_All.find(
      x => x.dexNo === branch.targetDexNo && x.formId === branch.targetFormId
    );

    const condBtoC = branch.conditions
      .map(c => `<div>${formatEvolutionCondition(c)}</div>`)
      .join("");

    html += `<tr>`;

    // A を rowspan
    if (i === 0) {
      html += `
        <td class="evo-cell" rowspan="${rowCount}">
          <div class="evo-item">
            <img class="evo-img" src="${baseA.imageCard}">
            <div>${baseA.name}</div>
          </div>
        </td>
      `;

      // A→B 条件セルも rowspan
      html += `
        <td class="evo-cell evo-cond-cell" rowspan="${rowCount}">
          <div class="evo-cond-block">
            <div class="evo-conditions">${condAtoB}</div>
            <div class="evo-long-arrow"></div>
          </div>
        </td>
      `;

      // B も rowspan
      html += `
        <td class="evo-cell" rowspan="${rowCount}">
          <div class="evo-item">
            <img class="evo-img" src="${midB.imageCard}">
            <div>${midB.name}</div>
          </div>
        </td>
      `;
    }

    // B→C 条件
    html += `
      <td class="evo-cell evo-cond-cell">
        <div class="evo-cond-block">
          <div class="evo-conditions">${condBtoC}</div>
          <div class="evo-long-arrow"></div>
        </div>
      </td>
    `;

    // C / C'
    html += `
      <td class="evo-cell">
        <div class="evo-item">
          <img class="evo-img" src="${next.imageCard}">
          <div>${next.name}</div>
        </div>
      </td>
    `;

    html += `</tr>`;
  }

  html += `</table>`;
  return html;
}

function renderEvolutionDoubleBranch(chain) {
  const s0 = chain[0];

  const baseA = pokedexData_All.find(
    x => x.dexNo === s0.dexNo && x.formId === s0.formId
  );

  const branches = s0.evolveTo;
  const rowCount = branches.length;

  let html = `<table class="evo-table">`;

  for (let i = 0; i < rowCount; i++) {
    const evoToB = branches[i];

    const midB = pokedexData_All.find(
      x => x.dexNo === evoToB.targetDexNo && x.formId === evoToB.targetFormId
    );

    const stageB = chain.find(
      x => x.dexNo === midB.dexNo && x.formId === midB.formId
    );

    const hasNext = stageB && stageB.evolveTo && stageB.evolveTo.length > 0;

    const next = hasNext
      ? pokedexData_All.find(
          x =>
            x.dexNo === stageB.evolveTo[0].targetDexNo &&
            x.formId === stageB.evolveTo[0].targetFormId
        )
      : null;

    const condAtoB = evoToB.conditions
      .map(c => `<div>${formatEvolutionCondition(c)}</div>`)
      .join("");

    const condBtoC = hasNext
      ? stageB.evolveTo[0].conditions
          .map(c => `<div>${formatEvolutionCondition(c)}</div>`)
          .join("")
      : "";

    html += `<tr>`;

    // A を rowspan
    if (i === 0) {
      html += `
        <td class="evo-cell" rowspan="${rowCount}">
          <div class="evo-item">
            <img class="evo-img" src="${baseA.imageCard}">
            <div>${baseA.name}</div>
          </div>
        </td>
      `;
    }

    // A→B 条件
    html += `
      <td class="evo-cell evo-cond-cell">
        <div class="evo-cond-block">
          <div class="evo-conditions">${condAtoB}</div>
          <div class="evo-long-arrow"></div>
        </div>
      </td>
    `;

    // B
    html += `
      <td class="evo-cell">
        <div class="evo-item">
          <img class="evo-img" src="${midB.imageCard}">
          <div>${midB.name}</div>
        </div>
      </td>
    `;

    // B→C がある場合
    if (hasNext) {
      html += `
        <td class="evo-cell evo-cond-cell">
          <div class="evo-cond-block">
            <div class="evo-conditions">${condBtoC}</div>
            <div class="evo-long-arrow"></div>
          </div>
        </td>
        <td class="evo-cell">
          <div class="evo-item">
            <img class="evo-img" src="${next.imageCard}">
            <div>${next.name}</div>
          </div>
        </td>
      `;
    }

    html += `</tr>`;
  }

  html += `</table>`;
  return html;
}

/* ================================
   ▼ タブ4：出現フィールド（完全版）
================================ */
function renderFieldTab(p) {
  const container = document.getElementById("tab-fields");
  container.innerHTML = "";

  p.fields.forEach(field => {
    const fieldName = field.name;

    /* ▼ フィールドカラーライン */
    const lineColor = getFieldLineColor(fieldName);

    /* ▼ セクション生成 */
    const section = document.createElement("div");
    section.className = "field-section";

    /* ▼ タイトル（クリックで開閉） */
    const title = document.createElement("h3");
    title.className = "field-title-collapsible";
    title.innerHTML = `
      <span class="field-title-line" style="background:${lineColor}"></span>
      ${fieldName}
      <span class="field-toggle-icon">▼</span>
    `;
    section.appendChild(title);

    /* ▼ テーブル生成（初期は非表示） */
    const tableWrapper = document.createElement("div");
    tableWrapper.className = "field-table-wrapper";
    tableWrapper.style.display = "none"; // ★ 初期は折り畳み

    const table = document.createElement("table");
    table.className = "field-table";

    /* ▼ レア度背景色 */
    const rarityColors = {
      "ノーマル": "rgba(255, 0, 0, 0.10)",
      "スーパー": "rgba(0, 80, 255, 0.10)",
      "ハイパー": "rgba(255, 220, 0, 0.10)",
      "マスター": "rgba(180, 0, 255, 0.10)"
    };

    /* ▼ stars の描画 */
    Object.keys(field.stars).forEach(starKey => {
      const starData = field.stars[starKey];
      if (!starData) return; // ★ null はスキップ

      starData.forEach(entry => {
        const tr = document.createElement("tr");

        /* ★ 星数 */
        const tdStar = document.createElement("td");
        tdStar.textContent = `★${starKey}`;
        tr.appendChild(tdStar);

        /* ★ ランク（不明対応） */
        const tdRank = document.createElement("td");
        tdRank.className = "rank-cell";

        if (entry.type == null || entry.rank == null) {
          tdRank.textContent = "不明";
          tdRank.classList.add("unknown");
        } else {
          const rankName = `${entry.type}${entry.rank}`;
          tdRank.textContent = rankName;
          tdRank.dataset.rank = rankName;
          tdRank.dataset.field = fieldName;

          /* レア度背景色 */
          tdRank.style.background = rarityColors[entry.type] || "transparent";
        }

        tr.appendChild(tdRank);
        table.appendChild(tr);
      });
    });

    tableWrapper.appendChild(table);
    section.appendChild(tableWrapper);
    container.appendChild(section);

    /* ▼ 開閉イベント */
    title.addEventListener("click", () => {
      const isOpen = tableWrapper.style.display !== "none";
      tableWrapper.style.display = isOpen ? "none" : "block";
      title.querySelector(".field-toggle-icon").textContent = isOpen ? "▼" : "▲";
    });
  });
}

/* ================================
   ▼ 必要エナジー tooltip（PC：hover / スマホ：tap）
================================ */
const isTouchDevice = ("ontouchstart" in window || navigator.maxTouchPoints > 0);
let energyTooltip = null;

function showEnergyTooltip(target, text) {
  if (!energyTooltip) {
    energyTooltip = document.createElement("div");
    energyTooltip.className = "energy-tooltip";
    document.body.appendChild(energyTooltip);
  }

  energyTooltip.textContent = text;

  const rect = target.getBoundingClientRect();
  energyTooltip.style.left = `${rect.left + window.scrollX}px`;
  energyTooltip.style.top = `${rect.bottom + window.scrollY + 4}px`;
  energyTooltip.style.display = "block";
}

function hideEnergyTooltip() {
  if (energyTooltip) energyTooltip.style.display = "none";
}

/* PC版 hover */
document.addEventListener("mouseover", (e) => {
  if (isTouchDevice) return;
  const cell = e.target.closest(".rank-cell");
  if (!cell || cell.classList.contains("unknown")) return;

  const rank = cell.dataset.rank;
  const field = cell.dataset.field;
  const energy = ENERGY_TABLE[field]?.[rank];
  if (energy == null) return;

  showEnergyTooltip(cell, `必要エナジー：${energy.toLocaleString()}`);
});

document.addEventListener("mouseout", (e) => {
  if (isTouchDevice) return;
  if (e.target.closest(".rank-cell")) hideEnergyTooltip();
});

/* スマホ版 tap */
document.addEventListener("click", (e) => {
  if (!isTouchDevice) return;
  const cell = e.target.closest(".rank-cell");
  if (!cell || cell.classList.contains("unknown")) return;

  const rank = cell.dataset.rank;
  const field = cell.dataset.field;
  const energy = ENERGY_TABLE[field]?.[rank];
  if (energy == null) return;

  if (energyTooltip?.style.display === "block") {
    hideEnergyTooltip();
  } else {
    showEnergyTooltip(cell, `必要エナジー：${energy.toLocaleString()}`);
  }
});

/* -------------------------------
   ▼ 出現フィールド：色分け
-------------------------------- */
function getFieldLineColor(name) {
  if (name.includes("ワカクサ本島EX")) return "#6FA85F";
  if (name.includes("ワカクサ本島")) return "#8BC98B";
  if (name.includes("シアンの砂浜EX")) return "#5AB6AB";
  if (name.includes("シアンの砂浜")) return "#76D7D7";
  if (name.includes("トープ洞窟")) return "#B8A89A";
  if (name.includes("ウノハナ雪原")) return "#F3E8C8";
  if (name.includes("ラピスラズリ湖畔")) return "#6FA8DC";
  if (name.includes("ゴールド旧発電所")) return "#D9C16F";
  if (name.includes("アンバー渓谷")) return "#D9A76F";
  return "#CCC";
}


/* -------------------------------
   ▼ タイプ → きのみアイコン
-------------------------------- */
function renderBerryIcon(type) {
  const berry = berryData[type];
  if (!berry) return "";
  return `<img src="${berry.image}" style="width:20px; height:20px; vertical-align:middle;">`;
}
