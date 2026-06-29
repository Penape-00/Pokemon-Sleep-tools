function formatEvolutionCondition(cond) {
  switch (cond.type) {
    case "time":
      return cond.value === "day"
        ? "昼（6:00〜18:00）"
        : "夜（18:00〜6:00）";

    case "sleep":
      return `総睡眠時間${cond.value}時間`;

    case "candy":
      return `アメ${cond.value}個`;

    case "level":
      return `Lv.${cond.value}`;

    case "item":
      return `${cond.value}`;

    case "gender":
      return cond.value === "male" ? "オスのみ" : "メスのみ";

    case "nature":
      return `${cond.value}`

    default:
      return "";
  }
}