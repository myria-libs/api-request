"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.waitTime = waitTime;
function waitTime(ms = 1000) {
    return new Promise((resolve) => setTimeout(resolve, ms));
}
//# sourceMappingURL=wait-time.js.map