class Footer extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
          <footer>
            <div class="row">
                <div class="col">
                    <div class="container">
                        <p>Copyright <a href="https://openjsf.org">OpenJS Foundation</a> and Node.js contributors. All rights reserved. The<!-- --> <a href="https://openjsf.org">OpenJS Foundation</a> has registered trademarks and uses trademarks. For a list of trademarks of the<!-- --> <a href="https://openjsf.org">OpenJS Foundation</a>, please see our<!-- --> <a href="https://trademark-policy.openjsf.org">Trademark Policy</a> <!-- -->and <a href="https://trademark-list.openjsf.org">Trademark List</a>. Trademarks and logos not indicated on the<!-- --> <a href="https://trademark-list.openjsf.org">list of OpenJS Foundation trademarks</a> <!-- -->are trademarks™ or registered® trademarks of their respective holders. Use of them does not imply any affiliation with or endorsement by them.</p>
                    </div>
                </div>
                <div class="col">
                    <ul>
                        <li><a href="">The OpenJS Foundation</a></li>
                        <li><a href="">Trademark Policy</a></li>
                        <li><a href="">Privacy Policy</a></li>
                        <li><a href="">Code of Conduct</a></li>
                        <li><a href="">Security Reporting</a></li>
                    </ul>
                </div>
            </div>
          </footer>
      `;
  }
}
customElements.define("foot-bar", Footer);
