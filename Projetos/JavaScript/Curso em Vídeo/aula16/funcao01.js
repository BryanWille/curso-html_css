function parimpar(n){
    if (n === 0){
        return 'Zero!';
    } else if(n % 2 === 0){
        return 'Par!';
    } else {
        return 'Impar';
    }
}
for(let cont = 0; cont <= 101; cont++){
    console.log(parimpar(cont));
}