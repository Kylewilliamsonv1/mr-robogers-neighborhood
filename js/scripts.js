function inputBeep(number, element)
  let element = []
  let number = $(#submission).val()
  for (let i = 0; i < number.length; i ++) {
    if (number === 1) {
      return "Beep!"
    } else if (number === 2) {
      return "Boop!"
    } else if (number === 3) {
      return "Won't you be me neighbor!"
    }
  }