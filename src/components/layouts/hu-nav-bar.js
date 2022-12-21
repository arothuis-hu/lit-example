import { LitElement, css, html } from "lit";

class HuNavBar extends LitElement {
    constructor() {
        super();
    }

    render () {
        return html`
            <div class="nav-container">
                <nav>
                    <slot></slot>
                </nav>
            </div>
        `;
    }

    static get styles() {
        return css`
            nav {
                max-width: var(--width-inner);
                margin: 0 auto;
                padding: 1rem 2rem;
                display: flex;
                gap: 1rem;
            }
            
            .nav-container {
                width: 100%;
                background: var(--color-primary-500)
            }
        `;
    }
}

window.customElements.define("hu-nav-bar", HuNavBar);