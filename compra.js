//Criar as funções para manipular o carrinho (adicionar, remover, confirmar)
window.onload = function carrinho(){
    var carrinho = document.getElementById('carrinho');
    exibirCarrinho(carrinho);
}
function addCarrinho(nome, preco, quantidade, posicao){ //parâmetros
    //localStorage (armazenamento do navegador)
    //não é adequado para senhas (não é seguro)
    //localStorage = permanente
    //sessionStorage = válido por uma sessão
    localStorage.setItem("nome"+posicao, nome); // chave: nome1: valor: Macarrão
    localStorage.setItem("preco"+posicao, preco); // chave: preco1: 1,99   
    localStorage.setItem("quantidade"+posicao, quantidade);
    console.log(nome);
}
function exibirCarrinho(carrinho){
    //Ler os dados do localStorage.getItem("nome"+posicao) -> for(repetição)
    //Mostrar os dados dos produtos na página carrinho.html
    //for() -> repetir para todos os itens do localStorage
    carrinho.innerHTML = "<table><hr>......."+localStorage.getItem('nome1')+
                         "<hr>..............."+localStorage.getItem('preco1')+
                         "...................";
}