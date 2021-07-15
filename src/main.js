import { search, btnSearch, filterData, sortData } from './data.js';

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
btnSearch.onclick = function(){
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
    selectTypePokemon(e.target.value);
    prueba();
});

//interacción del boton ordenar
const container = document.getElementById("containerPokemon");

document.getElementById("sortList").addEventListener("change", (e) => {
    container.innerHTML = " ";
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
    document.getElementById('filterList').selectedIndex = 0;
    document.getElementById('sortList').selectedIndex = 0;
    elegirPokemon(data.pokemon);
    prueba();
});


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


/* const pesoPesado = (obj) => {
    let sizePokemon = [];
    obj.map((array)=> {
        sizePokemon = array['size']['weight'];
        return console.log(sizePokemon);
    })

};
pesoPesado(data.pokemon) */
