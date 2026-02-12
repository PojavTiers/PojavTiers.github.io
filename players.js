const playerData = [
    { name: "PlayerOne", tier: "S", rank: "Top 1", region: "NA" },
    { name: "PojavPro", tier: "A", rank: "Top 10", region: "EU" },
    { name: "Steve", tier: "B", rank: "High", region: "AS" },
    // Add more players here
];

const tiers = ["S", "A", "B", "C", "D"];

function renderTiers(filter = "") {
    const container = document.getElementById('tierContainer');
    container.innerHTML = ""; // Clear current list

    tiers.forEach(tier => {
        const tierSection = document.createElement('div');
        tierSection.className = `tier-row tier-${tier}`;
        
        // Filter players by tier and search query
        const filteredPlayers = playerData.filter(p => 
            p.tier === tier && p.name.toLowerCase().includes(filter.toLowerCase())
        );

        if (filteredPlayers.length > 0) {
            tierSection.innerHTML = `
                <div class="tier-label">${tier}</div>
                <div class="player-list">
                    ${filteredPlayers.map(p => `
                        <div class="player-card">
                            <img src="https://mc-heads.net/avatar/${p.name}/50" alt="${p.name}">
                            <div class="player-info">
                                <span class="name">${p.name}</span>
                                <span class="rank">${p.rank}</span>
                            </div>
                        </div>
                    `).join('')}
                </div>
            `;
            container.appendChild(tierSection);
        }
    });
}

// Search functionality
document.getElementById('searchBar').addEventListener('input', (e) => {
    renderTiers(e.target.value);
});

// Initial load
renderTiers();
