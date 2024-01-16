// console.log("Hello world")
// console.log("a"/"c")
// console.log(typeof 100)
// console.log(typeof "fun")
// console.log(typeof "fun")
// console.log(typeof 3.5)
// console.log(typeof "undefined")

// console.log("type-of-function")

function double(n){
    return n*2;
}

// function sum(a, b){
//     return a+b;
// }

// console.log(double (4));
// console.log(double (10));
// console.log(double (100));

// function doubleAndsum(x, y){
//     return sum(double(x), double(y));
// }

// console.log(doubleAndsum(10,20))

// function welcome(name){
//    return "Hi, "+ name + " ❤️"
// }

// console.log(welcome("srikanth"))

// const doubleArrow = (n) => n*2;

// console.log(doubleArrow(200))

// const sum = (a, b) => a*b;

// // console.log(sum(10, 20))
// (function double (n){
//     console.log(n*2);
// })(80);

// (function (a,b){
//     var c= a + b;
//     let x= a-b;
//     const y= a*b;
//     console.log(c,x,y);
// })(3, 10)

// ((t) => t*2)(4)



// var r1 = [90, 40];
// var r2 = [30, 80];
// var r3 = [...r1, ...r2];

// console.log(r3)


// for (var index = 0; index < marks.length; index++){
//     console.log("index is", index);
//     console.log("value is", marks[index]);

// }
// for (var mark of marks){
//     console.log("mark is", mark);

// }

// for (var index in marks){
//     console.log("'in' index is ", index);
//     console.log("'in' value is", marks[index]);
// }

var marks=[100, 200, 300, 150, 135, 76, 87,29];

var highest = marks[0];
for (var mark of marks){
    if (highest < marks){
        highest = mark;
    }
}

console.log(highest);