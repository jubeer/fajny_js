import { getBlogPost } from '../github/service';
import style from './style.css';

/* eslint-disable no-unused-vars */
/* eslint-disable import/prefer-default-export */
/* eslint-disable eol-last */
/* eslint-disable no-undef */
class HtmlElementWithContent extends HTMLElement {
    constructor(tag, tagStyle, content) {
        super();
        const element = document.createElement(tag);
        element.className = tagStyle;
        element.innerHTML = `
        <div class="${style.container}">
            ${content}
        </div>
        `;
        this.appendChild(element);
    }
}

export class Header extends HtmlElementWithContent {
    constructor() {
        super('header', style.header, `
        <h1 class="${style['header-heading']}">Yet another programmer's blog</h1>
        `);
    }
}

export class Navigation extends HtmlElementWithContent {
    constructor() {
        super('nav', style['nav-bar'], `
		<ul class="${style.nav}">
			<li><a href="#">Blog</a></li>
			<li><a href="#">Contact</a></li>
			<li><a href="../index.html">About Me</a></li>
		</ul>
        `);
    }
}

export class Footer extends HtmlElementWithContent {
    constructor() {
        super('footer', style.footer, '&copy; Copyright Apolyon 2019');
    }
}
export class Body extends HTMLElement {
    constructor() {
        super();
        const section = document.createElement('section');
        section.className = style.content;
        section.innerHTML = `
        <style>
        .${style.container} {
            max-width: 70em;
            margin: 0 auto;
        }
        section
        {
        	overflow: hidden;
        	padding: 1em 1.25em;
        	background-color: #fff;
        }
        .main, .aside
        {
        	margin-bottom: 1em;
        }
        @media (min-width: 55em)
        {
            section { padding: 2em 3em;
        }
        main
    	{
    		float: left;
    		width: 65%;
    		margin-right: 5%;
    		margin-bottom: 1em;
    	}
    	aside
    	{
    		float: left;
    		width: 30%;
    		margin-bottom: 1em;
    	}
        </style>
        <div class="${style.container}">
            <main>
                <slot name="posts"></slot>
            </main>
            <aside>
                <slot name="side-menu"></slot>
            </aside>
        </div>
        `;
        this.attachShadow({ mode: 'open' })
            .appendChild(section);
    }
}

export class BlogPost extends HTMLElement {
    static get observedAttributes() {
        return ['post-name'];
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
        const name = this.getAttribute('post-name');
        const md = document.createElement('mark-down');
        md.textContent = (await getBlogPost(`${name}.md`));
        this.shadow.appendChild(md);
        this.shadow.appendChild(document.createElement('style')).innerHTML = `
        pre {
            width: 100%;
            overflow: scroll;
        }
        `;
    }

    clean() {
        this.shadow.childNodes.forEach(child => child.remove());
    }
}