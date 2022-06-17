const url = 'https://www.themoviedb.org'
const containerMovies = document.querySelector('.movies')

let moviesArray = []
let moviesFiltrados = []
let arrayTemp = []

const initPage = async () => {
   const response = await fetch('https://tmdb-proxy.cubos-academy.workers.dev/3/discover/movie?language=pt-BR&include_adult=false')
   const body = await response.json()
   moviesArray = body.results
   moviesFiltrados = moviesArray
}

const createElements = (start, end) => {
   containerMovies.innerHTML = ''
   arrayTemp = moviesFiltrados.slice(start, end)
   arrayTemp.forEach((item) => {
      const movie = document.createElement('div')
      movie.classList.add('movie')
      movie.style.backgroundImage = `url(${item.poster_path})`

      const movieInfo = document.createElement('div')
      movieInfo.classList.add('movie__info')

      const movieTitle = document.createElement('span')
      movieTitle.classList.add('movie__title')
      movieTitle.textContent = item.title

      const movieRating = document.createElement('span')
      movieRating.classList.add('movie__rating')
      movieRating.textContent = item.vote_average

      const imgEstrela = document.createElement('img')
      imgEstrela.src = './assets/estrela.svg'

      containerMovies.appendChild(movie)
      movie.appendChild(movieInfo)
      movieInfo.appendChild(movieTitle)
      movieInfo.appendChild(movieRating)
      movieRating.appendChild(imgEstrela)

      const modalInfo = async () => {
         const modal = document.querySelector('.modal')
         const response = await fetch(`https://tmdb-proxy.cubos-academy.workers.dev/3/movie/${item.id}?language=pt-BR`)
         const body = await response.json()

         movie.addEventListener('click', () => {
            const closeModal = document.querySelector('.modal__close')
            const titleModal = document.querySelector('.modal__title')
            const imgModal = document.querySelector('.modal__img')
            const descriptionModal = document.querySelector('.modal__description')
            const averageModal = document.querySelector('.modal__average')

            modal.classList.remove('hidden')

            closeModal.addEventListener('click', () => {
               modal.classList.add('hidden')
            })

            titleModal.textContent = item.title
            imgModal.src = item.backdrop_path
            descriptionModal.textContent = item.overview
            averageModal.textContent = item.vote_average
         })
      }
      modalInfo()
   })
}




const init = async () => {
   await initPage()
   createElements(0, 5)
}

init()

