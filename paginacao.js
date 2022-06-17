const nextPag = document.querySelector('.btn-next')
const prevPag = document.querySelector('.btn-prev')

let start = 0
let end = 5


nextPag.addEventListener('click', () => {
   if (end != moviesArray.length) {
      start += 5
      end += 5
   } else {
      start = 0
      end = 5
   }
   createElements(start, end)
})

prevPag.addEventListener('click', () => {
   if (start != 0) {
      start -= 5
      end -= 5
   } else {
      start = moviesArray.length - 5
      end = moviesArray.length
   }
   createElements(start, end)
})