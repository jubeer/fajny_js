// import game from './game/index';
import convert from './github/converter';

const ghRepoMock = {
    name: 'brains',
    stargazers_count: 32,
    license: { spdx_id: 'MIT' }
};

const result = {
    name: 'brains',
    stars: 32,
    license: 'MIT'
};

// eslint-disable-next-line no-undef
alert(convert(ghRepoMock));
console.log(result);
