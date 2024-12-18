console.log("Hey There!");

const input = document.querySelector(".inputtxt");
const btn = document.querySelector(".button")
const unmark=document.querySelector(".add")
const  tasks = document.querySelector(".tasks");
// let cross =document.createElement("img");

btn.addEventListener("click",()=>{
    if(input.value===''){
        document.querySelector(".empty").style.display="block";
    }else{
        let li = document.createElement("li");
        li.innerHTML = input.value;
        tasks.appendChild(li);
        // cross.src="images/close.png"
        // li.appendChild(cross);
        let close = document.createElement("span");
        close.innerHTML="\u00d7";
         li.appendChild(close);
    
         console.log("clicked")
        }
        input.value="";
        savedata();
    })
    
    tasks.addEventListener("click",function(e){
        if(e.target.tagName === "LI"){
            e.target.classList.toggle("selected");
            savedata();
        }
        else if(e.target.tagName === "SPAN"){
            e.target.parentElement.remove();
            savedata();
        }
    },false)
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

function savedata(){
    localStorage.setItem("data",tasks.innerHTML);
}

function showdata(){
    tasks.innerHTML=localStorage.getItem("data")
}
showdata();