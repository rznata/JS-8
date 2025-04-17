'use strict'
let dropdown = document.querySelector('.dropdown'),
    submenu = document.querySelector('.submenu');
dropdown.addEventListener('click', function () {
    submenu.classList.toggle('active');
});
// accordeon
let faq = document.querySelector('.faq');
if (faq) {
    faq.addEventListener('click', function (e) {
        let targetItem = e.target.closest('.faq-head');

        if (!targetItem) return;
        let currentText = targetItem.nextElementSibling;
        targetItem.classList.toggle('active');
        if (targetItem.classList.contains('active')) {
            currentText.style.maxHeight = currentText.scrollHeight + 'px';
        } else {
            currentText.style.maxHeight = 0;
        }

    })
}