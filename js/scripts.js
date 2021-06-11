function inputBeep(#submission)
  let number = $(#submission).val()
  for (let i = 0; i < number.length; i ++) {
    if (number === 1) {
      return "Beep!"
    }
  }