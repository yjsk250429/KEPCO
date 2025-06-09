document.addEventListener('DOMContentLoaded', () => {
    const get = (target) => document.querySelector(target);
    const getAll = (target) => document.querySelectorAll(target);

    const sub = () => {
        const $lis = getAll('.sub .con-box .inner .box-wrap .box1 ul li');
        const $icon = getAll('.sub .con-box .inner .box-wrap .box1 ul li a img');
        const $txt = getAll('.sub .con-box .inner .box-wrap .box1 ul li a p');
        const $sel = get('.sub .con-box .inner .box-wrap .box0 > ul .dropdown');
        const $selTxt = get('.sub .con-box .inner .box-wrap .box0 > ul .dropdown span');
        const $selop = getAll('.sub .con-box .inner .box-wrap .box0 > ul .dropdown > ul li');
        const $selopTxt = getAll('.sub .con-box .inner .box-wrap .box0 > ul .dropdown > ul li p');

        let cnt = 0,
            isOpen = false;

        $lis.forEach((itemLi, idx) => {
            const ogSrc = $icon[idx].src; // 원래 이미지 경로 저장

            itemLi.addEventListener('mouseenter', () => {
                itemLi.classList.add('on');
                $txt[idx].style.color = '#fff';
                const newSrc = ogSrc.replace(/(\.png)$/, '_.png');
                $icon[idx].src = newSrc;
            });

            itemLi.addEventListener('mouseleave', () => {
                itemLi.classList.remove('on');
                $txt[idx].style.color = '#164194';
                $icon[idx].src = ogSrc;
            });
        });

        $sel.addEventListener('click', (e) => {
            $sel.classList.toggle('on');
        });
        document.addEventListener('click', (e) => {
            if (!$sel.contains(e.target)) {
                $sel.classList.remove('on');
            }
        });
        $selop[0].addEventListener('click', (e) => {
            $selTxt.textContent = $selopTxt[0].textContent;
        });
        $selop[1].addEventListener('click', (e) => {
            $selTxt.textContent = $selopTxt[1].textContent;
        });
    };
    sub();
});
