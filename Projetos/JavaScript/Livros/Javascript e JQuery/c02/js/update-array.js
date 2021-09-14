// Criar a array
var colors = ['white', 'black', 'custom'];

//Aualiza o terceiro no array
colors[2] = 'belge';

//Obtém o elemento com o id colors
var el = document.getElementById('colors');

//Substitui o terceiro item no array
el.textContent = colors[2];