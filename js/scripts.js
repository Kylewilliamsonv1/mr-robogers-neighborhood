$(document).ready(function() {
  $("#game").submit(function(event) {
    event.preventDefault();
    const numberArray = [1, 2, 3];
    let inputNumber=$("#submission").val()
    let number = []
    number.push(inputNumber.split(""))
    const inputNumberArray = number
    function inputBeep(number, numberArray) {
      for (let i = 0; i < numberArray.length; i ++) {
        number.push(numberArray[i])
        if (number === 1) {
          return "Beep!";
          console.log(number);
        } else if (number === 2) {
          return "Boop!"
        } else if (number === 3) {
          return "Won't you be me neighbor!";
        }
      }
    };
  });
});
