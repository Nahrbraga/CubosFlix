const urlGeral = 'https://tmdb-proxy.cubos-academy.workers.dev/3/movie/436969?language=pt-BR'
const urlVideo = 'https://tmdb-proxy.cubos-academy.workers.dev/3/movie/436969/videos?language=pt-BR'

const initPageGeral = async () => {
   const response = await fetch(urlGeral)
   const body = await response.json()

   const highlight__video = document.querySelector('.highlight__video')
   highlight__video.style.backgroundImage = `url(${body.backdrop_path})`

   const highlight__title = document.querySelector('.highlight__title')
   highlight__title.textContent = body.title

   const highlight__rating = document.querySelector('.highlight__rating')
   highlight__rating.textContent = body.vote_average

   const highlight__genres = document.querySelector('.highlight__genres')
   let moviesString = []
   for (const item of body.genres) {
      moviesString += item.name + ', '
   }
   highlight__genres.textContent = moviesString

   const highlight__launch = document.querySelector('.highlight__launch')
   highlight__launch.textContent = body.release_date

   const highlight__description = document.querySelector('.highlight__description')
   highlight__description.textContent = body.overview
}

const initPageVideo = async () => {
   const response = await fetch(urlVideo)
   const body = await response.json()
   const arrayVideo = body.results

   const video = document.querySelector('.highlight__video-link')
   video.href = `https://www.youtube.com/watch?v=` + arrayVideo[0].key
}

initPageGeral()
initPageVideo()