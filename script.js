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

let imgchange = document.querySelector(".imgchange");
let imgfile = document.querySelector(".imgfile");


imgfile.onchange = function () {
    const file = imgfile.files[0];
    if (file) {
        const reader = new FileReader();

        // Convert the file to Base64
        reader.onload = function (e) {
            imgchange.src = e.target.result; // Set the image source to the Base64 string
            localStorage.setItem("imageData", e.target.result); // Save the Base64 string in localStorage
            savedata();
        };

        reader.readAsDataURL(file); // Read the file as a Base64 string
    }
};

// Function to load the image from localStorage when the page reloads
function loadImage() {
    const imageData = localStorage.getItem("imageData");
    if (imageData) {
        imgchange.src = imageData; // Set the image source to the saved Base64 string
    }
}

console.log(this.files)

let imgclose = document.querySelector(".imgclose");


imgclose.addEventListener("click", () => {
    imgchange.src = ""; // Clear the image
    localStorage.removeItem("imageData"); // Remove image data from localStorage
    savedata(); // Save the updated state
});


loadImage(); // Load the image when the page loads
showdata(); // Load the saved tasks when the page loads






