var x = 0, y = 1, soma = 0;

for(cont = 0; cont < 30; cont++){
   x += y;
   y += x;
   if (x % 2 == 0 && x < 4000000){
    soma += x
   } else if (y % 2 == 0 &&  y < 4000000){
    soma += y
   }
}
document.write("<p> O Resultado foi: " +soma +"</p>")