import { GitHubRepo } from './model';

const REPOS_URL = 'https://api.github.com/users/mat3e/repos';
const POSTS_URL = 'https://raw.githubusercontent.com/mat3e/mat3e.github.io/master/blog/en/posts/';
const ABME_URL = 'https://raw.githubusercontent.com/mat3e/mat3e.github.io/master/blog/en/about-me.md';
const FORBIDDEN_REPOS = ['ux'];

const convert = ({
    name,
    stargazers_count: stars,
    license
}) => new GitHubRepo({
    name,
    stars,
    license: license ? license.spdx_id : ''
});

export default async function getRepos() {
    try {
        // eslint-disable-next-line no-undef
        const response = await fetch(REPOS_URL);
        if (response.ok) {
            return (await response.json())
                .filter(r => !FORBIDDEN_REPOS.includes(r.name))
                .map(convert);
        }
        throw Error('Response not 200');
    } catch (err) {
        console.warn(err);
        return [];
    }
}

export async function getBlogPost(name = '0.md') {
    try {
        // eslint-disable-next-line no-undef
        const response = await fetch(`${POSTS_URL}${name}`);
        if (response.ok) {
            return (await response.text());
        }
        throw Error('Response not 200');
    } catch (err) {
        console.warn(err);
        return '';
    }
}

export async function getAboutMe() {
    try {
        // eslint-disable-next-line no-undef
        const response = await fetch(`${ABME_URL}`);
        if (response.ok) {
            return (await response.text());
        }
        throw Error('Response not 200');
    } catch (err) {
        console.warn(err);
        return '';
    }
}
