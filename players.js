/**
 * =================================================================
 * POJAV TIERS - CORE DATA ENGINE (REPLICA v2.0)
 * =================================================================
 * This file manages the player database, tier assignments, and 
 * the rendering logic for the PojavTiers ranking system.
 */

// --- CONFIGURATION & CONSTANTS ---
const TOTAL_ROWS = 100;
const DEFAULT_TITLE = "Combat Master";
const DEFAULT_POINTS = 100;

// --- ICON DEFINITIONS (Matching MCTiers Categories) ---
const CATEGORIES = [
    { id: 'overall', icon: 'fa-circle-notch', label: 'Overall' },
    { id: 'ltm', icon: 'fa-sword', label: 'LTMs' },
    { id: 'vanilla', icon: 'fa-gem', label: 'Vanilla' },
    { id: 'uhc', icon: 'fa-heart', label: 'UHC' },
    { id: 'pot', icon: 'fa-flask', label: 'Pot' },
    { id: 'nethop', icon: 'fa-eye', label: 'NethOP' },
    { id: 'smp', icon: 'fa-bolt', label: 'SMP' }
];

/**
 * MASTER PLAYER DATABASE
 * Add real player names here. 
 * Tiers are assigned specifically to keep them consistent on refresh.
 */
const playersDB = [
    {
        rank: 1,
        name: "Marlowww",
        title: "Combat Grandmaster",
        points: 435,
        region: "NA",
        tiers: ["HT1", "HT1", "LT1", "LT1", "HT1", "LT1", "LT1"]
    },
    {
        rank: 2,
        name: "ItzRealMe",
        title: "Combat Master",
        points: 330,
        region: "NA",
        tiers: ["HT3", "HT1", "HT1", "HT1", "LT2", "LT2", "LT2"]
    },
    {
        rank: 3,
        name: "Swight",
        title: "Combat Master",
        points: 290,
        region: "NA",
        tiers: ["HT1", "HT2", "LT2", "LT3", "HT3", "HT1", "LT2"]
    },
    {
        rank: 4,
        name: "coldifled",
        title: "Combat Master",
        points: 281,
        region: "EU",
        tiers: ["LT1", "LT1", "HT2", "LT1", "LT1", "HT3", "HT1"]
    },
    {
        rank: 5,
        name: "Janekv",
        title: "Combat Ace",
        points: 230,
        region: "EU",
        tiers: ["LT2", "LT2", "HT3", "LT3", "LT3", "HT4", "HT1"]
    },
    {
        rank: 6,
        name: "BlvckWlf",
        title: "Combat Ace",
        points: 226,
        region: "EU",
        tiers: ["LT2", "HT3", "LT3", "LT3", "HT1", "HT1", "LT2"]
    },
    {
        rank: 7,
        name: "Kylaz",
        title: "Combat Ace",
        points: 226,
        region: "NA",
        tiers: ["HT1", "HT1", "LT1", "LT1", "HT1", "LT1", "LT1"]
    },
    {
        rank: 8,
        name: "ninorc15",
        title: "Combat Ace",
        points: 191,
        region: "EU",
        tiers: ["HT2", "LT2", "LT2", "LT2", "HT2", "LT3", "LT2"]
    },
    {
        rank: 9,
        name: "Lurrn",
        title: "Combat Ace",
        points: 186,
        region: "EU",
        tiers: ["LT3", "LT4", "HT1", "HT1", "HT2", "LT2", "LT2"]
    },
    {
        rank: 10,
        name: "yMiau",
        title: "Combat Ace",
        points: 177,
        region: "EU",
        tiers: ["LT1", "LT1", "HT2", "LT1", "LT1", "HT3", "HT1"]
    }
];

/**
 * GENERATOR FOR REMAINING SLOTS
 * Ensures the table stays full (100 rows) without changing data on refresh.
 * Uses a seed-based approach so the "None" players stay consistent.
 */
