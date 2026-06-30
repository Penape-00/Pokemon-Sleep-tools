const pokedexData_Alola = [

  {
    dexNo: 736,
    formId: "normal",
    name: "アゴジムシ",

    imageCard: getImagePath("card", 736, "normal"),
    imageDetail: getImagePath("panel", 736, "normal"),

    type: ["むし"],
    tokui: "食材",

    sleepType: "うとうと",

    mainSkill: "エナジーチャージS",

    ingredients: [
      {
        name: "めざましコーヒー",
        countsByLevel: { 1: 2, 30: 5, 60: 7 }
      },
      {
        name: "あじわいキノコ",
        countsByLevel: { 30: 4, 60: 7 }
      },
      {
        name: "あまいミツ",
        countsByLevel: { 60: 11 }
      }
    ],

    baseHelpTime: 4600,
    ingRate: 0.155,
    skillRate: 0.029,
    maxHold: 11,

    berryIndex: 0.88,
    ingIndex: 2.06,
    skillIndicator: 0.545,

    evolutionChain: [
      {
        dexNo: 736,
        formId: "normal",
        evolveTo: [
          {
            targetDexNo: 737,
            targetFormId: "normal",
            conditions: [
              { type: "level", value: 15 },
              { type: "candy", value: 40 }
            ]
          }
        ]
      },
      {
        dexNo: 737,
        formId: "normal",
        evolveTo: [
          {
            targetDexNo: 738,
            targetFormId: "normal",
            conditions: [
              { type: "item", value: "かみなりのいし" },
              { type: "candy", value: 80 }
            ]
          }
        ]
      },
      {
        dexNo: 738,
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
    dexNo: 737,
    formId: "normal",
    name: "デンヂムシ",

    imageCard: getImagePath("card", 737, "normal"),
    imageDetail: getImagePath("panel", 737, "normal"),

    type: ["むし"],
    tokui: "食材",

    sleepType: "うとうと",

    mainSkill: "エナジーチャージS",

    ingredients: [
      {
        name: "めざましコーヒー",
        countsByLevel: { 1: 2, 30: 5, 60: 7 }
      },
      {
        name: "あじわいキノコ",
        countsByLevel: { 30: 4, 60: 7 }
      },
      {
        name: "あまいミツ",
        countsByLevel: { 60: 11 }
      }
    ],

    baseHelpTime: 3300,
    ingRate: 0.154,
    skillRate: 0.028,
    maxHold: 20,

    berryIndex: 1.23,
    ingIndex: 2.85,
    skillIndicator: 0.733,

    evolutionChain: [
      {
        dexNo: 736,
        formId: "normal",
        evolveTo: [
          {
            targetDexNo: 737,
            targetFormId: "normal",
            conditions: [
              { type: "level", value: 15 },
              { type: "candy", value: 40 }
            ]
          }
        ]
      },
      {
        dexNo: 737,
        formId: "normal",
        evolveTo: [
          {
            targetDexNo: 738,
            targetFormId: "normal",
            conditions: [
              { type: "item", value: "かみなりのいし" },
              { type: "candy", value: 80 }
            ]
          }
        ]
      },
      {
        dexNo: 738,
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
    dexNo: 738,
    formId: "normal",
    name: "クワガノン",

    imageCard: getImagePath("card", 738, "normal"),
    imageDetail: getImagePath("panel", 738, "normal"),

    type: ["むし"],
    tokui: "食材",

    sleepType: "うとうと",

    mainSkill: "エナジーチャージS",

    ingredients: [
      {
        name: "めざましコーヒー",
        countsByLevel: { 1: 2, 30: 5, 60: 7 }
      },
      {
        name: "あじわいキノコ",
        countsByLevel: { 30: 4, 60: 7 }
      },
      {
        name: "あまいミツ",
        countsByLevel: { 60: 11 }
      }
    ],

    baseHelpTime: 2800,
    ingRate: 0.194,
    skillRate: 0.051,
    maxHold: 29,

    berryIndex: 1.38,
    ingIndex: 4.24,
    skillIndicator: 1.574,

    evolutionChain: [
      {
        dexNo: 736,
        formId: "normal",
        evolveTo: [
          {
            targetDexNo: 737,
            targetFormId: "normal",
            conditions: [
              { type: "level", value: 15 },
              { type: "candy", value: 40 }
            ]
          }
        ]
      },
      {
        dexNo: 737,
        formId: "normal",
        evolveTo: [
          {
            targetDexNo: 738,
            targetFormId: "normal",
            conditions: [
              { type: "item", value: "かみなりのいし" },
              { type: "candy", value: 80 }
            ]
          }
        ]
      },
      {
        dexNo: 738,
        formId: "normal",
        evolveTo: null
      }
    ],

    fields: [
      {
        name: "ゴールド旧発電所",
        stars: {
          1: [{ type: "マスター", rank: 4 }],
          2: [{ type: "マスター", rank: 8 }],
          3: [{ type: "マスター", rank: 14 }],
          4: [{ type: "マスター", rank: 9 }]
        }
      }
    ]
  },

  {
    dexNo: 742,
    formId: "normal",
    name: "アブリー",

    imageCard: getImagePath("card", 742, "normal"),
    imageDetail: getImagePath("panel", 742, "normal"),

    type: ["フェアリー"],
    tokui: "食材",

    sleepType: "すやすや",

    mainSkill: "食材セレクトS",

    ingredients: [
      {
        name: "あまいミツ",
        countsByLevel: { 1: 2, 30: 5, 60: 7 }
      },
      {
        name: "ピュアなオイル",
        countsByLevel: { 30: 4, 60: 6 }
      },
      {
        name: "ワカクサコーン",
        countsByLevel: { 60: 5 }
      }
    ],

    baseHelpTime: 4500,
    ingRate: 0.199,
    skillRate: 0.019,
    maxHold: 9,

    berryIndex: 0.93,
    ingIndex: 1.79,
    skillIndicator: 0.365,

    evolutionChain: [
      {
        dexNo: 742,
        formId: "normal",
        evolveTo: [
          {
            targetDexNo: 743,
            targetFormId: "normal",
            conditions: [
              { type: "level", value: 19 },
              { type: "candy", value: 40 }
            ]
          }
        ]
      },
      {
        dexNo: 743,
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
        name: "アンバー渓谷",
        stars: {
          1: [{ type: "ノーマル", rank: 1 }],
          2: [{ type: "ノーマル", rank: 2 }],
          3: [{ type: "スーパー", rank: 3 }],
          4: [{ type: "ノーマル", rank: 3 }]
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
    dexNo: 743,
    formId: "normal",
    name: "アブリボン",

    imageCard: getImagePath("card", 743, "normal"),
    imageDetail: getImagePath("panel", 743, "normal"),

    type: ["フェアリー"],
    tokui: "食材",

    sleepType: "すやすや",

    mainSkill: "食材セレクトS",

    ingredients: [
      {
        name: "あまいミツ",
        countsByLevel: { 1: 2, 30: 5, 60: 7 }
      },
      {
        name: "ピュアなオイル",
        countsByLevel: { 30: 4, 60: 6 }
      },
      {
        name: "ワカクサコーン",
        countsByLevel: { 60: 5 }
      }
    ],

    baseHelpTime: 2300,
    ingRate: 0.194,
    skillRate: 0.025,
    maxHold: 24,

    berryIndex: 1.82,
    ingIndex: 3.41,
    skillIndicator: 0.939,

    evolutionChain: [
      {
        dexNo: 742,
        formId: "normal",
        evolveTo: [
          {
            targetDexNo: 743,
            targetFormId: "normal",
            conditions: [
              { type: "level", value: 19 },
              { type: "candy", value: 40 }
            ]
          }
        ]
      },
      {
        dexNo: 743,
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
          3: null,
          4: [{ type: "マスター", rank: 4 }]
        }
      },
      {
        name: "シアンの砂浜",
        stars: {
          1: [{ type: "ハイパー", rank: 1 }],
          2: [{ type: "ハイパー", rank: 5 }],
          3: [{ type: "マスター", rank: 6 }],
          4: [{ type: "マスター", rank: 1 }]
        }
      },
      {
        name: "ラピスラズリ湖畔",
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
          4: [{ type: "マスター", rank: 6 }]
        }
      }
    ]
  },

  {
    dexNo: 759,
    formId: "normal",
    name: "ヌイコグマ",

    imageCard: getImagePath("card", 759, "normal"),
    imageDetail: getImagePath("panel", 759, "normal"),

    type: ["かくとう"],
    tokui: "食材",

    sleepType: "ぐっすり",

    mainSkill: "エナジーチャージS",

    ingredients: [
      {
        name: "ワカクサコーン",
        countsByLevel: { 1: 2, 30: 5, 60: 7 }
      },
      {
        name: "マメミート",
        countsByLevel: { 30: 6, 60: 10 }
      },
      {
        name: "とくせんエッグ",
        countsByLevel: { 60: 9 }
      }
    ],

    baseHelpTime: 4100,
    ingRate: 0.225,
    skillRate: 0.011,
    maxHold: 13,

    berryIndex: 1.02,
    ingIndex: 3.07,
    skillIndicator: 0.232,

    evolutionChain: [
      {
        dexNo: 759,
        formId: "normal",
        evolveTo: [
          {
            targetDexNo: 760,
            targetFormId: "normal",
            conditions: [
              { type: "level", value: 20 },
              { type: "candy", value: 40 }
            ]
          }
        ]
      },
      {
        dexNo: 760,
        formId: "normal",
        evolveTo: null
      }
    ],

    fields: [
      {
        name: "ラピスラズリ湖畔",
        stars: {
          1: [{ type: "ノーマル", rank: 1 }],
          2: [{ type: "ノーマル", rank: 5 }],
          3: [{ type: "ハイパー", rank: 1 }],
          4: [{ type: "ハイパー", rank: 1 }]
        }
      }
    ]
  },

  {
    dexNo: 760,
    formId: "normal",
    name: "キテルグマ",

    imageCard: getImagePath("card", 760, "normal"),
    imageDetail: getImagePath("panel", 760, "normal"),

    type: ["かくとう"],
    tokui: "食材",

    sleepType: "ぐっすり",

    mainSkill: "エナジーチャージS",

    ingredients: [
      {
        name: "ワカクサコーン",
        countsByLevel: { 1: 2, 30: 5, 60: 7 }
      },
      {
        name: "マメミート",
        countsByLevel: { 30: 6, 60: 10 }
      },
      {
        name: "とくせんエッグ",
        countsByLevel: { 60: 9 }
      }
    ],

    baseHelpTime: 2800,
    ingRate: 0.229,
    skillRate: 0.013,
    maxHold: 25,

    berryIndex: 1.49,
    ingIndex: 4.57,
    skillIndicator: 0.401,

    evolutionChain: [
      {
        dexNo: 759,
        formId: "normal",
        evolveTo: [
          {
            targetDexNo: 760,
            targetFormId: "normal",
            conditions: [
              { type: "level", value: 20 },
              { type: "candy", value: 40 }
            ]
          }
        ]
      },
      {
        dexNo: 760,
        formId: "normal",
        evolveTo: null
      }
    ],

    fields: [
      {
        name: "ラピスラズリ湖畔",
        stars: {
          1: [{ type: "スーパー", rank: 5 }],
          2: [{ type: "ハイパー", rank: 4 }],
          3: [{ type: "マスター", rank: 5 }],
          4: [{ type: "マスター", rank: 6 }]
        }
      }
    ]
  },

  {
    dexNo: 764,
    formId: "normal",
    name: "キュワワー",

    imageCard: getImagePath("card", 764, "normal"),
    imageDetail: getImagePath("panel", 764, "normal"),

    type: ["フェアリー"],
    tokui: "食材",

    sleepType: "すやすや",

    mainSkill: "げんきエールS",

    ingredients: [
      {
        name: "ワカクサコーン",
        countsByLevel: { 1: 2, 30: 5, 60: 7 }
      },
      {
        name: "あったかジンジャー",
        countsByLevel: { 30: 6, 60: 9 }
      },
      {
        name: "リラックスカカオ",
        countsByLevel: { 60: 7 }
      }
    ],

    baseHelpTime: 2500,
    ingRate: 0.167,
    skillRate: 0.035,
    maxHold: 20,

    berryIndex: 1.73,
    ingIndex: 3.76,
    skillIndicator: 1.210,

    evolutionChain: [
      {
        dexNo: 764,
        formId: "normal",
        evolveTo: null
      }
    ],

    fields: [
      {
        name: "ワカクサ本島",
        stars: {
          1: [{ type: "ハイパー", rank: 3 }],
          2: [{ type: "マスター", rank: 2 }],
          3: [{ type: "マスター", rank: 8 }],
          4: [{ type: "マスター", rank: 3 }]
        }
      },
      {
        name: "シアンの砂浜",
        stars: {
          1: [{ type: "スーパー", rank: 5 }],
          2: [{ type: "ハイパー", rank: 4 }],
          3: [{ type: "マスター", rank: 5 }],
          4: [{ type: "マスター", rank: 1 }]
        }
      },
      {
        name: "ラピスラズリ湖畔",
        stars: {
          1: [{ type: "スーパー", rank: 2 }],
          2: [{ type: "ハイパー", rank: 1 }],
          3: [{ type: "マスター", rank: 2 }],
          4: [{ type: "マスター", rank: 1 }]
        }
      },
      {
        name: "ワカクサ本島EX",
        stars: {
          1: [{ type: "スーパー", rank: 2 }],
          2: [{ type: "ハイパー", rank: 1 }],
          3: [{ type: "ハイパー", rank: 5 }],
          4: [{ type: "マスター", rank: 2 }]
        }
      }
    ]
  },

  {
    dexNo: 777,
    formId: "normal",
    name: "トゲデマル",

    imageCard: getImagePath("card", 777, "normal"),
    imageDetail: getImagePath("panel", 777, "normal"),

    type: ["はがね"],
    tokui: "スキル",

    sleepType: "ぐっすり",

    mainSkill: "ほっぺすりすり(げんきエールS)",

    ingredients: [
      {
        name: "モーモーミルク",
        countsByLevel: { 1: 1, 30: 2, 60: 4 }
      },
      {
        name: "つやつやアボカド",
        countsByLevel: { 30: 1, 60: 2 }
      },
      {
        name: "リラックスカカオ",
        countsByLevel: { 60: 2 }
      }
    ],

    baseHelpTime: 2700,
    ingRate: 0.169,
    skillRate: 0.054,
    maxHold: 18,

    berryIndex: 2.03,
    ingIndex: 1.10,
    skillIndicator: 1.728,

    evolutionChain: [
      {
        dexNo: 777,
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
        name: "ゴールド旧発電所",
        stars: {
          1: [{ type: "ハイパー", rank: 2 }],
          2: [{ type: "マスター", rank: 1 }],
          3: [{ type: "マスター", rank: 7 }],
          4: [{ type: "マスター", rank: 2 }]
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
    dexNo: 778,
    formId: "normal",
    name: "ミミッキュ",

    imageCard: getImagePath("card", 778, "normal"),
    imageDetail: getImagePath("panel", 778, "normal"),

    type: ["ゴースト"],
    tokui: "スキル",

    sleepType: "うとうと",

    mainSkill: "ばけのかわ(きのみバースト)",

    ingredients: [
      {
        name: "とくせんリンゴ",
        countsByLevel: { 1: 1, 30: 2, 60: 4 }
      },
      {
        name: "めざましコーヒー",
        countsByLevel: { 30: 1, 60: 2 }
      },
      {
        name: "あじわいキノコ",
        countsByLevel: { 60: 2 }
      }
    ],

    baseHelpTime: 2500,
    ingRate: 0.153,
    skillRate: 0.035,
    maxHold: 19,

    berryIndex: 1.76,
    ingIndex: 1.03,
    skillIndicator: 1.210,

    evolutionChain: [
      {
        dexNo: 778,
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
        name: "ゴールド旧発電所",
        stars: {
          1: [{ type: "スーパー", rank: 5 }],
          2: [{ type: "ハイパー", rank: 4 }],
          3: [{ type: "ハイパー", rank: 5 }],
          4: [{ type: "マスター", rank: 5 }]
        }
      },
      {
        name: "ワカクサ本島EX",
        stars: {
          1: [{ type: "スーパー", rank: 3 }],
          2: [{ type: "スーパー", rank: 3 }],
          3: [{ type: "マスター", rank: 8 }],
          4: [{ type: "マスター", rank: 9 }]
        }
      }
    ]
  },

  {
    dexNo: 780,
    formId: "normal",
    name: "ジジーロン",

    imageCard: getImagePath("card", 780, "normal"),
    imageDetail: getImagePath("panel", 780, "normal"),

    type: ["ドラゴン"],
    tokui: "食材",

    sleepType: "うとうと",

    mainSkill: "料理チャンスS",

    ingredients: [
      {
        name: "ワカクサ大豆",
        countsByLevel: { 1: 2, 30: 5, 60: 7 }
      },
      {
        name: "つやつやアボカド",
        countsByLevel: { 30: 3, 60: 4 }
      },
      {
        name: "マメミート",
        countsByLevel: { 60: 7 }
      }
    ],

    baseHelpTime: 3500,
    ingRate: 0.294,
    skillRate: 0.046,
    maxHold: 25,

    berryIndex: 1.41,
    ingIndex: 3.34,
    skillIndicator: 1.136,

    evolutionChain: [
      {
        dexNo: 780,
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
        name: "ラピスラズリ湖畔",
        stars: {
          1: [{ type: "ハイパー", rank: 3 }],
          2: [{ type: "マスター", rank: 2 }],
          3: [{ type: "マスター", rank: 8 }],
          4: [{ type: "マスター", rank: 3 }]
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
          3: [{ type: "マスター", rank: 8 }],
          4: [{ type: "マスター", rank: 11 }]
        }
      }
    ]
  }

];