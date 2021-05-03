"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _core = require("@emotion/core");

var _constants = require("../../helpers/constants");

const CLOCK_WIDTH_PADDING = 20;
const timepicker =
/*#__PURE__*/
(0, _core.css)("-webkit-tap-highlight-color:transparent;-webkit-font-smoothing:antialiased;font-smoothing:antialiased;font-family:var(--main-font-family,'Roboto',sans-serif);background:var(--main-bg,white);box-shadow:var( --main-box-shadow,0 3px 11px rgba(0,0,0,0.1),0 3px 6px rgba(0,0,0,0.15) );border-radius:3px;display:inline-block;width:", _constants.CLOCK_RADIUS * 2 + CLOCK_WIDTH_PADDING * 2, "px;position:relative;user-select:none;" + (process.env.NODE_ENV === "production" ? "" : "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL3N0eWxlcy9tYWluLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUtzQiIsImZpbGUiOiIuLi8uLi8uLi9zcmMvY29tcG9uZW50cy9zdHlsZXMvbWFpbi50cyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGNzcywganN4IH0gZnJvbSAnQGVtb3Rpb24vY29yZSdcbmltcG9ydCB7IENMT0NLX1JBRElVUyB9IGZyb20gJy4uLy4uL2hlbHBlcnMvY29uc3RhbnRzJ1xuXG5jb25zdCBDTE9DS19XSURUSF9QQURESU5HID0gMjBcblxuY29uc3QgdGltZXBpY2tlciA9IGNzc2Bcblx0LXdlYmtpdC10YXAtaGlnaGxpZ2h0LWNvbG9yOiB0cmFuc3BhcmVudDtcblx0LXdlYmtpdC1mb250LXNtb290aGluZzogYW50aWFsaWFzZWQ7XG5cdGZvbnQtc21vb3RoaW5nOiBhbnRpYWxpYXNlZDtcblxuXHRmb250LWZhbWlseTogdmFyKC0tbWFpbi1mb250LWZhbWlseSwgJ1JvYm90bycsIHNhbnMtc2VyaWYpO1xuXHRiYWNrZ3JvdW5kOiB2YXIoLS1tYWluLWJnLCB3aGl0ZSk7XG5cdGJveC1zaGFkb3c6IHZhcihcblx0XHQtLW1haW4tYm94LXNoYWRvdyxcblx0XHQwIDNweCAxMXB4IHJnYmEoMCwgMCwgMCwgMC4xKSxcblx0XHQwIDNweCA2cHggcmdiYSgwLCAwLCAwLCAwLjE1KVxuXHQpO1xuXHRib3JkZXItcmFkaXVzOiAzcHg7XG5cdGRpc3BsYXk6IGlubGluZS1ibG9jaztcblx0d2lkdGg6ICR7Q0xPQ0tfUkFESVVTICogMiArIENMT0NLX1dJRFRIX1BBRERJTkcgKiAyfXB4O1xuXHRwb3NpdGlvbjogcmVsYXRpdmU7XG5cdHVzZXItc2VsZWN0OiBub25lO1xuYFxuXG5leHBvcnQgZGVmYXVsdCB0aW1lcGlja2VyXG4iXX0= */"));
var _default = timepicker;
exports.default = _default;