document.addEventListener("DOMContentLoaded", () => {
  const container = document.getElementById("leaderboard");

  if (!container) return;

  const players = [
    { name: "Marlowww", rank: "Combat Grandmaster", pts: 435, region: "NA", tier: "HT1" },
    { name: "ItzRealMe", rank: "Combat Master", pts: 330, region: "EU", tier: "HT3" },
    { name: "Swight", rank: "Combat Master", pts: 290, region: "AS", tier: "HT2" },
    { name: "ShadowClaw", rank: "Elite Warrior", pts: 260, region: "OC", tier: "LT1" },
    { name: "Kirox", rank: "Veteran", pts: 240, region: "EU", tier: "LT3" },
  ];

  // Sort players by points (desc)
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
        <img class="skin" src="https://mc-heads.net/body/${p.name}/right" alt="${p.name}" onerror="this.src='https://mc-heads.net/body/Steve/right';">
      </div>
      <div class="info">
        <div class="name">${p.name}</div>
        <div class="sub">${p.rank}${p.pts ? ` (${p.pts} pts)` : ""}</div>
      </div>
      <div class="region ${regionClass}">${p.region}</div>
      <div class="tier ${tierClass}">${p.tier}</div>
    `;

    container.appendChild(row);
  });
});
