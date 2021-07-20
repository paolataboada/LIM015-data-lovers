import {  filterData, sortData, compute } from './data.js';

import data from './data/pokemon/pokemon.js';

//console.log(example, data);

/*let numero = data.pokemon[0]['num'];
let nombre = data.pokemon[0]['name'];
let imagen = data.pokemon[0]['img'];

document.getElementById("containerPokemon").innerHTML += "Aquí debe aparecer el pokemon" + numero + nombre + imagen; */

const originalData = data.pokemon
//esta función va a mostrar los pokemon
function elegirPokemon(){
    for(let i=0; i< data.pokemon.length; i++){
        //const typeColor = data.pokemon[i].type;
        //console.log(typeColor[0]);
        document.getElementById("containerPokemon").innerHTML += `
            <div id=${data.pokemon[i]['num']} class="single-card">
                <h3 class="num-card">Nº ${data.pokemon[i]['num']}</h3>
                <span class="tooltip">Click to see information</span>
                <img class="img-card" id="img-card" src="https://www.serebii.net/pokemongo/pokemon/${data.pokemon[i]['num']}.png"></img>
                <div class="name-card"> ${data.pokemon[i]['name']} </div>
            </div> `
    }
}
elegirPokemon();


//Funcionalidad para buscar pokemones por nombre
const search = document.getElementById("search");
const btnSearch = document.getElementById("btnSearch");
search.onkeyup= buscar;
btnSearch.onclick = buscar;
function buscar(){
    document.getElementById('filterList').selectedIndex = 0;
    document.getElementById('sortList').selectedIndex = 0;
    document.getElementById("containerPokemon").innerHTML ="";
    let textoMin = search.value.toLowerCase();
    for (let i=0; i<data.pokemon.length; i++){
      let dataMin= data.pokemon[i].name.toLowerCase();
      if(dataMin.indexOf(textoMin) !== -1){
        document.getElementById("containerPokemon").innerHTML += `
        <div id=${data.pokemon[i]['num']} class="single-card">
            <h3 class="num-card">Nº ${data.pokemon[i]['num']}</h3>
            <span class="tooltip">Click to see information</span>
            <img class="img-card" id="img-card" src="https://www.serebii.net/pokemongo/pokemon/${data.pokemon[i]['num']}.png"></img>
            <div class="name-card"> ${data.pokemon[i]['name']} </div>
        </div> `
        prueba();
      }
    }
  }

//muestra cards de los pokémon según el tipo seleccionado
let selectTypePokemon = (tipo) => {
    return filterData(originalData, tipo).map((pokemonType)=>{
        document.getElementById("containerPokemon").innerHTML += `
            <div id=${pokemonType['num']} class="single-card">
                <h3 class="num-card">Nº ${pokemonType['num']}</h3>
                <span class="tooltip">Click to see information</span>
                <img class="img-card" id="img-card" src="https://www.serebii.net/pokemongo/pokemon/${pokemonType['num']}.png"></img>
                <div class="name-card"> ${pokemonType['name']} </div>
            </div> `
    })
}

//evento seleccionar opciones de tipo (FILTRO) - resumida 09/07
document.getElementById('filterList').addEventListener('change', (event) => {
    document.getElementById('containerPokemon').innerHTML = ` `;
    document.getElementById('sortList').selectedIndex = 0;
    selectTypePokemon(event.target.value);
    prueba();
});

//interacción del boton ordenar
const container = document.getElementById("containerPokemon");

