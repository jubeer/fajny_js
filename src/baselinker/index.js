/* eslint-disable no-undef */
import baseTest from './service';
import getSKUs from './service';

export default async function () {
    // eslint-disable-next-line no-undef
    //alert(await baseTest());
    console.log(await getSKUs());
}
