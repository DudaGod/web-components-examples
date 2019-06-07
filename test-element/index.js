'use strict';

class TestElement extends HTMLElement {
    connectedCallback() {
        const thisDocument = document.currentScript.ownerDocument;
        const shadowRootEl = this.attachShadow({mode: 'open'});

        const template = thisDocument.querySelector('#tmpl-test-element');
        shadowRootEl.appendChild(template.content.cloneNode(true));
    }
};

customElements.define('test-element', TestElement);
