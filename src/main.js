import { filterData, sortData } from './data.js';

import data from './data/pokemon/pokemon.js';

//console.log(example, data);

/*let numero = data.pokemon[0]['num'];
let nombre = data.pokemon[0]['name'];
let imagen = data.pokemon[0]['img'];

document.getElementById("containerPokemon").innerHTML += "Aquí debe aparecer el pokemon" + numero + nombre + imagen; */

//esta función va a mostrar los pokemon
function elegirPokemon(data){
    for(let i=0; i< data.pokemon.length; i++){
        document.getElementById("containerPokemon").innerHTML += `
        <div class="single-card">
            <h3 class="num-card">Nº ${data.pokemon[i]['num']}</h3>
            <img class="img-card" id="img-card" src="https://www.serebii.net/pokemongo/pokemon/${data.pokemon[i]['num']}.png"></img>
            <div class="name-card"> ${data.pokemon[i]['name']} </div>
        </div> `
    }
}
elegirPokemon(data);

//muestra cards de los pokémon según el tipo seleccionado
let selectTypePokemon = (tipo) => {
    return filterData(data.pokemon, tipo).map((pokemonType)=>{
        document.getElementById("containerPokemon").innerHTML += `
        <div class="single-card">
            <h3 class="num-card">Nº ${pokemonType.num}</h3>
            <img class="img-card" id="img-card" src="https://www.serebii.net/pokemongo/pokemon/${pokemonType['num']}.png"></img>
            <div class="name-card"> ${pokemonType.name} </div>
        </div> `
    })
}

//evento seleccionar opciones de tipo (FILTRO)
const showChoice = (event) => {
    document.getElementById('containerPokemon').innerHTML = ` `;
    const printChoice = document.getElementById('printChoice');
    printChoice.textContent = `Has elegido el tipo: ${event.target.value}`;
    selectTypePokemon(event.target.value);
}
document.getElementById('filterList').addEventListener('change', showChoice);

//interacción del boton ordenar
const container = document.getElementById("containerPokemon");

document.getElementById("sortList").addEventListener("change", (e) => {
  container.innerHTML = "";

  if (e.target.value === "A-Z" || e.target.value === "Z-A" ) {
   const sortArray = sortData(data.pokemon, "name", e.target.value);
    for (let i = 0; i < data.pokemon.length; i++) {

      document.getElementById("containerPokemon").innerHTML += `
        <div class="single-card">
           <h3 class="num-card">Nº ${sortArray[i].num}</h3>
           <img class="img-card" src="https://www.serebii.net/pokemongo/pokemon/${sortArray[i].num}.png"></img>
           <div class="name-card"> ${sortArray[i].name} </div>
       </div>
       `
    }
  }
  
  if (e.target.value === "sortNumerically"){
    const sortArrayNum = sortData(data.pokemon, "num", e.target.value);
     for(let i=0; i<data.pokemon.length; i++) {

         document.getElementById("containerPokemon").innerHTML += `
         <div class="single-card">
           <h3 class="num-card">Nº ${sortArrayNum[i].num}</h3>
           <img class="img-card" src="https://www.serebii.net/pokemongo/pokemon/${sortArrayNum[i].num}.png"></img>
           <div class="name-card"> ${sortArrayNum[i].name} </div>
       </div>
         `
     }
  }
});




// Probando el modal
const modal = document.getElementById("myModal");
const btn = document.getElementById("boton-modal");
const span = document.getElementsByClassName("close")[0];
// Función para abrir el modal (click btn)
btn.addEventListener('click', ()=>{modal.style.display='block'});
span.addEventListener('click', ()=>{modal.style.display='none'});

/* return imagenCard.map((pokemonClickeado)=>{
    document.getElementById("modal-content").innerHTML += `
        <div class="file-card-pokemon">
            <div class="divisores-file-pokemon">
                <h3 class="name-card-pokemon"> ${pokemonClickeado}['name']}</h3>
                <p class="height-card-pokemon">Altura:${pokemonClickeado}['size']['height']}</p>
                <p class="height-card-pokemon">Peso: ${pokemonClickeado}['size']['weight']}</p>
                <p class="egg-card-pokemon">Huevo: ${pokemonClickeado}['egg']}</p>
                <p class="encounter-card-pokemon">Probabilidad de encuentro: ${pokemonClickeado}['encounter']['base-capture-rate']}</p>
            </div>
            <div class="divisores-file-pokemon">
                <img class="imagen-card-pokemon" src="https://www.serebii.net/pokemongo/pokemon/${pokemonClickeado}['num']}.png"></img>
            </div>
        </div> `
}) */

