

window.onload = initialize;

function initialize() {

    
    let button_menu = document.getElementById('menu-icon');
    let menu = document.getElementById('menu-phone');
    button_menu.addEventListener('click', (event)=> { display(menu); });
   
}

function display (item){
    item.classList.toggle("display-menu");
}