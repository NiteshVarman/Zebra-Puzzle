let lives = 5;

const finalConfiguration = {
    1: { color: "Yellow", nationality: "Norwegian", drink: "Water", pet: "Fox", cigarette: "Kools" },
    2: { color: "Blue", nationality: "Ukrainian", drink: "Tea", pet: "Horse", cigarette: "Chesterfields" },
    3: { color: "Red", nationality: "Englishman", drink: "Milk", pet: "Snail", cigarette: "Old Gold" },
    4: { color: "Green", nationality: "Spaniard", drink: "Coffee", pet: "Dog", cigarette: "Lucky Strike" },
    5: { color: "Ivory", nationality: "Japanese", drink: "Orange Juice", pet: "Zebra", cigarette: "Parliaments" }
};

// Populate the dropdowns with options
const colors = ["Yellow", "Blue", "Red", "Green", "Ivory"];
const nationalities = ["Norwegian", "Ukrainian", "Englishman", "Spaniard", "Japanese"];
const drinks = ["Water", "Tea", "Milk", "Coffee", "Orange Juice"];
const pets = ["Fox", "Horse", "Snail", "Dog", "Zebra"];
const cigarettes = ["Kools", "Chesterfields", "Old Gold", "Lucky Strike", "Parliaments"];

function populateDropdowns() {
    for (let i = 1; i <= 5; i++) {
        populateOptions(`color${i}`, colors);
        populateOptions(`nationality${i}`, nationalities);
        populateOptions(`drink${i}`, drinks);
        populateOptions(`pet${i}`, pets);
        populateOptions(`cigarette${i}`, cigarettes);
    }
}

function populateOptions(id, options) {
    const select = document.getElementById(id);
    options.forEach(option => {
        const opt = document.createElement('option');
        opt.value = option;
        opt.text = option;
        select.add(opt);
    });
}

function checkSolution() {
    let correct = true;
    
    for (let i = 1; i <= 5; i++) {
        if (document.getElementById(`color${i}`).value !== finalConfiguration[i].color) correct = false;
        if (document.getElementById(`nationality${i}`).value !== finalConfiguration[i].nationality) correct = false;
        if (document.getElementById(`drink${i}`).value !== finalConfiguration[i].drink) correct = false;
        if (document.getElementById(`pet${i}`).value !== finalConfiguration[i].pet) correct = false;
        if (document.getElementById(`cigarette${i}`).value !== finalConfiguration[i].cigarette) correct = false;
    }

    if (!correct) {
        lives--;
        document.getElementById('livesCounter').textContent = `Lives Remaining: ${Math.max(lives, 0)}`;
        if (lives === 0) {
            displayFinalConfiguration(finalConfiguration);
        }
    } else {
        alert("Congratulations! You solved the puzzle!");
    }
}

function displayFinalConfiguration(finalConfig) {
    const finalTable = document.getElementById('finalTable');
    if (!finalTable) {
        console.error("Final configuration table not found.");
        return;
    }
    
    const rows = finalTable.getElementsByTagName('tr');

    Object.keys(finalConfig).forEach(house => {
        const houseConfig = finalConfig[house];
        rows[1].getElementsByTagName('td')[house - 1].textContent = houseConfig.color;
        rows[2].getElementsByTagName('td')[house - 1].textContent = houseConfig.nationality;
        rows[3].getElementsByTagName('td')[house - 1].textContent = houseConfig.drink;
        rows[4].getElementsByTagName('td')[house - 1].textContent = houseConfig.pet;
        rows[5].getElementsByTagName('td')[house - 1].textContent = houseConfig.cigarette;
    });

    document.getElementById('finalConfig').style.display = 'block';
}

populateDropdowns();
