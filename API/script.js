const result = document.getElementById("result");

async function fetchData() {
  try {
    const characterName = document
      .getElementById("characterName")
      .value
      .trim()
      .toLowerCase();

    const response = await fetch(
      "https://hp-api.onrender.com/api/characters"
    );

    const data = await response.json();

    const character = data.find(char =>
      char.name.toLowerCase().includes(characterName)
    );

    if (character) {
      result.innerHTML = `
        <h2 class="characterName">${character.name}</h2>
        <p class = "characterName">House: ${character.house || "Unknown"}</p>
        <img src="${character.image}" width="200">
      `;
    } else {
      result.innerHTML = `<h2 class = "characterName">Character not found 😢</h2>`;
    }

  } catch (e) {
    console.error(e);
  }
}
