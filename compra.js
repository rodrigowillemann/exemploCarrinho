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
    for(var i=1; i<=100; i++){
        if(localStorage.getItem('nome'+i) != null) { //Produto foi adicionado no carrinho?
            carrinho.innerHTML += "<table><hr>......."+localStorage.getItem('nome'+i)+ 
                         "<hr>..............."+localStorage.getItem('preco'+i)+
                         "..................."; 
                         //1º criar um botão para excluir o item do carrinho -> excluirItem(item)
            //2º Calcular o valor total do carrinho
        }               
    } //listou todos os produtos
    //3º Mostrar o valor total, percentual de desconto, pagamento.....
}

function excluirItem(item){ //item -> posição (i)
    //Elaborar a lógica para excluir um item do carrinho
    //Ao exibir o carrinho, deverá ser criado um botão para chamar a função excluirItem()
    //1º Localizar o item a ser excluído? -> chave do localStorage
    //2º Chamar a função para excluir o item (chave) do localStorage? Pesquisem...
}





