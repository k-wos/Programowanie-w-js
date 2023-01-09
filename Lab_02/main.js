let index = 1;
let slides = document.querySelectorAll('.img');
let dots = document.querySelectorAll('.dot');

/*function showSlides(){
    let i;
    for(i=0;i<slides.length;i++){
        slides[i].style.display = "none";
    }
    index ++;
    if(index >slides.length){index =1}
    slides[index-1].style.display = "block";
    
    setTimeout(showSlides,2000);
}

showSlides();*/

const updateSlider = () => {
    for(let i =0; i< slides.length; i++){
        slides[i].style.display ='none';
       
    }
    slides[index-1].style.display ='block';
   
    for (let i=0; i< dots.length; i++){
        dots[i].style.backgroundColor = 'gray';
    }
    dots[index-1].style.backgroundColor = 'black';

    if(index === slides.length){
        index = 1;
    }
    else{
        index ++;
    }
    
}

document.querySelector('.previous').addEventListener('click', () => {
    index--;
    updateSlider();
});
document.querySelector('.next').addEventListener('click', () => {
    index++;
    updateSlider();
});
setInterval(updateSlider,5000);






