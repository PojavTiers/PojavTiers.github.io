// === Player Data ===
const players = [
  { name: "Marlowww", rank: "Combat Grandmaster", points: 435 },
  { name: "ItzRealMe", rank: "Combat Master", points: 330 },
  { name: "Swight", rank: "Combat Master", points: 290 },
  { name: "Player4", rank: "Combat Ace", points: 250 },
  { name: "Player5", rank: "Combat Ace", points: 230 },
];

// === Generate Leaderboard ===
const leaderboard = document.querySelector(".leaderboard");

players.forEach((player, index) => {
  const card = document.createElement("div");
  card.className = "player-card";

  // Rank badge (color by rank)
  const rank = document.createElement("div");
  rank.className = "rank-badge";
  rank.textContent = `${index + 1}.`;

  if (index === 0) rank.style.background = "#f1c40f"; // Gold
  else if (index === 1) rank.style.background = "#bdc3c7"; // Silver
  else if (index === 2) rank.style.background = "#e67e22"; // Bronze
  else rank.style.background = "#2c3e50"; // Default

  // Player skin render (angled 3D style)
  const skin = document.createElement("img");
  skin.className = "player-skin";
  skin.src = `https://visage.surgeplay.com/full/${player.name}.png?yaw=20&pitch=-5&scale=6`;
  skin.alt = `${player.name}'s skin`;

  // Info section (name, rank, points)
  const info = document.createElement("div");
  info.className = "info";
  info.innerHTML = `
    <h2>${player.name}</h2>
    <p>${player.rank} (${player.points} pts)</p>
  `;

  // Append everything to card
  card.appendChild(rank);
  card.appendChild(skin);
  card.appendChild(info);

  // Add card to leaderboard
  leaderboard.appendChild(card);
});
