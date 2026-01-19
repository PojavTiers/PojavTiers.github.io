const players = [
  { rank: 1, name: "Marlowww", title: "Combat Grandmaster", points: 435 },
  { rank: 2, name: "ItzRealMe", title: "Combat Master", points: 330 },
  { rank: 3, name: "Swight", title: "Combat Master", points: 290 },
  { rank: 4, name: "Player4", title: "Combat Ace", points: 250 },
  { rank: 5, name: "Player5", title: "Combat Ace", points: 230 },
];

// Select the leaderboard container
const leaderboard = document.querySelector(".leaderboard");
leaderboard.innerHTML = ""; // clear previous entries if any

players.forEach((player) => {
  const card = document.createElement("div");
  card.className = "player-card";

  // Rank badge
  const rank = document.createElement("div");
  rank.className = `rank-badge rank-${player.rank}`;
  rank.textContent = `${player.rank}.`;

  // Player skin
  const skin = document.createElement("img");
  skin.className = "player-skin";
  skin.src = `https://minotar.net/armor/body/${player.name}/100.png`;
  skin.alt = `${player.name}'s skin`;
  skin.onerror = () => {
    // fallback if skin not found
    skin.src = "https://minotar.net/armor/body/Steve/100.png";
  };

  // Player info
  const info = document.createElement("div");
  info.className = "player-info";
  info.innerHTML = `
    <h3>${player.name}</h3>
    <p>${player.title} (${player.points} pts)</p>
  `;

  // Append everything
  card.appendChild(rank);
  card.appendChild(skin);
  card.appendChild(info);
  leaderboard.appendChild(card);
});
