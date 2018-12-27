/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { ShareButtonBase } from './base';
export class LinkedinButton extends ShareButtonBase {
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
            title: 'title',
            description: 'summary'
        };
    }
    /**
     * @return {?}
     */
    get desktop() {
        return `http://www.linkedin.com/shareArticle?`;
    }
}
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGlua2VkaW4uanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Abmd4LXNoYXJlL2NvcmUvIiwic291cmNlcyI6WyJsaWIvYnV0dG9ucy9saW5rZWRpbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBRUEsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLFFBQVEsQ0FBQztBQUd6QyxNQUFNLE9BQU8sY0FBZSxTQUFRLGVBQWU7Ozs7Ozs7Ozs7SUFZakQsWUFBc0IsTUFBb0IsRUFDcEIsSUFBa0IsRUFDbEIsS0FBaUIsRUFDakIsU0FBbUIsRUFDbkIsU0FBbUIsRUFDbkIsV0FBbUIsRUFDbkIsbUJBQStDO1FBQ25FLEtBQUssQ0FBQyxNQUFNLEVBQUUsSUFBSSxFQUFFLEtBQUssRUFBRSxTQUFTLEVBQUUsU0FBUyxFQUFFLFdBQVcsRUFBRSxtQkFBbUIsQ0FBQyxDQUFDO1FBUC9ELFdBQU0sR0FBTixNQUFNLENBQWM7UUFDcEIsU0FBSSxHQUFKLElBQUksQ0FBYztRQUNsQixVQUFLLEdBQUwsS0FBSyxDQUFZO1FBQ2pCLGNBQVMsR0FBVCxTQUFTLENBQVU7UUFDbkIsY0FBUyxHQUFULFNBQVMsQ0FBVTtRQUNuQixnQkFBVyxHQUFYLFdBQVcsQ0FBUTtRQUNuQix3QkFBbUIsR0FBbkIsbUJBQW1CLENBQTRCO1FBaEIzRCx1QkFBa0IsR0FBa0I7WUFDNUMsR0FBRyxFQUFFLEtBQUs7WUFDVixLQUFLLEVBQUUsT0FBTztZQUNkLFdBQVcsRUFBRSxTQUFTO1NBQ3ZCLENBQUM7SUFjRixDQUFDOzs7O0lBWkQsSUFBSSxPQUFPO1FBQ1QsT0FBTyx1Q0FBdUMsQ0FBQztJQUNqRCxDQUFDO0NBV0Y7Ozs7OztJQW5CQyw0Q0FJRTs7Ozs7SUFNVSxnQ0FBOEI7Ozs7O0lBQzlCLDhCQUE0Qjs7Ozs7SUFDNUIsK0JBQTJCOzs7OztJQUMzQixtQ0FBNkI7Ozs7O0lBQzdCLG1DQUE2Qjs7Ozs7SUFDN0IscUNBQTZCOzs7OztJQUM3Qiw2Q0FBeUQiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBQbGF0Zm9ybSB9IGZyb20gJ0Bhbmd1bGFyL2Nkay9wbGF0Zm9ybSc7XHJcbmltcG9ydCB7IEh0dHBDbGllbnQgfSBmcm9tICdAYW5ndWxhci9jb21tb24vaHR0cCc7XHJcbmltcG9ydCB7IFNoYXJlQnV0dG9uQmFzZSB9IGZyb20gJy4vYmFzZSc7XHJcbmltcG9ydCB7IElTaGFyZUJ1dHRvbiwgU2hhcmVNZXRhVGFncyB9IGZyb20gJy4uL3NoYXJlLm1vZGVscyc7XHJcblxyXG5leHBvcnQgY2xhc3MgTGlua2VkaW5CdXR0b24gZXh0ZW5kcyBTaGFyZUJ1dHRvbkJhc2Uge1xyXG5cclxuICBwcm90ZWN0ZWQgX3N1cHBvcnRlZE1ldGFUYWdzOiBTaGFyZU1ldGFUYWdzID0ge1xyXG4gICAgdXJsOiAndXJsJyxcclxuICAgIHRpdGxlOiAndGl0bGUnLFxyXG4gICAgZGVzY3JpcHRpb246ICdzdW1tYXJ5J1xyXG4gIH07XHJcblxyXG4gIGdldCBkZXNrdG9wKCk6IHN0cmluZyB7XHJcbiAgICByZXR1cm4gYGh0dHA6Ly93d3cubGlua2VkaW4uY29tL3NoYXJlQXJ0aWNsZT9gO1xyXG4gIH1cclxuXHJcbiAgY29uc3RydWN0b3IocHJvdGVjdGVkIF9wcm9wczogSVNoYXJlQnV0dG9uLFxyXG4gICAgICAgICAgICAgIHByb3RlY3RlZCBfdXJsOiAoKSA9PiBzdHJpbmcsXHJcbiAgICAgICAgICAgICAgcHJvdGVjdGVkIF9odHRwOiBIdHRwQ2xpZW50LFxyXG4gICAgICAgICAgICAgIHByb3RlY3RlZCBfcGxhdGZvcm06IFBsYXRmb3JtLFxyXG4gICAgICAgICAgICAgIHByb3RlY3RlZCBfZG9jdW1lbnQ6IERvY3VtZW50LFxyXG4gICAgICAgICAgICAgIHByb3RlY3RlZCBfd2luZG93U2l6ZTogc3RyaW5nLFxyXG4gICAgICAgICAgICAgIHByb3RlY3RlZCBfZGlzYWJsZUJ1dHRvbkNsaWNrOiAoZGlzYWJsZTogYm9vbGVhbikgPT4gdm9pZCkge1xyXG4gICAgc3VwZXIoX3Byb3BzLCBfdXJsLCBfaHR0cCwgX3BsYXRmb3JtLCBfZG9jdW1lbnQsIF93aW5kb3dTaXplLCBfZGlzYWJsZUJ1dHRvbkNsaWNrKTtcclxuICB9XHJcbn1cclxuIl19