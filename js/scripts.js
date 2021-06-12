$(document).ready(function() {
  $("#game").submit(function(event) {
    event.preventDefault();
    let inputNumber=$("#submission").val()
    if (inputNumber === 1) {
      return "Beep!"
    } else if (inputNumber === 2) {
      return "Boop!"
    } else if (inputNumber === 3) {
      return "Won't you be me neighbor!";
    }
    console.log(inputNumber);


    //const conditionsArray = [1, 2, 3];
    let numberArray = [];
    inputNumberArray.forEach(function(element) {
      numberArray.concat(element *1);
    });
    numberArray;
  });
});






    // const inputNumberArray = number
    // function inputBeep(number, numberArray) {
    //   for (let i = 0; i < numberArray.length; i ++) {
    //     number.push(numberArray[i])
        
    //   }
