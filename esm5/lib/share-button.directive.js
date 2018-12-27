/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Directive, Input, Output, HostBinding, HostListener, Inject, EventEmitter, ElementRef, Renderer2, ChangeDetectorRef } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Meta } from '@angular/platform-browser';
import { Platform } from '@angular/cdk/platform';
import { Subscription } from 'rxjs';
import { ShareService } from './share.service';
import { getValidUrl } from './utils';
var ShareDirective = /** @class */ (function () {
    function ShareDirective(_meta, _el, _http, _platform, _renderer, _cd, _share, _document) {
        this._meta = _meta;
        this._el = _el;
        this._http = _http;
        this._platform = _platform;
        this._renderer = _renderer;
        this._cd = _cd;
        this._share = _share;
        this._document = _document;
        /**
         * Share window closed event subscription
         */
        this._shareWindowClosed = Subscription.EMPTY;
        /**
         * Get share count
         */
        this.getCount = false;
        /**
         * Set meta tags from document head, useful when SEO is supported
         */
        this.autoSetMeta = this._share.config.autoSetMeta;
        /**
         * Sharing link
         */
        this.url = this._share.config.url;
        /**
         * Sets the title parameter
         */
        this.title = this._share.config.title;
        /**
         * Sets the description parameter
         */
        this.description = this._share.config.description;
        /**
         * Sets the image parameter for sharing on Pinterest
         */
        this.image = this._share.config.image;
        /**
         * Sets the tags parameter for sharing on Twitter and Tumblr
         */
        this.tags = this._share.config.tags;
        /**
         * Stream that emits when share count is fetched
         */
        this.count = new EventEmitter();
        /**
         * Stream that emits when share dialog is opened
         */
        this.opened = new EventEmitter();
        /**
         * Stream that emits when share dialog is closed
         */
        this.closed = new EventEmitter();
    }
    /** Share the link */
    /**
     * Share the link
     * @return {?}
     */
    ShareDirective.prototype.share = /**
     * Share the link
     * @return {?}
     */
    function () {
        /** @type {?} */
        var metaTags = this.autoSetMeta ? {
            url: this.url,
            title: this.title || this._getMetaTagContent('og:title'),
            description: this.description || this._getMetaTagContent('og:description'),
            image: this.image || this._getMetaTagContent('og:image'),
            via: this._share.config.twitterAccount,
            tags: this.tags,
        } : {
            url: this.url,
            title: this.title,
            description: this.description,
            image: this.image,
            tags: this.tags,
            via: this._share.config.twitterAccount,
        };
        // Share the link
        this.shareButton.click(metaTags);
    };
    /**
     * @param {?} changes
     * @return {?}
     */
    ShareDirective.prototype.ngOnChanges = /**
     * @param {?} changes
     * @return {?}
     */
    function (changes) {
        var _this = this;
        // Avoid SSR error
        if (this._platform.isBrowser) {
            if (this._shareButtonChanged(changes['shareButtonName'])) {
                this._createShareButton();
            }
            if (this._urlChanged(changes['url'])) {
                this.url = getValidUrl(this.autoSetMeta
                    ? this.url || this._getMetaTagContent('og:url')
                    : this.url, this._document.defaultView.location.href);
                if (this.getCount && this.shareButton.supportShareCount) {
                    this.shareButton.shareCount(this.url).subscribe(function (count) { return _this.count.emit(count); });
                }
            }
        }
    };
    /**
     * @return {?}
     */
    ShareDirective.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        this._shareWindowClosed.unsubscribe();
    };
    /**
     * @private
     * @return {?}
     */
    ShareDirective.prototype._createShareButton = /**
     * @private
     * @return {?}
     */
    function () {
        var _this = this;
        /** @type {?} */
        var shareButtonFactory = this._share.config.prop[this.shareButtonName];
        /** @type {?} */
        var button = shareButtonFactory.create(shareButtonFactory, 
        // Pass the url property as a function, so the button class always gets the recent url value.
        function () { return _this.url; }, this._http, this._platform, this._document, this._share.windowSize, 
        // This function is meant for the copy button
        function (disabled) {
            _this.pointerEvents = disabled ? 'none' : 'auto';
            _this._cd.markForCheck();
        });
        if (button) {
            // Set share button properties
            this.shareButton = button;
            // Remove previous button class
            this._renderer.removeClass(this._el.nativeElement, "sb-" + this._buttonClass);
            // Add new button class
            this._renderer.addClass(this._el.nativeElement, "sb-" + this.shareButtonName);
            // Set button css color variable
            this._el.nativeElement.style.setProperty('--button-color', this.shareButton.color);
            // Keep a copy of the class for future replacement
            this._buttonClass = this.shareButtonName;
            // Set aria-label attribute
            this._renderer.setAttribute(this._el.nativeElement, 'aria-label', button.ariaLabel);
        }
        else {
            console.error("[ShareButtons]: The share button '" + this.shareButtonName + "' does not exist!");
        }
    };
    /** Get meta tag content */
    /**
     * Get meta tag content
     * @private
     * @param {?} key
     * @return {?}
     */
    ShareDirective.prototype._getMetaTagContent = /**
     * Get meta tag content
     * @private
     * @param {?} key
     * @return {?}
     */
    function (key) {
        /** @type {?} */
        var metaUsingProperty = this._meta.getTag("property=\"" + key + "\"");
        if (metaUsingProperty)
            return metaUsingProperty.getAttribute('content');
        /** @type {?} */
        var metaUsingName = this._meta.getTag("name=\"" + key + "\"");
        if (metaUsingName)
            return metaUsingName.getAttribute('content');
    };
    /**
     * @private
     * @param {?} change
     * @return {?}
     */
    ShareDirective.prototype._shareButtonChanged = /**
     * @private
     * @param {?} change
     * @return {?}
     */
    function (change) {
        return change && (change.firstChange || change.previousValue !== change.currentValue);
    };
    /**
     * @private
     * @param {?} change
     * @return {?}
     */
    ShareDirective.prototype._urlChanged = /**
     * @private
     * @param {?} change
     * @return {?}
     */
    function (change) {
        return !this.url || (change && change.previousValue !== change.currentValue);
    };
    ShareDirective.decorators = [
        { type: Directive, args: [{
                    selector: '[shareButton], [share-button]'
                },] }
    ];
    /** @nocollapse */
    ShareDirective.ctorParameters = function () { return [
        { type: Meta },
        { type: ElementRef },
        { type: HttpClient },
        { type: Platform },
        { type: Renderer2 },
        { type: ChangeDetectorRef },
        { type: ShareService },
        { type: undefined, decorators: [{ type: Inject, args: [DOCUMENT,] }] }
    ]; };
    ShareDirective.propDecorators = {
        shareButtonName: [{ type: Input, args: ['shareButton',] }],
        getCount: [{ type: Input }],
        autoSetMeta: [{ type: Input }],
        url: [{ type: Input }],
        title: [{ type: Input }],
        description: [{ type: Input }],
        image: [{ type: Input }],
        tags: [{ type: Input }],
        count: [{ type: Output }],
        opened: [{ type: Output }],
        closed: [{ type: Output }],
        pointerEvents: [{ type: HostBinding, args: ['style.pointerEvents',] }],
        share: [{ type: HostListener, args: ['click',] }]
    };
    return ShareDirective;
}());
export { ShareDirective };
if (false) {
    /**
     * A ref to button class - used to remove previous class when the button type is changed
     * @type {?}
     * @private
     */
    ShareDirective.prototype._buttonClass;
    /**
     * Share window closed event subscription
     * @type {?}
     * @private
     */
    ShareDirective.prototype._shareWindowClosed;
    /**
     * Button properties
     * @type {?}
     */
    ShareDirective.prototype.shareButton;
    /**
     * Share button type
     * @type {?}
     */
    ShareDirective.prototype.shareButtonName;
    /**
     * Get share count
     * @type {?}
     */
    ShareDirective.prototype.getCount;
    /**
     * Set meta tags from document head, useful when SEO is supported
     * @type {?}
     */
    ShareDirective.prototype.autoSetMeta;
    /**
     * Sharing link
     * @type {?}
     */
    ShareDirective.prototype.url;
    /**
     * Sets the title parameter
     * @type {?}
     */
    ShareDirective.prototype.title;
    /**
     * Sets the description parameter
     * @type {?}
     */
    ShareDirective.prototype.description;
    /**
     * Sets the image parameter for sharing on Pinterest
     * @type {?}
     */
    ShareDirective.prototype.image;
    /**
     * Sets the tags parameter for sharing on Twitter and Tumblr
     * @type {?}
     */
    ShareDirective.prototype.tags;
    /**
     * Stream that emits when share count is fetched
     * @type {?}
     */
    ShareDirective.prototype.count;
    /**
     * Stream that emits when share dialog is opened
     * @type {?}
     */
    ShareDirective.prototype.opened;
    /**
     * Stream that emits when share dialog is closed
     * @type {?}
     */
    ShareDirective.prototype.closed;
    /** @type {?} */
    ShareDirective.prototype.pointerEvents;
    /**
     * @type {?}
     * @private
     */
    ShareDirective.prototype._meta;
    /**
     * @type {?}
     * @private
     */
    ShareDirective.prototype._el;
    /**
     * @type {?}
     * @private
     */
    ShareDirective.prototype._http;
    /**
     * @type {?}
     * @private
     */
    ShareDirective.prototype._platform;
    /**
     * @type {?}
     * @private
     */
    ShareDirective.prototype._renderer;
    /**
     * @type {?}
     * @private
     */
    ShareDirective.prototype._cd;
    /**
     * @type {?}
     * @private
     */
    ShareDirective.prototype._share;
    /**
     * @type {?}
     * @private
     */
    ShareDirective.prototype._document;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2hhcmUtYnV0dG9uLmRpcmVjdGl2ZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BuZ3gtc2hhcmUvY29yZS8iLCJzb3VyY2VzIjpbImxpYi9zaGFyZS1idXR0b24uZGlyZWN0aXZlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQ0wsU0FBUyxFQUNULEtBQUssRUFDTCxNQUFNLEVBQ04sV0FBVyxFQUNYLFlBQVksRUFDWixNQUFNLEVBS04sWUFBWSxFQUNaLFVBQVUsRUFDVixTQUFTLEVBQ1QsaUJBQWlCLEVBQ2xCLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMzQyxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFDbEQsT0FBTyxFQUFFLElBQUksRUFBRSxNQUFNLDJCQUEyQixDQUFDO0FBQ2pELE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSx1QkFBdUIsQ0FBQztBQUNqRCxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBRXBDLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUUvQyxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sU0FBUyxDQUFDO0FBR3RDO0lBK0NFLHdCQUFvQixLQUFXLEVBQ1gsR0FBZSxFQUNmLEtBQWlCLEVBQ2pCLFNBQW1CLEVBQ25CLFNBQW9CLEVBQ3BCLEdBQXNCLEVBQ3RCLE1BQW9CLEVBQ0YsU0FBYztRQVBoQyxVQUFLLEdBQUwsS0FBSyxDQUFNO1FBQ1gsUUFBRyxHQUFILEdBQUcsQ0FBWTtRQUNmLFVBQUssR0FBTCxLQUFLLENBQVk7UUFDakIsY0FBUyxHQUFULFNBQVMsQ0FBVTtRQUNuQixjQUFTLEdBQVQsU0FBUyxDQUFXO1FBQ3BCLFFBQUcsR0FBSCxHQUFHLENBQW1CO1FBQ3RCLFdBQU0sR0FBTixNQUFNLENBQWM7UUFDRixjQUFTLEdBQVQsU0FBUyxDQUFLOzs7O1FB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QUEyQjs7Ozs7SUFDM0IsbUNBQTRCOzs7OztJQUM1Qiw2QkFBOEI7Ozs7O0lBQzlCLGdDQUE0Qjs7Ozs7SUFDNUIsbUNBQXdDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcclxuICBEaXJlY3RpdmUsXHJcbiAgSW5wdXQsXHJcbiAgT3V0cHV0LFxyXG4gIEhvc3RCaW5kaW5nLFxyXG4gIEhvc3RMaXN0ZW5lcixcclxuICBJbmplY3QsXHJcbiAgT25DaGFuZ2VzLFxyXG4gIE9uRGVzdHJveSxcclxuICBTaW1wbGVDaGFuZ2VzLFxyXG4gIFNpbXBsZUNoYW5nZSxcclxuICBFdmVudEVtaXR0ZXIsXHJcbiAgRWxlbWVudFJlZixcclxuICBSZW5kZXJlcjIsXHJcbiAgQ2hhbmdlRGV0ZWN0b3JSZWZcclxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgRE9DVU1FTlQgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xyXG5pbXBvcnQgeyBIdHRwQ2xpZW50IH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uL2h0dHAnO1xyXG5pbXBvcnQgeyBNZXRhIH0gZnJvbSAnQGFuZ3VsYXIvcGxhdGZvcm0tYnJvd3Nlcic7XHJcbmltcG9ydCB7IFBsYXRmb3JtIH0gZnJvbSAnQGFuZ3VsYXIvY2RrL3BsYXRmb3JtJztcclxuaW1wb3J0IHsgU3Vic2NyaXB0aW9uIH0gZnJvbSAncnhqcyc7XHJcblxyXG5pbXBvcnQgeyBTaGFyZVNlcnZpY2UgfSBmcm9tICcuL3NoYXJlLnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBJU2hhcmVCdXR0b24sIFNoYXJlTWV0YVRhZ3MgfSBmcm9tICcuL3NoYXJlLm1vZGVscyc7XHJcbmltcG9ydCB7IGdldFZhbGlkVXJsIH0gZnJvbSAnLi91dGlscyc7XHJcbmltcG9ydCB7IFNoYXJlQnV0dG9uQmFzZSB9IGZyb20gJy4vYnV0dG9ucyc7XHJcblxyXG5ARGlyZWN0aXZlKHtcclxuICBzZWxlY3RvcjogJ1tzaGFyZUJ1dHRvbl0sIFtzaGFyZS1idXR0b25dJ1xyXG59KVxyXG5leHBvcnQgY2xhc3MgU2hhcmVEaXJlY3RpdmUgaW1wbGVtZW50cyBPbkNoYW5nZXMsIE9uRGVzdHJveSB7XHJcblxyXG4gIC8qKiBBIHJlZiB0byBidXR0b24gY2xhc3MgLSB1c2VkIHRvIHJlbW92ZSBwcmV2aW91cyBjbGFzcyB3aGVuIHRoZSBidXR0b24gdHlwZSBpcyBjaGFuZ2VkICovXHJcbiAgcHJpdmF0ZSBfYnV0dG9uQ2xhc3M6IHN0cmluZztcclxuXHJcbiAgLyoqIFNoYXJlIHdpbmRvdyBjbG9zZWQgZXZlbnQgc3Vic2NyaXB0aW9uICovXHJcbiAgcHJpdmF0ZSBfc2hhcmVXaW5kb3dDbG9zZWQgPSBTdWJzY3JpcHRpb24uRU1QVFk7XHJcblxyXG4gIC8qKiBCdXR0b24gcHJvcGVydGllcyAqL1xyXG4gIHNoYXJlQnV0dG9uOiBTaGFyZUJ1dHRvbkJhc2U7XHJcblxyXG4gIC8qKiBTaGFyZSBidXR0b24gdHlwZSAqL1xyXG4gIEBJbnB1dCgnc2hhcmVCdXR0b24nKSBzaGFyZUJ1dHRvbk5hbWU6IHN0cmluZztcclxuXHJcbiAgLyoqIEdldCBzaGFyZSBjb3VudCAqL1xyXG4gIEBJbnB1dCgpIGdldENvdW50ID0gZmFsc2U7XHJcblxyXG4gIC8qKiBTZXQgbWV0YSB0YWdzIGZyb20gZG9jdW1lbnQgaGVhZCwgdXNlZnVsIHdoZW4gU0VPIGlzIHN1cHBvcnRlZCAqL1xyXG4gIEBJbnB1dCgpIGF1dG9TZXRNZXRhOiBib29sZWFuID0gdGhpcy5fc2hhcmUuY29uZmlnLmF1dG9TZXRNZXRhO1xyXG5cclxuICAvKiogU2hhcmluZyBsaW5rICovXHJcbiAgQElucHV0KCkgdXJsOiBzdHJpbmcgPSB0aGlzLl9zaGFyZS5jb25maWcudXJsO1xyXG5cclxuICAvKiogU2V0cyB0aGUgdGl0bGUgcGFyYW1ldGVyICovXHJcbiAgQElucHV0KCkgdGl0bGU6IHN0cmluZyA9IHRoaXMuX3NoYXJlLmNvbmZpZy50aXRsZTtcclxuXHJcbiAgLyoqIFNldHMgdGhlIGRlc2NyaXB0aW9uIHBhcmFtZXRlciAqL1xyXG4gIEBJbnB1dCgpIGRlc2NyaXB0aW9uOiBzdHJpbmcgPSB0aGlzLl9zaGFyZS5jb25maWcuZGVzY3JpcHRpb247XHJcblxyXG4gIC8qKiBTZXRzIHRoZSBpbWFnZSBwYXJhbWV0ZXIgZm9yIHNoYXJpbmcgb24gUGludGVyZXN0ICovXHJcbiAgQElucHV0KCkgaW1hZ2U6IHN0cmluZyA9IHRoaXMuX3NoYXJlLmNvbmZpZy5pbWFnZTtcclxuXHJcbiAgLyoqIFNldHMgdGhlIHRhZ3MgcGFyYW1ldGVyIGZvciBzaGFyaW5nIG9uIFR3aXR0ZXIgYW5kIFR1bWJsciAqL1xyXG4gIEBJbnB1dCgpIHRhZ3M6IHN0cmluZyA9IHRoaXMuX3NoYXJlLmNvbmZpZy50YWdzO1xyXG5cclxuICAvKiogU3RyZWFtIHRoYXQgZW1pdHMgd2hlbiBzaGFyZSBjb3VudCBpcyBmZXRjaGVkICovXHJcbiAgQE91dHB1dCgpIGNvdW50ID0gbmV3IEV2ZW50RW1pdHRlcjxudW1iZXI+KCk7XHJcblxyXG4gIC8qKiBTdHJlYW0gdGhhdCBlbWl0cyB3aGVuIHNoYXJlIGRpYWxvZyBpcyBvcGVuZWQgKi9cclxuICBAT3V0cHV0KCkgb3BlbmVkID0gbmV3IEV2ZW50RW1pdHRlcjxzdHJpbmc+KCk7XHJcblxyXG4gIC8qKiBTdHJlYW0gdGhhdCBlbWl0cyB3aGVuIHNoYXJlIGRpYWxvZyBpcyBjbG9zZWQgKi9cclxuICBAT3V0cHV0KCkgY2xvc2VkID0gbmV3IEV2ZW50RW1pdHRlcjxzdHJpbmc+KCk7XHJcblxyXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgX21ldGE6IE1ldGEsXHJcbiAgICAgICAgICAgICAgcHJpdmF0ZSBfZWw6IEVsZW1lbnRSZWYsXHJcbiAgICAgICAgICAgICAgcHJpdmF0ZSBfaHR0cDogSHR0cENsaWVudCxcclxuICAgICAgICAgICAgICBwcml2YXRlIF9wbGF0Zm9ybTogUGxhdGZvcm0sXHJcbiAgICAgICAgICAgICAgcHJpdmF0ZSBfcmVuZGVyZXI6IFJlbmRlcmVyMixcclxuICAgICAgICAgICAgICBwcml2YXRlIF9jZDogQ2hhbmdlRGV0ZWN0b3JSZWYsXHJcbiAgICAgICAgICAgICAgcHJpdmF0ZSBfc2hhcmU6IFNoYXJlU2VydmljZSxcclxuICAgICAgICAgICAgICBASW5qZWN0KERPQ1VNRU5UKSBwcml2YXRlIF9kb2N1bWVudDogYW55KSB7XHJcbiAgfVxyXG5cclxuICBASG9zdEJpbmRpbmcoJ3N0eWxlLnBvaW50ZXJFdmVudHMnKSBwb2ludGVyRXZlbnRzOiBzdHJpbmc7XHJcblxyXG4gIC8qKiBTaGFyZSB0aGUgbGluayAqL1xyXG4gIEBIb3N0TGlzdGVuZXIoJ2NsaWNrJylcclxuICBzaGFyZSgpIHtcclxuICAgIGNvbnN0IG1ldGFUYWdzOiBTaGFyZU1ldGFUYWdzID0gdGhpcy5hdXRvU2V0TWV0YSA/IHtcclxuICAgICAgdXJsOiB0aGlzLnVybCxcclxuICAgICAgdGl0bGU6IHRoaXMudGl0bGUgfHwgdGhpcy5fZ2V0TWV0YVRhZ0NvbnRlbnQoJ29nOnRpdGxlJyksXHJcbiAgICAgIGRlc2NyaXB0aW9uOiB0aGlzLmRlc2NyaXB0aW9uIHx8IHRoaXMuX2dldE1ldGFUYWdDb250ZW50KCdvZzpkZXNjcmlwdGlvbicpLFxyXG4gICAgICBpbWFnZTogdGhpcy5pbWFnZSB8fCB0aGlzLl9nZXRNZXRhVGFnQ29udGVudCgnb2c6aW1hZ2UnKSxcclxuICAgICAgdmlhOiB0aGlzLl9zaGFyZS5jb25maWcudHdpdHRlckFjY291bnQsXHJcbiAgICAgIHRhZ3M6IHRoaXMudGFncyxcclxuICAgIH0gOiB7XHJcbiAgICAgIHVybDogdGhpcy51cmwsXHJcbiAgICAgIHRpdGxlOiB0aGlzLnRpdGxlLFxyXG4gICAgICBkZXNjcmlwdGlvbjogdGhpcy5kZXNjcmlwdGlvbixcclxuICAgICAgaW1hZ2U6IHRoaXMuaW1hZ2UsXHJcbiAgICAgIHRhZ3M6IHRoaXMudGFncyxcclxuICAgICAgdmlhOiB0aGlzLl9zaGFyZS5jb25maWcudHdpdHRlckFjY291bnQsXHJcbiAgICB9O1xyXG5cclxuICAgIC8vIFNoYXJlIHRoZSBsaW5rXHJcbiAgICB0aGlzLnNoYXJlQnV0dG9uLmNsaWNrKG1ldGFUYWdzKTtcclxuICB9XHJcblxyXG4gIG5nT25DaGFuZ2VzKGNoYW5nZXM6IFNpbXBsZUNoYW5nZXMpIHtcclxuICAgIC8vIEF2b2lkIFNTUiBlcnJvclxyXG4gICAgaWYgKHRoaXMuX3BsYXRmb3JtLmlzQnJvd3Nlcikge1xyXG5cclxuICAgICAgaWYgKHRoaXMuX3NoYXJlQnV0dG9uQ2hhbmdlZChjaGFuZ2VzWydzaGFyZUJ1dHRvbk5hbWUnXSkpIHtcclxuICAgICAgICB0aGlzLl9jcmVhdGVTaGFyZUJ1dHRvbigpO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBpZiAodGhpcy5fdXJsQ2hhbmdlZChjaGFuZ2VzWyd1cmwnXSkpIHtcclxuICAgICAgICB0aGlzLnVybCA9IGdldFZhbGlkVXJsKFxyXG4gICAgICAgICAgdGhpcy5hdXRvU2V0TWV0YVxyXG4gICAgICAgICAgICA/IHRoaXMudXJsIHx8IHRoaXMuX2dldE1ldGFUYWdDb250ZW50KCdvZzp1cmwnKVxyXG4gICAgICAgICAgICA6IHRoaXMudXJsLFxyXG4gICAgICAgICAgdGhpcy5fZG9jdW1lbnQuZGVmYXVsdFZpZXcubG9jYXRpb24uaHJlZlxyXG4gICAgICAgICk7XHJcblxyXG4gICAgICAgIGlmICh0aGlzLmdldENvdW50ICYmIHRoaXMuc2hhcmVCdXR0b24uc3VwcG9ydFNoYXJlQ291bnQpIHtcclxuICAgICAgICAgIHRoaXMuc2hhcmVCdXR0b24uc2hhcmVDb3VudCh0aGlzLnVybCkuc3Vic2NyaWJlKChjb3VudDogbnVtYmVyKSA9PiB0aGlzLmNvdW50LmVtaXQoY291bnQpKTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcblxyXG4gIG5nT25EZXN0cm95KCkge1xyXG4gICAgdGhpcy5fc2hhcmVXaW5kb3dDbG9zZWQudW5zdWJzY3JpYmUoKTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgX2NyZWF0ZVNoYXJlQnV0dG9uKCkge1xyXG4gICAgY29uc3Qgc2hhcmVCdXR0b25GYWN0b3J5OiBJU2hhcmVCdXR0b24gPSB0aGlzLl9zaGFyZS5jb25maWcucHJvcFt0aGlzLnNoYXJlQnV0dG9uTmFtZV07XHJcbiAgICBjb25zdCBidXR0b246IFNoYXJlQnV0dG9uQmFzZSA9IHNoYXJlQnV0dG9uRmFjdG9yeS5jcmVhdGUoXHJcbiAgICAgIHNoYXJlQnV0dG9uRmFjdG9yeSxcclxuICAgICAgLy8gUGFzcyB0aGUgdXJsIHByb3BlcnR5IGFzIGEgZnVuY3Rpb24sIHNvIHRoZSBidXR0b24gY2xhc3MgYWx3YXlzIGdldHMgdGhlIHJlY2VudCB1cmwgdmFsdWUuXHJcbiAgICAgICgpID0+IHRoaXMudXJsLFxyXG4gICAgICB0aGlzLl9odHRwLFxyXG4gICAgICB0aGlzLl9wbGF0Zm9ybSxcclxuICAgICAgdGhpcy5fZG9jdW1lbnQsXHJcbiAgICAgIHRoaXMuX3NoYXJlLndpbmRvd1NpemUsXHJcbiAgICAgIC8vIFRoaXMgZnVuY3Rpb24gaXMgbWVhbnQgZm9yIHRoZSBjb3B5IGJ1dHRvblxyXG4gICAgICAoZGlzYWJsZWQ6IGJvb2xlYW4pID0+IHtcclxuICAgICAgICB0aGlzLnBvaW50ZXJFdmVudHMgPSBkaXNhYmxlZCA/ICdub25lJyA6ICdhdXRvJztcclxuICAgICAgICB0aGlzLl9jZC5tYXJrRm9yQ2hlY2soKTtcclxuICAgICAgfVxyXG4gICAgKTtcclxuICAgIGlmIChidXR0b24pIHtcclxuICAgICAgLy8gU2V0IHNoYXJlIGJ1dHRvbiBwcm9wZXJ0aWVzXHJcbiAgICAgIHRoaXMuc2hhcmVCdXR0b24gPSBidXR0b247XHJcblxyXG4gICAgICAvLyBSZW1vdmUgcHJldmlvdXMgYnV0dG9uIGNsYXNzXHJcbiAgICAgIHRoaXMuX3JlbmRlcmVyLnJlbW92ZUNsYXNzKHRoaXMuX2VsLm5hdGl2ZUVsZW1lbnQsIGBzYi0ke3RoaXMuX2J1dHRvbkNsYXNzfWApO1xyXG5cclxuICAgICAgLy8gQWRkIG5ldyBidXR0b24gY2xhc3NcclxuICAgICAgdGhpcy5fcmVuZGVyZXIuYWRkQ2xhc3ModGhpcy5fZWwubmF0aXZlRWxlbWVudCwgYHNiLSR7dGhpcy5zaGFyZUJ1dHRvbk5hbWV9YCk7XHJcblxyXG4gICAgICAvLyBTZXQgYnV0dG9uIGNzcyBjb2xvciB2YXJpYWJsZVxyXG4gICAgICB0aGlzLl9lbC5uYXRpdmVFbGVtZW50LnN0eWxlLnNldFByb3BlcnR5KCctLWJ1dHRvbi1jb2xvcicsIHRoaXMuc2hhcmVCdXR0b24uY29sb3IpO1xyXG5cclxuICAgICAgLy8gS2VlcCBhIGNvcHkgb2YgdGhlIGNsYXNzIGZvciBmdXR1cmUgcmVwbGFjZW1lbnRcclxuICAgICAgdGhpcy5fYnV0dG9uQ2xhc3MgPSB0aGlzLnNoYXJlQnV0dG9uTmFtZTtcclxuXHJcbiAgICAgIC8vIFNldCBhcmlhLWxhYmVsIGF0dHJpYnV0ZVxyXG4gICAgICB0aGlzLl9yZW5kZXJlci5zZXRBdHRyaWJ1dGUodGhpcy5fZWwubmF0aXZlRWxlbWVudCwgJ2FyaWEtbGFiZWwnLCBidXR0b24uYXJpYUxhYmVsKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGNvbnNvbGUuZXJyb3IoYFtTaGFyZUJ1dHRvbnNdOiBUaGUgc2hhcmUgYnV0dG9uICcke3RoaXMuc2hhcmVCdXR0b25OYW1lfScgZG9lcyBub3QgZXhpc3QhYCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAvKiogR2V0IG1ldGEgdGFnIGNvbnRlbnQgKi9cclxuICBwcml2YXRlIF9nZXRNZXRhVGFnQ29udGVudChrZXk6IHN0cmluZyk6IHN0cmluZyB7XHJcbiAgICBjb25zdCBtZXRhVXNpbmdQcm9wZXJ0eTogSFRNTE1ldGFFbGVtZW50ID0gdGhpcy5fbWV0YS5nZXRUYWcoYHByb3BlcnR5PVwiJHtrZXl9XCJgKTtcclxuICAgIGlmIChtZXRhVXNpbmdQcm9wZXJ0eSkgcmV0dXJuIG1ldGFVc2luZ1Byb3BlcnR5LmdldEF0dHJpYnV0ZSgnY29udGVudCcpO1xyXG4gICAgY29uc3QgbWV0YVVzaW5nTmFtZTogSFRNTE1ldGFFbGVtZW50ID0gdGhpcy5fbWV0YS5nZXRUYWcoYG5hbWU9XCIke2tleX1cImApO1xyXG4gICAgaWYgKG1ldGFVc2luZ05hbWUpIHJldHVybiBtZXRhVXNpbmdOYW1lLmdldEF0dHJpYnV0ZSgnY29udGVudCcpO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBfc2hhcmVCdXR0b25DaGFuZ2VkKGNoYW5nZTogU2ltcGxlQ2hhbmdlKTogYm9vbGVhbiB7XHJcbiAgICByZXR1cm4gY2hhbmdlICYmIChjaGFuZ2UuZmlyc3RDaGFuZ2UgfHwgY2hhbmdlLnByZXZpb3VzVmFsdWUgIT09IGNoYW5nZS5jdXJyZW50VmFsdWUpO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBfdXJsQ2hhbmdlZChjaGFuZ2U6IFNpbXBsZUNoYW5nZSk6IGJvb2xlYW4ge1xyXG4gICAgcmV0dXJuICF0aGlzLnVybCB8fCAoY2hhbmdlICYmIGNoYW5nZS5wcmV2aW91c1ZhbHVlICE9PSBjaGFuZ2UuY3VycmVudFZhbHVlKTtcclxuICB9XHJcblxyXG59XHJcbiJdfQ==