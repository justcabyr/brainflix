import './Article.scss';

function Article({ item }) {
  const { title, channel, timestamp, views, likes, description, comments } = item;

  return (
    <div className="article">
      <div className="article__heading">
        <h2 className="article__title">{title}</h2>
        <div className="article__details">
          <h4 className="article__author">{channel}</h4>
          <p className="article__date">{timestamp}</p>
          <div className="article__views-wrapper">
            <p className="article__views">{views}</p>
          </div>
          <div className="article__likes-wrapper">
            <p className="article__likes">{likes}</p>
          </div>
        </div>
      </div>
      <div className="article__body">
        <p className="article__description">{description}</p>
        <p className="article__comments-count">{comments.length}</p>
      </div>
    </div>
  );
}

export default Article;
