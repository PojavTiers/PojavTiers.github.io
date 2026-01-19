const players = [
  {
    name: "Marlowww",
    rank: "Combat Grandmaster",
    points: 435,
    region: "NA",
    skin: "skins/marlowww.png",
    tiers: { Nethpot: "HT1", Axe: "HT2", Vanilla: "HT3", Sword: "HT2", UHC: "LT1", Mace: "HT1" }
  },
  {
    name: "Zerium",
    rank: "Combat Master",
    points: 330,
    region: "EU",
    skin: "skins/zerium.png",
    tiers: { Nethpot: "HT3", Axe: "LT1", Vanilla: "HT2", Sword: "HT3", UHC: "LT2", Mace: "LT3" }
  },
  {
    name: "Renix",
    rank: "Combat Ace",
    points: 290,
    region: "AS",
    skin: "skins/renix.png",
    tiers: { Nethpot: "LT3", Axe: "HT3", Vanilla: "HT4", Sword: "LT2", UHC: "HT1", Mace: "LT1" }
  }
];

const leaderboard = document.querySelector(".leaderboard");

players.forEach((player, i) => {
  const card = document.createElement("div");
  card.classList.add("player-card", `rank-${i + 1}`);

  const badge = document.createElement("div");
  badge.classList.add("rank-badge");
  badge.innerHTML = `<span>${i + 1}</span>`;

  const skin = document.createElement("img");
  skin.src = player.skin;
  skin.alt = `${player.name}'s skin`;
  skin.classList.add("player-skin");

  const info = document.createElement("div");
  info.classList.add("player-info");
  info.innerHTML = `<h3>${player.name}</h3><p>${player.rank} (${player.points} pts)</p>`;

  const region = document.createElement("div");
  region.classList.add("region-tag", `region-${player.region}`);
  region.textContent = player.region;

  // Tiers in a row, right beside the name
  const tiersRow = document.createElement("div");
  tiersRow.classList.add("tiers-row");

  Object.entries(player.tiers).forEach(([mode, tier]) => {
    const circle = document.createElement("div");
    circle.classList.add("tier-circle", `tier-${tier}`);
    circle.textContent = tier;
    circle.title = `${mode}: ${tier}`;
    tiersRow.appendChild(circle);
  });

  info.appendChild(region);
  info.appendChild(tiersRow);

  card.appendChild(badge);
  card.appendChild(skin);
  card.appendChild(info);

  leaderboard.appendChild(card);
});
