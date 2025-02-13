
document.addEventListener("DOMContentLoaded", () => {
    loadGameState();
    showLocation("location-hangar");
    startIncome();
    updateUI();
});

let balance = 100;
let currentLocation = "chicken_coop";

let upgrades = {
    chicken_coop: { level: 1, income: 1, cost: 10 },
    barn: { level: 1, income: 2, cost: 20 },
    pigsty: { level: 1, income: 3, cost: 30 },
    wheat_field: { level: 1, income: 5, cost: 50 }
};

// Загрузка данных
function loadGameState() {
    let savedBalance = localStorage.getItem("farmBalance");
    let savedUpgrades = localStorage.getItem("farmUpgrades");

    if (savedBalance !== null) balance = parseInt(savedBalance);
    if (savedUpgrades !== null) upgrades = JSON.parse(savedUpgrades);

    updateUI();
}

// Сохранение данных
function saveGameState() {
    localStorage.setItem("farmBalance", balance);
    localStorage.setItem("farmUpgrades", JSON.stringify(upgrades));
}

// Переключение локации
function showLocation(locationId) {
    document.querySelectorAll(".location").forEach(loc => loc.classList.remove("active"));
    document.getElementById(locationId).classList.add("active");

    let locationKey = locationId.replace("location-", "");
    if (upgrades[locationKey]) {
        currentLocation = locationKey;
        updateUpgradeButton();
    } else {
        currentLocation = null;
        document.getElementById("upgrade-btn").style.display = "none";
    }
}

// Улучшение локации
function upgradeCurrentLocation() {
    if (!currentLocation) return;

    let upgrade = upgrades[currentLocation];

    if (balance >= upgrade.cost) {
        balance -= upgrade.cost;
        upgrade.level++;
        upgrade.income += Math.floor(upgrade.income * 0.5);
        upgrade.cost = Math.floor(upgrade.cost * 1.5);

        updateUI();
        saveGameState();

        let button = document.getElementById("upgrade-btn");
        button.classList.add("upgrade-effect");
        setTimeout(() => button.classList.remove("upgrade-effect"), 500);
    } else {
        console.log("Недостаточно денег!");
    }
}

// Пассивный доход
function startIncome() {
    setInterval(() => {
        let totalIncome = Object.values(upgrades).reduce((sum, loc) => sum + loc.income, 0);
        balance += totalIncome;

        document.getElementById("passive-income").textContent = totalIncome;
        updateUI();
        saveGameState();
    }, 3000);
}

// Обновление интерфейса
function updateUI() {
    let balanceBox = document.getElementById("balance-box");
    document.getElementById("balance").textContent = balance;

    let totalIncome = Object.values(upgrades).reduce((sum, loc) => sum + loc.income, 0);
    document.getElementById("passive-income").textContent = totalIncome;

    let newSize = 100 + Math.log(balance + 1) * 20;
    balanceBox.style.width = `${newSize}px`;
    balanceBox.style.height = `${newSize / 2}px`;

    for (let key in upgrades) {
        let levelElement = document.querySelector(`#location-${key} .level`);
        if (levelElement) {
            levelElement.textContent = upgrades[key].level;
        }
    }

    updateUpgradeButton();
}

// Обновление кнопки улучшения
function updateUpgradeButton() {
    if (!currentLocation) return;
    let upgrade = upgrades[currentLocation];
    document.getElementById("upgrade-cost").textContent = upgrade.cost;
    document.getElementById("upgrade-btn").style.display = "block";
}
