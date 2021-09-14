function verify(){
    let divmsg, year, man, woman, yearToday, divimg, img;
    yearToday = new Date().getFullYear();
    year = document.getElementById("bornYear");
    year = Number(year.value);
    man = document.getElementById("man");
    woman = document.getElementById("woman");
    divmsg = document.getElementById("divmsg");
    divimg = document.getElementById("image");
    let msg;
    let age = 2021 - year;
    if(age < 0 || age >= 140){
        window.alert("O ano de nascimento informado está incorreto!")
        window.alert("Por favor atualizar e corrigir!")
    } else if (man.checked){
        msg = `We've detected an man with ${age} years old.`;
        if (age <= 10){
            img = 'https://i.imgur.com/NPkfW2H.png';
        } else if (age <= 20 ){
            img = 'https://i.imgur.com/KWgUd3k.png';
        } else if (age <= 65){
            img = 'https://i.imgur.com/kz9Jn7R.png';
        } else {
            img = 'https://i.imgur.com/UEOsCCk.png';
        }
    } else if (woman.checked){
        msg = `We've detected an woman with ${age} years old.`;
        if (age <= 10){
            img = 'https://i.imgur.com/K2HDAR3.png';
        } else if (age <= 20){
            img = 'https://i.imgur.com/Yylaf78.png';
        } else if (age <= 65){
            img = 'https://i.imgur.com/JQVMyOh.png';
        } else {
            img = 'https://i.imgur.com/5y38PQy.png';
        }
    }
    divmsg.style.textAlign = 'center';
    divmsg.innerHTML = "<p>" + msg + "</p>";
    divimg.innerHTML = '<img src="' +img +'">';
}