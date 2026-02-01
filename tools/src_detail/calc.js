// ==================================================
//  ▼ おてつだい時間の計算
// ==================================================

/**
 * おてつだい時間（1回）を計算する
 */
function calcHelpTime(baseTime, level, nature, subSpeed, teamBonus, exType, campTicket) {

  // STEP 1: 性格補正（おてスピ）
  const natureSpeed = nature.speed;

  // STEP 2: おてスピ補正（サブスキ + おてボ → 最大35%）
  let totalSpeedUp = subSpeed + teamBonus * 0.05;
  if (totalSpeedUp > 0.35) totalSpeedUp = 0.35;
  const speedFactor = 1 - totalSpeedUp;

  // STEP 3: Lv による短縮
  const levelFactor = 1 - (level - 1) * 0.002;

  // STEP 4: 標準おてつだい時間（切り捨て）
  const standardHelpTime = Math.floor(
    baseTime * levelFactor * natureSpeed * speedFactor
  );

  // STEP 5: EX適正補正
  let exFactor = 1.0;
  if (exType === "main") exFactor = 0.909;
  if (exType === "sub")  exFactor = 1.0;
  if (exType === "none") exFactor = 1.15;

  // STEP 6: キャンプ補正
  const campFactor = 1 / campTicket;

  // STEP 7: 性格ごとの元気補正
  const genkiFactor = nature.genki;

  // STEP 8: 実際のおてつだい時間
  const helpTime = standardHelpTime * exFactor * campFactor * genkiFactor;

  return { standardHelpTime, helpTime };
}

/**
 * EX適正が有効かどうか
 */
function isEXActive(exType) {
  return exType === "main" || exType === "sub";
}

// ==================================================
//  ▼ きのみエナジー計算
// ==================================================

/**
 * 1回のおてつだいで得られるきのみエナジーを計算
 */
function calcBerryEnergy(level, baseBerryEnergy, baseBerryCount, fieldBerryBonus, berryCountSkill, fieldBonus, exBonus, tokuiType, exType) {

  // STEP 1: 基礎エナジー成長（線形 or 指数 → 大きい方）
  const A = baseBerryEnergy + (level - 1);
  const B = baseBerryEnergy * Math.pow(1.025, (level - 1));
  let energy = Math.max(A, B);

  // STEP 2: フィールド適正補正
  energy *= fieldBerryBonus;

  // STEP 3: EXボーナス
  if (exBonus === "exberry" && isEXActive(exType)) {
    energy *= 1.2;
  }

  // STEP 4: フィールドボーナス
  energy *= (1 + fieldBonus / 100);

  // STEP 5: 四捨五入
  const roundedEnergy = Math.round(energy);

  // STEP 6: きのみ数（得意タイプ + スキル）
  const isTokuiBerry = (tokuiType === "きのみ" || tokuiType === "オール");
  const berryCount = baseBerryCount + (isTokuiBerry ? 1 : 0) + berryCountSkill;

  // STEP 7: 最終エナジー
  return roundedEnergy * berryCount;
}

// ==================================================
//  ▼ 食材計算
// ==================================================

/**
 * 1日あたりの食材獲得期待値を計算
 */
function calcIngredientPerDay(pokemonName, level, baseIngredientRate, nature, subIng, exBonus, tokuiType, exType, ingredientLv1, ingredientLv30, ingredientLv60, actionsPerDay) {

  // STEP 1: 有効スロットの列挙
  const slots = [];
  if (ingredientLv1) slots.push({ ingredient: ingredientLv1, unlockLevel: 1 });
  if (level >= 30 && ingredientLv30) slots.push({ ingredient: ingredientLv30, unlockLevel: 30 });
  if (level >= 60 && ingredientLv60) slots.push({ ingredient: ingredientLv60, unlockLevel: 60 });

  const slotCount = slots.length;
  if (slotCount === 0) return {};

  // STEP 2: 食材確率
  const ingredientRate =
    baseIngredientRate *
    nature.ingredient *
    (1 + subIng);

  // STEP 3: EX食材ボーナス
  const isExIngredient = (exBonus === "exingredient" && isEXActive(exType));
  const isTokuiIngredient = (tokuiType === "食材" || tokuiType === "オール");
  let exExtraPerProc = 0;
  if (isExIngredient) {
    exExtraPerProc = 1 + (isTokuiIngredient ? 0.5 : 0);
  }

  // STEP 4: 基礎個数集計
  const ingredientBaseSum = {};
  const ingredientSlotCount = {};

  const pokemonCounts = ingredientCounts[pokemonName] || {};

  slots.forEach(slot => {
    const ingName = slot.ingredient;
    const ingData = pokemonCounts[ingName];
    if (!ingData) return;

    const baseCount = ingData[slot.unlockLevel] || 0;

    if (!ingredientBaseSum[ingName]) {
      ingredientBaseSum[ingName] = 0;
      ingredientSlotCount[ingName] = 0;
    }

    ingredientBaseSum[ingName] += baseCount;
    ingredientSlotCount[ingName] += 1;
  });

  // STEP 5: 1日獲得期待値
  const result = {};

  Object.keys(ingredientBaseSum).forEach(ingName => {
    const sumBaseCount = ingredientBaseSum[ingName];
    const slotNum = ingredientSlotCount[ingName];

    const expectedPerHelp =
      ingredientRate *
      (1 / slotCount) *
      (sumBaseCount + slotNum * exExtraPerProc);

    result[ingName] = expectedPerHelp * actionsPerDay;
  });

  return result;
}

// ==================================================
//  ▼ スキル発動計算
// ==================================================

/**
 * 1日のスキル発動回数を計算
 */
function calcSkillPerDay(baseSkillRate, nature, subSkill, exBonus, exType, actionsPerDay) {

  // STEP 1: 性格補正
  const natureFactor = nature.skill;

  // STEP 2: サブスキル補正
  const subSkillFactor = 1 + subSkill;

  // STEP 3: EX補正
  const exFactor = (exBonus === "exskill" && isEXActive(exType)) ? 1.25 : 1.0;

  // STEP 4: 最終発動率
  const finalSkillRate =
      baseSkillRate *
      natureFactor *
      subSkillFactor *
      exFactor;

  return actionsPerDay * finalSkillRate;
}