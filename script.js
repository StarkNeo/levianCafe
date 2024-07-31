let burger = document.getElementById('burger');
let menu = document.getElementById('menu');
burger.addEventListener('click', () => {
    let fig = burger.innerHTML;
    if (fig === '☰') {
        burger.innerHTML = 'x';
        menu.style.display='flex';
        
            
    }
    else {
        burger.innerHTML = '☰';
        menu.style.display='none';
        
    
    }
});
