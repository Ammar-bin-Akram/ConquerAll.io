let dark = JSON.parse(localStorage.getItem('darkMode'));

if(dark === true){
    document.body.classList.add('dark-mode');
    document.querySelector('.acci-1').classList.add('accordion-dark');
    document.querySelector('.acci-2').classList.add('accordion-dark');
    document.querySelector('.acci-3').classList.add('accordion-dark');
    document.querySelector('.acc-1').classList.add('accordion-dark');
    document.querySelector('.acc-2').classList.add('accordion-dark');
    document.querySelector('.acc-3').classList.add('accordion-dark');

} else{
    document.body.classList.remove('dark-mode');
    document.querySelector('.acci-1').classList.remove('accordion-dark');
    document.querySelector('.acci-2').classList.remove('accordion-dark');
    document.querySelector('.acci-3').classList.remove('accordion-dark');
    document.querySelector('.acc-1').classList.remove('accordion-dark');
    document.querySelector('.acc-2').classList.remove('accordion-dark');
    document.querySelector('.acc-3').classList.remove('accordion-dark');
}