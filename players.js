const players = [
    { rank: 1, name: "Marlowww", title: "Combat Grandmaster", points: 435, region: "NA", 
      tiers: { combat: "HT1", vanilla: "HT1", uhc: "LT1", pot: "LT1" } },
    { rank: 2, name: "ItzRealMe", title: "Combat Master", points: 330, region: "NA", 
      tiers: { combat: "HT3", vanilla: "HT1", uhc: "HT1", pot: "HT1" } },
    // Add more players based on your reference image
];

function renderTable(filter = "") {
    const table = document.getElementById('playerTable');
    table.innerHTML = "";

    const filteredPlayers = players.filter(p => 
        p.name.toLowerCase().includes(filter.toLowerCase())
    );

    filteredPlayers.forEach(p => {
        const row = document.createElement('div');
        row.className = 'player-row';
        row.innerHTML = `
            <div class="col-rank">${p.rank}</div>
            <div class="col-player">
                <img src="https://mc-heads.net/avatar/${p.name}/40" class="player-skin">
                <div>
                    <div class="player-name">${p.name}</div>
                    <div class="player-title">${p.title} (${p.points} points)</div>
                </div>
            </div>
            <div class="col-region"><span class="region-tag">${p.region}</span></div>
            <div class="col-tiers">
                ${Object.values(p.tiers).map(t => `<span class="tier-icon ${t}">${t}</span>`).join('')}
            </div>
        `;
        table.appendChild(row);
    });
}

document.getElementById('searchBar').addEventListener('input', (e) => renderTable(e.target.value));
renderTable();
              
