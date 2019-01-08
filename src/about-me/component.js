import { getAboutMe } from '../github/service';

/* eslint-disable no-unused-vars */
/* eslint-disable import/prefer-default-export */
/* eslint-disable eol-last */
/* eslint-disable no-undef */
export class AboutMe extends HTMLElement {
    constructor() {
        super();
        this.shadow = this.attachShadow({ mode: 'open' });
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