function initializeDatabase() {
    const fullDatabase = [...playersDB];
    
    for (let i = fullDatabase.length + 1; i <= TOTAL_ROWS; i++) {
        // Deterministic "None" players so they don't change every refresh
        const pseudoRandomRegion = i % 3 === 0 ? "EU" : (i % 2 === 0 ? "NA" : "AS");
        const pseudoPoints = 180 - i;
        
        fullDatabase.push({
            rank: i,
            name: "None",
            title: i < 20 ? "Combat Ace" : "Combatant",
            points: pseudoPoints > 0 ? pseudoPoints : 0,
            region: pseudoRandomRegion,
            tiers: ["LT3", "LT4", "LT2", "LT1", "HT3", "HT2", "LT1"]
        });
    }
    return fullDatabase;
}

const GLOBAL_DATA = initializeDatabase();

/**
 * RENDERING COMPONENT
 * Handles the creation of the HTML strings for the table.
 */
const Renderer = {
    /**
     * Creates the small tier icon boxes (e.g., HT1, LT2)
     */
    generateTierTags: function(tierArray) {
        return tierArray.map((tierValue, index) => {
            const iconClass = CATEGORIES[index].icon;
            return `
                <div class="tier-item">
                    <i class="fas ${iconClass}"></i>
                    <span class="tag ${tierValue}">${tierValue}</span>
                </div>
            `;
        }).join('');
    },

    /**
     * Build a single player row
     */
    createRowHTML: function(player) {
        // Special class for Top 3
        const rankClass = player.rank <= 3 ? `rank-special rank-${player.rank}` : '';
        const regionClass = `region-${player.region}`;
        
        return `
            <div class="player-row ${rankClass}">
                <div class="col-rank">${player.rank}.</div>
                
                <div class="col-player">
                    <div class="avatar-wrapper">
                        <img src="https://mc-heads.net/avatar/${player.name}/100" 
                             class="p-avatar" 
                             onerror="this.src='https://mc-heads.net/avatar/Steve/100'">
                    </div>
                    <div class="player-info">
                        <span class="p-name">${player.name}</span>
                        <span class="p-subtitle">
                            <i class="fas fa-shield-halved"></i> 
                            ${player.title} (${player.points} points)
                        </span>
                    </div>
                </div>

                <div class="col-region">
                    <span class="region-box ${regionClass}">${player.region}</span>
                </div>

                <div class="col-tiers">
                    ${this.generateTierTags(player.tiers)}
                </div>
            </div>
        `;
    }
};

/**
 * SEARCH & FILTER LOGIC
 */
function updateDisplay(searchTerm = "") {
    const container = document.getElementById('playerRows');
    if (!container) return;

    const filtered = GLOBAL_DATA.filter(player => 
        player.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    // Using a DocumentFragment for better performance
    const fragment = document.createDocumentFragment();
    const tempDiv = document.createElement('div');
    
    tempDiv.innerHTML = filtered.map(p => Renderer.createRowHTML(p)).join('');
    
    while (tempDiv.firstChild) {
        fragment.appendChild(tempDiv.firstChild);
    }

    container.innerHTML = "";
    container.appendChild(fragment);
}

/**
 * INITIALIZATION
 */
document.addEventListener('DOMContentLoaded', () => {
    // Initial Load
    updateDisplay();

    // Event Listeners for Search
    const searchInput = document.getElementById('playerSearch');
    if (searchInput) {
        searchInput.addEventListener('input', (e) => {
            updateDisplay(e.target.value);
        });
    }

    // Category Button Logic
    const catButtons = document.querySelectorAll('.cat-btn');
    catButtons.forEach(btn => {
        btn.addEventListener('click', function() {
            catButtons.forEach(b => b.classList.remove('active'));
            this.classList.add('active');
            // Logic for category switching can be expanded here
        });
    });
});

/**
 * UTILITY FUNCTIONS
 * Exported to window so they can be accessed via console if needed for debugging.
 */
window.PojavTiers = {
    refresh: () => updateDisplay(),
    getCount: () => GLOBAL_DATA.length,
    addManualPlayer: (name) => {
        console.log("To add a player, edit the playersDB array in players.js");
    }
};

// End of players.js
        
