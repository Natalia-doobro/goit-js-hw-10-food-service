import menuTemplate from './templates/menu.hbs'; //ипортируется готовая функция с шаблном 
import menuData from './menu.json';//данные
//import './styles.css';

//ШАБЛОНИЗАТОР
const menu = document.querySelector('.js-menu');
const markup = menuData.map(menuTemplate).join(''); // спомошью функции создается полная разметка (в место переменных подставляется значения)
//console.log(markup); //проверка правильности заполнения шаблона

menu.insertAdjacentHTML('beforeend', markup)


//ТЕМА
const checkbox = document.querySelector('#theme-switch-toggle');

const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};

const saveTheme = localStorage.getItem('theme');
//console.log(saveTheme);

if (!saveTheme) {
    localStorage.setItem('theme', Theme.LIGHT);
    document.body.classList.add('light-theme');
}


    
function onBodyTheme(evt) {
    evt.target.classList.toggle('theme');

    if (!checkbox.classList.contains('theme')) {
        localStorage.setItem('theme', Theme.LIGHT);
        document.body.classList.add('light-theme');
        document.body.classList.remove('dark-theme');
    } else {
        localStorage.setItem('theme', Theme.DARK);
        document.body.classList.add('dark-theme');
        document.body.classList.remove('light-theme');
    }
}

if (saveTheme === Theme.LIGHT) {
    document.body.classList.add('light-theme');
    document.body.classList.remove('dark-theme');
} else if (saveTheme === Theme.DARK) {
    document.body.classList.add('dark-theme');
    document.body.classList.remove('light-theme');
}
    

checkbox.addEventListener('change', onBodyTheme);