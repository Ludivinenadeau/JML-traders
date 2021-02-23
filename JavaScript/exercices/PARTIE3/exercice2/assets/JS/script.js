document.getElementById('afficher').addEventListener('click',viewText);
    function viewText() {
        document.getElementById('text').style.display='block';
    }
document.getElementById('masquer').addEventListener('click',hideText);
    function hideText() {
        document.getElementById('text').style.display='none';
    }

    /* let p = document.getElementById('text');
let show = document.getElementById('show');
let hide = document.getElementById('hide');

show.addEventListener('click',() => {
    p.style.visibility='visible';
    // p.style.display='block'; //inline ou inlineBlock
});

hide.addEventListener('click',() => {
    p.style.visibility='hidden';
    // p.style.display='none';
});
*/
