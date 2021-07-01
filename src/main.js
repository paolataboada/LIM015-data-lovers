import { example } from './data.js';

import data from './data/pokemon/pokemon.js';

//esta función va a mostrar los pokemon
/*function elegirPokemon(data){
    for(let i=0; i< data.pokemon.length; i++){
        document.getElementById("container-pokemon").innerHTML += `
        <div class="single-card">
            <header class="num-card"> ${ data.pokemon[i]['num'] } </header>
            <img scr="https://www.serebii.net/pokemongo/pokemon/${data.pokemon[i]['num']}.png" alt="${data.pokemon[i].img}">
            <header class="name-card"> ${ data.pokemon[i]['name'] } </header>
        </div>`
    }
}
elegirPokemon(data);*/

// eslint-disable-next-line no-console
console.log(example, data);

//esta función va a mostrar los pokemon
function elegirPokemon(data){
    for(let i=0; i< data.pokemon.length; i++){
        document.getElementById("container-pokemon").innerHTML +=`
        <div class="single-card">
            <header class="num-card">${data.pokemon[i]['num']}</header>
            <img class="img-card" src="https://www.serebii.net/pokemongo/pokemon/${data.pokemon[i]['num']}.png"></img>
            <footer class="name-card"> ${data.pokemon[i]['name']} </footer>
        </div>`
    }
}
elegirPokemon(data);