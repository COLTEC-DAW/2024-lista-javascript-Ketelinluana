function desenharTriangulo(linhas) {
    let linha = '';
    for (let i = 1; i <= linhas; i++) {
      linha += '#';
      console.log(linha);
    }
  }
  
  let linhas = parseInt(prompt("Informe a quantidade de linhas para o triângulo:"));
  desenharTriangulo(linhas);
  