
function openModal() {
	modal.style.display = 'block'
}

function convertPokemonTypesToLi(pokemonTypes) {
	return pokemonTypes.map((typeSlot) => `<li class="type liDetail">${typeSlot.type.name}</li>`)
}

function convertPokemonAbilitiesToLi(pokemonAbilities) {
	return pokemonAbilities.map((nameAbility) => `<li class="ability liDetail">${nameAbility.ability.name}</li>`)
}

function convertPokemonDetailToHtml(pokemon) {
	return `
		<div class="barTitle">
				<span class="number-card">#${pokemon.id}</span>
				<span>${pokemon.name}</span>
				<button id="btnCloserModal" onclick="closerModal()">X</button>
			</div>
			<p><img src="${pokemon.sprites.other.dream_world.front_default}"></p>
			<div class="detail-card">
					<span>Tipo</span>
					<ol class="types">
						${convertPokemonTypesToLi(pokemon.types).join('')}
					</ol>
					<span>Abilidades</span>
					<ol class="abilities">
						${convertPokemonAbilitiesToLi(pokemon.abilities).join('')}
					</ol>
			</div>
	`
}


function closerModal() {
	modal.style.display = 'none'
}

let box = document.getElementById('box')



function openDetails(pokemonName) {
	const url = `https://pokeapi.co/api/v2/pokemon/${pokemonName}`
	fetch(url)
		.then((response) => response.json())
		.then((pokemon) => {
			console.log(pokemon)
			console.log(convertPokemonDetailToHtml(pokemon))
			box.innerHTML = convertPokemonDetailToHtml(pokemon)
			openModal()
		})



}

let modal = document.getElementById('modal')



	
