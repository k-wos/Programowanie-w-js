var index = 1;
showSlides(index);

document.querySelector('.previous').addEventListener('click', function(){
    showSlides(index-=1);
});

document.querySelector('.next').addEventListener('click', function(){
    showSlides(index+=1);
});

function showSlides(n){
    const slides = document.getElementsByClassName("photo");

    if(n > slides.length){
       index = 1;
    }

    if(n < 1){
        index = slides.length;
    }

    for(let i = 0; i<slides.length ;i++){
        slides[i].style.display = "none";
    }

    slides[index - 1].style.display="block";
}
