// const squer = (a , b) => {
//     const result = a * b;
//     return result;
// };
// const total = squer(13, 32);
// console.log(total)



// shot form
// const squer = x => x * x;
// const total = squer(40);
// console.log(total)



// dectructuring of Array
// const name  = ["akash", "samiul", "rayhan", "Imran"];

// const [first, seconnd, ...other ] = name;
// console.log(first, seconnd, other)
// output: akash samiul [ 'rayhan', 'Imran' ]

// dectructuring of Objet
// const perso = {
//     name: "Akash",
//     age: 23, 
//     region: "islam",
//     proff: "Developer",
//     salery: 5000,
// };

// const {name, age, region, ...other} = perso;
// console.log(name, age, other) 
//Akash 23 { proff: 'Developer', salery: 5000 }


// const product = {
//     count: 5000,
//     data: [
//         { id: 1, name: "HP EliteBook", price: 20000 },
//         { id: 2, name: " EliteBook", price: 20000 },
//     ]

// };
// console.log(product.data[0].name)
// const{count, data } = product;
// console.log(count, data[1].name)


// _________________________ module 31 er 3 number video;________________________/
// // 31-3 Array map to do one line loop magic

// const number = [2, 3, 4, 5, 6, 7, 8, 9];
// const doubled = []
// for(num of number){
//     const double = num * 2;
//     doubled.push(double);
// };
// console.log(doubled)

// const number = [2, 3, 4, 5, 6, 7, 8, 9];
// long prosses
// const double = number.map(num => {
//     console.log("nmeber is: ", num)
//     return num * 2
// });
// console.log(double);

// short prosses
// const number = [2, 3, 4, 5, 6, 7, 8, 9];
// const double = number.map(num => num * 2);
// console.log(double)  // Output: [4,  6,  8, 10,12, 14, 16, 18]
    


// ///
// const friends = ["Akash", "samiul", "rayhan", "nila", "simla", "marufa"];
// const length = friends.map(frnd => frnd);
// console.log(length)  //Output: [ 'Akash', 'samiul', 'rayhan', 'nila', 'simla', 'marufa' ]




// //______________________________ module 31 er 4 ________________________//
// //31-4 foreach, filter, find, and differences between them.

 /**
 * 1. map()
 * 2. forEach()
 * 3. filter()
 * 4. find()
 */

// // forEace       // kichu return korbe na

// const number = [11,12,45,22,52,85,64,97,25,36,38,88,77,99,44,22];
// const foreace = number.forEach(num => num * 3);
// console.log(foreace)  // Output: undefined


// // filter
// const number = [11,12,45,22,52,85,64,97,25,36,38,88,77,99,44,22];
// const filter = number.filter(num => num > 30);
// const filter = number.filter(num => num > 50);
// const filter = number.filter(num => num > 70);
// const filter = number.filter(num => num > 90);
// console.log(filter, "I got all the numbers", filter.length)



// filter the odd eben numbercollect

// const number = [11,12,45,22,52,85,64,97,25,36,38,88,77,99,44,22];
// const enen = number.filter(num => num % 2 === 0 );
// console.log(enen);



//filter the odd number collect

// const number = [11,12,45,22,52,85,64,97,25,36,38,88,77,99,44,22];
// const odd = number.filter(num => num % 2 === 1);
// console.log(odd)


// nijei ajaira exprerience korechi
// const number = [11,12,45,22,52,85,64,97,25,36,38,88,77,99,44,22];
// const IQ = number.filter(num => (num + 5) % 2 === 0);
// const IQ = number.filter(num => (num + 5) % 2 === 1);
// const IQ = number.filter(num => num % 2 === 1);
// console.log(IQ)



// find
// const number = [11,92,12,45,22,52,85,64,97,25,36,38,88,77,93, 92,44,22];
// const find = number.find(num => num > 90)
// console.log(find)


// reduce

// const number = [11,12,45,22,52,85,64,97,25,36,38,88,77,99,44,22];
// const map = number.reduce((a, c) => a + c , 0)
// console.log(map)





// //_____________________________ module 31 er 5 ____________________/
// const product = [
//     {id: 1, name: "hp", priice: 40000},
//     {id: 1, name: "sumsung", priice: 30000},
//     {id: 2, name: "lenovo", priice: 30000},
//     {id: 3, name: "dell", priice: 50000},
//     {id: 4, name: "mac", priice: 110000},
// ]

// // map
// const names = product.map(p => p.name)
// console.log(names)  // Output: [ 'hp', 'lenovo', 'dell', 'mac' ]

// // forEach
// const price = product.forEach(p => console.log(p.priice));
// //Output: 40000 30000 50000 11000 

// // filter
// const filter = product.filter(p => p.priice > 50000);
// console.log(filter) // [ { id: 4, name: 'mac', priice: 110000 } ]

// // find
// const find = product.find(p => p.priice > 40000);
// console.log(find) // Output: { id: 3, name: 'dell', priice: 50000 }

// //reduce
// const products = [
//     { name: "Laptop", price: 500 },
//     { name: "Phone", price: 300 },
//     { name: "Tablet", price: 200 }
// ];
// const total = products.reduce((acum, current) => acum + current.price, 0);

// console.log(total); // Output: 1000







// //___________________________ module 31 er 6 ______________/
// 31-6 (optional) Introduction to Class and objects

class Product {
    country = "Bangladesh";
    constructor(name, age, job, salery){
        this.name = name;
        this.age = age;
        this.job = job;
        this.salery = salery;
    };

    speak(talk){
        console.log(`His The Talk About: ${talk}`)
    }
};

const imployer =new Product("Akash",23,"Developer",2200) 
console.log(imployer)

const speak = new Product("lele ata moyda");
console.log(speak)
Product.speak("Kono kichu na");