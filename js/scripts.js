//Business Logic________________________
function roboLanguage (input) {
  let numberArray = [];
  for (let i = 0; i <= input; i ++) {
    if (i.toString().includes(3)) {
      numberArray.push("Won't you be me neighbor!");
    } else if (i.toString().includes(2)) {
      numberArray.push("Boop!");
    } else if (i.toString().includes(1)) {
      numberArray.push("Beep!");
    } else {
      numberArray.push(i);
    }
  };
  return numberArray;
}

//User Interface Logic_________________________
$(document).ready(function() {
  $("#game").submit(function(event) {
    event.preventDefault();
    const input = $("#numberInput").val();
    result = roboLanguage(input)
    $("ul#user").text(result)
  });
});  
