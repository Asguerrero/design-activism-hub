window.onload = initialize;

function initialize() {

    let colors = ["queer-map", "motherhood", "black-designers", "craft", "demotech", "violet", "happy", "adapt", "landscape"];
    colors.forEach((item) => {
        console.log(item);
        let button_plus_icon = document.getElementById(`${item}`);
        let button_minus_icon = document.getElementById(`${item}-minus-icon`);
        let button_close_icon = document.getElementById(`${item}-close-icon`);
        button_plus_icon.addEventListener('click', (event)=> { display(item); });
        button_minus_icon.addEventListener('click', (event)=> { close(item); });
        button_close_icon.addEventListener('click', (event)=> { close(item); });
    });

    let button_menu = document.getElementById('menu-icon');
    let menu = document.getElementById('menu-phone');
    button_menu.addEventListener('click', (event)=> { display_menu(menu); });
}

function display_menu (item){
    item.classList.toggle("display-menu");
}


function display (item){
    console.log(event.currentTarget.id);
    let pop_up = document.getElementById(`${item}-pop-up`);
    let plus_icon = document.getElementById(`${item}`) ;
    let minus_icon = document.getElementById(`${item}-minus-icon`) ;
    pop_up.classList.toggle("display-block");
    plus_icon.classList.toggle("hidden");
    minus_icon.classList.toggle("display");
    
}

function close (item){
    let pop_up = document.getElementById(`${item}-pop-up`);
    let plus_icon = document.getElementById(`${item}`) ;
    let minus_icon = document.getElementById(`${item}-minus-icon`) ;
    pop_up.classList.toggle("display-block");
    plus_icon.classList.toggle("hidden");
    minus_icon.classList.toggle("display");
}