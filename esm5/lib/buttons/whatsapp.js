/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { ShareButtonBase } from './base';
var WhatsappButton = /** @class */ (function (_super) {
    tslib_1.__extends(WhatsappButton, _super);
    function WhatsappButton(_props, _url, _http, _platform, _document, _windowSize, _disableButtonClick) {
        var _this = _super.call(this, _props, _url, _http, _platform, _document, _windowSize, _disableButtonClick) || this;
        _this._props = _props;
        _this._url = _url;
        _this._http = _http;
        _this._platform = _platform;
        _this._document = _document;
        _this._windowSize = _windowSize;
        _this._disableButtonClick = _disableButtonClick;
        _this._metaTagsKeys = {
            description: 'text'
        };
        return _this;
    }
    Object.defineProperty(WhatsappButton.prototype, "desktop", {
        get: /**
         * @return {?}
         */
        function () {
            return "https://web.whatsapp.com/send?";
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(WhatsappButton.prototype, "android", {
        get: /**
         * @return {?}
         */
        function () {
            return "whatsapp://send?";
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(WhatsappButton.prototype, "ios", {
        get: /**
         * @return {?}
         */
        function () {
            return "whatsapp://send?";
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @param {?} metaTags
     * @return {?}
     */
    WhatsappButton.prototype.click = /**
     * @param {?} metaTags
     * @return {?}
     */
    function (metaTags) {
        // Add the URL to message body
        metaTags.description += "\r\n" + this._url();
        /** @type {?} */
        var serializedMetaTags = this._serializeMetaTags(metaTags);
        return this._open(serializedMetaTags);
    };
    return WhatsappButton;
}(ShareButtonBase));
export { WhatsappButton };
if (false) {
    /**
     * @type {?}
     * @protected
     */
    WhatsappButton.prototype._metaTagsKeys;
    /**
     * @type {?}
     * @protected
     */
    WhatsappButton.prototype._props;
    /**
     * @type {?}
     * @protected
     */
    WhatsappButton.prototype._url;
    /**
     * @type {?}
     * @protected
     */
    WhatsappButton.prototype._http;
    /**
     * @type {?}
     * @protected
     */
    WhatsappButton.prototype._platform;
    /**
     * @type {?}
     * @protected
     */
    WhatsappButton.prototype._document;
    /**
     * @type {?}
     * @protected
     */
    WhatsappButton.prototype._windowSize;
    /**
     * @type {?}
     * @protected
     */
    WhatsappButton.prototype._disableButtonClick;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid2hhdHNhcHAuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Abmd4LXNoYXJlL2NvcmUvIiwic291cmNlcyI6WyJsaWIvYnV0dG9ucy93aGF0c2FwcC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUVBLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSxRQUFRLENBQUM7QUFHekM7SUFBb0MsMENBQWU7SUFrQmpELHdCQUFzQixNQUFvQixFQUNwQixJQUFrQixFQUNsQixLQUFpQixFQUNqQixTQUFtQixFQUNuQixTQUFtQixFQUNuQixXQUFtQixFQUNuQixtQkFBK0M7UUFOckUsWUFPRSxrQkFBTSxNQUFNLEVBQUUsSUFBSSxFQUFFLEtBQUssRUFBRSxTQUFTLEVBQUUsU0FBUyxFQUFFLFdBQVcsRUFBRSxtQkFBbUIsQ0FBQyxTQUNuRjtRQVJxQixZQUFNLEdBQU4sTUFBTSxDQUFjO1FBQ3BCLFVBQUksR0FBSixJQUFJLENBQWM7UUFDbEIsV0FBSyxHQUFMLEtBQUssQ0FBWTtRQUNqQixlQUFTLEdBQVQsU0FBUyxDQUFVO1FBQ25CLGVBQVMsR0FBVCxTQUFTLENBQVU7UUFDbkIsaUJBQVcsR0FBWCxXQUFXLENBQVE7UUFDbkIseUJBQW1CLEdBQW5CLG1CQUFtQixDQUE0QjtRQXRCM0QsbUJBQWEsR0FBa0I7WUFDdkMsV0FBVyxFQUFFLE1BQU07U0FDcEIsQ0FBQzs7SUFzQkYsQ0FBQztJQXBCRCxzQkFBSSxtQ0FBTzs7OztRQUFYO1lBQ0UsT0FBTyxnQ0FBZ0MsQ0FBQztRQUMxQyxDQUFDOzs7T0FBQTtJQUVELHNCQUFJLG1DQUFPOzs7O1FBQVg7WUFDRSxPQUFPLGtCQUFrQixDQUFDO1FBQzVCLENBQUM7OztPQUFBO0lBRUQsc0JBQUksK0JBQUc7Ozs7UUFBUDtZQUNFLE9BQU8sa0JBQWtCLENBQUM7UUFDNUIsQ0FBQzs7O09BQUE7Ozs7O0lBWUQsOEJBQUs7Ozs7SUFBTCxVQUFNLFFBQXVCO1FBQzNCLDhCQUE4QjtRQUM5QixRQUFRLENBQUMsV0FBVyxJQUFJLFNBQU8sSUFBSSxDQUFDLElBQUksRUFBSSxDQUFDOztZQUN2QyxrQkFBa0IsR0FBRyxJQUFJLENBQUMsa0JBQWtCLENBQUMsUUFBUSxDQUFDO1FBQzVELE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQyxrQkFBa0IsQ0FBQyxDQUFDO0lBQ3hDLENBQUM7SUFDSCxxQkFBQztBQUFELENBQUMsQUFsQ0QsQ0FBb0MsZUFBZSxHQWtDbEQ7Ozs7Ozs7SUFoQ0MsdUNBRUU7Ozs7O0lBY1UsZ0NBQThCOzs7OztJQUM5Qiw4QkFBNEI7Ozs7O0lBQzVCLCtCQUEyQjs7Ozs7SUFDM0IsbUNBQTZCOzs7OztJQUM3QixtQ0FBNkI7Ozs7O0lBQzdCLHFDQUE2Qjs7Ozs7SUFDN0IsNkNBQXlEIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgUGxhdGZvcm0gfSBmcm9tICdAYW5ndWxhci9jZGsvcGxhdGZvcm0nO1xyXG5pbXBvcnQgeyBIdHRwQ2xpZW50IH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uL2h0dHAnO1xyXG5pbXBvcnQgeyBTaGFyZUJ1dHRvbkJhc2UgfSBmcm9tICcuL2Jhc2UnO1xyXG5pbXBvcnQgeyBJU2hhcmVCdXR0b24sIFNoYXJlTWV0YVRhZ3MgfSBmcm9tICcuLi9zaGFyZS5tb2RlbHMnO1xyXG5cclxuZXhwb3J0IGNsYXNzIFdoYXRzYXBwQnV0dG9uIGV4dGVuZHMgU2hhcmVCdXR0b25CYXNlIHtcclxuXHJcbiAgcHJvdGVjdGVkIF9tZXRhVGFnc0tleXM6IFNoYXJlTWV0YVRhZ3MgPSB7XHJcbiAgICBkZXNjcmlwdGlvbjogJ3RleHQnXHJcbiAgfTtcclxuXHJcbiAgZ2V0IGRlc2t0b3AoKTogc3RyaW5nIHtcclxuICAgIHJldHVybiBgaHR0cHM6Ly93ZWIud2hhdHNhcHAuY29tL3NlbmQ/YDtcclxuICB9XHJcblxyXG4gIGdldCBhbmRyb2lkKCk6IHN0cmluZyB7XHJcbiAgICByZXR1cm4gYHdoYXRzYXBwOi8vc2VuZD9gO1xyXG4gIH1cclxuXHJcbiAgZ2V0IGlvcygpOiBzdHJpbmcge1xyXG4gICAgcmV0dXJuIGB3aGF0c2FwcDovL3NlbmQ/YDtcclxuICB9XHJcblxyXG4gIGNvbnN0cnVjdG9yKHByb3RlY3RlZCBfcHJvcHM6IElTaGFyZUJ1dHRvbixcclxuICAgICAgICAgICAgICBwcm90ZWN0ZWQgX3VybDogKCkgPT4gc3RyaW5nLFxyXG4gICAgICAgICAgICAgIHByb3RlY3RlZCBfaHR0cDogSHR0cENsaWVudCxcclxuICAgICAgICAgICAgICBwcm90ZWN0ZWQgX3BsYXRmb3JtOiBQbGF0Zm9ybSxcclxuICAgICAgICAgICAgICBwcm90ZWN0ZWQgX2RvY3VtZW50OiBEb2N1bWVudCxcclxuICAgICAgICAgICAgICBwcm90ZWN0ZWQgX3dpbmRvd1NpemU6IHN0cmluZyxcclxuICAgICAgICAgICAgICBwcm90ZWN0ZWQgX2Rpc2FibGVCdXR0b25DbGljazogKGRpc2FibGU6IGJvb2xlYW4pID0+IHZvaWQpIHtcclxuICAgIHN1cGVyKF9wcm9wcywgX3VybCwgX2h0dHAsIF9wbGF0Zm9ybSwgX2RvY3VtZW50LCBfd2luZG93U2l6ZSwgX2Rpc2FibGVCdXR0b25DbGljayk7XHJcbiAgfVxyXG5cclxuICBjbGljayhtZXRhVGFnczogU2hhcmVNZXRhVGFncyk6IFdpbmRvdyB8IG51bGwgfCB2b2lkIHtcclxuICAgIC8vIEFkZCB0aGUgVVJMIHRvIG1lc3NhZ2UgYm9keVxyXG4gICAgbWV0YVRhZ3MuZGVzY3JpcHRpb24gKz0gYFxcclxcbiR7dGhpcy5fdXJsKCl9YDtcclxuICAgIGNvbnN0IHNlcmlhbGl6ZWRNZXRhVGFncyA9IHRoaXMuX3NlcmlhbGl6ZU1ldGFUYWdzKG1ldGFUYWdzKTtcclxuICAgIHJldHVybiB0aGlzLl9vcGVuKHNlcmlhbGl6ZWRNZXRhVGFncyk7XHJcbiAgfVxyXG59XHJcbiJdfQ==