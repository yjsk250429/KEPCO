//util
const lang = document.querySelector('#wrap .util-wrap .inner .util li:nth-child(3)');
const kor = document.querySelector('#wrap .util-wrap .inner .util li:nth-child(4)');
const eng = document.querySelector('#wrap .util-wrap .inner .util li:nth-child(5)');
const util =() =>{
    let isOpen = false ;

    lang.addEventListener('click', (e) => {
        isOpen = !isOpen;
        if (isOpen) {
            kor.style.display = 'block';
            eng.style.display = 'block';
        } else {
            kor.style.display = 'none';
        eng.style.display = 'none';
        }
    });
}
util();


//header, footer
const hd = document.querySelector('#header');
const hdin = document.querySelector('#header .inner');
const gnbs = document.querySelectorAll('#header .inner .nav .gnb > li');
const gnbTxt = document.querySelectorAll('#header .inner .nav .gnb > li a');

const family1 = document.querySelector('#footer .inner .family0');
const family2 = document.querySelector('#footer .inner .family1');
const familycomb1 = document.querySelector('#footer .inner .family0 > ul');
const familycomb2 = document.querySelector('#footer .inner .family1 > ul');

hd.addEventListener('mouseenter', (e) => {
    hd.style.height = '420px';
    hd.style.transition = '0.5s';
});
hd.addEventListener('mouseleave', (e) => {
    hd.style.height = '120px';
    hd.style.transition = '0.5s';
});

family1.addEventListener('click', (e) => {
    family1.classList.toggle('on');
});

family2.addEventListener('click', (e) => {
    family2.classList.toggle('on');
});

document.addEventListener('click', (e) => {
    if (!family1.contains(e.target)) {
        family1.classList.remove('on');
    }
});
document.addEventListener('click', (e) => {
    if (!family2.contains(e.target)) {
        family2.classList.remove('on');
    }
});

//con1
const cardItems = document.querySelectorAll('.con1 .items li');

cardItems.forEach((item) => {
    item.addEventListener('mouseenter', () => {
        item.classList.add('card-hover');
    });

    item.addEventListener('mouseleave', () => {
        item.classList.remove('card-hover');
    });
});

//con2
const btnItems = document.querySelectorAll('.main .con2 .bgbox .inner .btn li');

btnItems[0].classList.add('on');

btnItems.forEach((li) => {
    li.addEventListener('click', () => {
        btnItems.forEach((item) => item.classList.remove('on'));
        li.classList.add('on');
    });
});

const crircle = document.querySelector('.crircle');
const clone = crircle.cloneNode(true);
document.querySelector('.bgbn').appendChild(clone);
let position = 0;
function move() {
  position -= 1;
  crircle.style.transform = `translateX(${position}px)`;
  clone.style.transform = `translateX(${position + crircle.offsetWidth}px)`;
  if (Math.abs(position) > crircle.offsetWidth) {
    position = 0;
  }
  setTimeout(move, 10);
}
move();

//con5
const acc = document.querySelectorAll('.main .con5 .inner ul li');
const txt = document.querySelectorAll('.main .con5 .inner ul li p');

acc.forEach((item, idx) => {
    item.addEventListener('click', (e) => {
        acc.forEach((item, idx) => {
            item.classList.remove('on');
            txt[idx].classList.remove('on');
        });
        e.currentTarget.classList.add('on');
        txt[idx].classList.add('on');
    });
});

//con6
const con = document.querySelector('.main .con6 .inner .cons li');
const lis = document.querySelectorAll('.main .con6 .inner .cons li');
const prev = document.querySelector('.main .con6 .inner .btn .prev');
const pause = document.querySelector('.main .con6 .inner .btn .pause');
const next = document.querySelector('.main .con6 .inner .btn .next');

const con6 = () => {
    let interval = 2000,
        timer = null,
        total = lis.length,
        cnt = 0,
        size = con.clientWidth + 26,
        isOpen = false;

    timer = setInterval(() => {
        cnt = (cnt + 1) % total;
        lis.forEach((con, idx) => {
            con.style.transition = 'transform 0.2s';
            con.style.transform = `translateX(${((idx - cnt + total) % total) * size}px)`;
            con.style.zIndex = 10 - ((idx - cnt + total) % total) * size;
        });
    }, interval);

    const banner = () => {
        cnt = (cnt + 1) % total;
        lis.forEach((con, idx) => {
            con.style.transition = 'transform 0.2s';
            con.style.transform = `translateX(${((idx - cnt + total) % total) * size}px)`;
            con.style.zIndex = 10 - ((idx - cnt + total) % total) * size;
        });
    };

    next.addEventListener('click', (e) => {
        cnt = (cnt + 1) % total;
        lis.forEach((con, idx) => {
            con.style.transition = 'transform 0.2s';
            con.style.transform = `translateX(${((idx - cnt + total) % total) * size}px)`;
            con.style.zIndex = 10 - ((idx - cnt + total) % total) * size;
            clearInterval(timer);
            timer = setInterval(banner, interval);
        });
    });
    prev.addEventListener('click', (e) => {
        cnt = (cnt - 1 + total) % total;
        lis.forEach((con, idx) => {
            con.style.transition = 'transform 0.2s';
            con.style.transform = `translateX(${((idx - cnt + total) % total) * size}px)`;
            con.style.zIndex = 10 - ((idx - cnt + total) % total) * size;
            clearInterval(timer);
            timer = setInterval(banner, interval);
        });
    });

    pause.addEventListener('click', (e) => {
        isOpen = !isOpen;
        if (isOpen) {
            pause.textContent = '▷';
            clearInterval(timer);
        } else {
            pause.textContent = '||';
            timer = setInterval(banner, interval);
        }
    });
};

con6();


//con7

const con7 = () =>{

    const sel = document.querySelector('.main .con7 .bgbox .inner .cs > ul:first-of-type > .dropdown');
    const selTxt = document.querySelector('.main .con7 .bgbox .inner .cs > ul:first-of-type > .dropdown > span');
    const selop = document.querySelectorAll('.main .con7 .bgbox .inner .cs > ul:first-of-type > .dropdown > ul > li');
    const selopTxt = document.querySelectorAll('.main .con7 .bgbox .inner .cs > ul:first-of-type > .dropdown > ul > li > p');

    sel.addEventListener('click', (e) => {
        sel.classList.toggle('on');
    });
    document.addEventListener('click', (e) => {
        if (!sel.contains(e.target)) {
            sel.classList.remove('on');
        }
    });
    selop[0].addEventListener('click', (e) => {
        selTxt.textContent = selopTxt[0].textContent;
    });
    selop[1].addEventListener('click', (e) => {
        selTxt.textContent = selopTxt[1].textContent;
    });
    selop[2].addEventListener('click', (e) => {
        selTxt.textContent = selopTxt[2].textContent;
    });
};
 
con7();