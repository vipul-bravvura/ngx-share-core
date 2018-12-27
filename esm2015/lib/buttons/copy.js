/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { ShareButtonBase } from './base';
export class CopyButton extends ShareButtonBase {
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
    }
    /**
     * @return {?}
     */
    get text() {
        return this._disable ? this._props.extra.successLabel : this._props.text;
    }
    /**
     * @return {?}
     */
    get icon() {
        return this._disable ? this._props.extra.successIcon : this._props.icon;
    }
    /**
     * @private
     * @return {?}
     */
    _disableButton() {
        // Disable pointer for tiny delay
        this._disable = true;
        this._disableButtonClick(true);
    }
    /**
     * @private
     * @return {?}
     */
    _resetButton() {
        this._disable = false;
        this._disableButtonClick(false);
    }
    /**
     * @return {?}
     */
    click() {
        try {
            /** @type {?} */
            const textArea = (/** @type {?} */ (this._document.createElement('textarea')));
            textArea.value = decodeURIComponent(this.desktop);
            this._document.body.appendChild(textArea);
            // highlight TextArea to copy the sharing link
            if (this._platform.IOS) {
                /** @type {?} */
                const range = this._document.createRange();
                range.selectNodeContents(textArea);
                /** @type {?} */
                const selection = this._document.defaultView.getSelection();
                selection.removeAllRanges();
                selection.addRange(range);
                textArea.readOnly = true;
                textArea.setSelectionRange(0, 999999);
            }
            else {
                textArea.select();
            }
            this._document.execCommand('copy');
            this._document.body.removeChild(textArea);
            this._disableButton();
        }
        catch (e) {
            console.warn('Copy link failed!', e.message);
        }
        finally {
            setTimeout(() => this._resetButton(), 2000);
        }
    }
}
if (false) {
    /**
     * @type {?}
     * @private
     */
    CopyButton.prototype._disable;
    /**
     * @type {?}
     * @protected
     */
    CopyButton.prototype._props;
    /**
     * @type {?}
     * @protected
     */
    CopyButton.prototype._url;
    /**
     * @type {?}
     * @protected
     */
    CopyButton.prototype._http;
    /**
     * @type {?}
     * @protected
     */
    CopyButton.prototype._platform;
    /**
     * @type {?}
     * @protected
     */
    CopyButton.prototype._document;
    /**
     * @type {?}
     * @protected
     */
    CopyButton.prototype._windowSize;
    /**
     * @type {?}
     * @protected
     */
    CopyButton.prototype._disableButtonClick;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29weS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BuZ3gtc2hhcmUvY29yZS8iLCJzb3VyY2VzIjpbImxpYi9idXR0b25zL2NvcHkudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUVBLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSxRQUFRLENBQUM7QUFHekMsTUFBTSxPQUFPLFVBQVcsU0FBUSxlQUFlOzs7Ozs7Ozs7O0lBWTdDLFlBQXNCLE1BQW9CLEVBQ3BCLElBQWtCLEVBQ2xCLEtBQWlCLEVBQ2pCLFNBQW1CLEVBQ25CLFNBQW1CLEVBQ25CLFdBQW1CLEVBQ25CLG1CQUErQztRQUNuRSxLQUFLLENBQUMsTUFBTSxFQUFFLElBQUksRUFBRSxLQUFLLEVBQUUsU0FBUyxFQUFFLFNBQVMsRUFBRSxXQUFXLEVBQUUsbUJBQW1CLENBQUMsQ0FBQztRQVAvRCxXQUFNLEdBQU4sTUFBTSxDQUFjO1FBQ3BCLFNBQUksR0FBSixJQUFJLENBQWM7UUFDbEIsVUFBSyxHQUFMLEtBQUssQ0FBWTtRQUNqQixjQUFTLEdBQVQsU0FBUyxDQUFVO1FBQ25CLGNBQVMsR0FBVCxTQUFTLENBQVU7UUFDbkIsZ0JBQVcsR0FBWCxXQUFXLENBQVE7UUFDbkIsd0JBQW1CLEdBQW5CLG1CQUFtQixDQUE0QjtJQUVyRSxDQUFDOzs7O0lBaEJELElBQUksSUFBSTtRQUNOLE9BQU8sSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsWUFBWSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQztJQUMzRSxDQUFDOzs7O0lBRUQsSUFBSSxJQUFJO1FBQ04sT0FBTyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDO0lBQzFFLENBQUM7Ozs7O0lBWU8sY0FBYztRQUNwQixpQ0FBaUM7UUFDakMsSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUM7UUFDckIsSUFBSSxDQUFDLG1CQUFtQixDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ2pDLENBQUM7Ozs7O0lBRU8sWUFBWTtRQUNsQixJQUFJLENBQUMsUUFBUSxHQUFHLEtBQUssQ0FBQztRQUN0QixJQUFJLENBQUMsbUJBQW1CLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDbEMsQ0FBQzs7OztJQUVELEtBQUs7UUFDSCxJQUFJOztrQkFDSSxRQUFRLEdBQXdCLG1CQUFBLElBQUksQ0FBQyxTQUFTLENBQUMsYUFBYSxDQUFDLFVBQVUsQ0FBQyxFQUF1QjtZQUVyRyxRQUFRLENBQUMsS0FBSyxHQUFHLGtCQUFrQixDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQztZQUNsRCxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsUUFBUSxDQUFDLENBQUM7WUFFMUMsOENBQThDO1lBQzlDLElBQUksSUFBSSxDQUFDLFNBQVMsQ0FBQyxHQUFHLEVBQUU7O3NCQUNoQixLQUFLLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxXQUFXLEVBQUU7Z0JBQzFDLEtBQUssQ0FBQyxrQkFBa0IsQ0FBQyxRQUFRLENBQUMsQ0FBQzs7c0JBQzdCLFNBQVMsR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLFdBQVcsQ0FBQyxZQUFZLEVBQUU7Z0JBQzNELFNBQVMsQ0FBQyxlQUFlLEVBQUUsQ0FBQztnQkFDNUIsU0FBUyxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUMsQ0FBQztnQkFDMUIsUUFBUSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUM7Z0JBQ3pCLFFBQVEsQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDLEVBQUUsTUFBTSxDQUFDLENBQUM7YUFDdkM7aUJBQU07Z0JBQ0wsUUFBUSxDQUFDLE1BQU0sRUFBRSxDQUFDO2FBQ25CO1lBQ0QsSUFBSSxDQUFDLFNBQVMsQ0FBQyxXQUFXLENBQUMsTUFBTSxDQUFDLENBQUM7WUFDbkMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLFFBQVEsQ0FBQyxDQUFDO1lBQzFDLElBQUksQ0FBQyxjQUFjLEVBQUUsQ0FBQztTQUN2QjtRQUFDLE9BQU8sQ0FBQyxFQUFFO1lBQ1YsT0FBTyxDQUFDLElBQUksQ0FBQyxtQkFBbUIsRUFBRSxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUM7U0FDOUM7Z0JBQVM7WUFDUixVQUFVLENBQUMsR0FBRyxFQUFFLENBQUMsSUFBSSxDQUFDLFlBQVksRUFBRSxFQUFFLElBQUksQ0FBQyxDQUFDO1NBQzdDO0lBQ0gsQ0FBQztDQUNGOzs7Ozs7SUEzREMsOEJBQTBCOzs7OztJQVVkLDRCQUE4Qjs7Ozs7SUFDOUIsMEJBQTRCOzs7OztJQUM1QiwyQkFBMkI7Ozs7O0lBQzNCLCtCQUE2Qjs7Ozs7SUFDN0IsK0JBQTZCOzs7OztJQUM3QixpQ0FBNkI7Ozs7O0lBQzdCLHlDQUF5RCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFBsYXRmb3JtIH0gZnJvbSAnQGFuZ3VsYXIvY2RrL3BsYXRmb3JtJztcclxuaW1wb3J0IHsgSHR0cENsaWVudCB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbi9odHRwJztcclxuaW1wb3J0IHsgU2hhcmVCdXR0b25CYXNlIH0gZnJvbSAnLi9iYXNlJztcclxuaW1wb3J0IHsgSVNoYXJlQnV0dG9uIH0gZnJvbSAnLi4vc2hhcmUubW9kZWxzJztcclxuXHJcbmV4cG9ydCBjbGFzcyBDb3B5QnV0dG9uIGV4dGVuZHMgU2hhcmVCdXR0b25CYXNlIHtcclxuXHJcbiAgcHJpdmF0ZSBfZGlzYWJsZTogYm9vbGVhbjtcclxuXHJcbiAgZ2V0IHRleHQoKSB7XHJcbiAgICByZXR1cm4gdGhpcy5fZGlzYWJsZSA/IHRoaXMuX3Byb3BzLmV4dHJhLnN1Y2Nlc3NMYWJlbCA6IHRoaXMuX3Byb3BzLnRleHQ7XHJcbiAgfVxyXG5cclxuICBnZXQgaWNvbigpIHtcclxuICAgIHJldHVybiB0aGlzLl9kaXNhYmxlID8gdGhpcy5fcHJvcHMuZXh0cmEuc3VjY2Vzc0ljb24gOiB0aGlzLl9wcm9wcy5pY29uO1xyXG4gIH1cclxuXHJcbiAgY29uc3RydWN0b3IocHJvdGVjdGVkIF9wcm9wczogSVNoYXJlQnV0dG9uLFxyXG4gICAgICAgICAgICAgIHByb3RlY3RlZCBfdXJsOiAoKSA9PiBzdHJpbmcsXHJcbiAgICAgICAgICAgICAgcHJvdGVjdGVkIF9odHRwOiBIdHRwQ2xpZW50LFxyXG4gICAgICAgICAgICAgIHByb3RlY3RlZCBfcGxhdGZvcm06IFBsYXRmb3JtLFxyXG4gICAgICAgICAgICAgIHByb3RlY3RlZCBfZG9jdW1lbnQ6IERvY3VtZW50LFxyXG4gICAgICAgICAgICAgIHByb3RlY3RlZCBfd2luZG93U2l6ZTogc3RyaW5nLFxyXG4gICAgICAgICAgICAgIHByb3RlY3RlZCBfZGlzYWJsZUJ1dHRvbkNsaWNrOiAoZGlzYWJsZTogYm9vbGVhbikgPT4gdm9pZCkge1xyXG4gICAgc3VwZXIoX3Byb3BzLCBfdXJsLCBfaHR0cCwgX3BsYXRmb3JtLCBfZG9jdW1lbnQsIF93aW5kb3dTaXplLCBfZGlzYWJsZUJ1dHRvbkNsaWNrKTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgX2Rpc2FibGVCdXR0b24oKSB7XHJcbiAgICAvLyBEaXNhYmxlIHBvaW50ZXIgZm9yIHRpbnkgZGVsYXlcclxuICAgIHRoaXMuX2Rpc2FibGUgPSB0cnVlO1xyXG4gICAgdGhpcy5fZGlzYWJsZUJ1dHRvbkNsaWNrKHRydWUpO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBfcmVzZXRCdXR0b24oKSB7XHJcbiAgICB0aGlzLl9kaXNhYmxlID0gZmFsc2U7XHJcbiAgICB0aGlzLl9kaXNhYmxlQnV0dG9uQ2xpY2soZmFsc2UpO1xyXG4gIH1cclxuXHJcbiAgY2xpY2soKTogdm9pZCB7XHJcbiAgICB0cnkge1xyXG4gICAgICBjb25zdCB0ZXh0QXJlYTogSFRNTFRleHRBcmVhRWxlbWVudCA9IHRoaXMuX2RvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RleHRhcmVhJykgYXMgSFRNTFRleHRBcmVhRWxlbWVudDtcclxuXHJcbiAgICAgIHRleHRBcmVhLnZhbHVlID0gZGVjb2RlVVJJQ29tcG9uZW50KHRoaXMuZGVza3RvcCk7XHJcbiAgICAgIHRoaXMuX2RvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQodGV4dEFyZWEpO1xyXG5cclxuICAgICAgLy8gaGlnaGxpZ2h0IFRleHRBcmVhIHRvIGNvcHkgdGhlIHNoYXJpbmcgbGlua1xyXG4gICAgICBpZiAodGhpcy5fcGxhdGZvcm0uSU9TKSB7XHJcbiAgICAgICAgY29uc3QgcmFuZ2UgPSB0aGlzLl9kb2N1bWVudC5jcmVhdGVSYW5nZSgpO1xyXG4gICAgICAgIHJhbmdlLnNlbGVjdE5vZGVDb250ZW50cyh0ZXh0QXJlYSk7XHJcbiAgICAgICAgY29uc3Qgc2VsZWN0aW9uID0gdGhpcy5fZG9jdW1lbnQuZGVmYXVsdFZpZXcuZ2V0U2VsZWN0aW9uKCk7XHJcbiAgICAgICAgc2VsZWN0aW9uLnJlbW92ZUFsbFJhbmdlcygpO1xyXG4gICAgICAgIHNlbGVjdGlvbi5hZGRSYW5nZShyYW5nZSk7XHJcbiAgICAgICAgdGV4dEFyZWEucmVhZE9ubHkgPSB0cnVlO1xyXG4gICAgICAgIHRleHRBcmVhLnNldFNlbGVjdGlvblJhbmdlKDAsIDk5OTk5OSk7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgdGV4dEFyZWEuc2VsZWN0KCk7XHJcbiAgICAgIH1cclxuICAgICAgdGhpcy5fZG9jdW1lbnQuZXhlY0NvbW1hbmQoJ2NvcHknKTtcclxuICAgICAgdGhpcy5fZG9jdW1lbnQuYm9keS5yZW1vdmVDaGlsZCh0ZXh0QXJlYSk7XHJcbiAgICAgIHRoaXMuX2Rpc2FibGVCdXR0b24oKTtcclxuICAgIH0gY2F0Y2ggKGUpIHtcclxuICAgICAgY29uc29sZS53YXJuKCdDb3B5IGxpbmsgZmFpbGVkIScsIGUubWVzc2FnZSk7XHJcbiAgICB9IGZpbmFsbHkge1xyXG4gICAgICBzZXRUaW1lb3V0KCgpID0+IHRoaXMuX3Jlc2V0QnV0dG9uKCksIDIwMDApO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuIl19