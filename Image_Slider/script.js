const slides = document.querySelectorAll(".slide");
var c=0;
console.log(slides);

slides.forEach((slide,index) => {
    slide.style.left = `${index * 100}%`
})

const prev = document.querySelector(".prev");
const next = document.querySelector(".next");

prev.addEventListener("click", function(){

    if(c>0)
    {
        c--;
        slideimage();
    }   
})

next.addEventListener("click", function(){
    if(c<3)
    {
        c++;
        slideimage(); 
    }  
})

function slideimage(){
    slides.forEach((img)=>{
        img.style.transform = `translateX(-${c * 100}%)`;
    })
}