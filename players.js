const playerData = [
    {
        rank: 1,
        name: "Marlowww",
        title: "Combat Grandmaster",
        points: 435,
        region: "NA",
        tiers: [
            { icon: "fa-circle-notch", rank: "HT1" },
            { icon: "fa-sword", rank: "HT1" },
            { icon: "fa-gem", rank: "LT1" },
            { icon: "fa-heart", rank: "LT1" },
            { icon: "fa-flask", rank: "HT1" },
            { icon: "fa-eye", rank: "LT1" },
            { icon: "fa-bolt", rank: "LT1" }
        ]
    },
    {
        rank: 2,
        name: "ItzRealMe",
        title: "Combat Master",
        points: 330,
        region: "NA",
        tiers: [
            { icon: "fa-sword", rank: "HT3" },
            { icon: "fa-gem", rank: "HT1" },
            { icon: "fa-heart", rank: "HT1" },
            { icon: "fa-flask", rank: "HT1" },
            { icon: "fa-circle-notch", rank: "LT2" },
            { icon: "fa-bolt", rank: "LT2" }
        ]
    },
    {
        rank: 3,
        name: "Swight",
        title: "Combat Master",
        points: 290,
        region: "NA",
        tiers: [
            { icon: "fa-sword", rank: "HT1" },
            { icon: "fa-heart", rank: "HT1" },
            { icon: "fa-flask", rank: "HT2" },
            { icon: "fa-gem", rank: "LT2" }
        ]
    },
    {
        rank: 4,
        name: "coldifled",
        title: "Combat Master",
        points: 281,
        region: "EU",
        tiers: [
            { icon: "fa-sword", rank: "LT1" },
            { icon: "fa-gem", rank: "LT1" },
            { icon: "fa-heart", rank: "HT2" }
        ]
    }
];

function loadRankings(searchQuery = "") {
    const container = document.getElementById('playerRows');
    container.innerHTML = "";

    const filtered = playerData.filter(p => 
        p.name.toLowerCase().includes(searchQuery.toLowerCase())
    );

    filtered.forEach(p => {
        const row = document.createElement('div');
        row.className = 'player-row';
        
        // Tier badges HTML
        const tierHTML = p.tiers.map(t => `
            <div class="tier-item">
                <i class="fas ${t.icon}"></i>
                <span class="tag ${t.rank}">${t.rank}</span>
            </div>
        `).join('');

        row.innerHTML = `
            <div class="rank-num rank-${p.rank}">${p.rank}.</div>
            <div class="player-cell">
                <img src="https://mc-heads.net/avatar/${p.name}/100" class="p-avatar">
                <div>
                    <div class="p-name">${p.name}</div>
                    <div class="p-subtitle">
                        <i class="fas fa-shield-halved" style="color:var(--accent); font-size:10px;"></i>
                        ${p.title} (${p.points} points)
                    </div>
                </div>
            </div>
            <div class="region-cell">
                <span class="region-box region-${p.region}">${p.region}</span>
            </div>
            <div class="tiers-cell">
                ${tierHTML}
            </div>
        `;
        container.appendChild(row);
    });
}

// Event Listeners
document.getElementById('playerSearch').addEventListener('input', (e) => {
    loadRankings(e.target.value);
});

// Initial Load
window.onload = () => loadRankings();
