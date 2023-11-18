
const hamburger = document.querySelector('.hamburger');
const header = document.querySelector('header');

function closeMenu(){
    hamburger.classList.remove('open');
    header.style.display='none';
}

hamburger.addEventListener('click', function(){
    hamburger.classList.toggle('open');
    if ((hamburger.classList.contains('open'))) {
        header.style.display = 'block';
    } else {
        closeMenu();
    }
})