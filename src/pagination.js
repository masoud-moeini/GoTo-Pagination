import React, { useState, useEffect, useRef } from "react";
import PropTypes from "prop-types";
import "./pagination.css";

const Pagination = ({
  itemsCount,
  pageSize,
  onPageChange,
  currentPage,
  firstIcon,
  lastIcon,
  goToIcon,
  firstText,
  lastText,
  goToText,
  shape
}) => {
  const [currentPageIn, setCurrentPageIn] = useState(
    currentPage ? currentPage : 1
  );
  const [pagesCount, setPagesCount] = useState(
    Math.ceil(itemsCount / pageSize)
  );

  const [pages, setPages] = useState([]);

  const [currentPageInput, setCurrentPageInput] = useState(currentPageIn);

  useEffect(() => {
    setCurrentPageIn(currentPage ? currentPage : 1);
    setCurrentPageInput(currentPage ? currentPage : 1);
  }, [currentPage]);

  useEffect(() => {
    setPagesCount(Math.ceil(itemsCount / pageSize));
  }, [itemsCount, pageSize]);

  useEffect(() => {
    setPages(Array.from({ length: pagesCount }, (_, i) => i + 1));
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

  return (
    <nav>
      {pagesCount === 1 ? null : (
        <ul className="pagination">
          <li
            className={
              "page-item " +
              (currentPageIn === 1 ? "disabled " : "") +
              (shape === "square" ? "square-shape" : "")
            }
          >
            <span onClick={() => onPageChange(1)} className="page-link">
              <i className={firstIcon} />
              {!firstIcon ? (
                <span>{firstText ? firstText : "First"}</span>
              ) : null}
            </span>
          </li>
          {currentPageIn > 3 ? (
            <li
              className={
                "page-item disabled " +
                (shape === "square" ? "square-shape" : "")
              }
            >
              <span className="page-link">...</span>
            </li>
          ) : null}

          {pages.map(page => {
            return currentPageIn - page < 3 && page - currentPageIn < 3 ? (
              <li
                className={
                  (page === currentPageIn
                    ? "page-item active "
                    : "page-item ") + (shape === "square" ? "square-shape" : "")
                }
                key={page}
              >
                <span onClick={() => onPageChange(page)} className="page-link">
                  {page}
                </span>
                {currentPageIn === page ? (
                  <form
                    className={shape === "square" ? "square-shape" : ""}
                    action="#"
                    onSubmit={e => {
                      preventDefault(e);
                      onPageChange(parseInt(currentPageInput));
                    }}
                  >
                    <span>
                      <input
                        className={shape === "square" ? "square-shape" : ""}
                        type="tel"
                        value={currentPageInput}
                        onChange={e => handleChangeText(e)}
                        onFocus={e => inputFocuseHandler(e)}
                      />
                      {/* <span> ${pageCount}</span> */}
                      <button
                        type="submit"
                        className={shape === "square" ? "square-shape" : ""}
                      >
                        <i className={goToIcon} />
                        {!goToIcon ? (
                          <span>{goToText ? goToText : "Go"}</span>
                        ) : null}
                      </button>
                    </span>
                  </form>
                ) : null}
              </li>
            ) : null;
          })}

          {pagesCount - currentPageIn > 3 ? (
            <li
              className={
                "page-item disabled " +
                (shape === "square" ? "square-shape" : "")
              }
            >
              <span className="page-link">...</span>
            </li>
          ) : null}

          <li
            className={
              "page-item " +
              (currentPageIn === pagesCount ? "disabled " : "") +
              (shape === "square" ? "square-shape" : "")
            }
          >
            <span
              onClick={() => onPageChange(pagesCount)}
              className="page-link"
            >
              <i className={lastIcon} />
              {!lastIcon ? <span>{lastText ? lastText : "Last"}</span> : null}
            </span>
          </li>
        </ul>
      )}
    </nav>
  );
};

// class Pagination extends Component {
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
  itemsCount: PropTypes.number.isRequired,
  pageSize: PropTypes.number.isRequired,
  onPageChange: PropTypes.func.isRequired,
  currentPage: PropTypes.number.isRequired
};

export default Pagination;
