const UI_CONFIG = {
    totalRows: 100,
    renderUrl: "https://crafatar.com/renders/body/",
    renderParams: "?overlay&scale=3",
    categories: [
        { id: "overall", icon: "fa-circle-notch" },
        { id: "ltms", icon: "fa-sword" },
        { id: "vanilla", icon: "fa-gem" },
        { id: "uhc", icon: "fa-heart" },
        { id: "pot", icon: "fa-flask" },
        { id: "nethop", icon: "fa-eye" },
        { id: "smp", icon: "fa-bolt" }
    ],
    players: [
        { rank: 1, name: "Marlowww", region: "NA", points: 435, tiers: ["HT1", "HT1", "LT1", "LT1", "HT1", "LT1", "LT1"] },
        { rank: 2, name: "ItzRealMe", region: "NA", points: 330, tiers: ["LT1", "HT1", "HT1", "HT1", "LT1", "LT1", "LT1"] },
        { rank: 3, name: "Swight", region: "NA", points: 290, tiers: ["HT1", "LT1", "LT1", "LT1", "HT1", "LT1", "LT1"] }
    ]
};

function render() {
    const list = document.getElementById('list');
    const search = document.getElementById('search').value.toLowerCase();
    list.innerHTML = "";

    const data = [...UI_CONFIG.players];
    while(data.length < UI_CONFIG.totalRows) {
        data.push({
            rank: data.length + 1,
            name: "Steve",
            region: "NA",
            points: 0,
            tiers: ["LT1", "LT1", "LT1", "LT1", "LT1", "LT1", "LT1"]
        });
    }

    data.filter(p => p.name.toLowerCase().includes(search)).forEach(p => {
        const row = document.createElement('div');
        row.className = `p-row rank-${p.rank}`;
        
        const tiers = p.tiers.map((t, i) => `
            <div class="t-unit" style="display: flex; flex-direction: column; align-items: center; justify-content: center; gap: 4px; height: 100%;">
                <i class="fas ${UI_CONFIG.categories[i].icon}" style="font-size: 12px; color: #8b949e;"></i>
                <span class="tag ${t}">${t}</span>
            </div>
        `).join('');

        const skin = `${UI_CONFIG.renderUrl}${p.name}${UI_CONFIG.renderParams}`;

        row.innerHTML = `
            <div style="font-weight: 800; color: #555;">${p.rank}.</div>
            <div style="display: flex; align-items: center; gap: 15px;">
                <div style="width: 50px; height: 75px; display: flex; align-items: center; justify-content: center;">
                    <img src="${skin}" style="max-height: 100%; filter: drop-shadow(0 4px 8px rgba(0,0,0,0.5));" 
                         onerror="this.src='https://crafatar.com/renders/body/8667ba71-b85a-4004-af54-457a9734eed7${UI_CONFIG.renderParams}'">
                </div>
                <div style="display: flex; flex-direction: column;">
                    <span style="font-weight: 700; font-size: 15px;">${p.name}</span>
                    <span style="font-size: 11px; color: #8b949e;"><i class="fas fa-shield-halved" style="color: #f1c40f;"></i> Combat Master (${p.points})</span>
                </div>
            </div>
            <div style="font-weight: 800; font-size: 11px; color: #ff8080;">${p.region}</div>
            <div class="tier-container" style="display: flex; gap: 12px; justify-content: flex-end; align-items: center;">
                ${tiers}
            </div>
        `;
        list.appendChild(row);
    });
}

document.addEventListener('DOMContentLoaded', () => {
    render();
    document.getElementById('search').addEventListener('input', render);
});
