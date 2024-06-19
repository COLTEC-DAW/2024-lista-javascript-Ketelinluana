function range(min, max, i = 1) {
    let result = [];
    if (i > 0) {
        for (let num = min; num <= max; num += i) {
            result.push(num);
        }
    } else if (i < 0) {
        for (let num = min; num >= max; num += i) {
            result.push(num);
        }
    }
    return result;
}

function reverseArray(array) {
    let reversed = [];
    for (let i = array.length - 1; i >= 0; i--) {
        reversed.push(array[i]);
    }
    return reversed;
}

function toList(array) {
    let list = null;
    for (let i = array.length - 1; i >= 0; i--) {
        list = { value: array[i], rest: list };
    }
    return list;
}

function deepEquals(obj1, obj2) {
    if (obj1 === obj2) return true;
    if (typeof obj1 !== 'object' || obj1 === null ||
        typeof obj2 !== 'object' || obj2 === null) {
        return false;
    }
    let keys1 = Object.keys(obj1);
    let keys2 = Object.keys(obj2);
    if (keys1.length !== keys2.length) return false;
    for (let key of keys1) {
        if (!keys2.includes(key) || !deepEquals(obj1[key], obj2[key])) {
            return false;
        }
    }
    return true;
}

console.log(range(1, 5));        // Saída: [1, 2, 3, 4, 5]
console.log(range(2, 10, 2));    // Saída: [2, 4, 6, 8, 10]
console.log(range(5, 2, -1));    // Saída: [5, 4, 3, 2]

console.log(reverseArray([1, 2, 3, 4, 5]));  // Saída: [5, 4, 3, 2, 1]

console.log(toList([1, 2, 3]));  
// Saída:
// {
//   value: 1,
//   rest: {
//     value: 2,
//     rest: {
//       value: 3,
//       rest: null
//     }
//   }
// }

let obj1 = { a: 1, b: { c: 2 } };
let obj2 = { a: 1, b: { c: 2 } };
let obj3 = { a: 1, b: { c: 3 } };

console.log(deepEquals(obj1, obj2));  // Saída: true
console.log(deepEquals(obj1, obj3));  // Saída: false
