function Hotel(name, rooms, booked){
    this.name = name;
    this.rooms = rooms;
    this.booked = booked;
    this.checkAvailability = function (){
        return this.rooms - this.booked;
    };
} //Aqui a gente cria o objeto hotel pelo metódo do construtor, então criamos como se fosse um padrão de classe

var quayHotel = new Hotel('Quay', 40, 25); //Aqui criamos no padrão hotel a objeto quayHotel
var parkHotel = new Hotel('Park', 120, 77); //Objeto parkHotel

var details1 = quayHotel.name + ' rooms: '; //Nome do hotel +
    details1 += quayHotel.checkAvailability(); //Avaliabilidade de quartos
var elHotel1 = document.getElementById('hotel1');
elHotel1.textContent = details1;

var details2 = parkHotel.name + ' rooms: '; //Mesma coisa acima
    details2 += parkHotel.checkAvailability();
var elHotel2 = document.getElementById('hotel2');
elHotel2.textContent = details2;