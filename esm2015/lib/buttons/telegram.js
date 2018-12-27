/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { ShareButtonBase } from './base';
export class TelegramButton extends ShareButtonBase {
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
            url: 'url',
            description: 'text'
        };
    }
    /**
     * @return {?}
     */
    get desktop() {
        return 'https://t.me/share/url?';
    }
    /**
     * @param {?} metaTags
     * @return {?}
     */
    click(metaTags) {
        // Add the URL to message body
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
    TelegramButton.prototype._supportedMetaTags;
    /**
     * @type {?}
     * @protected
     */
    TelegramButton.prototype._props;
    /**
     * @type {?}
     * @protected
     */
    TelegramButton.prototype._url;
    /**
     * @type {?}
     * @protected
     */
    TelegramButton.prototype._http;
    /**
     * @type {?}
     * @protected
     */
    TelegramButton.prototype._platform;
    /**
     * @type {?}
     * @protected
     */
    TelegramButton.prototype._document;
    /**
     * @type {?}
     * @protected
     */
    TelegramButton.prototype._windowSize;
    /**
     * @type {?}
     * @protected
     */
    TelegramButton.prototype._disableButtonClick;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGVsZWdyYW0uanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Abmd4LXNoYXJlL2NvcmUvIiwic291cmNlcyI6WyJsaWIvYnV0dG9ucy90ZWxlZ3JhbS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBRUEsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLFFBQVEsQ0FBQztBQUd6QyxNQUFNLE9BQU8sY0FBZSxTQUFRLGVBQWU7Ozs7Ozs7Ozs7SUFXakQsWUFBc0IsTUFBb0IsRUFDcEIsSUFBa0IsRUFDbEIsS0FBaUIsRUFDakIsU0FBbUIsRUFDbkIsU0FBbUIsRUFDbkIsV0FBbUIsRUFDbkIsbUJBQStDO1FBQ25FLEtBQUssQ0FBQyxNQUFNLEVBQUUsSUFBSSxFQUFFLEtBQUssRUFBRSxTQUFTLEVBQUUsU0FBUyxFQUFFLFdBQVcsRUFBRSxtQkFBbUIsQ0FBQyxDQUFDO1FBUC9ELFdBQU0sR0FBTixNQUFNLENBQWM7UUFDcEIsU0FBSSxHQUFKLElBQUksQ0FBYztRQUNsQixVQUFLLEdBQUwsS0FBSyxDQUFZO1FBQ2pCLGNBQVMsR0FBVCxTQUFTLENBQVU7UUFDbkIsY0FBUyxHQUFULFNBQVMsQ0FBVTtRQUNuQixnQkFBVyxHQUFYLFdBQVcsQ0FBUTtRQUNuQix3QkFBbUIsR0FBbkIsbUJBQW1CLENBQTRCO1FBZjNELHVCQUFrQixHQUFrQjtZQUM1QyxHQUFHLEVBQUUsS0FBSztZQUNWLFdBQVcsRUFBRSxNQUFNO1NBQ3BCLENBQUM7SUFjRixDQUFDOzs7O0lBWkQsSUFBSSxPQUFPO1FBQ1QsT0FBTyx5QkFBeUIsQ0FBQztJQUNuQyxDQUFDOzs7OztJQVlELEtBQUssQ0FBQyxRQUF1QjtRQUMzQiw4QkFBOEI7UUFDOUIsUUFBUSxDQUFDLFdBQVcsSUFBSSxPQUFPLElBQUksQ0FBQyxJQUFJLEVBQUUsRUFBRSxDQUFDOztjQUN2QyxrQkFBa0IsR0FBRyxJQUFJLENBQUMsa0JBQWtCLENBQUMsUUFBUSxDQUFDO1FBQzVELE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQyxrQkFBa0IsQ0FBQyxDQUFDO0lBQ3hDLENBQUM7Q0FDRjs7Ozs7O0lBekJDLDRDQUdFOzs7OztJQU1VLGdDQUE4Qjs7Ozs7SUFDOUIsOEJBQTRCOzs7OztJQUM1QiwrQkFBMkI7Ozs7O0lBQzNCLG1DQUE2Qjs7Ozs7SUFDN0IsbUNBQTZCOzs7OztJQUM3QixxQ0FBNkI7Ozs7O0lBQzdCLDZDQUF5RCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFBsYXRmb3JtIH0gZnJvbSAnQGFuZ3VsYXIvY2RrL3BsYXRmb3JtJztcclxuaW1wb3J0IHsgSHR0cENsaWVudCB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbi9odHRwJztcclxuaW1wb3J0IHsgU2hhcmVCdXR0b25CYXNlIH0gZnJvbSAnLi9iYXNlJztcclxuaW1wb3J0IHsgSVNoYXJlQnV0dG9uLCBTaGFyZU1ldGFUYWdzIH0gZnJvbSAnLi4vc2hhcmUubW9kZWxzJztcclxuXHJcbmV4cG9ydCBjbGFzcyBUZWxlZ3JhbUJ1dHRvbiBleHRlbmRzIFNoYXJlQnV0dG9uQmFzZSB7XHJcblxyXG4gIHByb3RlY3RlZCBfc3VwcG9ydGVkTWV0YVRhZ3M6IFNoYXJlTWV0YVRhZ3MgPSB7XHJcbiAgICB1cmw6ICd1cmwnLFxyXG4gICAgZGVzY3JpcHRpb246ICd0ZXh0J1xyXG4gIH07XHJcblxyXG4gIGdldCBkZXNrdG9wKCk6IHN0cmluZyB7XHJcbiAgICByZXR1cm4gJ2h0dHBzOi8vdC5tZS9zaGFyZS91cmw/JztcclxuICB9XHJcblxyXG4gIGNvbnN0cnVjdG9yKHByb3RlY3RlZCBfcHJvcHM6IElTaGFyZUJ1dHRvbixcclxuICAgICAgICAgICAgICBwcm90ZWN0ZWQgX3VybDogKCkgPT4gc3RyaW5nLFxyXG4gICAgICAgICAgICAgIHByb3RlY3RlZCBfaHR0cDogSHR0cENsaWVudCxcclxuICAgICAgICAgICAgICBwcm90ZWN0ZWQgX3BsYXRmb3JtOiBQbGF0Zm9ybSxcclxuICAgICAgICAgICAgICBwcm90ZWN0ZWQgX2RvY3VtZW50OiBEb2N1bWVudCxcclxuICAgICAgICAgICAgICBwcm90ZWN0ZWQgX3dpbmRvd1NpemU6IHN0cmluZyxcclxuICAgICAgICAgICAgICBwcm90ZWN0ZWQgX2Rpc2FibGVCdXR0b25DbGljazogKGRpc2FibGU6IGJvb2xlYW4pID0+IHZvaWQpIHtcclxuICAgIHN1cGVyKF9wcm9wcywgX3VybCwgX2h0dHAsIF9wbGF0Zm9ybSwgX2RvY3VtZW50LCBfd2luZG93U2l6ZSwgX2Rpc2FibGVCdXR0b25DbGljayk7XHJcbiAgfVxyXG5cclxuICBjbGljayhtZXRhVGFnczogU2hhcmVNZXRhVGFncyk6IFdpbmRvdyB8IG51bGwgfCB2b2lkIHtcclxuICAgIC8vIEFkZCB0aGUgVVJMIHRvIG1lc3NhZ2UgYm9keVxyXG4gICAgbWV0YVRhZ3MuZGVzY3JpcHRpb24gKz0gYFxcclxcbiR7dGhpcy5fdXJsKCl9YDtcclxuICAgIGNvbnN0IHNlcmlhbGl6ZWRNZXRhVGFncyA9IHRoaXMuX3NlcmlhbGl6ZU1ldGFUYWdzKG1ldGFUYWdzKTtcclxuICAgIHJldHVybiB0aGlzLl9vcGVuKHNlcmlhbGl6ZWRNZXRhVGFncyk7XHJcbiAgfVxyXG59XHJcbiJdfQ==