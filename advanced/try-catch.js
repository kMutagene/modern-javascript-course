// i take "things that a strong type system solves for ya" for 20

const getTip = (amount) => {
    if (typeof amount === "number") {
        return amount * .25
    } else {
        throw Error("lol cant tip no number idiot")
    }
}

try {
    getTip(22)
    console.log("success")
}
catch {
    "soos"
    console.log("catched xd")
}