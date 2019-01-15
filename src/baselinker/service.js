/* eslint-disable no-undef */
import { BASE_API_URL, TOKEN, ORDER_ID } from './constants';

const METHOD_NAME = 'getOrders';
const data = `{
    "get_unconfirmed_orders": true,
    "order_id": ${ORDER_ID}
}`;

const form = new FormData();
form.append('token', TOKEN);
form.append('method', METHOD_NAME);
form.append('parameters', data);

// Example POST method implementation:

fetch(BASE_API_URL, {
    method: 'POST',
    body: form
})
    .then(res => res.json())
    .then(response => console.log(JSON.stringify(response)))
    .catch(error => console.error(error));
