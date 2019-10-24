"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

require("./pagination.css");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; if (obj != null) { var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var Pagination =
/*#__PURE__*/
function (_Component) {
  _inherits(Pagination, _Component);

  function Pagination() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, Pagination);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(Pagination)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_this), "state", {
      currentPage: _this.props.currentPage
    });

    _defineProperty(_assertThisInitialized(_this), "handleChangeText", function (e) {
      _this.setState({
        currentPage: e.target.value
      });
    });

    return _this;
  }

  _createClass(Pagination, [{
    key: "preventDefault",
    value: function preventDefault(e) {
      e.preventDefault();
    }
  }, {
    key: "inputFocuseHandler",
    value: function inputFocuseHandler(event) {
      event.target.select();
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps) {
      if (prevProps.currentPage !== this.props.currentPage) {
        this.setState({
          currentPage: this.props.currentPage
        });
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$props = this.props,
          itemsCount = _this$props.itemsCount,
          pageSize = _this$props.pageSize,
          onPageChange = _this$props.onPageChange,
          currentPage = _this$props.currentPage,
          firstIcon = _this$props.firstIcon,
          lastIcon = _this$props.lastIcon,
          goToIcon = _this$props.goToIcon,
          firstText = _this$props.firstText,
          lastText = _this$props.lastText,
          goToText = _this$props.goToText,
          shape = _this$props.shape;
      var pagesCount = Math.ceil(itemsCount / pageSize);
      if (pagesCount === 1) return null;

      var pages = _.range(1, pagesCount + 1);

      return _react["default"].createElement("nav", null, _react["default"].createElement("ul", {
        className: "pagination"
      }, _react["default"].createElement("li", {
        className: "page-item " + (currentPage === 1 ? "disabled " : "") + (shape === "square" ? "square-shape" : "")
      }, _react["default"].createElement("span", {
        onClick: function onClick() {
          return onPageChange(1);
        },
        className: "page-link"
      }, _react["default"].createElement("i", {
        className: firstIcon
      }), !firstIcon ? _react["default"].createElement("span", null, firstText ? firstText : "First") : null)), currentPage > 3 ? _react["default"].createElement("li", {
        className: "page-item disabled " + (shape === "square" ? "square-shape" : "")
      }, _react["default"].createElement("span", {
        className: "page-link"
      }, "...")) : null, pages.map(function (page) {
        return currentPage - page < 3 && page - currentPage < 3 ? _react["default"].createElement("li", {
          className: (page === currentPage ? "page-item active " : "page-item ") + (shape === "square" ? "square-shape" : ""),
          key: page
        }, _react["default"].createElement("span", {
          onClick: function onClick() {
            return onPageChange(page);
          },
          className: "page-link"
        }, page), currentPage === page ? _react["default"].createElement("form", {
          className: shape === "square" ? "square-shape" : "",
          action: "#",
          onSubmit: function onSubmit(e) {
            _this2.preventDefault(e);

            onPageChange(parseInt(_this2.state.currentPage));
          }
        }, _react["default"].createElement("span", null, _react["default"].createElement("input", {
          className: shape === "square" ? "square-shape" : "",
          type: "tel",
          value: _this2.state.currentPage,
          onChange: function onChange(e) {
            return _this2.handleChangeText(e);
          },
          onFocus: function onFocus(e) {
            return _this2.inputFocuseHandler(e);
          }
        }), _react["default"].createElement("button", {
          type: "submit",
          className: shape === "square" ? "square-shape" : ""
        }, _react["default"].createElement("i", {
          className: goToIcon
        }), !goToIcon ? _react["default"].createElement("span", null, goToText ? goToText : "Go") : null))) : null) : null;
      }), pagesCount - currentPage > 3 ? _react["default"].createElement("li", {
        className: "page-item disabled " + (shape === "square" ? "square-shape" : "")
      }, _react["default"].createElement("span", {
        className: "page-link"
      }, "...")) : null, _react["default"].createElement("li", {
        className: "page-item " + (currentPage === pagesCount ? "disabled " : "") + (shape === "square" ? "square-shape" : "")
      }, _react["default"].createElement("span", {
        onClick: function onClick() {
          return onPageChange(pagesCount);
        },
        className: "page-link"
      }, _react["default"].createElement("i", {
        className: lastIcon
      }), !lastIcon ? _react["default"].createElement("span", null, lastText ? lastText : "Last") : null))));
    }
  }]);

  return Pagination;
}(_react.Component);

