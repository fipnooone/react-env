/**
 *
 * @param name REACT_APP_{ENV_NAME}
 * @returns string or '' if not found
 */
export var env = function (name) {
    var _a, _b;
    return (_b = (_a = process.env) === null || _a === void 0 ? void 0 : _a["REACT_APP_".concat(name)]) !== null && _b !== void 0 ? _b : '';
};
//# sourceMappingURL=Env.js.map