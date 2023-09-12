function extractDigits(number) {
    let remainingValue = number;
    while (remainingValue > 0) {
      const digit = remainingValue % 10;
      remainingValue = Math.floor(remainingValue / 10);
      console.log(digit);
    }
  }

  extractDigits(12345);
