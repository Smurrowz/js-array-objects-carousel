// console.log('slider')
const slides = [
	{
		url: 'http://www.viaggiareonline.it/wp-content/uploads/2014/11/sweden_148857365.jpg',
		title: 'Svezia 1',
		description:
			'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam.',
	},

	{
		url: 'https://static1.evcdn.net/images/reduction/1513757_w-1920_h-1080_q-70_m-crop.jpg',
		title: 'Perù 2',
		description:
			'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam.',
	},

	{
		url: 'https://img.itinari.com/pages/images/original/0d3ed180-d22d-48e8-84df-19c4d888b41f-62-crop.jpg?ch=DPR&dpr=2.625&w=1600&s=7ebd4b5a9e045f41b4e0c7c75d298d6c',
		title: 'Chile 3',
		description:
			'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam.',
	},
	{
		url: 'https://static1.evcdn.net/images/reduction/1583177_w-1920_h-1080_q-70_m-crop.jpg',
		title: 'Argentina 4',
		description:
			'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam.',
	},
	{
		url: 'https://cdn.sanity.io/images/24oxpx4s/prod/ed09eff0362396772ad50ec3bfb728d332eb1c30-3200x2125.jpg?w=1600&h=1063&fit=crop',
		title: 'Colombia 5',
		description:
			'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam.',
	},
]
const slidesArray = []

// prendo i dati dal dom
const wrapperEl = document.querySelector('.slides-wrapper')
const stato = document.querySelector('.slide__title')
const statoDescrizione = document.querySelector('.slide__description')
let currentIndex = 0
const arrowPrev = document.querySelector('.arrow-prev')
const arrowNext = document.querySelector('.arrow-next')
const invert = document.querySelector('.invert')




slides.forEach((el, index, slides) => {
	el = slides[index]
	const li = document.createElement('li')
	const h3 = document.createElement('h3')
	const p = document.createElement('p')
	const img = document.createElement('img')
	const div = document.createElement('div')
	li.classList.add('slide')
	h3.classList.add('slide__title')
	p.classList.add('slide__description')
	div.classList.add('slide__content')
	img.src = el.url
	h3.innerHTML = el.title
	p.innerHTML = el.description
	if (index === currentIndex) {
		li.classList.add('active')

	}
	wrapperEl.append(li)
	li.append(img)
	li.append(div)
	div.append(h3)
	div.append(p)
	slidesArray.push(li)
})

arrowPrev.addEventListener('click', goPrev)
arrowNext.addEventListener('click', goNext)
let slideAuto =  setInterval(goNext, 3000)

invert.addEventListener('click', function(){
		stopInterval()
		setInterval(goPrev,3000)
})









function stopInterval(){
	clearInterval(slideAuto)
}

wrapperEl.addEventListener('mouseenter', function () {
	stopInterval()
})
wrapperEl.addEventListener('mouseleave', function () {
	stopInterval()
	slideAuto = setInterval(goNext, 3000)
})


function goPrev() {
	if (currentIndex !== 0) {
		// toglie la classe active dalla slide attiva e la da alla slide precedente se non e' il primo
		const slideAttiva = slidesArray[currentIndex]
		slideAttiva.classList.remove('active')
		// do la classe active alla slide precedente
		const slidePrecedente = slidesArray[currentIndex - 1]
		slidePrecedente.classList.add('active')
		
		currentIndex--
	} else if (currentIndex === 0) {
		const slideAttiva = slidesArray[currentIndex]
		slideAttiva.classList.remove('active')
		
		const slidePrecedente = slidesArray[slidesArray.length - 1]
		slidePrecedente.classList.add('active')
		
		currentIndex = slidesArray.length - 1
	}
}

function goNext() {
	if (currentIndex !== slidesArray.length - 1) {
		// toglie la classe active dalla slide attiva e la da alla slide successiva se non e' l'ultimo
		const slideAttiva = slidesArray[currentIndex]
		slideAttiva.classList.remove('active')
		// do la classe active alla slide successiva
		const slideSuccessiva = slidesArray[currentIndex + 1]
		slideSuccessiva.classList.add('active')

		currentIndex++

	} else if (currentIndex === slidesArray.length - 1) {
		// tolgo la classe active dalla slide attiva 
		const slideAttiva = slidesArray[currentIndex]
		slideAttiva.classList.remove('active')
		// do la classe active alla prima slide
		const slideSuccessiva = slidesArray[0]
		slideSuccessiva.classList.add('active')

		currentIndex = 0
	}

}








