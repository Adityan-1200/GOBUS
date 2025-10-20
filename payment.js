const value_f = localStorage.getItem("from");
const value_t = localStorage.getItem("to");
const date = localStorage.getItem("date");
const s = localStorage.getItem("sum");
const price = localStorage.getItem("price");
let seat_one = sessionStorage.getItem("seat1");
let  seat_two = sessionStorage.getItem("seat2");
let seat_three = sessionStorage.getItem("seat3");
let  seat_final;
const dep = localStorage.getItem("dep");
const type = localStorage.getItem("type");
let from=document.getElementById("from")
from.innerHTML=value_f
let to=document.getElementById("to")
to.innerHTML=value_t
let date1=document.getElementById("date")
date1.innerHTML=date
if(seat_one !=null && seat_two==null && seat_three==null ){
    seat_final=seat_one
}
else if(seat_one ==null && seat_two!=null && seat_three==null){
    seat_final=seat_two;
}
else if(seat_one ==null && seat_two==null && seat_three!=null){
    seat_final=seat_three;
}
else if(seat_one !=null && seat_two!=null && seat_three==null){
    seat_final=seat_two+seat_one;
}
else if(seat_one ==null && seat_two!=null && seat_three!=null){
    seat_final=seat_three+seat_two;
}
else {
    seat_final=seat_three+seat_one
}

console.log(seat_final)
let seat1=document.getElementById("seat")
seat1.innerHTML=`<span id="seat" class="font-mono text-xl">${seat_final}</span>`
let pass=document.getElementById("fare")
pass.innerHTML=`<span id="fare">Ticket Fare (${s} Seats)</span>`
let tot=price*s
console.log(tot)
let price1=document.getElementById("price")
price1.innerHTML=`<span id="price">₹${tot}</span>`
let sum=tot+50;
localStorage.setItem("fare",sum)
let tottal=document.getElementById("total")
tottal.innerHTML=`<span id="total" class="text-red-500">₹${sum}</span>`
let dep1=document.getElementById("dep")
dep1.innerHTML=`<span id="dep">${dep}</span>`
let type1=document.getElementById("type")
type1.innerHTML=`<span id="type">${type}</span>`
let but1=document.querySelector(".but1")
sessionStorage.setItem("seat_final",seat_final)
but1.addEventListener("click", () => {
 let hello = document.getElementById("name").value;
let mail=document.getElementById("mail").value
let number=document.getElementById("number").value
localStorage.setItem("name",hello)
localStorage.setItem("mail",mail)
localStorage.setItem("number",number)
window.open("finalpayment.html","_self")
});
