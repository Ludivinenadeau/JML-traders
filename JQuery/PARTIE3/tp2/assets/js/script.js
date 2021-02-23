$(function (){
  $('#average').click(function(){
    //Récupération des données
    // (on releve les notes)
    let firstNote = $('#firstNote').val();
    let secondNote = $('#secondNote').val();
    let thirdNote = $('#thirdNote').val();
    let fourthNote = $('#fourthNote').val();
    let fithNote = $('#fithNote ').val();
    // on vide les zones de texte
    $('#verification').text('');
    $('#averageCal').text('');
    $('#appreciation').text('');
    //Vérification des données
    // on verifie que ce sont bien des nombres de rentres sinon on envoie un msg d'erreur
    if(isNaN(firstNote) == true){
      $('#verification').text('Merci de ne renter que des chiffres');
      // on verifie que les notes sont bien comprises entre 0 et 20 sinon msg d'erreur
    }else if((firstNote<0) || (firstNote >20)){
      $('#verification').text('Une note ne peut etre inferieure à 0 et supérieure à 20...'); }
    if(isNaN(secondNote) == true){
      $('#verification').text('Merci de ne renter que des chiffres');
    }else if((secondNote<0) || (secondNote>20)){
      $('#verification').text('Une note ne peut etre inferieure à 0 et supérieure à 20...');}
    if(isNaN(thirdNote) == true){
      $('#verification').text('Merci de ne renter que des chiffres');
    }else if((thirdNote<0) || (thirdNote>20)){
      $('#verification').text('Une note ne peut etre inferieure à 0 et supérieure à 20...');}
    if(isNaN(fourthNote) == true){
      $('#verification').text('Merci de ne renter que des chiffres');
    }else if((fourthNote<0) || (fourthNote>20)){
      $('#verification').text('Une note ne peut etre inferieure à 0 et supérieure à 20...');}
    if(isNaN(fithNote) == true){
      $('#verification').text('Merci de ne renter que des chiffres');
    }else if((fithNote<0) || (fithNote>20)){
      $('#verification').text('Une note ne peut etre inferieure à 0 et supérieure à 20...');}
    //Traitement des données
    if($('#verification').text() == ''){// on verifie que les chaines sont bien vides pour effectuer le calcul
      let average= (parseInt(firstNote) + parseInt(secondNote) + parseInt(thirdNote) + parseInt(fourthNote) + parseInt(fithNote))/5;
      $('#averageCal').text(average);
      if ((average<0) && (average>20)){
        $('#appreciation').text('Il y a une erreur dans tes notes!')}
      else if(average < 10){
        $('#appreciation').text('en dessous de la moyenne... faudrait arreter de discuter avec tes camarades!');
      }else if((average>=10)&&(average<13)){
        $('#appreciation').text('Moyen, Peut mieux faire...');
      }else if((average>=13) && (average<16)){
        $('#appreciation').text('Bien! Tu es sur la bonne voie');
      }else if ((average>=16) && (average<20)){
        $('#appreciation').text('Très bien. Mais pourquoi tu n\'as pas 20???');
      }else if(average == 20){
        $('#appreciation').text('Excellent. Rien à dire');
      }
    }
  })
});
