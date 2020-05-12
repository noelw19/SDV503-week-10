//floor rounds down
console.log(Math.floor(1.7));
//round rounds to the nearest decimal point
console.log(Math.round(3.45));
//ceil rounds up the the nearest decimal
console.log(Math.ceil(0.38));
//random generates random numbers for you to use.. can be used with other math. methods
console.log(Math.round(Math.random() * 1000));
//function use of math.floor and random
function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
}

console.log(getRandomInt(1000));

//strings

// .CharAt(index)
console.log("Noel".charAt(1));
//.sunstring(startindex, endindex)
console.log("youtube".substring(3, 6));


var a = "aaa"
var b = "ab"

console.log(a < b);

console.log("Gary SDV".indexOf('Gary')); //is case sensitive.

function FindInString(x, y) {
    return x.indexOf(y) !== -1
}

console.log(FindInString("hello", "l"));

//find a certain letter in a large string
const str = "Hello World is an old way to print strings in your console"


let count = 0
var find = str.indexOf("a")
while (find !== -1) {
    count++
    find = str.indexOf('a', find + 1)
}

console.log(count);


//refactor above code...
const str1 = "Hello World is an old way to print strings in your console"

let lala = Array.from(str1)
console.log(lala);

let regex = /a*/gi;
let count1 = 0;
for (let i of str1) {
    console.log(i);

}

console.log(count1);

//startWith endWith()
//'SDV NMIT'.startsWith('SDV')
'SDV NMIT'.endsWith('Dale')

var str2 = "phil"
//.split() will return array of substrings
console.log(str2.split(''));

//replace a string
//.replace(string, replacestring)
console.log(str2.replace('phil', 'Noel'));
let hi = str2.replace('phil', 'Noel')
console.log(str2);
console.log(hi);

//objects

var obj = {}
var arr = [1, 2, 3, 4]

obj.array = arr;
console.log(obj);

//object.property.name - dot notation
//object['propertyName'] - bracket notation

obj.title = 'SDV'
console.log(obj);

//we have added property title to the obj with the value 'SDV'


//prototypal inhertitance
//function has to be added as javascript obj property.

function exampleClass() {
    this.firstName = "Noel"
    this.lastname = function () {
        console.log(this.firstName);

    }
    var test = new exampleClass()
    test.prototype.sayMyName() //constructor
    //to add functions of a class simply add prototype property.
}

//Array

var arrayOne = [1, 2, 3, 4]
arrayOne.push(5) //adds value to end of array
console.log(arrayOne);

arrayOne.pop(); //pops value off the end of array
console.log(arrayOne);

arrayOne.shift(); // removes from the front of array
console.log(arrayOne);

arrayOne.unshift(1) //addes to the front of array


let lol = arrayOne.splice(1, 3) // removes at index... and can place removed items elsewhere
console.log(arrayOne);
console.log(lol);

for (let i = 0; i < lol.length; i++) {
    let num = i;
    console.log(num);
    
    if (num === 2) {
        console.log('Win');
        
        
    } else {
        console.log('Lose');
        

    }
}

//object is extensible()

var numbersGary = [1, 2, 3, 4]
console.log(typeof numbersGary);

