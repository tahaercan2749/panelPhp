const aside = document.querySelector('aside');
const asideArrow = document.querySelector('.aside-arrow').addEventListener('click', function () {

    if (aside.classList.contains('small')) {
        aside.classList.remove('small');
    } else {
        aside.classList.add('small');
    }
});


