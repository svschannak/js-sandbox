const testList = ["dog", "cat", "fish", "dog"];

// Version without Currying
const filterFn = (animal, correctName) => {
    return animal === correctName;
}

console.log(testList.filter(x => filterFn(x, "dog")));

// Version with Currying
const curriedFilterFn = (animal) => (correctName) => animal === correctName;

console.log(testList.filter(curriedFilterFn("dog")));

// -> curriedFilterFn("dog") is like curriedFilterFn(animal)("dog")
console.log(curriedFilterFn("dog")("dog"));