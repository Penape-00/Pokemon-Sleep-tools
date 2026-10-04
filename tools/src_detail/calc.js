// ==================================================
// ▼ 1.1 標準おてつだい時間（新仕様）
// ==================================================

function calcStandardHelpTime(
  baseHelpTime,
  level,
  natureKey,
  subskillValues,     // {10: "speedS", 25: "helpBonus", ...}
  teamBonusCount,     // その他のおてボ数
  ribbonValue,        // "non", "200", "500", "1000", "2000"
  evolutionStage       // 0, 1, 2
) {

  // ---------------------------------------------
  // 1.1.1 レベル補正
  // ---------------------------------------------
  const levelFactor = 1 - (level - 1) * 0.002;

  // ---------------------------------------------
  // 1.1.2 性格補正（speed）
  // ---------------------------------------------
  const natureSpeed = natureModifiers[natureKey]?.speed || 1.0;

  // ---------------------------------------------
  // 1.1.3 サブスキル補正（最大35%）
  // ---------------------------------------------
  let subskillBonus = 0;

  const subskillLevelMap = {
    10: "subskill10",
    25: "subskill25",
    50: "subskill50",
    70: "subskill70",
    80: "subskill80"
  };

  const subskillEffectMap = {
    speedS: 0.07,
    speedM: 0.14,
    helpBonus: 0.05
  };

  Object.entries(subskillLevelMap).forEach(([reqLv, id]) => {
    if (level >= Number(reqLv)) {
      const val = subskillValues[id];
      if (subskillEffectMap[val]) {
        subskillBonus += subskillEffectMap[val];
      }
    }
  });

  // その他のおてボ数 × 5%
  if (teamBonusCount > 0) {
    subskillBonus += teamBonusCount * 0.05;
  }

  // 最大35%
  if (subskillBonus > 0.35) subskillBonus = 0.35;

  const subskillFactor = 1 - subskillBonus;

  // ---------------------------------------------
  // 1.1.4 おやすみリボン補正
  // ---------------------------------------------
  let ribbonFactor = 1.0;

  if (evolutionStage === 1) {
    if (ribbonValue === "500" || ribbonValue === "1000") ribbonFactor = 0.95;
    if (ribbonValue === "2000") ribbonFactor = 0.88;
  }

  if (evolutionStage === 2) {
    if (ribbonValue === "500" || ribbonValue === "1000") ribbonFactor = 0.89;
    if (ribbonValue === "2000") ribbonFactor = 0.75;
  }

  // ---------------------------------------------
  // 1.1.5 最終計算（切り捨て）
  // ---------------------------------------------
  const result =
    baseHelpTime *
    levelFactor *
    natureSpeed *
    subskillFactor *
    ribbonFactor;

  return Math.floor(result);
}

// ==================================================
// ▼ 1.2 実おてつだい時間（新仕様）
// ==================================================

function calcActualHelpTime(
  standardHelpTime,
  fieldValue,     // fieldDropdown.dataset.value
  fieldTokui,     // main / sub / none / ok / ng
  campTicketValue // "1" or "1.2"
) {

  // ---------------------------------------------
  // 1.2.1 げんき補正（固定）
  // ---------------------------------------------
  const genkiFactor = 0.45;

  // ---------------------------------------------
  // 1.2.2 キャンプチケット補正（÷1.2）
  // ---------------------------------------------
  const campFactor = 1 / Number(campTicketValue || 1);

  // ---------------------------------------------
  // 1.2.3 EX補正
  // ---------------------------------------------
  let exFactor = 1.0;

  const isWakakusaEX = fieldValue === "wakakusaEX";
  const isCyanEX = fieldValue === "cyanEX";

  if (isWakakusaEX) {
    if (fieldTokui === "main") exFactor = 0.90;
    else if (fieldTokui === "none") exFactor = 1.15;
    else exFactor = 1.0; // sub, ok, ng
  }

  if (isCyanEX) {
    if (fieldTokui === "main") exFactor = 0.80;
    else if (fieldTokui === "none") exFactor = 1.35;
    else exFactor = 1.0; // sub, ok, ng
  }

  // ---------------------------------------------
  // 1.2.4 最終計算（切り捨て）
  // ---------------------------------------------
  const result =
    standardHelpTime *
    genkiFactor *
    campFactor *
    exFactor;

  return Math.floor(result);
}

