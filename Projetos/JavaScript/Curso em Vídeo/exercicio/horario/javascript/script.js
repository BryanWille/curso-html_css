let data = new Date();
let hora = data.getHours();
let minutes = data.getMinutes();
let seconds = data.getSeconds();
let elDiv = document.getElementById("hora");
let divimg = document.getElementById("imagem");
let msg, imagem, cor;
if(hora >= 18 || hora <= 05){
    if (hora === 18){
        cor = '#19405a';
        imagem = 'https://i.imgur.com/mdJHTqS.png';
    } else if (hora >= 19 && hora <= 20){
        cor = '#232f7d';
        imagem = 'https://i.imgur.com/sQ0fdtN.png';
    } else if (hora >=21 && hora <= 23){
        cor = '#1b3845';
        imagem = 'https://i.imgur.com/Ev0q4qV.png';
    } else if (hora >= 0 && hora <= 2){
        hora = '0' + hora;
        cor = '#1e2026';
        imagem = 'https://i.imgur.com/z0HP10T.png';
    } else if (hora >= 3 && hora <= 5){
        hora = '0' + hora;
        cor = '#141924';
        imagem = 'https://i.imgur.com/gvHDICq.png';
    }
    msg = "Boa noite";
} else if (hora >= 12){
    if (hora >= 12 && hora <= 14){
        cor = '#6498e7';
        imagem = 'https://i.imgur.com/UuHaayl.png';
    } else if (hora >= 15 && hora <= 16){
        cor = '#c5d6e9';
        imagem = 'https://i.imgur.com/FpxvJzq.png';
    } else if (hora === 17){
        cor = '#b04534';
        imagem = 'https://i.imgur.com/IvieYhX.png';
    }
    msg = "Boa tarde";
} else if (hora <= 11){
    if (hora >= 6 && hora <= 8){
        cor = '#f9ece1';
        hora = '0' + hora;
        imagem = 'https://i.imgur.com/fApX2gQ.png';
    } else if (hora == 9){
        hora = '0' + hora;
        cor = '#fefece';
        imagem = 'https://i.imgur.com/YSRjLbH.png';
    } else if(hora >= 10 && hora <= 11){
        cor = '#fefece';
        imagem = 'https://i.imgur.com/YSRjLbH.png';
    } 
    msg = "Bom dia";
} else {
    msg = "Bem vindo";
}

elDiv.innerHTML = `<p id="msg"> ${msg}! agora são ${hora}:${minutes}.</p>`;
divimg.innerHTML = `<img src="${imagem}" id='img'>`;
document.body.style.backgroundColor = cor;