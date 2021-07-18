import { search, btnSearch, filterData, sortData, compute } from './data.js';

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
document.getElementById('filterList').addEventListener('change', (e) => {
    document.getElementById('containerPokemon').innerHTML = ` `;
    document.getElementById('sortList').selectedIndex = 0;
    selectTypePokemon(e.target.value);
    prueba();
});

//interacción del boton ordenar
const container = document.getElementById("containerPokemon");

document.getElementById("sortList").addEventListener("change", (e) => {
    container.innerHTML = " ";
    document.getElementById('filterList').selectedIndex = 0;

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
    prueba();
});

// Probando el modal
function openModal(idCard){
    const newInfo = data.pokemon.find(fin => fin.num == idCard);//crear variable y guardar array para aplicar método find();
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