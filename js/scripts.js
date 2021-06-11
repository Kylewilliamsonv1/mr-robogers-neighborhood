$(document).ready(funciton() {
  $("formOne").submit(function(event) {
    const numberArray = [1, 2, 3];
    //const number = 2;
    let number=$("#submission").val()
    console.log(number)
    function inputBeep(number, numberArray) {
      for (let i = 0; i < numberArray.length; i ++) {
        if (number === 1) {
          return "Beep!";
        } else if (number === 2) {
          return "Boop!"
        } else if (number === 3) {
          return "Won't you be me neighbor!";
        }
      }
    }
  }
}
inputBeep(number, numberArray);