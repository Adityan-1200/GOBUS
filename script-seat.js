import {loc} from "./script-main.js";
const value_f = localStorage.getItem("from");
const value_t = localStorage.getItem("to");
const date = localStorage.getItem("date");
const s = localStorage.getItem("sum");
let sel=document.getElementsByClassName("sel");
let sel1=document.getElementsByClassName("sel");
let sel2=document.getElementsByClassName("sel");
 console.log(value_f)
 let l2=await loc();


function main(){
let c=document.getElementsByClassName("thir");
      c[0].innerHTML=`
                                  <option selected value="${value_f}"">
                                 <h3>${value_f}</h3>
                                 </option>`;
     for(let i=0;i<l2.length;i++){
            c[0].innerHTML=c[0].innerHTML+`
                                <option value="${l2[i]}" ">
                                <h3>${l2[i]}</h3>
                                </option>`
        }
        let d=document.getElementsByClassName("chenn");
         d[0].innerHTML=d[0].innerHTML+`
                                 <option selected value="${value_t}" ">
                                 ${value_t}
                                </option>`;
     for(let i=0;i<l2.length;i++){
            d[0].innerHTML=d[0].innerHTML+`
                                <option value="${l2[i]}">
                                <h3>${l2[i]}</h3>
                                </option>`
        }
        let date_1=document.getElementById("date");
        date_1.value=date
        let coun=document.querySelector(".count");
        coun.innerHTML=s
     let sum=parseInt(s);
     let min=document.querySelector(".plus");
     let plu=document.querySelector(".minus");
     min.addEventListener("click",() =>{
             sum=sum-1;
             if(sum>0){
             coun.innerHTML=sum;
             }
             else{
               console.log("please add passenger");
             }
        })
      plu.addEventListener("click",() =>{
              sum=sum+1;
              coun.innerHTML=sum;
        })
    let seat1=document.getElementsByClassName("seat_1");
    let seat2=document.getElementsByClassName("seat_2");
    let seat3=document.getElementsByClassName("seat_3");

    for(let i=0;i<20;i++){
        seat1=document.getElementsByClassName("seat_1");
        seat1[0].innerHTML=seat1[0].innerHTML+`<div class=" seat-one flex flex-col items-center border-solid border-2 border-white rounded-r-[10px] rounded-l-[10px] hover:border-green-400 "><img   class=" h-[60px] w-[80px]" src="images/seat.png" alt="seat">
        <h3 class="  font-mono">A${i+1}</h3></div>`;
        

    }
    for(let i=0;i<20;i++){
        seat2=document.getElementsByClassName("seat_2");
        seat2[0].innerHTML=seat2[0].innerHTML+`<div class="seat-two flex flex-col items-center border-solid border-2 border-white rounded-r-[10px] rounded-l-[10px] hover:border-green-400"><img class="h-[60px] w-[80px]" src="images/seat.png" alt="seat">
        `+`<h3 class="font-mono">B${i+1}</h3></div>`;
      

    }
    for(let i=1;i<21;i++){
        seat3=document.getElementsByClassName("seat_3");
        seat3[0].innerHTML=seat3[0].innerHTML+`<div  class=" seat-three flex flex-col items-center border-solid border-2 border-white rounded-r-[10px] rounded-l-[10px] hover:border-green-400 focus:border-green-800 focus:ring-2 focus:ring-green-200 "><img class=" h-[60px] w-[80px] " src="images/seat.png" alt="seat">
        <h3 class=" h font-mono">C${i}</h3></div>`;
  
    }
let allSeats = document.querySelectorAll(".seat-one");
 let selectedseat=[];
allSeats.forEach((img) => {
  img.addEventListener("click", () => {
    let a=img.nextElementSibling.textContent;
    selectedseat.push(sel[0])
    if(selectedseat.length>s){
      console.log("no more");
      return;
    }
    sel[0].innerHTML=sel[0].innerHTML+`<h3 class=" font-mono font-bold text-3xl mt-[30px] ml-2.5">${a}</h3>`; 
    localStorage.setItem("seat1",sel[0] );
    img.classList.add("bg-green-400")
    sessionStorage.setItem("seat1",sel[0].innerText);
    console.log(sel[0].innerHTML)
});
});

let allSeats1 = document.querySelectorAll(".seat-two");
allSeats1.forEach((img) => {
  img.addEventListener("click", () => {
    let a=img.nextElementSibling.textContent;
    selectedseat.push(sel1[0])
    if(selectedseat.length>s){
      console.log("no more");
      return;
    }
    sel1[0].innerHTML=sel1[0].innerHTML+`<h3 class=" font-mono font-bold text-3xl mt-[30px] ml-2.5">${a}</h3>`;
    localStorage.setItem("seat2",sel1[0] ); 
    img.classList.add("bg-green-400")
    sessionStorage.setItem("seat2",sel1[0].innerText);
    console.log(sel1[0].innerHTML)
   });
});
let allSeats2 = document.querySelectorAll(".seat-three");
allSeats2.forEach((img) => {
  img.addEventListener("click", () => {
    let a=img.nextElementSibling.textContent;
    selectedseat.push(sel2[0])
    if(selectedseat.length>s){
      console.log("no more");
      return;
    }
    sel2[0].innerHTML=sel2[0].innerHTML+`<h3 class=" font-mono font-bold text-3xl mt-[30px] ml-2.5">${a}</h3>`; 
    localStorage.setItem("seat3",sel2[0] );
    img.classList.add("bg-green-400")
    sessionStorage.setItem("seat3",sel2[0].innerText);
    console.log(sel2[0].innerHTML)
  });
});

}
main();