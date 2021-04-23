var num1;
var num2;
var validate;
var message;


// 1. Attach this file -- math.js -- to the index.html file using a <script> tag

// 2. Add an alert to announce the program with a message like "Let's do some math!"
function welcomeMessage(){
alert(`Let's do some math!`);
getInput();
}


// 3. Create a variable and use the prompt() method to collect a number from a visitor
// 4. Convert that value from a string to a floating point number
// 5. Repeat steps 3 and 4 to create a second variable and collect a second number

/**
* Get user input
* @type {string} num1 - user's first inputted number
* @type {string} num2 - user's second inputted number
*
*/
function getInput() {

  num1 = prompt("Enter your first number");
  num2 = prompt("Enter your first number");
  
  validate = validateInput(num1, num2);
  
  num1 = stringToNumber(num1); // pass argument to function, set variable to returned value
  num2 = stringToNumber(num2); // pass argument to function, set variable to returned value

  // If validateInput() returns true, call printMessage. If false, don't call and thus prevent duplicate output.
  if (validate) {
  printMessage(num1, num2);
  }
}


/**
* Validate user input
* @param {string} num1 - user's first inputted number
* @param {string} num2 - user's second inputted number
* @return {boolean} - return true is input successfully passes validation
*/
function validateInput(num1, num2) {

  if( isNaN(num1) || isNaN(num2) ) {
  
  alert(`One or more of your entries is not a Number
          Please try again`);
    welcomeMessage();
    return false;
  
    // Cannot divide by 0, so don't let num2 be 0
  } else if (num2 == 0) {

      alert(`OYou cannot divide a number by zero
          Please try again`);
    welcomeMessage();
    return false;
  }
  return true;
}


/**
* Turn a string to a float
* @param {string} convert - string to convert to float
* @type {string} convert - set float value
* @return {number} convert - return the float
*/
function stringToNumber(convert){
  convert = parseFloat(convert);
  return convert;
}


// 6. Create a new variable -- message -- which you'll use to build
//    a complete message to print to the document
//    Start by creating a string that includes <h1> tags as well
//    and the two input numbers. The string should look something like this:
//    "<h1>Math  with the numbers 3 and 4</h1>" where the two numbers are
//    the values input from the user. Use string concatenation to create this
//    and make sure you actually perform the math on the values by 
//    using the + symbol to add their values together
// 7. Add another string to the message variable. 
//    The string should look something like this after concatenation:
//    "3 + 4 = 7"
// 8. Add a linebreak tag -- <br> -- to the message variable
// 9. Continue to add to the message variable to include strings
//    demonstrating multiplication, division and subtraction
//    For example:
//    "3 * 4 = 12"
//    "3 / 4 = 0.75"
//    "3 - 4 = -1"
// 10. Use the document.write() method to print the message variable 
//     to the web page. Open the finished.png file in this workspace
//     to see what the completed output should look like



/**
* Print user numbers with math answers 
* @param {number} num1 - user's first number
* @param {number} num2 - user's second number
* @type {string} message - HTML message to print to user
*/
function printMessage(num1, num2) {

  message = `
  <h1>Math with the numbers ${num1} and ${num2}</h1>
  <p>${num1} + ${num2} = ${num1 + num2}</p>
  <p>${num1} * ${num2} = ${num1 * num2}</p>
  <p>${num1} / ${num2} = ${num1 / num2}</p>
  <p>${num1} - ${num2} = ${num1 - num2}</p>
  `;

  document.write(message);
}




// Begin program
welcomeMessage();





