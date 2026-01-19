// players.js — auto-generates skin renders

const players = [
  { name: "Marlowww", rank: 1, title: "Combat Grandmaster", points: 435 },
  { name: "ItzRealMe", rank: 2, title: "Combat Master", points: 330 },
  { name: "Swight", rank: 3, title: "Combat Master", points: 290 },
  { name: "Player4", rank: 4, title: "Combat Ace", points: 250 },
  { name: "Player5", rank: 5, title: "Combat Ace", points: 230 },
];

function generateLeaderboard() {
  const leaderboard = document.querySelector(".leaderboard");

  leaderboard.innerHTML = players
    .map(
      (p) => `
      <div class="player-card">
        <div class="rank-badge rank-${p.rank <= 3 ? p.rank : 4}">${p.rank}.</div>
        <img
          class="player-skin"
          img.src = `https://minotar.net/armor/body/${player.name}/100.png`;
        <link rel="stylesheet" href="style.css" />
        <div class="player-info">
          <h3>${p.name}</h3>
          <p>${p.title} (${p.points} pts)</p>
        </div>
      </div>
    `
    )
    .join("");
}

document.addEventListener("DOMContentLoaded", generateLeaderboard);
