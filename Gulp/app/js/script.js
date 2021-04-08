// let i = 0;
// let j = 1;
// i = j;
// j = 2;
// // console.log(i);
// // console.log(j);

// let obj1 = { name: "Lalit", age: 30 };

// delete obj1.name;
// if ("name" in obj1) {
//   console.log(true);
// } else {
//   console.log(false);
// }

// let obj2 = {};

// for (let key in obj1) {
//   obj2[key] = obj1[key];
// }

// for (let key in obj2) {
//   console.log(obj2[key]);
// }

// let obj3 = Object.assign({}, obj2);

// for (let key in obj3) {
//   console.log(obj3[key]);
// }

// let obj4 = JSON.stringify(obj3);
// console.log(obj4);
// obj4 = JSON.parse(obj4);

// for (let key in obj4) {
//   console.log(obj4[key]);
// }

// let arr = [
//   { "First name": "Ivan", age: 32, title: "F-1" },
//   { "First name": "Alex", age: 33, title: "F-1" },
//   { "First name": "Anna", age: 29, title: "F-1" },
//   { "First name": "Lana", age: 31, title: "F-2" },
// ];

// for(let item of arr){
//     if(item.title=="F-1"){
//         console.log(item)}
// }


// let obj1 = {name: "Serhii", age:30}
// obj1.getFullInfo= function(){
//     alert(this.name + " "+ this.age);
// }

// obj1.getFullInfo();


// else{console.log()}

// for (let item of arr) {
//   for (let key in item) {
//     if (key == "title") {
//       if (item[key] == "F-1") {
//         console.log(item[key]);
//       }
//     }
//   }
// }
// console.log(arr["First name"]+arr.title["F-1"]);

// let obj2 =obj1;

// obj1.name = "Alex";

// console.log(obj1);
// console.log(obj2);

// let arr = [
//   { "First name": "Ivan", age: 30, title: "Junior Dev" },
//   { "First name": "Alex", age: 30, title: "Middle Dev" },
//   { "First name": "Anna", age: 30, title: "Senior Dev" },
// ];
// console.log(arr[0]["First name"]+arr[0].title +arr[0].age);

// let obj = { "First name": "Ivan", age: 30, title: "Junior Dev" };

// arr.push(obj);
// console.log(arr[3]);

// console.log(obj.age);
// let arg ="age";
// arg ="First name";
// console.log(obj[arg]);
