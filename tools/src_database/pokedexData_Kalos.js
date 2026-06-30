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
    ingIndex: 0.82,
    skillIndicator: 0.399,

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
    ingIndex: 1.34,
    skillIndicator: 0.895,

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
    ingIndex: 1.18,
    skillIndicator: 1.329,

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
    ingIndex: 1.15,
    skillIndicator: 1.555,

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
  }

];