//funcion indexof para buscar pokemones
export const search = document.getElementById("search");
export const btnSearch = document.getElementById("btnSearch");



//funcion filter para filtrar por tipo 
export const filterData = (data, condition) => {
  return data.filter((pokemon)=>
    (pokemon.type.indexOf(condition) !== -1));
  //return 'example';
};

//funcion sort -ordenar alfabéticamente y numericamente descendente
export const sortData = function(data, sortBy, sortOrder){
  let arrayOrdenado =[];
//ordenar alfabeticamente
  if (sortBy === "name" && sortOrder === "A-Z"){
    arrayOrdenado = [...data].sort(function(a,b){
      if (a.name>b.name) return 1;
      if (a.name<b.name) return -1;
      return 0;
    })}

  if (sortBy === "name" && sortOrder === "Z-A"){
    arrayOrdenado = [...data].sort(function(a,b){
      if (a.name > b.name) return -1;
      if (a.name < b.name) return 1;
      return 0;
    })}
//ordenar numericamente descendente
  if (sortBy === "num" && sortOrder === "sortNumerically"){
    arrayOrdenado = [...data].sort(function(a,b){
      if (a.num > b.num) return -1;
      if (a.num < b.num) return 1;
      
    })}
    return  arrayOrdenado;
    };

//función para calcular los 10 pokemones más altos (altura x m.)
export const compute = (dato) => {
  dato.sort((a,b) => {
    if(a.size.height > b.size.height) return -1
    return 1
  });
  return dato.slice(0,10);
};

export const typeColors = {
  electric: '#F9CF30',
  normal: '#AAA67F;',
  fire: '#F57D31',
  water: '#6493EB',
  ice: '#9AD6DF',
  rock: '#B69E31',
  flying: '#A891EC',
  grass: '#74CB48',
  psychic: '#FB5584',
  ghost: '#70559B',
  bug: '#A7B723',
  poison: '#A43E9E',
  ground: '#DEC16B',
  dragon: '#7037FF',
  steel: '#B7B9D0',
  fighting: '#C12239',
  dark: '75574C',
  fairy: 'E69EAC',
  default: '#2A1A1F',
};