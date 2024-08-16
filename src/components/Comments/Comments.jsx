import './Comments.scss';

function Comments({ item }) {
  const { comments } = item;

  return (
    <div>
      {comments.map((comment) => (
        <div className="comments__items" key={comment.id}>
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
      ))}
    </div>
  );
}

export default Comments;
