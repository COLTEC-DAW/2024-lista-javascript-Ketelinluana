function bubbleSort(arr, comparator) {
    const n = arr.length;
    for (let i = 0; i < n - 1; i++) {
        for (let j = 0; j < n - i - 1; j++) {
            if (comparator(arr[j], arr[j + 1])) {
                [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
            }
        }
    }
    return arr;
}

function cifraDeCesar(str, deslocamento) {
    const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const shiftedAlphabet = alphabet.slice(deslocamento) + alphabet.slice(0, deslocamento);
    
    return str.toUpperCase().replace(/[A-Z]/g, char => shiftedAlphabet[alphabet.indexOf(char)]);
}

function verificaNumero(numero, criterio) {
    return criterio(numero);
}

function transformaString(str, transformacao) {
    return str.split('').map(transformacao).join('');
}

function criaMatriz(dimensao, funcaoMatricial) {
    let matriz = [];
    for (let i = 0; i < dimensao; i++) {
        let linha = [];
        for (let j = 0; j < dimensao; j++) {
            linha.push(funcaoMatricial(i, j));
        }
        matriz.push(linha);
    }
    return matriz;
}


console.log(bubbleSort([3, 1, 4, 1, 5, 9, 2, 6, 5], (a, b) => a > b));
console.log(cifraDeCesar('Olá', 3));
console.log(verificaNumero(7, num => num % 2 !== 0));
console.log(transformaString('Ola!', char => 'aeiou'.includes(char.toLowerCase()) ? char.toUpperCase() : char));
console.log(criaMatriz(3, (i, j) => i + j));
