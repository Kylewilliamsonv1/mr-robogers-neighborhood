$(document).ready(function() {
  $("#game").submit(function(event) {
    event.preventDefault();
    let numberArray = [];
    inputNumber = $("#submission").val();
    for (let i = 0; i < numberArray.length; i ++) {
      if (inputNumber === 1) {
        return "Beep!"
      } else if (inputNumber === 2) {
        return "Boop!"
      } else if (inputNumber === 3) {
        return "Won't you be me neighbor!";
      }
      console.log(inputNumber);
      console.log(numberArray);
    }



  });
});






    // const inputNumberArray = number
    // function inputBeep(number, numberArray) {
    //   for (let i = 0; i < numberArray.length; i ++) {
    //     number.push(numberArray[i])
        
    //   }
