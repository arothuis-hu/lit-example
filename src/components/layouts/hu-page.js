import { LitElement, css, html } from "lit";

import "./hu-nav-bar";
import "../elements/hu-nav-item";


class HuPage extends LitElement {
    constructor() {
        super();
    }

    render() {
        return html`
            <hu-nav-bar>
                <hu-nav-item to="">Home</hu-nav-item>
                <hu-nav-item to="notes">Notes</hu-nav-item>
                <hu-nav-item to="login">Login</hu-nav-item>
            </hu-nav-bar>

            <div class="page">
                <slot></slot>
            </div>
            
        `;
    }

    static get styles() {
        return css`            
            :host {
                display: block;
            }

            .page { 
                max-width: var(--width-inner);
                padding: 1rem 2rem;
                margin: 0 auto;
            }
        `;
    }
}

window.customElements.define("hu-page", HuPage);