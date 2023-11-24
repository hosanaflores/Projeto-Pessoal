/*GRÁFICO DE BARRAS 1 */
var ctxBar1 = document.getElementById('myBarChart1').getContext('2d');

// Defina os dados do gráfico de barras
var dataBar1 = {
  labels: ['Mínimo', 'Médio', 'Máximo'],
  datasets: [{
    label: 'Preço dos Pratos', 
    data: [], // Substitua esses valores pelos seus dados
    backgroundColor: ['rgba(220,220,220)',
                      'rgba(192,192,192)',
                      'rgba(128,128,128)'], // Cores das barras
                      
    borderColor: [
                  '#4DAF00'
                ],
    borderWidth: 2 // Largura da borda das barras
  }]
};

// Configure as opções do gráfico de barras
var optionsBar1 = {
  scales: {
    y: {
      beginAtZero: true // Comece o eixo Y a partir do zero
    }
  },
  responsive: false // Tornar o gráfico não responsivo (pode ajustar conforme necessário)
};

// Crie o gráfico de barras
var myBarChart1 = new Chart(ctxBar1, {
  type: 'bar',
  data: dataBar1,
  options: optionsBar1
});






/*GRÁFICO DE BARRAS 2 */
var ctxBar = document.getElementById('myBarChart').getContext('2d');

// Defina os dados do gráfico de barras
var dataBar = {
  labels: [],
  datasets: [{
    label: 'Tipos de Pratos', 
    data: [], // Substitua esses valores pelos seus dados
    backgroundColor: ['#98FB98', '#006400', '#32CD32','	#90EE90', '#00FF00', '#3CB371'], // Cores das barras
    borderWidth: 1 // Largura da borda das barras
  }]
};

// Configure as opções do gráfico de barras
var optionsBar = {
  scales: {
    y: {
      beginAtZero: true // Comece o eixo Y a partir do zero
    }
  },
  responsive: false // Tornar o gráfico não responsivo (pode ajustar conforme necessário)
};

// Crie o gráfico de barras
var myBarChart = new Chart(ctxBar, {
  type: 'bar',
  data: dataBar,
  options: optionsBar
});

