import './CommentCard.scss';

function Comments({ comment }) {
  return (
    <>
      <div className="comments__items">
        <div className="comments__avatar">
          <img src="" alt="" />
        </div>
        <div className="comments__details">
          <div className="comments__info">
            <p className="comments__author">{comment.name}</p>
            <p className="comments__date">{new Date(comment.timestamp).toLocaleDateString()}</p>
          </div>
          <p className="comments__response">{comment.comment}</p>
        </div>
      </div>
    </>
  );
}

export default Comments;
