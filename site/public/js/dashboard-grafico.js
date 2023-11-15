/* GRÁFICO DE DONUT*/

// Obtenha o contexto do canvas
var ctx = document.getElementById('myDonutChart').getContext('2d');

// Defina os dados do gráfico
var data = {
  labels: ['Vegetariano', 'Vegano', 'Misto'],
  datasets: [{
    data: [30, 40, 30], // Substitua esses valores pelos seus dados
    backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56'], // Cores das fatias
    hoverBackgroundColor: ['#FF6384', '#36A2EB', '#FFCE56'] // Cores ao passar o mouse sobre as fatias
  }]
};

// Configure as opções do gráfico
var options = {
  cutoutPercentage: 50, // Porcentagem do buraco no meio do donut
  responsive: false, // Tornar o gráfico não responsivo (pode ajustar conforme necessário)
};

// Crie o gráfico donut
var myDonutChart = new Chart(ctx, {
  type: 'doughnut',
  data: data,
  options: options
});


/*GRÁFICO DE BARRAS*/
var ctxBar = document.getElementById('myBarChart').getContext('2d');

// Defina os dados do gráfico de barras
var dataBar = {
  labels: ['Rótulo A', 'Rótulo B', 'Rótulo C'],
  datasets: [{
    label: 'Nome da Série',
    data: [15, 25, 35], // Substitua esses valores pelos seus dados
    backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56'], // Cores das barras
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