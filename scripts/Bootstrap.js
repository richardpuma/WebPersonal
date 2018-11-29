;
((d) => {
  d.addEventListener('DOMContentLoaded', e => {
    const copy = d.querySelector('.Footer small')

    copy.innerHTML = `&copy; ${new Date().getFullYear()} @jonmircha`

    $('.navbar-nav>li>a').on('click', () => $('.navbar-collapse').collapse('hide'))

    //https://github.com/cferdinandi/smooth-scroll
    const scroll = new SmoothScroll('a[href*="#"]', {
      offset: 50,
      selectorHeader: '.navbar'
    })
  })
})(document);