/* 
OBJETIVO
    Quando clicar na aba tem que mostrar o conteúdo que foi clicada pelo usuario e esconder o conteudo da aba anterior
*/ 
// 1 dar um jeito de pegar os elementos que representam as abas no HTML
const abas = document.querySelectorAll(".aba");

abas.forEach(aba => {
    // 2 Dar um jeito de indentificar o clique no elementos da aba
   aba.addEventListener("click", function() {

    if(aba.classList.contains("selecionado")){
        return;

    }
    selecionarAba(aba)

   mostrarInformacoesDaAba(aba)

   });
});
function selecionarAba(aba) {
    // 3 quando clicar desmarcar aba selecionado, em outras palavras ao clicar a parte escrita selecionado na classe ira sumir fazendo ficar apenas a classe "aba" 

    const abaSelecionada = document.querySelector(".aba.selecionado");
    abaSelecionada.classList.remove("selecionado");

    // 4 transferir a classe selecionado para a outra aba
    aba.classList.add("selecionado");
}

function mostrarInformacoesDaAba(aba) {
     // 5 esconder o conteudo não selecionado

   const informacaoSelecionada = document.querySelector(".informacao.selecionado");
   informacaoSelecionada.classList.remove("selecionado");

    // 6 mostrar o proximo conteudo selecionado
    const idDoElementoDeInformacoesDaAba = `informacao-${aba.id}`

    const informacaoASerMostrada = document.getElementById(idDoElementoDeInformacoesDaAba)
    informacaoASerMostrada.classList.add("selecionado");

}
