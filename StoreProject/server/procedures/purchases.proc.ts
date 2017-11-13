import { row, rows, empty } from '../config/db';

export function all(): Promise<Array<models.IPurchases>> {
    return rows('GetAllPurchases');

}

export function read(id: number): Promise<models.IPurchases> {
    return row('GetSinglePurchase', [id]);
}

export function create(price: number, stripetransactionid: string): Promise<models.IPurchases> {
    return row('InsertPurchase', [price, stripetransactionid]);

}

export function update(id: number, price: number, stripetransactionid: string) {
    return empty('UpdatePurchase', [id, price, stripetransactionid]);

}

export function destroy(id: number) {
    return empty('DeletePurchase', [id]);
}