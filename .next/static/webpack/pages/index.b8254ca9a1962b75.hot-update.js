"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./src/components/blogs.tsx":
/*!**********************************!*\
  !*** ./src/components/blogs.tsx ***!
  \**********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   BlogCard: function() { return /* binding */ BlogCard; },\n/* harmony export */   BlogList: function() { return /* binding */ BlogList; },\n/* harmony export */   \"default\": function() { return /* binding */ Blogs; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n\nvar _s = $RefreshSig$();\n\n\nfunction Blogs(param) {\n    var posts = param.posts;\n    _s();\n    // No useEffect needed here as we're doing server-side rendering\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(function() {\n        var observer = new IntersectionObserver(function(entries, observer) {\n            entries.forEach(function(entry, index) {\n                if (entry.isIntersecting) {\n                    setTimeout(function() {\n                        entry.target.classList.add(\"in-view\");\n                    }, 300 * index); // 300ms delay multiplied by the index\n                }\n            });\n        }, {\n            threshold: 0.1\n        } // Adjust threshold as needed\n        );\n        var links = document.querySelectorAll(\".blogs\");\n        links.forEach(function(link) {\n            observer.observe(link);\n        });\n        // Cleanup function\n        return function() {\n            links.forEach(function(link) {\n                observer.unobserve(link);\n            });\n        };\n    }, []); // Empty dependency array ensures this runs once after the initial render\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            id: \"blogs\",\n            className: \" mx-auto my- px-10 md:px-24\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"flex justify-start space-x-5 md:w-[85%]\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                            className: \"text-2xl  md:text-md lg:text-4xl text-white flex  \",\n                            children: [\n                                \"04.  \",\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                    className: \"text-blue ml-2\",\n                                    children: \"Blogs\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/dhanushvardhankalaiselvan/Projects/my-portfolio/src/components/blogs.tsx\",\n                                    lineNumber: 51,\n                                    columnNumber: 13\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/dhanushvardhankalaiselvan/Projects/my-portfolio/src/components/blogs.tsx\",\n                            lineNumber: 49,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"h-[3px] bg-gradient-to-tr from-slate-600 to-transparent w-[30%] self-center\"\n                        }, void 0, false, {\n                            fileName: \"/Users/dhanushvardhankalaiselvan/Projects/my-portfolio/src/components/blogs.tsx\",\n                            lineNumber: 53,\n                            columnNumber: 11\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/dhanushvardhankalaiselvan/Projects/my-portfolio/src/components/blogs.tsx\",\n                    lineNumber: 48,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(BlogList, {\n                    posts: posts\n                }, void 0, false, {\n                    fileName: \"/Users/dhanushvardhankalaiselvan/Projects/my-portfolio/src/components/blogs.tsx\",\n                    lineNumber: 56,\n                    columnNumber: 9\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/dhanushvardhankalaiselvan/Projects/my-portfolio/src/components/blogs.tsx\",\n            lineNumber: 47,\n            columnNumber: 7\n        }, this)\n    }, void 0, false);\n}\n_s(Blogs, \"OD7bBpZva5O2jO+Puf00hKivP7c=\");\n_c = Blogs;\nfunction BlogList(param) {\n    var posts = param.posts;\n    var _this = this;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"space-y-10 mt-10\",\n        children: posts.map(function(post, index) {\n            return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex flex-col space-y-5\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(BlogCard, {\n                        post: post\n                    }, post.imgUrl + index, false, {\n                        fileName: \"/Users/dhanushvardhankalaiselvan/Projects/my-portfolio/src/components/blogs.tsx\",\n                        lineNumber: 70,\n                        columnNumber: 11\n                    }, _this),\n                    index === posts.length - 1 ? null : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"width-full h-[1px] rounded-lg  custom-radial-gradient\"\n                    }, post.subtitle + index, false, {\n                        fileName: \"/Users/dhanushvardhankalaiselvan/Projects/my-portfolio/src/components/blogs.tsx\",\n                        lineNumber: 72,\n                        columnNumber: 13\n                    }, _this),\n                    \" \"\n                ]\n            }, post.imgUrl + index + index, true, {\n                fileName: \"/Users/dhanushvardhankalaiselvan/Projects/my-portfolio/src/components/blogs.tsx\",\n                lineNumber: 66,\n                columnNumber: 9\n            }, _this);\n        })\n    }, void 0, false, {\n        fileName: \"/Users/dhanushvardhankalaiselvan/Projects/my-portfolio/src/components/blogs.tsx\",\n        lineNumber: 64,\n        columnNumber: 5\n    }, this);\n}\n_c1 = BlogList;\nfunction BlogCard(param) {\n    var post = param.post;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {\n        href: \"/blogs/\".concat(post.slug),\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"blogs flex flex-row md:flex-row md:items-center w-full rounded-lg overflow-hidden \",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"max-w-[100px]\"\n                }, void 0, false, {\n                    fileName: \"/Users/dhanushvardhankalaiselvan/Projects/my-portfolio/src/components/blogs.tsx\",\n                    lineNumber: 86,\n                    columnNumber: 7\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"flex-1 ml-5 w-full text-blue\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                            className: \"text-xs font-semibold uppercase tracking-wide\",\n                            children: post.date\n                        }, void 0, false, {\n                            fileName: \"/Users/dhanushvardhankalaiselvan/Projects/my-portfolio/src/components/blogs.tsx\",\n                            lineNumber: 89,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                            className: \"text-lg sm:text-base md:text-xl mt-2 font-bold text-white\",\n                            children: post.title\n                        }, void 0, false, {\n                            fileName: \"/Users/dhanushvardhankalaiselvan/Projects/my-portfolio/src/components/blogs.tsx\",\n                            lineNumber: 92,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                            className: \"mt-2 text-gray-400 text-xs  \",\n                            children: post.subtitle\n                        }, void 0, false, {\n                            fileName: \"/Users/dhanushvardhankalaiselvan/Projects/my-portfolio/src/components/blogs.tsx\",\n                            lineNumber: 95,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                            className: \"inline-flex text-xs items-center mt-2 text-blue/50 hover:text-blue-500\",\n                            children: \"Read more\"\n                        }, void 0, false, {\n                            fileName: \"/Users/dhanushvardhankalaiselvan/Projects/my-portfolio/src/components/blogs.tsx\",\n                            lineNumber: 96,\n                            columnNumber: 11\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/dhanushvardhankalaiselvan/Projects/my-portfolio/src/components/blogs.tsx\",\n                    lineNumber: 88,\n                    columnNumber: 9\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/dhanushvardhankalaiselvan/Projects/my-portfolio/src/components/blogs.tsx\",\n            lineNumber: 85,\n            columnNumber: 7\n        }, this)\n    }, post.slug + post.title, false, {\n        fileName: \"/Users/dhanushvardhankalaiselvan/Projects/my-portfolio/src/components/blogs.tsx\",\n        lineNumber: 84,\n        columnNumber: 5\n    }, this);\n}\n_c2 = BlogCard;\nvar _c, _c1, _c2;\n$RefreshReg$(_c, \"Blogs\");\n$RefreshReg$(_c1, \"BlogList\");\n$RefreshReg$(_c2, \"BlogCard\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9ibG9ncy50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFBNkI7QUFHSztBQU9uQixTQUFTRSxNQUFNLEtBQWdCO1FBQWhCLGNBQUVDOztJQUM5QixnRUFBZ0U7SUFFaEVGLGdEQUFTQSxDQUFDO1FBQ1IsSUFBTUcsV0FBVyxJQUFJQyxxQkFDbkIsU0FDRUMsU0FDQUY7WUFFQUUsUUFBUUMsT0FBTyxDQUFDLFNBQUNDLE9BQU9DO2dCQUN0QixJQUFJRCxNQUFNRSxjQUFjLEVBQUU7b0JBQ3hCQyxXQUFXO3dCQUNUSCxNQUFNSSxNQUFNLENBQUNDLFNBQVMsQ0FBQ0MsR0FBRyxDQUFDO29CQUM3QixHQUFHLE1BQU1MLFFBQVEsc0NBQXNDO2dCQUN6RDtZQUNGO1FBQ0YsR0FDQTtZQUFFTSxXQUFXO1FBQUksRUFBRSw2QkFBNkI7O1FBR2xELElBQU1DLFFBQVFDLFNBQVNDLGdCQUFnQixDQUFDO1FBQ3hDRixNQUFNVCxPQUFPLENBQUMsU0FBQ1k7WUFDYmYsU0FBU2dCLE9BQU8sQ0FBQ0Q7UUFDbkI7UUFFQSxtQkFBbUI7UUFDbkIsT0FBTztZQUNMSCxNQUFNVCxPQUFPLENBQUMsU0FBQ1k7Z0JBQ2JmLFNBQVNpQixTQUFTLENBQUNGO1lBQ3JCO1FBQ0Y7SUFDRixHQUFHLEVBQUUsR0FBRyx5RUFBeUU7SUFFakYscUJBQ0U7a0JBRUUsNEVBQUNHO1lBQUlDLElBQUc7WUFBUUMsV0FBVTs7OEJBQ3hCLDhEQUFDRjtvQkFBSUUsV0FBVTs7c0NBQ2IsOERBQUNDOzRCQUFHRCxXQUFVOztnQ0FDWDs4Q0FDRCw4REFBQ0U7b0NBQUtGLFdBQVU7OENBQWlCOzs7Ozs7Ozs7Ozs7c0NBRW5DLDhEQUFDRjs0QkFBSUUsV0FBVTs7Ozs7Ozs7Ozs7OzhCQUdqQiw4REFBQ0c7b0JBQVN4QixPQUFPQTs7Ozs7Ozs7Ozs7OztBQUl6QjtHQWpEd0JEO0tBQUFBO0FBbURqQixTQUFTeUIsU0FBUyxLQUFvQztRQUFwQyxjQUFFeEI7O0lBQ3pCLHFCQUNFLDhEQUFDbUI7UUFBSUUsV0FBVTtrQkFDWnJCLE1BQU15QixHQUFHLENBQUMsU0FBQ0MsTUFBTXBCO2lDQUNoQiw4REFBQ2E7Z0JBRUNFLFdBQVU7O2tDQUVWLDhEQUFDTTt3QkFBbUNELE1BQU1BO3VCQUEzQkEsS0FBS0UsTUFBTSxHQUFHdEI7Ozs7O29CQUM1QkEsVUFBVU4sTUFBTTZCLE1BQU0sR0FBRyxJQUFJLHFCQUM1Qiw4REFBQ1Y7d0JBRUNFLFdBQVU7dUJBRExLLEtBQUtJLFFBQVEsR0FBR3hCOzs7OztvQkFHdEI7O2VBVEVvQixLQUFLRSxNQUFNLEdBQUd0QixRQUFRQTs7Ozs7Ozs7Ozs7QUFjckM7TUFuQmdCa0I7QUFvQlQsU0FBU0csU0FBUyxLQUFnQztRQUFoQyxhQUFFRDtJQUN6QixxQkFDRSw4REFBQzdCLGtEQUFJQTtRQUE4QmtDLE1BQU0sVUFBb0IsT0FBVkwsS0FBS00sSUFBSTtrQkFDMUQsNEVBQUNiO1lBQUlFLFdBQVU7OzhCQUNmLDhEQUFDRjtvQkFBSUUsV0FBVTs7Ozs7OzhCQUViLDhEQUFDRjtvQkFBSUUsV0FBVTs7c0NBQ2IsOERBQUNZOzRCQUFFWixXQUFVO3NDQUNWSyxLQUFLUSxJQUFJOzs7Ozs7c0NBRVosOERBQUNDOzRCQUFHZCxXQUFVO3NDQUNYSyxLQUFLVSxLQUFLOzs7Ozs7c0NBRWIsOERBQUNIOzRCQUFFWixXQUFVO3NDQUFnQ0ssS0FBS0ksUUFBUTs7Ozs7O3NDQUMxRCw4REFBQ1A7NEJBQUtGLFdBQVU7c0NBQXlFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7T0FacEZLLEtBQUtNLElBQUksR0FBR04sS0FBS1UsS0FBSzs7Ozs7QUFvQnJDO01BdEJnQlQiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvYmxvZ3MudHN4Pzg5YjUiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xuaW1wb3J0IHsgR2V0U2VydmVyU2lkZVByb3BzIH0gZnJvbSBcIm5leHRcIjtcbmltcG9ydCB7IFBvc3RNZXRhZGF0YSB9IGZyb20gXCIuLi8uLi9ibG9nTWV0aG9kcy9ibG9nVHlwZVwiO1xuaW1wb3J0IHsgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgSW1hZ2UgZnJvbSBcIm5leHQvaW1hZ2VcIjtcblxudHlwZSBQcm9wcyA9IHtcbiAgcG9zdHM6IFBvc3RNZXRhZGF0YVtdO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQmxvZ3MoeyBwb3N0cyB9OiBQcm9wcykge1xuICAvLyBObyB1c2VFZmZlY3QgbmVlZGVkIGhlcmUgYXMgd2UncmUgZG9pbmcgc2VydmVyLXNpZGUgcmVuZGVyaW5nXG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBjb25zdCBvYnNlcnZlciA9IG5ldyBJbnRlcnNlY3Rpb25PYnNlcnZlcihcbiAgICAgIChcbiAgICAgICAgZW50cmllczogSW50ZXJzZWN0aW9uT2JzZXJ2ZXJFbnRyeVtdLFxuICAgICAgICBvYnNlcnZlcjogSW50ZXJzZWN0aW9uT2JzZXJ2ZXJcbiAgICAgICkgPT4ge1xuICAgICAgICBlbnRyaWVzLmZvckVhY2goKGVudHJ5LCBpbmRleCkgPT4ge1xuICAgICAgICAgIGlmIChlbnRyeS5pc0ludGVyc2VjdGluZykge1xuICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICAgIGVudHJ5LnRhcmdldC5jbGFzc0xpc3QuYWRkKFwiaW4tdmlld1wiKTtcbiAgICAgICAgICAgIH0sIDMwMCAqIGluZGV4KTsgLy8gMzAwbXMgZGVsYXkgbXVsdGlwbGllZCBieSB0aGUgaW5kZXhcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgfSxcbiAgICAgIHsgdGhyZXNob2xkOiAwLjEgfSAvLyBBZGp1c3QgdGhyZXNob2xkIGFzIG5lZWRlZFxuICAgICk7XG5cbiAgICBjb25zdCBsaW5rcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuYmxvZ3NcIik7XG4gICAgbGlua3MuZm9yRWFjaCgobGluaykgPT4ge1xuICAgICAgb2JzZXJ2ZXIub2JzZXJ2ZShsaW5rIGFzIEVsZW1lbnQpO1xuICAgIH0pO1xuXG4gICAgLy8gQ2xlYW51cCBmdW5jdGlvblxuICAgIHJldHVybiAoKSA9PiB7XG4gICAgICBsaW5rcy5mb3JFYWNoKChsaW5rKSA9PiB7XG4gICAgICAgIG9ic2VydmVyLnVub2JzZXJ2ZShsaW5rIGFzIEVsZW1lbnQpO1xuICAgICAgfSk7XG4gICAgfTtcbiAgfSwgW10pOyAvLyBFbXB0eSBkZXBlbmRlbmN5IGFycmF5IGVuc3VyZXMgdGhpcyBydW5zIG9uY2UgYWZ0ZXIgdGhlIGluaXRpYWwgcmVuZGVyXG5cbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgey8qIENvbnRhaW5lciBmb3IgdGhlIGJsb2cgc2VjdGlvbiAqL31cbiAgICAgIDxkaXYgaWQ9XCJibG9nc1wiIGNsYXNzTmFtZT1cIiBteC1hdXRvIG15LSBweC0xMCBtZDpweC0yNFwiPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXgganVzdGlmeS1zdGFydCBzcGFjZS14LTUgbWQ6dy1bODUlXVwiPlxuICAgICAgICAgIDxoMSBjbGFzc05hbWU9XCJ0ZXh0LTJ4bCAgbWQ6dGV4dC1tZCBsZzp0ZXh0LTR4bCB0ZXh0LXdoaXRlIGZsZXggIFwiPlxuICAgICAgICAgICAge1wiMDQuICBcIn1cbiAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInRleHQtYmx1ZSBtbC0yXCI+QmxvZ3M8L3NwYW4+XG4gICAgICAgICAgPC9oMT5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImgtWzNweF0gYmctZ3JhZGllbnQtdG8tdHIgZnJvbS1zbGF0ZS02MDAgdG8tdHJhbnNwYXJlbnQgdy1bMzAlXSBzZWxmLWNlbnRlclwiPjwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgey8qIEJsb2cgbGlzdCAqL31cbiAgICAgICAgPEJsb2dMaXN0IHBvc3RzPXtwb3N0c30gLz5cbiAgICAgIDwvZGl2PlxuICAgIDwvPlxuICApO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gQmxvZ0xpc3QoeyBwb3N0cyB9OiB7IHBvc3RzOiBQb3N0TWV0YWRhdGFbXSB9KSB7XG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJzcGFjZS15LTEwIG10LTEwXCI+XG4gICAgICB7cG9zdHMubWFwKChwb3N0LCBpbmRleCkgPT4gKFxuICAgICAgICA8ZGl2XG4gICAgICAgICAga2V5PXtwb3N0LmltZ1VybCArIGluZGV4ICsgaW5kZXh9XG4gICAgICAgICAgY2xhc3NOYW1lPVwiZmxleCBmbGV4LWNvbCBzcGFjZS15LTVcIlxuICAgICAgICA+XG4gICAgICAgICAgPEJsb2dDYXJkIGtleT17cG9zdC5pbWdVcmwgKyBpbmRleH0gcG9zdD17cG9zdH0gLz5cbiAgICAgICAgICB7aW5kZXggPT09IHBvc3RzLmxlbmd0aCAtIDEgPyBudWxsIDogKFxuICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICBrZXk9e3Bvc3Quc3VidGl0bGUgKyBpbmRleH1cbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwid2lkdGgtZnVsbCBoLVsxcHhdIHJvdW5kZWQtbGcgIGN1c3RvbS1yYWRpYWwtZ3JhZGllbnRcIlxuICAgICAgICAgICAgPjwvZGl2PlxuICAgICAgICAgICl9e1wiIFwifVxuICAgICAgICA8L2Rpdj5cbiAgICAgICkpfVxuICAgIDwvZGl2PlxuICApO1xufVxuZXhwb3J0IGZ1bmN0aW9uIEJsb2dDYXJkKHsgcG9zdCB9OiB7IHBvc3Q6IFBvc3RNZXRhZGF0YSB9KSB7XG4gIHJldHVybiAoXG4gICAgPExpbmsga2V5PXtwb3N0LnNsdWcgKyBwb3N0LnRpdGxlfSBocmVmPXtgL2Jsb2dzLyR7cG9zdC5zbHVnfWB9PlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJibG9ncyBmbGV4IGZsZXgtcm93IG1kOmZsZXgtcm93IG1kOml0ZW1zLWNlbnRlciB3LWZ1bGwgcm91bmRlZC1sZyBvdmVyZmxvdy1oaWRkZW4gXCI+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1heC13LVsxMDBweF1cIj48L2Rpdj5cbiAgICAgICAgey8qIFJpZ2h0IHNpZGUgd2l0aCB0ZXh0IGNvbnRlbnQgKi99XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleC0xIG1sLTUgdy1mdWxsIHRleHQtYmx1ZVwiPlxuICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQteHMgZm9udC1zZW1pYm9sZCB1cHBlcmNhc2UgdHJhY2tpbmctd2lkZVwiPlxuICAgICAgICAgICAge3Bvc3QuZGF0ZX1cbiAgICAgICAgICA8L3A+XG4gICAgICAgICAgPGgzIGNsYXNzTmFtZT1cInRleHQtbGcgc206dGV4dC1iYXNlIG1kOnRleHQteGwgbXQtMiBmb250LWJvbGQgdGV4dC13aGl0ZVwiPlxuICAgICAgICAgICAge3Bvc3QudGl0bGV9XG4gICAgICAgICAgPC9oMz5cbiAgICAgICAgICA8cCBjbGFzc05hbWU9XCJtdC0yIHRleHQtZ3JheS00MDAgdGV4dC14cyAgXCI+e3Bvc3Quc3VidGl0bGV9PC9wPlxuICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImlubGluZS1mbGV4IHRleHQteHMgaXRlbXMtY2VudGVyIG10LTIgdGV4dC1ibHVlLzUwIGhvdmVyOnRleHQtYmx1ZS01MDBcIj5cbiAgICAgICAgICAgIFJlYWQgbW9yZVxuICAgICAgICAgICAgey8qIFNWRyBpY29uICovfVxuICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICA8L0xpbms+XG4gICk7XG59XG4iXSwibmFtZXMiOlsiTGluayIsInVzZUVmZmVjdCIsIkJsb2dzIiwicG9zdHMiLCJvYnNlcnZlciIsIkludGVyc2VjdGlvbk9ic2VydmVyIiwiZW50cmllcyIsImZvckVhY2giLCJlbnRyeSIsImluZGV4IiwiaXNJbnRlcnNlY3RpbmciLCJzZXRUaW1lb3V0IiwidGFyZ2V0IiwiY2xhc3NMaXN0IiwiYWRkIiwidGhyZXNob2xkIiwibGlua3MiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJsaW5rIiwib2JzZXJ2ZSIsInVub2JzZXJ2ZSIsImRpdiIsImlkIiwiY2xhc3NOYW1lIiwiaDEiLCJzcGFuIiwiQmxvZ0xpc3QiLCJtYXAiLCJwb3N0IiwiQmxvZ0NhcmQiLCJpbWdVcmwiLCJsZW5ndGgiLCJzdWJ0aXRsZSIsImhyZWYiLCJzbHVnIiwicCIsImRhdGUiLCJoMyIsInRpdGxlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/components/blogs.tsx\n"));

/***/ })

});