function listarPratosBarras(){
    fetch(`/graficos/buscarTiposPratos/`, {
        method: "GET", //pegar
      })
        .then(function (resposta) {
          console.log(resposta);
          resposta.json().then((pratos) => {
  
            var tamanho = pratos.length;
            var tiposPratos = []; //Criando vetor para guardar meus valores a cada rodada do for
            var nomesPratos = []; // Criando vetor para guardar os nomes a cada rodada do for

            for(var contador = 0; contador < tamanho; contador++){
                 var tiposPratoAtual = pratos[contador];
  
              tiposPratos.push(tiposPratoAtual.quantidadeTipos); //Acessando quantidade de pratos que tenho (lá do select model)
              nomesPratos.push(tiposPratoAtual.nomeTipo); //Acessando quantidade de pratos que tenho (lá do select model) Criei um AS

              console.log(tiposPratoAtual);

            }

            myBarChart.data.datasets[0].data = tiposPratos;
            myBarChart.data.labels = nomesPratos;
            myBarChart.update();

          });
        })
        .catch(function (resposta) {
          console.log(`#ERRO: ${resposta}`);
        });
}




/* PREÇOS*/
function listarPrecos(){
  fetch(`/graficos/buscarPrecos/`, {
      method: "GET", //pegar
    })
      .then(function (resposta) {
        console.log(resposta);
        resposta.json().then((precos) => {

          var precosVetor = [precos[0].precoMinimo, precos[0].precoMedio, precos[0].precoMaximo]; //Criando vetor para guardar meus precos min, max e avg
      
          myBarChart1.data.datasets[0].data = precosVetor;
          myBarChart1.update();

          console.log(precosVetor);

        });
      })
      .catch(function (resposta) {
        console.log(`#ERRO: ${resposta}`);
      });
}