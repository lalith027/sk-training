

let str = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit, magni?';

let words = str.split(' ');
let tmp = words[8]
// words[7]
for (let i=0; i <tmp.length; i++){
    if(tmp[i] !=',' && tmp[i] !='.'){
        console.log(tmp[i]);
    }
}
// console.log(words[7]);



let users = [];

for(let i =0; 1; i++){
    let str = prompt("Input your name","");
    if(str == null){
        console.log("cancel was pressed");
       break;
    }else{
    users.push(str);
}
}

console.log(users);

// let array = [1, 2, 3];
// array.push(4);
// console.log(array[3]);

// let matrix =[
//     [1,2,3,0],
//     [4,5,6],
//     [7,8,9],
// ];
// console.log(matrix[2][2]);

// let sum =0;


// for(let i=0; i< matrix.length;i++){
//     for (let j=0; j<matrix[i].length;j++){
//     console.log(matrix[i][j]);
//    sum+=matrix[i][j];}
// }
// console.log(sum);


// let arr = new Array(1,2,3);
// let mas = [];
// let alt = new Array(5);
// let sum =0;
// console.log(array[0]);

// for(let i= array.length-1 ;i >=0; i--){
    // sum+=array[i];//sum =sum /=array[i]
    // console.log(array[i]);

// }
// console.log(sum);