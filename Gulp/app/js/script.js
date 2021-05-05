function showHelloWorld(){
  alert(this.innerHTML);
  this.innerHTML ="Click me";
  }

function showValue(){
  if (event.altKey == true){
    console.log("Altkey was pressed");
  }else {
    console.log("Altkey wasn't pressed");
  }
  console.log(event.type);
}

// function showValue(){
//   alert(btn2.value);
// }
// btn.onclick = function(){
//   alert("Hello World 3");
// }

// let evnt ="click";

// btn.addEventListener(evnt,  function(){alert("Hello World 4");} );

// let evnt ="click";

// btn.addEventListener(evnt,  showHelloWorld);

// btn2.addEventListener(evnt, showValue);

// let evnt ="click";

// btn.addEventListener(evnt,showValue);

// function showValue(){
//   alert(text.value);
// }

