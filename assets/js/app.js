const aside = document.querySelector('aside');
const maindiv = document.querySelector('.main-div');
const asideArrow = document.querySelector('.aside-arrow').addEventListener('click', function () {

    if (aside.classList.contains('small')) {
        aside.classList.remove('small');
        maindiv.classList.remove('small');
    } else {
        aside.classList.add('small');
        maindiv.classList.add('small');
    }
});


