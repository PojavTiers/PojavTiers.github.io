const leaderboard = document.getElementById("leaderboard");

// Example data (add up to 100)
const players = [
  { name: "Marlowww", title: "Combat Grandmaster", points: 435, region: "NA", tier: "HT1" },
  { name: "ItzRealMe", title: "Combat Master", points: 330, region: "NA", tier: "HT3" },
  { name: "Swight", title: "Combat Master", points: 290, region: "NA", tier: "HT1" },
];

// AUTO FILL DUMMY PLAYERS TILL 100
while (players.length < 100) {
  players.push({
    name: "Player" + (players.length + 1),
    title: "Combat Ace",
    points: Math.floor(Math.random() * 200),
    region: "EU",
    tier: "LT2"
  });
}

players.forEach((player, index) => {
  const rank = index + 1;

  const row = document.createElement("div");
  row.className = "row";

  row.innerHTML = `
    <div class="rank-bar rank-${rank}">
      <span>${rank}</span>
    </div>

    <div class="skin-wrap">
      <img 
        class="skin"
        src="https://mc-heads.net/body/${player.name}/100"
        alt="${player.name}">
    </div>

    <div class="info">
      <div class="name">${player.name}</div>
      <div class="title">
        ${player.title} (${player.points} pts)
      </div>
    </div>

    <div class="meta">
      <span class="region">${player.region}</span>
      <span class="tier">${player.tier}</span>
    </div>
  `;

  leaderboard.appendChild(row);
});
