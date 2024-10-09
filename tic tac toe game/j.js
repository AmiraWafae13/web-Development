/*const cells = document.querySelectorAll(".cell");
const statusText = document.querySelectorAll("#statusText");
const restart = document.querySelectorAll("#restart");
const Winconditions = [
    [0 ,1 ,2],
    [3 ,4 ,5] ,
    [6 ,7 ,8],
    [0 ,3 ,6],
    [1 ,4 ,7],
    [2 ,5 ,8],
    [0 ,4 ,8],
    [2 ,4 ,6],
  ]
function type(){
   //cell = "X";
   // document.write("X");

cells ='X';
}*/
/*
cell = document.querySelectorAll("cellcontent") ;
function type(){
    document.querySelector("#cellcontent").innerHTML = "X";

}
l= 1;
var livre = new Object();

L=l.toString();
*/

let title = document.querySelector('.title');
let turn = 'x';

function type(id){
 let element =  document.getElementById(id);

  if(turn ==='x' && element.innerHTML =='' ){
  element.innerHTML = 'X';  
  turn = 'o';
  title.innerHTML = 'O';
  }
  else if(turn === 'o' && element.innerHTML == '') {
     element.innerHTML = 'O';
    turn = 'x'; 
    title.innerHTML = 'X';
  }
   winner();
  }
let cells = [];


function winner(){
  for(let  i = 1; i<10; i++){
    cells[i] = document.getElementById('cell' + i).innerHTML;
  }  
  if(cells[1]== cells[2] &&  cells[2]==cells[3] && cells[3]!= ''){
  end(1,2,3);}
 else if(cells[4]== cells[5] &&  cells[5]==cells[6] && cells[6]!= ''){
  end(4,5,6);
  }
  else if(cells[7]== cells[8] &&  cells[8]==cells[9] && cells[9]!= ''){
    end(7,8,9);
  }
 else if(cells[1]== cells[5] &&  cells[5]==cells[9] && cells[9]!= ''){
end(1,5,9);
  }
 else if(cells[3]== cells[5] &&  cells[5]==cells[7] && cells[7]!= ''){
  end(3,5,7);
  }
 else if(cells[1]== cells[4] &&  cells[4]==cells[7] && cells[7]!= ''){
  end(1,4,7);
  }
 else if(cells[3]== cells[6] &&  cells[6]==cells[9] && cells[9]!= ''){
  end(3,6,9);
  }
 
  }

function end(num1,num2,num3){
title.innerHTML= `${cells[num1]}winner `;
document.getElementById('cell'+num1).style.background = '#b0c4de';
document.getElementById('cell'+num2).style.background = '#b0c4de';
document.getElementById('cell'+num3).style.background = '#b0c4de';
setInterval(function(){
  title.innerHTML += '.' ;
}, 1000);
setTimeout(function(){
  location.reload()
},4000);
}

