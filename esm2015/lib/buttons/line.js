/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { ShareButtonBase } from './base';
export class LineButton extends ShareButtonBase {
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
            url: 'url'
        };
    }
    /**
     * @return {?}
     */
    get desktop() {
        return `https://social-plugins.line.me/lineit/share?`;
    }
}
if (false) {
    /**
     * @type {?}
     * @protected
     */
    LineButton.prototype._supportedMetaTags;
    /**
     * @type {?}
     * @protected
     */
    LineButton.prototype._props;
    /**
     * @type {?}
     * @protected
     */
    LineButton.prototype._url;
    /**
     * @type {?}
     * @protected
     */
    LineButton.prototype._http;
    /**
     * @type {?}
     * @protected
     */
    LineButton.prototype._platform;
    /**
     * @type {?}
     * @protected
     */
    LineButton.prototype._document;
    /**
     * @type {?}
     * @protected
     */
    LineButton.prototype._windowSize;
    /**
     * @type {?}
     * @protected
     */
    LineButton.prototype._disableButtonClick;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGluZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BuZ3gtc2hhcmUvY29yZS8iLCJzb3VyY2VzIjpbImxpYi9idXR0b25zL2xpbmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUVBLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSxRQUFRLENBQUM7QUFHekMsTUFBTSxPQUFPLFVBQVcsU0FBUSxlQUFlOzs7Ozs7Ozs7O0lBVTdDLFlBQXNCLE1BQW9CLEVBQ3BCLElBQWtCLEVBQ2xCLEtBQWlCLEVBQ2pCLFNBQW1CLEVBQ25CLFNBQW1CLEVBQ25CLFdBQW1CLEVBQ25CLG1CQUErQztRQUNuRSxLQUFLLENBQUMsTUFBTSxFQUFFLElBQUksRUFBRSxLQUFLLEVBQUUsU0FBUyxFQUFFLFNBQVMsRUFBRSxXQUFXLEVBQUUsbUJBQW1CLENBQUMsQ0FBQztRQVAvRCxXQUFNLEdBQU4sTUFBTSxDQUFjO1FBQ3BCLFNBQUksR0FBSixJQUFJLENBQWM7UUFDbEIsVUFBSyxHQUFMLEtBQUssQ0FBWTtRQUNqQixjQUFTLEdBQVQsU0FBUyxDQUFVO1FBQ25CLGNBQVMsR0FBVCxTQUFTLENBQVU7UUFDbkIsZ0JBQVcsR0FBWCxXQUFXLENBQVE7UUFDbkIsd0JBQW1CLEdBQW5CLG1CQUFtQixDQUE0QjtRQWQzRCx1QkFBa0IsR0FBa0I7WUFDNUMsR0FBRyxFQUFFLEtBQUs7U0FDWCxDQUFDO0lBY0YsQ0FBQzs7OztJQVpELElBQUksT0FBTztRQUNULE9BQU8sOENBQThDLENBQUM7SUFDeEQsQ0FBQztDQVdGOzs7Ozs7SUFqQkMsd0NBRUU7Ozs7O0lBTVUsNEJBQThCOzs7OztJQUM5QiwwQkFBNEI7Ozs7O0lBQzVCLDJCQUEyQjs7Ozs7SUFDM0IsK0JBQTZCOzs7OztJQUM3QiwrQkFBNkI7Ozs7O0lBQzdCLGlDQUE2Qjs7Ozs7SUFDN0IseUNBQXlEIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSHR0cENsaWVudCB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbi9odHRwJztcclxuaW1wb3J0IHsgUGxhdGZvcm0gfSBmcm9tICdAYW5ndWxhci9jZGsvcGxhdGZvcm0nO1xyXG5pbXBvcnQgeyBTaGFyZUJ1dHRvbkJhc2UgfSBmcm9tICcuL2Jhc2UnO1xyXG5pbXBvcnQgeyBJU2hhcmVCdXR0b24sIFNoYXJlTWV0YVRhZ3MgfSBmcm9tICcuLi9zaGFyZS5tb2RlbHMnO1xyXG5cclxuZXhwb3J0IGNsYXNzIExpbmVCdXR0b24gZXh0ZW5kcyBTaGFyZUJ1dHRvbkJhc2Uge1xyXG5cclxuICBwcm90ZWN0ZWQgX3N1cHBvcnRlZE1ldGFUYWdzOiBTaGFyZU1ldGFUYWdzID0ge1xyXG4gICAgdXJsOiAndXJsJ1xyXG4gIH07XHJcblxyXG4gIGdldCBkZXNrdG9wKCk6IHN0cmluZyB7XHJcbiAgICByZXR1cm4gYGh0dHBzOi8vc29jaWFsLXBsdWdpbnMubGluZS5tZS9saW5laXQvc2hhcmU/YDtcclxuICB9XHJcblxyXG4gIGNvbnN0cnVjdG9yKHByb3RlY3RlZCBfcHJvcHM6IElTaGFyZUJ1dHRvbixcclxuICAgICAgICAgICAgICBwcm90ZWN0ZWQgX3VybDogKCkgPT4gc3RyaW5nLFxyXG4gICAgICAgICAgICAgIHByb3RlY3RlZCBfaHR0cDogSHR0cENsaWVudCxcclxuICAgICAgICAgICAgICBwcm90ZWN0ZWQgX3BsYXRmb3JtOiBQbGF0Zm9ybSxcclxuICAgICAgICAgICAgICBwcm90ZWN0ZWQgX2RvY3VtZW50OiBEb2N1bWVudCxcclxuICAgICAgICAgICAgICBwcm90ZWN0ZWQgX3dpbmRvd1NpemU6IHN0cmluZyxcclxuICAgICAgICAgICAgICBwcm90ZWN0ZWQgX2Rpc2FibGVCdXR0b25DbGljazogKGRpc2FibGU6IGJvb2xlYW4pID0+IHZvaWQpIHtcclxuICAgIHN1cGVyKF9wcm9wcywgX3VybCwgX2h0dHAsIF9wbGF0Zm9ybSwgX2RvY3VtZW50LCBfd2luZG93U2l6ZSwgX2Rpc2FibGVCdXR0b25DbGljayk7XHJcbiAgfVxyXG59XHJcbiJdfQ==