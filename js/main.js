// Mobile Menu
if (document.querySelector('.burger')) {
	// Toggle burger Menu
	function toggleBurgerMenu() {
		const burger = document.querySelector('.burger')
		const menu = document.querySelector('.mobile__menu')
		const submenuMob = document.querySelector('.submenu__mobile')
		const submenuMobTrigger = document.querySelector('.with__submenu-mob')
		const links = document.querySelectorAll('.mobile__menu a')

		const body = document.querySelector('body')

		links.forEach((link) => {
			link.addEventListener('click', () => {
				menu.classList.remove('active')
				burger.classList.remove('active')
				body.classList.remove('locked')
			})
		})

		burger.addEventListener('click', (e) => {
			if (!menu.classList.contains('active')) {
				menu.classList.add('active')
				burger.classList.add('active')
				body.classList.add('locked')
			} else {
				menu.classList.remove('active')
				burger.classList.remove('active')
				body.classList.remove('locked')
			}
		})
		// Вот тут мы ставим брейкпоинт навбара
		window.addEventListener('resize', () => {
			if (window.innerWidth > 991.98) {
				menu.classList.remove('active')
				burger.classList.remove('active')
				body.classList.remove('locked')
			}
		})

		submenuMobTrigger.addEventListener('click', () => {
			submenuMobTrigger.classList.toggle('active')
			slideToggle(submenuMob)
		})
	}
	toggleBurgerMenu()

	// Hide / Show Header
	const header = document.querySelector('header')
	const sections = document.querySelectorAll('section')

	let prevScrollpos = window.pageYOffset

	window.onscroll = function () {
		let currentScrollPos = window.pageYOffset

		if (prevScrollpos > currentScrollPos) {
			header.classList.remove('hidden')
		} else if (prevScrollpos < 0) {
			header.classList.remove('hidden')
		} else {
			header.classList.add('hidden')
		}

		prevScrollpos = currentScrollPos

		// Check if header is above a section with class bg__white
		let isHeaderAboveWhite = false
		sections.forEach((section) => {
			if (section.classList.contains('bg__white')) {
				let sectionTop = section.offsetTop
				if (currentScrollPos >= sectionTop - header.clientHeight) {
					isHeaderAboveWhite = true
				}
			}
		})

		// Add/remove classes based on position
		if (isHeaderAboveWhite) {
			header.classList.add('nav__black')
			header.classList.remove('nav__white')
		} else {
			header.classList.add('nav__white')
			header.classList.remove('nav__black')
		}

		if (currentScrollPos < 70) {
			header.classList.remove('nav__white')
			header.classList.remove('nav__black')
		}
	}
}
// SlideId/Slide Up mobile submenu
/* SLIDE UP */
let slideUp = (target, duration = 300) => {
	target.style.transitionProperty = 'height, margin, padding'
	target.style.transitionDuration = duration + 'ms'
	target.style.boxSizing = 'border-box'
	target.style.height = target.offsetHeight + 'px'
	target.offsetHeight
	target.style.overflow = 'hidden'
	target.style.height = 0
	target.style.paddingTop = 0
	target.style.paddingBottom = 0
	target.style.marginTop = 0
	target.style.marginBottom = 0
	target.style.border = 'none'

	window.setTimeout(() => {
		target.style.display = 'none'
		target.style.removeProperty('height')
		target.style.removeProperty('padding-top')
		target.style.removeProperty('padding-bottom')
		target.style.removeProperty('margin-top')
		target.style.removeProperty('margin-bottom')
		target.style.removeProperty('overflow')
		target.style.removeProperty('transition-duration')
		target.style.removeProperty('transition-property')
		target.style.removeProperty('border')
	}, duration)
}
/* SLIDE DOWN */
let slideDown = (target, duration = 300) => {
	target.style.removeProperty('display')
	let display = window.getComputedStyle(target).display
	if (display === 'none') display = 'flex'
	target.style.display = display
	let height = target.offsetHeight
	target.style.overflow = 'hidden'
	target.style.height = 0
	target.style.paddingTop = 0
	target.style.paddingBottom = 0
	target.style.marginTop = 0
	target.style.marginBottom = 0
	target.offsetHeight
	target.style.boxSizing = 'border-box'
	target.style.transitionProperty = 'height, margin, padding'
	target.style.transitionDuration = duration + 'ms'
	target.style.height = height + 'px'
	target.style.border = 'none'

	target.style.removeProperty('padding-top')
	target.style.removeProperty('padding-bottom')
	target.style.removeProperty('margin-top')
	target.style.removeProperty('margin-bottom')
	target.style.removeProperty('border')

	window.setTimeout(() => {
		target.style.removeProperty('height')
		target.style.removeProperty('overflow')
		target.style.removeProperty('transition-duration')
		target.style.removeProperty('transition-property')
		target.style.removeProperty('border')
	}, duration)
}
/* TOOGLE */
const slideToggle = (target, duration = 300) => {
	if (window.getComputedStyle(target).display === 'none') {
		return slideDown(target, duration)
	} else {
		return slideUp(target, duration)
	}
}

