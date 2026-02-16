const UI_CONFIG = {
    serverName: "POJAV TIERS",
    totalRows: 100,
    // This controls the 3D Render Tilt
    renderParams: "?hr=35&vr=-25&ratio=13",
    renderUrl: "https://render.crafthead.net/renders/body/",
    
    categories: [
        { id: "overall", label: "Overall", icon: "fa-circle-notch" },
        { id: "ltms", label: "LTMs", icon: "fa-sword" },
        { id: "vanilla", label: "Vanilla", icon: "fa-gem" },
        { id: "uhc", label: "UHC", icon: "fa-heart" },
        { id: "pot", label: "Pot", icon: "fa-flask" },
        { id: "nethop", label: "NethOP", icon: "fa-eye" },
        { id: "smp", label: "SMP", icon: "fa-bolt" }
    ],

    // Hardcoded Top Players
    players: [
        { rank: 1, name: "Marlowww", region: "NA", points: 435, tiers: ["HT1", "HT1", "LT1", "LT1", "HT1", "LT1", "LT1"] },
        { rank: 2, name: "ItzRealMe", region: "NA", points: 330, tiers: ["LT1", "HT1", "HT1", "HT1", "LT1", "LT1", "LT1"] },
        { rank: 3, name: "Swight", region: "NA", points: 290, tiers: ["HT1", "LT1", "LT1", "LT1", "HT1", "LT1", "LT1"] }
    ]
};
