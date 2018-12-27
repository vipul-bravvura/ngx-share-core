/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
var ShareButtonBase = /** @class */ (function () {
    function ShareButtonBase(_props, _url, _http, _platform, _document, _windowSize, _disableButtonClick) {
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
    Object.defineProperty(ShareButtonBase.prototype, "text", {
        /** Share button label */
        get: /**
         * Share button label
         * @return {?}
         */
        function () {
            return this._props.text;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ShareButtonBase.prototype, "ariaLabel", {
        /** Share button aria-label attribute */
        get: /**
         * Share button aria-label attribute
         * @return {?}
         */
        function () {
            return this._props.ariaLabel;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ShareButtonBase.prototype, "color", {
        /** Share button color */
        get: /**
         * Share button color
         * @return {?}
         */
        function () {
            return this._props.color;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ShareButtonBase.prototype, "icon", {
        /** Share button icon (FontAwesome) */
        get: /**
         * Share button icon (FontAwesome)
         * @return {?}
         */
        function () {
            return this._props.icon;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ShareButtonBase.prototype, "desktop", {
        get: /**
         * @return {?}
         */
        function () {
            return undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ShareButtonBase.prototype, "android", {
        get: /**
         * @return {?}
         */
        function () {
            return this.desktop;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ShareButtonBase.prototype, "ios", {
        get: /**
         * @return {?}
         */
        function () {
            return this.desktop;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ShareButtonBase.prototype, "sharerUrl", {
        get: /**
         * @return {?}
         */
        function () {
            if (this._platform.IOS)
                return this.ios;
            if (this._platform.ANDROID)
                return this.android;
            return this.desktop;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Opens share window
     */
    /**
     * Opens share window
     * @param {?} metaTags
     * @return {?}
     */
    ShareButtonBase.prototype.click = /**
     * Opens share window
     * @param {?} metaTags
     * @return {?}
     */
    function (metaTags) {
        return this._open(this._serializeMetaTags(metaTags));
    };
    /** Get share count of a URL */
    /**
     * Get share count of a URL
     * @param {?} url
     * @return {?}
     */
    ShareButtonBase.prototype.shareCount = /**
     * Get share count of a URL
     * @param {?} url
     * @return {?}
     */
    function (url) {
        return undefined;
    };
    /**
     * @protected
     * @param {?} metaTags
     * @return {?}
     */
    ShareButtonBase.prototype._serializeMetaTags = /**
     * @protected
     * @param {?} metaTags
     * @return {?}
     */
    function (metaTags) {
        return Object.entries(this._supportedMetaTags)
            .map(function (_a) {
            var _b = tslib_1.__read(_a, 2), key = _b[0], value = _b[1];
            return metaTags[key] ? value + "=" + encodeURIComponent(metaTags[key]) : '';
        })
            .join('&');
    };
    /**
     * @protected
     * @param {?} serializedMetaTags
     * @return {?}
     */
    ShareButtonBase.prototype._open = /**
     * @protected
     * @param {?} serializedMetaTags
     * @return {?}
     */
    function (serializedMetaTags) {
        if (this.sharerUrl) {
            // Avoid SSR error
            if (this._platform.isBrowser) {
                return this._document.defaultView.open(this.sharerUrl + serializedMetaTags, 'newwindow', this._windowSize);
            }
        }
        else {
            console.warn(this.text + " button is not compatible on this Platform");
        }
    };
    return ShareButtonBase;
}());
export { ShareButtonBase };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmFzZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BuZ3gtc2hhcmUvY29yZS8iLCJzb3VyY2VzIjpbImxpYi9idXR0b25zL2Jhc2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFLQTtJQWdERSx5QkFBc0IsTUFBb0IsRUFDcEIsSUFBa0IsRUFDbEIsS0FBaUIsRUFDakIsU0FBbUIsRUFDbkIsU0FBbUIsRUFDbkIsV0FBbUIsRUFFbkIsbUJBQStDO1FBUC9DLFdBQU0sR0FBTixNQUFNLENBQWM7UUFDcEIsU0FBSSxHQUFKLElBQUksQ0FBYztRQUNsQixVQUFLLEdBQUwsS0FBSyxDQUFZO1FBQ2pCLGNBQVMsR0FBVCxTQUFTLENBQVU7UUFDbkIsY0FBUyxHQUFULFNBQVMsQ0FBVTtRQUNuQixnQkFBVyxHQUFYLFdBQVcsQ0FBUTtRQUVuQix3QkFBbUIsR0FBbkIsbUJBQW1CLENBQTRCO1FBckRsRCxVQUFLLEdBQW9CLElBQUksQ0FBQzs7OztRQTRDakQsc0JBQWlCLEdBQUcsS0FBSyxDQUFDO0lBVTFCLENBQUM7SUFoREQsc0JBQUksaUNBQUk7UUFEUix5QkFBeUI7Ozs7O1FBQ3pCO1lBQ0UsT0FBTyxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQztRQUMxQixDQUFDOzs7T0FBQTtJQUdELHNCQUFJLHNDQUFTO1FBRGIsd0NBQXdDOzs7OztRQUN4QztZQUNFLE9BQU8sSUFBSSxDQUFDLE1BQU0sQ0FBQyxTQUFTLENBQUM7UUFDL0IsQ0FBQzs7O09BQUE7SUFHRCxzQkFBSSxrQ0FBSztRQURULHlCQUF5Qjs7Ozs7UUFDekI7WUFDRSxPQUFPLElBQUksQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDO1FBQzNCLENBQUM7OztPQUFBO0lBR0Qsc0JBQUksaUNBQUk7UUFEUixzQ0FBc0M7Ozs7O1FBQ3RDO1lBQ0UsT0FBTyxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQztRQUMxQixDQUFDOzs7T0FBQTtJQUVELHNCQUFJLG9DQUFPOzs7O1FBQVg7WUFDRSxPQUFPLFNBQVMsQ0FBQztRQUNuQixDQUFDOzs7T0FBQTtJQUVELHNCQUFJLG9DQUFPOzs7O1FBQVg7WUFDRSxPQUFPLElBQUksQ0FBQyxPQUFPLENBQUM7UUFDdEIsQ0FBQzs7O09BQUE7SUFFRCxzQkFBSSxnQ0FBRzs7OztRQUFQO1lBQ0UsT0FBTyxJQUFJLENBQUMsT0FBTyxDQUFDO1FBQ3RCLENBQUM7OztPQUFBO0lBRUQsc0JBQUksc0NBQVM7Ozs7UUFBYjtZQUNFLElBQUksSUFBSSxDQUFDLFNBQVMsQ0FBQyxHQUFHO2dCQUFFLE9BQU8sSUFBSSxDQUFDLEdBQUcsQ0FBQztZQUN4QyxJQUFJLElBQUksQ0FBQyxTQUFTLENBQUMsT0FBTztnQkFBRSxPQUFPLElBQUksQ0FBQyxPQUFPLENBQUM7WUFDaEQsT0FBTyxJQUFJLENBQUMsT0FBTyxDQUFDO1FBQ3RCLENBQUM7OztPQUFBO0lBZUQ7O09BRUc7Ozs7OztJQUNILCtCQUFLOzs7OztJQUFMLFVBQU0sUUFBdUI7UUFDM0IsT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDO0lBQ3ZELENBQUM7SUFFRCwrQkFBK0I7Ozs7OztJQUMvQixvQ0FBVTs7Ozs7SUFBVixVQUFXLEdBQVc7UUFDcEIsT0FBTyxTQUFTLENBQUM7SUFDbkIsQ0FBQzs7Ozs7O0lBRVMsNENBQWtCOzs7OztJQUE1QixVQUE2QixRQUF1QjtRQUNsRCxPQUFPLE1BQU0sQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLGtCQUFrQixDQUFDO2FBQzNDLEdBQUcsQ0FBQyxVQUFDLEVBQVk7Z0JBQVosMEJBQVksRUFBWCxXQUFHLEVBQUUsYUFBSztZQUNmLE9BQUEsUUFBUSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBSSxLQUFLLFNBQUksa0JBQWtCLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBQyxDQUFHLENBQUMsQ0FBQyxDQUFDLEVBQUU7UUFBcEUsQ0FBb0UsQ0FDckU7YUFDQSxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7SUFDZixDQUFDOzs7Ozs7SUFFUywrQkFBSzs7Ozs7SUFBZixVQUFnQixrQkFBMEI7UUFDeEMsSUFBSSxJQUFJLENBQUMsU0FBUyxFQUFFO1lBQ2xCLGtCQUFrQjtZQUNsQixJQUFJLElBQUksQ0FBQyxTQUFTLENBQUMsU0FBUyxFQUFFO2dCQUM1QixPQUFPLElBQUksQ0FBQyxTQUFTLENBQUMsV0FBVyxDQUFDLElBQUksQ0FDcEMsSUFBSSxDQUFDLFNBQVMsR0FBRyxrQkFBa0IsRUFDbkMsV0FBVyxFQUNYLElBQUksQ0FBQyxXQUFXLENBQ2pCLENBQUM7YUFDSDtTQUNGO2FBQU07WUFDTCxPQUFPLENBQUMsSUFBSSxDQUFJLElBQUksQ0FBQyxJQUFJLCtDQUE0QyxDQUFDLENBQUM7U0FDeEU7SUFDSCxDQUFDO0lBQ0gsc0JBQUM7QUFBRCxDQUFDLEFBNUZELElBNEZDOzs7Ozs7O0lBMUZDLGdDQUFpRDs7Ozs7O0lBR2pELDZDQUFxRDs7Ozs7SUF5Q3JELDRDQUEwQjs7Ozs7SUFFZCxpQ0FBOEI7Ozs7O0lBQzlCLCtCQUE0Qjs7Ozs7SUFDNUIsZ0NBQTJCOzs7OztJQUMzQixvQ0FBNkI7Ozs7O0lBQzdCLG9DQUE2Qjs7Ozs7SUFDN0Isc0NBQTZCOzs7OztJQUU3Qiw4Q0FBeUQiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBQbGF0Zm9ybSB9IGZyb20gJ0Bhbmd1bGFyL2Nkay9wbGF0Zm9ybSc7XHJcbmltcG9ydCB7IEh0dHBDbGllbnQgfSBmcm9tICdAYW5ndWxhci9jb21tb24vaHR0cCc7XHJcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcclxuaW1wb3J0IHsgSVNoYXJlQnV0dG9uLCBTaGFyZU1ldGFUYWdzIH0gZnJvbSAnLi4vc2hhcmUubW9kZWxzJztcclxuXHJcbmV4cG9ydCBjbGFzcyBTaGFyZUJ1dHRvbkJhc2Uge1xyXG5cclxuICBwcm90ZWN0ZWQgcmVhZG9ubHkgX3NlbGY6IFNoYXJlQnV0dG9uQmFzZSA9IHRoaXM7XHJcblxyXG4gIC8qKiBTaGFyZSBidXR0b24gc3VwcG9ydGVkIG1ldGEgdGFncyAqL1xyXG4gIHByb3RlY3RlZCByZWFkb25seSBfc3VwcG9ydGVkTWV0YVRhZ3M6IFNoYXJlTWV0YVRhZ3M7XHJcblxyXG4gIC8qKiBTaGFyZSBidXR0b24gbGFiZWwgKi9cclxuICBnZXQgdGV4dCgpOiBzdHJpbmcge1xyXG4gICAgcmV0dXJuIHRoaXMuX3Byb3BzLnRleHQ7XHJcbiAgfVxyXG5cclxuICAvKiogU2hhcmUgYnV0dG9uIGFyaWEtbGFiZWwgYXR0cmlidXRlICovXHJcbiAgZ2V0IGFyaWFMYWJlbCgpOiBzdHJpbmcge1xyXG4gICAgcmV0dXJuIHRoaXMuX3Byb3BzLmFyaWFMYWJlbDtcclxuICB9XHJcblxyXG4gIC8qKiBTaGFyZSBidXR0b24gY29sb3IgKi9cclxuICBnZXQgY29sb3IoKTogc3RyaW5nIHtcclxuICAgIHJldHVybiB0aGlzLl9wcm9wcy5jb2xvcjtcclxuICB9XHJcblxyXG4gIC8qKiBTaGFyZSBidXR0b24gaWNvbiAoRm9udEF3ZXNvbWUpICovXHJcbiAgZ2V0IGljb24oKTogc3RyaW5nIHwgc3RyaW5nW10ge1xyXG4gICAgcmV0dXJuIHRoaXMuX3Byb3BzLmljb247XHJcbiAgfVxyXG5cclxuICBnZXQgZGVza3RvcCgpOiBzdHJpbmcgfCB1bmRlZmluZWQge1xyXG4gICAgcmV0dXJuIHVuZGVmaW5lZDtcclxuICB9XHJcblxyXG4gIGdldCBhbmRyb2lkKCk6IHN0cmluZyB8IHVuZGVmaW5lZCB7XHJcbiAgICByZXR1cm4gdGhpcy5kZXNrdG9wO1xyXG4gIH1cclxuXHJcbiAgZ2V0IGlvcygpOiBzdHJpbmcgfCB1bmRlZmluZWQge1xyXG4gICAgcmV0dXJuIHRoaXMuZGVza3RvcDtcclxuICB9XHJcblxyXG4gIGdldCBzaGFyZXJVcmwoKTogc3RyaW5nIHtcclxuICAgIGlmICh0aGlzLl9wbGF0Zm9ybS5JT1MpIHJldHVybiB0aGlzLmlvcztcclxuICAgIGlmICh0aGlzLl9wbGF0Zm9ybS5BTkRST0lEKSByZXR1cm4gdGhpcy5hbmRyb2lkO1xyXG4gICAgcmV0dXJuIHRoaXMuZGVza3RvcDtcclxuICB9XHJcblxyXG4gIC8qKiBJZiBzaGFyZSBidXR0b24gc3VwcG9ydHMgc2hhcmUgY291bnQgKi9cclxuICBzdXBwb3J0U2hhcmVDb3VudCA9IGZhbHNlO1xyXG5cclxuICBjb25zdHJ1Y3Rvcihwcm90ZWN0ZWQgX3Byb3BzOiBJU2hhcmVCdXR0b24sXHJcbiAgICAgICAgICAgICAgcHJvdGVjdGVkIF91cmw6ICgpID0+IHN0cmluZyxcclxuICAgICAgICAgICAgICBwcm90ZWN0ZWQgX2h0dHA6IEh0dHBDbGllbnQsXHJcbiAgICAgICAgICAgICAgcHJvdGVjdGVkIF9wbGF0Zm9ybTogUGxhdGZvcm0sXHJcbiAgICAgICAgICAgICAgcHJvdGVjdGVkIF9kb2N1bWVudDogRG9jdW1lbnQsXHJcbiAgICAgICAgICAgICAgcHJvdGVjdGVkIF93aW5kb3dTaXplOiBzdHJpbmcsXHJcbiAgICAgICAgICAgICAgLy8gZGlzYWJsZSBidXR0b24gY2xpY2sgKHVzZWQgaW4gY29weSBidXR0b24pXHJcbiAgICAgICAgICAgICAgcHJvdGVjdGVkIF9kaXNhYmxlQnV0dG9uQ2xpY2s6IChkaXNhYmxlOiBib29sZWFuKSA9PiB2b2lkKSB7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBPcGVucyBzaGFyZSB3aW5kb3dcclxuICAgKi9cclxuICBjbGljayhtZXRhVGFnczogU2hhcmVNZXRhVGFncyk6IFdpbmRvdyB8IG51bGwgfCB2b2lkIHtcclxuICAgIHJldHVybiB0aGlzLl9vcGVuKHRoaXMuX3NlcmlhbGl6ZU1ldGFUYWdzKG1ldGFUYWdzKSk7XHJcbiAgfVxyXG5cclxuICAvKiogR2V0IHNoYXJlIGNvdW50IG9mIGEgVVJMICovXHJcbiAgc2hhcmVDb3VudCh1cmw6IHN0cmluZyk6IE9ic2VydmFibGU8bnVtYmVyPiB8IHVuZGVmaW5lZCB7XHJcbiAgICByZXR1cm4gdW5kZWZpbmVkO1xyXG4gIH1cclxuXHJcbiAgcHJvdGVjdGVkIF9zZXJpYWxpemVNZXRhVGFncyhtZXRhVGFnczogU2hhcmVNZXRhVGFncyk6IHN0cmluZyB7XHJcbiAgICByZXR1cm4gT2JqZWN0LmVudHJpZXModGhpcy5fc3VwcG9ydGVkTWV0YVRhZ3MpXHJcbiAgICAgIC5tYXAoKFtrZXksIHZhbHVlXSkgPT5cclxuICAgICAgICBtZXRhVGFnc1trZXldID8gYCR7dmFsdWV9PSR7ZW5jb2RlVVJJQ29tcG9uZW50KG1ldGFUYWdzW2tleV0pfWAgOiAnJ1xyXG4gICAgICApXHJcbiAgICAgIC5qb2luKCcmJyk7XHJcbiAgfVxyXG5cclxuICBwcm90ZWN0ZWQgX29wZW4oc2VyaWFsaXplZE1ldGFUYWdzOiBzdHJpbmcpOiBXaW5kb3cgfCBudWxsIHwgdm9pZCB7XHJcbiAgICBpZiAodGhpcy5zaGFyZXJVcmwpIHtcclxuICAgICAgLy8gQXZvaWQgU1NSIGVycm9yXHJcbiAgICAgIGlmICh0aGlzLl9wbGF0Zm9ybS5pc0Jyb3dzZXIpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fZG9jdW1lbnQuZGVmYXVsdFZpZXcub3BlbihcclxuICAgICAgICAgIHRoaXMuc2hhcmVyVXJsICsgc2VyaWFsaXplZE1ldGFUYWdzLFxyXG4gICAgICAgICAgJ25ld3dpbmRvdycsXHJcbiAgICAgICAgICB0aGlzLl93aW5kb3dTaXplXHJcbiAgICAgICAgKTtcclxuICAgICAgfVxyXG4gICAgfSBlbHNlIHtcclxuICAgICAgY29uc29sZS53YXJuKGAke3RoaXMudGV4dH0gYnV0dG9uIGlzIG5vdCBjb21wYXRpYmxlIG9uIHRoaXMgUGxhdGZvcm1gKTtcclxuICAgIH1cclxuICB9XHJcbn1cclxuIl19