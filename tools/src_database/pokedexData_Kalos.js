const pokedexData_Kalos = [

  {
    dexNo: 696,
    formId: "normal",
    name: "チゴラス",

    imageCard: getImagePath("card", 696, "normal"),
    imageDetail: getImagePath("panel", 696, "normal"),

    type: ["いわ"],
    tokui: "きのみ",

    sleepType: "ぐっすり",

    mainSkill: "料理パワーアップS",

    ingredients: [
      {
        name: "マメミート",
        countsByLevel: { 1: 1, 30: 2, 60: 4 }
      },
      {
        name: "とくせんリンゴ",
        countsByLevel: { 30: 3, 60: 4 }
      },
      {
        name: "ほっこりポテト",
        countsByLevel: { 60: 3 }
      }
    ],

    baseHelpTime: 5200,
    ingRate: 0.203,
    skillRate: 0.024,
    maxHold: 11,

    berryIndex: 1.38,
    ingIndex: 0.72,
    skillIndicator: 0.78,

    evolutionChain: [
      {
        dexNo: 696,
        formId: "normal",
        evolveTo: [
          {
            targetDexNo: 697,
            targetFormId: "normal",
            conditions: [
              { type: "level", value: 29 },
              { type: "time", value: "day" },
              { type: "candy", value: 40 }
            ]
          }
        ]
      },
      {
        dexNo: 697,
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
          4: [{ type: "ハイパー", rank: 1 }]
        }
      },
      {
        name: "アンバー渓谷",
        stars: {
          1: [{ type: "ノーマル", rank: 1 }],
          2: [{ type: "ノーマル", rank: 2 }],
          3: [{ type: "スーパー", rank: 3 }],
          4: [{ type: "ハイパー", rank: 1 }]
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
    dexNo: 697,
    formId: "normal",
    name: "ガチゴラス",

    imageCard: getImagePath("card", 697, "normal"),
    imageDetail: getImagePath("panel", 697, "normal"),

    type: ["いわ"],
    tokui: "きのみ",

    sleepType: "ぐっすり",

    mainSkill: "料理パワーアップS",

    ingredients: [
      {
        name: "マメミート",
        countsByLevel: { 1: 1, 30: 2, 60: 4 }
      },
      {
        name: "とくせんリンゴ",
        countsByLevel: { 30: 3, 60: 4 }
      },
      {
        name: "ほっこりポテト",
        countsByLevel: { 60: 3 }
      }
    ],

    baseHelpTime: 2800,
    ingRate: 0.178,
    skillRate: 0.029,
    maxHold: 28,

    berryIndex: 2.64,
    ingIndex: 1.17,
    skillIndicator: 1.85,

    evolutionChain: [
      {
        dexNo: 696,
        formId: "normal",
        evolveTo: [
          {
            targetDexNo: 697,
            targetFormId: "normal",
            conditions: [
              { type: "level", value: 29 },
              { type: "time", value: "day" },
              { type: "candy", value: 40 }
            ]
          }
        ]
      },
      {
        dexNo: 697,
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
        name: "アンバー渓谷",
        stars: {
          1: [{ type: "ハイパー", rank: 4 }],
          2: [{ type: "マスター", rank: 3 }],
          3: [{ type: "マスター", rank: 9 }]
        }
      },
      {
        name: "ワカクサ本島EX",
        stars: {
          1: [{ type: "ハイパー", rank: 1 }],
          2: [{ type: "マスター", rank: 1 }],
          3: [{ type: "マスター", rank: 10 }]
        }
      }
    ]
  },

  {
    dexNo: 700,
    formId: "normal",
    name: "ニンフィア",

    imageCard: getImagePath("card", 700, "normal"),
    imageDetail: getImagePath("panel", 700, "normal"),

    type: ["フェアリー"],
    tokui: "スキル",

    sleepType: "すやすや",

    mainSkill: "げんきオールS",

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

    baseHelpTime: 2600,
    ingRate: 0.178,
    skillRate: 0.040,
    maxHold: 20,

    berryIndex: 1.64,
    ingIndex: 1.07,
    skillIndicator: 2.87,

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
          1: [{ type: "マスター", rank: 3 }],
          2: [{ type: "マスター", rank: 7 }],
          3: [{ type: "マスター", rank: 13 }],
          4: [{ type: "マスター", rank: 8 }]
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
    dexNo: 702,
    formId: "normal",
    name: "デデンネ",

    imageCard: getImagePath("card", 702, "normal"),
    imageDetail: getImagePath("panel", 702, "normal"),

    type: ["でんき"],
    tokui: "スキル",

    sleepType: "すやすや",

    mainSkill: "料理チャンスS",

    ingredients: [
      {
        name: "とくせんリンゴ",
        countsByLevel: { 1: 1, 30: 2, 60: 4 }
      },
      {
        name: "リラックスカカオ",
        countsByLevel: { 30: 1, 60: 2 }
      },
      {
        name: "ワカクサコーン",
        countsByLevel: { 60: 2 }
      }
    ],

    baseHelpTime: 2500,
    ingRate: 0.177,
    skillRate: 0.045,
    maxHold: 19,

    berryIndex: 1.65,
    ingIndex: 1.03,
    skillIndicator: 3.30,

    evolutionChain: [
      {
        dexNo: 702,
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
        name: "ゴールド旧発電所",
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
          1: [{ type: "スーパー", rank: 2 }],
          2: [{ type: "ハイパー", rank: 1 }],
          3: [{ type: "ハイパー", rank: 5 }],
          4: [{ type: "マスター", rank: 1 }]
        }
      }
    ]
  },

  {
    dexNo: 710,
    formId: "normal",
    name: "バケッチャ(ちゅうだましゅ)",

    imageCard: getImagePath("card", 710, "normal"),
    imageDetail: getImagePath("panel", 710, "normal"),

    type: ["ゴースト"],
    tokui: "食材",

    sleepType: "うとうと",

    mainSkill: "エナジーチャージS",

    ingredients: [
      {
        name: "ずっしりカボチャ",
        countsByLevel: { 1: 2, 30: 5, 60: 7 }
      },
      {
        name: "ワカクサ大豆",
        countsByLevel: { 30: 11, 60: 18 }
      },
      {
        name: "ほっこりポテト",
        countsByLevel: { 60: 15 }
      }
    ],

    baseHelpTime: 5400,
    ingRate: 0.120,
    skillRate: 0.049,
    maxHold: 11,

    berryIndex: 0.85,
    ingIndex: 1.53,
    skillIndicator: 1.57,

    evolutionChain: [
      {
        dexNo: 710,
        formId: "normal",
        evolveTo: [
          {
            targetDexNo: 711,
            targetFormId: "normal",
            conditions: [
              { type: "item", value: "つながりのひも" },
              { type: "candy", value: 80 }
            ]
          }
        ]
      },
      {
        dexNo: 711,
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
          4: [{ type: "マスター", rank: 1 }]
        }
      },
      {
        name: "ゴールド旧発電所",
        stars: {
          1: [{ type: "ノーマル", rank: 1 }],
          2: [{ type: "ノーマル", rank: 3 }],
          3: [{ type: "スーパー", rank: 4 }],
          4: [{ type: "マスター", rank: 1 }]
        }
      },
      {
        name: "ワカクサ本島EX",
        stars: {
          1: [{ type: "ノーマル", rank: 1 }],
          2: [{ type: "スーパー", rank: 2 }],
          3: [{ type: "ハイパー", rank: 3 }],
          4: [{ type: "マスター", rank: 1 }]
        }
      }
    ]
  },

  {
    dexNo: 710,
    formId: "small",
    name: "バケッチャ(こだましゅ)",

    imageCard: getImagePath("card", 710, "normal"),
    imageDetail: getImagePath("panel", 710, "small"),

    type: ["ゴースト"],
    tokui: "食材",

    sleepType: "うとうと",

    mainSkill: "エナジーチャージS",

    ingredients: [
      {
        name: "ずっしりカボチャ",
        countsByLevel: { 1: 2, 30: 5, 60: 7 }
      },
      {
        name: "ワカクサ大豆",
        countsByLevel: { 30: 11, 60: 18 }
      },
      {
        name: "ほっこりポテト",
        countsByLevel: { 60: 15 }
      }
    ],

    baseHelpTime: 5300,
    ingRate: 0.120,
    skillRate: 0.049,
    maxHold: 7,

    berryIndex: 0.86,
    ingIndex: 1.45,
    skillIndicator: 1.48,

    evolutionChain: [
      {
        dexNo: 710,
        formId: "normal",
        evolveTo: [
          {
            targetDexNo: 711,
            targetFormId: "normal",
            conditions: [
              { type: "item", value: "つながりのひも" },
              { type: "candy", value: 80 }
            ]
          }
        ]
      },
      {
        dexNo: 711,
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
          4: [{ type: "マスター", rank: 1 }]
        }
      },
      {
        name: "ゴールド旧発電所",
        stars: {
          1: [{ type: "ノーマル", rank: 1 }],
          2: [{ type: "ノーマル", rank: 3 }],
          3: [{ type: "スーパー", rank: 4 }],
          4: [{ type: "マスター", rank: 1 }]
        }
      },
      {
        name: "ワカクサ本島EX",
        stars: {
          1: [{ type: "ノーマル", rank: 1 }],
          2: [{ type: "スーパー", rank: 2 }],
          3: [{ type: "ハイパー", rank: 3 }],
          4: [{ type: "マスター", rank: 1 }]
        }
      }
    ]
  },

  {
    dexNo: 710,
    formId: "large",
    name: "バケッチャ(おおだましゅ)",

    imageCard: getImagePath("card", 710, "normal"),
    imageDetail: getImagePath("panel", 710, "large"),

    type: ["ゴースト"],
    tokui: "食材",

    sleepType: "うとうと",

    mainSkill: "エナジーチャージS",

    ingredients: [
      {
        name: "ずっしりカボチャ",
        countsByLevel: { 1: 2, 30: 5, 60: 7 }
      },
      {
        name: "ワカクサ大豆",
        countsByLevel: { 30: 11, 60: 18 }
      },
      {
        name: "ほっこりポテト",
        countsByLevel: { 60: 15 }
      }
    ],

    baseHelpTime: 5500,
    ingRate: 0.120,
    skillRate: 0.049,
    maxHold: 15,

    berryIndex: 0.83,
    ingIndex: 1.61,
    skillIndicator: 1.65,

    evolutionChain: [
      {
        dexNo: 710,
        formId: "normal",
        evolveTo: [
          {
            targetDexNo: 711,
            targetFormId: "normal",
            conditions: [
              { type: "item", value: "つながりのひも" },
              { type: "candy", value: 80 }
            ]
          }
        ]
      },
      {
        dexNo: 711,
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
          4: [{ type: "マスター", rank: 1 }]
        }
      },
      {
        name: "ゴールド旧発電所",
        stars: {
          1: [{ type: "ノーマル", rank: 1 }],
          2: [{ type: "ノーマル", rank: 3 }],
          3: [{ type: "スーパー", rank: 4 }],
          4: [{ type: "マスター", rank: 1 }]
        }
      },
      {
        name: "ワカクサ本島EX",
        stars: {
          1: [{ type: "ノーマル", rank: 1 }],
          2: [{ type: "スーパー", rank: 2 }],
          3: [{ type: "ハイパー", rank: 3 }],
          4: [{ type: "マスター", rank: 1 }]
        }
      }
    ]
  },

  {
    dexNo: 710,
    formId: "jumbo",
    name: "バケッチャ(ギガだましゅ)",

    imageCard: getImagePath("card", 710, "normal"),
    imageDetail: getImagePath("panel", 710, "jumbo"),

    type: ["ゴースト"],
    tokui: "食材",

    sleepType: "うとうと",

    mainSkill: "エナジーチャージS",

    ingredients: [
      {
        name: "ずっしりカボチャ",
        countsByLevel: { 1: 2, 30: 5, 60: 7 }
      },
      {
        name: "ワカクサ大豆",
        countsByLevel: { 30: 11, 60: 18 }
      },
      {
        name: "ほっこりポテト",
        countsByLevel: { 60: 15 }
      }
    ],

    baseHelpTime: 5600,
    ingRate: 0.120,
    skillRate: 0.049,
    maxHold: 21,

    berryIndex: 0.82,
    ingIndex: 1.74,
    skillIndicator: 1.79,

    evolutionChain: [
      {
        dexNo: 710,
        formId: "normal",
        evolveTo: [
          {
            targetDexNo: 711,
            targetFormId: "normal",
            conditions: [
              { type: "item", value: "つながりのひも" },
              { type: "candy", value: 80 }
            ]
          }
        ]
      },
      {
        dexNo: 711,
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
          4: [{ type: "マスター", rank: 1 }]
        }
      },
      {
        name: "ゴールド旧発電所",
        stars: {
          1: [{ type: "ノーマル", rank: 1 }],
          2: [{ type: "ノーマル", rank: 3 }],
          3: [{ type: "スーパー", rank: 4 }],
          4: [{ type: "マスター", rank: 1 }]
        }
      },
      {
        name: "ワカクサ本島EX",
        stars: {
          1: [{ type: "ノーマル", rank: 1 }],
          2: [{ type: "スーパー", rank: 2 }],
          3: [{ type: "ハイパー", rank: 3 }],
          4: [{ type: "マスター", rank: 1 }]
        }
      }
    ]
  },

  {
    dexNo: 711,
    formId: "normal",
    name: "パンプジン(ちゅうだましゅ)",

    imageCard: getImagePath("card", 711, "normal"),
    imageDetail: getImagePath("panel", 711, "normal"),

    type: ["ゴースト"],
    tokui: "食材",

    sleepType: "うとうと",

    mainSkill: "エナジーチャージS",

    ingredients: [
      {
        name: "ずっしりカボチャ",
        countsByLevel: { 1: 2, 30: 5, 60: 7 }
      },
      {
        name: "ワカクサ大豆",
        countsByLevel: { 30: 11, 60: 18 }
      },
      {
        name: "ほっこりポテト",
        countsByLevel: { 60: 15 }
      }
    ],

    baseHelpTime: 3200,
    ingRate: 0.130,
    skillRate: 0.049,
    maxHold: 19,

    berryIndex: 1.41,
    ingIndex: 2.90,
    skillIndicator: 2.64,

    evolutionChain: [
      {
        dexNo: 710,
        formId: "normal",
        evolveTo: [
          {
            targetDexNo: 711,
            targetFormId: "normal",
            conditions: [
              { type: "item", value: "つながりのひも" },
              { type: "candy", value: 80 }
            ]
          }
        ]
      },
      {
        dexNo: 711,
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
          3: [{ type: "マスター", rank: 7 }],
          4: [{ type: "マスター", rank: 9 }]
        }
      }
    ]
  },

  {
    dexNo: 711,
    formId: "small",
    name: "パンプジン(こだましゅ)",

    imageCard: getImagePath("card", 711, "normal"),
    imageDetail: getImagePath("panel", 711, "small"),

    type: ["ゴースト"],
    tokui: "食材",

    sleepType: "うとうと",

    mainSkill: "エナジーチャージS",

    ingredients: [
      {
        name: "ずっしりカボチャ",
        countsByLevel: { 1: 2, 30: 5, 60: 7 }
      },
      {
        name: "ワカクサ大豆",
        countsByLevel: { 30: 11, 60: 18 }
      },
      {
        name: "ほっこりポテト",
        countsByLevel: { 60: 15 }
      }
    ],

    baseHelpTime: 3100,
    ingRate: 0.130,
    skillRate: 0.049,
    maxHold: 15,

    berryIndex: 1.46,
    ingIndex: 2.87,
    skillIndicator: 2.60,

    evolutionChain: [
      {
        dexNo: 710,
        formId: "normal",
        evolveTo: [
          {
            targetDexNo: 711,
            targetFormId: "normal",
            conditions: [
              { type: "item", value: "つながりのひも" },
              { type: "candy", value: 80 }
            ]
          }
        ]
      },
      {
        dexNo: 711,
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
          3: [{ type: "マスター", rank: 7 }],
          4: [{ type: "マスター", rank: 9 }]
        }
      }
    ]
  },

  {
    dexNo: 711,
    formId: "large",
    name: "パンプジン(おおだましゅ)",

    imageCard: getImagePath("card", 711, "normal"),
    imageDetail: getImagePath("panel", 711, "large"),

    type: ["ゴースト"],
    tokui: "食材",

    sleepType: "うとうと",

    mainSkill: "エナジーチャージS",

    ingredients: [
      {
        name: "ずっしりカボチャ",
        countsByLevel: { 1: 2, 30: 5, 60: 7 }
      },
      {
        name: "ワカクサ大豆",
        countsByLevel: { 30: 11, 60: 18 }
      },
      {
        name: "ほっこりポテト",
        countsByLevel: { 60: 15 }
      }
    ],

    baseHelpTime: 3300,
    ingRate: 0.130,
    skillRate: 0.049,
    maxHold: 24,

    berryIndex: 1.37,
    ingIndex: 2.97,
    skillIndicator: 2.70,

    evolutionChain: [
      {
        dexNo: 710,
        formId: "normal",
        evolveTo: [
          {
            targetDexNo: 711,
            targetFormId: "normal",
            conditions: [
              { type: "item", value: "つながりのひも" },
              { type: "candy", value: 80 }
            ]
          }
        ]
      },
      {
        dexNo: 711,
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
          3: [{ type: "マスター", rank: 7 }],
          4: [{ type: "マスター", rank: 9 }]
        }
      }
    ]
  },

  {
    dexNo: 711,
    formId: "jumbo",
    name: "パンプジン(ギガだましゅ)",

    imageCard: getImagePath("card", 711, "normal"),
    imageDetail: getImagePath("panel", 711, "jumbo"),

    type: ["ゴースト"],
    tokui: "食材",

    sleepType: "うとうと",

    mainSkill: "エナジーチャージS",

    ingredients: [
      {
        name: "ずっしりカボチャ",
        countsByLevel: { 1: 2, 30: 5, 60: 7 }
      },
      {
        name: "ワカクサ大豆",
        countsByLevel: { 30: 11, 60: 18 }
      },
      {
        name: "ほっこりポテト",
        countsByLevel: { 60: 15 }
      }
    ],

    baseHelpTime: 3400,
    ingRate: 0.130,
    skillRate: 0.049,
    maxHold: 30,

    berryIndex: 1.33,
    ingIndex: 3.07,
    skillIndicator: 2.79,

    evolutionChain: [
      {
        dexNo: 710,
        formId: "normal",
        evolveTo: [
          {
            targetDexNo: 711,
            targetFormId: "normal",
            conditions: [
              { type: "item", value: "つながりのひも" },
              { type: "candy", value: 80 }
            ]
          }
        ]
      },
      {
        dexNo: 711,
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
          3: [{ type: "マスター", rank: 7 }],
          4: [{ type: "マスター", rank: 9 }]
        }
      }
    ]
  },

  {
    dexNo: 714,
    formId: "normal",
    name: "オンバット",

    imageCard: getImagePath("card", 714, "normal"),
    imageDetail: getImagePath("panel", 714, "normal"),

    type: ["ドラゴン"],
    tokui: "スキル",

    sleepType: "うとうと",

    mainSkill: "エナジーチャージM",

    ingredients: [
      {
        name: "とくせんリンゴ",
        countsByLevel: { 1: 1, 30: 2, 60: 4 }
      },
      {
        name: "ふといながねぎ",
        countsByLevel: { 30: 1, 60: 2 }
      },
      {
        name: "マメミート",
        countsByLevel: { 60: 3 }
      }
    ],

    baseHelpTime: 5100,
    ingRate: 0.198,
    skillRate: 0.048,
    maxHold: 7,

    berryIndex: 1.10,
    ingIndex: 0.61,
    skillIndicator: 1.61,

    evolutionChain: [
      {
        dexNo: 714,
        formId: "normal",
        evolveTo: [
          {
            targetDexNo: 715,
            targetFormId: "normal",
            conditions: [
              { type: "level", value: 36 },
              { type: "candy", value: 40 }
            ]
          }
        ]
      },
      {
        dexNo: 714,
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
          2: [{ type: "スーパー", rank: 2 }],
          3: [{ type: "ハイパー", rank: 2 }],
          4: [{ type: "ハイパー", rank: 4 }]
        }
      }
    ]
  },

  {
    dexNo: 715,
    formId: "normal",
    name: "オンバーン",

    imageCard: getImagePath("card", 715, "normal"),
    imageDetail: getImagePath("panel", 715, "normal"),

    type: ["ドラゴン"],
    tokui: "スキル",

    sleepType: "うとうと",

    mainSkill: "エナジーチャージM",

    ingredients: [
      {
        name: "とくせんリンゴ",
        countsByLevel: { 1: 1, 30: 2, 60: 4 }
      },
      {
        name: "ふといながねぎ",
        countsByLevel: { 30: 1, 60: 2 }
      },
      {
        name: "マメミート",
        countsByLevel: { 60: 3 }
      }
    ],

    baseHelpTime: 2700,
    ingRate: 0.195,
    skillRate: 0.048,
    maxHold: 23,

    berryIndex: 2.09,
    ingIndex: 1.28,
    skillIndicator: 3.46,

    evolutionChain: [
      {
        dexNo: 714,
        formId: "normal",
        evolveTo: [
          {
            targetDexNo: 715,
            targetFormId: "normal",
            conditions: [
              { type: "level", value: 36 },
              { type: "candy", value: 40 }
            ]
          }
        ]
      },
      {
        dexNo: 714,
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
        name: "トープ洞窟",
        stars: {
          1: [{ type: "スーパー", rank: 5 }],
          2: [{ type: "ハイパー", rank: 4 }],
          3: [{ type: "マスター", rank: 5 }],
          4: [{ type: "マスター", rank: 1 }]
        }
      },
      {
        name: "アンバー渓谷",
        stars: {
          1: [{ type: "スーパー", rank: 1 }],
          2: [{ type: "スーパー", rank: 5 }],
          3: [{ type: "マスター", rank: 1 }],
          4: [{ type: "マスター", rank: 1 }]
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
  }

];
