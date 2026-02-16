:root {
    --bg-dark: #0b0e14;
    --bg-nav: #14181f;
    --bg-card: #161b22;
    --bg-hover: #1c222b;
    --gold: #f1c40f;
    --border: #30363d;
    --text-dim: #8b949e;
    --col-rank: 60px;
    --col-player: 1fr;
    --col-region: 100px;
    --col-tiers: 460px;
}

* { box-sizing: border-box; margin: 0; padding: 0; }
body {
    background-color: var(--bg-dark);
    color: white;
    font-family: 'Inter', sans-serif;
    overflow-y: scroll;
}

.navbar {
    background: var(--bg-nav);
    border-bottom: 1px solid var(--border);
    padding: 12px 0;
    position: sticky;
    top: 0;
    z-index: 100;
}

.nav-container {
    max-width: 1300px;
    margin: 0 auto;
    display: flex;
    align-items: center;
    padding: 0 20px;
}

.logo { font-weight: 800; font-size: 22px; color: var(--gold); margin-right: 40px; }
.logo span { color: white; }

.search-box {
    background: #0d1117;
    border: 1px solid var(--border);
    border-radius: 6px;
    padding: 8px 15px;
    display: flex;
    align-items: center;
    width: 300px;
}

.search-box input {
    background: transparent;
    border: none;
    color: white;
    margin-left: 10px;
    outline: none;
    width: 100%;
}

.nav-links { margin-left: auto; display: flex; gap: 20px; }
.nav-item { color: var(--text-dim); text-decoration: none; font-size: 14px; font-weight: 600; }
.nav-item.active { color: white; }

.category-bar { background: #12161d; border-bottom: 1px solid var(--border); }
.cat-inner { max-width: 1300px; margin: 0 auto; display: flex; padding: 15px 20px; gap: 10px; }
.cat-btn {
    background: #1c2128;
    border: 1px solid var(--border);
    color: var(--text-dim);
    padding: 8px 16px;
    border-radius: 6px;
    cursor: pointer;
    font-size: 13px;
    display: flex;
    align-items: center;
    gap: 8px;
}
.cat-btn.active { border-color: var(--gold); color: white; background: #252c35; }

.content-wrapper { max-width: 1300px; margin: 20px auto; padding: 0 20px; }
.table-header, .p-row {
    display: grid;
    grid-template-columns: var(--col-rank) var(--col-player) var(--col-region) var(--col-tiers);
    padding: 12px 20px;
    align-items: center;
}

.table-header { color: var(--text-dim); font-size: 11px; text-transform: uppercase; font-weight: 800; letter-spacing: 1px; }

.p-row {
    background: var(--bg-card);
    margin-bottom: 6px;
    border-radius: 8px;
    border: 1px solid transparent;
    transition: 0.2s;
}
.p-row:hover { background: var(--bg-hover); border-color: #444; transform: translateY(-1px); }

.r-num { font-weight: 900; font-style: italic; font-size: 18px; color: #444; }
.rank-1 .r-num { color: var(--gold); }
.rank-2 .r-num { color: #bdc3c7; }
.rank-3 .r-num { color: #e67e22; }

.p-identity { display: flex; align-items: center; gap: 20px; }
.skin-3d-wrap {
    width: 50px;
    height: 65px;
    display: flex;
    align-items: center;
    justify-content: center;
}
.skin-3d { 
    height: 100%; 
    filter: drop-shadow(0 4px 4px rgba(0,0,0,0.5));
    transition: transform 0.3s;
}
.p-row:hover .skin-3d { transform: scale(1.1) rotate(-5deg); }

.p-info { display: flex; flex-direction: column; }
.p-name { font-weight: 700; font-size: 16px; }
.p-sub { color: var(--text-dim); font-size: 12px; margin-top: 3px; }

.reg-tag {
    font-size: 11px;
    font-weight: 800;
    padding: 4px 8px;
    border-radius: 4px;
    background: #252a33;
}
.NA { color: #ff8080; }
.EU { color: #80ff80; }

.tier-container { display: flex; gap: 12px; justify-content: flex-end; }
.t-unit { display: flex; flex-direction: column; align-items: center; gap: 5px; }
.t-unit i { font-size: 13px; color: var(--text-dim); }
.tag {
    font-size: 10px;
    font-weight: 900;
    padding: 2px 6px;
    border-radius: 3px;
    min-width: 34px;
    text-align: center;
}
.HT1 { background: rgba(241, 196, 15, 0.15); color: var(--gold); border: 1px solid rgba(241, 196, 15, 0.3); }
.LT1 { background: rgba(255, 255, 255, 0.05); color: white; border: 1px solid rgba(255, 255, 255, 0.15); }
        
