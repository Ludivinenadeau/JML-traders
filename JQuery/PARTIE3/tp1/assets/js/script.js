$(function() {
    // declaration et initialisation du compteur à 0
    let counter = 0;
    // declaration et initialisation du nombre mystère à 0
    // 'Math.random()' = nombre aléatoire entre 0 et 1
    let nbMystere = parseInt(Math.random()*100);
    // déclaration du tableau qui indiquera à l'utilisateur ces tentatives
    var arrayTry = new Array();
    //let nbMystere = getRandomInt(101);
    // fonction qui s'applique au focus sur un champ de formulaire
    $('.buttonSubmit').click(function(){
        var nbUser = $('#nbUser').val();
      // incremente de 1 le compteur

        // cas où l'utilisateur n'a rien informé
        if (nbUser == '') {
            alert('Veuillez remplir le champ pour commencer à jouer');
            // cas où le user a rempli autre chose qu'un entier
        }else if (isNaN(nbUser)) { 
            alert('Veuillez remplir un nombre entier');
            // cas où le user a rempli un nombre exterieur à l'intervalle [0;100s]
        }else if(nbUser < 0 || nbUser > 100){ 
            alert('Veuillez remplir un nombre entier entre 0 et 100');
            //cas où le nombre du user est inférieur au nombre mystère
        }else if (nbUser < nbMystere) { 
            // modification des titres h1 pour indiquer où se situe le joueur
            $('.indication h2').text('C\'est plus');
            counter++;
            arrayTry.push(nbUser + '(+)');
            // cas où le nombre du user est supérieur au nombre mystère
        }else if(nbUser > nbMystere){ 
            // modification des titres h1 & h2 pour indiquer où se situe le joueur
            $('.indication h2').text('C\'est moins');
            arrayTry.push(nbUser + '(-)');
            counter++;
            // cas où le user a trouvé le chiffre mystere
        }else{ 
            // modification des titres h1 & h2 & h3 pour indiquer où se situe le joueur
            $('.indication h2').text('CORRECT ! Bien joué.');
            $('.indication h3').text('Le chiffre mystère était bien : ' + nbMystere);
            $('.indication h4').text('Vous avez réussi en ' + counter + ' tentatives.');
            $('.indication .intervalle').text('');
            counter++;
            console.log(arrayTry);
        }
        $('.indication .arrayTry').text('Vous avez déjà essayé les nombres suivants : ' + arrayTry);
    });
  });
    // raffraichir
  $('.buttonRefresh').click(function(){
    window.location.reload(true);
  });