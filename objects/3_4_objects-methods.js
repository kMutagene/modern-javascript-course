let restaurant = {
    name: "Heid's",
    guestCapacity: 50,
    guestCount: 0,
    checkAvailability: function (partySize) {
        return (this.guestCapacity - this.guestCount) >= partySize
    }
}

let status = restaurant.checkAvailability(0)

console.log(status)