document.addEventListener("DOMContentLoaded", () => {
    showLocation("location-hangar"); // Начальная локация - ангар
    startIncome(); // Запускаем начисление денег
    updateBalanceUI(); // Показываем баланс
});

let balance = 100; // Начальный баланс
let upgrades = {
    chicken_coop: { level: 1, income: 1, cost: 10 },
    barn: { level: 1, income: 2, cost: 20 },
    pigsty: { level: 1, income: 3, cost: 30 },
    wheat_field: { level: 1, income: 5, cost: 50 }
};

function showLocation(locationId) {
    document.querySelectorAll(".location").forEach(loc => loc.classList.remove("active"));
    document.getElementById(locationId).classList.add("active");
}

function upgradeLocation(location) {
    let upgrade = upgrades[location];

    if (balance >= upgrade.cost) {
        balance -= upgrade.cost; // Тратим деньги
        upgrade.level++; // Увеличиваем уровень
        upgrade.income += Math.floor(upgrade.income * 0.5); // Увеличиваем доход
        upgrade.cost = Math.floor(upgrade.cost * 1.5); // Следующее улучшение дороже

        updateBalanceUI(); // Обновляем баланс
        updateCostUI(location); // Обновляем цену улучшения

        let button = document.querySelector(`button[onclick="upgradeLocation('${location}')"]`);
        button.classList.add("upgrade-effect");
        setTimeout(() => button.classList.remove("upgrade-effect"), 500);

        console.log(`Локация ${location} улучшена до ${upgrade.level} уровня! Новый доход: ${upgrade.income}, новая цена: ${upgrade.cost}`);
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
        balance += totalIncome; // Добавляем доход к балансу
        updateBalanceUI(); // Обновляем баланс на экране
    }, 3000); // Деньги приходят каждые 3 секунды
}

function updateBalanceUI() {
    document.getElementById("balance").textContent = balance;
}

function updateCostUI(location) {
    document.getElementById(`cost-${location}`).textContent = upgrades[location].cost;
}
