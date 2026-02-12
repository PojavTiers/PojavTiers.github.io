/**
 * POJAV TIERS - MASTER DATA
 * To change player names, simply edit the 'manualNames' array below.
 * The system will automatically handle the rest.
 */

// 1. EDIT THESE NAMES LATER
const manualNames = [
    "Marlowww", 
    "ItzRealMe", 
    "Swight",
    "coldifled",
    // Add as many names as you want here...
];

// 2. CONFIGURATION
const TOTAL_PLAYERS = 100;
const titles = ["Combat Grandmaster", "Combat Master", "Combat Ace", "Combat Elite"];
const regions = ["NA", "EU", "AS", "SA", "OC"];
const tierTones = ["HT1", "LT1", "HT2", "LT2", "HT3", "LT3"];
const categoryIcons = ["fa-circle-notch", "fa-sword", "fa-gem", "fa-heart", "fa-flask", "fa-eye", "fa-bolt"];

// 3. GENERATOR LOGIC
function generatePlayerData() {
    let players = [];

    for (let i = 1; i <= TOTAL_PLAYERS; i++) {
        // Use manual name if available, otherwise set to "None"
        let playerName = manualNames[i - 1] ? manualNames[i - 1] : "None";
        
        // Logic to determine points and title based on rank
        let points = 450 - (i * 3); 
        let title = i <= 5 ? titles[0] : (i <= 15 ? titles[1] : titles[2]);

        // Generate the 7 standard tier icons seen in the reference photo
        let tierList = categoryIcons.map(icon => ({
            icon: icon,
            rank: tierTones[Math.floor(Math.random() * tierTones.length)]
        }));

        players.push({
            rank: i,
            name: playerName,
            title: title,
            points: points > 0 ? points : 0,
            region: regions[Math.floor(Math.random() * regions.length)],
            tiers: tierList
        });
    }
    return players;
}

const allPlayers = generatePlayerData();

// 4. RENDERING ENGINE
function renderMCTiers(filter = "") {
    const listContainer = document.getElementById('playerRows');
    if (!listContainer) return;

    listContainer.innerHTML = "";

    const filtered = allPlayers.filter(p => 
        p.name.toLowerCase().includes(filter.toLowerCase())
    );

    filtered.forEach(p => {
        const row = document.createElement('div');
        row.className = 'player-row';
        
        // Create the Tiers HTML block
        const tiersHTML = p.tiers.map(t => `
            <div class="tier-item">
                <i class="fas ${t.icon}"></i>
                <span class="tag ${t.rank}">${t.rank}</span>
            </div>
        `).join('');

        row.innerHTML = `
            <div class="rank-num rank-${p.rank}">${p.rank}.</div>
            <div class="player-cell">
                <img src="https://mc-heads.net/avatar/${p.name}/100" class="p-avatar" onerror="this.src='https://mc-heads.net/avatar/Steve/100'">
                <div class="player-meta">
                    <span class="p-name">${p.name}</span>
                    <span class="p-subtitle">
                        <i class="fas fa-shield-halved"></i> ${p.title} (${p.points} points)
                    </span>
                </div>
            </div>
            <div class="region-cell">
                <span class="region-box region-${p.region}">${p.region}</span>
            </div>
            <div class="tiers-cell">
                ${tiersHTML}
            </div>
        `;
        listContainer.appendChild(row);
    });
}

// 5. INITIALIZE
document.addEventListener('DOMContentLoaded', () => {
    renderMCTiers();
    
    const search = document.getElementById('playerSearch');
    if (search) {
        search.addEventListener('input', (e) => renderMCTiers(e.target.value));
    }
});
