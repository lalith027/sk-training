var str = "lorem ipsum is simply dummy";
str2 = str[0].toUpperCase();
let flag = false;

let result =
  str[0].toUpperCase() +
  str.substring(1, 5) +
  "  " +
  str[6].toUpperCase() +
  str.substring(7, 11) +
  "  " +
  str[12].toUpperCase() +
  str.substring(13, 14) +
  "  " +
  str[15].toUpperCase() +
  str.substring(16, 21) +
  "  " +
  str[22].toUpperCase() +
  str.substring(23, 27) +
  "  ";
for (let i = 0; i < result.length; i++) {
  if (str[i] == " ") {
    flag = true;
  } else {
    if (flag == true) {
      flag = false;
    } else {
    }
  }
}

console.log(result);

let str1 = "lorem ipsum is simply dummy loreman";
let arr = str1.split(" ");
for (let i = 0; i < arr.length; i++) {
  if (arr[i].length >= 5) {
    console.log(arr[i]);
  }
}

// с помощью метода forEach найти самое длинное слово в строке lorem

function longWord(string) {
  let str3 = string.split(" ");
  let longest = 0;
  let word = null;

  str3.forEach(function (str3) {
    if (longest < str3.length) {
      longest = str3.length;
      word = str3;
    }
  });
  return word;
}
console.log(
  longWord(
    "Lorem ipsum dolor sit amet consectetur , adipisicing elit. Temporibus, quibusdam. "
  )
);

//с помощью метода map cоздать массив квадратов массива arr = [8,6,12,10];

let arr4 = [8, 6, 12, 10];

let squareNUm = arr4.map(function (arr4) {
  return arr4 ** 2;
});

alert(squareNUm);
