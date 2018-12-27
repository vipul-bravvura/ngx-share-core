/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { map } from 'rxjs/operators';
import { ShareButtonBase } from './base';
var FacebookButton = /** @class */ (function (_super) {
    tslib_1.__extends(FacebookButton, _super);
    function FacebookButton(_props, _url, _http, _platform, _document, _windowSize, _disableButtonClick) {
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
            url: 'u'
        };
        return _this;
    }
    Object.defineProperty(FacebookButton.prototype, "desktop", {
        get: /**
         * @return {?}
         */
        function () {
            return "https://www.facebook.com/sharer/sharer.php?";
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @param {?} url
     * @return {?}
     */
    FacebookButton.prototype.shareCount = /**
     * @param {?} url
     * @return {?}
     */
    function (url) {
        return this._http.get("https://graph.facebook.com?id=" + url).pipe(map(function (res) { return +res.share.share_count; }));
    };
    return FacebookButton;
}(ShareButtonBase));
export { FacebookButton };
if (false) {
    /** @type {?} */
    FacebookButton.prototype.supportShareCount;
    /**
     * @type {?}
     * @protected
     */
    FacebookButton.prototype._supportedMetaTags;
    /**
     * @type {?}
     * @protected
     */
    FacebookButton.prototype._props;
    /**
     * @type {?}
     * @protected
     */
    FacebookButton.prototype._url;
    /**
     * @type {?}
     * @protected
     */
    FacebookButton.prototype._http;
    /**
     * @type {?}
     * @protected
     */
    FacebookButton.prototype._platform;
    /**
     * @type {?}
     * @protected
     */
    FacebookButton.prototype._document;
    /**
     * @type {?}
     * @protected
     */
    FacebookButton.prototype._windowSize;
    /**
     * @type {?}
     * @protected
     */
    FacebookButton.prototype._disableButtonClick;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmFjZWJvb2suanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Abmd4LXNoYXJlL2NvcmUvIiwic291cmNlcyI6WyJsaWIvYnV0dG9ucy9mYWNlYm9vay50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUdBLE9BQU8sRUFBRSxHQUFHLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUNyQyxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sUUFBUSxDQUFDO0FBR3pDO0lBQW9DLDBDQUFlO0lBWWpELHdCQUFzQixNQUFvQixFQUNwQixJQUFrQixFQUNsQixLQUFpQixFQUNqQixTQUFtQixFQUNuQixTQUFtQixFQUNuQixXQUFtQixFQUNuQixtQkFBK0M7UUFOckUsWUFPRSxrQkFBTSxNQUFNLEVBQUUsSUFBSSxFQUFFLEtBQUssRUFBRSxTQUFTLEVBQUUsU0FBUyxFQUFFLFdBQVcsRUFBRSxtQkFBbUIsQ0FBQyxTQUNuRjtRQVJxQixZQUFNLEdBQU4sTUFBTSxDQUFjO1FBQ3BCLFVBQUksR0FBSixJQUFJLENBQWM7UUFDbEIsV0FBSyxHQUFMLEtBQUssQ0FBWTtRQUNqQixlQUFTLEdBQVQsU0FBUyxDQUFVO1FBQ25CLGVBQVMsR0FBVCxTQUFTLENBQVU7UUFDbkIsaUJBQVcsR0FBWCxXQUFXLENBQVE7UUFDbkIseUJBQW1CLEdBQW5CLG1CQUFtQixDQUE0QjtRQWhCckUsdUJBQWlCLEdBQUcsSUFBSSxDQUFDO1FBRWYsd0JBQWtCLEdBQWtCO1lBQzVDLEdBQUcsRUFBRSxHQUFHO1NBQ1QsQ0FBQzs7SUFjRixDQUFDO0lBWkQsc0JBQUksbUNBQU87Ozs7UUFBWDtZQUNFLE9BQU8sNkNBQTZDLENBQUM7UUFDdkQsQ0FBQzs7O09BQUE7Ozs7O0lBWUQsbUNBQVU7Ozs7SUFBVixVQUFXLEdBQVc7UUFDcEIsT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxtQ0FBaUMsR0FBSyxDQUFDLENBQUMsSUFBSSxDQUNoRSxHQUFHLENBQUMsVUFBQyxHQUFRLElBQUssT0FBQSxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsV0FBVyxFQUF0QixDQUFzQixDQUFDLENBQzFDLENBQUM7SUFDSixDQUFDO0lBQ0gscUJBQUM7QUFBRCxDQUFDLEFBM0JELENBQW9DLGVBQWUsR0EyQmxEOzs7O0lBekJDLDJDQUF5Qjs7Ozs7SUFFekIsNENBRUU7Ozs7O0lBTVUsZ0NBQThCOzs7OztJQUM5Qiw4QkFBNEI7Ozs7O0lBQzVCLCtCQUEyQjs7Ozs7SUFDM0IsbUNBQTZCOzs7OztJQUM3QixtQ0FBNkI7Ozs7O0lBQzdCLHFDQUE2Qjs7Ozs7SUFDN0IsNkNBQXlEIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgUGxhdGZvcm0gfSBmcm9tICdAYW5ndWxhci9jZGsvcGxhdGZvcm0nO1xyXG5pbXBvcnQgeyBIdHRwQ2xpZW50IH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uL2h0dHAnO1xyXG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XHJcbmltcG9ydCB7IG1hcCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcclxuaW1wb3J0IHsgU2hhcmVCdXR0b25CYXNlIH0gZnJvbSAnLi9iYXNlJztcclxuaW1wb3J0IHsgSVNoYXJlQnV0dG9uLCBTaGFyZU1ldGFUYWdzIH0gZnJvbSAnLi4vc2hhcmUubW9kZWxzJztcclxuXHJcbmV4cG9ydCBjbGFzcyBGYWNlYm9va0J1dHRvbiBleHRlbmRzIFNoYXJlQnV0dG9uQmFzZSB7XHJcblxyXG4gIHN1cHBvcnRTaGFyZUNvdW50ID0gdHJ1ZTtcclxuXHJcbiAgcHJvdGVjdGVkIF9zdXBwb3J0ZWRNZXRhVGFnczogU2hhcmVNZXRhVGFncyA9IHtcclxuICAgIHVybDogJ3UnXHJcbiAgfTtcclxuXHJcbiAgZ2V0IGRlc2t0b3AoKTogc3RyaW5nIHtcclxuICAgIHJldHVybiBgaHR0cHM6Ly93d3cuZmFjZWJvb2suY29tL3NoYXJlci9zaGFyZXIucGhwP2A7XHJcbiAgfVxyXG5cclxuICBjb25zdHJ1Y3Rvcihwcm90ZWN0ZWQgX3Byb3BzOiBJU2hhcmVCdXR0b24sXHJcbiAgICAgICAgICAgICAgcHJvdGVjdGVkIF91cmw6ICgpID0+IHN0cmluZyxcclxuICAgICAgICAgICAgICBwcm90ZWN0ZWQgX2h0dHA6IEh0dHBDbGllbnQsXHJcbiAgICAgICAgICAgICAgcHJvdGVjdGVkIF9wbGF0Zm9ybTogUGxhdGZvcm0sXHJcbiAgICAgICAgICAgICAgcHJvdGVjdGVkIF9kb2N1bWVudDogRG9jdW1lbnQsXHJcbiAgICAgICAgICAgICAgcHJvdGVjdGVkIF93aW5kb3dTaXplOiBzdHJpbmcsXHJcbiAgICAgICAgICAgICAgcHJvdGVjdGVkIF9kaXNhYmxlQnV0dG9uQ2xpY2s6IChkaXNhYmxlOiBib29sZWFuKSA9PiB2b2lkKSB7XHJcbiAgICBzdXBlcihfcHJvcHMsIF91cmwsIF9odHRwLCBfcGxhdGZvcm0sIF9kb2N1bWVudCwgX3dpbmRvd1NpemUsIF9kaXNhYmxlQnV0dG9uQ2xpY2spO1xyXG4gIH1cclxuXHJcbiAgc2hhcmVDb3VudCh1cmw6IHN0cmluZyk6IE9ic2VydmFibGU8bnVtYmVyPiB7XHJcbiAgICByZXR1cm4gdGhpcy5faHR0cC5nZXQoYGh0dHBzOi8vZ3JhcGguZmFjZWJvb2suY29tP2lkPSR7dXJsfWApLnBpcGUoXHJcbiAgICAgIG1hcCgocmVzOiBhbnkpID0+ICtyZXMuc2hhcmUuc2hhcmVfY291bnQpXHJcbiAgICApO1xyXG4gIH1cclxufVxyXG4iXX0=