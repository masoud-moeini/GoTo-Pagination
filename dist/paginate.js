"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

function paginate(items, pageNumber, pageSize) {
  var startIndex = (pageNumber - 1) * pageSize;
  return items.slice(startIndex, startIndex + pageSize);
}

var _default = paginate;
exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9wYWdpbmF0ZS5qcyJdLCJuYW1lcyI6WyJwYWdpbmF0ZSIsIml0ZW1zIiwicGFnZU51bWJlciIsInBhZ2VTaXplIiwic3RhcnRJbmRleCIsInNsaWNlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUEsU0FBU0EsUUFBVCxDQUFrQkMsS0FBbEIsRUFBeUJDLFVBQXpCLEVBQXFDQyxRQUFyQyxFQUErQztBQUM3QyxNQUFNQyxVQUFVLEdBQUcsQ0FBQ0YsVUFBVSxHQUFHLENBQWQsSUFBbUJDLFFBQXRDO0FBRUEsU0FBT0YsS0FBSyxDQUFDSSxLQUFOLENBQVlELFVBQVosRUFBd0JBLFVBQVUsR0FBR0QsUUFBckMsQ0FBUDtBQUNEOztlQUVjSCxRIiwic291cmNlc0NvbnRlbnQiOlsiZnVuY3Rpb24gcGFnaW5hdGUoaXRlbXMsIHBhZ2VOdW1iZXIsIHBhZ2VTaXplKSB7XHJcbiAgY29uc3Qgc3RhcnRJbmRleCA9IChwYWdlTnVtYmVyIC0gMSkgKiBwYWdlU2l6ZTtcclxuXHJcbiAgcmV0dXJuIGl0ZW1zLnNsaWNlKHN0YXJ0SW5kZXgsIHN0YXJ0SW5kZXggKyBwYWdlU2l6ZSk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IHBhZ2luYXRlO1xyXG4iXX0=