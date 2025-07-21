const hotelQuay = {
    name: 'Quay',
    zimmer: 45,
    gebucht: 12,
    gibFreieZimmer: function () {
        return this.zimmer - this.gebucht;
    }
};

const hotelPark = {
    name: 'Park',
    zimmer: 77,
    gebucht: 13,
    gibFreieZimmer: function () {
        return this.zimmer - this.gebucht;
    }
};

console.log('Name des Hotels: ' + hotelQuay.name,
    'Anzahl Zimmer: ' + hotelQuay.zimmer, 'Gebuchte Zimmer: ' + hotelQuay.gebucht,
    'Freie Zimmer: ' + hotelQuay.gibFreieZimmer());

console.log('Name des Hotels: ' + hotelPark.name,
    'Anzahl Zimmer: ' + hotelPark.zimmer, 'Gebuchte Zimmer: ' + hotelPark.gebucht,
    'Freie Zimmer: ' + hotelPark.gibFreieZimmer());