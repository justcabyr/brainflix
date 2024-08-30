import './AddComment.scss'

function AddComment() {
  return (
    <div className="add-comments">
      <img src="../../src/assets/images/mohan-muruge.jpg" alt="user avatar" className="add-comments__avatar" />
      <div className="add-comment__wrapper">
        <div className="add-comment__content">
          <label className="add-comments__label" htmlFor="comments">
            JOIN THE CONVERSATION
          </label>
          <textarea
            className="add-comments__comment"
            id="comments"
            placeholder="Add a new comment"
            name="comments"
            required
          ></textarea>
        </div>
        <button className="add-comments__button" type="submit">
          <img className="add-comments__image" src="../../src/assets/icons/add_comment.svg" alt="add comment icon" />
          COMMENT
        </button>
      </div>
    </div>
  );
}

export default AddComment;