Pagination.propTypes = {
  itemsCount: _propTypes["default"].number.isRequired,
  pageSize: _propTypes["default"].number.isRequired,
  onPageChange: _propTypes["default"].func.isRequired,
  currentPage: _propTypes["default"].number.isRequired
};
var _default = Pagination;
exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9wYWdpbmF0aW9uLmpzIl0sIm5hbWVzIjpbIlBhZ2luYXRpb24iLCJjdXJyZW50UGFnZSIsInByb3BzIiwiZSIsInNldFN0YXRlIiwidGFyZ2V0IiwidmFsdWUiLCJwcmV2ZW50RGVmYXVsdCIsImV2ZW50Iiwic2VsZWN0IiwicHJldlByb3BzIiwiaXRlbXNDb3VudCIsInBhZ2VTaXplIiwib25QYWdlQ2hhbmdlIiwiZmlyc3RJY29uIiwibGFzdEljb24iLCJnb1RvSWNvbiIsImZpcnN0VGV4dCIsImxhc3RUZXh0IiwiZ29Ub1RleHQiLCJzaGFwZSIsInBhZ2VzQ291bnQiLCJNYXRoIiwiY2VpbCIsInBhZ2VzIiwiXyIsInJhbmdlIiwibWFwIiwicGFnZSIsInBhcnNlSW50Iiwic3RhdGUiLCJoYW5kbGVDaGFuZ2VUZXh0IiwiaW5wdXRGb2N1c2VIYW5kbGVyIiwiQ29tcG9uZW50IiwicHJvcFR5cGVzIiwiUHJvcFR5cGVzIiwibnVtYmVyIiwiaXNSZXF1aXJlZCIsImZ1bmMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTs7QUFDQTs7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQUNNQSxVOzs7Ozs7Ozs7Ozs7Ozs7Ozs7NERBQ0k7QUFDTkMsTUFBQUEsV0FBVyxFQUFFLE1BQUtDLEtBQUwsQ0FBV0Q7QUFEbEIsSzs7dUVBSVcsVUFBQUUsQ0FBQyxFQUFJO0FBQ3RCLFlBQUtDLFFBQUwsQ0FBYztBQUFFSCxRQUFBQSxXQUFXLEVBQUVFLENBQUMsQ0FBQ0UsTUFBRixDQUFTQztBQUF4QixPQUFkO0FBQ0QsSzs7Ozs7OzttQ0FDY0gsQyxFQUFHO0FBQ2hCQSxNQUFBQSxDQUFDLENBQUNJLGNBQUY7QUFDRDs7O3VDQUNrQkMsSyxFQUFPO0FBQ3hCQSxNQUFBQSxLQUFLLENBQUNILE1BQU4sQ0FBYUksTUFBYjtBQUNEOzs7dUNBRWtCQyxTLEVBQVc7QUFDNUIsVUFBSUEsU0FBUyxDQUFDVCxXQUFWLEtBQTBCLEtBQUtDLEtBQUwsQ0FB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LE9BQU8sRUFBRTtBQUFBLGlCQUFNUCxZQUFZLENBQUNRLFVBQUQsQ0FBbEI7QUFBQSxTQURYO0FBRUUsUUFBQSxTQUFTLEVBQUM7QUFGWixTQUlFO0FBQUcsUUFBQSxTQUFTLEVBQUVOO0FBQWQsUUFKRixFQUtHLENBQUNBLFFBQUQsR0FBWSw4Q0FBT0csUUFBUSxHQUFHQSxRQUFILEdBQWMsTUFBN0IsQ0FBWixHQUEwRCxJQUw3RCxDQVBGLENBbkZGLENBREYsQ0FERjtBQXVHRDs7OztFQTdJc0JlLGdCOztBQWdKekJqQyxVQUFVLENBQUNrQyxTQUFYLEdBQXVCO0FBQ3JCdkIsRUFBQUEsVUFBVSxFQUFFd0Isc0JBQVVDLE1BQVYsQ0FBaUJDLFVBRFI7QUFFckJ6QixFQUFBQSxRQUFRLEVBQUV1QixzQkFBVUMsTUFBVixDQUFpQkMsVUFGTjtBQUdyQnhCLEVBQUFBLFlBQVksRUFBRXNCLHNCQUFVRyxJQUFWLENBQWVELFVBSFI7QUFJckJwQyxFQUFBQSxXQUFXLEVBQUVrQyxzQkFBVUMsTUFBVixDQUFpQkM7QUFKVCxDQUF2QjtlQU9lckMsVSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IFByb3BUeXBlcyBmcm9tIFwicHJvcC10eXBlc1wiO1xyXG5pbXBvcnQgXCIuL3BhZ2luYXRpb24uY3NzXCI7XHJcbmNsYXNzIFBhZ2luYXRpb24gZXh0ZW5kcyBDb21wb25lbnQge1xyXG4gIHN0YXRlID0ge1xyXG4gICAgY3VycmVudFBhZ2U6IHRoaXMucHJvcHMuY3VycmVudFBhZ2VcclxuICB9O1xyXG5cclxuICBoYW5kbGVDaGFuZ2VUZXh0ID0gZSA9PiB7XHJcbiAgICB0aGlzLnNldFN0YXRlKHsgY3VycmVudFBhZ2U6IGUudGFyZ2V0LnZhbHVlIH0pO1xyXG4gIH07XHJcbiAgcHJldmVudERlZmF1bHQoZSkge1xyXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gIH1cclxuICBpbnB1dEZvY3VzZUhhbmRsZXIoZXZlbnQpIHtcclxuICAgIGV2ZW50LnRhcmdldC5zZWxlY3QoKTtcclxuICB9XHJcblxyXG4gIGNvbXBvbmVudERpZFVwZGF0ZShwcmV2UHJvcHMpIHtcclxuICAgIGlmIChwcmV2UHJvcHMuY3VycmVudFBhZ2UgIT09IHRoaXMucHJvcHMuY3VycmVudFBhZ2UpIHtcclxuICAgICAgdGhpcy5zZXRTdGF0ZSh7IGN1cnJlbnRQYWdlOiB0aGlzLnByb3BzLmN1cnJlbnRQYWdlIH0pO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcmVuZGVyKCkge1xyXG4gICAgY29uc3Qge1xyXG4gICAgICBpdGVtc0NvdW50LFxyXG4gICAgICBwYWdlU2l6ZSxcclxuICAgICAgb25QYWdlQ2hhbmdlLFxyXG4gICAgICBjdXJyZW50UGFnZSxcclxuICAgICAgZmlyc3RJY29uLFxyXG4gICAgICBsYXN0SWNvbixcclxuICAgICAgZ29Ub0ljb24sXHJcbiAgICAgIGZpcnN0VGV4dCxcclxuICAgICAgbGFzdFRleHQsXHJcbiAgICAgIGdvVG9UZXh0LFxyXG4gICAgICBzaGFwZVxyXG4gICAgfSA9IHRoaXMucHJvcHM7XHJcbiAgICBjb25zdCBwYWdlc0NvdW50ID0gTWF0aC5jZWlsKGl0ZW1zQ291bnQgLyBwYWdlU2l6ZSk7XHJcbiAgICBpZiAocGFnZXNDb3VudCA9PT0gMSkgcmV0dXJuIG51bGw7XHJcbiAgICBjb25zdCBwYWdlcyA9IF8ucmFuZ2UoMSwgcGFnZXNDb3VudCArIDEpO1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgPG5hdj5cclxuICAgICAgICA8dWwgY2xhc3NOYW1lPVwicGFnaW5hdGlvblwiPlxyXG4gICAgICAgICAgPGxpXHJcbiAgICAgICAgICAgIGNsYXNzTmFtZT17XHJcbiAgICAgICAgICAgICAgXCJwYWdlLWl0ZW0gXCIgK1xyXG4gICAgICAgICAgICAgIChjdXJyZW50UGFnZSA9PT0gMSA/IFwiZGlzYWJsZWQgXCIgOiBcIlwiKSArXHJcbiAgICAgICAgICAgICAgKHNoYXBlID09PSBcInNxdWFyZVwiID8gXCJzcXVhcmUtc2hhcGVcIiA6IFwiXCIpXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgID5cclxuICAgICAgICAgICAgPHNwYW4gb25DbGljaz17KCkgPT4gb25QYWdlQ2hhbmdlKDEpfSBjbGFzc05hbWU9XCJwYWdlLWxpbmtcIj5cclxuICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9e2ZpcnN0SWNvbn0gLz5cclxuICAgICAgICAgICAgICB7IWZpcnN0SWNvbiA/IChcclxuICAgICAgICAgICAgICAgIDxzcGFuPntmaXJzdFRleHQgPyBmaXJzdFRleHQgOiBcIkZpcnN0XCJ9PC9zcGFuPlxyXG4gICAgICAgICAgICAgICkgOiBudWxsfVxyXG4gICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAge2N1cnJlbnRQYWdlID4gMyA/IChcclxuICAgICAgICAgICAgPGxpXHJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPXtcclxuICAgICAgICAgICAgICAgIFwicGFnZS1pdGVtIGRpc2FibGVkIFwiICtcclxuICAgICAgICAgICAgICAgIChzaGFwZSA9PT0gXCJzcXVhcmVcIiA/IFwic3F1YXJlLXNoYXBlXCIgOiBcIlwiKVxyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInBhZ2UtbGlua1wiPi4uLjwvc3Bhbj5cclxuICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICkgOiBudWxsfVxyXG5cclxuICAgICAgICAgIHtwYWdlcy5tYXAocGFnZSA9PiB7XHJcbiAgICAgICAgICAgIHJldHVybiBjdXJyZW50UGFnZSAtIHBhZ2UgPCAzICYmIHBhZ2UgLSBjdXJyZW50UGFnZSA8IDMgPyAoXHJcbiAgICAgICAgICAgICAgPGxpXHJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9e1xyXG4gICAgICAgICAgICAgICAgICAocGFnZSA9PT0gY3VycmVudFBhZ2UgPyBcInBhZ2UtaXRlbSBhY3RpdmUgXCIgOiBcInBhZ2UtaXRlbSBcIikgK1xyXG4gICAgICAgICAgICAgICAgICAoc2hhcGUgPT09IFwic3F1YXJlXCIgPyBcInNxdWFyZS1zaGFwZVwiIDogXCJcIilcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGtleT17cGFnZX1cclxuICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICA8c3BhbiBvbkNsaWNrPXsoKSA9PiBvblBhZ2VDaGFuZ2UocGFnZSl9IGNsYXNzTmFtZT1cInBhZ2UtbGlua1wiPlxyXG4gICAgICAgICAgICAgICAgICB7cGFnZX1cclxuICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgIHtjdXJyZW50UGFnZSA9PT0gcGFnZSA/IChcclxuICAgICAgICAgICAgICAgICAgPGZvcm1cclxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e3NoYXBlID09PSBcInNxdWFyZVwiID8gXCJzcXVhcmUtc2hhcGVcIiA6IFwiXCJ9XHJcbiAgICAgICAgICAgICAgICAgICAgYWN0aW9uPVwiI1wiXHJcbiAgICAgICAgICAgICAgICAgICAgb25TdWJtaXQ9e2UgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgdGhpcy5wcmV2ZW50RGVmYXVsdChlKTtcclxuICAgICAgICAgICAgICAgICAgICAgIG9uUGFnZUNoYW5nZShwYXJzZUludCh0aGlzLnN0YXRlLmN1cnJlbnRQYWdlKSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17c2hhcGUgPT09IFwic3F1YXJlXCIgPyBcInNxdWFyZS1zaGFwZVwiIDogXCJcIn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cInRlbFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXt0aGlzLnN0YXRlLmN1cnJlbnRQYWdlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17ZSA9PiB0aGlzLmhhbmRsZUNoYW5nZVRleHQoZSl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uRm9jdXM9e2UgPT4gdGhpcy5pbnB1dEZvY3VzZUhhbmRsZXIoZSl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgey8qIDxzcGFuPiAke3BhZ2VDb3VudH08L3NwYW4+ICovfVxyXG4gICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvblxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwic3VibWl0XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtzaGFwZSA9PT0gXCJzcXVhcmVcIiA/IFwic3F1YXJlLXNoYXBlXCIgOiBcIlwifVxyXG4gICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9e2dvVG9JY29ufSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7IWdvVG9JY29uID8gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPntnb1RvVGV4dCA/IGdvVG9UZXh0IDogXCJHb1wifTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgKSA6IG51bGx9XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgIDwvZm9ybT5cclxuICAgICAgICAgICAgICAgICkgOiBudWxsfVxyXG4gICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICkgOiBudWxsO1xyXG4gICAgICAgICAgfSl9XHJcblxyXG4gICAgICAgICAge3BhZ2VzQ291bnQgLSBjdXJyZW50UGFnZSA+IDMgPyAoXHJcbiAgICAgICAgICAgIDxsaVxyXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT17XHJcbiAgICAgICAgICAgICAgICBcInBhZ2UtaXRlbSBkaXNhYmxlZCBcIiArXHJcbiAgICAgICAgICAgICAgICAoc2hhcGUgPT09IFwic3F1YXJlXCIgPyBcInNxdWFyZS1zaGFwZVwiIDogXCJcIilcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJwYWdlLWxpbmtcIj4uLi48L3NwYW4+XHJcbiAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICApIDogbnVsbH1cclxuXHJcbiAgICAgICAgICA8bGlcclxuICAgICAgICAgICAgY2xhc3NOYW1lPXtcclxuICAgICAgICAgICAgICBcInBhZ2UtaXRlbSBcIiArXHJcbiAgICAgICAgICAgICAgKGN1cnJlbnRQYWdlID09PSBwYWdlc0NvdW50ID8gXCJkaXNhYmxlZCBcIiA6IFwiXCIpICtcclxuICAgICAgICAgICAgICAoc2hhcGUgPT09IFwic3F1YXJlXCIgPyBcInNxdWFyZS1zaGFwZVwiIDogXCJcIilcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgPlxyXG4gICAgICAgICAgICA8c3BhblxyXG4gICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IG9uUGFnZUNoYW5nZShwYWdlc0NvdW50KX1cclxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJwYWdlLWxpbmtcIlxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPXtsYXN0SWNvbn0gLz5cclxuICAgICAgICAgICAgICB7IWxhc3RJY29uID8gPHNwYW4+e2xhc3RUZXh0ID8gbGFzdFRleHQgOiBcIkxhc3RcIn08L3NwYW4+IDogbnVsbH1cclxuICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgPC9saT5cclxuICAgICAgICA8L3VsPlxyXG4gICAgICA8L25hdj5cclxuICAgICk7XHJcbiAgfVxyXG59XHJcblxyXG5QYWdpbmF0aW9uLnByb3BUeXBlcyA9IHtcclxuICBpdGVtc0NvdW50OiBQcm9wVHlwZXMubnVtYmVyLmlzUmVxdWlyZWQsXHJcbiAgcGFnZVNpemU6IFByb3BUeXBlcy5udW1iZXIuaXNSZXF1aXJlZCxcclxuICBvblBhZ2VDaGFuZ2U6IFByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWQsXHJcbiAgY3VycmVudFBhZ2U6IFByb3BUeXBlcy5udW1iZXIuaXNSZXF1aXJlZFxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgUGFnaW5hdGlvbjtcclxuIl19