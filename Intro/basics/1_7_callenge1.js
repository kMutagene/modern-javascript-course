let isGuest1Vegan = true
let isGuest2Vegan = true


//are both vegan?
if (isGuest1Vegan && isGuest2Vegan) {
    //only offer vegan dishes
    console.log('here are our vegan dishes: a')
} else if (isGuest1Vegan || isGuest2Vegan) {
    //at least one is vegan, offer both
    console.log('here are our dishes:b These are vegan:a')
} else {
    //offer anthing
    console.log('you take it: b a')

}