/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/js/test.js":
/*!************************!*\
  !*** ./src/js/test.js ***!
  \************************/
/***/ (() => {



/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[1].use[2]!./node_modules/group-css-media-queries-loader/lib/index.js!./node_modules/resolve-url-loader/index.js!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[1].use[5]!./src/scss/style.scss":
/*!******************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[1].use[2]!./node_modules/group-css-media-queries-loader/lib/index.js!./node_modules/resolve-url-loader/index.js!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[1].use[5]!./src/scss/style.scss ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".bg-radial, .cat-card {\n  border-radius: 16px;\n  -webkit-backdrop-filter: blur(15px) saturate(86%);\n          backdrop-filter: blur(15px) saturate(86%);\n  background: radial-gradient(circle at 100% 0, hsla(0, 0%, 100%, 0.6) 0, hsla(0, 0%, 96.1%, 0.13) 183%);\n}\n\n.icon, .header__location-icon, .header__phone-icon {\n  height: 20px;\n  margin-right: 6px;\n  fill: #333;\n  flex-shrink: 0;\n  transition: fill 0.2s linear;\n}\n\n.flex-items-center, .header__routine, .header__location, .header__phone {\n  display: flex;\n  align-items: center;\n}\n\n.text-nowrap, .header__routine-val p, .header__info span {\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n\n/* http://meyerweb.com/eric/tools/css/reset/\n   v2.0 | 20110126\n   License: none (public domain)\n*/\nhtml, body, div, span, applet, object, iframe,\nh1, h2, h3, h4, h5, h6, p, blockquote, pre,\na, abbr, acronym, address, big, cite, code,\ndel, dfn, em, img, ins, kbd, q, s, samp,\nsmall, strike, strong, sub, sup, tt, var,\nb, u, i, center,\ndl, dt, dd, ol, ul, li,\nfieldset, form, label, legend,\ntable, caption, tbody, tfoot, thead, tr, th, td,\narticle, aside, canvas, details, embed,\nfigure, figcaption, footer, header, hgroup,\nmenu, nav, output, ruby, section, summary,\ntime, mark, audio, video {\n  margin: 0;\n  padding: 0;\n  border: 0;\n  outline: none;\n  font-size: 100%;\n  font: inherit;\n  vertical-align: baseline;\n}\n\n/* HTML5 display-role reset for older browsers */\narticle, aside, details, figcaption, figure,\nfooter, header, hgroup, menu, nav, section {\n  display: block;\n}\n\n*, *::before, *::after {\n  box-sizing: border-box;\n}\n\na {\n  color: inherit;\n  text-decoration: none;\n  cursor: pointer;\n  display: inline-block;\n}\n\nimg {\n  max-width: 100%;\n  height: auto;\n}\n\nol, ul {\n  list-style: none;\n}\n\nblockquote, q {\n  quotes: none;\n}\n\nblockquote:before, blockquote:after,\nq:before, q:after {\n  content: \"\";\n}\n\ninput, textarea, button {\n  outline: none;\n  border: none;\n}\n\ntextarea {\n  resize: vertical;\n}\n\nbutton {\n  cursor: pointer;\n}\n\ntable {\n  border-collapse: collapse;\n  border-spacing: 0;\n}\n\n.container {\n  padding: 0 15px;\n  max-width: 1230px;\n  margin: 0 auto;\n}\n.container--header {\n  max-width: 1430px;\n}\n\n.container-fluid {\n  width: 100%;\n  padding: 0 15px;\n}\n\n.row {\n  display: flex;\n  flex-wrap: wrap;\n  margin-right: -15px;\n  margin-left: -15px;\n}\n\n.no-gutters {\n  margin-right: 0;\n  margin-left: 0;\n}\n\n.no-gutters > .col,\n.no-gutters > [class*=col-] {\n  padding-right: 0;\n  padding-left: 0;\n}\n\n.col-1, .col-2, .col-3, .col-4, .col-5, .col-6, .col-7, .col-8, .col-9, .col-10, .col-11, .col-12, .col,\n.col-auto, .col-sm-1, .col-sm-2, .col-sm-3, .col-sm-4, .col-sm-5, .col-sm-6, .col-sm-7, .col-sm-8, .col-sm-9, .col-sm-10, .col-sm-11, .col-sm-12, .col-sm,\n.col-sm-auto, .col-md-1, .col-md-2, .col-md-3, .col-md-4, .col-md-5, .col-md-6, .col-md-7, .col-md-8, .col-md-9, .col-md-10, .col-md-11, .col-md-12, .col-md,\n.col-md-auto, .col-lg-1, .col-lg-2, .col-lg-3, .col-lg-4, .col-lg-5, .col-lg-6, .col-lg-7, .col-lg-8, .col-lg-9, .col-lg-10, .col-lg-11, .col-lg-12, .col-lg,\n.col-lg-auto, .col-xs-1, .col-xs-2, .col-xs-3, .col-xs-4, .col-xs-5, .col-xs-6, .col-xs-7, .col-xs-8, .col-xs-9, .col-xs-10, .col-xs-11, .col-xs-12, .col-xs,\n.col-xs-auto {\n  width: 100%;\n  max-width: 100%;\n  min-height: 1px;\n  flex-shrink: 0;\n  padding-right: 15px;\n  padding-left: 15px;\n}\n\n.col {\n  flex-basis: 0;\n  flex-grow: 1;\n  max-width: 100%;\n}\n\n.col-auto {\n  flex: 0 0 auto;\n  width: auto;\n  max-width: none;\n}\n\n.col-1 {\n  flex: 0 0 8.333333%;\n  max-width: 8.333333%;\n}\n\n.col-2 {\n  flex: 0 0 16.666667%;\n  max-width: 16.666667%;\n}\n\n.col-3 {\n  flex: 0 0 25%;\n  max-width: 25%;\n}\n\n.col-4 {\n  flex: 0 0 33.333333%;\n  max-width: 33.333333%;\n}\n\n.col-5 {\n  flex: 0 0 41.666667%;\n  max-width: 41.666667%;\n}\n\n.col-6 {\n  flex: 0 0 50%;\n  max-width: 50%;\n}\n\n.col-7 {\n  flex: 0 0 58.333333%;\n  max-width: 58.333333%;\n}\n\n.col-8 {\n  flex: 0 0 66.666667%;\n  max-width: 66.666667%;\n}\n\n.col-9 {\n  flex: 0 0 75%;\n  max-width: 75%;\n}\n\n.col-10 {\n  flex: 0 0 83.333333%;\n  max-width: 83.333333%;\n}\n\n.col-11 {\n  flex: 0 0 91.666667%;\n  max-width: 91.666667%;\n}\n\n.col-12 {\n  flex: 0 0 100%;\n  max-width: 100%;\n}\n\n.order-first {\n  order: -1;\n}\n\n.order-last {\n  order: 13;\n}\n\n.order-0 {\n  order: 0;\n}\n\n.order-1 {\n  order: 1;\n}\n\n.order-2 {\n  order: 2;\n}\n\n.order-3 {\n  order: 3;\n}\n\n.order-4 {\n  order: 4;\n}\n\n.order-5 {\n  order: 5;\n}\n\n.order-6 {\n  order: 6;\n}\n\n.order-7 {\n  order: 7;\n}\n\n.order-8 {\n  order: 8;\n}\n\n.order-9 {\n  order: 9;\n}\n\n.order-10 {\n  order: 10;\n}\n\n.order-11 {\n  order: 11;\n}\n\n.order-12 {\n  order: 12;\n}\n\n.offset-1 {\n  margin-left: 8.33333%;\n}\n\n.offset-2 {\n  margin-left: 16.66667%;\n}\n\n.offset-3 {\n  margin-left: 25%;\n}\n\n.offset-4 {\n  margin-left: 33.33333%;\n}\n\n.offset-5 {\n  margin-left: 41.66667%;\n}\n\n.offset-6 {\n  margin-left: 50%;\n}\n\n.offset-7 {\n  margin-left: 58.33333%;\n}\n\n.offset-8 {\n  margin-left: 66.66667%;\n}\n\n.offset-9 {\n  margin-left: 75%;\n}\n\n.offset-10 {\n  margin-left: 83.33333%;\n}\n\n.offset-11 {\n  margin-left: 91.66667%;\n}\n\n.m-0 {\n  margin: 0 !important;\n}\n\n.mt-0,\n.my-0 {\n  margin-top: 0 !important;\n}\n\n.mr-0,\n.mx-0 {\n  margin-right: 0 !important;\n}\n\n.mb-0,\n.my-0 {\n  margin-bottom: 0 !important;\n}\n\n.ml-0,\n.mx-0 {\n  margin-left: 0 !important;\n}\n\n.m-1 {\n  margin: 0.25rem !important;\n}\n\n.mt-1,\n.my-1 {\n  margin-top: 0.25rem !important;\n}\n\n.mr-1,\n.mx-1 {\n  margin-right: 0.25rem !important;\n}\n\n.mb-1,\n.my-1 {\n  margin-bottom: 0.25rem !important;\n}\n\n.ml-1,\n.mx-1 {\n  margin-left: 0.25rem !important;\n}\n\n.m-2 {\n  margin: 0.5rem !important;\n}\n\n.mt-2,\n.my-2 {\n  margin-top: 0.5rem !important;\n}\n\n.mr-2,\n.mx-2 {\n  margin-right: 0.5rem !important;\n}\n\n.mb-2,\n.my-2 {\n  margin-bottom: 0.5rem !important;\n}\n\n.ml-2,\n.mx-2 {\n  margin-left: 0.5rem !important;\n}\n\n.m-3 {\n  margin: 1rem !important;\n}\n\n.mt-3,\n.my-3 {\n  margin-top: 1rem !important;\n}\n\n.mr-3,\n.mx-3 {\n  margin-right: 1rem !important;\n}\n\n.mb-3,\n.my-3 {\n  margin-bottom: 1rem !important;\n}\n\n.ml-3,\n.mx-3 {\n  margin-left: 1rem !important;\n}\n\n.m-4 {\n  margin: 1.5rem !important;\n}\n\n.mt-4,\n.my-4 {\n  margin-top: 1.5rem !important;\n}\n\n.mr-4,\n.mx-4 {\n  margin-right: 1.5rem !important;\n}\n\n.mb-4,\n.my-4 {\n  margin-bottom: 1.5rem !important;\n}\n\n.ml-4,\n.mx-4 {\n  margin-left: 1.5rem !important;\n}\n\n.m-5 {\n  margin: 3rem !important;\n}\n\n.mt-5,\n.my-5 {\n  margin-top: 3rem !important;\n}\n\n.mr-5,\n.mx-5 {\n  margin-right: 3rem !important;\n}\n\n.mb-5,\n.my-5 {\n  margin-bottom: 3rem !important;\n}\n\n.ml-5,\n.mx-5 {\n  margin-left: 3rem !important;\n}\n\n.mt-auto {\n  margin-top: auto;\n}\n\n.mb-auto {\n  margin-bottom: auto;\n}\n\n.ml-auto {\n  margin-left: auto;\n}\n\n.mr-auto {\n  margin-right: auto;\n}\n\n.mx-auto {\n  margin-left: auto;\n  margin-right: auto;\n}\n\n.my-auto {\n  margin-top: auto;\n  margin-bottom: auto;\n}\n.p-0 {\n  padding: 0 !important;\n}\n\n.pt-0,\n.py-0 {\n  padding-top: 0 !important;\n}\n\n.pr-0,\n.px-0 {\n  padding-right: 0 !important;\n}\n\n.pb-0,\n.py-0 {\n  padding-bottom: 0 !important;\n}\n\n.pl-0,\n.px-0 {\n  padding-left: 0 !important;\n}\n\n.p-1 {\n  padding: 0.25rem !important;\n}\n\n.pt-1,\n.py-1 {\n  padding-top: 0.25rem !important;\n}\n\n.pr-1,\n.px-1 {\n  padding-right: 0.25rem !important;\n}\n\n.pb-1,\n.py-1 {\n  padding-bottom: 0.25rem !important;\n}\n\n.pl-1,\n.px-1 {\n  padding-left: 0.25rem !important;\n}\n\n.p-2 {\n  padding: 0.5rem !important;\n}\n\n.pt-2,\n.py-2 {\n  padding-top: 0.5rem !important;\n}\n\n.pr-2,\n.px-2 {\n  padding-right: 0.5rem !important;\n}\n\n.pb-2,\n.py-2 {\n  padding-bottom: 0.5rem !important;\n}\n\n.pl-2,\n.px-2 {\n  padding-left: 0.5rem !important;\n}\n\n.p-3 {\n  padding: 1rem !important;\n}\n\n.pt-3,\n.py-3 {\n  padding-top: 1rem !important;\n}\n\n.pr-3,\n.px-3 {\n  padding-right: 1rem !important;\n}\n\n.pb-3,\n.py-3 {\n  padding-bottom: 1rem !important;\n}\n\n.pl-3,\n.px-3 {\n  padding-left: 1rem !important;\n}\n\n.p-4 {\n  padding: 1.5rem !important;\n}\n\n.pt-4,\n.py-4 {\n  padding-top: 1.5rem !important;\n}\n\n.pr-4,\n.px-4 {\n  padding-right: 1.5rem !important;\n}\n\n.pb-4,\n.py-4 {\n  padding-bottom: 1.5rem !important;\n}\n\n.pl-4,\n.px-4 {\n  padding-left: 1.5rem !important;\n}\n\n.p-5 {\n  padding: 3rem !important;\n}\n\n.pt-5,\n.py-5 {\n  padding-top: 3rem !important;\n}\n\n.pr-5,\n.px-5 {\n  padding-right: 3rem !important;\n}\n\n.pb-5,\n.py-5 {\n  padding-bottom: 3rem !important;\n}\n\n.pl-5,\n.px-5 {\n  padding-left: 3rem !important;\n}\nhtml {\n  font-size: 62.5%;\n}\n\nbody {\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n  min-height: 100vh;\n  font-family: \"Open Sans\", sans-serif;\n  color: #212121;\n  font-weight: 400;\n  font-size: 1.6rem;\n  line-height: 1.2;\n  background-color: #efefef;\n}\n\nmain {\n  padding: 40px 0;\n}\n\nfooter {\n  margin-top: auto;\n}\n\n.hidden-title {\n  visibility: hidden;\n  height: 0;\n}\n\n.burger {\n  display: none;\n  width: 3rem;\n  height: 2rem;\n  padding: 0;\n  font-size: 0;\n  color: transparent;\n  position: absolute;\n  top: 50%;\n  left: 1.5rem;\n  transform: translateY(-50%);\n  background: none;\n  border: none;\n}\n.burger::before, .burger::after, .burger span {\n  display: block;\n  width: 100%;\n  height: 2px;\n  background-color: #212121;\n  position: absolute;\n  left: 0;\n}\n.burger::before, .burger::after {\n  content: \"\";\n  transition: transform 0.2s linear;\n}\n.burger::before {\n  top: 0;\n}\n.burger::after {\n  bottom: 0;\n}\n.burger span {\n  top: 50%;\n  transform: translateY(-50%);\n  transition: opacity 0.2s linear;\n}\n.show-sidebar .burger span {\n  opacity: 0;\n}\n.show-sidebar .burger::before, .show-sidebar .burger::after {\n  top: 50%;\n}\n.show-sidebar .burger::before {\n  transform: rotate(45deg);\n}\n.show-sidebar .burger::after {\n  transform: rotate(-45deg);\n}\n\n.logo {\n  max-width: 130px;\n}\n.logo img {\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n}\n\n.header {\n  padding: 20px 0;\n  font-size: 20px;\n  background-color: #fff;\n  box-shadow: -10px 10px 10px rgba(0, 0, 0, 0.3);\n  border-radius: 0 0 16px 16px;\n}\n.header__inner {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\n.header__info {\n  width: calc(80% - 130px);\n  padding: 0 5px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 22px;\n  font-family: \"Montserrat\", sans-serif;\n  overflow: hidden;\n}\n.header__info > a {\n  max-width: 50%;\n}\n.header__phone {\n  padding-right: 20px;\n  transition: color 0.2s linear;\n}\n.header__phone:hover {\n  color: #43a047;\n}\n.header__phone:hover svg {\n  fill: #43a047;\n}\n.footer .header__phone:hover {\n  color: #ccc;\n}\n.footer .header__phone:hover svg {\n  fill: #ccc;\n}\n.header__location {\n  padding-left: 20px;\n  border-left: 1px dashed #333;\n  transition: color 0.2s linear;\n}\n.header__location span:first-child {\n  display: block;\n  font-weight: 500;\n  font-family: \"Montserrat\", sans-serif;\n}\n.header__location:hover {\n  color: #43a047;\n}\n.header__location:hover svg {\n  fill: #43a047;\n}\n.header__routine {\n  width: 20%;\n  overflow: hidden;\n}\n.header__routine-icon {\n  height: 40px;\n  fill: #F9A825;\n  margin-right: 8px;\n  flex-shrink: 0;\n}\n.categories {\n  max-width: 80%;\n  margin: 0 auto;\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: center;\n}\n.categories__item {\n  padding: 10px;\n  width: 40%;\n}\n\n.cat-card {\n  display: flex;\n  flex-direction: column;\n  width: 320px;\n  height: 320px;\n  padding-top: 18px;\n  color: #fff;\n  background-color: #43a047;\n  border-radius: 16px;\n  box-shadow: -6px 6px 6px rgba(0, 0, 0, 0.2);\n  overflow: hidden;\n  cursor: pointer;\n  transition: scale 0.2s cubic-bezier(0.32, 0.08, 0.24, 1), box-shadow 0.2s cubic-bezier(0.32, 0.08, 0.24, 1), scale 0.2s cubic-bezier(0.32, 0.08, 0.24, 1), color 0.2s cubic-bezier(0.32, 0.08, 0.24, 1);\n}\n.cat-card:hover {\n  scale: 1.05;\n  box-shadow: -10px 10px 10px rgba(0, 0, 0, 0.18);\n}\n.cat-card svg {\n  height: 100%;\n  width: 37%;\n  margin: 0 auto;\n  fill: rgba(0, 0, 0, 0.7);\n}\n.cat-card__bottom {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  text-align: center;\n  font-family: \"Montserrat\", sans-serif;\n  text-transform: uppercase;\n  padding: 8px;\n  background-color: rgba(0, 0, 0, 0.2);\n  border-radius: 0 0 16px 16px;\n  min-height: 98.4px;\n}\n.cat-card h2, .cat-card h3, .cat-card h4, .cat-card h5 {\n  font-size: 26px;\n  text-align: center;\n  padding: 10px;\n}\n\n.footer {\n  padding: 34px 0;\n  font-size: 20px;\n  font-family: \"Montserrat\", sans-serif;\n  font-weight: 600;\n  background-color: #43a047;\n  border-radius: 16px 16px 0 0;\n}\n.footer .container {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\n@media screen and (max-width: 1200px) {\n  .container {\n    max-width: 960px;\n  }\n}\n@media screen and (max-width: 992px) {\n  .container {\n    max-width: 720px;\n  }\n  .burger {\n    display: block;\n  }\n}\n@media screen and (max-width: 768px) {\n  .container {\n    max-width: 540px;\n  }\n  .mx-sm-auto {\n    margin-left: auto;\n    margin-right: auto;\n  }\n}\n@media screen and (max-width: 576px) {\n  .container {\n    max-width: 100%;\n    padding: 0 10px;\n  }\n  .container-fluid {\n    padding: 0 10px;\n  }\n  .row {\n    margin-right: -10px;\n    margin-left: -10px;\n  }\n}\n@media (max-width: 1200px) {\n  .col-lg {\n    flex-basis: 0;\n    flex-grow: 1;\n    max-width: 100%;\n  }\n  .col-lg-auto {\n    flex: 0 0 auto;\n    width: auto;\n    max-width: none;\n  }\n  .col-lg-1 {\n    flex: 0 0 8.333333%;\n    max-width: 8.333333%;\n  }\n  .col-lg-2 {\n    flex: 0 0 16.666667%;\n    max-width: 16.666667%;\n  }\n  .col-lg-3 {\n    flex: 0 0 25%;\n    max-width: 25%;\n  }\n  .col-lg-4 {\n    flex: 0 0 33.333333%;\n    max-width: 33.333333%;\n  }\n  .col-lg-5 {\n    flex: 0 0 41.666667%;\n    max-width: 41.666667%;\n  }\n  .col-lg-6 {\n    flex: 0 0 50%;\n    max-width: 50%;\n  }\n  .col-lg-7 {\n    flex: 0 0 58.333333%;\n    max-width: 58.333333%;\n  }\n  .col-lg-8 {\n    flex: 0 0 66.666667%;\n    max-width: 66.666667%;\n  }\n  .col-lg-9 {\n    flex: 0 0 75%;\n    max-width: 75%;\n  }\n  .col-lg-10 {\n    flex: 0 0 83.333333%;\n    max-width: 83.333333%;\n  }\n  .col-lg-11 {\n    flex: 0 0 91.666667%;\n    max-width: 91.666667%;\n  }\n  .col-lg-12 {\n    flex: 0 0 100%;\n    max-width: 100%;\n  }\n  .order-lg-first {\n    order: -1;\n  }\n  .order-lg-last {\n    order: 13;\n  }\n  .order-lg-0 {\n    order: 0;\n  }\n  .order-lg-1 {\n    order: 1;\n  }\n  .order-lg-2 {\n    order: 2;\n  }\n  .order-lg-3 {\n    order: 3;\n  }\n  .order-lg-4 {\n    order: 4;\n  }\n  .order-lg-5 {\n    order: 5;\n  }\n  .order-lg-6 {\n    order: 6;\n  }\n  .order-lg-7 {\n    order: 7;\n  }\n  .order-lg-8 {\n    order: 8;\n  }\n  .order-lg-9 {\n    order: 9;\n  }\n  .order-lg-10 {\n    order: 10;\n  }\n  .order-lg-11 {\n    order: 11;\n  }\n  .order-lg-12 {\n    order: 12;\n  }\n  .offset-lg-1 {\n    margin-left: 8.33333%;\n  }\n  .offset-lg-2 {\n    margin-left: 16.66667%;\n  }\n  .offset-lg-3 {\n    margin-left: 25%;\n  }\n  .offset-lg-4 {\n    margin-left: 33.33333%;\n  }\n  .offset-lg-5 {\n    margin-left: 41.66667%;\n  }\n  .offset-lg-6 {\n    margin-left: 50%;\n  }\n  .offset-lg-7 {\n    margin-left: 58.33333%;\n  }\n  .offset-lg-8 {\n    margin-left: 66.66667%;\n  }\n  .offset-lg-9 {\n    margin-left: 75%;\n  }\n  .offset-lg-10 {\n    margin-left: 83.33333%;\n  }\n  .offset-lg-11 {\n    margin-left: 91.66667%;\n  }\n}\n@media (max-width: 992px) {\n  .col-md {\n    flex-basis: 0;\n    flex-grow: 1;\n    max-width: 100%;\n  }\n  .col-md-auto {\n    flex: 0 0 auto;\n    width: auto;\n    max-width: none;\n  }\n  .col-md-1 {\n    flex: 0 0 8.333333%;\n    max-width: 8.333333%;\n  }\n  .col-md-2 {\n    flex: 0 0 16.666667%;\n    max-width: 16.666667%;\n  }\n  .col-md-3 {\n    flex: 0 0 25%;\n    max-width: 25%;\n  }\n  .col-md-4 {\n    flex: 0 0 33.333333%;\n    max-width: 33.333333%;\n  }\n  .col-md-5 {\n    flex: 0 0 41.666667%;\n    max-width: 41.666667%;\n  }\n  .col-md-6 {\n    flex: 0 0 50%;\n    max-width: 50%;\n  }\n  .col-md-7 {\n    flex: 0 0 58.333333%;\n    max-width: 58.333333%;\n  }\n  .col-md-8 {\n    flex: 0 0 66.666667%;\n    max-width: 66.666667%;\n  }\n  .col-md-9 {\n    flex: 0 0 75%;\n    max-width: 75%;\n  }\n  .col-md-10 {\n    flex: 0 0 83.333333%;\n    max-width: 83.333333%;\n  }\n  .col-md-11 {\n    flex: 0 0 91.666667%;\n    max-width: 91.666667%;\n  }\n  .col-md-12 {\n    flex: 0 0 100%;\n    max-width: 100%;\n  }\n  .order-md-first {\n    order: -1;\n  }\n  .order-md-last {\n    order: 13;\n  }\n  .order-md-0 {\n    order: 0;\n  }\n  .order-md-1 {\n    order: 1;\n  }\n  .order-md-2 {\n    order: 2;\n  }\n  .order-md-3 {\n    order: 3;\n  }\n  .order-md-4 {\n    order: 4;\n  }\n  .order-md-5 {\n    order: 5;\n  }\n  .order-md-6 {\n    order: 6;\n  }\n  .order-md-7 {\n    order: 7;\n  }\n  .order-md-8 {\n    order: 8;\n  }\n  .order-md-9 {\n    order: 9;\n  }\n  .order-md-10 {\n    order: 10;\n  }\n  .order-md-11 {\n    order: 11;\n  }\n  .order-md-12 {\n    order: 12;\n  }\n  .offset-md-1 {\n    margin-left: 8.33333%;\n  }\n  .offset-md-2 {\n    margin-left: 16.66667%;\n  }\n  .offset-md-3 {\n    margin-left: 25%;\n  }\n  .offset-md-4 {\n    margin-left: 33.33333%;\n  }\n  .offset-md-5 {\n    margin-left: 41.66667%;\n  }\n  .offset-md-6 {\n    margin-left: 50%;\n  }\n  .offset-md-7 {\n    margin-left: 58.33333%;\n  }\n  .offset-md-8 {\n    margin-left: 66.66667%;\n  }\n  .offset-md-9 {\n    margin-left: 75%;\n  }\n  .offset-md-10 {\n    margin-left: 83.33333%;\n  }\n  .offset-md-11 {\n    margin-left: 91.66667%;\n  }\n  .m-md-0 {\n    margin: 0 !important;\n  }\n  .mt-md-0,\n  .my-md-0 {\n    margin-top: 0 !important;\n  }\n  .mr-md-0,\n  .mx-md-0 {\n    margin-right: 0 !important;\n  }\n  .mb-md-0,\n  .my-md-0 {\n    margin-bottom: 0 !important;\n  }\n  .ml-md-0,\n  .mx-md-0 {\n    margin-left: 0 !important;\n  }\n  .m-md-1 {\n    margin: 0.25rem !important;\n  }\n  .mt-md-1,\n  .my-md-1 {\n    margin-top: 0.25rem !important;\n  }\n  .mr-md-1,\n  .mx-md-1 {\n    margin-right: 0.25rem !important;\n  }\n  .mb-md-1,\n  .my-md-1 {\n    margin-bottom: 0.25rem !important;\n  }\n  .ml-md-1,\n  .mx-md-1 {\n    margin-left: 0.25rem !important;\n  }\n  .m-md-2 {\n    margin: 0.5rem !important;\n  }\n  .mt-md-2,\n  .my-md-2 {\n    margin-top: 0.5rem !important;\n  }\n  .mr-md-2,\n  .mx-md-2 {\n    margin-right: 0.5rem !important;\n  }\n  .mb-md-2,\n  .my-md-2 {\n    margin-bottom: 0.5rem !important;\n  }\n  .ml-md-2,\n  .mx-md-2 {\n    margin-left: 0.5rem !important;\n  }\n  .m-md-3 {\n    margin: 1rem !important;\n  }\n  .mt-md-3,\n  .my-md-3 {\n    margin-top: 1rem !important;\n  }\n  .mr-md-3,\n  .mx-md-3 {\n    margin-right: 1rem !important;\n  }\n  .mb-md-3,\n  .my-md-3 {\n    margin-bottom: 1rem !important;\n  }\n  .ml-md-3,\n  .mx-md-3 {\n    margin-left: 1rem !important;\n  }\n  .m-md-4 {\n    margin: 1.5rem !important;\n  }\n  .mt-md-4,\n  .my-md-4 {\n    margin-top: 1.5rem !important;\n  }\n  .mr-md-4,\n  .mx-md-4 {\n    margin-right: 1.5rem !important;\n  }\n  .mb-md-4,\n  .my-md-4 {\n    margin-bottom: 1.5rem !important;\n  }\n  .ml-md-4,\n  .mx-md-4 {\n    margin-left: 1.5rem !important;\n  }\n  .m-md-5 {\n    margin: 3rem !important;\n  }\n  .mt-md-5,\n  .my-md-5 {\n    margin-top: 3rem !important;\n  }\n  .mr-md-5,\n  .mx-md-5 {\n    margin-right: 3rem !important;\n  }\n  .mb-md-5,\n  .my-md-5 {\n    margin-bottom: 3rem !important;\n  }\n  .ml-md-5,\n  .mx-md-5 {\n    margin-left: 3rem !important;\n  }\n}\n@media (max-width: 768px) {\n  .col-sm {\n    flex-basis: 0;\n    flex-grow: 1;\n    max-width: 100%;\n  }\n  .col-sm-auto {\n    flex: 0 0 auto;\n    width: auto;\n    max-width: none;\n  }\n  .col-sm-1 {\n    flex: 0 0 8.333333%;\n    max-width: 8.333333%;\n  }\n  .col-sm-2 {\n    flex: 0 0 16.666667%;\n    max-width: 16.666667%;\n  }\n  .col-sm-3 {\n    flex: 0 0 25%;\n    max-width: 25%;\n  }\n  .col-sm-4 {\n    flex: 0 0 33.333333%;\n    max-width: 33.333333%;\n  }\n  .col-sm-5 {\n    flex: 0 0 41.666667%;\n    max-width: 41.666667%;\n  }\n  .col-sm-6 {\n    flex: 0 0 50%;\n    max-width: 50%;\n  }\n  .col-sm-7 {\n    flex: 0 0 58.333333%;\n    max-width: 58.333333%;\n  }\n  .col-sm-8 {\n    flex: 0 0 66.666667%;\n    max-width: 66.666667%;\n  }\n  .col-sm-9 {\n    flex: 0 0 75%;\n    max-width: 75%;\n  }\n  .col-sm-10 {\n    flex: 0 0 83.333333%;\n    max-width: 83.333333%;\n  }\n  .col-sm-11 {\n    flex: 0 0 91.666667%;\n    max-width: 91.666667%;\n  }\n  .col-sm-12 {\n    flex: 0 0 100%;\n    max-width: 100%;\n  }\n  .order-sm-first {\n    order: -1;\n  }\n  .order-sm-last {\n    order: 13;\n  }\n  .order-sm-0 {\n    order: 0;\n  }\n  .order-sm-1 {\n    order: 1;\n  }\n  .order-sm-2 {\n    order: 2;\n  }\n  .order-sm-3 {\n    order: 3;\n  }\n  .order-sm-4 {\n    order: 4;\n  }\n  .order-sm-5 {\n    order: 5;\n  }\n  .order-sm-6 {\n    order: 6;\n  }\n  .order-sm-7 {\n    order: 7;\n  }\n  .order-sm-8 {\n    order: 8;\n  }\n  .order-sm-9 {\n    order: 9;\n  }\n  .order-sm-10 {\n    order: 10;\n  }\n  .order-sm-11 {\n    order: 11;\n  }\n  .order-sm-12 {\n    order: 12;\n  }\n  .offset-sm-0 {\n    margin-left: 0;\n  }\n  .offset-sm-1 {\n    margin-left: 8.33333%;\n  }\n  .offset-sm-2 {\n    margin-left: 16.66667%;\n  }\n  .offset-sm-3 {\n    margin-left: 25%;\n  }\n  .offset-sm-4 {\n    margin-left: 33.33333%;\n  }\n  .offset-sm-5 {\n    margin-left: 41.66667%;\n  }\n  .offset-sm-6 {\n    margin-left: 50%;\n  }\n  .offset-sm-7 {\n    margin-left: 58.33333%;\n  }\n  .offset-sm-8 {\n    margin-left: 66.66667%;\n  }\n  .offset-sm-9 {\n    margin-left: 75%;\n  }\n  .offset-sm-10 {\n    margin-left: 83.33333%;\n  }\n  .offset-sm-11 {\n    margin-left: 91.66667%;\n  }\n  .m-sm-0 {\n    margin: 0 !important;\n  }\n  .mt-sm-0,\n  .my-sm-0 {\n    margin-top: 0 !important;\n  }\n  .mr-sm-0,\n  .mx-sm-0 {\n    margin-right: 0 !important;\n  }\n  .mb-sm-0,\n  .my-sm-0 {\n    margin-bottom: 0 !important;\n  }\n  .ml-sm-0,\n  .mx-sm-0 {\n    margin-left: 0 !important;\n  }\n  .m-sm-1 {\n    margin: 0.25rem !important;\n  }\n  .mt-1,\n  .my-1 {\n    margin-top: 0.25rem !important;\n  }\n  .mr-sm-1,\n  .mx-sm-1 {\n    margin-right: 0.25rem !important;\n  }\n  .mb-sm-1,\n  .my-sm-1 {\n    margin-bottom: 0.25rem !important;\n  }\n  .ml-sm-1,\n  .mx-sm-1 {\n    margin-left: 0.25rem !important;\n  }\n  .m-sm-2 {\n    margin: 0.5rem !important;\n  }\n  .mt-sm-2,\n  .my-sm-2 {\n    margin-top: 0.5rem !important;\n  }\n  .mr-2,\n  .mx-2 {\n    margin-right: 0.5rem !important;\n  }\n  .mb-sm-2,\n  .my-sm-2 {\n    margin-bottom: 0.5rem !important;\n  }\n  .ml-sm-2,\n  .mx-sm-2 {\n    margin-left: 0.5rem !important;\n  }\n  .m-sm-3 {\n    margin: 1rem !important;\n  }\n  .mt-sm-3,\n  .my-sm-3 {\n    margin-top: 1rem !important;\n  }\n  .mr-sm-3,\n  .mx-sm-3 {\n    margin-right: 1rem !important;\n  }\n  .mb-sm-3,\n  .my-sm-3 {\n    margin-bottom: 1rem !important;\n  }\n  .ml-sm-3,\n  .mx-sm-3 {\n    margin-left: 1rem !important;\n  }\n  .m-sm-4 {\n    margin: 1.5rem !important;\n  }\n  .mt-sm-4,\n  .my-sm-4 {\n    margin-top: 1.5rem !important;\n  }\n  .mr-sm-4,\n  .mx-sm-4 {\n    margin-right: 1.5rem !important;\n  }\n  .mb-sm-4,\n  .my-sm-4 {\n    margin-bottom: 1.5rem !important;\n  }\n  .ml-sm-4,\n  .mx-sm-4 {\n    margin-left: 1.5rem !important;\n  }\n  .m-sm-5 {\n    margin: 3rem !important;\n  }\n  .mt-sm-5,\n  .my-sm-5 {\n    margin-top: 3rem !important;\n  }\n  .mr-sm-5,\n  .mx-sm-5 {\n    margin-right: 3rem !important;\n  }\n  .mb-sm-5,\n  .my-sm-5 {\n    margin-bottom: 3rem !important;\n  }\n  .ml-sm-5,\n  .mx-sm-5 {\n    margin-left: 3rem !important;\n  }\n}\n@media (max-width: 576px) {\n  .col-xs {\n    flex-basis: 0;\n    flex-grow: 1;\n    max-width: 100%;\n  }\n  .col-xs-auto {\n    flex: 0 0 auto;\n    width: auto;\n    max-width: none;\n  }\n  .col-xs-1 {\n    flex: 0 0 8.333333%;\n    max-width: 8.333333%;\n  }\n  .col-xs-2 {\n    flex: 0 0 16.666667%;\n    max-width: 16.666667%;\n  }\n  .col-xs-3 {\n    flex: 0 0 25%;\n    max-width: 25%;\n  }\n  .col-xs-4 {\n    flex: 0 0 33.333333%;\n    max-width: 33.333333%;\n  }\n  .col-xs-5 {\n    flex: 0 0 41.666667%;\n    max-width: 41.666667%;\n  }\n  .col-xs-6 {\n    flex: 0 0 50%;\n    max-width: 50%;\n  }\n  .col-xs-7 {\n    flex: 0 0 58.333333%;\n    max-width: 58.333333%;\n  }\n  .col-xs-8 {\n    flex: 0 0 66.666667%;\n    max-width: 66.666667%;\n  }\n  .col-xs-9 {\n    flex: 0 0 75%;\n    max-width: 75%;\n  }\n  .col-xs-10 {\n    flex: 0 0 83.333333%;\n    max-width: 83.333333%;\n  }\n  .col-xs-11 {\n    flex: 0 0 91.666667%;\n    max-width: 91.666667%;\n  }\n  .col-xs-12 {\n    flex: 0 0 100%;\n    max-width: 100%;\n  }\n  .pr-xs-0 {\n    padding-right: 0 !important;\n  }\n  .pr-xs-1 {\n    padding-right: 0.25rem !important;\n  }\n  .order-xs-first {\n    order: -1;\n  }\n  .order-xs-last {\n    order: 13;\n  }\n  .order-xs-0 {\n    order: 0;\n  }\n  .order-xs-1 {\n    order: 1;\n  }\n  .order-xs-2 {\n    order: 2;\n  }\n  .order-xs-3 {\n    order: 3;\n  }\n  .order-xs-4 {\n    order: 4;\n  }\n  .order-xs-5 {\n    order: 5;\n  }\n  .order-xs-6 {\n    order: 6;\n  }\n  .order-xs-7 {\n    order: 7;\n  }\n  .order-xs-8 {\n    order: 8;\n  }\n  .order-xs-9 {\n    order: 9;\n  }\n  .order-xs-10 {\n    order: 10;\n  }\n  .order-xs-11 {\n    order: 11;\n  }\n  .order-xs-12 {\n    order: 12;\n  }\n  .offset-xs-0 {\n    margin-left: 0;\n  }\n  .offset-xs-1 {\n    margin-left: 8.33333%;\n  }\n  .offset-xs-2 {\n    margin-left: 16.66667%;\n  }\n  .offset-xs-3 {\n    margin-left: 25%;\n  }\n  .offset-xs-4 {\n    margin-left: 33.33333%;\n  }\n  .offset-xs-5 {\n    margin-left: 41.66667%;\n  }\n  .offset-xs-6 {\n    margin-left: 50%;\n  }\n  .offset-xs-7 {\n    margin-left: 58.33333%;\n  }\n  .offset-xs-8 {\n    margin-left: 66.66667%;\n  }\n  .offset-xs-9 {\n    margin-left: 75%;\n  }\n  .offset-xs-10 {\n    margin-left: 83.33333%;\n  }\n  .offset-xs-11 {\n    margin-left: 91.66667%;\n  }\n  .mb-xs-3,\n  .my-xs-3 {\n    margin-bottom: 1rem !important;\n  }\n  .mb-xs-2,\n  .my-xs-2 {\n    margin-bottom: 0.5rem !important;\n  }\n  .mb-xs-1,\n  .my-xs-1 {\n    margin-bottom: 0.25rem !important;\n  }\n  .mt-xs-0 {\n    margin-top: 0 !important;\n  }\n}", "",{"version":3,"sources":["webpack://./src/scss/_mixins.scss","webpack://./src/scss/style.scss","webpack://./src/scss/_reset.scss","webpack://./src/scss/_grid.scss","webpack://./src/scss/_base.scss","webpack://./src/scss/_vars.scss","webpack://./src/scss/default-elements/_burger.scss","webpack://./src/scss/default-elements/_logo.scss","webpack://./src/scss/header/_header.scss","webpack://./src/scss/categories/_categories.scss","webpack://./src/scss/default-elements/_cat-card.scss","webpack://./src/scss/footer/_footer.scss","webpack://./<no source>"],"names":[],"mappings":"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","sourcesContent":["// 1440px - widescreen\r\n// 1200px - laptop\r\n// 992px - tablet\r\n// 768px - mobile-large\r\n// 576px - mobile\r\n\r\n@mixin widescreen {\r\n  @media screen and (max-width: $widescreen) {\r\n    @content;\r\n  }\r\n}\r\n@mixin laptop {\r\n  @media screen and (max-width: $laptop) {\r\n    @content;\r\n  }\r\n}\r\n@mixin tablet {\r\n  @media screen and (max-width: $tablet) {\r\n    @content;\r\n  }\r\n}\r\n@mixin mobile-large {\r\n  @media screen and (max-width: $mobile-large) {\r\n    @content;\r\n  }\r\n}\r\n@mixin mobile {\r\n  @media screen and (max-width: $mobile) {\r\n    @content;\r\n  }\r\n}\r\n\r\n.bg-radial {\r\n  border-radius: 16px;\r\n  //background-color: rgba(248,248,252,.85);\r\n  backdrop-filter: blur(15px) saturate(86%);\r\n  background: radial-gradient(circle at 100% 0,hsla(0,0%,100%,.6) 0,hsla(0,0%,96.1%,.13) 183%);\r\n}\r\n\r\n.icon {\r\n  height: 20px;\r\n  margin-right: 6px;\r\n  fill: #333;\r\n  flex-shrink: 0;\r\n  transition: fill .2s linear;\r\n}\r\n\r\n.flex-items-center {\r\n  display: flex;\r\n  align-items: center;\r\n}\r\n\r\n.text-nowrap {\r\n  white-space: nowrap;\r\n  overflow: hidden;\r\n  text-overflow: ellipsis;\r\n}",".bg-radial, .cat-card {\n  border-radius: 16px;\n  backdrop-filter: blur(15px) saturate(86%);\n  background: radial-gradient(circle at 100% 0, hsla(0, 0%, 100%, 0.6) 0, hsla(0, 0%, 96.1%, 0.13) 183%);\n}\n\n.icon, .header__location-icon, .header__phone-icon {\n  height: 20px;\n  margin-right: 6px;\n  fill: #333;\n  flex-shrink: 0;\n  transition: fill 0.2s linear;\n}\n\n.flex-items-center, .header__routine, .header__location, .header__phone {\n  display: flex;\n  align-items: center;\n}\n\n.text-nowrap, .header__routine-val p, .header__info span {\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n\n/* http://meyerweb.com/eric/tools/css/reset/\n   v2.0 | 20110126\n   License: none (public domain)\n*/\nhtml, body, div, span, applet, object, iframe,\nh1, h2, h3, h4, h5, h6, p, blockquote, pre,\na, abbr, acronym, address, big, cite, code,\ndel, dfn, em, img, ins, kbd, q, s, samp,\nsmall, strike, strong, sub, sup, tt, var,\nb, u, i, center,\ndl, dt, dd, ol, ul, li,\nfieldset, form, label, legend,\ntable, caption, tbody, tfoot, thead, tr, th, td,\narticle, aside, canvas, details, embed,\nfigure, figcaption, footer, header, hgroup,\nmenu, nav, output, ruby, section, summary,\ntime, mark, audio, video {\n  margin: 0;\n  padding: 0;\n  border: 0;\n  outline: none;\n  font-size: 100%;\n  font: inherit;\n  vertical-align: baseline;\n}\n\n/* HTML5 display-role reset for older browsers */\narticle, aside, details, figcaption, figure,\nfooter, header, hgroup, menu, nav, section {\n  display: block;\n}\n\n*, *::before, *::after {\n  box-sizing: border-box;\n}\n\na {\n  color: inherit;\n  text-decoration: none;\n  cursor: pointer;\n  display: inline-block;\n}\n\nimg {\n  max-width: 100%;\n  height: auto;\n}\n\nol, ul {\n  list-style: none;\n}\n\nblockquote, q {\n  quotes: none;\n}\n\nblockquote:before, blockquote:after,\nq:before, q:after {\n  content: \"\";\n}\n\ninput, textarea, button {\n  outline: none;\n  border: none;\n}\n\ntextarea {\n  resize: vertical;\n}\n\nbutton {\n  cursor: pointer;\n}\n\ntable {\n  border-collapse: collapse;\n  border-spacing: 0;\n}\n\n.container {\n  padding: 0 15px;\n  max-width: 1230px;\n  margin: 0 auto;\n}\n.container--header {\n  max-width: 1430px;\n}\n@media screen and (max-width: 1200px) {\n  .container {\n    max-width: 960px;\n  }\n}\n@media screen and (max-width: 992px) {\n  .container {\n    max-width: 720px;\n  }\n}\n@media screen and (max-width: 768px) {\n  .container {\n    max-width: 540px;\n  }\n}\n@media screen and (max-width: 576px) {\n  .container {\n    max-width: 100%;\n    padding: 0 10px;\n  }\n}\n\n.container-fluid {\n  width: 100%;\n  padding: 0 15px;\n}\n@media screen and (max-width: 576px) {\n  .container-fluid {\n    padding: 0 10px;\n  }\n}\n\n.row {\n  display: flex;\n  flex-wrap: wrap;\n  margin-right: -15px;\n  margin-left: -15px;\n}\n@media screen and (max-width: 576px) {\n  .row {\n    margin-right: -10px;\n    margin-left: -10px;\n  }\n}\n\n.no-gutters {\n  margin-right: 0;\n  margin-left: 0;\n}\n\n.no-gutters > .col,\n.no-gutters > [class*=col-] {\n  padding-right: 0;\n  padding-left: 0;\n}\n\n.col-1, .col-2, .col-3, .col-4, .col-5, .col-6, .col-7, .col-8, .col-9, .col-10, .col-11, .col-12, .col,\n.col-auto, .col-sm-1, .col-sm-2, .col-sm-3, .col-sm-4, .col-sm-5, .col-sm-6, .col-sm-7, .col-sm-8, .col-sm-9, .col-sm-10, .col-sm-11, .col-sm-12, .col-sm,\n.col-sm-auto, .col-md-1, .col-md-2, .col-md-3, .col-md-4, .col-md-5, .col-md-6, .col-md-7, .col-md-8, .col-md-9, .col-md-10, .col-md-11, .col-md-12, .col-md,\n.col-md-auto, .col-lg-1, .col-lg-2, .col-lg-3, .col-lg-4, .col-lg-5, .col-lg-6, .col-lg-7, .col-lg-8, .col-lg-9, .col-lg-10, .col-lg-11, .col-lg-12, .col-lg,\n.col-lg-auto, .col-xs-1, .col-xs-2, .col-xs-3, .col-xs-4, .col-xs-5, .col-xs-6, .col-xs-7, .col-xs-8, .col-xs-9, .col-xs-10, .col-xs-11, .col-xs-12, .col-xs,\n.col-xs-auto {\n  width: 100%;\n  max-width: 100%;\n  min-height: 1px;\n  flex-shrink: 0;\n  padding-right: 15px;\n  padding-left: 15px;\n}\n\n.col {\n  flex-basis: 0;\n  flex-grow: 1;\n  max-width: 100%;\n}\n\n.col-auto {\n  flex: 0 0 auto;\n  width: auto;\n  max-width: none;\n}\n\n.col-1 {\n  flex: 0 0 8.333333%;\n  max-width: 8.333333%;\n}\n\n.col-2 {\n  flex: 0 0 16.666667%;\n  max-width: 16.666667%;\n}\n\n.col-3 {\n  flex: 0 0 25%;\n  max-width: 25%;\n}\n\n.col-4 {\n  flex: 0 0 33.333333%;\n  max-width: 33.333333%;\n}\n\n.col-5 {\n  flex: 0 0 41.666667%;\n  max-width: 41.666667%;\n}\n\n.col-6 {\n  flex: 0 0 50%;\n  max-width: 50%;\n}\n\n.col-7 {\n  flex: 0 0 58.333333%;\n  max-width: 58.333333%;\n}\n\n.col-8 {\n  flex: 0 0 66.666667%;\n  max-width: 66.666667%;\n}\n\n.col-9 {\n  flex: 0 0 75%;\n  max-width: 75%;\n}\n\n.col-10 {\n  flex: 0 0 83.333333%;\n  max-width: 83.333333%;\n}\n\n.col-11 {\n  flex: 0 0 91.666667%;\n  max-width: 91.666667%;\n}\n\n.col-12 {\n  flex: 0 0 100%;\n  max-width: 100%;\n}\n\n.order-first {\n  order: -1;\n}\n\n.order-last {\n  order: 13;\n}\n\n.order-0 {\n  order: 0;\n}\n\n.order-1 {\n  order: 1;\n}\n\n.order-2 {\n  order: 2;\n}\n\n.order-3 {\n  order: 3;\n}\n\n.order-4 {\n  order: 4;\n}\n\n.order-5 {\n  order: 5;\n}\n\n.order-6 {\n  order: 6;\n}\n\n.order-7 {\n  order: 7;\n}\n\n.order-8 {\n  order: 8;\n}\n\n.order-9 {\n  order: 9;\n}\n\n.order-10 {\n  order: 10;\n}\n\n.order-11 {\n  order: 11;\n}\n\n.order-12 {\n  order: 12;\n}\n\n.offset-1 {\n  margin-left: 8.33333%;\n}\n\n.offset-2 {\n  margin-left: 16.66667%;\n}\n\n.offset-3 {\n  margin-left: 25%;\n}\n\n.offset-4 {\n  margin-left: 33.33333%;\n}\n\n.offset-5 {\n  margin-left: 41.66667%;\n}\n\n.offset-6 {\n  margin-left: 50%;\n}\n\n.offset-7 {\n  margin-left: 58.33333%;\n}\n\n.offset-8 {\n  margin-left: 66.66667%;\n}\n\n.offset-9 {\n  margin-left: 75%;\n}\n\n.offset-10 {\n  margin-left: 83.33333%;\n}\n\n.offset-11 {\n  margin-left: 91.66667%;\n}\n\n.m-0 {\n  margin: 0 !important;\n}\n\n.mt-0,\n.my-0 {\n  margin-top: 0 !important;\n}\n\n.mr-0,\n.mx-0 {\n  margin-right: 0 !important;\n}\n\n.mb-0,\n.my-0 {\n  margin-bottom: 0 !important;\n}\n\n.ml-0,\n.mx-0 {\n  margin-left: 0 !important;\n}\n\n.m-1 {\n  margin: 0.25rem !important;\n}\n\n.mt-1,\n.my-1 {\n  margin-top: 0.25rem !important;\n}\n\n.mr-1,\n.mx-1 {\n  margin-right: 0.25rem !important;\n}\n\n.mb-1,\n.my-1 {\n  margin-bottom: 0.25rem !important;\n}\n\n.ml-1,\n.mx-1 {\n  margin-left: 0.25rem !important;\n}\n\n.m-2 {\n  margin: 0.5rem !important;\n}\n\n.mt-2,\n.my-2 {\n  margin-top: 0.5rem !important;\n}\n\n.mr-2,\n.mx-2 {\n  margin-right: 0.5rem !important;\n}\n\n.mb-2,\n.my-2 {\n  margin-bottom: 0.5rem !important;\n}\n\n.ml-2,\n.mx-2 {\n  margin-left: 0.5rem !important;\n}\n\n.m-3 {\n  margin: 1rem !important;\n}\n\n.mt-3,\n.my-3 {\n  margin-top: 1rem !important;\n}\n\n.mr-3,\n.mx-3 {\n  margin-right: 1rem !important;\n}\n\n.mb-3,\n.my-3 {\n  margin-bottom: 1rem !important;\n}\n\n.ml-3,\n.mx-3 {\n  margin-left: 1rem !important;\n}\n\n.m-4 {\n  margin: 1.5rem !important;\n}\n\n.mt-4,\n.my-4 {\n  margin-top: 1.5rem !important;\n}\n\n.mr-4,\n.mx-4 {\n  margin-right: 1.5rem !important;\n}\n\n.mb-4,\n.my-4 {\n  margin-bottom: 1.5rem !important;\n}\n\n.ml-4,\n.mx-4 {\n  margin-left: 1.5rem !important;\n}\n\n.m-5 {\n  margin: 3rem !important;\n}\n\n.mt-5,\n.my-5 {\n  margin-top: 3rem !important;\n}\n\n.mr-5,\n.mx-5 {\n  margin-right: 3rem !important;\n}\n\n.mb-5,\n.my-5 {\n  margin-bottom: 3rem !important;\n}\n\n.ml-5,\n.mx-5 {\n  margin-left: 3rem !important;\n}\n\n.mt-auto {\n  margin-top: auto;\n}\n\n.mb-auto {\n  margin-bottom: auto;\n}\n\n.ml-auto {\n  margin-left: auto;\n}\n\n.mr-auto {\n  margin-right: auto;\n}\n\n.mx-auto {\n  margin-left: auto;\n  margin-right: auto;\n}\n\n.my-auto {\n  margin-top: auto;\n  margin-bottom: auto;\n}\n\n@media screen and (max-width: 768px) {\n  .mx-sm-auto {\n    margin-left: auto;\n    margin-right: auto;\n  }\n}\n.p-0 {\n  padding: 0 !important;\n}\n\n.pt-0,\n.py-0 {\n  padding-top: 0 !important;\n}\n\n.pr-0,\n.px-0 {\n  padding-right: 0 !important;\n}\n\n.pb-0,\n.py-0 {\n  padding-bottom: 0 !important;\n}\n\n.pl-0,\n.px-0 {\n  padding-left: 0 !important;\n}\n\n.p-1 {\n  padding: 0.25rem !important;\n}\n\n.pt-1,\n.py-1 {\n  padding-top: 0.25rem !important;\n}\n\n.pr-1,\n.px-1 {\n  padding-right: 0.25rem !important;\n}\n\n.pb-1,\n.py-1 {\n  padding-bottom: 0.25rem !important;\n}\n\n.pl-1,\n.px-1 {\n  padding-left: 0.25rem !important;\n}\n\n.p-2 {\n  padding: 0.5rem !important;\n}\n\n.pt-2,\n.py-2 {\n  padding-top: 0.5rem !important;\n}\n\n.pr-2,\n.px-2 {\n  padding-right: 0.5rem !important;\n}\n\n.pb-2,\n.py-2 {\n  padding-bottom: 0.5rem !important;\n}\n\n.pl-2,\n.px-2 {\n  padding-left: 0.5rem !important;\n}\n\n.p-3 {\n  padding: 1rem !important;\n}\n\n.pt-3,\n.py-3 {\n  padding-top: 1rem !important;\n}\n\n.pr-3,\n.px-3 {\n  padding-right: 1rem !important;\n}\n\n.pb-3,\n.py-3 {\n  padding-bottom: 1rem !important;\n}\n\n.pl-3,\n.px-3 {\n  padding-left: 1rem !important;\n}\n\n.p-4 {\n  padding: 1.5rem !important;\n}\n\n.pt-4,\n.py-4 {\n  padding-top: 1.5rem !important;\n}\n\n.pr-4,\n.px-4 {\n  padding-right: 1.5rem !important;\n}\n\n.pb-4,\n.py-4 {\n  padding-bottom: 1.5rem !important;\n}\n\n.pl-4,\n.px-4 {\n  padding-left: 1.5rem !important;\n}\n\n.p-5 {\n  padding: 3rem !important;\n}\n\n.pt-5,\n.py-5 {\n  padding-top: 3rem !important;\n}\n\n.pr-5,\n.px-5 {\n  padding-right: 3rem !important;\n}\n\n.pb-5,\n.py-5 {\n  padding-bottom: 3rem !important;\n}\n\n.pl-5,\n.px-5 {\n  padding-left: 3rem !important;\n}\n\n@media (max-width: 1200px) {\n  .col-lg {\n    flex-basis: 0;\n    flex-grow: 1;\n    max-width: 100%;\n  }\n  .col-lg-auto {\n    flex: 0 0 auto;\n    width: auto;\n    max-width: none;\n  }\n  .col-lg-1 {\n    flex: 0 0 8.333333%;\n    max-width: 8.333333%;\n  }\n  .col-lg-2 {\n    flex: 0 0 16.666667%;\n    max-width: 16.666667%;\n  }\n  .col-lg-3 {\n    flex: 0 0 25%;\n    max-width: 25%;\n  }\n  .col-lg-4 {\n    flex: 0 0 33.333333%;\n    max-width: 33.333333%;\n  }\n  .col-lg-5 {\n    flex: 0 0 41.666667%;\n    max-width: 41.666667%;\n  }\n  .col-lg-6 {\n    flex: 0 0 50%;\n    max-width: 50%;\n  }\n  .col-lg-7 {\n    flex: 0 0 58.333333%;\n    max-width: 58.333333%;\n  }\n  .col-lg-8 {\n    flex: 0 0 66.666667%;\n    max-width: 66.666667%;\n  }\n  .col-lg-9 {\n    flex: 0 0 75%;\n    max-width: 75%;\n  }\n  .col-lg-10 {\n    flex: 0 0 83.333333%;\n    max-width: 83.333333%;\n  }\n  .col-lg-11 {\n    flex: 0 0 91.666667%;\n    max-width: 91.666667%;\n  }\n  .col-lg-12 {\n    flex: 0 0 100%;\n    max-width: 100%;\n  }\n  .order-lg-first {\n    order: -1;\n  }\n  .order-lg-last {\n    order: 13;\n  }\n  .order-lg-0 {\n    order: 0;\n  }\n  .order-lg-1 {\n    order: 1;\n  }\n  .order-lg-2 {\n    order: 2;\n  }\n  .order-lg-3 {\n    order: 3;\n  }\n  .order-lg-4 {\n    order: 4;\n  }\n  .order-lg-5 {\n    order: 5;\n  }\n  .order-lg-6 {\n    order: 6;\n  }\n  .order-lg-7 {\n    order: 7;\n  }\n  .order-lg-8 {\n    order: 8;\n  }\n  .order-lg-9 {\n    order: 9;\n  }\n  .order-lg-10 {\n    order: 10;\n  }\n  .order-lg-11 {\n    order: 11;\n  }\n  .order-lg-12 {\n    order: 12;\n  }\n  .offset-lg-1 {\n    margin-left: 8.33333%;\n  }\n  .offset-lg-2 {\n    margin-left: 16.66667%;\n  }\n  .offset-lg-3 {\n    margin-left: 25%;\n  }\n  .offset-lg-4 {\n    margin-left: 33.33333%;\n  }\n  .offset-lg-5 {\n    margin-left: 41.66667%;\n  }\n  .offset-lg-6 {\n    margin-left: 50%;\n  }\n  .offset-lg-7 {\n    margin-left: 58.33333%;\n  }\n  .offset-lg-8 {\n    margin-left: 66.66667%;\n  }\n  .offset-lg-9 {\n    margin-left: 75%;\n  }\n  .offset-lg-10 {\n    margin-left: 83.33333%;\n  }\n  .offset-lg-11 {\n    margin-left: 91.66667%;\n  }\n}\n@media (max-width: 992px) {\n  .col-md {\n    flex-basis: 0;\n    -webkit-box-flex: 1;\n    flex-grow: 1;\n    max-width: 100%;\n  }\n  .col-md-auto {\n    flex: 0 0 auto;\n    width: auto;\n    max-width: none;\n  }\n  .col-md-1 {\n    flex: 0 0 8.333333%;\n    max-width: 8.333333%;\n  }\n  .col-md-2 {\n    flex: 0 0 16.666667%;\n    max-width: 16.666667%;\n  }\n  .col-md-3 {\n    flex: 0 0 25%;\n    max-width: 25%;\n  }\n  .col-md-4 {\n    flex: 0 0 33.333333%;\n    max-width: 33.333333%;\n  }\n  .col-md-5 {\n    flex: 0 0 41.666667%;\n    max-width: 41.666667%;\n  }\n  .col-md-6 {\n    flex: 0 0 50%;\n    max-width: 50%;\n  }\n  .col-md-7 {\n    flex: 0 0 58.333333%;\n    max-width: 58.333333%;\n  }\n  .col-md-8 {\n    flex: 0 0 66.666667%;\n    max-width: 66.666667%;\n  }\n  .col-md-9 {\n    flex: 0 0 75%;\n    max-width: 75%;\n  }\n  .col-md-10 {\n    flex: 0 0 83.333333%;\n    max-width: 83.333333%;\n  }\n  .col-md-11 {\n    flex: 0 0 91.666667%;\n    max-width: 91.666667%;\n  }\n  .col-md-12 {\n    flex: 0 0 100%;\n    max-width: 100%;\n  }\n  .order-md-first {\n    order: -1;\n  }\n  .order-md-last {\n    order: 13;\n  }\n  .order-md-0 {\n    order: 0;\n  }\n  .order-md-1 {\n    order: 1;\n  }\n  .order-md-2 {\n    order: 2;\n  }\n  .order-md-3 {\n    order: 3;\n  }\n  .order-md-4 {\n    order: 4;\n  }\n  .order-md-5 {\n    order: 5;\n  }\n  .order-md-6 {\n    order: 6;\n  }\n  .order-md-7 {\n    order: 7;\n  }\n  .order-md-8 {\n    order: 8;\n  }\n  .order-md-9 {\n    order: 9;\n  }\n  .order-md-10 {\n    order: 10;\n  }\n  .order-md-11 {\n    order: 11;\n  }\n  .order-md-12 {\n    order: 12;\n  }\n  .offset-md-1 {\n    margin-left: 8.33333%;\n  }\n  .offset-md-2 {\n    margin-left: 16.66667%;\n  }\n  .offset-md-3 {\n    margin-left: 25%;\n  }\n  .offset-md-4 {\n    margin-left: 33.33333%;\n  }\n  .offset-md-5 {\n    margin-left: 41.66667%;\n  }\n  .offset-md-6 {\n    margin-left: 50%;\n  }\n  .offset-md-7 {\n    margin-left: 58.33333%;\n  }\n  .offset-md-8 {\n    margin-left: 66.66667%;\n  }\n  .offset-md-9 {\n    margin-left: 75%;\n  }\n  .offset-md-10 {\n    margin-left: 83.33333%;\n  }\n  .offset-md-11 {\n    margin-left: 91.66667%;\n  }\n  .m-md-0 {\n    margin: 0 !important;\n  }\n  .mt-md-0,\n  .my-md-0 {\n    margin-top: 0 !important;\n  }\n  .mr-md-0,\n  .mx-md-0 {\n    margin-right: 0 !important;\n  }\n  .mb-md-0,\n  .my-md-0 {\n    margin-bottom: 0 !important;\n  }\n  .ml-md-0,\n  .mx-md-0 {\n    margin-left: 0 !important;\n  }\n  .m-md-1 {\n    margin: 0.25rem !important;\n  }\n  .mt-md-1,\n  .my-md-1 {\n    margin-top: 0.25rem !important;\n  }\n  .mr-md-1,\n  .mx-md-1 {\n    margin-right: 0.25rem !important;\n  }\n  .mb-md-1,\n  .my-md-1 {\n    margin-bottom: 0.25rem !important;\n  }\n  .ml-md-1,\n  .mx-md-1 {\n    margin-left: 0.25rem !important;\n  }\n  .m-md-2 {\n    margin: 0.5rem !important;\n  }\n  .mt-md-2,\n  .my-md-2 {\n    margin-top: 0.5rem !important;\n  }\n  .mr-md-2,\n  .mx-md-2 {\n    margin-right: 0.5rem !important;\n  }\n  .mb-md-2,\n  .my-md-2 {\n    margin-bottom: 0.5rem !important;\n  }\n  .ml-md-2,\n  .mx-md-2 {\n    margin-left: 0.5rem !important;\n  }\n  .m-md-3 {\n    margin: 1rem !important;\n  }\n  .mt-md-3,\n  .my-md-3 {\n    margin-top: 1rem !important;\n  }\n  .mr-md-3,\n  .mx-md-3 {\n    margin-right: 1rem !important;\n  }\n  .mb-md-3,\n  .my-md-3 {\n    margin-bottom: 1rem !important;\n  }\n  .ml-md-3,\n  .mx-md-3 {\n    margin-left: 1rem !important;\n  }\n  .m-md-4 {\n    margin: 1.5rem !important;\n  }\n  .mt-md-4,\n  .my-md-4 {\n    margin-top: 1.5rem !important;\n  }\n  .mr-md-4,\n  .mx-md-4 {\n    margin-right: 1.5rem !important;\n  }\n  .mb-md-4,\n  .my-md-4 {\n    margin-bottom: 1.5rem !important;\n  }\n  .ml-md-4,\n  .mx-md-4 {\n    margin-left: 1.5rem !important;\n  }\n  .m-md-5 {\n    margin: 3rem !important;\n  }\n  .mt-md-5,\n  .my-md-5 {\n    margin-top: 3rem !important;\n  }\n  .mr-md-5,\n  .mx-md-5 {\n    margin-right: 3rem !important;\n  }\n  .mb-md-5,\n  .my-md-5 {\n    margin-bottom: 3rem !important;\n  }\n  .ml-md-5,\n  .mx-md-5 {\n    margin-left: 3rem !important;\n  }\n}\n@media (max-width: 768px) {\n  .col-sm {\n    flex-basis: 0;\n    flex-grow: 1;\n    max-width: 100%;\n  }\n  .col-sm-auto {\n    flex: 0 0 auto;\n    width: auto;\n    max-width: none;\n  }\n  .col-sm-1 {\n    flex: 0 0 8.333333%;\n    max-width: 8.333333%;\n  }\n  .col-sm-2 {\n    flex: 0 0 16.666667%;\n    max-width: 16.666667%;\n  }\n  .col-sm-3 {\n    flex: 0 0 25%;\n    max-width: 25%;\n  }\n  .col-sm-4 {\n    flex: 0 0 33.333333%;\n    max-width: 33.333333%;\n  }\n  .col-sm-5 {\n    flex: 0 0 41.666667%;\n    max-width: 41.666667%;\n  }\n  .col-sm-6 {\n    flex: 0 0 50%;\n    max-width: 50%;\n  }\n  .col-sm-7 {\n    flex: 0 0 58.333333%;\n    max-width: 58.333333%;\n  }\n  .col-sm-8 {\n    flex: 0 0 66.666667%;\n    max-width: 66.666667%;\n  }\n  .col-sm-9 {\n    flex: 0 0 75%;\n    max-width: 75%;\n  }\n  .col-sm-10 {\n    flex: 0 0 83.333333%;\n    max-width: 83.333333%;\n  }\n  .col-sm-11 {\n    flex: 0 0 91.666667%;\n    max-width: 91.666667%;\n  }\n  .col-sm-12 {\n    flex: 0 0 100%;\n    max-width: 100%;\n  }\n  .order-sm-first {\n    order: -1;\n  }\n  .order-sm-last {\n    order: 13;\n  }\n  .order-sm-0 {\n    order: 0;\n  }\n  .order-sm-1 {\n    order: 1;\n  }\n  .order-sm-2 {\n    order: 2;\n  }\n  .order-sm-3 {\n    order: 3;\n  }\n  .order-sm-4 {\n    order: 4;\n  }\n  .order-sm-5 {\n    order: 5;\n  }\n  .order-sm-6 {\n    order: 6;\n  }\n  .order-sm-7 {\n    order: 7;\n  }\n  .order-sm-8 {\n    order: 8;\n  }\n  .order-sm-9 {\n    order: 9;\n  }\n  .order-sm-10 {\n    order: 10;\n  }\n  .order-sm-11 {\n    order: 11;\n  }\n  .order-sm-12 {\n    order: 12;\n  }\n  .offset-sm-0 {\n    margin-left: 0;\n  }\n  .offset-sm-1 {\n    margin-left: 8.33333%;\n  }\n  .offset-sm-2 {\n    margin-left: 16.66667%;\n  }\n  .offset-sm-3 {\n    margin-left: 25%;\n  }\n  .offset-sm-4 {\n    margin-left: 33.33333%;\n  }\n  .offset-sm-5 {\n    margin-left: 41.66667%;\n  }\n  .offset-sm-6 {\n    margin-left: 50%;\n  }\n  .offset-sm-7 {\n    margin-left: 58.33333%;\n  }\n  .offset-sm-8 {\n    margin-left: 66.66667%;\n  }\n  .offset-sm-9 {\n    margin-left: 75%;\n  }\n  .offset-sm-10 {\n    margin-left: 83.33333%;\n  }\n  .offset-sm-11 {\n    margin-left: 91.66667%;\n  }\n  .m-sm-0 {\n    margin: 0 !important;\n  }\n  .mt-sm-0,\n  .my-sm-0 {\n    margin-top: 0 !important;\n  }\n  .mr-sm-0,\n  .mx-sm-0 {\n    margin-right: 0 !important;\n  }\n  .mb-sm-0,\n  .my-sm-0 {\n    margin-bottom: 0 !important;\n  }\n  .ml-sm-0,\n  .mx-sm-0 {\n    margin-left: 0 !important;\n  }\n  .m-sm-1 {\n    margin: 0.25rem !important;\n  }\n  .mt-1,\n  .my-1 {\n    margin-top: 0.25rem !important;\n  }\n  .mr-sm-1,\n  .mx-sm-1 {\n    margin-right: 0.25rem !important;\n  }\n  .mb-sm-1,\n  .my-sm-1 {\n    margin-bottom: 0.25rem !important;\n  }\n  .ml-sm-1,\n  .mx-sm-1 {\n    margin-left: 0.25rem !important;\n  }\n  .m-sm-2 {\n    margin: 0.5rem !important;\n  }\n  .mt-sm-2,\n  .my-sm-2 {\n    margin-top: 0.5rem !important;\n  }\n  .mr-2,\n  .mx-2 {\n    margin-right: 0.5rem !important;\n  }\n  .mb-sm-2,\n  .my-sm-2 {\n    margin-bottom: 0.5rem !important;\n  }\n  .ml-sm-2,\n  .mx-sm-2 {\n    margin-left: 0.5rem !important;\n  }\n  .m-sm-3 {\n    margin: 1rem !important;\n  }\n  .mt-sm-3,\n  .my-sm-3 {\n    margin-top: 1rem !important;\n  }\n  .mr-sm-3,\n  .mx-sm-3 {\n    margin-right: 1rem !important;\n  }\n  .mb-sm-3,\n  .my-sm-3 {\n    margin-bottom: 1rem !important;\n  }\n  .ml-sm-3,\n  .mx-sm-3 {\n    margin-left: 1rem !important;\n  }\n  .m-sm-4 {\n    margin: 1.5rem !important;\n  }\n  .mt-sm-4,\n  .my-sm-4 {\n    margin-top: 1.5rem !important;\n  }\n  .mr-sm-4,\n  .mx-sm-4 {\n    margin-right: 1.5rem !important;\n  }\n  .mb-sm-4,\n  .my-sm-4 {\n    margin-bottom: 1.5rem !important;\n  }\n  .ml-sm-4,\n  .mx-sm-4 {\n    margin-left: 1.5rem !important;\n  }\n  .m-sm-5 {\n    margin: 3rem !important;\n  }\n  .mt-sm-5,\n  .my-sm-5 {\n    margin-top: 3rem !important;\n  }\n  .mr-sm-5,\n  .mx-sm-5 {\n    margin-right: 3rem !important;\n  }\n  .mb-sm-5,\n  .my-sm-5 {\n    margin-bottom: 3rem !important;\n  }\n  .ml-sm-5,\n  .mx-sm-5 {\n    margin-left: 3rem !important;\n  }\n}\n@media (max-width: 576px) {\n  .col-xs {\n    flex-basis: 0;\n    flex-grow: 1;\n    max-width: 100%;\n  }\n  .col-xs-auto {\n    flex: 0 0 auto;\n    width: auto;\n    max-width: none;\n  }\n  .col-xs-1 {\n    flex: 0 0 8.333333%;\n    max-width: 8.333333%;\n  }\n  .col-xs-2 {\n    flex: 0 0 16.666667%;\n    max-width: 16.666667%;\n  }\n  .col-xs-3 {\n    flex: 0 0 25%;\n    max-width: 25%;\n  }\n  .col-xs-4 {\n    flex: 0 0 33.333333%;\n    max-width: 33.333333%;\n  }\n  .col-xs-5 {\n    flex: 0 0 41.666667%;\n    max-width: 41.666667%;\n  }\n  .col-xs-6 {\n    flex: 0 0 50%;\n    max-width: 50%;\n  }\n  .col-xs-7 {\n    flex: 0 0 58.333333%;\n    max-width: 58.333333%;\n  }\n  .col-xs-8 {\n    flex: 0 0 66.666667%;\n    max-width: 66.666667%;\n  }\n  .col-xs-9 {\n    flex: 0 0 75%;\n    max-width: 75%;\n  }\n  .col-xs-10 {\n    flex: 0 0 83.333333%;\n    max-width: 83.333333%;\n  }\n  .col-xs-11 {\n    flex: 0 0 91.666667%;\n    max-width: 91.666667%;\n  }\n  .col-xs-12 {\n    flex: 0 0 100%;\n    max-width: 100%;\n  }\n  .pr-xs-0 {\n    padding-right: 0 !important;\n  }\n  .pr-xs-1 {\n    padding-right: 0.25rem !important;\n  }\n  .order-xs-first {\n    order: -1;\n  }\n  .order-xs-last {\n    order: 13;\n  }\n  .order-xs-0 {\n    order: 0;\n  }\n  .order-xs-1 {\n    order: 1;\n  }\n  .order-xs-2 {\n    order: 2;\n  }\n  .order-xs-3 {\n    order: 3;\n  }\n  .order-xs-4 {\n    order: 4;\n  }\n  .order-xs-5 {\n    order: 5;\n  }\n  .order-xs-6 {\n    order: 6;\n  }\n  .order-xs-7 {\n    order: 7;\n  }\n  .order-xs-8 {\n    order: 8;\n  }\n  .order-xs-9 {\n    order: 9;\n  }\n  .order-xs-10 {\n    order: 10;\n  }\n  .order-xs-11 {\n    order: 11;\n  }\n  .order-xs-12 {\n    order: 12;\n  }\n  .offset-xs-0 {\n    margin-left: 0;\n  }\n  .offset-xs-1 {\n    margin-left: 8.33333%;\n  }\n  .offset-xs-2 {\n    margin-left: 16.66667%;\n  }\n  .offset-xs-3 {\n    margin-left: 25%;\n  }\n  .offset-xs-4 {\n    margin-left: 33.33333%;\n  }\n  .offset-xs-5 {\n    margin-left: 41.66667%;\n  }\n  .offset-xs-6 {\n    margin-left: 50%;\n  }\n  .offset-xs-7 {\n    margin-left: 58.33333%;\n  }\n  .offset-xs-8 {\n    margin-left: 66.66667%;\n  }\n  .offset-xs-9 {\n    margin-left: 75%;\n  }\n  .offset-xs-10 {\n    margin-left: 83.33333%;\n  }\n  .offset-xs-11 {\n    margin-left: 91.66667%;\n  }\n  .mb-xs-3,\n  .my-xs-3 {\n    margin-bottom: 1rem !important;\n  }\n  .mb-xs-2,\n  .my-xs-2 {\n    margin-bottom: 0.5rem !important;\n  }\n  .mb-xs-1,\n  .my-xs-1 {\n    margin-bottom: 0.25rem !important;\n  }\n  .mt-xs-0 {\n    margin-top: 0 !important;\n  }\n}\nhtml {\n  font-size: 62.5%;\n}\n\nbody {\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n  min-height: 100vh;\n  font-family: \"Open Sans\", sans-serif;\n  color: #212121;\n  font-weight: 400;\n  font-size: 1.6rem;\n  line-height: 1.2;\n  background-color: #efefef;\n}\n\nmain {\n  padding: 40px 0;\n}\n\nfooter {\n  margin-top: auto;\n}\n\n.hidden-title {\n  visibility: hidden;\n  height: 0;\n}\n\n.burger {\n  display: none;\n  width: 3rem;\n  height: 2rem;\n  padding: 0;\n  font-size: 0;\n  color: transparent;\n  position: absolute;\n  top: 50%;\n  left: 1.5rem;\n  transform: translateY(-50%);\n  background: none;\n  border: none;\n}\n.burger::before, .burger::after, .burger span {\n  display: block;\n  width: 100%;\n  height: 2px;\n  background-color: #212121;\n  position: absolute;\n  left: 0;\n}\n.burger::before, .burger::after {\n  content: \"\";\n  transition: transform 0.2s linear;\n}\n.burger::before {\n  top: 0;\n}\n.burger::after {\n  bottom: 0;\n}\n.burger span {\n  top: 50%;\n  transform: translateY(-50%);\n  transition: opacity 0.2s linear;\n}\n.show-sidebar .burger span {\n  opacity: 0;\n}\n.show-sidebar .burger::before, .show-sidebar .burger::after {\n  top: 50%;\n}\n.show-sidebar .burger::before {\n  transform: rotate(45deg);\n}\n.show-sidebar .burger::after {\n  transform: rotate(-45deg);\n}\n@media screen and (max-width: 992px) {\n  .burger {\n    display: block;\n  }\n}\n\n.logo {\n  max-width: 130px;\n}\n.logo img {\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n}\n\n.header {\n  padding: 20px 0;\n  font-size: 20px;\n  background-color: #fff;\n  box-shadow: -10px 10px 10px rgba(0, 0, 0, 0.3);\n  border-radius: 0 0 16px 16px;\n}\n.header__inner {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\n.header__info {\n  width: calc(80% - 130px);\n  padding: 0 5px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 22px;\n  font-family: \"Montserrat\", sans-serif;\n  overflow: hidden;\n}\n.header__info > a {\n  max-width: 50%;\n}\n.header__phone {\n  padding-right: 20px;\n  transition: color 0.2s linear;\n}\n.header__phone:hover {\n  color: #43a047;\n}\n.header__phone:hover svg {\n  fill: #43a047;\n}\n.footer .header__phone:hover {\n  color: #ccc;\n}\n.footer .header__phone:hover svg {\n  fill: #ccc;\n}\n.header__location {\n  padding-left: 20px;\n  border-left: 1px dashed #333;\n  transition: color 0.2s linear;\n}\n.header__location span:first-child {\n  display: block;\n  font-weight: 500;\n  font-family: \"Montserrat\", sans-serif;\n}\n.header__location:hover {\n  color: #43a047;\n}\n.header__location:hover svg {\n  fill: #43a047;\n}\n.header__routine {\n  width: 20%;\n  overflow: hidden;\n}\n.header__routine-icon {\n  height: 40px;\n  fill: #F9A825;\n  margin-right: 8px;\n  flex-shrink: 0;\n}\n.categories {\n  max-width: 80%;\n  margin: 0 auto;\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: center;\n}\n.categories__item {\n  padding: 10px;\n  width: 40%;\n}\n\n.cat-card {\n  display: flex;\n  flex-direction: column;\n  width: 320px;\n  height: 320px;\n  padding-top: 18px;\n  color: #fff;\n  background-color: #43a047;\n  border-radius: 16px;\n  box-shadow: -6px 6px 6px rgba(0, 0, 0, 0.2);\n  overflow: hidden;\n  cursor: pointer;\n  transition: scale 0.2s cubic-bezier(0.32, 0.08, 0.24, 1), box-shadow 0.2s cubic-bezier(0.32, 0.08, 0.24, 1), scale 0.2s cubic-bezier(0.32, 0.08, 0.24, 1), color 0.2s cubic-bezier(0.32, 0.08, 0.24, 1);\n}\n.cat-card:hover {\n  scale: 1.05;\n  box-shadow: -10px 10px 10px rgba(0, 0, 0, 0.18);\n}\n.cat-card svg {\n  height: 100%;\n  width: 37%;\n  margin: 0 auto;\n  fill: rgba(0, 0, 0, 0.7);\n}\n.cat-card__bottom {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  text-align: center;\n  font-family: \"Montserrat\", sans-serif;\n  text-transform: uppercase;\n  padding: 8px;\n  background-color: rgba(0, 0, 0, 0.2);\n  border-radius: 0 0 16px 16px;\n  min-height: 98.4px;\n}\n.cat-card h2, .cat-card h3, .cat-card h4, .cat-card h5 {\n  font-size: 26px;\n  text-align: center;\n  padding: 10px;\n}\n\n.footer {\n  padding: 34px 0;\n  font-size: 20px;\n  font-family: \"Montserrat\", sans-serif;\n  font-weight: 600;\n  background-color: #43a047;\n  border-radius: 16px 16px 0 0;\n}\n.footer .container {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}","/* http://meyerweb.com/eric/tools/css/reset/\r\n   v2.0 | 20110126\r\n   License: none (public domain)\r\n*/\r\n\r\nhtml, body, div, span, applet, object, iframe,\r\nh1, h2, h3, h4, h5, h6, p, blockquote, pre,\r\na, abbr, acronym, address, big, cite, code,\r\ndel, dfn, em, img, ins, kbd, q, s, samp,\r\nsmall, strike, strong, sub, sup, tt, var,\r\nb, u, i, center,\r\ndl, dt, dd, ol, ul, li,\r\nfieldset, form, label, legend,\r\ntable, caption, tbody, tfoot, thead, tr, th, td,\r\narticle, aside, canvas, details, embed,\r\nfigure, figcaption, footer, header, hgroup,\r\nmenu, nav, output, ruby, section, summary,\r\ntime, mark, audio, video {\r\n  margin: 0;\r\n  padding: 0;\r\n  border: 0;\r\n  outline: none;\r\n  font-size: 100%;\r\n  font: inherit;\r\n  vertical-align: baseline;\r\n}\r\n/* HTML5 display-role reset for older browsers */\r\narticle, aside, details, figcaption, figure,\r\nfooter, header, hgroup, menu, nav, section {\r\n  display: block;\r\n}\r\n*, *::before, *::after {\r\n  box-sizing: border-box;\r\n}\r\na {\r\n  color: inherit;\r\n  text-decoration: none;\r\n  cursor: pointer;\r\n  display: inline-block;\r\n}\r\nimg {\r\n  max-width: 100%;\r\n  height: auto;\r\n}\r\nol, ul {\r\n  list-style: none;\r\n}\r\nblockquote, q {\r\n  quotes: none;\r\n}\r\nblockquote:before, blockquote:after,\r\nq:before, q:after {\r\n  content: '';\r\n}\r\ninput, textarea, button {\r\n  outline: none;\r\n  border: none;\r\n}\r\ntextarea {\r\n  resize: vertical;\r\n}\r\nbutton {\r\n  cursor: pointer;\r\n}\r\ntable {\r\n  border-collapse: collapse;\r\n  border-spacing: 0;\r\n}",".container {\r\n  padding: 0 15px;\r\n  max-width: 1230px;\r\n  margin: 0 auto;\r\n\r\n  &--header {\r\n    max-width: 1430px;\r\n  }\r\n\r\n  @include laptop {\r\n    max-width: 960px;\r\n  }\r\n  @include tablet {\r\n    max-width: 720px;\r\n  }\r\n  @include mobile-large {\r\n    max-width: 540px;\r\n  }\r\n  @include mobile {\r\n    max-width: 100%;\r\n    padding: 0 10px;\r\n  }\r\n}\r\n\r\n.container-fluid {\r\n  width: 100%;\r\n  padding: 0 15px;\r\n  @include mobile {\r\n    padding: 0 10px;\r\n  }\r\n}\r\n\r\n.row {\r\n  display: flex;\r\n  flex-wrap: wrap;\r\n  margin-right: -15px;\r\n  margin-left: -15px;\r\n  @include mobile {\r\n    margin-right: -10px;\r\n    margin-left: -10px;\r\n  }\r\n}\r\n\r\n.no-gutters {\r\n  margin-right: 0;\r\n  margin-left: 0; }\r\n.no-gutters > .col,\r\n.no-gutters > [class*=\"col-\"] {\r\n  padding-right: 0;\r\n  padding-left: 0; }\r\n\r\n.col-1, .col-2, .col-3, .col-4, .col-5, .col-6, .col-7, .col-8, .col-9, .col-10, .col-11, .col-12, .col,\r\n.col-auto, .col-sm-1, .col-sm-2, .col-sm-3, .col-sm-4, .col-sm-5, .col-sm-6, .col-sm-7, .col-sm-8, .col-sm-9, .col-sm-10, .col-sm-11, .col-sm-12, .col-sm,\r\n.col-sm-auto, .col-md-1, .col-md-2, .col-md-3, .col-md-4, .col-md-5, .col-md-6, .col-md-7, .col-md-8, .col-md-9, .col-md-10, .col-md-11, .col-md-12, .col-md,\r\n.col-md-auto, .col-lg-1, .col-lg-2, .col-lg-3, .col-lg-4, .col-lg-5, .col-lg-6, .col-lg-7, .col-lg-8, .col-lg-9, .col-lg-10, .col-lg-11, .col-lg-12, .col-lg,\r\n.col-lg-auto, .col-xs-1, .col-xs-2, .col-xs-3, .col-xs-4, .col-xs-5, .col-xs-6, .col-xs-7, .col-xs-8, .col-xs-9, .col-xs-10, .col-xs-11, .col-xs-12, .col-xs,\r\n.col-xs-auto {\r\n  width: 100%;\r\n  max-width: 100%;\r\n  min-height: 1px;\r\n  flex-shrink: 0;\r\n  padding-right: 15px;\r\n  padding-left: 15px;\r\n}\r\n\r\n.col {\r\n  flex-basis: 0;\r\n  flex-grow: 1;\r\n  max-width: 100%;\r\n}\r\n\r\n.col-auto {\r\n  flex: 0 0 auto;\r\n  width: auto;\r\n  max-width: none;\r\n}\r\n\r\n.col-1 {\r\n  flex: 0 0 8.333333%;\r\n  max-width: 8.333333%;\r\n}\r\n\r\n.col-2 {\r\n  flex: 0 0 16.666667%;\r\n  max-width: 16.666667%;\r\n}\r\n\r\n.col-3 {\r\n  flex: 0 0 25%;\r\n  max-width: 25%;\r\n}\r\n\r\n.col-4 {\r\n  flex: 0 0 33.333333%;\r\n  max-width: 33.333333%;\r\n}\r\n\r\n.col-5 {\r\n  flex: 0 0 41.666667%;\r\n  max-width: 41.666667%;\r\n}\r\n\r\n.col-6 {\r\n  flex: 0 0 50%;\r\n  max-width: 50%;\r\n}\r\n\r\n.col-7 {\r\n  flex: 0 0 58.333333%;\r\n  max-width: 58.333333%;\r\n}\r\n\r\n.col-8 {\r\n  flex: 0 0 66.666667%;\r\n  max-width: 66.666667%;\r\n}\r\n\r\n.col-9 {\r\n  flex: 0 0 75%;\r\n  max-width: 75%;\r\n}\r\n\r\n.col-10 {\r\n  flex: 0 0 83.333333%;\r\n  max-width: 83.333333%;\r\n}\r\n\r\n.col-11 {\r\n  flex: 0 0 91.666667%;\r\n  max-width: 91.666667%;\r\n}\r\n\r\n.col-12 {\r\n  flex: 0 0 100%;\r\n  max-width: 100%;\r\n}\r\n\r\n.order-first {\r\n  order: -1;\r\n}\r\n\r\n.order-last {\r\n  order: 13;\r\n}\r\n\r\n.order-0 {\r\n  order: 0;\r\n}\r\n\r\n.order-1 {\r\n  order: 1;\r\n}\r\n\r\n.order-2 {\r\n  order: 2;\r\n}\r\n\r\n.order-3 {\r\n  order: 3;\r\n}\r\n\r\n.order-4 {\r\n  order: 4;\r\n}\r\n\r\n.order-5 {\r\n  order: 5;\r\n}\r\n\r\n.order-6 {\r\n  order: 6;\r\n}\r\n\r\n.order-7 {\r\n  order: 7;\r\n}\r\n\r\n.order-8 {\r\n  order: 8;\r\n}\r\n\r\n.order-9 {\r\n  order: 9;\r\n}\r\n\r\n.order-10 {\r\n  order: 10;\r\n}\r\n\r\n.order-11 {\r\n  order: 11;\r\n}\r\n\r\n.order-12 {\r\n  order: 12;\r\n}\r\n.offset-1 {\r\n  margin-left: 8.33333%;\r\n}\r\n\r\n.offset-2 {\r\n  margin-left: 16.66667%;\r\n}\r\n\r\n.offset-3 {\r\n  margin-left: 25%;\r\n}\r\n\r\n.offset-4 {\r\n  margin-left: 33.33333%;\r\n}\r\n\r\n.offset-5 {\r\n  margin-left: 41.66667%;\r\n}\r\n\r\n.offset-6 {\r\n  margin-left: 50%;\r\n}\r\n\r\n.offset-7 {\r\n  margin-left: 58.33333%;\r\n}\r\n\r\n.offset-8 {\r\n  margin-left: 66.66667%;\r\n}\r\n\r\n.offset-9 {\r\n  margin-left: 75%;\r\n}\r\n\r\n.offset-10 {\r\n  margin-left: 83.33333%;\r\n}\r\n\r\n.offset-11 {\r\n  margin-left: 91.66667%;\r\n}\r\n.m-0 {\r\n  margin: 0 !important;\r\n}\r\n\r\n.mt-0,\r\n.my-0 {\r\n  margin-top: 0 !important;\r\n}\r\n\r\n.mr-0,\r\n.mx-0 {\r\n  margin-right: 0 !important;\r\n}\r\n\r\n.mb-0,\r\n.my-0 {\r\n  margin-bottom: 0 !important;\r\n}\r\n\r\n.ml-0,\r\n.mx-0 {\r\n  margin-left: 0 !important;\r\n}\r\n\r\n.m-1 {\r\n  margin: 0.25rem !important;\r\n}\r\n\r\n.mt-1,\r\n.my-1 {\r\n  margin-top: 0.25rem !important;\r\n}\r\n\r\n.mr-1,\r\n.mx-1 {\r\n  margin-right: 0.25rem !important;\r\n}\r\n\r\n.mb-1,\r\n.my-1 {\r\n  margin-bottom: 0.25rem !important;\r\n}\r\n\r\n.ml-1,\r\n.mx-1 {\r\n  margin-left: 0.25rem !important;\r\n}\r\n\r\n.m-2 {\r\n  margin: 0.5rem !important;\r\n}\r\n\r\n.mt-2,\r\n.my-2 {\r\n  margin-top: 0.5rem !important;\r\n}\r\n\r\n.mr-2,\r\n.mx-2 {\r\n  margin-right: 0.5rem !important;\r\n}\r\n\r\n.mb-2,\r\n.my-2 {\r\n  margin-bottom: 0.5rem !important;\r\n}\r\n\r\n.ml-2,\r\n.mx-2 {\r\n  margin-left: 0.5rem !important;\r\n}\r\n\r\n.m-3 {\r\n  margin: 1rem !important;\r\n}\r\n\r\n.mt-3,\r\n.my-3 {\r\n  margin-top: 1rem !important;\r\n}\r\n\r\n.mr-3,\r\n.mx-3 {\r\n  margin-right: 1rem !important;\r\n}\r\n\r\n.mb-3,\r\n.my-3 {\r\n  margin-bottom: 1rem !important;\r\n}\r\n\r\n.ml-3,\r\n.mx-3 {\r\n  margin-left: 1rem !important;\r\n}\r\n\r\n.m-4 {\r\n  margin: 1.5rem !important;\r\n}\r\n\r\n.mt-4,\r\n.my-4 {\r\n  margin-top: 1.5rem !important;\r\n}\r\n\r\n.mr-4,\r\n.mx-4 {\r\n  margin-right: 1.5rem !important;\r\n}\r\n\r\n.mb-4,\r\n.my-4 {\r\n  margin-bottom: 1.5rem !important;\r\n}\r\n\r\n.ml-4,\r\n.mx-4 {\r\n  margin-left: 1.5rem !important;\r\n}\r\n\r\n.m-5 {\r\n  margin: 3rem !important;\r\n}\r\n\r\n.mt-5,\r\n.my-5 {\r\n  margin-top: 3rem !important;\r\n}\r\n\r\n.mr-5,\r\n.mx-5 {\r\n  margin-right: 3rem !important;\r\n}\r\n\r\n.mb-5,\r\n.my-5 {\r\n  margin-bottom: 3rem !important;\r\n}\r\n\r\n.ml-5,\r\n.mx-5 {\r\n  margin-left: 3rem !important;\r\n}\r\n\r\n.mt-auto {\r\n  margin-top: auto;\r\n}\r\n\r\n.mb-auto {\r\n  margin-bottom: auto;\r\n}\r\n\r\n.ml-auto {\r\n  margin-left: auto;\r\n}\r\n\r\n.mr-auto {\r\n  margin-right: auto;\r\n}\r\n\r\n.mx-auto {\r\n  margin-left: auto;\r\n  margin-right: auto;\r\n}\r\n\r\n.my-auto {\r\n  margin-top: auto;\r\n  margin-bottom: auto;\r\n}\r\n\r\n@include mobile-large {\r\n  .mx-sm-auto {\r\n    margin-left: auto;\r\n    margin-right: auto;\r\n  }\r\n\r\n}\r\n\r\n//padding start\r\n.p-0 {\r\n  padding: 0 !important;\r\n}\r\n\r\n.pt-0,\r\n.py-0 {\r\n  padding-top: 0 !important;\r\n}\r\n\r\n.pr-0,\r\n.px-0 {\r\n  padding-right: 0 !important;\r\n}\r\n\r\n.pb-0,\r\n.py-0 {\r\n  padding-bottom: 0 !important;\r\n}\r\n\r\n.pl-0,\r\n.px-0 {\r\n  padding-left: 0 !important;\r\n}\r\n\r\n.p-1 {\r\n  padding: 0.25rem !important;\r\n}\r\n\r\n.pt-1,\r\n.py-1 {\r\n  padding-top: 0.25rem !important;\r\n}\r\n\r\n.pr-1,\r\n.px-1 {\r\n  padding-right: 0.25rem !important;\r\n}\r\n\r\n.pb-1,\r\n.py-1 {\r\n  padding-bottom: 0.25rem !important;\r\n}\r\n\r\n.pl-1,\r\n.px-1 {\r\n  padding-left: 0.25rem !important;\r\n}\r\n\r\n.p-2 {\r\n  padding: 0.5rem !important;\r\n}\r\n\r\n.pt-2,\r\n.py-2 {\r\n  padding-top: 0.5rem !important;\r\n}\r\n\r\n.pr-2,\r\n.px-2 {\r\n  padding-right: 0.5rem !important;\r\n}\r\n\r\n.pb-2,\r\n.py-2 {\r\n  padding-bottom: 0.5rem !important;\r\n}\r\n\r\n.pl-2,\r\n.px-2 {\r\n  padding-left: 0.5rem !important;\r\n}\r\n\r\n.p-3 {\r\n  padding: 1rem !important;\r\n}\r\n\r\n.pt-3,\r\n.py-3 {\r\n  padding-top: 1rem !important;\r\n}\r\n\r\n.pr-3,\r\n.px-3 {\r\n  padding-right: 1rem !important;\r\n}\r\n\r\n.pb-3,\r\n.py-3 {\r\n  padding-bottom: 1rem !important;\r\n}\r\n\r\n.pl-3,\r\n.px-3 {\r\n  padding-left: 1rem !important;\r\n}\r\n\r\n.p-4 {\r\n  padding: 1.5rem !important;\r\n}\r\n\r\n.pt-4,\r\n.py-4 {\r\n  padding-top: 1.5rem !important;\r\n}\r\n\r\n.pr-4,\r\n.px-4 {\r\n  padding-right: 1.5rem !important;\r\n}\r\n\r\n.pb-4,\r\n.py-4 {\r\n  padding-bottom: 1.5rem !important;\r\n}\r\n\r\n.pl-4,\r\n.px-4 {\r\n  padding-left: 1.5rem !important;\r\n}\r\n\r\n.p-5 {\r\n  padding: 3rem !important;\r\n}\r\n\r\n.pt-5,\r\n.py-5 {\r\n  padding-top: 3rem !important;\r\n}\r\n\r\n.pr-5,\r\n.px-5 {\r\n  padding-right: 3rem !important;\r\n}\r\n\r\n.pb-5,\r\n.py-5 {\r\n  padding-bottom: 3rem !important;\r\n}\r\n\r\n.pl-5,\r\n.px-5 {\r\n  padding-left: 3rem !important;\r\n}\r\n//padding end\r\n\r\n@media (max-width: $laptop) {\r\n  .col-lg {\r\n    flex-basis: 0;\r\n    flex-grow: 1;\r\n    max-width: 100%;\r\n  }\r\n  .col-lg-auto {\r\n    flex: 0 0 auto;\r\n    width: auto;\r\n    max-width: none;\r\n  }\r\n  .col-lg-1 {\r\n    flex: 0 0 8.333333%;\r\n    max-width: 8.333333%;\r\n  }\r\n  .col-lg-2 {\r\n    flex: 0 0 16.666667%;\r\n    max-width: 16.666667%;\r\n  }\r\n  .col-lg-3 {\r\n    flex: 0 0 25%;\r\n    max-width: 25%;\r\n  }\r\n  .col-lg-4 {\r\n    flex: 0 0 33.333333%;\r\n    max-width: 33.333333%;\r\n  }\r\n  .col-lg-5 {\r\n    flex: 0 0 41.666667%;\r\n    max-width: 41.666667%;\r\n  }\r\n  .col-lg-6 {\r\n    flex: 0 0 50%;\r\n    max-width: 50%;\r\n  }\r\n  .col-lg-7 {\r\n    flex: 0 0 58.333333%;\r\n    max-width: 58.333333%;\r\n  }\r\n  .col-lg-8 {\r\n    flex: 0 0 66.666667%;\r\n    max-width: 66.666667%;\r\n  }\r\n  .col-lg-9 {\r\n    flex: 0 0 75%;\r\n    max-width: 75%;\r\n  }\r\n  .col-lg-10 {\r\n    flex: 0 0 83.333333%;\r\n    max-width: 83.333333%;\r\n  }\r\n  .col-lg-11 {\r\n    flex: 0 0 91.666667%;\r\n    max-width: 91.666667%;\r\n  }\r\n  .col-lg-12 {\r\n    flex: 0 0 100%;\r\n    max-width: 100%;\r\n  }\r\n  .order-lg-first {\r\n    order: -1;\r\n  }\r\n  .order-lg-last {\r\n    order: 13;\r\n  }\r\n  .order-lg-0 {\r\n    order: 0;\r\n  }\r\n  .order-lg-1 {\r\n    order: 1;\r\n  }\r\n  .order-lg-2 {\r\n    order: 2;\r\n  }\r\n  .order-lg-3 {\r\n    order: 3;\r\n  }\r\n  .order-lg-4 {\r\n    order: 4;\r\n  }\r\n  .order-lg-5 {\r\n    order: 5;\r\n  }\r\n  .order-lg-6 {\r\n    order: 6;\r\n  }\r\n  .order-lg-7 {\r\n    order: 7;\r\n  }\r\n  .order-lg-8 {\r\n    order: 8;\r\n  }\r\n  .order-lg-9 {\r\n    order: 9;\r\n  }\r\n  .order-lg-10 {\r\n    order: 10;\r\n  }\r\n  .order-lg-11 {\r\n    order: 11;\r\n  }\r\n  .order-lg-12 {\r\n    order: 12;\r\n  }\r\n\r\n  .offset-lg-1 {\r\n    margin-left: 8.33333%;\r\n  }\r\n\r\n  .offset-lg-2 {\r\n    margin-left: 16.66667%;\r\n  }\r\n\r\n  .offset-lg-3 {\r\n    margin-left: 25%;\r\n  }\r\n\r\n  .offset-lg-4 {\r\n    margin-left: 33.33333%;\r\n  }\r\n\r\n  .offset-lg-5 {\r\n    margin-left: 41.66667%;\r\n  }\r\n\r\n  .offset-lg-6 {\r\n    margin-left: 50%;\r\n  }\r\n\r\n  .offset-lg-7 {\r\n    margin-left: 58.33333%;\r\n  }\r\n\r\n  .offset-lg-8 {\r\n    margin-left: 66.66667%;\r\n  }\r\n\r\n  .offset-lg-9 {\r\n    margin-left: 75%;\r\n  }\r\n\r\n  .offset-lg-10 {\r\n    margin-left: 83.33333%;\r\n  }\r\n\r\n  .offset-lg-11 {\r\n    margin-left: 91.66667%;\r\n  }\r\n}\r\n\r\n@media (max-width: $tablet) {\r\n  .col-md {\r\n    flex-basis: 0;\r\n    -webkit-box-flex: 1;\r\n    flex-grow: 1;\r\n    max-width: 100%;\r\n  }\r\n  .col-md-auto {\r\n    flex: 0 0 auto;\r\n    width: auto;\r\n    max-width: none;\r\n  }\r\n  .col-md-1 {\r\n    flex: 0 0 8.333333%;\r\n    max-width: 8.333333%;\r\n  }\r\n  .col-md-2 {\r\n    flex: 0 0 16.666667%;\r\n    max-width: 16.666667%;\r\n  }\r\n  .col-md-3 {\r\n    flex: 0 0 25%;\r\n    max-width: 25%;\r\n  }\r\n  .col-md-4 {\r\n    flex: 0 0 33.333333%;\r\n    max-width: 33.333333%;\r\n  }\r\n  .col-md-5 {\r\n    flex: 0 0 41.666667%;\r\n    max-width: 41.666667%;\r\n  }\r\n  .col-md-6 {\r\n    flex: 0 0 50%;\r\n    max-width: 50%;\r\n  }\r\n  .col-md-7 {\r\n    flex: 0 0 58.333333%;\r\n    max-width: 58.333333%;\r\n  }\r\n  .col-md-8 {\r\n    flex: 0 0 66.666667%;\r\n    max-width: 66.666667%;\r\n  }\r\n  .col-md-9 {\r\n    flex: 0 0 75%;\r\n    max-width: 75%;\r\n  }\r\n  .col-md-10 {\r\n    flex: 0 0 83.333333%;\r\n    max-width: 83.333333%;\r\n  }\r\n  .col-md-11 {\r\n    flex: 0 0 91.666667%;\r\n    max-width: 91.666667%;\r\n  }\r\n  .col-md-12 {\r\n    flex: 0 0 100%;\r\n    max-width: 100%;\r\n  }\r\n  .order-md-first {\r\n    order: -1;\r\n  }\r\n  .order-md-last {\r\n    order: 13;\r\n  }\r\n  .order-md-0 {\r\n    order: 0;\r\n  }\r\n  .order-md-1 {\r\n    order: 1;\r\n  }\r\n  .order-md-2 {\r\n    order: 2;\r\n  }\r\n  .order-md-3 {\r\n    order: 3;\r\n  }\r\n  .order-md-4 {\r\n    order: 4;\r\n  }\r\n  .order-md-5 {\r\n    order: 5;\r\n  }\r\n  .order-md-6 {\r\n    order: 6;\r\n  }\r\n  .order-md-7 {\r\n    order: 7;\r\n  }\r\n  .order-md-8 {\r\n    order: 8;\r\n  }\r\n  .order-md-9 {\r\n    order: 9;\r\n  }\r\n  .order-md-10 {\r\n    order: 10;\r\n  }\r\n  .order-md-11 {\r\n    order: 11;\r\n  }\r\n  .order-md-12 {\r\n    order: 12;\r\n  }\r\n\r\n  .offset-md-1 {\r\n    margin-left: 8.33333%;\r\n  }\r\n\r\n  .offset-md-2 {\r\n    margin-left: 16.66667%;\r\n  }\r\n\r\n  .offset-md-3 {\r\n    margin-left: 25%;\r\n  }\r\n\r\n  .offset-md-4 {\r\n    margin-left: 33.33333%;\r\n  }\r\n\r\n  .offset-md-5 {\r\n    margin-left: 41.66667%;\r\n  }\r\n\r\n  .offset-md-6 {\r\n    margin-left: 50%;\r\n  }\r\n\r\n  .offset-md-7 {\r\n    margin-left: 58.33333%;\r\n  }\r\n\r\n  .offset-md-8 {\r\n    margin-left: 66.66667%;\r\n  }\r\n\r\n  .offset-md-9 {\r\n    margin-left: 75%;\r\n  }\r\n\r\n  .offset-md-10 {\r\n    margin-left: 83.33333%;\r\n  }\r\n\r\n  .offset-md-11 {\r\n    margin-left: 91.66667%;\r\n  }\r\n\r\n  .m-md-0 {\r\n    margin: 0 !important;\r\n  }\r\n\r\n  .mt-md-0,\r\n  .my-md-0 {\r\n    margin-top: 0 !important;\r\n  }\r\n\r\n  .mr-md-0,\r\n  .mx-md-0 {\r\n    margin-right: 0 !important;\r\n  }\r\n\r\n  .mb-md-0,\r\n  .my-md-0 {\r\n    margin-bottom: 0 !important;\r\n  }\r\n\r\n  .ml-md-0,\r\n  .mx-md-0 {\r\n    margin-left: 0 !important;\r\n  }\r\n\r\n  .m-md-1 {\r\n    margin: 0.25rem !important;\r\n  }\r\n\r\n  .mt-md-1,\r\n  .my-md-1 {\r\n    margin-top: 0.25rem !important;\r\n  }\r\n\r\n  .mr-md-1,\r\n  .mx-md-1 {\r\n    margin-right: 0.25rem !important;\r\n  }\r\n\r\n  .mb-md-1,\r\n  .my-md-1 {\r\n    margin-bottom: 0.25rem !important;\r\n  }\r\n\r\n  .ml-md-1,\r\n  .mx-md-1 {\r\n    margin-left: 0.25rem !important;\r\n  }\r\n\r\n  .m-md-2 {\r\n    margin: 0.5rem !important;\r\n  }\r\n\r\n  .mt-md-2,\r\n  .my-md-2 {\r\n    margin-top: 0.5rem !important;\r\n  }\r\n\r\n  .mr-md-2,\r\n  .mx-md-2 {\r\n    margin-right: 0.5rem !important;\r\n  }\r\n\r\n  .mb-md-2,\r\n  .my-md-2 {\r\n    margin-bottom: 0.5rem !important;\r\n  }\r\n\r\n  .ml-md-2,\r\n  .mx-md-2 {\r\n    margin-left: 0.5rem !important;\r\n  }\r\n\r\n  .m-md-3 {\r\n    margin: 1rem !important;\r\n  }\r\n\r\n  .mt-md-3,\r\n  .my-md-3 {\r\n    margin-top: 1rem !important;\r\n  }\r\n\r\n  .mr-md-3,\r\n  .mx-md-3 {\r\n    margin-right: 1rem !important;\r\n  }\r\n\r\n  .mb-md-3,\r\n  .my-md-3 {\r\n    margin-bottom: 1rem !important;\r\n  }\r\n\r\n  .ml-md-3,\r\n  .mx-md-3 {\r\n    margin-left: 1rem !important;\r\n  }\r\n\r\n  .m-md-4 {\r\n    margin: 1.5rem !important;\r\n  }\r\n\r\n  .mt-md-4,\r\n  .my-md-4 {\r\n    margin-top: 1.5rem !important;\r\n  }\r\n\r\n  .mr-md-4,\r\n  .mx-md-4 {\r\n    margin-right: 1.5rem !important;\r\n  }\r\n\r\n  .mb-md-4,\r\n  .my-md-4 {\r\n    margin-bottom: 1.5rem !important;\r\n  }\r\n\r\n  .ml-md-4,\r\n  .mx-md-4 {\r\n    margin-left: 1.5rem !important;\r\n  }\r\n\r\n  .m-md-5 {\r\n    margin: 3rem !important;\r\n  }\r\n\r\n  .mt-md-5,\r\n  .my-md-5 {\r\n    margin-top: 3rem !important;\r\n  }\r\n\r\n  .mr-md-5,\r\n  .mx-md-5 {\r\n    margin-right: 3rem !important;\r\n  }\r\n\r\n  .mb-md-5,\r\n  .my-md-5 {\r\n    margin-bottom: 3rem !important;\r\n  }\r\n\r\n  .ml-md-5,\r\n  .mx-md-5 {\r\n    margin-left: 3rem !important;\r\n  }\r\n}\r\n\r\n@media (max-width: $mobile-large) {\r\n  .col-sm {\r\n    flex-basis: 0;\r\n    flex-grow: 1;\r\n    max-width: 100%;\r\n  }\r\n  .col-sm-auto {\r\n    flex: 0 0 auto;\r\n    width: auto;\r\n    max-width: none;\r\n  }\r\n  .col-sm-1 {\r\n    flex: 0 0 8.333333%;\r\n    max-width: 8.333333%;\r\n  }\r\n  .col-sm-2 {\r\n    flex: 0 0 16.666667%;\r\n    max-width: 16.666667%;\r\n  }\r\n  .col-sm-3 {\r\n    flex: 0 0 25%;\r\n    max-width: 25%;\r\n  }\r\n  .col-sm-4 {\r\n    flex: 0 0 33.333333%;\r\n    max-width: 33.333333%;\r\n  }\r\n  .col-sm-5 {\r\n    flex: 0 0 41.666667%;\r\n    max-width: 41.666667%;\r\n  }\r\n  .col-sm-6 {\r\n    flex: 0 0 50%;\r\n    max-width: 50%;\r\n  }\r\n  .col-sm-7 {\r\n    flex: 0 0 58.333333%;\r\n    max-width: 58.333333%;\r\n  }\r\n  .col-sm-8 {\r\n    flex: 0 0 66.666667%;\r\n    max-width: 66.666667%;\r\n  }\r\n  .col-sm-9 {\r\n    flex: 0 0 75%;\r\n    max-width: 75%;\r\n  }\r\n  .col-sm-10 {\r\n    flex: 0 0 83.333333%;\r\n    max-width: 83.333333%;\r\n  }\r\n  .col-sm-11 {\r\n    flex: 0 0 91.666667%;\r\n    max-width: 91.666667%;\r\n  }\r\n  .col-sm-12 {\r\n    flex: 0 0 100%;\r\n    max-width: 100%;\r\n  }\r\n  .order-sm-first {\r\n    order: -1;\r\n  }\r\n  .order-sm-last {\r\n    order: 13;\r\n  }\r\n  .order-sm-0 {\r\n    order: 0;\r\n  }\r\n  .order-sm-1 {\r\n    order: 1;\r\n  }\r\n  .order-sm-2 {\r\n    order: 2;\r\n  }\r\n  .order-sm-3 {\r\n    order: 3;\r\n  }\r\n  .order-sm-4 {\r\n    order: 4;\r\n  }\r\n  .order-sm-5 {\r\n    order: 5;\r\n  }\r\n  .order-sm-6 {\r\n    order: 6;\r\n  }\r\n  .order-sm-7 {\r\n    order: 7;\r\n  }\r\n  .order-sm-8 {\r\n    order: 8;\r\n  }\r\n  .order-sm-9 {\r\n    order: 9;\r\n  }\r\n  .order-sm-10 {\r\n    order: 10;\r\n  }\r\n  .order-sm-11 {\r\n    order: 11;\r\n  }\r\n  .order-sm-12 {\r\n    order: 12;\r\n  }\r\n  .offset-sm-0 {\r\n    margin-left: 0;\r\n  }\r\n  .offset-sm-1 {\r\n    margin-left: 8.33333%;\r\n  }\r\n\r\n  .offset-sm-2 {\r\n    margin-left: 16.66667%;\r\n  }\r\n\r\n  .offset-sm-3 {\r\n    margin-left: 25%;\r\n  }\r\n\r\n  .offset-sm-4 {\r\n    margin-left: 33.33333%;\r\n  }\r\n\r\n  .offset-sm-5 {\r\n    margin-left: 41.66667%;\r\n  }\r\n\r\n  .offset-sm-6 {\r\n    margin-left: 50%;\r\n  }\r\n\r\n  .offset-sm-7 {\r\n    margin-left: 58.33333%;\r\n  }\r\n\r\n  .offset-sm-8 {\r\n    margin-left: 66.66667%;\r\n  }\r\n\r\n  .offset-sm-9 {\r\n    margin-left: 75%;\r\n  }\r\n\r\n  .offset-sm-10 {\r\n    margin-left: 83.33333%;\r\n  }\r\n\r\n  .offset-sm-11 {\r\n    margin-left: 91.66667%;\r\n  }\r\n\r\n   .m-sm-0 {\r\n    margin: 0 !important;\r\n  }\r\n\r\n  .mt-sm-0,\r\n  .my-sm-0 {\r\n    margin-top: 0 !important;\r\n  }\r\n\r\n  .mr-sm-0,\r\n  .mx-sm-0 {\r\n    margin-right: 0 !important;\r\n  }\r\n\r\n  .mb-sm-0,\r\n  .my-sm-0 {\r\n    margin-bottom: 0 !important;\r\n  }\r\n\r\n  .ml-sm-0,\r\n  .mx-sm-0 {\r\n    margin-left: 0 !important;\r\n  }\r\n\r\n  .m-sm-1 {\r\n    margin: 0.25rem !important;\r\n  }\r\n\r\n  .mt-1,\r\n  .my-1 {\r\n    margin-top: 0.25rem !important;\r\n  }\r\n\r\n  .mr-sm-1,\r\n  .mx-sm-1 {\r\n    margin-right: 0.25rem !important;\r\n  }\r\n\r\n  .mb-sm-1,\r\n  .my-sm-1 {\r\n    margin-bottom: 0.25rem !important;\r\n  }\r\n\r\n  .ml-sm-1,\r\n  .mx-sm-1 {\r\n    margin-left: 0.25rem !important;\r\n  }\r\n\r\n  .m-sm-2 {\r\n    margin: 0.5rem !important;\r\n  }\r\n\r\n  .mt-sm-2,\r\n  .my-sm-2 {\r\n    margin-top: 0.5rem !important;\r\n  }\r\n\r\n  .mr-2,\r\n  .mx-2 {\r\n    margin-right: 0.5rem !important;\r\n  }\r\n\r\n  .mb-sm-2,\r\n  .my-sm-2 {\r\n    margin-bottom: 0.5rem !important;\r\n  }\r\n\r\n  .ml-sm-2,\r\n  .mx-sm-2 {\r\n    margin-left: 0.5rem !important;\r\n  }\r\n\r\n  .m-sm-3 {\r\n    margin: 1rem !important;\r\n  }\r\n\r\n  .mt-sm-3,\r\n  .my-sm-3 {\r\n    margin-top: 1rem !important;\r\n  }\r\n\r\n  .mr-sm-3,\r\n  .mx-sm-3 {\r\n    margin-right: 1rem !important;\r\n  }\r\n\r\n  .mb-sm-3,\r\n  .my-sm-3 {\r\n    margin-bottom: 1rem !important;\r\n  }\r\n\r\n  .ml-sm-3,\r\n  .mx-sm-3 {\r\n    margin-left: 1rem !important;\r\n  }\r\n\r\n  .m-sm-4 {\r\n    margin: 1.5rem !important;\r\n  }\r\n\r\n  .mt-sm-4,\r\n  .my-sm-4 {\r\n    margin-top: 1.5rem !important;\r\n  }\r\n\r\n  .mr-sm-4,\r\n  .mx-sm-4 {\r\n    margin-right: 1.5rem !important;\r\n  }\r\n\r\n  .mb-sm-4,\r\n  .my-sm-4 {\r\n    margin-bottom: 1.5rem !important;\r\n  }\r\n\r\n  .ml-sm-4,\r\n  .mx-sm-4 {\r\n    margin-left: 1.5rem !important;\r\n  }\r\n\r\n  .m-sm-5 {\r\n    margin: 3rem !important;\r\n  }\r\n\r\n  .mt-sm-5,\r\n  .my-sm-5 {\r\n    margin-top: 3rem !important;\r\n  }\r\n\r\n  .mr-sm-5,\r\n  .mx-sm-5 {\r\n    margin-right: 3rem !important;\r\n  }\r\n\r\n  .mb-sm-5,\r\n  .my-sm-5 {\r\n    margin-bottom: 3rem !important;\r\n  }\r\n\r\n  .ml-sm-5,\r\n  .mx-sm-5 {\r\n    margin-left: 3rem !important;\r\n  }\r\n\r\n\r\n}\r\n\r\n@media (max-width: $mobile) {\r\n  .col-xs {\r\n    flex-basis: 0;\r\n    flex-grow: 1;\r\n    max-width: 100%;\r\n  }\r\n  .col-xs-auto {\r\n    flex: 0 0 auto;\r\n    width: auto;\r\n    max-width: none;\r\n  }\r\n  .col-xs-1 {\r\n    flex: 0 0 8.333333%;\r\n    max-width: 8.333333%;\r\n  }\r\n  .col-xs-2 {\r\n    flex: 0 0 16.666667%;\r\n    max-width: 16.666667%;\r\n  }\r\n  .col-xs-3 {\r\n    flex: 0 0 25%;\r\n    max-width: 25%;\r\n  }\r\n  .col-xs-4 {\r\n    flex: 0 0 33.333333%;\r\n    max-width: 33.333333%;\r\n  }\r\n  .col-xs-5 {\r\n    flex: 0 0 41.666667%;\r\n    max-width: 41.666667%;\r\n  }\r\n  .col-xs-6 {\r\n    flex: 0 0 50%;\r\n    max-width: 50%;\r\n  }\r\n  .col-xs-7 {\r\n    flex: 0 0 58.333333%;\r\n    max-width: 58.333333%;\r\n  }\r\n  .col-xs-8 {\r\n    flex: 0 0 66.666667%;\r\n    max-width: 66.666667%;\r\n  }\r\n  .col-xs-9 {\r\n    flex: 0 0 75%;\r\n    max-width: 75%;\r\n  }\r\n  .col-xs-10 {\r\n    flex: 0 0 83.333333%;\r\n    max-width: 83.333333%;\r\n  }\r\n  .col-xs-11 {\r\n    flex: 0 0 91.666667%;\r\n    max-width: 91.666667%;\r\n  }\r\n  .col-xs-12 {\r\n    flex: 0 0 100%;\r\n    max-width: 100%;\r\n  }\r\n  .pr-xs-0 {\r\n    padding-right: 0 !important\r\n  }\r\n  .pr-xs-1 {\r\n    padding-right: 0.25rem !important\r\n  }\r\n  .order-xs-first {\r\n    order: -1;\r\n  }\r\n  .order-xs-last {\r\n    order: 13;\r\n  }\r\n  .order-xs-0 {\r\n    order: 0;\r\n  }\r\n  .order-xs-1 {\r\n    order: 1;\r\n  }\r\n  .order-xs-2 {\r\n    order: 2;\r\n  }\r\n  .order-xs-3 {\r\n    order: 3;\r\n  }\r\n  .order-xs-4 {\r\n    order: 4;\r\n  }\r\n  .order-xs-5 {\r\n    order: 5;\r\n  }\r\n  .order-xs-6 {\r\n    order: 6;\r\n  }\r\n  .order-xs-7 {\r\n    order: 7;\r\n  }\r\n  .order-xs-8 {\r\n    order: 8;\r\n  }\r\n  .order-xs-9 {\r\n    order: 9;\r\n  }\r\n  .order-xs-10 {\r\n    order: 10;\r\n  }\r\n  .order-xs-11 {\r\n    order: 11;\r\n  }\r\n  .order-xs-12 {\r\n    order: 12;\r\n  }\r\n  .offset-xs-0 {\r\n    margin-left: 0;\r\n  }\r\n  .offset-xs-1 {\r\n    margin-left: 8.33333%;\r\n  }\r\n\r\n  .offset-xs-2 {\r\n    margin-left: 16.66667%;\r\n  }\r\n\r\n  .offset-xs-3 {\r\n    margin-left: 25%;\r\n  }\r\n\r\n  .offset-xs-4 {\r\n    margin-left: 33.33333%;\r\n  }\r\n\r\n  .offset-xs-5 {\r\n    margin-left: 41.66667%;\r\n  }\r\n\r\n  .offset-xs-6 {\r\n    margin-left: 50%;\r\n  }\r\n\r\n  .offset-xs-7 {\r\n    margin-left: 58.33333%;\r\n  }\r\n\r\n  .offset-xs-8 {\r\n    margin-left: 66.66667%;\r\n  }\r\n\r\n  .offset-xs-9 {\r\n    margin-left: 75%;\r\n  }\r\n\r\n  .offset-xs-10 {\r\n    margin-left: 83.33333%;\r\n  }\r\n\r\n  .offset-xs-11 {\r\n    margin-left: 91.66667%;\r\n  }\r\n  .mb-xs-3,\r\n  .my-xs-3 {\r\n    margin-bottom: 1rem !important;\r\n  }\r\n  .mb-xs-2,\r\n  .my-xs-2 {\r\n    margin-bottom: 0.5rem !important;\r\n  }\r\n  .mb-xs-1,\r\n  .my-xs-1 {\r\n    margin-bottom: 0.25rem !important;\r\n  }\r\n  .mt-xs-0 {\r\n    margin-top: 0 !important;\r\n  }\r\n}","html {\r\n  font-size: 62.5%;\r\n}\r\nbody {\r\n  display: flex;\r\n  flex-direction: column;\r\n  justify-content: space-between;\r\n  min-height: 100vh;\r\n\r\n  font-family: $open-sans;\r\n  color: #212121;\r\n  font-weight: 400;\r\n  font-size: 1.6rem;\r\n  line-height: 1.2;\r\n  background-color:#efefef;\r\n}\r\n\r\nmain {\r\n  padding: 40px 0;\r\n}\r\n\r\nfooter {\r\n  margin-top: auto;\r\n}\r\n\r\n.hidden-title {\r\n  visibility: hidden;\r\n  height: 0;\r\n}","//breakpoints\r\n$widescreen: 1440px;\r\n$laptop: 1200px;\r\n$tablet: 992px;\r\n$mobile-large: 768px;\r\n$mobile: 576px;\r\n\r\n//colors\r\n\r\n\r\n//fonts\r\n$base-fonts: system-ui, -apple-system, \"Segoe UI\", Roboto, \"Helvetica Neue\", \"Noto Sans\", \"Liberation Sans\", Arial, sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\", \"Noto Color Emoji\";\r\n$open-sans: 'Open Sans', sans-serif;\r\n$montserrat: 'Montserrat', sans-serif;\r\n\r\n//colors\r\n//$primary-color: #F6A200;\r\n$primary-color: #F9A825;\r\n$secondary-color: #43a047;",".burger {\r\n  display: none;\r\n  width: 3rem;\r\n  height: 2rem;\r\n  padding: 0;\r\n\r\n  font-size: 0;\r\n  color: transparent;\r\n\r\n  position: absolute;\r\n  top: 50%;\r\n  left: 1.5rem;\r\n  transform: translateY(-50%);\r\n  background: none;\r\n  border: none;\r\n\r\n  &::before, &::after, span {\r\n    display: block;\r\n    width: 100%;\r\n    height: 2px;\r\n    background-color: #212121;\r\n    position: absolute;\r\n    left: 0;\r\n  }\r\n\r\n  &::before, &::after {\r\n    content: \"\";\r\n    transition: transform .2s linear;\r\n  }\r\n\r\n  &::before {\r\n    top: 0;\r\n  }\r\n\r\n  &::after {\r\n    bottom: 0;\r\n  }\r\n\r\n  span {\r\n    top: 50%;\r\n    transform: translateY(-50%);\r\n    transition: opacity .2s linear;\r\n  }\r\n\r\n  .show-sidebar & {\r\n    span {\r\n      opacity: 0;\r\n    }\r\n\r\n    &::before, &::after {\r\n      top: 50%;\r\n    }\r\n\r\n    &::before {\r\n      transform: rotate(45deg);\r\n    }\r\n\r\n    &::after {\r\n      transform: rotate(-45deg);\r\n    }\r\n  }\r\n\r\n  @include tablet {\r\n    display: block;\r\n  }\r\n}",".logo {\r\n  max-width: 130px;\r\n\r\n  img {\r\n    width: 100%;\r\n    height: 100%;\r\n    object-fit: cover;\r\n  }\r\n}",".header {\r\n  padding: 20px 0;\r\n  font-size: 20px;\r\n  background-color: #fff;\r\n  box-shadow: -10px 10px 10px rgba(#000, .3);\r\n  border-radius: 0 0 16px 16px;\r\n\r\n  &__inner {\r\n    display: flex;\r\n    justify-content: space-between;\r\n    align-items: center;\r\n  }\r\n\r\n  &__info {\r\n    width: calc(80% - 130px);\r\n    padding: 0 5px;\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: center;\r\n    font-size: 22px;\r\n    font-family: $montserrat;\r\n    overflow: hidden;\r\n\r\n    span {\r\n      @extend .text-nowrap;\r\n    }\r\n\r\n    > a {\r\n      max-width: 50%;\r\n    }\r\n  }\r\n\r\n  &__phone {\r\n    padding-right: 20px;\r\n    @extend .flex-items-center;\r\n    transition: color .2s linear;\r\n\r\n    &:hover {\r\n      color: $secondary-color;\r\n\r\n      svg {\r\n        fill: $secondary-color;\r\n      }\r\n    }\r\n\r\n    .footer & {\r\n      &:hover {\r\n        color: #ccc;\r\n\r\n        svg {\r\n          fill: #ccc;\r\n        }\r\n      }\r\n    }\r\n  }\r\n\r\n  &__phone-icon {\r\n    @extend .icon;\r\n  }\r\n\r\n  &__location {\r\n    @extend .flex-items-center;\r\n    padding-left: 20px;\r\n    border-left: 1px dashed #333;\r\n    transition: color .2s linear;\r\n    span {\r\n      &:first-child {\r\n        display: block;\r\n        font-weight: 500;\r\n        font-family: $montserrat;\r\n      }\r\n    }\r\n\r\n    &:hover {\r\n      color: $secondary-color;\r\n\r\n      svg {\r\n        fill: $secondary-color;\r\n      }\r\n    }\r\n  }\r\n\r\n  &__location-icon {\r\n    @extend .icon;\r\n  }\r\n\r\n  &__routine {\r\n    @extend .flex-items-center;\r\n    width: 20%;\r\n    overflow: hidden;\r\n  }\r\n\r\n  &__routine-icon {\r\n    height: 40px;\r\n    fill: $primary-color;\r\n    margin-right: 8px;\r\n    flex-shrink: 0;\r\n  }\r\n\r\n  &__routine-val {\r\n    p {\r\n      @extend .text-nowrap;\r\n    }\r\n  }\r\n}",".categories {\r\n  max-width: 80%;\r\n  margin: 0 auto;\r\n  display: flex;\r\n  flex-wrap: wrap;\r\n  justify-content: center;\r\n\r\n  &__item {\r\n    padding: 10px;\r\n    width: 40%;\r\n  }\r\n}",".cat-card {\r\n  display: flex;\r\n  flex-direction: column;\r\n  width: 320px;\r\n  height: 320px;\r\n  padding-top: 18px;\r\n  color: #fff;\r\n  background-color: $secondary-color;\r\n  border-radius: 16px;\r\n  box-shadow: -6px 6px 6px rgba(0, 0, 0, .2);\r\n  @extend .bg-radial;\r\n  overflow: hidden;\r\n  cursor: pointer;\r\n  transition: scale .2s cubic-bezier(.32,.08,.24,1), box-shadow .2s cubic-bezier(.32,.08,.24,1), scale .2s cubic-bezier(.32,.08,.24,1),color .2s cubic-bezier(.32,.08,.24,1);\r\n\r\n  &:hover {\r\n    scale: 1.05;\r\n    box-shadow: -10px 10px 10px rgba(0, 0, 0, .18);\r\n  }\r\n\r\n  svg {\r\n    height: 100%;\r\n    width: 37%;\r\n    margin: 0 auto;\r\n    fill: rgb(#000, .7);\r\n  }\r\n\r\n  &__bottom {\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: center;\r\n    text-align: center;\r\n    font-family: $montserrat;\r\n    text-transform: uppercase;\r\n    padding: 8px;\r\n    background-color: rgba(0, 0, 0, .2);\r\n    border-radius: 0 0 16px 16px;\r\n    min-height: 98.4px;\r\n  }\r\n\r\n  h2, h3, h4, h5 {\r\n    font-size: 26px;\r\n    text-align: center;\r\n    padding: 10px;\r\n  }\r\n}",".footer {\r\n  padding: 34px 0;\r\n  font-size: 20px;\r\n  font-family: $montserrat;\r\n  font-weight: 600;\r\n  background-color: $secondary-color;\r\n  border-radius: 16px 16px 0 0;\r\n  .container {\r\n    display: flex;\r\n    justify-content: space-between;\r\n    align-items: center;\r\n  }\r\n}",null],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {

"use strict";


module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/index.html":
/*!************************!*\
  !*** ./src/index.html ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/html-loader/dist/runtime/getUrl.js */ "./node_modules/html-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___HTML_LOADER_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ./img/favicon.svg */ "./src/img/favicon.svg"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ./img/favicon.png */ "./src/img/favicon.png"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_2___ = new URL(/* asset import */ __webpack_require__(/*! ./img/logo.png */ "./src/img/logo.png"), __webpack_require__.b);
// Module
var ___HTML_LOADER_REPLACEMENT_0___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_0___);
var ___HTML_LOADER_REPLACEMENT_1___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_1___);
var ___HTML_LOADER_REPLACEMENT_2___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_2___);
var code = "<!DOCTYPE html>\r\n<html lang=\"ru\">\r\n<head>\r\n  <meta charset=\"UTF-8\">\r\n  <meta http-equiv=\"X-UA-Compatible\" content=\"IE=edge\">\r\n  <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\r\n\r\n  <link rel=\"icon\" href=\"" + ___HTML_LOADER_REPLACEMENT_0___ + "\" type=\"image/svg+xml\">\r\n  <link rel=\"icon\" href=\"" + ___HTML_LOADER_REPLACEMENT_1___ + "\" type=\"image/png\">\r\n\r\n  <link rel=\"preconnect\" href=\"https://fonts.googleapis.com\">\r\n  <link rel=\"preconnect\" href=\"https://fonts.gstatic.com\" crossorigin>\r\n  <link href=\"https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;500;600;700&family=Open+Sans:wght@300;400;500;600;700&display=swap\" rel=\"stylesheet\">\r\n\r\n  <title>Webpack</title>\r\n</head>\r\n<body>\r\n  <header class=\"header\">\r\n    <div class=\"container container--header\">\r\n      <div class=\"header__inner\">\r\n        <a href=\"#\" class=\"logo\">\r\n          <img src=\"" + ___HTML_LOADER_REPLACEMENT_2___ + "\" alt=\"beer station logo\">\r\n        </a>\r\n        <!--/logo-->\r\n\r\n        <div class=\"header__info\">\r\n          <a class=\"header__phone\" href=\"tel:+380971470077\">\r\n            <svg class=\"header__phone-icon\" xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 512 512\"><!-- Font Awesome Pro 5.15.4 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) --><path d=\"M497.39 361.8l-112-48a24 24 0 0 0-28 6.9l-49.6 60.6A370.66 370.66 0 0 1 130.6 204.11l60.6-49.6a23.94 23.94 0 0 0 6.9-28l-48-112A24.16 24.16 0 0 0 122.6.61l-104 24A24 24 0 0 0 0 48c0 256.5 207.9 464 464 464a24 24 0 0 0 23.4-18.6l24-104a24.29 24.29 0 0 0-14.01-27.6z\"/></svg>\r\n            <span>+38(097)147-00-77</span>\r\n          </a>\r\n          <a class=\"header__location\" target=\"_blank\" href=\"https://www.google.com/maps/search/%D0%BF%D1%96%D1%81%D0%BA%D1%96%D0%B2%D0%BA%D0%B0+%D1%81%D1%82%D0%B0%D0%BD%D1%86%D1%96%D1%8F+%D1%82%D0%B5%D1%82%D0%B5%D1%80%D1%96%D0%B2/@50.6992069,29.5986911,20.75z\">\r\n            <svg class=\"header__location-icon\" xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 384 512\"><!-- Font Awesome Pro 5.15.4 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) --><path d=\"M172.268 501.67C26.97 291.031 0 269.413 0 192 0 85.961 85.961 0 192 0s192 85.961 192 192c0 77.413-26.97 99.031-172.268 309.67-9.535 13.774-29.93 13.773-39.464 0zM192 272c44.183 0 80-35.817 80-80s-35.817-80-80-80-80 35.817-80 80 35.817 80 80 80z\"/></svg>\r\n            <span>смт. Пісківка, вул. Філіпова 1</span>\r\n          </a>\r\n        </div>\r\n        <!--/header__info-->\r\n\r\n        <div class=\"header__routine\">\r\n          <svg class=\"header__routine-icon\" xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 448 512\"><!-- Font Awesome Pro 5.15.4 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) --><path d=\"M148 288h-40c-6.6 0-12-5.4-12-12v-40c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40c0 6.6-5.4 12-12 12zm108-12v-40c0-6.6-5.4-12-12-12h-40c-6.6 0-12 5.4-12 12v40c0 6.6 5.4 12 12 12h40c6.6 0 12-5.4 12-12zm96 0v-40c0-6.6-5.4-12-12-12h-40c-6.6 0-12 5.4-12 12v40c0 6.6 5.4 12 12 12h40c6.6 0 12-5.4 12-12zm-96 96v-40c0-6.6-5.4-12-12-12h-40c-6.6 0-12 5.4-12 12v40c0 6.6 5.4 12 12 12h40c6.6 0 12-5.4 12-12zm-96 0v-40c0-6.6-5.4-12-12-12h-40c-6.6 0-12 5.4-12 12v40c0 6.6 5.4 12 12 12h40c6.6 0 12-5.4 12-12zm192 0v-40c0-6.6-5.4-12-12-12h-40c-6.6 0-12 5.4-12 12v40c0 6.6 5.4 12 12 12h40c6.6 0 12-5.4 12-12zm96-260v352c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V112c0-26.5 21.5-48 48-48h48V12c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v52h128V12c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v52h48c26.5 0 48 21.5 48 48zm-48 346V160H48v298c0 3.3 2.7 6 6 6h340c3.3 0 6-2.7 6-6z\"/></svg>\r\n          <div class=\"header__routine-val\">\r\n            <p>пн-пт: 11:00 - 20:00</p>\r\n            <p>сб-нд: 11:00 - 21:00</p>\r\n          </div>\r\n        </div>\r\n        <!--/header__routine-->\r\n      </div>\r\n      <!--/header__top-->\r\n    </div>\r\n  </header>\r\n\r\n  <main>\r\n    <div>\r\n      <div class=\"container\">\r\n\r\n        <div class=\"categories\">\r\n          <div class=\"categories__item\">\r\n            <div class=\"cat-card\">\r\n              <svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 512 512\"><!-- Font Awesome Pro 5.15.4 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) --><path d=\"M352,256H313.39c-15.71-13.44-35.46-23.07-57.39-28V180.44l-32-3.38-32,3.38V228c-21.93,5-41.68,14.6-57.39,28H16A16,16,0,0,0,0,272v96a16,16,0,0,0,16,16h92.79C129.38,421.73,173,448,224,448s94.62-26.27,115.21-64H352a32,32,0,0,1,32,32,32,32,0,0,0,32,32h64a32,32,0,0,0,32-32A160,160,0,0,0,352,256ZM81.59,159.91l142.41-15,142.41,15c9.42,1,17.59-6.81,17.59-16.8V112.89c0-10-8.17-17.8-17.59-16.81L256,107.74V80a16,16,0,0,0-16-16H208a16,16,0,0,0-16,16v27.74L81.59,96.08C72.17,95.09,64,102.9,64,112.89v30.22C64,153.1,72.17,160.91,81.59,159.91Z\"/></svg>\r\n              <div class=\"cat-card__bottom\">\r\n                <h3>Сьогодні на кранах</h3>\r\n              </div>\r\n            </div>\r\n          </div>\r\n          <div class=\"categories__item\">\r\n            <div class=\"cat-card\">\r\n              <svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 384 512\"><!-- Font Awesome Pro 5.15.4 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) --><path d=\"M120 72c0-39.765 32.235-72 72-72s72 32.235 72 72c0 39.764-32.235 72-72 72s-72-32.236-72-72zm254.627 1.373c-12.496-12.497-32.758-12.497-45.254 0L242.745 160H141.254L54.627 73.373c-12.496-12.497-32.758-12.497-45.254 0-12.497 12.497-12.497 32.758 0 45.255L104 213.254V480c0 17.673 14.327 32 32 32h16c17.673 0 32-14.327 32-32V368h16v112c0 17.673 14.327 32 32 32h16c17.673 0 32-14.327 32-32V213.254l94.627-94.627c12.497-12.497 12.497-32.757 0-45.254z\"/></svg>\r\n              <div class=\"cat-card__bottom\">\r\n                <h3>Б/А пиво та соки</h3>\r\n              </div>\r\n            </div>\r\n          </div>\r\n          <div class=\"categories__item\">\r\n            <div class=\"cat-card\">\r\n              <svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 512 512\"><!-- Font Awesome Pro 5.15.4 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) --><path d=\"M510.37 254.79l-12.08-76.26a132.493 132.493 0 0 0-37.16-72.95l-54.76-54.75c-19.73-19.72-45.18-32.7-72.71-37.05l-76.7-12.15c-27.51-4.36-55.69.11-80.52 12.76L107.32 49.6a132.25 132.25 0 0 0-57.79 57.8l-35.1 68.88a132.602 132.602 0 0 0-12.82 80.94l12.08 76.27a132.493 132.493 0 0 0 37.16 72.95l54.76 54.75a132.087 132.087 0 0 0 72.71 37.05l76.7 12.14c27.51 4.36 55.69-.11 80.52-12.75l69.12-35.21a132.302 132.302 0 0 0 57.79-57.8l35.1-68.87c12.71-24.96 17.2-53.3 12.82-80.96zM176 368c-17.67 0-32-14.33-32-32s14.33-32 32-32 32 14.33 32 32-14.33 32-32 32zm32-160c-17.67 0-32-14.33-32-32s14.33-32 32-32 32 14.33 32 32-14.33 32-32 32zm160 128c-17.67 0-32-14.33-32-32s14.33-32 32-32 32 14.33 32 32-14.33 32-32 32z\"/></svg>\r\n              <div class=\"cat-card__bottom\">\r\n                <h3>Смаколики</h3>\r\n              </div>\r\n            </div>\r\n          </div>\r\n          <div class=\"categories__item\">\r\n            <div class=\"cat-card\">\r\n              <svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 448 512\"><!-- Font Awesome Pro 5.15.4 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) --><path d=\"M368 96h-48V56c0-13.255-10.745-24-24-24H24C10.745 32 0 42.745 0 56v400c0 13.255 10.745 24 24 24h272c13.255 0 24-10.745 24-24v-42.11l80.606-35.977C429.396 365.063 448 336.388 448 304.86V176c0-44.112-35.888-80-80-80zm16 208.86a16.018 16.018 0 0 1-9.479 14.611L320 343.805V160h48c8.822 0 16 7.178 16 16v128.86zM208 384c-8.836 0-16-7.164-16-16V144c0-8.836 7.164-16 16-16s16 7.164 16 16v224c0 8.836-7.164 16-16 16zm-96 0c-8.836 0-16-7.164-16-16V144c0-8.836 7.164-16 16-16s16 7.164 16 16v224c0 8.836-7.164 16-16 16z\"/></svg>\r\n              <div class=\"cat-card__bottom\">\r\n                <h3>Сувеніри</h3>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </main>\r\n\r\n  <footer class=\"footer\">\r\n    <div class=\"container\">\r\n      <p class=\"copyright\">© «Beer Station №1» 2023</p>\r\n      <a class=\"header__phone\" href=\"tel:+380971470077\">\r\n        <svg class=\"header__phone-icon\" xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 512 512\"><!-- Font Awesome Pro 5.15.4 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) --><path d=\"M497.39 361.8l-112-48a24 24 0 0 0-28 6.9l-49.6 60.6A370.66 370.66 0 0 1 130.6 204.11l60.6-49.6a23.94 23.94 0 0 0 6.9-28l-48-112A24.16 24.16 0 0 0 122.6.61l-104 24A24 24 0 0 0 0 48c0 256.5 207.9 464 464 464a24 24 0 0 0 23.4-18.6l24-104a24.29 24.29 0 0 0-14.01-27.6z\"/></svg>\r\n        <span>+38(097)147-00-77</span>\r\n      </a>\r\n    </div>\r\n  </footer>\r\n</body>\r\n</html>";
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (code);

/***/ }),

