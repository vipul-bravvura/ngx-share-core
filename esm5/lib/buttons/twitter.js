/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { ShareButtonBase } from './base';
var TwitterButton = /** @class */ (function (_super) {
    tslib_1.__extends(TwitterButton, _super);
    function TwitterButton(_props, _url, _http, _platform, _document, _windowSize, _disableButtonClick) {
        var _this = _super.call(this, _props, _url, _http, _platform, _document, _windowSize, _disableButtonClick) || this;
        _this._props = _props;
        _this._url = _url;
        _this._http = _http;
        _this._platform = _platform;
        _this._document = _document;
        _this._windowSize = _windowSize;
        _this._disableButtonClick = _disableButtonClick;
        _this._supportedMetaTags = {
            url: 'url',
            description: 'text',
            tags: 'hashtags',
            via: 'via'
        };
        return _this;
    }
    Object.defineProperty(TwitterButton.prototype, "desktop", {
        get: /**
         * @return {?}
         */
        function () {
            return "https://twitter.com/intent/tweet?";
        },
        enumerable: true,
        configurable: true
    });
    return TwitterButton;
}(ShareButtonBase));
export { TwitterButton };
if (false) {
    /**
     * @type {?}
     * @protected
     */
    TwitterButton.prototype._supportedMetaTags;
    /**
     * @type {?}
     * @protected
     */
    TwitterButton.prototype._props;
    /**
     * @type {?}
     * @protected
     */
    TwitterButton.prototype._url;
    /**
     * @type {?}
     * @protected
     */
    TwitterButton.prototype._http;
    /**
     * @type {?}
     * @protected
     */
    TwitterButton.prototype._platform;
    /**
     * @type {?}
     * @protected
     */
    TwitterButton.prototype._document;
    /**
     * @type {?}
     * @protected
     */
    TwitterButton.prototype._windowSize;
    /**
     * @type {?}
     * @protected
     */
    TwitterButton.prototype._disableButtonClick;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidHdpdHRlci5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BuZ3gtc2hhcmUvY29yZS8iLCJzb3VyY2VzIjpbImxpYi9idXR0b25zL3R3aXR0ZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFFQSxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sUUFBUSxDQUFDO0FBR3pDO0lBQW1DLHlDQUFlO0lBYWhELHVCQUFzQixNQUFvQixFQUNwQixJQUFrQixFQUNsQixLQUFpQixFQUNqQixTQUFtQixFQUNuQixTQUFtQixFQUNuQixXQUFtQixFQUNuQixtQkFBK0M7UUFOckUsWUFPRSxrQkFBTSxNQUFNLEVBQUUsSUFBSSxFQUFFLEtBQUssRUFBRSxTQUFTLEVBQUUsU0FBUyxFQUFFLFdBQVcsRUFBRSxtQkFBbUIsQ0FBQyxTQUNuRjtRQVJxQixZQUFNLEdBQU4sTUFBTSxDQUFjO1FBQ3BCLFVBQUksR0FBSixJQUFJLENBQWM7UUFDbEIsV0FBSyxHQUFMLEtBQUssQ0FBWTtRQUNqQixlQUFTLEdBQVQsU0FBUyxDQUFVO1FBQ25CLGVBQVMsR0FBVCxTQUFTLENBQVU7UUFDbkIsaUJBQVcsR0FBWCxXQUFXLENBQVE7UUFDbkIseUJBQW1CLEdBQW5CLG1CQUFtQixDQUE0QjtRQWpCM0Qsd0JBQWtCLEdBQWtCO1lBQzVDLEdBQUcsRUFBRSxLQUFLO1lBQ1YsV0FBVyxFQUFFLE1BQU07WUFDbkIsSUFBSSxFQUFFLFVBQVU7WUFDaEIsR0FBRyxFQUFFLEtBQUs7U0FDWCxDQUFDOztJQWNGLENBQUM7SUFaRCxzQkFBSSxrQ0FBTzs7OztRQUFYO1lBQ0UsT0FBTyxtQ0FBbUMsQ0FBQztRQUM3QyxDQUFDOzs7T0FBQTtJQVdILG9CQUFDO0FBQUQsQ0FBQyxBQXRCRCxDQUFtQyxlQUFlLEdBc0JqRDs7Ozs7OztJQXBCQywyQ0FLRTs7Ozs7SUFNVSwrQkFBOEI7Ozs7O0lBQzlCLDZCQUE0Qjs7Ozs7SUFDNUIsOEJBQTJCOzs7OztJQUMzQixrQ0FBNkI7Ozs7O0lBQzdCLGtDQUE2Qjs7Ozs7SUFDN0Isb0NBQTZCOzs7OztJQUM3Qiw0Q0FBeUQiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBQbGF0Zm9ybSB9IGZyb20gJ0Bhbmd1bGFyL2Nkay9wbGF0Zm9ybSc7XHJcbmltcG9ydCB7IEh0dHBDbGllbnQgfSBmcm9tICdAYW5ndWxhci9jb21tb24vaHR0cCc7XHJcbmltcG9ydCB7IFNoYXJlQnV0dG9uQmFzZSB9IGZyb20gJy4vYmFzZSc7XHJcbmltcG9ydCB7IElTaGFyZUJ1dHRvbiwgU2hhcmVNZXRhVGFncyB9IGZyb20gJy4uL3NoYXJlLm1vZGVscyc7XHJcblxyXG5leHBvcnQgY2xhc3MgVHdpdHRlckJ1dHRvbiBleHRlbmRzIFNoYXJlQnV0dG9uQmFzZSB7XHJcblxyXG4gIHByb3RlY3RlZCBfc3VwcG9ydGVkTWV0YVRhZ3M6IFNoYXJlTWV0YVRhZ3MgPSB7XHJcbiAgICB1cmw6ICd1cmwnLFxyXG4gICAgZGVzY3JpcHRpb246ICd0ZXh0JyxcclxuICAgIHRhZ3M6ICdoYXNodGFncycsXHJcbiAgICB2aWE6ICd2aWEnXHJcbiAgfTtcclxuXHJcbiAgZ2V0IGRlc2t0b3AoKTogc3RyaW5nIHtcclxuICAgIHJldHVybiBgaHR0cHM6Ly90d2l0dGVyLmNvbS9pbnRlbnQvdHdlZXQ/YDtcclxuICB9XHJcblxyXG4gIGNvbnN0cnVjdG9yKHByb3RlY3RlZCBfcHJvcHM6IElTaGFyZUJ1dHRvbixcclxuICAgICAgICAgICAgICBwcm90ZWN0ZWQgX3VybDogKCkgPT4gc3RyaW5nLFxyXG4gICAgICAgICAgICAgIHByb3RlY3RlZCBfaHR0cDogSHR0cENsaWVudCxcclxuICAgICAgICAgICAgICBwcm90ZWN0ZWQgX3BsYXRmb3JtOiBQbGF0Zm9ybSxcclxuICAgICAgICAgICAgICBwcm90ZWN0ZWQgX2RvY3VtZW50OiBEb2N1bWVudCxcclxuICAgICAgICAgICAgICBwcm90ZWN0ZWQgX3dpbmRvd1NpemU6IHN0cmluZyxcclxuICAgICAgICAgICAgICBwcm90ZWN0ZWQgX2Rpc2FibGVCdXR0b25DbGljazogKGRpc2FibGU6IGJvb2xlYW4pID0+IHZvaWQpIHtcclxuICAgIHN1cGVyKF9wcm9wcywgX3VybCwgX2h0dHAsIF9wbGF0Zm9ybSwgX2RvY3VtZW50LCBfd2luZG93U2l6ZSwgX2Rpc2FibGVCdXR0b25DbGljayk7XHJcbiAgfVxyXG59XHJcbiJdfQ==