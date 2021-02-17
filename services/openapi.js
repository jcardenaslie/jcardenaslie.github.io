const OPEN_API_URL = "http://www.omdbapi.com/?i=tt3896198&apikey=24b0afcf"


const getPage = async(movie, page) => {
  const result = await fetch(`${OPEN_API_URL}&s="${movie}"&page=${page}`)
  const data = await result.json()
  return data.Search
}

const getMovieDetail = async (id) => {
  const result = await fetch(`${OPEN_API_URL}&i="tt0076759"&plot=full`)
  const data = await result.json()
  return data
}

const getMovieDetailByTitle = async (title) => {
  const result = await fetch(`${OPEN_API_URL}&t="${title}"`)
  const data = await result.json()
  return data
}