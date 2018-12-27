/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
export class ShareButtonBase {
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
        this._props = _props;
        this._url = _url;
        this._http = _http;
        this._platform = _platform;
        this._document = _document;
        this._windowSize = _windowSize;
        this._disableButtonClick = _disableButtonClick;
        this._self = this;
        /**
         * If share button supports share count
         */
        this.supportShareCount = false;
    }
    /**
     * Share button label
     * @return {?}
     */
    get text() {
        return this._props.text;
    }
    /**
     * Share button aria-label attribute
     * @return {?}
     */
    get ariaLabel() {
        return this._props.ariaLabel;
    }
    /**
     * Share button color
     * @return {?}
     */
    get color() {
        return this._props.color;
    }
    /**
     * Share button icon (FontAwesome)
     * @return {?}
     */
    get icon() {
        return this._props.icon;
    }
    /**
     * @return {?}
     */
    get desktop() {
        return undefined;
    }
    /**
     * @return {?}
     */
    get android() {
        return this.desktop;
    }
    /**
     * @return {?}
     */
    get ios() {
        return this.desktop;
    }
    /**
     * @return {?}
     */
    get sharerUrl() {
        if (this._platform.IOS)
            return this.ios;
        if (this._platform.ANDROID)
            return this.android;
        return this.desktop;
    }
    /**
     * Opens share window
     * @param {?} metaTags
     * @return {?}
     */
    click(metaTags) {
        return this._open(this._serializeMetaTags(metaTags));
    }
    /**
     * Get share count of a URL
     * @param {?} url
     * @return {?}
     */
    shareCount(url) {
        return undefined;
    }
    /**
     * @protected
     * @param {?} metaTags
     * @return {?}
     */
    _serializeMetaTags(metaTags) {
        return Object.entries(this._supportedMetaTags)
            .map(([key, value]) => metaTags[key] ? `${value}=${encodeURIComponent(metaTags[key])}` : '')
            .join('&');
    }
    /**
     * @protected
     * @param {?} serializedMetaTags
     * @return {?}
     */
    _open(serializedMetaTags) {
        if (this.sharerUrl) {
            // Avoid SSR error
            if (this._platform.isBrowser) {
                return this._document.defaultView.open(this.sharerUrl + serializedMetaTags, 'newwindow', this._windowSize);
            }
        }
        else {
            console.warn(`${this.text} button is not compatible on this Platform`);
        }
    }
}
if (false) {
    /**
     * @type {?}
     * @protected
     */
    ShareButtonBase.prototype._self;
    /**
     * Share button supported meta tags
     * @type {?}
     * @protected
     */
    ShareButtonBase.prototype._supportedMetaTags;
    /**
     * If share button supports share count
     * @type {?}
     */
    ShareButtonBase.prototype.supportShareCount;
    /**
     * @type {?}
     * @protected
     */
    ShareButtonBase.prototype._props;
    /**
     * @type {?}
     * @protected
     */
    ShareButtonBase.prototype._url;
    /**
     * @type {?}
     * @protected
     */
    ShareButtonBase.prototype._http;
    /**
     * @type {?}
     * @protected
     */
    ShareButtonBase.prototype._platform;
    /**
     * @type {?}
     * @protected
     */
    ShareButtonBase.prototype._document;
    /**
     * @type {?}
     * @protected
     */
    ShareButtonBase.prototype._windowSize;
    /**
     * @type {?}
     * @protected
     */
    ShareButtonBase.prototype._disableButtonClick;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmFzZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BuZ3gtc2hhcmUvY29yZS8iLCJzb3VyY2VzIjpbImxpYi9idXR0b25zL2Jhc2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUtBLE1BQU0sT0FBTyxlQUFlOzs7Ozs7Ozs7O0lBZ0QxQixZQUFzQixNQUFvQixFQUNwQixJQUFrQixFQUNsQixLQUFpQixFQUNqQixTQUFtQixFQUNuQixTQUFtQixFQUNuQixXQUFtQixFQUVuQixtQkFBK0M7UUFQL0MsV0FBTSxHQUFOLE1BQU0sQ0FBYztRQUNwQixTQUFJLEdBQUosSUFBSSxDQUFjO1FBQ2xCLFVBQUssR0FBTCxLQUFLLENBQVk7UUFDakIsY0FBUyxHQUFULFNBQVMsQ0FBVTtRQUNuQixjQUFTLEdBQVQsU0FBUyxDQUFVO1FBQ25CLGdCQUFXLEdBQVgsV0FBVyxDQUFRO1FBRW5CLHdCQUFtQixHQUFuQixtQkFBbUIsQ0FBNEI7UUFyRGxELFVBQUssR0FBb0IsSUFBSSxDQUFDOzs7O1FBNENqRCxzQkFBaUIsR0FBRyxLQUFLLENBQUM7SUFVMUIsQ0FBQzs7Ozs7SUFoREQsSUFBSSxJQUFJO1FBQ04sT0FBTyxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQztJQUMxQixDQUFDOzs7OztJQUdELElBQUksU0FBUztRQUNYLE9BQU8sSUFBSSxDQUFDLE1BQU0sQ0FBQyxTQUFTLENBQUM7SUFDL0IsQ0FBQzs7Ozs7SUFHRCxJQUFJLEtBQUs7UUFDUCxPQUFPLElBQUksQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDO0lBQzNCLENBQUM7Ozs7O0lBR0QsSUFBSSxJQUFJO1FBQ04sT0FBTyxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQztJQUMxQixDQUFDOzs7O0lBRUQsSUFBSSxPQUFPO1FBQ1QsT0FBTyxTQUFTLENBQUM7SUFDbkIsQ0FBQzs7OztJQUVELElBQUksT0FBTztRQUNULE9BQU8sSUFBSSxDQUFDLE9BQU8sQ0FBQztJQUN0QixDQUFDOzs7O0lBRUQsSUFBSSxHQUFHO1FBQ0wsT0FBTyxJQUFJLENBQUMsT0FBTyxDQUFDO0lBQ3RCLENBQUM7Ozs7SUFFRCxJQUFJLFNBQVM7UUFDWCxJQUFJLElBQUksQ0FBQyxTQUFTLENBQUMsR0FBRztZQUFFLE9BQU8sSUFBSSxDQUFDLEdBQUcsQ0FBQztRQUN4QyxJQUFJLElBQUksQ0FBQyxTQUFTLENBQUMsT0FBTztZQUFFLE9BQU8sSUFBSSxDQUFDLE9BQU8sQ0FBQztRQUNoRCxPQUFPLElBQUksQ0FBQyxPQUFPLENBQUM7SUFDdEIsQ0FBQzs7Ozs7O0lBa0JELEtBQUssQ0FBQyxRQUF1QjtRQUMzQixPQUFPLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLGtCQUFrQixDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUM7SUFDdkQsQ0FBQzs7Ozs7O0lBR0QsVUFBVSxDQUFDLEdBQVc7UUFDcEIsT0FBTyxTQUFTLENBQUM7SUFDbkIsQ0FBQzs7Ozs7O0lBRVMsa0JBQWtCLENBQUMsUUFBdUI7UUFDbEQsT0FBTyxNQUFNLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxrQkFBa0IsQ0FBQzthQUMzQyxHQUFHLENBQUMsQ0FBQyxDQUFDLEdBQUcsRUFBRSxLQUFLLENBQUMsRUFBRSxFQUFFLENBQ3BCLFFBQVEsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxLQUFLLElBQUksa0JBQWtCLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUNyRTthQUNBLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQztJQUNmLENBQUM7Ozs7OztJQUVTLEtBQUssQ0FBQyxrQkFBMEI7UUFDeEMsSUFBSSxJQUFJLENBQUMsU0FBUyxFQUFFO1lBQ2xCLGtCQUFrQjtZQUNsQixJQUFJLElBQUksQ0FBQyxTQUFTLENBQUMsU0FBUyxFQUFFO2dCQUM1QixPQUFPLElBQUksQ0FBQyxTQUFTLENBQUMsV0FBVyxDQUFDLElBQUksQ0FDcEMsSUFBSSxDQUFDLFNBQVMsR0FBRyxrQkFBa0IsRUFDbkMsV0FBVyxFQUNYLElBQUksQ0FBQyxXQUFXLENBQ2pCLENBQUM7YUFDSDtTQUNGO2FBQU07WUFDTCxPQUFPLENBQUMsSUFBSSxDQUFDLEdBQUcsSUFBSSxDQUFDLElBQUksNENBQTRDLENBQUMsQ0FBQztTQUN4RTtJQUNILENBQUM7Q0FDRjs7Ozs7O0lBMUZDLGdDQUFpRDs7Ozs7O0lBR2pELDZDQUFxRDs7Ozs7SUF5Q3JELDRDQUEwQjs7Ozs7SUFFZCxpQ0FBOEI7Ozs7O0lBQzlCLCtCQUE0Qjs7Ozs7SUFDNUIsZ0NBQTJCOzs7OztJQUMzQixvQ0FBNkI7Ozs7O0lBQzdCLG9DQUE2Qjs7Ozs7SUFDN0Isc0NBQTZCOzs7OztJQUU3Qiw4Q0FBeUQiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBQbGF0Zm9ybSB9IGZyb20gJ0Bhbmd1bGFyL2Nkay9wbGF0Zm9ybSc7XHJcbmltcG9ydCB7IEh0dHBDbGllbnQgfSBmcm9tICdAYW5ndWxhci9jb21tb24vaHR0cCc7XHJcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcclxuaW1wb3J0IHsgSVNoYXJlQnV0dG9uLCBTaGFyZU1ldGFUYWdzIH0gZnJvbSAnLi4vc2hhcmUubW9kZWxzJztcclxuXHJcbmV4cG9ydCBjbGFzcyBTaGFyZUJ1dHRvbkJhc2Uge1xyXG5cclxuICBwcm90ZWN0ZWQgcmVhZG9ubHkgX3NlbGY6IFNoYXJlQnV0dG9uQmFzZSA9IHRoaXM7XHJcblxyXG4gIC8qKiBTaGFyZSBidXR0b24gc3VwcG9ydGVkIG1ldGEgdGFncyAqL1xyXG4gIHByb3RlY3RlZCByZWFkb25seSBfc3VwcG9ydGVkTWV0YVRhZ3M6IFNoYXJlTWV0YVRhZ3M7XHJcblxyXG4gIC8qKiBTaGFyZSBidXR0b24gbGFiZWwgKi9cclxuICBnZXQgdGV4dCgpOiBzdHJpbmcge1xyXG4gICAgcmV0dXJuIHRoaXMuX3Byb3BzLnRleHQ7XHJcbiAgfVxyXG5cclxuICAvKiogU2hhcmUgYnV0dG9uIGFyaWEtbGFiZWwgYXR0cmlidXRlICovXHJcbiAgZ2V0IGFyaWFMYWJlbCgpOiBzdHJpbmcge1xyXG4gICAgcmV0dXJuIHRoaXMuX3Byb3BzLmFyaWFMYWJlbDtcclxuICB9XHJcblxyXG4gIC8qKiBTaGFyZSBidXR0b24gY29sb3IgKi9cclxuICBnZXQgY29sb3IoKTogc3RyaW5nIHtcclxuICAgIHJldHVybiB0aGlzLl9wcm9wcy5jb2xvcjtcclxuICB9XHJcblxyXG4gIC8qKiBTaGFyZSBidXR0b24gaWNvbiAoRm9udEF3ZXNvbWUpICovXHJcbiAgZ2V0IGljb24oKTogc3RyaW5nIHwgc3RyaW5nW10ge1xyXG4gICAgcmV0dXJuIHRoaXMuX3Byb3BzLmljb247XHJcbiAgfVxyXG5cclxuICBnZXQgZGVza3RvcCgpOiBzdHJpbmcgfCB1bmRlZmluZWQge1xyXG4gICAgcmV0dXJuIHVuZGVmaW5lZDtcclxuICB9XHJcblxyXG4gIGdldCBhbmRyb2lkKCk6IHN0cmluZyB8IHVuZGVmaW5lZCB7XHJcbiAgICByZXR1cm4gdGhpcy5kZXNrdG9wO1xyXG4gIH1cclxuXHJcbiAgZ2V0IGlvcygpOiBzdHJpbmcgfCB1bmRlZmluZWQge1xyXG4gICAgcmV0dXJuIHRoaXMuZGVza3RvcDtcclxuICB9XHJcblxyXG4gIGdldCBzaGFyZXJVcmwoKTogc3RyaW5nIHtcclxuICAgIGlmICh0aGlzLl9wbGF0Zm9ybS5JT1MpIHJldHVybiB0aGlzLmlvcztcclxuICAgIGlmICh0aGlzLl9wbGF0Zm9ybS5BTkRST0lEKSByZXR1cm4gdGhpcy5hbmRyb2lkO1xyXG4gICAgcmV0dXJuIHRoaXMuZGVza3RvcDtcclxuICB9XHJcblxyXG4gIC8qKiBJZiBzaGFyZSBidXR0b24gc3VwcG9ydHMgc2hhcmUgY291bnQgKi9cclxuICBzdXBwb3J0U2hhcmVDb3VudCA9IGZhbHNlO1xyXG5cclxuICBjb25zdHJ1Y3Rvcihwcm90ZWN0ZWQgX3Byb3BzOiBJU2hhcmVCdXR0b24sXHJcbiAgICAgICAgICAgICAgcHJvdGVjdGVkIF91cmw6ICgpID0+IHN0cmluZyxcclxuICAgICAgICAgICAgICBwcm90ZWN0ZWQgX2h0dHA6IEh0dHBDbGllbnQsXHJcbiAgICAgICAgICAgICAgcHJvdGVjdGVkIF9wbGF0Zm9ybTogUGxhdGZvcm0sXHJcbiAgICAgICAgICAgICAgcHJvdGVjdGVkIF9kb2N1bWVudDogRG9jdW1lbnQsXHJcbiAgICAgICAgICAgICAgcHJvdGVjdGVkIF93aW5kb3dTaXplOiBzdHJpbmcsXHJcbiAgICAgICAgICAgICAgLy8gZGlzYWJsZSBidXR0b24gY2xpY2sgKHVzZWQgaW4gY29weSBidXR0b24pXHJcbiAgICAgICAgICAgICAgcHJvdGVjdGVkIF9kaXNhYmxlQnV0dG9uQ2xpY2s6IChkaXNhYmxlOiBib29sZWFuKSA9PiB2b2lkKSB7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBPcGVucyBzaGFyZSB3aW5kb3dcclxuICAgKi9cclxuICBjbGljayhtZXRhVGFnczogU2hhcmVNZXRhVGFncyk6IFdpbmRvdyB8IG51bGwgfCB2b2lkIHtcclxuICAgIHJldHVybiB0aGlzLl9vcGVuKHRoaXMuX3NlcmlhbGl6ZU1ldGFUYWdzKG1ldGFUYWdzKSk7XHJcbiAgfVxyXG5cclxuICAvKiogR2V0IHNoYXJlIGNvdW50IG9mIGEgVVJMICovXHJcbiAgc2hhcmVDb3VudCh1cmw6IHN0cmluZyk6IE9ic2VydmFibGU8bnVtYmVyPiB8IHVuZGVmaW5lZCB7XHJcbiAgICByZXR1cm4gdW5kZWZpbmVkO1xyXG4gIH1cclxuXHJcbiAgcHJvdGVjdGVkIF9zZXJpYWxpemVNZXRhVGFncyhtZXRhVGFnczogU2hhcmVNZXRhVGFncyk6IHN0cmluZyB7XHJcbiAgICByZXR1cm4gT2JqZWN0LmVudHJpZXModGhpcy5fc3VwcG9ydGVkTWV0YVRhZ3MpXHJcbiAgICAgIC5tYXAoKFtrZXksIHZhbHVlXSkgPT5cclxuICAgICAgICBtZXRhVGFnc1trZXldID8gYCR7dmFsdWV9PSR7ZW5jb2RlVVJJQ29tcG9uZW50KG1ldGFUYWdzW2tleV0pfWAgOiAnJ1xyXG4gICAgICApXHJcbiAgICAgIC5qb2luKCcmJyk7XHJcbiAgfVxyXG5cclxuICBwcm90ZWN0ZWQgX29wZW4oc2VyaWFsaXplZE1ldGFUYWdzOiBzdHJpbmcpOiBXaW5kb3cgfCBudWxsIHwgdm9pZCB7XHJcbiAgICBpZiAodGhpcy5zaGFyZXJVcmwpIHtcclxuICAgICAgLy8gQXZvaWQgU1NSIGVycm9yXHJcbiAgICAgIGlmICh0aGlzLl9wbGF0Zm9ybS5pc0Jyb3dzZXIpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fZG9jdW1lbnQuZGVmYXVsdFZpZXcub3BlbihcclxuICAgICAgICAgIHRoaXMuc2hhcmVyVXJsICsgc2VyaWFsaXplZE1ldGFUYWdzLFxyXG4gICAgICAgICAgJ25ld3dpbmRvdycsXHJcbiAgICAgICAgICB0aGlzLl93aW5kb3dTaXplXHJcbiAgICAgICAgKTtcclxuICAgICAgfVxyXG4gICAgfSBlbHNlIHtcclxuICAgICAgY29uc29sZS53YXJuKGAke3RoaXMudGV4dH0gYnV0dG9uIGlzIG5vdCBjb21wYXRpYmxlIG9uIHRoaXMgUGxhdGZvcm1gKTtcclxuICAgIH1cclxuICB9XHJcbn1cclxuIl19