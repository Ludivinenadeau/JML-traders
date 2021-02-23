$ (function(){
  //on definir une variable pour stocker la taille initiale de l'image
  let imageSize = $('.image').width();
    $('.image').mouseenter(function () {
      $(this).css({'width': '1000px'});//this represente ce qui déclenché l'événement
    });
    $('.image').mouseleave(function () {
      $(this).css({'width': imageSize});// pour reprendre la taille initiale
    });
  });