// ==================================================
// ▼ 1.3 きのみ1個あたりのエナジー計算（新仕様）
// ==================================================

function calcBerryEnergyOne(level, baseBerryEnergy, fieldBonusPercent, fieldTokui, exBonus) {

  // 1.3.1 基礎エナジー成長（線形 or 指数 → 大きい方）＋四捨五入
  const linear = baseBerryEnergy + (level - 1);
  const exp = baseBerryEnergy * Math.pow(1.025, (level - 1));
  let energy = Math.max(linear, exp);
  energy = Math.round(energy);

  // 1.3.2 フィールドボーナス（％） → 切り上げ
  if (fieldBonusPercent && fieldBonusPercent !== 0) {
    energy *= (1 + fieldBonusPercent / 100);
    energy = Math.ceil(energy);
  }

  // 1.3.3：フィールド適正（main / sub / ok）なら 2倍
  const isFieldGood =
    fieldTokui === "main" ||
    fieldTokui === "sub" ||
    fieldTokui === "ok";

  if (isFieldGood) {
    energy *= 2;
  }

  // 1.3.4：EXボーナス（きのみ）かつ EX適正（main / sub） → 1.2倍 → 切り上げ
  const isEXGood =
    exBonus === "exberry" &&
    (fieldTokui === "main" || fieldTokui === "sub");

  if (isEXGood) {
    energy *= 1.2;
    energy = Math.ceil(energy);
  }

  return energy;
}

// ==================================================
// ▼ 食材確率（新仕様）
// ==================================================

function calcIngredientRate(
  baseIngRate,      // mon.ingRate
  natureKey,        // 性格キー
  level,            // レベル
  subskillValues    // {subskill10: "ingredientS", ...}
) {

  // ---------------------------------------------
  // STEP 1：性格補正
  // ---------------------------------------------
  const natureFactor = natureModifiers[natureKey]?.ingredient || 1.0;

  // ---------------------------------------------
  // STEP 2：サブスキル補正
  // ---------------------------------------------
  let subskillBonus = 0;

  const subskillLevelMap = {
    10: "subskill10",
    25: "subskill25",
    50: "subskill50",
    70: "subskill70",
    80: "subskill80"
  };

  const ingSubskillEffectMap = {
    ingredientS: 0.18,
    ingredientM: 0.36
  };

  Object.entries(subskillLevelMap).forEach(([reqLv, id]) => {
    if (level >= Number(reqLv)) {
      const val = subskillValues[id];
      if (ingSubskillEffectMap[val]) {
        subskillBonus += ingSubskillEffectMap[val];
      }
    }
  });

  // ---------------------------------------------
  // STEP 3：最終計算
  // ---------------------------------------------
  const result = baseIngRate * natureFactor * (1 + subskillBonus);

  return result; // 例：0.285 → 0.35 など
}

// ==================================================
// ▼ スキル確率（新仕様）
// ==================================================

