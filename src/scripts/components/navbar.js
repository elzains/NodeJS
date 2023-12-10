class Navbar extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
        <div class="navbar">
            <div class="container">
                <div class="brand">
                    <img src="https://nodejs.org/static/images/logo.svg" alt="Node JS">
                </div>
                <ul>
                    <li><a href="#">LEARN</a></li>
                    <li><a href="#">ABOUT</a></li>
                    <li><a href="#">DOWNLOAD</a></li>
                    <li><a href="#">GUIDES</a></li>
                    <li><a href="#">BLOG</a></li>
                    <li><a href="#">CERTIFICATION</a></li>
                </ul>
                <div class="switchers">
                    <button id="light-mode-toggle" class="theme">
                        <img alt="Theme Switcher" fetchpriority="high" width="28" height="28" decoding="async" data-nimg="1" class="dark-image" style="color:transparent" src="https://nodejs.org/static/images/light-mode.svg">
                    </button>
                    <button class="language">
                    <img alt="Theme Switcher" fetchpriority="high" width="28" height="28" decoding="async" data-nimg="1" class="dark-image" style="color:transparent" src="https://nodejs.org/static/images/language-picker.svg">
                    </button>
                    <div class="item-language">
                        <a>English</a>
                    </div>
                </div>
            </div>
        </div>
    `;
  }
}

customElements.define("nav-bar", Navbar);
