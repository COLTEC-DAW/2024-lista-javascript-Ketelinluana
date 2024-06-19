function min(a, b) {
    return a < b ? a : b;
}

function max(a, b) {
    return a > b ? a : b;
}

function mod2(number) {
    return number % 2 === 0;
}

function mod(num, modValue) {
    return num % modValue === 0;
}

function countChars(frase, c) {
    let count = 0;
    for (let i = 0; i < frase.length; i++) {
        if (frase[i] === c) {
            count++;
        }
    }
    return count;
}

console.log(min(3, 7));
console.log(max(3, 7));
console.log(min(-1, 0));
console.log(max(-1, 0));

console.log(mod2(4));
console.log(mod2(7));
console.log(mod2(-2));

console.log(mod(10, 5));
console.log(mod(15, 4));
console.log(mod(-12, 3));

console.log(countChars("Hello, world!", 'o'));
console.log(countChars("JavaScript is awesome!", 'e'));
