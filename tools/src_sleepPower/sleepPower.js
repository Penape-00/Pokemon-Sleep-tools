/* ==========================================================
   ▼ ねむけパワー計算ロジック
========================================================== */

/* 必要睡眠スコアを計算 */
function calcRequiredScore(requiredPower, energy, bonus) {
  const score = Math.ceil(requiredPower / (energy * bonus));
  return score > 100 ? "不可" : score;
}

/* 必要睡眠時間（分）を計算 */
function scoreToSleepTime(score) {
  if (score === "不可") return "―";

  // スコア100は必ず8時間30分
  const minutes = (score >= 100) ? 510 : score * 5.1;

  const h = Math.floor(minutes / 60);
  const m = Math.ceil(minutes % 60);

  return `${h}時間${m}分`;
}

/* メイン計算 */
function calculateSleepPower() {
  const field = document.getElementById("fieldSelect").value;
  const energy = Number(document.getElementById("energyInput").value);
  const bonus = Number(document.getElementById("bonusSelect").value);

  if (!field || !energy || energy <= 0) {
    document.getElementById("resultTable").innerHTML =
      "<tr><td colspan='4'>入力が不足しています。</td></tr>";
    document.getElementById("resultNote").style.display = "none";
    return;
  }

  const borders = sleepPowerBorders[field];

  let html = `
    <tr>
      <th>出現数</th>
      <th>必要ねむけパワー</th>
      <th>必要睡眠スコア</th>
      <th>必要睡眠時間</th>
    </tr>
  `;

  for (let count = 4; count <= 8; count++) {
    const requiredPower = borders[count];
    const score = calcRequiredScore(requiredPower, energy, bonus);
    const time = scoreToSleepTime(score);

    html += `
      <tr>
        <td>${count}体</td>
        <td>${requiredPower.toLocaleString()}</td>
        <td>${score}</td>
        <td>${time}</td>
      </tr>
    `;
  }

  document.getElementById("resultTable").innerHTML = html;
  document.getElementById("resultNote").style.display = "block";
}

/* ==========================================================
   ▼ ボーダー一覧（モーダル）
========================================================== */

function openBorderModal() {
  document.getElementById("borderModal").classList.add("show");
  document.getElementById("modalOverlay").classList.add("show");
  updateBorderModal();
}

function closeBorderModal() {
  document.getElementById("borderModal").classList.remove("show");
  document.getElementById("modalOverlay").classList.remove("show");
}

function updateBorderModal() {
  const field = document.getElementById("modalFieldSelect").value;
  const borders = sleepPowerBorders[field];

  let html = `
    <tr><th>出現数</th><th>必要ねむけパワー</th></tr>
  `;

  for (let count = 4; count <= 8; count++) {
    html += `
      <tr>
        <td>${count}体</td>
        <td>${borders[count].toLocaleString()}</td>
      </tr>
    `;
  }

  document.getElementById("borderTable").innerHTML = html;
}

/* ==========================================================
   ▼ ヘッダー＆スライドメニュー
========================================================== */

function setupMenuToggle() {
  const menuBtn = document.getElementById("menuBtn");
  const sideMenu = document.getElementById("sideMenu");
  const overlay = document.getElementById("overlay");

  menuBtn.addEventListener("click", () => {
    sideMenu.classList.add("open");
    overlay.classList.add("show");
  });

  overlay.addEventListener("click", () => {
    sideMenu.classList.remove("open");
    overlay.classList.remove("show");
  });
}

/* ==========================================================
   ▼ 初期化
========================================================== */

document.addEventListener("DOMContentLoaded", () => {
  setupMenuToggle();

  // モーダルのフィールド選択
  document.getElementById("modalFieldSelect").addEventListener("change", updateBorderModal);

  // メイン計算
  document.getElementById("calcButton").addEventListener("click", calculateSleepPower);

  // モーダル開閉
  document.getElementById("openBorderBtn").addEventListener("click", openBorderModal);
  document.getElementById("closeBorderBtn").addEventListener("click", closeBorderModal);
  document.getElementById("modalOverlay").addEventListener("click", closeBorderModal);

});
