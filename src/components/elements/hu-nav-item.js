import { LitElement, css, html } from "lit";

class HuNavItem extends LitElement {
    static properties = {
        to: { type: String }
    }
    
    constructor() {
        super();

        this.to = "/";
    }

    render () {
        return html`
            <a href="${this.to}">
                <slot><slot>
            </a>
        `;
    }

    static get styles() {
        return css`
            a {
                font-weight: bold;
                color: white;
                text-decoration: none;
            }
        `;
    }
}

window.customElements.define("hu-nav-item", HuNavItem);