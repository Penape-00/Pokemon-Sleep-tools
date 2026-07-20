const pokedexData_Hoenn = [

  {
    dexNo: 252,
    formId: "normal",
    name: "キモリ",

    imageCard: getImagePath("card", 252, "normal"),
    imageDetail: getImagePath("panel", 252, "normal"),

    type: ["くさ"],
    tokui: "スキル",

    sleepType: "うとうと",

    mainSkill: "きのみバースト",

    ingredients: [
      {
        name: "とくせんエッグ",
        countsByLevel: { 1: 1, 30: 2, 60: 4 }
      },
      {
        name: "めざましコーヒー",
        countsByLevel: { 30: 2, 60: 3 }
      },
      {
        name: "ふといながねぎ",
        countsByLevel: { 60: 2 }
      }
    ],

    baseHelpTime: 4500,
    ingRate: 0.172,
    skillRate: 0.035,
    maxHold: 8,

    berryIndex: 1.10,
    ingIndex: 0.75,
    skillIndicator: 1.33,

    evolutionChain: [
      {
        dexNo: 252,
        formId: "normal",
        evolveTo: [
          {
            targetDexNo: 253,
            targetFormId: "normal",
            conditions: [
              { type: "level", value: 12 },
              { type: "candy", value: 40 }
            ]
          }
        ]
      },
      {
        dexNo: 253,
        formId: "normal",
        evolveTo: [
          {
            targetDexNo: 254,
            targetFormId: "normal",
            conditions: [
              { type: "level", value: 27 },
              { type: "candy", value: 80 }
            ]
          }
        ]
      },
      {
        dexNo: 254,
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
          4: [{ type: "スーパー", rank: 3 }]
        }
      },
      {
        name: "ラピスラズリ湖畔",
        stars: {
          1: [{ type: "ノーマル", rank: 1 }],
          2: [{ type: "ノーマル", rank: 4 }],
          3: [{ type: "スーパー", rank: 5 }],
          4: [{ type: "ノーマル", rank: 5 }]
        }
      },
      {
        name: "ワカクサ本島EX",
        stars: {
          1: [{ type: "ノーマル", rank: 1 }],
          2: [{ type: "スーパー", rank: 3 }],
          3: [{ type: "ハイパー", rank: 2 }],
          4: [{ type: "ハイパー", rank: 3 }]
        }
      }
    ]
  },

  {
    dexNo: 253,
    formId: "normal",
    name: "ジュプトル",

    imageCard: getImagePath("card", 253, "normal"),
    imageDetail: getImagePath("panel", 253, "normal"),

    type: ["くさ"],
    tokui: "スキル",

    sleepType: "うとうと",

    mainSkill: "きのみバースト",

    ingredients: [
      {
        name: "とくせんエッグ",
        countsByLevel: { 1: 1, 30: 2, 60: 4 }
      },
      {
        name: "めざましコーヒー",
        countsByLevel: { 30: 2, 60: 3 }
      },
      {
        name: "ふといながねぎ",
        countsByLevel: { 60: 2 }
      }
    ],

    baseHelpTime: 3300,
    ingRate: 0.150,
    skillRate: 0.035,
    maxHold: 16,

    berryIndex: 1.55,
    ingIndex: 0.90,
    skillIndicator: 1.98,

    evolutionChain: [
      {
        dexNo: 252,
        formId: "normal",
        evolveTo: [
          {
            targetDexNo: 253,
            targetFormId: "normal",
            conditions: [
              { type: "level", value: 12 },
              { type: "candy", value: 40 }
            ]
          }
        ]
      },
      {
        dexNo: 253,
        formId: "normal",
        evolveTo: [
          {
            targetDexNo: 254,
            targetFormId: "normal",
            conditions: [
              { type: "level", value: 27 },
              { type: "candy", value: 80 }
            ]
          }
        ]
      },
      {
        dexNo: 254,
        formId: "normal",
        evolveTo: null
      }
    ],

    fields: [
      {
        name: "ワカクサ本島",
        stars: {
          1: [{ type: "ハイパー", rank: 2 }],
          2: [{ type: "マスター", rank: 1 }],
          3: null,
          4: [{ type: "マスター", rank: 2 }]
        }
      },
      {
        name: "シアンの砂浜",
        stars: {
          1: [{ type: "スーパー", rank: 4 }],
          2: [{ type: "ハイパー", rank: 3 }],
          3: [{ type: "マスター", rank: 1 }],
          4: [{ type: "ハイパー", rank: 4 }]
        }
      },
      {
        name: "ラピスラズリ湖畔",
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
          1: [{ type: "ノーマル", rank: 5 }],
          2: [{ type: "スーパー", rank: 5 }],
          3: [{ type: "ハイパー", rank: 5 }],
          4: [{ type: "マスター", rank: 1 }]
        }
      }
    ]
  },

  {
    dexNo: 254,
    formId: "normal",
    name: "ジュカイン",

    imageCard: getImagePath("card", 254, "normal"),
    imageDetail: getImagePath("panel", 254, "normal"),

    type: ["くさ"],
    tokui: "スキル",

    sleepType: "うとうと",

    mainSkill: "きのみバースト",

    ingredients: [
      {
        name: "とくせんエッグ",
        countsByLevel: { 1: 1, 30: 2, 60: 4 }
      },
      {
        name: "めざましコーヒー",
        countsByLevel: { 30: 2, 60: 3 }
      },
      {
        name: "ふといながねぎ",
        countsByLevel: { 60: 2 }
      }
    ],

    baseHelpTime: 2300,
    ingRate: 0.107,
    skillRate: 0.030,
    maxHold: 27,

    berryIndex: 2.33,
    ingIndex: 0.82,
    skillIndicator: 2.57,

    evolutionChain: [
      {
        dexNo: 252,
        formId: "normal",
        evolveTo: [
          {
            targetDexNo: 253,
            targetFormId: "normal",
            conditions: [
              { type: "level", value: 12 },
              { type: "candy", value: 40 }
            ]
          }
        ]
      },
      {
        dexNo: 253,
        formId: "normal",
        evolveTo: [
          {
            targetDexNo: 254,
            targetFormId: "normal",
            conditions: [
              { type: "level", value: 27 },
              { type: "candy", value: 80 }
            ]
          }
        ]
      },
      {
        dexNo: 254,
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
          3: null,
          4: [{ type: "マスター", rank: 12 }]
        }
      },
      {
        name: "シアンの砂浜",
        stars: {
          1: [{ type: "マスター", rank: 4 }],
          2: [{ type: "マスター", rank: 8 }],
          3: [{ type: "マスター", rank: 14 }],
          4: [{ type: "マスター", rank: 9 }]
        }
      },
      {
        name: "ラピスラズリ湖畔",
        stars: {
          1: [{ type: "マスター", rank: 1 }],
          2: [{ type: "マスター", rank: 5 }],
          3: [{ type: "マスター", rank: 11 }],
          4: [{ type: "マスター", rank: 6 }]
        }
      },
      {
        name: "ワカクサ本島EX",
        stars: {
          1: [{ type: "ハイパー", rank: 2 }],
          2: [{ type: "マスター", rank: 1 }],
          3: [{ type: "マスター", rank: 10 }],
          4: [{ type: "マスター", rank: 11 }]
        }
      }
    ]
  },

  {
    dexNo: 255,
    formId: "normal",
    name: "アチャモ",

    imageCard: getImagePath("card", 255, "normal"),
    imageDetail: getImagePath("panel", 255, "normal"),

    type: ["ほのお"],
    tokui: "きのみ",

    sleepType: "すやすや",

    mainSkill: "げんきチャージS",

    ingredients: [
      {
        name: "あじわいキノコ",
        countsByLevel: { 1: 1, 30: 2, 60: 4 }
      },
      {
        name: "ワカクサ大豆",
        countsByLevel: { 30: 4, 60: 6 }
      },
      {
        name: "ピュアなオイル",
        countsByLevel: { 60: 5 }
      }
    ],

    baseHelpTime: 4300,
    ingRate: 0.160,
    skillRate: 0.044,
    maxHold: 12,

    berryIndex: 1.58,
    ingIndex: 0.95,
    skillIndicator: 1.68,

    evolutionChain: [
      {
        dexNo: 255,
        formId: "normal",
        evolveTo: [
          {
            targetDexNo: 256,
            targetFormId: "normal",
            conditions: [
              { type: "level", value: 12 },
              { type: "candy", value: 40 }
            ]
          }
        ]
      },
      {
        dexNo: 256,
        formId: "normal",
        evolveTo: [
          {
            targetDexNo: 257,
            targetFormId: "normal",
            conditions: [
              { type: "level", value: 27 },
              { type: "candy", value: 80 }
            ]
          }
        ]
      },
      {
        dexNo: 257,
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
        name: "ラピスラズリ湖畔",
        stars: {
          1: [{ type: "ノーマル", rank: 1 }],
          2: [{ type: "ノーマル", rank: 4 }],
          3: [{ type: "スーパー", rank: 5 }],
          4: [{ type: "ノーマル", rank: 5 }]
        }
      },
      {
        name: "ワカクサ本島EX",
        stars: {
          1: [{ type: "ノーマル", rank: 1 }],
          2: [{ type: "スーパー", rank: 3 }],
          3: [{ type: "ハイパー", rank: 2 }],
          4: [{ type: "ハイパー", rank: 3 }]
        }
      }
    ]
  },

  {
    dexNo: 256,
    formId: "normal",
    name: "ワカシャモ",

    imageCard: getImagePath("card", 256, "normal"),
    imageDetail: getImagePath("panel", 256, "normal"),

    type: ["かくとう"],
    tokui: "きのみ",

    sleepType: "ぐっすり",

    mainSkill: "げんきチャージS",

    ingredients: [
      {
        name: "あじわいキノコ",
        countsByLevel: { 1: 1, 30: 2, 60: 4 }
      },
      {
        name: "ワカクサ大豆",
        countsByLevel: { 30: 4, 60: 6 }
      },
      {
        name: "ピュアなオイル",
        countsByLevel: { 60: 5 }
      }
    ],

    baseHelpTime: 3400,
    ingRate: 0.170,
    skillRate: 0.052,
    maxHold: 21,

    berryIndex: 1.98,
    ingIndex: 1.39,
    skillIndicator: 2.65,

    evolutionChain: [
      {
        dexNo: 255,
        formId: "normal",
        evolveTo: [
          {
            targetDexNo: 256,
            targetFormId: "normal",
            conditions: [
              { type: "level", value: 12 },
              { type: "candy", value: 40 }
            ]
          }
        ]
      },
      {
        dexNo: 256,
        formId: "normal",
        evolveTo: [
          {
            targetDexNo: 257,
            targetFormId: "normal",
            conditions: [
              { type: "level", value: 27 },
              { type: "candy", value: 80 }
            ]
          }
        ]
      },
      {
        dexNo: 257,
        formId: "normal",
        evolveTo: null
      }
    ],

    fields: [
      {
        name: "ワカクサ本島",
        stars: {
          1: [{ type: "ハイパー", rank: 2 }],
          2: [{ type: "マスター", rank: 1 }],
          3: null,
          4: [{ type: "マスター", rank: 2 }]
        }
      },
      {
        name: "ラピスラズリ湖畔",
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
          1: [{ type: "ノーマル", rank: 5 }],
          2: [{ type: "スーパー", rank: 5 }],
          3: [{ type: "ハイパー", rank: 5 }],
          4: [{ type: "マスター", rank: 1 }]
        }
      }
    ]
  },

  {
    dexNo: 257,
    formId: "normal",
    name: "バシャーモ",

    imageCard: getImagePath("card", 257, "normal"),
    imageDetail: getImagePath("panel", 257, "normal"),

    type: ["かくとう"],
    tokui: "きのみ",

    sleepType: "ぐっすり",

    mainSkill: "げんきチャージS",

    ingredients: [
      {
        name: "あじわいキノコ",
        countsByLevel: { 1: 1, 30: 2, 60: 4 }
      },
      {
        name: "ワカクサ大豆",
        countsByLevel: { 30: 4, 60: 6 }
      },
      {
        name: "ピュアなオイル",
        countsByLevel: { 60: 5 }
      }
    ],

    baseHelpTime: 2600,
    ingRate: 0.153,
    skillRate: 0.049,
    maxHold: 32,

    berryIndex: 2.64,
    ingIndex: 1.61,
    skillIndicator: 3.37,

    evolutionChain: [
      {
        dexNo: 255,
        formId: "normal",
        evolveTo: [
          {
            targetDexNo: 256,
            targetFormId: "normal",
            conditions: [
              { type: "level", value: 12 },
              { type: "candy", value: 40 }
            ]
          }
        ]
      },
      {
        dexNo: 256,
        formId: "normal",
        evolveTo: [
          {
            targetDexNo: 257,
            targetFormId: "normal",
            conditions: [
              { type: "level", value: 27 },
              { type: "candy", value: 80 }
            ]
          }
        ]
      },
      {
        dexNo: 257,
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
          3: null,
          4: [{ type: "マスター", rank: 12 }]
        }
      },
      {
        name: "ラピスラズリ湖畔",
        stars: {
          1: [{ type: "マスター", rank: 1 }],
          2: [{ type: "マスター", rank: 5 }],
          3: [{ type: "マスター", rank: 11 }],
          4: [{ type: "マスター", rank: 6 }]
        }
      },
      {
        name: "ワカクサ本島EX",
        stars: {
          1: [{ type: "ハイパー", rank: 2 }],
          2: [{ type: "マスター", rank: 1 }],
          3: [{ type: "マスター", rank: 10 }],
          4: [{ type: "マスター", rank: 11 }]
        }
      }
    ]
  },

  {
    dexNo: 258,
    formId: "normal",
    name: "ミズゴロウ",

    imageCard: getImagePath("card", 258, "normal"),
    imageDetail: getImagePath("panel", 258, "normal"),

    type: ["みず"],
    tokui: "きのみ",

    sleepType: "ぐっすり",

    mainSkill: "料理チャンスS",

    ingredients: [
      {
        name: "ワカクサコーン",
        countsByLevel: { 1: 1, 30: 2, 60: 4 }
      },
      {
        name: "モーモーミルク",
        countsByLevel: { 30: 3, 60: 5 }
      },
      {
        name: "あじわいキノコ",
        countsByLevel: { 60: 3 }
      }
    ],

    baseHelpTime: 4700,
    ingRate: 0.192,
    skillRate: 0.024,
    maxHold: 11,

    berryIndex: 1.60,
    ingIndex: 0.93,
    skillIndicator: 0.84,

    evolutionChain: [
      {
        dexNo: 258,
        formId: "normal",
        evolveTo: [
          {
            targetDexNo: 259,
            targetFormId: "normal",
            conditions: [
              { type: "level", value: 12 },
              { type: "candy", value: 40 }
            ]
          }
        ]
      },
      {
        dexNo: 259,
        formId: "normal",
        evolveTo: [
          {
            targetDexNo: 260,
            targetFormId: "normal",
            conditions: [
              { type: "level", value: 27 },
              { type: "candy", value: 80 }
            ]
          }
        ]
      },
      {
        dexNo: 260,
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
        name: "トープ洞窟",
        stars: {
          1: [{ type: "ノーマル", rank: 2 }],
          2: [{ type: "スーパー", rank: 1 }],
          3: [{ type: "ハイパー", rank: 2 }],
          4: [{ type: "スーパー", rank: 2 }]
        }
      },
      {
        name: "ワカクサ本島EX",
        stars: {
          1: [{ type: "ノーマル", rank: 1 }],
          2: [{ type: "スーパー", rank: 3 }],
          3: [{ type: "ハイパー", rank: 2 }],
          4: [{ type: "ハイパー", rank: 3 }]
        }
      }
    ]
  },

  {
    dexNo: 259,
    formId: "normal",
    name: "ヌマクロー",

    imageCard: getImagePath("card", 259, "normal"),
    imageDetail: getImagePath("panel", 259, "normal"),

    type: ["じめん"],
    tokui: "きのみ",

    sleepType: "ぐっすり",

    mainSkill: "料理チャンスS",

    ingredients: [
      {
        name: "ワカクサコーン",
        countsByLevel: { 1: 1, 30: 2, 60: 4 }
      },
      {
        name: "モーモーミルク",
        countsByLevel: { 30: 3, 60: 5 }
      },
      {
        name: "あじわいキノコ",
        countsByLevel: { 60: 3 }
      }
    ],

    baseHelpTime: 3500,
    ingRate: 0.168,
    skillRate: 0.028,
    maxHold: 21,

    berryIndex: 2.07,
    ingIndex: 1.09,
    skillIndicator: 1.41,

    evolutionChain: [
      {
        dexNo: 258,
        formId: "normal",
        evolveTo: [
          {
            targetDexNo: 259,
            targetFormId: "normal",
            conditions: [
              { type: "level", value: 12 },
              { type: "candy", value: 40 }
            ]
          }
        ]
      },
      {
        dexNo: 259,
        formId: "normal",
        evolveTo: [
          {
            targetDexNo: 260,
            targetFormId: "normal",
            conditions: [
              { type: "level", value: 27 },
              { type: "candy", value: 80 }
            ]
          }
        ]
      },
      {
        dexNo: 260,
        formId: "normal",
        evolveTo: null
      }
    ],

    fields: [
      {
        name: "ワカクサ本島",
        stars: {
          1: [{ type: "ハイパー", rank: 2 }],
          2: [{ type: "マスター", rank: 2 }],
          3: null,
          4: [{ type: "マスター", rank: 2 }]
        }
      },
      {
        name: "トープ洞窟",
        stars: {
          1: [{ type: "スーパー", rank: 3 }],
          2: [{ type: "ハイパー", rank: 2 }],
          3: [{ type: "マスター", rank: 3 }],
          4: [{ type: "ハイパー", rank: 3 }]
        }
      },
      {
        name: "ワカクサ本島EX",
        stars: {
          1: [{ type: "ノーマル", rank: 5 }],
          2: [{ type: "スーパー", rank: 5 }],
          3: [{ type: "ハイパー", rank: 5 }],
          4: [{ type: "マスター", rank: 1 }]
        }
      }
    ]
  },

  {
    dexNo: 260,
    formId: "normal",
    name: "ラグラージ",

    imageCard: getImagePath("card", 260, "normal"),
    imageDetail: getImagePath("panel", 260, "normal"),

    type: ["じめん"],
    tokui: "きのみ",

    sleepType: "ぐっすり",

    mainSkill: "料理チャンスS",

    ingredients: [
      {
        name: "ワカクサコーン",
        countsByLevel: { 1: 1, 30: 2, 60: 4 }
      },
      {
        name: "モーモーミルク",
        countsByLevel: { 30: 3, 60: 5 }
      },
      {
        name: "あじわいキノコ",
        countsByLevel: { 60: 3 }
      }
    ],

    baseHelpTime: 2800,
    ingRate: 0.146,
    skillRate: 0.034,
    maxHold: 30,

    berryIndex: 2.65,
    ingIndex: 1.14,
    skillIndicator: 2.20,

    evolutionChain: [
      {
        dexNo: 258,
        formId: "normal",
        evolveTo: [
          {
            targetDexNo: 259,
            targetFormId: "normal",
            conditions: [
              { type: "level", value: 12 },
              { type: "candy", value: 40 }
            ]
          }
        ]
      },
      {
        dexNo: 259,
        formId: "normal",
        evolveTo: [
          {
            targetDexNo: 260,
            targetFormId: "normal",
            conditions: [
              { type: "level", value: 27 },
              { type: "candy", value: 80 }
            ]
          }
        ]
      },
      {
        dexNo: 260,
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
          3: null,
          4: [{ type: "マスター", rank: 12 }]
        }
      },
      {
        name: "トープ洞窟",
        stars: {
          1: [{ type: "マスター", rank: 3 }],
          2: [{ type: "マスター", rank: 7 }],
          3: [{ type: "マスター", rank: 13 }],
          4: [{ type: "マスター", rank: 8 }]
        }
      },
      {
        name: "ワカクサ本島EX",
        stars: {
          1: [{ type: "ハイパー", rank: 2 }],
          2: [{ type: "マスター", rank: 1 }],
          3: [{ type: "マスター", rank: 10 }],
          4: [{ type: "マスター", rank: 11 }]
        }
      }
    ]
  },

  {
    dexNo: 280,
    formId: "normal",
    name: "ラルトス",

    imageCard: getImagePath("card", 280, "normal"),
    imageDetail: getImagePath("panel", 280, "normal"),

    type: ["エスパー"],
    tokui: "スキル",

    sleepType: "すやすや",

    mainSkill: "げんきオールS",

    ingredients: [
      {
        name: "とくせんリンゴ",
        countsByLevel: { 1: 1, 30: 2, 60: 4 }
      },
      {
        name: "ワカクサコーン",
        countsByLevel: { 30: 1, 60: 2 }
      },
      {
        name: "ふといながねぎ",
        countsByLevel: { 60: 2 }
      }
    ],

    baseHelpTime: 4800,
    ingRate: 0.145,
    skillRate: 0.043,
    maxHold: 9,

    berryIndex: 0.93,
    ingIndex: 0.40,
    skillIndicator: 1.61,

    evolutionChain: [
      {
        dexNo: 280,
        formId: "normal",
        evolveTo: [
          { targetDexNo: 281,
            targetFormId: "normal",
            conditions: [
              { type: "level", value: 15 },
              { type: "candy", value: 40 }
            ]
          }
        ]
      },
      {
        dexNo: 281,
        formId: "normal",
        evolveTo: [
          { targetDexNo: 282,
            targetFormId: "normal",
            conditions: [
              { type: "level", value: 23 },
              { type: "candy", value: 80 } ]
          },
          { targetDexNo: 475,
            targetFormId: "normal",
            conditions: [
              { type: "gender", value: "male" },
              { type: "item", value: "めざめいし" },
              { type: "candy", value: 80 } ]
          }
        ]
      },
      {
        dexNo: 282,
        formId: "normal",
        evolveTo: null
      },
      {
        dexNo: 475,
        formId: "normal",
        evolveTo: null
      }
    ],

    fields: [
      {
        name: "ラピスラズリ湖畔",
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
          2: [{ type: "スーパー", rank: 3 }],
          3: [{ type: "スーパー", rank: 4 }],
          4: [{ type: "スーパー", rank: 5 }]
        }
      }
    ]
  },

  {
    dexNo: 281,
    formId: "normal",
    name: "キルリア",

    imageCard: getImagePath("card", 281, "normal"),
    imageDetail: getImagePath("panel", 281, "normal"),

    type: ["エスパー"],
    tokui: "スキル",

    sleepType: "すやすや",

    mainSkill: "げんきオールS",

    ingredients: [
      {
        name: "とくせんリンゴ",
        countsByLevel: { 1: 1, 30: 2, 60: 4 }
      },
      {
        name: "ワカクサコーン",
        countsByLevel: { 30: 1, 60: 2 }
      },
      {
        name: "ふといながねぎ",
        countsByLevel: { 60: 2 }
      }
    ],

    baseHelpTime: 3500,
    ingRate: 0.146,
    skillRate: 0.043,
    maxHold: 18,

    berryIndex: 1.27,
    ingIndex: 0.61,
    skillIndicator: 2.43,

    evolutionChain: [
      {
        dexNo: 280,
        formId: "normal",
        evolveTo: [
          { targetDexNo: 281,
            targetFormId: "normal",
            conditions: [
              { type: "level", value: 15 },
              { type: "candy", value: 40 }
            ]
          }
        ]
      },
      {
        dexNo: 281,
        formId: "normal",
        evolveTo: [
          { targetDexNo: 282,
            targetFormId: "normal",
            conditions: [
              { type: "level", value: 23 },
              { type: "candy", value: 80 } ]
          },
          { targetDexNo: 475,
            targetFormId: "normal",
            conditions: [
              { type: "gender", value: "male" },
              { type: "item", value: "めざめいし" },
              { type: "candy", value: 80 } ]
          }
        ]
      },
      {
        dexNo: 282,
        formId: "normal",
        evolveTo: null
      },
      {
        dexNo: 475,
        formId: "normal",
        evolveTo: null
      }
    ],

    fields: [
      {
        name: "ラピスラズリ湖畔",
        stars: {
          1: [{ type: "ノーマル", rank: 5 }],
          2: [{ type: "スーパー", rank: 4 }],
          3: [{ type: "ハイパー", rank: 5 }],
          4: [{ type: "ハイパー", rank: 1 }]
        }
      },
      {
        name: "ワカクサ本島EX",
        stars: {
          1: [{ type: "ノーマル", rank: 5 }],
          2: [{ type: "スーパー", rank: 4 }],
          3: [{ type: "ハイパー", rank: 3 }],
          4: [{ type: "ハイパー", rank: 4 }]
        }
      }
    ]
  },

  {
    dexNo: 282,
    formId: "normal",
    name: "サーナイト",

    imageCard: getImagePath("card", 282, "normal"),
    imageDetail: getImagePath("panel", 282, "normal"),

    type: ["エスパー"],
    tokui: "スキル",

    sleepType: "すやすや",

    mainSkill: "げんきオールS",

    ingredients: [
      {
        name: "とくせんリンゴ",
        countsByLevel: { 1: 1, 30: 2, 60: 4 }
      },
      {
        name: "ワカクサコーン",
        countsByLevel: { 30: 1, 60: 2 }
      },
      {
        name: "ふといながねぎ",
        countsByLevel: { 60: 2 }
      }
    ],

    baseHelpTime: 2400,
    ingRate: 0.144,
    skillRate: 0.042,
    maxHold: 28,

    berryIndex: 1.85,
    ingIndex: 0.89,
    skillIndicator: 3.53,

    evolutionChain: [
      {
        dexNo: 280,
        formId: "normal",
        evolveTo: [
          { targetDexNo: 281,
            targetFormId: "normal",
            conditions: [
              { type: "level", value: 15 },
              { type: "candy", value: 40 }
            ]
          }
        ]
      },
      {
        dexNo: 281,
        formId: "normal",
        evolveTo: [
          { targetDexNo: 282,
            targetFormId: "normal",
            conditions: [
              { type: "level", value: 23 },
              { type: "candy", value: 80 } ]
          },
          { targetDexNo: 475,
            targetFormId: "normal",
            conditions: [
              { type: "gender", value: "male" },
              { type: "item", value: "めざめいし" },
              { type: "candy", value: 80 } ]
          }
        ]
      },
      {
        dexNo: 282,
        formId: "normal",
        evolveTo: null
      },
      {
        dexNo: 475,
        formId: "normal",
        evolveTo: null
      }
    ],

    fields: [
      {
        name: "ラピスラズリ湖畔",
        stars: {
          1: [{ type: "マスター", rank: 1 }],
          2: [{ type: "マスター", rank: 5 }],
          3: [{ type: "マスター", rank: 11 }],
          4: [{ type: "マスター", rank: 6 }]
        }
      },
      {
        name: "ワカクサ本島EX",
        stars: {
          1: [{ type: "スーパー", rank: 5 }],
          2: [{ type: "ハイパー", rank: 3 }],
          3: [{ type: "マスター", rank: 3 }],
          4: [{ type: "マスター", rank: 4 }]
        }
      }
    ]
  },

  {
    dexNo: 287,
    formId: "normal",
    name: "ナマケロ",

    imageCard: getImagePath("card", 287, "normal"),
    imageDetail: getImagePath("panel", 287, "normal"),

    type: ["ノーマル"],
    tokui: "きのみ",

    sleepType: "すやすや",

    mainSkill: "食材ゲットS",

    ingredients: [
      {
        name: "あんみんトマト",
        countsByLevel: { 1: 1, 30: 2, 60: 4 }
      },
      {
        name: "あまいミツ",
        countsByLevel: { 30: 2, 60: 4 }
      },
      {
        name: "とくせんリンゴ",
        countsByLevel: { 60: 4 }
      }
    ],

    baseHelpTime: 4900,
    ingRate: 0.216,
    skillRate: 0.019,
    maxHold: 7,

    berryIndex: 1.34,
    ingIndex: 0.77,
    skillIndicator: 0.61,

    evolutionChain: [
      {
        dexNo: 287,
        formId: "normal",
        evolveTo: [
          {
            targetDexNo: 288,
            targetFormId: "normal",
            conditions: [
              { type: "level", value: 14 },
              { type: "candy", value: 40 }
            ]
          }
        ]
      },
      {
        dexNo: 288,
        formId: "normal",
        evolveTo: [
          {
            targetDexNo: 289,
            targetFormId: "normal",
            conditions: [
              { type: "level", value: 27 },
              { type: "candy", value: 80 }
            ]
          }
        ]
      },
      {
        dexNo: 289,
        formId: "normal",
        evolveTo: null
      }
    ],

    fields: [
      {
        name: "ワカクサ本島",
        stars: {
          1: [{ type: "ノーマル", rank: 2 }],
          2: [{ type: "スーパー", rank: 1 }],
          3: null,
          4: [{ type: "ハイパー", rank: 1 }]
        }
      },
      {
        name: "ウノハナ雪原",
        stars: {
          1: [{ type: "ノーマル", rank: 1 }],
          2: [{ type: "ノーマル", rank: 1 }],
          3: [{ type: "スーパー", rank: 2 }],
          4: [{ type: "ハイパー", rank: 1 }]
        }
      },
      {
        name: "ワカクサ本島EX",
        stars: {
          1: [{ type: "ノーマル", rank: 1 }],
          2: [{ type: "ノーマル", rank: 1 }],
          3: [{ type: "スーパー", rank: 2 }],
          4: [{ type: "ハイパー", rank: 1 }]
        }
      }
    ]
  },

  {
    dexNo: 288,
    formId: "normal",
    name: "ヤルキモノ",

    imageCard: getImagePath("card", 288, "normal"),
    imageDetail: getImagePath("panel", 288, "normal"),

    type: ["ノーマル"],
    tokui: "きのみ",

    sleepType: "すやすや",

    mainSkill: "食材ゲットS",

    ingredients: [
      {
        name: "あんみんトマト",
        countsByLevel: { 1: 1, 30: 2, 60: 4 }
      },
      {
        name: "あまいミツ",
        countsByLevel: { 30: 2, 60: 4 }
      },
      {
        name: "とくせんリンゴ",
        countsByLevel: { 60: 4 }
      }
    ],

    baseHelpTime: 3200,
    ingRate: 0.204,
    skillRate: 0.015,
    maxHold: 14,

    berryIndex: 2.09,
    ingIndex: 1.12,
    skillIndicator: 0.76,

    evolutionChain: [
      {
        dexNo: 287,
        formId: "normal",
        evolveTo: [
          {
            targetDexNo: 288,
            targetFormId: "normal",
            conditions: [
              { type: "level", value: 14 },
              { type: "candy", value: 40 }
            ]
          }
        ]
      },
      {
        dexNo: 288,
        formId: "normal",
        evolveTo: [
          {
            targetDexNo: 289,
            targetFormId: "normal",
            conditions: [
              { type: "level", value: 27 },
              { type: "candy", value: 80 }
            ]
          }
        ]
      },
      {
        dexNo: 289,
        formId: "normal",
        evolveTo: null
      }
    ],

    fields: [
      {
        name: "ワカクサ本島",
        stars: {
          1: [{ type: "スーパー", rank: 3 }],
          2: [{ type: "ハイパー", rank: 2 }],
          3: null,
          4: [{ type: "ハイパー", rank: 3 }]
        }
      },
      {
        name: "ウノハナ雪原",
        stars: {
          1: [{ type: "ノーマル", rank: 5 }],
          2: [{ type: "スーパー", rank: 2 }],
          3: [{ type: "ハイパー", rank: 3 }],
          4: [{ type: "ハイパー", rank: 1 }]
        }
      },
      {
        name: "ワカクサ本島EX",
        stars: {
          1: [{ type: "ノーマル", rank: 5 }],
          2: [{ type: "スーパー", rank: 2 }],
          3: [{ type: "スーパー", rank: 5 }],
          4: [{ type: "ハイパー", rank: 1 }]
        }
      }
    ]
  },

  {
    dexNo: 289,
    formId: "normal",
    name: "ケッキング",

    imageCard: getImagePath("card", 289, "normal"),
    imageDetail: getImagePath("panel", 289, "normal"),

    type: ["ノーマル"],
    tokui: "きのみ",

    sleepType: "すやすや",

    mainSkill: "食材ゲットS",

    ingredients: [
      {
        name: "あんみんトマト",
        countsByLevel: { 1: 1, 30: 2, 60: 4 }
      },
      {
        name: "あまいミツ",
        countsByLevel: { 30: 2, 60: 4 }
      },
      {
        name: "とくせんリンゴ",
        countsByLevel: { 60: 4 }
      }
    ],

    baseHelpTime: 3600,
    ingRate: 0.339,
    skillRate: 0.067,
    maxHold: 26,

    berryIndex: 1.54,
    ingIndex: 2.43,
    skillIndicator: 3.44,

    evolutionChain: [
      {
        dexNo: 287,
        formId: "normal",
        evolveTo: [
          {
            targetDexNo: 288,
            targetFormId: "normal",
            conditions: [
              { type: "level", value: 14 },
              { type: "candy", value: 40 }
            ]
          }
        ]
      },
      {
        dexNo: 288,
        formId: "normal",
        evolveTo: [
          {
            targetDexNo: 289,
            targetFormId: "normal",
            conditions: [
              { type: "level", value: 27 },
              { type: "candy", value: 80 }
            ]
          }
        ]
      },
      {
        dexNo: 289,
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
          3: [{ type: "マスター", rank: 17 }],
          4: [{ type: "マスター", rank: 12 }]
        }
      },
      {
        name: "ウノハナ雪原",
        stars: {
          1: [{ type: "マスター", rank: 2 }],
          2: [{ type: "マスター", rank: 6 }],
          3: [{ type: "マスター", rank: 12 }],
          4: [{ type: "マスター", rank: 7 }]
        }
      },
      {
        name: "ワカクサ本島EX",
        stars: {
          1: [{ type: "スーパー", rank: 5 }],
          2: [{ type: "ハイパー", rank: 3 }],
          3: [{ type: "マスター", rank: 3 }],
          4: [{ type: "マスター", rank: 5 }]
        }
      }
    ]
  },

  {
    dexNo: 302,
    formId: "normal",
    name: "ヤミラミ",

    imageCard: getImagePath("card", 302, "normal"),
    imageDetail: getImagePath("panel", 302, "normal"),

    type: ["あく"],
    tokui: "スキル",

    sleepType: "うとうと",

    mainSkill: "ゆめのかけらゲットS(ランダム)",

    ingredients: [
      {
        name: "ピュアなオイル",
        countsByLevel: { 1: 1, 30: 2, 60: 4 }
      },
      {
        name: "あじわいキノコ",
        countsByLevel: { 30: 2, 60: 3 }
      },
      {
        name: "リラックスカカオ",
        countsByLevel: { 60: 3 }
      }
    ],

    baseHelpTime: 3600,
    ingRate: 0.188,
    skillRate: 0.068,
    maxHold: 16,

    berryIndex: 1.40,
    ingIndex: 1.28,
    skillIndicator: 3.56,

    evolutionChain: [
      {
        dexNo: 302,
        formId: "normal",
        evolveTo: null
      }
    ],

    fields: [
      {
        name: "トープ洞窟",
        stars: {
          1: [{ type: "スーパー", rank: 2 }],
          2: [{ type: "ハイパー", rank: 1 }],
          3: [{ type: "マスター", rank: 2 }],
          4: [{ type: "ハイパー", rank: 2 }]
        }
      },
      {
        name: "ワカクサ本島EX",
        stars: {
          1: [{ type: "スーパー", rank: 1 }],
          2: [{ type: "スーパー", rank: 3 }],
          3: [{ type: "ハイパー", rank: 2 }],
          4: [{ type: "ハイパー", rank: 3 }]
        }
      }
    ]
  },

  {
    dexNo: 303,
    formId: "normal",
    name: "クチート",

    imageCard: getImagePath("card", 303, "normal"),
    imageDetail: getImagePath("panel", 303, "normal"),

    type: ["はがね"],
    tokui: "食材",

    sleepType: "ぐっすり",

    mainSkill: "かいりきバサミ(食材セレクトS)",

    ingredients: [
      {
        name: "ピュアなオイル",
        countsByLevel: { 1: 2, 30: 5, 60: 7 }
      },
      {
        name: "ワカクサコーン",
        countsByLevel: { 30: 4, 60: 6 }
      },
      {
        name: "あんみんトマト",
        countsByLevel: { 60: 8 }
      }
    ],

    baseHelpTime: 3200,
    ingRate: 0.204,
    skillRate: 0.038,
    maxHold: 17,

    berryIndex: 1.64,
    ingIndex: 2.77,
    skillIndicator: 2.05,

    evolutionChain: [
      {
        dexNo: 303,
        formId: "normal",
        evolveTo: null
      }
    ],

    fields: [
      {
        name: "ワカクサ本島",
        stars: {
          1: [{ type: "マスター", rank: 3 }],
          2: [{ type: "マスター", rank: 7 }],
          3: null,
          4: [{ type: "マスター", rank: 8 }]
        }
      },
      {
        name: "ゴールド旧発電所",
        stars: {
          1: [{ type: "ハイパー", rank: 1 }],
          2: [{ type: "ハイパー", rank: 5 }],
          3: [{ type: "マスター", rank: 6 }],
          4: [{ type: "マスター", rank: 1 }]
        }
      },
      {
        name: "アンバー渓谷",
        stars: {
          1: [{ type: "スーパー", rank: 5 }],
          2: [{ type: "ハイパー", rank: 4 }],
          3: [{ type: "マスター", rank: 5 }],
          4: [{ type: "ハイパー", rank: 5 }]
        }
      },
      {
        name: "ワカクサ本島EX",
        stars: {
          1: [{ type: "スーパー", rank: 3 }],
          2: [{ type: "ハイパー", rank: 4 }],
          3: [{ type: "マスター", rank: 8 }],
          4: [{ type: "マスター", rank: 10 }]
        }
      }
    ]
  },

  {
    dexNo: 304,
    formId: "normal",
    name: "ココドラ",

    imageCard: getImagePath("card", 304, "normal"),
    imageDetail: getImagePath("panel", 304, "normal"),

    type: ["はがね"],
    tokui: "食材",

    sleepType: "ぐっすり",

    mainSkill: "げんきチャージS",

    ingredients: [
      {
        name: "マメミート",
        countsByLevel: { 1: 2, 30: 5, 60: 7 }
      },
      {
        name: "めざましコーヒー",
        countsByLevel: { 30: 3, 60: 5 }
      },
      {
        name: "ワカクサ大豆",
        countsByLevel: { 60: 7 }
      }
    ],

    baseHelpTime: 5700,
    ingRate: 0.273,
    skillRate: 0.046,
    maxHold: 10,

    berryIndex: 0.84,
    ingIndex: 2.03,
    skillIndicator: 1.39,

    evolutionChain: [
      {
        dexNo: 304,
        formId: "normal",
        evolveTo: [
          {
            targetDexNo: 305,
            targetFormId: "normal",
            conditions: [
              { type: "level", value: 24 },
              { type: "candy", value: 40 }
            ]
          }
        ]
      },
      {
        dexNo: 305,
        formId: "normal",
        evolveTo: [
          {
            targetDexNo: 306,
            targetFormId: "normal",
            conditions: [
              { type: "level", value: 32 },
              { type: "candy", value: 80 }
            ]
          }
        ]
      },
      {
        dexNo: 306,
        formId: "normal",
        evolveTo: null
      }
    ],

    fields: [
      {
        name: "ゴールド旧発電所",
        stars: {
          1: [{ type: "ノーマル", rank: 1 }],
          2: [{ type: "ノーマル", rank: 4 }],
          3: [{ type: "スーパー", rank: 5 }],
          4: [{ type: "ノーマル", rank: 5 }]
        }
      },
      {
        name: "ワカクサ本島EX",
        stars: {
          1: [{ type: "ノーマル", rank: 1 }],
          2: [{ type: "スーパー", rank: 2 }],
          3: [{ type: "ハイパー", rank: 3 }],
          4: [{ type: "ハイパー", rank: 4 }]
        }
      }
    ]
  },

  {
    dexNo: 305,
    formId: "normal",
    name: "コドラ",

    imageCard: getImagePath("card", 305, "normal"),
    imageDetail: getImagePath("panel", 305, "normal"),

    type: ["はがね"],
    tokui: "食材",

    sleepType: "ぐっすり",

    mainSkill: "げんきチャージS",

    ingredients: [
      {
        name: "マメミート",
        countsByLevel: { 1: 2, 30: 5, 60: 7 }
      },
      {
        name: "めざましコーヒー",
        countsByLevel: { 30: 3, 60: 5 }
      },
      {
        name: "ワカクサ大豆",
        countsByLevel: { 60: 7 }
      }
    ],

    baseHelpTime: 4200,
    ingRate: 0.277,
    skillRate: 0.048,
    maxHold: 18,

    berryIndex: 1.14,
    ingIndex: 2.97,
    skillIndicator: 2.08,

    evolutionChain: [
      {
        dexNo: 304,
        formId: "normal",
        evolveTo: [
          {
            targetDexNo: 305,
            targetFormId: "normal",
            conditions: [
              { type: "level", value: 24 },
              { type: "candy", value: 40 }
            ]
          }
        ]
      },
      {
        dexNo: 305,
        formId: "normal",
        evolveTo: [
          {
            targetDexNo: 306,
            targetFormId: "normal",
            conditions: [
              { type: "level", value: 32 },
              { type: "candy", value: 80 }
            ]
          }
        ]
      },
      {
        dexNo: 306,
        formId: "normal",
        evolveTo: null
      }
    ],

    fields: [
      {
        name: "ゴールド旧発電所",
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
          1: [{ type: "スーパー", rank: 1 }],
          2: [{ type: "スーパー", rank: 4 }],
          3: [{ type: "ハイパー", rank: 5 }],
          4: [{ type: "マスター", rank: 2 }]
        }
      }
    ]
  },

  {
    dexNo: 306,
    formId: "normal",
    name: "ボスゴドラ",

    imageCard: getImagePath("card", 306, "normal"),
    imageDetail: getImagePath("panel", 306, "normal"),

    type: ["はがね"],
    tokui: "食材",

    sleepType: "ぐっすり",

    mainSkill: "げんきチャージS",

    ingredients: [
      {
        name: "マメミート",
        countsByLevel: { 1: 2, 30: 5, 60: 7 }
      },
      {
        name: "めざましコーヒー",
        countsByLevel: { 30: 3, 60: 5 }
      },
      {
        name: "ワカクサ大豆",
        countsByLevel: { 60: 7 }
      }
    ],

    baseHelpTime: 3000,
    ingRate: 0.285,
    skillRate: 0.052,
    maxHold: 28,

    berryIndex: 1.57,
    ingIndex: 4.44,
    skillIndicator: 3.22,

    evolutionChain: [
      {
        dexNo: 304,
        formId: "normal",
        evolveTo: [
          {
            targetDexNo: 305,
            targetFormId: "normal",
            conditions: [
              { type: "level", value: 24 },
              { type: "candy", value: 40 }
            ]
          }
        ]
      },
      {
        dexNo: 305,
        formId: "normal",
        evolveTo: [
          {
            targetDexNo: 306,
            targetFormId: "normal",
            conditions: [
              { type: "level", value: 32 },
              { type: "candy", value: 80 }
            ]
          }
        ]
      },
      {
        dexNo: 306,
        formId: "normal",
        evolveTo: null
      }
    ],

    fields: [
      {
        name: "ゴールド旧発電所",
        stars: {
          1: [{ type: "マスター", rank: 3 }],
          2: [{ type: "マスター", rank: 7 }],
          3: [{ type: "マスター", rank: 13 }],
          4: [{ type: "マスター", rank: 8 }]
        }
      },
      {
        name: "ワカクサ本島EX",
        stars: {
          1: [{ type: "ハイパー", rank: 2 }],
          2: [{ type: "マスター", rank: 2 }],
          3: [{ type: "マスター", rank: 10 }],
          4: [{ type: "マスター", rank: 13 }]
        }
      }
    ]
  },

  {
    dexNo: 311,
    formId: "normal",
    name: "プラスル",

    imageCard: getImagePath("card", 311, "normal"),
    imageDetail: getImagePath("panel", 311, "normal"),

    type: ["でんき"],
    tokui: "スキル",

    sleepType: "すやすや",

    mainSkill: "プラス(食材ゲットS)",

    ingredients: [
      {
        name: "めざましコーヒー",
        countsByLevel: { 1: 1, 30: 2, 60: 4 }
      },
      {
        name: "ふといながねぎ",
        countsByLevel: { 30: 2, 60: 3 }
      },
      {
        name: "モーモーミルク",
        countsByLevel: { 60: 6 }
      }
    ],

    baseHelpTime: 2400,
    ingRate: 0.103,
    skillRate: 0.049,
    maxHold: 16,

    berryIndex: 1.87,
    ingIndex: 0.87,
    skillIndicator: 3.55,

    evolutionChain: [
      {
        dexNo: 311,
        formId: "normal",
        evolveTo: null
      }
    ],

    fields: [
      {
        name: "ワカクサ本島",
        stars: {
          1: [{ type: "ハイパー", rank: 5 }],
          2: [{ type: "マスター", rank: 4 }],
          3: null,
          4: [{ type: "マスター", rank: 5 }]
        }
      },
      {
        name: "ゴールド旧発電所",
        stars: {
          1: [{ type: "スーパー", rank: 3 }],
          2: [{ type: "ハイパー", rank: 2 }],
          3: [{ type: "マスター", rank: 3 }],
          4: [{ type: "ハイパー", rank: 3 }]
        }
      },
      {
        name: "アンバー渓谷",
        stars: {
          1: [{ type: "スーパー", rank: 2 }],
          2: [{ type: "ハイパー", rank: 1 }],
          3: [{ type: "マスター", rank: 2 }],
          4: [{ type: "ハイパー", rank: 2 }]
        }
      },
      {
        name: "ワカクサ本島EX",
        stars: {
          1: [{ type: "ハイパー", rank: 1 }],
          2: [{ type: "ハイパー", rank: 4 }],
          3: [{ type: "マスター", rank: 4 }],
          4: [{ type: "マスター", rank: 5 }]
        }
      }
    ]
  },

  {
    dexNo: 312,
    formId: "normal",
    name: "マイナン",

    imageCard: getImagePath("card", 312, "normal"),
    imageDetail: getImagePath("panel", 312, "normal"),

    type: ["でんき"],
    tokui: "スキル",

    sleepType: "すやすや",

    mainSkill: "マイナス(料理パワーアップS)",

    ingredients: [
      {
        name: "あまいミツ",
        countsByLevel: { 1: 1, 30: 2, 60: 4 }
      },
      {
        name: "とくせんエッグ",
        countsByLevel: { 30: 2, 60: 3 }
      },
      {
        name: "モーモーミルク",
        countsByLevel: { 60: 4 }
      }
    ],

    baseHelpTime: 2400,
    ingRate: 0.174,
    skillRate: 0.049,
    maxHold: 16,

    berryIndex: 1.72,
    ingIndex: 1.22,
    skillIndicator: 3.52,

    evolutionChain: [
      {
        dexNo: 311,
        formId: "normal",
        evolveTo: null
      }
    ],

    fields: [
      {
        name: "ワカクサ本島",
        stars: {
          1: [{ type: "ハイパー", rank: 5 }],
          2: [{ type: "マスター", rank: 4 }],
          3: null,
          4: [{ type: "マスター", rank: 5 }]
        }
      },
      {
        name: "ゴールド旧発電所",
        stars: {
          1: [{ type: "スーパー", rank: 3 }],
          2: [{ type: "ハイパー", rank: 2 }],
          3: [{ type: "マスター", rank: 3 }],
          4: [{ type: "ハイパー", rank: 3 }]
        }
      },
      {
        name: "アンバー渓谷",
        stars: {
          1: [{ type: "スーパー", rank: 2 }],
          2: [{ type: "ハイパー", rank: 1 }],
          3: [{ type: "マスター", rank: 2 }],
          4: [{ type: "ハイパー", rank: 2 }]
        }
      },
      {
        name: "ワカクサ本島EX",
        stars: {
          1: [{ type: "ハイパー", rank: 1 }],
          2: [{ type: "ハイパー", rank: 4 }],
          3: [{ type: "マスター", rank: 4 }],
          4: [{ type: "マスター", rank: 5 }]
        }
      }
    ]
  },

  {
    dexNo: 316,
    formId: "normal",
    name: "ゴクリン",

    imageCard: getImagePath("card", 316, "normal"),
    imageDetail: getImagePath("panel", 316, "normal"),

    type: ["どく"],
    tokui: "スキル",

    sleepType: "うとうと",

    mainSkill: "ゆめのかけらゲットS(ランダム)",

    ingredients: [
      {
        name: "ワカクサ大豆",
        countsByLevel: { 1: 1, 30: 2, 60: 4 }
      },
      {
        name: "あじわいキノコ",
        countsByLevel: { 30: 1, 60: 2 }
      },
      {
        name: "あまいミツ",
        countsByLevel: { 60: 4 }
      }
    ],

    baseHelpTime: 5900,
    ingRate: 0.214,
    skillRate: 0.063,
    maxHold: 8,

    berryIndex: 0.85,
    ingIndex: 0.66,
    skillIndicator: 1.92,

    evolutionChain: [
      {
        dexNo: 316,
        formId: "normal",
        evolveTo: [
          {
            targetDexNo: 317,
            targetFormId: "normal",
            conditions: [
              { type: "level", value: 20 },
              { type: "candy", value: 40 }
            ]
          }
        ]
      },
      {
        dexNo: 317,
        formId: "normal",
        evolveTo: null
      }
    ],

    fields: [
      {
        name: "ワカクサ本島",
        stars: {
          1: [{ type: "ノーマル", rank: 2 }],
          2: [{ type: "スーパー", rank: 1 }],
          3: null,
          4: [{ type: "スーパー", rank: 2 }]
        }
      },
      {
        name: "シアンの砂浜",
        stars: {
          1: [{ type: "ノーマル", rank: 1 }],
          2: [{ type: "ノーマル", rank: 3 }],
          3: [{ type: "スーパー", rank: 4 }],
          4: [{ type: "スーパー", rank: 1 }]
        }
      },
      {
        name: "ウノハナ雪原",
        stars: {
          1: [{ type: "ノーマル", rank: 1 }],
          2: [{ type: "ノーマル", rank: 1 }],
          3: [{ type: "スーパー", rank: 2 }],
          4: [{ type: "スーパー", rank: 1 }]
        }
      }
    ]
  },

  {
    dexNo: 317,
    formId: "normal",
    name: "マルノーム",

    imageCard: getImagePath("card", 317, "normal"),
    imageDetail: getImagePath("panel", 317, "normal"),

    type: ["どく"],
    tokui: "スキル",

    sleepType: "うとうと",

    mainSkill: "ゆめのかけらゲットS(ランダム)",

    ingredients: [
      {
        name: "ワカクサ大豆",
        countsByLevel: { 1: 1, 30: 2, 60: 4 }
      },
      {
        name: "あじわいキノコ",
        countsByLevel: { 30: 1, 60: 2 }
      },
      {
        name: "あまいミツ",
        countsByLevel: { 60: 4 }
      }
    ],

    baseHelpTime: 3500,
    ingRate: 0.210,
    skillRate: 0.070,
    maxHold: 24,

    berryIndex: 1.44,
    ingIndex: 1.27,
    skillIndicator: 4.23,

    evolutionChain: [
      {
        dexNo: 316,
        formId: "normal",
        evolveTo: [
          {
            targetDexNo: 317,
            targetFormId: "normal",
            conditions: [
              { type: "level", value: 20 },
              { type: "candy", value: 40 }
            ]
          }
        ]
      },
      {
        dexNo: 317,
        formId: "normal",
        evolveTo: null
      }
    ],

    fields: [
      {
        name: "ワカクサ本島",
        stars: {
          1: [{ type: "スーパー", rank: 2 }],
          2: [{ type: "ハイパー", rank: 1 }],
          3: null,
          4: [{ type: "ハイパー", rank: 2 }]
        }
      },
      {
        name: "ウノハナ雪原",
        stars: {
          1: [{ type: "ノーマル", rank: 2 }],
          2: [{ type: "スーパー", rank: 1 }],
          3: [{ type: "ハイパー", rank: 2 }],
          4: [{ type: "ハイパー", rank: 1 }]
        }
      }
    ]
  },

  {
    dexNo: 328,
    formId: "normal",
    name: "ナックラー",

    imageCard: getImagePath("card", 328, "normal"),
    imageDetail: getImagePath("panel", 328, "normal"),

    type: ["じめん"],
    tokui: "食材",

    sleepType: "ぐっすり",

    mainSkill: "エナジーチャージS",

    ingredients: [
      {
        name: "つやつやアボカド",
        countsByLevel: { 1: 2, 30: 5, 60: 7 }
      },
      {
        name: "げきからハーブ",
        countsByLevel: { 30: 6, 60: 9 }
      },
      {
        name: "ワカクサ大豆",
        countsByLevel: { 60: 12 }
      }
    ],

    baseHelpTime: 5000,
    ingRate: 0.152,
    skillRate: 0.031,
    maxHold: 8,

    berryIndex: 0.98,
    ingIndex: 1.48,
    skillIndicator: 1.02,

    evolutionChain: [
      {
        dexNo: 328,
        formId: "normal",
        evolveTo: [
          {
            targetDexNo: 329,
            targetFormId: "normal",
            conditions: [
              { type: "level", value: 26 },
              { type: "candy", value: 40 }
            ]
          }
        ]
      },
      {
        dexNo: 329,
        formId: "normal",
        evolveTo: [
          {
            targetDexNo: 330,
            targetFormId: "normal",
            conditions: [
              { type: "level", value: 34 },
              { type: "candy", value: 80 }
            ]
          }
        ]
      },
      {
        dexNo: 330,
        formId: "normal",
        evolveTo: null
      }
    ],

    fields: [
      {
        name: "トープ洞窟",
        stars: {
          1: [{ type: "ノーマル", rank: 3 }],
          2: [{ type: "スーパー", rank: 2 }],
          3: [{ type: "ハイパー", rank: 3 }],
          4: [{ type: "スーパー", rank: 3 }]
        }
      },
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
    dexNo: 329,
    formId: "normal",
    name: "ビブラーバ",

    imageCard: getImagePath("card", 329, "normal"),
    imageDetail: getImagePath("panel", 329, "normal"),

    type: ["じめん"],
    tokui: "食材",

    sleepType: "ぐっすり",

    mainSkill: "エナジーチャージS",

    ingredients: [
      {
        name: "つやつやアボカド",
        countsByLevel: { 1: 2, 30: 5, 60: 7 }
      },
      {
        name: "げきからハーブ",
        countsByLevel: { 30: 6, 60: 9 }
      },
      {
        name: "ワカクサ大豆",
        countsByLevel: { 60: 12 }
      }
    ],

    baseHelpTime: 3700,
    ingRate: 0.155,
    skillRate: 0.034,
    maxHold: 17,

    berryIndex: 1.32,
    ingIndex: 2.22,
    skillIndicator: 1.63,

    evolutionChain: [
      {
        dexNo: 328,
        formId: "normal",
        evolveTo: [
          {
            targetDexNo: 329,
            targetFormId: "normal",
            conditions: [
              { type: "level", value: 26 },
              { type: "candy", value: 40 }
            ]
          }
        ]
      },
      {
        dexNo: 329,
        formId: "normal",
        evolveTo: [
          {
            targetDexNo: 330,
            targetFormId: "normal",
            conditions: [
              { type: "level", value: 34 },
              { type: "candy", value: 80 }
            ]
          }
        ]
      },
      {
        dexNo: 330,
        formId: "normal",
        evolveTo: null
      }
    ],

    fields: [
      {
        name: "トープ洞窟",
        stars: {
          1: [{ type: "スーパー", rank: 4 }],
          2: [{ type: "ハイパー", rank: 3 }],
          3: [{ type: "マスター", rank: 4 }],
          4: [{ type: "ハイパー", rank: 4 }]
        }
      },
      {
        name: "アンバー渓谷",
        stars: {
          1: [{ type: "ノーマル", rank: 5 }],
          2: [{ type: "スーパー", rank: 4 }],
          3: [{ type: "ハイパー", rank: 5 }],
          4: [{ type: "スーパー", rank: 5 }]
        }
      }
    ]
  },

  {
    dexNo: 330,
    formId: "normal",
    name: "フライゴン",

    imageCard: getImagePath("card", 330, "normal"),
    imageDetail: getImagePath("panel", 330, "normal"),

    type: ["じめん"],
    tokui: "食材",

    sleepType: "ぐっすり",

    mainSkill: "エナジーチャージS",

    ingredients: [
      {
        name: "つやつやアボカド",
        countsByLevel: { 1: 2, 30: 5, 60: 7 }
      },
      {
        name: "げきからハーブ",
        countsByLevel: { 30: 6, 60: 9 }
      },
      {
        name: "ワカクサ大豆",
        countsByLevel: { 60: 12 }
      }
    ],

    baseHelpTime: 2700,
    ingRate: 0.172,
    skillRate: 0.039,
    maxHold: 27,

    berryIndex: 1.78,
    ingIndex: 3.64,
    skillIndicator: 2.61,

    evolutionChain: [
      {
        dexNo: 328,
        formId: "normal",
        evolveTo: [
          {
            targetDexNo: 329,
            targetFormId: "normal",
            conditions: [
              { type: "level", value: 26 },
              { type: "candy", value: 40 }
            ]
          }
        ]
      },
      {
        dexNo: 329,
        formId: "normal",
        evolveTo: [
          {
            targetDexNo: 330,
            targetFormId: "normal",
            conditions: [
              { type: "level", value: 34 },
              { type: "candy", value: 80 }
            ]
          }
        ]
      },
      {
        dexNo: 330,
        formId: "normal",
        evolveTo: null
      }
    ],

    fields: [
      {
        name: "トープ洞窟",
        stars: {
          1: [{ type: "マスター", rank: 6 }],
          2: [{ type: "マスター", rank: 10 }],
          3: [{ type: "マスター", rank: 16 }],
          4: [{ type: "マスター", rank: 11 }]
        }
      },
      {
        name: "アンバー渓谷",
        stars: {
          1: [{ type: "マスター", rank: 2 }],
          2: [{ type: "マスター", rank: 6 }],
          3: [{ type: "マスター", rank: 12 }],
          4: [{ type: "マスター", rank: 7 }]
        }
      }
    ]
  },

  {
    dexNo: 333,
    formId: "normal",
    name: "チルット",

    imageCard: getImagePath("card", 333, "normal"),
    imageDetail: getImagePath("panel", 333, "normal"),

    type: ["ひこう"],
    tokui: "きのみ",

    sleepType: "ぐっすり",

    mainSkill: "げんきチャージS",

    ingredients: [
      {
        name: "とくせんエッグ",
        countsByLevel: { 1: 1, 30: 2, 60: 4 }
      },
      {
        name: "ワカクサ大豆",
        countsByLevel: { 30: 3, 60: 4 }
      },
      {
        name: "とくせんリンゴ",
        countsByLevel: { 60: 5 }
      }
    ],

    baseHelpTime: 4200,
    ingRate: 0.177,
    skillRate: 0.032,
    maxHold: 12,

    berryIndex: 1.41,
    ingIndex: 0.80,
    skillIndicator: 1.25,

    evolutionChain: [
      {
        dexNo: 333,
        formId: "normal",
        evolveTo: [
          {
            targetDexNo: 334,
            targetFormId: "normal",
            conditions: [
              { type: "level", value: 26 },
              { type: "candy", value: 40 }
            ]
          }
        ]
      },
      {
        dexNo: 334,
        formId: "normal",
        evolveTo: null
      }
    ],

    fields: [
      {
        name: "ワカクサ本島",
        stars: {
          1: [{ type: "ノーマル", rank: 1 }],
          2: [{ type: "ノーマル", rank: 5 }],
          3: null,
          4: [{ type: "スーパー", rank: 1 }]
        }
      },
      {
        name: "ウノハナ雪原",
        stars: {
          1: [{ type: "ノーマル", rank: 1 }],
          2: [{ type: "ノーマル", rank: 1 }],
          3: [{ type: "スーパー", rank: 1 }],
          4: [{ type: "スーパー", rank: 1 }]
        }
      },
      {
        name: "ワカクサ本島EX",
        stars: {
          1: [{ type: "ノーマル", rank: 1 }],
          2: [{ type: "ノーマル", rank: 1 }],
          3: [{ type: "スーパー", rank: 2 }],
          4: [{ type: "スーパー", rank: 2 }]
        }
      }
    ]
  },

  {
    dexNo: 334,
    formId: "normal",
    name: "チルタリス",

    imageCard: getImagePath("card", 334, "normal"),
    imageDetail: getImagePath("panel", 334, "normal"),

    type: ["ドラゴン"],
    tokui: "きのみ",

    sleepType: "うとうと",

    mainSkill: "げんきチャージS",

    ingredients: [
      {
        name: "とくせんエッグ",
        countsByLevel: { 1: 1, 30: 2, 60: 4 }
      },
      {
        name: "ワカクサ大豆",
        countsByLevel: { 30: 3, 60: 4 }
      },
      {
        name: "とくせんリンゴ",
        countsByLevel: { 60: 5 }
      }
    ],

    baseHelpTime: 3500,
    ingRate: 0.258,
    skillRate: 0.061,
    maxHold: 19,

    berryIndex: 2.23,
    ingIndex: 1.77,
    skillIndicator: 2.98,

    evolutionChain: [
      {
        dexNo: 333,
        formId: "normal",
        evolveTo: [
          {
            targetDexNo: 334,
            targetFormId: "normal",
            conditions: [
              { type: "level", value: 26 },
              { type: "candy", value: 40 }
            ]
          }
        ]
      },
      {
        dexNo: 334,
        formId: "normal",
        evolveTo: null
      }
    ],

    fields: [
      {
        name: "ウノハナ雪原",
        stars: {
          1: [{ type: "スーパー", rank: 2 }],
          2: [{ type: "ハイパー", rank: 1 }],
          3: [{ type: "マスター", rank: 2 }],
          4: [{ type: "ハイパー", rank: 2 }]
        }
      },
      {
        name: "ワカクサ本島EX",
        stars: {
          1: [{ type: "ノーマル", rank: 5 }],
          2: [{ type: "スーパー", rank: 2 }],
          3: [{ type: "ハイパー", rank: 1 }],
          4: [{ type: "ハイパー", rank: 2 }]
        }
      }
    ]
  },

  {
    dexNo: 353,
    formId: "normal",
    name: "カゲボウズ",

    imageCard: getImagePath("card", 353, "normal"),
    imageDetail: getImagePath("panel", 353, "normal"),

    type: ["ゴースト"],
    tokui: "きのみ",

    sleepType: "うとうと",

    mainSkill: "エナジーチャージS(ランダム)",

    ingredients: [
      {
        name: "ピュアなオイル",
        countsByLevel: { 1: 1, 30: 2, 60: 4 }
      },
      {
        name: "あったかジンジャー",
        countsByLevel: { 30: 2, 60: 4 }
      },
      {
        name: "あじわいキノコ",
        countsByLevel: { 60: 3 }
      }
    ],

    baseHelpTime: 3900,
    ingRate: 0.171,
    skillRate: 0.026,
    maxHold: 11,

    berryIndex: 1.66,
    ingIndex: 0.80,
    skillIndicator: 1.08,

    evolutionChain: [
      {
        dexNo: 353,
        formId: "normal",
        evolveTo: [
          {
            targetDexNo: 354,
            targetFormId: "normal",
            conditions: [
              { type: "level", value: 28 },
              { type: "candy", value: 40 }
            ]
          }
        ]
      },
      {
        dexNo: 354,
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
        name: "ゴールド旧発電所",
        stars: {
          1: [{ type: "ノーマル", rank: 1 }],
          2: [{ type: "ノーマル", rank: 3 }],
          3: [{ type: "スーパー", rank: 4 }]
        }
      },
      {
        name: "ワカクサ本島EX",
        stars: {
          1: [{ type: "ノーマル", rank: 1 }],
          2: [{ type: "ノーマル", rank: 1 }],
          3: [{ type: "スーパー", rank: 2 }]
        }
      }
    ]
  },

  {
    dexNo: 354,
    formId: "normal",
    name: "ジュペッタ",

    imageCard: getImagePath("card", 354, "normal"),
    imageDetail: getImagePath("panel", 354, "normal"),

    type: ["ゴースト"],
    tokui: "きのみ",

    sleepType: "うとうと",

    mainSkill: "エナジーチャージS(ランダム)",

    ingredients: [
      {
        name: "ピュアなオイル",
        countsByLevel: { 1: 1, 30: 2, 60: 4 }
      },
      {
        name: "あったかジンジャー",
        countsByLevel: { 30: 2, 60: 4 }
      },
      {
        name: "あじわいキノコ",
        countsByLevel: { 60: 3 }
      }
    ],

    baseHelpTime: 2600,
    ingRate: 0.179,
    skillRate: 0.033,
    maxHold: 24,

    berryIndex: 2.46,
    ingIndex: 1.36,
    skillIndicator: 2.17,

    evolutionChain: [
      {
        dexNo: 353,
        formId: "normal",
        evolveTo: [
          {
            targetDexNo: 354,
            targetFormId: "normal",
            conditions: [
              { type: "level", value: 28 },
              { type: "candy", value: 40 }
            ]
          }
        ]
      },
      {
        dexNo: 354,
        formId: "normal",
        evolveTo: null
      }
    ],

    fields: [
      {
        name: "ワカクサ本島",
        stars: {
          1: [{ type: "ハイパー", rank: 5 }],
          2: [{ type: "マスター", rank: 4 }],
          3: null,
          4: [{ type: "マスター", rank: 5 }]
        }
      },
      {
        name: "ゴールド旧発電所",
        stars: {
          1: [{ type: "スーパー", rank: 3 }],
          2: [{ type: "ハイパー", rank: 2 }],
          3: [{ type: "マスター", rank: 3 }],
          4: [{ type: "マスター", rank: 1 }]
        }
      },
      {
        name: "ワカクサ本島EX",
        stars: {
          1: [{ type: "スーパー", rank: 1 }],
          2: [{ type: "スーパー", rank: 3 }],
          3: [{ type: "ハイパー", rank: 2 }],
          4: [{ type: "ハイパー", rank: 3 }]
        }
      }
    ]
  },

  {
    dexNo: 359,
    formId: "normal",
    name: "アブソル",

    imageCard: getImagePath("card", 359, "normal"),
    imageDetail: getImagePath("panel", 359, "normal"),

    type: ["あく"],
    tokui: "食材",

    sleepType: "うとうと",

    mainSkill: "エナジーチャージM",

    ingredients: [
      {
        name: "リラックスカカオ",
        countsByLevel: { 1: 2, 30: 5, 60: 7 }
      },
      {
        name: "とくせんリンゴ",
        countsByLevel: { 30: 8, 60: 12 }
      },
      {
        name: "あじわいキノコ",
        countsByLevel: { 60: 7 }
      }
    ],

    baseHelpTime: 2950,
    ingRate: 0.178,
    skillRate: 0.038,
    maxHold: 21,

    berryIndex: 1.73,
    ingIndex: 3.15,
    skillIndicator: 2.24,

    evolutionChain: [
      {
        dexNo: 359,
        formId: "normal",
        evolveTo: null
      }
    ],

    fields: [
      {
        name: "ワカクサ本島",
        stars: {
          1: [{ type: "ハイパー", rank: 2 }],
          2: [{ type: "マスター", rank: 1 }],
          3: null,
          4: [{ type: "マスター", rank: 2 }]
        }
      },
      {
        name: "ウノハナ雪原",
        stars: {
          1: [{ type: "スーパー", rank: 2 }],
          2: [{ type: "ハイパー", rank: 1 }],
          3: [{ type: "マスター", rank: 2 }],
          4: [{ type: "ハイパー", rank: 2 }]
        }
      },
      {
        name: "ワカクサ本島EX",
        stars: {
          1: [{ type: "スーパー", rank: 2 }],
          2: [{ type: "スーパー", rank: 4 }],
          3: [{ type: "ハイパー", rank: 3 }],
          4: [{ type: "ハイパー", rank: 4 }]
        }
      }
    ]
  },

  {
    dexNo: 360,
    formId: "normal",
    name: "ソーナノ",

    imageCard: getImagePath("card", 360, "normal"),
    imageDetail: getImagePath("panel", 360, "normal"),

    type: ["エスパー"],
    tokui: "スキル",

    sleepType: "ぐっすり",

    mainSkill: "げんきエールS",

    ingredients: [
      {
        name: "とくせんリンゴ",
        countsByLevel: { 1: 1, 30: 2, 60: 4 }
      },
      {
        name: "あじわいキノコ",
        countsByLevel: { 30: 1, 60: 2 }
      },
      {
        name: "ピュアなオイル",
        countsByLevel: { 60: 3 }
      }
    ],

    baseHelpTime: 5800,
    ingRate: 0.213,
    skillRate: 0.069,
    maxHold: 7,

    berryIndex: 0.71,
    ingIndex: 0.61,
    skillIndicator: 2.09,

    evolutionChain: [
      {
        dexNo: 360,
        formId: "normal",
        evolveTo: [
          {
            targetDexNo: 202,
            targetFormId: "normal",
            conditions: [
              { type: "level", value: 11 },
              { type: "candy", value: 20 }
            ]
          }
        ]
      },
      {
        dexNo: 202,
        formId: "normal",
        evolveTo: null
      }
    ],

    fields: [
      {
        name: "ワカクサ本島",
        stars: {
          1: [{ type: "ノーマル", rank: 1 }],
          2: [{ type: "ノーマル", rank: 5 }],
          3: null,
          4: [{ type: "スーパー", rank: 1 }]
        }
      },
      {
        name: "ラピスラズリ湖畔",
        stars: {
          1: [{ type: "ノーマル", rank: 1 }],
          2: [{ type: "ノーマル", rank: 1 }],
          3: [{ type: "ノーマル", rank: 5 }],
          4: [{ type: "スーパー", rank: 1 }]
        }
      }
    ]
  },

  {
    dexNo: 363,
    formId: "normal",
    name: "タマザラシ",

    imageCard: getImagePath("card", 363, "normal"),
    imageDetail: getImagePath("panel", 363, "normal"),

    type: ["こおり"],
    tokui: "きのみ",

    sleepType: "ぐっすり",

    mainSkill: "食材ゲットS",

    ingredients: [
      {
        name: "ピュアなオイル",
        countsByLevel: { 1: 1, 30: 2, 60: 4 }
      },
      {
        name: "マメミート",
        countsByLevel: { 30: 3, 60: 4 }
      },
      {
        name: "あったかジンジャー",
        countsByLevel: { 60: 4 }
      }
    ],

    baseHelpTime: 5600,
    ingRate: 0.224,
    skillRate: 0.023,
    maxHold: 9,

    berryIndex: 1.33,
    ingIndex: 0.88,
    skillIndicator: 0.67,

    evolutionChain: [
      {
        dexNo: 363,
        formId: "normal",
        evolveTo: [
          {
            targetDexNo: 364,
            targetFormId: "normal",
            conditions: [
              { type: "level", value: 24 },
              { type: "candy", value: 40 }
            ]
          }
        ]
      },
      {
        dexNo: 364,
        formId: "normal",
        evolveTo: [
          {
            targetDexNo: 365,
            targetFormId: "normal",
            conditions: [
              { type: "level", value: 33 },
              { type: "candy", value: 80 }
            ]
          }
        ]
      },
      {
        dexNo: 365,
        formId: "normal",
        evolveTo: null
      }
    ],

    fields: [
      {
        name: "ワカクサ本島",
        stars: {
          1: [{ type: "ノーマル", rank: 1 }],
          2: [{ type: "ノーマル", rank: 5 }],
          3: [{ type: "ハイパー", rank: 1 }],
          4: [{ type: "スーパー", rank: 1 }]
        }
      },
      {
        name: "ウノハナ雪原",
        stars: {
          1: [{ type: "ノーマル", rank: 1 }],
          2: [{ type: "ノーマル", rank: 1 }],
          3: [{ type: "スーパー", rank: 1 }],
          4: [{ type: "スーパー", rank: 1 }]
        }
      },
      {
        name: "ワカクサ本島EX",
        stars: {
          1: [{ type: "ノーマル", rank: 1 }],
          2: [{ type: "ノーマル", rank: 1 }],
          3: [{ type: "スーパー", rank: 2 }],
          4: [{ type: "スーパー", rank: 3 }]
        }
      }
    ]
  },

  {
    dexNo: 363,
    formId: "holiday",
    name: "タマザラシ(ホリデー)",

    imageCard: getImagePath("card", 363, "holiday"),
    imageDetail: getImagePath("panel", 363, "holiday"),

    type: ["こおり"],
    tokui: "スキル",

    sleepType: "ぐっすり",

    mainSkill: "料理チャンスS",

    ingredients: [
      {
        name: "ピュアなオイル",
        countsByLevel: { 1: 1, 30: 2, 60: 4 }
      },
      {
        name: "マメミート",
        countsByLevel: { 30: 3, 60: 4 }
      },
      {
        name: "あったかジンジャー",
        countsByLevel: { 60: 4 }
      }
    ],

    baseHelpTime: 3300,
    ingRate: 0.214,
    skillRate: 0.050,
    maxHold: 20,

    berryIndex: 1.52,
    ingIndex: 1.62,
    skillIndicator: 2.88,

    evolutionChain: [
      {
        dexNo: 25,
        formId: "holiday",
        evolveTo: null
      }
    ],

    fields: [
      {
        name: "すべて",
        stars: {
          1: null,
          2: null
        }
      }
    ]
  },

  {
    dexNo: 364,
    formId: "normal",
    name: "トドグラー",

    imageCard: getImagePath("card", 364, "normal"),
    imageDetail: getImagePath("panel", 364, "normal"),

    type: ["こおり"],
    tokui: "きのみ",

    sleepType: "ぐっすり",

    mainSkill: "食材ゲットS",

    ingredients: [
      {
        name: "ピュアなオイル",
        countsByLevel: { 1: 1, 30: 2, 60: 4 }
      },
      {
        name: "マメミート",
        countsByLevel: { 30: 3, 60: 4 }
      },
      {
        name: "あったかジンジャー",
        countsByLevel: { 60: 4 }
      }
    ],

    baseHelpTime: 4000,
    ingRate: 0.221,
    skillRate: 0.021,
    maxHold: 18,

    berryIndex: 1.87,
    ingIndex: 1.29,
    skillIndicator: 0.92,

    evolutionChain: [
      {
        dexNo: 363,
        formId: "normal",
        evolveTo: [
          {
            targetDexNo: 364,
            targetFormId: "normal",
            conditions: [
              { type: "level", value: 24 },
              { type: "candy", value: 40 }
            ]
          }
        ]
      },
      {
        dexNo: 364,
        formId: "normal",
        evolveTo: [
          {
            targetDexNo: 365,
            targetFormId: "normal",
            conditions: [
              { type: "level", value: 33 },
              { type: "candy", value: 80 }
            ]
          }
        ]
      },
      {
        dexNo: 365,
        formId: "normal",
        evolveTo: null
      }
    ],

    fields: [
      {
        name: "ウノハナ雪原",
        stars: {
          1: [{ type: "ノーマル", rank: 2 }],
          2: [{ type: "スーパー", rank: 1 }],
          3: [{ type: "ハイパー", rank: 2 }],
          4: [{ type: "ハイパー", rank: 1 }]
        }
      },
      {
        name: "ワカクサ本島EX",
        stars: {
          1: [{ type: "ノーマル", rank: 5 }],
          2: [{ type: "スーパー", rank: 2 }],
          3: [{ type: "スーパー", rank: 5 }],
          4: [{ type: "ハイパー", rank: 1 }]
        }
      }
    ]
  },

  {
    dexNo: 365,
    formId: "normal",
    name: "トドゼルガ",

    imageCard: getImagePath("card", 365, "normal"),
    imageDetail: getImagePath("panel", 365, "normal"),

    type: ["こおり"],
    tokui: "きのみ",

    sleepType: "ぐっすり",

    mainSkill: "食材ゲットS",

    ingredients: [
      {
        name: "ピュアなオイル",
        countsByLevel: { 1: 1, 30: 2, 60: 4 }
      },
      {
        name: "マメミート",
        countsByLevel: { 30: 3, 60: 4 }
      },
      {
        name: "あったかジンジャー",
        countsByLevel: { 60: 4 }
      }
    ],

    baseHelpTime: 3000,
    ingRate: 0.223,
    skillRate: 0.022,
    maxHold: 28,

    berryIndex: 2.49,
    ingIndex: 1.80,
    skillIndicator: 1.32,

    evolutionChain: [
      {
        dexNo: 363,
        formId: "normal",
        evolveTo: [
          {
            targetDexNo: 364,
            targetFormId: "normal",
            conditions: [
              { type: "level", value: 24 },
              { type: "candy", value: 40 }
            ]
          }
        ]
      },
      {
        dexNo: 364,
        formId: "normal",
        evolveTo: [
          {
            targetDexNo: 365,
            targetFormId: "normal",
            conditions: [
              { type: "level", value: 33 },
              { type: "candy", value: 80 }
            ]
          }
        ]
      },
      {
        dexNo: 365,
        formId: "normal",
        evolveTo: null
      }
    ],

    fields: [
      {
        name: "ウノハナ雪原",
        stars: {
          1: [{ type: "ハイパー", rank: 2 }],
          2: [{ type: "マスター", rank: 1 }],
          3: [{ type: "マスター", rank: 7 }],
          4: [{ type: "マスター", rank: 2 }]
        }
      },
      {
        name: "ワカクサ本島EX",
        stars: {
          1: [{ type: "スーパー", rank: 2 }],
          2: [{ type: "スーパー", rank: 5 }],
          3: [{ type: "ハイパー", rank: 4 }],
          4: [{ type: "ハイパー", rank: 5 }]
        }
      }
    ]
  },

  {
    dexNo: 371,
    formId: "normal",
    name: "タツベイ",

    imageCard: getImagePath("card", 371, "normal"),
    imageDetail: getImagePath("panel", 371, "normal"),

    type: ["ドラゴン"],
    tokui: "きのみ",

    sleepType: "うとうと",

    mainSkill: "料理パワーアップS",

    ingredients: [
      {
        name: "ほっこりポテト",
        countsByLevel: { 1: 1, 30: 2, 60: 4 }
      },
      {
        name: "あったかジンジャー",
        countsByLevel: { 30: 3, 60: 4 }
      },
      {
        name: "マメミート",
        countsByLevel: { 60: 4 }
      }
    ],

    baseHelpTime: 5300,
    ingRate: 0.209,
    skillRate: 0.027,
    maxHold: 9,

    berryIndex: 1.57,
    ingIndex: 0.86,
    skillIndicator: 0.83,

    evolutionChain: [
      {
        dexNo: 371,
        formId: "normal",
        evolveTo: [
          {
            targetDexNo: 372,
            targetFormId: "normal",
            conditions: [
              { type: "level", value: 23 },
              { type: "candy", value: 40 }
            ]
          }
        ]
      },
      {
        dexNo: 372,
        formId: "normal",
        evolveTo: [
          {
            targetDexNo: 373,
            targetFormId: "normal",
            conditions: [
              { type: "level", value: 38 },
              { type: "candy", value: 100 }
            ]
          }
        ]
      },
      {
        dexNo: 373,
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
    dexNo: 372,
    formId: "normal",
    name: "コモルー",

    imageCard: getImagePath("card", 372, "normal"),
    imageDetail: getImagePath("panel", 372, "normal"),

    type: ["ドラゴン"],
    tokui: "きのみ",

    sleepType: "うとうと",

    mainSkill: "料理パワーアップS",

    ingredients: [
      {
        name: "ほっこりポテト",
        countsByLevel: { 1: 1, 30: 2, 60: 4 }
      },
      {
        name: "あったかジンジャー",
        countsByLevel: { 30: 3, 60: 4 }
      },
      {
        name: "マメミート",
        countsByLevel: { 60: 4 }
      }
    ],

    baseHelpTime: 3800,
    ingRate: 0.206,
    skillRate: 0.027,
    maxHold: 19,

    berryIndex: 2.19,
    ingIndex: 1.25,
    skillIndicator: 1.24,

    evolutionChain: [
      {
        dexNo: 371,
        formId: "normal",
        evolveTo: [
          {
            targetDexNo: 372,
            targetFormId: "normal",
            conditions: [
              { type: "level", value: 23 },
              { type: "candy", value: 40 }
            ]
          }
        ]
      },
      {
        dexNo: 372,
        formId: "normal",
        evolveTo: [
          {
            targetDexNo: 373,
            targetFormId: "normal",
            conditions: [
              { type: "level", value: 38 },
              { type: "candy", value: 100 }
            ]
          }
        ]
      },
      {
        dexNo: 373,
        formId: "normal",
        evolveTo: null
      }
    ],

    fields: [
      {
        name: "アンバー渓谷",
        stars: {
          1: [{ type: "ノーマル", rank: 5 }],
          2: [{ type: "スーパー", rank: 4 }],
          3: [{ type: "ハイパー", rank: 5 }],
          4: [{ type: "スーパー", rank: 5 }]
        }
      }
    ]
  },

  {
    dexNo: 373,
    formId: "normal",
    name: "ボーマンダ",

    imageCard: getImagePath("card", 373, "normal"),
    imageDetail: getImagePath("panel", 373, "normal"),

    type: ["ドラゴン"],
    tokui: "きのみ",

    sleepType: "うとうと",

    mainSkill: "料理パワーアップS",

    ingredients: [
      {
        name: "ほっこりポテト",
        countsByLevel: { 1: 1, 30: 2, 60: 4 }
      },
      {
        name: "あったかジンジャー",
        countsByLevel: { 30: 3, 60: 4 }
      },
      {
        name: "マメミート",
        countsByLevel: { 60: 4 }
      }
    ],

    baseHelpTime: 2800,
    ingRate: 0.217,
    skillRate: 0.034,
    maxHold: 32,

    berryIndex: 2.94,
    ingIndex: 1.92,
    skillIndicator: 2.22,

    evolutionChain: [
      {
        dexNo: 371,
        formId: "normal",
        evolveTo: [
          {
            targetDexNo: 372,
            targetFormId: "normal",
            conditions: [
              { type: "level", value: 23 },
              { type: "candy", value: 40 }
            ]
          }
        ]
      },
      {
        dexNo: 372,
        formId: "normal",
        evolveTo: [
          {
            targetDexNo: 373,
            targetFormId: "normal",
            conditions: [
              { type: "level", value: 38 },
              { type: "candy", value: 100 }
            ]
          }
        ]
      },
      {
        dexNo: 373,
        formId: "normal",
        evolveTo: null
      }
    ],

    fields: [
      {
        name: "アンバー渓谷",
        stars: {
          1: [{ type: "マスター", rank: 6 }],
          2: [{ type: "マスター", rank: 10 }],
          3: [{ type: "マスター", rank: 16 }],
          4: [{ type: "マスター", rank: 11 }]
        }
      }
    ]
  },

  {
    dexNo: 380,
    formId: "normal",
    name: "ラティアス",

    imageCard: getImagePath("card", 380, "normal"),
    imageDetail: getImagePath("panel", 380, "normal"),

    type: ["ドラゴン"],
    tokui: "スキル",

    sleepType: "うとうと",

    mainSkill: "いやしのはどう(げんきエールS)",

    ingredients: [
      {
        name: "あんみんトマト",
        countsByLevel: { 1: 1, 30: 2, 60: 4 }
      },
      {
        name: "ずっしりカボチャ",
        countsByLevel: { 30: 1, 60: 2 }
      },
      {
        name: "あじわいキノコ",
        countsByLevel: { 60: 2 }
      }
    ],

    baseHelpTime: 2800,
    ingRate: 0.114,
    skillRate: 0.049,
    maxHold: 19,

    berryIndex: 2.22,
    ingIndex: 0.67,
    skillIndicator: 3.33,

    evolutionChain: [
      {
        dexNo: 380,
        formId: "normal",
        evolveTo: null
      }
    ],

    fields: [
      {
        name: "ワカクサ本島",
        stars: {
          1: [{ type: "マスター", rank: 9 }],
          2: [{ type: "マスター", rank: 13 }],
          3: [{ type: "マスター", rank: 19 }],
          5: [{ type: null, rank: null }]
        }
      },
      {
        name: "ラピスラズリ湖畔",
        stars: {
          1: [{ type: "マスター", rank: 3 }],
          2: [{ type: "マスター", rank: 7 }],
          3: [{ type: "マスター", rank: 13 }],
          5: [{ type: null, rank: null }]
        }
      },
      {
        name: "アンバー渓谷",
        stars: {
          1: [{ type: "マスター", rank: 1 }],
          2: [{ type: "マスター", rank: 5 }],
          3: [{ type: "マスター", rank: 11 }],
          5: [{ type: null, rank: null }]
        }
      },
      {
        name: "ワカクサ本島EX",
        stars: {
          1: [{ type: "ハイパー", rank: 4 }],
          2: [{ type: "マスター", rank: 7 }],
          3: [{ type: "マスター", rank: 16 }],
          5: [{ type: null, rank: null }]
        }
      }
    ]
  },

  {
    dexNo: 381,
    formId: "normal",
    name: "ラティオス",

    imageCard: getImagePath("card", 381, "normal"),
    imageDetail: getImagePath("panel", 381, "normal"),

    type: ["ドラゴン"],
    tokui: "スキル",

    sleepType: "うとうと",

    mainSkill: "りゅうせいぐん(きのみバースト)",

    ingredients: [
      {
        name: "あんみんトマト",
        countsByLevel: { 1: 1, 30: 2, 60: 4 }
      },
      {
        name: "とくせんエッグ",
        countsByLevel: { 30: 2, 60: 3 }
      },
      {
        name: "モーモーミルク",
        countsByLevel: { 60: 4 }
      }
    ],

    baseHelpTime: 2800,
    ingRate: 0.198,
    skillRate: 0.030,
    maxHold: 19,

    berryIndex: 2.01,
    ingIndex: 1.40,
    skillIndicator: 1.97,

    evolutionChain: [
      {
        dexNo: 381,
        formId: "normal",
        evolveTo: null
      }
    ],

    fields: [
      {
        name: "ワカクサ本島",
        stars: {
          1: [{ type: "マスター", rank: 9 }],
          2: [{ type: "マスター", rank: 13 }],
          3: [{ type: "マスター", rank: 19 }],
          5: [{ type: null, rank: null }]
        }
      },
      {
        name: "ラピスラズリ湖畔",
        stars: {
          1: [{ type: "マスター", rank: 3 }],
          2: [{ type: "マスター", rank: 7 }],
          3: [{ type: "マスター", rank: 13 }],
          5: [{ type: null, rank: null }]
        }
      },
      {
        name: "アンバー渓谷",
        stars: {
          1: [{ type: "マスター", rank: 1 }],
          2: [{ type: "マスター", rank: 5 }],
          3: [{ type: "マスター", rank: 11 }],
          5: [{ type: null, rank: null }]
        }
      },
      {
        name: "ワカクサ本島EX",
        stars: {
          1: [{ type: "ハイパー", rank: 4 }],
          2: [{ type: "マスター", rank: 7 }],
          3: [{ type: "マスター", rank: 16 }],
          5: [{ type: null, rank: null }]
        }
      }
    ]
  }

];  
