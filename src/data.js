// estas funciones son de ejemplo

export const filterData = (data, condition) => {
  return data.filter((pokemon)=>
    (pokemon.type.indexOf(condition) !== -1));
  //return 'example';
};

export const anotherExample = () => {
  return 'OMG';
};
