/* eslint-disable no-undef */
import { BASE_API_URL, TOKEN, ORDER_ID } from './constants';
import getSKUList from './service';


export default async function doIt() {
    const result = await getSKUList();

    const data = `{
        "order_id": ${ORDER_ID},
        "extra_field_2": "${result}"
    }`;

    console.log(data);

    const form = new FormData();
    form.append('token', TOKEN);
    form.append('method', 'setOrderFields');
    form.append('parameters', data);

    try {
        const response = await fetch(BASE_API_URL, {
            method: 'POST',
            body: form
        });
        return (await response.json());
    } catch (err) {
        console.warn(err);
        return '';
    }
}
