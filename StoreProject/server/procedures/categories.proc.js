"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const db_1 = require("../config/db");
function all() {
    return db_1.rows('GetAllCategories');
}
exports.all = all;
function read(id) {
    return db_1.row('GetSingleCategory', [id]);
}
exports.read = read;
