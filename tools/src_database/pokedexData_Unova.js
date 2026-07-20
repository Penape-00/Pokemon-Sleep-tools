const pokedexData_Unova = [

  {
    dexNo: 517,
    formId: "normal",
    name: "ムンナ",

    imageCard: getImagePath("card", 517, "normal"),
    imageDetail: getImagePath("panel", 517, "normal"),

    type: ["エスパー"],
    tokui: "きのみ",

    sleepType: "すやすや",

    mainSkill: "ゆめのかけらゲットS(ランダム)",

    ingredients: [
      {
        name: "モーモーミルク",
        countsByLevel: { 1: 1, 30: 2, 60: 4 }
      },
      {
        name: "あまいミツ",
        countsByLevel: { 30: 2, 60: 3 }
      },
      {
        name: "めざましコーヒー",
        countsByLevel: { 60: 2 }
      }
    ],

    baseHelpTime: 5700,
    ingRate: 0.197,
    skillRate: 0.043,
    maxHold: 12,

    berryIndex: 1.10,
    ingIndex: 0.56,
    skillIndicator: 1.32,

    evolutionChain: [
      {
        dexNo: 517,
        formId: "normal",
        evolveTo: [
          {
            targetDexNo: 518,
            targetFormId: "normal",
            conditions: [
              { type: "item", value: "つきのいし" },
              { type: "candy", value: 80 }
            ]
          }
        ]
      },
      {
        dexNo: 518,
        formId: "normal",
        evolveTo: null
      }
    ],

    fields: [
      {
        name: "ワカクサ本島",
        stars: {
          1: [{ type: "スーパー", rank: 1 }],
          2: [{ type: "スーパー", rank: 5 }],
          3: null
        }
      },
      {
        name: "ラピスラズリ湖畔",
        stars: {
          1: [{ type: "ノーマル", rank: 1 }],
          2: [{ type: "ノーマル", rank: 4 }],
          3: [{ type: "スーパー", rank: 5 }]
        }
      },
     {
        name: "ワカクサ本島EX",
        stars: {
          1: [{ type: "ノーマル", rank: 1 }],
          2: [{ type: "スーパー", rank: 1 }],
          3: [{ type: "スーパー", rank: 4 }]
        }
      }
    ]
  },

  {
    dexNo: 518,
    formId: "normal",
    name: "ムシャーナ",

    imageCard: getImagePath("card", 518, "normal"),
    imageDetail: getImagePath("panel", 518, "normal"),

    type: ["エスパー"],
    tokui: "きのみ",

    sleepType: "すやすや",

    mainSkill: "ゆめのかけらゲットS(ランダム)",

    ingredients: [
      {
        name: "モーモーミルク",
        countsByLevel: { 1: 1, 30: 2, 60: 4 }
      },
      {
        name: "あまいミツ",
        countsByLevel: { 30: 2, 60: 3 }
      },
      {
        name: "めざましコーヒー",
        countsByLevel: { 60: 2 }
      }
    ],

    baseHelpTime: 2800,
    ingRate: 0.188,
    skillRate: 0.041,
    maxHold: 29,

    berryIndex: 2.26,
    ingIndex: 1.11,
    skillIndicator: 2.65,

    evolutionChain: [
      {
        dexNo: 517,
        formId: "normal",
        evolveTo: [
          {
            targetDexNo: 518,
            targetFormId: "normal",
            conditions: [
              { type: "item", value: "つきのいし" },
              { type: "candy", value: 80 }
            ]
          }
        ]
      },
      {
        dexNo: 518,
        formId: "normal",
        evolveTo: null
      }
    ],

    fields: [
      {
        name: "ワカクサ本島",
        stars: {
          1: [{ type: "マスター", rank: 7 }],
          2: [{ type: "マスター", rank: 11 }],
          3: null
        }
      },
      {
        name: "ラピスラズリ湖畔",
        stars: {
          1: [{ type: "マスター", rank: 1 }],
          2: [{ type: "マスター", rank: 5 }],
          3: [{ type: "マスター", rank: 11 }]
        }
      },
     {
        name: "ワカクサ本島EX",
        stars: {
          1: [{ type: "スーパー", rank: 5 }],
          2: [{ type: "ハイパー", rank: 5 }],
          3: [{ type: "マスター", rank: 8 }]
        }
      }
    ]
  },

  {
    dexNo: 557,
    formId: "normal",
    name: "イシズマイ",

    imageCard: getImagePath("card", 557, "normal"),
    imageDetail: getImagePath("panel", 557, "normal"),

    type: ["むし"],
    tokui: "スキル",

    sleepType: "うとうと",

    mainSkill: "食材セレクトS",

    ingredients: [
      {
        name: "つやつやアボカド",
        countsByLevel: { 1: 1, 30: 2, 60: 4 }
      },
      {
        name: "ほっこりポテト",
        countsByLevel: { 30: 3, 60: 5 }
      },
      {
        name: "ピュアなオイル",
        countsByLevel: { 60: 5 }
      }
    ],

    baseHelpTime: 4300,
    ingRate: 0.175,
    skillRate: 0.054,
    maxHold: 8,

    berryIndex: 0.92,
    ingIndex: 1.08,
    skillIndicator: 2.10,

    evolutionChain: [
      {
        dexNo: 557,
        formId: "normal",
        evolveTo: [
          {
            targetDexNo: 558,
            targetFormId: "normal",
            conditions: [
              { type: "level", value: 26 },
              { type: "candy", value: 40 }
            ]
          }
        ]
      },
      {
        dexNo: 558,
        formId: "normal",
        evolveTo: null
      }
    ],

    fields: [
      {
        name: "アンバー渓谷",
        stars: {
          1: [{ type: "ノーマル", rank: 1 }],
          2: [{ type: "ノーマル", rank: 3 }],
          3: [{ type: "スーパー", rank: 4 }],
          4: [{ type: "スーパー", rank: 1 }]
        }
      }
    ]
  },

  {
    dexNo: 558,
    formId: "normal",
    name: "イワパレス",

    imageCard: getImagePath("card", 558, "normal"),
    imageDetail: getImagePath("panel", 558, "normal"),

    type: ["むし"],
    tokui: "スキル",

    sleepType: "うとうと",

    mainSkill: "食材セレクトS",

    ingredients: [
      {
        name: "つやつやアボカド",
        countsByLevel: { 1: 1, 30: 2, 60: 4 }
      },
      {
        name: "ほっこりポテト",
        countsByLevel: { 30: 3, 60: 5 }
      },
      {
        name: "ピュアなオイル",
        countsByLevel: { 60: 5 }
      }
    ],

    baseHelpTime: 3200,
    ingRate: 0.239,
    skillRate: 0.064,
    maxHold: 22,

    berryIndex: 1.14,
    ingIndex: 2.64,
    skillIndicator: 3.80,

    evolutionChain: [
      {
        dexNo: 557,
        formId: "normal",
        evolveTo: [
          {
            targetDexNo: 558,
            targetFormId: "normal",
            conditions: [
              { type: "level", value: 26 },
              { type: "candy", value: 40 }
            ]
          }
        ]
      },
      {
        dexNo: 558,
        formId: "normal",
        evolveTo: null
      }
    ],

    fields: [
      {
        name: "アンバー渓谷",
        stars: {
          1: [{ type: "ハイパー", rank: 3 }],
          2: [{ type: "マスター", rank: 2 }],
          3: [{ type: "マスター", rank: 8 }],
          4: [{ type: "マスター", rank: 3 }]
        }
      }
    ]
  },

  {
    dexNo: 627,
    formId: "normal",
    name: "ワシボン",

    imageCard: getImagePath("card", 627, "normal"),
    imageDetail: getImagePath("panel", 627, "normal"),

    type: ["ひこう"],
    tokui: "スキル",

    sleepType: "ぐっすり",

    mainSkill: "きのみバースト",

    ingredients: [
      {
        name: "マメミート",
        countsByLevel: { 1: 1, 30: 2, 60: 4 }
      },
      {
        name: "ワカクサコーン",
        countsByLevel: { 30: 2, 60: 3 }
      },
      {
        name: "めざましコーヒー",
        countsByLevel: { 60: 2 }
      }
    ],

    baseHelpTime: 3800,
    ingRate: 0.125,
    skillRate: 0.031,
    maxHold: 10,

    berryIndex: 1.11,
    ingIndex: 0.50,
    skillIndicator: 1.42,

    evolutionChain: [
      {
        dexNo: 627,
        formId: "normal",
        evolveTo: [
          {
            targetDexNo: 628,
            targetFormId: "normal",
            conditions: [
              { type: "level", value: 41 },
              { type: "candy", value: 40 }
            ]
          }
        ]
      },
      {
        dexNo: 628,
        formId: "normal",
        evolveTo: null
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
        name: "シアンの砂浜",
        stars: {
          1: [{ type: "ノーマル", rank: 3 }],
          2: [{ type: "スーパー", rank: 2 }],
          3: [{ type: "ハイパー", rank: 3 }],
          4: [{ type: "ハイパー", rank: 1 }]
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
          2: [{ type: "スーパー", rank: 2 }],
          3: [{ type: "ハイパー", rank: 2 }],
          4: [{ type: "ハイパー", rank: 4 }]
        }
      }
    ]
  },

  {
    dexNo: 628,
    formId: "normal",
    name: "ウォーグル",

    imageCard: getImagePath("card", 628, "normal"),
    imageDetail: getImagePath("panel", 628, "normal"),

    type: ["ひこう"],
    tokui: "スキル",

    sleepType: "ぐっすり",

    mainSkill: "きのみバースト",

    ingredients: [
      {
        name: "マメミート",
        countsByLevel: { 1: 1, 30: 2, 60: 4 }
      },
      {
        name: "ワカクサコーン",
        countsByLevel: { 30: 2, 60: 3 }
      },
      {
        name: "めざましコーヒー",
        countsByLevel: { 60: 2 }
      }
    ],

    baseHelpTime: 2400,
    ingRate: 0.121,
    skillRate: 0.035,
    maxHold: 23,

    berryIndex: 1.76,
    ingIndex: 0.82,
    skillIndicator: 2.77,

    evolutionChain: [
      {
        dexNo: 627,
        formId: "normal",
        evolveTo: [
          {
            targetDexNo: 628,
            targetFormId: "normal",
            conditions: [
              { type: "level", value: 41 },
              { type: "candy", value: 40 }
            ]
          }
        ]
      },
      {
        dexNo: 628,
        formId: "normal",
        evolveTo: null
      }
    ],

    fields: [
      {
        name: "ワカクサ本島",
        stars: {
          1: [{ type: "ハイパー", rank: 4 }],
          2: [{ type: "マスター", rank: 3 }],
          3: [{ type: "マスター", rank: 9 }],
          4: [{ type: "マスター", rank: 4 }]
        }
      },
      {
        name: "アンバー渓谷",
        stars: {
          1: [{ type: "スーパー", rank: 1 }],
          2: [{ type: "スーパー", rank: 5 }],
          3: [{ type: "マスター", rank: 1 }],
          4: [{ type: "ハイパー", rank: 1 }]
        }
      },
      {
        name: "ワカクサ本島EX",
        stars: {
          1: [{ type: "スーパー", rank: 3 }],
          2: [{ type: "ハイパー", rank: 2 }],
          3: [{ type: "マスター", rank: 3 }],
          4: [{ type: "マスター", rank: 7 }]
        }
      }
    ]
  }

];
