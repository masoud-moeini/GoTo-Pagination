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

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var Pagination = function Pagination(_ref) {
  var itemsCount = _ref.itemsCount,
      pageSize = _ref.pageSize,
      onPageChange = _ref.onPageChange,
      currentPage = _ref.currentPage,
      firstIcon = _ref.firstIcon,
      lastIcon = _ref.lastIcon,
      goToIcon = _ref.goToIcon,
      firstText = _ref.firstText,
      lastText = _ref.lastText,
      goToText = _ref.goToText,
      shape = _ref.shape;

  var _useState = (0, _react.useState)(currentPage ? currentPage : 1),
      _useState2 = _slicedToArray(_useState, 2),
      currentPageIn = _useState2[0],
      setCurrentPageIn = _useState2[1];

  var _useState3 = (0, _react.useState)(Math.ceil(itemsCount / pageSize)),
      _useState4 = _slicedToArray(_useState3, 2),
      pagesCount = _useState4[0],
      setPagesCount = _useState4[1];

  var _useState5 = (0, _react.useState)([]),
      _useState6 = _slicedToArray(_useState5, 2),
      pages = _useState6[0],
      setPages = _useState6[1];

  var _useState7 = (0, _react.useState)(currentPageIn),
      _useState8 = _slicedToArray(_useState7, 2),
      currentPageInput = _useState8[0],
      setCurrentPageInput = _useState8[1];

  (0, _react.useEffect)(function () {
    setCurrentPageIn(currentPage ? currentPage : 1);
    setCurrentPageInput(currentPage ? currentPage : 1);
  }, [currentPage]);
  (0, _react.useEffect)(function () {
    setPagesCount(Math.ceil(itemsCount / pageSize));
  }, [itemsCount, pageSize]);
  (0, _react.useEffect)(function () {
    setPages(Array.from({
      length: pagesCount
    }, function (_, i) {
      return i + 1;
    }));
  }, [pagesCount]);

  function handleChangeText(e) {
    setCurrentPageInput(e.target.value);
  }

  function preventDefault(e) {
    e.preventDefault();
  }

  function inputFocuseHandler(event) {
    event.target.select();
  }

  return _react["default"].createElement("nav", null, pagesCount === 1 ? null : _react["default"].createElement("ul", {
    className: "pagination"
  }, _react["default"].createElement("li", {
    className: "page-item " + (currentPageIn === 1 ? "disabled " : "") + (shape === "square" ? "square-shape" : "")
  }, _react["default"].createElement("span", {
    onClick: function onClick() {
      return onPageChange(1);
    },
    className: "page-link"
  }, _react["default"].createElement("i", {
    className: firstIcon
  }), !firstIcon ? _react["default"].createElement("span", null, firstText ? firstText : "First") : null)), currentPageIn > 3 ? _react["default"].createElement("li", {
    className: "page-item disabled " + (shape === "square" ? "square-shape" : "")
  }, _react["default"].createElement("span", {
    className: "page-link"
  }, "...")) : null, pages.map(function (page) {
    return currentPageIn - page < 3 && page - currentPageIn < 3 ? _react["default"].createElement("li", {
      className: (page === currentPageIn ? "page-item active " : "page-item ") + (shape === "square" ? "square-shape" : ""),
      key: page
    }, _react["default"].createElement("span", {
      onClick: function onClick() {
        return onPageChange(page);
      },
      className: "page-link"
    }, page), currentPageIn === page ? _react["default"].createElement("form", {
      className: shape === "square" ? "square-shape" : "",
      action: "#",
      onSubmit: function onSubmit(e) {
        preventDefault(e);
        onPageChange(parseInt(currentPageInput));
      }
    }, _react["default"].createElement("span", null, _react["default"].createElement("input", {
      className: shape === "square" ? "square-shape" : "",
      type: "tel",
      value: currentPageInput,
      onChange: function onChange(e) {
        return handleChangeText(e);
      },
      onFocus: function onFocus(e) {
        return inputFocuseHandler(e);
      }
    }), _react["default"].createElement("button", {
      type: "submit",
      className: shape === "square" ? "square-shape" : ""
    }, _react["default"].createElement("i", {
      className: goToIcon
    }), !goToIcon ? _react["default"].createElement("span", null, goToText ? goToText : "Go") : null))) : null) : null;
  }), pagesCount - currentPageIn > 3 ? _react["default"].createElement("li", {
    className: "page-item disabled " + (shape === "square" ? "square-shape" : "")
  }, _react["default"].createElement("span", {
    className: "page-link"
  }, "...")) : null, _react["default"].createElement("li", {
    className: "page-item " + (currentPageIn === pagesCount ? "disabled " : "") + (shape === "square" ? "square-shape" : "")
  }, _react["default"].createElement("span", {
    onClick: function onClick() {
      return onPageChange(pagesCount);
    },
    className: "page-link"
  }, _react["default"].createElement("i", {
    className: lastIcon
  }), !lastIcon ? _react["default"].createElement("span", null, lastText ? lastText : "Last") : null))));
}; // class Pagination extends Component {
// state = {
//   currentPage: this.props.currentPage
// };
// handleChangeText = e => {
//   this.setState({ currentPage: e.target.value });
// };
// preventDefault(e) {
//   e.preventDefault();
// }
// inputFocuseHandler(event) {
//   event.target.select();
// }
// componentDidUpdate(prevProps) {
//   if (prevProps.currentPage !== this.props.currentPage) {
//     this.setState({ currentPage: this.props.currentPage });
//   }
// }
// render() {
// const {
//   itemsCount,
//   pageSize,
//   onPageChange,
//   currentPage,
//   firstIcon,
//   lastIcon,
//   goToIcon,
//   firstText,
//   lastText,
//   goToText,
//   shape
// } = this.props;
// return (
//   <nav>
//     <ul className="pagination">
//       <li
//         className={
//           "page-item " +
//           (currentPage === 1 ? "disabled " : "") +
//           (shape === "square" ? "square-shape" : "")
//         }
//       >
//         <span onClick={() => onPageChange(1)} className="page-link">
//           <i className={firstIcon} />
//           {!firstIcon ? (
//             <span>{firstText ? firstText : "First"}</span>
//           ) : null}
//         </span>
//       </li>
//       {currentPage > 3 ? (
//         <li
//           className={
//             "page-item disabled " +
//             (shape === "square" ? "square-shape" : "")
//           }
//         >
//           <span className="page-link">...</span>
//         </li>
//       ) : null}
//       {pages.map(page => {
//         return currentPage - page < 3 && page - currentPage < 3 ? (
//           <li
//             className={
//               (page === currentPage ? "page-item active " : "page-item ") +
//               (shape === "square" ? "square-shape" : "")
//             }
//             key={page}
//           >
//             <span onClick={() => onPageChange(page)} className="page-link">
//               {page}
//             </span>
//             {currentPage === page ? (
//               <form
//                 className={shape === "square" ? "square-shape" : ""}
//                 action="#"
//                 onSubmit={e => {
//                   this.preventDefault(e);
//                   onPageChange(parseInt(this.state.currentPage));
//                 }}
//               >
//                 <span>
//                   <input
//                     className={shape === "square" ? "square-shape" : ""}
//                     type="tel"
//                     value={this.state.currentPage}
//                     onChange={e => this.handleChangeText(e)}
//                     onFocus={e => this.inputFocuseHandler(e)}
//                   />
//                   {/* <span> ${pageCount}</span> */}
//                   <button
//                     type="submit"
//                     className={shape === "square" ? "square-shape" : ""}
//                   >
//                     <i className={goToIcon} />
//                     {!goToIcon ? (
//                       <span>{goToText ? goToText : "Go"}</span>
//                     ) : null}
//                   </button>
//                 </span>
//               </form>
//             ) : null}
//           </li>
//         ) : null;
//       })}
//       {pagesCount - currentPage > 3 ? (
//         <li
//           className={
//             "page-item disabled " +
//             (shape === "square" ? "square-shape" : "")
//           }
//         >
//           <span className="page-link">...</span>
//         </li>
//       ) : null}
//       <li
//         className={
//           "page-item " +
//           (currentPage === pagesCount ? "disabled " : "") +
//           (shape === "square" ? "square-shape" : "")
//         }
//       >
//         <span
//           onClick={() => onPageChange(pagesCount)}
//           className="page-link"
//         >
//           <i className={lastIcon} />
//           {!lastIcon ? <span>{lastText ? lastText : "Last"}</span> : null}
//         </span>
//       </li>
//     </ul>
//   </nav>
// );
//   }
// }


