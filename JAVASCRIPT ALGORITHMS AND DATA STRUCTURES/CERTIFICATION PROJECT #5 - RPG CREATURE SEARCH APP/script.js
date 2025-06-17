const searchInput = document.getElementById('search-input');
const searchButton = document.getElementById('search-button');
const creatureNameElement = document.getElementById('creature-name');
const creatureIdElement = document.getElementById('creature-id');
const weightElement = document.getElementById('weight');
const heightElement = document.getElementById('height');
const typesElement = document.getElementById('types');
const specialName = document.getElementById('special-name');
const specialDescription = document.getElementById('special-description');
const hpElement = document.getElementById('hp');
const attackElement = document.getElementById('attack');
const defenseElement = document.getElementById('defense');
const sepecialAttackElement = document.getElementById('special-attack');
const specialDefenseElement = document.getElementById('special-defense');
const speedElement = document.getElementById('speed');

const fetchAPI = async (input) => {
    const url = `https://rpg-creature-api.freecodecamp.rocks/api/creature/${input}`;
    
    try {
        const response = await fetch(url);

        if (!response.ok) {
             alert('Creature not found');
             return;
        }

        return await response.json();
    } catch (err) {
        console.log(err);
    }
}

const searchCreature = async () => {
    event.preventDefault();
    const json = await fetchAPI(searchInput.value);
    const { id, name: creatureName, weight, height, special, stats, types } = json;
    const { name: specialSkill, description } = special;
    
    creatureNameElement.innerText = creatureName.toUpperCase();
    creatureIdElement.innerText = `#${id}`;
    weightElement.innerText = `Weight: ${weight}`;
    heightElement.innerText = `Height: ${height}`;
    typesElement.innerHTML = '';
    types.forEach((type) => {
        typesElement.innerHTML += `<span class='creature-type'>${type.name.toUpperCase()}</span>`;
    });
    specialName.innerText = specialSkill;
    specialDescription.innerText = description;

    hpElement.innerText = searchStats(stats, 'hp');
    attackElement.innerText = searchStats(stats, 'attack');
    defenseElement.innerText = searchStats(stats, 'defense');
    sepecialAttackElement.innerText = searchStats(stats, 'special-attack');
    specialDefenseElement.innerText = searchStats(stats, 'special-defense');
    speedElement.innerText = searchStats(stats, 'speed');
}

const searchStats = (stats, statName) => {
    const stat =  stats.find((stat) => stat.name === statName);
    return stat.base_stat;
}

searchButton.addEventListener('click', searchCreature);

searchInput.addEventListener('keydown', (event) => {
    if (event.key === 'Enter') {
        searchCreature();
    }
});