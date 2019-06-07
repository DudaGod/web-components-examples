'use strict';

class UiSlider extends HTMLElement {
    connectedCallback() {
        const thisDocument = document.currentScript.ownerDocument;
        const tmpl = thisDocument.getElementById('tmpl-ui-slider');

        const shadowRoot = this.attachShadow({mode: 'open'});
        shadowRoot.appendChild(tmpl.content.cloneNode(true));

        this.sliderEl = document.getElementById('ui-slider-el');
        this.sliderValEl = shadowRoot.getElementById('slider-value');
        this.$slider = $(shadowRoot.getElementById('slider'));

        this.sliderEl.addEventListener('slide', (e) => {
            this.sliderValEl.innerHTML = e.detail.value;
        });

        this.$slider.slider({
            min: this.getAttribute('min') || 0,
            max: this.getAttribute('max') || 500,
            value: this.getAttribute('value') || 0,
            slide: () => {
                var event = new CustomEvent("slide", {
                    detail: {
                        value: this.$slider.slider("option", "value")
                    },
                    bubbles: true
                });
                this.dispatchEvent(event);
            }
        });


    }
};

customElements.define('ui-slider', UiSlider);
