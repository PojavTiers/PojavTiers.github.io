const players = [
  { name: "Player1", tier: "Combat Grandmaster", rank: 1 },
  { name: "Player2", tier: "Combat Master", rank: 2 },
  { name: "Player3", tier: "Combat Master", rank: 3 },
  { name: "Player4", tier: "Combat Elite", rank: 4 },
  { name: "Player5", tier: "Combat Elite", rank: 5 }
];

const leaderboard = document.getElementById("leaderboard");

players.forEach(p => {
  const row = document.createElement("div");
  row.className = "row";

  const rankClass =
    p.rank === 1 ? "gold" :
    p.rank === 2 ? "silver" :
    p.rank === 3 ? "bronze" : "normal";

  row.innerHTML = `
    <div class="rank ${rankClass}">${p.rank}</div>

    <div class="skin-panel">
      <div class="skin"
        style="background-image:url('https://mc-heads.net/body/${p.name}/right');">
      </div>
    </div>

    <div class="info">
      <div class="name">${p.name}</div>
      <div class="sub">${p.tier}</div>
    </div>
  `;

  leaderboard.appendChild(row);
});
