const Stack = require("./stack.js");
const Queue = require("./queue.js");
const Hash = require("./hash.js");


function testCase(name, expected, actual) {

    console.log(`\n${name}`);
    console.log("Esperado:", expected);
    console.log("Obtenido:", actual);

    if (expected === actual) {
        console.log("PASS");
    } else {
        console.log("FAIL");
    }
}


// ========================================
// STACK
// ========================================

function testStack() {

    console.log("\n\n========== STACK ==========");

    const stack = new Stack();


    // Test Case 1
    testCase(
        "TC1 - Stack inicia vacío",
        true,
        stack.isEmpty()
    );


    // Test Case 2
    stack.push(10);
    stack.push(20);
    stack.push(30);

    testCase(
        "TC2 - Push agrega 3 elementos",
        3,
        stack.size()
    );


    // Test Case 3
    testCase(
        "TC3 - Peek devuelve el elemento superior",
        30,
        stack.peek()
    );


    // Test Case 4
    testCase(
        "TC4 - Pop devuelve el último elemento agregado",
        30,
        stack.pop()
    );


    // Test Case 5
    testCase(
        "TC5 - Después de Pop, Peek devuelve 20",
        20,
        stack.peek()
    );


    // Test Case 6
    stack.clear();

    testCase(
        "TC6 - Clear deja el Stack vacío",
        true,
        stack.isEmpty()
    );


    // Test Case 7
    testCase(
        "TC7 - Pop de un Stack vacío",
        "Stack is empty",
        stack.pop()
    );
}


// ========================================
// QUEUE
// ========================================

function testQueue() {

    console.log("\n\n========== QUEUE ==========");

    const queue = new Queue();


    // Test Case 1
    testCase(
        "TC1 - Queue inicia vacía",
        true,
        queue.isEmpty()
    );


    // Test Case 2
    queue.enqueue(10);
    queue.enqueue(20);
    queue.enqueue(30);

    testCase(
        "TC2 - Enqueue agrega 3 elementos",
        3,
        queue.size()
    );


    // Test Case 3
    testCase(
        "TC3 - Front devuelve el primer elemento",
        10,
        queue.front()
    );


    // Test Case 4
    testCase(
        "TC4 - Dequeue devuelve el primer elemento",
        10,
        queue.dequeue()
    );


    // Test Case 5
    testCase(
        "TC5 - Después de Dequeue, Front devuelve 20",
        20,
        queue.front()
    );


    // Test Case 6
    queue.clear();

    testCase(
        "TC6 - Clear deja la Queue vacía",
        true,
        queue.isEmpty()
    );


    // Test Case 7
    testCase(
        "TC7 - Dequeue de una Queue vacía",
        "Queue is empty",
        queue.dequeue()
    );
}


// ========================================
// HASH TABLE
// ========================================

function testHash() {

    console.log("\n\n========== HASH TABLE ==========");

    const hash = new Hash(10);


    // Test Case 1
    testCase(
        "TC1 - Hash Table inicia vacía",
        0,
        hash.size
    );


    // Test Case 2
    hash.set("nombre", "Fatima");

    testCase(
        "TC2 - Set agrega un elemento",
        1,
        hash.size
    );


    // Test Case 3
    hash.set("edad", 22);

    testCase(
        "TC3 - Set agrega otro elemento",
        2,
        hash.size
    );


    // Test Case 4
    testCase(
        "TC4 - Get devuelve el valor correcto",
        "Fatima",
        hash.get("nombre")
    );


    // Test Case 5
    testCase(
        "TC5 - Get de una clave inexistente",
        undefined,
        hash.get("carrera")
    );


    // Test Case 6
    testCase(
        "TC6 - Remove elimina una clave",
        true,
        hash.remove("nombre")
    );


    // Test Case 7
    testCase(
        "TC7 - La clave eliminada ya no existe",
        undefined,
        hash.get("nombre")
    );


    // Test Case 8
    testCase(
        "TC8 - Size disminuye después de Remove",
        1,
        hash.size
    );


    // Test Case 9
    testCase(
        "TC9 - Remove de una clave inexistente",
        false,
        hash.remove("carrera")
    );
}



testStack();
testQueue();
testHash();

console.log("\n\n========== TESTS TERMINADOS ==========");