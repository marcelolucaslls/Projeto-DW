// Aguarda o carregamento completo do conteúdo da página (DOM)
document.addEventListener("DOMContentLoaded", () => {
  
  // Gráfico 1: Tráfego de Rede
  // Obtém o contexto do canvas onde o gráfico será desenhado (id="chart1")
  const ctx1 = document.getElementById("chart1").getContext("2d");
  
  // Cria o gráfico com o tipo 'line' (linha)
  new Chart(ctx1, {
    type: "line", // Tipo de gráfico: linha
    data: {
      // Labels para os meses no eixo X
      labels: ["Jan", "Fev", "Mar", "Abr", "Mai", "Jun"],
      datasets: [{
        label: "Tráfego de Rede (MB)", // Título da linha no gráfico
        data: [30, 50, 80, 40, 60, 90], // Dados de tráfego de rede em MB para cada mês
        borderColor: "#4CAF50", // Cor da linha (verde)
        backgroundColor: "rgba(76, 175, 80, 0.2)", // Cor de fundo (verde claro)
        tension: 0.4 // Define a curvatura da linha (0 = linha reta, 1 = curva mais acentuada)
      }]
    },
    options: {
      responsive: true, // Faz o gráfico responsivo ao tamanho da tela
      plugins: {
        legend: { display: true, position: "top" } // Exibe a legenda do gráfico no topo
      }
    }
  });

  // Gráfico 2: Utilização de Recursos
  // Obtém o contexto do canvas para o gráfico 2 (id="chart2")
  const ctx2 = document.getElementById("chart2").getContext("2d");
  
  // Cria o gráfico com o tipo 'bar' (barra)
  new Chart(ctx2, {
    type: "bar", // Tipo de gráfico: barra
    data: {
      // Labels para as categorias no eixo X
      labels: ["CPU", "Memória", "Disco"],
      datasets: [{
        label: "Utilização (%)", // Título das barras no gráfico
        data: [65, 80, 45], // Percentual de utilização de CPU, Memória e Disco
        backgroundColor: ["#FF4500", "#1E90FF", "#FFD700"] // Cores das barras: laranja, azul e amarelo
      }]
    },
    options: {
      responsive: true, // Gráfico responsivo
      plugins: {
        legend: { display: true, position: "top" } // Exibe a legenda no topo
      }
    }
  });
});
