import { /* example, */ filterData } from '../src/data.js';


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

  //probando filter y map en arrays pequeños
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

  it('should return an array with elements', () => {
    expect(filterData(allPokemon, 'grass')).not.toBeUndefined();
  })

  it('should return an array with three elements', () => {
    expect(filterData(allPokemon, 'fire')).toHaveLength(3);
  })

/*   it('returns `data`', () => {
    expect(anotherExample()).toBe('OMG');
  }); */
});
