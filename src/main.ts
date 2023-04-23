//variable declarations
const constantVariable = undefined;
var nonBlockedScopedVariable = undefined;
let blockScopedVariable = undefined;

// primitives
let string: string;
let number: number;
let bool: boolean;
let bigInt: bigint;
let symbol: symbol;
let unknown: unknown;

//null, absense of an object
let isNull = null;

//undefined, absense of a value
let implicitUndefined;
let setUndefined = undefined;

//arrays
let numberArray: number[] = [1, 2, 3];
let numberArrayAlt: Array<number> = [1, 2, 3];

numberArray.filter(x => x > 1);
numberArray.forEach(x => x + 1);

//arrays as stacks
numberArray.push(1);
numberArray.pop();

//arrays as queues
numberArray.unshift(1);
numberArray.shift();

//dictionary
let map: Map<string, number> = new Map();
map.set("user", 1);

//unique set
let set: Set<number> = new Set();
set.add(1);

//date
let date: Date = new Date();

//regex
let regex: RegExp = new RegExp(".");

//error
let error: Error = new Error();

//arithmetic operators
let addition = 1 + 2;
let division = 1 / 2;
let multiplication = 1 * 2;
let modulo = 1 % 2;
let increment = 1;
increment++;
let decrement = 1;
decrement--;
let exponent = 1 ** 2;

//unary operators
+true; //1
+false; //0
+"0x22"; //34
+"0022"; //22
+"3.125e7"; //31250000
-"1"; //-1

//bitwise operators
let bitwiseAnd = 1 & 2;
let bitwiseOr = 1 | 2;
let bitwiseNot = ~1;
let xor = 1 ^ 2;
let leftShift = 1 << 1;
let rightShift = 1 >> 1;
let unsignedRightShift = 1 >>> 1;

//logical operators
let and = 1 && 2;
let or = 1 || 2;
let not = !1;
let nullish = null ?? 1;

//equality operators
let equal = 1 == 1;
let strictEqual = 1 === 1;
let notEqual = 1 != 1;
let strictNotEqual = 1 !== 1;
let greaterThan = 1 > 2;
let greaterThanEqualTo = 1 >= 2;
let lessThan = 1 < 2;
let lessThanEqualTo = 1 <= 2;

//comma operator
let x = 1;
let y = 2;
(x++, y++, x + y); //5

//ternary operator
true ? 1 : 2;

//optional chaining operator
"null".indexOf("a")?.toString();

//tuple
let tuple: [string, number, boolean];

//any
let any: any;

//destructuring
let first, second: number;
let rest: number[];
[first, second, ...rest] = [1, 2, 3, 4, 5];

let dog = { color: "brown", age: 2, sound: "bark" };
let { color, age } = dog;

//never
function throwError(error: string): never { 
    throw new Error(error); 
} 

//type annotation
let implicit = 1;
let explicit: number = 2;

//object type
let obj: { x: number; y: number};

//union type
let union: string | boolean;

//type alias
type Id = string | number;
type TwoDimensionalPoint = { x: number; y: number};
type ThreeDimensionalPoint = TwoDimensionalPoint & { z: number };

//interface
interface SampleInterface {
    required: boolean;
    optional?: boolean;
    func(): void;
    funcInline: () => void;
    readonly result: string;

    override(): string;
    override(): boolean;

    get get(): number;
    set set(value: number);
}

//merge into existing interface
interface SampleInterface {
    anotherField: symbol;
} 

//interface inheritance
interface RGB {
    r: number;
    g: number;
    b: number;
}

interface Color extends RGB {
    opacity: number;
}

interface Light extends RGB {
    lumens: number;
}

//interface with generics
interface LED<RGB> {
    value: RGB
};

//interface with constrained generics
interface OLED<RGB extends { opacity: number }> {
    value: RGB
};

//interface with contrainted indexes
interface Dict<T> {
    [key: string]: T
}

//type literal
type Directions = "Up" | "Down" | "Left" | "Right";

//instanceof, custom types, array
class Rand { value: number = 1; }
let someRand = new Rand();

someRand instanceof Rand;
[] instanceof Array

//typeof, built in types
typeof 1 === 'number';
typeof someRand === 'object';
typeof (() => {}) === 'function';
typeof [1]

//in, object has property
"value" in someRand;

//enum
enum Direction {
    Up,
    Down,
    Left,
    Right,
}

//function
function sum(x: number, y: number): number {
    return x + y;
}

//anonymous function
let func = (x: number, y: number) => { return x + y };

//function with rest parameters
function getTotal(...numbers: number[]) {
    return numbers.reduce((previous, current) => { return previous + current });
}

getTotal(1,2,6,1);

//function with default value
function getTime(isUniversal: boolean = false) {
    
}

//generator function
function *fibonacci(count: number) {
    while (count > 0) {
        yield count--;
    }
}

let fib = fibonacci(2);

//generator function iteration with for loop
for (const value of fib) {
    value;
}

//generator function iteration while loop
let iterator = fib.next();

while (!iterator.done) {
    iterator.value;
    iterator = fib.next();
}

//class
class Phone {
    static emergencyNumber = "911";
    public carrier: string;
    protected number: number;
    private dataUsage: number;

    constructor(carrier: "Verizon" | "T-Mobile", number: number) {
        this.carrier = carrier;
        this.number = number;
        this.dataUsage = 0;
    }

    getCarrier(): string {
        return this.carrier;
    }

    makeCall(_number: number) {
        this.dataUsage += 256;
    }
}

//if statement
if (1) {

} else if (2) {

} else {

}

//for statement
for (let i = 1; i < 2; i++) {

}

//for statement with label

outer:
for (let i = 1; i < 2; i++) {
    inner:
    for (let j = 1; j < 2; j++) {
        if (i === 1) {
            continue inner;
        }

        break outer;
    }
}

//for in statement
for (let key in numberArray) {

}

//for of statement
for (let value of numberArray) {

}

//while statement
while (false) {

}

//do while statement
do {

}
while (0)

//switch statement
switch (1) {
    case 1: {

    }
    default: {

    }
}

//try statement
try {

} catch (err) {

} finally {

}

//built in type extension
interface String {
    size(): number;
}

String.prototype.size = function(): number {
    return this.length;
}

"hello".size();

//closure and currying
function log(errorType: string, time: string, message: string) {
    console.log(`LOGGER: [${errorType}, ${time}]: ${message}`);
}

log("INFO", new Date().toLocaleString(), "Test logging using a function.");

function logger(errorType: string) {
    return function(message: string) {
        log(errorType, new Date().toLocaleString(), message);
    };
};

let logInfo = logger("Info");
logInfo("Test logging using a closure.")

//higher order functions
interface Array<T> {
    match(predicate: (item: T) => boolean): Array<T>;
}

Array.prototype.match = function<T>(predicate: (item: T) => boolean): Array<T> {
    let results = [];

    for (const value of this) {
        if (predicate(value)) {
            results.push(value);
        }
    }

    return results;
}

let matchTestingArray = [1, 2, 3, 4, 5];
let evenNumbers = matchTestingArray.match(x => x % 2 == 0);
logInfo("Even numbers found: " + evenNumbers.join(", "));