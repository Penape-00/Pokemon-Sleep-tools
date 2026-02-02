// ==================================================
// ▼ おてつだい時間（単体ツールと完全一致）
// ==================================================
function calcHelpTime(baseTime, level, nature, subSpeed, teamBonus, exType, campTicket) {

  campTicket = parseFloat(campTicket);  // ★ 追加

  const natureSpeed = nature.speed;

  let totalSpeedUp = subSpeed + teamBonus * 0.05;
  if (totalSpeedUp > 0.35) totalSpeedUp = 0.35;
  const speedFactor = 1 - totalSpeedUp;

  const levelFactor = 1 - (level - 1) * 0.002;

  let standardHelpTime = Math.floor(
    baseTime * levelFactor * natureSpeed * speedFactor
  );

  let exFactor = 1.0;
  if (exType === "main") exFactor = 0.909;
  if (exType === "sub")  exFactor = 1.0;
  if (exType === "none") exFactor = 1.15;

  standardHelpTime = Math.floor(standardHelpTime * exFactor);

  const campFactor = 1 / campTicket;  // ← これで確実に数値計算になる
  const genkiFactor = nature.genki;

  const helpTime = standardHelpTime * campFactor * genkiFactor;

  return { standardHelpTime, helpTime };
}

// ==================================================
// ▼ きのみエナジー（単体ツールと完全一致）
// ==================================================
function calcBerryEnergySingle(level, baseBerryEnergy, fieldBerryBonus, fieldBonus, exBonus, exType) {

  // 基礎エナジー成長
  const A = baseBerryEnergy + (level - 1);
  const B = baseBerryEnergy * Math.pow(1.025, (level - 1));
  let energy = Math.max(A, B);

  // フィールド適正
  energy *= fieldBerryBonus;

  // EXボーナス（きのみ）
  if (exBonus === "exberry" && (exType === "main" || exType === "sub")) {
    energy *= 1.2;
  }

  // フィールドボーナス（%）
  energy *= (1 + fieldBonus / 100);

  return Math.round(energy); // ← 1個単価
}

// ==================================================
// ▼ きのみ個数
// ==================================================

function calcBerryCount(baseBerryCount, tokuiType, berryCountSkill) {
  const isTokuiBerry = (tokuiType === "きのみ" || tokuiType === "オール");
  return baseBerryCount + (isTokuiBerry ? 1 : 0) + berryCountSkill;
}

// ==================================================
// ▼ スキル発動（1時間あたり）
// ==================================================
function calcSkillPerHour(baseSkillRate, nature, subSkill, exBonus, exType, actionsPerHour) {

  const natureFactor = nature.skill;
  const subSkillFactor = 1 + subSkill;
  const exFactor = (exBonus === "exskill" && (exType === "main" || exType === "sub"))
    ? 1.25 : 1.0;

  const finalSkillRate =
    baseSkillRate *
    natureFactor *
    subSkillFactor *
    exFactor;

  return actionsPerHour * finalSkillRate;
}

// ==================================================
// ▼ メイン：比較ツール用の1時間効率
// ==================================================
function calcBerryEfficiency(entry, level, natureKey,
  subSpeed, subIng, subSkill,
  berryCountSkill, teamBonus,
  fieldBonus, fieldBerryBonus,
  campTicket, exType, exBonus) {

  const [name, type, tokui, baseTimeStr, berryEnergyBaseStr, ingRateStr, skillRateStr] =
    entry.split("|");

  const nature = natureModifiers[natureKey];

  // おてつだい時間（標準 + 実際）
  const { standardHelpTime, helpTime } = calcHelpTime(
    parseFloat(baseTimeStr),
    level,
    nature,
    parseFloat(subSpeed),
    parseInt(teamBonus),
    exType,
    parseFloat(campTicket)
  );

  // 1時間あたりの行動回数
  const actionsPerHour = 3600 / helpTime;

  // きのみエナジー（1個単価）
  const berryEnergySingle = calcBerryEnergySingle(
    level,
    parseFloat(berryEnergyBaseStr),
    parseFloat(fieldBerryBonus),
    parseFloat(fieldBonus),
    exBonus,
    exType
  );

  // きのみ個数
  const berryCount = calcBerryCount(
    1,          // baseBerryCount は常に1
    tokui,
    parseInt(berryCountSkill)
  );

  // 食材確率
  const ingredientRate =
    parseFloat(ingRateStr) *
    nature.ingredient *
    (1 + parseFloat(subIng));

  // エナジー効率（通常）
  const normalEfficiency =
    berryEnergySingle * berryCount * actionsPerHour * (1 - ingredientRate);

  // エナジー効率（きのみのみ）
  const berryOnlyEfficiency =
    berryEnergySingle * berryCount * actionsPerHour;

  // スキル発動（1時間）
  const skillCount = calcSkillPerHour(
    parseFloat(skillRateStr),
    nature,
    parseFloat(subSkill),
    exBonus,
    exType,
    actionsPerHour
  );

  return {
    name,
    standardHelpTime,
    berryEnergy: berryEnergySingle,
    ingredientRate: (ingredientRate * 100).toFixed(1),
    normalEfficiency: (normalEfficiency * 24).toFixed(1),
    berryOnlyEfficiency: (berryOnlyEfficiency * 24).toFixed(1),
    ingredientCount: (actionsPerHour * ingredientRate * 24).toFixed(2),
    skillCount: (skillCount * 24).toFixed(2)
  };
}