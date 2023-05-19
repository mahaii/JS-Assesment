let queue = ["Sofia", "David", "Juan"];

console.log("Initial queue: ", queue);

queue.push("Sara", "Augustin");

console.log("Queue after adding Sara and Augustin: ", queue);

let firstPerson = queue.shift();

console.log("First person in line: ", firstPerson);
console.log("Queue after calling the first person: ", queue);

let davidIndex;
for (let i = 0; i < queue.length; i++) {
  if (queue[i] === "David") {
    davidIndex = i;
    break;
  }
}

queue.splice(davidIndex + 1, 0, "Renata");

console.log("Queue after Renata joins behind David: ", queue);

queue.push("Elena");

console.log("Final queue after Elena joins at the end: ", queue);