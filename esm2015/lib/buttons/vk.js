/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { ShareButtonBase } from './base';
export class VkButton extends ShareButtonBase {
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
        return `http://vk.com/share.php?`;
    }
}
if (false) {
    /**
     * @type {?}
     * @protected
     */
    VkButton.prototype._supportedMetaTags;
    /**
     * @type {?}
     * @protected
     */
    VkButton.prototype._props;
    /**
     * @type {?}
     * @protected
     */
    VkButton.prototype._url;
    /**
     * @type {?}
     * @protected
     */
    VkButton.prototype._http;
    /**
     * @type {?}
     * @protected
     */
    VkButton.prototype._platform;
    /**
     * @type {?}
     * @protected
     */
    VkButton.prototype._document;
    /**
     * @type {?}
     * @protected
     */
    VkButton.prototype._windowSize;
    /**
     * @type {?}
     * @protected
     */
    VkButton.prototype._disableButtonClick;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmsuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Abmd4LXNoYXJlL2NvcmUvIiwic291cmNlcyI6WyJsaWIvYnV0dG9ucy92ay50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBRUEsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLFFBQVEsQ0FBQztBQUd6QyxNQUFNLE9BQU8sUUFBUyxTQUFRLGVBQWU7Ozs7Ozs7Ozs7SUFVM0MsWUFBc0IsTUFBb0IsRUFDcEIsSUFBa0IsRUFDbEIsS0FBaUIsRUFDakIsU0FBbUIsRUFDbkIsU0FBbUIsRUFDbkIsV0FBbUIsRUFDbkIsbUJBQStDO1FBQ25FLEtBQUssQ0FBQyxNQUFNLEVBQUUsSUFBSSxFQUFFLEtBQUssRUFBRSxTQUFTLEVBQUUsU0FBUyxFQUFFLFdBQVcsRUFBRSxtQkFBbUIsQ0FBQyxDQUFDO1FBUC9ELFdBQU0sR0FBTixNQUFNLENBQWM7UUFDcEIsU0FBSSxHQUFKLElBQUksQ0FBYztRQUNsQixVQUFLLEdBQUwsS0FBSyxDQUFZO1FBQ2pCLGNBQVMsR0FBVCxTQUFTLENBQVU7UUFDbkIsY0FBUyxHQUFULFNBQVMsQ0FBVTtRQUNuQixnQkFBVyxHQUFYLFdBQVcsQ0FBUTtRQUNuQix3QkFBbUIsR0FBbkIsbUJBQW1CLENBQTRCO1FBZDNELHVCQUFrQixHQUFrQjtZQUM1QyxHQUFHLEVBQUUsS0FBSztTQUNYLENBQUM7SUFjRixDQUFDOzs7O0lBWkQsSUFBSSxPQUFPO1FBQ1QsT0FBTywwQkFBMEIsQ0FBQztJQUNwQyxDQUFDO0NBV0Y7Ozs7OztJQWpCQyxzQ0FFRTs7Ozs7SUFNVSwwQkFBOEI7Ozs7O0lBQzlCLHdCQUE0Qjs7Ozs7SUFDNUIseUJBQTJCOzs7OztJQUMzQiw2QkFBNkI7Ozs7O0lBQzdCLDZCQUE2Qjs7Ozs7SUFDN0IsK0JBQTZCOzs7OztJQUM3Qix1Q0FBeUQiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBQbGF0Zm9ybSB9IGZyb20gJ0Bhbmd1bGFyL2Nkay9wbGF0Zm9ybSc7XHJcbmltcG9ydCB7IEh0dHBDbGllbnQgfSBmcm9tICdAYW5ndWxhci9jb21tb24vaHR0cCc7XHJcbmltcG9ydCB7IFNoYXJlQnV0dG9uQmFzZSB9IGZyb20gJy4vYmFzZSc7XHJcbmltcG9ydCB7IElTaGFyZUJ1dHRvbiwgU2hhcmVNZXRhVGFncyB9IGZyb20gJy4uL3NoYXJlLm1vZGVscyc7XHJcblxyXG5leHBvcnQgY2xhc3MgVmtCdXR0b24gZXh0ZW5kcyBTaGFyZUJ1dHRvbkJhc2Uge1xyXG5cclxuICBwcm90ZWN0ZWQgX3N1cHBvcnRlZE1ldGFUYWdzOiBTaGFyZU1ldGFUYWdzID0ge1xyXG4gICAgdXJsOiAndXJsJ1xyXG4gIH07XHJcblxyXG4gIGdldCBkZXNrdG9wKCk6IHN0cmluZyB7XHJcbiAgICByZXR1cm4gYGh0dHA6Ly92ay5jb20vc2hhcmUucGhwP2A7XHJcbiAgfVxyXG5cclxuICBjb25zdHJ1Y3Rvcihwcm90ZWN0ZWQgX3Byb3BzOiBJU2hhcmVCdXR0b24sXHJcbiAgICAgICAgICAgICAgcHJvdGVjdGVkIF91cmw6ICgpID0+IHN0cmluZyxcclxuICAgICAgICAgICAgICBwcm90ZWN0ZWQgX2h0dHA6IEh0dHBDbGllbnQsXHJcbiAgICAgICAgICAgICAgcHJvdGVjdGVkIF9wbGF0Zm9ybTogUGxhdGZvcm0sXHJcbiAgICAgICAgICAgICAgcHJvdGVjdGVkIF9kb2N1bWVudDogRG9jdW1lbnQsXHJcbiAgICAgICAgICAgICAgcHJvdGVjdGVkIF93aW5kb3dTaXplOiBzdHJpbmcsXHJcbiAgICAgICAgICAgICAgcHJvdGVjdGVkIF9kaXNhYmxlQnV0dG9uQ2xpY2s6IChkaXNhYmxlOiBib29sZWFuKSA9PiB2b2lkKSB7XHJcbiAgICBzdXBlcihfcHJvcHMsIF91cmwsIF9odHRwLCBfcGxhdGZvcm0sIF9kb2N1bWVudCwgX3dpbmRvd1NpemUsIF9kaXNhYmxlQnV0dG9uQ2xpY2spO1xyXG4gIH1cclxufVxyXG4iXX0=