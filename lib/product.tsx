export interface Product {
    _id: unknown;
    productId: string;
    name: string;
    category: [string];
    size: string;
    qty: number;
    colours: [{ name: string; id: string }];
    price: number;
}
