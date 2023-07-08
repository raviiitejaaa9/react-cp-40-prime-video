// Write your code here
// import Slider from 'react-slick'

import MoviesSlider from '../MoviesSlider'

import './index.css'

const PrimeVideo = props => {
  const {moviesList} = props

  const actionMoviesList = moviesList.filter(
    eachItem => eachItem.categoryId === 'ACTION',
  )
  // console.log(actionMoviesList)

  const comedyMoviesList = moviesList.filter(
    eachItem => eachItem.categoryId === 'COMEDY',
  )

  // console.log(comedyMoviesList)

  return (
    <div className="app-container">
      <img
        src="https://assets.ccbp.in/frontend/react-js/prime-video-img.png "
        alt="prime video"
        className="prime-img"
      />
      <h1 className="action-head"> Action Movies </h1>
      <MoviesSlider reqList={actionMoviesList} />
      <h1 className="action-head"> Comedy Movies </h1>
      <MoviesSlider reqList={comedyMoviesList} />
    </div>
  )
}

export default PrimeVideo