function calcSkillRate(
  baseSkillRate,    // mon.skillRate
  natureKey,        // 性格キー
  level,            // レベル
  subskillValues,   // {subskill10: "skillS", ...}
  fieldTokui,       // "main" / "sub" / "none"
  exBonus           // "exberry" / "exingredient" / "exskill"
) {

  // ---------------------------------------------
  // STEP 1：性格補正（skill）
  // ---------------------------------------------
  const natureFactor = natureModifiers[natureKey]?.skill || 1.0;

  // ---------------------------------------------
  // STEP 2：サブスキル補正
  // ---------------------------------------------
  let subskillBonus = 0;

  const subskillLevelMap = {
    10: "subskill10",
    25: "subskill25",
    50: "subskill50",
    70: "subskill70",
    80: "subskill80"
  };

  const skillSubskillEffectMap = {
    skillS: 0.18,
    skillM: 0.36
  };

  Object.entries(subskillLevelMap).forEach(([reqLv, id]) => {
    if (level >= Number(reqLv)) {
      const val = subskillValues[id];
      if (skillSubskillEffectMap[val]) {
        subskillBonus += skillSubskillEffectMap[val];
      }
    }
  });

  // ---------------------------------------------
  // STEP 3：EXボーナス（スキル）×1.25
  // ---------------------------------------------
  let exFactor = 1.0;

  const isEXSkill =
    exBonus === "exskill" &&
    (fieldTokui === "main" || fieldTokui === "sub");

  if (isEXSkill) {
    exFactor = 1.25;
  }

  // ---------------------------------------------
  // STEP 4：最終計算
  // ---------------------------------------------
  const result =
    baseSkillRate *
    natureFactor *
    (1 + subskillBonus) *
    exFactor;

  return result;
}

// ==================================================
// ▼ 最大所持数（新仕様）
// ==================================================

function calcMaxHold(
  baseMaxHold,      // mon.maxHold
  level,            // レベル
  subskillValues,   // {subskill10: "holdS", ...}
  ribbonValue,      // "non", "200", "500", "1000", "2000"
  campTicketValue,  // "1" or "1.2"
  fieldValue,       // "cyanEX" など
  fieldTokui        // "main" / "sub" / "none"
) {

  // ---------------------------------------------
  // STEP 1：サブスキル補正
  // ---------------------------------------------
  let subskillBonus = 0;

  const subskillLevelMap = {
    10: "subskill10",
    25: "subskill25",
    50: "subskill50",
    70: "subskill70",
    80: "subskill80"
  };

  const holdSubskillEffectMap = {
    holdS: 6,
    holdM: 12,
    holdL: 18
  };

  Object.entries(subskillLevelMap).forEach(([reqLv, id]) => {
    if (level >= Number(reqLv)) {
      const val = subskillValues[id];
      if (holdSubskillEffectMap[val]) {
        subskillBonus += holdSubskillEffectMap[val];
      }
    }
  });

  // ---------------------------------------------
  // STEP 2：おやすみリボン補正
  // ---------------------------------------------
  let ribbonBonus = 0;

  if (ribbonValue === "200") ribbonBonus = 1;
  if (ribbonValue === "500") ribbonBonus = 3;
  if (ribbonValue === "1000") ribbonBonus = 6;
  if (ribbonValue === "2000") ribbonBonus = 8;

  // ---------------------------------------------
  // STEP 3：シアンEXメイン適正補正（+5）
  // ---------------------------------------------
  let exBonusMaxHold = 0;

  if (fieldValue === "cyanEX" && fieldTokui === "main") {
    exBonusMaxHold = 5;
  }

  // ---------------------------------------------
  // STEP 4：キャンプチケット補正
  // ---------------------------------------------
  const campFactor = Number(campTicketValue || 1);

  // ---------------------------------------------
  // STEP 5：最終計算（切り上げ）
  // ---------------------------------------------
  const raw =
    (baseMaxHold + subskillBonus + ribbonBonus + exBonusMaxHold) *
    campFactor;

  return Math.ceil(raw);
}

// ==================================================
// ▼ 1回のおてつだいで増える期待個数（食材入力欄対応版）
// ==================================================

