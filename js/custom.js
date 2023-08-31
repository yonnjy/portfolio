const HEADER = document.querySelector('.header');
const ASIDE = document.querySelectorAll('.btn_link li');
const SECTION = document.querySelectorAll('.section');

const COVER_BTN = document.querySelector('.btn_ham');
const COVER = document.querySelector('.cover');
const COVER_A = document.querySelectorAll('.cover>ul a');

new fullpage('#main', {
    anchors: ['intro','p01', 'p02', 'p03', 'p04', 'p05','p06', 'profile'],
    css3: false,
    scrollOverflow: false,

    afterLoad: function (origin, destination, direction, trigger) {
        ASIDE.forEach(it => it.classList.remove('on'));
        ASIDE[destination.index].classList.add('on');
        SECTION.forEach(it => it.classList.remove('on'));
        SECTION[destination.index].classList.add('on');

        if (destination.index > 0) {
            HEADER.classList.add('on');
        } else {
            HEADER.classList.remove('on');
        }

        if (direction == 'up') {
            HEADER.classList.remove('on');
        }
    },
});

COVER_BTN.addEventListener('click', function (e) {
    e.currentTarget.classList.toggle('on');
    COVER.classList.toggle('on');
});

COVER_A.forEach((lnk, idx) => {
    lnk.addEventListener('click', () => {
        COVER.classList.remove('on');
        COVER_BTN.classList.remove('on');
    });
});

COVER.addEventListener('wheel', e => {
    e.stopPropagation();
});