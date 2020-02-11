"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

/* eslint-disable camelcase */
const requestFeedback = data => {
  const {
    first_name,
    link
  } = data;
  const theEmail = `
        <html><head>${first_name}</head><body> ${link} connectFeedBack HTML</body></html>
        `;
  return theEmail;
};

var _default = requestFeedback;
exports.default = _default;
//# sourceMappingURL=requestFeedback.js.map