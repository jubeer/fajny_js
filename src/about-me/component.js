import { getAboutMe } from '../github/service';

/* eslint-disable no-unused-vars */
/* eslint-disable import/prefer-default-export */
/* eslint-disable eol-last */
/* eslint-disable no-undef */
export class AboutMe extends HTMLElement {
    static get observedAttributes() {
        return ['about'];
    }

    constructor() {
        super();
        this.shadow = this.attachShadow({ mode: 'open' });
    }

    attributeChangedCallback(name, oldValue, newValue) {
        this.render();
    }

    async render() {
        this.clean();
        const md = document.createElement('mark-down');
        md.textContent = (await getAboutMe());
        this.shadow.appendChild(md);
    }

    clean() {
        this.shadow.childNodes.forEach(child => child.remove());
    }
}