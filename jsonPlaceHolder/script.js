// Solicitud Ajax 
$(document).ready(function(){
  $.ajax({
    type: "GET",
    url: "https://jsonplaceholder.typicode.com/posts",
    dataType: "json",
    success: function(data){
      // id "mostrarResultado"
      let cajaResultados = $("#mostrarResultado");
      data.forEach(post => {
        let carta = $(`
        <div class="card" style="width: 18rem;">
        <div class="card-body">
          <h5 class="card-title">${post.title}</h5>
          <p class="card-text">${post.body}</p>
        </div>
      </div>`)

        cajaResultados.append(carta)
      });
    },
    error: function(error){
      console.log(error);
    }
  })

})