window.addEventListener('scroll', () => {
    const scrolled = window.scrollY;
    const yellow = document.getElementById('yellow-rect');
    const red = document.getElementById('red-rect');
    
    if(scrolled >= 200 & scrolled < 1000 ){
        yellow.style.left = 50 + '%';
    } else {
        yellow.style.left = 0;
    }

    if(scrolled >= 1000 & scrolled <= 1700){
        red.style.right = 50 + '%';
    } else{
        red.style.right = 0;
    }
})

let number = 0;
const link1 = document.getElementById('nav-link1');
const link2 = document.getElementById('nav-link2');
const link3 = document.getElementById('nav-link3');
const link4 = document.getElementById('nav-link4');

function linkFunction(){
    if(number == 0){
        number++;
        link1.style.opacity = 1;
        link2.style.opacity = 1;
        link3.style.opacity = 1;
        link4.style.opacity = 1;
    } else {
        number--;
        link1.style.opacity = 0;
        link2.style.opacity = 0;
        link3.style.opacity = 0;
        link4.style.opacity = 0;
    }
}