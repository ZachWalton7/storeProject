"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const path_1 = require("path");
function stateRouting(req, res, next) {
    if (isServerAsset(req.url)) {
        next();
    }
    else {
        res.sendFile(path_1.join(__dirname, '../../client/index.html'));
    }
}
exports.default = stateRouting;
function isServerAsset(path) {
    let pieces = path.split('/');
    if (pieces.length === 0) {
        return false;
    }
    let last = pieces[pieces.length - 1];
    if (path.indexOf('/api') !== -1 || path.indexOf('/?') !== -1) {
        return true;
    }
    else if (last.indexOf('.') !== -1) {
        return true;
    }
    else {
        return false;
    }
}
