function onScroll() {
   if (scrollY > 0) {
      navigation.classList.add('scroll');
   } else {
      navigation.classList.remove('scroll');
   }
}

function openMenuMobile() {
   document.body.classList.add('menu__expanded_mobile');
}

function closeMenuMobile() {
   document.body.classList.remove('menu__expanded_mobile');
}
