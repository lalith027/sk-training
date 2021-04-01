var str = "lorem ipsum is simply dummy";
str2 =str[0].toUpperCase();
let flag = false;


let result = str[0].toUpperCase() +str.substring(1,5) + "  "+
str[6].toUpperCase() +str.substring(7,11) + "  " +

str[12].toUpperCase() +str.substring(13,14) + "  "+

str[15].toUpperCase() +str.substring(16,21) + "  "+

str[22].toUpperCase() +str.substring(23,27) + "  "
; 


for (let i = 0; i < result.length; i++) {

    if(str[i] == ' '){

    flag =true;
    }else{
    if(flag == true){
   
     flag = false;
    }else{

    }

   }

    
}

console.log(result);