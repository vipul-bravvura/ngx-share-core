/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { ShareButtonBase } from './base';
export class EmailButton extends ShareButtonBase {
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
            title: 'subject',
            description: 'body'
        };
    }
    /**
     * @return {?}
     */
    get desktop() {
        return `mailto:?`;
    }
    /**
     * @param {?} metaTags
     * @return {?}
     */
    click(metaTags) {
        // Add URL to message body
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZW1haWwuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Abmd4LXNoYXJlL2NvcmUvIiwic291cmNlcyI6WyJsaWIvYnV0dG9ucy9lbWFpbC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBRUEsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLFFBQVEsQ0FBQztBQUd6QyxNQUFNLE9BQU8sV0FBWSxTQUFRLGVBQWU7Ozs7Ozs7Ozs7SUFXOUMsWUFBc0IsTUFBb0IsRUFDcEIsSUFBa0IsRUFDbEIsS0FBaUIsRUFDakIsU0FBbUIsRUFDbkIsU0FBbUIsRUFDbkIsV0FBbUIsRUFDbkIsbUJBQStDO1FBQ25FLEtBQUssQ0FBQyxNQUFNLEVBQUUsSUFBSSxFQUFFLEtBQUssRUFBRSxTQUFTLEVBQUUsU0FBUyxFQUFFLFdBQVcsRUFBRSxtQkFBbUIsQ0FBQyxDQUFDO1FBUC9ELFdBQU0sR0FBTixNQUFNLENBQWM7UUFDcEIsU0FBSSxHQUFKLElBQUksQ0FBYztRQUNsQixVQUFLLEdBQUwsS0FBSyxDQUFZO1FBQ2pCLGNBQVMsR0FBVCxTQUFTLENBQVU7UUFDbkIsY0FBUyxHQUFULFNBQVMsQ0FBVTtRQUNuQixnQkFBVyxHQUFYLFdBQVcsQ0FBUTtRQUNuQix3QkFBbUIsR0FBbkIsbUJBQW1CLENBQTRCO1FBZjNELHVCQUFrQixHQUFrQjtZQUM1QyxLQUFLLEVBQUUsU0FBUztZQUNoQixXQUFXLEVBQUUsTUFBTTtTQUNwQixDQUFDO0lBY0YsQ0FBQzs7OztJQVpELElBQUksT0FBTztRQUNULE9BQU8sVUFBVSxDQUFDO0lBQ3BCLENBQUM7Ozs7O0lBWUQsS0FBSyxDQUFDLFFBQXVCO1FBQzNCLDBCQUEwQjtRQUMxQixRQUFRLENBQUMsV0FBVyxJQUFJLE9BQU8sSUFBSSxDQUFDLElBQUksRUFBRSxFQUFFLENBQUM7O2NBQ3ZDLGtCQUFrQixHQUFHLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxRQUFRLENBQUM7UUFDNUQsT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDLGtCQUFrQixDQUFDLENBQUM7SUFDeEMsQ0FBQztDQUNGOzs7Ozs7SUF6QkMseUNBR0U7Ozs7O0lBTVUsNkJBQThCOzs7OztJQUM5QiwyQkFBNEI7Ozs7O0lBQzVCLDRCQUEyQjs7Ozs7SUFDM0IsZ0NBQTZCOzs7OztJQUM3QixnQ0FBNkI7Ozs7O0lBQzdCLGtDQUE2Qjs7Ozs7SUFDN0IsMENBQXlEIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgUGxhdGZvcm0gfSBmcm9tICdAYW5ndWxhci9jZGsvcGxhdGZvcm0nO1xyXG5pbXBvcnQgeyBIdHRwQ2xpZW50IH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uL2h0dHAnO1xyXG5pbXBvcnQgeyBTaGFyZUJ1dHRvbkJhc2UgfSBmcm9tICcuL2Jhc2UnO1xyXG5pbXBvcnQgeyBJU2hhcmVCdXR0b24sIFNoYXJlTWV0YVRhZ3MgfSBmcm9tICcuLi9zaGFyZS5tb2RlbHMnO1xyXG5cclxuZXhwb3J0IGNsYXNzIEVtYWlsQnV0dG9uIGV4dGVuZHMgU2hhcmVCdXR0b25CYXNlIHtcclxuXHJcbiAgcHJvdGVjdGVkIF9zdXBwb3J0ZWRNZXRhVGFnczogU2hhcmVNZXRhVGFncyA9IHtcclxuICAgIHRpdGxlOiAnc3ViamVjdCcsXHJcbiAgICBkZXNjcmlwdGlvbjogJ2JvZHknXHJcbiAgfTtcclxuXHJcbiAgZ2V0IGRlc2t0b3AoKTogc3RyaW5nIHtcclxuICAgIHJldHVybiBgbWFpbHRvOj9gO1xyXG4gIH1cclxuXHJcbiAgY29uc3RydWN0b3IocHJvdGVjdGVkIF9wcm9wczogSVNoYXJlQnV0dG9uLFxyXG4gICAgICAgICAgICAgIHByb3RlY3RlZCBfdXJsOiAoKSA9PiBzdHJpbmcsXHJcbiAgICAgICAgICAgICAgcHJvdGVjdGVkIF9odHRwOiBIdHRwQ2xpZW50LFxyXG4gICAgICAgICAgICAgIHByb3RlY3RlZCBfcGxhdGZvcm06IFBsYXRmb3JtLFxyXG4gICAgICAgICAgICAgIHByb3RlY3RlZCBfZG9jdW1lbnQ6IERvY3VtZW50LFxyXG4gICAgICAgICAgICAgIHByb3RlY3RlZCBfd2luZG93U2l6ZTogc3RyaW5nLFxyXG4gICAgICAgICAgICAgIHByb3RlY3RlZCBfZGlzYWJsZUJ1dHRvbkNsaWNrOiAoZGlzYWJsZTogYm9vbGVhbikgPT4gdm9pZCkge1xyXG4gICAgc3VwZXIoX3Byb3BzLCBfdXJsLCBfaHR0cCwgX3BsYXRmb3JtLCBfZG9jdW1lbnQsIF93aW5kb3dTaXplLCBfZGlzYWJsZUJ1dHRvbkNsaWNrKTtcclxuICB9XHJcblxyXG4gIGNsaWNrKG1ldGFUYWdzOiBTaGFyZU1ldGFUYWdzKTogV2luZG93IHwgbnVsbCB8IHZvaWQge1xyXG4gICAgLy8gQWRkIFVSTCB0byBtZXNzYWdlIGJvZHlcclxuICAgIG1ldGFUYWdzLmRlc2NyaXB0aW9uICs9IGBcXHJcXG4ke3RoaXMuX3VybCgpfWA7XHJcbiAgICBjb25zdCBzZXJpYWxpemVkTWV0YVRhZ3MgPSB0aGlzLl9zZXJpYWxpemVNZXRhVGFncyhtZXRhVGFncyk7XHJcbiAgICByZXR1cm4gdGhpcy5fb3BlbihzZXJpYWxpemVkTWV0YVRhZ3MpO1xyXG4gIH1cclxufVxyXG4iXX0=