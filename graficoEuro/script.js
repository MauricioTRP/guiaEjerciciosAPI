$(document).ready(function(){
  let dataPoints = []

  var chart = new CanvasJS.Chart("chartContainer", {
    animationEnabled: true,  
    title:{
      text: "Precio Historico Euro"
    },
    axisY: {
      title: "Precio en Pesos",
      valueFormatString: "#.",
      suffix: "-CLP",
    },
    data: [{
      yValueFormatString: "#,### Units",
      xValueFormatString: "DD MMM YYYY",
      type: "spline",
      dataPoints: dataPoints
    }]
  });

  $.ajax({
    type: "GET",
    url: "https:mindicador.cl/api/euro",
    dataType: "json",
    success: function(data){
      data.serie.forEach( registro => {
        dataPoints.push({
          x: new Date(registro.fecha),
          y: registro.valor
        })
      } )

      chart.render();
    },
    error: function(error) {
      console.error(error);
    }
  })
})