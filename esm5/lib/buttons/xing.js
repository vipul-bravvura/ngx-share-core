/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { ShareButtonBase } from './base';
var XingButton = /** @class */ (function (_super) {
    tslib_1.__extends(XingButton, _super);
    function XingButton(_props, _url, _http, _platform, _document, _windowSize, _disableButtonClick) {
        var _this = _super.call(this, _props, _url, _http, _platform, _document, _windowSize, _disableButtonClick) || this;
        _this._props = _props;
        _this._url = _url;
        _this._http = _http;
        _this._platform = _platform;
        _this._document = _document;
        _this._windowSize = _windowSize;
        _this._disableButtonClick = _disableButtonClick;
        _this._supportedMetaTags = {
            url: 'url'
        };
        return _this;
    }
    Object.defineProperty(XingButton.prototype, "desktop", {
        get: /**
         * @return {?}
         */
        function () {
            return "https://www.xing.com/app/user?op=share&";
        },
        enumerable: true,
        configurable: true
    });
    return XingButton;
}(ShareButtonBase));
export { XingButton };
if (false) {
    /**
     * @type {?}
     * @protected
     */
    XingButton.prototype._supportedMetaTags;
    /**
     * @type {?}
     * @protected
     */
    XingButton.prototype._props;
    /**
     * @type {?}
     * @protected
     */
    XingButton.prototype._url;
    /**
     * @type {?}
     * @protected
     */
    XingButton.prototype._http;
    /**
     * @type {?}
     * @protected
     */
    XingButton.prototype._platform;
    /**
     * @type {?}
     * @protected
     */
    XingButton.prototype._document;
    /**
     * @type {?}
     * @protected
     */
    XingButton.prototype._windowSize;
    /**
     * @type {?}
     * @protected
     */
    XingButton.prototype._disableButtonClick;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoieGluZy5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BuZ3gtc2hhcmUvY29yZS8iLCJzb3VyY2VzIjpbImxpYi9idXR0b25zL3hpbmcudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFFQSxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sUUFBUSxDQUFDO0FBR3pDO0lBQWdDLHNDQUFlO0lBVTdDLG9CQUFzQixNQUFvQixFQUNwQixJQUFrQixFQUNsQixLQUFpQixFQUNqQixTQUFtQixFQUNuQixTQUFtQixFQUNuQixXQUFtQixFQUNuQixtQkFBK0M7UUFOckUsWUFPRSxrQkFBTSxNQUFNLEVBQUUsSUFBSSxFQUFFLEtBQUssRUFBRSxTQUFTLEVBQUUsU0FBUyxFQUFFLFdBQVcsRUFBRSxtQkFBbUIsQ0FBQyxTQUNuRjtRQVJxQixZQUFNLEdBQU4sTUFBTSxDQUFjO1FBQ3BCLFVBQUksR0FBSixJQUFJLENBQWM7UUFDbEIsV0FBSyxHQUFMLEtBQUssQ0FBWTtRQUNqQixlQUFTLEdBQVQsU0FBUyxDQUFVO1FBQ25CLGVBQVMsR0FBVCxTQUFTLENBQVU7UUFDbkIsaUJBQVcsR0FBWCxXQUFXLENBQVE7UUFDbkIseUJBQW1CLEdBQW5CLG1CQUFtQixDQUE0QjtRQWQzRCx3QkFBa0IsR0FBa0I7WUFDNUMsR0FBRyxFQUFFLEtBQUs7U0FDWCxDQUFDOztJQWNGLENBQUM7SUFaRCxzQkFBSSwrQkFBTzs7OztRQUFYO1lBQ0UsT0FBTyx5Q0FBeUMsQ0FBQztRQUNuRCxDQUFDOzs7T0FBQTtJQVdILGlCQUFDO0FBQUQsQ0FBQyxBQW5CRCxDQUFnQyxlQUFlLEdBbUI5Qzs7Ozs7OztJQWpCQyx3Q0FFRTs7Ozs7SUFNVSw0QkFBOEI7Ozs7O0lBQzlCLDBCQUE0Qjs7Ozs7SUFDNUIsMkJBQTJCOzs7OztJQUMzQiwrQkFBNkI7Ozs7O0lBQzdCLCtCQUE2Qjs7Ozs7SUFDN0IsaUNBQTZCOzs7OztJQUM3Qix5Q0FBeUQiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBQbGF0Zm9ybSB9IGZyb20gJ0Bhbmd1bGFyL2Nkay9wbGF0Zm9ybSc7XHJcbmltcG9ydCB7IEh0dHBDbGllbnQgfSBmcm9tICdAYW5ndWxhci9jb21tb24vaHR0cCc7XHJcbmltcG9ydCB7IFNoYXJlQnV0dG9uQmFzZSB9IGZyb20gJy4vYmFzZSc7XHJcbmltcG9ydCB7IElTaGFyZUJ1dHRvbiwgU2hhcmVNZXRhVGFncyB9IGZyb20gJy4uL3NoYXJlLm1vZGVscyc7XHJcblxyXG5leHBvcnQgY2xhc3MgWGluZ0J1dHRvbiBleHRlbmRzIFNoYXJlQnV0dG9uQmFzZSB7XHJcblxyXG4gIHByb3RlY3RlZCBfc3VwcG9ydGVkTWV0YVRhZ3M6IFNoYXJlTWV0YVRhZ3MgPSB7XHJcbiAgICB1cmw6ICd1cmwnXHJcbiAgfTtcclxuXHJcbiAgZ2V0IGRlc2t0b3AoKTogc3RyaW5nIHtcclxuICAgIHJldHVybiBgaHR0cHM6Ly93d3cueGluZy5jb20vYXBwL3VzZXI/b3A9c2hhcmUmYDtcclxuICB9XHJcblxyXG4gIGNvbnN0cnVjdG9yKHByb3RlY3RlZCBfcHJvcHM6IElTaGFyZUJ1dHRvbixcclxuICAgICAgICAgICAgICBwcm90ZWN0ZWQgX3VybDogKCkgPT4gc3RyaW5nLFxyXG4gICAgICAgICAgICAgIHByb3RlY3RlZCBfaHR0cDogSHR0cENsaWVudCxcclxuICAgICAgICAgICAgICBwcm90ZWN0ZWQgX3BsYXRmb3JtOiBQbGF0Zm9ybSxcclxuICAgICAgICAgICAgICBwcm90ZWN0ZWQgX2RvY3VtZW50OiBEb2N1bWVudCxcclxuICAgICAgICAgICAgICBwcm90ZWN0ZWQgX3dpbmRvd1NpemU6IHN0cmluZyxcclxuICAgICAgICAgICAgICBwcm90ZWN0ZWQgX2Rpc2FibGVCdXR0b25DbGljazogKGRpc2FibGU6IGJvb2xlYW4pID0+IHZvaWQpIHtcclxuICAgIHN1cGVyKF9wcm9wcywgX3VybCwgX2h0dHAsIF9wbGF0Zm9ybSwgX2RvY3VtZW50LCBfd2luZG93U2l6ZSwgX2Rpc2FibGVCdXR0b25DbGljayk7XHJcbiAgfVxyXG59XHJcbiJdfQ==