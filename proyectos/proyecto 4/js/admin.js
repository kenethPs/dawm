let plot = (data) => { 
  const ctx = document.getElementById('myChart'); 
  const dataset = {
    labels: data.hourly.time, /* ETIQUETA DE DATOS */
    datasets: [{
        label: 'Temperatura semanal', /* ETIQUETA DEL GRÁFICO */
        data: data.hourly.temperature_2m, /* ARREGLO DE DATOS */
        fill: false,
        borderColor: 'rgb(75, 192, 192)',
        tension: 0.1
    }]
  };
  const config = {
    type: 'line',
    data: dataset,
  };
  let chart = new Chart(ctx, config) 
}
let bar = (data) => { 
  const ctx1 = document.getElementById('myChart1'); 
  const dataset1 = {
    labels: data.daily.time, /* ETIQUETA DE DATOS */
    datasets: [{
        label: 'indice uv por dia', /* ETIQUETA DEL GRÁFICO */
        data: data.daily.uv_index_max, /* ARREGLO DE DATOS */

        borderColor: 'rgb(75, 192, 192)'
        
    }]
  };
  const config = {
    type: 'bar',
    data: dataset1,
  };
  chart = new Chart(ctx1, config) 
}




(
  function(){
      let URL = 'https://api.open-meteo.com/v1/forecast?latitude=-2.14&longitude=-79.97&hourly=temperature_2m&daily=uv_index_max&timezone=America%2FSao_Paulo';
      fetch( URL )
      .then(response => response.json())
      .then(data => {
          plot(data)
          bar(data)
      })
      .catch(console.error);
  }
)();