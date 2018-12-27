/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { ShareButtonBase } from './base';
export class MessengerButton extends ShareButtonBase {
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
            url: 'link'
        };
    }
    /**
     * @return {?}
     */
    get android() {
        return 'fb-messenger://share/?';
    }
    /**
     * @return {?}
     */
    get ios() {
        return 'fb-messenger://share/?';
    }
}
if (false) {
    /**
     * @type {?}
     * @protected
     */
    MessengerButton.prototype._supportedMetaTags;
    /**
     * @type {?}
     * @protected
     */
    MessengerButton.prototype._props;
    /**
     * @type {?}
     * @protected
     */
    MessengerButton.prototype._url;
    /**
     * @type {?}
     * @protected
     */
    MessengerButton.prototype._http;
    /**
     * @type {?}
     * @protected
     */
    MessengerButton.prototype._platform;
    /**
     * @type {?}
     * @protected
     */
    MessengerButton.prototype._document;
    /**
     * @type {?}
     * @protected
     */
    MessengerButton.prototype._windowSize;
    /**
     * @type {?}
     * @protected
     */
    MessengerButton.prototype._disableButtonClick;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWVzc2VuZ2VyLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQG5neC1zaGFyZS9jb3JlLyIsInNvdXJjZXMiOlsibGliL2J1dHRvbnMvbWVzc2VuZ2VyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFFQSxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sUUFBUSxDQUFDO0FBR3pDLE1BQU0sT0FBTyxlQUFnQixTQUFRLGVBQWU7Ozs7Ozs7Ozs7SUFjbEQsWUFBc0IsTUFBb0IsRUFDcEIsSUFBa0IsRUFDbEIsS0FBaUIsRUFDakIsU0FBbUIsRUFDbkIsU0FBbUIsRUFDbkIsV0FBbUIsRUFDbkIsbUJBQStDO1FBQ25FLEtBQUssQ0FBQyxNQUFNLEVBQUUsSUFBSSxFQUFFLEtBQUssRUFBRSxTQUFTLEVBQUUsU0FBUyxFQUFFLFdBQVcsRUFBRSxtQkFBbUIsQ0FBQyxDQUFDO1FBUC9ELFdBQU0sR0FBTixNQUFNLENBQWM7UUFDcEIsU0FBSSxHQUFKLElBQUksQ0FBYztRQUNsQixVQUFLLEdBQUwsS0FBSyxDQUFZO1FBQ2pCLGNBQVMsR0FBVCxTQUFTLENBQVU7UUFDbkIsY0FBUyxHQUFULFNBQVMsQ0FBVTtRQUNuQixnQkFBVyxHQUFYLFdBQVcsQ0FBUTtRQUNuQix3QkFBbUIsR0FBbkIsbUJBQW1CLENBQTRCO1FBbEIzRCx1QkFBa0IsR0FBa0I7WUFDNUMsR0FBRyxFQUFFLE1BQU07U0FDWixDQUFDO0lBa0JGLENBQUM7Ozs7SUFoQkQsSUFBSSxPQUFPO1FBQ1QsT0FBTyx3QkFBd0IsQ0FBQztJQUNsQyxDQUFDOzs7O0lBRUQsSUFBSSxHQUFHO1FBQ0wsT0FBTyx3QkFBd0IsQ0FBQztJQUNsQyxDQUFDO0NBV0Y7Ozs7OztJQXJCQyw2Q0FFRTs7Ozs7SUFVVSxpQ0FBOEI7Ozs7O0lBQzlCLCtCQUE0Qjs7Ozs7SUFDNUIsZ0NBQTJCOzs7OztJQUMzQixvQ0FBNkI7Ozs7O0lBQzdCLG9DQUE2Qjs7Ozs7SUFDN0Isc0NBQTZCOzs7OztJQUM3Qiw4Q0FBeUQiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBQbGF0Zm9ybSB9IGZyb20gJ0Bhbmd1bGFyL2Nkay9wbGF0Zm9ybSc7XHJcbmltcG9ydCB7IEh0dHBDbGllbnQgfSBmcm9tICdAYW5ndWxhci9jb21tb24vaHR0cCc7XHJcbmltcG9ydCB7IFNoYXJlQnV0dG9uQmFzZSB9IGZyb20gJy4vYmFzZSc7XHJcbmltcG9ydCB7IElTaGFyZUJ1dHRvbiwgU2hhcmVNZXRhVGFncyB9IGZyb20gJy4uL3NoYXJlLm1vZGVscyc7XHJcblxyXG5leHBvcnQgY2xhc3MgTWVzc2VuZ2VyQnV0dG9uIGV4dGVuZHMgU2hhcmVCdXR0b25CYXNlIHtcclxuXHJcbiAgcHJvdGVjdGVkIF9zdXBwb3J0ZWRNZXRhVGFnczogU2hhcmVNZXRhVGFncyA9IHtcclxuICAgIHVybDogJ2xpbmsnXHJcbiAgfTtcclxuXHJcbiAgZ2V0IGFuZHJvaWQoKTogc3RyaW5nIHtcclxuICAgIHJldHVybiAnZmItbWVzc2VuZ2VyOi8vc2hhcmUvPyc7XHJcbiAgfVxyXG5cclxuICBnZXQgaW9zKCk6IHN0cmluZyB7XHJcbiAgICByZXR1cm4gJ2ZiLW1lc3NlbmdlcjovL3NoYXJlLz8nO1xyXG4gIH1cclxuXHJcbiAgY29uc3RydWN0b3IocHJvdGVjdGVkIF9wcm9wczogSVNoYXJlQnV0dG9uLFxyXG4gICAgICAgICAgICAgIHByb3RlY3RlZCBfdXJsOiAoKSA9PiBzdHJpbmcsXHJcbiAgICAgICAgICAgICAgcHJvdGVjdGVkIF9odHRwOiBIdHRwQ2xpZW50LFxyXG4gICAgICAgICAgICAgIHByb3RlY3RlZCBfcGxhdGZvcm06IFBsYXRmb3JtLFxyXG4gICAgICAgICAgICAgIHByb3RlY3RlZCBfZG9jdW1lbnQ6IERvY3VtZW50LFxyXG4gICAgICAgICAgICAgIHByb3RlY3RlZCBfd2luZG93U2l6ZTogc3RyaW5nLFxyXG4gICAgICAgICAgICAgIHByb3RlY3RlZCBfZGlzYWJsZUJ1dHRvbkNsaWNrOiAoZGlzYWJsZTogYm9vbGVhbikgPT4gdm9pZCkge1xyXG4gICAgc3VwZXIoX3Byb3BzLCBfdXJsLCBfaHR0cCwgX3BsYXRmb3JtLCBfZG9jdW1lbnQsIF93aW5kb3dTaXplLCBfZGlzYWJsZUJ1dHRvbkNsaWNrKTtcclxuICB9XHJcbn1cclxuIl19