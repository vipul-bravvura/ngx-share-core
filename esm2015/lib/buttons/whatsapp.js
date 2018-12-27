/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { ShareButtonBase } from './base';
export class WhatsappButton extends ShareButtonBase {
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
        this._metaTagsKeys = {
            description: 'text'
        };
    }
    /**
     * @return {?}
     */
    get desktop() {
        return `https://web.whatsapp.com/send?`;
    }
    /**
     * @return {?}
     */
    get android() {
        return `whatsapp://send?`;
    }
    /**
     * @return {?}
     */
    get ios() {
        return `whatsapp://send?`;
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid2hhdHNhcHAuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Abmd4LXNoYXJlL2NvcmUvIiwic291cmNlcyI6WyJsaWIvYnV0dG9ucy93aGF0c2FwcC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBRUEsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLFFBQVEsQ0FBQztBQUd6QyxNQUFNLE9BQU8sY0FBZSxTQUFRLGVBQWU7Ozs7Ozs7Ozs7SUFrQmpELFlBQXNCLE1BQW9CLEVBQ3BCLElBQWtCLEVBQ2xCLEtBQWlCLEVBQ2pCLFNBQW1CLEVBQ25CLFNBQW1CLEVBQ25CLFdBQW1CLEVBQ25CLG1CQUErQztRQUNuRSxLQUFLLENBQUMsTUFBTSxFQUFFLElBQUksRUFBRSxLQUFLLEVBQUUsU0FBUyxFQUFFLFNBQVMsRUFBRSxXQUFXLEVBQUUsbUJBQW1CLENBQUMsQ0FBQztRQVAvRCxXQUFNLEdBQU4sTUFBTSxDQUFjO1FBQ3BCLFNBQUksR0FBSixJQUFJLENBQWM7UUFDbEIsVUFBSyxHQUFMLEtBQUssQ0FBWTtRQUNqQixjQUFTLEdBQVQsU0FBUyxDQUFVO1FBQ25CLGNBQVMsR0FBVCxTQUFTLENBQVU7UUFDbkIsZ0JBQVcsR0FBWCxXQUFXLENBQVE7UUFDbkIsd0JBQW1CLEdBQW5CLG1CQUFtQixDQUE0QjtRQXRCM0Qsa0JBQWEsR0FBa0I7WUFDdkMsV0FBVyxFQUFFLE1BQU07U0FDcEIsQ0FBQztJQXNCRixDQUFDOzs7O0lBcEJELElBQUksT0FBTztRQUNULE9BQU8sZ0NBQWdDLENBQUM7SUFDMUMsQ0FBQzs7OztJQUVELElBQUksT0FBTztRQUNULE9BQU8sa0JBQWtCLENBQUM7SUFDNUIsQ0FBQzs7OztJQUVELElBQUksR0FBRztRQUNMLE9BQU8sa0JBQWtCLENBQUM7SUFDNUIsQ0FBQzs7Ozs7SUFZRCxLQUFLLENBQUMsUUFBdUI7UUFDM0IsOEJBQThCO1FBQzlCLFFBQVEsQ0FBQyxXQUFXLElBQUksT0FBTyxJQUFJLENBQUMsSUFBSSxFQUFFLEVBQUUsQ0FBQzs7Y0FDdkMsa0JBQWtCLEdBQUcsSUFBSSxDQUFDLGtCQUFrQixDQUFDLFFBQVEsQ0FBQztRQUM1RCxPQUFPLElBQUksQ0FBQyxLQUFLLENBQUMsa0JBQWtCLENBQUMsQ0FBQztJQUN4QyxDQUFDO0NBQ0Y7Ozs7OztJQWhDQyx1Q0FFRTs7Ozs7SUFjVSxnQ0FBOEI7Ozs7O0lBQzlCLDhCQUE0Qjs7Ozs7SUFDNUIsK0JBQTJCOzs7OztJQUMzQixtQ0FBNkI7Ozs7O0lBQzdCLG1DQUE2Qjs7Ozs7SUFDN0IscUNBQTZCOzs7OztJQUM3Qiw2Q0FBeUQiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBQbGF0Zm9ybSB9IGZyb20gJ0Bhbmd1bGFyL2Nkay9wbGF0Zm9ybSc7XHJcbmltcG9ydCB7IEh0dHBDbGllbnQgfSBmcm9tICdAYW5ndWxhci9jb21tb24vaHR0cCc7XHJcbmltcG9ydCB7IFNoYXJlQnV0dG9uQmFzZSB9IGZyb20gJy4vYmFzZSc7XHJcbmltcG9ydCB7IElTaGFyZUJ1dHRvbiwgU2hhcmVNZXRhVGFncyB9IGZyb20gJy4uL3NoYXJlLm1vZGVscyc7XHJcblxyXG5leHBvcnQgY2xhc3MgV2hhdHNhcHBCdXR0b24gZXh0ZW5kcyBTaGFyZUJ1dHRvbkJhc2Uge1xyXG5cclxuICBwcm90ZWN0ZWQgX21ldGFUYWdzS2V5czogU2hhcmVNZXRhVGFncyA9IHtcclxuICAgIGRlc2NyaXB0aW9uOiAndGV4dCdcclxuICB9O1xyXG5cclxuICBnZXQgZGVza3RvcCgpOiBzdHJpbmcge1xyXG4gICAgcmV0dXJuIGBodHRwczovL3dlYi53aGF0c2FwcC5jb20vc2VuZD9gO1xyXG4gIH1cclxuXHJcbiAgZ2V0IGFuZHJvaWQoKTogc3RyaW5nIHtcclxuICAgIHJldHVybiBgd2hhdHNhcHA6Ly9zZW5kP2A7XHJcbiAgfVxyXG5cclxuICBnZXQgaW9zKCk6IHN0cmluZyB7XHJcbiAgICByZXR1cm4gYHdoYXRzYXBwOi8vc2VuZD9gO1xyXG4gIH1cclxuXHJcbiAgY29uc3RydWN0b3IocHJvdGVjdGVkIF9wcm9wczogSVNoYXJlQnV0dG9uLFxyXG4gICAgICAgICAgICAgIHByb3RlY3RlZCBfdXJsOiAoKSA9PiBzdHJpbmcsXHJcbiAgICAgICAgICAgICAgcHJvdGVjdGVkIF9odHRwOiBIdHRwQ2xpZW50LFxyXG4gICAgICAgICAgICAgIHByb3RlY3RlZCBfcGxhdGZvcm06IFBsYXRmb3JtLFxyXG4gICAgICAgICAgICAgIHByb3RlY3RlZCBfZG9jdW1lbnQ6IERvY3VtZW50LFxyXG4gICAgICAgICAgICAgIHByb3RlY3RlZCBfd2luZG93U2l6ZTogc3RyaW5nLFxyXG4gICAgICAgICAgICAgIHByb3RlY3RlZCBfZGlzYWJsZUJ1dHRvbkNsaWNrOiAoZGlzYWJsZTogYm9vbGVhbikgPT4gdm9pZCkge1xyXG4gICAgc3VwZXIoX3Byb3BzLCBfdXJsLCBfaHR0cCwgX3BsYXRmb3JtLCBfZG9jdW1lbnQsIF93aW5kb3dTaXplLCBfZGlzYWJsZUJ1dHRvbkNsaWNrKTtcclxuICB9XHJcblxyXG4gIGNsaWNrKG1ldGFUYWdzOiBTaGFyZU1ldGFUYWdzKTogV2luZG93IHwgbnVsbCB8IHZvaWQge1xyXG4gICAgLy8gQWRkIHRoZSBVUkwgdG8gbWVzc2FnZSBib2R5XHJcbiAgICBtZXRhVGFncy5kZXNjcmlwdGlvbiArPSBgXFxyXFxuJHt0aGlzLl91cmwoKX1gO1xyXG4gICAgY29uc3Qgc2VyaWFsaXplZE1ldGFUYWdzID0gdGhpcy5fc2VyaWFsaXplTWV0YVRhZ3MobWV0YVRhZ3MpO1xyXG4gICAgcmV0dXJuIHRoaXMuX29wZW4oc2VyaWFsaXplZE1ldGFUYWdzKTtcclxuICB9XHJcbn1cclxuIl19