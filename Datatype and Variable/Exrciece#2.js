// Store birth year and future year
var birthYear = 1988;
var futureYear = 2026;

// Calculate possible ages
var currentYear = new Date().getFullYear();
var age1 = futureYear - birthYear;
var age2 = age1 - 1;

// Display ages in the console
console.log("If you were born in " + birthYear + ", then in " + futureYear + " you'll be " + age1 + " or " + age2 + " (depending on the month in " + futureYear + ").");