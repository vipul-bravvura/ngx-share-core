/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { map } from 'rxjs/operators';
import { ShareButtonBase } from './base';
var PinterestButton = /** @class */ (function (_super) {
    tslib_1.__extends(PinterestButton, _super);
    function PinterestButton(_props, _url, _http, _platform, _document, _windowSize, _disableButtonClick) {
        var _this = _super.call(this, _props, _url, _http, _platform, _document, _windowSize, _disableButtonClick) || this;
        _this._props = _props;
        _this._url = _url;
        _this._http = _http;
        _this._platform = _platform;
        _this._document = _document;
        _this._windowSize = _windowSize;
        _this._disableButtonClick = _disableButtonClick;
        _this.supportShareCount = true;
        _this._supportedMetaTags = {
            url: 'url',
            description: 'description',
            image: 'media'
        };
        return _this;
    }
    Object.defineProperty(PinterestButton.prototype, "desktop", {
        get: /**
         * @return {?}
         */
        function () {
            return "https://in.pinterest.com/pin/create/button/?";
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @param {?} url
     * @return {?}
     */
    PinterestButton.prototype.shareCount = /**
     * @param {?} url
     * @return {?}
     */
    function (url) {
        return this._http.get("https://api.pinterest.com/v1/urls/count.json?url=" + url, { responseType: 'text' }).pipe(map(function (text) { return JSON.parse(text.replace(/^receiveCount\((.*)\)/, '$1')); }), map(function (res) { return +res.count; }));
    };
    return PinterestButton;
}(ShareButtonBase));
export { PinterestButton };
if (false) {
    /** @type {?} */
    PinterestButton.prototype.supportShareCount;
    /**
     * @type {?}
     * @protected
     */
    PinterestButton.prototype._supportedMetaTags;
    /**
     * @type {?}
     * @protected
     */
    PinterestButton.prototype._props;
    /**
     * @type {?}
     * @protected
     */
    PinterestButton.prototype._url;
    /**
     * @type {?}
     * @protected
     */
    PinterestButton.prototype._http;
    /**
     * @type {?}
     * @protected
     */
    PinterestButton.prototype._platform;
    /**
     * @type {?}
     * @protected
     */
    PinterestButton.prototype._document;
    /**
     * @type {?}
     * @protected
     */
    PinterestButton.prototype._windowSize;
    /**
     * @type {?}
     * @protected
     */
    PinterestButton.prototype._disableButtonClick;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGludGVyZXN0LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQG5neC1zaGFyZS9jb3JlLyIsInNvdXJjZXMiOlsibGliL2J1dHRvbnMvcGludGVyZXN0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBR0EsT0FBTyxFQUFFLEdBQUcsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQ3JDLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSxRQUFRLENBQUM7QUFHekM7SUFBcUMsMkNBQWU7SUFjbEQseUJBQXNCLE1BQW9CLEVBQ3BCLElBQWtCLEVBQ2xCLEtBQWlCLEVBQ2pCLFNBQW1CLEVBQ25CLFNBQW1CLEVBQ25CLFdBQW1CLEVBQ25CLG1CQUErQztRQU5yRSxZQU9FLGtCQUFNLE1BQU0sRUFBRSxJQUFJLEVBQUUsS0FBSyxFQUFFLFNBQVMsRUFBRSxTQUFTLEVBQUUsV0FBVyxFQUFFLG1CQUFtQixDQUFDLFNBQ25GO1FBUnFCLFlBQU0sR0FBTixNQUFNLENBQWM7UUFDcEIsVUFBSSxHQUFKLElBQUksQ0FBYztRQUNsQixXQUFLLEdBQUwsS0FBSyxDQUFZO1FBQ2pCLGVBQVMsR0FBVCxTQUFTLENBQVU7UUFDbkIsZUFBUyxHQUFULFNBQVMsQ0FBVTtRQUNuQixpQkFBVyxHQUFYLFdBQVcsQ0FBUTtRQUNuQix5QkFBbUIsR0FBbkIsbUJBQW1CLENBQTRCO1FBbEJyRSx1QkFBaUIsR0FBRyxJQUFJLENBQUM7UUFFZix3QkFBa0IsR0FBa0I7WUFDNUMsR0FBRyxFQUFFLEtBQUs7WUFDVixXQUFXLEVBQUUsYUFBYTtZQUMxQixLQUFLLEVBQUUsT0FBTztTQUNmLENBQUM7O0lBY0YsQ0FBQztJQVpELHNCQUFJLG9DQUFPOzs7O1FBQVg7WUFDRSxPQUFPLDhDQUE4QyxDQUFDO1FBQ3hELENBQUM7OztPQUFBOzs7OztJQVlELG9DQUFVOzs7O0lBQVYsVUFBVyxHQUFXO1FBQ3BCLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQ25CLHNEQUFvRCxHQUFLLEVBQ3pELEVBQUMsWUFBWSxFQUFFLE1BQU0sRUFBQyxDQUN2QixDQUFDLElBQUksQ0FDSixHQUFHLENBQUMsVUFBQyxJQUFZLElBQUssT0FBQSxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsdUJBQXVCLEVBQUUsSUFBSSxDQUFDLENBQUMsRUFBdkQsQ0FBdUQsQ0FBQyxFQUM5RSxHQUFHLENBQUMsVUFBQyxHQUFRLElBQUssT0FBQSxDQUFDLEdBQUcsQ0FBQyxLQUFLLEVBQVYsQ0FBVSxDQUFDLENBQzlCLENBQUM7SUFDSixDQUFDO0lBQ0gsc0JBQUM7QUFBRCxDQUFDLEFBakNELENBQXFDLGVBQWUsR0FpQ25EOzs7O0lBL0JDLDRDQUF5Qjs7Ozs7SUFFekIsNkNBSUU7Ozs7O0lBTVUsaUNBQThCOzs7OztJQUM5QiwrQkFBNEI7Ozs7O0lBQzVCLGdDQUEyQjs7Ozs7SUFDM0Isb0NBQTZCOzs7OztJQUM3QixvQ0FBNkI7Ozs7O0lBQzdCLHNDQUE2Qjs7Ozs7SUFDN0IsOENBQXlEIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgUGxhdGZvcm0gfSBmcm9tICdAYW5ndWxhci9jZGsvcGxhdGZvcm0nO1xyXG5pbXBvcnQgeyBIdHRwQ2xpZW50IH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uL2h0dHAnO1xyXG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XHJcbmltcG9ydCB7IG1hcCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcclxuaW1wb3J0IHsgU2hhcmVCdXR0b25CYXNlIH0gZnJvbSAnLi9iYXNlJztcclxuaW1wb3J0IHsgSVNoYXJlQnV0dG9uLCBTaGFyZU1ldGFUYWdzIH0gZnJvbSAnLi4vc2hhcmUubW9kZWxzJztcclxuXHJcbmV4cG9ydCBjbGFzcyBQaW50ZXJlc3RCdXR0b24gZXh0ZW5kcyBTaGFyZUJ1dHRvbkJhc2Uge1xyXG5cclxuICBzdXBwb3J0U2hhcmVDb3VudCA9IHRydWU7XHJcblxyXG4gIHByb3RlY3RlZCBfc3VwcG9ydGVkTWV0YVRhZ3M6IFNoYXJlTWV0YVRhZ3MgPSB7XHJcbiAgICB1cmw6ICd1cmwnLFxyXG4gICAgZGVzY3JpcHRpb246ICdkZXNjcmlwdGlvbicsXHJcbiAgICBpbWFnZTogJ21lZGlhJ1xyXG4gIH07XHJcblxyXG4gIGdldCBkZXNrdG9wKCk6IHN0cmluZyB7XHJcbiAgICByZXR1cm4gYGh0dHBzOi8vaW4ucGludGVyZXN0LmNvbS9waW4vY3JlYXRlL2J1dHRvbi8/YDtcclxuICB9XHJcblxyXG4gIGNvbnN0cnVjdG9yKHByb3RlY3RlZCBfcHJvcHM6IElTaGFyZUJ1dHRvbixcclxuICAgICAgICAgICAgICBwcm90ZWN0ZWQgX3VybDogKCkgPT4gc3RyaW5nLFxyXG4gICAgICAgICAgICAgIHByb3RlY3RlZCBfaHR0cDogSHR0cENsaWVudCxcclxuICAgICAgICAgICAgICBwcm90ZWN0ZWQgX3BsYXRmb3JtOiBQbGF0Zm9ybSxcclxuICAgICAgICAgICAgICBwcm90ZWN0ZWQgX2RvY3VtZW50OiBEb2N1bWVudCxcclxuICAgICAgICAgICAgICBwcm90ZWN0ZWQgX3dpbmRvd1NpemU6IHN0cmluZyxcclxuICAgICAgICAgICAgICBwcm90ZWN0ZWQgX2Rpc2FibGVCdXR0b25DbGljazogKGRpc2FibGU6IGJvb2xlYW4pID0+IHZvaWQpIHtcclxuICAgIHN1cGVyKF9wcm9wcywgX3VybCwgX2h0dHAsIF9wbGF0Zm9ybSwgX2RvY3VtZW50LCBfd2luZG93U2l6ZSwgX2Rpc2FibGVCdXR0b25DbGljayk7XHJcbiAgfVxyXG5cclxuICBzaGFyZUNvdW50KHVybDogc3RyaW5nKTogT2JzZXJ2YWJsZTxudW1iZXI+IHtcclxuICAgIHJldHVybiB0aGlzLl9odHRwLmdldChcclxuICAgICAgYGh0dHBzOi8vYXBpLnBpbnRlcmVzdC5jb20vdjEvdXJscy9jb3VudC5qc29uP3VybD0ke3VybH1gLFxyXG4gICAgICB7cmVzcG9uc2VUeXBlOiAndGV4dCd9XHJcbiAgICApLnBpcGUoXHJcbiAgICAgIG1hcCgodGV4dDogc3RyaW5nKSA9PiBKU09OLnBhcnNlKHRleHQucmVwbGFjZSgvXnJlY2VpdmVDb3VudFxcKCguKilcXCkvLCAnJDEnKSkpLFxyXG4gICAgICBtYXAoKHJlczogYW55KSA9PiArcmVzLmNvdW50KVxyXG4gICAgKTtcclxuICB9XHJcbn1cclxuIl19