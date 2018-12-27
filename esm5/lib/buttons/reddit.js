/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { ShareButtonBase } from './base';
var RedditButton = /** @class */ (function (_super) {
    tslib_1.__extends(RedditButton, _super);
    function RedditButton(_props, _url, _http, _platform, _document, _windowSize, _disableButtonClick) {
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
            title: 'title'
        };
        return _this;
    }
    Object.defineProperty(RedditButton.prototype, "desktop", {
        get: /**
         * @return {?}
         */
        function () {
            return "http://www.reddit.com/submit?";
        },
        enumerable: true,
        configurable: true
    });
    return RedditButton;
}(ShareButtonBase));
export { RedditButton };
if (false) {
    /**
     * @type {?}
     * @protected
     */
    RedditButton.prototype._supportedMetaTags;
    /**
     * @type {?}
     * @protected
     */
    RedditButton.prototype._props;
    /**
     * @type {?}
     * @protected
     */
    RedditButton.prototype._url;
    /**
     * @type {?}
     * @protected
     */
    RedditButton.prototype._http;
    /**
     * @type {?}
     * @protected
     */
    RedditButton.prototype._platform;
    /**
     * @type {?}
     * @protected
     */
    RedditButton.prototype._document;
    /**
     * @type {?}
     * @protected
     */
    RedditButton.prototype._windowSize;
    /**
     * @type {?}
     * @protected
     */
    RedditButton.prototype._disableButtonClick;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVkZGl0LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQG5neC1zaGFyZS9jb3JlLyIsInNvdXJjZXMiOlsibGliL2J1dHRvbnMvcmVkZGl0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBRUEsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLFFBQVEsQ0FBQztBQUd6QztJQUFrQyx3Q0FBZTtJQVcvQyxzQkFBc0IsTUFBb0IsRUFDcEIsSUFBa0IsRUFDbEIsS0FBaUIsRUFDakIsU0FBbUIsRUFDbkIsU0FBbUIsRUFDbkIsV0FBbUIsRUFDbkIsbUJBQStDO1FBTnJFLFlBT0Usa0JBQU0sTUFBTSxFQUFFLElBQUksRUFBRSxLQUFLLEVBQUUsU0FBUyxFQUFFLFNBQVMsRUFBRSxXQUFXLEVBQUUsbUJBQW1CLENBQUMsU0FDbkY7UUFScUIsWUFBTSxHQUFOLE1BQU0sQ0FBYztRQUNwQixVQUFJLEdBQUosSUFBSSxDQUFjO1FBQ2xCLFdBQUssR0FBTCxLQUFLLENBQVk7UUFDakIsZUFBUyxHQUFULFNBQVMsQ0FBVTtRQUNuQixlQUFTLEdBQVQsU0FBUyxDQUFVO1FBQ25CLGlCQUFXLEdBQVgsV0FBVyxDQUFRO1FBQ25CLHlCQUFtQixHQUFuQixtQkFBbUIsQ0FBNEI7UUFmM0Qsd0JBQWtCLEdBQWtCO1lBQzVDLEdBQUcsRUFBRSxLQUFLO1lBQ1YsS0FBSyxFQUFFLE9BQU87U0FDZixDQUFDOztJQWNGLENBQUM7SUFaRCxzQkFBSSxpQ0FBTzs7OztRQUFYO1lBQ0UsT0FBTywrQkFBK0IsQ0FBQztRQUN6QyxDQUFDOzs7T0FBQTtJQVdILG1CQUFDO0FBQUQsQ0FBQyxBQXBCRCxDQUFrQyxlQUFlLEdBb0JoRDs7Ozs7OztJQWxCQywwQ0FHRTs7Ozs7SUFNVSw4QkFBOEI7Ozs7O0lBQzlCLDRCQUE0Qjs7Ozs7SUFDNUIsNkJBQTJCOzs7OztJQUMzQixpQ0FBNkI7Ozs7O0lBQzdCLGlDQUE2Qjs7Ozs7SUFDN0IsbUNBQTZCOzs7OztJQUM3QiwyQ0FBeUQiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBQbGF0Zm9ybSB9IGZyb20gJ0Bhbmd1bGFyL2Nkay9wbGF0Zm9ybSc7XHJcbmltcG9ydCB7IEh0dHBDbGllbnQgfSBmcm9tICdAYW5ndWxhci9jb21tb24vaHR0cCc7XHJcbmltcG9ydCB7IFNoYXJlQnV0dG9uQmFzZSB9IGZyb20gJy4vYmFzZSc7XHJcbmltcG9ydCB7IElTaGFyZUJ1dHRvbiwgU2hhcmVNZXRhVGFncyB9IGZyb20gJy4uL3NoYXJlLm1vZGVscyc7XHJcblxyXG5leHBvcnQgY2xhc3MgUmVkZGl0QnV0dG9uIGV4dGVuZHMgU2hhcmVCdXR0b25CYXNlIHtcclxuXHJcbiAgcHJvdGVjdGVkIF9zdXBwb3J0ZWRNZXRhVGFnczogU2hhcmVNZXRhVGFncyA9IHtcclxuICAgIHVybDogJ3VybCcsXHJcbiAgICB0aXRsZTogJ3RpdGxlJ1xyXG4gIH07XHJcblxyXG4gIGdldCBkZXNrdG9wKCk6IHN0cmluZyB7XHJcbiAgICByZXR1cm4gYGh0dHA6Ly93d3cucmVkZGl0LmNvbS9zdWJtaXQ/YDtcclxuICB9XHJcblxyXG4gIGNvbnN0cnVjdG9yKHByb3RlY3RlZCBfcHJvcHM6IElTaGFyZUJ1dHRvbixcclxuICAgICAgICAgICAgICBwcm90ZWN0ZWQgX3VybDogKCkgPT4gc3RyaW5nLFxyXG4gICAgICAgICAgICAgIHByb3RlY3RlZCBfaHR0cDogSHR0cENsaWVudCxcclxuICAgICAgICAgICAgICBwcm90ZWN0ZWQgX3BsYXRmb3JtOiBQbGF0Zm9ybSxcclxuICAgICAgICAgICAgICBwcm90ZWN0ZWQgX2RvY3VtZW50OiBEb2N1bWVudCxcclxuICAgICAgICAgICAgICBwcm90ZWN0ZWQgX3dpbmRvd1NpemU6IHN0cmluZyxcclxuICAgICAgICAgICAgICBwcm90ZWN0ZWQgX2Rpc2FibGVCdXR0b25DbGljazogKGRpc2FibGU6IGJvb2xlYW4pID0+IHZvaWQpIHtcclxuICAgIHN1cGVyKF9wcm9wcywgX3VybCwgX2h0dHAsIF9wbGF0Zm9ybSwgX2RvY3VtZW50LCBfd2luZG93U2l6ZSwgX2Rpc2FibGVCdXR0b25DbGljayk7XHJcbiAgfVxyXG59XHJcbiJdfQ==