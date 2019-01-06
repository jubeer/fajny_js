/* eslint-disable import/no-named-as-default */
import TO_FIND from './random';
import getNum from './input';
import success from './success';
import info from './userinfo';
import counter from './count';

export default () => {
    let num = getNum();
    counter.init();
    while (num !== TO_FIND) {
        info(num, TO_FIND);
        num = getNum();
        counter.increment();
    }
    success(counter.result);
};
