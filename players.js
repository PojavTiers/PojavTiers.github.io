function generateTable() {
    const list = document.getElementById('playerList');
    const search = document.getElementById('playerSearch').value.toLowerCase();
    list.innerHTML = "";

    const fullData = [...UI_CONFIG.players];
    for (let i = fullData.length + 1; i <= UI_CONFIG.totalRows; i++) {
        fullData.push({
            rank: i,
            name: "None",
            region: i % 2 === 0 ? "EU" : "NA",
            points: 100 - i,
            tiers: ["LT1", "LT1", "LT1", "LT1", "LT1", "LT1", "LT1"]
        });
    }

    const filtered = fullData.filter(p => p.name.toLowerCase().includes(search));

    filtered.forEach(p => {
        const row = document.createElement('div');
        row.className = `p-row rank-${p.rank}`;
        
        const tierHTML = p.tiers.map((t, idx) => `
            <div class="t-unit">
                <i class="fas ${UI_CONFIG.categories[idx].icon}"></i>
                <span class="tag ${t}">${t}</span>
            </div>
        `).join('');

        const skinImg = `${UI_CONFIG.renderUrl}${p.name}${UI_CONFIG.renderParams}`;

        row.innerHTML = `
            <div class="r-num">${p.rank}.</div>
            <div class="p-identity">
                <div class="skin-3d-wrap">
                    <img src="${skinImg}" class="skin-3d" onerror="this.src='https://render.crafthead.net/renders/body/Steve${UI_CONFIG.renderParams}'">
                </div>
                <div class="p-info">
                    <span class="p-name">${p.name}</span>
                    <span class="p-sub"><i class="fas fa-shield-halved"></i> Combat Master (${p.points} pts)</span>
                </div>
            </div>
            <div><span class="reg-tag ${p.region}">${p.region}</span></div>
            <div class="tier-container">${tierHTML}</div>
        `;
        list.appendChild(row);
    });
}

function initCategories() {
    const catList = document.getElementById('categoryList');
    UI_CONFIG.categories.forEach(c => {
        const btn = document.createElement('button');
        btn.className = `cat-btn ${c.id === 'overall' ? 'active' : ''}`;
        btn.innerHTML = `<i class="fas ${c.icon}"></i> ${c.label}`;
        catList.appendChild(btn);
    });
}

document.addEventListener('DOMContentLoaded', () => {
    initCategories();
    generateTable();
    document.getElementById('playerSearch').addEventListener('input', generateTable);
});

