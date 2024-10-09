let Quote= document.getElementById("Quote").innerHTML;
const Quote2="Be yourself; everyone else is already taken.";

const Quote1 = "It is better to be hated for what you are than to be loved for what you are not."
const list = [Quote,Quote1,Quote2];
let QuotesNBR = 3;
let n;
n=1;
//document.write(Quote);
function New(){
  document.getElementById("Quote").innerHTML= list[n];
n++;
if(n>=QuotesNBR){
  n=1;
}

}
/*
function alertyyy(){
  alert("hi");  
}
*/
function tweets(){
  

}
