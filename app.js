const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Wat is je geboortedatum? ", function (date) {
    addLeerling(date);
    rl.close();
});

function addLeerling(datum) {
    var groep = (datum % 7);
    groep++;

    console.log("Je bent toegewezen aan groep: " + groep);
}

