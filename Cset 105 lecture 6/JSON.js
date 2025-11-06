// Example JavaScript file containing JSON-like data
const users = [
  { id: 1, name: 'Byron', email: 'bmoney19927@gmail.com' },
  { id: 2, name: 'Ross', email: 'Bross0284@stevenscollege.edu' },
  { id: 3, name: 'Trump', email: 'Trumpthepresident@gmail.com' }
];
///////////
const person = {
  firstName: 'Byron',
  lastName: 'Ross jr',
  age: 19
};

console.log('users (JS object):', users);
console.log('users (JSON):', JSON.stringify(users, null, 2));
console.log('person:', person);

