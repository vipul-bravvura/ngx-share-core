/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { map } from 'rxjs/operators';
import { ShareButtonBase } from './base';
export class PinterestButton extends ShareButtonBase {
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
        this.supportShareCount = true;
        this._supportedMetaTags = {
            url: 'url',
            description: 'description',
            image: 'media'
        };
    }
    /**
     * @return {?}
     */
    get desktop() {
        return `https://in.pinterest.com/pin/create/button/?`;
    }
    /**
     * @param {?} url
     * @return {?}
     */
    shareCount(url) {
        return this._http.get(`https://api.pinterest.com/v1/urls/count.json?url=${url}`, { responseType: 'text' }).pipe(map((text) => JSON.parse(text.replace(/^receiveCount\((.*)\)/, '$1'))), map((res) => +res.count));
    }
}
if (false) {
    /** @type {?} */
    PinterestButton.prototype.supportShareCount;
    /**
     * @type {?}
     * @protected
     */
    PinterestButton.prototype._supportedMetaTags;
    /**
     * @type {?}
     * @protected
     */
    PinterestButton.prototype._props;
    /**
     * @type {?}
     * @protected
     */
    PinterestButton.prototype._url;
    /**
     * @type {?}
     * @protected
     */
    PinterestButton.prototype._http;
    /**
     * @type {?}
     * @protected
     */
    PinterestButton.prototype._platform;
    /**
     * @type {?}
     * @protected
     */
    PinterestButton.prototype._document;
    /**
     * @type {?}
     * @protected
     */
    PinterestButton.prototype._windowSize;
    /**
     * @type {?}
     * @protected
     */
    PinterestButton.prototype._disableButtonClick;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGludGVyZXN0LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQG5neC1zaGFyZS9jb3JlLyIsInNvdXJjZXMiOlsibGliL2J1dHRvbnMvcGludGVyZXN0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFHQSxPQUFPLEVBQUUsR0FBRyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDckMsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLFFBQVEsQ0FBQztBQUd6QyxNQUFNLE9BQU8sZUFBZ0IsU0FBUSxlQUFlOzs7Ozs7Ozs7O0lBY2xELFlBQXNCLE1BQW9CLEVBQ3BCLElBQWtCLEVBQ2xCLEtBQWlCLEVBQ2pCLFNBQW1CLEVBQ25CLFNBQW1CLEVBQ25CLFdBQW1CLEVBQ25CLG1CQUErQztRQUNuRSxLQUFLLENBQUMsTUFBTSxFQUFFLElBQUksRUFBRSxLQUFLLEVBQUUsU0FBUyxFQUFFLFNBQVMsRUFBRSxXQUFXLEVBQUUsbUJBQW1CLENBQUMsQ0FBQztRQVAvRCxXQUFNLEdBQU4sTUFBTSxDQUFjO1FBQ3BCLFNBQUksR0FBSixJQUFJLENBQWM7UUFDbEIsVUFBSyxHQUFMLEtBQUssQ0FBWTtRQUNqQixjQUFTLEdBQVQsU0FBUyxDQUFVO1FBQ25CLGNBQVMsR0FBVCxTQUFTLENBQVU7UUFDbkIsZ0JBQVcsR0FBWCxXQUFXLENBQVE7UUFDbkIsd0JBQW1CLEdBQW5CLG1CQUFtQixDQUE0QjtRQWxCckUsc0JBQWlCLEdBQUcsSUFBSSxDQUFDO1FBRWYsdUJBQWtCLEdBQWtCO1lBQzVDLEdBQUcsRUFBRSxLQUFLO1lBQ1YsV0FBVyxFQUFFLGFBQWE7WUFDMUIsS0FBSyxFQUFFLE9BQU87U0FDZixDQUFDO0lBY0YsQ0FBQzs7OztJQVpELElBQUksT0FBTztRQUNULE9BQU8sOENBQThDLENBQUM7SUFDeEQsQ0FBQzs7Ozs7SUFZRCxVQUFVLENBQUMsR0FBVztRQUNwQixPQUFPLElBQUksQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUNuQixvREFBb0QsR0FBRyxFQUFFLEVBQ3pELEVBQUMsWUFBWSxFQUFFLE1BQU0sRUFBQyxDQUN2QixDQUFDLElBQUksQ0FDSixHQUFHLENBQUMsQ0FBQyxJQUFZLEVBQUUsRUFBRSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyx1QkFBdUIsRUFBRSxJQUFJLENBQUMsQ0FBQyxDQUFDLEVBQzlFLEdBQUcsQ0FBQyxDQUFDLEdBQVEsRUFBRSxFQUFFLENBQUMsQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLENBQzlCLENBQUM7SUFDSixDQUFDO0NBQ0Y7OztJQS9CQyw0Q0FBeUI7Ozs7O0lBRXpCLDZDQUlFOzs7OztJQU1VLGlDQUE4Qjs7Ozs7SUFDOUIsK0JBQTRCOzs7OztJQUM1QixnQ0FBMkI7Ozs7O0lBQzNCLG9DQUE2Qjs7Ozs7SUFDN0Isb0NBQTZCOzs7OztJQUM3QixzQ0FBNkI7Ozs7O0lBQzdCLDhDQUF5RCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFBsYXRmb3JtIH0gZnJvbSAnQGFuZ3VsYXIvY2RrL3BsYXRmb3JtJztcclxuaW1wb3J0IHsgSHR0cENsaWVudCB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbi9odHRwJztcclxuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xyXG5pbXBvcnQgeyBtYXAgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XHJcbmltcG9ydCB7IFNoYXJlQnV0dG9uQmFzZSB9IGZyb20gJy4vYmFzZSc7XHJcbmltcG9ydCB7IElTaGFyZUJ1dHRvbiwgU2hhcmVNZXRhVGFncyB9IGZyb20gJy4uL3NoYXJlLm1vZGVscyc7XHJcblxyXG5leHBvcnQgY2xhc3MgUGludGVyZXN0QnV0dG9uIGV4dGVuZHMgU2hhcmVCdXR0b25CYXNlIHtcclxuXHJcbiAgc3VwcG9ydFNoYXJlQ291bnQgPSB0cnVlO1xyXG5cclxuICBwcm90ZWN0ZWQgX3N1cHBvcnRlZE1ldGFUYWdzOiBTaGFyZU1ldGFUYWdzID0ge1xyXG4gICAgdXJsOiAndXJsJyxcclxuICAgIGRlc2NyaXB0aW9uOiAnZGVzY3JpcHRpb24nLFxyXG4gICAgaW1hZ2U6ICdtZWRpYSdcclxuICB9O1xyXG5cclxuICBnZXQgZGVza3RvcCgpOiBzdHJpbmcge1xyXG4gICAgcmV0dXJuIGBodHRwczovL2luLnBpbnRlcmVzdC5jb20vcGluL2NyZWF0ZS9idXR0b24vP2A7XHJcbiAgfVxyXG5cclxuICBjb25zdHJ1Y3Rvcihwcm90ZWN0ZWQgX3Byb3BzOiBJU2hhcmVCdXR0b24sXHJcbiAgICAgICAgICAgICAgcHJvdGVjdGVkIF91cmw6ICgpID0+IHN0cmluZyxcclxuICAgICAgICAgICAgICBwcm90ZWN0ZWQgX2h0dHA6IEh0dHBDbGllbnQsXHJcbiAgICAgICAgICAgICAgcHJvdGVjdGVkIF9wbGF0Zm9ybTogUGxhdGZvcm0sXHJcbiAgICAgICAgICAgICAgcHJvdGVjdGVkIF9kb2N1bWVudDogRG9jdW1lbnQsXHJcbiAgICAgICAgICAgICAgcHJvdGVjdGVkIF93aW5kb3dTaXplOiBzdHJpbmcsXHJcbiAgICAgICAgICAgICAgcHJvdGVjdGVkIF9kaXNhYmxlQnV0dG9uQ2xpY2s6IChkaXNhYmxlOiBib29sZWFuKSA9PiB2b2lkKSB7XHJcbiAgICBzdXBlcihfcHJvcHMsIF91cmwsIF9odHRwLCBfcGxhdGZvcm0sIF9kb2N1bWVudCwgX3dpbmRvd1NpemUsIF9kaXNhYmxlQnV0dG9uQ2xpY2spO1xyXG4gIH1cclxuXHJcbiAgc2hhcmVDb3VudCh1cmw6IHN0cmluZyk6IE9ic2VydmFibGU8bnVtYmVyPiB7XHJcbiAgICByZXR1cm4gdGhpcy5faHR0cC5nZXQoXHJcbiAgICAgIGBodHRwczovL2FwaS5waW50ZXJlc3QuY29tL3YxL3VybHMvY291bnQuanNvbj91cmw9JHt1cmx9YCxcclxuICAgICAge3Jlc3BvbnNlVHlwZTogJ3RleHQnfVxyXG4gICAgKS5waXBlKFxyXG4gICAgICBtYXAoKHRleHQ6IHN0cmluZykgPT4gSlNPTi5wYXJzZSh0ZXh0LnJlcGxhY2UoL15yZWNlaXZlQ291bnRcXCgoLiopXFwpLywgJyQxJykpKSxcclxuICAgICAgbWFwKChyZXM6IGFueSkgPT4gK3Jlcy5jb3VudClcclxuICAgICk7XHJcbiAgfVxyXG59XHJcbiJdfQ==