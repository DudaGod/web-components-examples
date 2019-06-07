'use strict';

class UiMessage extends HTMLElement {
    connectedCallback() {
        const thisDocument = document.currentScript.ownerDocument;
        const tmpl = thisDocument.getElementById('tmpl-ui-message');

        const shadowRoot = this.attachShadow({mode: 'open'});
        shadowRoot.appendChild(tmpl.content.cloneNode(true));

        this.elems = [].slice.call(document.getElementsByTagName('ui-message'));
        this.elems.forEach((elem) => {
            elem.addEventListener('click', this.handleClick);
        });
    }

    handleClick(e) {
        alert('Handle click on ui message ' + e.target.className);
    }

    disconnectedCallback() {
        this.elems.forEach((elem) => {
            elem.removeEventListener('click', this.handleClick);
        });
    }
};

customElements.define('ui-message', UiMessage);
