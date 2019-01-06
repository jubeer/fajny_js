/* eslint-disable no-alert */
/* eslint-disable no-undef */
import { TOO_LESS, TOO_MUCH } from './constants';

export default (num, expected) => {
    if (num > expected) {
        alert(TOO_MUCH);
    } else {
        alert(TOO_LESS);
    }
};
