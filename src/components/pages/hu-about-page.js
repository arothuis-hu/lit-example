import { LitElement, css, html } from "lit";

import "../layouts/hu-page";

class HuAboutPage extends LitElement {
    static properties = { 
        value: { type: String }
    }

    constructor() {
        super();
        this.value = "";
    }

    render() {
        return html`
            <h1>About</h1>

            <input type="text" 
                   .value=${this.value} 
                   @change=${event => { this.value = event.target.value }}>
            
            <button @click=${this._empty}>Empty</button>
        `;
    }

    _empty() {
        this.value = "";
    }

    static get styles() {

    }
}

window.customElements.define("hu-about-page", HuAboutPage);