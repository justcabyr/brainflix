import './Upload.scss';

import Header from '../Header/Header';

function Upload() {
  return (
    <>
      <Header />
      <section className="upload">
        <h1 className="upload__title">Upload Video</h1>
        <form action="" className="upload__form">
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
                <input type="text" placeholder="Add a title to your video" className='upload__title-text'/>
              </div>
              <div className="upload__form-body">
                <label htmlFor="">ADD A VIDEO DESCRIPTION</label>
                <input type="text" placeholder="Add a description to your video" className='upload__description-text'/>
              </div>
            </div>
          </div>
          <div className="upload__button">
            <button className="upload__publish">
              <img className="upload__publish-icon" src="../../src/assets/icons/publish.svg" alt="upload Icon" />
              PUBLISH
            </button>
            <button className="upload__cancel">CANCEL</button>
          </div>
        </form>
      </section>
    </>
  );
}

export default Upload;
