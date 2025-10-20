// import { handleValue } from './script-book.js'; // Calling location using API
let loca=[] //Array to store location
export async function loc() {
    let a= await fetch("https://adityan-1200.github.io/states/");
    let response= await a.text();
    let div=document.createElement("div");
    div.innerHTML=response
    let b=div.getElementsByTagName("li");
    let loca=[];
    for (let i =0; i <b.length; i++) {
        const element=b[i];
         loca.push(element.textContent); 
    }    return loca;
}
loc(); 



   
async function main(){
  let l=await loc();
  console.log(l[1]);
  
// Adding options to To and From
    let from1=document.getElementById("f")
    let to1=document.getElementById("t")
    let c=document.getElementById("thi");
    let d1=document.getElementsByClassName("from")
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
            
        let d=document.getElementById("chen");
    let c1=document.getElementsByClassName("to1")
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
               
// Passenger count
     let coun=document.querySelector(".count");
     console.log(coun);
     let sum=1;
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
              localStorage.setItem("sum", sum);
        })

//Adding fuction to button  
      let sea=document.querySelector(".s");
      sea.addEventListener("click",() =>{
       window.open("result.html","_self"); });
       
// Select date
        let date=document.getElementById("date");
        date.addEventListener("change",() =>{
          localStorage.setItem("date", date.value);
        })
//Quick book
console.log(document.querySelectorAll(".click")[4].lastElementChild )
console.log(document.querySelectorAll(".click2")[1].lastElementChild )
  document.getElementById("but11").addEventListener("click", () => {
    let a=document.querySelectorAll(".click")[2].lastElementChild.innerHTML
    let b=document.querySelectorAll(".click2")[5].lastElementChild.innerHTML 
     localStorage.setItem("from",a);
     localStorage.setItem("to",b);
     window.open("result.html","_self")
     });
      document.getElementById("but2").addEventListener("click", () => {
     localStorage.setItem("from",document.querySelectorAll(".click")[4].lastElementChild.innerHTML );
     localStorage.setItem("to",document.querySelectorAll(".click2")[3].lastElementChild.innerHTML);
     window.open("result.html","_self")
     });
      document.getElementById("but3").addEventListener("click", () => {
     localStorage.setItem("from",document.querySelectorAll(".click")[4].lastElementChild.innerHTML);
     localStorage.setItem("to",document.querySelectorAll(".click2")[1].lastElementChild.innerHTML);
     window.open("result.html","_self")
     });
      document.getElementById("but4").addEventListener("click", () => {
     localStorage.setItem("from",document.querySelectorAll(".click")[4].lastElementChild.innerHTML );
     localStorage.setItem("to",document.querySelectorAll(".click2")[8].lastElementChild.innerHTML );
     window.open("result.html","_self")
     });
  
//Info
let refun=document.querySelector(".refund");
refun.addEventListener("click",() =>{
  window.open("info.html","_self");
})

let bustime=document.querySelector(".bustime");
bustime.addEventListener("click",() =>{
  window.open("info.html","_self");
})
let flexi=document.querySelector(".flexi");
flexi.addEventListener("click",() =>{
  window.open("info.html","_self");
})
let assurance=document.querySelector(".assurance");
assurance.addEventListener("click",() =>{
  window.open("info.html","_self");
})
let hover=document.getElementById("parent")
hover.addEventListener("mouseenter",() =>{
  let chold=document.getElementsByClassName("chold")
  chold[0].innerHTML=`<div class=" chold  absolute flex flex-col items-center justify-center transition-all ease-in-out right-10 p-2 h-20 w-65 bg-gray-100 visible rounded-l-[10px] rounded-r-[10px]  ">
                        <h3 class="font-mono text-xl mt-1.5 ">
                        +91 1234567890
                        </h3>
                        <h3 class="font-mono text-xl mt-1.5 ">
                         Example@gmail.com
                        </h3>
                    </div>`
  console.log(chold)
})
hover.addEventListener("mouseleave",() =>{
  let chold=document.getElementsByClassName("chold")
  chold[0].innerHTML=`<div class=" chold absolute right-30 h-20 w-65 bg-gray-200 invisible rounded-l-[10px] rounded-r-[10px]  ">
                        <h3 class="font-mono text-2xl mt-1.5 font-bold">
                        +91 1234567890
                        </h3>
                        <h3 class="font-mono text-2xl mt-1.5 font-bold">
                         Example@gmail.com
                        </h3>
                    </div>`
  console.log(chold)
})
let hover2=document.getElementById("parent2")
hover2.addEventListener("mouseenter",() =>{
  let chold=document.getElementsByClassName("chold2")
  chold[0].innerHTML=`<div class=" chold2  absolute flex flex-col items-center justify-center transition-all ease-in-out right-10 p-2 h-55  bg-gray-100 visible rounded-l-[10px] rounded-r-[10px] w-100  ">
                        <h3 class="font-mono text-lg mt-1.5 ">
                        Welcome to GoBus, your trusted travel partner for safe, easy, and affordable bus journeys across India. We connect travelers with reliable bus operators, offering instant booking, live tracking, and secure payment options — all in one place
                        </h3>
                       
                    </div>`
  console.log(chold)
})
hover2.addEventListener("mouseleave",() =>{
  let chold=document.getElementsByClassName("chold2")
  chold[0].innerHTML=`<div class=" chold2 absolute right-30 h-20  bg-gray-100 invisible rounded-l-[10px] rounded-r-[10px]  ">
                        <h3 class="font-mono text-lg mt-1.5 w-65 h-20 font-bold">
                        Welcome to GoBus, your trusted travel partner for safe, easy, and affordable bus journeys across India. We connect travelers with reliable bus operators, offering instant booking, live tracking, and secure payment options — all in one place.
                        </h3>
                        
                    </div>`
  console.log(chold)
})
let hover3=document.getElementById("parent3")
hover3.addEventListener("mouseenter",() =>{
  let chold=document.getElementsByClassName("chold3")
  chold[0].innerHTML=`<div class=" chold3  absolute flex flex-col items-center justify-center transition-all ease-in-out  p-2 h-55  bg-gray-100 visible rounded-l-[10px] rounded-r-[10px] w-100  ">
                        <h3 class="font-mono text-lg mt-1.5 ">
                        Welcome to GoBus, your trusted travel partner for safe, easy, and affordable bus journeys across India. We connect travelers with reliable bus operators, offering instant booking, live tracking, and secure payment options — all in one place
                        </h3>
                       
                    </div>`
  console.log(chold)
})
hover3.addEventListener("mouseleave",() =>{
  let chold=document.getElementsByClassName("chold3")
  chold[0].innerHTML=`<div class=" chold3 absolute   h-20  bg-gray-100 invisible rounded-l-[10px] rounded-r-[10px]  ">
                        <h3 class="font-mono text-lg mt-1.5 w-65 h-20 font-bold">
                        Welcome to GoBus, your trusted travel partner for safe, easy, and affordable bus journeys across India. We connect travelers with reliable bus operators, offering instant booking, live tracking, and secure payment options — all in one place.
                        </h3>
                        
                    </div>`
  console.log(chold)
})
 }
main();      



