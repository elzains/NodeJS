class Content extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
    <main id="main">
        <div class="container">
          <div class="home-intro">
            <p>Node.js® is an open-source, cross-platform JavaScript runtime environment.</p>
            <h2>Download Node.js®</h2>
            <div class="row">
                <div class="col">
                    <div class="wrapButton">
                        <a href="">
                            <div class="download__lts">
                                <h3>20.20.0 LTS</h3>
                                <p>Recommended For Most Users</p>
                            </div>
                        </a>
                        <ul>
                            <li><a href="">Other Downloads</a></li>
                            <li><a href="">Changelog</a></li>
                            <li><a href="">API Docs</a></li>
                        </ul>
                    </div>
                </div>
                <div class="col">
                    <div class="wrapButton">
                        <a href="">
                            <div class="download__current">
                                <h3>21.4.0 Current</h3>
                                <p>Latest Features</p>
                            </div>
                        </a>
                        <ul>
                            <li><a href="">Other Downloads</a></li>
                            <li><a href="">Changelog</a></li>
                            <li><a href="">API Docs</a></li>
                        </ul>
                    </div>
                </div>
            </div>
            <div class="schedule">
                <p>For information about supported releases, see the<a href=""> release schedule</a>.</p>
            </div>
          </div>
        </div>
      </main>
    `;
  }
}
customElements.define("content-wrap", Content);
