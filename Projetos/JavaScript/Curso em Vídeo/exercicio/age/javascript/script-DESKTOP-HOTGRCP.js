function verify(){
    let divmsg, year, man, woman, yearToday, divimg, img;
    yearToday = 2021
    year = document.getElementById("bornYear");
    year = Number(year.value);
    man = document.getElementById("man");
    woman = document.getElementById("woman");
    divmsg = document.getElementById("divmsg");
    divimg = document.getElementById("image");
    let msg;
    let age = 2021 - year;
    if(age < 0){
        window.alert("O ano de nascimento informado está incorreto!")
        window.alert("Por favor atualizar e corrigir!")
    } else if (man.checked){
        msg = `We've detected an man with ${age} years old.`;
        if (age <= 10){
            img = '/home/elliwx/git/projetos-javascript/Curso em Vídeo/exercicio/age/img/child-man.jpg';
        } else if (age <= 20 ){
            img = '/home/elliwx/git/projetos-javascript/Curso em Vídeo/exercicio/age/img/young-man.jpg';
        } else if (age <= 65){
            img = '/home/elliwx/git/projetos-javascript/Curso em Vídeo/exercicio/age/img/adult-man.jpg';
        } else {
            img = '/home/elliwx/git/projetos-javascript/Curso em Vídeo/exercicio/age/img/old-man.jpg';
        }
    } else if (woman.checked){
        msg = `We've detected an woman with ${age} years old.`;
        if (age <= 10){
            img = '/home/elliwx/git/projetos-javascript/Curso em Vídeo/exercicio/age/img/child-woman.jpg';
        } else if (age <= 20){
            img = '/home/elliwx/git/projetos-javascript/Curso em Vídeo/exercicio/age/img/young-woman.jpg';
        } else if (age <= 65){
            img = '/home/elliwx/git/projetos-javascript/Curso em Vídeo/exercicio/age/img/adult-woman.jpg';
        } else {
            img = '/home/elliwx/git/projetos-javascript/Curso em Vídeo/exercicio/age/img/old-woman.jpg';
        }
    }
    divmsg.innerHTML = "<p>" + msg + "</p>";
    divimg.innerHTML = '<img src="' +img +'"> </img>';
}