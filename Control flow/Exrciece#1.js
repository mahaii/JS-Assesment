function businessHours(dayNumber, hourNumber) {
    if (dayNumber >= 1 && dayNumber <= 5 && hourNumber >= 9 && hourNumber <= 18) {
      console.log("It is business hours.");
      return true;
    } else {
      console.log("It is not business hours.");
      return false;
    }
  }
  
  function getDayNumber(janFirstDayNumber, yearDayNumber) {
    return (janFirstDayNumber + yearDayNumber) % 7;
  }
  
  function isBusinessHours(yearDayNumber, hourNumber) {
    const dayNumber = getDayNumber(0, yearDayNumber);
    return businessHours(dayNumber, hourNumber);
  }
  
  const yearDayNumber = 120; 
  const hourNumber = 14; 
  
  const isBusiness = isBusinessHours(yearDayNumber, hourNumber);
  console.log("Is it business hours?", isBusiness);