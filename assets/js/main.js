// ===== SHOW MENU =====
const showMenu = (toggleId,navId) => {
  const toggle = document.getElementById(toggleId),
  nav = document.getElementById(navId)

  if (toggle && nav) {
    toggle.addEventListener('click', ()=> {
      nav.classList.toggle('show-menu')
    })
  }
}

showMenu('nav-toggle','nav-menu')

// ===== REMOVE MENU MOBILE =====
const navLink = document.querySelectorAll('.nav__link')

function linkAction() {
  const navMenu = document.getElementById('nav-menu')
  navMenu.classList.remove('show-menu')
}

navLink.forEach(n => n.addEventListener('click', linkAction))


// ===== SCROLL SECTIONS ACTIVE LINK =====
const sections = document.querySelectorAll('section[id]')

function scrollActive() {
  const scrollY = window.pageYOffset

  sections.forEach(current => {
    const sectionHeight = current.offsetHeight
    const sectionTop = current.offsetTop - 50
    sectionId = current.getAttribute('id')

    if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
      document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.add('active-link')
    }
    else {
      document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.remove('active-link')
    }
  })
}

window.addEventListener('scroll', scrollActive)


// ===== CHANGE BACKGROUND HEADER =====
function scrollHeader() {
  const header = document.getElementById('header')
  if (this.scrollY >= 200) header.classList.add('scroll-header'); else header.classList.remove('scroll-header')
}

window.addEventListener('scroll', scrollHeader)


// ===== SHOW SCROLL TOP =====
function scrollTop() {
  const scrollTop = document.getElementById('scroll-top')
  if (this.scrollY >= 560) scrollTop.classList.add('show-scroll'); else scrollTop.classList.remove('show-scroll')
}

window.addEventListener('scroll', scrollTop)


// ===== MIXITUP FILTER PORTFOLIO =====
const mixer = mixitup('.portfolio__container', {
  selectors: {
    target: '.portfolio__content'
  },
  animation: {
    duration: 400
  }
});

// Link Active Portfolio
const linkPortfolio = document.querySelectorAll('.portfolio__item')

function activePortfolio() {
  if(linkPortfolio) {
    linkPortfolio.forEach(l => l.classList.remove('active-portfolio'))
    this.classList.add('active-portfolio')
  }
}

linkPortfolio.forEach(l => l.addEventListener('click', activePortfolio))

$(function () {
	var inputs = $(".input");
	var paras = $(".description-flex-container").find("p");
	inputs.click(function () {
		var t = $(this),
			ind = t.index(),
			matchedPara = paras.eq(ind);

		t.add(matchedPara).addClass("active");
		inputs.not(t).add(paras.not(matchedPara)).removeClass("active");
	});
});

// ===== GSAP ANIMATION =====
// gsap.from('.home__text', {opacity: 0, duration: 1, delay:.5, y:75})
gsap.from('.home__title, .home__subtitle, .home-social-icons', {opacity: 0, duration: 2, delay:.5, y:50, ease:'expo.out', stagger:.2})

gsap.from('.nav__logo, .nav__toggle', {opacity: 0, duration: 2, delay:.75, y:50, ease:'expo.out', stagger:.2})
gsap.from('.nav__item', {opacity: 0, duration: 2, delay:1, y:50, ease:'expo.out', stagger:.2})