function calcHelpGainExpected(
  mon,
  level,
  ingredientRate,
  subskillValues,
  fieldTokui,
  exBonus
) {
  // --- きのみ個数 ---
  let berryCount = 1;
  const tokui = mon.tokui;

  if (tokui === "きのみ" || tokui === "オール") berryCount = 2;

  const hasBerryS = Object.values(subskillValues).includes("berryS");
  if (hasBerryS) berryCount += 1;

  // --- 食材枠の抽出 ---
  const ingLv1  = document.getElementById("ingredientLv1")?.value || "";
  const ingLv30 = document.getElementById("ingredientLv30")?.value || "";
  const ingLv60 = document.getElementById("ingredientLv60")?.value || "";

  const selectedIngredients = [
    { lv: 1,  name: ingLv1 },
    { lv: 30, name: ingLv30 },
    { lv: 60, name: ingLv60 }
  ];

  const unlockedCounts = [];

  selectedIngredients.forEach(sel => {
    if (!sel.name) return;
    if (level < sel.lv) return;

    const ingData = mon.ingredients.find(ing => ing.name === sel.name);
    if (!ingData) return;

    const count = ingData.countsByLevel[sel.lv];
    if (count !== undefined) unlockedCounts.push(count);
  });

  let ingredientExpected = 0;

  if (unlockedCounts.length > 0) {
    const sum = unlockedCounts.reduce((a, b) => a + b, 0);
    ingredientExpected = sum / unlockedCounts.length;
  }

  // --- EXボーナス（食材） ---
  let exBonusAdd = 0;

  const isEXGoodIngredient =
    exBonus === "exingredient" &&
    (fieldTokui === "main" || fieldTokui === "sub");

  if (isEXGoodIngredient) {
    if (tokui === "食材" || tokui === "オール") {
      exBonusAdd = 1.5; // +1 確定 + 50%で +1
    } else {
      exBonusAdd = 1;   // +1 確定
    }
  }

  ingredientExpected += exBonusAdd;

  // --- 合成期待個数 ---
  const expectedGain =
    (1 - ingredientRate) * berryCount +
    ingredientRate * ingredientExpected;

  return {
    expectedGain,
    berryCount,
    ingredientExpected
  };
}

// ==================================================
// ▼ 最大所持数に到達するまでの期待おてつだい回数
// ==================================================

function calcReachMaxHoldCount(
  maxHold,            // 最大所持数（補正後）
  helpGainExpected    // 1回のおてつだい期待個数
) {
  if (helpGainExpected <= 0) return Infinity; // 安全策
  return maxHold / helpGainExpected;
}

// ==================================================
// ▼ 1日を通じたおてつだい回数（有効 / いついく）
// ==================================================

function calcHelpCounts(
  actualHelpTime,      // 実おてつだい時間（秒）
  reachMaxHoldCount    // 最大所持数到達回数（期待値）
) {

  // ---------------------------------------------
  // 基本時間（秒）
  // ---------------------------------------------
  const DAY_SEC   = 15.5 * 3600;   // 日中
  const SLEEP_SEC = 8.5  * 3600;   // 睡眠
  const TOTAL_SEC = 24   * 3600;   // 1日

  // ---------------------------------------------
  // 日中・睡眠中・総おてつだい回数
  // ---------------------------------------------
  const dayCount   = DAY_SEC   / actualHelpTime;
  const sleepCount = SLEEP_SEC / actualHelpTime;
  const totalCount = TOTAL_SEC / actualHelpTime;

  // ---------------------------------------------
  // 分岐：睡眠中に最大所持数に達するか？
  // ---------------------------------------------
  let effectiveCount = 0;
  let ineffectiveCount = 0;

  if (sleepCount >= reachMaxHoldCount) {
    effectiveCount = dayCount + reachMaxHoldCount;
    ineffectiveCount = totalCount - effectiveCount;

  } else {
    effectiveCount = totalCount;
    ineffectiveCount = 0;
  }

  return {
    dayCount,
    sleepCount,
    totalCount,
    effectiveCount,
    ineffectiveCount
  };
}

// ==================================================
// ▼ 総きのみエナジー（新仕様）
// ==================================================

