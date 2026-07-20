const pokedexData_Johto = [

  {
    dexNo: 152,
    formId: "normal",
    name: "チコリータ",

    imageCard: getImagePath("card", 152, "normal"),
    imageDetail: getImagePath("panel", 152, "normal"),

    type: ["くさ"],
    tokui: "きのみ",

    sleepType: "うとうと",

    mainSkill: "エナジーチャージS(ランダム)",

    ingredients: [
      {
        name: "リラックスカカオ",
        countsByLevel: { 1: 1, 30: 2, 60: 4 }
      },
      {
        name: "あまいミツ",
        countsByLevel: { 30: 3, 60: 5 }
      },
      {
        name: "ふといながねぎ",
        countsByLevel: { 60: 3 }
      }
    ],

    baseHelpTime: 4400,
    ingRate: 0.169,
    skillRate: 0.039,
    maxHold: 12,

    berryIndex: 1.70,
    ingIndex: 0.88,
    skillIndicator: 1.47,

    evolutionChain: [
      {
        dexNo: 152,
        formId: "normal",
        evolveTo: [
          {
            targetDexNo: 153,
            targetFormId: "normal",
            conditions: [
              { type: "level", value: 12 },
              { type: "candy", value: 40 }
            ]
          }
        ]
      },
      {
        dexNo: 153,
        formId: "normal",
        evolveTo: [
          {
            targetDexNo: 154,
            targetFormId: "normal",
            conditions: [
              { type: "level", value: 24 },
              { type: "candy", value: 80 }
            ]
          }
        ]
      },
      {
        dexNo: 154,
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
        name: "ラピスラズリ湖畔",
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
          2: [{ type: "ノーマル", rank: 5 }],
          3: [{ type: "スーパー", rank: 2 }],
          4: [{ type: "スーパー", rank: 3 }]
        }
      }
    ]
  },

  {
    dexNo: 153,
    formId: "normal",
    name: "ベイリーフ",

    imageCard: getImagePath("card", 153, "normal"),
    imageDetail: getImagePath("panel", 153, "normal"),

    type: ["くさ"],
    tokui: "きのみ",

    sleepType: "うとうと",

    mainSkill: "エナジーチャージS(ランダム)",

    ingredients: [
      {
        name: "リラックスカカオ",
        countsByLevel: { 1: 1, 30: 2, 60: 4 }
      },
      {
        name: "あまいミツ",
        countsByLevel: { 30: 3, 60: 5 }
      },
      {
        name: "ふといながねぎ",
        countsByLevel: { 60: 3 }
      }
    ],

    baseHelpTime: 3300,
    ingRate: 0.168,
    skillRate: 0.038,
    maxHold: 22,

    berryIndex: 2.27,
    ingIndex: 1.23,
    skillIndicator: 2.02,

    evolutionChain: [
      {
        dexNo: 152,
        formId: "normal",
        evolveTo: [
          {
            targetDexNo: 153,
            targetFormId: "normal",
            conditions: [
              { type: "level", value: 12 },
              { type: "candy", value: 40 }
            ]
          }
        ]
      },
      {
        dexNo: 153,
        formId: "normal",
        evolveTo: [
          {
            targetDexNo: 154,
            targetFormId: "normal",
            conditions: [
              { type: "level", value: 24 },
              { type: "candy", value: 80 }
            ]
          }
        ]
      },
      {
        dexNo: 154,
        formId: "normal",
        evolveTo: null
      }
    ],

    fields: [
      {
        name: "ワカクサ本島",
        stars: {
          1: [{ type: "スーパー", rank: 4 }],
          2: [{ type: "ハイパー", rank: 3 }],
          3: null,
          4: [{ type: "ハイパー", rank: 4 }]
        }
      },
      {
        name: "ラピスラズリ湖畔",
        stars: {
          1: [{ type: "ノーマル", rank: 3 }],
          2: [{ type: "スーパー", rank: 2 }],
          3: [{ type: "ハイパー", rank: 3 }],
          4: [{ type: "スーパー", rank: 3 }]
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
    dexNo: 154,
    formId: "normal",
    name: "メガニウム",

    imageCard: getImagePath("card", 154, "normal"),
    imageDetail: getImagePath("panel", 154, "normal"),

    type: ["くさ"],
    tokui: "きのみ",

    sleepType: "うとうと",

    mainSkill: "エナジーチャージS(ランダム)",

    ingredients: [
      {
        name: "リラックスカカオ",
        countsByLevel: { 1: 1, 30: 2, 60: 4 }
      },
      {
        name: "あまいミツ",
        countsByLevel: { 30: 3, 60: 5 }
      },
      {
        name: "ふといながねぎ",
        countsByLevel: { 60: 3 }
      }
    ],

    baseHelpTime: 2800,
    ingRate: 0.175,
    skillRate: 0.046,
    maxHold: 30,

    berryIndex: 2.65,
    ingIndex: 1.59,
    skillIndicator: 2.97,

    evolutionChain: [
      {
        dexNo: 152,
        formId: "normal",
        evolveTo: [
          {
            targetDexNo: 153,
            targetFormId: "normal",
            conditions: [
              { type: "level", value: 12 },
              { type: "candy", value: 40 }
            ]
          }
        ]
      },
      {
        dexNo: 153,
        formId: "normal",
        evolveTo: [
          {
            targetDexNo: 154,
            targetFormId: "normal",
            conditions: [
              { type: "level", value: 24 },
              { type: "candy", value: 80 }
            ]
          }
        ]
      },
      {
        dexNo: 154,
        formId: "normal",
        evolveTo: null
      }
    ],

    fields: [
      {
        name: "ワカクサ本島",
        stars: {
          1: [{ type: "マスター", rank: 5 }],
          2: [{ type: "マスター", rank: 9 }],
          3: [{ type: "マスター", rank: 15 }],
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
          1: [{ type: "スーパー", rank: 4 }],
          2: [{ type: "ハイパー", rank: 1 }],
          3: [{ type: "マスター", rank: 1 }],
          4: [{ type: "マスター", rank: 2 }]
        }
      }
    ]
  },

  {
    dexNo: 155,
    formId: "normal",
    name: "ヒノアラシ",

    imageCard: getImagePath("card", 155, "normal"),
    imageDetail: getImagePath("panel", 155, "normal"),

    type: ["ほのお"],
    tokui: "きのみ",

    sleepType: "すやすや",

    mainSkill: "エナジーチャージS(ランダム)",

    ingredients: [
      {
        name: "あったかジンジャー",
        countsByLevel: { 1: 1, 30: 2, 60: 4 }
      },
      {
        name: "げきからハーブ",
        countsByLevel: { 30: 2, 60: 3 }
      },
      {
        name: "ピュアなオイル",
        countsByLevel: { 60: 3 }
      }
    ],

    baseHelpTime: 3500,
    ingRate: 0.186,
    skillRate: 0.021,
    maxHold: 14,

    berryIndex: 1.88,
    ingIndex: 0.95,
    skillIndicator: 0.99,

    evolutionChain: [
      {
        dexNo: 155,
        formId: "normal",
        evolveTo: [
          {
            targetDexNo: 156,
            targetFormId: "normal",
            conditions: [
              { type: "level", value: 11 },
              { type: "candy", value: 40 }
            ]
          }
        ]
      },
      {
        dexNo: 156,
        formId: "normal",
        evolveTo: [
          {
            targetDexNo: 157,
            targetFormId: "normal",
            conditions: [
              { type: "level", value: 27 },
              { type: "candy", value: 80 }
            ]
          }
        ]
      },
      {
        dexNo: 157,
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
        name: "トープ洞窟",
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
          2: [{ type: "ノーマル", rank: 5 }],
          3: [{ type: "スーパー", rank: 2 }],
          4: [{ type: "スーパー", rank: 3 }]
        }
      }
    ]
  },

  {
    dexNo: 156,
    formId: "normal",
    name: "マグマラシ",

    imageCard: getImagePath("card", 156, "normal"),
    imageDetail: getImagePath("panel", 156, "normal"),

    type: ["ほのお"],
    tokui: "きのみ",

    sleepType: "すやすや",

    mainSkill: "エナジーチャージS(ランダム)",

    ingredients: [
      {
        name: "あったかジンジャー",
        countsByLevel: { 1: 1, 30: 2, 60: 4 }
      },
      {
        name: "げきからハーブ",
        countsByLevel: { 30: 2, 60: 3 }
      },
      {
        name: "ピュアなオイル",
        countsByLevel: { 60: 3 }
      }
    ],

    baseHelpTime: 3000,
    ingRate: 0.211,
    skillRate: 0.041,
    maxHold: 23,

    berryIndex: 2.13,
    ingIndex: 1.41,
    skillIndicator: 2.39,

    evolutionChain: [
      {
        dexNo: 155,
        formId: "normal",
        evolveTo: [
          {
            targetDexNo: 156,
            targetFormId: "normal",
            conditions: [
              { type: "level", value: 11 },
              { type: "candy", value: 40 }
            ]
          }
        ]
      },
      {
        dexNo: 156,
        formId: "normal",
        evolveTo: [
          {
            targetDexNo: 157,
            targetFormId: "normal",
            conditions: [
              { type: "level", value: 27 },
              { type: "candy", value: 80 }
            ]
          }
        ]
      },
      {
        dexNo: 157,
        formId: "normal",
        evolveTo: null
      }
    ],

    fields: [
      {
        name: "ワカクサ本島",
        stars: {
          1: [{ type: "スーパー", rank: 4 }],
          2: [{ type: "ハイパー", rank: 3 }],
          3: null,
          4: [{ type: "ハイパー", rank: 4 }]
        }
      },
      {
        name: "トープ洞窟",
        stars: {
          1: [{ type: "ノーマル", rank: 5 }],
          2: [{ type: "スーパー", rank: 4 }],
          3: [{ type: "ハイパー", rank: 5 }],
          4: [{ type: "スーパー", rank: 5 }]
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
    dexNo: 157,
    formId: "normal",
    name: "バクフーン",

    imageCard: getImagePath("card", 157, "normal"),
    imageDetail: getImagePath("panel", 157, "normal"),

    type: ["ほのお"],
    tokui: "きのみ",

    sleepType: "すやすや",

    mainSkill: "エナジーチャージS(ランダム)",

    ingredients: [
      {
        name: "あったかジンジャー",
        countsByLevel: { 1: 1, 30: 2, 60: 4 }
      },
      {
        name: "げきからハーブ",
        countsByLevel: { 30: 2, 60: 3 }
      },
      {
        name: "ピュアなオイル",
        countsByLevel: { 60: 3 }
      }
    ],

    baseHelpTime: 2400,
    ingRate: 0.208,
    skillRate: 0.039,
    maxHold: 33,

    berryIndex: 2.67,
    ingIndex: 1.78,
    skillIndicator: 2.92,

    evolutionChain: [
      {
        dexNo: 155,
        formId: "normal",
        evolveTo: [
          {
            targetDexNo: 156,
            targetFormId: "normal",
            conditions: [
              { type: "level", value: 11 },
              { type: "candy", value: 40 }
            ]
          }
        ]
      },
      {
        dexNo: 156,
        formId: "normal",
        evolveTo: [
          {
            targetDexNo: 157,
            targetFormId: "normal",
            conditions: [
              { type: "level", value: 27 },
              { type: "candy", value: 80 }
            ]
          }
        ]
      },
      {
        dexNo: 157,
        formId: "normal",
        evolveTo: null
      }
    ],

    fields: [
      {
        name: "ワカクサ本島",
        stars: {
          1: [{ type: "マスター", rank: 5 }],
          2: [{ type: "マスター", rank: 9 }],
          3: [{ type: "マスター", rank: 15 }],
          4: [{ type: "マスター", rank: 10 }]
        }
      },
      {
        name: "トープ洞窟",
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
          1: [{ type: "スーパー", rank: 4 }],
          2: [{ type: "ハイパー", rank: 1 }],
          3: [{ type: "マスター", rank: 1 }],
          4: [{ type: "マスター", rank: 2 }]
        }
      }
    ]
  },

  {
    dexNo: 158,
    formId: "normal",
    name: "ワニノコ",

    imageCard: getImagePath("card", 158, "normal"),
    imageDetail: getImagePath("panel", 158, "normal"),

    type: ["みず"],
    tokui: "きのみ",

    sleepType: "ぐっすり",

    mainSkill: "エナジーチャージS(ランダム)",

    ingredients: [
      {
        name: "マメミート",
        countsByLevel: { 1: 1, 30: 2, 60: 4 }
      },
      {
        name: "ピュアなオイル",
        countsByLevel: { 30: 2, 60: 3 }
      }
    ],

    baseHelpTime: 4500,
    ingRate: 0.253,
    skillRate: 0.052,
    maxHold: 11,

    berryIndex: 1.54,
    ingIndex: 1.11,
    skillIndicator: 1.91,

    evolutionChain: [
      {
        dexNo: 158,
        formId: "normal",
        evolveTo: [
          {
            targetDexNo: 159,
            targetFormId: "normal",
            conditions: [
              { type: "level", value: 14 },
              { type: "candy", value: 40 }
            ]
          }
        ]
      },
      {
        dexNo: 159,
        formId: "normal",
        evolveTo: [
          {
            targetDexNo: 160,
            targetFormId: "normal",
            conditions: [
              { type: "level", value: 23 },
              { type: "candy", value: 80 }
            ]
          }
        ]
      },
      {
        dexNo: 160,
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
    dexNo: 159,
    formId: "normal",
    name: "アリゲイツ",

    imageCard: getImagePath("card", 159, "normal"),
    imageDetail: getImagePath("panel", 159, "normal"),

    type: ["みず"],
    tokui: "きのみ",

    sleepType: "ぐっすり",

    mainSkill: "エナジーチャージS(ランダム)",

    ingredients: [
      {
        name: "マメミート",
        countsByLevel: { 1: 1, 30: 2, 60: 4 }
      },
      {
        name: "ピュアなオイル",
        countsByLevel: { 30: 2, 60: 3 }
      }
    ],

    baseHelpTime: 3400,
    ingRate: 0.253,
    skillRate: 0.052,
    maxHold: 20,

    berryIndex: 2.04,
    ingIndex: 1.55,
    skillIndicator: 2.66,

    evolutionChain: [
      {
        dexNo: 158,
        formId: "normal",
        evolveTo: [
          {
            targetDexNo: 159,
            targetFormId: "normal",
            conditions: [
              { type: "level", value: 14 },
              { type: "candy", value: 40 }
            ]
          }
        ]
      },
      {
        dexNo: 159,
        formId: "normal",
        evolveTo: [
          {
            targetDexNo: 160,
            targetFormId: "normal",
            conditions: [
              { type: "level", value: 23 },
              { type: "candy", value: 80 }
            ]
          }
        ]
      },
      {
        dexNo: 160,
        formId: "normal",
        evolveTo: null
      }
    ],

    fields: [
      {
        name: "ワカクサ本島",
        stars: {
          1: [{ type: "スーパー", rank: 4 }],
          2: [{ type: "ハイパー", rank: 3 }],
          3: null,
          4: [{ type: "ハイパー", rank: 4 }]
        }
      },
      {
        name: "シアンの砂浜",
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
          2: [{ type: "スーパー", rank: 2 }],
          3: [{ type: "スーパー", rank: 5 }],
          4: [{ type: "ハイパー", rank: 1 }]
        }
      }
    ]
  },

  {
    dexNo: 160,
    formId: "normal",
    name: "オーダイル",

    imageCard: getImagePath("card", 160, "normal"),
    imageDetail: getImagePath("panel", 160, "normal"),

    type: ["みず"],
    tokui: "きのみ",

    sleepType: "ぐっすり",

    mainSkill: "エナジーチャージS(ランダム)",

    ingredients: [
      {
        name: "マメミート",
        countsByLevel: { 1: 1, 30: 2, 60: 4 }
      },
      {
        name: "ピュアなオイル",
        countsByLevel: { 30: 2, 60: 3 }
      }
    ],

    baseHelpTime: 2800,
    ingRate: 0.257,
    skillRate: 0.055,
    maxHold: 29,

    berryIndex: 2.47,
    ingIndex: 2.00,
    skillIndicator: 3.55,

    evolutionChain: [
      {
        dexNo: 158,
        formId: "normal",
        evolveTo: [
          {
            targetDexNo: 159,
            targetFormId: "normal",
            conditions: [
              { type: "level", value: 14 },
              { type: "candy", value: 40 }
            ]
          }
        ]
      },
      {
        dexNo: 159,
        formId: "normal",
        evolveTo: [
          {
            targetDexNo: 160,
            targetFormId: "normal",
            conditions: [
              { type: "level", value: 23 },
              { type: "candy", value: 80 }
            ]
          }
        ]
      },
      {
        dexNo: 160,
        formId: "normal",
        evolveTo: null
      }
    ],

    fields: [
      {
        name: "ワカクサ本島",
        stars: {
          1: [{ type: "マスター", rank: 5 }],
          2: [{ type: "マスター", rank: 9 }],
          3: [{ type: "マスター", rank: 15 }],
          4: [{ type: "マスター", rank: 10 }]
        }
      },
      {
        name: "シアンの砂浜",
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
          1: [{ type: "スーパー", rank: 4 }],
          2: [{ type: "ハイパー", rank: 1 }],
          3: [{ type: "マスター", rank: 1 }],
          4: [{ type: "マスター", rank: 2 }]
        }
      }
    ]
  },

  {
    dexNo: 172,
    formId: "normal",
    name: "ピチュー",

    imageCard: getImagePath("card", 172, "normal"),
    imageDetail: getImagePath("panel", 172, "normal"),

    type: ["でんき"],
    tokui: "きのみ",

    sleepType: "ぐっすり",

    mainSkill: "エナジーチャージS",

    ingredients: [
      {
        name: "とくせんリンゴ",
        countsByLevel: { 1: 1, 30: 2, 60: 4 }
      },
      {
        name: "あったかジンジャー",
        countsByLevel: { 30: 2, 60: 3 }
      },
      {
        name: "とくせんエッグ",
        countsByLevel: { 60: 3 }
      }
    ],

    baseHelpTime: 4300,
    ingRate: 0.210,
    skillRate: 0.023,
    maxHold: 10,

    berryIndex: 1.38,
    ingIndex: 0.77,
    skillIndicator: 0.87,

    evolutionChain: [
      {
        dexNo: 172,
        formId: "normal",
        evolveTo: [
          {
            targetDexNo: 25,
            targetFormId: "normal",
            conditions: [
              { type: "sleep", value: 50 },
              { type: "candy", value: 20 }
            ]
          }
        ]
      },
      {
        dexNo: 25,
        formId: "normal",
        evolveTo: [
          {
            targetDexNo: 26,
            targetFormId: "normal",
            conditions: [
              { type: "item", value: "かみなりのいし" },
              { type: "candy", value: 80 }
            ]
          }
        ]
      },
      {
        dexNo: 26,
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
        name: "ゴールド旧発電所",
        stars: {
          1: [{ type: "ノーマル", rank: 1 }],
          2: [{ type: "ノーマル", rank: 1 }],
          3: [{ type: "ノーマル", rank: 4 }],
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
    dexNo: 173,
    formId: "normal",
    name: "ピィ",

    imageCard: getImagePath("card", 173, "normal"),
    imageDetail: getImagePath("panel", 173, "normal"),

    type: ["フェアリー"],
    tokui: "きのみ",

    sleepType: "ぐっすり",

    mainSkill: "ゆびをふる",

    ingredients: [
      {
        name: "とくせんリンゴ",
        countsByLevel: { 1: 1, 30: 2, 60: 4 }
      },
      {
        name: "あまいミツ",
        countsByLevel: { 30: 2, 60: 3 }
      },
      {
        name: "ワカクサ大豆",
        countsByLevel: { 60: 3 }
      }
    ],

    baseHelpTime: 5600,
    ingRate: 0.164,
    skillRate: 0.034,
    maxHold: 10,

    berryIndex: 1.16,
    ingIndex: 0.40,
    skillIndicator: 1.02,

    evolutionChain: [
      {
        dexNo: 173,
        formId: "normal",
        evolveTo: [
          {
            targetDexNo: 35,
            targetFormId: "normal",
            conditions: [
              { type: "sleep", value: 50 },
              { type: "candy", value: 20 }
            ]
          }
        ]
      },
      {
        dexNo: 35,
        formId: "normal",
        evolveTo: [
          {
            targetDexNo: 36,
            targetFormId: "normal",
            conditions: [
              { type: "item", value: "つきのいし" },
              { type: "candy", value: 80 }
            ]
          }
        ]
      },
      {
        dexNo: 36,
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
        name: "シアンの砂浜",
        stars: {
          1: [{ type: "ノーマル", rank: 1 }],
          2: [{ type: "ノーマル", rank: 3 }],
          3: [{ type: "スーパー", rank: 4 }],
          4: [{ type: "ハイパー", rank: 1 }]
        }
      },
      {
        name: "トープ洞窟",
        stars: {
          1: [{ type: "ノーマル", rank: 1 }],
          2: [{ type: "ノーマル", rank: 2 }],
          3: [{ type: "スーパー", rank: 3 }],
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
        name: "ラピスラズリ湖畔",
        stars: {
          1: [{ type: "ノーマル", rank: 1 }],
          2: [{ type: "ノーマル", rank: 1 }],
          3: [{ type: "スーパー", rank: 1 }],
          4: [{ type: "ハイパー", rank: 1 }]
        }
      },
      {
        name: "ゴールド旧発電所",
        stars: {
          1: [{ type: "ノーマル", rank: 1 }],
          2: [{ type: "ノーマル", rank: 1 }],
          3: [{ type: "ノーマル", rank: 5 }],
          4: [{ type: "ハイパー", rank: 1 }]
        }
      },
      {
        name: "アンバー渓谷",
        stars: {
          1: [{ type: "ノーマル", rank: 1 }],
          2: [{ type: "ノーマル", rank: 1 }],
          3: [{ type: "ノーマル", rank: 4 }],
          4: [{ type: "スーパー", rank: 1 }]
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
    dexNo: 174,
    formId: "normal",
    name: "ププリン",

    imageCard: getImagePath("card", 174, "normal"),
    imageDetail: getImagePath("panel", 174, "normal"),

    type: ["フェアリー"],
    tokui: "スキル",

    sleepType: "ぐっすり",

    mainSkill: "げんきオールS",

    ingredients: [
      {
        name: "あまいミツ",
        countsByLevel: { 1: 1, 30: 2, 60: 4 }
      },
      {
        name: "ピュアなオイル",
        countsByLevel: { 30: 2, 60: 3 }
      },
      {
        name: "リラックスカカオ",
        countsByLevel: { 60: 2 }
      }
    ],

    baseHelpTime: 5200,
    ingRate: 0.170,
    skillRate: 0.038,
    maxHold: 8,

    berryIndex: 0.83,
    ingIndex: 0.54,
    skillIndicator: 1.29,

    evolutionChain: [
      {
        dexNo: 174,
        formId: "normal",
        evolveTo: [
          {
            targetDexNo: 39,
            targetFormId: "normal",
            conditions: [
              { type: "sleep", value: 50 },
              { type: "candy", value: 20 }
            ]
          }
        ]
      },
      {
        dexNo: 39,
        formId: "normal",
        evolveTo: [
          {
            targetDexNo: 40,
            targetFormId: "normal",
            conditions: [
              { type: "item", value: "つきのいし" },
              { type: "candy", value: 80 }
            ]
          }
        ]
      },
      {
        dexNo: 40,
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
          3: [{ type: "スーパー", rank: 2 }],
          4: [{ type: "スーパー", rank: 1 }]
        }
      }
    ]
  },

  {
    dexNo: 175,
    formId: "normal",
    name: "トゲピー",

    imageCard: getImagePath("card", 175, "normal"),
    imageDetail: getImagePath("panel", 175, "normal"),

    type: ["フェアリー"],
    tokui: "スキル",

    sleepType: "ぐっすり",

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

    baseHelpTime: 4800,
    ingRate: 0.151,
    skillRate: 0.049,
    maxHold: 8,

    berryIndex: 0.92,
    ingIndex: 0.55,
    skillIndicator: 1.77,

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
    dexNo: 176,
    formId: "normal",
    name: "トゲチック",

    imageCard: getImagePath("card", 176, "normal"),
    imageDetail: getImagePath("panel", 176, "normal"),

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

    baseHelpTime: 3800,
    ingRate: 0.163,
    skillRate: 0.056,
    maxHold: 15,

    berryIndex: 1.15,
    ingIndex: 0.85,
    skillIndicator: 2.77,

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
          1: [{ type: "スーパー", rank: 4 }],
          2: [{ type: "ハイパー", rank: 3 }],
          3: null,
          4: [{ type: "ハイパー", rank: 4 }]
        }
      },
      {
        name: "ラピスラズリ湖畔",
        stars: {
          1: [{ type: "ノーマル", rank: 3 }],
          2: [{ type: "スーパー", rank: 2 }],
          3: [{ type: "ハイパー", rank: 3 }],
          4: [{ type: "スーパー", rank: 3 }]
        }
      }
    ]
  },

  {
    dexNo: 177,
    formId: "normal",
    name: "ネイティ",

    imageCard: getImagePath("card", 177, "normal"),
    imageDetail: getImagePath("panel", 177, "normal"),

    type: ["エスパー"],
    tokui: "きのみ",

    sleepType: "すやすや",

    mainSkill: "食材ゲットS",

    ingredients: [
      {
        name: "とくせんエッグ",
        countsByLevel: { 1: 1, 30: 2, 60: 4 }
      },
      {
        name: "リラックスカカオ",
        countsByLevel: { 30: 2, 60: 3 }
      },
      {
        name: "とくせんリンゴ",
        countsByLevel: { 60: 5 }
      }
    ],

    baseHelpTime: 4500,
    ingRate: 0.185,
    skillRate: 0.016,
    maxHold: 11,

    berryIndex: 1.41,
    ingIndex: 0.82,
    skillIndicator: 0.59,

    evolutionChain: [
      {
        dexNo: 177,
        formId: "normal",
        evolveTo: [
          {
            targetDexNo: 178,
            targetFormId: "normal",
            conditions: [
              { type: "level", value: 19 },
              { type: "candy", value: 40 }
            ]
          }
        ]
      },
      {
        dexNo: 178,
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
    dexNo: 178,
    formId: "normal",
    name: "ネイティオ",

    imageCard: getImagePath("card", 178, "normal"),
    imageDetail: getImagePath("panel", 178, "normal"),

    type: ["エスパー"],
    tokui: "きのみ",

    sleepType: "すやすや",

    mainSkill: "食材ゲットS",

    ingredients: [
      {
        name: "とくせんエッグ",
        countsByLevel: { 1: 1, 30: 2, 60: 4 }
      },
      {
        name: "リラックスカカオ",
        countsByLevel: { 30: 2, 60: 3 }
      },
      {
        name: "とくせんリンゴ",
        countsByLevel: { 60: 5 }
      }
    ],

    baseHelpTime: 2500,
    ingRate: 0.191,
    skillRate: 0.025,
    maxHold: 24,

    berryIndex: 2.52,
    ingIndex: 1.60,
    skillIndicator: 1.70,

    evolutionChain: [
      {
        dexNo: 177,
        formId: "normal",
        evolveTo: [
          {
            targetDexNo: 178,
            targetFormId: "normal",
            conditions: [
              { type: "level", value: 19 },
              { type: "candy", value: 40 }
            ]
          }
        ]
      },
      {
        dexNo: 178,
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
  },

  {
    dexNo: 179,
    formId: "normal",
    name: "メリープ",

    imageCard: getImagePath("card", 179, "normal"),
    imageDetail: getImagePath("panel", 179, "normal"),

    type: ["でんき"],
    tokui: "スキル",

    sleepType: "すやすや",

    mainSkill: "エナジーチャージM",

    ingredients: [
      {
        name: "げきからハーブ",
        countsByLevel: { 1: 1, 30: 2, 60: 4 }
      },
      {
        name: "とくせんエッグ",
        countsByLevel: { 30: 3, 60: 4 }
      }
    ],

    baseHelpTime: 4600,
    ingRate: 0.128,
    skillRate: 0.047,
    maxHold: 9,

    berryIndex: 0.95,
    ingIndex: 0.54,
    skillIndicator: 1.79,

    evolutionChain: [
      {
        dexNo: 179,
        formId: "normal",
        evolveTo: [
          {
            targetDexNo: 180,
            targetFormId: "normal",
            conditions: [
              { type: "level", value: 11 },
              { type: "candy", value: 40 }
            ]
          }
        ]
      },
      {
        dexNo: 180,
        formId: "normal",
        evolveTo: [
          {
            targetDexNo: 181,
            targetFormId: "normal",
            conditions: [
              { type: "level", value: 23 },
              { type: "candy", value: 80 }
            ]
          }
        ]
      },
      {
        dexNo: 181,
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
          3: [{ type: "スーパー", rank: 1 }],
          4: [{ type: "スーパー", rank: 2 }]
        }
      }
    ]
  },

  {
    dexNo: 180,
    formId: "normal",
    name: "モココ",

    imageCard: getImagePath("card", 180, "normal"),
    imageDetail: getImagePath("panel", 180, "normal"),

    type: ["でんき"],
    tokui: "スキル",

    sleepType: "すやすや",

    mainSkill: "エナジーチャージM",

    ingredients: [
      {
        name: "げきからハーブ",
        countsByLevel: { 1: 1, 30: 2, 60: 4 }
      },
      {
        name: "とくせんエッグ",
        countsByLevel: { 30: 3, 60: 4 }
      }
    ],

    baseHelpTime: 3300,
    ingRate: 0.127,
    skillRate: 0.046,
    maxHold: 16,

    berryIndex: 1.32,
    ingIndex: 0.78,
    skillIndicator: 2.57,

    evolutionChain: [
      {
        dexNo: 179,
        formId: "normal",
        evolveTo: [
          {
            targetDexNo: 180,
            targetFormId: "normal",
            conditions: [
              { type: "level", value: 11 },
              { type: "candy", value: 40 }
            ]
          }
        ]
      },
      {
        dexNo: 180,
        formId: "normal",
        evolveTo: [
          {
            targetDexNo: 181,
            targetFormId: "normal",
            conditions: [
              { type: "level", value: 23 },
              { type: "candy", value: 80 }
            ]
          }
        ]
      },
      {
        dexNo: 181,
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
          4: [{ type: "スーパー", rank: 2 }]
        }
      },
      {
        name: "ワカクサ本島EX",
        stars: {
          1: [{ type: "ノーマル", rank: 1 }],
          2: [{ type: "スーパー", rank: 1 }],
          3: [{ type: "スーパー", rank: 4 }],
          4: [{ type: "スーパー", rank: 5 }]
        }
      }
    ]
  },

  {
    dexNo: 181,
    formId: "normal",
    name: "デンリュウ",

    imageCard: getImagePath("card", 181, "normal"),
    imageDetail: getImagePath("panel", 181, "normal"),

    type: ["でんき"],
    tokui: "スキル",

    sleepType: "すやすや",

    mainSkill: "エナジーチャージM",

    ingredients: [
      {
        name: "げきからハーブ",
        countsByLevel: { 1: 1, 30: 2, 60: 4 }
      },
      {
        name: "とくせんエッグ",
        countsByLevel: { 30: 3, 60: 4 }
      }
    ],

    baseHelpTime: 2500,
    ingRate: 0.130,
    skillRate: 0.047,
    maxHold: 25,

    berryIndex: 1.74,
    ingIndex: 1.12,
    skillIndicator: 3.62,

    evolutionChain: [
      {
        dexNo: 179,
        formId: "normal",
        evolveTo: [
          {
            targetDexNo: 180,
            targetFormId: "normal",
            conditions: [
              { type: "level", value: 11 },
              { type: "candy", value: 40 }
            ]
          }
        ]
      },
      {
        dexNo: 180,
        formId: "normal",
        evolveTo: [
          {
            targetDexNo: 181,
            targetFormId: "normal",
            conditions: [
              { type: "level", value: 23 },
              { type: "candy", value: 80 }
            ]
          }
        ]
      },
      {
        dexNo: 181,
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
    dexNo: 185,
    formId: "normal",
    name: "ウソッキー",

    imageCard: getImagePath("card", 185, "normal"),
    imageDetail: getImagePath("panel", 185, "normal"),

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

    baseHelpTime: 4000,
    ingRate: 0.217,
    skillRate: 0.072,
    maxHold: 21,

    berryIndex: 1.17,
    ingIndex: 1.24,
    skillIndicator: 3.75,

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
          1: [{ type: "ノーマル", rank: 3 }],
          2: [{ type: "スーパー", rank: 2 }],
          3: null,
          4: [{ type: "ハイパー", rank: 1 }]
        }
      },
      {
        name: "シアンの砂浜",
        stars: {
          1: [{ type: "ノーマル", rank: 1 }],
          2: [{ type: "ノーマル", rank: 4 }],
          3: [{ type: "スーパー", rank: 5 }],
          4: [{ type: "ハイパー", rank: 1 }]
        }
      },
      {
        name: "ワカクサ本島EX",
        stars: {
          1: [{ type: "ノーマル", rank: 1 }],
          2: [{ type: "ノーマル", rank: 5 }],
          3: [{ type: "スーパー", rank: 3 }],
          4: [{ type: "ハイパー", rank: 1 }]
        }
      }
    ]
  },

  {
    dexNo: 194,
    formId: "normal",
    name: "ウパー",

    imageCard: getImagePath("card", 194, "normal"),
    imageDetail: getImagePath("panel", 194, "normal"),

    type: ["みず"],
    tokui: "食材",

    sleepType: "ぐっすり",

    mainSkill: "げんきチャージS",

    ingredients: [
      {
        name: "あじわいキノコ",
        countsByLevel: { 1: 2, 30: 5, 60: 7 }
      },
      {
        name: "ほっこりポテト",
        countsByLevel: { 30: 6, 60: 10 }
      },
      {
        name: "マメミート",
        countsByLevel: { 60: 12 }
      }
    ],

    baseHelpTime: 5900,
    ingRate: 0.201,
    skillRate: 0.038,
    maxHold: 10,

    berryIndex: 0.84,
    ingIndex: 2.02,
    skillIndicator: 1.10,

    evolutionChain: [
      {
        dexNo: 194,
        formId: "normal",
        evolveTo: [
          {
            targetDexNo: 195,
            targetFormId: "normal",
            conditions: [
              { type: "level", value: 15 },
              { type: "candy", value: 40 }
            ]
          }
        ]
      },
      {
        dexNo: 195,
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
      }
    ]
  },

  {
    dexNo: 194,
    formId: "paldea",
    name: "ウパー(パルデアのすがた)",

    imageCard: getImagePath("card", 194, "paldea"),
    imageDetail: getImagePath("panel", 194, "paldea"),

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

    baseHelpTime: 6400,
    ingRate: 0.209,
    skillRate: 0.056,
    maxHold: 9,

    berryIndex: 0.79,
    ingIndex: 1.76,
    skillIndicator: 1.52,

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
          1: [{ type: "スーパー", rank: 2 }],
          2: [{ type: "ハイパー", rank: 1 }],
          3: null,
          4: [{ type: "マスター", rank: 1 }]
        }
      },
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
        name: "ワカクサ本島EX",
        stars: {
          1: [{ type: "ノーマル", rank: 5 }],
          2: [{ type: "スーパー", rank: 2 }],
          3: [{ type: "ハイパー", rank: 2 }],
          4: [{ type: "ハイパー", rank: 3 }]
        }
      }
    ]
  },

  {
    dexNo: 195,
    formId: "normal",
    name: "ヌオー",

    imageCard: getImagePath("card", 195, "normal"),
    imageDetail: getImagePath("panel", 195, "normal"),

    type: ["みず"],
    tokui: "食材",

    sleepType: "ぐっすり",

    mainSkill: "げんきチャージS",

    ingredients: [
      {
        name: "あじわいキノコ",
        countsByLevel: { 1: 2, 30: 5, 60: 7 }
      },
      {
        name: "ほっこりポテト",
        countsByLevel: { 30: 6, 60: 10 }
      },
      {
        name: "マメミート",
        countsByLevel: { 60: 12 }
      }
    ],

    baseHelpTime: 3400,
    ingRate: 0.190,
    skillRate: 0.032,
    maxHold: 21,

    berryIndex: 1.48,
    ingIndex: 3.36,
    skillIndicator: 1.68,

    evolutionChain: [
      {
        dexNo: 194,
        formId: "normal",
        evolveTo: [
          {
            targetDexNo: 195,
            targetFormId: "normal",
            conditions: [
              { type: "level", value: 15 },
              { type: "candy", value: 40 }
            ]
          }
        ]
      },
      {
        dexNo: 195,
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
          3: null,
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
      }
    ]
  },

  {
    dexNo: 196,
    formId: "normal",
    name: "エーフィ",

    imageCard: getImagePath("card", 196, "normal"),
    imageDetail: getImagePath("panel", 196, "normal"),

    type: ["エスパー"],
    tokui: "スキル",

    sleepType: "すやすや",

    mainSkill: "エナジーチャージM",

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

    baseHelpTime: 2400,
    ingRate: 0.164,
    skillRate: 0.044,
    maxHold: 21,

    berryIndex: 1.81,
    ingIndex: 1.02,
    skillIndicator: 3.40,

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
    dexNo: 197,
    formId: "normal",
    name: "ブラッキー",

    imageCard: getImagePath("card", 197, "normal"),
    imageDetail: getImagePath("panel", 197, "normal"),

    type: ["あく"],
    tokui: "スキル",

    sleepType: "うとうと",

    mainSkill: "つきのひかり(げんきチャージS)",

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
    skillRate: 0.101,
    maxHold: 19,

    berryIndex: 1.51,
    ingIndex: 1.23,
    skillIndicator: 6.08,

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
        name: "トープ洞窟",
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
          1: [{ type: "スーパー", rank: 3 }],
          2: [{ type: "ハイパー", rank: 1 }],
          3: [{ type: "ハイパー", rank: 5 }],
          4: [{ type: "マスター", rank: 2 }]
        }
      }
    ]
  },

  {
    dexNo: 198,
    formId: "normal",
    name: "ヤミカラス",

    imageCard: getImagePath("card", 198, "normal"),
    imageDetail: getImagePath("panel", 198, "normal"),

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

    baseHelpTime: 3600,
    ingRate: 0.141,
    skillRate: 0.062,
    maxHold: 13,

    berryIndex: 1.48,
    ingIndex: 0.90,
    skillIndicator: 3.07,

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
          1: [{ type: "ハイパー", rank: 1 }],
          2: [{ type: "ハイパー", rank: 5 }],
          3: null,
          4: [{ type: "マスター", rank: 1 }]
        }
      },
      {
        name: "ウノハナ雪原",
        stars: {
          1: [{ type: "スーパー", rank: 1 }],
          2: [{ type: "スーパー", rank: 5 }],
          3: [{ type: "ハイパー", rank: 4 }],
          4: [{ type: "ハイパー", rank: 1 }]
        }
      },
      {
        name: "ゴールド旧発電所",
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
          1: [{ type: "スーパー", rank: 1 }],
          2: [{ type: "ハイパー", rank: 1 }],
          3: [{ type: "ハイパー", rank: 5 }],
          4: [{ type: "マスター", rank: 4 }]
        }
      }
    ]
  },

  {
    dexNo: 199,
    formId: "normal",
    name: "ヤドキング",

    imageCard: getImagePath("card", 199, "normal"),
    imageDetail: getImagePath("panel", 199, "normal"),

    type: ["みず"],
    tokui: "スキル",

    sleepType: "すやすや",

    mainSkill: "げんきエールS",

    ingredients: [
      {
        name: "リラックスカカオ",
        countsByLevel: { 1: 1, 30: 2, 60: 4 }
      },
      {
        name: "おいしいシッポ",
        countsByLevel: { 30: 1, 60: 2 }
      },
      {
        name: "あんみんトマト",
        countsByLevel: { 60: 5 }
      }
    ],

    baseHelpTime: 3400,
    ingRate: 0.166,
    skillRate: 0.087,
    maxHold: 22,

    berryIndex: 1.52,
    ingIndex: 1.48,
    skillIndicator: 5.24,

    evolutionChain: [
      {
        dexNo: 79,
        formId: "normal",
        evolveTo: [
          { targetDexNo: 80,
            targetFormId: "normal",
            conditions: [
              { type: "level", value: 28 },
              { type: "candy", value: 80 } ]
          },
          { targetDexNo: 199,
            targetFormId: "normal",
            conditions: [
              { type: "item", value: "おうじゃのしるし" },
              { type: "item", value: "つながりのひも" },
              { type: "candy", value: 80 } ]
          }
        ]
      }
    ],

    fields: [
      {
        name: "シアンの砂浜",
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
    dexNo: 202,
    formId: "normal",
    name: "ソーナンス",

    imageCard: getImagePath("card", 202, "normal"),
    imageDetail: getImagePath("panel", 202, "normal"),

    type: ["エスパー"],
    tokui: "スキル",

    sleepType: "すやすや",

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

    baseHelpTime: 3500,
    ingRate: 0.211,
    skillRate: 0.082,
    maxHold: 21,

    berryIndex: 1.17,
    ingIndex: 1.15,
    skillIndicator: 4.77,

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
          1: [{ type: "ノーマル", rank: 4 }],
          2: [{ type: "スーパー", rank: 3 }],
          3: null,
          4: [{ type: "ハイパー", rank: 1 }]
        }
      },
      {
        name: "ラピスラズリ湖畔",
        stars: {
          1: [{ type: "ノーマル", rank: 1 }],
          2: [{ type: "ノーマル", rank: 2 }],
          3: [{ type: "スーパー", rank: 3 }],
          4: [{ type: "ハイパー", rank: 1 }]
        }
      }
    ]
  },

  {
    dexNo: 208,
    formId: "normal",
    name: "ハガネール",

    imageCard: getImagePath("card", 208, "normal"),
    imageDetail: getImagePath("panel", 208, "normal"),

    type: ["はがね"],
    tokui: "きのみ",

    sleepType: "ぐっすり",

    mainSkill: "食材ゲットS",

    ingredients: [
      {
        name: "あんみんトマト",
        countsByLevel: { 1: 1, 30: 2, 60: 4 }
      },
      {
        name: "マメミート",
        countsByLevel: { 30: 2, 60: 4 }
      },
      {
        name: "ほっこりポテト",
        countsByLevel: { 60: 3 }
      }
    ],

    baseHelpTime: 3000,
    ingRate: 0.154,
    skillRate: 0.032,
    maxHold: 30,

    berryIndex: 2.79,
    ingIndex: 0.90,
    skillIndicator: 1.97,

    evolutionChain: [
      {
        dexNo: 95,
        formId: "normal",
        evolveTo: [
          {
            targetDexNo: 208,
            targetFormId: "normal",
            conditions: [
              { type: "item", value: "メタルコート" },
              { type: "item", value: "つながりのひも" },
              { type: "candy", value: 80 }
            ]
          }
        ]
      },
      {
        dexNo: 208,
        formId: "normal",
        evolveTo: null
      }
    ],

    fields: [
      {
        name: "トープ洞窟",
        stars: {
          1: [{ type: "マスター", rank: 2 }],
          2: [{ type: "マスター", rank: 6 }],
          3: [{ type: "マスター", rank: 12 }]
        }
      },
      {
        name: "ゴールド旧発電所",
        stars: {
          1: [{ type: "ハイパー", rank: 4 }],
          2: [{ type: "マスター", rank: 3 }],
          3: null
        }
      },
      {
        name: "ワカクサ本島EX",
        stars: {
          1: [{ type: "ハイパー", rank: 2 }],
          2: [{ type: "ハイパー", rank: 5 }],
          3: [{ type: "マスター", rank: 6 }]
        }
      }
    ]
  },

  {
    dexNo: 213,
    formId: "normal",
    name: "ツボツボ",

    imageCard: getImagePath("card", 213, "normal"),
    imageDetail: getImagePath("panel", 213, "normal"),

    type: ["むし"],
    tokui: "スキル",

    sleepType: "うとうと",

    mainSkill: "きのみジュース(げんきオールS)",

    ingredients: [
      {
        name: "ピュアなオイル",
        countsByLevel: { 1: 1, 30: 2, 60: 4 }
      },
      {
        name: "めざましコーヒー",
        countsByLevel: { 30: 2, 60: 3 }
      },
      {
        name: "あまいミツ",
        countsByLevel: { 60: 4 }
      }
    ],

    baseHelpTime: 3600,
    ingRate: 0.205,
    skillRate: 0.059,
    maxHold: 16,

    berryIndex: 1.06,
    ingIndex: 1.37,
    skillIndicator: 3.06,

    evolutionChain: [
      {
        dexNo: 213,
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
        name: "シアンの砂浜",
        stars: {
          1: [{ type: "マスター", rank: 1 }],
          2: [{ type: "マスター", rank: 5 }],
          3: [{ type: "マスター", rank: 11 }],
          4: [{ type: "マスター", rank: 6 }]
        }
      },
      {
        name: "トープ洞窟",
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
          2: [{ type: "ハイパー", rank: 4 }],
          3: [{ type: "マスター", rank: 9 }],
          4: [{ type: "マスター", rank: 10 }]
        }
      }
    ]
  },

  {
    dexNo: 214,
    formId: "normal",
    name: "ヘラクロス",

    imageCard: getImagePath("card", 214, "normal"),
    imageDetail: getImagePath("panel", 214, "normal"),

    type: ["むし"],
    tokui: "スキル",

    sleepType: "うとうと",

    mainSkill: "ビルドアップ(料理アシストS)",

    ingredients: [
      {
        name: "あまいミツ",
        countsByLevel: { 1: 1, 30: 2, 60: 4 }
      },
      {
        name: "あじわいキノコ",
        countsByLevel: { 30: 1, 60: 2 }
      },
      {
        name: "マメミート",
        countsByLevel: { 60: 4 }
      }
    ],

    baseHelpTime: 2300,
    ingRate: 0.158,
    skillRate: 0.047,
    maxHold: 20,

    berryIndex: 1.76,
    ingIndex: 1.09,
    skillIndicator: 3.70,

    evolutionChain: [
      {
        dexNo: 214,
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
          3: [{ type: "マスター", rank: 7 }],
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
        name: "アンバー渓谷",
        stars: {
          1: [{ type: "ノーマル", rank: 4 }],
          2: [{ type: "スーパー", rank: 3 }],
          3: [{ type: "ハイパー", rank: 4 }],
          4: [{ type: "ハイパー", rank: 1 }]
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
    dexNo: 215,
    formId: "normal",
    name: "ニューラ",

    imageCard: getImagePath("card", 215, "normal"),
    imageDetail: getImagePath("panel", 215, "normal"),

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

    baseHelpTime: 3200,
    ingRate: 0.255,
    skillRate: 0.019,
    maxHold: 17,

    berryIndex: 2.17,
    ingIndex: 1.59,
    skillIndicator: 0.99,

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
          1: [{ type: "ハイパー", rank: 1 }],
          2: [{ type: "ハイパー", rank: 5 }],
          3: null,
          4: [{ type: "マスター", rank: 1 }]
        }
      },
      {
        name: "ウノハナ雪原",
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
          2: [{ type: "ハイパー", rank: 1 }],
          3: [{ type: "ハイパー", rank: 5 }],
          4: [{ type: "マスター", rank: 4 }]
        }
      }
    ]
  },

  {
    dexNo: 225,
    formId: "normal",
    name: "デリバード",

    imageCard: getImagePath("card", 225, "normal"),
    imageDetail: getImagePath("panel", 225, "normal"),

    type: ["ひこう"],
    tokui: "食材",

    sleepType: "うとうと",

    mainSkill: "プレゼント(食材ゲットS)",

    ingredients: [
      {
        name: "とくせんエッグ",
        countsByLevel: { 1: 2, 30: 5, 60: 7 }
      },
      {
        name: "とくせんリンゴ",
        countsByLevel: { 30: 6, 60: 9 }
      },
      {
        name: "リラックスカカオ",
        countsByLevel: { 60: 5 }
      }
    ],

    baseHelpTime: 2500,
    ingRate: 0.188,
    skillRate: 0.030,
    maxHold: 20,

    berryIndex: 1.56,
    ingIndex: 2.89,
    skillIndicator: 2.03,

    evolutionChain: [
      {
        dexNo: 225,
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
        name: "ウノハナ雪原",
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
          1: [{ type: "スーパー", rank: 3 }],
          2: [{ type: "ハイパー", rank: 1 }],
          3: [{ type: "ハイパー", rank: 5 }],
          4: [{ type: "マスター", rank: 1 }]
        }
      }
    ]
  },

  {
    dexNo: 228,
    formId: "normal",
    name: "デルビル",

    imageCard: getImagePath("card", 228, "normal"),
    imageDetail: getImagePath("panel", 228, "normal"),

    type: ["あく"],
    tokui: "きのみ",

    sleepType: "うとうと",

    mainSkill: "エナジーチャージM",

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
        name: "ふといながねぎ",
        countsByLevel: { 60: 3 }
      }
    ],

    baseHelpTime: 4900,
    ingRate: 0.201,
    skillRate: 0.037,
    maxHold: 10,

    berryIndex: 1.52,
    ingIndex: 0.94,
    skillIndicator: 1.24,

    evolutionChain: [
      {
        dexNo: 228,
        formId: "normal",
        evolveTo: [
          {
            targetDexNo: 229,
            targetFormId: "normal",
            conditions: [
              { type: "level", value: 18 },
              { type: "candy", value: 40 }
            ]
          }
        ]
      },
      {
        dexNo: 229,
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
        name: "トープ洞窟",
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
          2: [{ type: "ノーマル", rank: 5 }],
          3: [{ type: "スーパー", rank: 2 }],
          4: [{ type: "スーパー", rank: 3 }]
        }
      }
    ]
  },

  {
    dexNo: 229,
    formId: "normal",
    name: "ヘルガー",

    imageCard: getImagePath("card", 229, "normal"),
    imageDetail: getImagePath("panel", 229, "normal"),

    type: ["あく"],
    tokui: "きのみ",

    sleepType: "うとうと",

    mainSkill: "エナジーチャージM",

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
        name: "ふといながねぎ",
        countsByLevel: { 60: 3 }
      }
    ],

    baseHelpTime: 3300,
    ingRate: 0.203,
    skillRate: 0.040,
    maxHold: 21,

    berryIndex: 2.25,
    ingIndex: 1.51,
    skillIndicator: 2.11,

    evolutionChain: [
      {
        dexNo: 228,
        formId: "normal",
        evolveTo: [
          {
            targetDexNo: 229,
            targetFormId: "normal",
            conditions: [
              { type: "level", value: 18 },
              { type: "candy", value: 40 }
            ]
          }
        ]
      },
      {
        dexNo: 229,
        formId: "normal",
        evolveTo: null
      }
    ],

    fields: [
      {
        name: "トープ洞窟",
        stars: {
          1: [{ type: "ノーマル", rank: 4 }],
          2: [{ type: "スーパー", rank: 3 }],
          3: [{ type: "ハイパー", rank: 4 }],
          4: [{ type: "ハイパー", rank: 1 }]
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
    dexNo: 242,
    formId: "normal",
    name: "ハピナス",

    imageCard: getImagePath("card", 242, "normal"),
    imageDetail: getImagePath("panel", 242, "normal"),

    type: ["ノーマル"],
    tokui: "食材",

    sleepType: "すやすや",

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

    baseHelpTime: 3100,
    ingRate: 0.238,
    skillRate: 0.023,
    maxHold: 31,

    berryIndex: 1.38,
    ingIndex: 3.80,
    skillIndicator: 1.43,

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
          2: [{ type: "マスター", rank: 2 }],
          3: [{ type: "マスター", rank: 10 }],
          4: [{ type: "マスター", rank: 12 }]
        }
      }
    ]
  },

  {
    dexNo: 243,
    formId: "normal",
    name: "ライコウ",

    imageCard: getImagePath("card", 243, "normal"),
    imageDetail: getImagePath("panel", 243, "normal"),

    type: ["でんき"],
    tokui: "スキル",

    sleepType: "すやすや",

    mainSkill: "おてつだいブースト",

    ingredients: [
      {
        name: "マメミート",
        countsByLevel: { 1: 1, 30: 2, 60: 4 }
      },
      {
        name: "げきからハーブ",
        countsByLevel: { 30: 2, 60: 3 }
      },
      {
        name: "ふといながねぎ",
        countsByLevel: { 60: 2 }
      }
    ],

    baseHelpTime: 2100,
    ingRate: 0.192,
    skillRate: 0.019,
    maxHold: 22,

    berryIndex: 1.92,
    ingIndex: 1.76,
    skillIndicator: 1.62,

    evolutionChain: [
      {
        dexNo: 243,
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
        name: "ゴールド旧発電所",
        stars: {
          1: [{ type: "マスター", rank: 2 }],
          2: [{ type: "マスター", rank: 6 }],
          3: [{ type: "マスター", rank: 12 }]
        }
      },
      {
        name: "ワカクサ本島EX",
        stars: {
          1: [{ type: "ハイパー", rank: 3 }],
          2: [{ type: "マスター", rank: 6 }],
          3: [{ type: "マスター", rank: 14 }]
        }
      }
    ]
  },

  {
    dexNo: 244,
    formId: "normal",
    name: "エンテイ",

    imageCard: getImagePath("card", 244, "normal"),
    imageDetail: getImagePath("panel", 244, "normal"),

    type: ["ほのお"],
    tokui: "スキル",

    sleepType: "すやすや",

    mainSkill: "おてつだいブースト",

    ingredients: [
      {
        name: "ピュアなオイル",
        countsByLevel: { 1: 1, 30: 2, 60: 4 }
      },
      {
        name: "あんみんトマト",
        countsByLevel: { 30: 2, 60: 4 }
      },
      {
        name: "あじわいキノコ",
        countsByLevel: { 60: 3 }
      }
    ],

    baseHelpTime: 2400,
    ingRate: 0.187,
    skillRate: 0.023,
    maxHold: 19,

    berryIndex: 1.83,
    ingIndex: 1.64,
    skillIndicator: 1.70,

    evolutionChain: [
      {
        dexNo: 244,
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
        name: "トープ洞窟",
        stars: {
          1: [{ type: "マスター", rank: 5 }],
          2: [{ type: "マスター", rank: 9 }],
          3: [{ type: "マスター", rank: 15 }]
        }
      },
      {
        name: "アンバー渓谷",
        stars: {
          1: [{ type: "マスター", rank: 1 }],
          2: [{ type: "マスター", rank: 5 }],
          3: [{ type: "マスター", rank: 11 }]
        }
      },
      {
        name: "ワカクサ本島EX",
        stars: {
          1: [{ type: "ハイパー", rank: 4 }],
          2: [{ type: "マスター", rank: 7 }],
          3: [{ type: "マスター", rank: 15 }]
        }
      }
    ]
  },

  {
    dexNo: 245,
    formId: "normal",
    name: "スイクン",

    imageCard: getImagePath("card", 245, "normal"),
    imageDetail: getImagePath("panel", 245, "normal"),

    type: ["みず"],
    tokui: "スキル",

    sleepType: "ぐっすり",

    mainSkill: "おてつだいブースト",

    ingredients: [
      {
        name: "とくせんリンゴ",
        countsByLevel: { 1: 1, 30: 2, 60: 4 }
      },
      {
        name: "ピュアなオイル",
        countsByLevel: { 30: 2, 60: 3 }
      },
      {
        name: "ワカクサコーン",
        countsByLevel: { 60: 2 }
      }
    ],

    baseHelpTime: 2700,
    ingRate: 0.277,
    skillRate: 0.026,
    maxHold: 17,

    berryIndex: 1.66,
    ingIndex: 2.05,
    skillIndicator: 1.70,

    evolutionChain: [
      {
        dexNo: 245,
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
        name: "シアンの砂浜",
        stars: {
          1: [{ type: "マスター", rank: 6 }],
          2: [{ type: "マスター", rank: 10 }],
          3: [{ type: "マスター", rank: 16 }]
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
          2: [{ type: "マスター", rank: 7 }],
          3: [{ type: "マスター", rank: 15 }]
        }
      }
    ]
  },

  {
    dexNo: 246,
    formId: "normal",
    name: "ヨーギラス",

    imageCard: getImagePath("card", 246, "normal"),
    imageDetail: getImagePath("panel", 246, "normal"),

    type: ["いわ"],
    tokui: "食材",

    sleepType: "ぐっすり",

    mainSkill: "げんきチャージS",

    ingredients: [
      {
        name: "あったかジンジャー",
        countsByLevel: { 1: 2, 30: 5, 60: 7 }
      },
      {
        name: "ワカクサ大豆",
        countsByLevel: { 30: 5, 60: 8 }
      },
      {
        name: "マメミート",
        countsByLevel: { 60: 8 }
      }
    ],

    baseHelpTime: 4800,
    ingRate: 0.238,
    skillRate: 0.041,
    maxHold: 9,

    berryIndex: 0.95,
    ingIndex: 2.01,
    skillIndicator: 1.39,

    evolutionChain: [
      {
        dexNo: 246,
        formId: "normal",
        evolveTo: [
          {
            targetDexNo: 247,
            targetFormId: "normal",
            conditions: [
              { type: "level", value: 23 },
              { type: "candy", value: 40 }
            ]
          }
        ]
      },
      {
        dexNo: 247,
        formId: "normal",
        evolveTo: [
          {
            targetDexNo: 248,
            targetFormId: "normal",
            conditions: [
              { type: "level", value: 41 },
              { type: "candy", value: 100 }
            ]
          }
        ]
      },
      {
        dexNo: 248,
        formId: "normal",
        evolveTo: null
      }
    ],

    fields: [
      {
        name: "ワカクサ本島",
        stars: {
          1: [{ type: "ノーマル", rank: 4 }],
          2: [{ type: "スーパー", rank: 3 }],
          3: null,
          4: [{ type: "スーパー", rank: 4 }]
        }
      },
      {
        name: "トープ洞窟",
        stars: {
          1: [{ type: "ノーマル", rank: 1 }],
          2: [{ type: "ノーマル", rank: 4 }],
          3: [{ type: "スーパー", rank: 5 }],
          4: [{ type: "スーパー", rank: 1 }]
        }
      },
      {
        name: "アンバー渓谷",
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
          2: [{ type: "ノーマル", rank: 5 }],
          3: [{ type: "スーパー", rank: 3 }],
          4: [{ type: "スーパー", rank: 4 }]
        }
      }
    ]
  },

  {
    dexNo: 247,
    formId: "normal",
    name: "サナギラス",

    imageCard: getImagePath("card", 247, "normal"),
    imageDetail: getImagePath("panel", 247, "normal"),

    type: ["いわ"],
    tokui: "食材",

    sleepType: "ぐっすり",

    mainSkill: "げんきチャージS",

    ingredients: [
      {
        name: "あったかジンジャー",
        countsByLevel: { 1: 2, 30: 5, 60: 7 }
      },
      {
        name: "ワカクサ大豆",
        countsByLevel: { 30: 5, 60: 8 }
      },
      {
        name: "マメミート",
        countsByLevel: { 60: 8 }
      }
    ],

    baseHelpTime: 3600,
    ingRate: 0.247,
    skillRate: 0.045,
    maxHold: 18,

    berryIndex: 1.26,
    ingIndex: 3.02,
    skillIndicator: 2.17,

    evolutionChain: [
      {
        dexNo: 246,
        formId: "normal",
        evolveTo: [
          {
            targetDexNo: 247,
            targetFormId: "normal",
            conditions: [
              { type: "level", value: 23 },
              { type: "candy", value: 40 }
            ]
          }
        ]
      },
      {
        dexNo: 247,
        formId: "normal",
        evolveTo: [
          {
            targetDexNo: 248,
            targetFormId: "normal",
            conditions: [
              { type: "level", value: 41 },
              { type: "candy", value: 100 }
            ]
          }
        ]
      },
      {
        dexNo: 248,
        formId: "normal",
        evolveTo: null
      }
    ],

    fields: [
     {
        name: "トープ洞窟",
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
          2: [{ type: "スーパー", rank: 2 }],
          3: [{ type: "ハイパー", rank: 1 }],
          4: [{ type: "ハイパー", rank: 2 }]
        }
      }
    ]
  },

  {
    dexNo: 248,
    formId: "normal",
    name: "バンギラス",

    imageCard: getImagePath("card", 248, "normal"),
    imageDetail: getImagePath("panel", 248, "normal"),

    type: ["あく"],
    tokui: "食材",

    sleepType: "うとうと",

    mainSkill: "げんきチャージS",

    ingredients: [
      {
        name: "あったかジンジャー",
        countsByLevel: { 1: 2, 30: 5, 60: 7 }
      },
      {
        name: "ワカクサ大豆",
        countsByLevel: { 30: 5, 60: 8 }
      },
      {
        name: "マメミート",
        countsByLevel: { 60: 8 }
      }
    ],

    baseHelpTime: 2700,
    ingRate: 0.266,
    skillRate: 0.052,
    maxHold: 29,

    berryIndex: 1.69,
    ingIndex: 4.64,
    skillIndicator: 3.45,

    evolutionChain: [
      {
        dexNo: 246,
        formId: "normal",
        evolveTo: [
          {
            targetDexNo: 247,
            targetFormId: "normal",
            conditions: [
              { type: "level", value: 23 },
              { type: "candy", value: 40 }
            ]
          }
        ]
      },
      {
        dexNo: 247,
        formId: "normal",
        evolveTo: [
          {
            targetDexNo: 248,
            targetFormId: "normal",
            conditions: [
              { type: "level", value: 41 },
              { type: "candy", value: 100 }
            ]
          }
        ]
      },
      {
        dexNo: 248,
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
        name: "ワカクサ本島EX",
        stars: {
          1: [{ type: "ハイパー", rank: 2 }],
          2: [{ type: "マスター", rank: 1 }],
          3: [{ type: "マスター", rank: 7 }],
          4: [{ type: "マスター", rank: 9 }]
        }
      }
    ]
  }

];
