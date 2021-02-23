//Fonction qui permet de changer l'image.  
function imageOver(image) {
  image.setAttribute('src', 'assets/img/' + image.id + '_2.jpg');
  }
 //Affecte l'image de départ lorsque la souris ne survole plus l'élément
  function imageOut(image) {
  image.setAttribute('src', 'assets/img/' + image.id + '.jpg');
  }  