// Main Page Scripts
if (document.querySelector('#main-page')) {
	// Specs Accordion
	function accordion() {
		const items = document.querySelectorAll('.accordion__item-trigger')
		items.forEach((item) => {
			item.addEventListener('click', () => {
				const parent = item.parentNode
				if (parent.classList.contains('accordion__item-active')) {
					parent.classList.remove('accordion__item-active')
				} else {
					// document
					// 	.querySelectorAll('.accordion__item')
					// 	.forEach((child) => {
					// 		child.classList.remove('accordion__item-active')
					// 	})
					parent.classList.add('accordion__item-active')
				}
			})
		})
	}
	accordion()

	// Functions Video Controls
	function videoControls() {
		const playBtns = document.querySelectorAll('.play__btn')
		const videos = document.querySelectorAll('video')

		playBtns.forEach((btn, i) => {
			btn.addEventListener('click', () => {
				btn.classList.remove('hidden')
				if (videos[i].paused) {
					btn.classList.add('hidden')
					// videos[i].controls = true
					videos[i].play()
				} else {
					btn.classList.remove('hidden')
					// videos[i].controls = false
					videos[i].pause()
				}
			})

			videos.forEach((video, idx) => {
				video.addEventListener('click', () => {
					if (video.paused) {
						playBtns[idx].classList.add('hidden')
						console.log(22)

						// videos[i].controls = true
						video.play()
					} else {
						playBtns[idx].classList.remove('hidden')
						// videos[i].controls = false
						video.pause()
					}
				})
			})
		})
	}
	videoControls()

	// Hero Animations
	gsap.from('.hero__text', { x: 30, opacity: 0, duration: 0.8 })
	gsap.from('.hero__title', { x: -30, opacity: 0, duration: 0.8 })
	gsap.from('.hero__buttons', { y: 30, opacity: 0, duration: 0.8 })
}

// Article Page Sctipts
if (document.querySelector('#article-page')) {
	// Hero Animations
	gsap.from('.hero__article-text', { x: 30, opacity: 0, duration: 0.8 })
	gsap.from('.hero__article-title', { x: -30, opacity: 0, duration: 0.8 })
	gsap.from('.article__hero-img', { y: 30, opacity: 0, duration: 0.8 })
}

// Article Page Sctipts
if (document.querySelector('#contacts-page')) {
	// Hero Animations
	gsap.from('.contacts__text', { x: 30, opacity: 0, duration: 0.8 })
	gsap.from('.contacts__title', { x: -30, opacity: 0, duration: 0.8 })
}

// Scroll Top Button
const scroll = new SmoothScroll('a[href*="#"]')
if (document.querySelector('.scroll__top')) {
	const button = document.querySelector('.scroll__top')
	window.addEventListener('scroll', () => {
		if (
			document.body.scrollTop > 20 ||
			document.documentElement.scrollTop > 20
		) {
			button.style.display = 'flex'
		} else {
			button.style.display = 'none'
		}
	})
}
