/*Menu animado */

const open_btn = document.querySelector('.open-btn')
const close_btn = document.querySelector('.close-btn')
const nav_white = document.querySelector('.nav-white')
const nav = document.querySelectorAll('.nav')

open_btn.addEventListener('click', () =>{
    nav.forEach(nav_el => nav_el.classList.add('visible'))
})

close_btn.addEventListener('click', () =>{
    nav.forEach(nav_el => nav_el.classList.remove('visible'))
})





/* Animação Cards */
const target = document.querySelectorAll('[data-anime]')
const second = target[1]
const animation_class = 'animate'
window.addEventListener('scroll', anime_scroll)

function anime_scroll(){
    
    const windowTop = window.pageYOffset + (window.innerHeight*2)/4;
    target.forEach(function(element){
        if(windowTop > element.offsetTop){
            element.classList.add(animation_class)
        }
        else{
            element.classList.remove(animation_class)
        }
        if(window.innerWidth < 700){
        if(windowTop> document.documentElement.clientHeight ){
            open_btn.style.color = "black";
        }
        else{
            open_btn.style.color = "white";
        }
    }
    else{
        if(windowTop> document.documentElement.clientHeight ){
            nav_white.classList.add("scrolled")

        }
        else{
            nav_white.classList.remove("scrolled")
        }
    }
        
        
    })

    
}

