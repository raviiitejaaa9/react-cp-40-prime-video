// Write your code here
import Popup from 'reactjs-popup'
import ReactPlayer from 'react-player'
import {IoMdClose} from 'react-icons/io'

// import 'reactjs-popup/dist/index.css'

import './index.css'

const MovieItem = props => {
  const {eachMovieItem} = props
  const {thumbnailUrl, videoUrl} = eachMovieItem

  return (
    <div className="popup-container">
      <Popup
        modal
        trigger={
          <img src={thumbnailUrl} alt="thumbnail" className="thumbnail" />
        }
      >
        {close => (
          <div className="popup">
            <button
              className="close-btn"
              onClick={() => close()}
              type="button"
              data-testid="closeButton"
            >
              <IoMdClose className="close-icon" />
            </button>
            <ReactPlayer url={videoUrl} />
          </div>
        )}
      </Popup>
    </div>
  )
}

export default MovieItem
