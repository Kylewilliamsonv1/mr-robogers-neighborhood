$(document).ready(function() {
  $("#game").submit(function(event) {
    event.preventDefault();
    let userInput = 5
    const numberArray = [1,2,3]
    function arrayBuilder(userInput, numberArray) {
      for (let i = 0; i < numberArray.length; i ++) {
        console.log(numberArray);
        if (i.tostring().includes("3")) {
          i = "Won't you be me neighbor!";
          numberArray.push(i); 
        } else if (i.tostring().includes("2")) {
          i = "Boop!";
          numberArray.push(i); 
        } else if (i.tostring().includes("1")) {
          i = "Beep!";
          numberArray.push(i);
        } else {
          numberArray.push(i);
        }
      };
    };
    arrayBuilder(userInput, numberArray);
  });
});