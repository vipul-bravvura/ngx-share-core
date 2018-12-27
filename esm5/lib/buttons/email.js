/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { ShareButtonBase } from './base';
var EmailButton = /** @class */ (function (_super) {
    tslib_1.__extends(EmailButton, _super);
    function EmailButton(_props, _url, _http, _platform, _document, _windowSize, _disableButtonClick) {
        var _this = _super.call(this, _props, _url, _http, _platform, _document, _windowSize, _disableButtonClick) || this;
        _this._props = _props;
        _this._url = _url;
        _this._http = _http;
        _this._platform = _platform;
        _this._document = _document;
        _this._windowSize = _windowSize;
        _this._disableButtonClick = _disableButtonClick;
        _this._supportedMetaTags = {
            title: 'subject',
            description: 'body'
        };
        return _this;
    }
    Object.defineProperty(EmailButton.prototype, "desktop", {
        get: /**
         * @return {?}
         */
        function () {
            return "mailto:?";
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @param {?} metaTags
     * @return {?}
     */
    EmailButton.prototype.click = /**
     * @param {?} metaTags
     * @return {?}
     */
    function (metaTags) {
        // Add URL to message body
        metaTags.description += "\r\n" + this._url();
        /** @type {?} */
        var serializedMetaTags = this._serializeMetaTags(metaTags);
        return this._open(serializedMetaTags);
    };
    return EmailButton;
}(ShareButtonBase));
export { EmailButton };
if (false) {
    /**
     * @type {?}
     * @protected
     */
    EmailButton.prototype._supportedMetaTags;
    /**
     * @type {?}
     * @protected
     */
    EmailButton.prototype._props;
    /**
     * @type {?}
     * @protected
     */
    EmailButton.prototype._url;
    /**
     * @type {?}
     * @protected
     */
    EmailButton.prototype._http;
    /**
     * @type {?}
     * @protected
     */
    EmailButton.prototype._platform;
    /**
     * @type {?}
     * @protected
     */
    EmailButton.prototype._document;
    /**
     * @type {?}
     * @protected
     */
    EmailButton.prototype._windowSize;
    /**
     * @type {?}
     * @protected
     */
    EmailButton.prototype._disableButtonClick;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZW1haWwuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Abmd4LXNoYXJlL2NvcmUvIiwic291cmNlcyI6WyJsaWIvYnV0dG9ucy9lbWFpbC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUVBLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSxRQUFRLENBQUM7QUFHekM7SUFBaUMsdUNBQWU7SUFXOUMscUJBQXNCLE1BQW9CLEVBQ3BCLElBQWtCLEVBQ2xCLEtBQWlCLEVBQ2pCLFNBQW1CLEVBQ25CLFNBQW1CLEVBQ25CLFdBQW1CLEVBQ25CLG1CQUErQztRQU5yRSxZQU9FLGtCQUFNLE1BQU0sRUFBRSxJQUFJLEVBQUUsS0FBSyxFQUFFLFNBQVMsRUFBRSxTQUFTLEVBQUUsV0FBVyxFQUFFLG1CQUFtQixDQUFDLFNBQ25GO1FBUnFCLFlBQU0sR0FBTixNQUFNLENBQWM7UUFDcEIsVUFBSSxHQUFKLElBQUksQ0FBYztRQUNsQixXQUFLLEdBQUwsS0FBSyxDQUFZO1FBQ2pCLGVBQVMsR0FBVCxTQUFTLENBQVU7UUFDbkIsZUFBUyxHQUFULFNBQVMsQ0FBVTtRQUNuQixpQkFBVyxHQUFYLFdBQVcsQ0FBUTtRQUNuQix5QkFBbUIsR0FBbkIsbUJBQW1CLENBQTRCO1FBZjNELHdCQUFrQixHQUFrQjtZQUM1QyxLQUFLLEVBQUUsU0FBUztZQUNoQixXQUFXLEVBQUUsTUFBTTtTQUNwQixDQUFDOztJQWNGLENBQUM7SUFaRCxzQkFBSSxnQ0FBTzs7OztRQUFYO1lBQ0UsT0FBTyxVQUFVLENBQUM7UUFDcEIsQ0FBQzs7O09BQUE7Ozs7O0lBWUQsMkJBQUs7Ozs7SUFBTCxVQUFNLFFBQXVCO1FBQzNCLDBCQUEwQjtRQUMxQixRQUFRLENBQUMsV0FBVyxJQUFJLFNBQU8sSUFBSSxDQUFDLElBQUksRUFBSSxDQUFDOztZQUN2QyxrQkFBa0IsR0FBRyxJQUFJLENBQUMsa0JBQWtCLENBQUMsUUFBUSxDQUFDO1FBQzVELE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQyxrQkFBa0IsQ0FBQyxDQUFDO0lBQ3hDLENBQUM7SUFDSCxrQkFBQztBQUFELENBQUMsQUEzQkQsQ0FBaUMsZUFBZSxHQTJCL0M7Ozs7Ozs7SUF6QkMseUNBR0U7Ozs7O0lBTVUsNkJBQThCOzs7OztJQUM5QiwyQkFBNEI7Ozs7O0lBQzVCLDRCQUEyQjs7Ozs7SUFDM0IsZ0NBQTZCOzs7OztJQUM3QixnQ0FBNkI7Ozs7O0lBQzdCLGtDQUE2Qjs7Ozs7SUFDN0IsMENBQXlEIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgUGxhdGZvcm0gfSBmcm9tICdAYW5ndWxhci9jZGsvcGxhdGZvcm0nO1xyXG5pbXBvcnQgeyBIdHRwQ2xpZW50IH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uL2h0dHAnO1xyXG5pbXBvcnQgeyBTaGFyZUJ1dHRvbkJhc2UgfSBmcm9tICcuL2Jhc2UnO1xyXG5pbXBvcnQgeyBJU2hhcmVCdXR0b24sIFNoYXJlTWV0YVRhZ3MgfSBmcm9tICcuLi9zaGFyZS5tb2RlbHMnO1xyXG5cclxuZXhwb3J0IGNsYXNzIEVtYWlsQnV0dG9uIGV4dGVuZHMgU2hhcmVCdXR0b25CYXNlIHtcclxuXHJcbiAgcHJvdGVjdGVkIF9zdXBwb3J0ZWRNZXRhVGFnczogU2hhcmVNZXRhVGFncyA9IHtcclxuICAgIHRpdGxlOiAnc3ViamVjdCcsXHJcbiAgICBkZXNjcmlwdGlvbjogJ2JvZHknXHJcbiAgfTtcclxuXHJcbiAgZ2V0IGRlc2t0b3AoKTogc3RyaW5nIHtcclxuICAgIHJldHVybiBgbWFpbHRvOj9gO1xyXG4gIH1cclxuXHJcbiAgY29uc3RydWN0b3IocHJvdGVjdGVkIF9wcm9wczogSVNoYXJlQnV0dG9uLFxyXG4gICAgICAgICAgICAgIHByb3RlY3RlZCBfdXJsOiAoKSA9PiBzdHJpbmcsXHJcbiAgICAgICAgICAgICAgcHJvdGVjdGVkIF9odHRwOiBIdHRwQ2xpZW50LFxyXG4gICAgICAgICAgICAgIHByb3RlY3RlZCBfcGxhdGZvcm06IFBsYXRmb3JtLFxyXG4gICAgICAgICAgICAgIHByb3RlY3RlZCBfZG9jdW1lbnQ6IERvY3VtZW50LFxyXG4gICAgICAgICAgICAgIHByb3RlY3RlZCBfd2luZG93U2l6ZTogc3RyaW5nLFxyXG4gICAgICAgICAgICAgIHByb3RlY3RlZCBfZGlzYWJsZUJ1dHRvbkNsaWNrOiAoZGlzYWJsZTogYm9vbGVhbikgPT4gdm9pZCkge1xyXG4gICAgc3VwZXIoX3Byb3BzLCBfdXJsLCBfaHR0cCwgX3BsYXRmb3JtLCBfZG9jdW1lbnQsIF93aW5kb3dTaXplLCBfZGlzYWJsZUJ1dHRvbkNsaWNrKTtcclxuICB9XHJcblxyXG4gIGNsaWNrKG1ldGFUYWdzOiBTaGFyZU1ldGFUYWdzKTogV2luZG93IHwgbnVsbCB8IHZvaWQge1xyXG4gICAgLy8gQWRkIFVSTCB0byBtZXNzYWdlIGJvZHlcclxuICAgIG1ldGFUYWdzLmRlc2NyaXB0aW9uICs9IGBcXHJcXG4ke3RoaXMuX3VybCgpfWA7XHJcbiAgICBjb25zdCBzZXJpYWxpemVkTWV0YVRhZ3MgPSB0aGlzLl9zZXJpYWxpemVNZXRhVGFncyhtZXRhVGFncyk7XHJcbiAgICByZXR1cm4gdGhpcy5fb3BlbihzZXJpYWxpemVkTWV0YVRhZ3MpO1xyXG4gIH1cclxufVxyXG4iXX0=