// ul > li

// Enumerar items
$("ul > li").each(function(listItem){
  console.log($(this)) // elemento jQuery (list item)
  console.log(listItem)  // indice -> partiendo de 0
  $(this).text(`item ${listItem +1}`)
})

// cambiar backgroundColor para li pares
// even = pares
// odd = impares

$("ul > li:even").css({
  'backgroundColor': 'blue'
})

$("ul > li:odd").css({
  'backgroundColor': 'red'
})