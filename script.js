window.onload = () => {
    showLocation("location-hangar"); // Начальная локация - ангар
    startIncome(); // Запускаем начисление денег
    updateBalanceUI(); // Показываем баланс
};

let balance = 100; // Начальный баланс
let upgrades = {
    chicken_coop: { level: 1, income: 1, cost: 10 },
    barn: { level: 1, income: 2, cost: 20 },
    pigsty: { level: 1, income: 3, cost: 30 },
    wheat_field: { level: 1, income: 5, cost: 50 }
};

function showLocation(locationId) {
    let location = document.getElementById(locationId);
    if (!location) {
        console.error(`Локация ${locationId} не найдена!`);
        return;
    }

    document.querySelectorAll(".location").forEach(loc => loc.classList.remove("active"));
    location.classList.add("active");
}

function upgradeLocation(location) {
    let upgrade = upgrades[location];

    if (balance >= upgrade.cost) {
        balance -= upgrade.cost;
        upgrade.level++;
        upgrade.income += Math.floor(upgrade.income * 0.5);
        upgrade.cost = Math.floor(upgrade.cost * 1.5);

        updateBalanceUI();
        updateCostUI(location);

        let button = document.querySelector(`button[onclick="upgradeLocation('${location}')"]`);
        if (button) {
            button.classList.add("upgrade-effect");
            setTimeout(() => button.classList.remove("upgrade-effect"), 500);
        }

        console.log(`Локация ${location} улучшена до ${upgrade.level} уровня! Новый доход: ${upgrade.income}, новая цена: ${upgrade.cost}`);
    } else {
        console.log("Недостаточно денег!");
    }
}

function startIncome() {
    setInterval(() => {
        let totalIncome = Object.values(upgrades).reduce((sum, upg) => sum + upg.income, 0);
        balance += totalIncome;
        updateBalanceUI();
    }, 3000);
}

function updateBalanceUI() {
    let balanceEl = document.getElementById("balance");
    if (balanceEl) balanceEl.textContent = balance;
}

function updateCostUI(location) {
    let costEl = document.getElementById(`cost-${location}`);
    if (costEl) costEl.textContent = upgrades[location].cost;
}

