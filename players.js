/**
 * POJAV TIERS - ADVANCED DATA MANAGER
 */

// 1. EDIT PLAYER NAMES HERE
const playerNameList = [
    "Marlowww", "ItzRealMe", "Swight"
];

// 2. GENERATOR
function generateFullData() {
    let dataset = [];
    const icons = ["fa-sword", "fa-heart", "fa-flask", "fa-gem", "fa-eye", "fa-bolt", "fa-circle-notch"];
    const regions = ["NA", "EU", "AS"];

    for (let i = 1; i <= 100; i++) {
        let name = playerNameList[i - 1] ? playerNameList[i - 1] : "None";
        let region = regions[Math.floor(Math.random() * regions.length)];
        let points = 500 - (i * 3);

        let tiers = icons.map(icon => ({
            icon: icon,
            rank: Math.random() > 0.5 ? "HT1" : "LT1"
        }));

        dataset.push({
            rank: i,
            name: name,
            title: "Combat Master",
            points: points > 0 ? points : 0,
            region: region,
            tiers: tiers
        });
    }
    return dataset;
}

const allPlayers = generateFullData();

// 3. RENDER ENGINE
function renderSite(data, filter = "") {
    const container = document.getElementById('playerRows');
    container.innerHTML = "";

    const filtered = data.filter(p => 
        p.name.toLowerCase().includes(filter.toLowerCase())
    );

    filtered.forEach(p => {
        const row = document.createElement('div');
        row.className = `player-row rank-${p.rank}`;
        
        const tiersHTML = p.tiers.map(t => `
            <div class="tier-item">
                <i class="fas ${t.icon}"></i>
                <span class="tag ${t.rank}">${t.rank}</span>
            </div>
        `).join('');

        row.innerHTML = `
            <div class="col-rank">${p.rank}</div>
            <div class="player-cell">
                <img src="https://mc-heads.net/avatar/${p.name}/100" class="p-avatar" onerror="this.src='https://mc-heads.net/avatar/Steve/100'">
                <div class="player-info">
                    <div class="p-name">${p.name}</div>
                    <div class="p-subtitle"><i class="fas fa-shield-halved"></i> ${p.title} (${p.points} points)</div>
                </div>
            </div>
            <div><span class="region-box region-${p.region}">${p.region}</span></div>
            <div class="tiers-cell">${tiersHTML}</div>
        `;
        container.appendChild(row);
    });
}

// 4. INITIALIZE
document.addEventListener('DOMContentLoaded', () => {
    renderSite(allPlayers);
    
    // Search Functionality
    document.getElementById('playerSearch').addEventListener('input', (e) => {
        renderSite(allPlayers, e.target.value);
    });
});