function calcTotalBerryEnergy(
  berryEnergyOne,     // きのみエナジー単価
  berryCount,         // 1回のおてつだいで拾うきのみ個数
  ingredientRate,     // 食材確率（0〜1）
  effectiveCount,     // 有効おてつだい回数
  ineffectiveCount    // いついく回数
) {

  // 有効おてつだいでの「きのみ回数」
  const berryCountEffective = effectiveCount * (1 - ingredientRate);

  // いついく回数は必ずきのみ
  const berryCountIneffective = ineffectiveCount;

  // 合計きのみ回数
  const totalBerryCount = berryCountEffective + berryCountIneffective;

  // 総きのみエナジー
  return berryEnergyOne * berryCount * totalBerryCount;
}

// ==================================================
// ▼ 各食材の総個数・総エナジー（合算版）
// ==================================================

function calcIngredientTotals(
  mon,
  level,
  ingredientCount,
  ingredientData,
  fieldTokui,
  exBonus
) {

  const ingLv1  = document.getElementById("ingredientLv1")?.value || "";
  const ingLv30 = document.getElementById("ingredientLv30")?.value || "";
  const ingLv60 = document.getElementById("ingredientLv60")?.value || "";

  const selectedIngredients = [
    { lv: 1,  name: ingLv1 },
    { lv: 30, name: ingLv30 },
    { lv: 60, name: ingLv60 }
  ];

  const unlocked = [];

  selectedIngredients.forEach(sel => {
    if (!sel.name) return;
    if (level < sel.lv) return;

    const ingData = mon.ingredients.find(ing => ing.name === sel.name);
    if (!ingData) return;

    const count = ingData.countsByLevel[sel.lv];
    if (count !== undefined) {
      unlocked.push({
        name: sel.name,
        count: count
      });
    }
  });

  const unlockedCount = unlocked.length;
  if (unlockedCount === 0) return [];

  // --- EXボーナス（食材） ---
  let exBonusAdd = 0;

  const isEXGoodIngredient =
    exBonus === "exingredient" &&
    (fieldTokui === "main" || fieldTokui === "sub");

  const tokui = mon.tokui;

  if (isEXGoodIngredient) {
    if (tokui === "食材" || tokui === "オール") {
      exBonusAdd = 1.5;
    } else {
      exBonusAdd = 1;
    }
  }

  // --- 食材名ごとに合算 ---
  const merged = {};

  unlocked.forEach(slot => {
    const ratio = 1 / unlockedCount;
    const countPerHit = slot.count + exBonusAdd;

    const totalCount = ingredientCount * ratio * countPerHit;

    if (!merged[slot.name]) {
      merged[slot.name] = {
        name: slot.name,
        totalCount: 0,
        totalEnergy: 0,
        image: ingredientData[slot.name]?.image || "",
        energyOne: ingredientData[slot.name]?.energy || 0
      };
    }

    merged[slot.name].totalCount += totalCount;
    merged[slot.name].totalEnergy += totalCount * merged[slot.name].energyOne;
  });

  return Object.values(merged);
}

// ==================================================
// ▼ スキル発動期待回数
// ==================================================

function calcSkillCount(
  mon,
  skillRate,
  dayCount,
  reachMaxHoldCount
) {

  // ---------------------------------------------
  // STEP 1：ストック上限（とくい）
  // ---------------------------------------------
  let stockLimit = 1;

  if (mon.tokui === "スキル" || mon.tokui === "オール") {
    stockLimit = 2;
  }

  // ---------------------------------------------
  // STEP 2：日中（常にタップ可能 → 期待値どおり）
  // ---------------------------------------------
  const daySkillCount = dayCount * skillRate;

  // ---------------------------------------------
  // STEP 3：睡眠中（ストック上限でカット）
  // ---------------------------------------------
  const sleepRaw = reachMaxHoldCount * skillRate;
  const sleepSkillCount = Math.min(sleepRaw, stockLimit);

  // ---------------------------------------------
  // STEP 4：最終合計
  // ---------------------------------------------
  const totalSkillCount = daySkillCount + sleepSkillCount;

  return {
    daySkillCount,
    sleepSkillCount,
    totalSkillCount
  };
}
