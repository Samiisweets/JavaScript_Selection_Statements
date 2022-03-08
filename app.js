console.log("Hello World!\n==========\n");
console.log("Follow the steps in the README.md file to complete the exercises:\n==========\n");

// Exercise 1
let randomNum = Math.floor(Math.random() * 100) + 1;

let userInput = window.prompt("Enter a whole number between 1 and 100");

 if (randomNum === userInput) {
    alert(`Congrats! ${userInput} = ${randomNum}`);
} else if (randomNum < userInput) {
    alert(`${userInput} too high...`);
} else {
    alert(`${userInput} too low...`);
} 


// Exercise 2

let userInput2 = window.prompt("What is your favorite Chocolate Bar?");
switch(userInput2.toLocaleLowerCase()) {
    case "reeses":
        alert("Reeses were developed in 1923.");
        break;
    case "almond joy":
        alert("Almond Joy's were developed in 1919.");
        break;
    case "snickers":
        alert("Snickers were developed in 1930.");
        break;
    case "twix":
        alert("Twix were developed in 1967.");
        break;
    case "hershey bar":
        alert("Hershey's Milk Chocolate Bar was developed in 1900."); 
        break;
    case "three musketeers":
        alert("3 Musketeers were developed in 1932.");
        break;
    default:
        alert("Approx. 250 million Hershey Bars are sold annually");
}