/***/ "./node_modules/html-loader/dist/runtime/getUrl.js":
/*!*********************************************************!*\
  !*** ./node_modules/html-loader/dist/runtime/getUrl.js ***!
  \*********************************************************/
/***/ ((module) => {

"use strict";


module.exports = function (url, options) {
  if (!options) {
    // eslint-disable-next-line no-param-reassign
    options = {};
  }

  if (!url) {
    return url;
  } // eslint-disable-next-line no-underscore-dangle, no-param-reassign


  url = String(url.__esModule ? url.default : url);

  if (options.hash) {
    // eslint-disable-next-line no-param-reassign
    url += options.hash;
  }

  if (options.maybeNeedQuotes && /[\t\n\f\r "'=<>`]/.test(url)) {
    return "\"".concat(url, "\"");
  }

  return url;
};

/***/ }),

/***/ "./src/scss/style.scss":
/*!*****************************!*\
  !*** ./src/scss/style.scss ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_1_use_2_node_modules_group_css_media_queries_loader_lib_index_js_node_modules_resolve_url_loader_index_js_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_1_use_5_style_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!../../node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[1].use[2]!../../node_modules/group-css-media-queries-loader/lib/index.js!../../node_modules/resolve-url-loader/index.js!../../node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[1].use[5]!./style.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[1].use[2]!./node_modules/group-css-media-queries-loader/lib/index.js!./node_modules/resolve-url-loader/index.js!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[1].use[5]!./src/scss/style.scss");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_1_use_2_node_modules_group_css_media_queries_loader_lib_index_js_node_modules_resolve_url_loader_index_js_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_1_use_5_style_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_1_use_2_node_modules_group_css_media_queries_loader_lib_index_js_node_modules_resolve_url_loader_index_js_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_1_use_5_style_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_1_use_2_node_modules_group_css_media_queries_loader_lib_index_js_node_modules_resolve_url_loader_index_js_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_1_use_5_style_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_1_use_2_node_modules_group_css_media_queries_loader_lib_index_js_node_modules_resolve_url_loader_index_js_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_1_use_5_style_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

"use strict";


var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }
  return result;
}
function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];
  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
}
module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];
    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
      }
    }
    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

"use strict";


var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }
    memo[target] = styleTarget;
  }
  return memo[target];
}

/* istanbul ignore next  */
function insertBySelector(insert, style) {
  var target = getTarget(insert);
  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }
  target.appendChild(style);
}
module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

