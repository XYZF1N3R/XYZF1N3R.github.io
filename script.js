document.addEventListener("DOMContentLoaded", () => {
    loadGameState(); // Загружаем сохранённые данные
    showLocation("location-hangar"); // Начальная локация - ангар
    startIncome(); // Запускаем начисление денег
    updateBalanceUI(); // Обновляем баланс
});

let balance = 100; // Начальный баланс
let currentLocation = "chicken_coop"; // Локация по умолчанию

let upgrades = {
    chicken_coop: { level: 1, income: 1, cost: 10 },
    barn: { level: 1, income: 2, cost: 20 },
    pigsty: { level: 1, income: 3, cost: 30 },
    wheat_field: { level: 1, income: 5, cost: 50 }
};

// Загружаем сохранённые данные
function loadGameState() {
    let savedBalance = localStorage.getItem("farmBalance");
    let savedUpgrades = localStorage.getItem("farmUpgrades");

    if (savedBalance !== null) balance = parseInt(savedBalance);
    if (savedUpgrades !== null) upgrades = JSON.parse(savedUpgrades);

    updateBalanceUI();
}

// Сохраняем данные
function saveGameState() {
    localStorage.setItem("farmBalance", balance);
    localStorage.setItem("farmUpgrades", JSON.stringify(upgrades));
}

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

function upgradeCurrentLocation() {
    if (!currentLocation) return;

    let upgrade = upgrades[currentLocation];

    if (balance >= upgrade.cost) {
        balance -= upgrade.cost; // Тратим деньги
        upgrade.level++; // Увеличиваем уровень
        upgrade.income += Math.floor(upgrade.income * 0.5); // Увеличиваем доход
        upgrade.cost = Math.floor(upgrade.cost * 1.5); // Делаем следующее улучшение дороже

        updateBalanceUI();
        updateUpgradeButton();
        saveGameState(); // Сохраняем прогресс

        let button = document.getElementById("upgrade-btn");
        button.classList.add("upgrade-effect");
        setTimeout(() => button.classList.remove("upgrade-effect"), 500);
    } else {
        console.log("Недостаточно денег!");
    }
}

function startIncome() {
    setInterval(() => {
        let totalIncome = 0;
        for (let key in upgrades) {
            totalIncome += upgrades[key].income;
        }
        balance += totalIncome;
        updateBalanceUI();
        saveGameState(); // Сохраняем баланс
    }, 3000);
}

function updateBalanceUI() {
    document.getElementById("balance").textContent = balance;
}

function updateUpgradeButton() {
    if (!currentLocation) return;
    let upgrade = upgrades[currentLocation];
    document.getElementById("upgrade-cost").textContent = upgrade.cost;
    document.getElementById("upgrade-btn").style.display = "block";
}