Pagination.propTypes = {
  itemsCount: _propTypes["default"].number.isRequired,
  pageSize: _propTypes["default"].number.isRequired,
  onPageChange: _propTypes["default"].func.isRequired,
  currentPage: _propTypes["default"].number.isRequired
};
var _default = Pagination;
exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9wYWdpbmF0aW9uLmpzIl0sIm5hbWVzIjpbIlBhZ2luYXRpb24iLCJpdGVtc0NvdW50IiwicGFnZVNpemUiLCJvblBhZ2VDaGFuZ2UiLCJjdXJyZW50UGFnZSIsImZpcnN0SWNvbiIsImxhc3RJY29uIiwiZ29Ub0ljb24iLCJmaXJzdFRleHQiLCJsYXN0VGV4dCIsImdvVG9UZXh0Iiwic2hhcGUiLCJjdXJyZW50UGFnZUluIiwic2V0Q3VycmVudFBhZ2VJbiIsIk1hdGgiLCJjZWlsIiwicGFnZXNDb3VudCIsInNldFBhZ2VzQ291bnQiLCJwYWdlcyIsInNldFBhZ2VzIiwiY3VycmVudFBhZ2VJbnB1dCIsInNldEN1cnJlbnRQYWdlSW5wdXQiLCJBcnJheSIsImZyb20iLCJsZW5ndGgiLCJfIiwiaSIsImhhbmRsZUNoYW5nZVRleHQiLCJlIiwidGFyZ2V0IiwidmFsdWUiLCJwcmV2ZW50RGVmYXVsdCIsImlucHV0Rm9jdXNlSGFuZGxlciIsImV2ZW50Iiwic2VsZWN0IiwibWFwIiwicGFnZSIsInBhcnNlSW50IiwicHJvcFR5cGVzIiwiUHJvcFR5cGVzIiwibnVtYmVyIiwiaXNSZXF1aXJlZCIsImZ1bmMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTs7QUFDQTs7QUFDQTs7Ozs7Ozs7Ozs7Ozs7OztBQUVBLElBQU1BLFVBQVUsR0FBRyxTQUFiQSxVQUFhLE9BWWI7QUFBQSxNQVhKQyxVQVdJLFFBWEpBLFVBV0k7QUFBQSxNQVZKQyxRQVVJLFFBVkpBLFFBVUk7QUFBQSxNQVRKQyxZQVNJLFFBVEpBLFlBU0k7QUFBQSxNQVJKQyxXQVFJLFFBUkpBLFdBUUk7QUFBQSxNQVBKQyxTQU9JLFFBUEpBLFNBT0k7QUFBQSxNQU5KQyxRQU1JLFFBTkpBLFFBTUk7QUFBQSxNQUxKQyxRQUtJLFFBTEpBLFFBS0k7QUFBQSxNQUpKQyxTQUlJLFFBSkpBLFNBSUk7QUFBQSxNQUhKQyxRQUdJLFFBSEpBLFFBR0k7QUFBQSxNQUZKQyxRQUVJLFFBRkpBLFFBRUk7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Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFFQVQsVUFBVSxDQUFDc0MsU0FBWCxHQUF1QjtBQUNyQnJDLEVBQUFBLFVBQVUsRUFBRXNDLHNCQUFVQyxNQUFWLENBQWlCQyxVQURSO0FBRXJCdkMsRUFBQUEsUUFBUSxFQUFFcUMsc0JBQVVDLE1BQVYsQ0FBaUJDLFVBRk47QUFHckJ0QyxFQUFBQSxZQUFZLEVBQUVvQyxzQkFBVUcsSUFBVixDQUFlRCxVQUhSO0FBSXJCckMsRUFBQUEsV0FBVyxFQUFFbUMsc0JBQVVDLE1BQVYsQ0FBaUJDO0FBSlQsQ0FBdkI7ZUFPZXpDLFUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCwgdXNlUmVmIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSBcInByb3AtdHlwZXNcIjtcclxuaW1wb3J0IFwiLi9wYWdpbmF0aW9uLmNzc1wiO1xyXG5cclxuY29uc3QgUGFnaW5hdGlvbiA9ICh7XHJcbiAgaXRlbXNDb3VudCxcclxuICBwYWdlU2l6ZSxcclxuICBvblBhZ2VDaGFuZ2UsXHJcbiAgY3VycmVudFBhZ2UsXHJcbiAgZmlyc3RJY29uLFxyXG4gIGxhc3RJY29uLFxyXG4gIGdvVG9JY29uLFxyXG4gIGZpcnN0VGV4dCxcclxuICBsYXN0VGV4dCxcclxuICBnb1RvVGV4dCxcclxuICBzaGFwZVxyXG59KSA9PiB7XHJcbiAgY29uc3QgW2N1cnJlbnRQYWdlSW4sIHNldEN1cnJlbnRQYWdlSW5dID0gdXNlU3RhdGUoXHJcbiAgICBjdXJyZW50UGFnZSA/IGN1cnJlbnRQYWdlIDogMVxyXG4gICk7XHJcbiAgY29uc3QgW3BhZ2VzQ291bnQsIHNldFBhZ2VzQ291bnRdID0gdXNlU3RhdGUoXHJcbiAgICBNYXRoLmNlaWwoaXRlbXNDb3VudCAvIHBhZ2VTaXplKVxyXG4gICk7XHJcblxyXG4gIGNvbnN0IFtwYWdlcywgc2V0UGFnZXNdID0gdXNlU3RhdGUoW10pO1xyXG5cclxuICBjb25zdCBbY3VycmVudFBhZ2VJbnB1dCwgc2V0Q3VycmVudFBhZ2VJbnB1dF0gPSB1c2VTdGF0ZShjdXJyZW50UGFnZUluKTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIHNldEN1cnJlbnRQYWdlSW4oY3VycmVudFBhZ2UgPyBjdXJyZW50UGFnZSA6IDEpO1xyXG4gICAgc2V0Q3VycmVudFBhZ2VJbnB1dChjdXJyZW50UGFnZSA/IGN1cnJlbnRQYWdlIDogMSk7XHJcbiAgfSwgW2N1cnJlbnRQYWdlXSk7XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBzZXRQYWdlc0NvdW50KE1hdGguY2VpbChpdGVtc0NvdW50IC8gcGFnZVNpemUpKTtcclxuICB9LCBbaXRlbXNDb3VudCwgcGFnZVNpemVdKTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIHNldFBhZ2VzKEFycmF5LmZyb20oeyBsZW5ndGg6IHBhZ2VzQ291bnQgfSwgKF8sIGkpID0+IGkgKyAxKSk7XHJcbiAgfSwgW3BhZ2VzQ291bnRdKTtcclxuXHJcbiAgZnVuY3Rpb24gaGFuZGxlQ2hhbmdlVGV4dChlKSB7XHJcbiAgICBzZXRDdXJyZW50UGFnZUlucHV0KGUudGFyZ2V0LnZhbHVlKTtcclxuICB9XHJcblxyXG4gIGZ1bmN0aW9uIHByZXZlbnREZWZhdWx0KGUpIHtcclxuICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICB9XHJcblxyXG4gIGZ1bmN0aW9uIGlucHV0Rm9jdXNlSGFuZGxlcihldmVudCkge1xyXG4gICAgZXZlbnQudGFyZ2V0LnNlbGVjdCgpO1xyXG4gIH1cclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxuYXY+XHJcbiAgICAgIHtwYWdlc0NvdW50ID09PSAxID8gbnVsbCA6IChcclxuICAgICAgICA8dWwgY2xhc3NOYW1lPVwicGFnaW5hdGlvblwiPlxyXG4gICAgICAgICAgPGxpXHJcbiAgICAgICAgICAgIGNsYXNzTmFtZT17XHJcbiAgICAgICAgICAgICAgXCJwYWdlLWl0ZW0gXCIgK1xyXG4gICAgICAgICAgICAgIChjdXJyZW50UGFnZUluID09PSAxID8gXCJkaXNhYmxlZCBcIiA6IFwiXCIpICtcclxuICAgICAgICAgICAgICAoc2hhcGUgPT09IFwic3F1YXJlXCIgPyBcInNxdWFyZS1zaGFwZVwiIDogXCJcIilcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgPlxyXG4gICAgICAgICAgICA8c3BhbiBvbkNsaWNrPXsoKSA9PiBvblBhZ2VDaGFuZ2UoMSl9IGNsYXNzTmFtZT1cInBhZ2UtbGlua1wiPlxyXG4gICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT17Zmlyc3RJY29ufSAvPlxyXG4gICAgICAgICAgICAgIHshZmlyc3RJY29uID8gKFxyXG4gICAgICAgICAgICAgICAgPHNwYW4+e2ZpcnN0VGV4dCA/IGZpcnN0VGV4dCA6IFwiRmlyc3RcIn08L3NwYW4+XHJcbiAgICAgICAgICAgICAgKSA6IG51bGx9XHJcbiAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICB7Y3VycmVudFBhZ2VJbiA+IDMgPyAoXHJcbiAgICAgICAgICAgIDxsaVxyXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT17XHJcbiAgICAgICAgICAgICAgICBcInBhZ2UtaXRlbSBkaXNhYmxlZCBcIiArXHJcbiAgICAgICAgICAgICAgICAoc2hhcGUgPT09IFwic3F1YXJlXCIgPyBcInNxdWFyZS1zaGFwZVwiIDogXCJcIilcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJwYWdlLWxpbmtcIj4uLi48L3NwYW4+XHJcbiAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICApIDogbnVsbH1cclxuXHJcbiAgICAgICAgICB7cGFnZXMubWFwKHBhZ2UgPT4ge1xyXG4gICAgICAgICAgICByZXR1cm4gY3VycmVudFBhZ2VJbiAtIHBhZ2UgPCAzICYmIHBhZ2UgLSBjdXJyZW50UGFnZUluIDwgMyA/IChcclxuICAgICAgICAgICAgICA8bGlcclxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17XHJcbiAgICAgICAgICAgICAgICAgIChwYWdlID09PSBjdXJyZW50UGFnZUluXHJcbiAgICAgICAgICAgICAgICAgICAgPyBcInBhZ2UtaXRlbSBhY3RpdmUgXCJcclxuICAgICAgICAgICAgICAgICAgICA6IFwicGFnZS1pdGVtIFwiKSArIChzaGFwZSA9PT0gXCJzcXVhcmVcIiA/IFwic3F1YXJlLXNoYXBlXCIgOiBcIlwiKVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAga2V5PXtwYWdlfVxyXG4gICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIDxzcGFuIG9uQ2xpY2s9eygpID0+IG9uUGFnZUNoYW5nZShwYWdlKX0gY2xhc3NOYW1lPVwicGFnZS1saW5rXCI+XHJcbiAgICAgICAgICAgICAgICAgIHtwYWdlfVxyXG4gICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAge2N1cnJlbnRQYWdlSW4gPT09IHBhZ2UgPyAoXHJcbiAgICAgICAgICAgICAgICAgIDxmb3JtXHJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtzaGFwZSA9PT0gXCJzcXVhcmVcIiA/IFwic3F1YXJlLXNoYXBlXCIgOiBcIlwifVxyXG4gICAgICAgICAgICAgICAgICAgIGFjdGlvbj1cIiNcIlxyXG4gICAgICAgICAgICAgICAgICAgIG9uU3VibWl0PXtlID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgIHByZXZlbnREZWZhdWx0KGUpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgb25QYWdlQ2hhbmdlKHBhcnNlSW50KGN1cnJlbnRQYWdlSW5wdXQpKTtcclxuICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtzaGFwZSA9PT0gXCJzcXVhcmVcIiA/IFwic3F1YXJlLXNoYXBlXCIgOiBcIlwifVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwidGVsXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e2N1cnJlbnRQYWdlSW5wdXR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtlID0+IGhhbmRsZUNoYW5nZVRleHQoZSl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uRm9jdXM9e2UgPT4gaW5wdXRGb2N1c2VIYW5kbGVyKGUpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgIHsvKiA8c3Bhbj4gJHtwYWdlQ291bnR9PC9zcGFuPiAqL31cclxuICAgICAgICAgICAgICAgICAgICAgIDxidXR0b25cclxuICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cInN1Ym1pdFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17c2hhcGUgPT09IFwic3F1YXJlXCIgPyBcInNxdWFyZS1zaGFwZVwiIDogXCJcIn1cclxuICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPXtnb1RvSWNvbn0gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgeyFnb1RvSWNvbiA/IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj57Z29Ub1RleHQgPyBnb1RvVGV4dCA6IFwiR29cIn08L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICkgOiBudWxsfVxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICA8L2Zvcm0+XHJcbiAgICAgICAgICAgICAgICApIDogbnVsbH1cclxuICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICApIDogbnVsbDtcclxuICAgICAgICAgIH0pfVxyXG5cclxuICAgICAgICAgIHtwYWdlc0NvdW50IC0gY3VycmVudFBhZ2VJbiA+IDMgPyAoXHJcbiAgICAgICAgICAgIDxsaVxyXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT17XHJcbiAgICAgICAgICAgICAgICBcInBhZ2UtaXRlbSBkaXNhYmxlZCBcIiArXHJcbiAgICAgICAgICAgICAgICAoc2hhcGUgPT09IFwic3F1YXJlXCIgPyBcInNxdWFyZS1zaGFwZVwiIDogXCJcIilcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJwYWdlLWxpbmtcIj4uLi48L3NwYW4+XHJcbiAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICApIDogbnVsbH1cclxuXHJcbiAgICAgICAgICA8bGlcclxuICAgICAgICAgICAgY2xhc3NOYW1lPXtcclxuICAgICAgICAgICAgICBcInBhZ2UtaXRlbSBcIiArXHJcbiAgICAgICAgICAgICAgKGN1cnJlbnRQYWdlSW4gPT09IHBhZ2VzQ291bnQgPyBcImRpc2FibGVkIFwiIDogXCJcIikgK1xyXG4gICAgICAgICAgICAgIChzaGFwZSA9PT0gXCJzcXVhcmVcIiA/IFwic3F1YXJlLXNoYXBlXCIgOiBcIlwiKVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIDxzcGFuXHJcbiAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gb25QYWdlQ2hhbmdlKHBhZ2VzQ291bnQpfVxyXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cInBhZ2UtbGlua1wiXHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9e2xhc3RJY29ufSAvPlxyXG4gICAgICAgICAgICAgIHshbGFzdEljb24gPyA8c3Bhbj57bGFzdFRleHQgPyBsYXN0VGV4dCA6IFwiTGFzdFwifTwvc3Bhbj4gOiBudWxsfVxyXG4gICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICA8L2xpPlxyXG4gICAgICAgIDwvdWw+XHJcbiAgICAgICl9XHJcbiAgICA8L25hdj5cclxuICApO1xyXG59O1xyXG5cclxuLy8gY2xhc3MgUGFnaW5hdGlvbiBleHRlbmRzIENvbXBvbmVudCB7XHJcbi8vIHN0YXRlID0ge1xyXG4vLyAgIGN1cnJlbnRQYWdlOiB0aGlzLnByb3BzLmN1cnJlbnRQYWdlXHJcbi8vIH07XHJcblxyXG4vLyBoYW5kbGVDaGFuZ2VUZXh0ID0gZSA9PiB7XHJcbi8vICAgdGhpcy5zZXRTdGF0ZSh7IGN1cnJlbnRQYWdlOiBlLnRhcmdldC52YWx1ZSB9KTtcclxuLy8gfTtcclxuLy8gcHJldmVudERlZmF1bHQoZSkge1xyXG4vLyAgIGUucHJldmVudERlZmF1bHQoKTtcclxuLy8gfVxyXG4vLyBpbnB1dEZvY3VzZUhhbmRsZXIoZXZlbnQpIHtcclxuLy8gICBldmVudC50YXJnZXQuc2VsZWN0KCk7XHJcbi8vIH1cclxuXHJcbi8vIGNvbXBvbmVudERpZFVwZGF0ZShwcmV2UHJvcHMpIHtcclxuLy8gICBpZiAocHJldlByb3BzLmN1cnJlbnRQYWdlICE9PSB0aGlzLnByb3BzLmN1cnJlbnRQYWdlKSB7XHJcbi8vICAgICB0aGlzLnNldFN0YXRlKHsgY3VycmVudFBhZ2U6IHRoaXMucHJvcHMuY3VycmVudFBhZ2UgfSk7XHJcbi8vICAgfVxyXG4vLyB9XHJcblxyXG4vLyByZW5kZXIoKSB7XHJcbi8vIGNvbnN0IHtcclxuLy8gICBpdGVtc0NvdW50LFxyXG4vLyAgIHBhZ2VTaXplLFxyXG4vLyAgIG9uUGFnZUNoYW5nZSxcclxuLy8gICBjdXJyZW50UGFnZSxcclxuLy8gICBmaXJzdEljb24sXHJcbi8vICAgbGFzdEljb24sXHJcbi8vICAgZ29Ub0ljb24sXHJcbi8vICAgZmlyc3RUZXh0LFxyXG4vLyAgIGxhc3RUZXh0LFxyXG4vLyAgIGdvVG9UZXh0LFxyXG4vLyAgIHNoYXBlXHJcbi8vIH0gPSB0aGlzLnByb3BzO1xyXG4vLyByZXR1cm4gKFxyXG4vLyAgIDxuYXY+XHJcbi8vICAgICA8dWwgY2xhc3NOYW1lPVwicGFnaW5hdGlvblwiPlxyXG4vLyAgICAgICA8bGlcclxuLy8gICAgICAgICBjbGFzc05hbWU9e1xyXG4vLyAgICAgICAgICAgXCJwYWdlLWl0ZW0gXCIgK1xyXG4vLyAgICAgICAgICAgKGN1cnJlbnRQYWdlID09PSAxID8gXCJkaXNhYmxlZCBcIiA6IFwiXCIpICtcclxuLy8gICAgICAgICAgIChzaGFwZSA9PT0gXCJzcXVhcmVcIiA/IFwic3F1YXJlLXNoYXBlXCIgOiBcIlwiKVxyXG4vLyAgICAgICAgIH1cclxuLy8gICAgICAgPlxyXG4vLyAgICAgICAgIDxzcGFuIG9uQ2xpY2s9eygpID0+IG9uUGFnZUNoYW5nZSgxKX0gY2xhc3NOYW1lPVwicGFnZS1saW5rXCI+XHJcbi8vICAgICAgICAgICA8aSBjbGFzc05hbWU9e2ZpcnN0SWNvbn0gLz5cclxuLy8gICAgICAgICAgIHshZmlyc3RJY29uID8gKFxyXG4vLyAgICAgICAgICAgICA8c3Bhbj57Zmlyc3RUZXh0ID8gZmlyc3RUZXh0IDogXCJGaXJzdFwifTwvc3Bhbj5cclxuLy8gICAgICAgICAgICkgOiBudWxsfVxyXG4vLyAgICAgICAgIDwvc3Bhbj5cclxuLy8gICAgICAgPC9saT5cclxuLy8gICAgICAge2N1cnJlbnRQYWdlID4gMyA/IChcclxuLy8gICAgICAgICA8bGlcclxuLy8gICAgICAgICAgIGNsYXNzTmFtZT17XHJcbi8vICAgICAgICAgICAgIFwicGFnZS1pdGVtIGRpc2FibGVkIFwiICtcclxuLy8gICAgICAgICAgICAgKHNoYXBlID09PSBcInNxdWFyZVwiID8gXCJzcXVhcmUtc2hhcGVcIiA6IFwiXCIpXHJcbi8vICAgICAgICAgICB9XHJcbi8vICAgICAgICAgPlxyXG4vLyAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwicGFnZS1saW5rXCI+Li4uPC9zcGFuPlxyXG4vLyAgICAgICAgIDwvbGk+XHJcbi8vICAgICAgICkgOiBudWxsfVxyXG4vLyAgICAgICB7cGFnZXMubWFwKHBhZ2UgPT4ge1xyXG4vLyAgICAgICAgIHJldHVybiBjdXJyZW50UGFnZSAtIHBhZ2UgPCAzICYmIHBhZ2UgLSBjdXJyZW50UGFnZSA8IDMgPyAoXHJcbi8vICAgICAgICAgICA8bGlcclxuLy8gICAgICAgICAgICAgY2xhc3NOYW1lPXtcclxuLy8gICAgICAgICAgICAgICAocGFnZSA9PT0gY3VycmVudFBhZ2UgPyBcInBhZ2UtaXRlbSBhY3RpdmUgXCIgOiBcInBhZ2UtaXRlbSBcIikgK1xyXG4vLyAgICAgICAgICAgICAgIChzaGFwZSA9PT0gXCJzcXVhcmVcIiA/IFwic3F1YXJlLXNoYXBlXCIgOiBcIlwiKVxyXG4vLyAgICAgICAgICAgICB9XHJcbi8vICAgICAgICAgICAgIGtleT17cGFnZX1cclxuLy8gICAgICAgICAgID5cclxuLy8gICAgICAgICAgICAgPHNwYW4gb25DbGljaz17KCkgPT4gb25QYWdlQ2hhbmdlKHBhZ2UpfSBjbGFzc05hbWU9XCJwYWdlLWxpbmtcIj5cclxuLy8gICAgICAgICAgICAgICB7cGFnZX1cclxuLy8gICAgICAgICAgICAgPC9zcGFuPlxyXG4vLyAgICAgICAgICAgICB7Y3VycmVudFBhZ2UgPT09IHBhZ2UgPyAoXHJcbi8vICAgICAgICAgICAgICAgPGZvcm1cclxuLy8gICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17c2hhcGUgPT09IFwic3F1YXJlXCIgPyBcInNxdWFyZS1zaGFwZVwiIDogXCJcIn1cclxuLy8gICAgICAgICAgICAgICAgIGFjdGlvbj1cIiNcIlxyXG4vLyAgICAgICAgICAgICAgICAgb25TdWJtaXQ9e2UgPT4ge1xyXG4vLyAgICAgICAgICAgICAgICAgICB0aGlzLnByZXZlbnREZWZhdWx0KGUpO1xyXG4vLyAgICAgICAgICAgICAgICAgICBvblBhZ2VDaGFuZ2UocGFyc2VJbnQodGhpcy5zdGF0ZS5jdXJyZW50UGFnZSkpO1xyXG4vLyAgICAgICAgICAgICAgICAgfX1cclxuLy8gICAgICAgICAgICAgICA+XHJcbi8vICAgICAgICAgICAgICAgICA8c3Bhbj5cclxuLy8gICAgICAgICAgICAgICAgICAgPGlucHV0XHJcbi8vICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtzaGFwZSA9PT0gXCJzcXVhcmVcIiA/IFwic3F1YXJlLXNoYXBlXCIgOiBcIlwifVxyXG4vLyAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZWxcIlxyXG4vLyAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXt0aGlzLnN0YXRlLmN1cnJlbnRQYWdlfVxyXG4vLyAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtlID0+IHRoaXMuaGFuZGxlQ2hhbmdlVGV4dChlKX1cclxuLy8gICAgICAgICAgICAgICAgICAgICBvbkZvY3VzPXtlID0+IHRoaXMuaW5wdXRGb2N1c2VIYW5kbGVyKGUpfVxyXG4vLyAgICAgICAgICAgICAgICAgICAvPlxyXG4vLyAgICAgICAgICAgICAgICAgICB7LyogPHNwYW4+ICR7cGFnZUNvdW50fTwvc3Bhbj4gKi99XHJcbi8vICAgICAgICAgICAgICAgICAgIDxidXR0b25cclxuLy8gICAgICAgICAgICAgICAgICAgICB0eXBlPVwic3VibWl0XCJcclxuLy8gICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e3NoYXBlID09PSBcInNxdWFyZVwiID8gXCJzcXVhcmUtc2hhcGVcIiA6IFwiXCJ9XHJcbi8vICAgICAgICAgICAgICAgICAgID5cclxuLy8gICAgICAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9e2dvVG9JY29ufSAvPlxyXG4vLyAgICAgICAgICAgICAgICAgICAgIHshZ29Ub0ljb24gPyAoXHJcbi8vICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj57Z29Ub1RleHQgPyBnb1RvVGV4dCA6IFwiR29cIn08L3NwYW4+XHJcbi8vICAgICAgICAgICAgICAgICAgICAgKSA6IG51bGx9XHJcbi8vICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4vLyAgICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4vLyAgICAgICAgICAgICAgIDwvZm9ybT5cclxuLy8gICAgICAgICAgICAgKSA6IG51bGx9XHJcbi8vICAgICAgICAgICA8L2xpPlxyXG4vLyAgICAgICAgICkgOiBudWxsO1xyXG4vLyAgICAgICB9KX1cclxuLy8gICAgICAge3BhZ2VzQ291bnQgLSBjdXJyZW50UGFnZSA+IDMgPyAoXHJcbi8vICAgICAgICAgPGxpXHJcbi8vICAgICAgICAgICBjbGFzc05hbWU9e1xyXG4vLyAgICAgICAgICAgICBcInBhZ2UtaXRlbSBkaXNhYmxlZCBcIiArXHJcbi8vICAgICAgICAgICAgIChzaGFwZSA9PT0gXCJzcXVhcmVcIiA/IFwic3F1YXJlLXNoYXBlXCIgOiBcIlwiKVxyXG4vLyAgICAgICAgICAgfVxyXG4vLyAgICAgICAgID5cclxuLy8gICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInBhZ2UtbGlua1wiPi4uLjwvc3Bhbj5cclxuLy8gICAgICAgICA8L2xpPlxyXG4vLyAgICAgICApIDogbnVsbH1cclxuLy8gICAgICAgPGxpXHJcbi8vICAgICAgICAgY2xhc3NOYW1lPXtcclxuLy8gICAgICAgICAgIFwicGFnZS1pdGVtIFwiICtcclxuLy8gICAgICAgICAgIChjdXJyZW50UGFnZSA9PT0gcGFnZXNDb3VudCA/IFwiZGlzYWJsZWQgXCIgOiBcIlwiKSArXHJcbi8vICAgICAgICAgICAoc2hhcGUgPT09IFwic3F1YXJlXCIgPyBcInNxdWFyZS1zaGFwZVwiIDogXCJcIilcclxuLy8gICAgICAgICB9XHJcbi8vICAgICAgID5cclxuLy8gICAgICAgICA8c3BhblxyXG4vLyAgICAgICAgICAgb25DbGljaz17KCkgPT4gb25QYWdlQ2hhbmdlKHBhZ2VzQ291bnQpfVxyXG4vLyAgICAgICAgICAgY2xhc3NOYW1lPVwicGFnZS1saW5rXCJcclxuLy8gICAgICAgICA+XHJcbi8vICAgICAgICAgICA8aSBjbGFzc05hbWU9e2xhc3RJY29ufSAvPlxyXG4vLyAgICAgICAgICAgeyFsYXN0SWNvbiA/IDxzcGFuPntsYXN0VGV4dCA/IGxhc3RUZXh0IDogXCJMYXN0XCJ9PC9zcGFuPiA6IG51bGx9XHJcbi8vICAgICAgICAgPC9zcGFuPlxyXG4vLyAgICAgICA8L2xpPlxyXG4vLyAgICAgPC91bD5cclxuLy8gICA8L25hdj5cclxuLy8gKTtcclxuLy8gICB9XHJcbi8vIH1cclxuXHJcblBhZ2luYXRpb24ucHJvcFR5cGVzID0ge1xyXG4gIGl0ZW1zQ291bnQ6IFByb3BUeXBlcy5udW1iZXIuaXNSZXF1aXJlZCxcclxuICBwYWdlU2l6ZTogUHJvcFR5cGVzLm51bWJlci5pc1JlcXVpcmVkLFxyXG4gIG9uUGFnZUNoYW5nZTogUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZCxcclxuICBjdXJyZW50UGFnZTogUHJvcFR5cGVzLm51bWJlci5pc1JlcXVpcmVkXHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBQYWdpbmF0aW9uO1xyXG4iXX0=