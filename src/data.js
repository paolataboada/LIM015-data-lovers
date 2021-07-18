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

//función para calcular los n=10 pokemones más altos (altura x m.)
export const compute = (dato, n) => {
  dato.sort((a,b) => {
    if(a.size.height > b.size.height) return -1
    return 1
  });
  return dato.slice(0,n);
};