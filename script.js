console.log("Hey There!");

const input = document.querySelector(".inputtxt");
const btn = document.querySelector(".button")
const unmark=document.querySelector(".add")
const  tasks = document.querySelector(".tasks");

btn.addEventListener("click",()=>{
    if(input.value===''){
document.querySelector(".empty").style.display="block";
    }else{
        let li = document.createElement("li");
        li.innerHTML = input.value;
        tasks.appendChild(li);
        
        li.addEventListener("click",()=>{
            li.style.textDecoration="line-through";
           
        })
        console.log("clicked")
    }
})

// tasks.addEventListener("click",(e)=>{
//     if(e.target.tagName === "li"){
//         e.target.style.textDecoration="line-through";
//         unmark.src="images/tick1.svg";
//         console.log("clc")
//     }
// })


document.querySelector(".btn-paper").addEventListener("click",()=>{
    document.querySelector(".empty").style.display="none";
    
})

