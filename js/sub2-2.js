const btn = document.querySelectorAll('.box3 .btn');

btn.forEach((item, idx) => {
    item.addEventListener('mouseenter', () => {
        btn.forEach((itemLi) => itemLi.classList.remove('on'));
        item.classList.add('on');
    });
});
