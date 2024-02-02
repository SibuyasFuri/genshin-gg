import "./Footer.css";

function Footer() {
  return (
    <footer class="footer">
      <div class="container">
        <div class="r   ow">
          <div class="col-12 col-md-5">
            <div class="footer-meta">
              <a href="/">
                <img
                  alt="brand"
                  class="footer-logo"
                  src="https://rerollcdn.com/GENSHIN/UI/brand-icon.svg"
                ></img>
              </a>
              <p class="footer-description">
                <b>GENSHIN.GG</b>" is not affiliated with or endorsed by miHoYo.
                "<b>GENSHIN.GG</b>" is a Database and Tier List website for
                Genshin Impact and Honkai: Star Rail. "
              </p>
              <p class="footer-copyright">© GENSHIN.GG 2023</p>
            </div>
          </div>
          <div class="col-12 col-sm-6 col-md-2 offset-md-1">
            <h2 class="footer-link-title">More Links</h2>
            <ul class="footer-link-list">
              <li class="footer-link-item">
                <a href="mailto:hello.genshin@gmail.com" class="footer-link">
                  Contact
                </a>
              </li>
              <li class="footer-link-item">
                <a href="/privacy/" class="footer-link">
                  Privacy Policy
                </a>
              </li>
              <li class="footer-link-item">
                <a href="/#/" class="footer-link nn-cmp-show">
                  Manage Cookies
                </a>
              </li>
            </ul>
          </div>
          <div class="col-12 col-sm-6 col-md-2 offset-md-1">
            <h2 class="footer-link-title">Community Links</h2>
            <ul class="footer-link-list">
              <li class="footer-link-item">
                <a
                  href="https://discord.com/invite/genshinimpact"
                  class="footer-link"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Discord
                </a>
              </li>
              <li class="footer-link-item">
                <a
                  href="https://www.reddit.com/r/Genshin_Impact/"
                  class="footer-link"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Reddit
                </a>
              </li>
              <li class="footer-link-item">
                <a
                  href="https://www.facebook.com/Genshinimpact/"
                  class="footer-link"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Facebook
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
