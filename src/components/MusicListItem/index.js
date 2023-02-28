import {AiOutlineDelete} from 'react-icons/ai'
import './index.css'

const MusicListItem = props => {
  const {deletePlayListSong, itemDetails} = props
  const {imageUrl, id, name, genre, duration} = itemDetails

  const onClickDelete = () => {
    deletePlayListSong(id)
  }

  return (
    <li className="list-items">
      <img src={imageUrl} alt="track" className="image" />
      <div className="title-container">
        <p className="title">{name}</p>
        <p className="genre">{genre}</p>
      </div>
      <p className="time">{duration}</p>
      <button
        className="button"
        type="button"
        onClick={onClickDelete}
        data-testid="delete"
      >
        <AiOutlineDelete color="#ffffff" size={20} />
      </button>
    </li>
  )
}

export default MusicListItem
