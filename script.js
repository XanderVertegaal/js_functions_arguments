function paintRedWalls() {
    console.log("The wall has been painted red.");
}

paintRedWalls();

function paintWalls(color) {
    console.log("The wall has been painted " + color);
}

paintWalls('green');
paintWalls('purple');
paintWalls();   // passing no argument takes 'undefined' by default

function paintTwoWalls(colorNorth, colorSouth) {
    console.log("The North wall has been painted " + colorNorth);
    console.log("The South wall has been painted " + colorSouth);
}

paintTwoWalls('orange', 'grey');
paintTwoWalls('grey', 'orange');

/*
Changing the order of the parameters in the function definition or the arguments passed to the function both affect the result. If you switch both the argument and the parameter, effectively nothing changes. In other words: the order matters.
*/