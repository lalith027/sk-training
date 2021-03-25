// let sum = (a) => a+2;

// console.log(sum(2));

// let askMeNextGeneration = function(question, yes, no) {
//   if (confirm(question)) {
//     yes();
//   } else {
//     no();
//   }
// };


// //  function getPriceProduct(name,price, sale=0.1, id =9){
// //     return price - price * sale;
// // }

// // console.log(getPriceProduct(100,0.2));

// function askMe(question, yes, no) {
//   if (confirm(question)) {
//     yes();
//   } else {
//     no();
//   }
// }

// function showOk(){
//  console.log('ok')
// }

// function showNo(){
//     console.log('no')
//    }

// askMe("Согласны ?",showOk,showNo);
// askMeNextGeneration("Согласны ?",showOk,showNo);



// let isBigger = function(num1,num2){
//   let res;
//   if (num1 >num2){
//     res = num1;
//   }else if (num1 < num2){
//     res = num2;
//   }else{
//     res = num1;
//   } 
//   return res;
//   // return (n1>n2)? n1:n2;
// }
// console.log(isBigger(70,100));
 
let random = (min, max) => Math.floor(Math.random() * (max - min + 1) ) + min;

let rnd = random(1,1000);

if(rnd %2){
  console.log("четное" + " "+ rnd);
}else {
  console.log("нечетное"+ " "+ rnd);
}

