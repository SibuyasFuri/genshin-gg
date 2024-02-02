import "./Navbar.css";

function Navbar() {
  <div className="topNav">
    <div className="nav-container">
      <div className="nav-container-left">
        <a href="Menu">
          <span className="nav-icon-left"></span>Menu
        </a>
        <a href="Logo">
          <span className="nav-icon-left"></span>Logo
        </a>
        <a href="Logo">
          <span className="nav-icon-left"></span>News
        </a>
        <a href="Logo">
          <span className="nav-icon-left"></span>Guides
        </a>
        <a href="Logo">
          <span className="nav-icon-left"></span>Characters
        </a>
        <a href="Logo">
          <span className="nav-icon-left"></span>Tier List
        </a>
        <a href="Logo">
          <span className="nav-icon-left"></span>Banners
        </a>
        <a href="Logo">
          <span className="nav-icon-left"></span>Skill Priority
        </a>
        <a href="Logo">
          <span className="nav-icon-left"></span>Stages
        </a>
      </div>
      <div className="nav-container-right">
        <div className="search-box">
          <form className="search-form">
            <input type="search" placeholder="Search"></input>
            <div className="submit-button">
              <button type="submit"></button>
              <input type="hidden"></input>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>;
}
export default Navbar;
