import { /* example, */ filterData, compute } from '../src/data.js';


/* describe('example', () => {
  it('is a function', () => {
    expect(typeof example).toBe('function');
  });

  it('returns `example`', () => {
    expect(example()).toBe('example');
  });
});
 */

describe('filterData', () => {
  it('is a function', () => {
    expect(typeof filterData).toBe('function');
  });

  const allPokemon = [
    {name: 'bulbasaur', num: '001', type: ['grass', 'poison'],},
    {name: 'ivysaur', num: '002', type: ['grass', 'poison'],},
    {name: 'venusaur', num: '003', type: ['grass', 'poison'],},
    {name: 'charmander', num: '004', type: ['fire'],},
    {name: 'charmeleon', num: '005', type: ['fire'],},
    {name: 'charizard', num: '006', type: ['fire', 'flying'],},
    {name: 'squirtle', num: '007', type: ['water'],},
    {name: 'wartortle', num: '008', type: ['water'],},
    {name: 'blastoise', num: '009', type: ['water'],},
  ]
  const waterType = [
    {name: 'squirtle', num: '007', type: ['water'],},
    {name: 'wartortle', num: '008', type: ['water'],},
    {name: 'blastoise', num: '009', type: ['water'],},
  ]

  it('should return an array with elements', () => {
    expect(filterData(allPokemon, 'grass')).not.toBeUndefined();
  })

  it('should return an array with three elements', () => {
    expect(filterData(allPokemon, 'fire')).toHaveLength(3);
  })

  it('should return an object with information about pokemon `water` type', () => {
    expect(filterData(allPokemon, 'water')).toEqual(waterType);
  })

/*   it('returns `data`', () => {
    expect(anotherExample()).toBe('OMG');
  }); */
});

describe('compute', () => {
  it('is a function', () => {
    expect(typeof compute).toBe('function');
  });

  const pokemonWithSizes = [
    {"num": "241", "name": "miltank", "size": {"height": "1.19 m", "weight": "75.5 kg"}},
    {"num": "242", "name": "blissey", "size": {"height": "1.50 m", "weight": "46.8 kg"}},
    {"num": "243","name": "raikou", "size": {"height": "1.91 m", "weight": "178.0 kg"}},
    {"num": "244", "name": "entei", "size": {"height": "2.11 m", "weight": "198.0 kg"}},
    {"num": "245", "name": "suicune", "size": {"height": "2.01 m", "weight": "187.0 kg"}},
    {"num": "246",  "name": "larvitar", "size": {"height": "0.60 m", "weight": "72.0 kg"}},
    {"num": "247", "name": "pupitar", "size": {"height": "1.20 m", "weight": "152.0 kg"}},
    {"num": "248", "name": "tyranitar", "size": {"height": "2.00 m", "weight": "202.0 kg"}},
    {"num": "249", "name": "lugia", "size": {"height": "5.21 m", "weight": "216.0 kg"}},
    {"num": "250", "name": "ho-oh", "size": {"height": "3.80 m", "weight": "199.0 kg"}}
  ]

  const OrdererSizesByHeigth = [
    {"num": "249", "name": "lugia", "size": {"height": "5.21 m", "weight": "216.0 kg"}},
    {"num": "250", "name": "ho-oh", "size": {"height": "3.80 m", "weight": "199.0 kg"}},
    {"num": "244", "name": "entei", "size": {"height": "2.11 m", "weight": "198.0 kg"}},
    {"num": "245", "name": "suicune", "size": {"height": "2.01 m", "weight": "187.0 kg"}},
    {"num": "248", "name": "tyranitar", "size": {"height": "2.00 m", "weight": "202.0 kg"}},
    {"num": "243","name": "raikou", "size": {"height": "1.91 m", "weight": "178.0 kg"}},
    {"num": "242", "name": "blissey", "size": {"height": "1.50 m", "weight": "46.8 kg"}},
    {"num": "247", "name": "pupitar", "size": {"height": "1.20 m", "weight": "152.0 kg"}},
    {"num": "241", "name": "miltank", "size": {"height": "1.19 m", "weight": "75.5 kg"}},
    {"num": "246",  "name": "larvitar", "size": {"height": "0.60 m", "weight": "72.0 kg"}},
  ]

  const firstGreaterHeight = [
    {"num": "249", "name": "lugia", "size": {"height": "5.21 m", "weight": "216.0 kg"}},
  ]

  it('should return an object with 3 elements', () => {
    expect(compute(pokemonWithSizes, 3)).toHaveLength(3);
  })

  it('should return an object with the first greater height value', () => {
    expect(compute(pokemonWithSizes, 1)).toEqual(firstGreaterHeight);
  })

  it('should return an object sort by `size:heigth`', () => {
    expect(compute(pokemonWithSizes, 10)).toEqual(OrdererSizesByHeigth);
  })

});
