const nums = [1, 2, 3];

for(let i = nums.length-1; i>= 0; i--) {
    console.log(nums[i]);
}
console.log(nums);

// ------------

const spellingWord = 'hippopotamus';
for (const char of spellingWord) {
  console.log(char);
}

// ------------

const pokemonList = ['Pikachu', 'Charizard', 'Squirtle', 'Yoshi', 'Snorlax'];

// Write your code below
for (const pokemon of pokemonList) {
  if (pokemon === 'Yoshi') {
    continue;
  }
  console.log(`You caught a ${pokemon}!`)
}