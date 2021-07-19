import { search, btnSearch, filterData, sortData, compute } from './data.js';

import data from './data/pokemon/pokemon.js';

//console.log(example, data);

const originalData = data.pokemon;
const containerPokemon = document.getElementById("containerPokemon");
const filterList = document.getElementById('filterList');
const sortList = document.getElementById('sortList');

//Esta función crea y MUESTRA los pokémon cards
function loadedData(){
    for(let i=0; i< originalData.length; i++){
        containerPokemon.innerHTML += `
            <div id=${originalData[i]['num']} class="single-card">
                <h3 class="num-card">Nº ${originalData[i]['num']}</h3>
                <span class="tooltip">Click to see information</span>
                <img class="img-card" id="img-card" src="https://www.serebii.net/pokemongo/pokemon/${originalData[i]['num']}.png"></img>
                <div class="name-card"> ${originalData[i]['name']} </div>
            </div> `
    }
}
loadedData();

//Funcionalidad para buscar pokemones por nombre
search.onkeyup= buscar;
btnSearch.onclick = buscar;
function buscar(){
    filterList.selectedIndex = 0;
    sortList.selectedIndex = 0;
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
        openModal();
      }
    }
  }

//Esta función crea los pokémon cards según el tipo seleccionado
const selectTypePokemon = (typeSelected) => {
    return filterData(originalData, typeSelected).map((pokemonType)=>{
        containerPokemon.innerHTML += `
            <div id=${pokemonType['num']} class="single-card">
                <h3 class="num-card">Nº ${pokemonType['num']}</h3>
                <span class="tooltip">Click to see information</span>
                <img class="img-card" id="img-card" src="https://www.serebii.net/pokemongo/pokemon/${pokemonType['num']}.png"></img>
                <div class="name-card"> ${pokemonType['name']} </div>
            </div> `
    })
}
//Este evento selecciona un value de 'filterList', luego invoca la función para MOSTRAR los pokémon cards
filterList.addEventListener('change', (e) => {
    sortList.selectedIndex = 0;
    containerPokemon.innerHTML = ` `;
    selectTypePokemon(e.target.value);
    openModal();
});

//interacción del boton ordenar
const container = document.getElementById("containerPokemon");

document.getElementById("sortList").addEventListener("change", (e) => {
    container.innerHTML = " ";
    filterList.selectedIndex = 0;

    if (e.target.value === "A-Z" || e.target.value === "Z-A" ) {
        const sortArray = sortData(data.pokemon, "name", e.target.value); //appendChild
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
    openModal();
});

//Esta función escribe en los elementos del doc la información del pokemon seleccionado - MODAL
function createModal(idCard){
    const newInfo = originalData.find(fin => fin.num == idCard);//crear variable y guardar array para aplicar método find();
        document.getElementById('name-info-pokemon').innerHTML = `N° ${newInfo.num} ${newInfo.name}`;
        document.getElementById('imagen-info-pokemon').innerHTML = `<img class="imagen-info-pokemon" src="https://www.serebii.net/pokemongo/pokemon/${newInfo.num}.png"></img>`;
        document.getElementById('height-info-pokemon').innerHTML = `Height: ${newInfo.size['height']}`;
        document.getElementById('weight-info-pokemon').innerHTML = `Weight: ${newInfo.size['weight']}`;
        document.getElementById('egg-info-pokemon').innerHTML = `Egg: ${newInfo.egg}`;
        document.getElementById('encounter-info-pokemon').innerHTML = `Encounter rate: ${newInfo.encounter['base-capture-rate']}`;
        document.getElementById('about-info-pokemon').innerHTML = `Description: ${newInfo.about}`;
    document.getElementById('modal').style.display = 'block';
    document.getElementById('close').addEventListener('click', ()=>{
        document.getElementById('modal').style.display = 'none';
    })
}

//Esta función permite abrir el modal con la información
const openModal = () => {
    document.querySelectorAll(".single-card").forEach(card => card.addEventListener('click', (e)=>{
        e.stopPropagation();
        //console.log(e.currentTarget.id);
        createModal(e.currentTarget.id)
    })
    );
}
openModal(); //Se invoca varias veces

//Botón para limpiar búsqueda y filtros
document.querySelector('.reset-search').addEventListener('click', ()=> {
    containerPokemon.innerHTML = ` `;
    document.getElementById('search').value = ``;
    filterList.selectedIndex = 0;
    sortList.selectedIndex = 0;
    loadedData(originalData);
    openModal();
});

//Botón para cargar el top 10 pokémon con mayor altura
const callCompute = () => {
    document.querySelector('.video-youtube').removeAttribute('src');
    document.getElementById('newContainer').style.visibility = 'hidden';
    document.getElementById('searchAreaContainer').style.display = 'none';
    filterList.selectedIndex = 0;
    sortList.selectedIndex = 0;
    containerPokemon.innerHTML = ` `;
    containerPokemon.innerHTML = `<h3 style='width: 100%; text-align: center; margin: 20px 0;'>Cool! Buddy, here you have the 10 highest pokemon in the region Kanto and Johto Regions! 📏</h3>`;
    return compute([...originalData], 10).map((elemento)=>{
        containerPokemon.innerHTML += `
            <div id=${elemento['num']} class="single-card">
                <h3 class="num-card">Nº ${elemento['num']}</h3>
                <span class="tooltip">Click to see information</span>
                <img class="img-card" id="img-card" src="https://www.serebii.net/pokemongo/pokemon/${elemento['num']}.png"></img>
                <div class="name-card"> ${elemento['name']} </div>
            </div> `
    openModal();
    });
}
document.getElementById('topTenHeight').addEventListener('click', callCompute)

//mostrando sección de How to be a pokemon master
document.getElementById('howToBePokemonMaster').addEventListener('click', ()=>{
    document.querySelector('.video-youtube').setAttribute('src', 'https://www.youtube.com/embed/Jgh3ZgX6-vQ');
    document.getElementById('searchAreaContainer').style.display = 'none';
    containerPokemon.innerHTML = ` `;
    document.getElementById('newContainer').style.visibility = 'visible';
})