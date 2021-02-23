 // On appelle l'id de notre bouton et on lui assigne une ecoute d'evenement quand l'utilisateur clique qui renvoie sur une fonction
 document.getElementById('submit').addEventListener('click', displayUserInfo);
 //on crée une fonction qui recupére les valeur de nos champ et ensuite les affiche.
 function displayUserInfo() {
   var firstNumber = document.getElementById('firstNumber').value;
   var secondNumber = document.getElementById('secondNumber').value;
   // On fait un alert pour afficher le résultat.
    alert('le resultat de la multiplication est' + Math.trunc(firstNumber)*secondNumber);
   }
