// Setando o objeto
var hotel = {
    name: 'Quay', rooms: 40, booked: 25,
    checkAvailability: function (){
        return this.rooms - this.booked; // Precisa do "this" porque está dentro da função.
    }
};

//Updatar a HTML

var elName = document.getElementById('hotelName') // Pega o elemento
elName.textContent = hotel.name;

var elRooms = document.getElementById('rooms')
elRooms.textContent = hotel.checkAvailability();

