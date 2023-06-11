/**
 *    Maps:-
 *      - Maps are data structure that we can use to map values to keys.
 *      - Maps are iterable. each key is a function that takes a value and returns a corresponding value for that key.
 * 
 *    what is iterable ?
 *      - iterable means we can loop over it.
 *
 */

const currency_map = {
  'United States': 'USD',
  India: 'Rupee',
};

const currency = currency_map['United States']; // ["India"] is a key and "Rupee" is a value. this [] because key is a string so we need to use [] to access the value of the key.
const currency1 = currency_map.India; // this is also a way to access the value of the key.
const currency2 = currency_map['India']; // this is also a way to access the value of the key. this [] is optional because key is not a string.

console.log('currency', currency);

console.log('currency1', currency1);

console.log('currency2', currency2);

const currencyies = [
  { name: 'United States', currency: 'USD' },
  { name: 'India', currency: 'Rupee' },
];

const currencyy = currencyies.find((c) => 'India' === c.name);
console.log(currencyy); // {name: "India", currency: "Rupee"}

// Creating a Basic Map
const map = new Map();
console.log('map', map); // Map(0) {}
// this map does not have any entries, empty entries.
// if we want to create a new entry then we have to create arrays of array. means arrays contain all the different entries & each entries itself an array.
const map1 = new Map([
  // ["key", "value"]
  ['United States', 'USD'],
  [false, 'Rupee'],
]);
console.log('map1', map1); // Map(2) {"United States" => "USD", "India" => "Rupee"}

/*** Map has difference things with Object. Map become more powerful
   1. Map can use any type of key. but in Object key must be string 
        we can use anything as a key inside an Map. 
      Example
        const map1 = new Map([
          ["United States", "USD"],
          [{a : 1}, "Rupee"]
        ]);
        
*/

// USECASE of Map :- Mapping between user & user entities
const user = {
  name: 'John Doe',
};

const map2 = new Map([
  [user, { age: 25 }], // mapping into user object John to the object details { age:25 },
]);
console.log('map2', map2); // map from user to user details. Map(1) {{…} => {…}}
// if we want to get the user details then we have to use get method.
console.log('map2.get', map2.get(user)); // passing the user object as a key. & get the user details. {age: 25}

// if we do same thing with object properties without map.
const user1 = {
  name: 'John Doe',
  age: 25,
};
console.log('user1', user1); // {name: "John Doe", age: 25}

// ---------------------------------------------
// Map
const map3 = new Map([
  ['United States', 'USD'],
  ['India', 'Rupee'],
  ['UK', 'Pound'],
]);

// Looping on maps
map3.forEach((value, key) => {
  console.log('kv', key, value);
});

// Obj
const obj = {
  'United States': 'USD',
  India: 'Rupee',
  UK: 'Pound',
};

// obj.forEach((value, key) => {
//   console.log("obj", key, value);    // obj.forEach is not a function
// });

// looping through objects
Object.entries(obj).forEach(([key, value]) => {
  console.log('obj', key, value);
});

//----------------------------------------------------------------
// Object deoes not have a size property. but map has a size property.
console.log('map3.size', map3.size); // 3
console.log('obj', Object.entries(obj).length); // 3

//************************************************************************************** */
// different methods of map like getva;ies.

console.log('map3.get', map3.get('India')); // whatever value we want to print we have to pass the key. simple.
console.log('map3.set', map3.set('Australia', 'AUD')); // whatever value we want to set we have to pass the key & value.
console.log('map3.has', map3.has('India')); // if we want to check if the map has a particular key or not.
console.log('map3.delete', map3.delete('Australia')); // if we want to delete a particular key from the map.

// Question
const items = [
  { id: 1, name: 'Australia', price: 100 },
  { id: 2, name: 'Canada', price: 200 },
  { id: 3, name: 'China', price: 300 },
];

function getItems (id) {
  return items.find((item) => item.id === id);
}

console.log('getItems 1', getItems(1)); // {id: 1, name: "Australia", price: 100}
 
// convert this into Map
const itemsMap = new Map([
  [1, { name: 'Australia', price: 100 }],
  [2, { name: 'Canada', price: 200 }],
  [3, { name: 'China', price: 300 }],
]);

function getItemsMap (id) {
  return itemsMap.get(id);
}

console.log('getItemsMap 2', getItemsMap(2)); // {name: "Australia", price: 100}
