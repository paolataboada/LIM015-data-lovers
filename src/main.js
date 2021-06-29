import { example } from './data.js';

import data from './data/pokemon/pokemon.js';

//console.log(example, data);

/*let numero = data.pokemon[0]['num'];
let nombre = data.pokemon[0]['name'];
let imagen = data.pokemon[0]['img'];

document.getElementById("container-pokemon").innerHTML += "Aquí debe aparecer el pokemon" + numero + nombre + imagen; */

//esta función va a mostrar los pokemon
function elegirPokemon(data){
    for(let i=0; i< data.pokemon.length; i++){
        document.getElementById("container-pokemon").innerHTML = `
        <div class="single-card">
            <header class="num-card"> ${ data.pokemon[i]['num'] } </header>
            <img scr="https://www.serebii.net/pokemongo/pokemon/${data.pokemon[i]['num']}.png" alt="${data.pokemon[i].img}">
            <header class="name-card"> ${ data.pokemon[i]['name'] } </header>
            <img src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/${data.pokemon[i].num}.png" alt="${data.pokemon[i].img}">
        </div> `
    }
}
elegirPokemon(data);