import {choice, remove} from './helpers'
import foods from './foods'

const randFruit = choice(foods);  // get random fruit

console.log(`I'd like one ${randFruit} please`);
console.log(`Here you go: ${randFruit}`);

remove(foods, randFruit);  // remove fruit that is given
console.log('Delicious, may I have another');
console.log('Sorry, limit 1 per customer');
