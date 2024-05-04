let darkMode = false;

const darkModeElement = document.querySelector('.js-dark-mode-input');

let dark = JSON.parse(localStorage.getItem('darkMode'));
    console.log(dark);
    if(dark === true){
        darkModeElement.checked = true;
        document.body.classList.add('dark-mode');
        document.querySelector('.btn-home1').classList.add('dark-mode-btn');
        document.querySelector('.btn-home2').classList.add('dark-mode-btn');
        document.querySelector('.fa-1').classList.add('dark-mode-fa');
        document.querySelector('.fa-2').classList.add('dark-mode-fa');
        document.querySelector('.fa-3').classList.add('dark-mode-fa');
    } else{
        darkModeElement.checked = false;
        document.body.classList.remove('dark-mode');
        document.querySelector('.btn-home1').classList.remove('dark-mode-btn');
        document.querySelector('.btn-home2').classList.remove('dark-mode-btn');
        document.querySelector('.fa-1').classList.remove('dark-mode-fa');
        document.querySelector('.fa-2').classList.remove('dark-mode-fa');
        document.querySelector('.fa-3').classList.remove('dark-mode-fa');
    }



darkModeElement.addEventListener('click', () => {
    if(darkModeElement.checked) {
        darkMode = true;
        console.log(darkMode);
        localStorage.setItem('darkMode', JSON.stringify(darkMode));
    } else{
        darkMode = false;
        console.log(darkMode);
        localStorage.setItem('darkMode', JSON.stringify(darkMode));
    }

    let darkIfToggle = JSON.parse(localStorage.getItem('darkMode'));;
    if(darkIfToggle === true){
        darkModeElement.checked = true;
        document.body.classList.add('dark-mode');
        document.querySelector('.btn-home1').classList.add('dark-mode-btn');
        document.querySelector('.btn-home2').classList.add('dark-mode-btn');
        document.querySelector('.fa-1').classList.add('dark-mode-fa');
        document.querySelector('.fa-2').classList.add('dark-mode-fa');
        document.querySelector('.fa-3').classList.add('dark-mode-fa');
    } else{
        darkModeElement.checked = false;
        document.body.classList.remove('dark-mode');
        document.querySelector('.btn-home1').classList.remove('dark-mode-btn');
        document.querySelector('.btn-home2').classList.remove('dark-mode-btn');
        document.querySelector('.fa-1').classList.remove('dark-mode-fa');
        document.querySelector('.fa-2').classList.remove('dark-mode-fa');
        document.querySelector('.fa-3').classList.remove('dark-mode-fa');
    }
});
