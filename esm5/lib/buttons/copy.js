/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { ShareButtonBase } from './base';
var CopyButton = /** @class */ (function (_super) {
    tslib_1.__extends(CopyButton, _super);
    function CopyButton(_props, _url, _http, _platform, _document, _windowSize, _disableButtonClick) {
        var _this = _super.call(this, _props, _url, _http, _platform, _document, _windowSize, _disableButtonClick) || this;
        _this._props = _props;
        _this._url = _url;
        _this._http = _http;
        _this._platform = _platform;
        _this._document = _document;
        _this._windowSize = _windowSize;
        _this._disableButtonClick = _disableButtonClick;
        return _this;
    }
    Object.defineProperty(CopyButton.prototype, "text", {
        get: /**
         * @return {?}
         */
        function () {
            return this._disable ? this._props.extra.successLabel : this._props.text;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CopyButton.prototype, "icon", {
        get: /**
         * @return {?}
         */
        function () {
            return this._disable ? this._props.extra.successIcon : this._props.icon;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @private
     * @return {?}
     */
    CopyButton.prototype._disableButton = /**
     * @private
     * @return {?}
     */
    function () {
        // Disable pointer for tiny delay
        this._disable = true;
        this._disableButtonClick(true);
    };
    /**
     * @private
     * @return {?}
     */
    CopyButton.prototype._resetButton = /**
     * @private
     * @return {?}
     */
    function () {
        this._disable = false;
        this._disableButtonClick(false);
    };
    /**
     * @return {?}
     */
    CopyButton.prototype.click = /**
     * @return {?}
     */
    function () {
        var _this = this;
        try {
            /** @type {?} */
            var textArea = (/** @type {?} */ (this._document.createElement('textarea')));
            textArea.value = decodeURIComponent(this.desktop);
            this._document.body.appendChild(textArea);
            // highlight TextArea to copy the sharing link
            if (this._platform.IOS) {
                /** @type {?} */
                var range = this._document.createRange();
                range.selectNodeContents(textArea);
                /** @type {?} */
                var selection = this._document.defaultView.getSelection();
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
            setTimeout(function () { return _this._resetButton(); }, 2000);
        }
    };
    return CopyButton;
}(ShareButtonBase));
export { CopyButton };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29weS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BuZ3gtc2hhcmUvY29yZS8iLCJzb3VyY2VzIjpbImxpYi9idXR0b25zL2NvcHkudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFFQSxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sUUFBUSxDQUFDO0FBR3pDO0lBQWdDLHNDQUFlO0lBWTdDLG9CQUFzQixNQUFvQixFQUNwQixJQUFrQixFQUNsQixLQUFpQixFQUNqQixTQUFtQixFQUNuQixTQUFtQixFQUNuQixXQUFtQixFQUNuQixtQkFBK0M7UUFOckUsWUFPRSxrQkFBTSxNQUFNLEVBQUUsSUFBSSxFQUFFLEtBQUssRUFBRSxTQUFTLEVBQUUsU0FBUyxFQUFFLFdBQVcsRUFBRSxtQkFBbUIsQ0FBQyxTQUNuRjtRQVJxQixZQUFNLEdBQU4sTUFBTSxDQUFjO1FBQ3BCLFVBQUksR0FBSixJQUFJLENBQWM7UUFDbEIsV0FBSyxHQUFMLEtBQUssQ0FBWTtRQUNqQixlQUFTLEdBQVQsU0FBUyxDQUFVO1FBQ25CLGVBQVMsR0FBVCxTQUFTLENBQVU7UUFDbkIsaUJBQVcsR0FBWCxXQUFXLENBQVE7UUFDbkIseUJBQW1CLEdBQW5CLG1CQUFtQixDQUE0Qjs7SUFFckUsQ0FBQztJQWhCRCxzQkFBSSw0QkFBSTs7OztRQUFSO1lBQ0UsT0FBTyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxZQUFZLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDO1FBQzNFLENBQUM7OztPQUFBO0lBRUQsc0JBQUksNEJBQUk7Ozs7UUFBUjtZQUNFLE9BQU8sSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQztRQUMxRSxDQUFDOzs7T0FBQTs7Ozs7SUFZTyxtQ0FBYzs7OztJQUF0QjtRQUNFLGlDQUFpQztRQUNqQyxJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQztRQUNyQixJQUFJLENBQUMsbUJBQW1CLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDakMsQ0FBQzs7Ozs7SUFFTyxpQ0FBWTs7OztJQUFwQjtRQUNFLElBQUksQ0FBQyxRQUFRLEdBQUcsS0FBSyxDQUFDO1FBQ3RCLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUNsQyxDQUFDOzs7O0lBRUQsMEJBQUs7OztJQUFMO1FBQUEsaUJBMkJDO1FBMUJDLElBQUk7O2dCQUNJLFFBQVEsR0FBd0IsbUJBQUEsSUFBSSxDQUFDLFNBQVMsQ0FBQyxhQUFhLENBQUMsVUFBVSxDQUFDLEVBQXVCO1lBRXJHLFFBQVEsQ0FBQyxLQUFLLEdBQUcsa0JBQWtCLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDO1lBQ2xELElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxRQUFRLENBQUMsQ0FBQztZQUUxQyw4Q0FBOEM7WUFDOUMsSUFBSSxJQUFJLENBQUMsU0FBUyxDQUFDLEdBQUcsRUFBRTs7b0JBQ2hCLEtBQUssR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLFdBQVcsRUFBRTtnQkFDMUMsS0FBSyxDQUFDLGtCQUFrQixDQUFDLFFBQVEsQ0FBQyxDQUFDOztvQkFDN0IsU0FBUyxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsV0FBVyxDQUFDLFlBQVksRUFBRTtnQkFDM0QsU0FBUyxDQUFDLGVBQWUsRUFBRSxDQUFDO2dCQUM1QixTQUFTLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQyxDQUFDO2dCQUMxQixRQUFRLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQztnQkFDekIsUUFBUSxDQUFDLGlCQUFpQixDQUFDLENBQUMsRUFBRSxNQUFNLENBQUMsQ0FBQzthQUN2QztpQkFBTTtnQkFDTCxRQUFRLENBQUMsTUFBTSxFQUFFLENBQUM7YUFDbkI7WUFDRCxJQUFJLENBQUMsU0FBUyxDQUFDLFdBQVcsQ0FBQyxNQUFNLENBQUMsQ0FBQztZQUNuQyxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsUUFBUSxDQUFDLENBQUM7WUFDMUMsSUFBSSxDQUFDLGNBQWMsRUFBRSxDQUFDO1NBQ3ZCO1FBQUMsT0FBTyxDQUFDLEVBQUU7WUFDVixPQUFPLENBQUMsSUFBSSxDQUFDLG1CQUFtQixFQUFFLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQztTQUM5QztnQkFBUztZQUNSLFVBQVUsQ0FBQyxjQUFNLE9BQUEsS0FBSSxDQUFDLFlBQVksRUFBRSxFQUFuQixDQUFtQixFQUFFLElBQUksQ0FBQyxDQUFDO1NBQzdDO0lBQ0gsQ0FBQztJQUNILGlCQUFDO0FBQUQsQ0FBQyxBQTdERCxDQUFnQyxlQUFlLEdBNkQ5Qzs7Ozs7OztJQTNEQyw4QkFBMEI7Ozs7O0lBVWQsNEJBQThCOzs7OztJQUM5QiwwQkFBNEI7Ozs7O0lBQzVCLDJCQUEyQjs7Ozs7SUFDM0IsK0JBQTZCOzs7OztJQUM3QiwrQkFBNkI7Ozs7O0lBQzdCLGlDQUE2Qjs7Ozs7SUFDN0IseUNBQXlEIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgUGxhdGZvcm0gfSBmcm9tICdAYW5ndWxhci9jZGsvcGxhdGZvcm0nO1xyXG5pbXBvcnQgeyBIdHRwQ2xpZW50IH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uL2h0dHAnO1xyXG5pbXBvcnQgeyBTaGFyZUJ1dHRvbkJhc2UgfSBmcm9tICcuL2Jhc2UnO1xyXG5pbXBvcnQgeyBJU2hhcmVCdXR0b24gfSBmcm9tICcuLi9zaGFyZS5tb2RlbHMnO1xyXG5cclxuZXhwb3J0IGNsYXNzIENvcHlCdXR0b24gZXh0ZW5kcyBTaGFyZUJ1dHRvbkJhc2Uge1xyXG5cclxuICBwcml2YXRlIF9kaXNhYmxlOiBib29sZWFuO1xyXG5cclxuICBnZXQgdGV4dCgpIHtcclxuICAgIHJldHVybiB0aGlzLl9kaXNhYmxlID8gdGhpcy5fcHJvcHMuZXh0cmEuc3VjY2Vzc0xhYmVsIDogdGhpcy5fcHJvcHMudGV4dDtcclxuICB9XHJcblxyXG4gIGdldCBpY29uKCkge1xyXG4gICAgcmV0dXJuIHRoaXMuX2Rpc2FibGUgPyB0aGlzLl9wcm9wcy5leHRyYS5zdWNjZXNzSWNvbiA6IHRoaXMuX3Byb3BzLmljb247XHJcbiAgfVxyXG5cclxuICBjb25zdHJ1Y3Rvcihwcm90ZWN0ZWQgX3Byb3BzOiBJU2hhcmVCdXR0b24sXHJcbiAgICAgICAgICAgICAgcHJvdGVjdGVkIF91cmw6ICgpID0+IHN0cmluZyxcclxuICAgICAgICAgICAgICBwcm90ZWN0ZWQgX2h0dHA6IEh0dHBDbGllbnQsXHJcbiAgICAgICAgICAgICAgcHJvdGVjdGVkIF9wbGF0Zm9ybTogUGxhdGZvcm0sXHJcbiAgICAgICAgICAgICAgcHJvdGVjdGVkIF9kb2N1bWVudDogRG9jdW1lbnQsXHJcbiAgICAgICAgICAgICAgcHJvdGVjdGVkIF93aW5kb3dTaXplOiBzdHJpbmcsXHJcbiAgICAgICAgICAgICAgcHJvdGVjdGVkIF9kaXNhYmxlQnV0dG9uQ2xpY2s6IChkaXNhYmxlOiBib29sZWFuKSA9PiB2b2lkKSB7XHJcbiAgICBzdXBlcihfcHJvcHMsIF91cmwsIF9odHRwLCBfcGxhdGZvcm0sIF9kb2N1bWVudCwgX3dpbmRvd1NpemUsIF9kaXNhYmxlQnV0dG9uQ2xpY2spO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBfZGlzYWJsZUJ1dHRvbigpIHtcclxuICAgIC8vIERpc2FibGUgcG9pbnRlciBmb3IgdGlueSBkZWxheVxyXG4gICAgdGhpcy5fZGlzYWJsZSA9IHRydWU7XHJcbiAgICB0aGlzLl9kaXNhYmxlQnV0dG9uQ2xpY2sodHJ1ZSk7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIF9yZXNldEJ1dHRvbigpIHtcclxuICAgIHRoaXMuX2Rpc2FibGUgPSBmYWxzZTtcclxuICAgIHRoaXMuX2Rpc2FibGVCdXR0b25DbGljayhmYWxzZSk7XHJcbiAgfVxyXG5cclxuICBjbGljaygpOiB2b2lkIHtcclxuICAgIHRyeSB7XHJcbiAgICAgIGNvbnN0IHRleHRBcmVhOiBIVE1MVGV4dEFyZWFFbGVtZW50ID0gdGhpcy5fZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndGV4dGFyZWEnKSBhcyBIVE1MVGV4dEFyZWFFbGVtZW50O1xyXG5cclxuICAgICAgdGV4dEFyZWEudmFsdWUgPSBkZWNvZGVVUklDb21wb25lbnQodGhpcy5kZXNrdG9wKTtcclxuICAgICAgdGhpcy5fZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZCh0ZXh0QXJlYSk7XHJcblxyXG4gICAgICAvLyBoaWdobGlnaHQgVGV4dEFyZWEgdG8gY29weSB0aGUgc2hhcmluZyBsaW5rXHJcbiAgICAgIGlmICh0aGlzLl9wbGF0Zm9ybS5JT1MpIHtcclxuICAgICAgICBjb25zdCByYW5nZSA9IHRoaXMuX2RvY3VtZW50LmNyZWF0ZVJhbmdlKCk7XHJcbiAgICAgICAgcmFuZ2Uuc2VsZWN0Tm9kZUNvbnRlbnRzKHRleHRBcmVhKTtcclxuICAgICAgICBjb25zdCBzZWxlY3Rpb24gPSB0aGlzLl9kb2N1bWVudC5kZWZhdWx0Vmlldy5nZXRTZWxlY3Rpb24oKTtcclxuICAgICAgICBzZWxlY3Rpb24ucmVtb3ZlQWxsUmFuZ2VzKCk7XHJcbiAgICAgICAgc2VsZWN0aW9uLmFkZFJhbmdlKHJhbmdlKTtcclxuICAgICAgICB0ZXh0QXJlYS5yZWFkT25seSA9IHRydWU7XHJcbiAgICAgICAgdGV4dEFyZWEuc2V0U2VsZWN0aW9uUmFuZ2UoMCwgOTk5OTk5KTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICB0ZXh0QXJlYS5zZWxlY3QoKTtcclxuICAgICAgfVxyXG4gICAgICB0aGlzLl9kb2N1bWVudC5leGVjQ29tbWFuZCgnY29weScpO1xyXG4gICAgICB0aGlzLl9kb2N1bWVudC5ib2R5LnJlbW92ZUNoaWxkKHRleHRBcmVhKTtcclxuICAgICAgdGhpcy5fZGlzYWJsZUJ1dHRvbigpO1xyXG4gICAgfSBjYXRjaCAoZSkge1xyXG4gICAgICBjb25zb2xlLndhcm4oJ0NvcHkgbGluayBmYWlsZWQhJywgZS5tZXNzYWdlKTtcclxuICAgIH0gZmluYWxseSB7XHJcbiAgICAgIHNldFRpbWVvdXQoKCkgPT4gdGhpcy5fcmVzZXRCdXR0b24oKSwgMjAwMCk7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG4iXX0=