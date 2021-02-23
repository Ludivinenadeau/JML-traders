// On appelle l'id de notre bouton et on lui assigne une ecoute d'evenement quand l'utilisateur clique qui renvoie sur une fonction
document.getElementById('submit').addEventListener('click', displayUserInfo);
//on crée une fonction qui recupére les valeur de nos champ et ensuite les affiche.
function displayUserInfo() {
  let mysteryNumber = 10.21;
  let suggestion = document.getElementById('suggestion').value;
  // On fait un alert pour afficher le résultat.

      if (suggestion > mysteryNumber) {
          alert("le nombre mystere est plus petit!");
      }  

      else if (suggestion < mysteryNumber) {
          alert("le nombre mystere est plus grand!");
      }

      else {
          alert("tu as gagné !");
      }
 
  }