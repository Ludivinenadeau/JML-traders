function changeColor(colorDiv) {
    let color = colorDiv.className.replace('color ','');
    document.getElementById('text').style.color= color;
}