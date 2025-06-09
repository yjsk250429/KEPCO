const get = (target) => document.querySelector(target);
const getAll = (target) => document.querySelectorAll(target);

const sub4_2 = () => {
    const $lis = getAll('.sub .con-box .inner .gallery .right ul li');
    const $titleEl = get('.sub .con-box .inner .gallery .left .title');
    const $imgEl = get('.sub .con-box .inner .gallery .left img');
    const $descEl = get('.sub .con-box .inner .gallery .left p');
    const arr = [
        {
            id: 1,
            title: `KEPCO 119 재난구조단 창단`,
            img: 'img/img_smdghp001_01.png',
            desc: `KEPCO는 사회공헌 활동을 전문적이고 특성화하기 위해 2010년 10월 19일 국내 공기업 중 최초의 전문 구조단인 KEPCO 119 재난 구조단을 창단 하였습니다. 창단 인원은 110명으로 구성하여 인명구조팀, 의료지원팀, 현장지원팀으로 편성되어 활동하는 공기업 유일의 전문 재난구조단입니다.`,
        },
        {
            id: 2,
            title: `구조훈련`,
            img: 'img/img_smdghp001_02.png',
            desc: `KEPCO의 Mission 인 전원개발 촉진 · 전력수급 안정화를 통한 국민경제발전 기여와 핵심가치인 사회책임 Social Responsibility를 구현하기 위한 국가 및 지자체의 대형재난에 대비하기 인명구조교육(화재, 산악, 수난 등)과 응급분야 (응급구조사, 응급처치강사, 심폐소생술강사 등) 전문가를 양성하여 구조단 역량을 강화 하였습니다.`,
        },
        {
            id: 3,
            title: `국가행사지원`,
            img: 'img/img_smdghp001_03.png',
            desc: `2010년 서울 G20 정상회의, 2011 대구 세계육상선수권 대회, 2012년 서울 핵안보 정상회의 및 원자력 인더스트리 회의, 2013년 대구 세계에너지총회, 2014년 인천아시안게임,응급의료 및 경기장 안전 및 해상경기(요트,서핑) 안전 근무를 지원, 2015년 유니버시아드 대회 의료지원, 2018년 평창 동계 올림픽에 5개 경기장의 응급의료지원을 통하여 KEPCO119 재난 구조단의 역량을 발휘 하였습니다.`,
        },
        {
            id: 4,
            title: `국내활동`,
            img: 'img/img_smdghp001_04.png',
            desc: `- 2011년 포항 ,영암, 삼척폭설, 연평도 복구 활동, Safe 서울참가, 강암 성릉역 침수, 경기북부(적성,파주,법원리) 호우피해 지원<br>- 2012년 군산, 여수, 장성 집중 호우피해 복구활동 및 전기사랑마라톤 의료지원<br>- 2013년 밀양강 수중 정화활동, 2014 강릉폭설 복구 활동, 2015 BIXPO 의료지원<br>- 2016년 울산 태풍(차바) 피해복구활동, 2017년 충북(청주)지역 호우피해복구활동<br>- 2019강원 (고성,속초) 산불 이재민 의료지원활동, 2022 강원(삼척)산불 진화 출동, 포항 태풍(힌남노) 피해 복구 지원<br>재난지역 활동을 전문적으로 하기 위하여 중앙119 구조본부에서 도시탐색구조 교육을 경기, 광주 소방학교에서 화재 등 각종 재난에 대하여 교육 받았으면 산악 능력을 향상 시키기 위하여 국립공원 산악안전 교육원에서 산악 안전에 관한 전문적인 교육을 이수 하였고 수상 사고 능력을 고양하기 위하여 한국해양구조협회에서 수상 인명 구조원(Life Guard) 교육을 수료하여 수상구조 능력을 보유하고 있습니다.<br>응급 상황 대비 능력을 함양하고자 영진전문대학교 응급구조교육센터에서 응급구조사 2급 교육을 이수하고 응급구조사 자격을 취득하였으며 응급처치강사, 심폐소생술강사, EFR강사 자격을 취득하여 구조 역량을 발전시키고 있습니다.`,
        },
        {
            id: 5,
            title: `사회공헌 활동 : 대내외 응급지원 활동`,
            img: 'img/img_smdghp001_05.png',
            desc: `해외 재난지역 활동에 대비하여 대한민국 해외긴급구호대 KDRT(Korea Disaster Relief Team)한국국제협력단 (KOICA), 국립중앙의료원, 국군의무학교, 중앙119 구조본부, 공군 등 유관기관과 합동으로 훈련을 실시하여 해외 재난 활동에 관하여도 꾸준하게 역량을 준비하고 있으며 대외 행사시에도 응급 분야의 역량을 강화하고 있습니다`,
        },
    ];

    let cnt = 0,
        timer = null,
        interval = 5000,
        total = arr.length;

    const banner = (idx) => {
        const obj = arr[idx];
        if (!obj) return;
        $titleEl.textContent = obj.title;
        $imgEl.src = obj.img;
        $descEl.innerHTML = obj.desc;
        $titleEl.animate({opacity:[0, 1]}, 500);
        $imgEl.animate({opacity:[0, 1]}, 500);
        $descEl.animate({opacity:[0, 1]}, 500);

        $lis.forEach((item) => {
            item.classList.remove('on');
        });
        $lis[idx].classList.add('on');
    };

    banner(cnt);

    timer = setInterval(() => {
        cnt++;
        if (cnt > total - 1) cnt = 0;
        banner(cnt);
    }, interval);

    $lis.forEach((item, idx) => {
        item.addEventListener('click', () => {
            cnt = idx;
            banner(cnt);
            clearInterval(timer);
            timer = setInterval(() => {
                cnt++;
                if (cnt > total - 1) cnt = 0;
                banner(cnt);
            }, interval);
        });
    });
};

(() => {
    sub4_2();
})();
