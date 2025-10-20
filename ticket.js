const value_f = localStorage.getItem("from");
const value_t = localStorage.getItem("to");
const date = localStorage.getItem("date");
const s = localStorage.getItem("sum");
const dep = localStorage.getItem("dep");
const price = localStorage.getItem("price");
const seat = sessionStorage.getItem("seat_final");
const money = localStorage.getItem("fare");
const mail = localStorage.getItem("mail");
const contacct = localStorage.getItem("contact");
const hello = localStorage.getItem("name");
const number= localStorage.getItem("number");
const type=localStorage.getItem("type")

console.log(hello)
let from=document.getElementById("from")
from.innerHTML=value_f
let namee=document.getElementById("pass")
namee.innerHTML=hello
let email=document.getElementById("mail")
email.innerHTML=mail
let to=document.getElementById("to")
to.innerHTML=value_t
let date1=document.getElementById("date")
date1.innerText=date
let seat1=document.getElementById("seat")
seat1.innerHTML=`<p id="seat">${seat}</p>`
let fare=document.getElementById("fare")
fare.innerHTML=`<p id="fare">₹${money}</p>`
let depp=document.getElementById("depp")
depp.innerHTML=dep