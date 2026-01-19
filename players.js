const leaderboard = document.getElementById("leaderboard");

const players = [
  { name: "Marlowww", title: "Combat Grandmaster (435 pts)", region: "NA", tier: "HT1" },
  { name: "ItzRealMe", title: "Combat Master (330 pts)", region: "NA", tier: "HT3" },
  { name: "Swight", title: "Combat Master (290 pts)", region: "NA", tier: "HT1" }
];

// auto-fill to 100
while (players.length < 100) {
  const i = players.length + 1;
  players.push({
    name: `Player${i}`,
    title: "Combat Ace",
    region: "EU",
    tier: "LT2"
  });
}

players.forEach((p, i) => {
  const row = document.createElement("div");
  row.className = "row";

  row.innerHTML = `
    <div class="rank">${i + 1}</div>

    <div class="skin-wrap">
      <img
        class="skin"
        src="https://mc-heads.net/render/${p.name}/left"
        alt="${p.name}"
      >
    </div>

    <div class="info">
      <div class="name">${p.name}</div>
      <div class="title">${p.title}</div>
    </div>

    <div class="meta">
      <div class="region">${p.region}</div>
      <div class="tier">${p.tier}</div>
    </div>
  `;

  leaderboard.appendChild(row);
});
