'use strict';

class RectFlowers extends HTMLElement {
    connectedCallback() {
        this.handleClick = this.handleClick.bind(this);

        const thisDocument = document.currentScript.ownerDocument;
        const tmpl = thisDocument.getElementById('tmpl-rect-flowers');

        const shadowRootEl = this.attachShadow({mode: 'open'});
        shadowRootEl.appendChild(tmpl.content.cloneNode(true));

        const internalRootEl = shadowRootEl.getElementById('root');
        this.flowerEl = shadowRootEl.getElementById('root__flower');
        this.blockEls = internalRootEl.getElementsByClassName('block');

        for (let i = 0; i < this.blockEls.length; i += 1) {
            const blockEl = this.blockEls[i];
            blockEl.addEventListener('click', this.handleClick);
        }
    }

    disconnectedCallback() {
        for (let i = 0; i < this.blockEls.length; i += 1) {
            const blockEl = this.blockEls[i];
            blockEl.removeEventListener('click', this.handleClick);
        }
    }

    handleClick(e) {
        this.flowerEl.innerHTML = e.target.dataset.flower;
    }
};

window.customElements.define('rect-flowers', RectFlowers);
