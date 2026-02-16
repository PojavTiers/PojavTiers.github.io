/**
 * =================================================================
 * POJAV TIERS - ADVANCED DATA MANAGER (v3.0)
 * =================================================================
 * This file contains hard-coded player data to ensure consistency.
 * It also handles searching, filtering, and HTML rendering.
 */

// --- 1. CONFIGURATION ---
const TOTAL_PLAYERS = 100;

// --- 2. THE MASTER DATABASE (Hard-coded for Stability) ---
// Add real player names and data here to make them appear in the list.
const playersDatabase = [
    { rank: 1, name: "Marlowww", title: "Combat Grandmaster", points: 435, region: "NA", tiers: ["HT1", "HT1", "LT1", "LT1", "HT1", "LT1", "LT1"] },
    { rank: 2, name: "ItzRealMe", title: "Combat Master", points: 330, region: "NA", tiers: ["HT3", "HT1", "HT1", "HT1", "LT2", "LT2", "LT2"] },
    { rank: 3, name: "Swight", title: "Combat Master", points: 290, region: "NA", tiers: ["HT1", "HT2", "LT2", "LT2", "HT3", "HT1", "LT2"] },
    { rank: 4, name: "coldifled", title: "Combat Master", points: 281, region: "EU", tiers: ["LT1", "LT1", "HT2", "LT1", "LT1", "HT3", "HT1"] },
    { rank: 5, name: "Janekv", title: "Combat Ace", points: 230, region: "EU", tiers: ["LT2", "LT2", "HT3", "LT3", "LT3", "HT4", "HT1"] },
    { rank: 6, name: "BlvckWlf", title: "Combat Ace", points: 226, region: "EU", tiers: ["LT2", "HT3", "LT3", "LT3", "HT1", "HT1", "LT2"] },
    { rank: 7, name: "Kylaz", title: "Combat Ace", points: 226, region: "NA", tiers: ["HT1", "HT1", "LT1", "LT1", "HT1", "LT1", "LT1"] },
    { rank: 8, name: "ninorc15", title: "Combat Ace", points: 191, region: "EU", tiers: ["HT2", "LT2", "LT2", "LT2", "HT2", "LT3", "LT2"] },
    { rank: 9, name: "Lurrn", title: "Combat Ace", points: 186, region: "EU", tiers: ["LT3", "LT4", "HT1", "HT1", "HT2", "LT2", "LT2"] },
    { rank: 10, name: "yMiau", title: "Combat Ace", points: 177, region: "EU", tiers: ["LT1", "LT1", "HT2", "LT1", "LT1", "HT3", "HT1"] },
    { rank: 10, name: "Arsakha", title: "Combat Ace", points: 177, region: "AS", tiers: ["HT2", "LT2", "LT2", "HT3", "HT3", "LT3", "HT1"] },
    { rank: 12, name: "Juan_Clean", title: "Combat Ace", points: 165, region: "NA", tiers: ["HT3", "LT3", "LT3", "LT3", "HT1", "LT1", "LT1"] },
    { rank: 12, name: "Deivi_17", title: "Combat Ace", points: 165, region: "EU", tiers: ["LT3", "LT4", "HT4", "LT4", "HT1", "LT1", "LT2"] },
    { rank: 14, name: "Spawnplayer", title: "Combat Ace", points: 152, region: "NA", tiers: ["HT3", "LT3", "LT3", "LT3", "HT3", "LT2", "LT2"] },
    { rank: 15, name: "Frxnkey", title: "Combat Ace", points: 143, region: "NA", tiers: ["LT3", "LT3", "HT4", "LT3", "HT1", "HT2", "HT2"] },
    { rank: 16, name: "Hosthan", title: "Combat Ace", points: 142, region: "EU", tiers: ["LT3", "LT3", "LT2", "LT2", "HT2", "LT2", "LT2"] },
];

// --- 3. CATEGORY ICONS (Mapped to CSS) ---
const categoryIcons = [
    "fa-circle-notch", // Overall
    "fa-sword",        // LTMs
    "fa-gem",          // Vanilla
    "fa-heart",        // UHC
    "fa-flask",        // Pot
    "fa-eye",          // NethOP
    "fa-bolt"          // SMP
];

// --- 4. DATA GENERATOR (Fill remaining 100 slots) ---
function generateFullDataset() {
    let dataset = [...playersDatabase];

    // If database has more than 100, truncate it
    if (dataset.length > TOTAL_PLAYERS) {
        return dataset.slice(0, TOTAL_PLAYERS);
    }

    // Fill remaining slots with "None"
    for (let i = dataset.length + 1; i <= TOTAL_PLAYERS; i++) {
        dataset.push({
            rank: i,
            name: "None",
            title: "Combatant",
            points: Math.max(0, 100 - (i * 1)),
            region: i % 3 === 0 ? "EU" : "NA",
            tiers: ["LT2", "LT3", "LT2", "LT2", "HT2", "LT2", "LT2"]
        });
    }
    return dataset;
}

const finalDataset = generateFullDataset();

// --- 5. RENDER ENGINE ---
const Renderer = {
    // Generate tier icons and badges
    renderTiers: function(tierArray) {
        return tierArray.map((tier, index) => {
            const icon = categoryIcons[index] || "fa-circle";
            return `
                <div class="tier-group">
                    <i class="fas ${icon}"></i>
                    <span class="badge ${tier}">${tier}</span>
                </div>
            `;
        }).join('');
    },

    // Create the full row HTML
    createRow: function(player) {
        const rankClass = `rank-${player.rank}`;
        const regionClass = `region-${player.region}`;
        
        return `
            <div class="player-row ${rankClass}">
                <div class="rank-box">${player.rank}.</div>
                
                <div class="player-box">
                    <img src="https://mc-heads.net/avatar/${player.name}/100" 
                         class="player-head" 
                         onerror="this.src='https://mc-heads.net/avatar/Steve/100'">
                    <div class="player-details">
                        <span class="p-name">${player.name}</span>
                        <span class="p-stats">
                            <i class="fas fa-shield-halved"></i> 
                            ${player.title} (${player.points} points)
                        </span>
                    </div>
                </div>
                
                <div class="col-region">
                    <span class="region-tag ${regionClass}">${player.region}</span>
                </div>
                
                <div class="tiers-box">
                    ${this.renderTiers(player.tiers)}
                </div>
            </div>
        `;
    }
};

// --- 6. FILTER & SEARCH LOGIC ---
function renderTable(searchTerm = "") {
    const container = document.getElementById('playerRows');
    if (!container) return;

    // Filter data based on search input
    const filteredData = finalDataset.filter(player => 
        player.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    // Generate HTML for all rows
    container.innerHTML = filteredData.map(player => Renderer.createRow(player)).join('');
}

// --- 7. INITIALIZATION ---
document.addEventListener('DOMContentLoaded', () => {
    // Initial Render
    renderTable();

    // Attach Search Event Listener
    const searchInput = document.getElementById('playerSearch');
    if (searchInput) {
        searchInput.addEventListener('input', (e) => {
            renderTable(e.target.value);
        });
    }
});

/**
 * --- DEBUGGING & UTILS ---
 * Open console (F12) and type "Pojav.getData()" to see the full list
 */
window.Pojav = {
    getData: () => console.log(finalDataset),
    refresh: () => renderTable()
};
    
