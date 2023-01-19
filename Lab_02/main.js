let index = 1;
const slides = document.getElementsByClassName("photo");
const dots = document.getElementsByClassName("dots")[0];
let dot;

for(let i =0; i < slides.length; i++){
    dot = document.createElement("li");
    dot.setAttribute("class", "dot");
    dot.addEventListener("click", function(){
    index = i+1;
    showSlides(index);
    });
    dots.appendChild(dot);
}

showSlides(index);

document.querySelector('.previous').addEventListener('click', function(){
    clearInterval(slideInterval);
    showSlides(index-=1);
});

document.querySelector('.next').addEventListener('click', function(){
    clearInterval(slideInterval);
    showSlides(index+=1);
});

const slideInterval = setInterval(function(){
    showSlides(index +=1);
},5000);

function showSlides(n){
    

    if(n > slides.length){
       index = 1;
    }

    if(n < 1){
        index = slides.length;
    }

    for(let i = 0; i<slides.length ;i++){

        slides[i].style.display = "none";
        dots.childNodes[i].classList.remove("active");
    }
    slides[index - 1].style.display="block";
    dots.childNodes[index - 1].classList.add("active");

   
}


