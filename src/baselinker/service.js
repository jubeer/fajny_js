/* eslint-disable no-undef */
import { BASE_API_URL, TOKEN, ORDER_ID } from './constants';
import { SKUList } from './model';

const METHOD_NAME = 'getOrders';
const data = `{
    "get_unconfirmed_orders": true,
    "order_id": ${ORDER_ID}
}`;

const form = new FormData();
form.append('token', TOKEN);
form.append('method', METHOD_NAME);
form.append('parameters', data);

const skus = ({
    sku,
    quantity
}) => new SKUList({
    sku,
    quantity
});

export default async function getSKUs() {
    try {
        const response = await fetch(BASE_API_URL, {
            method: 'POST',
            body: form
        });

        const { orders: [{ products: [sku, quantity] }] } = (await response.json());

        return `SKU: ${[sku, quantity]
            .map(skus)}`;
    } catch (err) {
        console.warn(err);
        return new SKUList({
            sku: 'Błąd',
            quantity: 'LuL'
        });
    }
}
