function light() {
    var aisha = document.querySelector('.header__item')
    var body = document.querySelector('body');
    var sherka = document.querySelector('header')
    sherka.style.backgroundColor = '#2B3844';
    body.style.backgroundColor = '#202C36';
    body.style.transition = '300ms ease all'
    sherka.style.color = 'white';


}
function dark() {
    var sherka = document.querySelector('header')
    var body = document.querySelector('body');
    sherka.style.color = 'black';
    sherka.style.backgroundColor = 'white';
    body.style.backgroundColor = 'black';
    body.style.transition = '300ms ease all'

}
