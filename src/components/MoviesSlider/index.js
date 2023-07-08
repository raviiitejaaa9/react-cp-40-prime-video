// Write your code here
import Slider from 'react-slick'
import MovieItem from '../MovieItem'

import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

const MoviesSlider = props => {
  const {reqList} = props

  // console.log(reqList)
  const options = {
    dots: true,
    slidesToShow: 4,
    slidesToScroll: 1,
  }

  return (
    <div className="slider-container">
      <Slider {...options} className="slider">
        {reqList.map(eachItem => (
          <MovieItem key={eachItem.id} eachMovieItem={eachItem} />
        ))}
      </Slider>
    </div>
  )
}

export default MoviesSlider
