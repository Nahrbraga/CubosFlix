const filter = document.querySelector('.input')

filter.addEventListener('keyup', () => {
   if (filter.value !== '') {
      moviesFiltrados = []
      moviesArray.filter((movie) => {
         if (movie.title.toLowerCase().includes(filter.value.toLowerCase())) {
            moviesFiltrados.push(movie)
         }
      })
   } else {
      moviesFiltrados = moviesArray
   }
   createElements(0, 5)
})