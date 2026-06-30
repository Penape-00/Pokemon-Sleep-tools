const pokedexData_Paldea = [

  {
    dexNo: 906,
    formId: "normal",
    name: "ニャオハ",

    imageCard: getImagePath("card", 906, "normal"),
    imageDetail: getImagePath("panel", 906, "normal"),

    type: ["くさ"],
    tokui: "食材",

    sleepType: "うとうと",

    mainSkill: "料理パワーアップS",

    ingredients: [
      {
        name: "ほっこりポテト",
        countsByLevel: { 1: 2, 30: 5, 60: 7 }
      },
      {
        name: "モーモーミルク",
        countsByLevel: { 30: 6, 60: 9 }
      },
      {
        name: "あったかジンジャー",
        countsByLevel: { 60: 8 }
      }
    ],

    baseHelpTime: 4600,
    ingRate: 0.208,
    skillRate: 0.023,
    maxHold: 10,

    berryIndex: 1.03,
    ingIndex: 2.24,
    skillIndicator: 0.432,

    evolutionChain: [
      {
        dexNo: 906,
        formId: "normal",
        evolveTo: [
          {
            targetDexNo: 907,
            targetFormId: "normal",
            conditions: [
              { type: "level", value: 12 },
              { type: "candy", value: 40 }
            ]
          }
        ]
      },
      {
        dexNo: 907,
        formId: "normal",
        evolveTo: [
          {
            targetDexNo: 908,
            targetFormId: "normal",
            conditions: [
              { type: "level", value: 27 },
              { type: "candy", value: 80 }
            ]
          }
        ]
      },
      {
        dexNo: 908,
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
          4: [{ type: "ハイパー", rank: 1 }]
        }
      },
      {
        name: "ゴールド旧発電所",
        stars: {
          1: [{ type: "ノーマル", rank: 1 }],
          2: [{ type: "ノーマル", rank: 3 }],
          3: [{ type: "スーパー", rank: 4 }],
          4: [{ type: "ハイパー", rank: 1 }]
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
    dexNo: 907,
    formId: "normal",
    name: "ニャローテ",

    imageCard: getImagePath("card", 907, "normal"),
    imageDetail: getImagePath("panel", 907, "normal"),

    type: ["くさ"],
    tokui: "食材",

    sleepType: "うとうと",

    mainSkill: "料理パワーアップS",

    ingredients: [
      {
        name: "ほっこりポテト",
        countsByLevel: { 1: 2, 30: 5, 60: 7 }
      },
      {
        name: "モーモーミルク",
        countsByLevel: { 30: 6, 60: 9 }
      },
      {
        name: "あったかジンジャー",
        countsByLevel: { 60: 8 }
      }
    ],

    baseHelpTime: 3500,
    ingRate: 0.209,
    skillRate: 0.023,
    maxHold: 19,

    berryIndex: 1.36,
    ingIndex: 2.96,
    skillIndicator: 0.568,

    evolutionChain: [
      {
        dexNo: 906,
        formId: "normal",
        evolveTo: [
          {
            targetDexNo: 907,
            targetFormId: "normal",
            conditions: [
              { type: "level", value: 12 },
              { type: "candy", value: 40 }
            ]
          }
        ]
      },
      {
        dexNo: 907,
        formId: "normal",
        evolveTo: [
          {
            targetDexNo: 908,
            targetFormId: "normal",
            conditions: [
              { type: "level", value: 27 },
              { type: "candy", value: 80 }
            ]
          }
        ]
      },
      {
        dexNo: 908,
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
          4: [{ type: "マスター", rank: 1 }]
        }
      },
      {
        name: "ゴールド旧発電所",
        stars: {
          1: [{ type: "ノーマル", rank: 5 }],
          2: [{ type: "スーパー", rank: 4 }],
          3: [{ type: "ハイパー", rank: 5 }],
          4: [{ type: "マスター", rank: 1 }]
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
    dexNo: 908,
    formId: "normal",
    name: "マスカーニャ",

    imageCard: getImagePath("card", 908, "normal"),
    imageDetail: getImagePath("panel", 908, "normal"),

    type: ["あく"],
    tokui: "食材",

    sleepType: "うとうと",

    mainSkill: "料理パワーアップS",

    ingredients: [
      {
        name: "ほっこりポテト",
        countsByLevel: { 1: 2, 30: 5, 60: 7 }
      },
      {
        name: "モーモーミルク",
        countsByLevel: { 30: 6, 60: 9 }
      },
      {
        name: "あったかジンジャー",
        countsByLevel: { 60: 8 }
      }
    ],

    baseHelpTime: 2600,
    ingRate: 0.190,
    skillRate: 0.022,
    maxHold: 28,

    berryIndex: 1.93,
    ingIndex: 3.62,
    skillIndicator: 0.731,

    evolutionChain: [
      {
        dexNo: 906,
        formId: "normal",
        evolveTo: [
          {
            targetDexNo: 907,
            targetFormId: "normal",
            conditions: [
              { type: "level", value: 12 },
              { type: "candy", value: 40 }
            ]
          }
        ]
      },
      {
        dexNo: 907,
        formId: "normal",
        evolveTo: [
          {
            targetDexNo: 908,
            targetFormId: "normal",
            conditions: [
              { type: "level", value: 27 },
              { type: "candy", value: 80 }
            ]
          }
        ]
      },
      {
        dexNo: 908,
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
          1: [{ type: "ハイパー", rank: 1 }],
          2: [{ type: "ハイパー", rank: 5 }],
          3: [{ type: "マスター", rank: 8 }],
          4: [{ type: "マスター", rank: 10 }]
        }
      }
    ]
  },

  {
    dexNo: 909,
    formId: "normal",
    name: "ホゲータ",

    imageCard: getImagePath("card", 909, "normal"),
    imageDetail: getImagePath("panel", 909, "normal"),

    type: ["ほのお"],
    tokui: "食材",

    sleepType: "すやすや",

    mainSkill: "げんきチャージS",

    ingredients: [
      {
        name: "とくせんリンゴ",
        countsByLevel: { 1: 2, 30: 5, 60: 7 }
      },
      {
        name: "マメミート",
        countsByLevel: { 30: 4, 60: 6 }
      },
      {
        name: "げきからハーブ",
        countsByLevel: { 60: 5 }
      }
    ],

    baseHelpTime: 4200,
    ingRate: 0.254,
    skillRate: 0.053,
    maxHold: 11,

    berryIndex: 0.94,
    ingIndex: 2.16,
    skillIndicator: 1.090,

    evolutionChain: [
      {
        dexNo: 909,
        formId: "normal",
        evolveTo: [
          {
            targetDexNo: 910,
            targetFormId: "normal",
            conditions: [
              { type: "level", value: 12 },
              { type: "candy", value: 40 }
            ]
          }
        ]
      },
      {
        dexNo: 910,
        formId: "normal",
        evolveTo: [
          {
            targetDexNo: 911,
            targetFormId: "normal",
            conditions: [
              { type: "level", value: 27 },
              { type: "candy", value: 80 }
            ]
          }
        ]
      },
      {
        dexNo: 911,
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
        name: "トープ洞窟",
        stars: {
          1: [{ type: "ノーマル", rank: 2 }],
          2: [{ type: "スーパー", rank: 1 }],
          3: [{ type: "ハイパー", rank: 2 }],
          4: [{ type: "ハイパー", rank: 1 }]
        }
      },
      {
        name: "ゴールド旧発電所",
        stars: {
          1: [{ type: "ノーマル", rank: 1 }],
          2: [{ type: "ノーマル", rank: 3 }],
          3: [{ type: "スーパー", rank: 4 }],
          4: [{ type: "ハイパー", rank: 1 }]
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
    dexNo: 910,
    formId: "normal",
    name: "アチゲータ",

    imageCard: getImagePath("card", 910, "normal"),
    imageDetail: getImagePath("panel", 910, "normal"),

    type: ["ほのお"],
    tokui: "食材",

    sleepType: "すやすや",

    mainSkill: "げんきチャージS",

    ingredients: [
      {
        name: "とくせんリンゴ",
        countsByLevel: { 1: 2, 30: 5, 60: 7 }
      },
      {
        name: "マメミート",
        countsByLevel: { 30: 4, 60: 6 }
      },
      {
        name: "げきからハーブ",
        countsByLevel: { 60: 5 }
      }
    ],

    baseHelpTime: 3100,
    ingRate: 0.247,
    skillRate: 0.050,
    maxHold: 21,

    berryIndex: 1.31,
    ingIndex: 2.84,
    skillIndicator: 1.394,

    evolutionChain: [
      {
        dexNo: 909,
        formId: "normal",
        evolveTo: [
          {
            targetDexNo: 910,
            targetFormId: "normal",
            conditions: [
              { type: "level", value: 12 },
              { type: "candy", value: 40 }
            ]
          }
        ]
      },
      {
        dexNo: 910,
        formId: "normal",
        evolveTo: [
          {
            targetDexNo: 911,
            targetFormId: "normal",
            conditions: [
              { type: "level", value: 27 },
              { type: "candy", value: 80 }
            ]
          }
        ]
      },
      {
        dexNo: 911,
        formId: "normal",
        evolveTo: null
      }
    ],

    fields: [
      {
        name: "シアンの砂浜",
        stars: {
          1: [{ type: "スーパー", rank: 4 }],
          2: [{ type: "ハイパー", rank: 3 }],
          3: [{ type: "マスター", rank: 4 }],
          4: [{ type: "マスター", rank: 1 }]
        }
      },
      {
        name: "トープ洞窟",
        stars: {
          1: [{ type: "スーパー", rank: 3 }],
          2: [{ type: "ハイパー", rank: 2 }],
          3: [{ type: "マスター", rank: 3 }],
          4: [{ type: "マスター", rank: 1 }]
        }
      },
      {
        name: "ゴールド旧発電所",
        stars: {
          1: [{ type: "ノーマル", rank: 5 }],
          2: [{ type: "スーパー", rank: 4 }],
          3: [{ type: "ハイパー", rank: 5 }],
          4: [{ type: "マスター", rank: 1 }]
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
    dexNo: 911,
    formId: "normal",
    name: "ラウドボーン",

    imageCard: getImagePath("card", 911, "normal"),
    imageDetail: getImagePath("panel", 911, "normal"),

    type: ["ゴースト"],
    tokui: "食材",

    sleepType: "うとうと",

    mainSkill: "げんきチャージS",

    ingredients: [
      {
        name: "とくせんリンゴ",
        countsByLevel: { 1: 2, 30: 5, 60: 7 }
      },
      {
        name: "マメミート",
        countsByLevel: { 30: 4, 60: 6 }
      },
      {
        name: "げきからハーブ",
        countsByLevel: { 60: 5 }
      }
    ],

    baseHelpTime: 2700,
    ingRate: 0.268,
    skillRate: 0.062,
    maxHold: 29,

    berryIndex: 1.41,
    ingIndex: 3.54,
    skillIndicator: 1.984,

    evolutionChain: [
      {
        dexNo: 909,
        formId: "normal",
        evolveTo: [
          {
            targetDexNo: 910,
            targetFormId: "normal",
            conditions: [
              { type: "level", value: 12 },
              { type: "candy", value: 40 }
            ]
          }
        ]
      },
      {
        dexNo: 910,
        formId: "normal",
        evolveTo: [
          {
            targetDexNo: 911,
            targetFormId: "normal",
            conditions: [
              { type: "level", value: 27 },
              { type: "candy", value: 80 }
            ]
          }
        ]
      },
      {
        dexNo: 911,
        formId: "normal",
        evolveTo: null
      }
    ],

    fields: [
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
        name: "トープ洞窟",
        stars: {
          1: [{ type: "マスター", rank: 3 }],
          2: [{ type: "マスター", rank: 7 }],
          3: [{ type: "マスター", rank: 13 }],
          4: [{ type: "マスター", rank: 8 }]
        }
      },
      {
        name: "ゴールド旧発電所",
        stars: {
          1: [{ type: "ハイパー", rank: 5 }],
          2: [{ type: "マスター", rank: 4 }],
          3: [{ type: "マスター", rank: 10 }],
          4: [{ type: "マスター", rank: 6 }]
        }
      },
      {
        name: "ワカクサ本島EX",
        stars: {
          1: [{ type: "ハイパー", rank: 1 }],
          2: [{ type: "ハイパー", rank: 5 }],
          3: [{ type: "マスター", rank: 8 }],
          4: [{ type: "マスター", rank: 10 }]
        }
      }
    ]
  },

  {
    dexNo: 912,
    formId: "normal",
    name: "クワッス",

    imageCard: getImagePath("card", 912, "normal"),
    imageDetail: getImagePath("panel", 912, "normal"),

    type: ["みず"],
    tokui: "食材",

    sleepType: "ぐっすり",

    mainSkill: "エナジーチャージM",

    ingredients: [
      {
        name: "ワカクサ大豆",
        countsByLevel: { 1: 2, 30: 5, 60: 7 }
      },
      {
        name: "ふといながねぎ",
        countsByLevel: { 30: 2, 60: 4 }
      },
      {
        name: "ピュアなオイル",
        countsByLevel: { 60: 6 }
      }
    ],

    baseHelpTime: 4800,
    ingRate: 0.261,
    skillRate: 0.028,
    maxHold: 10,

    berryIndex: 0.95,
    ingIndex: 2.09,
    skillIndicator: 0.504,

    evolutionChain: [
      {
        dexNo: 912,
        formId: "normal",
        evolveTo: [
          {
            targetDexNo: 913,
            targetFormId: "normal",
            conditions: [
              { type: "level", value: 12 },
              { type: "candy", value: 40 }
            ]
          }
        ]
      },
      {
        dexNo: 913,
        formId: "normal",
        evolveTo: [
          {
            targetDexNo: 914,
            targetFormId: "normal",
            conditions: [
              { type: "level", value: 27 },
              { type: "candy", value: 80 }
            ]
          }
        ]
      },
      {
        dexNo: 914,
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
        name: "ラピスラズリ湖畔",
        stars: {
          1: [{ type: "ノーマル", rank: 1 }],
          2: [{ type: "ノーマル", rank: 4 }],
          3: [{ type: "スーパー", rank: 5 }],
          4: [{ type: "ハイパー", rank: 1 }]
        }
      },
      {
        name: "ゴールド旧発電所",
        stars: {
          1: [{ type: "ノーマル", rank: 1 }],
          2: [{ type: "ノーマル", rank: 3 }],
          3: [{ type: "スーパー", rank: 4 }],
          4: [{ type: "ハイパー", rank: 1 }]
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
    dexNo: 913,
    formId: "normal",
    name: "ウェルカモ",

    imageCard: getImagePath("card", 913, "normal"),
    imageDetail: getImagePath("panel", 913, "normal"),

    type: ["みず"],
    tokui: "食材",

    sleepType: "ぐっすり",

    mainSkill: "エナジーチャージM",

    ingredients: [
      {
        name: "ワカクサ大豆",
        countsByLevel: { 1: 2, 30: 5, 60: 7 }
      },
      {
        name: "ふといながねぎ",
        countsByLevel: { 30: 2, 60: 4 }
      },
      {
        name: "ピュアなオイル",
        countsByLevel: { 60: 6 }
      }
    ],

    baseHelpTime: 3600,
    ingRate: 0.259,
    skillRate: 0.027,
    maxHold: 19,

    berryIndex: 1.28,
    ingIndex: 2.77,
    skillIndicator: 0.648,

    evolutionChain: [
      {
        dexNo: 912,
        formId: "normal",
        evolveTo: [
          {
            targetDexNo: 913,
            targetFormId: "normal",
            conditions: [
              { type: "level", value: 12 },
              { type: "candy", value: 40 }
            ]
          }
        ]
      },
      {
        dexNo: 913,
        formId: "normal",
        evolveTo: [
          {
            targetDexNo: 914,
            targetFormId: "normal",
            conditions: [
              { type: "level", value: 27 },
              { type: "candy", value: 80 }
            ]
          }
        ]
      },
      {
        dexNo: 914,
        formId: "normal",
        evolveTo: null
      }
    ],

    fields: [
      {
        name: "シアンの砂浜",
        stars: {
          1: [{ type: "スーパー", rank: 4 }],
          2: [{ type: "ハイパー", rank: 3 }],
          3: [{ type: "マスター", rank: 4 }],
          4: [{ type: "マスター", rank: 1 }]
        }
      },
      {
        name: "ラピスラズリ湖畔",
        stars: {
          1: [{ type: "スーパー", rank: 1 }],
          2: [{ type: "スーパー", rank: 5 }],
          3: [{ type: "マスター", rank: 1 }],
          4: [{ type: "マスター", rank: 1 }]
        }
      },
      {
        name: "ゴールド旧発電所",
        stars: {
          1: [{ type: "ノーマル", rank: 5 }],
          2: [{ type: "スーパー", rank: 4 }],
          3: [{ type: "ハイパー", rank: 5 }],
          4: [{ type: "マスター", rank: 1 }]
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
    dexNo: 914,
    formId: "normal",
    name: "ウェーニバル",

    imageCard: getImagePath("card", 914, "normal"),
    imageDetail: getImagePath("panel", 914, "normal"),

    type: ["かくとう"],
    tokui: "食材",

    sleepType: "ぐっすり",

    mainSkill: "エナジーチャージM",

    ingredients: [
      {
        name: "ワカクサ大豆",
        countsByLevel: { 1: 2, 30: 5, 60: 7 }
      },
      {
        name: "ふといながねぎ",
        countsByLevel: { 30: 2, 60: 4 }
      },
      {
        name: "ピュアなオイル",
        countsByLevel: { 60: 6 }
      }
    ],

    baseHelpTime: 2600,
    ingRate: 0.232,
    skillRate: 0.024,
    maxHold: 29,

    berryIndex: 1.60,
    ingIndex: 3.43,
    skillIndicator: 0.798,

    evolutionChain: [
      {
        dexNo: 912,
        formId: "normal",
        evolveTo: [
          {
            targetDexNo: 913,
            targetFormId: "normal",
            conditions: [
              { type: "level", value: 12 },
              { type: "candy", value: 40 }
            ]
          }
        ]
      },
      {
        dexNo: 913,
        formId: "normal",
        evolveTo: [
          {
            targetDexNo: 914,
            targetFormId: "normal",
            conditions: [
              { type: "level", value: 27 },
              { type: "candy", value: 80 }
            ]
          }
        ]
      },
      {
        dexNo: 914,
        formId: "normal",
        evolveTo: null
      }
    ],

    fields: [
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
        name: "ゴールド旧発電所",
        stars: {
          1: [{ type: "ハイパー", rank: 5 }],
          2: [{ type: "マスター", rank: 4 }],
          3: [{ type: "マスター", rank: 10 }],
          4: [{ type: "マスター", rank: 6 }]
        }
      },
      {
        name: "ワカクサ本島EX",
        stars: {
          1: [{ type: "ハイパー", rank: 1 }],
          2: [{ type: "ハイパー", rank: 5 }],
          3: [{ type: "マスター", rank: 8 }],
          4: [{ type: "マスター", rank: 10 }]
        }
      }
    ]
  },

  {
    dexNo: 980,
    formId: "normal",
    name: "ドオー",

    imageCard: getImagePath("card", 980, "normal"),
    imageDetail: getImagePath("panel", 980, "normal"),

    type: ["どく"],
    tokui: "食材",

    sleepType: "うとうと",

    mainSkill: "げんきチャージS",

    ingredients: [
      {
        name: "リラックスカカオ",
        countsByLevel: { 1: 2, 30: 5, 60: 7 }
      },
      {
        name: "めざましコーヒー",
        countsByLevel: { 30: 4, 60: 7 }
      },
      {
        name: "ほっこりポテト",
        countsByLevel: { 60: 9 }
      }
    ],

    baseHelpTime: 3500,
    ingRate: 0.208,
    skillRate: 0.055,
    maxHold: 25,

    berryIndex: 1.45,
    ingIndex: 3.50,
    skillIndicator: 1.358,

    evolutionChain: [
      {
        dexNo: 194,
        formId: "paldea",
        evolveTo: [
          {
            targetDexNo: 980,
            targetFormId: "normal",
            conditions: [
              { type: "level", value: 15 },
              { type: "candy", value: 40 }
            ]
          }
        ]
      },
      {
        dexNo: 980,
        formId: "normal",
        evolveTo: null
      }
    ],

    fields: [
      {
        name: "ワカクサ本島",
        stars: {
          1: [{ type: "マスター", rank: 2 }],
          2: [{ type: "マスター", rank: 6 }],
          3: null,
          4: [{ type: "マスター", rank: 7 }]
        }
      },
      {
        name: "トープ洞窟",
        stars: {
          1: [{ type: "ハイパー", rank: 3 }],
          2: [{ type: "マスター", rank: 2 }],
          3: [{ type: "マスター", rank: 8 }],
          4: [{ type: "マスター", rank: 3 }]
        }
      },
      {
        name: "ワカクサ本島EX",
        stars: {
          1: [{ type: "スーパー", rank: 3 }],
          2: [{ type: "ハイパー", rank: 1 }],
          3: [{ type: "マスター", rank: 3 }],
          4: [{ type: "マスター", rank: 4 }]
        }
      }
    ]
  }

];