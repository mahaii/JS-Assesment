function numberRange(number) {
    if (number >= 0 && number <= 25) {
      console.log(number + ' is between 0 and 25');
    } else if (number >= 26 && number <= 100) {
      console.log(number + ' is between 26 and 100');
    } else if (number > 100) {
      console.log(number + ' is greater than 100');
    } else if (number < 0) {
      console.log(number + ' is less than 0');
    }
  }
  
  numberRange(25);   
  numberRange(75);  
  numberRange(125);  
  numberRange(-25);