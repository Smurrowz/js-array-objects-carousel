// console.log('slider')
const slides = [
	{
		url: 'http://www.viaggiareonline.it/wp-content/uploads/2014/11/sweden_148857365.jpg',
		title: 'Svezia ',
		description:
			'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam.',
	},

	{
		url: 'https://static1.evcdn.net/images/reduction/1513757_w-1920_h-1080_q-70_m-crop.jpg',
		title: 'Perù ',
		description:
			'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam.',
	},

	{
		url: 'https://img.itinari.com/pages/images/original/0d3ed180-d22d-48e8-84df-19c4d888b41f-62-crop.jpg?ch=DPR&dpr=2.625&w=1600&s=7ebd4b5a9e045f41b4e0c7c75d298d6c',
		title: 'Chile ',
		description:
			'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam.',
	},
	{
		url: 'https://static1.evcdn.net/images/reduction/1583177_w-1920_h-1080_q-70_m-crop.jpg',
		title: 'Argentina ',
		description:
			'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam.',
	},
	{
		url: 'https://cdn.sanity.io/images/24oxpx4s/prod/ed09eff0362396772ad50ec3bfb728d332eb1c30-3200x2125.jpg?w=1600&h=1063&fit=crop',
		title: 'Colombia ',
		description:
			'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam.',
	},
]
const slidesArray = []
const thumbArray = []

// prendo i dati dal dom
const wrapperEl = document.querySelector('.slides-wrapper')
const stato = document.querySelector('.slide__title')
const statoDescrizione = document.querySelector('.slide__description')
let currentIndex = 0
const arrowPrev = document.querySelector('.arrow-prev')
const arrowNext = document.querySelector('.arrow-next')
const invert = document.querySelector('.invert')
const thumbContainer = document.querySelector('.thumbnail-container')
let indImg = 0





slides.forEach((el, index, slides) => {
	el = slides[index]
	const li = document.createElement('li')
	const h3 = document.createElement('h3')
	const p = document.createElement('p')
	const img = document.createElement('img')
	const div = document.createElement('div')
	const divThumb = document.createElement('div')
	const imgThumb = document.createElement('img')
	li.classList.add('slide')
	h3.classList.add('slide__title')
	p.classList.add('slide__description')
	div.classList.add('slide__content')
	divThumb.classList.add('thumbnail-card')
	img.src = el.url
	imgThumb.src = el.url
	h3.innerHTML = el.title
	p.innerHTML = el.description
	if (index === currentIndex) {
		li.classList.add('active')
		divThumb.classList.add('active')

	}
	divThumb.setAttribute('num', index)
	wrapperEl.append(li)
	li.append(img)
	li.append(div)
	div.append(h3)
	div.append(p)
	thumbContainer.append(divThumb)
	divThumb.append(imgThumb)
	slidesArray.push(li)
	thumbArray.push(divThumb)
})

arrowPrev.addEventListener('click', goPrev)
arrowNext.addEventListener('click', goNext)
let slideAuto = setInterval(goNext, 3000)

invert.addEventListener('click', function () {
	invert.classList.toggle('active')
	if (invert.classList.contains('active')) {
		clearInterval(slideAuto)
		slideAuto = setInterval(goPrev, 3000)
		console.log('vai indietro')
	} else {
		clearInterval(slideAuto)
		slideAuto = setInterval(goNext, 3000)
		console.log('vai avanti')
	}
})








wrapperEl.addEventListener('mouseenter', function () {
	clearInterval(slideAuto)
})
wrapperEl.addEventListener('mouseleave', function () {
	clearInterval(slideAuto)
	slideAuto = setInterval(goNext, 3000)
})

for (let i = 0; i < thumbArray.length; i++) {

	thumbArray[i].addEventListener('click', () => {
		indImg = parseInt(thumbArray[i].getAttribute('num'));


		for (let j = 0; j < slidesArray.length; j++) {
			slidesArray[j].classList.remove('active');
			thumbArray[j].classList.remove('active');
		}
		slidesArray[indImg].classList.add('active');
		thumbArray[indImg].classList.add('active');
		currentIndex = indImg
	});
}



function goPrev() {
	if (currentIndex !== 0) {
		// toglie la classe active dalla slide attiva e la da alla slide precedente se non e' il primo
		let slideAttiva = slidesArray[currentIndex]
		let thumbAttiva = thumbArray[currentIndex]
		slideAttiva.classList.remove('active')
		thumbAttiva.classList.remove('active')
		// do la classe active alla slide precedente
		let slidePrecedente = slidesArray[currentIndex - 1]
		let thumbPrecedente = thumbArray[currentIndex - 1]
		slidePrecedente.classList.add('active')
		thumbPrecedente.classList.add('active')

		currentIndex--
	} else if (currentIndex === 0) {
		const slideAttiva = slidesArray[currentIndex]
		const thumbAttiva = thumbArray[currentIndex]
		slideAttiva.classList.remove('active')
		thumbAttiva.classList.remove('active')

		const slidePrecedente = slidesArray[slidesArray.length - 1]
		const thumbPrecedente = thumbArray[slidesArray.length - 1]
		slidePrecedente.classList.add('active')
		thumbPrecedente.classList.add('active')

		currentIndex = slidesArray.length - 1
	}
}

function goNext() {
	if (currentIndex !== slidesArray.length - 1) {
		// toglie la classe active dalla slide attiva e la da alla slide successiva se non e' l'ultimo
		const slideAttiva = slidesArray[currentIndex]
		const thumbAttiva = thumbArray[currentIndex]
		slideAttiva.classList.remove('active')
		thumbAttiva.classList.remove('active')
		// do la classe active alla slide successiva
		const slideSuccessiva = slidesArray[currentIndex + 1]
		const thumbSuccessiva = thumbArray[currentIndex + 1]
		slideSuccessiva.classList.add('active')
		thumbSuccessiva.classList.add('active')

		currentIndex++

	} else if (currentIndex === slidesArray.length - 1) {
		// tolgo la classe active dalla slide attiva 
		const slideAttiva = slidesArray[currentIndex]
		const thumbAttiva = thumbArray[currentIndex]
		slideAttiva.classList.remove('active')
		thumbAttiva.classList.remove('active')
		// do la classe active alla prima slide
		const slideSuccessiva = slidesArray[0]
		const thumbSuccessiva = thumbArray[0]
		slideSuccessiva.classList.add('active')
		thumbSuccessiva.classList.add('active')

		currentIndex = 0
	}

}






