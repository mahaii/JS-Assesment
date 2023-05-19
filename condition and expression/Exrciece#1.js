var names = ["Maria", "Antony", "Joy", "Juan"];

// Function to insert a name to the end of the list
function insertName(name) {
  names.push(name);
}

// Add your own name to the end of the list
insertName("Your Name");

console.log("Updated list with added name:", names);

// Function to check if a name is in the list
function checkName(name) {
  return names.includes(name);
}

console.log("Checking if 'Joy' is in the list:", checkName("Joy"));
console.log("Checking if 'John' is in the list:", checkName("John"));

function compareLists(list) {
  var commonNames = names.filter(function (name) {
    return list.includes(name);
  });
  return commonNames;
}

var otherNames = ["Maria", "David", "Juan"];
console.log("Names common to both lists:", compareLists(otherNames));

function getLengths(namesList) {
  var lengths = namesList.map(function (name) {
    return name.length;
  });
  return lengths;
}

console.log("Lengths of names in the list:", getLengths(names));