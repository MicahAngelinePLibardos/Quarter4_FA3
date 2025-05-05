function getValidNumber() {
  let input;
  while (true) {
    input = prompt("Enter a number:");
    if (!isNaN(input) && input.trim() !== "") {
      return parseInt(input, 10); // Convert string to integer
    }
    alert("Invalid input. Please enter a numerical value.");
  }
}


function generateShape(num) {
  let result = `Number inputted: ${num}<br>`;

  if (num % 2 !== 0) {
    
    for (let row = num; row >= 1; row--) {
      for (let col = 1; col <= num; col++) {
        result += row + " ";
      }
      result += "<br>";
    }
  } else {
    
    for (let row = num; row >= 1; row--) {
      for (let col = 1; col <= row; col++) {
        result += row + " ";
      }
      result += "<br>";
    }
  }

  return result;
}

// Main logic
const userInput = getValidNumber();
const shape = generateShape(userInput);
document.getElementById("output").innerHTML = shape;
