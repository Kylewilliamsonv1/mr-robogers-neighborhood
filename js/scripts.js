//User Interface Logic
$(document).ready(function() {
  $("#game").submit(function(event) {
    event.preventDefault();
let input = $("#numberInput").val();
if (input.toString().includes(3)) {
  input= "Won't you be me neighbor!"
} else if (input.toString().includes(2) && !input.toString().includes(3)) {
  input= "Boop!";
} else if (input.toString().includes(1) && !input.toString().includes(2) && !input.toString().includes(3)) {
  input= "Beep!"
} else {
  input
}
console.log(input);



// let numberArray = []
// for (let i = 0; i <= input; i ++) {
//   if (i === 3) {
//     i = "Won't you be me neighbor!";
//   }
//   numberArray.push(i)
// };


  // if (i.toString().includes("3")) {
  //   i = "Won't you be me neighbor!";
  //   numberArray.push(i)
  // } else if (i === "2") {
  //   i = "Boop!";
  //   numberArray.push(i) 
  // } else if (i === "1") {
  //   i = "Beep!";
  //   numberArray.push(i)
  // } else {
  // }




  // } else if (i.toString().includes("2")) {
  //   i = "Boop!"; 
  // } else if (i.tostring().includes("1")) {
  //   i = "Beep!";
  // } else {







// user interface Logic______________________________________

  });
});