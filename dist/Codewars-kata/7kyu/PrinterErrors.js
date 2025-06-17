"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.printerError = printerError;
function printerError(s) {
    return `${s.split("").filter(c => c > "m").length}/${s.length}`;
}
console.log(printerError("aaaaaaaaaaaaaaaabbbbbbbbbbbbbbbbbbmmmmmmmmmmmmmmmmmmmxyz"));
console.log(printerError("kkkwwwaaaaaaaaaaaaaabbbbbbbbbbbbbbbbbbmmmmmmmmmmmmmmmmmmmxyz"));
