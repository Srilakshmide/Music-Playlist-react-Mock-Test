import {AiOutlineDelete} from 'react-icons/ai'
import './index.css'

const MusicListItem = props => {
  const {deletePlayListSong, itemDetails} = props
  const {imageUrl, id, name, genre, duration} = itemDetails

  const onClickDelete = () => {
    deletePlayListSong(id)
  }

  return (
    <li>
      <div className="list-items">
        <div className="image-text">
          <img src={imageUrl} alt="track" className="image" />
          <div className="title-container">
            <p className="title">{name}</p>
            <p className="genre">{genre}</p>
          </div>
        </div>
        <div className="button-time">
          <p className="time">{duration}</p>
          <button
            className="button"
            type="button"
            onClick={onClickDelete}
            data-testid="delete"
          >
            <AiOutlineDelete color="#ffffff" size={20} />
          </button>
        </div>
      </div>
    </li>
  )
}

export default MusicListItem
