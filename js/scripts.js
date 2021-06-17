$(document).ready(function() {
  $("#game").submit(function(event) {
    event.preventDefault();
    userInput=$("#submission").val()    
    function arrayBuilder(userInput, numberArray) {
      for (let i = 0; i < numberArray.length; i ++) {
        if (i.tostring().includes("3")) {
          i = "Won't you be me neighbor!";
          return numberArray.push(i); 
        } else if (i.tostring().includes("2")) {
          i = "Boop!";
          return numberArray.push(i); 
        } else if (i.tostring().includes("1")) {
          i = "Beep!";
          return numberArray.push(i);
        } else {
          return numberArray.push(i);
        }
    };
  });
});