"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const db_1 = require("../config/db");
function all() {
    return db_1.rows('GetAllProducts');
}
exports.all = all;
function read(id) {
    return db_1.row('GetSingleProduct', [id]);
}
exports.read = read;
function categoryread(categoryid) {
    return db_1.rows('GetProductByCatID', [categoryid]);
}
exports.categoryread = categoryread;
