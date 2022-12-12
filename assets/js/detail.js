const pokeApi = {}

const detail = document.getElementById('detail')
const back = document.getElementById('voltar')
const nome = localStorage.getItem('storageNome')


back.addEventListener('click', () => window.location = 'index.html')

function convertPokemonToLi(jsonBody) {

    return `
    <div class="pokemon ${jsonBody.types.map((typeSlot) => typeSlot.type.name)}">
        <span class="number">#${jsonBody.id}</span>
        <span class="name">${jsonBody.name}</span>

        <div class="detail">
            <ol class="types">
                ${jsonBody.types.map((typeSlot) => typeSlot.type.name).join(' & ')}
            </ol>
            <img src= "${jsonBody.sprites.other.dream_world.front_default}"
            alt="${jsonBody.name}"/>
        </div>
    </div>
    `
}

const url =`https://pokeapi.co/api/v2/pokemon/${nome}`

fetch(url)
    .then((response) => response.json())

    .then((jsonBody) => {
        console.log(jsonBody.name)
      
    
        console.log(convertPokemonToLi(jsonBody))
        detail.innerHTML = convertPokemonToLi(jsonBody)
    })

    .catch((error)=> console.error(error))

