/*=============== HOME SPLIT TEXT ===============*/
const { animate, text, stagger } = anime


const { chars: chars1} = text.split('.home-profession-1', {chars: true })
const { chars: chars2} = text.split('.home-profession-2', {chars: true })

animate(chars1, {
  y: [
    { to: ['100%', '0%'] },
    { to: '-100%', delay: 4000, ease: 'in(3)' }
  ],
  duration: 900,
  ease: 'out(3)',
  delay: stagger(80),
  loop: true,
})

animate(chars2, {
  y: [
    { to: ['100%', '0%'] },
    { to: '-100%', delay: 4000, ease: 'in(3)' }
  ],
  duration: 900,
  ease: 'out(3)',
  delay: stagger(80),
  loop: true,
})

/*=============== SWIPER PROJECTS ===============*/
const swiperProject = new Swiper('.project-swiper', {
  loop: true,
  spaceBetween: 24,
  slidesPerView: 'auto',
  grabCursor: true,
  speed: 600,

  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },

  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },
});

/*=============== WORK TABS ===============*/
const tabs = document.querySelectorAll('[data-target]'),
      tabContents = document.querySelectorAll('[data-content]')

tabs.forEach((tab) => {
  tab.addEventListener('click', () => {
    const targetSelector = tab.dataset.target,
          targetContent = document.querySelector(targetSelector)

    // mematikan semua konten dan active tabs
    tabContents.forEach((content) => content.classList.remove('work-active'))
    tabs.forEach((t) => t.classList.remove('work-active'))

    // menyalakan tab dan menyesuaikan konten
    tab.classList.add('work-active')
    targetContent.classList.add('work-active')
  })
})

/*=============== SERVICES ACCORDION ===============*/
const servicesButtons = document.querySelectorAll('.service-button')

servicesButtons.forEach(button => {
  const heightInfo = document.querySelector('.service-info')
  heightInfo.style.height = heightInfo.scrollHeight + 'px'

  button.addEventListener('click', () => {
    const servicesCards = document.querySelectorAll('.service-card'),
          currentCard = button.parentNode,
          currentInfo = currentCard.querySelector('.service-info'),
          isCardOpen = currentCard.classList.contains('service-card')

    servicesCards.forEach(card => {
      card.classList.replace('service-open', 'service-close')

      const info = card.querySelector('.service-info')
            info.style.height = '0'
    })

    if(isCardOpen){
      currentCard.classList.replace('service-close', 'service-open')
      currentInfo.style.height = currentInfo.scrollHeight + 'px'
    }
  })
})


/*=============== COPY EMAIL IN CONTACT ===============*/
const copyBtn = document.getElementById('contact-btn'),
      copyEmail = document.getElementById('contact-email').textContent

copyBtn.addEventListener('click', () => {
  navigator.clipboard.writeText(copyEmail).then(() => {
    copyBtn.innerHTML = 'Email copied <i class="ri-check-line"></i>'

    setTimeout(() => {
      copyBtn.innerHTML = 'Copy email <i class="ri-file-copy-line"></i>'
    }, 2000)
  })
})

/*=============== CURRENT YEAR OF THE FOOTER ===============*/ 
const textYear = document.getElementById('footer__year')
      currentYear = new Date().getFullYear()

textYear.textContent = currentYear

/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/
const section = document.querySelectorAll('section[id]')

const scrollActive = () => {
  const scrollY = window.scrollY

  section.forEach (section => {
    const id = section.id,
          top = section.offsetTop - 50,
          height = section.offsetHeight,
          link = document.querySelector('.nav-menu a[href*=' + id + ']')
    if(!link) return

    link.classList.toggle('active-link', scrollY > top && scrollY <= top + height)
  })
}
window.addEventListener('scroll', scrollActive)

/*=============== CUSTOM CURSOR ===============*/
const cursor = document.querySelector('.cursor')
let mouseX = 0, mouseY = 0

const cursorMove = () => {
  cursor.style.left = `${mouseX}px`
  cursor.style.top = `${mouseY}px`
  cursor.style.transform = 'translate(-50%, -50%)'

  requestAnimationFrame(cursorMove)
}

document.addEventListener('mousemove', (e) => {
  mouseX = e.clientX
  mouseY = e.clientY
})

cursorMove()

/* Hide custom cursor on links */
const a = document.querySelectorAll('a')

a.forEach(item => {
  item.addEventListener('mouseover', () => {
    cursor.classList.add('hide-cursor')
  })
  item.addEventListener('mouseleave', () => {
    cursor.classList.remove('hide-cursor')
  })
});
/*=============== SCROLL REVEAL ANIMATION ===============*/