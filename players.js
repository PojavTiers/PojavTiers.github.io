const leaderboard = document.getElementById("leaderboard");

/* ===== SAMPLE DATA (REPLACE LATER IF YOU WANT) ===== */
const players = [
  { name: "Marlowww", title: "Combat Grandmaster (435 pts)", region: "NA", tier: "HT1" },
  { name: "ItzRealMe", title: "Combat Master (330 pts)", region: "NA", tier: "HT3" },
  { name: "Swight", title: "Combat Master (290 pts)", region: "NA", tier: "HT1" },
  { name: "Player4", title: "Combat Ace (37 pts)", region: "EU", tier: "LT2" },
  { name: "Player5", title: "Combat Ace (139 pts)", region: "EU", tier: "LT2" },
];

/* ===== AUTO FILL TO 100 PLAYERS ===== */
while (players.length < 100) {
  const i = players.length + 1;
  players.push({
    name: `Player${i}`,
    title: "Combat Ace",
    region: "EU",
    tier: "LT2"
  });
}

/* ===== RENDER ===== */
players.forEach((p, i) => {
  const row = document.createElement("div");
  row.className = "row";

  // rank classes
  let rankClass = "rank rank-normal";
  if (i === 0) rankClass = "rank rank-1";
  if (i === 1) rankClass = "rank rank-2";
  if (i === 2) rankClass = "rank rank-3";

  row.innerHTML = `
    <div class="${rankClass}">${i + 1}</div>

    <div class="skin-wrap">
      <img
        class="skin"
        src="https://minotar.net/body/${p.name}/100.png"
        alt="${p.name}"
      >
    </div>

    <div class="info">
      <div class="name">${p.name}</div>
      <div class="title">${p.title}</div>
    </div>
  `;

  leaderboard.appendChild(row);
});
