import {loc} from "./script-main.js";
const value_f = localStorage.getItem("from");
const value_t = localStorage.getItem("to");
const date = localStorage.getItem("date");
let s = localStorage.getItem("sum");
 let l=await loc();
// console.log(value_f.toLocaleLowerCase())
// console.log(value_t.toLocaleLowerCase())
async function route() {
    let a= await fetch("http://localhost:8080/tables");
    let response= await a.json();
    let div=document.createElement("div");
   div=response
   let table=div[`${value_f.toLowerCase()}_to_${value_t.toLowerCase()}`];
  //  console.log(table)
  let bus_route=document.getElementsByClassName("bus_route")

for(let i=0;i<table.length;i++){
   bus_route[0].innerHTML=bus_route[0].innerHTML+`
   <div class= " flex justify-evenly h-[120px] gap-[78px] items-center border-2 border-solid rounded-r-[10px] rounded-l-[10px] m-4 p-1">
                <div class="bus_name">
                    <img class="h-10 w-16 " src="images/bus_logo.jpg" alt="bus_logo">
                    <h2 class=" font-mono text-sm">${table[i]["busname"]}</h2>
                </div>
                <div class="flex ustify-center items-center gap-7">
                      <div class="flex flex-col items-center">
                        <h2 class="font-bold font-mono">${table[i]["dep"]}</h2>
                        <h2 class="font-mono text-sm">${value_f.toUpperCase()}</h2>
                      </div>
                        <div class="flex">
                        <div class="h-0 w-40 border-dotted border-2 mt-2.5"></div>
                        <h2 class="relative bottom-3 right-25 font-mono text-sm">${table[i]["dur"]}</h2>
                        <img class="h-7 w-7 relative right-18 bottom-2" src="images/bus-dest.png" alt="bus_img">
                        </div>
                        <div class="flex flex-col items-center">
                        <h2 class="font-bold font-mono">${table[i]["arr"]}</h2>
                        <h2 class="font-mono text-sm">${value_t.toUpperCase()}</h2>
                        </div>
                </div>
                <div class="flex justify-center items-center gap-[30px]">
                    <h2 class=" price font-mono font-bold text-2xl">${table[i]["price"]}</h2>
                
                   
                    </div>
            <button class="cursor-pointer h-[50px] w-[100px] border-2 border-solid bg-green-400 rounded-r-[10px] rounded-l-[10px] hover:bg-green-600 hover:text-amber-50">
                            <a href="seat.html">Book Now</a>
                    </button>
   
   `
   let price=table[i]["price"]
   localStorage.setItem("price",price );
   let dep=table[i]["dep"]
   localStorage.setItem("dep",dep );
   let type=table[i]["feature"]
   localStorage.setItem("type",type );
  //  console.log(type)
   let ac=document.getElementById("ac");
   ac.addEventListener("click",() =>{
   if(table[i]["feature"]=="AC"){
      bus_route[0].innerHTML=`
   <div class= " flex justify-center h-[120px] gap-[80px] items-center border-2 border-solid rounded-r-[10px] rounded-l-[10px] m-4 p-2">
                <div class="bus_name">
                    <img class="h-10 w-16 " src="images/bus_logo.jpg" alt="bus_logo">
                    <h2 class="">${table[i]["busname"]}</h2>
                </div>
                <div class="flex ustify-center items-center gap-7">
                      <div class="flex flex-col items-center">
                        <h2 class="font-bold font-mono">${table[i]["dep"]}</h2>
                        <h2 class="font-mono text-sm">${value_f.toUpperCase()}</h2>
                      </div>
                        <div class="flex">
                        <div class="h-0 w-40 border-dotted border-2 mt-2.5"></div>
                       <h2 class="relative bottom-3 right-25 font-mono text-sm">${table[i]["dur"]}</h2>
                        <img class="h-7 w-7 relative right-18 bottom-2" src="images/bus-dest.png" alt="bus_img">
                        </div>
                        <div class="flex flex-col items-center">
                        <h2 class="font-bold font-mono">${table[i]["arr"]}</h2>
                        <h2 class="font-mono text-sm">${value_t.toUpperCase()}</h2>
                        </div>
                </div>
                <div class="flex justify-center items-center gap-[30px]">
                    <h2 class=" price font-mono font-bold text-2xl">${table[i]["price"]}</h2>
                    
            <button class="cursor-pointer h-[50px] w-[100px] border-2 border-solid bg-green-400 rounded-r-[10px] rounded-l-[10px] hover:bg-green-600 hover:text-amber-50">
                            <a href="seat.html">Book Now</a>
                    </button>`
      // console.log("ac")
      // console.log(table[i])
}})
let sleeper=document.getElementById("sleeper");
   sleeper.addEventListener("click",() =>{
   if(table[i]["feature"]=="SLEEPER"){
      bus_route[0].innerHTML=`
   <div class= " flex justify-center h-[120px] gap-[80px] items-center border-2 border-solid rounded-r-[10px] rounded-l-[10px] m-4 p-2">
                <div class="bus_name">
                    <img class="h-10 w-16 " src="images/bus_logo.jpg" alt="bus_logo">
                    <h2 class="">${table[i]["busname"]}</h2>
                </div>
                <div class="flex ustify-center items-center gap-7">
                      <div class="flex flex-col items-center">
                        <h2 class="font-bold font-mono">${table[i]["dep"]}</h2>
                        <h2 class="font-mono text-sm">${value_f.toUpperCase()}</h2>
                      </div>
                        <div class="flex">
                        <div class="h-0 w-40 border-dotted border-2 mt-2.5"></div>
                        <h2 class="relative bottom-3 right-25 font-mono text-sm">${table[i]["dur"]}</h2>
                        <img class="h-7 w-7 relative right-18 bottom-2" src="images/bus-dest.png" alt="bus_img">
                        </div>
                        <div class="flex flex-col items-center">
                        <h2 class="font-bold font-mono">${table[i]["arr"]}</h2>
                        <h2 class="font-mono text-sm">${value_t.toUpperCase()}</h2>
                        </div>
                </div>
                <div class="flex justify-center items-center gap-[30px]">
                    <h2 class=" price font-mono font-bold text-2xl">${table[i]["price"]}</h2>
            <button class="cursor-pointer h-[50px] w-[100px] border-2 border-solid bg-green-400 rounded-r-[10px] rounded-l-[10px] hover:bg-green-600 hover:text-amber-50">
                            <a href="seat.html">Book Now</a>
                    </button>`
      // console.log("sleeper")
      // console.log(table[i])
}})
let seater=document.getElementById("seater");
   seater.addEventListener("click",() =>{
   if(table[i]["feature"]=="SEATER"){
      bus_route[0].innerHTML=`
   <div class= " flex justify-center h-[120px] gap-[80px] items-center border-2 border-solid rounded-r-[10px] rounded-l-[10px] m-4 p-2">
                <div class="bus_name">
                    <img class="h-10 w-16 " src="images/bus_logo.jpg" alt="bus_logo">
                    <h2 class="">${table[i]["busname"]}</h2>
                </div>
                <div class="flex ustify-center items-center gap-7">
                      <div class="flex flex-col items-center">
                        <h2 class="font-bold font-mono">${table[i]["dep"]}</h2>
                        <h2 class="font-mono text-sm">${value_f.toUpperCase()}</h2>
                      </div>
                        <div class="flex">
                        <div class="h-0 w-40 border-dotted border-2 mt-2.5"></div>
                        <h2 class="relative bottom-3 right-25 font-mono text-sm">${table[i]["dur"]}</h2>
                        <img class="h-7 w-7 relative right-18 bottom-2" src="images/bus-dest.png" alt="bus_img">
                        </div>
                        <div class="flex flex-col items-center">
                        <h2 class="font-bold font-mono">${table[i]["arr"]}</h2>
                        <h2 class="font-mono text-sm">${value_t.toUpperCase()}</h2>
                        </div>
                </div>
                <div class="flex justify-center items-center gap-[30px]">
                    <h2 class=" price font-mono font-bold text-2xl">${table[i]["price"]}</h2>
                   
            <button class="cursor-pointer h-[50px] w-[100px] border-2 border-solid bg-green-400 rounded-r-[10px] rounded-l-[10px] hover:bg-green-600 hover:text-amber-50">
                            <a href="seat.html">Book Now</a>
                    </button>`
      // console.log("seater")
      // console.log(table[i])
}})
let track=document.getElementById("track");
   track.addEventListener("click",() =>{
   if(table[i]["feature"]=="TRACK"){
      bus_route[0].innerHTML=`
   <div class= " flex justify-center h-[120px] gap-[80px] items-center border-2 border-solid rounded-r-[10px] rounded-l-[10px] m-4 p-2">
                <div class="bus_name">
                    <img class="h-10 w-16 " src="images/bus_logo.jpg" alt="bus_logo">
                    <h2 class="">${table[i]["busname"]}</h2>
                </div>
                <div class="flex ustify-center items-center gap-7">
                      <div class="flex flex-col items-center">
                        <h2 class="font-bold font-mono">${table[i]["dep"]}</h2>
                        <h2 class="font-mono text-sm">${value_f.toUpperCase()}</h2>
                      </div>
                        <div class="flex">
                        <div class="h-0 w-40 border-dotted border-2 mt-2.5"></div>
                        <h2 class="relative bottom-3 right-25 font-mono text-sm">${table[i]["dur"]}</h2>
                        <img class="h-7 w-7 relative right-18 bottom-2" src="images/bus-dest.png" alt="bus_img">
                        </div>
                        <div class="flex flex-col items-center">
                        <h2 class="font-bold font-mono">${table[i]["arr"]}</h2>
                        <h2 class="font-mono text-sm">${value_t.toUpperCase()}</h2>
                        </div>
                </div>
                <div class="flex justify-center items-center gap-[30px]">
                    <h2 class=" price font-mono font-bold text-2xl">${table[i]["price"]}</h2>
                    
            <button class="cursor-pointer h-[50px] w-[100px] border-2 border-solid bg-green-400 rounded-r-[10px] rounded-l-[10px] hover:bg-green-600 hover:text-amber-50">
                            <a href="seat.html">Book Now</a>
                    </button>`
      // console.log("track")
      // console.log(table[i])
}})
let newbus=document.getElementById("newbus");
   newbus.addEventListener("click",() =>{
   if(table[i]["feature"]=="NEWBUS"){
      bus_route[0].innerHTML=`
   <div class= " flex justify-center h-[120px] gap-[80px] items-center border-2 border-solid rounded-r-[10px] rounded-l-[10px] m-4 p-2">
                <div class="bus_name">
                    <img class="h-10 w-16 " src="images/bus_logo.jpg" alt="bus_logo">
                    <h2 class="">${table[i]["busname"]}</h2>
                </div>
                <div class="flex ustify-center items-center gap-7">
                      <div class="flex flex-col items-center">
                        <h2 class="font-bold font-mono">${table[i]["dep"]}</h2>
                        <h2 class="font-mono text-sm">${value_f.toUpperCase()}</h2>
                      </div>
                        <div class="flex">
                        <div class="h-0 w-40 border-dotted border-2 mt-2.5"></div>
                        <h2 class="relative bottom-3 right-25 font-mono text-sm">${table[i]["dur"]}</h2>
                        <img class="h-7 w-7 relative right-18 bottom-2" src="images/bus-dest.png" alt="bus_img">
                        </div>
                        <div class="flex flex-col items-center">
                        <h2 class="font-bold font-mono">${table[i]["arr"]}</h2>
                        <h2 class="font-mono text-sm">${value_t.toUpperCase()}</h2>
                        </div>
                </div>
                <div class="flex justify-center items-center gap-[30px]">
                    <h2 class=" price font-mono font-bold text-2xl">${table[i]["price"]}</h2>
                    
            <button class="cursor-pointer h-[50px] w-[100px] border-2 border-solid bg-green-400 rounded-r-[10px] rounded-l-[10px] hover:bg-green-600 hover:text-amber-50">
                            <a href="seat.html">Book Now</a>
                    </button>`
      // console.log("newbus")
      // console.log(table[i])
}})
let m=table[i]["dep"]
let h=m.match(/(\d+):(\d+) (\w+)/);
let t=parseInt(m[1]);
let y=m[5]
console.log(y)

let before=document.getElementById("before");
   before.addEventListener("click",() =>{
   if(t<10&&y=="A"){
      bus_route[0].innerHTML=bus_route[0].innerHTML+`
   <div class= " flex justify-center h-[120px] gap-[80px] items-center border-2 border-solid rounded-r-[10px] rounded-l-[10px] m-4 p-2">
                <div class="bus_name">
                    <img class="h-10 w-16 " src="images/bus_logo.jpg" alt="bus_logo">
                    <h2 class="">${table[i]["busname"]}</h2>
                </div>
                <div class="flex ustify-center items-center gap-7">
                      <div class="flex flex-col items-center">
                        <h2 class="font-bold font-mono">${table[i]["dep"]}</h2>
                        <h2 class="font-mono text-sm">${value_f.toUpperCase()}</h2>
                      </div>
                        <div class="flex">
                        <div class="h-0 w-40 border-dotted border-2 mt-2.5"></div>
                        <h2 class="relative bottom-3 right-25 font-mono text-sm">${table[i]["dur"]}</h2>
                        <img class="h-7 w-7 relative right-18 bottom-2" src="images/bus-dest.png" alt="bus_img">
                        </div>
                        <div class="flex flex-col items-center">
                        <h2 class="font-bold font-mono">${table[i]["arr"]}</h2>
                        <h2 class="font-mono text-sm">${value_t.toUpperCase()}</h2>
                        </div>
                </div>
                <div class="flex justify-center items-center gap-[30px]">
                    <h2 class=" price font-mono font-bold text-2xl">${table[i]["price"]}</h2>
                    
            <button class="cursor-pointer h-[50px] w-[100px] border-2 border-solid bg-green-400 rounded-r-[10px] rounded-l-[10px] hover:bg-green-600 hover:text-amber-50">
                            <a href="seat.html">Book Now</a>
                    </button>`
      console.log(table[i]["dep"])
}})

   }
    let range=document.querySelector(".range");
      range.addEventListener("click",e =>{
           let percent=((e.offsetX/e.target.getBoundingClientRect().width)*100);
           document.querySelector(".circle2").style.left=percent+"%";
          //  currentsong.volume=percent/100;
          let a=(percent/100)*4000
          console.log(a)
          let fp=document.querySelector(".fp")
          fp.innerHTML=parseInt(a)
          bus_route[0].innerHTML = "";
          for (let i = 0; i < table.length; i++) {
          if (table[i]["price"]<a){
            bus_route[0].innerHTML=bus_route[0].innerHTML+`
   <div class= " flex justify-center h-[120px] gap-[80px] items-center border-2 border-solid rounded-r-[10px] rounded-l-[10px] m-4 p-2">
                <div class="bus_name">
                    <img class="h-10 w-16 " src="images/bus_logo.jpg" alt="bus_logo">
                    <h2 class="">${table[i]["busname"]}</h2>
                </div>
                <div class="flex ustify-center items-center gap-7">
                      <div class="flex flex-col items-center">
                        <h2 class="font-bold font-mono">${table[i]["dep"]}</h2>
                        <h2 class="font-mono text-sm">${value_f.toUpperCase()}</h2>
                      </div>
                        <div class="flex">
                        <div class="h-0 w-40 border-dotted border-2 mt-2.5"></div>
                        <h2 class="relative bottom-3 right-25 font-mono text-sm">${table[i]["dur"]}</h2>
                        <img class="h-7 w-7 relative right-18 bottom-2" src="images/bus-dest.png" alt="bus_img">
                        </div>
                        <div class="flex flex-col items-center">
                        <h2 class="font-bold font-mono">${table[i]["arr"]}</h2>
                        <h2 class="font-mono text-sm">${value_t.toUpperCase()}</h2>
                        </div>
                </div>
                <div class="flex justify-center items-center gap-[30px]">
                    <h2 class=" price font-mono font-bold text-2xl">${table[i]["price"]}</h2>
                    
            <button class="cursor-pointer h-[50px] w-[100px] border-2 border-solid bg-green-400 rounded-r-[10px] rounded-l-[10px] hover:bg-green-600 hover:text-amber-50">
                            <a href="seat.html">Book Now</a>
                    </button>`
          }}
      })

  }
