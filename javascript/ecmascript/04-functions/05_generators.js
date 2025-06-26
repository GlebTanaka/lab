// 1. Basic Generator Function
function* numberGenerator() {
    yield 1;
    yield 2;
    yield 3;
}

// Using the generator
const gen = numberGenerator();
console.log(gen.next().value); // 1
console.log(gen.next().value); // 2
console.log(gen.next().value); // 3
console.log(gen.next().value); // undefined

// 2. Infinite Generator
function* infiniteCounter() {
    let i = 0;
    while (true) {
        yield i++;
    }
}

const counter = infiniteCounter();
console.log(counter.next().value); // 0
console.log(counter.next().value); // 1
console.log(counter.next().value); // 2

// 3. Generator with Parameters
function* powerGenerator(base) {
    let exponent = 0;
    while (true) {
        yield Math.pow(base, exponent);
        exponent++;
    }
}

const powersOfTwo = powerGenerator(2);
console.log(powersOfTwo.next().value); // 1
console.log(powersOfTwo.next().value); // 2
console.log(powersOfTwo.next().value); // 4
console.log(powersOfTwo.next().value); // 8

// 4. Generator with Return
function* generatorWithReturn() {
    yield 'First';
    yield 'Second';
    return 'Done!';
}

const genWithReturn = generatorWithReturn();
console.log(genWithReturn.next()); // { value: 'First', done: false }
console.log(genWithReturn.next()); // { value: 'Second', done: false }
console.log(genWithReturn.next()); // { value: 'Done!', done: true }

// 5. Generator with try-catch
function* errorGenerator() {
    try {
        yield 'Start';
        throw new Error('Generator Error');
    } catch (e) {
        yield `Caught error: ${e.message}`;
    }
    yield 'End';
}

const errorGen = errorGenerator();
console.log(errorGen.next().value); // 'Start'
console.log(errorGen.next().value); // 'Caught error: Generator Error'
console.log(errorGen.next().value); // 'End'

// 6. Fibonacci Sequence Generator
function* fibonacciGenerator() {
    let prev = 0, curr = 1;
    yield prev;
    yield curr;

    while (true) {
        const next = prev + curr;
        yield next;
        prev = curr;
        curr = next;
    }
}

const fib = fibonacciGenerator();
console.log(fib.next().value); // 0
console.log(fib.next().value); // 1
console.log(fib.next().value); // 1
console.log(fib.next().value); // 2
console.log(fib.next().value); // 3
console.log(fib.next().value); // 5

// 7. Generator Composition (using yield*)
function* gen1() {
    yield 'a';
    yield 'b';
}

function* gen2() {
    yield* gen1();
    yield 'c';
    yield 'd';
}

const composedGen = gen2();
for (const value of composedGen) {
    console.log(value); // 'a', 'b', 'c', 'd'
}

// 8. Async Generator
async function* asyncGenerator() {
    await new Promise(resolve => setTimeout(resolve, 1000));
    yield 'First';
    await new Promise(resolve => setTimeout(resolve, 1000));
    yield 'Second';
}

// Using async generator
async function useAsyncGenerator() {
    const gen = asyncGenerator();
    for await (const value of gen) {
        console.log(value); // Prints 'First' then 'Second' with 1s delay
    }
}