"use strict";


/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

"use strict";


/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";
  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }
  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }
  var needLayer = typeof obj.layer !== "undefined";
  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }
  css += obj.css;
  if (needLayer) {
    css += "}";
  }
  if (obj.media) {
    css += "}";
  }
  if (obj.supports) {
    css += "}";
  }
  var sourceMap = obj.sourceMap;
  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  }

  // For old IE
  /* istanbul ignore if  */
  options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }
  styleElement.parentNode.removeChild(styleElement);
}

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}
module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

"use strict";


/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }
    styleElement.appendChild(document.createTextNode(css));
  }
}
module.exports = styleTagTransform;

/***/ }),

/***/ "./src/img/favicon.png":
/*!*****************************!*\
  !*** ./src/img/favicon.png ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "img/favicon.png";

/***/ }),

/***/ "./src/img/favicon.svg":
/*!*****************************!*\
  !*** ./src/img/favicon.svg ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "img/favicon.svg";

/***/ }),

/***/ "./src/img/logo.png":
/*!**************************!*\
  !*** ./src/img/logo.png ***!
  \**************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "img/logo.png";

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && !scriptUrl) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _index_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.html */ "./src/index.html");
/* harmony import */ var _scss_style_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./scss/style.scss */ "./src/scss/style.scss");
/* harmony import */ var _js_test__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./js/test */ "./src/js/test.js");
/* harmony import */ var _js_test__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_js_test__WEBPACK_IMPORTED_MODULE_2__);



})();

/******/ })()
;
//# sourceMappingURL=index.js.map