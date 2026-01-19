document.addEventListener("DOMContentLoaded", () => {
  const container = document.getElementById("leaderboard");

  const players = [
    { name: "Marlowww", rank: "Combat Grandmaster", pts: 435, region: "NA", tier: "HT1" },
    { name: "ItzRealMe", rank: "Combat Master", pts: 330, region: "NA", tier: "HT3" },
    { name: "Swight", rank: "Combat Master", pts: 290, region: "NA", tier: "HT2" },
    { name: "Player4", rank: "Combat Ace", pts: 250, region: "EU", tier: "LT2" },
    { name: "Player5", rank: "Combat Ace", pts: 230, region: "AS", tier: "LT3" },
  ];

  // Sort players by points
  players.sort((a, b) => (b.pts || 0) - (a.pts || 0));

  players.forEach((p, i) => {
    const row = document.createElement("div");
    row.className = "row";

    let posClass = "pos-normal";
    if (i === 0) posClass = "pos-1";
    else if (i === 1) posClass = "pos-2";
    else if (i === 2) posClass = "pos-3";

    const regionClass = `region-${p.region}`;
    const tierClass = `tier-${p.tier}`;

    row.innerHTML = `
      <div class="pos ${posClass}">${i + 1}</div>
      <div class="skin-wrap">
        <img class="skin" src="https://mc-heads.net/body/${p.name}/right" alt="${p.name}"
          onerror="this.src='https://mc-heads.net/body/Steve/right';">
      </div>
      <div class="info">
        <div class="name">${p.name}</div>
        <div class="sub">${p.rank} (${p.pts} pts)</div>
      </div>
      <div class="icons">
        <div class="icon sword">🗡️</div>
        <div class="icon potion">⚗️</div>
        <div class="icon heart">❤️</div>
        <div class="icon ender">💫</div>
        <div class="icon hammer">⚒️</div>
      </div>
      <div class="region ${regionClass}">${p.region}</div>
      <div class="tier ${tierClass}">${p.tier}</div>
      <link rel="stylesheet" href="style.css?v=5">
    `;

    container.appendChild(row);
  });
});
