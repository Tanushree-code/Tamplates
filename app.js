const scrollBar = document.querySelector('#scroll-bar');

window.addEventListener('scroll', () =>{
    if (window.innerWidth > 1000){
    let ss = window.pageYOffset;
    scrollBar.style.backgroundPositionY =  ss * -0.1 + "px";
    }
})