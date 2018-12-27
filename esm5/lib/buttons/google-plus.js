/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { ShareButtonBase } from './base';
var GooglePlusButton = /** @class */ (function (_super) {
    tslib_1.__extends(GooglePlusButton, _super);
    function GooglePlusButton(_props, _url, _http, _platform, _document, _windowSize, _disableButtonClick) {
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
    Object.defineProperty(GooglePlusButton.prototype, "desktop", {
        get: /**
         * @return {?}
         */
        function () {
            return "https://plus.google.com/share?";
        },
        enumerable: true,
        configurable: true
    });
    return GooglePlusButton;
}(ShareButtonBase));
export { GooglePlusButton };
if (false) {
    /**
     * @type {?}
     * @protected
     */
    GooglePlusButton.prototype._supportedMetaTags;
    /**
     * @type {?}
     * @protected
     */
    GooglePlusButton.prototype._props;
    /**
     * @type {?}
     * @protected
     */
    GooglePlusButton.prototype._url;
    /**
     * @type {?}
     * @protected
     */
    GooglePlusButton.prototype._http;
    /**
     * @type {?}
     * @protected
     */
    GooglePlusButton.prototype._platform;
    /**
     * @type {?}
     * @protected
     */
    GooglePlusButton.prototype._document;
    /**
     * @type {?}
     * @protected
     */
    GooglePlusButton.prototype._windowSize;
    /**
     * @type {?}
     * @protected
     */
    GooglePlusButton.prototype._disableButtonClick;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ29vZ2xlLXBsdXMuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Abmd4LXNoYXJlL2NvcmUvIiwic291cmNlcyI6WyJsaWIvYnV0dG9ucy9nb29nbGUtcGx1cy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUVBLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSxRQUFRLENBQUM7QUFHekM7SUFBc0MsNENBQWU7SUFVbkQsMEJBQXNCLE1BQW9CLEVBQ3BCLElBQWtCLEVBQ2xCLEtBQWlCLEVBQ2pCLFNBQW1CLEVBQ25CLFNBQW1CLEVBQ25CLFdBQW1CLEVBQ25CLG1CQUErQztRQU5yRSxZQU9FLGtCQUFNLE1BQU0sRUFBRSxJQUFJLEVBQUUsS0FBSyxFQUFFLFNBQVMsRUFBRSxTQUFTLEVBQUUsV0FBVyxFQUFFLG1CQUFtQixDQUFDLFNBQ25GO1FBUnFCLFlBQU0sR0FBTixNQUFNLENBQWM7UUFDcEIsVUFBSSxHQUFKLElBQUksQ0FBYztRQUNsQixXQUFLLEdBQUwsS0FBSyxDQUFZO1FBQ2pCLGVBQVMsR0FBVCxTQUFTLENBQVU7UUFDbkIsZUFBUyxHQUFULFNBQVMsQ0FBVTtRQUNuQixpQkFBVyxHQUFYLFdBQVcsQ0FBUTtRQUNuQix5QkFBbUIsR0FBbkIsbUJBQW1CLENBQTRCO1FBZDNELHdCQUFrQixHQUFrQjtZQUM1QyxHQUFHLEVBQUUsS0FBSztTQUNYLENBQUM7O0lBY0YsQ0FBQztJQVpELHNCQUFJLHFDQUFPOzs7O1FBQVg7WUFDRSxPQUFPLGdDQUFnQyxDQUFDO1FBQzFDLENBQUM7OztPQUFBO0lBV0gsdUJBQUM7QUFBRCxDQUFDLEFBbkJELENBQXNDLGVBQWUsR0FtQnBEOzs7Ozs7O0lBakJDLDhDQUVFOzs7OztJQU1VLGtDQUE4Qjs7Ozs7SUFDOUIsZ0NBQTRCOzs7OztJQUM1QixpQ0FBMkI7Ozs7O0lBQzNCLHFDQUE2Qjs7Ozs7SUFDN0IscUNBQTZCOzs7OztJQUM3Qix1Q0FBNkI7Ozs7O0lBQzdCLCtDQUF5RCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFBsYXRmb3JtIH0gZnJvbSAnQGFuZ3VsYXIvY2RrL3BsYXRmb3JtJztcclxuaW1wb3J0IHsgSHR0cENsaWVudCB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbi9odHRwJztcclxuaW1wb3J0IHsgU2hhcmVCdXR0b25CYXNlIH0gZnJvbSAnLi9iYXNlJztcclxuaW1wb3J0IHsgSVNoYXJlQnV0dG9uLCBTaGFyZU1ldGFUYWdzIH0gZnJvbSAnLi4vc2hhcmUubW9kZWxzJztcclxuXHJcbmV4cG9ydCBjbGFzcyBHb29nbGVQbHVzQnV0dG9uIGV4dGVuZHMgU2hhcmVCdXR0b25CYXNlIHtcclxuXHJcbiAgcHJvdGVjdGVkIF9zdXBwb3J0ZWRNZXRhVGFnczogU2hhcmVNZXRhVGFncyA9IHtcclxuICAgIHVybDogJ3VybCdcclxuICB9O1xyXG5cclxuICBnZXQgZGVza3RvcCgpOiBzdHJpbmcge1xyXG4gICAgcmV0dXJuIGBodHRwczovL3BsdXMuZ29vZ2xlLmNvbS9zaGFyZT9gO1xyXG4gIH1cclxuXHJcbiAgY29uc3RydWN0b3IocHJvdGVjdGVkIF9wcm9wczogSVNoYXJlQnV0dG9uLFxyXG4gICAgICAgICAgICAgIHByb3RlY3RlZCBfdXJsOiAoKSA9PiBzdHJpbmcsXHJcbiAgICAgICAgICAgICAgcHJvdGVjdGVkIF9odHRwOiBIdHRwQ2xpZW50LFxyXG4gICAgICAgICAgICAgIHByb3RlY3RlZCBfcGxhdGZvcm06IFBsYXRmb3JtLFxyXG4gICAgICAgICAgICAgIHByb3RlY3RlZCBfZG9jdW1lbnQ6IERvY3VtZW50LFxyXG4gICAgICAgICAgICAgIHByb3RlY3RlZCBfd2luZG93U2l6ZTogc3RyaW5nLFxyXG4gICAgICAgICAgICAgIHByb3RlY3RlZCBfZGlzYWJsZUJ1dHRvbkNsaWNrOiAoZGlzYWJsZTogYm9vbGVhbikgPT4gdm9pZCkge1xyXG4gICAgc3VwZXIoX3Byb3BzLCBfdXJsLCBfaHR0cCwgX3BsYXRmb3JtLCBfZG9jdW1lbnQsIF93aW5kb3dTaXplLCBfZGlzYWJsZUJ1dHRvbkNsaWNrKTtcclxuICB9XHJcbn1cclxuIl19