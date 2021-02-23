/* On ajoute un 'addEventListener input' pour executer la fonction
lorsqu'on appuie sur le clavier */
document.addEventListener('input', showInputValue);
function showInputValue() {
    /* On affiche la valeur de l'input
    dans une boîte de dialogue */
    alert(document.getElementById('lastname').value);
  }

  /* autres solutions: 

  let input = document.getElementById('lastname');

version simple, à utiliser pour des actions simple
input.onkeyup = () => {
   alert(input.value);
}

version complète, à utiliser lors d'un ajout d'options (délais, paramètres etc...)
input.addEventListener('keyup',() => {
   alert(input.value);
});

version optimisée, à utiliser si on doit répèter l'action pour plusieurs évènements
function getValue() {
   alert(input.value);
}
input.onkeyup = getValue(); */