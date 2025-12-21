const result = document.getElementById("result");
document.getElementById('characterName').addEventListener("keydown",(e) => {
    if(e.key === "Enter"){
        fetchData();
    }
})
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
        const imageMarkup = character.image
  ? `<img src="${character.image}" width = "200">`
  : `<div class="no-image">No image available</div>`;
      result.innerHTML = `
        <h2 class="characterName">${character.name}</h2>
        <p class = "characterName">House: ${character.house || "Unknown"}</p>
        ${imageMarkup}
      `;
    } 
    else {
      result.innerHTML = `<h2 class = "characterName">Character not found.</h2>`;
    }

  } catch (e) {
    console.error(e);
  }
}
