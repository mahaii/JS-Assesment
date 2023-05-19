function greetFriends(name1, name2, name3) {
    console.log(`Welcome ${name1}, ${name2}, ${name3}.`);
  }
  
  function calculateAge(birthYear) {
    var currentYear = new Date().getFullYear();
    var age = currentYear - birthYear;
    return age;
  }
  
  function greetFriendsWithAge(name1, name2, name3, birthYear1, birthYear2, birthYear3) {
    var age1 = calculateAge(birthYear1);
    var age2 = calculateAge(birthYear2);
    var age3 = calculateAge(birthYear3);
  
    console.log(`Welcome ${name1}, you are ${age1}.`);
    console.log(`Welcome ${name2}, you are ${age2}.`);
    console.log(`Welcome ${name3}, you are ${age3}.`);
  }
  
  var friend1 = "Mahesh";
  var friend2 = "Aniket";
  var friend3 = "Abhay";
  
  greetFriends(friend1, friend2, friend3);
  
  var birthYear1 = 2004;
  var birthYear2 = 2001;
  var birthYear3 = 2000;
  
  greetFriendsWithAge(friend1, friend2, friend3, birthYear1, birthYear2, birthYear3);