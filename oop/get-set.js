const meem = {
    locations: [],
    get location() {
        return this._location
    },
    set location(loc) {
        this._location = loc.trim()
        this.locations.push(this._location)
    }
}

// code that uses the meem object

meem.location = "  soosenstraße1  "
meem.location = "  soosenstraße2  "

console.log(meem)