let input = 5
let numberArray = []
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

// let input = 5
// let numberArray = []
// for (let i = 0; i <= input; i ++) {
//   if (input.toString().includes(3)) {
//     i= "Won't you be me neighbor!"
//   } else if (input.toString().includes(2) && !input.toString().includes(3)) {
//     i= "Boop!";
//   } else if (input.toString().includes(1) && !input.toString().includes(2) && !input.toString().includes(3)) {
//     i= "Beep!"
//   } else {
//     i
//   }
//   numberArray.push(i)
// };





//User Interface Logic
// $(document).ready(function() {
//   $("#game").submit(function(event) {
//     event.preventDefault();
//     let input = $("#numberInput").val();
//     if (input.toString().includes(3)) {
//       input= "Won't you be me neighbor!"
//     } else if (input.toString().includes(2) && !input.toString().includes(3)) {
//       input= "Boop!";
//     } else if (input.toString().includes(1) && !input.toString().includes(2) && !input.toString().includes(3)) {
//       input= "Beep!"
//     } else {
//       input
//     }
//   });
// });