/* eslint-disable no-undef */
import { Joke } from './model';

const REPOS_URL = 'https://official-joke-api.herokuapp.com/random_joke';
const BACKUP_URL = 'http://api.icndb.com/jokes/random?limitTo=[nerdy]';

export default async function getJoke() {
    try {
        const response = await fetch(REPOS_URL);
        const joke = await response.json();
        if (joke.type === 'programming') {
            return new Joke(joke);
        }
        const { value: { joke: punchline } } = await (await fetch(BACKUP_URL)).json();
        return new Joke({ punchline });
    } catch (err) {
        console.warn(err);
        return new Joke({
            setup: 'To niezly kawal',
            punchline: 'LuL'
        });
    }
}
