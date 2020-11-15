"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.appInitializer = void 0;
function appInitializer(authenticationService) {
    return function () { return new Promise(function (resolve) {
        // 
        authenticationService.refreshToken()
            .subscribe()
            .add(resolve);
    }); };
}
exports.appInitializer = appInitializer;
//# sourceMappingURL=app.initializer.js.map