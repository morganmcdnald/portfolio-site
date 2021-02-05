// ===== SHOW MENU =====
const showMenu = (toggleId,navId) => {
  const toggle = document.getElementById(toggleId),
  nav = document.getElementById(navId)

  if (toggle && nav) {
    toggle.addEventListener('click', ()=> {
      nav.classList.toggle('show-menu')
    })
    toggle.addEventListener('click', ()=> {
      toggle.classList.toggle('active')
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
  // if (this.scrollY >= 200) header.classList.add('nav__menu-scroll'); else header.classList.remove('nav__menu-scroll')
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


// ===== SHOW TIMELINE =====
function showTimeline() {
  document.getElementById('flex-parent').style.display = "block";
}

function showTimeline() {
  const x = document.getElementById("flex-parent");
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
}

// ===== GSAP ANIMATION =====
// gsap.from('.home__text', {opacity: 0, duration: 1, delay:.5, y:75})
gsap.from('.home__title, .home__subtitle, .home-social-icons, .arrow-container', {opacity: 0, duration: 2, delay:.5, y:50, ease:'expo.out', stagger:.2})

gsap.from('.nav__logo, .nav__toggle', {opacity: 0, duration: 2, delay:.75, y:50, ease:'expo.out', stagger:.2})
gsap.from('.nav__item', {opacity: 0, duration: 2, delay:1, y:50, ease:'expo.out', stagger:.2})

function animateFrom(elem, direction) {
  direction = direction | 1;
  
  var x = 0,
      y = direction * 100;
  if(elem.classList.contains("gs_reveal_fromLeft")) {
    x = -100;
    y = 0;
  } else if(elem.classList.contains("gs_reveal_fromRight")) {
    x = 100;
    y = 0;
  } else if (elem.classList.contains("gs_reveal_fromBottom")) {
    x = 0;
    y = 100;
  } else if (elem.classList.contains("gs_reveal_fromTop")) {
    x = 0;
    y = -100;
  }
  gsap.fromTo(elem, {x: x, y: y, autoAlpha: 0}, {
    duration: 2.25,
    delay: .5, 
    x: 0,
    y: 0, 
    autoAlpha: 1, 
    ease: "expo", 
    overwrite: "auto"
  });
}

function hide(elem) {
  gsap.set(elem, {autoAlpha: 0});
}

document.addEventListener("DOMContentLoaded", function() {
  gsap.registerPlugin(ScrollTrigger);
  
  gsap.utils.toArray(".gs_reveal").forEach(function(elem) {
    hide(elem); // assure that the element is hidden when scrolled into view
    
    ScrollTrigger.create({
      trigger: elem,
      onEnter: function() { animateFrom(elem) }, 
      onEnterBack: function() { animateFrom(elem, -1) },
      onLeave: function() { hide(elem) } // assure that the element is hidden when scrolled into view
    });
  });
});