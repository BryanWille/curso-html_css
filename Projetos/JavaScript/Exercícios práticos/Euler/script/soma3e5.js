var cont = somador = 0;
while(999 > cont){
    cont++;
    if(cont % 5 == 0 || cont % 3 == 0){
        somador += cont;
        document.writeln(cont);
    }
}
document.write(`<p> O Resultado foi: ${somador}!`)