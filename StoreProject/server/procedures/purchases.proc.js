"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const db_1 = require("../config/db");
function all() {
    return db_1.rows('GetAllPurchases');
}
exports.all = all;
function read(id) {
    return db_1.row('GetSinglePurchase', [id]);
}
exports.read = read;
function create(price, stripetransactionid) {
    return db_1.row('InsertPurchase', [price, stripetransactionid]);
}
exports.create = create;
function update(id, price, stripetransactionid) {
    return db_1.empty('UpdatePurchase', [id, price, stripetransactionid]);
}
exports.update = update;
function destroy(id) {
    return db_1.empty('DeletePurchase', [id]);
}
exports.destroy = destroy;
