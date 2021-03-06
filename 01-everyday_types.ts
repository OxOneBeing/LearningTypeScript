// EVERYDAY VARIABLES

// Defining variables as type compliant
const stringVariable : string = "True";
const numberVariable : number = 1;
const booleanVariable : boolean = true;
const arrayVariable : Array<any> = ["True", 1, true];
const arrayVariablevariant : any[] = ["True", 1, true];

// Defining functions as typs compliant
function anyFunc(someVariable : any) {
    return console.log('It f**king works!')
}

someVariable : any => console.log('It also f**king works!')

function returnTypeAllocations(answer) : boolean { // <-- Infers that the return type must be a boolean
    return (answer == 0 ? true : false)
}

// Anonymous functions
const names = ["Sunday", "Obinna", "Oruwhone"]
const numbers = [1, 2, 3]
names.forEach(s => names.toUpperCase()) // TS was still able to recognize the type of 'names' as 'string[]'
numbers.forEach(s => numbers.toUpperCase()) // TS was still able to recognize the type of 'names' as 'number[]'

// Object types
function xYCoordinate(x : number, y : number) {
    return("The value of the horizontal position is '" + x + "', while the the veritical position is '" + y + "'.")
}

// Optional properties
function profile(obj: (fName: string, mName?:string, lName: string)) { // <--- mName is an optional property that TS will allow
    // do something
}

// Type Alias
type Point = {
    x: number;
    y: number;
}
function xYCoordinateVariant(xY: Point) {
    return("The value of the horizontal position is '" + xY.x + "', while the the veritical position is '" + xY.y + "'.")
}

// Interfaces
interface PointInterface {
    x: number;
    y: number;
}
function xYCoordinateInterface (xY: PointInterface) {
    return "The value of the horizontal position is '" + xY.x + "', while the the veritical position is '" + xY.y + "'."
}

// Type Assertions
const myCanvas = document.getElementById("main_canvas") as HTMLCanvasElement;
const myCanvasVariant = <HTMLCanvasElement>document.getElementById("main_canvas");

// Literal types
function userAvailableNames(s: string, alignment: "Sunday" | "Obinna" | "Oruwhone") {
    // do somethig here
}
userAvailableNames("Any string", "Sunday")
// userAvailableNames("Any string", "Jibbz") <--- Error because 'Jibbz' is not found as a literal type

// Non-null Assertion Operator (Postfix !)
function liveDangerously(x?: number | null) {
    // No error
    console.log(x!.toFixed());
}

// Readup on Enums here: https://www.typescriptlang.org/docs/handbook/enums.html

// Less common primitives
    const oneHundred: bigint = BigInt(100); // <--- Creating a bigint via the BigInt function
    const anotherHundred: bigint = 100n; // <--- Creating a BigInt via the literal syntax
    // Read up on BigInt here: https://www.typescriptlang.org/docs/handbook/release-notes/typescript-3-2.html#bigint

    const fName = Symbol("name")
    const lName = Symbol("name")

    // But why is (fName === lName) returning false since they've got the exact same value???