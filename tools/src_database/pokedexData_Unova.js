const pokedexData_Unova = [

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
    ingIndex: 0.70,
    skillIndicator: 0.705,

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
    ingIndex: 1.07,
    skillIndicator: 1.260,

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
        name: "シアンの砂浜",
        stars: {
          1: [{ type: "ハイパー", rank: 1 }],
          2: [{ type: "ハイパー", rank: 5 }],
          3: [{ type: "マスター", rank: 6 }],
          4: [{ type: "マスター", rank: 1 }]
        }
      },
      {
        name: "ウノハナ雪原",
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