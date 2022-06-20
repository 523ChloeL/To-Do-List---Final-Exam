//select elements
const clear = document.queryStelector(".clear");
const dateElement = document.getElementById("date");
const list = document.getElementById("list");
const input = document.getElementById("input");

//classes names
const CHECK = "fa-check-circle";
const UNCHECK = "fa-circle-thin";
const LINE_THROUGH = "lineThrough";

//show today's date
const options = (weekday:"long", month:"short", day:"numeric");
const today = new Date();

dateElement.innerHTML = today.toLocaleDateString("en-US", options);

//add-to-do function
function addToDo(toDo) {
  const item = '<li class="item"> <i class="fa fa-circle-thin co" job="complete" id="0"></i> <p class="text">${toDo}$</p> <i class="fa fa-trash-o de" job="delete" id="0"></i></li>';
  const position = "beforehand";
}

 //add item to the list using the enter key
 document.addEventListener("keyup",function(even){
   if(event.keyCode == 13){
     const toDo = input.value;
     //if the input is not empty
     if(toDo){
       addToDo(toDo);
     }
   }
 }
