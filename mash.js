
homes = ["Mansion", "Apartment", "Shack", "House", "BinLaden's Crib"];
//repeats rand until value btwn 0 to 4 is found, returns element from array
getHome = () => {
    if (process.argv[2]) {
    homes.push(process.argv[2])
    rand = Math.floor(Math.random()* 10)
    if (rand < 6) {
        return homes[rand] 
    } else 
    {return getHome()}} else {throw "!!!!!Choose a HOME to play!!!!"}
}
getChildrenCount = () => {
    if (process.argv[3] != undefined)
    {if (Math.random() > .5){
        return process.argv[3];}
    else {
    rand = Math.floor(Math.random() * 100);
    return rand;}}
    else {throw "!!!!Choose a desired AMOUNT of CHILDREN to play!!!"}
}

getCar = () => {
    if (process.argv[4] != undefined){
    carz = ["Lambo", "Maclaren", "Flintstone's whip", "Tesla", "Saab"];
    carz.push(process.argv[4])
    rand = Math.floor(Math.random()* 10)
    if (rand < 6) {
        return carz[rand] 
    } else 
    {return getCar()}}
    else {throw "!!!!Choose a car to play!!!"}
}
getGun = () => {
    if (process.argv[5] != undefined){
        gun = ["WaterGun", "NerfGun", "LavaGun"]
        gun.push(process.argv[5]);
        rand = Math.floor(Math.random()* 10);
        if (rand < 4) {
            return gun[rand];
        } else {return getGun()}}
        else {throw "!!!!Choose a GUN!!!!"}

    }


mash = () => {return "You will live in a " + getHome() + 
", and you will have " + getChildrenCount() +  " kids, and you'll drive a " + getCar() + " and carry a " + getGun() + "!"}

console.log(mash());
