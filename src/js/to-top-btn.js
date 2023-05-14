(() => {
const scrollToTop = document.querySelector('.scroll-to-top');


const showBtn = window.addEventListener('scroll', () => {
    if (window.scrollY > 600) {
        scrollToTop.classList.add('scroll-to-top');
    } else {
    scrollToTop.classList.remove('scroll-to-top');
    }
});
})();