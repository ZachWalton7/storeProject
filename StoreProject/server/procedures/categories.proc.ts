import { row, rows } from '../config/db';

export function all(): Promise<Array<models.ICategory>> {
    return rows('GetAllCategories');
}

export function read(id: number): Promise<models.ICategory> {
    return row('GetSingleCategory', [id]);
}

