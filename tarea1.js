const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function menu() {
    console.log("\n===== MENÚ =====");
    console.log("1. Stack");
    console.log("2. Queue");
    console.log("3. Hash Table");
    console.log("0. Salir");

    rl.question("Selecciona una opción: ", (option) => {

        switch (option) {
            case "1":
                console.log("Seleccionaste Stack");
                menu();
                break;

            case "2":
                console.log("Seleccionaste Queue");
                menu();
                break;

            case "3":
                console.log("Seleccionaste Hash Table");
                menu();
                break;

            case "0":
                console.log("Programa terminado.");
                rl.close();
                break;

            default:
                console.log("Opción inválida.");
                menu();
        }
    });
}

menu();