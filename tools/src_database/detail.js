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
  <div><b>睡眠タイプ：</b> ${p.sleepType}</div>
  <div><b>基礎おてつだい時間：</b> ${p.baseHelpTime} 秒</div>
  <div><b>食材確率：</b> ${(p.ingRate * 100).toFixed(1)}%</div>
  <div><b>スキル発動確率：</b> ${(p.skillRate * 100).toFixed(1)}%</div>
  <div><b>最大所持数：</b> ${p.maxHold} 個</div>
</div>

<hr class="info-hr">

<div class="index-grid">
  <div><b>きのみ指数：</b> ${p.berryIndex.toFixed(2)}</div>
  <div><b>食材指数：</b> ${p.ingIndex.toFixed(2)}</div>
  <div><b>スキル発動指標：</b> ${p.skillIndicator.toFixed(3)}</div>
</div>
      </div>
    </div>
  `;

  document.getElementById("tab-info").innerHTML = html;
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
   ▼ タブ4：出現フィールド（あなたの完全版）
================================ */
function renderFieldTab(p) {

  let fieldHTML = "";

  p.fields.forEach((f, index) => {

    const lineColor = getFieldLineColor(f.name);
    const starKeys = Object.keys(f.stars).sort((a, b) => a - b);

    const columns = [];
    starKeys.forEach(k => {
      const list = f.stars[k];
      if (list === null) {
        columns.push({ star: k, data: null });
      } else {
        list.forEach(star => columns.push({ star: k, data: star }));
      }
    });

    const fixedWidth = "80px";

    const headerCells = columns
      .map(col => `<th style="width:${fixedWidth}; min-width:${fixedWidth};">星${col.star}</th>`)
      .join("");

    const dataCells = columns
      .map(col => renderFieldCell(col.data))
      .join("");

    fieldHTML += `
      <div class="field-block">
        <h3 class="field-title">
          <span class="field-title-line" style="background:${lineColor}"></span>
          ${f.name}
        </h3>

        <div class="field-table-wrapper">
          <table class="field-table">
            <tr>${headerCells}</tr>
            <tr>${dataCells}</tr>
          </table>
        </div>
      </div>
    `;

    if (index < p.fields.length - 1) fieldHTML += `<hr>`;
  });

  document.getElementById("tab-fields").innerHTML = fieldHTML;
}


/* -------------------------------
   ▼ 出現フィールド：セル生成
-------------------------------- */
function renderFieldCell(star) {
  if (!star) return `<td class="field-cell empty">ー</td>`;

  if (star.type === null || star.rank === null) {
    return `<td class="field-cell unknown">不明</td>`;
  }

  const rarityColors = {
    "ノーマル": "rgba(255, 0, 0, 0.10)",
    "スーパー": "rgba(0, 80, 255, 0.10)",
    "ハイパー": "rgba(255, 220, 0, 0.10)",
    "マスター": "rgba(180, 0, 255, 0.10)"
  };

  const bg = rarityColors[star.type] || "transparent";

  return `<td class="field-cell" style="background:${bg}">${star.type}${star.rank}</td>`;
}


/* -------------------------------
   ▼ 出現フィールド：色分け
-------------------------------- */
function getFieldLineColor(name) {
  if (name.includes("ワカクサ本島EX")) return "#6FA85F";
  if (name.includes("ワカクサ")) return "#8BC98B";
  if (name.includes("ラピスラズリ")) return "#6FA8DC";
  if (name.includes("シアン")) return "#76D7D7";
  if (name.includes("トープ")) return "#B8A89A";
  if (name.includes("ウノハナ")) return "#F3E8C8";
  if (name.includes("ゴールド")) return "#D9C16F";
  if (name.includes("アンバー")) return "#D9A76F";
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