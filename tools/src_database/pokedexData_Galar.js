const pokedexData_Galar = [

  {
    dexNo: 845,
    formId: "normal",
    name: "ウッウ",

    imageCard: getImagePath("card", 845, "normal"),
    imageDetail: getImagePath("panel", 845, "normal"),

    type: ["ひこう"],
    tokui: "食材",

    sleepType: "ぐっすり",

    mainSkill: "料理チャンスS",

    ingredients: [
      {
        name: "ピュアなオイル",
        countsByLevel: { 1: 2, 30: 5, 60: 7 }
      },
      {
        name: "ほっこりポテト",
        countsByLevel: { 30: 4, 60: 7 }
      },
      {
        name: "とくせんエッグ",
        countsByLevel: { 60: 8 }
      }
    ],

    baseHelpTime: 2700,
    ingRate: 0.165,
    skillRate: 0.039,
    maxHold: 19,

    berryIndex: 1.48,
    ingIndex: 2.91,
    skillIndicator: 1.248,

    evolutionChain: [
      {
        dexNo: 845,
        formId: "normal",
        evolveTo: null
      }
    ],

    fields: [
      {
        name: "ワカクサ本島",
        stars: {
          1: [{ type: "マスター", rank: 1 }],
          2: [{ type: "マスター", rank: 5 }],
          3: [{ type: "マスター", rank: 11 }],
          4: [{ type: "マスター", rank: 6 }]
        }
      },
      {
        name: "シアンの砂浜",
        stars: {
          1: [{ type: "ハイパー", rank: 3 }],
          2: [{ type: "マスター", rank: 2 }],
          3: [{ type: "マスター", rank: 8 }],
          4: [{ type: "マスター", rank: 3 }]
        }
      },
      {
        name: "ウノハナ雪原",
        stars: {
          1: [{ type: "ハイパー", rank: 1 }],
          2: [{ type: "ハイパー", rank: 5 }],
          3: [{ type: "マスター", rank: 6 }],
          4: [{ type: "マスター", rank: 1 }]
        }
      },
      {
        name: "ワカクサ本島EX",
        stars: {
          1: [{ type: "スーパー", rank: 2 }],
          2: [{ type: "ハイパー", rank: 1 }],
          3: [{ type: "マスター", rank: 1 }],
          4: [{ type: "マスター", rank: 3 }]
        }
      }
    ]
  },

  {
    dexNo: 848,
    formId: "normal",
    name: "エレズン",

    imageCard: getImagePath("card", 848, "normal"),
    imageDetail: getImagePath("panel", 848, "normal"),

    type: ["どく"],
    tokui: "スキル",

    sleepType: "ぐっすり",

    mainSkill: "食材ゲットS",

    ingredients: [
      {
        name: "モーモーミルク",
        countsByLevel: { 1: 1, 30: 2, 60: 4 }
      },
      {
        name: "とくせんリンゴ",
        countsByLevel: { 30: 2, 60: 4 }
      },
      {
        name: "ふといながねぎ",
        countsByLevel: { 60: 2 }
      }
    ],

    baseHelpTime: 5600,
    ingRate: 0.209,
    skillRate: 0.048,
    maxHold: 6,

    berryIndex: 0.90,
    ingIndex: 0.71,
    skillIndicator: 0.741,

    evolutionChain: [
      {
        dexNo: 848,
        formId: "normal",
        evolveTo: [
          { targetDexNo: 849,
            targetFormId: "high",
            conditions: [
              { type: "nature", value: "性格：あがる系" },
              { type: "level", value: 23 },
              { type: "candy", value: 80 } ]
          },
          { targetDexNo: 849,
            targetFormId: "low",
            conditions: [
              { type: "nature", value: "性格：さがる系" },
              { type: "level", value: 23 },
              { type: "candy", value: 80 } ]
          }
        ]
      }
    ],

    fields: [
      {
        name: "ワカクサ本島",
        stars: {
          1: [{ type: "スーパー", rank: 1 }],
          2: [{ type: "スーパー", rank: 5 }],
          3: null,
          4: [{ type: "ハイパー", rank: 1 }]
        }
      },
      {
        name: "ゴールド旧発電所",
        stars: {
          1: [{ type: "ノーマル", rank: 1 }],
          2: [{ type: "ノーマル", rank: 3 }],
          3: [{ type: "スーパー", rank: 4 }],
          4: [{ type: "ノーマル", rank: 4 }]
        }
      },
      {
        name: "アンバー渓谷",
        stars: {
          1: [{ type: "ノーマル", rank: 1 }],
          2: [{ type: "ノーマル", rank: 2 }],
          3: [{ type: "スーパー", rank: 3 }],
          4: [{ type: "スーパー", rank: 1 }]
        }
      },
      {
        name: "ワカクサ本島EX",
        stars: {
          1: [{ type: "ノーマル", rank: 1 }],
          2: [{ type: "スーパー", rank: 1 }],
          3: [{ type: "ハイパー", rank: 2 }],
          4: [{ type: "ハイパー", rank: 3 }]
        }
      }
    ]
  },

  {
    dexNo: 849,
    formId: "high",
    name: "ストリンダー",

    imageCard: getImagePath("card", 849, "high"),
    imageDetail: getImagePath("panel", 849, "high"),

    type: ["どく"],
    tokui: "スキル",

    sleepType: "うとうと",

    mainSkill: "プラス(食材ゲットS)",

    ingredients: [
      {
        name: "モーモーミルク",
        countsByLevel: { 1: 1, 30: 2, 60: 4 }
      },
      {
        name: "とくせんリンゴ",
        countsByLevel: { 30: 2, 60: 4 }
      },
      {
        name: "ふといながねぎ",
        countsByLevel: { 60: 2 }
      }
    ],

    baseHelpTime: 3100,
    ingRate: 0.239,
    skillRate: 0.064,
    maxHold: 23,

    berryIndex: 1.57,
    ingIndex: 1.46,
    skillIndicator: 1.784,

    evolutionChain: [
      {
        dexNo: 848,
        formId: "normal",
        evolveTo: [
          { targetDexNo: 849,
            targetFormId: "high",
            conditions: [
              { type: "nature", value: "性格：あがる系" },
              { type: "level", value: 23 },
              { type: "candy", value: 80 } ]
          },
          { targetDexNo: 849,
            targetFormId: "low",
            conditions: [
              { type: "nature", value: "性格：さがる系" },
              { type: "level", value: 23 },
              { type: "candy", value: 80 } ]
          }
        ]
      }
    ],

    fields: [
      {
        name: "ワカクサ本島",
        stars: {
          1: [{ type: "マスター", rank: 7 }],
          2: [{ type: "マスター", rank: 11 }],
          3: null,
          4: [{ type: "マスター", rank: 12 }]
        }
      },
      {
        name: "ゴールド旧発電所",
        stars: {
          1: [{ type: "ハイパー", rank: 5 }],
          2: [{ type: "マスター", rank: 4 }],
          3: [{ type: "マスター", rank: 9 }],
          4: [{ type: "マスター", rank: 5 }]
        }
      },
      {
        name: "アンバー渓谷",
        stars: {
          1: [{ type: "ハイパー", rank: 4 }],
          2: [{ type: "マスター", rank: 3 }],
          3: [{ type: "マスター", rank: 9 }],
          4: [{ type: "マスター", rank: 4 }]
        }
      },
      {
        name: "ワカクサ本島EX",
        stars: {
          1: [{ type: "ハイパー", rank: 1 }],
          2: [{ type: "マスター", rank: 1 }],
          3: [{ type: "マスター", rank: 9 }],
          4: [{ type: "マスター", rank: 11 }]
        }
      }
    ]
  },

  {
    dexNo: 849,
    formId: "low",
    name: "ストリンダー",

    imageCard: getImagePath("card", 849, "low"),
    imageDetail: getImagePath("panel", 849, "low"),

    type: ["どく"],
    tokui: "スキル",

    sleepType: "うとうと",

    mainSkill: "マイナス(料理パワーアップS)",

    ingredients: [
      {
        name: "モーモーミルク",
        countsByLevel: { 1: 1, 30: 2, 60: 4 }
      },
      {
        name: "とくせんリンゴ",
        countsByLevel: { 30: 2, 60: 4 }
      },
      {
        name: "ふといながねぎ",
        countsByLevel: { 60: 2 }
      }
    ],

    baseHelpTime: 3100,
    ingRate: 0.239,
    skillRate: 0.064,
    maxHold: 23,

    berryIndex: 1.57,
    ingIndex: 1.46,
    skillIndicator: 1.784,

    evolutionChain: [
      {
        dexNo: 848,
        formId: "normal",
        evolveTo: [
          { targetDexNo: 849,
            targetFormId: "high",
            conditions: [
              { type: "nature", value: "性格：あがる系" },
              { type: "level", value: 23 },
              { type: "candy", value: 80 } ]
          },
          { targetDexNo: 849,
            targetFormId: "low",
            conditions: [
              { type: "nature", value: "性格：さがる系" },
              { type: "level", value: 23 },
              { type: "candy", value: 80 } ]
          }
        ]
      }
    ],

    fields: [
      {
        name: "ワカクサ本島",
        stars: {
          1: [{ type: "マスター", rank: 7 }],
          2: [{ type: "マスター", rank: 11 }],
          3: null,
          4: [{ type: "マスター", rank: 12 }]
        }
      },
      {
        name: "ゴールド旧発電所",
        stars: {
          1: [{ type: "ハイパー", rank: 5 }],
          2: [{ type: "マスター", rank: 4 }],
          3: [{ type: "マスター", rank: 9 }],
          4: [{ type: "マスター", rank: 5 }]
        }
      },
      {
        name: "アンバー渓谷",
        stars: {
          1: [{ type: "ハイパー", rank: 4 }],
          2: [{ type: "マスター", rank: 3 }],
          3: [{ type: "マスター", rank: 9 }],
          4: [{ type: "マスター", rank: 4 }]
        }
      },
      {
        name: "ワカクサ本島EX",
        stars: {
          1: [{ type: "ハイパー", rank: 1 }],
          2: [{ type: "マスター", rank: 1 }],
          3: [{ type: "マスター", rank: 9 }],
          4: [{ type: "マスター", rank: 11 }]
        }
      }
    ]
  }

];