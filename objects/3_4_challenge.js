let restaurant = {
    name: "Heid's",
    guestCapacity: 50,
    guestCount: 0,
    checkAvailability: function (partySize) {
        return (this.guestCapacity - this.guestCount) >= partySize
    },
    seatParty: function (partySize) {
        if (this.checkAvailability(partySize)) {
            this.guestCount = this.guestCount + partySize
            console.log(`seated ${partySize} people`)
        } else {
            console.log(`not enough room to seat ${partySize} people!`)
        }
    },
    removeParty: function (partySize) {
        if (this.guestCount - partySize >= 0) {
            this.guestCount = this.guestCount - partySize
            console.log(`${partySize} people left the restaurant`)
        } else {
            console.log(`can't remove ${partySize} people, as only ${this.guestCount} people are seated!`)
        }
    }
}

restaurant.seatParty(51)
console.log(restaurant)
restaurant.removeParty(20)
console.log(restaurant)

