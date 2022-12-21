import { LitElement, css, html } from "lit";

import "../layouts/hu-page";

class HuLoginPage extends LitElement {
    constructor() {
        super();
    }

    render () {
        return html`
            <h1>Login<h1>
            <img src="assets/img/lit.svg" />
        `;
    }

    static get styles() {
        return css`
            :host {
                display: block;
                max-width: var(--width-container);
                padding: 1rem 2rem;
                margin: 0 auto;
            }
        `;
    }
}

window.customElements.define("hu-login-page", HuLoginPage);