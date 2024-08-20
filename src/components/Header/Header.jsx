import './Header.scss';

function Header() {
  return (
    <header className="header">
      <img src="../../src/assets/logo/brainFlix-logo.svg" alt="Brainflix logo" className="header__logo" />
      <div className="header__banner">
        <div className="header__search">
          <img src="../../src/assets/icons/search.svg" alt="search icon" className="header__search-icon" />
          <input type="text" id="search" className="header__search-input" placeholder="Search" />
        </div>
        <img
          src="../../src/assets/images/mohan-muruge.jpg"
          alt="user avatar"
          className="header__avatar header__avatar--mobile"
        />
      </div>
      <button className="header__button">
        <img src="../../src/assets/icons/upload.svg" alt="header__button-icon" /> UPLOAD
      </button>
      <img
        src="../../src/assets/images/mohan-muruge.jpg"
        alt="user avatar"
        className="header__avatar header__avatar--tablet"
      />
    </header>
  );
}

export default Header;