document.getElementById("sortList").addEventListener("change", (event) => {
    container.innerHTML = " ";
    document.getElementById('filterList').selectedIndex = 0;

    if (event.target.value === "A-Z" || event.target.value === "Z-A" ) {
        const sortArray = sortData(data.pokemon, "name", event.target.value); //appendChild
        
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

    if (event.target.value === "sortNumerically"){
        const sortArrayNum = sortData(data.pokemon, "num", event.target.value);
        for(let i=0; i<data.pokemon.length; i++) {

            //appendChild
            document.getElementById("containerPokemon").innerHTML += ` 
            <div id="${sortArrayNum[i].num}" class="single-card">
            <h3 class="num-card">Nº ${sortArrayNum[i].num}</h3>
            <span class="tooltip">Click to see information</span>
            <img class="img-card" src="https://www.serebii.net/pokemongo/pokemon/${sortArrayNum[i].num}.png"></img>
            <div class="name-card"> ${sortArrayNum[i].name} </div>
            </div> `
        }
    }
    prueba();
});

// Probando el modal
  function openModal (idCard){
      const infoCard=data.pokemon.find(pokeNum=>pokeNum.num == idCard);
       document.querySelector("#container-info-pokemon").innerHTML = `
            <div id="header-info-pokemon">
            <h3 id="name-info-pokemon">N° ${infoCard.num} ${infoCard.name}</h3>
            <h3 id="close">x</h3>
            </div>
            <div id="small-info-pokemon">
            <div id="imagen-info-pokemon">
                <img class="imagen-info-pokemon" src="https://www.serebii.net/pokemongo/pokemon/${infoCard.num}.png">
            </div>
            <div id="first-info-pokemon">
                <p id="height-info-pokemon">Height: ${infoCard.size.height}</p>
                <p id="weight-info-pokemon">Weight: ${infoCard.size.weight}</p>
                <p id="egg-info-pokemon">Egg: ${infoCard.egg} </p>
                <p id="encounter-info-pokemon">Encounter rate: ${infoCard.encounter['base-capture-rate']}</p>
            </div>
            </div>
            <article id="about-info-pokemon">Description: ${infoCard.about} </article>
       `
       document.getElementById('modal').style.display = 'block';
       document.getElementById('close').addEventListener('click', ()=>{
    document.getElementById('modal').style.display = 'none';
  });
}

const prueba = () => {
    document.querySelectorAll(".single-card").forEach(card => card.addEventListener('click', (e)=>{
        e.stopPropagation();
        //console.log(e.currentTarget.id);
        openModal(e.currentTarget.id)
        //console.log(e);
        //openModal(idCard);
    })
    );
}
prueba();

//boton de limpiar búsqueda y filtros
document.querySelector('.reset-search').addEventListener('click', ()=> {
    document.getElementById('containerPokemon').innerHTML = ` `;
    document.getElementById('search').value = ``;
    document.getElementById('filterList').selectedIndex = 0;
    document.getElementById('sortList').selectedIndex = 0;
    elegirPokemon(data.pokemon);
    prueba();
});

//botón para cargar el top 10 pokémon más pesados
const callCompute = () => {
    document.querySelector('.video-youtube').removeAttribute('src');
    document.getElementById('newContainer').style.visibility = 'hidden';
    document.getElementById('containerInformacion').style.display = 'none';
    document.getElementById('filterList').selectedIndex = 0;
    document.getElementById('sortList').selectedIndex = 0;
    document.getElementById('containerPokemon').innerHTML = ` `;
    document.getElementById('containerPokemon').innerHTML = `<h3 style='width: 100%; text-align: center; margin: 20px 0;'>Cool! Buddy, here you have the 10 highest pokemon in the region Kanto and Johto Regions! 📏</h3>`;
    return compute([...data.pokemon], 10).map((elemento)=>{
        document.getElementById('containerPokemon').innerHTML += `
            <div id=${elemento['num']} class="single-card">
                <h3 class="num-card">Nº ${elemento['num']}</h3>
                <span class="tooltip">Click to see information</span>
                <img class="img-card" id="img-card" src="https://www.serebii.net/pokemongo/pokemon/${elemento['num']}.png"></img>
                <div class="name-card"> ${elemento['name']} </div>
            </div> `
    prueba();
    });
}
document.getElementById('probandoTop10').addEventListener('click', callCompute)

//mostrando sección de How to be a pokemon master
document.getElementById('howTo').addEventListener('click', ()=>{
    document.querySelector('.video-youtube').setAttribute('src', 'https://www.youtube.com/embed/Jgh3ZgX6-vQ');
    document.getElementById('containerInformacion').style.display = 'none';
    document.getElementById('containerPokemon').innerHTML = ` `;
    document.getElementById('newContainer').style.visibility = 'visible';
})

//console.log(document.querySelectorAll(".single-card"))

        //openModal
/*         const replay = (index) =>{
        data.pokemon.find(buscando =>{
            buscando.img == index ? openModal(buscando.num) : null
        })
        };
        replay(e.target.getAttribute('src'));
    })
 */