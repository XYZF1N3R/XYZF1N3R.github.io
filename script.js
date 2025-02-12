document.addEventListener("DOMContentLoaded", () => {
    showLocation("location-farm"); // Начальная локация - ферма
});

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
        console.log(`Локация ${location} улучшена!`);
    }
}

