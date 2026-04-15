// const a = [10,20]
// a[0] = 30;
// console.log(a);


// const obj = {
//     id : 1,
//     name: "guest",
//     myData: [10, "hello", "bye bye"]
// }

// console.log(obj.loc);
// console.log(obj);
// console.log(obj.id);
// console.log(obj.name);
// console.log(obj.myData);

// //adding elements in obj
// obj.loc = "hyd";

// console.log(obj);


// const users = [
//     {
//         id: 1,
//         name: "user1",
//         loc: "hyd"
//     },
//     {
//         id: 2,
//         name: "user2",
//         loc: "hyd"
//     },
// ]
// console.log(users[0].name);



// for of - arrays
// for in - objects



// function myFun() {
//     console.log(-1);
//     return -1
// }

// console.log(myFun);
// console.log(myFun());


//addition of two numbers
// function add(num1, num2) {
//     return num1 + num2;
// }
// console.log(add(43, 2));

// function add(num1, num2) {
//     return num1 - num2;
// }
// console.log(add(40, 3));

// //anonymous(it does not contain method name)
// const myFun = function(num1, num2) {
//     return num1 + num2;
// }
// console.log(myFun(30,2));
// console.log(myFun());


const doMath = (num1, num2, op) => {
    switch (op) {
        case "+":
            console.log(`The addition of ${num1} and ${num2} is ${num1 + num2} `);
            break;
        case "-":
            console.log(`The subtraction of ${num1} and ${num2} is ${num1 - num2} `);
            break;
        case "*":
            console.log(`The multiplication of ${num1} and ${num2} is ${num1 * num2} `);
            break;
        case "/":
            console.log(`The division of ${num1} and ${num2} is ${num1 / num2} `);
            break;
        case "%":
            console.log(`The reminder of ${num1} and ${num2} is ${num1 % num2} `);
            break;
        case "**":
            console.log(`The power of ${num1} and ${num2} is ${num1 ** num2} `);
            break;
        default:
            console.log("Please pass a Valid Input");
            break;
    }
}

doMath(2, 3, "*")

let name = "riya";
 let age = 21;

 console.log("hii this is "+name+"i am "+age);
 console.log(`hii this is ${name} my age is ${age}`);