route(); 


function main(){
let from1=document.getElementById("ff")
from1.innerHTML=value_f
    let to1=document.getElementById("tt")
    to1.innerHTML=value_t
    let c=document.getElementById("thii");
    let d1=document.getElementsByClassName("froom")
    c.addEventListener("click",() =>{
       if(d1[0].classList.contains("hidden")){
              d1[0].classList.remove('hidden')}
              else{
            d1[0].classList.add("hidden")
          }})
            for(let i=0;i<l.length;i++){
            d1[0].innerHTML=d1[0].innerHTML+`
                                
                                <div id="frooom" class="click flex gap-[7px] items-center p-3 cursor-pointer hover:bg-green-200  ">
                                <img class="h-[40px] w-[40px]" src="images/bus_dept.png" alt="bus_img">
                                <h3 id="content" class="font-mono " value="${l[i]}">${l[i]}</h3>
                                </div>
                                
                                `
                   
            }  
             for(let i=0;i<10;i++)  {    
            let d2 = document.querySelectorAll(".click")[i];
                    let d3=d2.lastElementChild.innerHTML
                   d2.addEventListener("click", () => {
                   localStorage.setItem("from", d3);
                    console.log(d3);
                    from1.innerHTML = d3; 
  });}       
            
        let d=document.getElementById("chenn");
    let c1=document.getElementsByClassName("too1")
    d.addEventListener("click",() =>{
       if(c1[0].classList.contains("hidden")){
              c1[0].classList.remove('hidden')}
              else{
            c1[0].classList.add("hidden")
          }})
            for(let i=0;i<l.length;i++){
            c1[0].innerHTML=c1[0].innerHTML+`
                                
                                <div id="tooo" class="click2 flex gap-[7px] items-center p-3 cursor-pointer hover:bg-green-200  ">
                                <img class="h-[40px] w-[40px]" src="images/bus-stop.png" alt="bus_img">
                                <h3 id="content2" class="font-mono " value="${l[i]}">${l[i]}</h3>
                                </div>
                                
                                `
            }
  
            for(let i=0;i<10;i++)  {  
              let c2 = document.querySelectorAll(".click2")[i];  
                    let c3=c2.lastElementChild.innerHTML
                   c2.addEventListener("click", () => {
                   localStorage.setItem("to", c3);
                    console.log(c3);
                    to1.innerHTML = c3; 
                
  });}
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
 let sea=document.querySelector(".s");
 sea.addEventListener("click",()=>{
       localStorage.setItem("place",value_f);
       localStorage.setItem("to00",value_t);
       localStorage.setItem("date",date);
       localStorage.setItem("sun",s);
      window.location.reload()

 })
 
 document.querySelector(".but2").addEventListener("click",() =>{
    window.location.reload()
})
document.querySelector(".help").addEventListener("mouseenter",() =>{
  let chold=document.getElementsByClassName("chold")
  chold[0].innerHTML=`<div class=" chold absolute  h-20 w-65 bg-gray-200 visible rounded-l-[10px] rounded-r-[10px]  ">
                        <h3 class="font-mono text-2xl mt-1.5 font-bold">
                        +91 1234567890
                        </h3>
                        <h3 class="font-mono text-2xl mt-1.5 font-bold">
                         Example@gmail.com
                        </h3>
                    </div>`
  console.log(chold)
})
document.querySelector(".help").addEventListener("mouseleave",() =>{
  let chold=document.getElementsByClassName("chold")
  chold[0].innerHTML=`<div class=" chold absolute  h-20 w-65 bg-gray-200 invisible rounded-l-[10px] rounded-r-[10px]  ">
                        <h3 class="font-mono text-2xl mt-1.5 font-bold">
                        +91 1234567890
                        </h3>
                        <h3 class="font-mono text-2xl mt-1.5 font-bold">
                         Example@gmail.com
                        </h3>
                    </div>`
  console.log(chold)
})
document.querySelector(".offer").addEventListener("mouseenter",() =>{
  let chold=document.getElementsByClassName("chold2")
  chold[0].innerHTML=`<div class=" chold2 absolute  h-20  bg-gray-200 visible rounded-l-[10px] rounded-r-[10px]  ">
                        <h3 class="font-mono text-lg mt-1.5 font-bold">
                        Buy Two get One free
                        </h3>
                        <h3 class="font-mono text-lg mt-1.5 font-bold">
                         10% Off on UPI Payments
                        </h3>
                    </div>`
  console.log(chold)
})
document.querySelector(".offer").addEventListener("mouseleave",() =>{
  let chold=document.getElementsByClassName("chold2")
  chold[0].innerHTML=`<div class=" chold2 absolute  h-20 w-65 bg-gray-200 invisible rounded-l-[10px] rounded-r-[10px]  ">
                        <h3 class="font-mono text-2xl mt-1.5 font-bold">
                        +91 1234567890
                        </h3>
                        <h3 class="font-mono text-2xl mt-1.5 font-bold">
                         Example@gmail.com
                        </h3>
                    </div>`
  console.log(chold)
})

       }
main();

       