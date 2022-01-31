//console.log("Hello World!")
var prompt = require('prompt-sync')();

//Faça um programa que peça um número inteiro e determine se ele é ou não um número primo. 
//Um número primo é aquele que é divisível somente por ele mesmo e por 1.

/*
let num = +prompt("Insira o número a ser testado: ");

for(i = 1; i < num; i++)
{
    if(num % i == 0)
    {
        if(i == 1)
        {
        }
        else
        {
            console.log("Esse número não é primo!");
            break;
        }
    }
}
if(i == num)
{
    console.log("Esse é um número primo!")
}
*/


//Peça ao usuário para digitar vários nomes (a quantidade deve ser escolhida por ele). Exiba na tela todos os nomes digitados, 
//porém de maneira invertida (do último para o primeiro), apresente também o maior e o menor nome (caso haja empate, deve mostrar todos).
console.clear();
console.log();
/*

let lista = [];
let tamanho =  prompt("Defina o número de usuários: ");
let menor;
let maior;
lista.push(prompt(`Insira o 1º nome na lista: `));
menor =  lista[0];
maior = lista[0];
for(i = 1;i < tamanho;i++ )
{
lista.push(prompt(`Insira o ${i + 1}º nome na lista: `));
if(lista[i].length < menor.length)
{
    menor = lista[i];
    //console.log("É menor");
}
else if(lista[i].length > maior.length)
{
    maior = lista[i];
    //console.log("É maior")
}
}
//console.log(lista);
//console.log(lista[0].length);
console.log(`O menor elemento é ${menor}`);
console.log(`O maior elemento é ${maior}`);
//lista.reverse();
console.log(`A lista ao contrário é ${lista.reverse()}`);
console.log();
*/

//Faça um programa que peça ao usuário digitar a população e a taxa de crescimento populacional de 2 países A e B, 
//sendo que a população do país A deve ser menor que a de B, e a taxa de crescimento de A seja maior. 
//Faça um programa que calcule e escreva o número de anos necessários para 
//que a população do país A ultrapasse ou iguale a população do país B, mantidas as taxas de crescimento.

/*

let popA = +prompt("Insira a população de A: ");
let popB = +prompt("Insira a população de B (lembrando que deve ser maior que a de A): ");
let crescA = +prompt("Insira a taxa de crescimento populacional de A: ");
let crescB = +prompt("Insira a taxa de crescimento populacional de B(deve ser menor que a de A): ");
let ano = 0;

while(popA < popB)
{
    popA = popA + (popA * (crescA/100));
    popB = popB + (popB * (crescB/100));
    ano++;
    //console.log(`No ano ${ano} a População de A é de ${popA.toFixed(2)}`);
    //console.log(`No ano ${ano} a População de B é de ${popB.toFixed(2)}`);
    //console.log(ano);
}

console.log(`No ano ${ano} a População de A é de ${popA.toFixed(0)}`);    
console.log(`No ano ${ano} a População de B é de ${popB.toFixed(0)}`);
console.log(`São necessários ${ano} anos para que a população de A se iguale e/ou ultrapasse a população de B`);





let lista = ['Gabriel', 'Daniel', 'Jamile'];

let listamaiuscula = [];

for(i = 0; i < lista.length; i++)
{
    listamaiuscula[i] =  lista[i].toUpperCase();
}

console.log(lista);
console.log(listamaiuscula);

*/

//Faça um "jogo da velha" criando uma matriz em duas dimensões (Você deve criar um array com 3 arrays de 3 elementos cada dentro). 
//O programa deve pedir as coordenadas (linha e coluna) alternadamente para 2 jogares e marcar X ou O em cada caso. Caso um jogador vença, 
//ele deve interromper o programa e anunciar o vencedor.
/*
let linha = [];
let coluna = [];

for(i=0 ;i < 3; i++)
{
    linha[i] = '1';
    coluna[i] = '2';
}

console.log(linha);
console.log(coluna);

*/