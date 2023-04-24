const hamburguer = document.querySelector('.hamburguer');
const menu = document.querySelector('.menu-navegacion');

console.log(menu)
console.log(hamburguer)


hamburguer.addEventListener('click', ()=>{
    menu.classList.toggle("spread")
})

window.addEventListener('click', e =>{
    if(menu.classList.contains('spread') 
        && e.target != menu && e.target != hamburguer){
        console.log('cerrar')
        menu.classList.toggle("spread")
    }
})