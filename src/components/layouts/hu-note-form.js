import { LitElement, html, css } from 'lit';

export class HuNoteForm extends LitElement {
    static properties = {
        note: { type: String }
    }

    constructor() {
        super();
        this.note = "";
    }

    render() {
        return html`
            <form>
                <label for="note">New note</label>
                <input id="note" autocomplete="off" type="text" .value=${this.note} @change=${event => { this.note = event.target.value }} />
                <input type="submit" @click=${this._send} value="Post" />
            </form>
        `;
    }

    _send(event) {
        event.preventDefault();
        
        const noteAdded = new CustomEvent("note-added", {
            detail: { note: this.note },
            bubbles: true,
            composed: true,
        });
        this.dispatchEvent(noteAdded)
        
        this.note = "";
    }

    static styles = [
        css`
            :host {
                display: block;
            }
        `
    ];
}

customElements.define("hu-note-form", HuNoteForm);
