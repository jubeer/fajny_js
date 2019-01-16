/* eslint-disable import/prefer-default-export */
export class SKUList {
    constructor({ sku, quantity }) {
        this.sku = sku;
        this.quantity = quantity;
    }

    toString() {
        return ` ${this.quantity}x${this.sku}`;
    }
}
