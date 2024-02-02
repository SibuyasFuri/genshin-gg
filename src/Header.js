import "./Header.css";

function Header() {
  return (
    <div class="APp d-flex flex-column GenshinImpact">
      <nav class="header">
        <div class="toolbar">
          <div class="toolbar-active">
            <a href="/" class="brand active" aria-current="page">
              <img
                alt="GENSHIN.GG Logo"
                class="brand-icon"
                src="https://rerollcdn.com/GENSHIN/UI/brand-icon.svg"
              ></img>
            </a>
            <a href="/" class="toolbar-nav-item">
              <img
                alt="Genshin Impact"
                class="toolbar-game"
                src="https://rerollcdn.com/GENSHIN/GameIcons/genshin-game-icon.png"
              ></img>
              Genshin Impact
            </a>
          </div>
        </div>
        <div class="hamburger">
          <div class="hamburger-box">
            <div class="hamburger-inner"></div>
          </div>
        </div>
        <div class="nav">
          <ul class="nav-links">
            <li class="nav-item">
              <a href="/" class="nav-link">
                Characters
              </a>
            </li>
            <li class="nav-item">
              <a href="/builds/" class="nav-link active" aria-current="page">
                Builds
              </a>
            </li>
            <li class="nav-item">
              <a href="/teams/" class="nav-link">
                Teams
              </a>
            </li>
            <li class="nav-item">
              <a href="/tier-list/" class="nav-link">
                Tier List
              </a>
            </li>
            <li class="nav-item">
              <a href="/farming/" class="nav-link">
                Farming Guide
              </a>
            </li>
            <li class="nav-item dropdown">
              <a
                href="/weapons/"
                class="nav-link dropdown-toggle"
                aria-expanded="false"
                aria-haspopup="true"
                data-toggle="dropdown"
                id="navbarDropdown"
                role="button"
              >
                Database<i class="arrow down"></i>
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}

export default Header;
