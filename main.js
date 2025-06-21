//　変数宣言
const hamburger = document.querySelector('.hamburger');
const nav = document.getElementById('hamburger-navigation');
const navMenus = document.querySelectorAll('.nav-menu');
const header = document.querySelector('header');
const mask = document.getElementById('mask');

//　ハンバーガーのクリックイベント
hamburger.addEventListener('click', function() {
    hamburger.classList.toggle('active')
    nav.classList.toggle('active')
    mask.classList.toggle('active')
});

// ナビメニューのクリックイベント
navMenus.forEach((navMenu) => {
    navMenu.addEventListener('click', function(){
        hamburger.classList.remove('active');
        nav.classList.remove('active');
        mask.classList.remove('active');
    })
})

//#maskエリアのクリックイベント
mask.addEventListener('click', function() {
    hamburger.classList.remove('active')
    nav.classList.remove('active')
    mask.classList.remove('active')
});

//picup
const swiper = new Swiper('.pickup-swiper', {
    loop: true,
    autoplay: {
        delay: 0,
        disableOnInteraction: false,
    },
    speed: 5000,
    slidesPerView: 1.5,
    breakpoints: {
        768:{slidesPerView: 3.5}
    }
});


//feature
const featureItemImages = document.querySelectorAll('.featureItem-img')

window.addEventListener('scroll', function(){
    const windowHeight = window.innerHeight;

    featureItemImages.forEach((featureItemImg) => {
        const elementTop = featureItemImg.getBoundingClientRect().top;
        if (elementTop < windowHeight) {
            featureItemImg.classList.add('active')
        }
    })
})
