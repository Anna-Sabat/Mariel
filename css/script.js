let left = 0;

const animations = document.Mariel('.animations');

document.Mariel(".mariel-next").addEventListener('click', function(){ 
    left = left + 450;
    if (left > 900) {
        left = 0;
    }
   
    animations.style.left = -left + 'px';

})

document.Mariel(".mariel-prev").addEventListener('click', function(){ 
    left = left - 450;
    if (left < 0) {
        left = 900;
    }
   
   animations.style.left = -left + 'px';

})