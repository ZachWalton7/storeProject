import { row, rows, empty } from '../config/db';

export function all(): Promise<Array<models.IProducts>> {
    return rows('GetAllProducts');
}

export function read(id: number): Promise<models.IProducts> {
    return row('GetSingleProduct', [id]);
}

export function categoryread(categoryid: number): Promise<Array<models.IProducts>> {
    return rows('GetProductByCatID', [categoryid]);
}


