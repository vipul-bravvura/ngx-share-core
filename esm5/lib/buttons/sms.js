/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { ShareButtonBase } from './base';
var SmsButton = /** @class */ (function (_super) {
    tslib_1.__extends(SmsButton, _super);
    function SmsButton(_props, _url, _http, _platform, _document, _windowSize, _disableButtonClick) {
        var _this = _super.call(this, _props, _url, _http, _platform, _document, _windowSize, _disableButtonClick) || this;
        _this._props = _props;
        _this._url = _url;
        _this._http = _http;
        _this._platform = _platform;
        _this._document = _document;
        _this._windowSize = _windowSize;
        _this._disableButtonClick = _disableButtonClick;
        _this._supportedMetaTags = {
            description: 'body'
        };
        return _this;
    }
    Object.defineProperty(SmsButton.prototype, "desktop", {
        get: /**
         * @return {?}
         */
        function () {
            return "sms:?";
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SmsButton.prototype, "android", {
        get: /**
         * @return {?}
         */
        function () {
            return "sms:?";
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SmsButton.prototype, "ios", {
        get: /**
         * @return {?}
         */
        function () {
            return 'sms:&';
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @param {?} metaTags
     * @return {?}
     */
    SmsButton.prototype.click = /**
     * @param {?} metaTags
     * @return {?}
     */
    function (metaTags) {
        metaTags.description += "\r\n" + this._url();
        /** @type {?} */
        var serializedMetaTags = this._serializeMetaTags(metaTags);
        return this._open(serializedMetaTags);
    };
    return SmsButton;
}(ShareButtonBase));
export { SmsButton };
if (false) {
    /**
     * @type {?}
     * @protected
     */
    SmsButton.prototype._supportedMetaTags;
    /**
     * @type {?}
     * @protected
     */
    SmsButton.prototype._props;
    /**
     * @type {?}
     * @protected
     */
    SmsButton.prototype._url;
    /**
     * @type {?}
     * @protected
     */
    SmsButton.prototype._http;
    /**
     * @type {?}
     * @protected
     */
    SmsButton.prototype._platform;
    /**
     * @type {?}
     * @protected
     */
    SmsButton.prototype._document;
    /**
     * @type {?}
     * @protected
     */
    SmsButton.prototype._windowSize;
    /**
     * @type {?}
     * @protected
     */
    SmsButton.prototype._disableButtonClick;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic21zLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQG5neC1zaGFyZS9jb3JlLyIsInNvdXJjZXMiOlsibGliL2J1dHRvbnMvc21zLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBRUEsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLFFBQVEsQ0FBQztBQUd6QztJQUErQixxQ0FBZTtJQWtCNUMsbUJBQXNCLE1BQW9CLEVBQ3BCLElBQWtCLEVBQ2xCLEtBQWlCLEVBQ2pCLFNBQW1CLEVBQ25CLFNBQW1CLEVBQ25CLFdBQW1CLEVBQ25CLG1CQUErQztRQU5yRSxZQU9FLGtCQUFNLE1BQU0sRUFBRSxJQUFJLEVBQUUsS0FBSyxFQUFFLFNBQVMsRUFBRSxTQUFTLEVBQUUsV0FBVyxFQUFFLG1CQUFtQixDQUFDLFNBQ25GO1FBUnFCLFlBQU0sR0FBTixNQUFNLENBQWM7UUFDcEIsVUFBSSxHQUFKLElBQUksQ0FBYztRQUNsQixXQUFLLEdBQUwsS0FBSyxDQUFZO1FBQ2pCLGVBQVMsR0FBVCxTQUFTLENBQVU7UUFDbkIsZUFBUyxHQUFULFNBQVMsQ0FBVTtRQUNuQixpQkFBVyxHQUFYLFdBQVcsQ0FBUTtRQUNuQix5QkFBbUIsR0FBbkIsbUJBQW1CLENBQTRCO1FBdEIzRCx3QkFBa0IsR0FBa0I7WUFDNUMsV0FBVyxFQUFFLE1BQU07U0FDcEIsQ0FBQzs7SUFzQkYsQ0FBQztJQXBCRCxzQkFBSSw4QkFBTzs7OztRQUFYO1lBQ0UsT0FBTyxPQUFPLENBQUM7UUFDakIsQ0FBQzs7O09BQUE7SUFFRCxzQkFBSSw4QkFBTzs7OztRQUFYO1lBQ0UsT0FBTyxPQUFPLENBQUM7UUFDakIsQ0FBQzs7O09BQUE7SUFFRCxzQkFBSSwwQkFBRzs7OztRQUFQO1lBQ0UsT0FBTyxPQUFPLENBQUM7UUFDakIsQ0FBQzs7O09BQUE7Ozs7O0lBWUQseUJBQUs7Ozs7SUFBTCxVQUFNLFFBQXVCO1FBQzNCLFFBQVEsQ0FBQyxXQUFXLElBQUksU0FBTyxJQUFJLENBQUMsSUFBSSxFQUFJLENBQUM7O1lBQ3ZDLGtCQUFrQixHQUFHLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxRQUFRLENBQUM7UUFDNUQsT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDLGtCQUFrQixDQUFDLENBQUM7SUFDeEMsQ0FBQztJQUNILGdCQUFDO0FBQUQsQ0FBQyxBQWpDRCxDQUErQixlQUFlLEdBaUM3Qzs7Ozs7OztJQS9CQyx1Q0FFRTs7Ozs7SUFjVSwyQkFBOEI7Ozs7O0lBQzlCLHlCQUE0Qjs7Ozs7SUFDNUIsMEJBQTJCOzs7OztJQUMzQiw4QkFBNkI7Ozs7O0lBQzdCLDhCQUE2Qjs7Ozs7SUFDN0IsZ0NBQTZCOzs7OztJQUM3Qix3Q0FBeUQiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBQbGF0Zm9ybSB9IGZyb20gJ0Bhbmd1bGFyL2Nkay9wbGF0Zm9ybSc7XHJcbmltcG9ydCB7IEh0dHBDbGllbnQgfSBmcm9tICdAYW5ndWxhci9jb21tb24vaHR0cCc7XHJcbmltcG9ydCB7IFNoYXJlQnV0dG9uQmFzZSB9IGZyb20gJy4vYmFzZSc7XHJcbmltcG9ydCB7IElTaGFyZUJ1dHRvbiwgU2hhcmVNZXRhVGFncyB9IGZyb20gJy4uL3NoYXJlLm1vZGVscyc7XHJcblxyXG5leHBvcnQgY2xhc3MgU21zQnV0dG9uIGV4dGVuZHMgU2hhcmVCdXR0b25CYXNlIHtcclxuXHJcbiAgcHJvdGVjdGVkIF9zdXBwb3J0ZWRNZXRhVGFnczogU2hhcmVNZXRhVGFncyA9IHtcclxuICAgIGRlc2NyaXB0aW9uOiAnYm9keSdcclxuICB9O1xyXG5cclxuICBnZXQgZGVza3RvcCgpOiBzdHJpbmcge1xyXG4gICAgcmV0dXJuIGBzbXM6P2A7XHJcbiAgfVxyXG5cclxuICBnZXQgYW5kcm9pZCgpOiBzdHJpbmcge1xyXG4gICAgcmV0dXJuIGBzbXM6P2A7XHJcbiAgfVxyXG5cclxuICBnZXQgaW9zKCk6IHN0cmluZyB7XHJcbiAgICByZXR1cm4gJ3NtczomJztcclxuICB9XHJcblxyXG4gIGNvbnN0cnVjdG9yKHByb3RlY3RlZCBfcHJvcHM6IElTaGFyZUJ1dHRvbixcclxuICAgICAgICAgICAgICBwcm90ZWN0ZWQgX3VybDogKCkgPT4gc3RyaW5nLFxyXG4gICAgICAgICAgICAgIHByb3RlY3RlZCBfaHR0cDogSHR0cENsaWVudCxcclxuICAgICAgICAgICAgICBwcm90ZWN0ZWQgX3BsYXRmb3JtOiBQbGF0Zm9ybSxcclxuICAgICAgICAgICAgICBwcm90ZWN0ZWQgX2RvY3VtZW50OiBEb2N1bWVudCxcclxuICAgICAgICAgICAgICBwcm90ZWN0ZWQgX3dpbmRvd1NpemU6IHN0cmluZyxcclxuICAgICAgICAgICAgICBwcm90ZWN0ZWQgX2Rpc2FibGVCdXR0b25DbGljazogKGRpc2FibGU6IGJvb2xlYW4pID0+IHZvaWQpIHtcclxuICAgIHN1cGVyKF9wcm9wcywgX3VybCwgX2h0dHAsIF9wbGF0Zm9ybSwgX2RvY3VtZW50LCBfd2luZG93U2l6ZSwgX2Rpc2FibGVCdXR0b25DbGljayk7XHJcbiAgfVxyXG5cclxuICBjbGljayhtZXRhVGFnczogU2hhcmVNZXRhVGFncyk6IFdpbmRvdyB8IG51bGwgfCB2b2lkIHtcclxuICAgIG1ldGFUYWdzLmRlc2NyaXB0aW9uICs9IGBcXHJcXG4ke3RoaXMuX3VybCgpfWA7XHJcbiAgICBjb25zdCBzZXJpYWxpemVkTWV0YVRhZ3MgPSB0aGlzLl9zZXJpYWxpemVNZXRhVGFncyhtZXRhVGFncyk7XHJcbiAgICByZXR1cm4gdGhpcy5fb3BlbihzZXJpYWxpemVkTWV0YVRhZ3MpO1xyXG4gIH1cclxufVxyXG4iXX0=