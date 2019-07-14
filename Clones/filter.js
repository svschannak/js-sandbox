function filter(list, filterFn) {
    let results = [];
    for (let i = 0; i < list.length; i++) {
        if (filterFn(list[i]) === true) {
            results.push(list[i]);
        }
    }
    return results;
}

Array.prototype.clonedFilter = function (filterFn) {
    return filter(this, filterFn);
}

const testList = ["dog", "cat", "fish", "dog"];

function filterFn(animal) {
    return animal === "dog";
}

console.log(testList.clonedFilter(filterFn));