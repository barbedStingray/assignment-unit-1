console.log('hello world!');

// variables
// let is used to declare a variable
// firstname is the name of our variable
// Ben is the value that we have assigned to the variable
let firstName = 'Ben';
console.log(firstName);

let lastName = 'Rehmann'
console.log(lastName);
let fullName = firstName + ' ' + lastName;
console.log(fullName);

// firstname, lastname and fullname are all STRINGS (text).
// variables can also be NUMBERS
// NUMBERS are different from STRINGS

let temperature = 80;
console.log(temperature);

// BOOLEAN variable type
let loggedIn = true;

// Console log with a string and value
console.log('I have no memory of this place', loggedIn);

let isRaining = false;

// (should be either true or false)
// Conditional statement
if (loggedIn) {
    // if (true) will run this code
    console.log('Welcome', fullName);
} else {
    console.log('Welcome, Guest!')
}

// Compound Conditional
// && which is AND
// || which is OR

// true && false will be false
// true && true will be true
// true || or false will be true

// if the temperature is less than 85 
// and it's not(!) raining. lets go for a walk.

if (temperature < 85 && !isRaining) {
    console.log('Go for a walk!');
} else if (isRaining) {
    console.log('Bring an umbrella');
} else {
    console.log('Better to stay inside');
}

// Adding to the existing temperature
temperature = temperature + 1;
temperature += 1; // same thing
temperature ++; // also same, but more confusing

// works will all others

temperature -= 2; // subtract 2
temperature *= 2; // multiply 2
console.log('it is now', temperature);

// === checks for equality
// = will change the value and always return true
if (temperature === 162) {
    console.log('it is 162!');
}
