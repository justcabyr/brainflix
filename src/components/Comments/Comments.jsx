import './Comments.scss';
import jsonData from '../../assets/data/video-details.json';

function Comments() {
  return (
    <div>
      {jsonData.map((list, index) => (
        <div className="comments__items" key={index}>
          <div className="comments__avatar">
            <img src="" alt="" />
          </div>
          <div className="comments__details">
            <div className="comments__info">
              <p className="comments__author">{list.comments[0].name}</p>
              <p className="comments__date">{new Date(list.comments[0].timestamp).toLocaleDateString()}</p>
            </div>
            <p className="comments__response">{list.comments[0].comment}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Comments;
