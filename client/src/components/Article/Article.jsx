import './Article.scss';

function Article({ item }) {
  const { title, channel, timestamp, views, likes, description, comments } = item;

  const date = new Date(timestamp);
  const formattedDate = `${String(date.getMonth() + 1)}/${String(date.getDate())}/${date.getFullYear()}`;

  return (
    <div className="article">
      <div className="article__heading">
        <h1 className="article__title">{title}</h1>
        <div className="article__details">
          <div className="article__author-wrapper">
            <h4 className="article__author">{channel}</h4>
            <p className="article__date">{formattedDate}</p>
          </div>
          <div className="article__engagement">
            <div className="article__views-wrapper">
              <img className="article__views-icon" src="../../src/assets/icons/views.svg" alt="view icon" />
              <p className="article__views">{views}</p>
            </div>
            <div className="article__likes-wrapper">
              <img className="article__likes-icon" src="../../src/assets/icons/likes.svg" alt="like icon" />
              <p className="article__likes">{likes}</p>
            </div>
          </div>
        </div>
      </div>
      <div className="article__body">
        <p className="article__description">{description}</p>
        <p className="article__comments-count">{comments?.length + ' Comments'}</p>
      </div>
    </div>
  );
}

export default Article;
