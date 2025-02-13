document.addEventListener("DOMContentLoaded", () => {
    loadGameState();
    showLocation("location-hangar");
    startIncome();
    updateBalanceUI();
});

let balance = 100;
let currentLocation = null;

let upgrades = {
    chicken_coop: { level: 1, income: 1, cost: 10 },
    barn: { level: 1, income: 2, cost: 20 },
    pigsty: { level: 1, income: 3, cost: 30 },
    wheat_field: { level: 1, income: 5, cost: 50 }
};

// Загружаем данные
function loadGameState() {
    let savedBalance = localStorage.getItem("farmBalance");
    let savedUpgrades = localStorage.getItem("farmUpgrades");

    if (savedBalance !== null) balance = parseInt(savedBalance);
    if (savedUpgrades !== null) upgrades = JSON.parse(savedUpgrades);

    updateBalanceUI();
    updatePassiveIncome();
}

// Сохраняем данные
function saveGameState() {
    localStorage.setItem("farmBalance", balance);
    localStorage.setItem("farmUpgrades", JSON.stringify(upgrades));
}

// Переключение локаций
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

        updateBalanceUI();
        updateUpgradeButton();
        updatePassiveIncome();
        saveGameState();

        document.querySelector(`#location-${currentLocation} .level`).textContent = upgrade.level;
    } else {
        console.log("Недостаточно денег!");
    }
}

// Пассивный доход
function startIncome() {
    setInterval(() => {
        let totalIncome = calculateTotalIncome();
        balance += totalIncome;
        updateBalanceUI();
        saveGameState();
    }, 3000);
}

// Подсчёт общего пассивного дохода
function calculateTotalIncome() {
    let totalIncome = 0;
    for (let key in upgrades) {
        totalIncome += upgrades[key].income;
    }
    return totalIncome;
}

// Обновление пассивного дохода на экране
function updatePassiveIncome() {
    document.getElementById("passive-income").textContent = calculateTotalIncome();
}

// Обновление баланса и размера окна
function updateBalanceUI() {
    let balanceBox = document.getElementById("balance-box");
    document.getElementById("balance").textContent = balance;

    let newSize = 100 + Math.log(balance + 1) * 20; // Логарифмический рост
    balanceBox.style.width = `${newSize}px`;
    balanceBox.style.height = `${newSize / 2}px`;
}

// Обновление кнопки улучшения
function updateUpgradeButton() {
    if (!currentLocation) return;
    let upgrade = upgrades[currentLocation];
    document.getElementById("upgrade-cost").textContent = upgrade.cost;
    document.getElementById("upgrade-btn").style.display = "block";
}

