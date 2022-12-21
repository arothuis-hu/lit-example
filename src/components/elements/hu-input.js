import { LitElement, html, css } from 'lit';

export class HuInput extends LitElement {
    static properties = [
        { index: Number }
    ];
    
    static styles = [
        css`
            :host {
                display: block;
            }
        `
    ];

    render() {
        return html`
            <input type="text" />
        `;
    }
}

customElements.define('hu-input', HuInput);
