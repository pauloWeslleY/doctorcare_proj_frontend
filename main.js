window.addEventListener('scroll', onScroll);

onScroll();
function onScroll() {
   showNavOnScroll()
   showBackToTopOnScroll()
}
function showNavOnScroll() {
   if (scrollY > 0) {
      navigation.classList.add('scroll');
   } else {
      navigation.classList.remove('scroll');
   }
}
function showBackToTopOnScroll() {
   if (scrollY > 550) {
      btnBackToTop.classList.add('show');
   } else {
      btnBackToTop.classList.remove('show');
   }
}
function openMenuMobile() {
   document.body.classList.add('menu__expanded_mobile');
}
function closeMenuMobile() {
   document.body.classList.remove('menu__expanded_mobile');
}
//! === === === ===|> ScrollReveal
ScrollReveal({
   origin: 'top',
   distance: '30px',
   duration: 900,
}).reveal(`
   #home,
   #home img,
   #home .stats,
   #services,
   #services header,
   #services .card,
   #about header,
   #about .content`)