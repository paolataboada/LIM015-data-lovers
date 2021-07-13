// estas funciones son de ejemplo

export const filterData = (data, condition) => {
  return data.filter((pokemon)=>
    (pokemon.type.indexOf(condition) !== -1));
  //return 'example';
};

/* export const anotherExample = () => {
  return 'OMG';
}; */

//funcion sort -ordenar alfabéticamente y numericamente descendente
export const sortData = function(data, sortBy, sortOrder){
  let arrayOrdenado =[];
//ordenar alfabeticamente
  if (sortBy === "name" && sortOrder === "A-Z"){
    arrayOrdenado = data.sort(function(a,b){
      if (a.name>b.name) return 1;
      if (a.name<b.name) return -1;
      return 0;
    })}

  if (sortBy === "name" && sortOrder === "Z-A"){
    arrayOrdenado=data.sort(function(a,b){
      if (a.name > b.name) return -1;
      if (a.name < b.name) return 1;
      return 0;
    })}
//ordenar numericamente descendente
  if (sortBy === "num" && sortOrder === "sortNumerically"){
    arrayOrdenado = data.sort(function(a,b){
      if (a.num > b.num) return -1;
      if (a.num < b.num) return 1;
      
    })}
    return  arrayOrdenado;
    };