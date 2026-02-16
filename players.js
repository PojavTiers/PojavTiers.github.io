const CONFIG = {
    totalRows: 100,
    // Using Minotar for maximum stability and no-flicker loading
    renderUrl: "https://minotar.net/armor/body/",
    fallbackSkin: "https://minotar.net/armor/body/MHF_Steve/100.png",
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

    const data = [...CONFIG.players];
    while(data.length < CONFIG.totalRows) {
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
        
        // Vertical centering logic for tiers
        const tierHTML = p.tiers.map((t, i) => `
            <div class="t-unit" style="display: flex; flex-direction: column; align-items: center; justify-content: flex-end; height: 45px; width: 40px;">
                <i class="fas ${CONFIG.categories[i].icon}" style="font-size: 11px; color: #8b949e; margin-bottom: 5px;"></i>
                <span class="tag ${t}">${t}</span>
            </div>
        `).join('');

        const skinSrc = `${CONFIG.renderUrl}${p.name}/100.png`;

        row.innerHTML = `
            <div style="font-weight: 900; color: #333; font-style: italic;">${p.rank}.</div>
            <div style="display: flex; align-items: center; gap: 20px;">
                <div style="width: 50px; height: 80px; display: flex; align-items: center; justify-content: center; overflow: hidden;">
                    <img src="${skinSrc}" 
                         style="height: 100%; width: auto; object-fit: contain;" 
                         onerror="this.onerror=null; this.src='${CONFIG.fallbackSkin}';">
                </div>
                <div style="display: flex; flex-direction: column; justify-content: center;">
                    <span style="font-weight: 700; font-size: 16px; letter-spacing: -0.3px;">${p.name}</span>
                    <span style="font-size: 12px; color: #8b949e; margin-top: 2px;">
                        <i class="fas fa-shield-halved" style="color: #f1c40f; font-size: 10px;"></i> Master (${p.points})
                    </span>
                </div>
            </div>
            <div style="font-weight: 800; font-size: 11px; color: #ff8080;">${p.region}</div>
            <div class="tier-container" style="display: flex; gap: 10px; justify-content: flex-end; align-items: center; height: 100%;">
                ${tierHTML}
            </div>
        `;
        list.appendChild(row);
    });
}

document.addEventListener('DOMContentLoaded', () => {
    render();
    document.getElementById('search').addEventListener('input', render);
});
