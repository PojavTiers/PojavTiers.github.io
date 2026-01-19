document.addEventListener("DOMContentLoaded", () => {
  const container = document.getElementById("leaderboard");

  if (!container) {
    alert("ERROR: #leaderboard not found");
    return;
  }

  const players = [
    { name: "Marlowww", rank: "Combat Grandmaster", pts: 435, region: "NA", tier: "HT1" },
    { name: "ItzRealMe", rank: "Combat Master", pts: 330, region: "NA", tier: "HT3" },
    { name: "Swight", rank: "Combat Master", pts: 290, region: "NA", tier: "HT1" },
  ];

  // Auto-generate up to 100 players
  for (let i = players.length; i < 100; i++) {
    players.push({
      name: `Player${i + 1}`,
      rank: "Combat Ace",
      pts: null,
      region: "EU",
      tier: "LT2",
    });
  }

  players.forEach((p, i) => {
    const row = document.createElement("div");
    row.className = "row";

    row.innerHTML = `
      <div class="pos">${i + 1}</div>

      <div class="skin-wrap">
        <img
          class="skin"
          src="https://mc-heads.net/body/${p.name}/right"
          alt="${p.name}"
        >
      </div>

      <div class="info">
        <div class="name">${p.name}</div>
        <div class="sub">
          ${p.rank}${p.pts ? ` (${p.pts} pts)` : ""}
        </div>
      </div>

      <div class="region">${p.region}</div>
      <div class="tier">${p.tier}</div>
    `;

    container.appendChild(row);
  });
});
