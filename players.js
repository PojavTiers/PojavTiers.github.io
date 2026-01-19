const leaderboard = document.getElementById("leaderboard");

const players = [
  {
    name: "Marlowww",
    title: "Combat Grandmaster (435 pts)",
    skin: "https://mc-heads.net/body/Marlowww/left",
    region: "NA",
    tier: "HT1"
  },
  {
    name: "ItzRealMe",
    title: "Combat Master (330 pts)",
    skin: "https://mc-heads.net/body/ItzRealMe/left",
    region: "NA",
    tier: "HT3"
  }
];

players.forEach((p, i) => {
  const row = document.createElement("div");
  row.className = "row";

  row.innerHTML = `
    <div class="rank-bar rank-${i + 1}">
      <span>${i + 1}</span>
    </div>

    <div class="skin-wrap">
      <img class="skin" src="${p.skin}">
    </div>

    <div class="info">
      <div class="name">${p.name}</div>
      <div class="title">${p.title}</div>
    </div>

    <div class="meta">
      <div class="region">${p.region}</div>
      <div class="tier">${p.tier}</div>
    </div>
  `;

  leaderboard.appendChild(row);
});
