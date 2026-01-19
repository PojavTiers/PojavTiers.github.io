// players.js — clean working version for your style.css

const players = [
  {
    name: "Marlowww",
    rank: 1,
    region: "NA",
    skin: "https://mc-heads.net/body/Marlowww/100.png",
    tiers: {
      Nethpot: "HT1",
      Axe: "HT2",
      Vanilla: "HT3",
      Sword: "HT2",
      UHC: "LT1",
      Mace: "HT1"
    }
  },
  {
    name: "Zerium",
    rank: 2,
    region: "EU",
    skin: "https://mc-heads.net/body/Zerium/100.png",
    tiers: {
      Nethpot: "HT3",
      Axe: "LT1",
      Vanilla: "HT2",
      Sword: "HT3",
      UHC: "LT2",
      Mace: "LT3"
    }
  },
  {
    name: "Renix",
    rank: 3,
    region: "AS",
    skin: "https://mc-heads.net/body/Renix/100.png",
    tiers: {
      Nethpot: "LT3",
      Axe: "HT3",
      Vanilla: "HT4",
      Sword: "LT2",
      UHC: "HT1",
      Mace: "LT1"
    }
  }
];

const leaderboard = document.querySelector(".leaderboard");

players.forEach((player) => {
  const card = document.createElement("div");
  card.classList.add("player-card");
  if (player.rank === 1) card.classList.add("rank-top1");
  else if (player.rank === 2) card.classList.add("rank-top2");
  else if (player.rank === 3) card.classList.add("rank-top3");

  const badge = document.createElement("div");
  badge.classList.add("rank-badge", `rank-${player.rank}`);
  badge.innerHTML = `<span>${player.rank}</span>`;

  const skin = document.createElement("img");
  skin.classList.add("player-skin");
  skin.src = player.skin;
  skin.alt = player.name;

  const info = document.createElement("div");
  info.classList.add("player-info");

  const name = document.createElement("h3");
  name.textContent = player.name;

  const region = document.createElement("div");
  region.classList.add("region-tag", `region-${player.region}`);
  region.textContent = player.region;

  const tiersContainer = document.createElement("div");
  tiersContainer.classList.add("tiers");

  Object.entries(player.tiers).forEach(([mode, tier]) => {
    const circle = document.createElement("div");
    circle.classList.add("tier-circle", `tier-${tier}`);
    circle.title = `${mode}: ${tier}`;
    circle.textContent = tier;
    tiersContainer.appendChild(circle);
  });

  info.appendChild(name);
  info.appendChild(region);
  info.appendChild(tiersContainer);

  card.appendChild(badge);
  card.appendChild(skin);
  card.appendChild(info);

  leaderboard.appendChild(card);
});
