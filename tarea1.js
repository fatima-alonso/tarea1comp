const readline = require("readline");

const Stack = require("./stack.js");
const Queue = require("./queue.js");
const Hash = require("./hash.js");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function question(text) {
    return new Promise((resolve) => {
        rl.question(text, resolve);
    });
}

// Crear las estructuras una sola vez
const stack = new Stack();
const queue = new Queue();
const hash = new Hash(); // Tamaño de la tabla hash

async function menu() {

    let option; 
    do {
        console.log("\n===== MENÚ =====");
        console.log("1. Stack");
        console.log("2. Queue");
        console.log("3. Hash Table");
        console.log("0. Salir");

        option = await question("Selecciona una opción: ");

        switch (option) {
            case "1":
                console.log("STACK");
                await stackMenu();
                break;

            case "2":
                console.log("QUEUE");
                await queueMenu();
                break;

            case "3":
                console.log("HASH TABLE");
                await hashMenu();
                break;

            case "0":
                console.log("Programa terminado.");
                rl.close();
                break;

            default:
                console.log("Opción inválida.");
        }
    } while (option !== "0");
    rl.close();
}
          

async function stackMenu() {

    let option;
    do {
        console.log("\n===== STACK =====");
        console.log("1. Push");
        console.log("2. Pop");
        console.log("3. Peek");
        console.log("4. Size");
        console.log("5. Is Empty");
        console.log("6. Mostrar Stack");
        console.log("0. Regresar");

        option = await question("Selecciona una opción: ");

        switch (option) {
            case "1":
                const valueToPush = await question("Elemento a agregar: ");
                stack.push(valueToPush);
                console.log(`Se agregó: ${valueToPush}`);
                break;

            case "2":
                if (stack.isEmpty()) {
                    console.log("El Stack está vacío.");
                } else {
                    console.log("Elemento eliminado:", stack.pop());
                }
                break;

            case "3":
                if (stack.isEmpty()) {
                    console.log("El Stack está vacío.");
                } else {
                    console.log("Elemento en el Top:", stack.peek());
                }
                break;

            case "4":
                console.log("Tamaño del Stack:", stack.size());
                break;

            case "5":
                console.log("¿Está vacío?", stack.isEmpty());
                break;

            case "6":
                console.log("Stack:", stack.items);
                break;

            case "0":
                return; // Regresar al menú principal

            default:
                console.log("Opción inválida.");
        }
    } while (option !== "0");
}
    

async function queueMenu() {

    let option;

    do {

    
    console.log("\n===== QUEUE =====");
    console.log("1. Enqueue");
    console.log("2. Dequeue");
    console.log("3. Front");
    console.log("4. Size");
    console.log("5. Is Empty");
    console.log("6. Mostrar Queue");
    console.log("0. Regresar");

    option = await question("Selecciona una opción: ");

    switch (option) {

        case "1":
            const valueToEnqueue = await question("Elemento a agregar: ");
            queue.enqueue(valueToEnqueue);
            console.log(`Se agregó: ${valueToEnqueue}`);
            break;

        case "2":
            if (queue.isEmpty()) {
                console.log("La Queue está vacía.");
            } else {
                console.log("Elemento eliminado:", queue.dequeue());
            }
            break;

        case "3":
            if (queue.isEmpty()) {
                console.log("La Queue está vacía.");
            } else {
                console.log("Elemento al frente:", queue.front());
            }
            break;

        case "4":
            console.log("Tamaño de la Queue:", queue.size());
            break;

        case "5":
            console.log("¿Está vacía?", queue.isEmpty());
            break;

        case "6":
            console.log("Queue:", queue.items);
            break;

        case "0":
            return; // Regresar al menú principal

        default:
            console.log("Opción inválida.");


    }
} while (option !== "0");
}



async function hashMenu() {
    let option;
    do {
        console.log("\n===== HASH TABLE =====");
        console.log("1. Set");
        console.log("2. Get");
        console.log("3. Has");
        console.log("4. Delete");
        console.log("5. Size");
        console.log("6. Mostrar Hash Table");
        console.log("0. Regresar");

        option = await question("Selecciona una opción: ");

        switch (option) {
            case "1":
                const keyToSet = await question("Clave: ");
                const valueToSet = await question("Valor: ");
                hash.set(keyToSet, valueToSet);
                console.log(`Se agregó: { ${keyToSet}: ${valueToSet} }`);
                break;

            case "2":
                const keyToGet = await question("Clave a buscar: ");
                const value = hash.get(keyToGet);
                if (value !== undefined) {
                    console.log(`Valor encontrado: ${value}`);
                } else {
                    console.log("Clave no encontrada.");
                }
                break;

            case "3":
                const keyToCheck = await question("Clave a verificar: ");
                const exists = hash.get(keyToCheck) !== undefined;
                console.log(`¿Existe la clave? ${exists}`);
                break;

            case "4":
                const keyToDelete = await question("Clave a eliminar: ");
                const deleted = hash.remove(keyToDelete);
                if (deleted) {
                    console.log("Clave eliminada.");
                } else {
                    console.log("Clave no encontrada.");
                }
                break;

            case "5":
                console.log("Tamaño de la Hash Table:", hash.size);
                break;

            case "6":
                hash.print();
                break;

            case "0":
                return; // Regresar al menú principal

            default:
                console.log("Opción inválida.");
        }
    }while (option !== "0");
}
     
menu();


