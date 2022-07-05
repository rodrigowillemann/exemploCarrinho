//Variáveis
//var = variável (alterar o valor) -> Global
//var teste=0;

//let = variável, de escopo -> dentro de um bloco {bloco}
let teste3=10; //recomendado!

//const = constante (não pode mudar o valor)
const teste2=5;

//Declaração implícita!
teste3 = 5; //não é recomendado!

var teste; //indefinido
console.log(teste); // = undefined


//Funções: dividir o código (partes) -> modularização
// -> chamado quando necessário (evento: apertar um botão)
// Declaração de variável Global
var exemplo="Pedro"; //tipo?
function verificaIdade(nome){
    //parâmetros -> dados que a função recebe
    
    let idade=21;
    if(idade>18){
        console.log(nome+" é maior de 18 anos");
    }
    //Quando esse código é executado?
}
//Fora da função:
console.log("Seu nome é "+exemplo);
//chamada função
function outraFuncao(){
    verificaIdade();
}


//DOM -> Document Object Model (HTML)
// .getElementById -> um único elemento do DOM
let texto = document.getElementById('conteudo').textContent;
let textos = document.getElementsByClassName('produto');
document.getElementsByTagName('div');
console.log(textos);








