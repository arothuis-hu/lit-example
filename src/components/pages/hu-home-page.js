import { LitElement, css, html } from "lit";

class HuHomePage extends LitElement {
    render () {
        return html`
        <h1>Home<h1>
        
        `;
    }

    static get styles() {
        
    }
}

window.customElements.define("hu-home-page", HuHomePage);