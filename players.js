function render() {
    const container = document.getElementById('list');
    const query = document.getElementById('search').value.toLowerCase();
    container.innerHTML = "";

    const data = [...UI_CONFIG.players];
    while(data.length < UI_CONFIG.totalRows) {
        data.push({
            rank: data.length + 1,
            name: "None",
            region: "NA",
            points: 0,
            tiers: ["LT1", "LT1", "LT1", "LT1", "LT1", "LT1", "LT1"]
        });
    }

    data.filter(p => p.name.toLowerCase().includes(query)).forEach(p => {
        const row = document.createElement('div');
        row.className = `p-row rank-${p.rank}`;
        
        const tiers = p.tiers.map((t, i) => `
            <div class="t-unit">
                <i class="fas ${UI_CONFIG.categories[i].icon}"></i>
                <span class="tag ${t}">${t}</span>
            </div>
        `).join('');

        const skin = `${UI_CONFIG.renderUrl}${p.name}${UI_CONFIG.renderParams}`;

        row.innerHTML = `
            <div style="font-weight: 800; color: var(--text-dim);">${p.rank}.</div>
            <div style="display: flex; align-items: center; gap: 20px;">
                <div class="skin-box">
                    <img src="${skin}" class="skin-3d" onerror="this.src='https://render.crafthead.net/renders/body/Steve${UI_CONFIG.renderParams}'">
                </div>
                <div>
                    <div style="font-weight: 700;">${p.name}</div>
                    <div style="font-size: 12px; color: var(--text-dim);">${p.points} points</div>
                </div>
            </div>
            <div style="font-weight: 700; color: #ff5555;">${p.region}</div>
            <div class="tier-container">${tiers}</div>
        `;
        container.appendChild(row);
    });
}

document.addEventListener('DOMContentLoaded', () => {
    render();
    document.getElementById('search').addEventListener('input', render);
});
