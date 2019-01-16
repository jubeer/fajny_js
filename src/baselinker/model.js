/* eslint-disable import/prefer-default-export */
export class SKUList {
    constructor({ sku, quantity }) {
        this.sku = sku;
        this.quantity = quantity;
    }

    toString() {
        return `1 x ${this.sku}`;
    }
}
