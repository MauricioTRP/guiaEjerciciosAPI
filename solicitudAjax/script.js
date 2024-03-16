// Solicitud ajax https://reqres.in/api/users

$.ajax({
  type: "GET",
  url: "https://reqres.in/api/users",
  dataType: "json",
  success: function(data) {
    // Selecciono <div id="mostrarResultados" class="col">
    let cajaResultados = $("#mostrarResultados")
    
    data.data.forEach( (usuario) => {
      // Creo una caja bootstrap
      let card = $(`
      <div class="card" style="width: 18rem;">
        <img src="${usuario.avatar}" class="card-img-top" alt="...">
        <div class="card-body">
          <h5 class="card-title">${usuario.first_name} ${usuario.last_name}</h5>
          <p class="card-text">${usuario.email}</p>
        </div>
      </div>`)

      // Agrego la caja con info del usuario a  "#cajaResultados"
      cajaResultados.append(card);
    } )
  },
  error: function(error) {
    console.error(error)
  }
})