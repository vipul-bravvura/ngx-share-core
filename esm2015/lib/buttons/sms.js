/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { ShareButtonBase } from './base';
export class SmsButton extends ShareButtonBase {
    /**
     * @param {?} _props
     * @param {?} _url
     * @param {?} _http
     * @param {?} _platform
     * @param {?} _document
     * @param {?} _windowSize
     * @param {?} _disableButtonClick
     */
    constructor(_props, _url, _http, _platform, _document, _windowSize, _disableButtonClick) {
        super(_props, _url, _http, _platform, _document, _windowSize, _disableButtonClick);
        this._props = _props;
        this._url = _url;
        this._http = _http;
        this._platform = _platform;
        this._document = _document;
        this._windowSize = _windowSize;
        this._disableButtonClick = _disableButtonClick;
        this._supportedMetaTags = {
            description: 'body'
        };
    }
    /**
     * @return {?}
     */
    get desktop() {
        return `sms:?`;
    }
    /**
     * @return {?}
     */
    get android() {
        return `sms:?`;
    }
    /**
     * @return {?}
     */
    get ios() {
        return 'sms:&';
    }
    /**
     * @param {?} metaTags
     * @return {?}
     */
    click(metaTags) {
        metaTags.description += `\r\n${this._url()}`;
        /** @type {?} */
        const serializedMetaTags = this._serializeMetaTags(metaTags);
        return this._open(serializedMetaTags);
    }
}
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic21zLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQG5neC1zaGFyZS9jb3JlLyIsInNvdXJjZXMiOlsibGliL2J1dHRvbnMvc21zLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFFQSxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sUUFBUSxDQUFDO0FBR3pDLE1BQU0sT0FBTyxTQUFVLFNBQVEsZUFBZTs7Ozs7Ozs7OztJQWtCNUMsWUFBc0IsTUFBb0IsRUFDcEIsSUFBa0IsRUFDbEIsS0FBaUIsRUFDakIsU0FBbUIsRUFDbkIsU0FBbUIsRUFDbkIsV0FBbUIsRUFDbkIsbUJBQStDO1FBQ25FLEtBQUssQ0FBQyxNQUFNLEVBQUUsSUFBSSxFQUFFLEtBQUssRUFBRSxTQUFTLEVBQUUsU0FBUyxFQUFFLFdBQVcsRUFBRSxtQkFBbUIsQ0FBQyxDQUFDO1FBUC9ELFdBQU0sR0FBTixNQUFNLENBQWM7UUFDcEIsU0FBSSxHQUFKLElBQUksQ0FBYztRQUNsQixVQUFLLEdBQUwsS0FBSyxDQUFZO1FBQ2pCLGNBQVMsR0FBVCxTQUFTLENBQVU7UUFDbkIsY0FBUyxHQUFULFNBQVMsQ0FBVTtRQUNuQixnQkFBVyxHQUFYLFdBQVcsQ0FBUTtRQUNuQix3QkFBbUIsR0FBbkIsbUJBQW1CLENBQTRCO1FBdEIzRCx1QkFBa0IsR0FBa0I7WUFDNUMsV0FBVyxFQUFFLE1BQU07U0FDcEIsQ0FBQztJQXNCRixDQUFDOzs7O0lBcEJELElBQUksT0FBTztRQUNULE9BQU8sT0FBTyxDQUFDO0lBQ2pCLENBQUM7Ozs7SUFFRCxJQUFJLE9BQU87UUFDVCxPQUFPLE9BQU8sQ0FBQztJQUNqQixDQUFDOzs7O0lBRUQsSUFBSSxHQUFHO1FBQ0wsT0FBTyxPQUFPLENBQUM7SUFDakIsQ0FBQzs7Ozs7SUFZRCxLQUFLLENBQUMsUUFBdUI7UUFDM0IsUUFBUSxDQUFDLFdBQVcsSUFBSSxPQUFPLElBQUksQ0FBQyxJQUFJLEVBQUUsRUFBRSxDQUFDOztjQUN2QyxrQkFBa0IsR0FBRyxJQUFJLENBQUMsa0JBQWtCLENBQUMsUUFBUSxDQUFDO1FBQzVELE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQyxrQkFBa0IsQ0FBQyxDQUFDO0lBQ3hDLENBQUM7Q0FDRjs7Ozs7O0lBL0JDLHVDQUVFOzs7OztJQWNVLDJCQUE4Qjs7Ozs7SUFDOUIseUJBQTRCOzs7OztJQUM1QiwwQkFBMkI7Ozs7O0lBQzNCLDhCQUE2Qjs7Ozs7SUFDN0IsOEJBQTZCOzs7OztJQUM3QixnQ0FBNkI7Ozs7O0lBQzdCLHdDQUF5RCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFBsYXRmb3JtIH0gZnJvbSAnQGFuZ3VsYXIvY2RrL3BsYXRmb3JtJztcclxuaW1wb3J0IHsgSHR0cENsaWVudCB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbi9odHRwJztcclxuaW1wb3J0IHsgU2hhcmVCdXR0b25CYXNlIH0gZnJvbSAnLi9iYXNlJztcclxuaW1wb3J0IHsgSVNoYXJlQnV0dG9uLCBTaGFyZU1ldGFUYWdzIH0gZnJvbSAnLi4vc2hhcmUubW9kZWxzJztcclxuXHJcbmV4cG9ydCBjbGFzcyBTbXNCdXR0b24gZXh0ZW5kcyBTaGFyZUJ1dHRvbkJhc2Uge1xyXG5cclxuICBwcm90ZWN0ZWQgX3N1cHBvcnRlZE1ldGFUYWdzOiBTaGFyZU1ldGFUYWdzID0ge1xyXG4gICAgZGVzY3JpcHRpb246ICdib2R5J1xyXG4gIH07XHJcblxyXG4gIGdldCBkZXNrdG9wKCk6IHN0cmluZyB7XHJcbiAgICByZXR1cm4gYHNtczo/YDtcclxuICB9XHJcblxyXG4gIGdldCBhbmRyb2lkKCk6IHN0cmluZyB7XHJcbiAgICByZXR1cm4gYHNtczo/YDtcclxuICB9XHJcblxyXG4gIGdldCBpb3MoKTogc3RyaW5nIHtcclxuICAgIHJldHVybiAnc21zOiYnO1xyXG4gIH1cclxuXHJcbiAgY29uc3RydWN0b3IocHJvdGVjdGVkIF9wcm9wczogSVNoYXJlQnV0dG9uLFxyXG4gICAgICAgICAgICAgIHByb3RlY3RlZCBfdXJsOiAoKSA9PiBzdHJpbmcsXHJcbiAgICAgICAgICAgICAgcHJvdGVjdGVkIF9odHRwOiBIdHRwQ2xpZW50LFxyXG4gICAgICAgICAgICAgIHByb3RlY3RlZCBfcGxhdGZvcm06IFBsYXRmb3JtLFxyXG4gICAgICAgICAgICAgIHByb3RlY3RlZCBfZG9jdW1lbnQ6IERvY3VtZW50LFxyXG4gICAgICAgICAgICAgIHByb3RlY3RlZCBfd2luZG93U2l6ZTogc3RyaW5nLFxyXG4gICAgICAgICAgICAgIHByb3RlY3RlZCBfZGlzYWJsZUJ1dHRvbkNsaWNrOiAoZGlzYWJsZTogYm9vbGVhbikgPT4gdm9pZCkge1xyXG4gICAgc3VwZXIoX3Byb3BzLCBfdXJsLCBfaHR0cCwgX3BsYXRmb3JtLCBfZG9jdW1lbnQsIF93aW5kb3dTaXplLCBfZGlzYWJsZUJ1dHRvbkNsaWNrKTtcclxuICB9XHJcblxyXG4gIGNsaWNrKG1ldGFUYWdzOiBTaGFyZU1ldGFUYWdzKTogV2luZG93IHwgbnVsbCB8IHZvaWQge1xyXG4gICAgbWV0YVRhZ3MuZGVzY3JpcHRpb24gKz0gYFxcclxcbiR7dGhpcy5fdXJsKCl9YDtcclxuICAgIGNvbnN0IHNlcmlhbGl6ZWRNZXRhVGFncyA9IHRoaXMuX3NlcmlhbGl6ZU1ldGFUYWdzKG1ldGFUYWdzKTtcclxuICAgIHJldHVybiB0aGlzLl9vcGVuKHNlcmlhbGl6ZWRNZXRhVGFncyk7XHJcbiAgfVxyXG59XHJcbiJdfQ==