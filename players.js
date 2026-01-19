// ===== GET CONTAINER =====
const container = document.getElementById("players");

if (!container) {
  console.error("❌ #players container not found");
}

// ===== PLAYER DATA =====
const players = [
  { name: "Marlowww", rank: "Combat Grandmaster", pts: 435, region: "NA", tier: "HT1" },
  { name: "ItzRealMe", rank: "Combat Master", pts: 330, region: "NA", tier: "HT3" },
  { name: "Swight", rank: "Combat Master", pts: 290, region: "NA", tier: "HT1" }
];

// ===== AUTO-FILL TO 100 PLAYERS =====
for (let i = players.length; i < 100; i++) {
  players.push({
    name: `Player${i + 1}`,
    rank: "Combat Ace",
    pts: null,
    region: "EU",
    tier: "LT2"
  });
}

// ===== RENDER LEADERBOARD =====
players.forEach((player, index) => {
  const row = document.createElement("div");
  row.className = "row";

  // Rank / position
  const pos = document.createElement("div");
  pos.className = "pos";
  pos.textContent = index + 1;

  // Skin
  const skinWrap = document.createElement("div");
  skinWrap.className = "skin-wrap";

  const skin = document.createElement("img");
  skin.className = "skin";
  skin.src = `https://mc-heads.net/body/${player.name}/right`;
  skin.alt = player.name;

  skinWrap.appendChild(skin);

  // Info
  const info = document.createElement("div");
  info.className = "info";
  info.innerHTML = `
    <div class="name">${player.name}</div>
    <div class="sub">
      ${player.rank}${player.pts ? ` (${player.pts} pts)` : ""}
    </div>
  `;

  // Region
  const region = document.createElement("div");
  region.className = "region";
  region.textContent = player.region;

  // Tier
  const tier = document.createElement("div");
  tier.className = "tier";
  tier.textContent = player.tier;

  // Append everything in correct order
  row.appendChild(pos);
  row.appendChild(skinWrap);
  row.appendChild(info);
  row.appendChild(region);
  row.appendChild(tier);

  container.appendChild(row);
});
