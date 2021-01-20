// 2 valores inteiros - calcular o valor dos fatorias e depois somar os dois valores
// exemplo: entrada: m = 4 n = 4    saida: = 48

const M = 10;
const N = 10;

function Factorial (numeros){
    let calculofatorial = 1;
// fatorial de 0 = 1 - caso de canto
    if (numeros == 0) {
        return 1;
    }
    //quando ele chega a 0, ele não executa 
    // i-- = i -1 - decrementando
    else {
        for (i = numeros; i > 0; i--){
            calculofatorial = calculofatorial * i;
        }
        return calculofatorial;
    }
}

function somafatoriais (M,N){
    return Factorial(M) + Factorial(N);
}

console.log(somafatoriais(M,N));


