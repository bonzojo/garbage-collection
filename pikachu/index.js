async function pokeMon(){
     try {
        const pokemonName = document.getElementById("pokemonName").value.toLowerCase(); 
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`);
        if(!response.ok) {
            throw new Error("Could not fetch resource")
        }
        const pikajson = await response.json();
        const pokemonSprite = pikajson.sprites.front_default;
        const imgElement = document.getElementById("pokemonSprite");
        imgElement.src = pokemonSprite;
        imgElement.style.display = "block";
     }
     catch(error){
        console.log(error);
     }
}
