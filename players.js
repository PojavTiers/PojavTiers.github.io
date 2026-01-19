// players.js — McTiers-style leaderboard v3

const players = [
  {
    name: "Marlowww",
    rank: "Combat Grandmaster",
    points: 435,
    region: "NA",
    skin: "https://mineskin.eu/armor/body/Marlowww/80.png",
    tiers: {
      Nethpot: "HT1",
      Axe: "LT1",
      Vanilla: "HT2",
      Sword: "LT2",
      UHC: "HT3",
      Mace: "LT3"
    }
  },
  {
    name: "ItzRealMe",
    rank: "Combat Master",
    points: 330,
    region: "NA",
    skin: "https://mineskin.eu/armor/body/ItzRealMe/80.png",
    tiers: {
      Nethpot: "HT3",
      Axe: "LT3",
      Vanilla: "HT2",
      Sword: "LT1",
      UHC: "HT4",
      Mace: "LT2"
    }
  },
  {
    name: "Swight",
    rank: "Combat Master",
    points: 290,
    region: "EU",
    skin: "https://mineskin.eu/armor/body/Swight/80.png",
    tiers: {
      Nethpot: "HT2",
      Axe: "LT1",
      Vanilla: "HT3",
      Sword: "LT2",
      UHC: "HT1",
      Mace: "LT3"
    }
  },
  {
    name: "Player4",
    rank: "Combat Ace",
    points: 250,
    region: "EU",
    skin: "https://mineskin.eu/armor/body/Player4/80.png",
    tiers: {
      Nethpot: "HT4",
      Axe: "LT4",
      Vanilla: "HT3",
      Sword: "LT2",
      UHC: "HT5",
      Mace: "LT5"
    }
  },
  {
    name: "Player5",
    rank: "Combat Ace",
    points: 230,
    region: "AS",
    skin: "https://mineskin.eu/armor/body/Player5/80.png",
    tiers: {
      Nethpot: "HT5",
      Axe: "LT5",
      Vanilla: "HT4",
      Sword: "LT3",
      UHC: "HT2",
      Mace: "LT1"
    }
  }
];

const tierColors = {
  HT1: "#ff4d4d",
  LT1: "#ff9933",
  HT2: "#ffcc00",
  LT2: "#99cc33",
  HT3: "#33cc66",
  LT3: "#00cc99",
  HT4: "#3399ff",
  LT4: "#9966ff",
  HT5: "#cc66ff",
  LT5: "#66ff66"
};

const leaderboard = document.querySelector(".leaderboard");

players.forEach((player, i) => {
  const row = document.createElement("div");
  row.className = "player-row";

  const rankCard = document.createElement("div");
  rankCard.className = `rank-card rank-${i + 1}`;
  rankCard.innerHTML = `<span>${i + 1}.</span>`;

  const skin = document.createElement("img");
  skin.src = player.skin;
  skin.alt = `${player.name}'s skin`;
  skin.className = "player-skin";

  const info = document.createElement("div");
  info.className = "player-info";
  info.innerHTML = `
    <h3>${player.name}</h3>
    <p>${player.rank} (${player.points} pts)</p>
  `;

  const region = document.createElement("div");
  region.className = "region-tag";
  region.textContent = player.region;

  const tierContainer = document.createElement("div");
  tierContainer.className = "tier-container";

  Object.keys(player.tiers).forEach(mode => {
    const tier = player.tiers[mode];
    const color = tierColors[tier] || "#666";
    const circle = document.createElement("div");
    circle.className = "tier-circle";
    circle.style.borderColor = color;
    circle.style.backgroundColor = color + "22"; // translucent fill
    circle.textContent = tier;
    tierContainer.appendChild(circle);
  });

  row.append(rankCard, skin, info, region, tierContainer);
  leaderboard.appendChild(row);
});
