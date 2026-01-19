const players = [
  {
    name: "Marlowww",
    rank: "Combat Grandmaster",
    points: 435,
    region: "NA",
    skin: "https://mineskin.eu/armor/body/Marlowww/80.png",
    tiers: { Nethpot: "HT1", Axe: "HT2", Vanilla: "HT3", Sword: "HT2", UHC: "LT1", Mace: "HT1" }
  },
  {
    name: "Zerium",
    rank: "Combat Master",
    points: 330,
    region: "EU",
    skin: "https://mineskin.eu/armor/body/Zerium/80.png",
    tiers: { Nethpot: "HT3", Axe: "LT1", Vanilla: "HT2", Sword: "HT3", UHC: "LT2", Mace: "LT3" }
  },
  {
    name: "Renix",
    rank: "Combat Ace",
    points: 290,
    region: "AS",
    skin: "https://mineskin.eu/armor/body/Renix/80.png",
    tiers: { Nethpot: "LT3", Axe: "HT3", Vanilla: "HT4", Sword: "LT2", UHC: "HT1", Mace: "LT1" }
  }
];

const leaderboard = document.querySelector(".leaderboard");

players.forEach((player, i) => {
  // Player card container
  const card = document.createElement("div");
  card.classList.add("player-card", `rank-${i + 1}`);

  // Rank badge
  const badge = document.createElement("div");
  badge.classList.add("rank-badge", `rank-${i + 1}`);
  badge.innerHTML = `<span>${i + 1}</span>`;

  // Player skin
  const skin = document.createElement("img");
  skin.src = player.skin;
  skin.alt = `${player.name}'s skin`;
  skin.classList.add("player-skin");

  // Player info (name + rank)
  const info = document.createElement("div");
  info.classList.add("player-info");
  info.innerHTML = `<h3>${player.name}</h3><p>${player.rank} (${player.points} pts)</p>`;

  // Region tag
  const region = document.createElement("div");
  region.classList.add("region-tag", `region-${player.region}`);
  region.textContent = player.region;

  // Tier container (horizontal)
  const tiersContainer = document.createElement("div");
  tiersContainer.classList.add("tiers-container");

  Object.entries(player.tiers).forEach(([mode, tier]) => {
    const circle = document.createElement("div");
    circle.classList.add("tier-circle", `tier-${tier}`);
    circle.title = `${mode}: ${tier}`;
    circle.textContent = tier;
    tiersContainer.appendChild(circle);
  });

  // Append everything properly
  info.appendChild(region);
  info.appendChild(tiersContainer);

  card.appendChild(badge);
  card.appendChild(skin);
  card.appendChild(info);

  leaderboard.appendChild(card);
});
