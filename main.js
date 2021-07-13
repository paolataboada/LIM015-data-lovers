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
        <div id=${data.pokemon[i]['num']} class="single-card">
            <h3 class="num-card">Nº ${data.pokemon[i]['num']}</h3>
            <span class="tooltip">Click to see information</span>
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
        <div id=${pokemonType['num']} class="single-card">
            <h3 class="num-card">Nº ${pokemonType.num}</h3>
            <span class="tooltip">Click to see information</span>
            <img class="img-card" id="img-card" src="https://www.serebii.net/pokemongo/pokemon/${pokemonType['num']}.png"></img>
            <div class="name-card"> ${pokemonType.name} </div>
        </div> `
    })
}
//evento seleccionar opciones de tipo (FILTRO) - resumida 09/07
document.getElementById('filterList').addEventListener('change', (e) => {
    document.getElementById('containerPokemon').innerHTML = ` `;
    selectTypePokemon(e.target.value);
});

//interacción del boton ordenar
const container = document.getElementById("containerPokemon");

document.getElementById("sortList").addEventListener("change", (e) => {
    container.innerHTML = "";

    if (e.target.value === "A-Z" || e.target.value === "Z-A" ) {
        const sortArray = sortData(data.pokemon, "name", e.target.value);
        for (let i = 0; i < data.pokemon.length; i++) {

        document.getElementById("containerPokemon").innerHTML += `
            <div id="${sortArray[i].num}" class="single-card">
            <h3 class="num-card">Nº ${sortArray[i].num}</h3>
            <span class="tooltip">Click to see information</span>
            <img class="img-card" src="https://www.serebii.net/pokemongo/pokemon/${sortArray[i].num}.png"></img>
            <div class="name-card"> ${sortArray[i].name} </div>
        </div> `
        }
    }

    if (e.target.value === "sortNumerically"){
        const sortArrayNum = sortData(data.pokemon, "num", e.target.value);
        for(let i=0; i<data.pokemon.length; i++) {

            document.getElementById("containerPokemon").innerHTML += `
            <div id="${sortArrayNum[i].num}" class="single-card">
            <h3 class="num-card">Nº ${sortArrayNum[i].num}</h3>
            <span class="tooltip">Click to see information</span>
            <img class="img-card" src="https://www.serebii.net/pokemongo/pokemon/${sortArrayNum[i].num}.png"></img>
            <div class="name-card"> ${sortArrayNum[i].name} </div>
        </div>
            `
        }
    }
});

// Probando el modal
function openModal(idCard){
    document.getElementById('name-info-pokemon').innerHTML = `N° ${data.pokemon[Number(idCard)-1].num} ${data.pokemon[Number(idCard)-1].name}`;
    document.getElementById('imagen-info-pokemon').innerHTML = `<img class="imagen-info-pokemon" src="https://www.serebii.net/pokemongo/pokemon/${data.pokemon[Number(idCard)-1].num}.png"></img>`;
    document.getElementById('height-info-pokemon').innerHTML = `Height: ${data.pokemon[Number(idCard)-1].size['height']}`;
    document.getElementById('weight-info-pokemon').innerHTML = `Weight: ${data.pokemon[Number(idCard)-1].size['weight']}`;
    document.getElementById('egg-info-pokemon').innerHTML = `Egg: ${data.pokemon[Number(idCard)-1].egg}`;
    document.getElementById('encounter-info-pokemon').innerHTML = `Encounter rate: ${data.pokemon[Number(idCard)-1].encounter['base-capture-rate']}`;
    document.getElementById('about-info-pokemon').innerHTML = `Description: ${data.pokemon[Number(idCard)-1].about}`;
  document.getElementById(idCard).addEventListener('click', ()=>{
    document.getElementById('modal').style.display = 'block';
  })
  document.getElementById('close').addEventListener('click', ()=>{
    document.getElementById('modal').style.display = 'none';
  })
}

function openInfo(){
  document.getElementById("containerPokemon").addEventListener('click', (e)=>{
    const replay = (index) =>{ 
      data.pokemon.find(buscando =>{ 
        buscando.img == index ? openModal(buscando.num) : null
      }) 
    };
    replay(e.target.getAttribute('src'));
  })
}
openInfo();

/* const pesoPesado = (obj) => {
    let sizePokemon = [];
    obj.map((array)=> {
        sizePokemon = array['size']['weight'];
        return console.log(sizePokemon);
    })

};
pesoPesado(data.pokemon) */
