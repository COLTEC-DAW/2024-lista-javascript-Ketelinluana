function imprimirTabuleiro(numLinhas) {
    let tabuleiro = '';
    for (let i = 0; i < numLinhas; i++) {
        for (let j = 0; j < 4; j++) {
            tabuleiro += (i % 2 === 0) ? '# ' : ' #';
        }
        tabuleiro += '\n';
    }
    return tabuleiro;
}

function ehPalindromo(palavra) {
    palavra = palavra.toLowerCase().replace(/[^a-z0-9]/g, ''); 
    const tamanho = palavra.length;
    for (let i = 0; i < tamanho / 2; i++) {
        if (palavra[i] !== palavra[tamanho - 1 - i]) {
            return false;
        }
    }
    return true;
}
function executarPrograma() {
    let opcao = prompt(`Escolha uma opção:
1. Imprimir tabuleiro de xadrez
2. Verificar se uma palavra é um palíndromo
3. Imprimir números de 1 a 100 (FizzBuzz)
Digite o número da opção desejada:`);

    switch (opcao) {
        case '1':
            let numLinhasTabuleiro = parseInt(prompt("Digite o número de linhas para o tabuleiro de xadrez:"));
            let resultadoTabuleiro = imprimirTabuleiro(numLinhasTabuleiro);
            console.log(resultadoTabuleiro);
            break;

        case '2':
            let palavra = prompt("Digite uma palavra para verificar se é um palíndromo:");
            let resultadoPalindromo = ehPalindromo(palavra) ? "É um palíndromo!" : "Não é um palíndromo!";
            console.log(resultadoPalindromo);
            break;

        case '3':
            for (let i = 1; i <= 100; i++) {
                let output = '';
                if (i % 3 === 0) {
                    output += 'Fizz';
                }
                if (i % 5 === 0) {
                    output += 'Buzz';
                }
                if (output === '') {
                    output = i;
                }
                console.log(output);
            }
            break;

        default:
            console.log("Opção inválida!");
            break;
    }
}
executarPrograma();
