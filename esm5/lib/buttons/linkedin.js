/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { ShareButtonBase } from './base';
var LinkedinButton = /** @class */ (function (_super) {
    tslib_1.__extends(LinkedinButton, _super);
    function LinkedinButton(_props, _url, _http, _platform, _document, _windowSize, _disableButtonClick) {
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
            title: 'title',
            description: 'summary'
        };
        return _this;
    }
    Object.defineProperty(LinkedinButton.prototype, "desktop", {
        get: /**
         * @return {?}
         */
        function () {
            return "http://www.linkedin.com/shareArticle?";
        },
        enumerable: true,
        configurable: true
    });
    return LinkedinButton;
}(ShareButtonBase));
export { LinkedinButton };
if (false) {
    /**
     * @type {?}
     * @protected
     */
    LinkedinButton.prototype._supportedMetaTags;
    /**
     * @type {?}
     * @protected
     */
    LinkedinButton.prototype._props;
    /**
     * @type {?}
     * @protected
     */
    LinkedinButton.prototype._url;
    /**
     * @type {?}
     * @protected
     */
    LinkedinButton.prototype._http;
    /**
     * @type {?}
     * @protected
     */
    LinkedinButton.prototype._platform;
    /**
     * @type {?}
     * @protected
     */
    LinkedinButton.prototype._document;
    /**
     * @type {?}
     * @protected
     */
    LinkedinButton.prototype._windowSize;
    /**
     * @type {?}
     * @protected
     */
    LinkedinButton.prototype._disableButtonClick;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGlua2VkaW4uanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Abmd4LXNoYXJlL2NvcmUvIiwic291cmNlcyI6WyJsaWIvYnV0dG9ucy9saW5rZWRpbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUVBLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSxRQUFRLENBQUM7QUFHekM7SUFBb0MsMENBQWU7SUFZakQsd0JBQXNCLE1BQW9CLEVBQ3BCLElBQWtCLEVBQ2xCLEtBQWlCLEVBQ2pCLFNBQW1CLEVBQ25CLFNBQW1CLEVBQ25CLFdBQW1CLEVBQ25CLG1CQUErQztRQU5yRSxZQU9FLGtCQUFNLE1BQU0sRUFBRSxJQUFJLEVBQUUsS0FBSyxFQUFFLFNBQVMsRUFBRSxTQUFTLEVBQUUsV0FBVyxFQUFFLG1CQUFtQixDQUFDLFNBQ25GO1FBUnFCLFlBQU0sR0FBTixNQUFNLENBQWM7UUFDcEIsVUFBSSxHQUFKLElBQUksQ0FBYztRQUNsQixXQUFLLEdBQUwsS0FBSyxDQUFZO1FBQ2pCLGVBQVMsR0FBVCxTQUFTLENBQVU7UUFDbkIsZUFBUyxHQUFULFNBQVMsQ0FBVTtRQUNuQixpQkFBVyxHQUFYLFdBQVcsQ0FBUTtRQUNuQix5QkFBbUIsR0FBbkIsbUJBQW1CLENBQTRCO1FBaEIzRCx3QkFBa0IsR0FBa0I7WUFDNUMsR0FBRyxFQUFFLEtBQUs7WUFDVixLQUFLLEVBQUUsT0FBTztZQUNkLFdBQVcsRUFBRSxTQUFTO1NBQ3ZCLENBQUM7O0lBY0YsQ0FBQztJQVpELHNCQUFJLG1DQUFPOzs7O1FBQVg7WUFDRSxPQUFPLHVDQUF1QyxDQUFDO1FBQ2pELENBQUM7OztPQUFBO0lBV0gscUJBQUM7QUFBRCxDQUFDLEFBckJELENBQW9DLGVBQWUsR0FxQmxEOzs7Ozs7O0lBbkJDLDRDQUlFOzs7OztJQU1VLGdDQUE4Qjs7Ozs7SUFDOUIsOEJBQTRCOzs7OztJQUM1QiwrQkFBMkI7Ozs7O0lBQzNCLG1DQUE2Qjs7Ozs7SUFDN0IsbUNBQTZCOzs7OztJQUM3QixxQ0FBNkI7Ozs7O0lBQzdCLDZDQUF5RCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFBsYXRmb3JtIH0gZnJvbSAnQGFuZ3VsYXIvY2RrL3BsYXRmb3JtJztcclxuaW1wb3J0IHsgSHR0cENsaWVudCB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbi9odHRwJztcclxuaW1wb3J0IHsgU2hhcmVCdXR0b25CYXNlIH0gZnJvbSAnLi9iYXNlJztcclxuaW1wb3J0IHsgSVNoYXJlQnV0dG9uLCBTaGFyZU1ldGFUYWdzIH0gZnJvbSAnLi4vc2hhcmUubW9kZWxzJztcclxuXHJcbmV4cG9ydCBjbGFzcyBMaW5rZWRpbkJ1dHRvbiBleHRlbmRzIFNoYXJlQnV0dG9uQmFzZSB7XHJcblxyXG4gIHByb3RlY3RlZCBfc3VwcG9ydGVkTWV0YVRhZ3M6IFNoYXJlTWV0YVRhZ3MgPSB7XHJcbiAgICB1cmw6ICd1cmwnLFxyXG4gICAgdGl0bGU6ICd0aXRsZScsXHJcbiAgICBkZXNjcmlwdGlvbjogJ3N1bW1hcnknXHJcbiAgfTtcclxuXHJcbiAgZ2V0IGRlc2t0b3AoKTogc3RyaW5nIHtcclxuICAgIHJldHVybiBgaHR0cDovL3d3dy5saW5rZWRpbi5jb20vc2hhcmVBcnRpY2xlP2A7XHJcbiAgfVxyXG5cclxuICBjb25zdHJ1Y3Rvcihwcm90ZWN0ZWQgX3Byb3BzOiBJU2hhcmVCdXR0b24sXHJcbiAgICAgICAgICAgICAgcHJvdGVjdGVkIF91cmw6ICgpID0+IHN0cmluZyxcclxuICAgICAgICAgICAgICBwcm90ZWN0ZWQgX2h0dHA6IEh0dHBDbGllbnQsXHJcbiAgICAgICAgICAgICAgcHJvdGVjdGVkIF9wbGF0Zm9ybTogUGxhdGZvcm0sXHJcbiAgICAgICAgICAgICAgcHJvdGVjdGVkIF9kb2N1bWVudDogRG9jdW1lbnQsXHJcbiAgICAgICAgICAgICAgcHJvdGVjdGVkIF93aW5kb3dTaXplOiBzdHJpbmcsXHJcbiAgICAgICAgICAgICAgcHJvdGVjdGVkIF9kaXNhYmxlQnV0dG9uQ2xpY2s6IChkaXNhYmxlOiBib29sZWFuKSA9PiB2b2lkKSB7XHJcbiAgICBzdXBlcihfcHJvcHMsIF91cmwsIF9odHRwLCBfcGxhdGZvcm0sIF9kb2N1bWVudCwgX3dpbmRvd1NpemUsIF9kaXNhYmxlQnV0dG9uQ2xpY2spO1xyXG4gIH1cclxufVxyXG4iXX0=