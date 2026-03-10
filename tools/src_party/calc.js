// ==================================================
// 純計算ロジック集（DOM 依存なし）
// ==================================================

/**
 * おてつだい時間計算
 *
 * @param {number} baseTime - 基礎おてつだい時間
 * @param {number} level - レベル
 * @param {object} nature - natureData[natureKey] のオブジェクト
 * @param {number} subSpeed - サブスキル速度アップ合計（0.07, 0.14 など）
 * @param {number} teamBonus - おてつだいボーナス個数（1つにつき5%短縮）
 * @param {string} exType - "main" | "sub" | "none"
 * @param {number} campTicket - いいキャンプ補正（1 or 1.2）
 * @param {string} exMode - "0" | "1"
 */
function calcHelpTime(baseTime, level, nature, subSpeed, teamBonus, exType, campTicket, exMode) {
  const natureSpeed = nature.speed;

  // ▼ サブスキル + チームボーナス（上限35%）
  let totalSpeedUp = subSpeed + teamBonus * 0.05;
  if (totalSpeedUp > 0.35) totalSpeedUp = 0.35;

  const speedFactor = 1 - totalSpeedUp;
  const levelFactor = 1 - (level - 1) * 0.002;

  // ▼ 基本の標準おてつだい時間
  let standardHelpTime = Math.floor(
    baseTime * levelFactor * natureSpeed * speedFactor
  );

  // ▼ EX適正補正
  if (exMode === "1") {
    if (exType === "main") {
      standardHelpTime = Math.floor(standardHelpTime * 0.909);
    } else if (exType === "none") {
      standardHelpTime = Math.floor(standardHelpTime * 1.15);
    }
  }

  // ▼ キャンプ補正 + 性格げんき補正
  const helpTime = standardHelpTime * (1 / campTicket) * nature.genki;

  return { standardHelpTime, helpTime };
}

/**
 * きのみエナジー（1個あたり）
 *
 * @param {number} level
 * @param {number} baseBerryEnergy
 * @param {number} fieldBerryBonus - フィールド適正（2倍 or 1倍）
 * @param {number} fieldBonus - フィールドボーナス（％）
 * @param {string} exBonus - "きのみ" | "スキル" | "食材" | ""
 * @param {string} exType - "main" | "sub" | "none"
 */
function calcBerryEnergySingle(level, baseBerryEnergy, fieldBerryBonus, fieldBonus, exBonus, exType) {
  // ▼ 基礎エナジー成長（A/B の大きい方）
  const A = baseBerryEnergy + (level - 1);
  const B = baseBerryEnergy * Math.pow(1.025, (level - 1));
  let energy = Math.max(A, B);

  // ▼ フィールド適正
  energy *= fieldBerryBonus;

  // ▼ EXボーナス（きのみ）
  if (exBonus === "きのみ" && (exType === "main" || exType === "sub")) {
    energy *= 1.2;
  }

  // ▼ フィールドボーナス（％）
  energy *= (1 + fieldBonus / 100);

  return Math.round(energy);
}

/**
 * きのみ個数
 *
 * @param {number} baseBerryCount
 * @param {string} tokuiType - "きのみ" | "食材" | "スキル" | "オール"
 * @param {number} berryCountSkill - サブスキル加算
 */
function calcBerryCount(baseBerryCount, tokuiType, berryCountSkill) {
  const isTokuiBerry = (tokuiType === "きのみ" || tokuiType === "オール");
  return baseBerryCount + (isTokuiBerry ? 1 : 0) + berryCountSkill;
}

/**
 * スキル発動（1時間あたり）
 *
 * @param {number} baseSkillRate
 * @param {object} nature
 * @param {number} subSkill - サブスキル確率アップ合計
 * @param {string} exBonus
 * @param {string} exType
 * @param {number} actionsPerHour
 */
function calcSkillPerHour(baseSkillRate, nature, subSkill, exBonus, exType, actionsPerHour) {
  const natureFactor = nature.skill;
  const subSkillFactor = 1 + subSkill;

  const exFactor =
    (exBonus === "スキル" && (exType === "main" || exType === "sub"))
      ? 1.25
      : 1.0;

  const finalSkillRate =
    baseSkillRate *
    natureFactor *
    subSkillFactor *
    exFactor;

  return actionsPerHour * finalSkillRate;
}

/**
 * EX適正の判定
 */
function getExType(pokeType, type1, type2, type3, exMode) {
  if (exMode !== "1") return "none";

  if (pokeType === type1) return "main";
  if (pokeType === type2 || pokeType === type3) return "sub";

  return "none";
}

/**
 * フィールド適正（きのみ2倍 or 1倍）
 */
function getFieldBerryBonus(pokeType, type1, type2, type3) {
  return (pokeType === type1 || pokeType === type2 || pokeType === type3)
    ? 2.0
    : 1.0;
}

/**
 * サブスキル解放（Lv10/25/50/75/100）
 */
function getUnlockedSubSkills(level, subSkillArray) {
  const unlocked = [];

  if (level >= 10) unlocked.push(subSkillArray[0]);
  if (level >= 25) unlocked.push(subSkillArray[1]);
  if (level >= 50) unlocked.push(subSkillArray[2]);
  if (level >= 75) unlocked.push(subSkillArray[3]);
  if (level >= 100) unlocked.push(subSkillArray[4]);

  return unlocked.filter(s => s && s !== "");
}
