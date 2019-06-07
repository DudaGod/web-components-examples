'use strict';

class BtnTimer extends HTMLButtonElement {
    connectedCallback() {
        this.timer = 0;

        this.timerEl = document.querySelector('#timer');
        this.timerEl.addEventListener('click', this.handleClick);

        setInterval(() => this.tick(), 1000);
    }

    tick() {
        this.timer++;
        this.innerHTML = this.timer;
    }

    handleClick() {
        alert('current value ' + this.timer);
    }

    disconnectedCallback() {
        this.timerEl.removeEventListener('click', this.handleClick);
    }
};

customElements.define('btn-timer', BtnTimer, {extends: 'button'});
