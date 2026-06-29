function getImagePath(type, dexNo, formId) {
  const no = String(dexNo).padStart(4, "0");

  if (formId === "normal") {
    return `src_database/img/${type}/${no}.png`;
  }

  return `src_database/img/${type}/${no}_${formId}.png`;
}

const pokedexData_Kanto = [

  {
    dexNo: 1,
    formId: "normal",
    name: "フシギダネ",

    imageCard: getImagePath("card", 1, "normal"),
    imageDetail: getImagePath("panel", 1, "normal"),

    type: ["くさ"],
    tokui: "食材",

    sleepType: "うとうと",

    mainSkill: "食材ゲットS",

    ingredients: [
      {
        name: "あまいミツ",
        countsByLevel: { 1: 2, 30: 5, 60: 7 }
      },
      {
        name: "あんみんトマト",
        countsByLevel: { 30: 4, 60: 7 }
      },
      {
        name: "ほっこりポテト",
        countsByLevel: { 60: 6 }
      }
    ],

    baseHelpTime: 4400,
    ingRate: 0.257,
    skillRate: 0.019,
    maxHold: 11,

    berryIndex: 1.01,
    ingIndex: 2.36,
    skillIndicator:0.373,

    evolutionChain: [
      {
        dexNo: 1,
        formId: "normal",
        evolveTo: [
          {
            targetDexNo: 2,
            targetFormId: "normal",
            conditions: [
              { type: "level", value: 12 },
              { type: "candy", value: 40 }
            ]
          }
        ]
      },
      {
        dexNo: 2,
        formId: "normal",
        evolveTo: [
          {
            targetDexNo: 3,
            targetFormId: "normal",
            conditions: [
              { type: "level", value: 24 },
              { type: "candy", value: 80 }
            ]
          }
        ]
      },
      {
        dexNo: 3,
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
          3: [{ type: "スーパー", rank: 2 }],
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
    dexNo: 2,
    formId: "normal",
    name: "フシギソウ",

    imageCard: getImagePath("card", 2, "normal"),
    imageDetail: getImagePath("panel", 2, "normal"),

    type: ["くさ"],
    tokui: "食材",

    sleepType: "うとうと",

    mainSkill: "食材ゲットS",

    ingredients: [
      {
        name: "あまいミツ",
        countsByLevel: { 1: 2, 30: 5, 60: 7 }
      },
      {
        name: "あんみんトマト",
        countsByLevel: { 30: 4, 60: 7 }
      },
      {
        name: "ほっこりポテト",
        countsByLevel: { 60: 6 }
      }
    ],

    baseHelpTime: 3300,
    ingRate: 0.255,
    skillRate: 0.019,
    maxHold: 14,

    berryIndex: 1.35,
    ingIndex: 3.13,
    skillIndicator:0.497,

    evolutionChain: [
      {
        dexNo: 1,
        formId: "normal",
        evolveTo: [
          {
            targetDexNo: 2,
            targetFormId: "normal",
            conditions: [
              { type: "level", value: 12 },
              { type: "candy", value: 40 }
            ]
          }
        ]
      },
      {
        dexNo: 2,
        formId: "normal",
        evolveTo: [
          {
            targetDexNo: 3,
            targetFormId: "normal",
            conditions: [
              { type: "level", value: 24 },
              { type: "candy", value: 80 }
            ]
          }
        ]
      },
      {
        dexNo: 3,
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
    dexNo: 3,
    formId: "normal",
    name: "フシギバナ",

    imageCard: getImagePath("card", 3, "normal"),
    imageDetail: getImagePath("panel", 3, "normal"),

    type: ["くさ"],
    tokui: "食材",

    sleepType: "うとうと",

    mainSkill: "食材ゲットS",

    ingredients: [
      {
        name: "あまいミツ",
        countsByLevel: { 1: 2, 30: 5, 60: 7 }
      },
      {
        name: "あんみんトマト",
        countsByLevel: { 30: 4, 60: 7 }
      },
      {
        name: "ほっこりポテト",
        countsByLevel: { 60: 6 }
      }
    ],

    baseHelpTime: 2800,
    ingRate: 0.266,
    skillRate: 0.021,
    maxHold: 27,

    berryIndex: 1.57,
    ingIndex: 3.84,
    skillIndicator:0.648,

    evolutionChain: [
      {
        dexNo: 1,
        formId: "normal",
        evolveTo: [
          {
            targetDexNo: 2,
            targetFormId: "normal",
            conditions: [
              { type: "level", value: 12 },
              { type: "candy", value: 40 }
            ]
          }
        ]
      },
      {
        dexNo: 2,
        formId: "normal",
        evolveTo: [
          {
            targetDexNo: 3,
            targetFormId: "normal",
            conditions: [
              { type: "level", value: 24 },
              { type: "candy", value: 80 }
            ]
          }
        ]
      },
      {
        dexNo: 3,
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
    dexNo: 4,
    formId: "normal",
    name: "ヒトカゲ",

    imageCard: getImagePath("card", 4, "normal"),
    imageDetail: getImagePath("panel", 4, "normal"),

    type: ["ほのお"],
    tokui: "食材",

    sleepType: "すやすや",

    mainSkill: "食材ゲットS",

    ingredients: [
      {
        name: "マメミート",
        countsByLevel: { 1: 2, 30: 5, 60: 7 }
      },
      {
        name: "あったかジンジャー",
        countsByLevel: { 30: 4, 60: 7 }
      },
      {
        name: "げきからハーブ",
        countsByLevel: { 60: 6 }
      }
    ],

    baseHelpTime: 3500,
    ingRate: 0.201,
    skillRate: 0.011,
    maxHold: 12,

    berryIndex: 1.23,
    ingIndex: 2.35,
    skillIndicator:0.272,

    evolutionChain: [
      {
        dexNo: 4,
        formId: "normal",
        evolveTo: [
          {
            targetDexNo: 5,
            targetFormId: "normal",
            conditions: [
              { type: "level", value: 12 },
              { type: "candy", value: 40 }
            ]
          }
        ]
      },
      {
        dexNo: 5,
        formId: "normal",
        evolveTo: [
          {
            targetDexNo: 6,
            targetFormId: "normal",
            conditions: [
              { type: "level", value: 27 },
              { type: "candy", value: 80 }
            ]
          }
        ]
      },
      {
        dexNo: 6,
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
    dexNo: 5,
    formId: "normal",
    name: "リザード",

    imageCard: getImagePath("card", 5, "normal"),
    imageDetail: getImagePath("panel", 5, "normal"),

    type: ["ほのお"],
    tokui: "食材",

    sleepType: "すやすや",

    mainSkill: "食材ゲットS",

    ingredients: [
      {
        name: "マメミート",
        countsByLevel: { 1: 2, 30: 5, 60: 7 }
      },
      {
        name: "あったかジンジャー",
        countsByLevel: { 30: 4, 60: 7 }
      },
      {
        name: "げきからハーブ",
        countsByLevel: { 60: 6 }
      }
    ],

    baseHelpTime: 3000,
    ingRate: 0.227,
    skillRate: 0.016,
    maxHold: 20,

    berryIndex: 1.39,
    ingIndex: 3.10,
    skillIndicator:0.461,

    evolutionChain: [
      {
        dexNo: 4,
        formId: "normal",
        evolveTo: [
          {
            targetDexNo: 5,
            targetFormId: "normal",
            conditions: [
              { type: "level", value: 12 },
              { type: "candy", value: 40 }
            ]
          }
        ]
      },
      {
        dexNo: 5,
        formId: "normal",
        evolveTo: [
          {
            targetDexNo: 6,
            targetFormId: "normal",
            conditions: [
              { type: "level", value: 27 },
              { type: "candy", value: 80 }
            ]
          }
        ]
      },
      {
        dexNo: 6,
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
    dexNo: 6,
    formId: "normal",
    name: "リザードン",

    imageCard: getImagePath("card", 6, "normal"),
    imageDetail: getImagePath("panel", 6, "normal"),

    type: ["ほのお"],
    tokui: "食材",

    sleepType: "すやすや",

    mainSkill: "食材ゲットS",

    ingredients: [
      {
        name: "マメミート",
        countsByLevel: { 1: 2, 30: 5, 60: 7 }
      },
      {
        name: "あったかジンジャー",
        countsByLevel: { 30: 4, 60: 7 }
      },
      {
        name: "げきからハーブ",
        countsByLevel: { 60: 6 }
      }
    ],

    baseHelpTime: 2400,
    ingRate: 0.224,
    skillRate: 0.016,
    maxHold: 29,

    berryIndex: 1.75,
    ingIndex: 3.83,
    skillIndicator:0.576,

    evolutionChain: [
      {
        dexNo: 4,
        formId: "normal",
        evolveTo: [
          {
            targetDexNo: 5,
            targetFormId: "normal",
            conditions: [
              { type: "level", value: 12 },
              { type: "candy", value: 40 }
            ]
          }
        ]
      },
      {
        dexNo: 5,
        formId: "normal",
        evolveTo: [
          {
            targetDexNo: 6,
            targetFormId: "normal",
            conditions: [
              { type: "level", value: 27 },
              { type: "candy", value: 80 }
            ]
          }
        ]
      },
      {
        dexNo: 6,
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
    dexNo: 7,
    formId: "normal",
    name: "ゼニガメ",

    imageCard: getImagePath("card", 7, "normal"),
    imageDetail: getImagePath("panel", 7, "normal"),

    type: ["みず"],
    tokui: "食材",

    sleepType: "ぐっすり",

    mainSkill: "食材ゲットS",

    ingredients: [
      {
        name: "モーモーミルク",
        countsByLevel: { 1: 2, 30: 5, 60: 7 }
      },
      {
        name: "リラックスカカオ",
        countsByLevel: { 30: 3, 60: 5 }
      },
      {
        name: "マメミート",
        countsByLevel: { 60: 7 }
      }
    ],

    baseHelpTime: 4500,
    ingRate: 0.271,
    skillRate: 0.020,
    maxHold: 10,

    berryIndex: 1.00,
    ingIndex: 2.40,
    skillIndicator:0.384,

    evolutionChain: [
      {
        dexNo: 7,
        formId: "normal",
        evolveTo: [
          {
            targetDexNo: 8,
            targetFormId: "normal",
            conditions: [
              { type: "level", value: 12 },
              { type: "candy", value: 40 }
            ]
          }
        ]
      },
      {
        dexNo: 8,
        formId: "normal",
        evolveTo: [
          {
            targetDexNo: 9,
            targetFormId: "normal",
            conditions: [
              { type: "level", value: 27 },
              { type: "candy", value: 80 }
            ]
          }
        ]
      },
      {
        dexNo: 9,
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
    dexNo: 8,
    formId: "normal",
    name: "カメール",

    imageCard: getImagePath("card", 8, "normal"),
    imageDetail: getImagePath("panel", 8, "normal"),

    type: ["みず"],
    tokui: "食材",

    sleepType: "ぐっすり",

    mainSkill: "食材ゲットS",

    ingredients: [
      {
        name: "モーモーミルク",
        countsByLevel: { 1: 2, 30: 5, 60: 7 }
      },
      {
        name: "リラックスカカオ",
        countsByLevel: { 30: 3, 60: 5 }
      },
      {
        name: "マメミート",
        countsByLevel: { 60: 7 }
      }
    ],

    baseHelpTime: 3400,
    ingRate: 0.271,
    skillRate: 0.020,
    maxHold: 19,

    berryIndex: 1.33,
    ingIndex: 3.17,
    skillIndicator:0.508,

    evolutionChain: [
      {
        dexNo: 7,
        formId: "normal",
        evolveTo: [
          {
            targetDexNo: 8,
            targetFormId: "normal",
            conditions: [
              { type: "level", value: 12 },
              { type: "candy", value: 40 }
            ]
          }
        ]
      },
      {
        dexNo: 8,
        formId: "normal",
        evolveTo: [
          {
            targetDexNo: 9,
            targetFormId: "normal",
            conditions: [
              { type: "level", value: 27 },
              { type: "candy", value: 80 }
            ]
          }
        ]
      },
      {
        dexNo: 9,
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
    dexNo: 9,
    formId: "normal",
    name: "カメックス",

    imageCard: getImagePath("card", 9, "normal"),
    imageDetail: getImagePath("panel", 9, "normal"),

    type: ["みず"],
    tokui: "食材",

    sleepType: "ぐっすり",

    mainSkill: "食材ゲットS",

    ingredients: [
      {
        name: "モーモーミルク",
        countsByLevel: { 1: 2, 30: 5, 60: 7 }
      },
      {
        name: "リラックスカカオ",
        countsByLevel: { 30: 3, 60: 5 }
      },
      {
        name: "マメミート",
        countsByLevel: { 60: 7 }
      }
    ],

    baseHelpTime: 2800,
    ingRate: 0.275,
    skillRate: 0.021,
    maxHold: 27,

    berryIndex: 1.61,
    ingIndex: 3.91,
    skillIndicator:0.648,

    evolutionChain: [
      {
        dexNo: 7,
        formId: "normal",
        evolveTo: [
          {
            targetDexNo: 8,
            targetFormId: "normal",
            conditions: [
              { type: "level", value: 12 },
              { type: "candy", value: 40 }
            ]
          }
        ]
      },
      {
        dexNo: 8,
        formId: "normal",
        evolveTo: [
          {
            targetDexNo: 9,
            targetFormId: "normal",
            conditions: [
              { type: "level", value: 27 },
              { type: "candy", value: 80 }
            ]
          }
        ]
      },
      {
        dexNo: 9,
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
    dexNo: 10,
    formId: "normal",
    name: "キャタピー",

    imageCard: getImagePath("card", 10, "normal"),
    imageDetail: getImagePath("panel", 10, "normal"),

    type: ["むし"],
    tokui: "きのみ",

    sleepType: "うとうと",

    mainSkill: "食材ゲットS",

    ingredients: [
      {
        name: "あまいミツ",
        countsByLevel: { 1: 1, 30: 2, 60: 4 }
      },
      {
        name: "あんみんトマト",
        countsByLevel: { 30: 2, 60: 3 }
      },
      {
        name: "ワカクサ大豆",
        countsByLevel: { 60: 4 }
      }
    ],

    baseHelpTime: 4400,
    ingRate: 0.179,
    skillRate: 0.008,
    maxHold: 11,

    berryIndex: 1.34,
    ingIndex: 0.81,
    skillIndicator:0.157,

    evolutionChain: [
      {
        dexNo: 10,
        formId: "normal",
        evolveTo: [
          {
            targetDexNo: 11,
            targetFormId: "normal",
            conditions: [
              { type: "level", value: 5 },
              { type: "candy", value: 40 }
            ]
          }
        ]
      },
      {
        dexNo: 11,
        formId: "normal",
        evolveTo: [
          {
            targetDexNo: 12,
            targetFormId: "normal",
            conditions: [
              { type: "level", value: 8 },
              { type: "candy", value: 80 }
            ]
          }
        ]
      },
      {
        dexNo: 12,
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
    dexNo: 11,
    formId: "normal",
    name: "トランセル",

    imageCard: getImagePath("card", 11, "normal"),
    imageDetail: getImagePath("panel", 11, "normal"),

    type: ["むし"],
    tokui: "きのみ",

    sleepType: "うとうと",

    mainSkill: "食材ゲットS",

    ingredients: [
      {
        name: "あまいミツ",
        countsByLevel: { 1: 1, 30: 2, 60: 4 }
      },
      {
        name: "あんみんトマト",
        countsByLevel: { 30: 2, 60: 3 }
      },
      {
        name: "ワカクサ大豆",
        countsByLevel: { 60: 4 }
      }
    ],

    baseHelpTime: 4200,
    ingRate: 0.208,
    skillRate: 0.018,
    maxHold: 18,

    berryIndex: 1.36,
    ingIndex: 0.99,
    skillIndicator:0.370,

    evolutionChain: [
      {
        dexNo: 10,
        formId: "normal",
        evolveTo: [
          {
            targetDexNo: 11,
            targetFormId: "normal",
            conditions: [
              { type: "level", value: 5 },
              { type: "candy", value: 40 }
            ]
          }
        ]
      },
      {
        dexNo: 11,
        formId: "normal",
        evolveTo: [
          {
            targetDexNo: 12,
            targetFormId: "normal",
            conditions: [
              { type: "level", value: 8 },
              { type: "candy", value: 80 }
            ]
          }
        ]
      },
      {
        dexNo: 12,
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
          3: [{ type: "マスター", rank: 1 }],
          4: [{ type: "ハイパー", rank: 1 }]
        }
      },
      {
        name: "ゴールド旧発電所",
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
          3: [{ type: "スーパー", rank: 3 }],
          4: [{ type: "スーパー", rank: 4 }]
        }
      }
    ]
  },

  {
    dexNo: 12,
    formId: "normal",
    name: "バタフリー",

    imageCard: getImagePath("card", 12, "normal"),
    imageDetail: getImagePath("panel", 12, "normal"),

    type: ["むし"],
    tokui: "きのみ",

    sleepType: "うとうと",

    mainSkill: "食材ゲットS",

    ingredients: [
      {
        name: "あまいミツ",
        countsByLevel: { 1: 1, 30: 2, 60: 4 }
      },
      {
        name: "あんみんトマト",
        countsByLevel: { 30: 2, 60: 3 }
      },
      {
        name: "ワカクサ大豆",
        countsByLevel: { 60: 4 }
      }
    ],

    baseHelpTime: 2500,
    ingRate: 0.197,
    skillRate: 0.014,
    maxHold: 31,

    berryIndex: 2.31,
    ingIndex: 1.57,
    skillIndicator:0.484,

    evolutionChain: [
      {
        dexNo: 10,
        formId: "normal",
        evolveTo: [
          {
            targetDexNo: 11,
            targetFormId: "normal",
            conditions: [
              { type: "level", value: 5 },
              { type: "candy", value: 40 }
            ]
          }
        ]
      },
      {
        dexNo: 11,
        formId: "normal",
        evolveTo: [
          {
            targetDexNo: 12,
            targetFormId: "normal",
            conditions: [
              { type: "level", value: 8 },
              { type: "candy", value: 80 }
            ]
          }
        ]
      },
      {
        dexNo: 12,
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
          3: [{ type: "マスター", rank: 10 }],
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
    dexNo: 19,
    formId: "normal",
    name: "コラッタ",

    imageCard: getImagePath("card", 19, "normal"),
    imageDetail: getImagePath("panel", 19, "normal"),

    type: ["ノーマル"],
    tokui: "きのみ",

    sleepType: "すやすや",

    mainSkill: "げんきチャージS",

    ingredients: [
      {
        name: "とくせんリンゴ",
        countsByLevel: { 1: 1, 30: 2, 60: 4 }
      },
      {
        name: "ワカクサ大豆",
        countsByLevel: { 30: 2, 60: 3 }
      },
      {
        name: "マメミート",
        countsByLevel: { 60: 3 }
      }
    ],

    baseHelpTime: 4900,
    ingRate: 0.237,
    skillRate: 0.030,
    maxHold: 10,

    berryIndex: 1.31,
    ingIndex: 0.84,
    skillIndicator:0.529,

    evolutionChain: [
      {
        dexNo: 19,
        formId: "normal",
        evolveTo: [
          {
            targetDexNo: 20,
            targetFormId: "normal",
            conditions: [
              { type: "level", value: 15 },
              { type: "candy", value: 40 }
            ]
          }
        ]
      },
      {
        dexNo: 20,
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
      }
    ]
  },

  {
    dexNo: 20,
    formId: "normal",
    name: "ラッタ",

    imageCard: getImagePath("card", 20, "normal"),
    imageDetail: getImagePath("panel", 20, "normal"),

    type: ["ノーマル"],
    tokui: "きのみ",

    sleepType: "すやすや",

    mainSkill: "げんきチャージS",

    ingredients: [
      {
        name: "とくせんリンゴ",
        countsByLevel: { 1: 1, 30: 2, 60: 4 }
      },
      {
        name: "ワカクサ大豆",
        countsByLevel: { 30: 2, 60: 3 }
      },
      {
        name: "マメミート",
        countsByLevel: { 60: 3 }
      }
    ],

    baseHelpTime: 2950,
    ingRate: 0.237,
    skillRate: 0.030,
    maxHold: 21,

    berryIndex: 2.17,
    ingIndex: 1.40,
    skillIndicator:0.879,

    evolutionChain: [
      {
        dexNo: 19,
        formId: "normal",
        evolveTo: [
          {
            targetDexNo: 20,
            targetFormId: "normal",
            conditions: [
              { type: "level", value: 15 },
              { type: "candy", value: 40 }
            ]
          }
        ]
      },
      {
        dexNo: 20,
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
        name: "ウノハナ雪原",
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
    dexNo: 23,
    formId: "normal",
    name: "アーボ",

    imageCard: getImagePath("card", 23, "normal"),
    imageDetail: getImagePath("panel", 23, "normal"),

    type: ["どく"],
    tokui: "きのみ",

    sleepType: "うとうと",

    mainSkill: "げんきチャージS",

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
        name: "げきからハーブ",
        countsByLevel: { 60: 3 }
      }
    ],

    baseHelpTime: 5000,
    ingRate: 0.235,
    skillRate: 0.033,
    maxHold: 10,

    berryIndex: 1.47,
    ingIndex: 0.96,
    skillIndicator:0.570,

    evolutionChain: [
      {
        dexNo: 23,
        formId: "normal",
        evolveTo: [
          {
            targetDexNo: 24,
            targetFormId: "normal",
            conditions: [
              { type: "level", value: 17 },
              { type: "candy", value: 40 }
            ]
          }
        ]
      },
      {
        dexNo: 24,
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
        name: "アンバー渓谷",
        stars: {
          1: [{ type: "ノーマル", rank: 1 }],
          2: [{ type: "ノーマル", rank: 1 }],
          3: [{ type: "ノーマル", rank: 3 }],
          4: [{ type: "スーパー", rank: 1 }]
        }
      }
    ]
  },

  {
    dexNo: 24,
    formId: "normal",
    name: "アーボック",

    imageCard: getImagePath("card", 24, "normal"),
    imageDetail: getImagePath("panel", 24, "normal"),

    type: ["どく"],
    tokui: "きのみ",

    sleepType: "うとうと",

    mainSkill: "げんきチャージS",

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
        name: "げきからハーブ",
        countsByLevel: { 60: 3 }
      }
    ],

    baseHelpTime: 3400,
    ingRate: 0.264,
    skillRate: 0.057,
    maxHold: 19,

    berryIndex: 2.08,
    ingIndex: 1.58,
    skillIndicator:1.448,

    evolutionChain: [
      {
        dexNo: 23,
        formId: "normal",
        evolveTo: [
          {
            targetDexNo: 24,
            targetFormId: "normal",
            conditions: [
              { type: "level", value: 17 },
              { type: "candy", value: 40 }
            ]
          }
        ]
      },
      {
        dexNo: 24,
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
        name: "アンバー渓谷",
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
    dexNo: 25,
    formId: "normal",
    name: "ピカチュウ",

    imageCard: getImagePath("card", 25, "normal"),
    imageDetail: getImagePath("panel", 25, "normal"),

    type: ["でんき"],
    tokui: "きのみ",

    sleepType: "すやすや",

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

    baseHelpTime: 2700,
    ingRate: 0.207,
    skillRate: 0.021,
    maxHold: 22,

    berryIndex: 2.20,
    ingIndex: 1.41,
    skillIndicator:0.672,

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
          1: [{ type: "ノーマル", rank: 3 }],
          2: [{ type: "スーパー", rank: 2 }],
          3: null,
          4: [{ type: "スーパー", rank: 3 }]
        }
      },
      {
        name: "シアンの砂浜",
        stars: {
          1: [{ type: "ノーマル", rank: 1 }],
          2: [{ type: "ノーマル", rank: 4 }],
          3: [{ type: "スーパー", rank: 5 }],
          4: [{ type: "スーパー", rank: 1 }]
        }
      },
      {
        name: "ゴールド旧発電所",
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
    dexNo: 25,
    formId: "halloween(orange)",
    name: "ピカチュウ(ハロウィン(オレンジ))",

    imageCard: getImagePath("card", 25, "halloween(orange)"),
    imageDetail: getImagePath("panel", 25, "halloween(orange)"),

    type: ["でんき"],
    tokui: "きのみ",

    sleepType: "すやすや",

    mainSkill: "エナジーチャージS(ランダム)",

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

    baseHelpTime: 2500,
    ingRate: 0.218,
    skillRate: 0.028,
    maxHold: 18,

    berryIndex: 2.35,
    ingIndex: 1.61,
    skillIndicator:0.968,

    evolutionChain: [
      {
        dexNo: 25,
        formId: "halloween(orange)",
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
    dexNo: 25,
    formId: "halloween(purple)",
    name: "ピカチュウ(ハロウィン(パープル))",

    imageCard: getImagePath("card", 25, "halloween(purple)"),
    imageDetail: getImagePath("panel", 25, "halloween(purple)"),

    type: ["でんき"],
    tokui: "きのみ",

    sleepType: "すやすや",

    mainSkill: "エナジーチャージS(ランダム)",

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

    baseHelpTime: 2500,
    ingRate: 0.218,
    skillRate: 0.028,
    maxHold: 18,

    berryIndex: 2.35,
    ingIndex: 1.61,
    skillIndicator:0.968,

    evolutionChain: [
      {
        dexNo: 25,
        formId: "halloween(purple)",
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
    dexNo: 25,
    formId: "holiday",
    name: "ピカチュウ(ホリデー)",

    imageCard: getImagePath("card", 25, "holiday"),
    imageDetail: getImagePath("panel", 25, "holiday"),

    type: ["でんき"],
    tokui: "スキル",

    sleepType: "すやすや",

    mainSkill: "ゆめのかけらゲットS",

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

    baseHelpTime: 2500,
    ingRate: 0.131,
    skillRate: 0.042,
    maxHold: 20,

    berryIndex: 1.74,
    ingIndex: 0.96,
    skillIndicator:1.452,

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
    dexNo: 26,
    formId: "normal",
    name: "ライチュウ",

    imageCard: getImagePath("card", 26, "normal"),
    imageDetail: getImagePath("panel", 26, "normal"),

    type: ["でんき"],
    tokui: "きのみ",

    sleepType: "すやすや",

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

    baseHelpTime: 2200,
    ingRate: 0.224,
    skillRate: 0.032,
    maxHold: 31,

    berryIndex: 2.65,
    ingIndex: 1.87,
    skillIndicator:1.257,

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
          1: [{ type: "マスター", rank: 4 }],
          2: [{ type: "マスター", rank: 8 }],
          3: [{ type: "マスター", rank: 14 }],
          4: [{ type: "マスター", rank: 9 }]
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
    dexNo: 27,
    formId: "normal",
    name: "サンド",

    imageCard: getImagePath("card", 27, "normal"),
    imageDetail: getImagePath("panel", 27, "normal"),

    type: ["じめん"],
    tokui: "スキル",

    sleepType: "ぐっすり",

    mainSkill: "食材セレクトS",

    ingredients: [
      {
        name: "ずっしりカボチャ",
        countsByLevel: { 1: 1, 30: 2, 60: 4 }
      },
      {
        name: "ワカクサコーン",
        countsByLevel: { 30: 4, 60: 6 }
      },
      {
        name: "ほっこりポテト",
        countsByLevel: { 60: 7 }
      }
    ],

    baseHelpTime: 5300,
    ingRate: 0.100,
    skillRate: 0.046,
    maxHold: 11,

    berryIndex: 0.98,
    ingIndex: 0.92,
    skillIndicator:0.750,

    evolutionChain: [
      {
        dexNo: 27,
        formId: "normal",
        evolveTo: [
          {
            targetDexNo: 28,
            targetFormId: "normal",
            conditions: [
              { type: "level", value: 17 },
              { type: "candy", value: 40 }
            ]
          }
        ]
      },
      {
        dexNo: 28,
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
          3: [{ type: "ハイパー", rank: 3 }],
          4: [{ type: "ハイパー", rank: 4 }]
        }
      }
    ]
  },

  {
    dexNo: 28,
    formId: "normal",
    name: "サンドパン",

    imageCard: getImagePath("card", 28, "normal"),
    imageDetail: getImagePath("panel", 28, "normal"),

    type: ["じめん"],
    tokui: "スキル",

    sleepType: "ぐっすり",

    mainSkill: "食材セレクトS",

    ingredients: [
      {
        name: "ずっしりカボチャ",
        countsByLevel: { 1: 1, 30: 2, 60: 4 }
      },
      {
        name: "ワカクサコーン",
        countsByLevel: { 30: 4, 60: 6 }
      },
      {
        name: "ほっこりポテト",
        countsByLevel: { 60: 7 }
      }
    ],

    baseHelpTime: 2800,
    ingRate: 0.108,
    skillRate: 0.043,
    maxHold: 22,

    berryIndex: 1.85,
    ingIndex: 1.88,
    skillIndicator:1.327,

    evolutionChain: [
      {
        dexNo: 27,
        formId: "normal",
        evolveTo: [
          {
            targetDexNo: 28,
            targetFormId: "normal",
            conditions: [
              { type: "level", value: 17 },
              { type: "candy", value: 40 }
            ]
          }
        ]
      },
      {
        dexNo: 28,
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
          4: [{ type: "マスター", rank: 7 }]
        }
      }
    ]
  },

  {
    dexNo: 35,
    formId: "normal",
    name: "ピッピ",

    imageCard: getImagePath("card", 35, "normal"),
    imageDetail: getImagePath("panel", 35, "normal"),

    type: ["フェアリー"],
    tokui: "きのみ",

    sleepType: "すやすや",

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

    baseHelpTime: 4000,
    ingRate: 0.168,
    skillRate: 0.036,
    maxHold: 21,

    berryIndex: 1.62,
    ingIndex: 0.73,
    skillIndicator:0.778,

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
          1: [{ type: "ノーマル", rank: 4 }],
          2: [{ type: "スーパー", rank: 3 }],
          3: null,
          4: [{ type: "ハイパー", rank: 1 }]
        }
      },
      {
        name: "シアンの砂浜",
        stars: {
          1: [{ type: "ノーマル", rank: 1 }],
          2: [{ type: "ノーマル", rank: 5 }],
          3: [{ type: "ハイパー", rank: 1 }],
          4: [{ type: "ハイパー", rank: 1 }]
        }
      },
      {
        name: "トープ洞窟",
        stars: {
          1: [{ type: "ノーマル", rank: 1 }],
          2: [{ type: "ノーマル", rank: 4 }],
          3: [{ type: "スーパー", rank: 5 }],
          4: [{ type: "ハイパー", rank: 1 }]
        }
      },
      {
        name: "ウノハナ雪原",
        stars: {
          1: [{ type: "ノーマル", rank: 1 }],
          2: [{ type: "ノーマル", rank: 3 }],
          3: [{ type: "スーパー", rank: 4 }],
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
      },
      {
        name: "ゴールド旧発電所",
        stars: {
          1: [{ type: "ノーマル", rank: 1 }],
          2: [{ type: "ノーマル", rank: 1 }],
          3: [{ type: "スーパー", rank: 2 }],
          4: [{ type: "ハイパー", rank: 1 }]
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
    dexNo: 36,
    formId: "normal",
    name: "ピクシー",

    imageCard: getImagePath("card", 36, "normal"),
    imageDetail: getImagePath("panel", 36, "normal"),

    type: ["フェアリー"],
    tokui: "きのみ",

    sleepType: "すやすや",

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

    baseHelpTime: 2800,
    ingRate: 0.168,
    skillRate: 0.036,
    maxHold: 34,

    berryIndex: 2.32,
    ingIndex: 1.05,
    skillIndicator:1.111,

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
          1: [{ type: "マスター", rank: 3 }],
          2: [{ type: "マスター", rank: 7 }],
          3: null,
          4: [{ type: "マスター", rank: 8 }]
        }
      },
      {
        name: "シアンの砂浜",
        stars: {
          1: [{ type: "ハイパー", rank: 5 }],
          2: [{ type: "マスター", rank: 4 }],
          3: [{ type: "マスター", rank: 10 }],
          4: [{ type: "マスター", rank: 6 }]
        }
      },
      {
        name: "トープ洞窟",
        stars: {
          1: [{ type: "ハイパー", rank: 4 }],
          2: [{ type: "マスター", rank: 3 }],
          3: [{ type: "マスター", rank: 9 }],
          4: [{ type: "マスター", rank: 6 }]
        }
      },
      {
        name: "ウノハナ雪原",
        stars: {
          1: [{ type: "ハイパー", rank: 3 }],
          2: [{ type: "マスター", rank: 2 }],
          3: [{ type: "マスター", rank: 8 }],
          4: [{ type: "マスター", rank: 6 }]
        }
      },
      {
        name: "ラピスラズリ湖畔",
        stars: {
          1: [{ type: "ハイパー", rank: 2 }],
          2: [{ type: "マスター", rank: 1 }],
          3: [{ type: "マスター", rank: 7 }],
          4: [{ type: "マスター", rank: 6 }]
        }
      },
      {
        name: "ゴールド旧発電所",
        stars: {
          1: [{ type: "ハイパー", rank: 1 }],
          2: [{ type: "ハイパー", rank: 5 }],
          3: [{ type: "マスター", rank: 6 }],
          4: [{ type: "マスター", rank: 6 }]
        }
      },
      {
        name: "アンバー渓谷",
        stars: {
          1: [{ type: "スーパー", rank: 5 }],
          2: [{ type: "ハイパー", rank: 4 }],
          3: [{ type: "マスター", rank: 6 }],
          4: [{ type: "マスター", rank: 1 }]
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
    dexNo: 37,
    formId: "normal",
    name: "ロコン",

    imageCard: getImagePath("card", 37, "normal"),
    imageDetail: getImagePath("panel", 37, "normal"),

    type: ["ほのお"],
    tokui: "きのみ",

    sleepType: "すやすや",

    mainSkill: "げんきエールS",

    ingredients: [
      {
        name: "ワカクサ大豆",
        countsByLevel: { 1: 1, 30: 2, 60: 4 }
      },
      {
        name: "ワカクサコーン",
        countsByLevel: { 30: 2, 60: 3 }
      },
      {
        name: "ほっこりポテト",
        countsByLevel: { 60: 3 }
      }
    ],

    baseHelpTime: 4700,
    ingRate: 0.168,
    skillRate: 0.032,
    maxHold: 13,

    berryIndex: 1.43,
    ingIndex: 0.77,
    skillIndicator:0.588,

    evolutionChain: [
      {
        dexNo: 37,
        formId: "normal",
        evolveTo: [
          {
            targetDexNo: 38,
            targetFormId: "normal",
            conditions: [
              { type: "item", value: "ほのおのいし" },
              { type: "candy", value: 80 }
            ]
          }
        ]
      },
      {
        dexNo: 38,
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
        name: "トープ洞窟",
        stars: {
          1: [{ type: "ノーマル", rank: 2 }],
          2: [{ type: "スーパー", rank: 1 }],
          3: [{ type: "ハイパー", rank: 2 }],
          4: [{ type: "マスター", rank: 1 }]
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
          2: [{ type: "スーパー", rank: 1 }],
          3: [{ type: "スーパー", rank: 5 }],
          4: [{ type: "ハイパー", rank: 1 }]
        }
      }
    ]
  },

  {
    dexNo: 37,
    formId: "alola",
    name: "ロコン(アローラのすがた)",

    imageCard: getImagePath("card", 37, "alola"),
    imageDetail: getImagePath("panel", 37, "alola"),

    type: ["こおり"],
    tokui: "きのみ",

    sleepType: "ぐっすり",

    mainSkill: "おてつだいサポートS",

    ingredients: [
      {
        name: "ワカクサ大豆",
        countsByLevel: { 1: 1, 30: 2, 60: 4 }
      },
      {
        name: "ワカクサコーン",
        countsByLevel: { 30: 2, 60: 3 }
      },
      {
        name: "ほっこりポテト",
        countsByLevel: { 60: 3 }
      }
    ],

    baseHelpTime: 5600,
    ingRate: 0.230,
    skillRate: 0.028,
    maxHold: 10,

    berryIndex: 1.32,
    ingIndex: 0.89,
    skillIndicator:0.432,

    evolutionChain: [
      {
        dexNo: 37,
        formId: "alola",
        evolveTo: [
          {
            targetDexNo: 38,
            targetFormId: "alola",
            conditions: [
              { type: "item", value: "こおりのいし" },
              { type: "candy", value: 80 }
            ]
          }
        ]
      },
      {
        dexNo: 38,
        formId: "alola",
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
          4: [{ type: "スーパー", rank: 2 }]
        }
      },
      {
        name: "ワカクサ本島EX",
        stars: {
          1: [{ type: "ノーマル", rank: 1 }],
          2: [{ type: "スーパー", rank: 1 }],
          3: [{ type: "スーパー", rank: 5 }],
          4: [{ type: "ハイパー", rank: 1 }]
        }
      }
    ]
  },

  {
    dexNo: 38,
    formId: "normal",
    name: "キュウコン",

    imageCard: getImagePath("card", 38, "normal"),
    imageDetail: getImagePath("panel", 38, "normal"),

    type: ["ほのお"],
    tokui: "きのみ",

    sleepType: "すやすや",

    mainSkill: "げんきエールS",

    ingredients: [
      {
        name: "ワカクサ大豆",
        countsByLevel: { 1: 1, 30: 2, 60: 4 }
      },
      {
        name: "ワカクサコーン",
        countsByLevel: { 30: 2, 60: 3 }
      },
      {
        name: "ほっこりポテト",
        countsByLevel: { 60: 3 }
      }
    ],

    baseHelpTime: 2600,
    ingRate: 0.164,
    skillRate: 0.029,
    maxHold: 28,

    berryIndex: 2.60,
    ingIndex: 1.36,
    skillIndicator:0.964,

    evolutionChain: [
      {
        dexNo: 37,
        formId: "normal",
        evolveTo: [
          {
            targetDexNo: 38,
            targetFormId: "normal",
            conditions: [
              { type: "item", value: "ほのおのいし" },
              { type: "candy", value: 80 }
            ]
          }
        ]
      },
      {
        dexNo: 38,
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
        name: "トープ洞窟",
        stars: {
          1: [{ type: "ハイパー", rank: 2 }],
          2: [{ type: "マスター", rank: 1 }],
          3: [{ type: "マスター", rank: 7 }],
          4: [{ type: "マスター", rank: 6 }]
        }
      },
      {
        name: "アンバー渓谷",
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
          2: [{ type: "スーパー", rank: 5 }],
          3: [{ type: "ハイパー", rank: 4 }],
          4: [{ type: "マスター", rank: 1 }]
        }
      }
    ]
  },

  {
    dexNo: 38,
    formId: "alola",
    name: "キュウコン(アローラのすがた)",

    imageCard: getImagePath("card", 38, "alola"),
    imageDetail: getImagePath("panel", 38, "alola"),

    type: ["こおり"],
    tokui: "きのみ",

    sleepType: "ぐっすり",

    mainSkill: "おてつだいサポートS",

    ingredients: [
      {
        name: "ワカクサ大豆",
        countsByLevel: { 1: 1, 30: 2, 60: 4 }
      },
      {
        name: "ワカクサコーン",
        countsByLevel: { 30: 2, 60: 3 }
      },
      {
        name: "ほっこりポテト",
        countsByLevel: { 60: 3 }
      }
    ],

    baseHelpTime: 2900,
    ingRate: 0.232,
    skillRate: 0.028,
    maxHold: 25,

    berryIndex: 2.54,
    ingIndex: 1.73,
    skillIndicator:0.834,

    evolutionChain: [
      {
        dexNo: 37,
        formId: "alola",
        evolveTo: [
          {
            targetDexNo: 38,
            targetFormId: "alola",
            conditions: [
              { type: "item", value: "こおりのいし" },
              { type: "candy", value: 80 }
            ]
          }
        ]
      },
      {
        dexNo: 38,
        formId: "alola",
        evolveTo: null
      }
    ],

    fields: [
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
    dexNo: 39,
    formId: "normal",
    name: "プリン",

    imageCard: getImagePath("card", 39, "normal"),
    imageDetail: getImagePath("panel", 39, "normal"),

    type: ["フェアリー"],
    tokui: "スキル",

    sleepType: "すやすや",

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

    baseHelpTime: 3900,
    ingRate: 0.182,
    skillRate: 0.043,
    maxHold: 14,

    berryIndex: 1.09,
    ingIndex: 0.92,
    skillIndicator:0.953,

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
          1: [{ type: "ノーマル", rank: 4 }],
          2: [{ type: "スーパー", rank: 3 }],
          3: null,
          4: [{ type: "スーパー", rank: 4 }]
        }
      },
      {
        name: "シアンの砂浜",
        stars: {
          1: [{ type: "ノーマル", rank: 1 }],
          2: [{ type: "ノーマル", rank: 5 }],
          3: [{ type: "ハイパー", rank: 1 }],
          4: [{ type: "スーパー", rank: 4 }]
        }
      }
    ]
  },

  {
    dexNo: 40,
    formId: "normal",
    name: "プクリン",

    imageCard: getImagePath("card", 40, "normal"),
    imageDetail: getImagePath("panel", 40, "normal"),

    type: ["フェアリー"],
    tokui: "スキル",

    sleepType: "すやすや",

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

    baseHelpTime: 2750,
    ingRate: 0.191,
    skillRate: 0.040,
    maxHold: 32,

    berryIndex: 1.53,
    ingIndex: 1.37,
    skillIndicator:1.257,

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
          1: [{ type: "マスター", rank: 2 }],
          2: [{ type: "マスター", rank: 6 }],
          3: null,
          4: [{ type: "マスター", rank: 7 }]
        }
      },
      {
        name: "シアンの砂浜",
        stars: {
          1: [{ type: "ハイパー", rank: 2 }],
          2: [{ type: "マスター", rank: 6 }],
          3: [{ type: "マスター", rank: 9 }],
          4: [{ type: "マスター", rank: 7 }]
        }
      }
    ]
  },

  {
    dexNo: 50,
    formId: "normal",
    name: "ディグダ",

    imageCard: getImagePath("card", 50, "normal"),
    imageDetail: getImagePath("panel", 50, "normal"),

    type: ["じめん"],
    tokui: "食材",

    sleepType: "すやすや",

    mainSkill: "エナジーチャージS",

    ingredients: [
      {
        name: "あんみんトマト",
        countsByLevel: { 1: 2, 30: 5, 60: 7 }
      },
      {
        name: "ふといながねぎ",
        countsByLevel: { 30: 3, 60: 4 }
      },
      {
        name: "ワカクサ大豆",
        countsByLevel: { 60: 8 }
      }
    ],

    baseHelpTime: 4300,
    ingRate: 0.192,
    skillRate: 0.021,
    maxHold: 10,

    berryIndex: 1.09,
    ingIndex: 1.98,
    skillIndicator:0.422,

    evolutionChain: [
      {
        dexNo: 50,
        formId: "normal",
        evolveTo: [
          {
            targetDexNo: 51,
            targetFormId: "normal",
            conditions: [
              { type: "level", value: 20 },
              { type: "candy", value: 40 }
            ]
          }
        ]
      },
      {
        dexNo: 51,
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
          3: null
        }
      },
      {
        name: "トープ洞窟",
        stars: {
          1: [{ type: "ノーマル", rank: 1 }],
          2: [{ type: "ノーマル", rank: 1 }],
          3: [{ type: "スーパー", rank: 2 }]
        }
      }
    ]
  },

  {
    dexNo: 51,
    formId: "normal",
    name: "ダグトリオ",

    imageCard: getImagePath("card", 51, "normal"),
    imageDetail: getImagePath("panel", 51, "normal"),

    type: ["じめん"],
    tokui: "食材",

    sleepType: "すやすや",

    mainSkill: "エナジーチャージS",

    ingredients: [
      {
        name: "あんみんトマト",
        countsByLevel: { 1: 2, 30: 5, 60: 7 }
      },
      {
        name: "ふといながねぎ",
        countsByLevel: { 30: 3, 60: 4 }
      },
      {
        name: "ワカクサ大豆",
        countsByLevel: { 60: 8 }
      }
    ],

    baseHelpTime: 2650,
    ingRate: 0.190,
    skillRate: 0.020,
    maxHold: 21,

    berryIndex: 1.77,
    ingIndex: 3.19,
    skillIndicator:0.652,

    evolutionChain: [
      {
        dexNo: 50,
        formId: "normal",
        evolveTo: [
          {
            targetDexNo: 51,
            targetFormId: "normal",
            conditions: [
              { type: "level", value: 20 },
              { type: "candy", value: 40 }
            ]
          }
        ]
      },
      {
        dexNo: 51,
        formId: "normal",
        evolveTo: null
      }
    ],

    fields: [
      {
        name: "ワカクサ本島",
        stars: {
          1: [{ type: "スーパー", rank: 5 }],
          2: [{ type: "ハイパー", rank: 4 }],
          3: null
        }
      },
      {
        name: "トープ洞窟",
        stars: {
          1: [{ type: "スーパー", rank: 1 }],
          2: [{ type: "スーパー", rank: 5 }],
          3: [{ type: "マスター", rank: 1 }]
        }
      }
    ]
  },

  {
    dexNo: 52,
    formId: "normal",
    name: "ニャース",

    imageCard: getImagePath("card", 52, "normal"),
    imageDetail: getImagePath("panel", 52, "normal"),

    type: ["ノーマル"],
    tokui: "スキル",

    sleepType: "すやすや",

    mainSkill: "ゆめのかけらゲットS",

    ingredients: [
      {
        name: "モーモーミルク",
        countsByLevel: { 1: 1, 30: 2, 60: 4 }
      },
      {
        name: "マメミート",
        countsByLevel: { 30: 2, 60: 3 }
      }
    ],

    baseHelpTime: 4400,
    ingRate: 0.163,
    skillRate: 0.042,
    maxHold: 9,

    berryIndex: 1.07,
    ingIndex: 0.68,
    skillIndicator:0.825,

    evolutionChain: [
      {
        dexNo: 52,
        formId: "normal",
        evolveTo: [
          {
            targetDexNo: 53,
            targetFormId: "normal",
            conditions: [
              { type: "level", value: 21 },
              { type: "candy", value: 40 }
            ]
          }
        ]
      },
      {
        dexNo: 53,
        formId: "normal",
        evolveTo: null
      }
    ],

    fields: [
      {
        name: "ワカクサ本島",
        stars: {
          1: [{ type: "ノーマル", rank: 2 }],
          2: [{ type: "ノーマル", rank: 1 }],
          3: [{ type: "ハイパー", rank: 2 }],
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
    dexNo: 53,
    formId: "normal",
    name: "ペルシアン",

    imageCard: getImagePath("card", 53, "normal"),
    imageDetail: getImagePath("panel", 53, "normal"),

    type: ["ノーマル"],
    tokui: "スキル",

    sleepType: "すやすや",

    mainSkill: "ゆめのかけらゲットS",

    ingredients: [
      {
        name: "モーモーミルク",
        countsByLevel: { 1: 1, 30: 2, 60: 4 }
      },
      {
        name: "マメミート",
        countsByLevel: { 30: 2, 60: 3 }
      }
    ],

    baseHelpTime: 2800,
    ingRate: 0.169,
    skillRate: 0.044,
    maxHold: 17,

    berryIndex: 1.66,
    ingIndex: 1.11,
    skillIndicator:1.358,

    evolutionChain: [
      {
        dexNo: 52,
        formId: "normal",
        evolveTo: [
          {
            targetDexNo: 53,
            targetFormId: "normal",
            conditions: [
              { type: "level", value: 21 },
              { type: "candy", value: 40 }
            ]
          }
        ]
      },
      {
        dexNo: 53,
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
          3: [{ type: "マスター", rank: 6 }],
          4: [{ type: "マスター", rank: 1 }]
        }
      },
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
          2: [{ type: "スーパー", rank: 2 }],
          3: [{ type: "スーパー", rank: 5 }],
          4: [{ type: "ハイパー", rank: 1 }]
        }
      }
    ]
  },

  {
    dexNo: 54,
    formId: "normal",
    name: "コダック",

    imageCard: getImagePath("card", 54, "normal"),
    imageDetail: getImagePath("panel", 54, "normal"),

    type: ["みず"],
    tokui: "スキル",

    sleepType: "うとうと",

    mainSkill: "エナジーチャージS(ランダム)",

    ingredients: [
      {
        name: "リラックスカカオ",
        countsByLevel: { 1: 1, 30: 2, 60: 4 }
      },
      {
        name: "とくせんリンゴ",
        countsByLevel: { 30: 4, 60: 6 }
      },
      {
        name: "マメミート",
        countsByLevel: { 60: 5 }
      }
    ],

    baseHelpTime: 5400,
    ingRate: 0.136,
    skillRate: 0.126,
    maxHold: 8,

    berryIndex: 0.99,
    ingIndex: 0.76,
    skillIndicator:2.016,

    evolutionChain: [
      {
        dexNo: 54,
        formId: "normal",
        evolveTo: [
          {
            targetDexNo: 55,
            targetFormId: "normal",
            conditions: [
              { type: "level", value: 25 },
              { type: "candy", value: 40 }
            ]
          }
        ]
      },
      {
        dexNo: 55,
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
        name: "ラピスラズリ湖畔",
        stars: {
          1: [{ type: "ノーマル", rank: 1 }],
          2: [{ type: "ノーマル", rank: 1 }],
          3: [{ type: "スーパー", rank: 1 }],
          4: [{ type: "スーパー", rank: 1 }]
        }
      }
    ]
  },

  {
    dexNo: 55,
    formId: "normal",
    name: "ゴルダック",

    imageCard: getImagePath("card", 55, "normal"),
    imageDetail: getImagePath("panel", 55, "normal"),

    type: ["みず"],
    tokui: "スキル",

    sleepType: "うとうと",

    mainSkill: "エナジーチャージS(ランダム)",

    ingredients: [
      {
        name: "リラックスカカオ",
        countsByLevel: { 1: 1, 30: 2, 60: 4 }
      },
      {
        name: "とくせんリンゴ",
        countsByLevel: { 30: 4, 60: 6 }
      },
      {
        name: "マメミート",
        countsByLevel: { 60: 5 }
      }
    ],

    baseHelpTime: 3400,
    ingRate: 0.162,
    skillRate: 0.125,
    maxHold: 8,

    berryIndex: 1.53,
    ingIndex: 1.43,
    skillIndicator:3.176,

    evolutionChain: [
      {
        dexNo: 54,
        formId: "normal",
        evolveTo: [
          {
            targetDexNo: 55,
            targetFormId: "normal",
            conditions: [
              { type: "level", value: 25 },
              { type: "candy", value: 40 }
            ]
          }
        ]
      },
      {
        dexNo: 55,
        formId: "normal",
        evolveTo: null
      }
    ],

    fields: [
      {
        name: "シアンの砂浜",
        stars: {
          1: [{ type: "スーパー", rank: 2 }],
          2: [{ type: "ハイパー", rank: 1 }],
          3: [{ type: "マスター", rank: 2 }],
          4: [{ type: "ハイパー", rank: 2 }]
        }
      }
    ]
  },

  {
    dexNo: 56,
    formId: "normal",
    name: "マンキー",

    imageCard: getImagePath("card", 56, "normal"),
    imageDetail: getImagePath("panel", 56, "normal"),

    type: ["かくとう"],
    tokui: "きのみ",

    sleepType: "うとうと",

    mainSkill: "エナジーチャージS(ランダム)",

    ingredients: [
      {
        name: "マメミート",
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

    baseHelpTime: 4200,
    ingRate: 0.197,
    skillRate: 0.022,
    maxHold: 12,

    berryIndex: 1.55,
    ingIndex: 0.90,
    skillIndicator:0.453,

    evolutionChain: [
      {
        dexNo: 56,
        formId: "normal",
        evolveTo: [
          {
            targetDexNo: 57,
            targetFormId: "normal",
            conditions: [
              { type: "level", value: 21 },
              { type: "candy", value: 40 }
            ]
          }
        ]
      },
      {
        dexNo: 57,
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
      }
    ]
  },

  {
    dexNo: 57,
    formId: "normal",
    name: "オコリザル",

    imageCard: getImagePath("card", 57, "normal"),
    imageDetail: getImagePath("panel", 57, "normal"),

    type: ["かくとう"],
    tokui: "きのみ",

    sleepType: "うとうと",

    mainSkill: "エナジーチャージS(ランダム)",

    ingredients: [
      {
        name: "マメミート",
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

    baseHelpTime: 2800,
    ingRate: 0.200,
    skillRate: 0.024,
    maxHold: 22,

    berryIndex: 2.31,
    ingIndex: 1.37,
    skillIndicator:0.741,

    evolutionChain: [
      {
        dexNo: 56,
        formId: "normal",
        evolveTo: [
          {
            targetDexNo: 57,
            targetFormId: "normal",
            conditions: [
              { type: "level", value: 21 },
              { type: "candy", value: 40 }
            ]
          }
        ]
      },
      {
        dexNo: 57,
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
        name: "ウノハナ雪原",
        stars: {
          1: [{ type: "ノーマル", rank: 4 }],
          2: [{ type: "スーパー", rank: 3 }],
          3: [{ type: "ハイパー", rank: 4 }],
          4: [{ type: "ハイパー", rank: 1 }]
        }
      }
    ]
  },

  {
    dexNo: 58,
    formId: "normal",
    name: "ガーディ",

    imageCard: getImagePath("card", 58, "normal"),
    imageDetail: getImagePath("panel", 58, "normal"),

    type: ["ほのお"],
    tokui: "スキル",

    sleepType: "すやすや",

    mainSkill: "おてつだいサポートS",

    ingredients: [
      {
        name: "げきからハーブ",
        countsByLevel: { 1: 1, 30: 2, 60: 4 }
      },
      {
        name: "マメミート",
        countsByLevel: { 30: 3, 60: 5 }
      },
      {
        name: "モーモーミルク",
        countsByLevel: { 60: 5 }
      }
    ],

    baseHelpTime: 4300,
    ingRate: 0.138,
    skillRate: 0.050,
    maxHold: 8,

    berryIndex: 1.08,
    ingIndex: 0.86,
    skillIndicator:1.005,

    evolutionChain: [
      {
        dexNo: 58,
        formId: "normal",
        evolveTo: [
          {
            targetDexNo: 59,
            targetFormId: "normal",
            conditions: [
              { type: "item", value: "ほのおのいし" },
              { type: "candy", value: 80 }
            ]
          }
        ]
      },
      {
        dexNo: 59,
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
    dexNo: 59,
    formId: "normal",
    name: "ウインディ",

    imageCard: getImagePath("card", 59, "normal"),
    imageDetail: getImagePath("panel", 59, "normal"),

    type: ["ほのお"],
    tokui: "スキル",

    sleepType: "すやすや",

    mainSkill: "おてつだいサポートS",

    ingredients: [
      {
        name: "げきからハーブ",
        countsByLevel: { 1: 1, 30: 2, 60: 4 }
      },
      {
        name: "マメミート",
        countsByLevel: { 30: 3, 60: 5 }
      },
      {
        name: "モーモーミルク",
        countsByLevel: { 60: 5 }
      }
    ],

    baseHelpTime: 2500,
    ingRate: 0.136,
    skillRate: 0.049,
    maxHold: 21,

    berryIndex: 1.87,
    ingIndex: 1.46,
    skillIndicator:1.693,

    evolutionChain: [
      {
        dexNo: 58,
        formId: "normal",
        evolveTo: [
          {
            targetDexNo: 59,
            targetFormId: "normal",
            conditions: [
              { type: "item", value: "ほのおのいし" },
              { type: "candy", value: 80 }
            ]
          }
        ]
      },
      {
        dexNo: 59,
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
          3: [{ type: "マスター", rank: 12 }],
          4: [{ type: "マスター", rank: 7 }]
        }
      },
      {
        name: "ワカクサ本島EX",
        stars: {
          1: [{ type: "スーパー", rank: 4 }],
          2: [{ type: "ハイパー", rank: 2 }],
          3: [{ type: "マスター", rank: 1 }],
          4: [{ type: "マスター", rank: 3 }]
        }
      }
    ]
  },

  {
    dexNo: 69,
    formId: "normal",
    name: "マダツボミ",

    imageCard: getImagePath("card", 69, "normal"),
    imageDetail: getImagePath("panel", 69, "normal"),

    type: ["くさ"],
    tokui: "食材",

    sleepType: "うとうと",

    mainSkill: "げんきチャージS",

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

    baseHelpTime: 5200,
    ingRate: 0.233,
    skillRate: 0.039,
    maxHold: 8,

    berryIndex: 0.89,
    ingIndex: 1.92,
    skillIndicator:0.648,

    evolutionChain: [
      {
        dexNo: 69,
        formId: "normal",
        evolveTo: [
          {
            targetDexNo: 70,
            targetFormId: "normal",
            conditions: [
              { type: "level", value: 16 },
              { type: "candy", value: 40 }
            ]
          }
        ]
      },
      {
        dexNo: 70,
        formId: "normal",
        evolveTo: [
          {
            targetDexNo: 71,
            targetFormId: "normal",
            conditions: [
              { type: "item", value: "リーフのいし" },
              { type: "candy", value: 80 }
            ]
          }
        ]
      },
      {
        dexNo: 71,
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
    dexNo: 70,
    formId: "normal",
    name: "ウツドン",

    imageCard: getImagePath("card", 70, "normal"),
    imageDetail: getImagePath("panel", 70, "normal"),

    type: ["くさ"],
    tokui: "食材",

    sleepType: "うとうと",

    mainSkill: "げんきチャージS",

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

    baseHelpTime: 3800,
    ingRate: 0.235,
    skillRate: 0.040,
    maxHold: 17,

    berryIndex: 1.21,
    ingIndex: 2.65,
    skillIndicator:0.909,

    evolutionChain: [
      {
        dexNo: 69,
        formId: "normal",
        evolveTo: [
          {
            targetDexNo: 70,
            targetFormId: "normal",
            conditions: [
              { type: "level", value: 16 },
              { type: "candy", value: 40 }
            ]
          }
        ]
      },
      {
        dexNo: 70,
        formId: "normal",
        evolveTo: [
          {
            targetDexNo: 71,
            targetFormId: "normal",
            conditions: [
              { type: "item", value: "リーフのいし" },
              { type: "candy", value: 80 }
            ]
          }
        ]
      },
      {
        dexNo: 71,
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
        name: "ラピスラズリ湖畔",
        stars: {
          1: [{ type: "ノーマル", rank: 1 }],
          2: [{ type: "ノーマル", rank: 5 }],
          3: [{ type: "ハイパー", rank: 1 }],
          4: [{ type: "スーパー", rank: 1 }]
        }
      }
    ]
  },

  {
    dexNo: 71,
    formId: "normal",
    name: "ウツボット",

    imageCard: getImagePath("card", 71, "normal"),
    imageDetail: getImagePath("panel", 71, "normal"),

    type: ["くさ"],
    tokui: "食材",

    sleepType: "うとうと",

    mainSkill: "げんきチャージS",

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

    baseHelpTime: 2800,
    ingRate: 0.233,
    skillRate: 0.039,
    maxHold: 27,

    berryIndex: 1.64,
    ingIndex: 3.56,
    skillIndicator:1.203,

    evolutionChain: [
      {
        dexNo: 69,
        formId: "normal",
        evolveTo: [
          {
            targetDexNo: 70,
            targetFormId: "normal",
            conditions: [
              { type: "level", value: 16 },
              { type: "candy", value: 40 }
            ]
          }
        ]
      },
      {
        dexNo: 70,
        formId: "normal",
        evolveTo: [
          {
            targetDexNo: 71,
            targetFormId: "normal",
            conditions: [
              { type: "item", value: "リーフのいし" },
              { type: "candy", value: 80 }
            ]
          }
        ]
      },
      {
        dexNo: 71,
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
        name: "ラピスラズリ湖畔",
        stars: {
          1: [{ type: "ハイパー", rank: 1 }],
          2: [{ type: "ハイパー", rank: 5 }],
          3: [{ type: "マスター", rank: 6 }],
          4: [{ type: "マスター", rank: 1 }]
        }
      }
    ]
  },

  {
    dexNo: 74,
    formId: "normal",
    name: "イシツブテ",

    imageCard: getImagePath("card", 74, "normal"),
    imageDetail: getImagePath("panel", 74, "normal"),

    type: ["いわ"],
    tokui: "食材",

    sleepType: "ぐっすり",

    mainSkill: "エナジーチャージS(ランダム)",

    ingredients: [
      {
        name: "ワカクサ大豆",
        countsByLevel: { 1: 2, 30: 5, 60: 7 }
      },
      {
        name: "ほっこりポテト",
        countsByLevel: { 30: 4, 60: 6 }
      },
      {
        name: "あじわいキノコ",
        countsByLevel: { 60: 4 }
      }
    ],

    baseHelpTime: 5700,
    ingRate: 0.281,
    skillRate: 0.052,
    maxHold: 9,

    berryIndex: 0.76,
    ingIndex: 1.99,
    skillIndicator:0.788,

    evolutionChain: [
      {
        dexNo: 74,
        formId: "normal",
        evolveTo: [
          {
            targetDexNo: 75,
            targetFormId: "normal",
            conditions: [
              { type: "level", value: 19 },
              { type: "candy", value: 40 }
            ]
          }
        ]
      },
      {
        dexNo: 75,
        formId: "normal",
        evolveTo: [
          {
            targetDexNo: 76,
            targetFormId: "normal",
            conditions: [
              { type: "item", value: "つながりのひも" },
              { type: "candy", value: 80 }
            ]
          }
        ]
      },
      {
        dexNo: 76,
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
        name: "トープ洞窟",
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
    dexNo: 75,
    formId: "normal",
    name: "ゴローン",

    imageCard: getImagePath("card", 75, "normal"),
    imageDetail: getImagePath("panel", 75, "normal"),

    type: ["いわ"],
    tokui: "食材",

    sleepType: "ぐっすり",

    mainSkill: "エナジーチャージS(ランダム)",

    ingredients: [
      {
        name: "ワカクサ大豆",
        countsByLevel: { 1: 2, 30: 5, 60: 7 }
      },
      {
        name: "ほっこりポテト",
        countsByLevel: { 30: 4, 60: 6 }
      },
      {
        name: "あじわいキノコ",
        countsByLevel: { 60: 4 }
      }
    ],

    baseHelpTime: 4000,
    ingRate: 0.272,
    skillRate: 0.048,
    maxHold: 17,

    berryIndex: 1.09,
    ingIndex: 2.74,
    skillIndicator:1.037,

    evolutionChain: [
      {
        dexNo: 74,
        formId: "normal",
        evolveTo: [
          {
            targetDexNo: 75,
            targetFormId: "normal",
            conditions: [
              { type: "level", value: 19 },
              { type: "candy", value: 40 }
            ]
          }
        ]
      },
      {
        dexNo: 75,
        formId: "normal",
        evolveTo: [
          {
            targetDexNo: 76,
            targetFormId: "normal",
            conditions: [
              { type: "item", value: "つながりのひも" },
              { type: "candy", value: 80 }
            ]
          }
        ]
      },
      {
        dexNo: 76,
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
        name: "トープ洞窟",
        stars: {
          1: [{ type: "ノーマル", rank: 4 }],
          2: [{ type: "スーパー", rank: 3 }],
          3: [{ type: "ハイパー", rank: 4 }],
          4: [{ type: "ハイパー", rank: 1 }]
        }
      }
    ]
  },

  {
    dexNo: 76,
    formId: "normal",
    name: "ゴローニャ",

    imageCard: getImagePath("card", 76, "normal"),
    imageDetail: getImagePath("panel", 76, "normal"),

    type: ["いわ"],
    tokui: "食材",

    sleepType: "ぐっすり",

    mainSkill: "エナジーチャージS(ランダム)",

    ingredients: [
      {
        name: "ワカクサ大豆",
        countsByLevel: { 1: 2, 30: 5, 60: 7 }
      },
      {
        name: "ほっこりポテト",
        countsByLevel: { 30: 4, 60: 6 }
      },
      {
        name: "あじわいキノコ",
        countsByLevel: { 60: 4 }
      }
    ],

    baseHelpTime: 3100,
    ingRate: 0.280,
    skillRate: 0.052,
    maxHold: 26,

    berryIndex: 1.39,
    ingIndex: 3.65,
    skillIndicator:1.449,

    evolutionChain: [
      {
        dexNo: 74,
        formId: "normal",
        evolveTo: [
          {
            targetDexNo: 75,
            targetFormId: "normal",
            conditions: [
              { type: "level", value: 19 },
              { type: "candy", value: 40 }
            ]
          }
        ]
      },
      {
        dexNo: 75,
        formId: "normal",
        evolveTo: [
          {
            targetDexNo: 76,
            targetFormId: "normal",
            conditions: [
              { type: "item", value: "つながりのひも" },
              { type: "candy", value: 80 }
            ]
          }
        ]
      },
      {
        dexNo: 76,
        formId: "normal",
        evolveTo: null
      }
    ],

    fields: [
      {
        name: "トープ洞窟",
        stars: {
          1: [{ type: "ハイパー", rank: 5 }],
          2: [{ type: "マスター", rank: 4 }],
          3: [{ type: "マスター", rank: 10 }],
          4: [{ type: "マスター", rank: 5 }]
        }
      }
    ]
  },

  {
    dexNo: 79,
    formId: "normal",
    name: "ヤドン",

    imageCard: getImagePath("card", 79, "normal"),
    imageDetail: getImagePath("panel", 79, "normal"),

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

    baseHelpTime: 5700,
    ingRate: 0.151,
    skillRate: 0.078,
    maxHold: 9,

    berryIndex: 0.92,
    ingIndex: 0.83,
    skillIndicator:1.182,

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
      }
    ]
  },

  {
    dexNo: 80,
    formId: "normal",
    name: "ヤドラン",

    imageCard: getImagePath("card", 80, "normal"),
    imageDetail: getImagePath("panel", 80, "normal"),

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

    baseHelpTime: 3800,
    ingRate: 0.197,
    skillRate: 0.080,
    maxHold: 21,

    berryIndex: 1.36,
    ingIndex: 1.63,
    skillIndicator:1.819,

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
        name: "ワカクサ本島",
        stars: {
          1: [{ type: "ハイパー", rank: 1}],
          2: [{ type: "ハイパー", rank: 5}],
          3: null,
          4: [{ type: "マスター", rank: 1}]
        }
      },
      {
        name: "シアンの砂浜",
        stars: {
          1: [{ type: "スーパー", rank: 3 }],
          2: [{ type: "ハイパー", rank: 2 }],
          3: [{ type: "マスター", rank: 3 }],
          4: [{ type: "ハイパー", rank: 3 }]
        }
      }
    ]
  },

  {
    dexNo: 81,
    formId: "normal",
    name: "コイル",

    imageCard: getImagePath("card", 81, "normal"),
    imageDetail: getImagePath("panel", 81, "normal"),

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

    baseHelpTime: 5800,
    ingRate: 0.182,
    skillRate: 0.064,
    maxHold: 8,

    berryIndex: 0.93,
    ingIndex: 0.72,
    skillIndicator:0.953,

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
          1: [{ type: "ノーマル", rank: 1 }],
          2: [{ type: "ノーマル", rank: 5 }],
          3: [{ type: "ハイパー", rank: 1 }]
        }
      },
      {
        name: "ゴールド旧発電所",
        stars: {
          1: [{ type: "ノーマル", rank: 1 }],
          2: [{ type: "ノーマル", rank: 1 }],
          3: [{ type: "ノーマル", rank: 4 }]
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
    dexNo: 82,
    formId: "normal",
    name: "レアコイル",

    imageCard: getImagePath("card", 82, "normal"),
    imageDetail: getImagePath("panel", 82, "normal"),

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

    baseHelpTime: 4000,
    ingRate: 0.182,
    skillRate: 0.063,
    maxHold: 16,

    berryIndex: 1.35,
    ingIndex: 1.04,
    skillIndicator:1.361,

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
          1: [{ type: "スーパー", rank: 2 }],
          2: [{ type: "ハイパー", rank: 1 }],
          3: [{ type: "マスター", rank: 2 }]
        }
      },
      {
        name: "ゴールド旧発電所",
        stars: {
          1: [{ type: "ノーマル", rank: 1 }],
          2: [{ type: "ノーマル", rank: 4 }],
          3: [{ type: "スーパー", rank: 5 }]
        }
      },
      {
        name: "ワカクサ本島EX",
        stars: {
          1: [{ type: "ノーマル", rank: 5 }],
          2: [{ type: "スーパー", rank: 2 }],
          3: [{ type: "スーパー", rank: 5 }]
        }
      }
    ]
  },

  {
    dexNo: 83,
    formId: "normal",
    name: "カモネギ",

    imageCard: getImagePath("card", 83, "normal"),
    imageDetail: getImagePath("panel", 83, "normal"),

    type: ["ひこう"],
    tokui: "食材",

    sleepType: "ぐっすり",

    mainSkill: "エナジーチャージS",

    ingredients: [
      {
        name: "ふといながねぎ",
        countsByLevel: { 1: 2, 30: 5, 60: 7 }
      },
      {
        name: "マメミート",
        countsByLevel: { 30: 8, 60: 13 }
      },
      {
        name: "あったかジンジャー",
        countsByLevel: { 60: 12 }
      }
    ],

    baseHelpTime: 3000,
    ingRate: 0.160,
    skillRate: 0.043,
    maxHold: 18,

    berryIndex: 1.34,
    ingIndex: 3.90,
    skillIndicator:1.238,

    evolutionChain: [
      {
        dexNo: 83,
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
        name: "シアンの砂浜",
        stars: {
          1: [{ type: "ハイパー", rank: 5 }],
          2: [{ type: "マスター", rank: 4 }],
          3: [{ type: "マスター", rank: 10 }],
          4: [{ type: "マスター", rank: 5 }]
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
    dexNo: 84,
    formId: "normal",
    name: "ドードー",

    imageCard: getImagePath("card", 84, "normal"),
    imageDetail: getImagePath("panel", 84, "normal"),

    type: ["ひこう"],
    tokui: "きのみ",

    sleepType: "ぐっすり",

    mainSkill: "げんきチャージS",

    ingredients: [
      {
        name: "ワカクサ大豆",
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

    baseHelpTime: 3800,
    ingRate: 0.184,
    skillRate: 0.020,
    maxHold: 13,

    berryIndex: 1.55,
    ingIndex: 0.84,
    skillIndicator:0.455,

    evolutionChain: [
      {
        dexNo: 84,
        formId: "normal",
        evolveTo: [
          {
            targetDexNo: 85,
            targetFormId: "normal",
            conditions: [
              { type: "level", value: 23 },
              { type: "candy", value: 40 }
            ]
          }
        ]
      },
      {
        dexNo: 85,
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
    dexNo: 85,
    formId: "normal",
    name: "ドードリオ",

    imageCard: getImagePath("card", 85, "normal"),
    imageDetail: getImagePath("panel", 85, "normal"),

    type: ["ひこう"],
    tokui: "きのみ",

    sleepType: "ぐっすり",

    mainSkill: "げんきチャージS",

    ingredients: [
      {
        name: "ワカクサ大豆",
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

    baseHelpTime: 2300,
    ingRate: 0.184,
    skillRate: 0.020,
    maxHold: 26,

    berryIndex: 2.55,
    ingIndex: 1.39,
    skillIndicator:0.751,

    evolutionChain: [
      {
        dexNo: 84,
        formId: "normal",
        evolveTo: [
          {
            targetDexNo: 85,
            targetFormId: "normal",
            conditions: [
              { type: "level", value: 23 },
              { type: "candy", value: 40 }
            ]
          }
        ]
      },
      {
        dexNo: 85,
        formId: "normal",
        evolveTo: null
      }
    ],

    fields: [
      {
        name: "ワカクサ本島",
        stars: {
          1: [{ type: "スーパー", rank: 5 }],
          2: [{ type: "ハイパー", rank: 4 }],
          3: null,
          4: [{ type: "ハイパー", rank: 5 }]
        }
      },
      {
        name: "ラピスラズリ湖畔",
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
          1: [{ type: "ノーマル", rank: 1 }],
          2: [{ type: "スーパー", rank: 1 }],
          3: [{ type: "スーパー", rank: 4 }],
          4: [{ type: "スーパー", rank: 5 }]
        }
      }
    ]
  },

  {
    dexNo: 92,
    formId: "normal",
    name: "ゴース",

    imageCard: getImagePath("card", 92, "normal"),
    imageDetail: getImagePath("panel", 92, "normal"),

    type: ["ゴースト"],
    tokui: "食材",

    sleepType: "うとうと",

    mainSkill: "エナジーチャージS(ランダム)",

    ingredients: [
      {
        name: "げきからハーブ",
        countsByLevel: { 1: 2, 30: 5, 60: 7 }
      },
      {
        name: "あじわいキノコ",
        countsByLevel: { 30: 4, 60: 6 }
      },
      {
        name: "ピュアなオイル",
        countsByLevel: { 60: 8 }
      }
    ],

    baseHelpTime: 3800,
    ingRate: 0.144,
    skillRate: 0.015,
    maxHold: 10,

    berryIndex: 1.17,
    ingIndex: 2.05,
    skillIndicator:0.341,

    evolutionChain: [
      {
        dexNo: 92,
        formId: "normal",
        evolveTo: [
          {
            targetDexNo: 93,
            targetFormId: "normal",
            conditions: [
              { type: "level", value: 19 },
              { type: "candy", value: 40 }
            ]
          }
        ]
      },
      {
        dexNo: 93,
        formId: "normal",
        evolveTo: [
          {
            targetDexNo: 94,
            targetFormId: "normal",
            conditions: [
              { type: "item", value: "つながりのひも" },
              { type: "candy", value: 80 }
            ]
          }
        ]
      },
      {
        dexNo: 94,
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
          3: null
        }
      },
      {
        name: "トープ洞窟",
        stars: {
          1: [{ type: "ノーマル", rank: 1 }],
          2: [{ type: "ノーマル", rank: 1 }],
          3: [{ type: "スーパー", rank: 2 }]
        }
      },
      {
        name: "ゴールド旧発電所",
        stars: {
          1: [{ type: "ノーマル", rank: 1 }],
          2: [{ type: "ノーマル", rank: 1 }],
          3: [{ type: "ノーマル", rank: 4 }]
        }
      }
    ]
  },

  {
    dexNo: 93,
    formId: "normal",
    name: "ゴースト",

    imageCard: getImagePath("card", 93, "normal"),
    imageDetail: getImagePath("panel", 93, "normal"),

    type: ["ゴースト"],
    tokui: "食材",

    sleepType: "うとうと",

    mainSkill: "エナジーチャージS(ランダム)",

    ingredients: [
      {
        name: "げきからハーブ",
        countsByLevel: { 1: 2, 30: 5, 60: 7 }
      },
      {
        name: "あじわいキノコ",
        countsByLevel: { 30: 4, 60: 6 }
      },
      {
        name: "ピュアなオイル",
        countsByLevel: { 60: 8 }
      }
    ],

    baseHelpTime: 3000,
    ingRate: 0.157,
    skillRate: 0.022,
    maxHold: 19,

    berryIndex: 1.46,
    ingIndex: 2.84,
    skillIndicator:0.634,

    evolutionChain: [
      {
        dexNo: 92,
        formId: "normal",
        evolveTo: [
          {
            targetDexNo: 93,
            targetFormId: "normal",
            conditions: [
              { type: "level", value: 19 },
              { type: "candy", value: 40 }
            ]
          }
        ]
      },
      {
        dexNo: 93,
        formId: "normal",
        evolveTo: [
          {
            targetDexNo: 94,
            targetFormId: "normal",
            conditions: [
              { type: "item", value: "つながりのひも" },
              { type: "candy", value: 80 }
            ]
          }
        ]
      },
      {
        dexNo: 94,
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
          3: null
        }
      },
      {
        name: "トープ洞窟",
        stars: {
          1: [{ type: "ノーマル", rank: 5 }],
          2: [{ type: "スーパー", rank: 4 }],
          3: [{ type: "ハイパー", rank: 5 }]
        }
      },
      {
        name: "ゴールド旧発電所",
        stars: {
          1: [{ type: "ノーマル", rank: 2 }],
          2: [{ type: "スーパー", rank: 1 }],
          3: [{ type: "ハイパー", rank: 2 }]
        }
      }
    ]
  },

  {
    dexNo: 94,
    formId: "normal",
    name: "ゲンガー",

    imageCard: getImagePath("card", 94, "normal"),
    imageDetail: getImagePath("panel", 94, "normal"),

    type: ["ゴースト"],
    tokui: "食材",

    sleepType: "うとうと",

    mainSkill: "エナジーチャージS(ランダム)",

    ingredients: [
      {
        name: "げきからハーブ",
        countsByLevel: { 1: 2, 30: 5, 60: 7 }
      },
      {
        name: "あじわいキノコ",
        countsByLevel: { 30: 4, 60: 6 }
      },
      {
        name: "ピュアなオイル",
        countsByLevel: { 60: 8 }
      }
    ],

    baseHelpTime: 2200,
    ingRate: 0.161,
    skillRate: 0.024,
    maxHold: 28,

    berryIndex: 1.98,
    ingIndex: 3.97,
    skillIndicator:0.943,

    evolutionChain: [
      {
        dexNo: 92,
        formId: "normal",
        evolveTo: [
          {
            targetDexNo: 93,
            targetFormId: "normal",
            conditions: [
              { type: "level", value: 19 },
              { type: "candy", value: 40 }
            ]
          }
        ]
      },
      {
        dexNo: 93,
        formId: "normal",
        evolveTo: [
          {
            targetDexNo: 94,
            targetFormId: "normal",
            conditions: [
              { type: "item", value: "つながりのひも" },
              { type: "candy", value: 80 }
            ]
          }
        ]
      },
      {
        dexNo: 94,
        formId: "normal",
        evolveTo: null
      }
    ],

    fields: [
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
        name: "ゴールド旧発電所",
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
    dexNo: 95,
    formId: "normal",
    name: "イワーク",

    imageCard: getImagePath("card", 95, "normal"),
    imageDetail: getImagePath("panel", 95, "normal"),

    type: ["いわ"],
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

    baseHelpTime: 3100,
    ingRate: 0.132,
    skillRate: 0.023,
    maxHold: 22,

    berryIndex: 2.52,
    ingIndex: 0.89,
    skillIndicator:0.641,

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
          1: [{ type: "スーパー", rank: 2 }],
          2: [{ type: "ハイパー", rank: 1 }],
          3: [{ type: "マスター", rank: 2 }]
        }
      },
      {
        name: "ワカクサ本島EX",
        stars: {
          1: [{ type: "スーパー", rank: 2 }],
          2: [{ type: "スーパー", rank: 4 }],
          3: [{ type: "ハイパー", rank: 4 }]
        }
      }
    ]
  },

  {
    dexNo: 104,
    formId: "normal",
    name: "カラカラ",

    imageCard: getImagePath("card", 104, "normal"),
    imageDetail: getImagePath("panel", 104, "normal"),

    type: ["じめん"],
    tokui: "きのみ",

    sleepType: "ぐっすり",

    mainSkill: "げんきチャージS",

    ingredients: [
      {
        name: "あったかジンジャー",
        countsByLevel: { 1: 1, 30: 2, 60: 4 }
      },
      {
        name: "リラックスカカオ",
        countsByLevel: { 30: 2, 60: 3 }
      }
    ],

    baseHelpTime: 4800,
    ingRate: 0.223,
    skillRate: 0.044,
    maxHold: 10,

    berryIndex: 1.41,
    ingIndex: 1.11,
    skillIndicator:0.792,

    evolutionChain: [
      {
        dexNo: 104,
        formId: "normal",
        evolveTo: [
          {
            targetDexNo: 105,
            targetFormId: "normal",
            conditions: [
              { type: "level", value: 21 },
              { type: "candy", value: 40 }
            ]
          }
        ]
      },
      {
        dexNo: 105,
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
        name: "トープ洞窟",
        stars: {
          1: [{ type: "ノーマル", rank: 1 }],
          2: [{ type: "ノーマル", rank: 1 }],
          3: [{ type: "スーパー", rank: 2 }],
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
    dexNo: 105,
    formId: "normal",
    name: "ガラガラ",

    imageCard: getImagePath("card", 105, "normal"),
    imageDetail: getImagePath("panel", 105, "normal"),

    type: ["じめん"],
    tokui: "きのみ",

    sleepType: "ぐっすり",

    mainSkill: "げんきチャージS",

    ingredients: [
      {
        name: "あったかジンジャー",
        countsByLevel: { 1: 1, 30: 2, 60: 4 }
      },
      {
        name: "リラックスカカオ",
        countsByLevel: { 30: 2, 60: 3 }
      }
    ],

    baseHelpTime: 3300,
    ingRate: 0.225,
    skillRate: 0.045,
    maxHold: 20,

    berryIndex: 2.04,
    ingIndex: 1.63,
    skillIndicator:1.178,

    evolutionChain: [
      {
        dexNo: 104,
        formId: "normal",
        evolveTo: [
          {
            targetDexNo: 105,
            targetFormId: "normal",
            conditions: [
              { type: "level", value: 21 },
              { type: "candy", value: 40 }
            ]
          }
        ]
      },
      {
        dexNo: 105,
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
          2: [{ type: "スーパー", rank: 1 }],
          3: [{ type: "スーパー", rank: 5 }],
          4: [{ type: "ハイパー", rank: 1 }]
        }
      }
    ]
  },

  {
    dexNo: 113,
    formId: "normal",
    name: "ラッキー",

    imageCard: getImagePath("card", 113, "normal"),
    imageDetail: getImagePath("panel", 113, "normal"),

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

    baseHelpTime: 3300,
    ingRate: 0.236,
    skillRate: 0.023,
    maxHold: 20,

    berryIndex: 1.30,
    ingIndex: 3.25,
    skillIndicator:0.602,

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
          1: [{ type: "ハイパー", rank: 5 }],
          2: [{ type: "マスター", rank: 4 }],
          3: null,
          4: [{ type: "マスター", rank: 5 }]
        }
      },
      {
        name: "ウノハナ雪原",
        stars: {
          1: [{ type: "スーパー", rank: 5 }],
          2: [{ type: "ハイパー", rank: 4 }],
          3: [{ type: "マスター", rank: 5 }],
          4: [{ type: "ハイパー", rank: 5 }]
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
          1: [{ type: "スーパー", rank: 3 }],
          2: [{ type: "ハイパー", rank: 4 }],
          3: [{ type: "マスター", rank: 4 }],
          4: [{ type: "マスター", rank: 8 }]
        }
      }
    ]
  },

  {
    dexNo: 115,
    formId: "normal",
    name: "ガルーラ",

    imageCard: getImagePath("card", 115, "normal"),
    imageDetail: getImagePath("panel", 115, "normal"),

    type: ["ノーマル"],
    tokui: "食材",

    sleepType: "すやすや",

    mainSkill: "食材ゲットS",

    ingredients: [
      {
        name: "あったかジンジャー",
        countsByLevel: { 1: 2, 30: 5, 60: 7 }
      },
      {
        name: "ほっこりポテト",
        countsByLevel: { 30: 4, 60: 6 }
      },
      {
        name: "ワカクサ大豆",
        countsByLevel: { 60: 8 }
      }
    ],

    baseHelpTime: 2650,
    ingRate: 0.222,
    skillRate: 0.017,
    maxHold: 21,

    berryIndex: 1.64,
    ingIndex: 3.62,
    skillIndicator:0.554,

    evolutionChain: [
      {
        dexNo: 115,
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
          4: [{ type: "マスター", rank: 1 }]
        }
      },
      {
        name: "ワカクサ本島EX",
        stars: {
          1: [{ type: "スーパー", rank: 2 }],
          2: [{ type: "スーパー", rank: 4 }],
          3: [{ type: "ハイパー", rank: 4 }],
          4: [{ type: "マスター", rank: 1 }]
        }
      }
    ]
  },

  {
    dexNo: 122,
    formId: "normal",
    name: "バリヤード",

    imageCard: getImagePath("card", 122, "normal"),
    imageDetail: getImagePath("panel", 122, "normal"),

    type: ["エスパー"],
    tokui: "食材",

    sleepType: "すやすや",

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

    baseHelpTime: 2800,
    ingRate: 0.216,
    skillRate: 0.039,
    maxHold: 22,

    berryIndex: 1.46,
    ingIndex: 3.30,
    skillIndicator:1.203,

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
          1: [{ type: "ノーマル", rank: 5 }],
          2: [{ type: "スーパー", rank: 4 }],
          3: [{ type: "ハイパー", rank: 5 }],
          4: [{ type: "マスター", rank: 1 }]
        }
      }
    ]
  },

  {
    dexNo: 127,
    formId: "normal",
    name: "カイロス",

    imageCard: getImagePath("card", 127, "normal"),
    imageDetail: getImagePath("panel", 127, "normal"),

    type: ["むし"],
    tokui: "食材",

    sleepType: "うとうと",

    mainSkill: "エナジーチャージM",

    ingredients: [
      {
        name: "あまいミツ",
        countsByLevel: { 1: 2, 30: 5, 60: 7 }
      },
      {
        name: "とくせんリンゴ",
        countsByLevel: { 30: 5, 60: 8 }
      },
      {
        name: "マメミート",
        countsByLevel: { 60: 7 }
      }
    ],

    baseHelpTime: 2400,
    ingRate: 0.216,
    skillRate: 0.031,
    maxHold: 24,

    berryIndex: 1.57,
    ingIndex: 3.59,
    skillIndicator:1.116,

    evolutionChain: [
      {
        dexNo: 127,
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
    dexNo: 132,
    formId: "normal",
    name: "メタモン",

    imageCard: getImagePath("card", 132, "normal"),
    imageDetail: getImagePath("panel", 132, "normal"),

    type: ["ノーマル"],
    tokui: "食材",

    sleepType: "すやすや",

    mainSkill: "へんしん(スキルコピー)",

    ingredients: [
      {
        name: "ピュアなオイル",
        countsByLevel: { 1: 2, 30: 5, 60: 7 }
      },
      {
        name: "ふといながねぎ",
        countsByLevel: { 30: 3, 60: 5 }
      },
      {
        name: "おいしいシッポ",
        countsByLevel: { 60: 3 }
      }
    ],

    baseHelpTime: 3500,
    ingRate: 0.201,
    skillRate: 0.036,
    maxHold: 17,

    berryIndex: 1.28,
    ingIndex: 2.89,
    skillIndicator:0.889,

    evolutionChain: [
      {
        dexNo: 132,
        formId: "normal",
        evolveTo: null
      }
    ],

    fields: [
      {
        name: "ワカクサ本島",
        stars: {
          1: [{ type: "スーパー", rank: 5 }],
          2: [{ type: "ハイパー", rank: 4 }],
          3: [{ type: "マスター", rank: 5 }],
          4: [{ type: "ハイパー", rank: 5 },
              { type: "ハイパー", rank: 5 },
              { type: "ハイパー", rank: 5 }
          ]
        }
      },
      {
        name: "シアンの砂浜",
        stars: {
          1: [{ type: "スーパー", rank: 2 }],
          2: [{ type: "ハイパー", rank: 1 }],
          3: [{ type: "マスター", rank: 2 }],
          4: [{ type: "ハイパー", rank: 2 },
              { type: "ハイパー", rank: 2 },
              { type: "ハイパー", rank: 2 }
          ]
        }
      },
      {
        name: "トープ洞窟",
        stars: {
          1: [{ type: "スーパー", rank: 1 }],
          2: [{ type: "スーパー", rank: 5 }],
          3: null,
          4: [{ type: "ハイパー", rank: 1 },
              { type: "ハイパー", rank: 1 },
              { type: "ハイパー", rank: 1 }
          ]
        }
      },
      {
        name: "ウノハナ雪原",
        stars: {
          1: [{ type: "ノーマル", rank: 5 }],
          2: [{ type: "スーパー", rank: 4 }],
          3: null,
          4: [{ type: "スーパー", rank: 5 },
              { type: "スーパー", rank: 5 },
              { type: "スーパー", rank: 5 }
          ]
        }
      },
      {
        name: "ラピスラズリ湖畔",
        stars: {
          1: [{ type: "ノーマル", rank: 4 }],
          2: [{ type: "スーパー", rank: 3 }],
          3: null,
          4: [{ type: "スーパー", rank: 4 },
              { type: "スーパー", rank: 4 },
              { type: "スーパー", rank: 4 }
          ]
        }
      },
      {
        name: "ゴールド旧発電所",
        stars: {
          1: [{ type: "ノーマル", rank: 3 }],
          2: [{ type: "スーパー", rank: 2 }],
          3: [{ type: "ハイパー", rank: 3 }],
          4: [{ type: "スーパー", rank: 3 },
              { type: "スーパー", rank: 3 },
              { type: "スーパー", rank: 3 }
          ]
        }
      },
      {
        name: "アンバー渓谷",
        stars: {
          1: [{ type: "ノーマル", rank: 2 }],
          2: [{ type: "スーパー", rank: 1 }],
          3: [{ type: "ハイパー", rank: 2 }],
          4: [{ type: "スーパー", rank: 3 },
              { type: "スーパー", rank: 3 },
              { type: "スーパー", rank: 3 }
          ]
        }
      },
      {
        name: "ワカクサ本島EX",
        stars: {
          1: [{ type: "スーパー", rank: 1 }],
          2: [{ type: "スーパー", rank: 3 }],
          3: [{ type: "ハイパー", rank: 2 }],
          4: [{ type: "ハイパー", rank: 3 },
              { type: "ハイパー", rank: 3 },
              { type: "ハイパー", rank: 3 },
              { type: "ハイパー", rank: 3 },
              { type: "ハイパー", rank: 3 },
              { type: "ハイパー", rank: 3 },
              { type: "マスター", rank: 6 }
          ]
        }
      }
    ]
  },

  {
    dexNo: 133,
    formId: "normal",
    name: "イーブイ",

    imageCard: getImagePath("card", 133, "normal"),
    imageDetail: getImagePath("panel", 133, "normal"),

    type: ["ノーマル"],
    tokui: "スキル",

    sleepType: "すやすや",

    mainSkill: "食材ゲットS",

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

    baseHelpTime: 3700,
    ingRate: 0.192,
    skillRate: 0.055,
    maxHold: 12,

    berryIndex: 1.22,
    ingIndex: 0.89,
    skillIndicator:1.284,

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
          1: [{ type: "ノーマル", rank: 4 }],
          2: [{ type: "スーパー", rank: 3 }],
          3: null,
          4: [{ type: "スーパー", rank: 4 }]
        }
      },
      {
        name: "シアンの砂浜",
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
    dexNo: 133,
    formId: "holiday",
    name: "イーブイ(ホリデー)",

    imageCard: getImagePath("card", 133, "holiday"),
    imageDetail: getImagePath("panel", 133, "holiday"),

    type: ["ノーマル"],
    tokui: "きのみ",

    sleepType: "すやすや",

    mainSkill: "ゆめのかけらゲットS",

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

    baseHelpTime: 3100,
    ingRate: 0.156,
    skillRate: 0.032,
    maxHold: 20,

    berryIndex: 2.29,
    ingIndex: 0.87,
    skillIndicator:0.892,

    evolutionChain: [
      {
        dexNo: 133,
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
    dexNo: 133,
    formId: "halloween",
    name: "イーブイ(ハロウィン)",

    imageCard: getImagePath("card", 133, "halloween"),
    imageDetail: getImagePath("panel", 133, "halloween"),

    type: ["ノーマル"],
    tokui: "スキル",

    sleepType: "すやすや",

    mainSkill: "食材ゲットS",

    ingredients: [
      {
        name: "ずっしりカボチャ",
        countsByLevel: { 1: 1, 30: 2, 60: 4 }
      },
      {
        name: "リラックスカカオ",
        countsByLevel: { 30: 4, 60: 6 }
      },
      {
        name: "モーモーミルク",
        countsByLevel: { 60: 9 }
      }
    ],

    baseHelpTime: 3200,
    ingRate: 0.120,
    skillRate: 0.046,
    maxHold: 18,

    berryIndex: 1.54,
    ingIndex: 1.89,
    skillIndicator:1.242,

    evolutionChain: [
      {
        dexNo: 133,
        formId: "halloween",
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
    dexNo: 134,
    formId: "normal",
    name: "シャワーズ",

    imageCard: getImagePath("card", 134, "normal"),
    imageDetail: getImagePath("panel", 134, "normal"),

    type: ["みず"],
    tokui: "スキル",

    sleepType: "ぐっすり",

    mainSkill: "食材ゲットS",

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

    baseHelpTime: 3100,
    ingRate: 0.212,
    skillRate: 0.061,
    maxHold: 18,

    berryIndex: 1.58,
    ingIndex: 1.18,
    skillIndicator:1.700,

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
          1: [{ type: "スーパー", rank: 3 }],
          2: [{ type: "ハイパー", rank: 1 }],
          3: [{ type: "ハイパー", rank: 5 }],
          4: [{ type: "マスター", rank: 2 }]
        }
      }
    ]
  },

  {
    dexNo: 135,
    formId: "normal",
    name: "サンダース",

    imageCard: getImagePath("card", 135, "normal"),
    imageDetail: getImagePath("panel", 135, "normal"),

    type: ["でんき"],
    tokui: "スキル",

    sleepType: "すやすや",

    mainSkill: "おてつだいサポートS",

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

    baseHelpTime: 2200,
    ingRate: 0.151,
    skillRate: 0.039,
    maxHold: 22,

    berryIndex: 1.93,
    ingIndex: 1.18,
    skillIndicator:1.532,

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
          3: [{ type: "マスター", rank: 15 }],
          4: [{ type: "マスター", rank: 10 }]
        }
      },
      {
        name: "ゴールド旧発電所",
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
          3: [{ type: "ハイパー", rank: 5 }],
          4: [{ type: "マスター", rank: 2 }]
        }
      }
    ]
  },

  {
    dexNo: 136,
    formId: "normal",
    name: "ブースター",

    imageCard: getImagePath("card", 136, "normal"),
    imageDetail: getImagePath("panel", 136, "normal"),

    type: ["ほのお"],
    tokui: "スキル",

    sleepType: "すやすや",

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

    baseHelpTime: 2700,
    ingRate: 0.185,
    skillRate: 0.052,
    maxHold: 19,

    berryIndex: 1.63,
    ingIndex: 1.18,
    skillIndicator:1.664,

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
    dexNo: 147,
    formId: "normal",
    name: "ミニリュウ",

    imageCard: getImagePath("card", 147, "normal"),
    imageDetail: getImagePath("panel", 147, "normal"),

    type: ["ドラゴン"],
    tokui: "食材",

    sleepType: "うとうと",

    mainSkill: "げんきチャージS",

    ingredients: [
      {
        name: "げきからハーブ",
        countsByLevel: { 1: 2, 30: 5, 60: 7 }
      },
      {
        name: "ワカクサコーン",
        countsByLevel: { 30: 4, 60: 7 }
      },
      {
        name: "ピュアなオイル",
        countsByLevel: { 60: 8 }
      }
    ],

    baseHelpTime: 5000,
    ingRate: 0.250,
    skillRate: 0.020,
    maxHold: 9,

    berryIndex: 1.05,
    ingIndex: 2.60,
    skillIndicator:0.346,

    evolutionChain: [
      {
        dexNo: 147,
        formId: "normal",
        evolveTo: [
          {
            targetDexNo: 148,
            targetFormId: "normal",
            conditions: [
              { type: "level", value: 23 },
              { type: "candy", value: 40 }
            ]
          }
        ]
      },
      {
        dexNo: 148,
        formId: "normal",
        evolveTo: [
          {
            targetDexNo: 149,
            targetFormId: "normal",
            conditions: [
              { type: "level", value: 41 },
              { type: "candy", value: 100 }
            ]
          }
        ]
      },
      {
        dexNo: 149,
        formId: "normal",
        evolveTo: null
      }
    ],

    fields: [
      {
        name: "ラピスラズリ湖畔",
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
    dexNo: 148,
    formId: "normal",
    name: "ハクリュー",

    imageCard: getImagePath("card", 148, "normal"),
    imageDetail: getImagePath("panel", 148, "normal"),

    type: ["ドラゴン"],
    tokui: "食材",

    sleepType: "うとうと",

    mainSkill: "げんきチャージS",

    ingredients: [
      {
        name: "げきからハーブ",
        countsByLevel: { 1: 2, 30: 5, 60: 7 }
      },
      {
        name: "ワカクサコーン",
        countsByLevel: { 30: 4, 60: 7 }
      },
      {
        name: "ピュアなオイル",
        countsByLevel: { 60: 8 }
      }
    ],

    baseHelpTime: 3800,
    ingRate: 0.262,
    skillRate: 0.025,
    maxHold: 17,

    berryIndex: 1.36,
    ingIndex: 3.58,
    skillIndicator:0.568,

    evolutionChain: [
      {
        dexNo: 147,
        formId: "normal",
        evolveTo: [
          {
            targetDexNo: 148,
            targetFormId: "normal",
            conditions: [
              { type: "level", value: 23 },
              { type: "candy", value: 40 }
            ]
          }
        ]
      },
      {
        dexNo: 148,
        formId: "normal",
        evolveTo: [
          {
            targetDexNo: 149,
            targetFormId: "normal",
            conditions: [
              { type: "level", value: 41 },
              { type: "candy", value: 100 }
            ]
          }
        ]
      },
      {
        dexNo: 149,
        formId: "normal",
        evolveTo: null
      }
    ],

    fields: [
      {
        name: "ラピスラズリ湖畔",
        stars: {
          1: [{ type: "スーパー", rank: 1 }],
          2: [{ type: "スーパー", rank: 5 }],
          3: [{ type: "マスター", rank: 1 }],
          4: [{ type: "マスター", rank: 1 }]
        }
      }
    ]
  },

  {
    dexNo: 149,
    formId: "normal",
    name: "カイリュー",

    imageCard: getImagePath("card", 149, "normal"),
    imageDetail: getImagePath("panel", 149, "normal"),

    type: ["ドラゴン"],
    tokui: "食材",

    sleepType: "うとうと",

    mainSkill: "げんきチャージS",

    ingredients: [
      {
        name: "げきからハーブ",
        countsByLevel: { 1: 2, 30: 5, 60: 7 }
      },
      {
        name: "ワカクサコーン",
        countsByLevel: { 30: 4, 60: 7 }
      },
      {
        name: "ピュアなオイル",
        countsByLevel: { 60: 8 }
      }
    ],

    baseHelpTime: 2600,
    ingRate: 0.264,
    skillRate: 0.026,
    maxHold: 30,

    berryIndex: 1.98,
    ingIndex: 5.27,
    skillIndicator:0.864,

    evolutionChain: [
      {
        dexNo: 147,
        formId: "normal",
        evolveTo: [
          {
            targetDexNo: 148,
            targetFormId: "normal",
            conditions: [
              { type: "level", value: 23 },
              { type: "candy", value: 40 }
            ]
          }
        ]
      },
      {
        dexNo: 148,
        formId: "normal",
        evolveTo: [
          {
            targetDexNo: 149,
            targetFormId: "normal",
            conditions: [
              { type: "level", value: 41 },
              { type: "candy", value: 100 }
            ]
          }
        ]
      },
      {
        dexNo: 149,
        formId: "normal",
        evolveTo: null
      }
    ],

    fields: [
      {
        name: "ラピスラズリ湖畔",
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
    dexNo: 151,
    formId: "normal",
    name: "ミュウ",

    imageCard: getImagePath("card", 151, "normal"),
    imageDetail: getImagePath("panel", 151, "normal"),

    type: ["エスパー"],
    tokui: "オール",

    sleepType: "すやすや",

    mainSkill: "オールマイティー",

    ingredients: [
      {
        name: "ふといながねぎ",
        countsByLevel: { 1: 2, 30: 3, 60: 4 }
      },
      {
        name: "とくせんエッグ",
        countsByLevel: { 1: 2, 30: 4, 60: 6 }
      },
      {
        name: "げきからハーブ",
        countsByLevel: { 1: 2, 30: 4, 60: 5 }
      },
      {
        name: "マメミート",
        countsByLevel: { 1: 2, 30: 4, 60: 7 }
      },
      {
        name: "ピュアなオイル",
        countsByLevel: { 1: 2, 30: 4, 60: 6 }
      },
      {
        name: "ワカクサ大豆",
        countsByLevel: { 1: 2, 30: 4, 60: 7 }
      },
      {
        name: "つやつやアボカド",
        countsByLevel: { 1: 2, 30: 3, 60: 4 }
      },
      {
        name: "おいしいシッポ",
        countsByLevel: { 60: 2 }
      }
    ],

    baseHelpTime: 2900,
    ingRate: 0.200,
    skillRate: 0.040,
    maxHold: 26,

    berryIndex: 2.15,
    ingIndex: 2.84,
    skillIndicator:1.192,

    evolutionChain: [
      {
        dexNo: 151,
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