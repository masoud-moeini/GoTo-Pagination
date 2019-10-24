"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _lodash = _interopRequireDefault(require("lodash"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function paginate(items, pageNumber, pageSize) {
  var startIndex = (pageNumber - 1) * pageSize;
  return (0, _lodash["default"])(items).slice(startIndex).take(pageSize).value();
}

var _default = paginate;
exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9wYWdpbmF0ZS5qcyJdLCJuYW1lcyI6WyJwYWdpbmF0ZSIsIml0ZW1zIiwicGFnZU51bWJlciIsInBhZ2VTaXplIiwic3RhcnRJbmRleCIsInNsaWNlIiwidGFrZSIsInZhbHVlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7Ozs7QUFFQSxTQUFTQSxRQUFULENBQWtCQyxLQUFsQixFQUF5QkMsVUFBekIsRUFBcUNDLFFBQXJDLEVBQStDO0FBQzdDLE1BQU1DLFVBQVUsR0FBRyxDQUFDRixVQUFVLEdBQUcsQ0FBZCxJQUFtQkMsUUFBdEM7QUFDQSxTQUFPLHdCQUFFRixLQUFGLEVBQ0pJLEtBREksQ0FDRUQsVUFERixFQUVKRSxJQUZJLENBRUNILFFBRkQsRUFHSkksS0FISSxFQUFQO0FBSUQ7O2VBRWNQLFEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgXyBmcm9tIFwibG9kYXNoXCI7XHJcblxyXG5mdW5jdGlvbiBwYWdpbmF0ZShpdGVtcywgcGFnZU51bWJlciwgcGFnZVNpemUpIHtcclxuICBjb25zdCBzdGFydEluZGV4ID0gKHBhZ2VOdW1iZXIgLSAxKSAqIHBhZ2VTaXplO1xyXG4gIHJldHVybiBfKGl0ZW1zKVxyXG4gICAgLnNsaWNlKHN0YXJ0SW5kZXgpXHJcbiAgICAudGFrZShwYWdlU2l6ZSlcclxuICAgIC52YWx1ZSgpO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBwYWdpbmF0ZTtcclxuIl19