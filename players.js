<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>PojavTiers | Advanced Ranking System</title>
    <link rel="stylesheet" href="style.css">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css">
</head>
<body>
    <nav class="navbar">
        <div class="nav-content">
            <div class="logo">POJAV<span>TIERS</span></div>
            <div class="search-wrapper">
                <i class="fas fa-search"></i>
                <input type="text" id="playerSearch" placeholder="Search player name...">
            </div>
            <div class="nav-right">
                <button class="btn-primary">Discord</button>
            </div>
        </div>
    </nav>

    <div class="category-bar">
        <div class="cat-content">
            <button class="cat-btn active" data-cat="overall">Overall</button>
            <button class="cat-btn" data-cat="ltms">LTMs</button>
            <button class="cat-btn" data-cat="vanilla">Vanilla</button>
            <button class="cat-btn" data-cat="uhc">UHC</button>
        </div>
    </div>

    <main class="table-container">
        <div class="table-header">
            <div class="col-rank">#</div>
            <div class="col-player">PLAYER</div>
            <div class="col-region">REGION</div>
            <div class="col-tiers">TIERS</div>
        </div>
        <div id="playerRows">
            </div>
    </main>

    <script src="players.js"></script>
</body>
</html>
    
