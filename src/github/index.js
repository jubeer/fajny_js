/* eslint-disable no-undef */
import getRepos from './service';

export default async function () {
    // eslint-disable-next-line no-undef
    (await getRepos()).forEach(r => console.log(r));
}
