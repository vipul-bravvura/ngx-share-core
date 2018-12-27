/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { ShareButtonBase } from './base';
export class RedditButton extends ShareButtonBase {
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
            title: 'title'
        };
    }
    /**
     * @return {?}
     */
    get desktop() {
        return `http://www.reddit.com/submit?`;
    }
}
if (false) {
    /**
     * @type {?}
     * @protected
     */
    RedditButton.prototype._supportedMetaTags;
    /**
     * @type {?}
     * @protected
     */
    RedditButton.prototype._props;
    /**
     * @type {?}
     * @protected
     */
    RedditButton.prototype._url;
    /**
     * @type {?}
     * @protected
     */
    RedditButton.prototype._http;
    /**
     * @type {?}
     * @protected
     */
    RedditButton.prototype._platform;
    /**
     * @type {?}
     * @protected
     */
    RedditButton.prototype._document;
    /**
     * @type {?}
     * @protected
     */
    RedditButton.prototype._windowSize;
    /**
     * @type {?}
     * @protected
     */
    RedditButton.prototype._disableButtonClick;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVkZGl0LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQG5neC1zaGFyZS9jb3JlLyIsInNvdXJjZXMiOlsibGliL2J1dHRvbnMvcmVkZGl0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFFQSxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sUUFBUSxDQUFDO0FBR3pDLE1BQU0sT0FBTyxZQUFhLFNBQVEsZUFBZTs7Ozs7Ozs7OztJQVcvQyxZQUFzQixNQUFvQixFQUNwQixJQUFrQixFQUNsQixLQUFpQixFQUNqQixTQUFtQixFQUNuQixTQUFtQixFQUNuQixXQUFtQixFQUNuQixtQkFBK0M7UUFDbkUsS0FBSyxDQUFDLE1BQU0sRUFBRSxJQUFJLEVBQUUsS0FBSyxFQUFFLFNBQVMsRUFBRSxTQUFTLEVBQUUsV0FBVyxFQUFFLG1CQUFtQixDQUFDLENBQUM7UUFQL0QsV0FBTSxHQUFOLE1BQU0sQ0FBYztRQUNwQixTQUFJLEdBQUosSUFBSSxDQUFjO1FBQ2xCLFVBQUssR0FBTCxLQUFLLENBQVk7UUFDakIsY0FBUyxHQUFULFNBQVMsQ0FBVTtRQUNuQixjQUFTLEdBQVQsU0FBUyxDQUFVO1FBQ25CLGdCQUFXLEdBQVgsV0FBVyxDQUFRO1FBQ25CLHdCQUFtQixHQUFuQixtQkFBbUIsQ0FBNEI7UUFmM0QsdUJBQWtCLEdBQWtCO1lBQzVDLEdBQUcsRUFBRSxLQUFLO1lBQ1YsS0FBSyxFQUFFLE9BQU87U0FDZixDQUFDO0lBY0YsQ0FBQzs7OztJQVpELElBQUksT0FBTztRQUNULE9BQU8sK0JBQStCLENBQUM7SUFDekMsQ0FBQztDQVdGOzs7Ozs7SUFsQkMsMENBR0U7Ozs7O0lBTVUsOEJBQThCOzs7OztJQUM5Qiw0QkFBNEI7Ozs7O0lBQzVCLDZCQUEyQjs7Ozs7SUFDM0IsaUNBQTZCOzs7OztJQUM3QixpQ0FBNkI7Ozs7O0lBQzdCLG1DQUE2Qjs7Ozs7SUFDN0IsMkNBQXlEIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgUGxhdGZvcm0gfSBmcm9tICdAYW5ndWxhci9jZGsvcGxhdGZvcm0nO1xyXG5pbXBvcnQgeyBIdHRwQ2xpZW50IH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uL2h0dHAnO1xyXG5pbXBvcnQgeyBTaGFyZUJ1dHRvbkJhc2UgfSBmcm9tICcuL2Jhc2UnO1xyXG5pbXBvcnQgeyBJU2hhcmVCdXR0b24sIFNoYXJlTWV0YVRhZ3MgfSBmcm9tICcuLi9zaGFyZS5tb2RlbHMnO1xyXG5cclxuZXhwb3J0IGNsYXNzIFJlZGRpdEJ1dHRvbiBleHRlbmRzIFNoYXJlQnV0dG9uQmFzZSB7XHJcblxyXG4gIHByb3RlY3RlZCBfc3VwcG9ydGVkTWV0YVRhZ3M6IFNoYXJlTWV0YVRhZ3MgPSB7XHJcbiAgICB1cmw6ICd1cmwnLFxyXG4gICAgdGl0bGU6ICd0aXRsZSdcclxuICB9O1xyXG5cclxuICBnZXQgZGVza3RvcCgpOiBzdHJpbmcge1xyXG4gICAgcmV0dXJuIGBodHRwOi8vd3d3LnJlZGRpdC5jb20vc3VibWl0P2A7XHJcbiAgfVxyXG5cclxuICBjb25zdHJ1Y3Rvcihwcm90ZWN0ZWQgX3Byb3BzOiBJU2hhcmVCdXR0b24sXHJcbiAgICAgICAgICAgICAgcHJvdGVjdGVkIF91cmw6ICgpID0+IHN0cmluZyxcclxuICAgICAgICAgICAgICBwcm90ZWN0ZWQgX2h0dHA6IEh0dHBDbGllbnQsXHJcbiAgICAgICAgICAgICAgcHJvdGVjdGVkIF9wbGF0Zm9ybTogUGxhdGZvcm0sXHJcbiAgICAgICAgICAgICAgcHJvdGVjdGVkIF9kb2N1bWVudDogRG9jdW1lbnQsXHJcbiAgICAgICAgICAgICAgcHJvdGVjdGVkIF93aW5kb3dTaXplOiBzdHJpbmcsXHJcbiAgICAgICAgICAgICAgcHJvdGVjdGVkIF9kaXNhYmxlQnV0dG9uQ2xpY2s6IChkaXNhYmxlOiBib29sZWFuKSA9PiB2b2lkKSB7XHJcbiAgICBzdXBlcihfcHJvcHMsIF91cmwsIF9odHRwLCBfcGxhdGZvcm0sIF9kb2N1bWVudCwgX3dpbmRvd1NpemUsIF9kaXNhYmxlQnV0dG9uQ2xpY2spO1xyXG4gIH1cclxufVxyXG4iXX0=