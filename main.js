
let friendsNames = ["filani1", "filani2", "filani3", "filani4", "filani5"];


console.log(friendsNames[1]);









let numbers = [10, 20, 30, 40, 50];


numbers.push(60);


numbers.shift();


numbers.splice(1, 0, 15);

console.log(numbers);

















let strings = ["apple", "banana", "kiwi", "cherry", "grapefruit"];

if (strings.length > 0) {
    let randomIndex = Math.floor(Math.random() * strings.length);

    let [randomString] = strings.slice(randomIndex, randomIndex + 1);

    console.log(randomString);
} else {
    console.log("The array is empty.");
}

