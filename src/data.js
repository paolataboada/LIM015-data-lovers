//funcion filter para filtrar por tipo 
export const filterData = (data, condition) => {
  return data.filter((pokemon)=>
    (pokemon.type.indexOf(condition) !== -1));
  //return 'example';
};

//funcion sort -ordenar alfabéticamente y numericamente descendente
export const sortData = (data, sortBy, sortOrder) => {
  let arrayOrdenado =[];
//ordenar alfabeticamente de la A-Z y Z-A
  if (sortBy === "name" && sortOrder === "A-Z"){
    arrayOrdenado = [...data].sort((a,b)=>{
      if (a.name > b.name) return 1;
      return -1
    })}    

  if (sortBy === "name" && sortOrder === "Z-A"){
    arrayOrdenado = [...data].sort((a,b)=>{
      if (a.name > b.name) return -1;
      return 1
    })}
//ordenar numericamente descendente 251-1
  if (sortBy === "num" && sortOrder === "sortNumerically"){
    arrayOrdenado = [...data].sort((a,b)=>{
      if (a.num > b.num) return -1;      
    })}
    return  arrayOrdenado;
    };

//Función para calcular los n=10 pokemon más altos (altura en m.)
export const greaterHeight = (data, n) => {
  let resultData = [...data].sort((a,b) => {
    let aHeight = a.size.height;
    let bHeight = b.size.height;
    if( Number(aHeight.split(" ")[0]) > Number(bHeight.split(" ")[0]) ) return -1
    return 1
  });
  return resultData.slice(0,n);
};


//Función para calcular los n=10 pokemon más pesados (peso en kg.)
export const greaterWeight = (data, n) => {
  let resultData2 = [...data].sort((a,b) => {
    let aWeight = a.size.weight;
    let bWeight = b.size.weight;
    if( Number(aWeight.split(" ")[0]) > Number(bWeight.split(" ")[0]) ) return -1
    return 1
  });
  return resultData2.slice(0,n);
};