import { useState } from 'react';
import './Upload.scss';

// import Header from '../Header/Header';
import { useNavigate } from 'react-router-dom';

function Upload() {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const navigate = useNavigate();

  const handleHomepage = () => {
    navigate('/');
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Upload successful!');
    console.log('Video uploaded with title:', title, 'and description:', description);
    navigate('/');
  };
  return (
    <>
      {/* <Header /> */}
      <section className="upload">
        <h1 className="upload__title">Upload Video</h1>
        <form action="" className="upload__form" onSubmit={handleSubmit}>
          <div className="upload__form-group">
            <div className="upload__label upload__form-body">
              <label className="uplaod__thumbnail">VIDEO THUMBNAIL</label>
              <img
                className="upload__label-image"
                src="../../src/assets/images/upload-video-preview.jpg"
                alt="video thumbnail"
              />
            </div>
            <div className="upload__input">
              <div className="upload__form-body">
                <label htmlFor="">TITLE YOUR VIDEO</label>
                <input
                  type="text"
                  id="title"
                  value={title}
                  placeholder="Add a title to your video"
                  className="upload__title-text"
                  onChange={(e) => setTitle(e.target.value)}
                />
              </div>
              <div className="upload__form-body">
                <label htmlFor="">ADD A VIDEO DESCRIPTION</label>
                <input
                  type="text"
                  id="description"
                  value={description}
                  placeholder="Add a description to your video"
                  className="upload__description-text"
                  onChange={(e) => setDescription(e.target.value)}
                />
              </div>
            </div>
          </div>
          <div className="upload__button">
            <button className="upload__publish" onClick={handleSubmit}>
              <img className="upload__publish-icon" src="../../src/assets/icons/publish.svg" alt="upload Icon" />
              PUBLISH
            </button>
            <button className="upload__cancel" onClick={handleHomepage}>
              CANCEL
            </button>
          </div>
        </form>
      </section>
    </>
  );
}

export default Upload;
