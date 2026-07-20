const pokedexData_Sinnoh = [

  {
    dexNo: 387,
    formId: "normal",
    name: "ナエトル",

    imageCard: getImagePath("card", 387, "normal"),
    imageDetail: getImagePath("panel", 387, "normal"),

    type: ["くさ"],
    tokui: "スキル",

    sleepType: "うとうと",

    mainSkill: "げんきオールS",

    ingredients: [
      {
        name: "あじわいキノコ",
        countsByLevel: { 1: 1, 30: 2, 60: 4 }
      },
      {
        name: "ほっこりポテト",
        countsByLevel: { 30: 3, 60: 5 }
      },
      {
        name: "あったかジンジャー",
        countsByLevel: { 60: 6 }
      }
    ],

    baseHelpTime: 4500,
    ingRate: 0.132,
    skillRate: 0.041,
    maxHold: 12,

    berryIndex: 1.16,
    ingIndex: 0.77,
    skillIndicator: 1.67,

    evolutionChain: [
      {
        dexNo: 387,
        formId: "normal",
        evolveTo: [
          {
            targetDexNo: 388,
            targetFormId: "normal",
            conditions: [
              { type: "level", value: 12 },
              { type: "candy", value: 40 }
            ]
          }
        ]
      },
      {
        dexNo: 388,
        formId: "normal",
        evolveTo: [
          {
            targetDexNo: 389,
            targetFormId: "normal",
            conditions: [
              { type: "level", value: 27 },
              { type: "candy", value: 80 }
            ]
          }
        ]
      },
      {
        dexNo: 389,
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
          3: [{ type: "ハイパー", rank: 3 }],
          4: [{ type: "ハイパー", rank: 4 }]
        }
      }
    ]
  },

  {
    dexNo: 388,
    formId: "normal",
    name: "ハヤシガメ",

    imageCard: getImagePath("card", 388, "normal"),
    imageDetail: getImagePath("panel", 388, "normal"),

    type: ["くさ"],
    tokui: "スキル",

    sleepType: "うとうと",

    mainSkill: "げんきオールS",

    ingredients: [
      {
        name: "あじわいキノコ",
        countsByLevel: { 1: 1, 30: 2, 60: 4 }
      },
      {
        name: "ほっこりポテト",
        countsByLevel: { 30: 3, 60: 5 }
      },
      {
        name: "あったかジンジャー",
        countsByLevel: { 60: 6 }
      }
    ],

    baseHelpTime: 3700,
    ingRate: 0.150,
    skillRate: 0.046,
    maxHold: 19,

    berryIndex: 1.38,
    ingIndex: 1.20,
    skillIndicator: 2.43,

    evolutionChain: [
      {
        dexNo: 387,
        formId: "normal",
        evolveTo: [
          {
            targetDexNo: 388,
            targetFormId: "normal",
            conditions: [
              { type: "level", value: 12 },
              { type: "candy", value: 40 }
            ]
          }
        ]
      },
      {
        dexNo: 388,
        formId: "normal",
        evolveTo: [
          {
            targetDexNo: 389,
            targetFormId: "normal",
            conditions: [
              { type: "level", value: 27 },
              { type: "candy", value: 80 }
            ]
          }
        ]
      },
      {
        dexNo: 389,
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
        name: "トープ洞窟",
        stars: {
          1: [{ type: "スーパー", rank: 3 }],
          2: [{ type: "ハイパー", rank: 2 }],
          3: [{ type: "マスター", rank: 3 }],
          4: [{ type: "ハイパー", rank: 3 }]
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
          4: [{ type: "マスター", rank: 2 }]
        }
      }
    ]
  },

  {
    dexNo: 389,
    formId: "normal",
    name: "ドダイトス",

    imageCard: getImagePath("card", 389, "normal"),
    imageDetail: getImagePath("panel", 389, "normal"),

    type: ["じめん"],
    tokui: "スキル",

    sleepType: "ぐっすり",

    mainSkill: "げんきオールS",

    ingredients: [
      {
        name: "あじわいキノコ",
        countsByLevel: { 1: 1, 30: 2, 60: 4 }
      },
      {
        name: "ほっこりポテト",
        countsByLevel: { 30: 3, 60: 5 }
      },
      {
        name: "あったかジンジャー",
        countsByLevel: { 60: 6 }
      }
    ],

    baseHelpTime: 2900,
    ingRate: 0.156,
    skillRate: 0.048,
    maxHold: 27,

    berryIndex: 1.69,
    ingIndex: 1.67,
    skillIndicator: 3.33,

    evolutionChain: [
      {
        dexNo: 387,
        formId: "normal",
        evolveTo: [
          {
            targetDexNo: 388,
            targetFormId: "normal",
            conditions: [
              { type: "level", value: 12 },
              { type: "candy", value: 40 }
            ]
          }
        ]
      },
      {
        dexNo: 388,
        formId: "normal",
        evolveTo: [
          {
            targetDexNo: 389,
            targetFormId: "normal",
            conditions: [
              { type: "level", value: 27 },
              { type: "candy", value: 80 }
            ]
          }
        ]
      },
      {
        dexNo: 389,
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
        name: "トープ洞窟",
        stars: {
          1: [{ type: "マスター", rank: 3 }],
          2: [{ type: "マスター", rank: 7 }],
          3: [{ type: "マスター", rank: 13 }]
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
          1: [{ type: "ハイパー", rank: 2 }],
          2: [{ type: "マスター", rank: 1 }],
          3: [{ type: "マスター", rank: 10 }]
        }
      }
    ]
  },

  {
    dexNo: 390,
    formId: "normal",
    name: "ヒコザル",

    imageCard: getImagePath("card", 390, "normal"),
    imageDetail: getImagePath("panel", 390, "normal"),

    type: ["ほのお"],
    tokui: "スキル",

    sleepType: "すやすや",

    mainSkill: "きのみバースト",

    ingredients: [
      {
        name: "げきからハーブ",
        countsByLevel: { 1: 1, 30: 2, 60: 4 }
      },
      {
        name: "あったかジンジャー",
        countsByLevel: { 30: 3, 60: 4 }
      },
      {
        name: "めざましコーヒー",
        countsByLevel: { 60: 3 }
      }
    ],

    baseHelpTime: 4100,
    ingRate: 0.114,
    skillRate: 0.033,
    maxHold: 10,

    berryIndex: 1.17,
    ingIndex: 0.50,
    skillIndicator: 1.41,

    evolutionChain: [
      {
        dexNo: 390,
        formId: "normal",
        evolveTo: [
          {
            targetDexNo: 391,
            targetFormId: "normal",
            conditions: [
              { type: "level", value: 12 },
              { type: "candy", value: 40 }
            ]
          }
        ]
      },
      {
        dexNo: 391,
        formId: "normal",
        evolveTo: [
          {
            targetDexNo: 392,
            targetFormId: "normal",
            conditions: [
              { type: "level", value: 27 },
              { type: "candy", value: 80 }
            ]
          }
        ]
      },
      {
        dexNo: 392,
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
          2: [{ type: "スーパー", rank: 3 }],
          3: [{ type: "ハイパー", rank: 3 }],
          4: [{ type: "ハイパー", rank: 4 }]
        }
      }
    ]
  },

  {
    dexNo: 391,
    formId: "normal",
    name: "モウカザル",

    imageCard: getImagePath("card", 391, "normal"),
    imageDetail: getImagePath("panel", 391, "normal"),

    type: ["かくとう"],
    tokui: "スキル",

    sleepType: "ぐっすり",

    mainSkill: "きのみバースト",

    ingredients: [
      {
        name: "げきからハーブ",
        countsByLevel: { 1: 1, 30: 2, 60: 4 }
      },
      {
        name: "あったかジンジャー",
        countsByLevel: { 30: 3, 60: 4 }
      },
      {
        name: "めざましコーヒー",
        countsByLevel: { 60: 3 }
      }
    ],

    baseHelpTime: 3100,
    ingRate: 0.114,
    skillRate: 0.033,
    maxHold: 19,

    berryIndex: 1.54,
    ingIndex: 0.72,
    skillIndicator: 2.03,

    evolutionChain: [
      {
        dexNo: 390,
        formId: "normal",
        evolveTo: [
          {
            targetDexNo: 391,
            targetFormId: "normal",
            conditions: [
              { type: "level", value: 12 },
              { type: "candy", value: 40 }
            ]
          }
        ]
      },
      {
        dexNo: 391,
        formId: "normal",
        evolveTo: [
          {
            targetDexNo: 392,
            targetFormId: "normal",
            conditions: [
              { type: "level", value: 27 },
              { type: "candy", value: 80 }
            ]
          }
        ]
      },
      {
        dexNo: 392,
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
        name: "トープ洞窟",
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
          1: [{ type: "ノーマル", rank: 4 }],
          2: [{ type: "スーパー", rank: 3 }],
          3: [{ type: "ハイパー", rank: 4 }],
          4: [{ type: "スーパー", rank: 4 }]
        }
      },
      {
        name: "ワカクサ本島EX",
        stars: {
          1: [{ type: "ノーマル", rank: 5 }],
          2: [{ type: "スーパー", rank: 5 }],
          3: [{ type: "ハイパー", rank: 5 }],
          4: [{ type: "マスター", rank: 2 }]
        }
      }
    ]
  },

  {
    dexNo: 392,
    formId: "normal",
    name: "ゴウカザル",

    imageCard: getImagePath("card", 392, "normal"),
    imageDetail: getImagePath("panel", 392, "normal"),

    type: ["かくとう"],
    tokui: "スキル",

    sleepType: "ぐっすり",

    mainSkill: "きのみバースト",

    ingredients: [
      {
        name: "げきからハーブ",
        countsByLevel: { 1: 1, 30: 2, 60: 4 }
      },
      {
        name: "あったかジンジャー",
        countsByLevel: { 30: 3, 60: 4 }
      },
      {
        name: "めざましコーヒー",
        countsByLevel: { 60: 3 }
      }
    ],

    baseHelpTime: 2400,
    ingRate: 0.106,
    skillRate: 0.033,
    maxHold: 28,

    berryIndex: 2.01,
    ingIndex: 0.86,
    skillIndicator: 2.73,

    evolutionChain: [
      {
        dexNo: 390,
        formId: "normal",
        evolveTo: [
          {
            targetDexNo: 391,
            targetFormId: "normal",
            conditions: [
              { type: "level", value: 12 },
              { type: "candy", value: 40 }
            ]
          }
        ]
      },
      {
        dexNo: 391,
        formId: "normal",
        evolveTo: [
          {
            targetDexNo: 392,
            targetFormId: "normal",
            conditions: [
              { type: "level", value: 27 },
              { type: "candy", value: 80 }
            ]
          }
        ]
      },
      {
        dexNo: 392,
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
          1: [{ type: "ハイパー", rank: 2 }],
          2: [{ type: "マスター", rank: 1 }],
          3: [{ type: "マスター", rank: 10 }],
          4: [{ type: "マスター", rank: 11 }]
        }
      }
    ]
  },

  {
    dexNo: 393,
    formId: "normal",
    name: "ポッチャマ",

    imageCard: getImagePath("card", 393, "normal"),
    imageDetail: getImagePath("panel", 393, "normal"),

    type: ["みず"],
    tokui: "きのみ",

    sleepType: "ぐっすり",

    mainSkill: "おてつだいサポートS",

    ingredients: [
      {
        name: "とくせんエッグ",
        countsByLevel: { 1: 1, 30: 2, 60: 4 }
      },
      {
        name: "ふといながねぎ",
        countsByLevel: { 30: 1, 60: 2 }
      },
      {
        name: "あまいミツ",
        countsByLevel: { 60: 4 }
      }
    ],

    baseHelpTime: 4500,
    ingRate: 0.159,
    skillRate: 0.026,
    maxHold: 11,

    berryIndex: 1.74,
    ingIndex: 0.56,
    skillIndicator: 0.96,

    evolutionChain: [
      {
        dexNo: 393,
        formId: "normal",
        evolveTo: [
          {
            targetDexNo: 394,
            targetFormId: "normal",
            conditions: [
              { type: "level", value: 12 },
              { type: "candy", value: 40 }
            ]
          }
        ]
      },
      {
        dexNo: 394,
        formId: "normal",
        evolveTo: [
          {
            targetDexNo: 395,
            targetFormId: "normal",
            conditions: [
              { type: "level", value: 27 },
              { type: "candy", value: 80 }
            ]
          }
        ]
      },
      {
        dexNo: 395,
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
        name: "ウノハナ雪原",
        stars: {
          1: [{ type: "ノーマル", rank: 1 }],
          2: [{ type: "ノーマル", rank: 5 }],
          3: [{ type: "ハイパー", rank: 1 }],
          4: [{ type: "スーパー", rank: 1 }]
        }
      },
      {
        name: "ワカクサ本島EX",
        stars: {
          1: [{ type: "ノーマル", rank: 1 }],
          2: [{ type: "スーパー", rank: 3 }],
          3: [{ type: "ハイパー", rank: 3 }],
          4: [{ type: "ハイパー", rank: 4 }]
        }
      }
    ]
  },

  {
    dexNo: 394,
    formId: "normal",
    name: "ポッタイシ",

    imageCard: getImagePath("card", 394, "normal"),
    imageDetail: getImagePath("panel", 394, "normal"),

    type: ["みず"],
    tokui: "きのみ",

    sleepType: "ぐっすり",

    mainSkill: "おてつだいサポートS",

    ingredients: [
      {
        name: "とくせんエッグ",
        countsByLevel: { 1: 1, 30: 2, 60: 4 }
      },
      {
        name: "ふといながねぎ",
        countsByLevel: { 30: 1, 60: 2 }
      },
      {
        name: "あまいミツ",
        countsByLevel: { 60: 4 }
      }
    ],

    baseHelpTime: 3700,
    ingRate: 0.163,
    skillRate: 0.035,
    maxHold: 20,

    berryIndex: 2.10,
    ingIndex: 0.77,
    skillIndicator: 1.68,

    evolutionChain: [
      {
        dexNo: 393,
        formId: "normal",
        evolveTo: [
          {
            targetDexNo: 394,
            targetFormId: "normal",
            conditions: [
              { type: "level", value: 12 },
              { type: "candy", value: 40 }
            ]
          }
        ]
      },
      {
        dexNo: 394,
        formId: "normal",
        evolveTo: [
          {
            targetDexNo: 395,
            targetFormId: "normal",
            conditions: [
              { type: "level", value: 27 },
              { type: "candy", value: 80 }
            ]
          }
        ]
      },
      {
        dexNo: 395,
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
          3: [{ type: "マスター", rank: 4 }],
          4: [{ type: "ハイパー", rank: 4 }]
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
          1: [{ type: "ノーマル", rank: 5 }],
          2: [{ type: "スーパー", rank: 5 }],
          3: [{ type: "ハイパー", rank: 5 }],
          4: [{ type: "マスター", rank: 2 }]
        }
      }
    ]
  },

  {
    dexNo: 395,
    formId: "normal",
    name: "エンペルト",

    imageCard: getImagePath("card", 395, "normal"),
    imageDetail: getImagePath("panel", 395, "normal"),

    type: ["はがね"],
    tokui: "きのみ",

    sleepType: "ぐっすり",

    mainSkill: "おてつだいサポートS",

    ingredients: [
      {
        name: "とくせんエッグ",
        countsByLevel: { 1: 1, 30: 2, 60: 4 }
      },
      {
        name: "ふといながねぎ",
        countsByLevel: { 30: 1, 60: 2 }
      },
      {
        name: "あまいミツ",
        countsByLevel: { 60: 4 }
      }
    ],

    baseHelpTime: 3200,
    ingRate: 0.168,
    skillRate: 0.038,
    maxHold: 28,

    berryIndex: 2.57,
    ingIndex: 0.97,
    skillIndicator: 2.21,

    evolutionChain: [
      {
        dexNo: 393,
        formId: "normal",
        evolveTo: [
          {
            targetDexNo: 394,
            targetFormId: "normal",
            conditions: [
              { type: "level", value: 12 },
              { type: "candy", value: 40 }
            ]
          }
        ]
      },
      {
        dexNo: 394,
        formId: "normal",
        evolveTo: [
          {
            targetDexNo: 395,
            targetFormId: "normal",
            conditions: [
              { type: "level", value: 27 },
              { type: "candy", value: 80 }
            ]
          }
        ]
      },
      {
        dexNo: 395,
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
          1: [{ type: "ハイパー", rank: 2 }],
          2: [{ type: "マスター", rank: 1 }],
          3: [{ type: "マスター", rank: 10 }],
          4: [{ type: "マスター", rank: 11 }]
        }
      }
    ]
  },

  {
    dexNo: 403,
    formId: "normal",
    name: "コリンク",

    imageCard: getImagePath("card", 403, "normal"),
    imageDetail: getImagePath("panel", 403, "normal"),

    type: ["でんき"],
    tokui: "食材",

    sleepType: "すやすや",

    mainSkill: "料理パワーアップS",

    ingredients: [
      {
        name: "あんみんトマト",
        countsByLevel: { 1: 2, 30: 5, 60: 7 }
      },
      {
        name: "ピュアなオイル",
        countsByLevel: { 30: 4, 60: 7 }
      },
      {
        name: "めざましコーヒー",
        countsByLevel: { 60: 5 }
      }
    ],

    baseHelpTime: 4400,
    ingRate: 0.181,
    skillRate: 0.018,
    maxHold: 11,

    berryIndex: 0.93,
    ingIndex: 1.52,
    skillIndicator: 0.70,

    evolutionChain: [
      {
        dexNo: 403,
        formId: "normal",
        evolveTo: [
          {
            targetDexNo: 404,
            targetFormId: "normal",
            conditions: [
              { type: "level", value: 11 },
              { type: "candy", value: 40 }
            ]
          }
        ]
      },
      {
        dexNo: 404,
        formId: "normal",
        evolveTo: [
          {
            targetDexNo: 405,
            targetFormId: "normal",
            conditions: [
              { type: "level", value: 23 },
              { type: "candy", value: 80 }
            ]
          }
        ]
      },
      {
        dexNo: 405,
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
      }
    ]
  },

  {
    dexNo: 404,
    formId: "normal",
    name: "ルクシオ",

    imageCard: getImagePath("card", 404, "normal"),
    imageDetail: getImagePath("panel", 404, "normal"),

    type: ["でんき"],
    tokui: "食材",

    sleepType: "すやすや",

    mainSkill: "料理パワーアップS",

    ingredients: [
      {
        name: "あんみんトマト",
        countsByLevel: { 1: 2, 30: 5, 60: 7 }
      },
      {
        name: "ピュアなオイル",
        countsByLevel: { 30: 4, 60: 7 }
      },
      {
        name: "めざましコーヒー",
        countsByLevel: { 60: 5 }
      }
    ],

    baseHelpTime: 3200,
    ingRate: 0.182,
    skillRate: 0.018,
    maxHold: 21,

    berryIndex: 1.28,
    ingIndex: 2.25,
    skillIndicator: 1.03,

    evolutionChain: [
      {
        dexNo: 403,
        formId: "normal",
        evolveTo: [
          {
            targetDexNo: 404,
            targetFormId: "normal",
            conditions: [
              { type: "level", value: 11 },
              { type: "candy", value: 40 }
            ]
          }
        ]
      },
      {
        dexNo: 404,
        formId: "normal",
        evolveTo: [
          {
            targetDexNo: 405,
            targetFormId: "normal",
            conditions: [
              { type: "level", value: 23 },
              { type: "candy", value: 80 }
            ]
          }
        ]
      },
      {
        dexNo: 405,
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
      }
    ]
  },

  {
    dexNo: 405,
    formId: "normal",
    name: "レントラー",

    imageCard: getImagePath("card", 405, "normal"),
    imageDetail: getImagePath("panel", 405, "normal"),

    type: ["でんき"],
    tokui: "食材",

    sleepType: "すやすや",

    mainSkill: "料理パワーアップS",

    ingredients: [
      {
        name: "あんみんトマト",
        countsByLevel: { 1: 2, 30: 5, 60: 7 }
      },
      {
        name: "ピュアなオイル",
        countsByLevel: { 30: 4, 60: 7 }
      },
      {
        name: "めざましコーヒー",
        countsByLevel: { 60: 5 }
      }
    ],

    baseHelpTime: 2400,
    ingRate: 0.200,
    skillRate: 0.023,
    maxHold: 31,

    berryIndex: 1.67,
    ingIndex: 3.51,
    skillIndicator: 1.78,

    evolutionChain: [
      {
        dexNo: 403,
        formId: "normal",
        evolveTo: [
          {
            targetDexNo: 404,
            targetFormId: "normal",
            conditions: [
              { type: "level", value: 11 },
              { type: "candy", value: 40 }
            ]
          }
        ]
      },
      {
        dexNo: 404,
        formId: "normal",
        evolveTo: [
          {
            targetDexNo: 405,
            targetFormId: "normal",
            conditions: [
              { type: "level", value: 23 },
              { type: "candy", value: 80 }
            ]
          }
        ]
      },
      {
        dexNo: 405,
        formId: "normal",
        evolveTo: null
      }
    ],

    fields: [
      {
        name: "ゴールド旧発電所",
        stars: {
          1: [{ type: "マスター", rank: 1 }],
          2: [{ type: "マスター", rank: 5 }],
          3: [{ type: "マスター", rank: 11 }],
          4: [{ type: "マスター", rank: 6 }]
        }
      }
    ]
  },

  {
    dexNo: 425,
    formId: "normal",
    name: "フワンテ",

    imageCard: getImagePath("card", 425, "normal"),
    imageDetail: getImagePath("panel", 425, "normal"),

    type: ["ゴースト"],
    tokui: "スキル",

    sleepType: "うとうと",

    mainSkill: "たくわえる(エナジーチャージS)",

    ingredients: [
      {
        name: "ワカクサコーン",
        countsByLevel: { 1: 1, 30: 2, 60: 4 }
      },
      {
        name: "ピュアなオイル",
        countsByLevel: { 30: 3, 60: 4 }
      },
      {
        name: "ほっこりポテト",
        countsByLevel: { 60: 4 }
      }
    ],

    baseHelpTime: 4800,
    ingRate: 0.137,
    skillRate: 0.071,
    maxHold: 9,

    berryIndex: 0.93,
    ingIndex: 0.61,
    skillIndicator: 2.61,

    evolutionChain: [
      {
        dexNo: 425,
        formId: "normal",
        evolveTo: [
          {
            targetDexNo: 426,
            targetFormId: "normal",
            conditions: [
              { type: "level", value: 21 },
              { type: "candy", value: 40 }
            ]
          }
        ]
      },
      {
        dexNo: 426,
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
          3: null
        }
      },
      {
        name: "ゴールド旧発電所",
        stars: {
          1: [{ type: "ノーマル", rank: 1 }],
          2: [{ type: "ノーマル", rank: 5 }],
          3: [{ type: "ハイパー", rank: 1 }]
        }
      },
      {
        name: "ワカクサ本島EX",
        stars: {
          1: [{ type: "ノーマル", rank: 5 }],
          2: [{ type: "スーパー", rank: 3 }],
          3: [{ type: "ハイパー", rank: 5 }]
        }
      }
    ]
  },

  {
    dexNo: 426,
    formId: "normal",
    name: "フワライド",

    imageCard: getImagePath("card", 426, "normal"),
    imageDetail: getImagePath("panel", 426, "normal"),

    type: ["ゴースト"],
    tokui: "スキル",

    sleepType: "うとうと",

    mainSkill: "たくわえる(エナジーチャージS)",

    ingredients: [
      {
        name: "ワカクサコーン",
        countsByLevel: { 1: 1, 30: 2, 60: 4 }
      },
      {
        name: "ピュアなオイル",
        countsByLevel: { 30: 3, 60: 4 }
      },
      {
        name: "ほっこりポテト",
        countsByLevel: { 60: 4 }
      }
    ],

    baseHelpTime: 2500,
    ingRate: 0.128,
    skillRate: 0.063,
    maxHold: 22,

    berryIndex: 1.81,
    ingIndex: 1.13,
    skillIndicator: 4.70,

    evolutionChain: [
      {
        dexNo: 425,
        formId: "normal",
        evolveTo: [
          {
            targetDexNo: 426,
            targetFormId: "normal",
            conditions: [
              { type: "level", value: 21 },
              { type: "candy", value: 40 }
            ]
          }
        ]
      },
      {
        dexNo: 426,
        formId: "normal",
        evolveTo: null
      }
    ],

    fields: [
      {
        name: "ゴールド旧発電所",
        stars: {
          1: [{ type: "ハイパー", rank: 2 }],
          2: [{ type: "マスター", rank: 1 }],
          3: [{ type: "マスター", rank: 7 }]
        }
      },
      {
        name: "ワカクサ本島EX",
        stars: {
          1: [{ type: "マスター", rank: 1 }],
          2: [{ type: "マスター", rank: 2 }],
          3: [{ type: "マスター", rank: 9 }]
        }
      }
    ]
  },

  {
    dexNo: 430,
    formId: "normal",
    name: "ドンカラス",

    imageCard: getImagePath("card", 430, "normal"),
    imageDetail: getImagePath("panel", 430, "normal"),

    type: ["あく"],
    tokui: "スキル",

    sleepType: "うとうと",

    mainSkill: "きょううん(食材セレクトS)",

    ingredients: [
      {
        name: "めざましコーヒー",
        countsByLevel: { 1: 1, 30: 2, 60: 4 }
      },
      {
        name: "ワカクサ大豆",
        countsByLevel: { 30: 3, 60: 6 }
      },
      {
        name: "げきからハーブ",
        countsByLevel: { 60: 4 }
      }
    ],

    baseHelpTime: 3200,
    ingRate: 0.143,
    skillRate: 0.067,
    maxHold: 23,

    berryIndex: 1.66,
    ingIndex: 1.16,
    skillIndicator: 4.17,

    evolutionChain: [
      {
        dexNo: 198,
        formId: "normal",
        evolveTo: [
          {
            targetDexNo: 430,
            targetFormId: "normal",
            conditions: [
              { type: "item", value: "やみのいし" },
              { type: "candy", value: 80 }
            ]
          }
        ]
      },
      {
        dexNo: 430,
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
        name: "ウノハナ雪原",
        stars: {
          1: [{ type: "マスター", rank: 2 }],
          2: [{ type: "マスター", rank: 6 }],
          3: [{ type: "マスター", rank: 12 }],
          4: [{ type: "マスター", rank: 7 }]
        }
      },
      {
        name: "ゴールド旧発電所",
        stars: {
          1: [{ type: "ハイパー", rank: 5 }],
          2: [{ type: "マスター", rank: 4 }],
          3: [{ type: "マスター", rank: 10 }],
          4: [{ type: "マスター", rank: 5 }]
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
    dexNo: 438,
    formId: "normal",
    name: "ウソハチ",

    imageCard: getImagePath("card", 438, "normal"),
    imageDetail: getImagePath("panel", 438, "normal"),

    type: ["いわ"],
    tokui: "スキル",

    sleepType: "ぐっすり",

    mainSkill: "エナジーチャージM",

    ingredients: [
      {
        name: "あんみんトマト",
        countsByLevel: { 1: 1, 30: 2, 60: 4 }
      },
      {
        name: "ワカクサ大豆",
        countsByLevel: { 30: 2, 60: 4 }
      },
      {
        name: "あじわいキノコ",
        countsByLevel: { 60: 2 }
      }
    ],

    baseHelpTime: 6300,
    ingRate: 0.189,
    skillRate: 0.061,
    maxHold: 8,

    berryIndex: 0.77,
    ingIndex: 0.56,
    skillIndicator: 1.76,

    evolutionChain: [
      {
        dexNo: 438,
        formId: "normal",
        evolveTo: [
          {
            targetDexNo: 185,
            targetFormId: "normal",
            conditions: [
              { type: "level", value: 12 },
              { type: "candy", value: 20 }
            ]
          }
        ]
      },
      {
        dexNo: 185,
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
        name: "シアンの砂浜",
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
          2: [{ type: "ノーマル", rank: 1 }],
          3: [{ type: "スーパー", rank: 1 }],
          4: [{ type: "スーパー", rank: 2 }]
        }
      }
    ]
  },

  {
    dexNo: 439,
    formId: "normal",
    name: "マネネ",

    imageCard: getImagePath("card", 439, "normal"),
    imageDetail: getImagePath("panel", 439, "normal"),

    type: ["エスパー"],
    tokui: "食材",

    sleepType: "ぐっすり",

    mainSkill: "ものまね(スキルコピー)",

    ingredients: [
      {
        name: "あんみんトマト",
        countsByLevel: { 1: 2, 30: 5, 60: 7 }
      },
      {
        name: "ほっこりポテト",
        countsByLevel: { 30: 4, 60: 6 }
      },
      {
        name: "ふといながねぎ",
        countsByLevel: { 60: 4 }
      }
    ],

    baseHelpTime: 4300,
    ingRate: 0.201,
    skillRate: 0.032,
    maxHold: 10,

    berryIndex: 0.97,
    ingIndex: 1.74,
    skillIndicator: 1.25,

    evolutionChain: [
      {
        dexNo: 439,
        formId: "normal",
        evolveTo: [
          {
            targetDexNo: 122,
            targetFormId: "normal",
            conditions: [
              { type: "level", value: 12 },
              { type: "candy", value: 40 }
            ]
          }
        ]
      },
      {
        dexNo: 122,
        formId: "normal",
        evolveTo: null
      }
    ],

    fields: [
      {
        name: "シアンの砂浜",
        stars: {
          1: [{ type: "ノーマル", rank: 1 }],
          2: [{ type: "ノーマル", rank: 3 }],
          3: [{ type: "スーパー", rank: 4 }],
          4: [{ type: "ハイパー", rank: 1 }]
        }
      }
    ]
  },

  {
    dexNo: 440,
    formId: "normal",
    name: "ピンプク",

    imageCard: getImagePath("card", 440, "normal"),
    imageDetail: getImagePath("panel", 440, "normal"),

    type: ["ノーマル"],
    tokui: "食材",

    sleepType: "ぐっすり",

    mainSkill: "げんきオールS",

    ingredients: [
      {
        name: "とくせんエッグ",
        countsByLevel: { 1: 2, 30: 5, 60: 7 }
      },
      {
        name: "ほっこりポテト",
        countsByLevel: { 30: 4, 60: 7 }
      },
      {
        name: "あまいミツ",
        countsByLevel: { 60: 8 }
      }
    ],

    baseHelpTime: 5400,
    ingRate: 0.210,
    skillRate: 0.013,
    maxHold: 7,

    berryIndex: 0.82,
    ingIndex: 1.52,
    skillIndicator: 0.39,

    evolutionChain: [
      {
        dexNo: 440,
        formId: "normal",
        evolveTo: [
          {
            targetDexNo: 113,
            targetFormId: "normal",
            conditions: [
              { type: "item", value: "まんまるいし" },
              { type: "time", value: "day" },
              { type: "candy", value: 40 }
            ]
          }
        ]
      },
      {
        dexNo: 113,
        formId: "normal",
        evolveTo: [
          {
            targetDexNo: 242,
            targetFormId: "normal",
            conditions: [
              { type: "sleep", value: 150 },
              { type: "candy", value: 80 }
            ]
          }
        ]
      },
      {
        dexNo: 242,
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
        name: "ウノハナ雪原",
        stars: {
          1: [{ type: "ノーマル", rank: 1 }],
          2: [{ type: "ノーマル", rank: 5 }],
          3: [{ type: "ハイパー", rank: 1 }],
          4: [{ type: "スーパー", rank: 1 }]
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
    dexNo: 442,
    formId: "normal",
    name: "ミカルゲ",

    imageCard: getImagePath("card", 442, "normal"),
    imageDetail: getImagePath("panel", 442, "normal"),

    type: ["あく"],
    tokui: "食材",

    sleepType: "うとうと",

    mainSkill: "おてつだいサポートS",

    ingredients: [
      {
        name: "あじわいキノコ",
        countsByLevel: { 1: 2, 30: 5, 60: 7 }
      },
      {
        name: "ずっしりカボチャ",
        countsByLevel: { 30: 3, 60: 5 }
      },
      {
        name: "ふといながねぎ",
        countsByLevel: { 60: 6 }
      }
    ],

    baseHelpTime: 3500,
    ingRate: 0.198,
    skillRate: 0.036,
    maxHold: 27,

    berryIndex: 1.42,
    ingIndex: 3.85,
    skillIndicator: 2.06,

    evolutionChain: [
      {
        dexNo: 442,
        formId: "normal",
        evolveTo: null
      }
    ],

    fields: [
      {
        name: "ワカクサ本島",
        stars: {
          1: [{ type: "マスター", rank: 4 }],
          2: [{ type: "マスター", rank: 8 }],
          3: null,
          4: [{ type: "マスター", rank: 9 }]
        }
      },
      {
        name: "ウノハナ雪原",
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
          1: [{ type: "ハイパー", rank: 1 }],
          2: [{ type: "ハイパー", rank: 5 }],
          3: [{ type: "マスター", rank: 6 }],
          4: [{ type: "マスター", rank: 1 }]
        }
      },
      {
        name: "ワカクサ本島EX",
        stars: {
          1: [{ type: "スーパー", rank: 3 }],
          2: [{ type: "ハイパー", rank: 4 }],
          3: [{ type: "マスター", rank: 9 }],
          4: [{ type: "マスター", rank: 10 }]
        }
      }
    ]
  },

  {
    dexNo: 447,
    formId: "normal",
    name: "リオル",

    imageCard: getImagePath("card", 447, "normal"),
    imageDetail: getImagePath("panel", 447, "normal"),

    type: ["かくとう"],
    tokui: "スキル",

    sleepType: "ぐっすり",

    mainSkill: "ゆめのかけらゲットS",

    ingredients: [
      {
        name: "ピュアなオイル",
        countsByLevel: { 1: 1, 30: 2, 60: 4 }
      },
      {
        name: "ほっこりポテト",
        countsByLevel: { 30: 2, 60: 4 }
      },
      {
        name: "とくせんエッグ",
        countsByLevel: { 60: 4 }
      }
    ],

    baseHelpTime: 4200,
    ingRate: 0.126,
    skillRate: 0.038,
    maxHold: 9,

    berryIndex: 1.12,
    ingIndex: 0.52,
    skillIndicator: 1.56,

    evolutionChain: [
      {
        dexNo: 447,
        formId: "normal",
        evolveTo: [
          {
            targetDexNo: 448,
            targetFormId: "normal",
            conditions: [
              { type: "time", value: "day" },
              { type: "sleep", value: 150 },
              { type: "candy", value: 80 }
            ]
          }
        ]
      },
      {
        dexNo: 448,
        formId: "normal",
        evolveTo: null
      }
    ],

    fields: [
      {
        name: "ワカクサ本島",
        stars: {
          1: [{ type: "ノーマル", rank: 3 }],
          2: [{ type: "スーパー", rank: 2 }],
          3: null,
          4: [{ type: "スーパー", rank: 3 }]
        }
      },
      {
        name: "トープ洞窟",
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
          2: [{ type: "ノーマル", rank: 2 }],
          3: [{ type: "スーパー", rank: 3 }],
          4: [{ type: "スーパー", rank: 1 }]
        }
      }
    ]
  },

  {
    dexNo: 448,
    formId: "normal",
    name: "ルカリオ",

    imageCard: getImagePath("card", 448, "normal"),
    imageDetail: getImagePath("panel", 448, "normal"),

    type: ["かくとう"],
    tokui: "スキル",

    sleepType: "ぐっすり",

    mainSkill: "ゆめのかけらゲットS",

    ingredients: [
      {
        name: "ピュアなオイル",
        countsByLevel: { 1: 1, 30: 2, 60: 4 }
      },
      {
        name: "ほっこりポテト",
        countsByLevel: { 30: 2, 60: 4 }
      },
      {
        name: "とくせんエッグ",
        countsByLevel: { 60: 4 }
      }
    ],

    baseHelpTime: 2600,
    ingRate: 0.150,
    skillRate: 0.051,
    maxHold: 19,

    berryIndex: 1.77,
    ingIndex: 1.15,
    skillIndicator: 3.57,

    evolutionChain: [
      {
        dexNo: 447,
        formId: "normal",
        evolveTo: [
          {
            targetDexNo: 448,
            targetFormId: "normal",
            conditions: [
              { type: "time", value: "day" },
              { type: "sleep", value: 150 },
              { type: "candy", value: 80 }
            ]
          }
        ]
      },
      {
        dexNo: 448,
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
      }
    ]
  },

  {
    dexNo: 453,
    formId: "normal",
    name: "グレッグル",

    imageCard: getImagePath("card", 453, "normal"),
    imageDetail: getImagePath("panel", 453, "normal"),

    type: ["どく"],
    tokui: "食材",

    sleepType: "うとうと",

    mainSkill: "エナジーチャージS",

    ingredients: [
      {
        name: "ピュアなオイル",
        countsByLevel: { 1: 2, 30: 5, 60: 7 }
      },
      {
        name: "マメミート",
        countsByLevel: { 30: 5, 60: 8 }
      }
    ],

    baseHelpTime: 5600,
    ingRate: 0.228,
    skillRate: 0.042,
    maxHold: 10,

    berryIndex: 0.88,
    ingIndex: 1.79,
    skillIndicator: 1.28,

    evolutionChain: [
      {
        dexNo: 453,
        formId: "normal",
        evolveTo: [
          {
            targetDexNo: 454,
            targetFormId: "normal",
            conditions: [
              { type: "level", value: 28 },
              { type: "candy", value: 40 }
            ]
          }
        ]
      },
      {
        dexNo: 454,
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
        name: "シアンの砂浜",
        stars: {
          1: [{ type: "ノーマル", rank: 1 }],
          2: [{ type: "ノーマル", rank: 2 }],
          3: [{ type: "スーパー", rank: 3 }],
          4: [{ type: "スーパー", rank: 1 }]
        }
      }
    ]
  },

  {
    dexNo: 454,
    formId: "normal",
    name: "ドクロッグ",

    imageCard: getImagePath("card", 454, "normal"),
    imageDetail: getImagePath("panel", 454, "normal"),

    type: ["どく"],
    tokui: "食材",

    sleepType: "うとうと",

    mainSkill: "エナジーチャージS",

    ingredients: [
      {
        name: "ピュアなオイル",
        countsByLevel: { 1: 2, 30: 5, 60: 7 }
      },
      {
        name: "マメミート",
        countsByLevel: { 30: 5, 60: 8 }
      }
    ],

    baseHelpTime: 3400,
    ingRate: 0.229,
    skillRate: 0.043,
    maxHold: 19,

    berryIndex: 1.45,
    ingIndex: 3.04,
    skillIndicator: 2.21,

    evolutionChain: [
      {
        dexNo: 453,
        formId: "normal",
        evolveTo: [
          {
            targetDexNo: 454,
            targetFormId: "normal",
            conditions: [
              { type: "level", value: 28 },
              { type: "candy", value: 40 }
            ]
          }
        ]
      },
      {
        dexNo: 454,
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
        name: "シアンの砂浜",
        stars: {
          1: [{ type: "ノーマル", rank: 4 }],
          2: [{ type: "スーパー", rank: 3 }],
          3: [{ type: "ハイパー", rank: 4 }],
          4: [{ type: "スーパー", rank: 4 }]
        }
      }
    ]
  },

  {
    dexNo: 459,
    formId: "normal",
    name: "ユキカブリ",

    imageCard: getImagePath("card", 459, "normal"),
    imageDetail: getImagePath("panel", 459, "normal"),

    type: ["こおり"],
    tokui: "食材",

    sleepType: "ぐっすり",

    mainSkill: "エナジーチャージS(ランダム)",

    ingredients: [
      {
        name: "あんみんトマト",
        countsByLevel: { 1: 2, 30: 5, 60: 7 }
      },
      {
        name: "とくせんエッグ",
        countsByLevel: { 30: 4, 60: 7 }
      },
      {
        name: "あじわいキノコ",
        countsByLevel: { 60: 5 }
      }
    ],

    baseHelpTime: 5600,
    ingRate: 0.251,
    skillRate: 0.044,
    maxHold: 10,

    berryIndex: 0.86,
    ingIndex: 1.94,
    skillIndicator: 1.35,

    evolutionChain: [
      {
        dexNo: 459,
        formId: "normal",
        evolveTo: [
          {
            targetDexNo: 460,
            targetFormId: "normal",
            conditions: [
              { type: "level", value: 30 },
              { type: "candy", value: 40 }
            ]
          }
        ]
      },
      {
        dexNo: 460,
        formId: "normal",
        evolveTo: null
      }
    ],

    fields: [
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
          2: [{ type: "ノーマル", rank: 5 }],
          3: [{ type: "スーパー", rank: 2 }],
          4: [{ type: "スーパー", rank: 3 }]
        }
      }
    ]
  },

  {
    dexNo: 460,
    formId: "normal",
    name: "ユキノオー",

    imageCard: getImagePath("card", 460, "normal"),
    imageDetail: getImagePath("panel", 460, "normal"),

    type: ["こおり"],
    tokui: "食材",

    sleepType: "ぐっすり",

    mainSkill: "エナジーチャージS(ランダム)",

    ingredients: [
      {
        name: "あんみんトマト",
        countsByLevel: { 1: 2, 30: 5, 60: 7 }
      },
      {
        name: "とくせんエッグ",
        countsByLevel: { 30: 4, 60: 7 }
      },
      {
        name: "あじわいキノコ",
        countsByLevel: { 60: 5 }
      }
    ],

    baseHelpTime: 3000,
    ingRate: 0.250,
    skillRate: 0.044,
    maxHold: 26,

    berryIndex: 1.60,
    ingIndex: 3.86,
    skillIndicator: 2.70,

    evolutionChain: [
      {
        dexNo: 459,
        formId: "normal",
        evolveTo: [
          {
            targetDexNo: 460,
            targetFormId: "normal",
            conditions: [
              { type: "level", value: 30 },
              { type: "candy", value: 40 }
            ]
          }
        ]
      },
      {
        dexNo: 460,
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
          3: [{ type: "マスター", rank: 7 }]
        }
      },
      {
        name: "ワカクサ本島EX",
        stars: {
          1: [{ type: "スーパー", rank: 2 }],
          2: [{ type: "スーパー", rank: 4 }],
          3: [{ type: "ハイパー", rank: 3 }]
        }
      }
    ]
  },

  {
    dexNo: 461,
    formId: "normal",
    name: "マニューラ",

    imageCard: getImagePath("card", 461, "normal"),
    imageDetail: getImagePath("panel", 461, "normal"),

    type: ["あく"],
    tokui: "きのみ",

    sleepType: "うとうと",

    mainSkill: "料理チャンスS",

    ingredients: [
      {
        name: "マメミート",
        countsByLevel: { 1: 1, 30: 2, 60: 4 }
      },
      {
        name: "とくせんエッグ",
        countsByLevel: { 30: 2, 60: 3 }
      },
      {
        name: "ワカクサ大豆",
        countsByLevel: { 60: 4 }
      }
    ],

    baseHelpTime: 2700,
    ingRate: 0.251,
    skillRate: 0.018,
    maxHold: 26,

    berryIndex: 2.58,
    ingIndex: 1.93,
    skillIndicator: 1.16,

    evolutionChain: [
      {
        dexNo: 215,
        formId: "normal",
        evolveTo: [
          {
            targetDexNo: 461,
            targetFormId: "normal",
            conditions: [
              { type: "item", value: "するどいツメ" },
              { type: "time", value: "night" },
              { type: "candy", value: 80 }
            ]
          }
        ]
      },
      {
        dexNo: 461,
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
          1: [{ type: "ハイパー", rank: 2 }],
          2: [{ type: "マスター", rank: 2 }],
          3: [{ type: "マスター", rank: 10 }],
          4: [{ type: "マスター", rank: 13 }]
        }
      }
    ]
  },

  {
    dexNo: 462,
    formId: "normal",
    name: "ジバコイル",

    imageCard: getImagePath("card", 462, "normal"),
    imageDetail: getImagePath("panel", 462, "normal"),

    type: ["はがね"],
    tokui: "スキル",

    sleepType: "ぐっすり",

    mainSkill: "料理パワーアップS",

    ingredients: [
      {
        name: "ピュアなオイル",
        countsByLevel: { 1: 1, 30: 2, 60: 4 }
      },
      {
        name: "げきからハーブ",
        countsByLevel: { 30: 2, 60: 3 }
      }
    ],

    baseHelpTime: 3100,
    ingRate: 0.179,
    skillRate: 0.062,
    maxHold: 23,

    berryIndex: 1.75,
    ingIndex: 1.30,
    skillIndicator: 4.00,

    evolutionChain: [
      {
        dexNo: 81,
        formId: "normal",
        evolveTo: [
          {
            targetDexNo: 82,
            targetFormId: "normal",
            conditions: [
              { type: "level", value: 23 },
              { type: "candy", value: 40 }
            ]
          }
        ]
      },
      {
        dexNo: 82,
        formId: "normal",
        evolveTo: [
          {
            targetDexNo: 462,
            targetFormId: "normal",
            conditions: [
              { type: "item", value: "かみなりのいし" },
              { type: "candy", value: 80 }
            ]
          }
        ]
      },
      {
        dexNo: 462,
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
          3: [{ type: "マスター", rank: 17 }]
        }
      },
      {
        name: "ゴールド旧発電所",
        stars: {
          1: [{ type: "ハイパー", rank: 5 }],
          2: [{ type: "マスター", rank: 4 }],
          3: [{ type: "マスター", rank: 10 }]
        }
      },
      {
        name: "ワカクサ本島EX",
        stars: {
          1: [{ type: "スーパー", rank: 4 }],
          2: [{ type: "ハイパー", rank: 2 }],
          3: [{ type: "マスター", rank: 1 }]
        }
      }
    ]
  },

  {
    dexNo: 468,
    formId: "normal",
    name: "トゲキッス",

    imageCard: getImagePath("card", 468, "normal"),
    imageDetail: getImagePath("panel", 468, "normal"),

    type: ["フェアリー"],
    tokui: "スキル",

    sleepType: "すやすや",

    mainSkill: "ゆびをふる",

    ingredients: [
      {
        name: "とくせんエッグ",
        countsByLevel: { 1: 1, 30: 2, 60: 4 }
      },
      {
        name: "あったかジンジャー",
        countsByLevel: { 30: 2, 60: 4 }
      },
      {
        name: "リラックスカカオ",
        countsByLevel: { 60: 3 }
      }
    ],

    baseHelpTime: 2600,
    ingRate: 0.158,
    skillRate: 0.053,
    maxHold: 26,

    berryIndex: 1.68,
    ingIndex: 1.25,
    skillIndicator: 4.02,

    evolutionChain: [
      {
        dexNo: 175,
        formId: "normal",
        evolveTo: [
          {
            targetDexNo: 176,
            targetFormId: "normal",
            conditions: [
              { type: "sleep", value: 50 },
              { type: "candy", value: 20 }
            ]
          }
        ]
      },
      {
        dexNo: 176,
        formId: "normal",
        evolveTo: [
          {
            targetDexNo: 468,
            targetFormId: "normal",
            conditions: [
              { type: "item", value: "ひかりのいし" },
              { type: "candy", value: 80 }
            ]
          }
        ]
      },
      {
        dexNo: 468,
        formId: "normal",
        evolveTo: null
      }
    ],

    fields: [
      {
        name: "ワカクサ本島",
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
    dexNo: 470,
    formId: "normal",
    name: "リーフィア",

    imageCard: getImagePath("card", 470, "normal"),
    imageDetail: getImagePath("panel", 470, "normal"),

    type: ["くさ"],
    tokui: "スキル",

    sleepType: "うとうと",

    mainSkill: "げんきエールS",

    ingredients: [
      {
        name: "モーモーミルク",
        countsByLevel: { 1: 1, 30: 2, 60: 4 }
      },
      {
        name: "リラックスカカオ",
        countsByLevel: { 30: 1, 60: 2 }
      },
      {
        name: "マメミート",
        countsByLevel: { 60: 3 }
      }
    ],

    baseHelpTime: 3000,
    ingRate: 0.205,
    skillRate: 0.069,
    maxHold: 18,

    berryIndex: 1.59,
    ingIndex: 1.15,
    skillIndicator: 4.30,

    evolutionChain: [
      {
        dexNo: 133,
        formId: "normal",
        evolveTo: [
          { targetDexNo: 134,
            targetFormId: "normal",
            conditions: [
              { type: "item", value: "みずのいし" },
              { type: "candy", value: 80 } ]
          },
          { targetDexNo: 135,
            targetFormId: "normal",
            conditions: [
              { type: "item", value: "かみなりのいし" },
              { type: "candy", value: 80 } ]
          },
          { targetDexNo: 136,
            targetFormId: "normal",
            conditions: [
              { type: "item", value: "ほのおのいし" },
              { type: "candy", value: 80 } ]
          },
          { targetDexNo: 196,
            targetFormId: "normal",
            conditions: [
              { type: "time", value: "day" },
              { type: "sleep", value: 150 },
              { type: "candy", value: 80 } ]
          },
          { targetDexNo: 197,
            targetFormId: "normal",
            conditions: [
              { type: "time", value: "night" },
              { type: "sleep", value: 150 },
              { type: "candy", value: 80 } ]
          },
          { targetDexNo: 470,
            targetFormId: "normal",
            conditions: [
              { type: "item", value: "リーフのいし" },
              { type: "candy", value: 80 } ]
          },
          { targetDexNo: 471,
            targetFormId: "normal",
            conditions: [
              { type: "item", value: "こおりのいし" },
              { type: "candy", value: 80 } ]
          },
          { targetDexNo: 700,
            targetFormId: "normal",
            conditions: [
              { type: "sleep", value: 150 },
              { type: "candy", value: 80 } ]
          }
        ]
      }
    ],

    fields: [
      {
        name: "ワカクサ本島",
        stars: {
          1: [{ type: "マスター", rank: 5 }],
          2: [{ type: "マスター", rank: 9 }],
          3: null,
          4: [{ type: "マスター", rank: 10 }]
        }
      },
      {
        name: "ラピスラズリ湖畔",
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
          1: [{ type: "スーパー", rank: 3 }],
          2: [{ type: "ハイパー", rank: 1 }],
          3: [{ type: "ハイパー", rank: 5 }],
          4: [{ type: "マスター", rank: 2 }]
        }
      }
    ]
  },

  {
    dexNo: 471,
    formId: "normal",
    name: "グレイシア",

    imageCard: getImagePath("card", 471, "normal"),
    imageDetail: getImagePath("panel", 471, "normal"),

    type: ["こおり"],
    tokui: "スキル",

    sleepType: "ぐっすり",

    mainSkill: "料理パワーアップS",

    ingredients: [
      {
        name: "モーモーミルク",
        countsByLevel: { 1: 1, 30: 2, 60: 4 }
      },
      {
        name: "リラックスカカオ",
        countsByLevel: { 30: 1, 60: 2 }
      },
      {
        name: "マメミート",
        countsByLevel: { 60: 3 }
      }
    ],

    baseHelpTime: 3200,
    ingRate: 0.219,
    skillRate: 0.063,
    maxHold: 17,

    berryIndex: 1.56,
    ingIndex: 1.19,
    skillIndicator: 3.68,

    evolutionChain: [
      {
        dexNo: 133,
        formId: "normal",
        evolveTo: [
          { targetDexNo: 134,
            targetFormId: "normal",
            conditions: [
              { type: "item", value: "みずのいし" },
              { type: "candy", value: 80 } ]
          },
          { targetDexNo: 135,
            targetFormId: "normal",
            conditions: [
              { type: "item", value: "かみなりのいし" },
              { type: "candy", value: 80 } ]
          },
          { targetDexNo: 136,
            targetFormId: "normal",
            conditions: [
              { type: "item", value: "ほのおのいし" },
              { type: "candy", value: 80 } ]
          },
          { targetDexNo: 196,
            targetFormId: "normal",
            conditions: [
              { type: "time", value: "day" },
              { type: "sleep", value: 150 },
              { type: "candy", value: 80 } ]
          },
          { targetDexNo: 197,
            targetFormId: "normal",
            conditions: [
              { type: "time", value: "night" },
              { type: "sleep", value: 150 },
              { type: "candy", value: 80 } ]
          },
          { targetDexNo: 470,
            targetFormId: "normal",
            conditions: [
              { type: "item", value: "リーフのいし" },
              { type: "candy", value: 80 } ]
          },
          { targetDexNo: 471,
            targetFormId: "normal",
            conditions: [
              { type: "item", value: "こおりのいし" },
              { type: "candy", value: 80 } ]
          },
          { targetDexNo: 700,
            targetFormId: "normal",
            conditions: [
              { type: "sleep", value: 150 },
              { type: "candy", value: 80 } ]
          }
        ]
      }
    ],

    fields: [
      {
        name: "ワカクサ本島",
        stars: {
          1: [{ type: "マスター", rank: 5 }],
          2: [{ type: "マスター", rank: 9 }],
          3: null,
          4: [{ type: "マスター", rank: 10 }]
        }
      },
      {
        name: "ウノハナ雪原",
        stars: {
          1: [{ type: "ハイパー", rank: 5 }],
          2: [{ type: "マスター", rank: 4 }],
          3: [{ type: "マスター", rank: 10 }],
          4: [{ type: "マスター", rank: 5 }]
        }
      },
      {
        name: "ワカクサ本島EX",
        stars: {
          1: [{ type: "スーパー", rank: 3 }],
          2: [{ type: "ハイパー", rank: 1 }],
          3: [{ type: "ハイパー", rank: 5 }],
          4: [{ type: "マスター", rank: 2 }]
        }
      }
    ]
  },

  {
    dexNo: 475,
    formId: "normal",
    name: "エルレイド",

    imageCard: getImagePath("card", 475, "normal"),
    imageDetail: getImagePath("panel", 475, "normal"),

    type: ["かくとう"],
    tokui: "スキル",

    sleepType: "ぐっすり",

    mainSkill: "おてつだいサポートS",

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
    ingRate: 0.147,
    skillRate: 0.054,
    maxHold: 29,

    berryIndex: 1.92,
    ingIndex: 0.93,
    skillIndicator: 4.59,

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
          2: [{ type: "ハイパー", rank: 5 }],
          3: [{ type: "マスター", rank: 6 }],
          4: [{ type: "マスター", rank: 8 }]
        }
      }
    ]
  },

  {
    dexNo: 488,
    formId: "normal",
    name: "クレセリア",

    imageCard: getImagePath("card", 488, "normal"),
    imageDetail: getImagePath("panel", 488, "normal"),

    type: ["エスパー"],
    tokui: "スキル",

    sleepType: "すやすや",

    mainSkill: "みかづきのいのり(げんきオールS)",

    ingredients: [
      {
        name: "あったかジンジャー",
        countsByLevel: { 1: 1, 30: 2, 60: 4 }
      },
      {
        name: "リラックスカカオ",
        countsByLevel: { 30: 2, 60: 3 }
      },
      {
        name: "あんみんトマト",
        countsByLevel: { 60: 4 }
      }
    ],

    baseHelpTime: 2300,
    ingRate: 0.239,
    skillRate: 0.041,
    maxHold: 22,

    berryIndex: 1.72,
    ingIndex: 2.51,
    skillIndicator: 3.20,

    evolutionChain: [
      {
        dexNo: 488,
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
          3: [{ type: "マスター", rank: 19 }]
        }
      },
      {
        name: "ウノハナ雪原",
        stars: {
          1: [{ type: "マスター", rank: 4 }],
          2: [{ type: "マスター", rank: 8 }],
          3: [{ type: "マスター", rank: 14 }]
        }
      },
      {
        name: "ラピスラズリ湖畔",
        stars: {
          1: [{ type: "マスター", rank: 3 }],
          2: [{ type: "マスター", rank: 7 }],
          3: [{ type: "マスター", rank: 13 }]
        }
      },
      {
        name: "ワカクサ本島EX",
        stars: {
          1: [{ type: "ハイパー", rank: 4 }],
          2: [{ type: "マスター", rank: 8 }],
          3: [{ type: "マスター", rank: 16 }]
        }
      }
    ]
  },

  {
    dexNo: 491,
    formId: "normal",
    name: "ダークライ",

    imageCard: getImagePath("card", 491, "normal"),
    imageDetail: getImagePath("panel", 491, "normal"),

    type: ["あく"],
    tokui: "オール",

    sleepType: "うとうと",

    mainSkill: "ナイトメア(エナジーチャージM)",

    ingredients: [
      {
        name: "とくせんリンゴ",
        countsByLevel: { 1: 2, 30: 5, 60: 7 }
      },
      {
        name: "げきからハーブ",
        countsByLevel: { 1: 2, 30: 3, 60: 5 }
      },
      {
        name: "マメミート",
        countsByLevel: { 1: 2, 30: 4, 60: 6 }
      },
      {
        name: "モーモーミルク",
        countsByLevel: { 1: 2, 30: 4, 60: 6 }
      },
      {
        name: "あまいミツ",
        countsByLevel: { 1: 2, 30: 4, 60: 6 }
      },
      {
        name: "ワカクサ大豆",
        countsByLevel: { 1: 2, 30: 4, 60: 6 }
      },
      {
        name: "ワカクサコーン",
        countsByLevel: { 1: 2, 30: 3, 60: 4 }
      },
      {
        name: "めざましコーヒー",
        countsByLevel: { 1: 2, 30: 3, 60: 4 }
      }
    ],

    baseHelpTime: 2900,
    ingRate: 0.192,
    skillRate: 0.023,
    maxHold: 28,

    berryIndex: 2.59,
    ingIndex: 2.12,
    skillIndicator: 1.39,

    evolutionChain: [
      {
        dexNo: 491,
        formId: "normal",
        evolveTo: null
      }
    ],

    fields: [
      {
        name: "すべて",
        stars: {
          1: [{ type: null, rank: null }],
          2: [{ type: null, rank: null }],
          3: [{ type: null, rank: null }]
        }
      }
    ]
  }

];
