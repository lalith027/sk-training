// let cnt = document.body.children.length;

// for (let i = 0; i < cnt; i++){
//   console.log(document.body.children[i]);
// }

// let count = document.body.children.length;
// console.log(count)

// for(let i=0; i<count;i++){
//   console.log(document.body.children[i].nodeName);
//   if(document.body.children[i].children.length > 0){

//     for(let j=0; j< document.body.children[i].children.length; j++ ){
//       console.log(document.body.children[i].children[j].nodeName);
//     }
//   } else{
//     console.log("Дочерних елементов нет");
//   }
// }

// let body = document.body;

// let count = body.children.length;
// console.log(count)

// for(let i=0; i<count;i++){
//   console.log(body.children[i].nodeName);
//   // console.log(body.children[i].previousElementSibling);

//   if(body.children[i].children.length > 0){

//     for(let j=0; j< body.children[i].children.length; j++ ){
//       console.log(body.children[i].children[j].nodeName);
//     }
//   } else{
//     console.log("Дочерних елементов нет");
//   }
// }

// let body = document.body;

// let count = body.children.length;

// for(let i=0; i<count;i++){
//   if(body.children[i].nodeName == 'UL'){
//     console.log(body.children[i].nodeName);

//     if(body.children[i].children.length > 0){

//       for(let j=0; j< body.children[i].children.length; j++ ){
//         if(j == 1){
//           console.log(body.children[i].children[j].innerHTML);
//           break;
//         }

//       }
//   }

//   }
// }

// let body = document.body;

// let count = body.children.length;

// console.log(count);

// for (let i = 0; i < count; i++) {
//   if (body.children[i].nodeName == "UL") {
//     console.log(body.children[i].nodeName);

//     if (body.children[i].children.length > 0) {
//       for (let j = 0; j < body.children[i].children.length; j++) {
//         if (j == 1) {
//           console.log(body.children[i].children[j].innerHTML);
//           body.children[i].children[j].innerHTML ="CSS12";
//           break;
//         }
//       }
//     }
//   }
// }

// let elem = document.getElementById("box").innerHTML;


// box.innerHTML ="Hello world"; 
// box.style.background ="red";
// console.log(box);
// let elems = document.getElementsByTagName('DIV')[2].innerHTML;
// console.log(elems);

let elem = document.getElementsByClassName('list')[0].innerHTML;
console.log(elem);

 let body = document.body;

let count = body.children.length;

console.log(count);

for (let i = 0; i < count; i++) {
  if (body.children[i].nodeName == "UL") {
    console.log(body.children[i].nodeName);

    if (body.children[i].children.length > 0) {
      for (let j = 0; j < body.children[i].children.length; j++) {
        if (j == 1) {
          console.log(body.children[i].children[j].innerHTML);
          body.children[i].children[j].innerHTML ="CSS1";
          break;}}}}}


// let elems = document.getElementsByTagName('DIV')[0].innerHTML;
// div.innerHTML ="Texнологии";
// elems.style.backgroundColor ="red";
// console.log(elems);



// console.log(document.getElementsByTagName("div").innerHTML);
// div.innerHTML ="hello world";
// div.style.background ="red";
// let body =document.body

// let count =body.children.length

// for (let i = 0; i < count; i++) {
//     if (body.children[i].nodeName == "") {
//       console.log(body.children[i].nodeName);}}