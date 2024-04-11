let burger = document.querySelector('.header__burger')
let nav = document.querySelector('.nav')

burger.addEventListener('click', function () {
	burger.classList.toggle('active')
	nav.classList.toggle('active')
})
window.addEventListener('click', function (e) {
	let hasClass = e.target.classList.contains('active')
	if (hasClass) {
		nav.classList.add('active')
		burger.classList.add('active')
	} else {
		nav.classList.remove('active')
		burger.classList.remove('active')
	}
})
// Counter
	window.addEventListener('scroll', function onScroll() {
		if (window.scrollY >= 1000) {
			this.removeEventListener('scroll', onScroll)
			$('.count').each(function () {
				$(this)
					.prop('Counter', 0)
					.animate(
						{
							Counter: $(this).text(),
						},
						{
							duration: 4000,
							easing: 'swing',
							step: function (now) {
								$(this).text(Math.ceil(now))
							},
						}
					)
			})
		}
	})
// Button to Top
window.addEventListener('scroll', () => {
	let scroll = document.querySelector('.up')
	scrollAnimation()
	scroll.classList.toggle('visible', window.scrollY >= 1300)
	document.querySelector('.up').onclick = function () {
		window.scrollTo({
			top: 0,
			behavior: 'smooth',
		})
	}
})
// ScrollAnimation
const scrollItems = document.querySelectorAll('.scroll-item')
	const scrollAnimation = () => {
		let windowCenter = window.innerHeight + window.scrollY
		scrollItems.forEach(el => {
			let scrollOffset = el.offsetTop + el.offsetHeight / 2
			if (windowCenter >= scrollOffset) {
				el.classList.add('animation-class')
			}
		})
	}
	scrollAnimation()
// Header Fixed
const header = document.querySelector('.header')
const eat = document.querySelector('.eat')
const headerHeight = header.offsetHeight
const eatHeight = eat.offsetHeight
let lastScrollTop = 0

window.addEventListener('scroll', function() {
	let scrollDistance = scrollY
	if (scrollDistance > lastScrollTop){
		header.classList.remove('fixed')
		eat.style.marginTop = null
	}else {
			header.classList.add('fixed')
			eat.style.marginTop = `${headerHeight}px`
	}
	if(scrollDistance === 0){
		header.classList.remove('fixed')
		eat.style.marginTop = null
	}
	lastScrollTop = scrollDistance
})