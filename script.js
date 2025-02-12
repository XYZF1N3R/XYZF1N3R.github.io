document.addEventListener("DOMContentLoaded", () => {
    showLocation("location-farm"); // Начальная локация - ферма
    startIncome(); // Запускаем начисление денег
});

let balance = 0;
let upgrades = {
    chicken_coop: { level: 1, income: 1 },
    barn: { level: 1, income: 2 },
    pigsty: { level: 1, income: 3 },
    wheat_field: { level: 1, income: 5 }
};

function showLocation(locationId) {
    document.querySelectorAll(".location").forEach(loc => loc.classList.remove("active"));
    document.getElementById(locationId).classList.add("active");
}

function enterHangar() {
    showLocation("location-hangar");
}

function enterFarm() {
    showLocation("location-farm");
}

function upgradeLocation(location) {
    const button = document.querySelector(`button[onclick="upgradeLocation('${location}')"]`);
    if (button) {
        button.classList.add("upgrade-effect");
        setTimeout(() => button.classList.remove("upgrade-effect"), 500);

        // Улучшение локации
        upgrades[location].level++;
        upgrades[location].income += Math.floor(upgrades[location].income * 0.5);
        
        console.log(`Локация ${location} улучшена до уровня ${upgrades[location].level}`);
    }
}

function startIncome() {
    setInterval(() => {
        let totalIncome = 0;
        for (let key in upgrades) {
            totalIncome += upgrades[key].income;
        }
        balance += totalIncome;
        console.log(`Баланс: ${balance} (+${totalIncome})`);
    }, 3000); // Начисление денег каждые 3 секунды
}
