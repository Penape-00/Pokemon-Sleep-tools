// ==================================================
// 性格補正データ
// ==================================================

const natureModifiers = {
  hardy:   { speed: 1.0,   ingredient: 1.0,   skill: 1.0,   genki: 0.492 },
  lonely:  { speed: 0.9,   ingredient: 1.0,   skill: 1.0,   genki: 0.505 },
  brave:   { speed: 0.9,   ingredient: 1.0,   skill: 1.0,   genki: 0.492 },
  adamant: { speed: 0.9,   ingredient: 0.9,   skill: 1.0,   genki: 0.492 },
  naughty: { speed: 0.9,   ingredient: 1.0,   skill: 0.9,   genki: 0.492 },
  bold:    { speed: 1.075, ingredient: 1.0,   skill: 1.0,   genki: 0.474 },
  docile:  { speed: 1.0,   ingredient: 1.0,   skill: 1.0,   genki: 0.492 },
  relaxed: { speed: 1.0,   ingredient: 1.0,   skill: 1.0,   genki: 0.474 },
  impish:  { speed: 1.0,   ingredient: 0.9,   skill: 1.0,   genki: 0.474 },
  lax:     { speed: 1.0,   ingredient: 1.0,   skill: 0.9,   genki: 0.474 },
  timid:   { speed: 1.075, ingredient: 1.0,   skill: 1.0,   genki: 0.492 },
  hasty:   { speed: 1.0,   ingredient: 1.0,   skill: 1.0,   genki: 0.505 },
  serious: { speed: 1.0,   ingredient: 1.0,   skill: 1.0,   genki: 0.492 },
  jolly:   { speed: 1.0,   ingredient: 0.9,   skill: 1.0,   genki: 0.492 },
  naive:   { speed: 1.0,   ingredient: 1.0,   skill: 0.9,   genki: 0.492 },
  modest:  { speed: 1.075, ingredient: 1.1,   skill: 1.0,   genki: 0.492 },
  mild:    { speed: 1.0,   ingredient: 1.1,   skill: 1.0,   genki: 0.505 },
  quiet:   { speed: 1.0,   ingredient: 1.1,   skill: 1.0,   genki: 0.492 },
  bashful: { speed: 1.0,   ingredient: 1.0,   skill: 1.0,   genki: 0.492 },
  rash:    { speed: 1.0,   ingredient: 1.1,   skill: 0.9,   genki: 0.492 },
  calm:    { speed: 1.075, ingredient: 1.0,   skill: 1.1,   genki: 0.492 },
  gentle:  { speed: 1.0,   ingredient: 1.0,   skill: 1.1,   genki: 0.505 },
  sassy:   { speed: 1.0,   ingredient: 1.0,   skill: 1.1,   genki: 0.492 },
  careful: { speed: 1.0,   ingredient: 0.9,   skill: 1.1,   genki: 0.492 },
  quirky:  { speed: 1.0,   ingredient: 1.0,   skill: 1.0,   genki: 0.492 }
};

// ==================================================
// 性格ラベル（UI 表示用）
// ==================================================

const natureLabels = {
  hardy: "がんばりや（無補正）",
  lonely: "さみしがり（おてスピ up / げんき down）",
  brave: "ゆうかん（おてスピ up / Ｅｘｐ down）",
  adamant: "いじっぱり（おてスピ up / 食材 down）",
  naughty: "やんちゃ（おてスピ up / スキル down）",
  bold: "ずぶとい（げんき up / おてスピ down）",
  docile: "すなお（無補正）",
  relaxed: "のんき（げんき up / Ｅｘｐ down）",
  impish: "わんぱく（げんき up / 食材 down）",
  lax: "のうてんき（げんき up / スキル down）",
  timid: "おくびょう（Ｅｘｐ up / おてスピ down）",
  hasty: "せっかち（Ｅｘｐ up / げんき down）",
  serious: "まじめ（無補正）",
  jolly: "ようき（Ｅｘｐ up / 食材 down）",
  naive: "むじゃき（Ｅｘｐ up / スキル down）",
  modest: "ひかえめ（食材 up / おてスピ down）",
  mild: "おっとり（食材 up / げんき down）",
  quiet: "れいせい（食材 up / Ｅｘｐ down）",
  bashful: "てれや（無補正）",
  rash: "うっかりや（食材 up / スキル down）",
  calm: "おだやか（スキル up / おてスピ down）",
  gentle: "おとなしい（スキル up / げんき down）",
  sassy: "なまいき（スキル up / Ｅｘｐ down）",
  careful: "しんちょう（スキル up / 食材 down）",
  quirky: "きまぐれ（無補正）"
};