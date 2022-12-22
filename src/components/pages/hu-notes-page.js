import { LitElement, css, html } from "lit";

import "../layouts/hu-note-form";

class HuNotesPage extends LitElement {
    static properties = { 
        notes: { type: Array }
    }

    constructor() {
        super();
        this.notes = [];
    }

    render() {
        const noteList = html`
            <ul class="note-list">
                ${this.notes.map(note => html`<li>${note}</li>`)}
            </ul>
        `;

        return html`
            <h1>Notes</h1>

            <hu-note-form @note-added=${this._noteAdded}>
            </hu-note-form>

            ${noteList}
        `;
    }

    _noteAdded(event) {
        const { note } = event.detail;
        this.notes = [...this.notes, note];
    }

    static get styles() {

    }
}

window.customElements.define("hu-notes-page", HuNotesPage);