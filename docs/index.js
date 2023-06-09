/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/js/generateProductsTemplate.js":
/*!********************************************!*\
  !*** ./src/js/generateProductsTemplate.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _products_json__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../products.json */ "./src/products.json");

const alcoholProducts = _products_json__WEBPACK_IMPORTED_MODULE_0__.filter(product => product.type === 'alcohol');
const baProducts = _products_json__WEBPACK_IMPORTED_MODULE_0__.filter(product => product.type === 'ba');
const appetizerProducts = _products_json__WEBPACK_IMPORTED_MODULE_0__.filter(product => product.type === 'appetizer');
const souvenirsProducts = _products_json__WEBPACK_IMPORTED_MODULE_0__.filter(product => product.type === 'souvenirs');
const beerContainer = document.querySelector('section.beer .main__info');
const baContainer = document.querySelector('section.ba .main__info');
const appetizerContainer = document.querySelector('section.appetizer .main__info');
const souvenirsContainer = document.querySelector('section.souvenirs .main__info');
const alcoholTemplate = alcoholProducts.map(product => generateProductTemplate(product));
const baTemplate = baProducts.map(product => generateProductTemplate(product));
const appetizerTemplate = appetizerProducts.map(product => generateProductTemplate(product));
const souvenirsTemplate = souvenirsProducts.map(product => generateProductTemplate(product));
beerContainer.insertAdjacentHTML('afterbegin', alcoholTemplate.join(''));
baContainer.insertAdjacentHTML('afterbegin', baTemplate.join(''));
appetizerContainer.insertAdjacentHTML('afterbegin', appetizerTemplate.join(''));
souvenirsContainer.insertAdjacentHTML('afterbegin', souvenirsTemplate.join(''));
function generateProductTemplate(prod) {
  const maxAlcohol = 16;
  const maxBitterness = 40;
  const maxDensity = 40;
  const alcoholPercentage = Math.round(prod.alcohol / maxAlcohol * 100) || 0;
  const alcoholStyle = `width: ${alcoholPercentage}%`;
  const bitternessPercentage = Math.round(prod.bitterness / maxBitterness * 100) || 0;
  const bitternessStyle = `width: ${bitternessPercentage}%`;
  const densityPercentage = Math.round(prod.density / maxDensity * 100) || 0;
  const densityStyle = `width: ${densityPercentage}%`;
  const testClass = prod.type !== 'alcohol' ? 'd-none' : 'card__testimonial';
  const cardMeteringClass = prod.metering ? '' : 'd-none';
  return `
         <div class="main__col">
              <div data-name=${prod.name} class="card" id=${prod.name}>
                <a class="card__img" href="#">
                  <img class="js-img" src=${prod.imgPreview} alt=${prod.title}>
                  <svg class="card__share-icon" xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 30 30" width="30px" height="30px"><path d="M 23 3 A 4 4 0 0 0 19 7 A 4 4 0 0 0 19.09375 7.8359375 L 10.011719 12.376953 A 4 4 0 0 0 7 11 A 4 4 0 0 0 3 15 A 4 4 0 0 0 7 19 A 4 4 0 0 0 10.013672 17.625 L 19.089844 22.164062 A 4 4 0 0 0 19 23 A 4 4 0 0 0 23 27 A 4 4 0 0 0 27 23 A 4 4 0 0 0 23 19 A 4 4 0 0 0 19.986328 20.375 L 10.910156 15.835938 A 4 4 0 0 0 11 15 A 4 4 0 0 0 10.90625 14.166016 L 19.988281 9.625 A 4 4 0 0 0 23 11 A 4 4 0 0 0 27 7 A 4 4 0 0 0 23 3 z"/></svg>
                </a>
                <div class="card__info">
                  <div class="card__main-info">
                    <div class="card__name">
                      <a class="card__title" href="#">${prod.title}</a>
                      <p class="card__beertype">${prod.subtitle}</p>
                    </div>
                    <div class=${testClass}>
                      <div class="card__test-item">
                        <h6 class="card__test-title">Міцність</h6>
                        <p class="card__test-value">${prod.alcohol || '0'} %</p>
                        <div class="card__test-progress">
                          <div style='${alcoholStyle}'  class="card__test-progress-value"></div>
                        </div>
                      </div>
                      <div class="card__test-item">
                        <h6 class="card__test-title">Гіркота</h6>
                        <p class="card__test-value">${prod.bitterness || '0'} IBU</p>
                        <div class="card__test-progress">
                          <div style='${bitternessStyle}'  class="card__test-progress-value"></div>
                        </div>
                      </div>
                      <div class="card__test-item">
                        <h6 class="card__test-title">Щільність</h6>
                        <p class="card__test-value">${prod.density || '0'} %</p>
                        <div class="card__test-progress">
                          <div style='${densityStyle}'  class="card__test-progress-value"></div>
                        </div>
                      </div>
                    </div>
                    <!--/card__testimonial-->
                    <div class="card__price-wrapper">
                      <div class="card__price">
                        <span>${prod.price}</span>
                        <span class=${cardMeteringClass}>за ${prod.metering || 0}</span>
                      </div>
                      <svg class="card__cart" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><!-- Font Awesome Pro 5.15.4 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) --><path d="M528.12 301.319l47.273-208C578.806 78.301 567.391 64 551.99 64H159.208l-9.166-44.81C147.758 8.021 137.93 0 126.529 0H24C10.745 0 0 10.745 0 24v16c0 13.255 10.745 24 24 24h69.883l70.248 343.435C147.325 417.1 136 435.222 136 456c0 30.928 25.072 56 56 56s56-25.072 56-56c0-15.674-6.447-29.835-16.824-40h209.647C430.447 426.165 424 440.326 424 456c0 30.928 25.072 56 56 56s56-25.072 56-56c0-22.172-12.888-41.332-31.579-50.405l5.517-24.276c3.413-15.018-8.002-29.319-23.403-29.319H218.117l-6.545-32h293.145c11.206 0 20.92-7.754 23.403-18.681z"/>
                      </svg>
                    </div>
                    <div class="card__bottom">
                      <a class="card__details" href="#">Детальніше...</a>
                    </div>
                  </div>
                  <!--/card__main-info-->
                </div>
                <!--/"card__info-->
              </div>
        </div>`;
}

/***/ }),

/***/ "./src/js/modal.js":
/*!*************************!*\
  !*** ./src/js/modal.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var siema__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! siema */ "./node_modules/siema/dist/siema.min.js");
/* harmony import */ var siema__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(siema__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _products_json__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../products.json */ "./src/products.json");


const cards = document.querySelectorAll('.card');
cards.forEach(card => {
  card.addEventListener('click', onCardClick);
});
function onCardClick(e) {
  e.preventDefault();
  const body = document.body;
  const card = e.currentTarget;
  const clickedProduct = card.dataset.name;
  const objOfProducts = _products_json__WEBPACK_IMPORTED_MODULE_1__.reduce((acc, product) => {
    acc[product.name] = product;
    return acc;
  }, {});
  const productInfo = objOfProducts[clickedProduct];
  if (!(e.target.classList.contains('js-img') || e.target.classList.contains('card__img') || e.target.classList.contains('card__title') || e.target.classList.contains('card__details'))) {
    return;
  }
  body.classList.add('no-scroll');
  const imagesTemplate = productInfo.modalImages.reduce((acc, img) => {
    acc += ` 
             <div class="modal__img">
                <img class="js-img" src=${img.src} alt=${img.alt}>
            </div>
        `;
    return acc;
  }, '');
  const descriptionTemplate = productInfo.desc.reduce((acc, paragraph) => {
    acc += `<p>${paragraph}</p>`;
    return acc;
  }, '');
  const maxAlcohol = 16;
  const maxBitterness = 40;
  const maxDensity = 40;
  const alcoholPercentage = Math.round(productInfo.alcohol / maxAlcohol * 100) || 0;
  const alcoholStyle = `width: ${alcoholPercentage}%`;
  const bitternessPercentage = Math.round(productInfo.bitterness / maxBitterness * 100) || 0;
  const bitternessStyle = `width: ${bitternessPercentage}%`;
  const densityPercentage = Math.round(productInfo.density / maxDensity * 100) || 0;
  const densityStyle = `width: ${densityPercentage}%`;
  const testimonialClass = productInfo.type !== 'alcohol' ? 'd-none' : 'modal__testimonial';
  const cardMeteringClass = productInfo.metering ? '' : 'd-none';
  const instance = basicLightbox.create(`        
        <div class="modal">
            <svg class="modal__close" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--! Font Awesome Pro 6.4.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path d="M256 48a208 208 0 1 1 0 416 208 208 0 1 1 0-416zm0 464A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM175 175c-9.4 9.4-9.4 24.6 0 33.9l47 47-47 47c-9.4 9.4-9.4 24.6 0 33.9s24.6 9.4 33.9 0l47-47 47 47c9.4 9.4 24.6 9.4 33.9 0s9.4-24.6 0-33.9l-47-47 47-47c9.4-9.4 9.4-24.6 0-33.9s-24.6-9.4-33.9 0l-47 47-47-47c-9.4-9.4-24.6-9.4-33.9 0z"/>
            </svg>
            <div class="modal__left">
                <div class="siema">                   
                    ${imagesTemplate}; 
                </div>   
                <div class="modal__angle modal__angle--left">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><!--! Font Awesome Pro 6.4.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path d="M41.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.3 256 246.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160z"/>
                    </svg>
                </div>
                <div class="modal__angle modal__angle--right">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><!--! Font Awesome Pro 6.4.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path d="M278.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-160 160c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L210.7 256 73.4 118.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l160 160z"/>
                    </svg>
                </div>
            </div>
            
            <div class="modal__right">
                <h2 class="modal__title">${productInfo.title}</h2>
                <h3 class="modal__beertype">${productInfo.subtitle}</h3>
                
                 <div class="modal__price-wrapper">
                     <div class="modal__price">
                       <span>${productInfo.price}</span>
                        <span class=${cardMeteringClass}>за ${productInfo.metering || 0}</span>
                     </div>                   
                      <button class="btn btn--default">Придбати</button>
                 </div>
                    
                <div class=${testimonialClass}>
                  <div class="card__test-item">
                        <h6 class="card__test-title">Міцність</h6>
                        <p class="card__test-value">${productInfo.alcohol || '0'} %</p>
                        <div class="card__test-progress">
                          <div style='${alcoholStyle}'  class="card__test-progress-value"></div>
                        </div>
                      </div>
                      <div class="card__test-item">
                        <h6 class="card__test-title">Гіркота</h6>
                        <p class="card__test-value">${productInfo.bitterness || '0'} IBU</p>
                        <div class="card__test-progress">
                          <div style='${bitternessStyle}'  class="card__test-progress-value"></div>
                        </div>
                      </div>
                      <div class="card__test-item">
                        <h6 class="card__test-title">Щільність</h6>
                        <p class="card__test-value">${productInfo.density || '0'} %</p>
                        <div class="card__test-progress">
                          <div style='${densityStyle}'  class="card__test-progress-value"></div>
                        </div>
                      </div>
                </div>
                <!--/card__testimonial-->
                <div class="modal__description">
                   ${descriptionTemplate}
                </div>
            </div>
        </div>
    `, {
    onShow: instance => {
      instance.element().querySelector('.modal__close').onclick = instance.close;
      document.onkeydown = function (evt) {
        evt = evt || window.event;
        let isEscape = false;
        if ("key" in evt) {
          isEscape = evt.key === "Escape" || evt.key === "Esc";
        } else {
          isEscape = evt.keyCode === 27;
        }
        if (isEscape) {
          instance.close();
        }
      };
    },
    onClose: instance => {
      body.classList.remove('no-scroll');
    }
  });
  instance.show();

  //siema - it is slider in modal

  const siema = new (siema__WEBPACK_IMPORTED_MODULE_0___default())({
    selector: '.siema',
    duration: 200,
    easing: 'ease-out',
    perPage: 1,
    startIndex: 0,
    draggable: true,
    multipleDrag: true,
    threshold: 20,
    loop: false,
    rtl: false,
    onInit: () => {
      handleArrows();
    },
    onChange: () => {
      handleArrows();
    }
  });
  function handleArrows() {
    const angleLeft = instance.element().querySelector('.modal__angle--left');
    const angleRight = instance.element().querySelector('.modal__angle--right');
    const siemaChildrenCount = instance.element().querySelector('.siema > div').children.length - 1;
    setTimeout(() => {
      if (siemaChildrenCount === siema.currentSlide) {
        angleRight.style.display = 'none';
      } else {
        angleRight.style.display = 'block';
      }
      if (siema.currentSlide === 0) {
        angleLeft.style.display = 'none';
      } else {
        angleLeft.style.display = 'block';
      }
    }, 10);
  }
  const angleLeft = instance.element().querySelector('.modal__angle--left');
  const angleRight = instance.element().querySelector('.modal__angle--right');
  angleLeft.addEventListener('click', () => {
    siema.prev(1);
  });
  angleRight.addEventListener('click', () => {
    siema.next(1);
  });
}

/***/ }),

/***/ "./src/js/scrollToTop.js":
/*!*******************************!*\
  !*** ./src/js/scrollToTop.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var debounce__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! debounce */ "./node_modules/debounce/index.js");
/* harmony import */ var debounce__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(debounce__WEBPACK_IMPORTED_MODULE_0__);

const arrow = document.querySelector('#to-top');
const header = document.querySelector('.header');
const headerHeight = header.clientHeight;
let scrollOffset = document.documentElement.scrollTop;
checkScroll(scrollOffset);
window.addEventListener('scroll', (0,debounce__WEBPACK_IMPORTED_MODULE_0__.debounce)(onScroll, 300));
function onScroll() {
  scrollOffset = document.documentElement.scrollTop;
  checkScroll(scrollOffset);
}
function checkScroll(scrollOffset) {
  if (scrollOffset >= headerHeight + 150) {
    arrow.classList.remove("hidden");
  }
  if (scrollOffset < headerHeight + 150) {
    arrow.classList.add("hidden");
  }
}
arrow.addEventListener('click', () => {
  header.scrollIntoView({
    behavior: 'smooth',
    block: 'start'
  });
});

/***/ }),

/***/ "./src/js/sort.js":
/*!************************!*\
  !*** ./src/js/sort.js ***!
  \************************/
/***/ (() => {

const icons = document.querySelectorAll('.filter__sort-direction');
icons.forEach(icon => {
  icon.addEventListener('click', e => {
    const target = e.currentTarget;
    const isDownPresent = target.classList.contains('down');
    const isUpPresent = target.classList.contains('up');
    if (isDownPresent) {
      target.classList.remove('down');
      target.classList.add('up');
    }
    if (isUpPresent) {
      target.classList.remove('up');
      target.classList.add('down');
    }
  });
});

/***/ }),

/***/ "./src/js/tabs.js":
/*!************************!*\
  !*** ./src/js/tabs.js ***!
  \************************/
/***/ (() => {

let tabs = document.querySelectorAll(".js-tab");
let tabContent = document.querySelectorAll(".js-tab-content");
tabs.forEach(tab => {
  tab.addEventListener("click", function () {
    tabs.forEach(item => {
      if (item.classList.contains('active')) {
        item.classList.remove("active");
      }
    });
    tab.classList.add("active");
    let tabName = tab.getAttribute("data-tab");
    selectTabContent(tabName);
  });
  function selectTabContent(tabName) {
    tabContent.forEach(item => {
      item.classList.contains(tabName) ? item.classList.add("active") : item.classList.remove("active");
      setTimeout(() => {
        tabs[3].scrollIntoView({
          behavior: "smooth",
          block: "start"
        });
      }, 300);
    });
  }
});

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
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ../img/lemonade-m.jpg */ "./src/img/lemonade-m.jpg"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ../img/lemonade-m1.jpg */ "./src/img/lemonade-m1.jpg"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_2___ = new URL(/* asset import */ __webpack_require__(/*! ../img/cidre-logo-m.png */ "./src/img/cidre-logo-m.png"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_3___ = new URL(/* asset import */ __webpack_require__(/*! ../img/cidr-strawberry-m.jpg */ "./src/img/cidr-strawberry-m.jpg"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_4___ = new URL(/* asset import */ __webpack_require__(/*! ../img/bocal.jpg */ "./src/img/bocal.jpg"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_5___ = new URL(/* asset import */ __webpack_require__(/*! ../img/bocal-m.jpg */ "./src/img/bocal-m.jpg"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_6___ = new URL(/* asset import */ __webpack_require__(/*! ../img/bocal-m1.jpg */ "./src/img/bocal-m1.jpg"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_7___ = new URL(/* asset import */ __webpack_require__(/*! ../img/grinky.jpg */ "./src/img/grinky.jpg"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_8___ = new URL(/* asset import */ __webpack_require__(/*! ../img/grinky-m.jpg */ "./src/img/grinky-m.jpg"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_9___ = new URL(/* asset import */ __webpack_require__(/*! ../img/grinky-craft-m.jpg */ "./src/img/grinky-craft-m.jpg"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_10___ = new URL(/* asset import */ __webpack_require__(/*! ../img/grinky-craft.jpg */ "./src/img/grinky-craft.jpg"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_11___ = new URL(/* asset import */ __webpack_require__(/*! ../img/grinky-domashni-m.jpg */ "./src/img/grinky-domashni-m.jpg"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_12___ = new URL(/* asset import */ __webpack_require__(/*! ../img/grinky-domashni-m1.jpg */ "./src/img/grinky-domashni-m1.jpg"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_13___ = new URL(/* asset import */ __webpack_require__(/*! ../img/grinky-domashni.jpg */ "./src/img/grinky-domashni.jpg"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_14___ = new URL(/* asset import */ __webpack_require__(/*! ../img/vuha-m.jpg */ "./src/img/vuha-m.jpg"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_15___ = new URL(/* asset import */ __webpack_require__(/*! ../img/vuha-m1.jpg */ "./src/img/vuha-m1.jpg"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_16___ = new URL(/* asset import */ __webpack_require__(/*! ../img/vuha-m2.jpg */ "./src/img/vuha-m2.jpg"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_17___ = new URL(/* asset import */ __webpack_require__(/*! ../img/vuha.jpg */ "./src/img/vuha.jpg"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_18___ = new URL(/* asset import */ __webpack_require__(/*! ../img/vuha-m3.jpg */ "./src/img/vuha-m3.jpg"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_19___ = new URL(/* asset import */ __webpack_require__(/*! ../img/anchous-m.jpg */ "./src/img/anchous-m.jpg"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_20___ = new URL(/* asset import */ __webpack_require__(/*! ../img/anchous-m1.jpg */ "./src/img/anchous-m1.jpg"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_21___ = new URL(/* asset import */ __webpack_require__(/*! ../img/anchous.JPG */ "./src/img/anchous.JPG"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_22___ = new URL(/* asset import */ __webpack_require__(/*! ../img/arahis-m.jpg */ "./src/img/arahis-m.jpg"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_23___ = new URL(/* asset import */ __webpack_require__(/*! ../img/arahis.jpg */ "./src/img/arahis.jpg"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_24___ = new URL(/* asset import */ __webpack_require__(/*! ../img/gustira-m.jpg */ "./src/img/gustira-m.jpg"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_25___ = new URL(/* asset import */ __webpack_require__(/*! ../img/gustira-m1.jpg */ "./src/img/gustira-m1.jpg"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_26___ = new URL(/* asset import */ __webpack_require__(/*! ../img/gustira.jpg */ "./src/img/gustira.jpg"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_27___ = new URL(/* asset import */ __webpack_require__(/*! ../img/smugastyk-m.jpg */ "./src/img/smugastyk-m.jpg"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_28___ = new URL(/* asset import */ __webpack_require__(/*! ../img/smugastyk-m1.JPG */ "./src/img/smugastyk-m1.JPG"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_29___ = new URL(/* asset import */ __webpack_require__(/*! ../img/smugastyk.JPG */ "./src/img/smugastyk.JPG"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_30___ = new URL(/* asset import */ __webpack_require__(/*! ../img/taran-m.jpg */ "./src/img/taran-m.jpg"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_31___ = new URL(/* asset import */ __webpack_require__(/*! ../img/taran-m1.jpg */ "./src/img/taran-m1.jpg"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_32___ = new URL(/* asset import */ __webpack_require__(/*! ../img/taran.jpg */ "./src/img/taran.jpg"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_33___ = new URL(/* asset import */ __webpack_require__(/*! ../img/ikra-sudaka.JPG */ "./src/img/ikra-sudaka.JPG"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_34___ = new URL(/* asset import */ __webpack_require__(/*! ../img/ikra-sudaka-m.jpg */ "./src/img/ikra-sudaka-m.jpg"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_35___ = new URL(/* asset import */ __webpack_require__(/*! ../img/ikra-sudaka-m1.jpg */ "./src/img/ikra-sudaka-m1.jpg"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_36___ = new URL(/* asset import */ __webpack_require__(/*! ../img/ikrianyk-norvezkyi-m.jpg */ "./src/img/ikrianyk-norvezkyi-m.jpg"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_37___ = new URL(/* asset import */ __webpack_require__(/*! ../img/ikrianyk-norvezkyi-m1.jpg */ "./src/img/ikrianyk-norvezkyi-m1.jpg"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_38___ = new URL(/* asset import */ __webpack_require__(/*! ../img/ikrianyk-norvezkyi.jpg */ "./src/img/ikrianyk-norvezkyi.jpg"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_39___ = new URL(/* asset import */ __webpack_require__(/*! ../img/kabanosy-m.jpg */ "./src/img/kabanosy-m.jpg"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_40___ = new URL(/* asset import */ __webpack_require__(/*! ../img/kabanosy-m1.jpg */ "./src/img/kabanosy-m1.jpg"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_41___ = new URL(/* asset import */ __webpack_require__(/*! ../img/kabanosy.jpg */ "./src/img/kabanosy.jpg"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_42___ = new URL(/* asset import */ __webpack_require__(/*! ../img/kalmar-struzhka-m.jpg */ "./src/img/kalmar-struzhka-m.jpg"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_43___ = new URL(/* asset import */ __webpack_require__(/*! ../img/kalmar-struzhka.jpg */ "./src/img/kalmar-struzhka.jpg"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_44___ = new URL(/* asset import */ __webpack_require__(/*! ../img/kalmar-struzhka-m1.jpg */ "./src/img/kalmar-struzhka-m1.jpg"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_45___ = new URL(/* asset import */ __webpack_require__(/*! ../img/kalmar-struzhka-krab-m.jpg */ "./src/img/kalmar-struzhka-krab-m.jpg"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_46___ = new URL(/* asset import */ __webpack_require__(/*! ../img/kalmar-struzhka-krab-m1.jpg */ "./src/img/kalmar-struzhka-krab-m1.jpg"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_47___ = new URL(/* asset import */ __webpack_require__(/*! ../img/kalmar-struzhka-krab.jpg */ "./src/img/kalmar-struzhka-krab.jpg"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_48___ = new URL(/* asset import */ __webpack_require__(/*! ../img/kilce-kalmara-m.jpg */ "./src/img/kilce-kalmara-m.jpg"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_49___ = new URL(/* asset import */ __webpack_require__(/*! ../img/kilce-kalmara-m1.jpg */ "./src/img/kilce-kalmara-m1.jpg"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_50___ = new URL(/* asset import */ __webpack_require__(/*! ../img/kilce-kalmara.jpg */ "./src/img/kilce-kalmara.jpg"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_51___ = new URL(/* asset import */ __webpack_require__(/*! ../img/koriushka-m.jpg */ "./src/img/koriushka-m.jpg"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_52___ = new URL(/* asset import */ __webpack_require__(/*! ../img/koriushka-m1.jpg */ "./src/img/koriushka-m1.jpg"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_53___ = new URL(/* asset import */ __webpack_require__(/*! ../img/koriushka.jpg */ "./src/img/koriushka.jpg"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_54___ = new URL(/* asset import */ __webpack_require__(/*! ../img/kranch-m.jpg */ "./src/img/kranch-m.jpg"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_55___ = new URL(/* asset import */ __webpack_require__(/*! ../img/kranch-m1.jpg */ "./src/img/kranch-m1.jpg"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_56___ = new URL(/* asset import */ __webpack_require__(/*! ../img/kranch-m2.jpg */ "./src/img/kranch-m2.jpg"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_57___ = new URL(/* asset import */ __webpack_require__(/*! ../img/kranch.jpg */ "./src/img/kranch.jpg"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_58___ = new URL(/* asset import */ __webpack_require__(/*! ../img/kukurudza-m.jpg */ "./src/img/kukurudza-m.jpg"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_59___ = new URL(/* asset import */ __webpack_require__(/*! ../img/kukurudza-m1.jpg */ "./src/img/kukurudza-m1.jpg"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_60___ = new URL(/* asset import */ __webpack_require__(/*! ../img/kukurudza.jpg */ "./src/img/kukurudza.jpg"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_61___ = new URL(/* asset import */ __webpack_require__(/*! ../img/pautynka-kalmara-m.jpg */ "./src/img/pautynka-kalmara-m.jpg"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_62___ = new URL(/* asset import */ __webpack_require__(/*! ../img/pautynka-kalmara-m1.jpg */ "./src/img/pautynka-kalmara-m1.jpg"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_63___ = new URL(/* asset import */ __webpack_require__(/*! ../img/pautynka-kalmara.jpg */ "./src/img/pautynka-kalmara.jpg"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_64___ = new URL(/* asset import */ __webpack_require__(/*! ../img/kalmar-peruanskyi-m.jpg */ "./src/img/kalmar-peruanskyi-m.jpg"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_65___ = new URL(/* asset import */ __webpack_require__(/*! ../img/kalmar-peruanskyi-m1.jpg */ "./src/img/kalmar-peruanskyi-m1.jpg"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_66___ = new URL(/* asset import */ __webpack_require__(/*! ../img/kalmar-peruanskyi.jpg */ "./src/img/kalmar-peruanskyi.jpg"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_67___ = new URL(/* asset import */ __webpack_require__(/*! ../img/plitka-m.jpg */ "./src/img/plitka-m.jpg"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_68___ = new URL(/* asset import */ __webpack_require__(/*! ../img/plitka-m1.jpg */ "./src/img/plitka-m1.jpg"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_69___ = new URL(/* asset import */ __webpack_require__(/*! ../img/plitka.jpg */ "./src/img/plitka.jpg"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_70___ = new URL(/* asset import */ __webpack_require__(/*! ../img/syr-solomka-m.jpg */ "./src/img/syr-solomka-m.jpg"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_71___ = new URL(/* asset import */ __webpack_require__(/*! ../img/syr-solomka-m1.jpg */ "./src/img/syr-solomka-m1.jpg"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_72___ = new URL(/* asset import */ __webpack_require__(/*! ../img/syr-solomka.jpg */ "./src/img/syr-solomka.jpg"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_73___ = new URL(/* asset import */ __webpack_require__(/*! ../img/smuga-lososia-m.jpg */ "./src/img/smuga-lososia-m.jpg"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_74___ = new URL(/* asset import */ __webpack_require__(/*! ../img/smuga-lososia-m1.jpg */ "./src/img/smuga-lososia-m1.jpg"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_75___ = new URL(/* asset import */ __webpack_require__(/*! ../img/smuga-lososia.jpg */ "./src/img/smuga-lososia.jpg"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_76___ = new URL(/* asset import */ __webpack_require__(/*! ../img/tunec-m.jpg */ "./src/img/tunec-m.jpg"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_77___ = new URL(/* asset import */ __webpack_require__(/*! ../img/tunec-m1.jpg */ "./src/img/tunec-m1.jpg"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_78___ = new URL(/* asset import */ __webpack_require__(/*! ../img/tunec.jpg */ "./src/img/tunec.jpg"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_79___ = new URL(/* asset import */ __webpack_require__(/*! ../img/fistashka-m.jpg */ "./src/img/fistashka-m.jpg"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_80___ = new URL(/* asset import */ __webpack_require__(/*! ../img/fistashka-m1.jpg */ "./src/img/fistashka-m1.jpg"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_81___ = new URL(/* asset import */ __webpack_require__(/*! ../img/fistashka.jpg */ "./src/img/fistashka.jpg"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_82___ = new URL(/* asset import */ __webpack_require__(/*! ../img/hamon-m.jpg */ "./src/img/hamon-m.jpg"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_83___ = new URL(/* asset import */ __webpack_require__(/*! ../img/hamon.jpg */ "./src/img/hamon.jpg"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_84___ = new URL(/* asset import */ __webpack_require__(/*! ../img/chehon-m.jpg */ "./src/img/chehon-m.jpg"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_85___ = new URL(/* asset import */ __webpack_require__(/*! ../img/chehon-m1.jpg */ "./src/img/chehon-m1.jpg"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_86___ = new URL(/* asset import */ __webpack_require__(/*! ../img/chehon.jpg */ "./src/img/chehon.jpg"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_87___ = new URL(/* asset import */ __webpack_require__(/*! ../img/dizhonski-m.jpg */ "./src/img/dizhonski-m.jpg"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_88___ = new URL(/* asset import */ __webpack_require__(/*! ../img/dizhonski-m1.jpg */ "./src/img/dizhonski-m1.jpg"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_89___ = new URL(/* asset import */ __webpack_require__(/*! ../img/dizhonski.jpg */ "./src/img/dizhonski.jpg"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_90___ = new URL(/* asset import */ __webpack_require__(/*! ../img/berdychiv-pshen-m.jpg */ "./src/img/berdychiv-pshen-m.jpg"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_91___ = new URL(/* asset import */ __webpack_require__(/*! ../img/berdychiv-pshen.jpg */ "./src/img/berdychiv-pshen.jpg"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_92___ = new URL(/* asset import */ __webpack_require__(/*! ../img/yantarna-m.jpg */ "./src/img/yantarna-m.jpg"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_93___ = new URL(/* asset import */ __webpack_require__(/*! ../img/yantarna-m1.jpg */ "./src/img/yantarna-m1.jpg"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_94___ = new URL(/* asset import */ __webpack_require__(/*! ../img/yantarna.jpg */ "./src/img/yantarna.jpg"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_95___ = new URL(/* asset import */ __webpack_require__(/*! ../img/miaso-chipsy-m.jpg */ "./src/img/miaso-chipsy-m.jpg"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_96___ = new URL(/* asset import */ __webpack_require__(/*! ../img/miaso-chipsy-m1.jpg */ "./src/img/miaso-chipsy-m1.jpg"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_97___ = new URL(/* asset import */ __webpack_require__(/*! ../img/miaso-chipsy.jpg */ "./src/img/miaso-chipsy.jpg"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_98___ = new URL(/* asset import */ __webpack_require__(/*! ../img/liasch-m.jpg */ "./src/img/liasch-m.jpg"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_99___ = new URL(/* asset import */ __webpack_require__(/*! ../img/liasch-m1.jpg */ "./src/img/liasch-m1.jpg"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_100___ = new URL(/* asset import */ __webpack_require__(/*! ../img/liasch.jpg */ "./src/img/liasch.jpg"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_101___ = new URL(/* asset import */ __webpack_require__(/*! ../img/nalyvka-m.jpg */ "./src/img/nalyvka-m.jpg"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_102___ = new URL(/* asset import */ __webpack_require__(/*! ../img/nalyvka-m1.jpg */ "./src/img/nalyvka-m1.jpg"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_103___ = new URL(/* asset import */ __webpack_require__(/*! ../img/nalyvka-m2.jpg */ "./src/img/nalyvka-m2.jpg"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_104___ = new URL(/* asset import */ __webpack_require__(/*! ../img/nalyvka.jpg */ "./src/img/nalyvka.jpg"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_105___ = new URL(/* asset import */ __webpack_require__(/*! ../img/vyno-m.jpg */ "./src/img/vyno-m.jpg"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_106___ = new URL(/* asset import */ __webpack_require__(/*! ../img/vyno-m1.jpg */ "./src/img/vyno-m1.jpg"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_107___ = new URL(/* asset import */ __webpack_require__(/*! ../img/vyno-m2.jpg */ "./src/img/vyno-m2.jpg"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_108___ = new URL(/* asset import */ __webpack_require__(/*! ../img/vyno-m3.jpg */ "./src/img/vyno-m3.jpg"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_109___ = new URL(/* asset import */ __webpack_require__(/*! ../img/vyno-m4.jpg */ "./src/img/vyno-m4.jpg"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_110___ = new URL(/* asset import */ __webpack_require__(/*! ../img/vyno-m5.jpg */ "./src/img/vyno-m5.jpg"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_111___ = new URL(/* asset import */ __webpack_require__(/*! ../img/vyno.jpg */ "./src/img/vyno.jpg"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_112___ = new URL(/* asset import */ __webpack_require__(/*! ../img/stella-m.jpg */ "./src/img/stella-m.jpg"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_113___ = new URL(/* asset import */ __webpack_require__(/*! ../img/stella.jpg */ "./src/img/stella.jpg"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_114___ = new URL(/* asset import */ __webpack_require__(/*! ../img/sik-bob-m.jpg */ "./src/img/sik-bob-m.jpg"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_115___ = new URL(/* asset import */ __webpack_require__(/*! ../img/sik-bob.jpg */ "./src/img/sik-bob.jpg"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_116___ = new URL(/* asset import */ __webpack_require__(/*! ../img/cidre-logo-m.jpg */ "./src/img/cidre-logo-m.jpg"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_117___ = new URL(/* asset import */ __webpack_require__(/*! ../img/cidre-manho-persyk.jpg */ "./src/img/cidre-manho-persyk.jpg"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_118___ = new URL(/* asset import */ __webpack_require__(/*! ../img/cidr-cactus.jpg */ "./src/img/cidr-cactus.jpg"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_119___ = new URL(/* asset import */ __webpack_require__(/*! ../img/cidre-medusa.jpg */ "./src/img/cidre-medusa.jpg"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_120___ = new URL(/* asset import */ __webpack_require__(/*! ../img/chips.jpg */ "./src/img/chips.jpg"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_121___ = new URL(/* asset import */ __webpack_require__(/*! ../img/chips-m.jpg */ "./src/img/chips-m.jpg"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_122___ = new URL(/* asset import */ __webpack_require__(/*! ../img/limonad.jpg */ "./src/img/limonad.jpg"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_123___ = new URL(/* asset import */ __webpack_require__(/*! ../img/cidre-logo.png */ "./src/img/cidre-logo.png"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_124___ = new URL(/* asset import */ __webpack_require__(/*! ../img/limonad-m2.jpg */ "./src/img/limonad-m2.jpg"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_125___ = new URL(/* asset import */ __webpack_require__(/*! ../img/mohito.jpg */ "./src/img/mohito.jpg"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_126___ = new URL(/* asset import */ __webpack_require__(/*! ../img/mohito-1.jpg */ "./src/img/mohito-1.jpg"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_127___ = new URL(/* asset import */ __webpack_require__(/*! ../img/mohito-m.jpg */ "./src/img/mohito-m.jpg"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_128___ = new URL(/* asset import */ __webpack_require__(/*! ../img/kvas.jpg */ "./src/img/kvas.jpg"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_129___ = new URL(/* asset import */ __webpack_require__(/*! ../img/kvas-1.jpg */ "./src/img/kvas-1.jpg"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_130___ = new URL(/* asset import */ __webpack_require__(/*! ../img/kvas-m.jpg */ "./src/img/kvas-m.jpg"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_131___ = new URL(/* asset import */ __webpack_require__(/*! ../img/kaktus-m.png */ "./src/img/kaktus-m.png"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_132___ = new URL(/* asset import */ __webpack_require__(/*! ../img/kaktus.png */ "./src/img/kaktus.png"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_133___ = new URL(/* asset import */ __webpack_require__(/*! ../img/fragolino-m.jpg */ "./src/img/fragolino-m.jpg"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_134___ = new URL(/* asset import */ __webpack_require__(/*! ../img/cheske-m.jpg */ "./src/img/cheske-m.jpg"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_135___ = new URL(/* asset import */ __webpack_require__(/*! ../img/cheske.jpg */ "./src/img/cheske.jpg"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_136___ = new URL(/* asset import */ __webpack_require__(/*! ../img/cheske-m1.jpg */ "./src/img/cheske-m1.jpg"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_137___ = new URL(/* asset import */ __webpack_require__(/*! ../img/opillia-m.jpg */ "./src/img/opillia-m.jpg"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_138___ = new URL(/* asset import */ __webpack_require__(/*! ../img/opillia-m1.jpg */ "./src/img/opillia-m1.jpg"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_139___ = new URL(/* asset import */ __webpack_require__(/*! ../img/opillia.jpg */ "./src/img/opillia.jpg"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_140___ = new URL(/* asset import */ __webpack_require__(/*! ../img/berdychiv-m.jpg */ "./src/img/berdychiv-m.jpg"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_141___ = new URL(/* asset import */ __webpack_require__(/*! ../img/berdychiv-m1.jpeg */ "./src/img/berdychiv-m1.jpeg"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_142___ = new URL(/* asset import */ __webpack_require__(/*! ../img/berdychiv.png */ "./src/img/berdychiv.png"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_143___ = new URL(/* asset import */ __webpack_require__(/*! ../img/bierwelle.png */ "./src/img/bierwelle.png"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_144___ = new URL(/* asset import */ __webpack_require__(/*! ../img/bierwelle-m.JPG */ "./src/img/bierwelle-m.JPG"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_145___ = new URL(/* asset import */ __webpack_require__(/*! ../img/bierwelle-m1.jpg */ "./src/img/bierwelle-m1.jpg"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_146___ = new URL(/* asset import */ __webpack_require__(/*! ../img/blanche-de-kyiv-m.jpg */ "./src/img/blanche-de-kyiv-m.jpg"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_147___ = new URL(/* asset import */ __webpack_require__(/*! ../img/blanche-de-kyiv.jpg */ "./src/img/blanche-de-kyiv.jpg"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_148___ = new URL(/* asset import */ __webpack_require__(/*! ../img/blanche-de-kyiv-m1.jpg */ "./src/img/blanche-de-kyiv-m1.jpg"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_149___ = new URL(/* asset import */ __webpack_require__(/*! ../img/waissburg-lager-m1.jpg */ "./src/img/waissburg-lager-m1.jpg"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_150___ = new URL(/* asset import */ __webpack_require__(/*! ../img/uman-medove-m-1.jpg */ "./src/img/uman-medove-m-1.jpg"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_151___ = new URL(/* asset import */ __webpack_require__(/*! ../img/uman-medove-m.jpg */ "./src/img/uman-medove-m.jpg"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_152___ = new URL(/* asset import */ __webpack_require__(/*! ../img/uman-medove.jpg */ "./src/img/uman-medove.jpg"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_153___ = new URL(/* asset import */ __webpack_require__(/*! ../img/weissburg-dunkel.jpg */ "./src/img/weissburg-dunkel.jpg"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_154___ = new URL(/* asset import */ __webpack_require__(/*! ../img/waissburg-dunke-m1.png */ "./src/img/waissburg-dunke-m1.png"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_155___ = new URL(/* asset import */ __webpack_require__(/*! ../img/waissburg-dunkel-m.png */ "./src/img/waissburg-dunkel-m.png"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_156___ = new URL(/* asset import */ __webpack_require__(/*! ../img/waissburg-blanche-m.JPG */ "./src/img/waissburg-blanche-m.JPG"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_157___ = new URL(/* asset import */ __webpack_require__(/*! ../img/wasiiburg-blanche-m1.jpeg */ "./src/img/wasiiburg-blanche-m1.jpeg"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_158___ = new URL(/* asset import */ __webpack_require__(/*! ../img/waiisburg-blanche.jpg */ "./src/img/waiisburg-blanche.jpg"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_159___ = new URL(/* asset import */ __webpack_require__(/*! ../img/waissburg-lager-m.jpg */ "./src/img/waissburg-lager-m.jpg"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_160___ = new URL(/* asset import */ __webpack_require__(/*! ../img/waissburg-lager.jpg */ "./src/img/waissburg-lager.jpg"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_161___ = new URL(/* asset import */ __webpack_require__(/*! ../img/hmelpyvo-m.jpg */ "./src/img/hmelpyvo-m.jpg"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_162___ = new URL(/* asset import */ __webpack_require__(/*! ../img/hmelpyvo-m1.png */ "./src/img/hmelpyvo-m1.png"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_163___ = new URL(/* asset import */ __webpack_require__(/*! ../img/hmelpyvo.JPG */ "./src/img/hmelpyvo.JPG"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);
var ___CSS_LOADER_URL_REPLACEMENT_2___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_2___);
var ___CSS_LOADER_URL_REPLACEMENT_3___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_3___);
var ___CSS_LOADER_URL_REPLACEMENT_4___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_4___);
var ___CSS_LOADER_URL_REPLACEMENT_5___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_5___);
var ___CSS_LOADER_URL_REPLACEMENT_6___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_6___);
var ___CSS_LOADER_URL_REPLACEMENT_7___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_7___);
var ___CSS_LOADER_URL_REPLACEMENT_8___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_8___);
var ___CSS_LOADER_URL_REPLACEMENT_9___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_9___);
var ___CSS_LOADER_URL_REPLACEMENT_10___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_10___);
var ___CSS_LOADER_URL_REPLACEMENT_11___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_11___);
var ___CSS_LOADER_URL_REPLACEMENT_12___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_12___);
var ___CSS_LOADER_URL_REPLACEMENT_13___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_13___);
var ___CSS_LOADER_URL_REPLACEMENT_14___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_14___);
var ___CSS_LOADER_URL_REPLACEMENT_15___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_15___);
var ___CSS_LOADER_URL_REPLACEMENT_16___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_16___);
var ___CSS_LOADER_URL_REPLACEMENT_17___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_17___);
var ___CSS_LOADER_URL_REPLACEMENT_18___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_18___);
var ___CSS_LOADER_URL_REPLACEMENT_19___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_19___);
var ___CSS_LOADER_URL_REPLACEMENT_20___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_20___);
var ___CSS_LOADER_URL_REPLACEMENT_21___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_21___);
var ___CSS_LOADER_URL_REPLACEMENT_22___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_22___);
var ___CSS_LOADER_URL_REPLACEMENT_23___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_23___);
var ___CSS_LOADER_URL_REPLACEMENT_24___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_24___);
var ___CSS_LOADER_URL_REPLACEMENT_25___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_25___);
var ___CSS_LOADER_URL_REPLACEMENT_26___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_26___);
var ___CSS_LOADER_URL_REPLACEMENT_27___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_27___);
var ___CSS_LOADER_URL_REPLACEMENT_28___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_28___);
var ___CSS_LOADER_URL_REPLACEMENT_29___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_29___);
var ___CSS_LOADER_URL_REPLACEMENT_30___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_30___);
var ___CSS_LOADER_URL_REPLACEMENT_31___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_31___);
var ___CSS_LOADER_URL_REPLACEMENT_32___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_32___);
var ___CSS_LOADER_URL_REPLACEMENT_33___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_33___);
var ___CSS_LOADER_URL_REPLACEMENT_34___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_34___);
var ___CSS_LOADER_URL_REPLACEMENT_35___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_35___);
var ___CSS_LOADER_URL_REPLACEMENT_36___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_36___);
var ___CSS_LOADER_URL_REPLACEMENT_37___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_37___);
var ___CSS_LOADER_URL_REPLACEMENT_38___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_38___);
var ___CSS_LOADER_URL_REPLACEMENT_39___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_39___);
var ___CSS_LOADER_URL_REPLACEMENT_40___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_40___);
var ___CSS_LOADER_URL_REPLACEMENT_41___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_41___);
var ___CSS_LOADER_URL_REPLACEMENT_42___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_42___);
var ___CSS_LOADER_URL_REPLACEMENT_43___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_43___);
var ___CSS_LOADER_URL_REPLACEMENT_44___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_44___);
var ___CSS_LOADER_URL_REPLACEMENT_45___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_45___);
var ___CSS_LOADER_URL_REPLACEMENT_46___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_46___);
var ___CSS_LOADER_URL_REPLACEMENT_47___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_47___);
var ___CSS_LOADER_URL_REPLACEMENT_48___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_48___);
var ___CSS_LOADER_URL_REPLACEMENT_49___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_49___);
var ___CSS_LOADER_URL_REPLACEMENT_50___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_50___);
var ___CSS_LOADER_URL_REPLACEMENT_51___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_51___);
var ___CSS_LOADER_URL_REPLACEMENT_52___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_52___);
var ___CSS_LOADER_URL_REPLACEMENT_53___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_53___);
var ___CSS_LOADER_URL_REPLACEMENT_54___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_54___);
var ___CSS_LOADER_URL_REPLACEMENT_55___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_55___);
var ___CSS_LOADER_URL_REPLACEMENT_56___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_56___);
var ___CSS_LOADER_URL_REPLACEMENT_57___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_57___);
var ___CSS_LOADER_URL_REPLACEMENT_58___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_58___);
var ___CSS_LOADER_URL_REPLACEMENT_59___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_59___);
var ___CSS_LOADER_URL_REPLACEMENT_60___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_60___);
var ___CSS_LOADER_URL_REPLACEMENT_61___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_61___);
var ___CSS_LOADER_URL_REPLACEMENT_62___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_62___);
var ___CSS_LOADER_URL_REPLACEMENT_63___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_63___);
var ___CSS_LOADER_URL_REPLACEMENT_64___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_64___);
var ___CSS_LOADER_URL_REPLACEMENT_65___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_65___);
var ___CSS_LOADER_URL_REPLACEMENT_66___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_66___);
var ___CSS_LOADER_URL_REPLACEMENT_67___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_67___);
var ___CSS_LOADER_URL_REPLACEMENT_68___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_68___);
var ___CSS_LOADER_URL_REPLACEMENT_69___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_69___);
var ___CSS_LOADER_URL_REPLACEMENT_70___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_70___);
var ___CSS_LOADER_URL_REPLACEMENT_71___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_71___);
var ___CSS_LOADER_URL_REPLACEMENT_72___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_72___);
var ___CSS_LOADER_URL_REPLACEMENT_73___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_73___);
var ___CSS_LOADER_URL_REPLACEMENT_74___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_74___);
var ___CSS_LOADER_URL_REPLACEMENT_75___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_75___);
var ___CSS_LOADER_URL_REPLACEMENT_76___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_76___);
var ___CSS_LOADER_URL_REPLACEMENT_77___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_77___);
var ___CSS_LOADER_URL_REPLACEMENT_78___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_78___);
var ___CSS_LOADER_URL_REPLACEMENT_79___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_79___);
var ___CSS_LOADER_URL_REPLACEMENT_80___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_80___);
var ___CSS_LOADER_URL_REPLACEMENT_81___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_81___);
var ___CSS_LOADER_URL_REPLACEMENT_82___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_82___);
var ___CSS_LOADER_URL_REPLACEMENT_83___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_83___);
var ___CSS_LOADER_URL_REPLACEMENT_84___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_84___);
var ___CSS_LOADER_URL_REPLACEMENT_85___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_85___);
var ___CSS_LOADER_URL_REPLACEMENT_86___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_86___);
var ___CSS_LOADER_URL_REPLACEMENT_87___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_87___);
var ___CSS_LOADER_URL_REPLACEMENT_88___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_88___);
var ___CSS_LOADER_URL_REPLACEMENT_89___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_89___);
var ___CSS_LOADER_URL_REPLACEMENT_90___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_90___);
var ___CSS_LOADER_URL_REPLACEMENT_91___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_91___);
var ___CSS_LOADER_URL_REPLACEMENT_92___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_92___);
var ___CSS_LOADER_URL_REPLACEMENT_93___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_93___);
var ___CSS_LOADER_URL_REPLACEMENT_94___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_94___);
var ___CSS_LOADER_URL_REPLACEMENT_95___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_95___);
var ___CSS_LOADER_URL_REPLACEMENT_96___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_96___);
var ___CSS_LOADER_URL_REPLACEMENT_97___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_97___);
var ___CSS_LOADER_URL_REPLACEMENT_98___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_98___);
var ___CSS_LOADER_URL_REPLACEMENT_99___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_99___);
var ___CSS_LOADER_URL_REPLACEMENT_100___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_100___);
var ___CSS_LOADER_URL_REPLACEMENT_101___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_101___);
var ___CSS_LOADER_URL_REPLACEMENT_102___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_102___);
var ___CSS_LOADER_URL_REPLACEMENT_103___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_103___);
var ___CSS_LOADER_URL_REPLACEMENT_104___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_104___);
var ___CSS_LOADER_URL_REPLACEMENT_105___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_105___);
var ___CSS_LOADER_URL_REPLACEMENT_106___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_106___);
var ___CSS_LOADER_URL_REPLACEMENT_107___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_107___);
var ___CSS_LOADER_URL_REPLACEMENT_108___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_108___);
var ___CSS_LOADER_URL_REPLACEMENT_109___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_109___);
var ___CSS_LOADER_URL_REPLACEMENT_110___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_110___);
var ___CSS_LOADER_URL_REPLACEMENT_111___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_111___);
var ___CSS_LOADER_URL_REPLACEMENT_112___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_112___);
var ___CSS_LOADER_URL_REPLACEMENT_113___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_113___);
var ___CSS_LOADER_URL_REPLACEMENT_114___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_114___);
var ___CSS_LOADER_URL_REPLACEMENT_115___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_115___);
var ___CSS_LOADER_URL_REPLACEMENT_116___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_116___);
var ___CSS_LOADER_URL_REPLACEMENT_117___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_117___);
var ___CSS_LOADER_URL_REPLACEMENT_118___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_118___);
var ___CSS_LOADER_URL_REPLACEMENT_119___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_119___);
var ___CSS_LOADER_URL_REPLACEMENT_120___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_120___);
var ___CSS_LOADER_URL_REPLACEMENT_121___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_121___);
var ___CSS_LOADER_URL_REPLACEMENT_122___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_122___);
var ___CSS_LOADER_URL_REPLACEMENT_123___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_123___);
var ___CSS_LOADER_URL_REPLACEMENT_124___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_124___);
var ___CSS_LOADER_URL_REPLACEMENT_125___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_125___);
var ___CSS_LOADER_URL_REPLACEMENT_126___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_126___);
var ___CSS_LOADER_URL_REPLACEMENT_127___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_127___);
var ___CSS_LOADER_URL_REPLACEMENT_128___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_128___);
var ___CSS_LOADER_URL_REPLACEMENT_129___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_129___);
var ___CSS_LOADER_URL_REPLACEMENT_130___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_130___);
var ___CSS_LOADER_URL_REPLACEMENT_131___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_131___);
var ___CSS_LOADER_URL_REPLACEMENT_132___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_132___);
var ___CSS_LOADER_URL_REPLACEMENT_133___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_133___);
var ___CSS_LOADER_URL_REPLACEMENT_134___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_134___);
var ___CSS_LOADER_URL_REPLACEMENT_135___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_135___);
var ___CSS_LOADER_URL_REPLACEMENT_136___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_136___);
var ___CSS_LOADER_URL_REPLACEMENT_137___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_137___);
var ___CSS_LOADER_URL_REPLACEMENT_138___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_138___);
var ___CSS_LOADER_URL_REPLACEMENT_139___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_139___);
var ___CSS_LOADER_URL_REPLACEMENT_140___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_140___);
var ___CSS_LOADER_URL_REPLACEMENT_141___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_141___);
var ___CSS_LOADER_URL_REPLACEMENT_142___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_142___);
var ___CSS_LOADER_URL_REPLACEMENT_143___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_143___);
var ___CSS_LOADER_URL_REPLACEMENT_144___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_144___);
var ___CSS_LOADER_URL_REPLACEMENT_145___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_145___);
var ___CSS_LOADER_URL_REPLACEMENT_146___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_146___);
var ___CSS_LOADER_URL_REPLACEMENT_147___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_147___);
var ___CSS_LOADER_URL_REPLACEMENT_148___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_148___);
var ___CSS_LOADER_URL_REPLACEMENT_149___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_149___);
var ___CSS_LOADER_URL_REPLACEMENT_150___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_150___);
var ___CSS_LOADER_URL_REPLACEMENT_151___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_151___);
var ___CSS_LOADER_URL_REPLACEMENT_152___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_152___);
var ___CSS_LOADER_URL_REPLACEMENT_153___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_153___);
var ___CSS_LOADER_URL_REPLACEMENT_154___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_154___);
var ___CSS_LOADER_URL_REPLACEMENT_155___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_155___);
var ___CSS_LOADER_URL_REPLACEMENT_156___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_156___);
var ___CSS_LOADER_URL_REPLACEMENT_157___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_157___);
var ___CSS_LOADER_URL_REPLACEMENT_158___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_158___);
var ___CSS_LOADER_URL_REPLACEMENT_159___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_159___);
var ___CSS_LOADER_URL_REPLACEMENT_160___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_160___);
var ___CSS_LOADER_URL_REPLACEMENT_161___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_161___);
var ___CSS_LOADER_URL_REPLACEMENT_162___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_162___);
var ___CSS_LOADER_URL_REPLACEMENT_163___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_163___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "@charset \"UTF-8\";\n.bg-radial, .cat-card {\n  border-radius: 16px;\n  -webkit-backdrop-filter: blur(15px) saturate(86%);\n          backdrop-filter: blur(15px) saturate(86%);\n  background: radial-gradient(circle at 100% 0, hsla(0, 0%, 100%, 0.6) 0, hsla(0, 0%, 96.1%, 0.13) 183%);\n}\n\n.flex-items-center, .footer__item, .header__time, .header__item {\n  display: flex;\n  align-items: center;\n}\n\n.text-nowrap, .header__item:first-child span {\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n\n/* http://meyerweb.com/eric/tools/css/reset/\n   v2.0 | 20110126\n   License: none (public domain)\n*/\nhtml, body, div, span, applet, object, iframe,\nh1, h2, h3, h4, h5, h6, p, blockquote, pre,\na, abbr, acronym, address, big, cite, code,\ndel, dfn, em, img, ins, kbd, q, s, samp,\nsmall, strike, strong, sub, sup, tt, var,\nb, u, i, center,\ndl, dt, dd, ol, ul, li,\nfieldset, form, label, legend,\ntable, caption, tbody, tfoot, thead, tr, th, td,\narticle, aside, canvas, details, embed,\nfigure, figcaption, footer, header, hgroup,\nmenu, nav, output, ruby, section, summary,\ntime, mark, audio, video {\n  margin: 0;\n  padding: 0;\n  border: 0;\n  outline: none;\n  font-size: 100%;\n  font: inherit;\n  vertical-align: baseline;\n}\n\n/* HTML5 display-role reset for older browsers */\narticle, aside, details, figcaption, figure,\nfooter, header, hgroup, menu, nav, section {\n  display: block;\n}\n\n*, *::before, *::after {\n  box-sizing: border-box;\n}\n\na {\n  color: inherit;\n  text-decoration: none;\n  cursor: pointer;\n  display: inline-block;\n}\n\nimg {\n  max-width: 100%;\n  height: auto;\n}\n\nol, ul {\n  list-style: none;\n}\n\nblockquote, q {\n  quotes: none;\n}\n\nblockquote:before, blockquote:after,\nq:before, q:after {\n  content: \"\";\n}\n\ninput, textarea, button {\n  outline: none;\n  border: none;\n}\n\ntextarea {\n  resize: vertical;\n}\n\nbutton {\n  cursor: pointer;\n}\n\ntable {\n  border-collapse: collapse;\n  border-spacing: 0;\n}\n\n.container {\n  padding: 0 15px;\n  max-width: 1470px;\n  margin: 0 auto;\n}\n.container--header {\n  max-width: 1430px;\n  padding: 0 15px;\n  margin: 0 auto;\n}\n\n.container-fluid {\n  width: 100%;\n  padding: 0 15px;\n}\n\n.row {\n  display: flex;\n  flex-wrap: wrap;\n  margin-right: -15px;\n  margin-left: -15px;\n}\n\n.no-gutters {\n  margin-right: 0;\n  margin-left: 0;\n}\n\n.no-gutters > .col,\n.no-gutters > [class*=col-] {\n  padding-right: 0;\n  padding-left: 0;\n}\n\n.col-1, .col-2, .col-3, .col-4, .col-5, .col-6, .col-7, .col-8, .col-9, .col-10, .col-11, .col-12, .col,\n.col-auto, .col-sm-1, .col-sm-2, .col-sm-3, .col-sm-4, .col-sm-5, .col-sm-6, .col-sm-7, .col-sm-8, .col-sm-9, .col-sm-10, .col-sm-11, .col-sm-12, .col-sm,\n.col-sm-auto, .col-md-1, .col-md-2, .col-md-3, .col-md-4, .col-md-5, .col-md-6, .col-md-7, .col-md-8, .col-md-9, .col-md-10, .col-md-11, .col-md-12, .col-md,\n.col-md-auto, .col-lg-1, .col-lg-2, .col-lg-3, .col-lg-4, .col-lg-5, .col-lg-6, .col-lg-7, .col-lg-8, .col-lg-9, .col-lg-10, .col-lg-11, .col-lg-12, .col-lg,\n.col-lg-auto, .col-xs-1, .col-xs-2, .col-xs-3, .col-xs-4, .col-xs-5, .col-xs-6, .col-xs-7, .col-xs-8, .col-xs-9, .col-xs-10, .col-xs-11, .col-xs-12, .col-xs,\n.col-xs-auto {\n  width: 100%;\n  max-width: 100%;\n  min-height: 1px;\n  flex-shrink: 0;\n  padding-right: 15px;\n  padding-left: 15px;\n}\n\n.col {\n  flex-basis: 0;\n  flex-grow: 1;\n  max-width: 100%;\n}\n\n.col-auto {\n  flex: 0 0 auto;\n  width: auto;\n  max-width: none;\n}\n\n.col-1 {\n  flex: 0 0 8.333333%;\n  max-width: 8.333333%;\n}\n\n.col-2 {\n  flex: 0 0 16.666667%;\n  max-width: 16.666667%;\n}\n\n.col-3 {\n  flex: 0 0 25%;\n  max-width: 25%;\n}\n\n.col-4 {\n  flex: 0 0 33.333333%;\n  max-width: 33.333333%;\n}\n\n.col-5 {\n  flex: 0 0 41.666667%;\n  max-width: 41.666667%;\n}\n\n.col-6 {\n  flex: 0 0 50%;\n  max-width: 50%;\n}\n\n.col-7 {\n  flex: 0 0 58.333333%;\n  max-width: 58.333333%;\n}\n\n.col-8 {\n  flex: 0 0 66.666667%;\n  max-width: 66.666667%;\n}\n\n.col-9 {\n  flex: 0 0 75%;\n  max-width: 75%;\n}\n\n.col-10 {\n  flex: 0 0 83.333333%;\n  max-width: 83.333333%;\n}\n\n.col-11 {\n  flex: 0 0 91.666667%;\n  max-width: 91.666667%;\n}\n\n.col-12 {\n  flex: 0 0 100%;\n  max-width: 100%;\n}\n\n.order-first {\n  order: -1;\n}\n\n.order-last {\n  order: 13;\n}\n\n.order-0 {\n  order: 0;\n}\n\n.order-1 {\n  order: 1;\n}\n\n.order-2 {\n  order: 2;\n}\n\n.order-3 {\n  order: 3;\n}\n\n.order-4 {\n  order: 4;\n}\n\n.order-5 {\n  order: 5;\n}\n\n.order-6 {\n  order: 6;\n}\n\n.order-7 {\n  order: 7;\n}\n\n.order-8 {\n  order: 8;\n}\n\n.order-9 {\n  order: 9;\n}\n\n.order-10 {\n  order: 10;\n}\n\n.order-11 {\n  order: 11;\n}\n\n.order-12 {\n  order: 12;\n}\n\n.offset-1 {\n  margin-left: 8.33333%;\n}\n\n.offset-2 {\n  margin-left: 16.66667%;\n}\n\n.offset-3 {\n  margin-left: 25%;\n}\n\n.offset-4 {\n  margin-left: 33.33333%;\n}\n\n.offset-5 {\n  margin-left: 41.66667%;\n}\n\n.offset-6 {\n  margin-left: 50%;\n}\n\n.offset-7 {\n  margin-left: 58.33333%;\n}\n\n.offset-8 {\n  margin-left: 66.66667%;\n}\n\n.offset-9 {\n  margin-left: 75%;\n}\n\n.offset-10 {\n  margin-left: 83.33333%;\n}\n\n.offset-11 {\n  margin-left: 91.66667%;\n}\n\n.m-0 {\n  margin: 0 !important;\n}\n\n.mt-0,\n.my-0 {\n  margin-top: 0 !important;\n}\n\n.mr-0,\n.mx-0 {\n  margin-right: 0 !important;\n}\n\n.mb-0,\n.my-0 {\n  margin-bottom: 0 !important;\n}\n\n.ml-0,\n.mx-0 {\n  margin-left: 0 !important;\n}\n\n.m-1 {\n  margin: 0.25rem !important;\n}\n\n.mt-1,\n.my-1 {\n  margin-top: 0.25rem !important;\n}\n\n.mr-1,\n.mx-1 {\n  margin-right: 0.25rem !important;\n}\n\n.mb-1,\n.my-1 {\n  margin-bottom: 0.25rem !important;\n}\n\n.ml-1,\n.mx-1 {\n  margin-left: 0.25rem !important;\n}\n\n.m-2 {\n  margin: 0.5rem !important;\n}\n\n.mt-2,\n.my-2 {\n  margin-top: 0.5rem !important;\n}\n\n.mr-2,\n.mx-2 {\n  margin-right: 0.5rem !important;\n}\n\n.mb-2,\n.my-2 {\n  margin-bottom: 0.5rem !important;\n}\n\n.ml-2,\n.mx-2 {\n  margin-left: 0.5rem !important;\n}\n\n.m-3 {\n  margin: 1rem !important;\n}\n\n.mt-3,\n.my-3 {\n  margin-top: 1rem !important;\n}\n\n.mr-3,\n.mx-3 {\n  margin-right: 1rem !important;\n}\n\n.mb-3,\n.my-3 {\n  margin-bottom: 1rem !important;\n}\n\n.ml-3,\n.mx-3 {\n  margin-left: 1rem !important;\n}\n\n.m-4 {\n  margin: 1.5rem !important;\n}\n\n.mt-4,\n.my-4 {\n  margin-top: 1.5rem !important;\n}\n\n.mr-4,\n.mx-4 {\n  margin-right: 1.5rem !important;\n}\n\n.mb-4,\n.my-4 {\n  margin-bottom: 1.5rem !important;\n}\n\n.ml-4,\n.mx-4 {\n  margin-left: 1.5rem !important;\n}\n\n.m-5 {\n  margin: 3rem !important;\n}\n\n.mt-5,\n.my-5 {\n  margin-top: 3rem !important;\n}\n\n.mr-5,\n.mx-5 {\n  margin-right: 3rem !important;\n}\n\n.mb-5,\n.my-5 {\n  margin-bottom: 3rem !important;\n}\n\n.ml-5,\n.mx-5 {\n  margin-left: 3rem !important;\n}\n\n.mt-auto {\n  margin-top: auto;\n}\n\n.mb-auto {\n  margin-bottom: auto;\n}\n\n.ml-auto {\n  margin-left: auto;\n}\n\n.mr-auto {\n  margin-right: auto;\n}\n\n.mx-auto {\n  margin-left: auto;\n  margin-right: auto;\n}\n\n.my-auto {\n  margin-top: auto;\n  margin-bottom: auto;\n}\n.p-0 {\n  padding: 0 !important;\n}\n\n.pt-0,\n.py-0 {\n  padding-top: 0 !important;\n}\n\n.pr-0,\n.px-0 {\n  padding-right: 0 !important;\n}\n\n.pb-0,\n.py-0 {\n  padding-bottom: 0 !important;\n}\n\n.pl-0,\n.px-0 {\n  padding-left: 0 !important;\n}\n\n.p-1 {\n  padding: 0.25rem !important;\n}\n\n.pt-1,\n.py-1 {\n  padding-top: 0.25rem !important;\n}\n\n.pr-1,\n.px-1 {\n  padding-right: 0.25rem !important;\n}\n\n.pb-1,\n.py-1 {\n  padding-bottom: 0.25rem !important;\n}\n\n.pl-1,\n.px-1 {\n  padding-left: 0.25rem !important;\n}\n\n.p-2 {\n  padding: 0.5rem !important;\n}\n\n.pt-2,\n.py-2 {\n  padding-top: 0.5rem !important;\n}\n\n.pr-2,\n.px-2 {\n  padding-right: 0.5rem !important;\n}\n\n.pb-2,\n.py-2 {\n  padding-bottom: 0.5rem !important;\n}\n\n.pl-2,\n.px-2 {\n  padding-left: 0.5rem !important;\n}\n\n.p-3 {\n  padding: 1rem !important;\n}\n\n.pt-3,\n.py-3 {\n  padding-top: 1rem !important;\n}\n\n.pr-3,\n.px-3 {\n  padding-right: 1rem !important;\n}\n\n.pb-3,\n.py-3 {\n  padding-bottom: 1rem !important;\n}\n\n.pl-3,\n.px-3 {\n  padding-left: 1rem !important;\n}\n\n.p-4 {\n  padding: 1.5rem !important;\n}\n\n.pt-4,\n.py-4 {\n  padding-top: 1.5rem !important;\n}\n\n.pr-4,\n.px-4 {\n  padding-right: 1.5rem !important;\n}\n\n.pb-4,\n.py-4 {\n  padding-bottom: 1.5rem !important;\n}\n\n.pl-4,\n.px-4 {\n  padding-left: 1.5rem !important;\n}\n\n.p-5 {\n  padding: 3rem !important;\n}\n\n.pt-5,\n.py-5 {\n  padding-top: 3rem !important;\n}\n\n.pr-5,\n.px-5 {\n  padding-right: 3rem !important;\n}\n\n.pb-5,\n.py-5 {\n  padding-bottom: 3rem !important;\n}\n\n.pl-5,\n.px-5 {\n  padding-left: 3rem !important;\n}\nhtml {\n  font-size: 62.5%;\n}\n\nbody {\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n  min-height: 100vh;\n  font-family: \"Open Sans\", sans-serif;\n  color: #212121;\n  font-weight: 400;\n  font-size: 1.6rem;\n  line-height: 1.2;\n  background-color: #efefef;\n}\nbody.no-scroll {\n  overflow-y: hidden;\n}\n\nmain {\n  padding: 40px 0;\n}\n\nfooter {\n  margin-top: auto;\n}\n\n.hidden-title {\n  visibility: hidden;\n  height: 0;\n}\n\n.d-none {\n  display: none !important;\n}\n\n.burger {\n  display: none;\n  width: 3rem;\n  height: 2rem;\n  padding: 0;\n  font-size: 0;\n  color: transparent;\n  position: absolute;\n  top: 50%;\n  left: 1.5rem;\n  transform: translateY(-50%);\n  background: none;\n  border: none;\n}\n.burger::before, .burger::after, .burger span {\n  display: block;\n  width: 100%;\n  height: 2px;\n  background-color: #212121;\n  position: absolute;\n  left: 0;\n}\n.burger::before, .burger::after {\n  content: \"\";\n  transition: transform 0.2s linear;\n}\n.burger::before {\n  top: 0;\n}\n.burger::after {\n  bottom: 0;\n}\n.burger span {\n  top: 50%;\n  transform: translateY(-50%);\n  transition: opacity 0.2s linear;\n}\n.show-sidebar .burger span {\n  opacity: 0;\n}\n.show-sidebar .burger::before, .show-sidebar .burger::after {\n  top: 50%;\n}\n.show-sidebar .burger::before {\n  transform: rotate(45deg);\n}\n.show-sidebar .burger::after {\n  transform: rotate(-45deg);\n}\n\n.js-tab-content {\n  display: none;\n}\n.js-tab-content.active {\n  display: block;\n  animation: 0.5s linear appear;\n}\n@keyframes appear {\n  from {\n    transform: scale3d(0.95, 0.95, 1);\n    opacity: 0.5;\n  }\n  to {\n    transform: scale3d(1, 1, 1);\n    opacity: 1;\n  }\n}\n\n.logo {\n  max-width: 130px;\n}\n.logo img {\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n}\n\n.to-top {\n  cursor: pointer;\n  width: 30px;\n  height: 30px;\n  fill: #F9A825;\n  position: fixed;\n  right: 20px;\n  bottom: 100px;\n  opacity: 1;\n  visibility: visible;\n  transition: opacity 0.2s linear;\n}\n.to-top.hidden {\n  opacity: 0;\n  visibility: hidden;\n}\n\n.section {\n  padding: 40px 0;\n}\n.section--nopading {\n  padding: 0;\n}\n.section__title {\n  text-align: center;\n  font-family: \"Montserrat\", sans-serif;\n  font-weight: 500;\n  font-size: 46px;\n  margin-bottom: 14px;\n  text-shadow: -2px 2px 2px rgba(206, 89, 55, 0.4);\n}\n\n.card {\n  overflow: hidden;\n  box-shadow: -4px 4px 2px rgba(216, 216, 216, 0.75);\n  position: relative;\n  display: block;\n  border-radius: 8px;\n  width: 100%;\n  max-width: 460px;\n  margin: 0 auto;\n  background-color: #fff;\n  padding-bottom: 60px;\n}\n.card__img {\n  position: relative;\n  height: 300px;\n  width: 100%;\n  overflow: hidden;\n}\n.card__img img {\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n  transition: transform 3s ease-in;\n}\n.card__img:hover img {\n  transform: scale(1.2);\n}\n.card__share-icon {\n  display: none;\n  position: absolute;\n  bottom: 8px;\n  right: 8px;\n  width: 42px;\n  height: 42px;\n  fill: #8bc34a;\n}\n.card__share-icon:hover {\n  fill: #F9A825;\n}\n.card__info {\n  padding: 12px 12px 16px 12px;\n}\n.card__main-info {\n  font-size: 20px;\n  font-weight: 500;\n}\n.card__beertype, .modal__beertype {\n  color: #8bc34a;\n  margin: 4px 0;\n  min-height: 48px;\n}\n.card__title {\n  font-size: 24px;\n  font-weight: 600;\n  font-family: \"Montserrat\", sans-serif;\n  min-height: 58px;\n}\n.card__title:hover {\n  text-decoration: underline;\n}\n.card__testimonial, .modal__testimonial {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  font-size: 15px;\n  margin: 6px -10px;\n  padding: 12px 0;\n  border-top: 1px dashed #90a4ae;\n  border-bottom: 1px dashed #90a4ae;\n}\n.card__test-item, .modal__test-item {\n  width: 33.3333%;\n  padding: 0 10px;\n}\n.card__test-value, .modal__test-value {\n  font-size: 20px;\n  font-weight: 600;\n  margin-top: 12px;\n  margin-bottom: 4px;\n}\n.card__test-progress, .modal__test-progress {\n  position: relative;\n  height: 8px;\n  background-color: #bbb;\n}\n.card__test-progress-value, .modal__test-progress-value {\n  position: absolute;\n  left: 0;\n  top: 0;\n  bottom: 0;\n  height: 100%;\n  background-color: #F9A825;\n}\n.card__price, .modal__price {\n  font-size: 34px;\n  line-height: 1;\n  font-weight: 600;\n  margin-top: 12px;\n}\n.card__price span, .modal__price span {\n  display: block;\n}\n.card__price span:last-child, .modal__price span:last-child {\n  font-size: 20px;\n  color: #90a4ae;\n}\n.card__price-wrapper, .modal__price-wrapper {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n}\n.card__cart, .modal__cart {\n  display: none;\n  cursor: pointer;\n  height: 48px;\n  width: 48px;\n  transition: fill 0.2s linear;\n}\n.card__cart:hover, .modal__cart:hover {\n  fill: #71a436;\n}\n.card__bottom {\n  padding: 12px;\n  text-align: right;\n  position: absolute;\n  bottom: 0;\n  right: 0;\n}\n.card__details {\n  font-size: 22px;\n  font-weight: 600;\n  text-decoration: underline;\n  color: #8bc34a;\n}\n.card__details:hover {\n  text-decoration: none;\n}\n\n.filter {\n  display: none;\n  justify-content: space-between;\n  align-items: center;\n  font-size: 20px;\n  padding: 18px;\n  border: 1px solid #d7d7d7;\n  background-color: #ffffff;\n  margin-bottom: 20px;\n  border-radius: 8px;\n}\n.filter__sort {\n  width: 35%;\n  display: flex;\n  align-items: center;\n  padding-right: 18px;\n  overflow: hidden;\n}\n.filter__sort-by {\n  display: flex;\n  align-items: center;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n          user-select: none;\n}\n.filter__sort-direction {\n  cursor: pointer;\n  margin-right: 8px;\n}\n.filter__sort-direction svg {\n  padding-top: 4px;\n  width: 22px;\n  height: 22px;\n  cursor: pointer;\n  fill: #222;\n  transition: fill 0.2s linear;\n}\n.filter__sort-direction svg:hover {\n  fill: #8bc34a;\n}\n.filter__sort-direction.down svg:last-child {\n  display: none;\n}\n.filter__sort-direction.up svg:first-child {\n  display: none;\n}\n.filter__input {\n  width: 30%;\n  display: flex;\n  align-items: center;\n  border-left: 1px solid #90a4ae;\n  border-right: 1px solid #90a4ae;\n  background-color: transparent;\n  padding: 0 22px;\n  font-family: \"Roboto\", sans-serif;\n  color: #707070;\n  font-size: 15px;\n}\n.filter__input input {\n  width: 100%;\n  font-size: 20px;\n  padding-bottom: 4px;\n  margin-left: 12px;\n  border-bottom: 2px dashed #90a4ae;\n}\n.filter__input input:focus {\n  border-color: #8bc34a;\n}\n.filter__input svg {\n  width: 20px;\n  height: 20px;\n  cursor: pointer;\n  fill: #222;\n}\n.filter__filter {\n  display: flex;\n  align-items: center;\n  padding-left: 12px;\n  width: 35%;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n          user-select: none;\n  overflow: hidden;\n}\n.filter__select {\n  padding: 4px 8px;\n  border: 2px solid #444;\n  border-radius: 8px;\n  font-size: 16px;\n  font-family: inherit;\n  margin-left: 8px;\n}\n.filter__select:focus {\n  border-color: #8bc34a;\n}\n.filter__select.focus-visible {\n  border-color: #8bc34a;\n  outline: none;\n}\n.filter__select:focus-visible {\n  border-color: #8bc34a;\n  outline: none;\n}\n\n.modal {\n  position: relative;\n  display: flex;\n  background-color: #fff;\n  width: 90%;\n  max-width: 1500px;\n  max-height: 80vh;\n  min-height: 60vh;\n  margin: 0 auto;\n  border-radius: 12px;\n  overflow: hidden;\n}\n.modal__close {\n  z-index: 111;\n  cursor: pointer;\n  width: 30px;\n  height: 30px;\n  position: absolute;\n  top: 10px;\n  right: 10px;\n  fill: #90a4ae;\n  transition: fill 0.2s linear;\n}\n.modal__close:hover {\n  fill: #F9A825;\n}\n.modal__angle {\n  cursor: pointer;\n  position: absolute;\n  top: 50%;\n  transform: translateY(-50);\n  background-color: #bbb;\n  padding: 6px 4px;\n  fill: rgba(255, 255, 255, 0.7);\n  width: 28px;\n  transition: fill 0.2s linear, background-color 0.2s linear;\n}\n.modal__angle--left {\n  left: 8px;\n  border-radius: 10px 0 0 10px;\n}\n.modal__angle--right {\n  right: 8px;\n  border-radius: 0 10px 10px 0;\n}\n.modal__angle:hover {\n  background-color: #999;\n  fill: #fff;\n}\n.modal__left {\n  position: relative;\n  width: 500px;\n  flex-shrink: 0;\n  min-height: 100%;\n  overflow: hidden;\n}\n.modal__left .siema {\n  height: 100%;\n}\n.modal__left .siema div {\n  height: 100%;\n}\n.modal__img {\n  width: 100%;\n  height: 100%;\n}\n.modal__img img {\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n  object-position: center center;\n}\n.modal__right {\n  padding: 20px;\n  max-height: 100%;\n  overflow-y: auto;\n  scrollbar-width: thin;\n  scrollbar-color: #ccc #71a436;\n  /* Работает в Chrome, Edge и Safari */\n}\n.modal__right::-webkit-scrollbar {\n  width: 8px;\n}\n.modal__right::-webkit-scrollbar-track {\n  background: #ccc;\n  padding: 4px 0;\n}\n.modal__right::-webkit-scrollbar-thumb {\n  background-color: #71a436;\n  border-radius: 28px;\n}\n.modal__title {\n  font-size: 36px;\n  font-family: \"Montserrat\", sans-serif;\n  font-weight: 600;\n  padding-right: 16px;\n}\n.modal__beertype {\n  font-size: 20px;\n  min-height: 1px;\n}\n.modal__price-wrapper {\n  margin: 10px 0;\n}\n.modal__price-wrapper .btn {\n  display: none;\n}\n.modal__testimonial {\n  margin-bottom: 12px;\n}\n.modal__test-title {\n  font-size: 20px;\n}\n.modal__test-value {\n  font-size: 22px;\n}\n.modal__description h1, .modal__description h2, .modal__description h3, .modal__description h4, .modal__description h5, .modal__description h6, .modal__description p, .modal__description pre, .modal__description div, .modal__description table, .modal__description iframe, .modal__description blockquote, .modal__description dl, .modal__description ul, .modal__description ol {\n  margin-bottom: 8px;\n}\n.modal .someclass {\n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + "), url(" + ___CSS_LOADER_URL_REPLACEMENT_1___ + "), url(" + ___CSS_LOADER_URL_REPLACEMENT_2___ + "), url(" + ___CSS_LOADER_URL_REPLACEMENT_3___ + "), url(" + ___CSS_LOADER_URL_REPLACEMENT_4___ + "), url(" + ___CSS_LOADER_URL_REPLACEMENT_5___ + "), url(" + ___CSS_LOADER_URL_REPLACEMENT_6___ + "), url(" + ___CSS_LOADER_URL_REPLACEMENT_7___ + "), url(" + ___CSS_LOADER_URL_REPLACEMENT_8___ + "), url(" + ___CSS_LOADER_URL_REPLACEMENT_9___ + "), url(" + ___CSS_LOADER_URL_REPLACEMENT_10___ + "), url(" + ___CSS_LOADER_URL_REPLACEMENT_11___ + "), url(" + ___CSS_LOADER_URL_REPLACEMENT_12___ + "), url(" + ___CSS_LOADER_URL_REPLACEMENT_13___ + "), url(" + ___CSS_LOADER_URL_REPLACEMENT_14___ + "), url(" + ___CSS_LOADER_URL_REPLACEMENT_15___ + "), url(" + ___CSS_LOADER_URL_REPLACEMENT_16___ + "), url(" + ___CSS_LOADER_URL_REPLACEMENT_14___ + "), url(" + ___CSS_LOADER_URL_REPLACEMENT_17___ + "), url(" + ___CSS_LOADER_URL_REPLACEMENT_18___ + "), url(" + ___CSS_LOADER_URL_REPLACEMENT_19___ + "), url(" + ___CSS_LOADER_URL_REPLACEMENT_20___ + "), url(" + ___CSS_LOADER_URL_REPLACEMENT_21___ + "), url(" + ___CSS_LOADER_URL_REPLACEMENT_22___ + "), url(" + ___CSS_LOADER_URL_REPLACEMENT_23___ + "), url(" + ___CSS_LOADER_URL_REPLACEMENT_24___ + "), url(" + ___CSS_LOADER_URL_REPLACEMENT_25___ + "), url(" + ___CSS_LOADER_URL_REPLACEMENT_26___ + "), url(" + ___CSS_LOADER_URL_REPLACEMENT_27___ + "), url(" + ___CSS_LOADER_URL_REPLACEMENT_28___ + "), url(" + ___CSS_LOADER_URL_REPLACEMENT_29___ + "), url(" + ___CSS_LOADER_URL_REPLACEMENT_30___ + "), url(" + ___CSS_LOADER_URL_REPLACEMENT_31___ + "), url(" + ___CSS_LOADER_URL_REPLACEMENT_32___ + "), url(" + ___CSS_LOADER_URL_REPLACEMENT_33___ + "), url(" + ___CSS_LOADER_URL_REPLACEMENT_34___ + "), url(" + ___CSS_LOADER_URL_REPLACEMENT_35___ + "), url(" + ___CSS_LOADER_URL_REPLACEMENT_36___ + "), url(" + ___CSS_LOADER_URL_REPLACEMENT_37___ + "), url(" + ___CSS_LOADER_URL_REPLACEMENT_38___ + "), url(" + ___CSS_LOADER_URL_REPLACEMENT_39___ + "), url(" + ___CSS_LOADER_URL_REPLACEMENT_40___ + "), url(" + ___CSS_LOADER_URL_REPLACEMENT_41___ + "), url(" + ___CSS_LOADER_URL_REPLACEMENT_42___ + "), url(" + ___CSS_LOADER_URL_REPLACEMENT_43___ + "), url(" + ___CSS_LOADER_URL_REPLACEMENT_44___ + "), url(" + ___CSS_LOADER_URL_REPLACEMENT_45___ + "), url(" + ___CSS_LOADER_URL_REPLACEMENT_46___ + "), url(" + ___CSS_LOADER_URL_REPLACEMENT_47___ + "), url(" + ___CSS_LOADER_URL_REPLACEMENT_48___ + "), url(" + ___CSS_LOADER_URL_REPLACEMENT_49___ + "), url(" + ___CSS_LOADER_URL_REPLACEMENT_50___ + "), url(" + ___CSS_LOADER_URL_REPLACEMENT_51___ + "), url(" + ___CSS_LOADER_URL_REPLACEMENT_52___ + "), url(" + ___CSS_LOADER_URL_REPLACEMENT_53___ + "), url(" + ___CSS_LOADER_URL_REPLACEMENT_54___ + "), url(" + ___CSS_LOADER_URL_REPLACEMENT_55___ + "), url(" + ___CSS_LOADER_URL_REPLACEMENT_56___ + "), url(" + ___CSS_LOADER_URL_REPLACEMENT_57___ + "), url(" + ___CSS_LOADER_URL_REPLACEMENT_58___ + "), url(" + ___CSS_LOADER_URL_REPLACEMENT_59___ + "), url(" + ___CSS_LOADER_URL_REPLACEMENT_60___ + "), url(" + ___CSS_LOADER_URL_REPLACEMENT_61___ + "), url(" + ___CSS_LOADER_URL_REPLACEMENT_62___ + "), url(" + ___CSS_LOADER_URL_REPLACEMENT_63___ + "), url(" + ___CSS_LOADER_URL_REPLACEMENT_64___ + "), url(" + ___CSS_LOADER_URL_REPLACEMENT_65___ + "), url(" + ___CSS_LOADER_URL_REPLACEMENT_66___ + "), url(" + ___CSS_LOADER_URL_REPLACEMENT_67___ + "), url(" + ___CSS_LOADER_URL_REPLACEMENT_68___ + "), url(" + ___CSS_LOADER_URL_REPLACEMENT_69___ + "), url(" + ___CSS_LOADER_URL_REPLACEMENT_70___ + "), url(" + ___CSS_LOADER_URL_REPLACEMENT_71___ + "), url(" + ___CSS_LOADER_URL_REPLACEMENT_72___ + "), url(" + ___CSS_LOADER_URL_REPLACEMENT_73___ + "), url(" + ___CSS_LOADER_URL_REPLACEMENT_74___ + "), url(" + ___CSS_LOADER_URL_REPLACEMENT_75___ + "), url(" + ___CSS_LOADER_URL_REPLACEMENT_76___ + "), url(" + ___CSS_LOADER_URL_REPLACEMENT_77___ + "), url(" + ___CSS_LOADER_URL_REPLACEMENT_78___ + "), url(" + ___CSS_LOADER_URL_REPLACEMENT_79___ + "), url(" + ___CSS_LOADER_URL_REPLACEMENT_80___ + "), url(" + ___CSS_LOADER_URL_REPLACEMENT_81___ + "), url(" + ___CSS_LOADER_URL_REPLACEMENT_82___ + "), url(" + ___CSS_LOADER_URL_REPLACEMENT_83___ + "), url(" + ___CSS_LOADER_URL_REPLACEMENT_84___ + "), url(" + ___CSS_LOADER_URL_REPLACEMENT_85___ + "), url(" + ___CSS_LOADER_URL_REPLACEMENT_86___ + "), url(" + ___CSS_LOADER_URL_REPLACEMENT_87___ + "), url(" + ___CSS_LOADER_URL_REPLACEMENT_88___ + "), url(" + ___CSS_LOADER_URL_REPLACEMENT_89___ + "), url(" + ___CSS_LOADER_URL_REPLACEMENT_90___ + "), url(" + ___CSS_LOADER_URL_REPLACEMENT_91___ + "), url(" + ___CSS_LOADER_URL_REPLACEMENT_92___ + "), url(" + ___CSS_LOADER_URL_REPLACEMENT_93___ + "), url(" + ___CSS_LOADER_URL_REPLACEMENT_94___ + "), url(" + ___CSS_LOADER_URL_REPLACEMENT_95___ + "), url(" + ___CSS_LOADER_URL_REPLACEMENT_96___ + "), url(" + ___CSS_LOADER_URL_REPLACEMENT_97___ + "), url(" + ___CSS_LOADER_URL_REPLACEMENT_98___ + "), url(" + ___CSS_LOADER_URL_REPLACEMENT_99___ + "), url(" + ___CSS_LOADER_URL_REPLACEMENT_100___ + "), url(" + ___CSS_LOADER_URL_REPLACEMENT_101___ + "), url(" + ___CSS_LOADER_URL_REPLACEMENT_102___ + "), url(" + ___CSS_LOADER_URL_REPLACEMENT_103___ + "), url(" + ___CSS_LOADER_URL_REPLACEMENT_104___ + "), url(" + ___CSS_LOADER_URL_REPLACEMENT_105___ + "), url(" + ___CSS_LOADER_URL_REPLACEMENT_106___ + "), url(" + ___CSS_LOADER_URL_REPLACEMENT_107___ + "), url(" + ___CSS_LOADER_URL_REPLACEMENT_108___ + "), url(" + ___CSS_LOADER_URL_REPLACEMENT_109___ + "), url(" + ___CSS_LOADER_URL_REPLACEMENT_110___ + "), url(" + ___CSS_LOADER_URL_REPLACEMENT_111___ + "), url(" + ___CSS_LOADER_URL_REPLACEMENT_112___ + "), url(" + ___CSS_LOADER_URL_REPLACEMENT_113___ + "), url(" + ___CSS_LOADER_URL_REPLACEMENT_114___ + "), url(" + ___CSS_LOADER_URL_REPLACEMENT_115___ + ");\n}\n.modal .someclass1 {\n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_116___ + "), url(" + ___CSS_LOADER_URL_REPLACEMENT_117___ + "), url(" + ___CSS_LOADER_URL_REPLACEMENT_118___ + "), url(" + ___CSS_LOADER_URL_REPLACEMENT_119___ + "), url(" + ___CSS_LOADER_URL_REPLACEMENT_4___ + "), url(" + ___CSS_LOADER_URL_REPLACEMENT_120___ + "), url(" + ___CSS_LOADER_URL_REPLACEMENT_121___ + "), url(" + ___CSS_LOADER_URL_REPLACEMENT_122___ + "), url(" + ___CSS_LOADER_URL_REPLACEMENT_123___ + "), url(" + ___CSS_LOADER_URL_REPLACEMENT_124___ + "), url(" + ___CSS_LOADER_URL_REPLACEMENT_125___ + "), url(" + ___CSS_LOADER_URL_REPLACEMENT_126___ + "), url(" + ___CSS_LOADER_URL_REPLACEMENT_127___ + "), url(" + ___CSS_LOADER_URL_REPLACEMENT_128___ + "), url(" + ___CSS_LOADER_URL_REPLACEMENT_129___ + "), url(" + ___CSS_LOADER_URL_REPLACEMENT_130___ + "), url(" + ___CSS_LOADER_URL_REPLACEMENT_131___ + "), url(" + ___CSS_LOADER_URL_REPLACEMENT_132___ + "), url(" + ___CSS_LOADER_URL_REPLACEMENT_133___ + "), url(" + ___CSS_LOADER_URL_REPLACEMENT_134___ + "), url(" + ___CSS_LOADER_URL_REPLACEMENT_135___ + "), url(" + ___CSS_LOADER_URL_REPLACEMENT_136___ + "), url(" + ___CSS_LOADER_URL_REPLACEMENT_137___ + "), url(" + ___CSS_LOADER_URL_REPLACEMENT_138___ + "), url(" + ___CSS_LOADER_URL_REPLACEMENT_139___ + "), url(" + ___CSS_LOADER_URL_REPLACEMENT_140___ + "), url(" + ___CSS_LOADER_URL_REPLACEMENT_141___ + "), url(" + ___CSS_LOADER_URL_REPLACEMENT_142___ + "), url(" + ___CSS_LOADER_URL_REPLACEMENT_143___ + "), url(" + ___CSS_LOADER_URL_REPLACEMENT_144___ + "), url(" + ___CSS_LOADER_URL_REPLACEMENT_145___ + "), url(" + ___CSS_LOADER_URL_REPLACEMENT_146___ + "), url(" + ___CSS_LOADER_URL_REPLACEMENT_147___ + "), url(" + ___CSS_LOADER_URL_REPLACEMENT_148___ + "), url(" + ___CSS_LOADER_URL_REPLACEMENT_149___ + "), url(" + ___CSS_LOADER_URL_REPLACEMENT_150___ + "), url(" + ___CSS_LOADER_URL_REPLACEMENT_151___ + "), url(" + ___CSS_LOADER_URL_REPLACEMENT_152___ + "), url(" + ___CSS_LOADER_URL_REPLACEMENT_153___ + "), url(" + ___CSS_LOADER_URL_REPLACEMENT_154___ + "), url(" + ___CSS_LOADER_URL_REPLACEMENT_155___ + "), url(" + ___CSS_LOADER_URL_REPLACEMENT_156___ + "), url(" + ___CSS_LOADER_URL_REPLACEMENT_157___ + "), url(" + ___CSS_LOADER_URL_REPLACEMENT_158___ + "), url(" + ___CSS_LOADER_URL_REPLACEMENT_159___ + "), url(" + ___CSS_LOADER_URL_REPLACEMENT_160___ + "), url(" + ___CSS_LOADER_URL_REPLACEMENT_161___ + "), url(" + ___CSS_LOADER_URL_REPLACEMENT_162___ + "), url(" + ___CSS_LOADER_URL_REPLACEMENT_163___ + ");\n}\n\n.btn {\n  font-family: \"Montserrat\", sans-serif;\n  padding: 10px 20px;\n  font-size: 20px;\n  font-weight: 600;\n  border-radius: 8px;\n  border: 2px solid #8bc34a;\n  background-color: transparent;\n  transition: color 0.2s linear, background-color 0.2s linear;\n}\n.btn:hover {\n  color: #fff;\n  background-color: #8bc34a;\n}\n\n.header {\n  padding: 10px 0;\n  font-size: 20px;\n  background-color: #fff;\n  box-shadow: -10px 10px 10px rgba(0, 0, 0, 0.3);\n  border-radius: 0 0 10px 10px;\n}\n.header__inner {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  font-family: \"Montserrat\", sans-serif;\n}\n.header__info {\n  max-width: calc(82% - 130px);\n  padding: 0 10px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  overflow: hidden;\n}\n.header__icon {\n  height: 20px;\n  margin-right: 6px;\n  fill: #333;\n  flex-shrink: 0;\n  transition: fill 0.2s linear;\n}\n.header__item {\n  transition: color 0.2s linear;\n  padding-right: 12px;\n}\n.header__item:last-child {\n  padding-right: 0;\n  padding-left: 12px;\n  border-left: 1px dashed #333;\n}\n.header__item:hover {\n  color: #8bc34a;\n}\n.header__item:hover svg {\n  fill: #8bc34a;\n}\n.footer .header__item:hover {\n  color: #ccc;\n}\n.footer .header__item:hover svg {\n  fill: #ccc;\n}\n.header__time {\n  max-width: 18%;\n}\n\n.categories {\n  margin: 0 -15px;\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: center;\n  overflow: hidden;\n  padding: 10px 20px 10px 20px;\n}\n.categories__item {\n  padding: 20px;\n  width: 50%;\n  margin: 0 auto;\n}\n\n.cat-card {\n  display: flex;\n  flex-direction: column;\n  width: 100%;\n  height: 312px;\n  color: #fff;\n  background-color: #8bc34a;\n  border-radius: 10px;\n  box-shadow: -6px 6px 6px rgba(0, 0, 0, 0.2);\n  overflow: hidden;\n  cursor: pointer;\n  transition: scale 0.2s cubic-bezier(0.32, 0.08, 0.24, 1), box-shadow 0.2s cubic-bezier(0.32, 0.08, 0.24, 1), scale 0.2s cubic-bezier(0.32, 0.08, 0.24, 1), color 0.2s cubic-bezier(0.32, 0.08, 0.24, 1);\n}\n.cat-card:hover {\n  scale: 1.05;\n  box-shadow: -10px 10px 10px rgba(0, 0, 0, 0.18);\n}\n.cat-card.active {\n  box-shadow: -10px 10px 10px rgba(0, 0, 0, 0.18);\n  text-decoration: underline;\n}\n.cat-card.active svg {\n  padding: 10px 0;\n  fill: rgba(249, 168, 37, 0.7);\n}\n.cat-card svg {\n  height: 100%;\n  width: 37%;\n  padding: 10px 0;\n  margin: 0 auto;\n  fill: rgba(0, 0, 0, 0.7);\n  transition: fill 0.2s linear;\n}\n.cat-card__bottom {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  text-align: center;\n  font-family: \"Montserrat\", sans-serif;\n  text-transform: uppercase;\n  padding: 8px;\n  background-color: rgba(0, 0, 0, 0.2);\n  border-radius: 0 0 10px 10px;\n  min-height: 98.4px;\n  overflow: hidden;\n}\n.cat-card h2, .cat-card h3, .cat-card h4, .cat-card h5 {\n  font-size: 26px;\n  text-align: center;\n  padding: 10px;\n}\n\n.main__info {\n  display: flex;\n  flex-wrap: wrap;\n  margin: 0 -10px;\n}\n.main__col {\n  display: flex;\n  width: 33.3333%;\n  padding: 0 10px;\n}\n.main__col:not(:nth-child(-n+3)) {\n  margin-top: 20px;\n}\n\n.footer {\n  padding: 34px 0;\n  font-size: 20px;\n  font-family: \"Montserrat\", sans-serif;\n  font-weight: 600;\n  background: linear-gradient(181deg, rgba(255, 255, 255, 0.95) 0%, rgba(67, 160, 71, 0.6306897759) 100%);\n  border-radius: 10px 10px 0 0;\n}\n.footer .container {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\n.footer__item {\n  transition: color 0.2s linear;\n}\n.footer__item:hover {\n  color: #000;\n}\n@media screen and (max-width: 1200px){\n  .container--header {\n    max-width: 100%;\n  }\n  .container {\n    max-width: 960px;\n  }\n  .card__img {\n    height: 240px;\n  }\n  .card__beertype, .modal__beertype {\n    min-height: 72px;\n  }\n  .filter {\n    font-size: 18px;\n    padding: 12px;\n  }\n  .filter__input {\n    padding: 0 12px;\n  }\n  .filter__input svg {\n    width: 18px;\n    height: 18px;\n  }\n  .filter__select {\n    font-size: 15px;\n    padding: 4px;\n  }\n  .modal__left {\n    width: 400px;\n  }\n  .header__info {\n    flex-direction: column;\n  }\n  .header__item {\n    padding-right: 0;\n    max-width: 100%;\n  }\n  .header__item:first-child {\n    margin-bottom: 18px;\n  }\n  .header__item:last-child {\n    border-left: none;\n    padding-left: 0;\n    max-width: 100%;\n  }\n  .categories__item {\n    padding: 10px;\n  }\n  .cat-card {\n    height: 250px;\n  }\n  .cat-card svg {\n    width: 33%;\n  }\n  .cat-card__bottom {\n    min-height: 68px;\n  }\n  .cat-card__bottom {\n    min-height: 63.4px;\n  }\n  .cat-card h2, .cat-card h3, .cat-card h4, .cat-card h5 {\n    font-size: 22px;\n  }\n}\n@media screen and (max-width: 992px){\n  .container--header {\n    max-width: 100%;\n  }\n  .container {\n    max-width: 720px;\n  }\n  .burger {\n    display: block;\n  }\n  .logo {\n    max-width: 120px;\n  }\n  .card__img {\n    height: 280px;\n  }\n  .filter__sort {\n    width: 50%;\n    padding-right: 12px;\n  }\n  .filter__input {\n    display: none;\n  }\n  .filter__filter {\n    width: 50%;\n    justify-content: flex-end;\n  }\n  .modal {\n    flex-direction: column;\n    max-height: 90vh;\n  }\n  .modal__left {\n    width: 100%;\n    border-radius: 0;\n    min-height: 360px;\n    height: 360px;\n    margin: 0 auto;\n  }\n  .modal__img {\n    padding: 20px 0 0 0;\n  }\n  .modal__img img {\n    object-fit: contain;\n  }\n  .modal__right {\n    width: 100%;\n  }\n  .header__inner {\n    font-size: 20px;\n  }\n  .header__info {\n    max-width: calc(78% - 120px);\n  }\n  .header__icon {\n    height: 22px;\n  }\n  .header__time {\n    max-width: 22%;\n  }\n  .categories {\n    max-width: 90%;\n    margin: 0 auto;\n  }\n  .cat-card {\n    height: 220px;\n  }\n  .cat-card h2, .cat-card h3, .cat-card h4, .cat-card h5 {\n    font-size: 20px;\n  }\n  .main__col {\n    width: 50%;\n  }\n  .main__col:not(:nth-child(-n+2)) {\n    margin-top: 20px;\n  }\n}\n@media screen and (max-width: 768px){\n  .container--header {\n    max-width: 100%;\n  }\n  .container {\n    max-width: 540px;\n  }\n  .mx-sm-auto {\n    margin-left: auto;\n    margin-right: auto;\n  }\n  main {\n    padding: 30px 0;\n  }\n  .logo {\n    max-width: 100px;\n  }\n  .section {\n    padding: 14px 0;\n  }\n  .section__title {\n    font-size: 40px;\n  }\n  .card__img {\n    height: 200px;\n  }\n  .filter {\n    flex-direction: column-reverse;\n    align-items: flex-start;\n  }\n  .filter__sort {\n    width: 100%;\n  }\n  .filter__filter {\n    width: 100%;\n    padding-left: 0;\n    margin-bottom: 14px;\n    justify-content: flex-start;\n  }\n  .filter__select {\n    padding: 2px 4px;\n  }\n  .modal__img {\n    padding: 10px 0 0 0;\n  }\n  .header__inner {\n    font-size: 18px;\n  }\n  .header__info {\n    max-width: calc(78% - 100px);\n    align-items: start;\n    padding: 0 8px;\n  }\n  .header__icon {\n    height: 20px;\n  }\n  .header__item:first-child {\n    margin-bottom: 12px;\n  }\n  .categories {\n    max-width: 100%;\n  }\n  .categories__item {\n    width: 100%;\n  }\n  .cat-card {\n    margin: 0 auto;\n  }\n  .cat-card {\n    flex-direction: row;\n    align-items: center;\n    max-width: 90%;\n    width: 80%;\n    height: 100px;\n  }\n  .cat-card svg {\n    height: 75%;\n    width: 20%;\n    margin: 0 14px;\n  }\n  .cat-card__bottom {\n    padding-left: 0;\n    min-height: 0;\n    background: none;\n  }\n  .cat-card h2, .cat-card h3, .cat-card h4, .cat-card h5 {\n    text-align: left;\n  }\n}\n@media screen and (max-width: 576px){\n  .container--header {\n    max-width: 100%;\n    padding: 0 10px;\n  }\n  .container {\n    max-width: 100%;\n    padding: 0 10px;\n  }\n  .container-fluid {\n    padding: 0 10px;\n  }\n  .row {\n    margin-right: -10px;\n    margin-left: -10px;\n  }\n  .section__title {\n    font-size: 36px;\n  }\n  .card {\n    max-width: 360px;\n  }\n  .card__img {\n    height: 240px;\n  }\n  .filter {\n    font-size: 16px;\n    padding: 8px;\n  }\n  .filter__select {\n    padding: 1px 2px;\n    margin-left: 4px;\n  }\n  .modal {\n    width: 90%;\n    max-width: 420px;\n  }\n  .modal__left {\n    min-height: 460px;\n    height: 460px;\n  }\n  .modal__img {\n    padding: 0;\n  }\n  .modal__img img {\n    object-fit: cover;\n  }\n  .modal__right {\n    padding: 14px 10px;\n  }\n  .modal__title {\n    font-size: 30px;\n  }\n  .modal__beertype {\n    font-size: 18px;\n  }\n  .modal__test-title {\n    font-size: 16px;\n  }\n  .modal__test-value {\n    font-size: 18px;\n  }\n  .header__info {\n    max-width: 100%;\n    padding-right: 0;\n  }\n  .header__time {\n    display: none;\n  }\n  .cat-card {\n    max-width: 100%;\n    width: 100%;\n  }\n  .main__col {\n    width: 100%;\n  }\n  .main__col:not(:nth-child(-n+1)) {\n    margin-top: 20px;\n  }\n  .footer .container {\n    justify-content: center;\n  }\n  .footer__item {\n    display: none;\n  }\n}\n@media screen and (max-width: 1440px){\n  .container {\n    max-width: 1230px;\n  }\n  .filter__sort {\n    padding-right: 12px;\n  }\n  .filter__input input {\n    font-size: 18px;\n    padding-bottom: 2px;\n    margin-left: 8px;\n  }\n}\n@media (max-width: 1200px){\n  .col-lg {\n    flex-basis: 0;\n    flex-grow: 1;\n    max-width: 100%;\n  }\n  .col-lg-auto {\n    flex: 0 0 auto;\n    width: auto;\n    max-width: none;\n  }\n  .col-lg-1 {\n    flex: 0 0 8.333333%;\n    max-width: 8.333333%;\n  }\n  .col-lg-2 {\n    flex: 0 0 16.666667%;\n    max-width: 16.666667%;\n  }\n  .col-lg-3 {\n    flex: 0 0 25%;\n    max-width: 25%;\n  }\n  .col-lg-4 {\n    flex: 0 0 33.333333%;\n    max-width: 33.333333%;\n  }\n  .col-lg-5 {\n    flex: 0 0 41.666667%;\n    max-width: 41.666667%;\n  }\n  .col-lg-6 {\n    flex: 0 0 50%;\n    max-width: 50%;\n  }\n  .col-lg-7 {\n    flex: 0 0 58.333333%;\n    max-width: 58.333333%;\n  }\n  .col-lg-8 {\n    flex: 0 0 66.666667%;\n    max-width: 66.666667%;\n  }\n  .col-lg-9 {\n    flex: 0 0 75%;\n    max-width: 75%;\n  }\n  .col-lg-10 {\n    flex: 0 0 83.333333%;\n    max-width: 83.333333%;\n  }\n  .col-lg-11 {\n    flex: 0 0 91.666667%;\n    max-width: 91.666667%;\n  }\n  .col-lg-12 {\n    flex: 0 0 100%;\n    max-width: 100%;\n  }\n  .order-lg-first {\n    order: -1;\n  }\n  .order-lg-last {\n    order: 13;\n  }\n  .order-lg-0 {\n    order: 0;\n  }\n  .order-lg-1 {\n    order: 1;\n  }\n  .order-lg-2 {\n    order: 2;\n  }\n  .order-lg-3 {\n    order: 3;\n  }\n  .order-lg-4 {\n    order: 4;\n  }\n  .order-lg-5 {\n    order: 5;\n  }\n  .order-lg-6 {\n    order: 6;\n  }\n  .order-lg-7 {\n    order: 7;\n  }\n  .order-lg-8 {\n    order: 8;\n  }\n  .order-lg-9 {\n    order: 9;\n  }\n  .order-lg-10 {\n    order: 10;\n  }\n  .order-lg-11 {\n    order: 11;\n  }\n  .order-lg-12 {\n    order: 12;\n  }\n  .offset-lg-1 {\n    margin-left: 8.33333%;\n  }\n  .offset-lg-2 {\n    margin-left: 16.66667%;\n  }\n  .offset-lg-3 {\n    margin-left: 25%;\n  }\n  .offset-lg-4 {\n    margin-left: 33.33333%;\n  }\n  .offset-lg-5 {\n    margin-left: 41.66667%;\n  }\n  .offset-lg-6 {\n    margin-left: 50%;\n  }\n  .offset-lg-7 {\n    margin-left: 58.33333%;\n  }\n  .offset-lg-8 {\n    margin-left: 66.66667%;\n  }\n  .offset-lg-9 {\n    margin-left: 75%;\n  }\n  .offset-lg-10 {\n    margin-left: 83.33333%;\n  }\n  .offset-lg-11 {\n    margin-left: 91.66667%;\n  }\n}\n@media (max-width: 992px){\n  .col-md {\n    flex-basis: 0;\n    flex-grow: 1;\n    max-width: 100%;\n  }\n  .col-md-auto {\n    flex: 0 0 auto;\n    width: auto;\n    max-width: none;\n  }\n  .col-md-1 {\n    flex: 0 0 8.333333%;\n    max-width: 8.333333%;\n  }\n  .col-md-2 {\n    flex: 0 0 16.666667%;\n    max-width: 16.666667%;\n  }\n  .col-md-3 {\n    flex: 0 0 25%;\n    max-width: 25%;\n  }\n  .col-md-4 {\n    flex: 0 0 33.333333%;\n    max-width: 33.333333%;\n  }\n  .col-md-5 {\n    flex: 0 0 41.666667%;\n    max-width: 41.666667%;\n  }\n  .col-md-6 {\n    flex: 0 0 50%;\n    max-width: 50%;\n  }\n  .col-md-7 {\n    flex: 0 0 58.333333%;\n    max-width: 58.333333%;\n  }\n  .col-md-8 {\n    flex: 0 0 66.666667%;\n    max-width: 66.666667%;\n  }\n  .col-md-9 {\n    flex: 0 0 75%;\n    max-width: 75%;\n  }\n  .col-md-10 {\n    flex: 0 0 83.333333%;\n    max-width: 83.333333%;\n  }\n  .col-md-11 {\n    flex: 0 0 91.666667%;\n    max-width: 91.666667%;\n  }\n  .col-md-12 {\n    flex: 0 0 100%;\n    max-width: 100%;\n  }\n  .order-md-first {\n    order: -1;\n  }\n  .order-md-last {\n    order: 13;\n  }\n  .order-md-0 {\n    order: 0;\n  }\n  .order-md-1 {\n    order: 1;\n  }\n  .order-md-2 {\n    order: 2;\n  }\n  .order-md-3 {\n    order: 3;\n  }\n  .order-md-4 {\n    order: 4;\n  }\n  .order-md-5 {\n    order: 5;\n  }\n  .order-md-6 {\n    order: 6;\n  }\n  .order-md-7 {\n    order: 7;\n  }\n  .order-md-8 {\n    order: 8;\n  }\n  .order-md-9 {\n    order: 9;\n  }\n  .order-md-10 {\n    order: 10;\n  }\n  .order-md-11 {\n    order: 11;\n  }\n  .order-md-12 {\n    order: 12;\n  }\n  .offset-md-1 {\n    margin-left: 8.33333%;\n  }\n  .offset-md-2 {\n    margin-left: 16.66667%;\n  }\n  .offset-md-3 {\n    margin-left: 25%;\n  }\n  .offset-md-4 {\n    margin-left: 33.33333%;\n  }\n  .offset-md-5 {\n    margin-left: 41.66667%;\n  }\n  .offset-md-6 {\n    margin-left: 50%;\n  }\n  .offset-md-7 {\n    margin-left: 58.33333%;\n  }\n  .offset-md-8 {\n    margin-left: 66.66667%;\n  }\n  .offset-md-9 {\n    margin-left: 75%;\n  }\n  .offset-md-10 {\n    margin-left: 83.33333%;\n  }\n  .offset-md-11 {\n    margin-left: 91.66667%;\n  }\n  .m-md-0 {\n    margin: 0 !important;\n  }\n  .mt-md-0,\n  .my-md-0 {\n    margin-top: 0 !important;\n  }\n  .mr-md-0,\n  .mx-md-0 {\n    margin-right: 0 !important;\n  }\n  .mb-md-0,\n  .my-md-0 {\n    margin-bottom: 0 !important;\n  }\n  .ml-md-0,\n  .mx-md-0 {\n    margin-left: 0 !important;\n  }\n  .m-md-1 {\n    margin: 0.25rem !important;\n  }\n  .mt-md-1,\n  .my-md-1 {\n    margin-top: 0.25rem !important;\n  }\n  .mr-md-1,\n  .mx-md-1 {\n    margin-right: 0.25rem !important;\n  }\n  .mb-md-1,\n  .my-md-1 {\n    margin-bottom: 0.25rem !important;\n  }\n  .ml-md-1,\n  .mx-md-1 {\n    margin-left: 0.25rem !important;\n  }\n  .m-md-2 {\n    margin: 0.5rem !important;\n  }\n  .mt-md-2,\n  .my-md-2 {\n    margin-top: 0.5rem !important;\n  }\n  .mr-md-2,\n  .mx-md-2 {\n    margin-right: 0.5rem !important;\n  }\n  .mb-md-2,\n  .my-md-2 {\n    margin-bottom: 0.5rem !important;\n  }\n  .ml-md-2,\n  .mx-md-2 {\n    margin-left: 0.5rem !important;\n  }\n  .m-md-3 {\n    margin: 1rem !important;\n  }\n  .mt-md-3,\n  .my-md-3 {\n    margin-top: 1rem !important;\n  }\n  .mr-md-3,\n  .mx-md-3 {\n    margin-right: 1rem !important;\n  }\n  .mb-md-3,\n  .my-md-3 {\n    margin-bottom: 1rem !important;\n  }\n  .ml-md-3,\n  .mx-md-3 {\n    margin-left: 1rem !important;\n  }\n  .m-md-4 {\n    margin: 1.5rem !important;\n  }\n  .mt-md-4,\n  .my-md-4 {\n    margin-top: 1.5rem !important;\n  }\n  .mr-md-4,\n  .mx-md-4 {\n    margin-right: 1.5rem !important;\n  }\n  .mb-md-4,\n  .my-md-4 {\n    margin-bottom: 1.5rem !important;\n  }\n  .ml-md-4,\n  .mx-md-4 {\n    margin-left: 1.5rem !important;\n  }\n  .m-md-5 {\n    margin: 3rem !important;\n  }\n  .mt-md-5,\n  .my-md-5 {\n    margin-top: 3rem !important;\n  }\n  .mr-md-5,\n  .mx-md-5 {\n    margin-right: 3rem !important;\n  }\n  .mb-md-5,\n  .my-md-5 {\n    margin-bottom: 3rem !important;\n  }\n  .ml-md-5,\n  .mx-md-5 {\n    margin-left: 3rem !important;\n  }\n}\n@media (max-width: 768px){\n  .col-sm {\n    flex-basis: 0;\n    flex-grow: 1;\n    max-width: 100%;\n  }\n  .col-sm-auto {\n    flex: 0 0 auto;\n    width: auto;\n    max-width: none;\n  }\n  .col-sm-1 {\n    flex: 0 0 8.333333%;\n    max-width: 8.333333%;\n  }\n  .col-sm-2 {\n    flex: 0 0 16.666667%;\n    max-width: 16.666667%;\n  }\n  .col-sm-3 {\n    flex: 0 0 25%;\n    max-width: 25%;\n  }\n  .col-sm-4 {\n    flex: 0 0 33.333333%;\n    max-width: 33.333333%;\n  }\n  .col-sm-5 {\n    flex: 0 0 41.666667%;\n    max-width: 41.666667%;\n  }\n  .col-sm-6 {\n    flex: 0 0 50%;\n    max-width: 50%;\n  }\n  .col-sm-7 {\n    flex: 0 0 58.333333%;\n    max-width: 58.333333%;\n  }\n  .col-sm-8 {\n    flex: 0 0 66.666667%;\n    max-width: 66.666667%;\n  }\n  .col-sm-9 {\n    flex: 0 0 75%;\n    max-width: 75%;\n  }\n  .col-sm-10 {\n    flex: 0 0 83.333333%;\n    max-width: 83.333333%;\n  }\n  .col-sm-11 {\n    flex: 0 0 91.666667%;\n    max-width: 91.666667%;\n  }\n  .col-sm-12 {\n    flex: 0 0 100%;\n    max-width: 100%;\n  }\n  .order-sm-first {\n    order: -1;\n  }\n  .order-sm-last {\n    order: 13;\n  }\n  .order-sm-0 {\n    order: 0;\n  }\n  .order-sm-1 {\n    order: 1;\n  }\n  .order-sm-2 {\n    order: 2;\n  }\n  .order-sm-3 {\n    order: 3;\n  }\n  .order-sm-4 {\n    order: 4;\n  }\n  .order-sm-5 {\n    order: 5;\n  }\n  .order-sm-6 {\n    order: 6;\n  }\n  .order-sm-7 {\n    order: 7;\n  }\n  .order-sm-8 {\n    order: 8;\n  }\n  .order-sm-9 {\n    order: 9;\n  }\n  .order-sm-10 {\n    order: 10;\n  }\n  .order-sm-11 {\n    order: 11;\n  }\n  .order-sm-12 {\n    order: 12;\n  }\n  .offset-sm-0 {\n    margin-left: 0;\n  }\n  .offset-sm-1 {\n    margin-left: 8.33333%;\n  }\n  .offset-sm-2 {\n    margin-left: 16.66667%;\n  }\n  .offset-sm-3 {\n    margin-left: 25%;\n  }\n  .offset-sm-4 {\n    margin-left: 33.33333%;\n  }\n  .offset-sm-5 {\n    margin-left: 41.66667%;\n  }\n  .offset-sm-6 {\n    margin-left: 50%;\n  }\n  .offset-sm-7 {\n    margin-left: 58.33333%;\n  }\n  .offset-sm-8 {\n    margin-left: 66.66667%;\n  }\n  .offset-sm-9 {\n    margin-left: 75%;\n  }\n  .offset-sm-10 {\n    margin-left: 83.33333%;\n  }\n  .offset-sm-11 {\n    margin-left: 91.66667%;\n  }\n  .m-sm-0 {\n    margin: 0 !important;\n  }\n  .mt-sm-0,\n  .my-sm-0 {\n    margin-top: 0 !important;\n  }\n  .mr-sm-0,\n  .mx-sm-0 {\n    margin-right: 0 !important;\n  }\n  .mb-sm-0,\n  .my-sm-0 {\n    margin-bottom: 0 !important;\n  }\n  .ml-sm-0,\n  .mx-sm-0 {\n    margin-left: 0 !important;\n  }\n  .m-sm-1 {\n    margin: 0.25rem !important;\n  }\n  .mt-1,\n  .my-1 {\n    margin-top: 0.25rem !important;\n  }\n  .mr-sm-1,\n  .mx-sm-1 {\n    margin-right: 0.25rem !important;\n  }\n  .mb-sm-1,\n  .my-sm-1 {\n    margin-bottom: 0.25rem !important;\n  }\n  .ml-sm-1,\n  .mx-sm-1 {\n    margin-left: 0.25rem !important;\n  }\n  .m-sm-2 {\n    margin: 0.5rem !important;\n  }\n  .mt-sm-2,\n  .my-sm-2 {\n    margin-top: 0.5rem !important;\n  }\n  .mr-2,\n  .mx-2 {\n    margin-right: 0.5rem !important;\n  }\n  .mb-sm-2,\n  .my-sm-2 {\n    margin-bottom: 0.5rem !important;\n  }\n  .ml-sm-2,\n  .mx-sm-2 {\n    margin-left: 0.5rem !important;\n  }\n  .m-sm-3 {\n    margin: 1rem !important;\n  }\n  .mt-sm-3,\n  .my-sm-3 {\n    margin-top: 1rem !important;\n  }\n  .mr-sm-3,\n  .mx-sm-3 {\n    margin-right: 1rem !important;\n  }\n  .mb-sm-3,\n  .my-sm-3 {\n    margin-bottom: 1rem !important;\n  }\n  .ml-sm-3,\n  .mx-sm-3 {\n    margin-left: 1rem !important;\n  }\n  .m-sm-4 {\n    margin: 1.5rem !important;\n  }\n  .mt-sm-4,\n  .my-sm-4 {\n    margin-top: 1.5rem !important;\n  }\n  .mr-sm-4,\n  .mx-sm-4 {\n    margin-right: 1.5rem !important;\n  }\n  .mb-sm-4,\n  .my-sm-4 {\n    margin-bottom: 1.5rem !important;\n  }\n  .ml-sm-4,\n  .mx-sm-4 {\n    margin-left: 1.5rem !important;\n  }\n  .m-sm-5 {\n    margin: 3rem !important;\n  }\n  .mt-sm-5,\n  .my-sm-5 {\n    margin-top: 3rem !important;\n  }\n  .mr-sm-5,\n  .mx-sm-5 {\n    margin-right: 3rem !important;\n  }\n  .mb-sm-5,\n  .my-sm-5 {\n    margin-bottom: 3rem !important;\n  }\n  .ml-sm-5,\n  .mx-sm-5 {\n    margin-left: 3rem !important;\n  }\n}\n@media (max-width: 576px){\n  .col-xs {\n    flex-basis: 0;\n    flex-grow: 1;\n    max-width: 100%;\n  }\n  .col-xs-auto {\n    flex: 0 0 auto;\n    width: auto;\n    max-width: none;\n  }\n  .col-xs-1 {\n    flex: 0 0 8.333333%;\n    max-width: 8.333333%;\n  }\n  .col-xs-2 {\n    flex: 0 0 16.666667%;\n    max-width: 16.666667%;\n  }\n  .col-xs-3 {\n    flex: 0 0 25%;\n    max-width: 25%;\n  }\n  .col-xs-4 {\n    flex: 0 0 33.333333%;\n    max-width: 33.333333%;\n  }\n  .col-xs-5 {\n    flex: 0 0 41.666667%;\n    max-width: 41.666667%;\n  }\n  .col-xs-6 {\n    flex: 0 0 50%;\n    max-width: 50%;\n  }\n  .col-xs-7 {\n    flex: 0 0 58.333333%;\n    max-width: 58.333333%;\n  }\n  .col-xs-8 {\n    flex: 0 0 66.666667%;\n    max-width: 66.666667%;\n  }\n  .col-xs-9 {\n    flex: 0 0 75%;\n    max-width: 75%;\n  }\n  .col-xs-10 {\n    flex: 0 0 83.333333%;\n    max-width: 83.333333%;\n  }\n  .col-xs-11 {\n    flex: 0 0 91.666667%;\n    max-width: 91.666667%;\n  }\n  .col-xs-12 {\n    flex: 0 0 100%;\n    max-width: 100%;\n  }\n  .pr-xs-0 {\n    padding-right: 0 !important;\n  }\n  .pr-xs-1 {\n    padding-right: 0.25rem !important;\n  }\n  .order-xs-first {\n    order: -1;\n  }\n  .order-xs-last {\n    order: 13;\n  }\n  .order-xs-0 {\n    order: 0;\n  }\n  .order-xs-1 {\n    order: 1;\n  }\n  .order-xs-2 {\n    order: 2;\n  }\n  .order-xs-3 {\n    order: 3;\n  }\n  .order-xs-4 {\n    order: 4;\n  }\n  .order-xs-5 {\n    order: 5;\n  }\n  .order-xs-6 {\n    order: 6;\n  }\n  .order-xs-7 {\n    order: 7;\n  }\n  .order-xs-8 {\n    order: 8;\n  }\n  .order-xs-9 {\n    order: 9;\n  }\n  .order-xs-10 {\n    order: 10;\n  }\n  .order-xs-11 {\n    order: 11;\n  }\n  .order-xs-12 {\n    order: 12;\n  }\n  .offset-xs-0 {\n    margin-left: 0;\n  }\n  .offset-xs-1 {\n    margin-left: 8.33333%;\n  }\n  .offset-xs-2 {\n    margin-left: 16.66667%;\n  }\n  .offset-xs-3 {\n    margin-left: 25%;\n  }\n  .offset-xs-4 {\n    margin-left: 33.33333%;\n  }\n  .offset-xs-5 {\n    margin-left: 41.66667%;\n  }\n  .offset-xs-6 {\n    margin-left: 50%;\n  }\n  .offset-xs-7 {\n    margin-left: 58.33333%;\n  }\n  .offset-xs-8 {\n    margin-left: 66.66667%;\n  }\n  .offset-xs-9 {\n    margin-left: 75%;\n  }\n  .offset-xs-10 {\n    margin-left: 83.33333%;\n  }\n  .offset-xs-11 {\n    margin-left: 91.66667%;\n  }\n  .mb-xs-3,\n  .my-xs-3 {\n    margin-bottom: 1rem !important;\n  }\n  .mb-xs-2,\n  .my-xs-2 {\n    margin-bottom: 0.5rem !important;\n  }\n  .mb-xs-1,\n  .my-xs-1 {\n    margin-bottom: 0.25rem !important;\n  }\n  .mt-xs-0 {\n    margin-top: 0 !important;\n  }\n}", "",{"version":3,"sources":["webpack://./src/scss/style.scss","webpack://./src/scss/_mixins.scss","webpack://./src/scss/_reset.scss","webpack://./src/scss/_grid.scss","webpack://./src/scss/_base.scss","webpack://./src/scss/_vars.scss","webpack://./src/scss/default-elements/_burger.scss","webpack://./src/scss/default-elements/_js-tab-content.scss","webpack://./src/scss/default-elements/_logo.scss","webpack://./src/scss/default-elements/_to-top.scss","webpack://./src/scss/default-elements/_section.scss","webpack://./src/scss/default-elements/_card.scss","webpack://./src/scss/default-elements/_filter.scss","webpack://./src/scss/default-elements/_modal.scss","webpack://./src/scss/default-elements/_btn.scss","webpack://./src/scss/header/_header.scss","webpack://./src/scss/categories/_categories.scss","webpack://./src/scss/default-elements/_cat-card.scss","webpack://./src/scss/main/_main.scss","webpack://./src/scss/footer/_footer.scss","webpack://./<no source>"],"names":[],"mappings":"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","sourcesContent":["@charset \"UTF-8\";\n.bg-radial, .cat-card {\n  border-radius: 16px;\n  backdrop-filter: blur(15px) saturate(86%);\n  background: radial-gradient(circle at 100% 0, hsla(0, 0%, 100%, 0.6) 0, hsla(0, 0%, 96.1%, 0.13) 183%);\n}\n\n.flex-items-center, .footer__item, .header__time, .header__item {\n  display: flex;\n  align-items: center;\n}\n\n.text-nowrap, .header__item:first-child span {\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n\n/* http://meyerweb.com/eric/tools/css/reset/\n   v2.0 | 20110126\n   License: none (public domain)\n*/\nhtml, body, div, span, applet, object, iframe,\nh1, h2, h3, h4, h5, h6, p, blockquote, pre,\na, abbr, acronym, address, big, cite, code,\ndel, dfn, em, img, ins, kbd, q, s, samp,\nsmall, strike, strong, sub, sup, tt, var,\nb, u, i, center,\ndl, dt, dd, ol, ul, li,\nfieldset, form, label, legend,\ntable, caption, tbody, tfoot, thead, tr, th, td,\narticle, aside, canvas, details, embed,\nfigure, figcaption, footer, header, hgroup,\nmenu, nav, output, ruby, section, summary,\ntime, mark, audio, video {\n  margin: 0;\n  padding: 0;\n  border: 0;\n  outline: none;\n  font-size: 100%;\n  font: inherit;\n  vertical-align: baseline;\n}\n\n/* HTML5 display-role reset for older browsers */\narticle, aside, details, figcaption, figure,\nfooter, header, hgroup, menu, nav, section {\n  display: block;\n}\n\n*, *::before, *::after {\n  box-sizing: border-box;\n}\n\na {\n  color: inherit;\n  text-decoration: none;\n  cursor: pointer;\n  display: inline-block;\n}\n\nimg {\n  max-width: 100%;\n  height: auto;\n}\n\nol, ul {\n  list-style: none;\n}\n\nblockquote, q {\n  quotes: none;\n}\n\nblockquote:before, blockquote:after,\nq:before, q:after {\n  content: \"\";\n}\n\ninput, textarea, button {\n  outline: none;\n  border: none;\n}\n\ntextarea {\n  resize: vertical;\n}\n\nbutton {\n  cursor: pointer;\n}\n\ntable {\n  border-collapse: collapse;\n  border-spacing: 0;\n}\n\n.container {\n  padding: 0 15px;\n  max-width: 1470px;\n  margin: 0 auto;\n}\n.container--header {\n  max-width: 1430px;\n  padding: 0 15px;\n  margin: 0 auto;\n}\n@media screen and (max-width: 1200px) {\n  .container--header {\n    max-width: 100%;\n  }\n}\n@media screen and (max-width: 992px) {\n  .container--header {\n    max-width: 100%;\n  }\n}\n@media screen and (max-width: 768px) {\n  .container--header {\n    max-width: 100%;\n  }\n}\n@media screen and (max-width: 576px) {\n  .container--header {\n    max-width: 100%;\n    padding: 0 10px;\n  }\n}\n@media screen and (max-width: 1440px) {\n  .container {\n    max-width: 1230px;\n  }\n}\n@media screen and (max-width: 1200px) {\n  .container {\n    max-width: 960px;\n  }\n}\n@media screen and (max-width: 992px) {\n  .container {\n    max-width: 720px;\n  }\n}\n@media screen and (max-width: 768px) {\n  .container {\n    max-width: 540px;\n  }\n}\n@media screen and (max-width: 576px) {\n  .container {\n    max-width: 100%;\n    padding: 0 10px;\n  }\n}\n\n.container-fluid {\n  width: 100%;\n  padding: 0 15px;\n}\n@media screen and (max-width: 576px) {\n  .container-fluid {\n    padding: 0 10px;\n  }\n}\n\n.row {\n  display: flex;\n  flex-wrap: wrap;\n  margin-right: -15px;\n  margin-left: -15px;\n}\n@media screen and (max-width: 576px) {\n  .row {\n    margin-right: -10px;\n    margin-left: -10px;\n  }\n}\n\n.no-gutters {\n  margin-right: 0;\n  margin-left: 0;\n}\n\n.no-gutters > .col,\n.no-gutters > [class*=col-] {\n  padding-right: 0;\n  padding-left: 0;\n}\n\n.col-1, .col-2, .col-3, .col-4, .col-5, .col-6, .col-7, .col-8, .col-9, .col-10, .col-11, .col-12, .col,\n.col-auto, .col-sm-1, .col-sm-2, .col-sm-3, .col-sm-4, .col-sm-5, .col-sm-6, .col-sm-7, .col-sm-8, .col-sm-9, .col-sm-10, .col-sm-11, .col-sm-12, .col-sm,\n.col-sm-auto, .col-md-1, .col-md-2, .col-md-3, .col-md-4, .col-md-5, .col-md-6, .col-md-7, .col-md-8, .col-md-9, .col-md-10, .col-md-11, .col-md-12, .col-md,\n.col-md-auto, .col-lg-1, .col-lg-2, .col-lg-3, .col-lg-4, .col-lg-5, .col-lg-6, .col-lg-7, .col-lg-8, .col-lg-9, .col-lg-10, .col-lg-11, .col-lg-12, .col-lg,\n.col-lg-auto, .col-xs-1, .col-xs-2, .col-xs-3, .col-xs-4, .col-xs-5, .col-xs-6, .col-xs-7, .col-xs-8, .col-xs-9, .col-xs-10, .col-xs-11, .col-xs-12, .col-xs,\n.col-xs-auto {\n  width: 100%;\n  max-width: 100%;\n  min-height: 1px;\n  flex-shrink: 0;\n  padding-right: 15px;\n  padding-left: 15px;\n}\n\n.col {\n  flex-basis: 0;\n  flex-grow: 1;\n  max-width: 100%;\n}\n\n.col-auto {\n  flex: 0 0 auto;\n  width: auto;\n  max-width: none;\n}\n\n.col-1 {\n  flex: 0 0 8.333333%;\n  max-width: 8.333333%;\n}\n\n.col-2 {\n  flex: 0 0 16.666667%;\n  max-width: 16.666667%;\n}\n\n.col-3 {\n  flex: 0 0 25%;\n  max-width: 25%;\n}\n\n.col-4 {\n  flex: 0 0 33.333333%;\n  max-width: 33.333333%;\n}\n\n.col-5 {\n  flex: 0 0 41.666667%;\n  max-width: 41.666667%;\n}\n\n.col-6 {\n  flex: 0 0 50%;\n  max-width: 50%;\n}\n\n.col-7 {\n  flex: 0 0 58.333333%;\n  max-width: 58.333333%;\n}\n\n.col-8 {\n  flex: 0 0 66.666667%;\n  max-width: 66.666667%;\n}\n\n.col-9 {\n  flex: 0 0 75%;\n  max-width: 75%;\n}\n\n.col-10 {\n  flex: 0 0 83.333333%;\n  max-width: 83.333333%;\n}\n\n.col-11 {\n  flex: 0 0 91.666667%;\n  max-width: 91.666667%;\n}\n\n.col-12 {\n  flex: 0 0 100%;\n  max-width: 100%;\n}\n\n.order-first {\n  order: -1;\n}\n\n.order-last {\n  order: 13;\n}\n\n.order-0 {\n  order: 0;\n}\n\n.order-1 {\n  order: 1;\n}\n\n.order-2 {\n  order: 2;\n}\n\n.order-3 {\n  order: 3;\n}\n\n.order-4 {\n  order: 4;\n}\n\n.order-5 {\n  order: 5;\n}\n\n.order-6 {\n  order: 6;\n}\n\n.order-7 {\n  order: 7;\n}\n\n.order-8 {\n  order: 8;\n}\n\n.order-9 {\n  order: 9;\n}\n\n.order-10 {\n  order: 10;\n}\n\n.order-11 {\n  order: 11;\n}\n\n.order-12 {\n  order: 12;\n}\n\n.offset-1 {\n  margin-left: 8.33333%;\n}\n\n.offset-2 {\n  margin-left: 16.66667%;\n}\n\n.offset-3 {\n  margin-left: 25%;\n}\n\n.offset-4 {\n  margin-left: 33.33333%;\n}\n\n.offset-5 {\n  margin-left: 41.66667%;\n}\n\n.offset-6 {\n  margin-left: 50%;\n}\n\n.offset-7 {\n  margin-left: 58.33333%;\n}\n\n.offset-8 {\n  margin-left: 66.66667%;\n}\n\n.offset-9 {\n  margin-left: 75%;\n}\n\n.offset-10 {\n  margin-left: 83.33333%;\n}\n\n.offset-11 {\n  margin-left: 91.66667%;\n}\n\n.m-0 {\n  margin: 0 !important;\n}\n\n.mt-0,\n.my-0 {\n  margin-top: 0 !important;\n}\n\n.mr-0,\n.mx-0 {\n  margin-right: 0 !important;\n}\n\n.mb-0,\n.my-0 {\n  margin-bottom: 0 !important;\n}\n\n.ml-0,\n.mx-0 {\n  margin-left: 0 !important;\n}\n\n.m-1 {\n  margin: 0.25rem !important;\n}\n\n.mt-1,\n.my-1 {\n  margin-top: 0.25rem !important;\n}\n\n.mr-1,\n.mx-1 {\n  margin-right: 0.25rem !important;\n}\n\n.mb-1,\n.my-1 {\n  margin-bottom: 0.25rem !important;\n}\n\n.ml-1,\n.mx-1 {\n  margin-left: 0.25rem !important;\n}\n\n.m-2 {\n  margin: 0.5rem !important;\n}\n\n.mt-2,\n.my-2 {\n  margin-top: 0.5rem !important;\n}\n\n.mr-2,\n.mx-2 {\n  margin-right: 0.5rem !important;\n}\n\n.mb-2,\n.my-2 {\n  margin-bottom: 0.5rem !important;\n}\n\n.ml-2,\n.mx-2 {\n  margin-left: 0.5rem !important;\n}\n\n.m-3 {\n  margin: 1rem !important;\n}\n\n.mt-3,\n.my-3 {\n  margin-top: 1rem !important;\n}\n\n.mr-3,\n.mx-3 {\n  margin-right: 1rem !important;\n}\n\n.mb-3,\n.my-3 {\n  margin-bottom: 1rem !important;\n}\n\n.ml-3,\n.mx-3 {\n  margin-left: 1rem !important;\n}\n\n.m-4 {\n  margin: 1.5rem !important;\n}\n\n.mt-4,\n.my-4 {\n  margin-top: 1.5rem !important;\n}\n\n.mr-4,\n.mx-4 {\n  margin-right: 1.5rem !important;\n}\n\n.mb-4,\n.my-4 {\n  margin-bottom: 1.5rem !important;\n}\n\n.ml-4,\n.mx-4 {\n  margin-left: 1.5rem !important;\n}\n\n.m-5 {\n  margin: 3rem !important;\n}\n\n.mt-5,\n.my-5 {\n  margin-top: 3rem !important;\n}\n\n.mr-5,\n.mx-5 {\n  margin-right: 3rem !important;\n}\n\n.mb-5,\n.my-5 {\n  margin-bottom: 3rem !important;\n}\n\n.ml-5,\n.mx-5 {\n  margin-left: 3rem !important;\n}\n\n.mt-auto {\n  margin-top: auto;\n}\n\n.mb-auto {\n  margin-bottom: auto;\n}\n\n.ml-auto {\n  margin-left: auto;\n}\n\n.mr-auto {\n  margin-right: auto;\n}\n\n.mx-auto {\n  margin-left: auto;\n  margin-right: auto;\n}\n\n.my-auto {\n  margin-top: auto;\n  margin-bottom: auto;\n}\n\n@media screen and (max-width: 768px) {\n  .mx-sm-auto {\n    margin-left: auto;\n    margin-right: auto;\n  }\n}\n.p-0 {\n  padding: 0 !important;\n}\n\n.pt-0,\n.py-0 {\n  padding-top: 0 !important;\n}\n\n.pr-0,\n.px-0 {\n  padding-right: 0 !important;\n}\n\n.pb-0,\n.py-0 {\n  padding-bottom: 0 !important;\n}\n\n.pl-0,\n.px-0 {\n  padding-left: 0 !important;\n}\n\n.p-1 {\n  padding: 0.25rem !important;\n}\n\n.pt-1,\n.py-1 {\n  padding-top: 0.25rem !important;\n}\n\n.pr-1,\n.px-1 {\n  padding-right: 0.25rem !important;\n}\n\n.pb-1,\n.py-1 {\n  padding-bottom: 0.25rem !important;\n}\n\n.pl-1,\n.px-1 {\n  padding-left: 0.25rem !important;\n}\n\n.p-2 {\n  padding: 0.5rem !important;\n}\n\n.pt-2,\n.py-2 {\n  padding-top: 0.5rem !important;\n}\n\n.pr-2,\n.px-2 {\n  padding-right: 0.5rem !important;\n}\n\n.pb-2,\n.py-2 {\n  padding-bottom: 0.5rem !important;\n}\n\n.pl-2,\n.px-2 {\n  padding-left: 0.5rem !important;\n}\n\n.p-3 {\n  padding: 1rem !important;\n}\n\n.pt-3,\n.py-3 {\n  padding-top: 1rem !important;\n}\n\n.pr-3,\n.px-3 {\n  padding-right: 1rem !important;\n}\n\n.pb-3,\n.py-3 {\n  padding-bottom: 1rem !important;\n}\n\n.pl-3,\n.px-3 {\n  padding-left: 1rem !important;\n}\n\n.p-4 {\n  padding: 1.5rem !important;\n}\n\n.pt-4,\n.py-4 {\n  padding-top: 1.5rem !important;\n}\n\n.pr-4,\n.px-4 {\n  padding-right: 1.5rem !important;\n}\n\n.pb-4,\n.py-4 {\n  padding-bottom: 1.5rem !important;\n}\n\n.pl-4,\n.px-4 {\n  padding-left: 1.5rem !important;\n}\n\n.p-5 {\n  padding: 3rem !important;\n}\n\n.pt-5,\n.py-5 {\n  padding-top: 3rem !important;\n}\n\n.pr-5,\n.px-5 {\n  padding-right: 3rem !important;\n}\n\n.pb-5,\n.py-5 {\n  padding-bottom: 3rem !important;\n}\n\n.pl-5,\n.px-5 {\n  padding-left: 3rem !important;\n}\n\n@media (max-width: 1200px) {\n  .col-lg {\n    flex-basis: 0;\n    flex-grow: 1;\n    max-width: 100%;\n  }\n  .col-lg-auto {\n    flex: 0 0 auto;\n    width: auto;\n    max-width: none;\n  }\n  .col-lg-1 {\n    flex: 0 0 8.333333%;\n    max-width: 8.333333%;\n  }\n  .col-lg-2 {\n    flex: 0 0 16.666667%;\n    max-width: 16.666667%;\n  }\n  .col-lg-3 {\n    flex: 0 0 25%;\n    max-width: 25%;\n  }\n  .col-lg-4 {\n    flex: 0 0 33.333333%;\n    max-width: 33.333333%;\n  }\n  .col-lg-5 {\n    flex: 0 0 41.666667%;\n    max-width: 41.666667%;\n  }\n  .col-lg-6 {\n    flex: 0 0 50%;\n    max-width: 50%;\n  }\n  .col-lg-7 {\n    flex: 0 0 58.333333%;\n    max-width: 58.333333%;\n  }\n  .col-lg-8 {\n    flex: 0 0 66.666667%;\n    max-width: 66.666667%;\n  }\n  .col-lg-9 {\n    flex: 0 0 75%;\n    max-width: 75%;\n  }\n  .col-lg-10 {\n    flex: 0 0 83.333333%;\n    max-width: 83.333333%;\n  }\n  .col-lg-11 {\n    flex: 0 0 91.666667%;\n    max-width: 91.666667%;\n  }\n  .col-lg-12 {\n    flex: 0 0 100%;\n    max-width: 100%;\n  }\n  .order-lg-first {\n    order: -1;\n  }\n  .order-lg-last {\n    order: 13;\n  }\n  .order-lg-0 {\n    order: 0;\n  }\n  .order-lg-1 {\n    order: 1;\n  }\n  .order-lg-2 {\n    order: 2;\n  }\n  .order-lg-3 {\n    order: 3;\n  }\n  .order-lg-4 {\n    order: 4;\n  }\n  .order-lg-5 {\n    order: 5;\n  }\n  .order-lg-6 {\n    order: 6;\n  }\n  .order-lg-7 {\n    order: 7;\n  }\n  .order-lg-8 {\n    order: 8;\n  }\n  .order-lg-9 {\n    order: 9;\n  }\n  .order-lg-10 {\n    order: 10;\n  }\n  .order-lg-11 {\n    order: 11;\n  }\n  .order-lg-12 {\n    order: 12;\n  }\n  .offset-lg-1 {\n    margin-left: 8.33333%;\n  }\n  .offset-lg-2 {\n    margin-left: 16.66667%;\n  }\n  .offset-lg-3 {\n    margin-left: 25%;\n  }\n  .offset-lg-4 {\n    margin-left: 33.33333%;\n  }\n  .offset-lg-5 {\n    margin-left: 41.66667%;\n  }\n  .offset-lg-6 {\n    margin-left: 50%;\n  }\n  .offset-lg-7 {\n    margin-left: 58.33333%;\n  }\n  .offset-lg-8 {\n    margin-left: 66.66667%;\n  }\n  .offset-lg-9 {\n    margin-left: 75%;\n  }\n  .offset-lg-10 {\n    margin-left: 83.33333%;\n  }\n  .offset-lg-11 {\n    margin-left: 91.66667%;\n  }\n}\n@media (max-width: 992px) {\n  .col-md {\n    flex-basis: 0;\n    -webkit-box-flex: 1;\n    flex-grow: 1;\n    max-width: 100%;\n  }\n  .col-md-auto {\n    flex: 0 0 auto;\n    width: auto;\n    max-width: none;\n  }\n  .col-md-1 {\n    flex: 0 0 8.333333%;\n    max-width: 8.333333%;\n  }\n  .col-md-2 {\n    flex: 0 0 16.666667%;\n    max-width: 16.666667%;\n  }\n  .col-md-3 {\n    flex: 0 0 25%;\n    max-width: 25%;\n  }\n  .col-md-4 {\n    flex: 0 0 33.333333%;\n    max-width: 33.333333%;\n  }\n  .col-md-5 {\n    flex: 0 0 41.666667%;\n    max-width: 41.666667%;\n  }\n  .col-md-6 {\n    flex: 0 0 50%;\n    max-width: 50%;\n  }\n  .col-md-7 {\n    flex: 0 0 58.333333%;\n    max-width: 58.333333%;\n  }\n  .col-md-8 {\n    flex: 0 0 66.666667%;\n    max-width: 66.666667%;\n  }\n  .col-md-9 {\n    flex: 0 0 75%;\n    max-width: 75%;\n  }\n  .col-md-10 {\n    flex: 0 0 83.333333%;\n    max-width: 83.333333%;\n  }\n  .col-md-11 {\n    flex: 0 0 91.666667%;\n    max-width: 91.666667%;\n  }\n  .col-md-12 {\n    flex: 0 0 100%;\n    max-width: 100%;\n  }\n  .order-md-first {\n    order: -1;\n  }\n  .order-md-last {\n    order: 13;\n  }\n  .order-md-0 {\n    order: 0;\n  }\n  .order-md-1 {\n    order: 1;\n  }\n  .order-md-2 {\n    order: 2;\n  }\n  .order-md-3 {\n    order: 3;\n  }\n  .order-md-4 {\n    order: 4;\n  }\n  .order-md-5 {\n    order: 5;\n  }\n  .order-md-6 {\n    order: 6;\n  }\n  .order-md-7 {\n    order: 7;\n  }\n  .order-md-8 {\n    order: 8;\n  }\n  .order-md-9 {\n    order: 9;\n  }\n  .order-md-10 {\n    order: 10;\n  }\n  .order-md-11 {\n    order: 11;\n  }\n  .order-md-12 {\n    order: 12;\n  }\n  .offset-md-1 {\n    margin-left: 8.33333%;\n  }\n  .offset-md-2 {\n    margin-left: 16.66667%;\n  }\n  .offset-md-3 {\n    margin-left: 25%;\n  }\n  .offset-md-4 {\n    margin-left: 33.33333%;\n  }\n  .offset-md-5 {\n    margin-left: 41.66667%;\n  }\n  .offset-md-6 {\n    margin-left: 50%;\n  }\n  .offset-md-7 {\n    margin-left: 58.33333%;\n  }\n  .offset-md-8 {\n    margin-left: 66.66667%;\n  }\n  .offset-md-9 {\n    margin-left: 75%;\n  }\n  .offset-md-10 {\n    margin-left: 83.33333%;\n  }\n  .offset-md-11 {\n    margin-left: 91.66667%;\n  }\n  .m-md-0 {\n    margin: 0 !important;\n  }\n  .mt-md-0,\n  .my-md-0 {\n    margin-top: 0 !important;\n  }\n  .mr-md-0,\n  .mx-md-0 {\n    margin-right: 0 !important;\n  }\n  .mb-md-0,\n  .my-md-0 {\n    margin-bottom: 0 !important;\n  }\n  .ml-md-0,\n  .mx-md-0 {\n    margin-left: 0 !important;\n  }\n  .m-md-1 {\n    margin: 0.25rem !important;\n  }\n  .mt-md-1,\n  .my-md-1 {\n    margin-top: 0.25rem !important;\n  }\n  .mr-md-1,\n  .mx-md-1 {\n    margin-right: 0.25rem !important;\n  }\n  .mb-md-1,\n  .my-md-1 {\n    margin-bottom: 0.25rem !important;\n  }\n  .ml-md-1,\n  .mx-md-1 {\n    margin-left: 0.25rem !important;\n  }\n  .m-md-2 {\n    margin: 0.5rem !important;\n  }\n  .mt-md-2,\n  .my-md-2 {\n    margin-top: 0.5rem !important;\n  }\n  .mr-md-2,\n  .mx-md-2 {\n    margin-right: 0.5rem !important;\n  }\n  .mb-md-2,\n  .my-md-2 {\n    margin-bottom: 0.5rem !important;\n  }\n  .ml-md-2,\n  .mx-md-2 {\n    margin-left: 0.5rem !important;\n  }\n  .m-md-3 {\n    margin: 1rem !important;\n  }\n  .mt-md-3,\n  .my-md-3 {\n    margin-top: 1rem !important;\n  }\n  .mr-md-3,\n  .mx-md-3 {\n    margin-right: 1rem !important;\n  }\n  .mb-md-3,\n  .my-md-3 {\n    margin-bottom: 1rem !important;\n  }\n  .ml-md-3,\n  .mx-md-3 {\n    margin-left: 1rem !important;\n  }\n  .m-md-4 {\n    margin: 1.5rem !important;\n  }\n  .mt-md-4,\n  .my-md-4 {\n    margin-top: 1.5rem !important;\n  }\n  .mr-md-4,\n  .mx-md-4 {\n    margin-right: 1.5rem !important;\n  }\n  .mb-md-4,\n  .my-md-4 {\n    margin-bottom: 1.5rem !important;\n  }\n  .ml-md-4,\n  .mx-md-4 {\n    margin-left: 1.5rem !important;\n  }\n  .m-md-5 {\n    margin: 3rem !important;\n  }\n  .mt-md-5,\n  .my-md-5 {\n    margin-top: 3rem !important;\n  }\n  .mr-md-5,\n  .mx-md-5 {\n    margin-right: 3rem !important;\n  }\n  .mb-md-5,\n  .my-md-5 {\n    margin-bottom: 3rem !important;\n  }\n  .ml-md-5,\n  .mx-md-5 {\n    margin-left: 3rem !important;\n  }\n}\n@media (max-width: 768px) {\n  .col-sm {\n    flex-basis: 0;\n    flex-grow: 1;\n    max-width: 100%;\n  }\n  .col-sm-auto {\n    flex: 0 0 auto;\n    width: auto;\n    max-width: none;\n  }\n  .col-sm-1 {\n    flex: 0 0 8.333333%;\n    max-width: 8.333333%;\n  }\n  .col-sm-2 {\n    flex: 0 0 16.666667%;\n    max-width: 16.666667%;\n  }\n  .col-sm-3 {\n    flex: 0 0 25%;\n    max-width: 25%;\n  }\n  .col-sm-4 {\n    flex: 0 0 33.333333%;\n    max-width: 33.333333%;\n  }\n  .col-sm-5 {\n    flex: 0 0 41.666667%;\n    max-width: 41.666667%;\n  }\n  .col-sm-6 {\n    flex: 0 0 50%;\n    max-width: 50%;\n  }\n  .col-sm-7 {\n    flex: 0 0 58.333333%;\n    max-width: 58.333333%;\n  }\n  .col-sm-8 {\n    flex: 0 0 66.666667%;\n    max-width: 66.666667%;\n  }\n  .col-sm-9 {\n    flex: 0 0 75%;\n    max-width: 75%;\n  }\n  .col-sm-10 {\n    flex: 0 0 83.333333%;\n    max-width: 83.333333%;\n  }\n  .col-sm-11 {\n    flex: 0 0 91.666667%;\n    max-width: 91.666667%;\n  }\n  .col-sm-12 {\n    flex: 0 0 100%;\n    max-width: 100%;\n  }\n  .order-sm-first {\n    order: -1;\n  }\n  .order-sm-last {\n    order: 13;\n  }\n  .order-sm-0 {\n    order: 0;\n  }\n  .order-sm-1 {\n    order: 1;\n  }\n  .order-sm-2 {\n    order: 2;\n  }\n  .order-sm-3 {\n    order: 3;\n  }\n  .order-sm-4 {\n    order: 4;\n  }\n  .order-sm-5 {\n    order: 5;\n  }\n  .order-sm-6 {\n    order: 6;\n  }\n  .order-sm-7 {\n    order: 7;\n  }\n  .order-sm-8 {\n    order: 8;\n  }\n  .order-sm-9 {\n    order: 9;\n  }\n  .order-sm-10 {\n    order: 10;\n  }\n  .order-sm-11 {\n    order: 11;\n  }\n  .order-sm-12 {\n    order: 12;\n  }\n  .offset-sm-0 {\n    margin-left: 0;\n  }\n  .offset-sm-1 {\n    margin-left: 8.33333%;\n  }\n  .offset-sm-2 {\n    margin-left: 16.66667%;\n  }\n  .offset-sm-3 {\n    margin-left: 25%;\n  }\n  .offset-sm-4 {\n    margin-left: 33.33333%;\n  }\n  .offset-sm-5 {\n    margin-left: 41.66667%;\n  }\n  .offset-sm-6 {\n    margin-left: 50%;\n  }\n  .offset-sm-7 {\n    margin-left: 58.33333%;\n  }\n  .offset-sm-8 {\n    margin-left: 66.66667%;\n  }\n  .offset-sm-9 {\n    margin-left: 75%;\n  }\n  .offset-sm-10 {\n    margin-left: 83.33333%;\n  }\n  .offset-sm-11 {\n    margin-left: 91.66667%;\n  }\n  .m-sm-0 {\n    margin: 0 !important;\n  }\n  .mt-sm-0,\n  .my-sm-0 {\n    margin-top: 0 !important;\n  }\n  .mr-sm-0,\n  .mx-sm-0 {\n    margin-right: 0 !important;\n  }\n  .mb-sm-0,\n  .my-sm-0 {\n    margin-bottom: 0 !important;\n  }\n  .ml-sm-0,\n  .mx-sm-0 {\n    margin-left: 0 !important;\n  }\n  .m-sm-1 {\n    margin: 0.25rem !important;\n  }\n  .mt-1,\n  .my-1 {\n    margin-top: 0.25rem !important;\n  }\n  .mr-sm-1,\n  .mx-sm-1 {\n    margin-right: 0.25rem !important;\n  }\n  .mb-sm-1,\n  .my-sm-1 {\n    margin-bottom: 0.25rem !important;\n  }\n  .ml-sm-1,\n  .mx-sm-1 {\n    margin-left: 0.25rem !important;\n  }\n  .m-sm-2 {\n    margin: 0.5rem !important;\n  }\n  .mt-sm-2,\n  .my-sm-2 {\n    margin-top: 0.5rem !important;\n  }\n  .mr-2,\n  .mx-2 {\n    margin-right: 0.5rem !important;\n  }\n  .mb-sm-2,\n  .my-sm-2 {\n    margin-bottom: 0.5rem !important;\n  }\n  .ml-sm-2,\n  .mx-sm-2 {\n    margin-left: 0.5rem !important;\n  }\n  .m-sm-3 {\n    margin: 1rem !important;\n  }\n  .mt-sm-3,\n  .my-sm-3 {\n    margin-top: 1rem !important;\n  }\n  .mr-sm-3,\n  .mx-sm-3 {\n    margin-right: 1rem !important;\n  }\n  .mb-sm-3,\n  .my-sm-3 {\n    margin-bottom: 1rem !important;\n  }\n  .ml-sm-3,\n  .mx-sm-3 {\n    margin-left: 1rem !important;\n  }\n  .m-sm-4 {\n    margin: 1.5rem !important;\n  }\n  .mt-sm-4,\n  .my-sm-4 {\n    margin-top: 1.5rem !important;\n  }\n  .mr-sm-4,\n  .mx-sm-4 {\n    margin-right: 1.5rem !important;\n  }\n  .mb-sm-4,\n  .my-sm-4 {\n    margin-bottom: 1.5rem !important;\n  }\n  .ml-sm-4,\n  .mx-sm-4 {\n    margin-left: 1.5rem !important;\n  }\n  .m-sm-5 {\n    margin: 3rem !important;\n  }\n  .mt-sm-5,\n  .my-sm-5 {\n    margin-top: 3rem !important;\n  }\n  .mr-sm-5,\n  .mx-sm-5 {\n    margin-right: 3rem !important;\n  }\n  .mb-sm-5,\n  .my-sm-5 {\n    margin-bottom: 3rem !important;\n  }\n  .ml-sm-5,\n  .mx-sm-5 {\n    margin-left: 3rem !important;\n  }\n}\n@media (max-width: 576px) {\n  .col-xs {\n    flex-basis: 0;\n    flex-grow: 1;\n    max-width: 100%;\n  }\n  .col-xs-auto {\n    flex: 0 0 auto;\n    width: auto;\n    max-width: none;\n  }\n  .col-xs-1 {\n    flex: 0 0 8.333333%;\n    max-width: 8.333333%;\n  }\n  .col-xs-2 {\n    flex: 0 0 16.666667%;\n    max-width: 16.666667%;\n  }\n  .col-xs-3 {\n    flex: 0 0 25%;\n    max-width: 25%;\n  }\n  .col-xs-4 {\n    flex: 0 0 33.333333%;\n    max-width: 33.333333%;\n  }\n  .col-xs-5 {\n    flex: 0 0 41.666667%;\n    max-width: 41.666667%;\n  }\n  .col-xs-6 {\n    flex: 0 0 50%;\n    max-width: 50%;\n  }\n  .col-xs-7 {\n    flex: 0 0 58.333333%;\n    max-width: 58.333333%;\n  }\n  .col-xs-8 {\n    flex: 0 0 66.666667%;\n    max-width: 66.666667%;\n  }\n  .col-xs-9 {\n    flex: 0 0 75%;\n    max-width: 75%;\n  }\n  .col-xs-10 {\n    flex: 0 0 83.333333%;\n    max-width: 83.333333%;\n  }\n  .col-xs-11 {\n    flex: 0 0 91.666667%;\n    max-width: 91.666667%;\n  }\n  .col-xs-12 {\n    flex: 0 0 100%;\n    max-width: 100%;\n  }\n  .pr-xs-0 {\n    padding-right: 0 !important;\n  }\n  .pr-xs-1 {\n    padding-right: 0.25rem !important;\n  }\n  .order-xs-first {\n    order: -1;\n  }\n  .order-xs-last {\n    order: 13;\n  }\n  .order-xs-0 {\n    order: 0;\n  }\n  .order-xs-1 {\n    order: 1;\n  }\n  .order-xs-2 {\n    order: 2;\n  }\n  .order-xs-3 {\n    order: 3;\n  }\n  .order-xs-4 {\n    order: 4;\n  }\n  .order-xs-5 {\n    order: 5;\n  }\n  .order-xs-6 {\n    order: 6;\n  }\n  .order-xs-7 {\n    order: 7;\n  }\n  .order-xs-8 {\n    order: 8;\n  }\n  .order-xs-9 {\n    order: 9;\n  }\n  .order-xs-10 {\n    order: 10;\n  }\n  .order-xs-11 {\n    order: 11;\n  }\n  .order-xs-12 {\n    order: 12;\n  }\n  .offset-xs-0 {\n    margin-left: 0;\n  }\n  .offset-xs-1 {\n    margin-left: 8.33333%;\n  }\n  .offset-xs-2 {\n    margin-left: 16.66667%;\n  }\n  .offset-xs-3 {\n    margin-left: 25%;\n  }\n  .offset-xs-4 {\n    margin-left: 33.33333%;\n  }\n  .offset-xs-5 {\n    margin-left: 41.66667%;\n  }\n  .offset-xs-6 {\n    margin-left: 50%;\n  }\n  .offset-xs-7 {\n    margin-left: 58.33333%;\n  }\n  .offset-xs-8 {\n    margin-left: 66.66667%;\n  }\n  .offset-xs-9 {\n    margin-left: 75%;\n  }\n  .offset-xs-10 {\n    margin-left: 83.33333%;\n  }\n  .offset-xs-11 {\n    margin-left: 91.66667%;\n  }\n  .mb-xs-3,\n  .my-xs-3 {\n    margin-bottom: 1rem !important;\n  }\n  .mb-xs-2,\n  .my-xs-2 {\n    margin-bottom: 0.5rem !important;\n  }\n  .mb-xs-1,\n  .my-xs-1 {\n    margin-bottom: 0.25rem !important;\n  }\n  .mt-xs-0 {\n    margin-top: 0 !important;\n  }\n}\nhtml {\n  font-size: 62.5%;\n}\n\nbody {\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n  min-height: 100vh;\n  font-family: \"Open Sans\", sans-serif;\n  color: #212121;\n  font-weight: 400;\n  font-size: 1.6rem;\n  line-height: 1.2;\n  background-color: #efefef;\n}\nbody.no-scroll {\n  overflow-y: hidden;\n}\n\nmain {\n  padding: 40px 0;\n}\n@media screen and (max-width: 768px) {\n  main {\n    padding: 30px 0;\n  }\n}\n\nfooter {\n  margin-top: auto;\n}\n\n.hidden-title {\n  visibility: hidden;\n  height: 0;\n}\n\n.d-none {\n  display: none !important;\n}\n\n.burger {\n  display: none;\n  width: 3rem;\n  height: 2rem;\n  padding: 0;\n  font-size: 0;\n  color: transparent;\n  position: absolute;\n  top: 50%;\n  left: 1.5rem;\n  transform: translateY(-50%);\n  background: none;\n  border: none;\n}\n.burger::before, .burger::after, .burger span {\n  display: block;\n  width: 100%;\n  height: 2px;\n  background-color: #212121;\n  position: absolute;\n  left: 0;\n}\n.burger::before, .burger::after {\n  content: \"\";\n  transition: transform 0.2s linear;\n}\n.burger::before {\n  top: 0;\n}\n.burger::after {\n  bottom: 0;\n}\n.burger span {\n  top: 50%;\n  transform: translateY(-50%);\n  transition: opacity 0.2s linear;\n}\n.show-sidebar .burger span {\n  opacity: 0;\n}\n.show-sidebar .burger::before, .show-sidebar .burger::after {\n  top: 50%;\n}\n.show-sidebar .burger::before {\n  transform: rotate(45deg);\n}\n.show-sidebar .burger::after {\n  transform: rotate(-45deg);\n}\n@media screen and (max-width: 992px) {\n  .burger {\n    display: block;\n  }\n}\n\n.js-tab-content {\n  display: none;\n}\n.js-tab-content.active {\n  display: block;\n  animation: 0.5s linear appear;\n}\n@keyframes appear {\n  from {\n    transform: scale3d(0.95, 0.95, 1);\n    opacity: 0.5;\n  }\n  to {\n    transform: scale3d(1, 1, 1);\n    opacity: 1;\n  }\n}\n\n.logo {\n  max-width: 130px;\n}\n.logo img {\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n}\n@media screen and (max-width: 992px) {\n  .logo {\n    max-width: 120px;\n  }\n}\n@media screen and (max-width: 768px) {\n  .logo {\n    max-width: 100px;\n  }\n}\n\n.to-top {\n  cursor: pointer;\n  width: 30px;\n  height: 30px;\n  fill: #F9A825;\n  position: fixed;\n  right: 20px;\n  bottom: 100px;\n  opacity: 1;\n  visibility: visible;\n  transition: opacity 0.2s linear;\n}\n.to-top.hidden {\n  opacity: 0;\n  visibility: hidden;\n}\n\n.section {\n  padding: 40px 0;\n}\n@media screen and (max-width: 768px) {\n  .section {\n    padding: 14px 0;\n  }\n}\n.section--nopading {\n  padding: 0;\n}\n.section__title {\n  text-align: center;\n  font-family: \"Montserrat\", sans-serif;\n  font-weight: 500;\n  font-size: 46px;\n  margin-bottom: 14px;\n  text-shadow: -2px 2px 2px rgba(206, 89, 55, 0.4);\n}\n@media screen and (max-width: 768px) {\n  .section__title {\n    font-size: 40px;\n  }\n}\n@media screen and (max-width: 576px) {\n  .section__title {\n    font-size: 36px;\n  }\n}\n\n.card {\n  overflow: hidden;\n  box-shadow: -4px 4px 2px rgba(216, 216, 216, 0.75);\n  position: relative;\n  display: block;\n  border-radius: 8px;\n  width: 100%;\n  max-width: 460px;\n  margin: 0 auto;\n  background-color: #fff;\n  padding-bottom: 60px;\n}\n@media screen and (max-width: 576px) {\n  .card {\n    max-width: 360px;\n  }\n}\n.card__img {\n  position: relative;\n  height: 300px;\n  width: 100%;\n  overflow: hidden;\n}\n@media screen and (max-width: 1200px) {\n  .card__img {\n    height: 240px;\n  }\n}\n@media screen and (max-width: 992px) {\n  .card__img {\n    height: 280px;\n  }\n}\n@media screen and (max-width: 768px) {\n  .card__img {\n    height: 200px;\n  }\n}\n@media screen and (max-width: 576px) {\n  .card__img {\n    height: 240px;\n  }\n}\n.card__img img {\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n  transition: transform 3s ease-in;\n}\n.card__img:hover img {\n  transform: scale(1.2);\n}\n.card__share-icon {\n  display: none;\n  position: absolute;\n  bottom: 8px;\n  right: 8px;\n  width: 42px;\n  height: 42px;\n  fill: #8bc34a;\n}\n.card__share-icon:hover {\n  fill: #F9A825;\n}\n.card__info {\n  padding: 12px 12px 16px 12px;\n}\n.card__main-info {\n  font-size: 20px;\n  font-weight: 500;\n}\n.card__beertype, .modal__beertype {\n  color: #8bc34a;\n  margin: 4px 0;\n  min-height: 48px;\n}\n@media screen and (max-width: 1200px) {\n  .card__beertype, .modal__beertype {\n    min-height: 72px;\n  }\n}\n.card__title {\n  font-size: 24px;\n  font-weight: 600;\n  font-family: \"Montserrat\", sans-serif;\n  min-height: 58px;\n}\n.card__title:hover {\n  text-decoration: underline;\n}\n.card__testimonial, .modal__testimonial {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  font-size: 15px;\n  margin: 6px -10px;\n  padding: 12px 0;\n  border-top: 1px dashed #90a4ae;\n  border-bottom: 1px dashed #90a4ae;\n}\n.card__test-item, .modal__test-item {\n  width: 33.3333%;\n  padding: 0 10px;\n}\n.card__test-value, .modal__test-value {\n  font-size: 20px;\n  font-weight: 600;\n  margin-top: 12px;\n  margin-bottom: 4px;\n}\n.card__test-progress, .modal__test-progress {\n  position: relative;\n  height: 8px;\n  background-color: #bbb;\n}\n.card__test-progress-value, .modal__test-progress-value {\n  position: absolute;\n  left: 0;\n  top: 0;\n  bottom: 0;\n  height: 100%;\n  background-color: #F9A825;\n}\n.card__price, .modal__price {\n  font-size: 34px;\n  line-height: 1;\n  font-weight: 600;\n  margin-top: 12px;\n}\n.card__price span, .modal__price span {\n  display: block;\n}\n.card__price span:last-child, .modal__price span:last-child {\n  font-size: 20px;\n  color: #90a4ae;\n}\n.card__price-wrapper, .modal__price-wrapper {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n}\n.card__cart, .modal__cart {\n  display: none;\n  cursor: pointer;\n  height: 48px;\n  width: 48px;\n  transition: fill 0.2s linear;\n}\n.card__cart:hover, .modal__cart:hover {\n  fill: #71a436;\n}\n.card__bottom {\n  padding: 12px;\n  text-align: right;\n  position: absolute;\n  bottom: 0;\n  right: 0;\n}\n.card__details {\n  font-size: 22px;\n  font-weight: 600;\n  text-decoration: underline;\n  color: #8bc34a;\n}\n.card__details:hover {\n  text-decoration: none;\n}\n\n.filter {\n  display: none;\n  justify-content: space-between;\n  align-items: center;\n  font-size: 20px;\n  padding: 18px;\n  border: 1px solid #d7d7d7;\n  background-color: #ffffff;\n  margin-bottom: 20px;\n  border-radius: 8px;\n}\n@media screen and (max-width: 1200px) {\n  .filter {\n    font-size: 18px;\n    padding: 12px;\n  }\n}\n@media screen and (max-width: 768px) {\n  .filter {\n    flex-direction: column-reverse;\n    align-items: flex-start;\n  }\n}\n@media screen and (max-width: 576px) {\n  .filter {\n    font-size: 16px;\n    padding: 8px;\n  }\n}\n.filter__sort {\n  width: 35%;\n  display: flex;\n  align-items: center;\n  padding-right: 18px;\n  overflow: hidden;\n}\n@media screen and (max-width: 1440px) {\n  .filter__sort {\n    padding-right: 12px;\n  }\n}\n@media screen and (max-width: 992px) {\n  .filter__sort {\n    width: 50%;\n    padding-right: 12px;\n  }\n}\n@media screen and (max-width: 768px) {\n  .filter__sort {\n    width: 100%;\n  }\n}\n.filter__sort-by {\n  display: flex;\n  align-items: center;\n  user-select: none;\n}\n.filter__sort-direction {\n  cursor: pointer;\n  margin-right: 8px;\n}\n.filter__sort-direction svg {\n  padding-top: 4px;\n  width: 22px;\n  height: 22px;\n  cursor: pointer;\n  fill: #222;\n  transition: fill 0.2s linear;\n}\n.filter__sort-direction svg:hover {\n  fill: #8bc34a;\n}\n.filter__sort-direction.down svg:last-child {\n  display: none;\n}\n.filter__sort-direction.up svg:first-child {\n  display: none;\n}\n.filter__input {\n  width: 30%;\n  display: flex;\n  align-items: center;\n  border-left: 1px solid #90a4ae;\n  border-right: 1px solid #90a4ae;\n  background-color: transparent;\n  padding: 0 22px;\n  font-family: \"Roboto\", sans-serif;\n  color: #707070;\n  font-size: 15px;\n}\n@media screen and (max-width: 1200px) {\n  .filter__input {\n    padding: 0 12px;\n  }\n}\n@media screen and (max-width: 992px) {\n  .filter__input {\n    display: none;\n  }\n}\n.filter__input input {\n  width: 100%;\n  font-size: 20px;\n  padding-bottom: 4px;\n  margin-left: 12px;\n  border-bottom: 2px dashed #90a4ae;\n}\n.filter__input input:focus {\n  border-color: #8bc34a;\n}\n@media screen and (max-width: 1440px) {\n  .filter__input input {\n    font-size: 18px;\n    padding-bottom: 2px;\n    margin-left: 8px;\n  }\n}\n.filter__input svg {\n  width: 20px;\n  height: 20px;\n  cursor: pointer;\n  fill: #222;\n}\n@media screen and (max-width: 1200px) {\n  .filter__input svg {\n    width: 18px;\n    height: 18px;\n  }\n}\n.filter__filter {\n  display: flex;\n  align-items: center;\n  padding-left: 12px;\n  width: 35%;\n  user-select: none;\n  overflow: hidden;\n}\n@media screen and (max-width: 992px) {\n  .filter__filter {\n    width: 50%;\n    justify-content: flex-end;\n  }\n}\n@media screen and (max-width: 768px) {\n  .filter__filter {\n    width: 100%;\n    padding-left: 0;\n    margin-bottom: 14px;\n    justify-content: flex-start;\n  }\n}\n.filter__select {\n  padding: 4px 8px;\n  border: 2px solid #444;\n  border-radius: 8px;\n  font-size: 16px;\n  font-family: inherit;\n  margin-left: 8px;\n}\n@media screen and (max-width: 1200px) {\n  .filter__select {\n    font-size: 15px;\n    padding: 4px;\n  }\n}\n@media screen and (max-width: 768px) {\n  .filter__select {\n    padding: 2px 4px;\n  }\n}\n@media screen and (max-width: 576px) {\n  .filter__select {\n    padding: 1px 2px;\n    margin-left: 4px;\n  }\n}\n.filter__select:focus {\n  border-color: #8bc34a;\n}\n.filter__select:focus-visible {\n  border-color: #8bc34a;\n  outline: none;\n}\n\n.modal {\n  position: relative;\n  display: flex;\n  background-color: #fff;\n  width: 90%;\n  max-width: 1500px;\n  max-height: 80vh;\n  min-height: 60vh;\n  margin: 0 auto;\n  border-radius: 12px;\n  overflow: hidden;\n}\n@media screen and (max-width: 992px) {\n  .modal {\n    flex-direction: column;\n    max-height: 90vh;\n  }\n}\n@media screen and (max-width: 576px) {\n  .modal {\n    width: 90%;\n    max-width: 420px;\n  }\n}\n.modal__close {\n  z-index: 111;\n  cursor: pointer;\n  width: 30px;\n  height: 30px;\n  position: absolute;\n  top: 10px;\n  right: 10px;\n  fill: #90a4ae;\n  transition: fill 0.2s linear;\n}\n.modal__close:hover {\n  fill: #F9A825;\n}\n.modal__angle {\n  cursor: pointer;\n  position: absolute;\n  top: 50%;\n  transform: translateY(-50);\n  background-color: #bbb;\n  padding: 6px 4px;\n  fill: rgba(255, 255, 255, 0.7);\n  width: 28px;\n  transition: fill 0.2s linear, background-color 0.2s linear;\n}\n.modal__angle--left {\n  left: 8px;\n  border-radius: 10px 0 0 10px;\n}\n.modal__angle--right {\n  right: 8px;\n  border-radius: 0 10px 10px 0;\n}\n.modal__angle:hover {\n  background-color: #999;\n  fill: #fff;\n}\n.modal__left {\n  position: relative;\n  width: 500px;\n  flex-shrink: 0;\n  min-height: 100%;\n  overflow: hidden;\n}\n@media screen and (max-width: 1200px) {\n  .modal__left {\n    width: 400px;\n  }\n}\n@media screen and (max-width: 992px) {\n  .modal__left {\n    width: 100%;\n    border-radius: 0;\n    min-height: 360px;\n    height: 360px;\n    margin: 0 auto;\n  }\n}\n@media screen and (max-width: 576px) {\n  .modal__left {\n    min-height: 460px;\n    height: 460px;\n  }\n}\n.modal__left .siema {\n  height: 100%;\n}\n.modal__left .siema div {\n  height: 100%;\n}\n.modal__img {\n  width: 100%;\n  height: 100%;\n}\n@media screen and (max-width: 992px) {\n  .modal__img {\n    padding: 20px 0 0 0;\n  }\n}\n@media screen and (max-width: 768px) {\n  .modal__img {\n    padding: 10px 0 0 0;\n  }\n}\n@media screen and (max-width: 576px) {\n  .modal__img {\n    padding: 0;\n  }\n}\n.modal__img img {\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n  object-position: center center;\n}\n@media screen and (max-width: 992px) {\n  .modal__img img {\n    object-fit: contain;\n  }\n}\n@media screen and (max-width: 576px) {\n  .modal__img img {\n    object-fit: cover;\n  }\n}\n.modal__right {\n  padding: 20px;\n  max-height: 100%;\n  overflow-y: auto;\n  scrollbar-width: thin;\n  scrollbar-color: #ccc #71a436;\n  /* Работает в Chrome, Edge и Safari */\n}\n.modal__right::-webkit-scrollbar {\n  width: 8px;\n}\n.modal__right::-webkit-scrollbar-track {\n  background: #ccc;\n  padding: 4px 0;\n}\n.modal__right::-webkit-scrollbar-thumb {\n  background-color: #71a436;\n  border-radius: 28px;\n}\n@media screen and (max-width: 992px) {\n  .modal__right {\n    width: 100%;\n  }\n}\n@media screen and (max-width: 576px) {\n  .modal__right {\n    padding: 14px 10px;\n  }\n}\n.modal__title {\n  font-size: 36px;\n  font-family: \"Montserrat\", sans-serif;\n  font-weight: 600;\n  padding-right: 16px;\n}\n@media screen and (max-width: 576px) {\n  .modal__title {\n    font-size: 30px;\n  }\n}\n.modal__beertype {\n  font-size: 20px;\n  min-height: 1px;\n}\n@media screen and (max-width: 576px) {\n  .modal__beertype {\n    font-size: 18px;\n  }\n}\n.modal__price-wrapper {\n  margin: 10px 0;\n}\n.modal__price-wrapper .btn {\n  display: none;\n}\n.modal__testimonial {\n  margin-bottom: 12px;\n}\n.modal__test-title {\n  font-size: 20px;\n}\n@media screen and (max-width: 576px) {\n  .modal__test-title {\n    font-size: 16px;\n  }\n}\n.modal__test-value {\n  font-size: 22px;\n}\n@media screen and (max-width: 576px) {\n  .modal__test-value {\n    font-size: 18px;\n  }\n}\n.modal__description h1, .modal__description h2, .modal__description h3, .modal__description h4, .modal__description h5, .modal__description h6, .modal__description p, .modal__description pre, .modal__description div, .modal__description table, .modal__description iframe, .modal__description blockquote, .modal__description dl, .modal__description ul, .modal__description ol {\n  margin-bottom: 8px;\n}\n.modal .someclass {\n  background-image: url(\"../../img/lemonade-m.jpg\"), url(\"../../img/lemonade-m1.jpg\"), url(\"../../img/cidre-logo-m.png\"), url(\"../../img/cidr-strawberry-m.jpg\"), url(\"../../img/bocal.jpg\"), url(\"../../img/bocal-m.jpg\"), url(\"../../img/bocal-m1.jpg\"), url(\"../../img/grinky.jpg\"), url(\"../../img/grinky-m.jpg\"), url(\"../../img/grinky-craft-m.jpg\"), url(\"../../img/grinky-craft.jpg\"), url(\"../../img/grinky-domashni-m.jpg\"), url(\"../../img/grinky-domashni-m1.jpg\"), url(\"../../img/grinky-domashni.jpg\"), url(\"../../img/vuha-m.jpg\"), url(\"../../img/vuha-m1.jpg\"), url(\"../../img/vuha-m2.jpg\"), url(\"../../img/vuha-m.jpg\"), url(\"../../img/vuha.jpg\"), url(\"../../img/vuha-m3.jpg\"), url(\"../../img/anchous-m.jpg\"), url(\"../../img/anchous-m1.jpg\"), url(\"../../img/anchous.JPG\"), url(\"../../img/arahis-m.jpg\"), url(\"../../img/arahis.jpg\"), url(\"../../img/gustira-m.jpg\"), url(\"../../img/gustira-m1.jpg\"), url(\"../../img/gustira.jpg\"), url(\"../../img/smugastyk-m.jpg\"), url(\"../../img/smugastyk-m1.JPG\"), url(\"../../img/smugastyk.JPG\"), url(\"../../img/taran-m.jpg\"), url(\"../../img/taran-m1.jpg\"), url(\"../../img/taran.jpg\"), url(\"../../img/ikra-sudaka.JPG\"), url(\"../../img/ikra-sudaka-m.jpg\"), url(\"../../img/ikra-sudaka-m1.jpg\"), url(\"../../img/ikrianyk-norvezkyi-m.jpg\"), url(\"../../img/ikrianyk-norvezkyi-m1.jpg\"), url(\"../../img/ikrianyk-norvezkyi.jpg\"), url(\"../../img/kabanosy-m.jpg\"), url(\"../../img/kabanosy-m1.jpg\"), url(\"../../img/kabanosy.jpg\"), url(\"../../img/kalmar-struzhka-m.jpg\"), url(\"../../img/kalmar-struzhka.jpg\"), url(\"../../img/kalmar-struzhka-m1.jpg\"), url(\"../../img/kalmar-struzhka-krab-m.jpg\"), url(\"../../img/kalmar-struzhka-krab-m1.jpg\"), url(\"../../img/kalmar-struzhka-krab.jpg\"), url(\"../../img/kilce-kalmara-m.jpg\"), url(\"../../img/kilce-kalmara-m1.jpg\"), url(\"../../img/kilce-kalmara.jpg\"), url(\"../../img/koriushka-m.jpg\"), url(\"../../img/koriushka-m1.jpg\"), url(\"../../img/koriushka.jpg\"), url(\"../../img/kranch-m.jpg\"), url(\"../../img/kranch-m1.jpg\"), url(\"../../img/kranch-m2.jpg\"), url(\"../../img/kranch.jpg\"), url(\"../../img/kukurudza-m.jpg\"), url(\"../../img/kukurudza-m1.jpg\"), url(\"../../img/kukurudza.jpg\"), url(\"../../img/pautynka-kalmara-m.jpg\"), url(\"../../img/pautynka-kalmara-m1.jpg\"), url(\"../../img/pautynka-kalmara.jpg\"), url(\"../../img/kalmar-peruanskyi-m.jpg\"), url(\"../../img/kalmar-peruanskyi-m1.jpg\"), url(\"../../img/kalmar-peruanskyi.jpg\"), url(\"../../img/plitka-m.jpg\"), url(\"../../img/plitka-m1.jpg\"), url(\"../../img/plitka.jpg\"), url(\"../../img/syr-solomka-m.jpg\"), url(\"../../img/syr-solomka-m1.jpg\"), url(\"../../img/syr-solomka.jpg\"), url(\"../../img/smuga-lososia-m.jpg\"), url(\"../../img/smuga-lososia-m1.jpg\"), url(\"../../img/smuga-lososia.jpg\"), url(\"../../img/tunec-m.jpg\"), url(\"../../img/tunec-m1.jpg\"), url(\"../../img/tunec.jpg\"), url(\"../../img/fistashka-m.jpg\"), url(\"../../img/fistashka-m1.jpg\"), url(\"../../img/fistashka.jpg\"), url(\"../../img/hamon-m.jpg\"), url(\"../../img/hamon.jpg\"), url(\"../../img/chehon-m.jpg\"), url(\"../../img/chehon-m1.jpg\"), url(\"../../img/chehon.jpg\"), url(\"../../img/dizhonski-m.jpg\"), url(\"../../img/dizhonski-m1.jpg\"), url(\"../../img/dizhonski.jpg\"), url(\"../../img/berdychiv-pshen-m.jpg\"), url(\"../../img/berdychiv-pshen.jpg\"), url(\"../../img/yantarna-m.jpg\"), url(\"../../img/yantarna-m1.jpg\"), url(\"../../img/yantarna.jpg\"), url(\"../../img/miaso-chipsy-m.jpg\"), url(\"../../img/miaso-chipsy-m1.jpg\"), url(\"../../img/miaso-chipsy.jpg\"), url(\"../../img/liasch-m.jpg\"), url(\"../../img/liasch-m1.jpg\"), url(\"../../img/liasch.jpg\"), url(\"../../img/nalyvka-m.jpg\"), url(\"../../img/nalyvka-m1.jpg\"), url(\"../../img/nalyvka-m2.jpg\"), url(\"../../img/nalyvka.jpg\"), url(\"../../img/vyno-m.jpg\"), url(\"../../img/vyno-m1.jpg\"), url(\"../../img/vyno-m2.jpg\"), url(\"../../img/vyno-m3.jpg\"), url(\"../../img/vyno-m4.jpg\"), url(\"../../img/vyno-m5.jpg\"), url(\"../../img/vyno.jpg\"), url(\"../../img/stella-m.jpg\"), url(\"../../img/stella.jpg\"), url(\"../../img/sik-bob-m.jpg\"), url(\"../../img/sik-bob.jpg\");\n}\n.modal .someclass1 {\n  background-image: url(\"../../img/cidre-logo-m.jpg\"), url(\"../../img/cidre-manho-persyk.jpg\"), url(\"../../img/cidr-cactus.jpg\"), url(\"../../img/cidre-medusa.jpg\"), url(\"../../img/bocal.jpg\"), url(\"../../img/chips.jpg\"), url(\"../../img/chips-m.jpg\"), url(\"../../img/limonad.jpg\"), url(\"../../img/cidre-logo.png\"), url(\"../../img/limonad-m2.jpg\"), url(\"../../img/mohito.jpg\"), url(\"../../img/mohito-1.jpg\"), url(\"../../img/mohito-m.jpg\"), url(\"../../img/kvas.jpg\"), url(\"../../img/kvas-1.jpg\"), url(\"../../img/kvas-m.jpg\"), url(\"../../img/kaktus-m.png\"), url(\"../../img/kaktus.png\"), url(\"../../img/fragolino-m.jpg\"), url(\"../../img/cheske-m.jpg\"), url(\"../../img/cheske.jpg\"), url(\"../../img/cheske-m1.jpg\"), url(\"../../img/opillia-m.jpg\"), url(\"../../img/opillia-m1.jpg\"), url(\"../../img/opillia.jpg\"), url(\"../../img/berdychiv-m.jpg\"), url(\"../../img/berdychiv-m1.jpeg\"), url(\"../../img/berdychiv.png\"), url(\"../../img/bierwelle.png\"), url(\"../../img/bierwelle-m.JPG\"), url(\"../../img/bierwelle-m1.jpg\"), url(\"../../img/blanche-de-kyiv-m.jpg\"), url(\"../../img/blanche-de-kyiv.jpg\"), url(\"../../img/blanche-de-kyiv-m1.jpg\"), url(\"../../img/waissburg-lager-m1.jpg\"), url(\"../../img/uman-medove-m-1.jpg\"), url(\"../../img/uman-medove-m.jpg\"), url(\"../../img/uman-medove.jpg\"), url(\"../../img/weissburg-dunkel.jpg\"), url(\"../../img/waissburg-dunke-m1.png\"), url(\"../../img/waissburg-dunkel-m.png\"), url(\"../../img/waissburg-blanche-m.JPG\"), url(\"../../img/wasiiburg-blanche-m1.jpeg\"), url(\"../../img/waiisburg-blanche.jpg\"), url(\"../../img/waissburg-lager-m.jpg\"), url(\"../../img/waissburg-lager.jpg\"), url(\"../../img/hmelpyvo-m.jpg\"), url(\"../../img/hmelpyvo-m1.png\"), url(\"../../img/hmelpyvo.JPG\");\n}\n\n.btn {\n  font-family: \"Montserrat\", sans-serif;\n  padding: 10px 20px;\n  font-size: 20px;\n  font-weight: 600;\n  border-radius: 8px;\n  border: 2px solid #8bc34a;\n  background-color: transparent;\n  transition: color 0.2s linear, background-color 0.2s linear;\n}\n.btn:hover {\n  color: #fff;\n  background-color: #8bc34a;\n}\n\n.header {\n  padding: 10px 0;\n  font-size: 20px;\n  background-color: #fff;\n  box-shadow: -10px 10px 10px rgba(0, 0, 0, 0.3);\n  border-radius: 0 0 10px 10px;\n}\n.header__inner {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  font-family: \"Montserrat\", sans-serif;\n}\n@media screen and (max-width: 992px) {\n  .header__inner {\n    font-size: 20px;\n  }\n}\n@media screen and (max-width: 768px) {\n  .header__inner {\n    font-size: 18px;\n  }\n}\n.header__info {\n  max-width: calc(82% - 130px);\n  padding: 0 10px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  overflow: hidden;\n}\n@media screen and (max-width: 1200px) {\n  .header__info {\n    flex-direction: column;\n  }\n}\n@media screen and (max-width: 992px) {\n  .header__info {\n    max-width: calc(78% - 120px);\n  }\n}\n@media screen and (max-width: 768px) {\n  .header__info {\n    max-width: calc(78% - 100px);\n    align-items: start;\n    padding: 0 8px;\n  }\n}\n@media screen and (max-width: 576px) {\n  .header__info {\n    max-width: 100%;\n    padding-right: 0;\n  }\n}\n.header__icon {\n  height: 20px;\n  margin-right: 6px;\n  fill: #333;\n  flex-shrink: 0;\n  transition: fill 0.2s linear;\n}\n@media screen and (max-width: 992px) {\n  .header__icon {\n    height: 22px;\n  }\n}\n@media screen and (max-width: 768px) {\n  .header__icon {\n    height: 20px;\n  }\n}\n.header__item {\n  transition: color 0.2s linear;\n  padding-right: 12px;\n}\n@media screen and (max-width: 1200px) {\n  .header__item {\n    padding-right: 0;\n    max-width: 100%;\n  }\n}\n@media screen and (max-width: 1200px) {\n  .header__item:first-child {\n    margin-bottom: 18px;\n  }\n}\n@media screen and (max-width: 768px) {\n  .header__item:first-child {\n    margin-bottom: 12px;\n  }\n}\n.header__item:last-child {\n  padding-right: 0;\n  padding-left: 12px;\n  border-left: 1px dashed #333;\n}\n@media screen and (max-width: 1200px) {\n  .header__item:last-child {\n    border-left: none;\n    padding-left: 0;\n    max-width: 100%;\n  }\n}\n.header__item:hover {\n  color: #8bc34a;\n}\n.header__item:hover svg {\n  fill: #8bc34a;\n}\n.footer .header__item:hover {\n  color: #ccc;\n}\n.footer .header__item:hover svg {\n  fill: #ccc;\n}\n.header__time {\n  max-width: 18%;\n}\n@media screen and (max-width: 992px) {\n  .header__time {\n    max-width: 22%;\n  }\n}\n@media screen and (max-width: 576px) {\n  .header__time {\n    display: none;\n  }\n}\n\n.categories {\n  margin: 0 -15px;\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: center;\n  overflow: hidden;\n  padding: 10px 20px 10px 20px;\n}\n@media screen and (max-width: 992px) {\n  .categories {\n    max-width: 90%;\n    margin: 0 auto;\n  }\n}\n@media screen and (max-width: 768px) {\n  .categories {\n    max-width: 100%;\n  }\n}\n.categories__item {\n  padding: 20px;\n  width: 50%;\n  margin: 0 auto;\n}\n@media screen and (max-width: 1200px) {\n  .categories__item {\n    padding: 10px;\n  }\n}\n@media screen and (max-width: 768px) {\n  .categories__item {\n    width: 100%;\n  }\n}\n\n.cat-card {\n  display: flex;\n  flex-direction: column;\n  width: 100%;\n  height: 312px;\n  color: #fff;\n  background-color: #8bc34a;\n  border-radius: 10px;\n  box-shadow: -6px 6px 6px rgba(0, 0, 0, 0.2);\n  overflow: hidden;\n  cursor: pointer;\n  transition: scale 0.2s cubic-bezier(0.32, 0.08, 0.24, 1), box-shadow 0.2s cubic-bezier(0.32, 0.08, 0.24, 1), scale 0.2s cubic-bezier(0.32, 0.08, 0.24, 1), color 0.2s cubic-bezier(0.32, 0.08, 0.24, 1);\n}\n@media screen and (max-width: 768px) {\n  .cat-card {\n    margin: 0 auto;\n  }\n}\n.cat-card:hover {\n  scale: 1.05;\n  box-shadow: -10px 10px 10px rgba(0, 0, 0, 0.18);\n}\n.cat-card.active {\n  box-shadow: -10px 10px 10px rgba(0, 0, 0, 0.18);\n  text-decoration: underline;\n}\n.cat-card.active svg {\n  padding: 10px 0;\n  fill: rgba(249, 168, 37, 0.7);\n}\n@media screen and (max-width: 1200px) {\n  .cat-card {\n    height: 250px;\n  }\n}\n@media screen and (max-width: 992px) {\n  .cat-card {\n    height: 220px;\n  }\n}\n@media screen and (max-width: 768px) {\n  .cat-card {\n    flex-direction: row;\n    align-items: center;\n    max-width: 90%;\n    width: 80%;\n    height: 100px;\n  }\n}\n@media screen and (max-width: 576px) {\n  .cat-card {\n    max-width: 100%;\n    width: 100%;\n  }\n}\n.cat-card svg {\n  height: 100%;\n  width: 37%;\n  padding: 10px 0;\n  margin: 0 auto;\n  fill: rgba(0, 0, 0, 0.7);\n  transition: fill 0.2s linear;\n}\n@media screen and (max-width: 1200px) {\n  .cat-card svg {\n    width: 33%;\n  }\n}\n@media screen and (max-width: 768px) {\n  .cat-card svg {\n    height: 75%;\n    width: 20%;\n    margin: 0 14px;\n  }\n}\n.cat-card__bottom {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  text-align: center;\n  font-family: \"Montserrat\", sans-serif;\n  text-transform: uppercase;\n  padding: 8px;\n  background-color: rgba(0, 0, 0, 0.2);\n  border-radius: 0 0 10px 10px;\n  min-height: 98.4px;\n  overflow: hidden;\n}\n@media screen and (max-width: 1200px) {\n  .cat-card__bottom {\n    min-height: 68px;\n  }\n}\n@media screen and (max-width: 1200px) {\n  .cat-card__bottom {\n    min-height: 63.4px;\n  }\n}\n@media screen and (max-width: 768px) {\n  .cat-card__bottom {\n    padding-left: 0;\n    min-height: 0;\n    background: none;\n  }\n}\n.cat-card h2, .cat-card h3, .cat-card h4, .cat-card h5 {\n  font-size: 26px;\n  text-align: center;\n  padding: 10px;\n}\n@media screen and (max-width: 1200px) {\n  .cat-card h2, .cat-card h3, .cat-card h4, .cat-card h5 {\n    font-size: 22px;\n  }\n}\n@media screen and (max-width: 992px) {\n  .cat-card h2, .cat-card h3, .cat-card h4, .cat-card h5 {\n    font-size: 20px;\n  }\n}\n@media screen and (max-width: 768px) {\n  .cat-card h2, .cat-card h3, .cat-card h4, .cat-card h5 {\n    text-align: left;\n  }\n}\n\n.main__info {\n  display: flex;\n  flex-wrap: wrap;\n  margin: 0 -10px;\n}\n.main__col {\n  display: flex;\n  width: 33.3333%;\n  padding: 0 10px;\n}\n.main__col:not(:nth-child(-n+3)) {\n  margin-top: 20px;\n}\n@media screen and (max-width: 992px) {\n  .main__col {\n    width: 50%;\n  }\n  .main__col:not(:nth-child(-n+2)) {\n    margin-top: 20px;\n  }\n}\n@media screen and (max-width: 576px) {\n  .main__col {\n    width: 100%;\n  }\n  .main__col:not(:nth-child(-n+1)) {\n    margin-top: 20px;\n  }\n}\n\n.footer {\n  padding: 34px 0;\n  font-size: 20px;\n  font-family: \"Montserrat\", sans-serif;\n  font-weight: 600;\n  background: linear-gradient(181deg, rgba(255, 255, 255, 0.95) 0%, rgba(67, 160, 71, 0.6306897759) 100%);\n  border-radius: 10px 10px 0 0;\n}\n.footer .container {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\n@media screen and (max-width: 576px) {\n  .footer .container {\n    justify-content: center;\n  }\n}\n.footer__item {\n  transition: color 0.2s linear;\n}\n@media screen and (max-width: 576px) {\n  .footer__item {\n    display: none;\n  }\n}\n.footer__item:hover {\n  color: #000;\n}","// 1440px - widescreen\r\n// 1200px - laptop\r\n// 992px - tablet\r\n// 768px - mobile-large\r\n// 576px - mobile\r\n\r\n@mixin widescreen {\r\n  @media screen and (max-width: $widescreen) {\r\n    @content;\r\n  }\r\n}\r\n@mixin laptop {\r\n  @media screen and (max-width: $laptop) {\r\n    @content;\r\n  }\r\n}\r\n@mixin tablet {\r\n  @media screen and (max-width: $tablet) {\r\n    @content;\r\n  }\r\n}\r\n@mixin mobile-large {\r\n  @media screen and (max-width: $mobile-large) {\r\n    @content;\r\n  }\r\n}\r\n@mixin mobile {\r\n  @media screen and (max-width: $mobile) {\r\n    @content;\r\n  }\r\n}\r\n\r\n.bg-radial {\r\n  border-radius: 16px;\r\n  //background-color: rgba(248,248,252,.85);\r\n  backdrop-filter: blur(15px) saturate(86%);\r\n  background: radial-gradient(circle at 100% 0,hsla(0,0%,100%,.6) 0,hsla(0,0%,96.1%,.13) 183%);\r\n}\r\n\r\n.flex-items-center {\r\n  display: flex;\r\n  align-items: center;\r\n}\r\n\r\n.text-nowrap {\r\n  white-space: nowrap;\r\n  overflow: hidden;\r\n  text-overflow: ellipsis;\r\n}","/* http://meyerweb.com/eric/tools/css/reset/\r\n   v2.0 | 20110126\r\n   License: none (public domain)\r\n*/\r\n\r\nhtml, body, div, span, applet, object, iframe,\r\nh1, h2, h3, h4, h5, h6, p, blockquote, pre,\r\na, abbr, acronym, address, big, cite, code,\r\ndel, dfn, em, img, ins, kbd, q, s, samp,\r\nsmall, strike, strong, sub, sup, tt, var,\r\nb, u, i, center,\r\ndl, dt, dd, ol, ul, li,\r\nfieldset, form, label, legend,\r\ntable, caption, tbody, tfoot, thead, tr, th, td,\r\narticle, aside, canvas, details, embed,\r\nfigure, figcaption, footer, header, hgroup,\r\nmenu, nav, output, ruby, section, summary,\r\ntime, mark, audio, video {\r\n  margin: 0;\r\n  padding: 0;\r\n  border: 0;\r\n  outline: none;\r\n  font-size: 100%;\r\n  font: inherit;\r\n  vertical-align: baseline;\r\n}\r\n/* HTML5 display-role reset for older browsers */\r\narticle, aside, details, figcaption, figure,\r\nfooter, header, hgroup, menu, nav, section {\r\n  display: block;\r\n}\r\n*, *::before, *::after {\r\n  box-sizing: border-box;\r\n}\r\na {\r\n  color: inherit;\r\n  text-decoration: none;\r\n  cursor: pointer;\r\n  display: inline-block;\r\n}\r\nimg {\r\n  max-width: 100%;\r\n  height: auto;\r\n}\r\nol, ul {\r\n  list-style: none;\r\n}\r\nblockquote, q {\r\n  quotes: none;\r\n}\r\nblockquote:before, blockquote:after,\r\nq:before, q:after {\r\n  content: '';\r\n}\r\ninput, textarea, button {\r\n  outline: none;\r\n  border: none;\r\n}\r\ntextarea {\r\n  resize: vertical;\r\n}\r\nbutton {\r\n  cursor: pointer;\r\n}\r\ntable {\r\n  border-collapse: collapse;\r\n  border-spacing: 0;\r\n}",".container {\r\n  padding: 0 15px;\r\n  max-width: 1470px;\r\n  margin: 0 auto;\r\n\r\n  &--header {\r\n    max-width: 1430px;\r\n    padding: 0 15px;\r\n    margin: 0 auto;\r\n\r\n    @include laptop {\r\n      max-width: 100%;\r\n    }\r\n\r\n    @include tablet {\r\n      max-width: 100%;\r\n    }\r\n    @include mobile-large {\r\n      max-width: 100%;\r\n    }\r\n    @include mobile {\r\n      max-width: 100%;\r\n      padding: 0 10px;\r\n    }\r\n  }\r\n\r\n  @include widescreen {\r\n    max-width: 1230px;\r\n  }\r\n\r\n  @include laptop {\r\n    max-width: 960px;\r\n  }\r\n  @include tablet {\r\n    max-width: 720px;\r\n  }\r\n  @include mobile-large {\r\n    max-width: 540px;\r\n  }\r\n  @include mobile {\r\n    max-width: 100%;\r\n    padding: 0 10px;\r\n  }\r\n}\r\n\r\n.container-fluid {\r\n  width: 100%;\r\n  padding: 0 15px;\r\n  @include mobile {\r\n    padding: 0 10px;\r\n  }\r\n}\r\n\r\n.row {\r\n  display: flex;\r\n  flex-wrap: wrap;\r\n  margin-right: -15px;\r\n  margin-left: -15px;\r\n  @include mobile {\r\n    margin-right: -10px;\r\n    margin-left: -10px;\r\n  }\r\n}\r\n\r\n.no-gutters {\r\n  margin-right: 0;\r\n  margin-left: 0; }\r\n.no-gutters > .col,\r\n.no-gutters > [class*=\"col-\"] {\r\n  padding-right: 0;\r\n  padding-left: 0; }\r\n\r\n.col-1, .col-2, .col-3, .col-4, .col-5, .col-6, .col-7, .col-8, .col-9, .col-10, .col-11, .col-12, .col,\r\n.col-auto, .col-sm-1, .col-sm-2, .col-sm-3, .col-sm-4, .col-sm-5, .col-sm-6, .col-sm-7, .col-sm-8, .col-sm-9, .col-sm-10, .col-sm-11, .col-sm-12, .col-sm,\r\n.col-sm-auto, .col-md-1, .col-md-2, .col-md-3, .col-md-4, .col-md-5, .col-md-6, .col-md-7, .col-md-8, .col-md-9, .col-md-10, .col-md-11, .col-md-12, .col-md,\r\n.col-md-auto, .col-lg-1, .col-lg-2, .col-lg-3, .col-lg-4, .col-lg-5, .col-lg-6, .col-lg-7, .col-lg-8, .col-lg-9, .col-lg-10, .col-lg-11, .col-lg-12, .col-lg,\r\n.col-lg-auto, .col-xs-1, .col-xs-2, .col-xs-3, .col-xs-4, .col-xs-5, .col-xs-6, .col-xs-7, .col-xs-8, .col-xs-9, .col-xs-10, .col-xs-11, .col-xs-12, .col-xs,\r\n.col-xs-auto {\r\n  width: 100%;\r\n  max-width: 100%;\r\n  min-height: 1px;\r\n  flex-shrink: 0;\r\n  padding-right: 15px;\r\n  padding-left: 15px;\r\n}\r\n\r\n.col {\r\n  flex-basis: 0;\r\n  flex-grow: 1;\r\n  max-width: 100%;\r\n}\r\n\r\n.col-auto {\r\n  flex: 0 0 auto;\r\n  width: auto;\r\n  max-width: none;\r\n}\r\n\r\n.col-1 {\r\n  flex: 0 0 8.333333%;\r\n  max-width: 8.333333%;\r\n}\r\n\r\n.col-2 {\r\n  flex: 0 0 16.666667%;\r\n  max-width: 16.666667%;\r\n}\r\n\r\n.col-3 {\r\n  flex: 0 0 25%;\r\n  max-width: 25%;\r\n}\r\n\r\n.col-4 {\r\n  flex: 0 0 33.333333%;\r\n  max-width: 33.333333%;\r\n}\r\n\r\n.col-5 {\r\n  flex: 0 0 41.666667%;\r\n  max-width: 41.666667%;\r\n}\r\n\r\n.col-6 {\r\n  flex: 0 0 50%;\r\n  max-width: 50%;\r\n}\r\n\r\n.col-7 {\r\n  flex: 0 0 58.333333%;\r\n  max-width: 58.333333%;\r\n}\r\n\r\n.col-8 {\r\n  flex: 0 0 66.666667%;\r\n  max-width: 66.666667%;\r\n}\r\n\r\n.col-9 {\r\n  flex: 0 0 75%;\r\n  max-width: 75%;\r\n}\r\n\r\n.col-10 {\r\n  flex: 0 0 83.333333%;\r\n  max-width: 83.333333%;\r\n}\r\n\r\n.col-11 {\r\n  flex: 0 0 91.666667%;\r\n  max-width: 91.666667%;\r\n}\r\n\r\n.col-12 {\r\n  flex: 0 0 100%;\r\n  max-width: 100%;\r\n}\r\n\r\n.order-first {\r\n  order: -1;\r\n}\r\n\r\n.order-last {\r\n  order: 13;\r\n}\r\n\r\n.order-0 {\r\n  order: 0;\r\n}\r\n\r\n.order-1 {\r\n  order: 1;\r\n}\r\n\r\n.order-2 {\r\n  order: 2;\r\n}\r\n\r\n.order-3 {\r\n  order: 3;\r\n}\r\n\r\n.order-4 {\r\n  order: 4;\r\n}\r\n\r\n.order-5 {\r\n  order: 5;\r\n}\r\n\r\n.order-6 {\r\n  order: 6;\r\n}\r\n\r\n.order-7 {\r\n  order: 7;\r\n}\r\n\r\n.order-8 {\r\n  order: 8;\r\n}\r\n\r\n.order-9 {\r\n  order: 9;\r\n}\r\n\r\n.order-10 {\r\n  order: 10;\r\n}\r\n\r\n.order-11 {\r\n  order: 11;\r\n}\r\n\r\n.order-12 {\r\n  order: 12;\r\n}\r\n.offset-1 {\r\n  margin-left: 8.33333%;\r\n}\r\n\r\n.offset-2 {\r\n  margin-left: 16.66667%;\r\n}\r\n\r\n.offset-3 {\r\n  margin-left: 25%;\r\n}\r\n\r\n.offset-4 {\r\n  margin-left: 33.33333%;\r\n}\r\n\r\n.offset-5 {\r\n  margin-left: 41.66667%;\r\n}\r\n\r\n.offset-6 {\r\n  margin-left: 50%;\r\n}\r\n\r\n.offset-7 {\r\n  margin-left: 58.33333%;\r\n}\r\n\r\n.offset-8 {\r\n  margin-left: 66.66667%;\r\n}\r\n\r\n.offset-9 {\r\n  margin-left: 75%;\r\n}\r\n\r\n.offset-10 {\r\n  margin-left: 83.33333%;\r\n}\r\n\r\n.offset-11 {\r\n  margin-left: 91.66667%;\r\n}\r\n.m-0 {\r\n  margin: 0 !important;\r\n}\r\n\r\n.mt-0,\r\n.my-0 {\r\n  margin-top: 0 !important;\r\n}\r\n\r\n.mr-0,\r\n.mx-0 {\r\n  margin-right: 0 !important;\r\n}\r\n\r\n.mb-0,\r\n.my-0 {\r\n  margin-bottom: 0 !important;\r\n}\r\n\r\n.ml-0,\r\n.mx-0 {\r\n  margin-left: 0 !important;\r\n}\r\n\r\n.m-1 {\r\n  margin: 0.25rem !important;\r\n}\r\n\r\n.mt-1,\r\n.my-1 {\r\n  margin-top: 0.25rem !important;\r\n}\r\n\r\n.mr-1,\r\n.mx-1 {\r\n  margin-right: 0.25rem !important;\r\n}\r\n\r\n.mb-1,\r\n.my-1 {\r\n  margin-bottom: 0.25rem !important;\r\n}\r\n\r\n.ml-1,\r\n.mx-1 {\r\n  margin-left: 0.25rem !important;\r\n}\r\n\r\n.m-2 {\r\n  margin: 0.5rem !important;\r\n}\r\n\r\n.mt-2,\r\n.my-2 {\r\n  margin-top: 0.5rem !important;\r\n}\r\n\r\n.mr-2,\r\n.mx-2 {\r\n  margin-right: 0.5rem !important;\r\n}\r\n\r\n.mb-2,\r\n.my-2 {\r\n  margin-bottom: 0.5rem !important;\r\n}\r\n\r\n.ml-2,\r\n.mx-2 {\r\n  margin-left: 0.5rem !important;\r\n}\r\n\r\n.m-3 {\r\n  margin: 1rem !important;\r\n}\r\n\r\n.mt-3,\r\n.my-3 {\r\n  margin-top: 1rem !important;\r\n}\r\n\r\n.mr-3,\r\n.mx-3 {\r\n  margin-right: 1rem !important;\r\n}\r\n\r\n.mb-3,\r\n.my-3 {\r\n  margin-bottom: 1rem !important;\r\n}\r\n\r\n.ml-3,\r\n.mx-3 {\r\n  margin-left: 1rem !important;\r\n}\r\n\r\n.m-4 {\r\n  margin: 1.5rem !important;\r\n}\r\n\r\n.mt-4,\r\n.my-4 {\r\n  margin-top: 1.5rem !important;\r\n}\r\n\r\n.mr-4,\r\n.mx-4 {\r\n  margin-right: 1.5rem !important;\r\n}\r\n\r\n.mb-4,\r\n.my-4 {\r\n  margin-bottom: 1.5rem !important;\r\n}\r\n\r\n.ml-4,\r\n.mx-4 {\r\n  margin-left: 1.5rem !important;\r\n}\r\n\r\n.m-5 {\r\n  margin: 3rem !important;\r\n}\r\n\r\n.mt-5,\r\n.my-5 {\r\n  margin-top: 3rem !important;\r\n}\r\n\r\n.mr-5,\r\n.mx-5 {\r\n  margin-right: 3rem !important;\r\n}\r\n\r\n.mb-5,\r\n.my-5 {\r\n  margin-bottom: 3rem !important;\r\n}\r\n\r\n.ml-5,\r\n.mx-5 {\r\n  margin-left: 3rem !important;\r\n}\r\n\r\n.mt-auto {\r\n  margin-top: auto;\r\n}\r\n\r\n.mb-auto {\r\n  margin-bottom: auto;\r\n}\r\n\r\n.ml-auto {\r\n  margin-left: auto;\r\n}\r\n\r\n.mr-auto {\r\n  margin-right: auto;\r\n}\r\n\r\n.mx-auto {\r\n  margin-left: auto;\r\n  margin-right: auto;\r\n}\r\n\r\n.my-auto {\r\n  margin-top: auto;\r\n  margin-bottom: auto;\r\n}\r\n\r\n@include mobile-large {\r\n  .mx-sm-auto {\r\n    margin-left: auto;\r\n    margin-right: auto;\r\n  }\r\n\r\n}\r\n\r\n//padding start\r\n.p-0 {\r\n  padding: 0 !important;\r\n}\r\n\r\n.pt-0,\r\n.py-0 {\r\n  padding-top: 0 !important;\r\n}\r\n\r\n.pr-0,\r\n.px-0 {\r\n  padding-right: 0 !important;\r\n}\r\n\r\n.pb-0,\r\n.py-0 {\r\n  padding-bottom: 0 !important;\r\n}\r\n\r\n.pl-0,\r\n.px-0 {\r\n  padding-left: 0 !important;\r\n}\r\n\r\n.p-1 {\r\n  padding: 0.25rem !important;\r\n}\r\n\r\n.pt-1,\r\n.py-1 {\r\n  padding-top: 0.25rem !important;\r\n}\r\n\r\n.pr-1,\r\n.px-1 {\r\n  padding-right: 0.25rem !important;\r\n}\r\n\r\n.pb-1,\r\n.py-1 {\r\n  padding-bottom: 0.25rem !important;\r\n}\r\n\r\n.pl-1,\r\n.px-1 {\r\n  padding-left: 0.25rem !important;\r\n}\r\n\r\n.p-2 {\r\n  padding: 0.5rem !important;\r\n}\r\n\r\n.pt-2,\r\n.py-2 {\r\n  padding-top: 0.5rem !important;\r\n}\r\n\r\n.pr-2,\r\n.px-2 {\r\n  padding-right: 0.5rem !important;\r\n}\r\n\r\n.pb-2,\r\n.py-2 {\r\n  padding-bottom: 0.5rem !important;\r\n}\r\n\r\n.pl-2,\r\n.px-2 {\r\n  padding-left: 0.5rem !important;\r\n}\r\n\r\n.p-3 {\r\n  padding: 1rem !important;\r\n}\r\n\r\n.pt-3,\r\n.py-3 {\r\n  padding-top: 1rem !important;\r\n}\r\n\r\n.pr-3,\r\n.px-3 {\r\n  padding-right: 1rem !important;\r\n}\r\n\r\n.pb-3,\r\n.py-3 {\r\n  padding-bottom: 1rem !important;\r\n}\r\n\r\n.pl-3,\r\n.px-3 {\r\n  padding-left: 1rem !important;\r\n}\r\n\r\n.p-4 {\r\n  padding: 1.5rem !important;\r\n}\r\n\r\n.pt-4,\r\n.py-4 {\r\n  padding-top: 1.5rem !important;\r\n}\r\n\r\n.pr-4,\r\n.px-4 {\r\n  padding-right: 1.5rem !important;\r\n}\r\n\r\n.pb-4,\r\n.py-4 {\r\n  padding-bottom: 1.5rem !important;\r\n}\r\n\r\n.pl-4,\r\n.px-4 {\r\n  padding-left: 1.5rem !important;\r\n}\r\n\r\n.p-5 {\r\n  padding: 3rem !important;\r\n}\r\n\r\n.pt-5,\r\n.py-5 {\r\n  padding-top: 3rem !important;\r\n}\r\n\r\n.pr-5,\r\n.px-5 {\r\n  padding-right: 3rem !important;\r\n}\r\n\r\n.pb-5,\r\n.py-5 {\r\n  padding-bottom: 3rem !important;\r\n}\r\n\r\n.pl-5,\r\n.px-5 {\r\n  padding-left: 3rem !important;\r\n}\r\n//padding end\r\n\r\n@media (max-width: $laptop) {\r\n  .col-lg {\r\n    flex-basis: 0;\r\n    flex-grow: 1;\r\n    max-width: 100%;\r\n  }\r\n  .col-lg-auto {\r\n    flex: 0 0 auto;\r\n    width: auto;\r\n    max-width: none;\r\n  }\r\n  .col-lg-1 {\r\n    flex: 0 0 8.333333%;\r\n    max-width: 8.333333%;\r\n  }\r\n  .col-lg-2 {\r\n    flex: 0 0 16.666667%;\r\n    max-width: 16.666667%;\r\n  }\r\n  .col-lg-3 {\r\n    flex: 0 0 25%;\r\n    max-width: 25%;\r\n  }\r\n  .col-lg-4 {\r\n    flex: 0 0 33.333333%;\r\n    max-width: 33.333333%;\r\n  }\r\n  .col-lg-5 {\r\n    flex: 0 0 41.666667%;\r\n    max-width: 41.666667%;\r\n  }\r\n  .col-lg-6 {\r\n    flex: 0 0 50%;\r\n    max-width: 50%;\r\n  }\r\n  .col-lg-7 {\r\n    flex: 0 0 58.333333%;\r\n    max-width: 58.333333%;\r\n  }\r\n  .col-lg-8 {\r\n    flex: 0 0 66.666667%;\r\n    max-width: 66.666667%;\r\n  }\r\n  .col-lg-9 {\r\n    flex: 0 0 75%;\r\n    max-width: 75%;\r\n  }\r\n  .col-lg-10 {\r\n    flex: 0 0 83.333333%;\r\n    max-width: 83.333333%;\r\n  }\r\n  .col-lg-11 {\r\n    flex: 0 0 91.666667%;\r\n    max-width: 91.666667%;\r\n  }\r\n  .col-lg-12 {\r\n    flex: 0 0 100%;\r\n    max-width: 100%;\r\n  }\r\n  .order-lg-first {\r\n    order: -1;\r\n  }\r\n  .order-lg-last {\r\n    order: 13;\r\n  }\r\n  .order-lg-0 {\r\n    order: 0;\r\n  }\r\n  .order-lg-1 {\r\n    order: 1;\r\n  }\r\n  .order-lg-2 {\r\n    order: 2;\r\n  }\r\n  .order-lg-3 {\r\n    order: 3;\r\n  }\r\n  .order-lg-4 {\r\n    order: 4;\r\n  }\r\n  .order-lg-5 {\r\n    order: 5;\r\n  }\r\n  .order-lg-6 {\r\n    order: 6;\r\n  }\r\n  .order-lg-7 {\r\n    order: 7;\r\n  }\r\n  .order-lg-8 {\r\n    order: 8;\r\n  }\r\n  .order-lg-9 {\r\n    order: 9;\r\n  }\r\n  .order-lg-10 {\r\n    order: 10;\r\n  }\r\n  .order-lg-11 {\r\n    order: 11;\r\n  }\r\n  .order-lg-12 {\r\n    order: 12;\r\n  }\r\n\r\n  .offset-lg-1 {\r\n    margin-left: 8.33333%;\r\n  }\r\n\r\n  .offset-lg-2 {\r\n    margin-left: 16.66667%;\r\n  }\r\n\r\n  .offset-lg-3 {\r\n    margin-left: 25%;\r\n  }\r\n\r\n  .offset-lg-4 {\r\n    margin-left: 33.33333%;\r\n  }\r\n\r\n  .offset-lg-5 {\r\n    margin-left: 41.66667%;\r\n  }\r\n\r\n  .offset-lg-6 {\r\n    margin-left: 50%;\r\n  }\r\n\r\n  .offset-lg-7 {\r\n    margin-left: 58.33333%;\r\n  }\r\n\r\n  .offset-lg-8 {\r\n    margin-left: 66.66667%;\r\n  }\r\n\r\n  .offset-lg-9 {\r\n    margin-left: 75%;\r\n  }\r\n\r\n  .offset-lg-10 {\r\n    margin-left: 83.33333%;\r\n  }\r\n\r\n  .offset-lg-11 {\r\n    margin-left: 91.66667%;\r\n  }\r\n}\r\n\r\n@media (max-width: $tablet) {\r\n  .col-md {\r\n    flex-basis: 0;\r\n    -webkit-box-flex: 1;\r\n    flex-grow: 1;\r\n    max-width: 100%;\r\n  }\r\n  .col-md-auto {\r\n    flex: 0 0 auto;\r\n    width: auto;\r\n    max-width: none;\r\n  }\r\n  .col-md-1 {\r\n    flex: 0 0 8.333333%;\r\n    max-width: 8.333333%;\r\n  }\r\n  .col-md-2 {\r\n    flex: 0 0 16.666667%;\r\n    max-width: 16.666667%;\r\n  }\r\n  .col-md-3 {\r\n    flex: 0 0 25%;\r\n    max-width: 25%;\r\n  }\r\n  .col-md-4 {\r\n    flex: 0 0 33.333333%;\r\n    max-width: 33.333333%;\r\n  }\r\n  .col-md-5 {\r\n    flex: 0 0 41.666667%;\r\n    max-width: 41.666667%;\r\n  }\r\n  .col-md-6 {\r\n    flex: 0 0 50%;\r\n    max-width: 50%;\r\n  }\r\n  .col-md-7 {\r\n    flex: 0 0 58.333333%;\r\n    max-width: 58.333333%;\r\n  }\r\n  .col-md-8 {\r\n    flex: 0 0 66.666667%;\r\n    max-width: 66.666667%;\r\n  }\r\n  .col-md-9 {\r\n    flex: 0 0 75%;\r\n    max-width: 75%;\r\n  }\r\n  .col-md-10 {\r\n    flex: 0 0 83.333333%;\r\n    max-width: 83.333333%;\r\n  }\r\n  .col-md-11 {\r\n    flex: 0 0 91.666667%;\r\n    max-width: 91.666667%;\r\n  }\r\n  .col-md-12 {\r\n    flex: 0 0 100%;\r\n    max-width: 100%;\r\n  }\r\n  .order-md-first {\r\n    order: -1;\r\n  }\r\n  .order-md-last {\r\n    order: 13;\r\n  }\r\n  .order-md-0 {\r\n    order: 0;\r\n  }\r\n  .order-md-1 {\r\n    order: 1;\r\n  }\r\n  .order-md-2 {\r\n    order: 2;\r\n  }\r\n  .order-md-3 {\r\n    order: 3;\r\n  }\r\n  .order-md-4 {\r\n    order: 4;\r\n  }\r\n  .order-md-5 {\r\n    order: 5;\r\n  }\r\n  .order-md-6 {\r\n    order: 6;\r\n  }\r\n  .order-md-7 {\r\n    order: 7;\r\n  }\r\n  .order-md-8 {\r\n    order: 8;\r\n  }\r\n  .order-md-9 {\r\n    order: 9;\r\n  }\r\n  .order-md-10 {\r\n    order: 10;\r\n  }\r\n  .order-md-11 {\r\n    order: 11;\r\n  }\r\n  .order-md-12 {\r\n    order: 12;\r\n  }\r\n\r\n  .offset-md-1 {\r\n    margin-left: 8.33333%;\r\n  }\r\n\r\n  .offset-md-2 {\r\n    margin-left: 16.66667%;\r\n  }\r\n\r\n  .offset-md-3 {\r\n    margin-left: 25%;\r\n  }\r\n\r\n  .offset-md-4 {\r\n    margin-left: 33.33333%;\r\n  }\r\n\r\n  .offset-md-5 {\r\n    margin-left: 41.66667%;\r\n  }\r\n\r\n  .offset-md-6 {\r\n    margin-left: 50%;\r\n  }\r\n\r\n  .offset-md-7 {\r\n    margin-left: 58.33333%;\r\n  }\r\n\r\n  .offset-md-8 {\r\n    margin-left: 66.66667%;\r\n  }\r\n\r\n  .offset-md-9 {\r\n    margin-left: 75%;\r\n  }\r\n\r\n  .offset-md-10 {\r\n    margin-left: 83.33333%;\r\n  }\r\n\r\n  .offset-md-11 {\r\n    margin-left: 91.66667%;\r\n  }\r\n\r\n  .m-md-0 {\r\n    margin: 0 !important;\r\n  }\r\n\r\n  .mt-md-0,\r\n  .my-md-0 {\r\n    margin-top: 0 !important;\r\n  }\r\n\r\n  .mr-md-0,\r\n  .mx-md-0 {\r\n    margin-right: 0 !important;\r\n  }\r\n\r\n  .mb-md-0,\r\n  .my-md-0 {\r\n    margin-bottom: 0 !important;\r\n  }\r\n\r\n  .ml-md-0,\r\n  .mx-md-0 {\r\n    margin-left: 0 !important;\r\n  }\r\n\r\n  .m-md-1 {\r\n    margin: 0.25rem !important;\r\n  }\r\n\r\n  .mt-md-1,\r\n  .my-md-1 {\r\n    margin-top: 0.25rem !important;\r\n  }\r\n\r\n  .mr-md-1,\r\n  .mx-md-1 {\r\n    margin-right: 0.25rem !important;\r\n  }\r\n\r\n  .mb-md-1,\r\n  .my-md-1 {\r\n    margin-bottom: 0.25rem !important;\r\n  }\r\n\r\n  .ml-md-1,\r\n  .mx-md-1 {\r\n    margin-left: 0.25rem !important;\r\n  }\r\n\r\n  .m-md-2 {\r\n    margin: 0.5rem !important;\r\n  }\r\n\r\n  .mt-md-2,\r\n  .my-md-2 {\r\n    margin-top: 0.5rem !important;\r\n  }\r\n\r\n  .mr-md-2,\r\n  .mx-md-2 {\r\n    margin-right: 0.5rem !important;\r\n  }\r\n\r\n  .mb-md-2,\r\n  .my-md-2 {\r\n    margin-bottom: 0.5rem !important;\r\n  }\r\n\r\n  .ml-md-2,\r\n  .mx-md-2 {\r\n    margin-left: 0.5rem !important;\r\n  }\r\n\r\n  .m-md-3 {\r\n    margin: 1rem !important;\r\n  }\r\n\r\n  .mt-md-3,\r\n  .my-md-3 {\r\n    margin-top: 1rem !important;\r\n  }\r\n\r\n  .mr-md-3,\r\n  .mx-md-3 {\r\n    margin-right: 1rem !important;\r\n  }\r\n\r\n  .mb-md-3,\r\n  .my-md-3 {\r\n    margin-bottom: 1rem !important;\r\n  }\r\n\r\n  .ml-md-3,\r\n  .mx-md-3 {\r\n    margin-left: 1rem !important;\r\n  }\r\n\r\n  .m-md-4 {\r\n    margin: 1.5rem !important;\r\n  }\r\n\r\n  .mt-md-4,\r\n  .my-md-4 {\r\n    margin-top: 1.5rem !important;\r\n  }\r\n\r\n  .mr-md-4,\r\n  .mx-md-4 {\r\n    margin-right: 1.5rem !important;\r\n  }\r\n\r\n  .mb-md-4,\r\n  .my-md-4 {\r\n    margin-bottom: 1.5rem !important;\r\n  }\r\n\r\n  .ml-md-4,\r\n  .mx-md-4 {\r\n    margin-left: 1.5rem !important;\r\n  }\r\n\r\n  .m-md-5 {\r\n    margin: 3rem !important;\r\n  }\r\n\r\n  .mt-md-5,\r\n  .my-md-5 {\r\n    margin-top: 3rem !important;\r\n  }\r\n\r\n  .mr-md-5,\r\n  .mx-md-5 {\r\n    margin-right: 3rem !important;\r\n  }\r\n\r\n  .mb-md-5,\r\n  .my-md-5 {\r\n    margin-bottom: 3rem !important;\r\n  }\r\n\r\n  .ml-md-5,\r\n  .mx-md-5 {\r\n    margin-left: 3rem !important;\r\n  }\r\n}\r\n\r\n@media (max-width: $mobile-large) {\r\n  .col-sm {\r\n    flex-basis: 0;\r\n    flex-grow: 1;\r\n    max-width: 100%;\r\n  }\r\n  .col-sm-auto {\r\n    flex: 0 0 auto;\r\n    width: auto;\r\n    max-width: none;\r\n  }\r\n  .col-sm-1 {\r\n    flex: 0 0 8.333333%;\r\n    max-width: 8.333333%;\r\n  }\r\n  .col-sm-2 {\r\n    flex: 0 0 16.666667%;\r\n    max-width: 16.666667%;\r\n  }\r\n  .col-sm-3 {\r\n    flex: 0 0 25%;\r\n    max-width: 25%;\r\n  }\r\n  .col-sm-4 {\r\n    flex: 0 0 33.333333%;\r\n    max-width: 33.333333%;\r\n  }\r\n  .col-sm-5 {\r\n    flex: 0 0 41.666667%;\r\n    max-width: 41.666667%;\r\n  }\r\n  .col-sm-6 {\r\n    flex: 0 0 50%;\r\n    max-width: 50%;\r\n  }\r\n  .col-sm-7 {\r\n    flex: 0 0 58.333333%;\r\n    max-width: 58.333333%;\r\n  }\r\n  .col-sm-8 {\r\n    flex: 0 0 66.666667%;\r\n    max-width: 66.666667%;\r\n  }\r\n  .col-sm-9 {\r\n    flex: 0 0 75%;\r\n    max-width: 75%;\r\n  }\r\n  .col-sm-10 {\r\n    flex: 0 0 83.333333%;\r\n    max-width: 83.333333%;\r\n  }\r\n  .col-sm-11 {\r\n    flex: 0 0 91.666667%;\r\n    max-width: 91.666667%;\r\n  }\r\n  .col-sm-12 {\r\n    flex: 0 0 100%;\r\n    max-width: 100%;\r\n  }\r\n  .order-sm-first {\r\n    order: -1;\r\n  }\r\n  .order-sm-last {\r\n    order: 13;\r\n  }\r\n  .order-sm-0 {\r\n    order: 0;\r\n  }\r\n  .order-sm-1 {\r\n    order: 1;\r\n  }\r\n  .order-sm-2 {\r\n    order: 2;\r\n  }\r\n  .order-sm-3 {\r\n    order: 3;\r\n  }\r\n  .order-sm-4 {\r\n    order: 4;\r\n  }\r\n  .order-sm-5 {\r\n    order: 5;\r\n  }\r\n  .order-sm-6 {\r\n    order: 6;\r\n  }\r\n  .order-sm-7 {\r\n    order: 7;\r\n  }\r\n  .order-sm-8 {\r\n    order: 8;\r\n  }\r\n  .order-sm-9 {\r\n    order: 9;\r\n  }\r\n  .order-sm-10 {\r\n    order: 10;\r\n  }\r\n  .order-sm-11 {\r\n    order: 11;\r\n  }\r\n  .order-sm-12 {\r\n    order: 12;\r\n  }\r\n  .offset-sm-0 {\r\n    margin-left: 0;\r\n  }\r\n  .offset-sm-1 {\r\n    margin-left: 8.33333%;\r\n  }\r\n\r\n  .offset-sm-2 {\r\n    margin-left: 16.66667%;\r\n  }\r\n\r\n  .offset-sm-3 {\r\n    margin-left: 25%;\r\n  }\r\n\r\n  .offset-sm-4 {\r\n    margin-left: 33.33333%;\r\n  }\r\n\r\n  .offset-sm-5 {\r\n    margin-left: 41.66667%;\r\n  }\r\n\r\n  .offset-sm-6 {\r\n    margin-left: 50%;\r\n  }\r\n\r\n  .offset-sm-7 {\r\n    margin-left: 58.33333%;\r\n  }\r\n\r\n  .offset-sm-8 {\r\n    margin-left: 66.66667%;\r\n  }\r\n\r\n  .offset-sm-9 {\r\n    margin-left: 75%;\r\n  }\r\n\r\n  .offset-sm-10 {\r\n    margin-left: 83.33333%;\r\n  }\r\n\r\n  .offset-sm-11 {\r\n    margin-left: 91.66667%;\r\n  }\r\n\r\n   .m-sm-0 {\r\n    margin: 0 !important;\r\n  }\r\n\r\n  .mt-sm-0,\r\n  .my-sm-0 {\r\n    margin-top: 0 !important;\r\n  }\r\n\r\n  .mr-sm-0,\r\n  .mx-sm-0 {\r\n    margin-right: 0 !important;\r\n  }\r\n\r\n  .mb-sm-0,\r\n  .my-sm-0 {\r\n    margin-bottom: 0 !important;\r\n  }\r\n\r\n  .ml-sm-0,\r\n  .mx-sm-0 {\r\n    margin-left: 0 !important;\r\n  }\r\n\r\n  .m-sm-1 {\r\n    margin: 0.25rem !important;\r\n  }\r\n\r\n  .mt-1,\r\n  .my-1 {\r\n    margin-top: 0.25rem !important;\r\n  }\r\n\r\n  .mr-sm-1,\r\n  .mx-sm-1 {\r\n    margin-right: 0.25rem !important;\r\n  }\r\n\r\n  .mb-sm-1,\r\n  .my-sm-1 {\r\n    margin-bottom: 0.25rem !important;\r\n  }\r\n\r\n  .ml-sm-1,\r\n  .mx-sm-1 {\r\n    margin-left: 0.25rem !important;\r\n  }\r\n\r\n  .m-sm-2 {\r\n    margin: 0.5rem !important;\r\n  }\r\n\r\n  .mt-sm-2,\r\n  .my-sm-2 {\r\n    margin-top: 0.5rem !important;\r\n  }\r\n\r\n  .mr-2,\r\n  .mx-2 {\r\n    margin-right: 0.5rem !important;\r\n  }\r\n\r\n  .mb-sm-2,\r\n  .my-sm-2 {\r\n    margin-bottom: 0.5rem !important;\r\n  }\r\n\r\n  .ml-sm-2,\r\n  .mx-sm-2 {\r\n    margin-left: 0.5rem !important;\r\n  }\r\n\r\n  .m-sm-3 {\r\n    margin: 1rem !important;\r\n  }\r\n\r\n  .mt-sm-3,\r\n  .my-sm-3 {\r\n    margin-top: 1rem !important;\r\n  }\r\n\r\n  .mr-sm-3,\r\n  .mx-sm-3 {\r\n    margin-right: 1rem !important;\r\n  }\r\n\r\n  .mb-sm-3,\r\n  .my-sm-3 {\r\n    margin-bottom: 1rem !important;\r\n  }\r\n\r\n  .ml-sm-3,\r\n  .mx-sm-3 {\r\n    margin-left: 1rem !important;\r\n  }\r\n\r\n  .m-sm-4 {\r\n    margin: 1.5rem !important;\r\n  }\r\n\r\n  .mt-sm-4,\r\n  .my-sm-4 {\r\n    margin-top: 1.5rem !important;\r\n  }\r\n\r\n  .mr-sm-4,\r\n  .mx-sm-4 {\r\n    margin-right: 1.5rem !important;\r\n  }\r\n\r\n  .mb-sm-4,\r\n  .my-sm-4 {\r\n    margin-bottom: 1.5rem !important;\r\n  }\r\n\r\n  .ml-sm-4,\r\n  .mx-sm-4 {\r\n    margin-left: 1.5rem !important;\r\n  }\r\n\r\n  .m-sm-5 {\r\n    margin: 3rem !important;\r\n  }\r\n\r\n  .mt-sm-5,\r\n  .my-sm-5 {\r\n    margin-top: 3rem !important;\r\n  }\r\n\r\n  .mr-sm-5,\r\n  .mx-sm-5 {\r\n    margin-right: 3rem !important;\r\n  }\r\n\r\n  .mb-sm-5,\r\n  .my-sm-5 {\r\n    margin-bottom: 3rem !important;\r\n  }\r\n\r\n  .ml-sm-5,\r\n  .mx-sm-5 {\r\n    margin-left: 3rem !important;\r\n  }\r\n\r\n\r\n}\r\n\r\n@media (max-width: $mobile) {\r\n  .col-xs {\r\n    flex-basis: 0;\r\n    flex-grow: 1;\r\n    max-width: 100%;\r\n  }\r\n  .col-xs-auto {\r\n    flex: 0 0 auto;\r\n    width: auto;\r\n    max-width: none;\r\n  }\r\n  .col-xs-1 {\r\n    flex: 0 0 8.333333%;\r\n    max-width: 8.333333%;\r\n  }\r\n  .col-xs-2 {\r\n    flex: 0 0 16.666667%;\r\n    max-width: 16.666667%;\r\n  }\r\n  .col-xs-3 {\r\n    flex: 0 0 25%;\r\n    max-width: 25%;\r\n  }\r\n  .col-xs-4 {\r\n    flex: 0 0 33.333333%;\r\n    max-width: 33.333333%;\r\n  }\r\n  .col-xs-5 {\r\n    flex: 0 0 41.666667%;\r\n    max-width: 41.666667%;\r\n  }\r\n  .col-xs-6 {\r\n    flex: 0 0 50%;\r\n    max-width: 50%;\r\n  }\r\n  .col-xs-7 {\r\n    flex: 0 0 58.333333%;\r\n    max-width: 58.333333%;\r\n  }\r\n  .col-xs-8 {\r\n    flex: 0 0 66.666667%;\r\n    max-width: 66.666667%;\r\n  }\r\n  .col-xs-9 {\r\n    flex: 0 0 75%;\r\n    max-width: 75%;\r\n  }\r\n  .col-xs-10 {\r\n    flex: 0 0 83.333333%;\r\n    max-width: 83.333333%;\r\n  }\r\n  .col-xs-11 {\r\n    flex: 0 0 91.666667%;\r\n    max-width: 91.666667%;\r\n  }\r\n  .col-xs-12 {\r\n    flex: 0 0 100%;\r\n    max-width: 100%;\r\n  }\r\n  .pr-xs-0 {\r\n    padding-right: 0 !important\r\n  }\r\n  .pr-xs-1 {\r\n    padding-right: 0.25rem !important\r\n  }\r\n  .order-xs-first {\r\n    order: -1;\r\n  }\r\n  .order-xs-last {\r\n    order: 13;\r\n  }\r\n  .order-xs-0 {\r\n    order: 0;\r\n  }\r\n  .order-xs-1 {\r\n    order: 1;\r\n  }\r\n  .order-xs-2 {\r\n    order: 2;\r\n  }\r\n  .order-xs-3 {\r\n    order: 3;\r\n  }\r\n  .order-xs-4 {\r\n    order: 4;\r\n  }\r\n  .order-xs-5 {\r\n    order: 5;\r\n  }\r\n  .order-xs-6 {\r\n    order: 6;\r\n  }\r\n  .order-xs-7 {\r\n    order: 7;\r\n  }\r\n  .order-xs-8 {\r\n    order: 8;\r\n  }\r\n  .order-xs-9 {\r\n    order: 9;\r\n  }\r\n  .order-xs-10 {\r\n    order: 10;\r\n  }\r\n  .order-xs-11 {\r\n    order: 11;\r\n  }\r\n  .order-xs-12 {\r\n    order: 12;\r\n  }\r\n  .offset-xs-0 {\r\n    margin-left: 0;\r\n  }\r\n  .offset-xs-1 {\r\n    margin-left: 8.33333%;\r\n  }\r\n\r\n  .offset-xs-2 {\r\n    margin-left: 16.66667%;\r\n  }\r\n\r\n  .offset-xs-3 {\r\n    margin-left: 25%;\r\n  }\r\n\r\n  .offset-xs-4 {\r\n    margin-left: 33.33333%;\r\n  }\r\n\r\n  .offset-xs-5 {\r\n    margin-left: 41.66667%;\r\n  }\r\n\r\n  .offset-xs-6 {\r\n    margin-left: 50%;\r\n  }\r\n\r\n  .offset-xs-7 {\r\n    margin-left: 58.33333%;\r\n  }\r\n\r\n  .offset-xs-8 {\r\n    margin-left: 66.66667%;\r\n  }\r\n\r\n  .offset-xs-9 {\r\n    margin-left: 75%;\r\n  }\r\n\r\n  .offset-xs-10 {\r\n    margin-left: 83.33333%;\r\n  }\r\n\r\n  .offset-xs-11 {\r\n    margin-left: 91.66667%;\r\n  }\r\n  .mb-xs-3,\r\n  .my-xs-3 {\r\n    margin-bottom: 1rem !important;\r\n  }\r\n  .mb-xs-2,\r\n  .my-xs-2 {\r\n    margin-bottom: 0.5rem !important;\r\n  }\r\n  .mb-xs-1,\r\n  .my-xs-1 {\r\n    margin-bottom: 0.25rem !important;\r\n  }\r\n  .mt-xs-0 {\r\n    margin-top: 0 !important;\r\n  }\r\n}","html {\r\n  font-size: 62.5%;\r\n}\r\nbody {\r\n  display: flex;\r\n  flex-direction: column;\r\n  justify-content: space-between;\r\n  min-height: 100vh;\r\n\r\n  font-family: $open-sans;\r\n  color: #212121;\r\n  font-weight: 400;\r\n  font-size: 1.6rem;\r\n  line-height: 1.2;\r\n  background-color:#efefef;\r\n\r\n  &.no-scroll {\r\n    overflow-y: hidden;\r\n  }\r\n}\r\n\r\nmain {\r\n  padding: 40px 0;\r\n\r\n  @include mobile-large {\r\n    padding: 30px 0;\r\n  }\r\n}\r\n\r\nfooter {\r\n  margin-top: auto;\r\n}\r\n\r\n.hidden-title {\r\n  visibility: hidden;\r\n  height: 0;\r\n}\r\n\r\n.d-none {\r\n  display: none !important;\r\n}","//breakpoints\r\n$widescreen: 1440px;\r\n$laptop: 1200px;\r\n$tablet: 992px;\r\n$mobile-large: 768px;\r\n$mobile: 576px;\r\n\r\n//colors\r\n\r\n\r\n//fonts\r\n$base-fonts: system-ui, -apple-system, \"Segoe UI\", Roboto, \"Helvetica Neue\", \"Noto Sans\", \"Liberation Sans\", Arial, sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\", \"Noto Color Emoji\";\r\n$open-sans: 'Open Sans', sans-serif;\r\n$montserrat: 'Montserrat', sans-serif;\r\n\r\n//colors\r\n//$primary-color: #F6A200;\r\n$primary-color: #F9A825;\r\n$secondary-color: #8bc34a;\r\n//$secondary-color: #43a047;\r\n$gray: #90a4ae;",".burger {\r\n  display: none;\r\n  width: 3rem;\r\n  height: 2rem;\r\n  padding: 0;\r\n\r\n  font-size: 0;\r\n  color: transparent;\r\n\r\n  position: absolute;\r\n  top: 50%;\r\n  left: 1.5rem;\r\n  transform: translateY(-50%);\r\n  background: none;\r\n  border: none;\r\n\r\n  &::before, &::after, span {\r\n    display: block;\r\n    width: 100%;\r\n    height: 2px;\r\n    background-color: #212121;\r\n    position: absolute;\r\n    left: 0;\r\n  }\r\n\r\n  &::before, &::after {\r\n    content: \"\";\r\n    transition: transform .2s linear;\r\n  }\r\n\r\n  &::before {\r\n    top: 0;\r\n  }\r\n\r\n  &::after {\r\n    bottom: 0;\r\n  }\r\n\r\n  span {\r\n    top: 50%;\r\n    transform: translateY(-50%);\r\n    transition: opacity .2s linear;\r\n  }\r\n\r\n  .show-sidebar & {\r\n    span {\r\n      opacity: 0;\r\n    }\r\n\r\n    &::before, &::after {\r\n      top: 50%;\r\n    }\r\n\r\n    &::before {\r\n      transform: rotate(45deg);\r\n    }\r\n\r\n    &::after {\r\n      transform: rotate(-45deg);\r\n    }\r\n  }\r\n\r\n  @include tablet {\r\n    display: block;\r\n  }\r\n}",".js-tab-content {\r\n  display: none;\r\n\r\n  &.active {\r\n    display: block;\r\n    animation: .5s linear appear;\r\n  }\r\n\r\n  @keyframes appear {\r\n    from {\r\n      transform: scale3d(.95, .95, 1);\r\n      opacity: .5;\r\n    }\r\n    to {\r\n      transform: scale3d(1, 1, 1);\r\n      opacity: 1;\r\n    }\r\n  }\r\n}",".logo {\r\n  max-width: 130px;\r\n\r\n  img {\r\n    width: 100%;\r\n    height: 100%;\r\n    object-fit: cover;\r\n  }\r\n\r\n  @include tablet {\r\n    max-width: 120px;\r\n  }\r\n\r\n  @include mobile-large {\r\n    max-width: 100px;\r\n  }\r\n}",".to-top {\r\n  cursor: pointer;\r\n  width: 30px;\r\n  height: 30px;\r\n  fill: $primary-color;\r\n  position: fixed;\r\n  right: 20px;\r\n  bottom: 100px;\r\n  opacity: 1;\r\n  visibility: visible;\r\n  transition: opacity .2s linear;\r\n\r\n  &.hidden {\r\n    opacity: 0;\r\n    visibility: hidden;\r\n  }\r\n}",".section {\r\n  padding: 40px 0;\r\n\r\n  @include mobile-large {\r\n    padding: 14px 0;\r\n  }\r\n\r\n  &--nopading {\r\n    padding: 0;\r\n  }\r\n\r\n  &__title {\r\n    text-align: center;\r\n    font-family: $montserrat;\r\n    font-weight: 500;\r\n    font-size: 46px;\r\n    margin-bottom: 14px;\r\n    text-shadow: -2px 2px 2px rgba(206,89,55,0.4);\r\n\r\n    @include mobile-large {\r\n      font-size: 40px;\r\n    }\r\n\r\n    @include mobile {\r\n      font-size: 36px;\r\n    }\r\n  }\r\n}",".card {\r\n  overflow: hidden;\r\n  box-shadow: -4px 4px 2px rgba(216,216,216,0.75);\r\n  position: relative;\r\n  display: block;\r\n  border-radius: 8px;\r\n  width: 100%;\r\n  max-width: 460px;\r\n  margin: 0 auto;\r\n  background-color: #fff;\r\n  padding-bottom: 60px;\r\n\r\n  @include mobile {\r\n    max-width: 360px;\r\n  }\r\n\r\n  &__img {\r\n    position: relative;\r\n    height: 300px;\r\n    width: 100%;\r\n    overflow: hidden;\r\n\r\n    @include laptop {\r\n      height: 240px;\r\n    }\r\n\r\n    @include tablet {\r\n      height: 280px;\r\n    }\r\n\r\n    @include mobile-large {\r\n      height: 200px;\r\n    }\r\n\r\n    @include mobile {\r\n      height: 240px;\r\n    }\r\n\r\n    img {\r\n      width: 100%;\r\n      height: 100%;\r\n      object-fit: cover;\r\n      transition: transform 3s ease-in;\r\n    }\r\n\r\n    &:hover {\r\n      img {\r\n        transform: scale(1.2);\r\n      }\r\n    }\r\n  }\r\n\r\n  &__share-icon {\r\n    display: none;\r\n    position: absolute;\r\n    bottom: 8px;\r\n    right: 8px;\r\n    width: 42px;\r\n    height: 42px;\r\n    fill: $secondary-color;\r\n\r\n    &:hover {\r\n      fill: $primary-color;\r\n    }\r\n  }\r\n\r\n  &__info {\r\n    padding: 12px 12px 16px 12px;\r\n  }\r\n\r\n  &__main-info {\r\n    font-size: 20px;\r\n    font-weight: 500;\r\n  }\r\n\r\n  &__beertype {\r\n    color: $secondary-color;\r\n    margin: 4px 0;\r\n    min-height: 48px;\r\n\r\n    @include laptop {\r\n      min-height: 72px;\r\n    }\r\n  }\r\n\r\n  &__title {\r\n    font-size: 24px;\r\n    font-weight: 600;\r\n    font-family: $montserrat;\r\n    min-height: 58px;\r\n    \r\n    &:hover {\r\n      text-decoration: underline;\r\n    }\r\n  }\r\n\r\n  &__testimonial {\r\n    display: flex;\r\n    justify-content: space-between;\r\n    align-items: center;\r\n    font-size: 15px;\r\n    margin: 6px  -10px;\r\n    padding: 12px 0;\r\n    border-top: 1px dashed $gray;\r\n    border-bottom: 1px dashed $gray;\r\n  }\r\n\r\n  &__test-item {\r\n    width: 33.3333%;\r\n    padding: 0 10px;\r\n  }\r\n\r\n  &__test-value {\r\n    font-size: 20px;\r\n    font-weight: 600;\r\n    margin-top: 12px;\r\n    margin-bottom: 4px;\r\n  }\r\n\r\n  &__test-progress {\r\n    position: relative;\r\n    height: 8px;\r\n    background-color: #bbb;\r\n  }\r\n\r\n  &__test-progress-value {\r\n    position: absolute;\r\n    left: 0;\r\n    top: 0;\r\n    bottom: 0;\r\n    height: 100%;\r\n    background-color: $primary-color;\r\n  }\r\n\r\n  &__price {\r\n    font-size: 34px;\r\n    line-height: 1;\r\n    font-weight: 600;\r\n    margin-top: 12px;\r\n\r\n    span {\r\n      display: block;\r\n\r\n      &:last-child {\r\n        font-size: 20px;\r\n        color: $gray;\r\n      }\r\n    }\r\n  }\r\n\r\n  &__price-wrapper {\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: space-between;\r\n  }\r\n\r\n  &__cart {\r\n    display: none;\r\n    cursor: pointer;\r\n    height: 48px;\r\n    width: 48px;\r\n    transition: fill .2s linear;\r\n\r\n    &:hover {\r\n      fill: darken($secondary-color, 10%);\r\n    }\r\n  }\r\n\r\n  &__bottom {\r\n    padding: 12px;\r\n    text-align: right;\r\n    position: absolute;\r\n    bottom: 0;\r\n    right: 0;\r\n  }\r\n\r\n  &__details {\r\n    font-size: 22px;\r\n    font-weight: 600;\r\n    text-decoration: underline;\r\n    color: $secondary-color;\r\n    \r\n    &:hover {\r\n      text-decoration: none;\r\n    }\r\n  }\r\n}",".filter {\r\n  display: none;\r\n  //display: flex;\r\n  justify-content: space-between;\r\n  align-items: center;\r\n  font-size: 20px;\r\n  padding: 18px;\r\n  border: 1px solid #d7d7d7;\r\n  background-color: #ffffff;\r\n  margin-bottom: 20px;\r\n  border-radius: 8px;\r\n\r\n  @include laptop {\r\n    font-size: 18px;\r\n    padding: 12px;\r\n  }\r\n\r\n  @include mobile-large {\r\n    flex-direction: column-reverse;\r\n    align-items: flex-start;\r\n  }\r\n\r\n  @include mobile {\r\n    font-size: 16px;\r\n    padding: 8px;\r\n  }\r\n\r\n  &__sort {\r\n    width: 35%;\r\n    display: flex;\r\n    align-items: center;\r\n    padding-right: 18px;\r\n    overflow: hidden;\r\n\r\n    @include widescreen {\r\n      padding-right: 12px;\r\n    }\r\n\r\n    @include tablet {\r\n      width: 50%;\r\n      padding-right: 12px;\r\n    }\r\n\r\n    @include mobile-large {\r\n      width: 100%;\r\n    }\r\n  }\r\n\r\n  &__sort-by {\r\n    display: flex;\r\n    align-items: center;\r\n    user-select: none;\r\n  }\r\n\r\n  &__sort-direction {\r\n    cursor: pointer;\r\n    margin-right: 8px;\r\n    \r\n    svg {\r\n      padding-top: 4px;\r\n      width: 22px;\r\n      height: 22px;\r\n      cursor: pointer;\r\n      fill: #222;\r\n      transition: fill .2s linear;\r\n\r\n      &:hover {\r\n        fill: $secondary-color;\r\n      }\r\n    }\r\n    \r\n    &.down {\r\n      svg {\r\n        &:last-child {\r\n          display: none;\r\n        }\r\n      }\r\n    }\r\n    &.up {\r\n      svg {\r\n        &:first-child {\r\n          display: none;\r\n        }\r\n      }\r\n    }\r\n  }\r\n\r\n  &__input {\r\n    width: 30%;\r\n    display: flex;\r\n    align-items: center;\r\n    border-left: 1px solid $gray;\r\n    border-right: 1px solid $gray;\r\n    background-color: transparent;\r\n    padding: 0 22px;\r\n    font-family: 'Roboto', sans-serif;\r\n    color: #707070;\r\n    font-size: 15px;\r\n\r\n    @include laptop {\r\n      padding: 0 12px;\r\n    }\r\n\r\n    @include tablet {\r\n      display: none;\r\n    }\r\n\r\n    input {\r\n      width: 100%;\r\n      font-size: 20px;\r\n      padding-bottom: 4px;\r\n      margin-left: 12px;\r\n      border-bottom: 2px dashed $gray;\r\n\r\n      &:focus {\r\n        border-color: $secondary-color;\r\n      }\r\n\r\n      @include widescreen {\r\n        font-size: 18px;\r\n        padding-bottom: 2px;\r\n        margin-left: 8px;\r\n      }\r\n    }\r\n\r\n    svg {\r\n      width: 20px;\r\n      height: 20px;\r\n      cursor: pointer;\r\n      fill: #222;\r\n\r\n      @include laptop {\r\n        width: 18px;\r\n        height: 18px;\r\n      }\r\n    }\r\n  }\r\n\r\n  &__filter {\r\n    display: flex;\r\n    align-items: center;\r\n    padding-left: 12px;\r\n    width: 35%;\r\n    user-select: none;\r\n    overflow: hidden;\r\n\r\n    @include tablet {\r\n      width: 50%;\r\n      justify-content: flex-end;\r\n    }\r\n\r\n    @include mobile-large {\r\n      width: 100%;\r\n      padding-left: 0;\r\n      margin-bottom: 14px;\r\n      justify-content: flex-start;\r\n    }\r\n  }\r\n\r\n  &__select {\r\n    padding: 4px  8px;\r\n    border: 2px solid #444;\r\n    border-radius: 8px;\r\n    font-size: 16px;\r\n    font-family: inherit;\r\n    margin-left: 8px;\r\n\r\n    @include laptop {\r\n      font-size: 15px;\r\n      padding: 4px;\r\n    }\r\n\r\n    @include mobile-large {\r\n      padding: 2px 4px;\r\n    }\r\n\r\n    @include mobile {\r\n      padding: 1px 2px;\r\n      margin-left: 4px;\r\n    }\r\n\r\n    &:focus {\r\n      border-color: $secondary-color;\r\n    }\r\n\r\n    &:focus-visible {\r\n      border-color: $secondary-color;\r\n      outline: none;\r\n    }\r\n  }\r\n}",".modal {\r\n  position: relative;\r\n  display: flex;\r\n  background-color: #fff;\r\n  width: 90%;\r\n  max-width: 1500px;\r\n  max-height: 80vh;\r\n  min-height: 60vh;\r\n  margin: 0 auto;\r\n  border-radius: 12px;\r\n  overflow: hidden;\r\n\r\n  @include tablet {\r\n    flex-direction: column;\r\n    max-height: 90vh;\r\n  }\r\n\r\n  @include mobile {\r\n    width: 90%;\r\n    max-width: 420px;\r\n  }\r\n\r\n  &__close {\r\n    z-index: 111;\r\n    cursor: pointer;\r\n    width: 30px;\r\n    height: 30px;\r\n    position: absolute;\r\n    top: 10px;\r\n    right: 10px;\r\n    fill: $gray;\r\n    transition: fill .2s linear;\r\n\r\n    &:hover {\r\n      fill: $primary-color;\r\n    }\r\n  }\r\n\r\n\r\n  &__angle {\r\n    cursor: pointer;\r\n    position: absolute;\r\n    top: 50%;\r\n    transform: translateY(-50);\r\n    background-color: #bbb;\r\n    padding: 6px 4px;\r\n    fill: rgba(#fff, .7);\r\n    width: 28px;\r\n    transition: fill .2s linear, background-color .2s linear;\r\n\r\n    &--left {\r\n      left: 8px;\r\n      border-radius: 10px 0 0 10px;\r\n    }\r\n\r\n    &--right {\r\n      right: 8px;\r\n      border-radius: 0 10px 10px 0;\r\n    }\r\n\r\n    &:hover {\r\n      background-color: #999;\r\n      fill: #fff;\r\n    }\r\n  }\r\n\r\n  &__left {\r\n    position: relative;\r\n    width: 500px;\r\n    flex-shrink: 0;\r\n    min-height: 100%;\r\n    overflow: hidden;\r\n\r\n    @include laptop {\r\n      width: 400px;\r\n    }\r\n\r\n    @include tablet {\r\n      width: 100%;\r\n      border-radius: 0;\r\n      min-height: 360px;\r\n      height: 360px;\r\n      margin: 0 auto;\r\n    }\r\n\r\n    @include mobile {\r\n      min-height: 460px;\r\n      height: 460px;\r\n    }\r\n\r\n    .siema {\r\n      height: 100%;\r\n\r\n      div {\r\n        height: 100%;\r\n      }\r\n    }\r\n  }\r\n\r\n  &__img {\r\n    width: 100%;\r\n    height: 100%;\r\n\r\n    @include tablet {\r\n      padding: 20px 0 0 0;\r\n    }\r\n\r\n    @include mobile-large {\r\n      padding: 10px 0 0 0;\r\n    }\r\n\r\n    @include mobile {\r\n      padding: 0;\r\n    }\r\n\r\n    img {\r\n      width: 100%;\r\n      height: 100%;\r\n      object-fit: cover;\r\n      object-position: center center;\r\n\r\n      @include tablet {\r\n        object-fit: contain;\r\n      }\r\n\r\n      @include mobile {\r\n        object-fit: cover;\r\n      }\r\n    }\r\n  }\r\n\r\n  &__right {\r\n    padding: 20px;\r\n    max-height: 100%;\r\n    overflow-y: auto;\r\n    scrollbar-width: thin;\r\n    scrollbar-color: #ccc darken($secondary-color, 10%);\r\n\r\n    /* Работает в Chrome, Edge и Safari */\r\n    &::-webkit-scrollbar {\r\n      width: 8px;\r\n    }\r\n\r\n    &::-webkit-scrollbar-track {\r\n      background: #ccc;\r\n      padding: 4px 0;\r\n    }\r\n\r\n    &::-webkit-scrollbar-thumb {\r\n      background-color: darken($secondary-color, 10%);\r\n      border-radius: 28px;\r\n    }\r\n\r\n    @include tablet {\r\n      width: 100%;\r\n    }\r\n\r\n    @include mobile {\r\n      padding: 14px 10px;\r\n    }\r\n  }\r\n\r\n  &__title {\r\n    font-size: 36px;\r\n    font-family: $montserrat;\r\n    font-weight: 600;\r\n    padding-right: 16px;\r\n\r\n    @include mobile {\r\n      font-size: 30px;\r\n    }\r\n  }\r\n\r\n  &__beertype {\r\n    @extend .card__beertype;\r\n    font-size: 20px;\r\n    min-height: 1px;\r\n\r\n    @include mobile {\r\n      font-size: 18px;\r\n    }\r\n  }\r\n\r\n  &__price-wrapper {\r\n    @extend .card__price-wrapper;\r\n    margin: 10px 0;\r\n\r\n    .btn {\r\n      display: none;\r\n    }\r\n  }\r\n\r\n  &__price {\r\n    @extend .card__price;\r\n  }\r\n\r\n  &__cart {\r\n    @extend .card__cart;\r\n  }\r\n\r\n  &__testimonial {\r\n    @extend .card__testimonial;\r\n    margin-bottom: 12px;\r\n  }\r\n\r\n  &__test-item {\r\n    @extend .card__test-item;\r\n  }\r\n\r\n  &__test-title {\r\n    font-size: 20px;\r\n\r\n    @include mobile {\r\n      font-size: 16px;\r\n    }\r\n  }\r\n\r\n  &__test-value {\r\n    @extend .card__test-value;\r\n    font-size: 22px;\r\n\r\n    @include mobile {\r\n      font-size: 18px;\r\n    }\r\n  }\r\n\r\n  &__test-progress {\r\n    @extend .card__test-progress;\r\n  }\r\n\r\n  &__test-progress-value {\r\n    @extend .card__test-progress-value;\r\n  }\r\n\r\n  &__description {\r\n    h1, h2, h3, h4, h5, h6, p, pre, div, table, iframe, blockquote, dl, ul, ol {\r\n      margin-bottom: 8px;\r\n    }\r\n  }\r\n  \r\n  .someclass {\r\n    background-image: url(\"../../img/lemonade-m.jpg\"), url(\"../../img/lemonade-m1.jpg\"), url(\"../../img/cidre-logo-m.png\"), url(\"../../img/cidr-strawberry-m.jpg\"), url(\"../../img/bocal.jpg\"), url(\"../../img/bocal-m.jpg\"), url(\"../../img/bocal-m1.jpg\"), url(\"../../img/grinky.jpg\"), url(\"../../img/grinky-m.jpg\"), url(\"../../img/grinky-craft-m.jpg\"), url(\"../../img/grinky-craft.jpg\"), url(\"../../img/grinky-domashni-m.jpg\"), url(\"../../img/grinky-domashni-m1.jpg\"), url(\"../../img/grinky-domashni.jpg\"), url(\"../../img/vuha-m.jpg\"), url(\"../../img/vuha-m1.jpg\"), url(\"../../img/vuha-m2.jpg\"), url(\"../../img/vuha-m.jpg\"), url(\"../../img/vuha.jpg\"), url(\"../../img/vuha-m3.jpg\"), url(\"../../img/anchous-m.jpg\"), url(\"../../img/anchous-m1.jpg\"), url(\"../../img/anchous.JPG\"), url(\"../../img/arahis-m.jpg\"), url(\"../../img/arahis.jpg\"), url(\"../../img/gustira-m.jpg\"), url(\"../../img/gustira-m1.jpg\"), url(\"../../img/gustira.jpg\"), url(\"../../img/smugastyk-m.jpg\"), url(\"../../img/smugastyk-m1.JPG\"), url(\"../../img/smugastyk.JPG\"),  url(\"../../img/taran-m.jpg\"),  url(\"../../img/taran-m1.jpg\"),  url(\"../../img/taran.jpg\"), url(\"../../img/ikra-sudaka.JPG\"), url(\"../../img/ikra-sudaka-m.jpg\"), url(\"../../img/ikra-sudaka-m1.jpg\"), url(\"../../img/ikrianyk-norvezkyi-m.jpg\"), url(\"../../img/ikrianyk-norvezkyi-m1.jpg\"), url(\"../../img/ikrianyk-norvezkyi.jpg\"), url(\"../../img/kabanosy-m.jpg\"), url(\"../../img/kabanosy-m1.jpg\"), url(\"../../img/kabanosy.jpg\"), url(\"../../img/kalmar-struzhka-m.jpg\"), url(\"../../img/kalmar-struzhka.jpg\"), url(\"../../img/kalmar-struzhka-m1.jpg\"), url(\"../../img/kalmar-struzhka-krab-m.jpg\"), url(\"../../img/kalmar-struzhka-krab-m1.jpg\"), url(\"../../img/kalmar-struzhka-krab.jpg\"), url(\"../../img/kilce-kalmara-m.jpg\"), url(\"../../img/kilce-kalmara-m1.jpg\"), url(\"../../img/kilce-kalmara.jpg\"), url(\"../../img/koriushka-m.jpg\"), url(\"../../img/koriushka-m1.jpg\"), url(\"../../img/koriushka.jpg\"), url(\"../../img/kranch-m.jpg\"), url(\"../../img/kranch-m1.jpg\"), url(\"../../img/kranch-m2.jpg\"), url(\"../../img/kranch.jpg\"), url(\"../../img/kukurudza-m.jpg\"), url(\"../../img/kukurudza-m1.jpg\"), url(\"../../img/kukurudza.jpg\"), url(\"../../img/pautynka-kalmara-m.jpg\"), url(\"../../img/pautynka-kalmara-m1.jpg\"), url(\"../../img/pautynka-kalmara.jpg\"), url(\"../../img/kalmar-peruanskyi-m.jpg\"), url(\"../../img/kalmar-peruanskyi-m1.jpg\"), url(\"../../img/kalmar-peruanskyi.jpg\"),  url(\"../../img/plitka-m.jpg\"), url(\"../../img/plitka-m1.jpg\"), url(\"../../img/plitka.jpg\"), url(\"../../img/syr-solomka-m.jpg\"), url(\"../../img/syr-solomka-m1.jpg\"), url(\"../../img/syr-solomka.jpg\"), url(\"../../img/smuga-lososia-m.jpg\"), url(\"../../img/smuga-lososia-m1.jpg\"), url(\"../../img/smuga-lososia.jpg\"), url(\"../../img/tunec-m.jpg\"), url(\"../../img/tunec-m1.jpg\"), url(\"../../img/tunec.jpg\"), url(\"../../img/fistashka-m.jpg\"), url(\"../../img/fistashka-m1.jpg\"), url(\"../../img/fistashka.jpg\"), url(\"../../img/hamon-m.jpg\"), url(\"../../img/hamon.jpg\"), url(\"../../img/chehon-m.jpg\"), url(\"../../img/chehon-m1.jpg\"), url(\"../../img/chehon.jpg\"), url(\"../../img/dizhonski-m.jpg\"), url(\"../../img/dizhonski-m1.jpg\"), url(\"../../img/dizhonski.jpg\"), url(\"../../img/berdychiv-pshen-m.jpg\"), url(\"../../img/berdychiv-pshen.jpg\"), url(\"../../img/yantarna-m.jpg\"), url(\"../../img/yantarna-m1.jpg\"), url(\"../../img/yantarna.jpg\"), url(\"../../img/miaso-chipsy-m.jpg\"), url(\"../../img/miaso-chipsy-m1.jpg\"), url(\"../../img/miaso-chipsy.jpg\"), url(\"../../img/liasch-m.jpg\"), url(\"../../img/liasch-m1.jpg\"), url(\"../../img/liasch.jpg\"), url(\"../../img/nalyvka-m.jpg\"), url(\"../../img/nalyvka-m1.jpg\"), url(\"../../img/nalyvka-m2.jpg\"), url(\"../../img/nalyvka.jpg\"), url(\"../../img/vyno-m.jpg\"), url(\"../../img/vyno-m1.jpg\"), url(\"../../img/vyno-m2.jpg\"), url(\"../../img/vyno-m3.jpg\"), url(\"../../img/vyno-m4.jpg\"), url(\"../../img/vyno-m5.jpg\"), url(\"../../img/vyno.jpg\"), url(\"../../img/stella-m.jpg\"), url(\"../../img/stella.jpg\"), url(\"../../img/sik-bob-m.jpg\"), url(\"../../img/sik-bob.jpg\");\r\n  }\r\n  .someclass1 {\r\n    background-image:url(\"../../img/cidre-logo-m.jpg\"),  url(\"../../img/cidre-manho-persyk.jpg\"), url(\"../../img/cidr-cactus.jpg\"), url(\"../../img/cidre-medusa.jpg\"), url(\"../../img/bocal.jpg\"), url(\"../../img/chips.jpg\"), url(\"../../img/chips-m.jpg\"), url(\"../../img/limonad.jpg\"), url(\"../../img/cidre-logo.png\"), url(\"../../img/limonad-m2.jpg\"), url(\"../../img/mohito.jpg\"), url(\"../../img/mohito-1.jpg\"), url(\"../../img/mohito-m.jpg\"), url(\"../../img/kvas.jpg\"), url(\"../../img/kvas-1.jpg\"), url(\"../../img/kvas-m.jpg\"), url(\"../../img/kaktus-m.png\"), url(\"../../img/kaktus.png\"), url(\"../../img/fragolino-m.jpg\"), url(\"../../img/cheske-m.jpg\"), url(\"../../img/cheske.jpg\"), url(\"../../img/cheske-m1.jpg\"), url(\"../../img/opillia-m.jpg\"), url(\"../../img/opillia-m1.jpg\"), url(\"../../img/opillia.jpg\"), url(\"../../img/berdychiv-m.jpg\"), url(\"../../img/berdychiv-m1.jpeg\"), url(\"../../img/berdychiv.png\"), url(\"../../img/bierwelle.png\"), url(\"../../img/bierwelle-m.JPG\"), url(\"../../img/bierwelle-m1.jpg\"), url(\"../../img/blanche-de-kyiv-m.jpg\"), url(\"../../img/blanche-de-kyiv.jpg\"), url(\"../../img/blanche-de-kyiv-m1.jpg\"),url(\"../../img/waissburg-lager-m1.jpg\"), url(\"../../img/uman-medove-m-1.jpg\"), url(\"../../img/uman-medove-m.jpg\"), url(\"../../img/uman-medove.jpg\"), url(\"../../img/weissburg-dunkel.jpg\"), url(\"../../img/waissburg-dunke-m1.png\"), url(\"../../img/waissburg-dunkel-m.png\"), url(\"../../img/waissburg-blanche-m.JPG\"), url(\"../../img/wasiiburg-blanche-m1.jpeg\"), url(\"../../img/waiisburg-blanche.jpg\"), url(\"../../img/waissburg-lager-m.jpg\"), url(\"../../img/waissburg-lager.jpg\"), url(\"../../img/hmelpyvo-m.jpg\"), url(\"../../img/hmelpyvo-m1.png\"), url(\"../../img/hmelpyvo.JPG\");\r\n  }\r\n}",".btn {\r\n  font-family: $montserrat;\r\n  padding: 10px 20px;\r\n  font-size: 20px;\r\n  font-weight: 600;\r\n  border-radius: 8px;\r\n  border: 2px solid $secondary-color;\r\n  background-color: transparent;\r\n  transition: color .2s linear, background-color .2s linear;\r\n\r\n  &:hover {\r\n    color: #fff;\r\n    background-color: $secondary-color;\r\n  }\r\n}",".header {\r\n  padding: 10px 0;\r\n  font-size: 20px;\r\n  background-color: #fff;\r\n  box-shadow: -10px 10px 10px rgba(#000, .3);\r\n  border-radius: 0 0 10px 10px;\r\n\r\n  &__inner {\r\n    display: flex;\r\n    justify-content: space-between;\r\n    align-items: center;\r\n    font-family: $montserrat;\r\n\r\n    @include tablet {\r\n      font-size: 20px;\r\n    }\r\n\r\n    @include mobile-large {\r\n      font-size: 18px;\r\n    }\r\n  }\r\n\r\n  &__info {\r\n    max-width: calc(82% - 130px);\r\n    padding: 0 10px;\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: center;\r\n    overflow: hidden;\r\n\r\n    @include laptop {\r\n      flex-direction: column;\r\n    }\r\n\r\n    @include tablet {\r\n      max-width: calc(78% - 120px);\r\n    }\r\n\r\n    @include mobile-large {\r\n      max-width: calc(78% - 100px);\r\n      align-items: start;\r\n      padding: 0 8px;\r\n    }\r\n\r\n    @include mobile {\r\n      max-width: 100%;\r\n      padding-right: 0;\r\n    }\r\n  }\r\n\r\n  &__icon {\r\n    height: 20px;\r\n    margin-right: 6px;\r\n    fill: #333;\r\n    flex-shrink: 0;\r\n    transition: fill .2s linear;\r\n\r\n    @include tablet {\r\n      height: 22px;\r\n    }\r\n\r\n    @include mobile-large {\r\n      height: 20px;\r\n    }\r\n  }\r\n\r\n  &__item {\r\n    @extend .flex-items-center;\r\n    transition: color .2s linear;\r\n    padding-right: 12px;\r\n\r\n    @include laptop {\r\n      padding-right: 0;\r\n      max-width: 100%;\r\n    }\r\n\r\n    &:first-child {\r\n      @include laptop {\r\n        margin-bottom: 18px;\r\n      }\r\n      @include mobile-large {\r\n        margin-bottom: 12px;\r\n      }\r\n      span {\r\n        @extend .text-nowrap;\r\n      }\r\n    }\r\n\r\n    &:last-child {\r\n      padding-right: 0;\r\n      padding-left: 12px;\r\n      border-left: 1px dashed #333;\r\n\r\n      @include laptop {\r\n        border-left: none;\r\n        padding-left: 0;\r\n        max-width: 100%;\r\n      }\r\n    }\r\n\r\n    &:hover {\r\n      color: $secondary-color;\r\n\r\n      svg {\r\n        fill: $secondary-color;\r\n      }\r\n    }\r\n\r\n    .footer & {\r\n      &:hover {\r\n        color: #ccc;\r\n\r\n        svg {\r\n          fill: #ccc;\r\n        }\r\n      }\r\n    }\r\n  }\r\n\r\n  &__time {\r\n    @extend .flex-items-center;\r\n    max-width: 18%;\r\n\r\n    @include tablet {\r\n      max-width: 22%;\r\n    }\r\n\r\n    @include mobile {\r\n      display: none;\r\n    }\r\n  }\r\n}",".categories {\r\n  margin: 0 -15px;\r\n  display: flex;\r\n  flex-wrap: wrap;\r\n  justify-content: center;\r\n  overflow: hidden;\r\n  padding: 10px 20px 10px 20px;\r\n\r\n  @include tablet {\r\n    max-width: 90%;\r\n    margin: 0 auto;\r\n  }\r\n\r\n  @include mobile-large {\r\n    max-width: 100%;\r\n  }\r\n\r\n  &__item {\r\n    padding: 20px;\r\n    width: 50%;\r\n    margin: 0 auto;\r\n\r\n    @include laptop {\r\n      padding: 10px;\r\n    }\r\n\r\n    @include mobile-large {\r\n      width: 100%;\r\n    }\r\n  }\r\n}",".cat-card {\r\n  $root: &;\r\n  display: flex;\r\n  flex-direction: column;\r\n  width: 100%;\r\n  //max-width: 320px;\r\n  height: 312px;\r\n  color: #fff;\r\n  background-color: $secondary-color;\r\n  border-radius: 10px;\r\n  box-shadow: -6px 6px 6px rgba(0, 0, 0, .2);\r\n  @extend .bg-radial;\r\n  overflow: hidden;\r\n  cursor: pointer;\r\n  transition: scale .2s cubic-bezier(.32,.08,.24,1), box-shadow .2s cubic-bezier(.32,.08,.24,1), scale .2s cubic-bezier(.32,.08,.24,1),color .2s cubic-bezier(.32,.08,.24,1);\r\n\r\n  @include mobile-large {\r\n    margin: 0 auto;\r\n  }\r\n\r\n  &:hover {\r\n    scale: 1.05;\r\n    box-shadow: -10px 10px 10px rgba(0, 0, 0, .18);\r\n  }\r\n\r\n  &.active {\r\n    box-shadow: -10px 10px 10px rgba(0, 0, 0, .18);\r\n    text-decoration: underline;\r\n\r\n    svg {\r\n      padding: 10px 0;\r\n      fill: rgba($primary-color, .7);\r\n    }\r\n  }\r\n\r\n  @include laptop {\r\n    height: 250px;\r\n  }\r\n\r\n  @include tablet {\r\n    height: 220px;\r\n  }\r\n\r\n  @include mobile-large {\r\n    flex-direction: row;\r\n    align-items: center;\r\n    max-width: 90%;\r\n    width: 80%;\r\n    height: 100px;\r\n  }\r\n\r\n  @include mobile {\r\n    max-width: 100%;\r\n    width: 100%;\r\n  }\r\n\r\n  svg {\r\n    height: 100%;\r\n    width: 37%;\r\n    padding: 10px 0;\r\n    margin: 0 auto;\r\n    fill: rgb(#000, .7);\r\n    transition: fill .2s linear;\r\n\r\n    @include laptop {\r\n      width: 33%;\r\n    }\r\n\r\n    @include mobile-large {\r\n      height: 75%;\r\n      width: 20%;\r\n      margin: 0 14px;\r\n    }\r\n  }\r\n\r\n  &__bottom {\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: center;\r\n    text-align: center;\r\n    font-family: $montserrat;\r\n    text-transform: uppercase;\r\n    padding: 8px;\r\n    background-color: rgba(0, 0, 0, .2);\r\n    border-radius: 0 0 10px 10px;\r\n    min-height: 98.4px;\r\n    overflow: hidden;\r\n\r\n    @include laptop {\r\n      min-height: 68px;\r\n    }\r\n\r\n    @include laptop {\r\n      min-height: 63.4px;\r\n    }\r\n\r\n    @include mobile-large {\r\n      padding-left: 0;\r\n      min-height: 0;\r\n      background: none;\r\n    }\r\n  }\r\n\r\n  h2, h3, h4, h5 {\r\n    font-size: 26px;\r\n    text-align: center;\r\n    padding: 10px;\r\n\r\n    @include laptop {\r\n      font-size: 22px;\r\n    }\r\n\r\n    @include tablet {\r\n      font-size: 20px;\r\n    }\r\n    \r\n    @include mobile-large {\r\n      text-align: left;\r\n    }\r\n  }\r\n}",".main {\r\n\r\n  &__info {\r\n    display: flex;\r\n    flex-wrap: wrap;\r\n    margin: 0 -10px;\r\n  }\r\n\r\n  &__col {\r\n    display: flex;\r\n    width: 33.3333%;\r\n    padding: 0 10px;\r\n\r\n    &:not(:nth-child(-n + 3)) {\r\n      margin-top: 20px;\r\n    }\r\n\r\n    @include tablet {\r\n      width: 50%;\r\n\r\n\r\n      &:not(:nth-child(-n + 2)) {\r\n        margin-top: 20px;\r\n      }\r\n    }\r\n\r\n    @include mobile {\r\n      width: 100%;\r\n\r\n      &:not(:nth-child(-n + 1)) {\r\n        margin-top: 20px;\r\n      }\r\n    }\r\n  }\r\n}",".footer {\r\n  padding: 34px 0;\r\n  font-size: 20px;\r\n  font-family: $montserrat;\r\n  font-weight: 600;\r\n  background: linear-gradient(181deg, rgba(255,255,255,.95) 0%, rgba(67,160,71,0.6306897759103641) 100%);\r\n  border-radius: 10px 10px 0 0;\r\n\r\n  .container {\r\n    display: flex;\r\n    justify-content: space-between;\r\n    align-items: center;\r\n\r\n    @include mobile {\r\n      justify-content: center;\r\n    }\r\n  }\r\n\r\n  &__item {\r\n    @extend .flex-items-center;\r\n    transition: color .2s linear;\r\n\r\n    @include mobile {\r\n      display: none;\r\n    }\r\n\r\n    &:hover {\r\n      color: #000;\r\n    }\r\n  }\r\n}",null],"sourceRoot":""}]);
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

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {

"use strict";


module.exports = function (url, options) {
  if (!options) {
    options = {};
  }
  if (!url) {
    return url;
  }
  url = String(url.__esModule ? url.default : url);

  // If url is already wrapped in quotes, remove them
  if (/^['"].*['"]$/.test(url)) {
    url = url.slice(1, -1);
  }
  if (options.hash) {
    url += options.hash;
  }

  // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls
  if (/["'() \t\n]|(%20)/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), "\"");
  }
  return url;
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

/***/ "./node_modules/debounce/index.js":
/*!****************************************!*\
  !*** ./node_modules/debounce/index.js ***!
  \****************************************/
/***/ ((module) => {

/**
 * Returns a function, that, as long as it continues to be invoked, will not
 * be triggered. The function will be called after it stops being called for
 * N milliseconds. If `immediate` is passed, trigger the function on the
 * leading edge, instead of the trailing. The function also has a property 'clear' 
 * that is a function which will clear the timer to prevent previously scheduled executions. 
 *
 * @source underscore.js
 * @see http://unscriptable.com/2009/03/20/debouncing-javascript-methods/
 * @param {Function} function to wrap
 * @param {Number} timeout in ms (`100`)
 * @param {Boolean} whether to execute at the beginning (`false`)
 * @api public
 */
function debounce(func, wait, immediate){
  var timeout, args, context, timestamp, result;
  if (null == wait) wait = 100;

  function later() {
    var last = Date.now() - timestamp;

    if (last < wait && last >= 0) {
      timeout = setTimeout(later, wait - last);
    } else {
      timeout = null;
      if (!immediate) {
        result = func.apply(context, args);
        context = args = null;
      }
    }
  };

  var debounced = function(){
    context = this;
    args = arguments;
    timestamp = Date.now();
    var callNow = immediate && !timeout;
    if (!timeout) timeout = setTimeout(later, wait);
    if (callNow) {
      result = func.apply(context, args);
      context = args = null;
    }

    return result;
  };

  debounced.clear = function() {
    if (timeout) {
      clearTimeout(timeout);
      timeout = null;
    }
  };
  
  debounced.flush = function() {
    if (timeout) {
      result = func.apply(context, args);
      context = args = null;
      
      clearTimeout(timeout);
      timeout = null;
    }
  };

  return debounced;
};

// Adds compatibility for ES modules
debounce.debounce = debounce;

module.exports = debounce;


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
var code = "<!DOCTYPE html>\r\n<html lang=\"ru\">\r\n<head>\r\n  <meta charset=\"UTF-8\">\r\n  <meta http-equiv=\"X-UA-Compatible\" content=\"IE=edge\">\r\n  <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\r\n\r\n  <link rel=\"icon\" href=\"" + ___HTML_LOADER_REPLACEMENT_0___ + "\" type=\"image/svg+xml\">\r\n  <link rel=\"icon\" href=\"" + ___HTML_LOADER_REPLACEMENT_1___ + "\" type=\"image/png\">\r\n\r\n  <link rel=\"stylesheet\" href=\"https://cdnjs.cloudflare.com/ajax/libs/basicLightbox/5.0.0/basicLightbox.min.css\" integrity=\"sha512-C+KPK958JmUdU8B9SVr8YpEZtQ1T1XrFX/OLvE/lt336DFWXFHL5Y9/tUewMEU+Uy3dUAS363XXLdBine0WDyQ==\" crossorigin=\"anonymous\" referrerpolicy=\"no-referrer\" />\r\n  <link rel=\"preconnect\" href=\"https://fonts.googleapis.com\">\r\n  <link rel=\"preconnect\" href=\"https://fonts.gstatic.com\" crossorigin>\r\n  <link href=\"https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;500;600;700&family=Open+Sans:wght@300;400;500;600;700&display=swap\" rel=\"stylesheet\">\r\n\r\n  <title>Beer Station №1</title>\r\n</head>\r\n<body style=\"display: none\">\r\n  <header class=\"header\" id=\"header\">\r\n    <div class=\"container--header\">\r\n      <div class=\"header__inner\">\r\n        <a href=\"#\" class=\"logo\">\r\n          <img src=\"" + ___HTML_LOADER_REPLACEMENT_2___ + "\" alt=\"beer station logo\">\r\n        </a>\r\n        <!--/logo-->\r\n\r\n        <div class=\"header__info\">\r\n          <a class=\"header__item\" href=\"tel:+380971470077\">\r\n            <svg class=\"header__icon\" xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 512 512\"><!-- Font Awesome Pro 5.15.4 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) --><path d=\"M497.39 361.8l-112-48a24 24 0 0 0-28 6.9l-49.6 60.6A370.66 370.66 0 0 1 130.6 204.11l60.6-49.6a23.94 23.94 0 0 0 6.9-28l-48-112A24.16 24.16 0 0 0 122.6.61l-104 24A24 24 0 0 0 0 48c0 256.5 207.9 464 464 464a24 24 0 0 0 23.4-18.6l24-104a24.29 24.29 0 0 0-14.01-27.6z\"/></svg>\r\n            <span>+38(097)147-00-77</span>\r\n          </a>\r\n          <!--/header__phone-->\r\n          <a class=\"header__item\" target=\"_blank\" href=\"https://www.google.com/maps/search/%D0%BF%D1%96%D1%81%D0%BA%D1%96%D0%B2%D0%BA%D0%B0+%D1%81%D1%82%D0%B0%D0%BD%D1%86%D1%96%D1%8F+%D1%82%D0%B5%D1%82%D0%B5%D1%80%D1%96%D0%B2/@50.6992069,29.5986911,20.75z\">\r\n            <svg class=\"header__icon\" xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 384 512\"><!-- Font Awesome Pro 5.15.4 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) --><path d=\"M172.268 501.67C26.97 291.031 0 269.413 0 192 0 85.961 85.961 0 192 0s192 85.961 192 192c0 77.413-26.97 99.031-172.268 309.67-9.535 13.774-29.93 13.773-39.464 0zM192 272c44.183 0 80-35.817 80-80s-35.817-80-80-80-80 35.817-80 80 35.817 80 80 80z\"/></svg>\r\n            <span>с.Пісківка, вул.Привокзальна 2</span>\r\n          </a>\r\n          <!--/header__location-->\r\n        </div>\r\n        <!--/header__info-->\r\n        <div class=\"header__time\">\r\n          <svg class=\"header__icon\" xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 512 512\"><!-- Font Awesome Pro 5.15.4 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) --><path d=\"M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8zm0 448c-110.5 0-200-89.5-200-200S145.5 56 256 56s200 89.5 200 200-89.5 200-200 200zm61.8-104.4l-84.9-61.7c-3.1-2.3-4.9-5.9-4.9-9.7V116c0-6.6 5.4-12 12-12h32c6.6 0 12 5.4 12 12v141.7l66.8 48.6c5.4 3.9 6.5 11.4 2.6 16.8L334.6 349c-3.9 5.3-11.4 6.5-16.8 2.6z\"/></svg>\r\n          <span>11:00 - 21:00</span>\r\n        </div>\r\n        <!--/header__routine-->\r\n      </div>\r\n      <!--/header__top-->\r\n\r\n    </div>\r\n  </header>\r\n\r\n  <main>\r\n    <div class=\"section section--nopading\">\r\n      <div class=\"container\">\r\n        <div class=\"categories\">\r\n          <div class=\"categories__item\">\r\n            <div data-tab=\"beer\" class=\"cat-card js-tab\">\r\n              <svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 512 512\"><!-- Font Awesome Pro 5.15.4 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) --><path d=\"M352,256H313.39c-15.71-13.44-35.46-23.07-57.39-28V180.44l-32-3.38-32,3.38V228c-21.93,5-41.68,14.6-57.39,28H16A16,16,0,0,0,0,272v96a16,16,0,0,0,16,16h92.79C129.38,421.73,173,448,224,448s94.62-26.27,115.21-64H352a32,32,0,0,1,32,32,32,32,0,0,0,32,32h64a32,32,0,0,0,32-32A160,160,0,0,0,352,256ZM81.59,159.91l142.41-15,142.41,15c9.42,1,17.59-6.81,17.59-16.8V112.89c0-10-8.17-17.8-17.59-16.81L256,107.74V80a16,16,0,0,0-16-16H208a16,16,0,0,0-16,16v27.74L81.59,96.08C72.17,95.09,64,102.9,64,112.89v30.22C64,153.1,72.17,160.91,81.59,159.91Z\"/></svg>\r\n              <div class=\"cat-card__bottom\">\r\n                <h3>Сьогодні на кранах</h3>\r\n              </div>\r\n            </div>\r\n          </div>\r\n          <div class=\"categories__item\">\r\n            <div data-tab=\"ba\" class=\"cat-card js-tab\">\r\n              <svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 384 512\"><!-- Font Awesome Pro 5.15.4 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) --><path d=\"M120 72c0-39.765 32.235-72 72-72s72 32.235 72 72c0 39.764-32.235 72-72 72s-72-32.236-72-72zm254.627 1.373c-12.496-12.497-32.758-12.497-45.254 0L242.745 160H141.254L54.627 73.373c-12.496-12.497-32.758-12.497-45.254 0-12.497 12.497-12.497 32.758 0 45.255L104 213.254V480c0 17.673 14.327 32 32 32h16c17.673 0 32-14.327 32-32V368h16v112c0 17.673 14.327 32 32 32h16c17.673 0 32-14.327 32-32V213.254l94.627-94.627c12.497-12.497 12.497-32.757 0-45.254z\"/></svg>\r\n              <div class=\"cat-card__bottom\">\r\n                <h3>Б/А пиво та соки</h3>\r\n              </div>\r\n            </div>\r\n          </div>\r\n          <div class=\"categories__item\">\r\n            <div data-tab=\"appetizer\" class=\"cat-card js-tab\">\r\n              <svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 512 512\"><!-- Font Awesome Pro 5.15.4 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) --><path d=\"M510.37 254.79l-12.08-76.26a132.493 132.493 0 0 0-37.16-72.95l-54.76-54.75c-19.73-19.72-45.18-32.7-72.71-37.05l-76.7-12.15c-27.51-4.36-55.69.11-80.52 12.76L107.32 49.6a132.25 132.25 0 0 0-57.79 57.8l-35.1 68.88a132.602 132.602 0 0 0-12.82 80.94l12.08 76.27a132.493 132.493 0 0 0 37.16 72.95l54.76 54.75a132.087 132.087 0 0 0 72.71 37.05l76.7 12.14c27.51 4.36 55.69-.11 80.52-12.75l69.12-35.21a132.302 132.302 0 0 0 57.79-57.8l35.1-68.87c12.71-24.96 17.2-53.3 12.82-80.96zM176 368c-17.67 0-32-14.33-32-32s14.33-32 32-32 32 14.33 32 32-14.33 32-32 32zm32-160c-17.67 0-32-14.33-32-32s14.33-32 32-32 32 14.33 32 32-14.33 32-32 32zm160 128c-17.67 0-32-14.33-32-32s14.33-32 32-32 32 14.33 32 32-14.33 32-32 32z\"/></svg>\r\n              <div class=\"cat-card__bottom\">\r\n                <h3>Смаколики</h3>\r\n              </div>\r\n            </div>\r\n          </div>\r\n          <div class=\"categories__item\">\r\n            <div data-tab=\"souvenirs\" class=\"cat-card  js-tab\">\r\n              <svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 448 512\"><!-- Font Awesome Pro 5.15.4 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) --><path d=\"M368 96h-48V56c0-13.255-10.745-24-24-24H24C10.745 32 0 42.745 0 56v400c0 13.255 10.745 24 24 24h272c13.255 0 24-10.745 24-24v-42.11l80.606-35.977C429.396 365.063 448 336.388 448 304.86V176c0-44.112-35.888-80-80-80zm16 208.86a16.018 16.018 0 0 1-9.479 14.611L320 343.805V160h48c8.822 0 16 7.178 16 16v128.86zM208 384c-8.836 0-16-7.164-16-16V144c0-8.836 7.164-16 16-16s16 7.164 16 16v224c0 8.836-7.164 16-16 16zm-96 0c-8.836 0-16-7.164-16-16V144c0-8.836 7.164-16 16-16s16 7.164 16 16v224c0 8.836-7.164 16-16 16z\"/></svg>\r\n              <div class=\"cat-card__bottom\">\r\n                <h3>Сувеніри</h3>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <!--/section-->\r\n    <section class=\"section js-tab-content beer\">\r\n      <div class=\"container\">\r\n        <h2 class=\"section__title section__title--kran\">Сьогодні на кранах</h2>\r\n        <div class=\"main\">\r\n          <div class=\"filter\">\r\n            <div class=\"filter__sort\">\r\n              <div class=\"filter__sort-direction down\">\r\n                <svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 512 512\">\r\n                  <!-- Font Awesome Pro 5.15.4 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) --><path d=\"M240 96h64a16 16 0 0 0 16-16V48a16 16 0 0 0-16-16h-64a16 16 0 0 0-16 16v32a16 16 0 0 0 16 16zm0 128h128a16 16 0 0 0 16-16v-32a16 16 0 0 0-16-16H240a16 16 0 0 0-16 16v32a16 16 0 0 0 16 16zm256 192H240a16 16 0 0 0-16 16v32a16 16 0 0 0 16 16h256a16 16 0 0 0 16-16v-32a16 16 0 0 0-16-16zm-256-64h192a16 16 0 0 0 16-16v-32a16 16 0 0 0-16-16H240a16 16 0 0 0-16 16v32a16 16 0 0 0 16 16zm-64 0h-48V48a16 16 0 0 0-16-16H80a16 16 0 0 0-16 16v304H16c-14.19 0-21.37 17.24-11.29 27.31l80 96a16 16 0 0 0 22.62 0l80-96C197.35 369.26 190.22 352 176 352z\"/>\r\n                </svg>\r\n                <svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 512 512\"><!-- Font Awesome Pro 5.15.4 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) --><path d=\"M304 416h-64a16 16 0 0 0-16 16v32a16 16 0 0 0 16 16h64a16 16 0 0 0 16-16v-32a16 16 0 0 0-16-16zm-128-64h-48V48a16 16 0 0 0-16-16H80a16 16 0 0 0-16 16v304H16c-14.19 0-21.37 17.24-11.29 27.31l80 96a16 16 0 0 0 22.62 0l80-96C197.35 369.26 190.22 352 176 352zm256-192H240a16 16 0 0 0-16 16v32a16 16 0 0 0 16 16h192a16 16 0 0 0 16-16v-32a16 16 0 0 0-16-16zm-64 128H240a16 16 0 0 0-16 16v32a16 16 0 0 0 16 16h128a16 16 0 0 0 16-16v-32a16 16 0 0 0-16-16zM496 32H240a16 16 0 0 0-16 16v32a16 16 0 0 0 16 16h256a16 16 0 0 0 16-16V48a16 16 0 0 0-16-16z\"/>\r\n                </svg>\r\n              </div>\r\n              <label class=\"filter__sort-by\">\r\n               Сортувати за:\r\n                <select class=\"filter__select\" name=\"sort-select\">\r\n                  <option value=\"price\">Ціною</option>\r\n                  <option value=\"abv\">Міцністю</option>\r\n                  <option value=\"ibu\">Гіркотою</option>\r\n                  <option value=\"density\">Щільністю</option>\r\n                </select>\r\n              </label>\r\n            </div>\r\n            <!--/filter__sort-->\r\n            <label class=\"filter__input\">\r\n              <svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 512 512\"><!-- Font Awesome Pro 5.15.4 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) --><path d=\"M505 442.7L405.3 343c-4.5-4.5-10.6-7-17-7H372c27.6-35.3 44-79.7 44-128C416 93.1 322.9 0 208 0S0 93.1 0 208s93.1 208 208 208c48.3 0 92.7-16.4 128-44v16.3c0 6.4 2.5 12.5 7 17l99.7 99.7c9.4 9.4 24.6 9.4 33.9 0l28.3-28.3c9.4-9.4 9.4-24.6.1-34zM208 336c-70.7 0-128-57.2-128-128 0-70.7 57.2-128 128-128 70.7 0 128 57.2 128 128 0 70.7-57.2 128-128 128z\"/>\r\n              </svg>\r\n              <input type=\"text\" name=\"search\" placeholder=\"знайди улюблене пиво\">\r\n            </label>\r\n\r\n            <label class=\"filter__filter\">\r\n              Тип пива:\r\n              <select class=\"filter__select\" name=\"filter-select\">\r\n                <option value=\"light-filtered\">Світле фільтроване</option>\r\n                <option value=\"light-nonfiltered\">Світле нефільтроване</option>\r\n                <option value=\"dark-filtered\">Темне фільтроване</option>\r\n                <option value=\"cider\">Сидр</option>\r\n              </select>\r\n            </label>\r\n            <!--/filter__filter-->\r\n          </div>\r\n          <!--/filter-->\r\n          <div class=\"main__info\">\r\n\r\n\r\n          </div>\r\n          <!--/info-->\r\n\r\n          <!--/sidebar-->\r\n        </div>\r\n      </div>\r\n    </section>\r\n    <!--/js-tab-content-->\r\n    <section class=\"section js-tab-content ba\">\r\n      <div class=\"container\">\r\n        <h2 class=\"section__title section__title--kran\">Б/А пиво та соки</h2>\r\n        <div class=\"main\">\r\n          <div class=\"filter\">\r\n            <div class=\"filter__sort\">\r\n              <div class=\"filter__sort-direction down\">\r\n                <svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 512 512\">\r\n                  <!-- Font Awesome Pro 5.15.4 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) --><path d=\"M240 96h64a16 16 0 0 0 16-16V48a16 16 0 0 0-16-16h-64a16 16 0 0 0-16 16v32a16 16 0 0 0 16 16zm0 128h128a16 16 0 0 0 16-16v-32a16 16 0 0 0-16-16H240a16 16 0 0 0-16 16v32a16 16 0 0 0 16 16zm256 192H240a16 16 0 0 0-16 16v32a16 16 0 0 0 16 16h256a16 16 0 0 0 16-16v-32a16 16 0 0 0-16-16zm-256-64h192a16 16 0 0 0 16-16v-32a16 16 0 0 0-16-16H240a16 16 0 0 0-16 16v32a16 16 0 0 0 16 16zm-64 0h-48V48a16 16 0 0 0-16-16H80a16 16 0 0 0-16 16v304H16c-14.19 0-21.37 17.24-11.29 27.31l80 96a16 16 0 0 0 22.62 0l80-96C197.35 369.26 190.22 352 176 352z\"/>\r\n                </svg>\r\n                <svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 512 512\"><!-- Font Awesome Pro 5.15.4 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) --><path d=\"M304 416h-64a16 16 0 0 0-16 16v32a16 16 0 0 0 16 16h64a16 16 0 0 0 16-16v-32a16 16 0 0 0-16-16zm-128-64h-48V48a16 16 0 0 0-16-16H80a16 16 0 0 0-16 16v304H16c-14.19 0-21.37 17.24-11.29 27.31l80 96a16 16 0 0 0 22.62 0l80-96C197.35 369.26 190.22 352 176 352zm256-192H240a16 16 0 0 0-16 16v32a16 16 0 0 0 16 16h192a16 16 0 0 0 16-16v-32a16 16 0 0 0-16-16zm-64 128H240a16 16 0 0 0-16 16v32a16 16 0 0 0 16 16h128a16 16 0 0 0 16-16v-32a16 16 0 0 0-16-16zM496 32H240a16 16 0 0 0-16 16v32a16 16 0 0 0 16 16h256a16 16 0 0 0 16-16V48a16 16 0 0 0-16-16z\"/>\r\n                </svg>\r\n              </div>\r\n              <label class=\"filter__sort-by\">\r\n                Сортувати за:\r\n                <select class=\"filter__select\" name=\"sort-select\">\r\n                  <option value=\"price\">Ціною</option>\r\n                  <option value=\"abv\">Міцністю</option>\r\n                  <option value=\"ibu\">Гіркотою</option>\r\n                  <option value=\"density\">Щільністю</option>\r\n                </select>\r\n              </label>\r\n            </div>\r\n            <!--/filter__sort-->\r\n            <label class=\"filter__input\">\r\n              <svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 512 512\"><!-- Font Awesome Pro 5.15.4 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) --><path d=\"M505 442.7L405.3 343c-4.5-4.5-10.6-7-17-7H372c27.6-35.3 44-79.7 44-128C416 93.1 322.9 0 208 0S0 93.1 0 208s93.1 208 208 208c48.3 0 92.7-16.4 128-44v16.3c0 6.4 2.5 12.5 7 17l99.7 99.7c9.4 9.4 24.6 9.4 33.9 0l28.3-28.3c9.4-9.4 9.4-24.6.1-34zM208 336c-70.7 0-128-57.2-128-128 0-70.7 57.2-128 128-128 70.7 0 128 57.2 128 128 0 70.7-57.2 128-128 128z\"/>\r\n              </svg>\r\n              <input type=\"text\" name=\"search\" placeholder=\"знайди улюблене пиво\">\r\n            </label>\r\n\r\n            <label class=\"filter__filter\">\r\n              Тип пива:\r\n              <select class=\"filter__select\" name=\"filter-select\">\r\n                <option value=\"light-filtered\">Світле фільтроване</option>\r\n                <option value=\"light-nonfiltered\">Світле нефільтроване</option>\r\n                <option value=\"dark-filtered\">Темне фільтроване</option>\r\n                <option value=\"cider\">Сидр</option>\r\n              </select>\r\n            </label>\r\n            <!--/filter__filter-->\r\n          </div>\r\n          <!--/filter-->\r\n          <div class=\"main__info\">\r\n\r\n          </div>\r\n          <!--/info-->\r\n          <!--/sidebar-->\r\n        </div>\r\n      </div>\r\n    </section>\r\n    <!--/js-tab-content-->\r\n    <section class=\"section js-tab-content appetizer\">\r\n      <div class=\"container\">\r\n        <h2 class=\"section__title section__title--kran\">Смаколики</h2>\r\n        <div class=\"main\">\r\n          <div class=\"filter\">\r\n            <div class=\"filter__sort\">\r\n              <div class=\"filter__sort-direction down\">\r\n                <svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 512 512\">\r\n                  <!-- Font Awesome Pro 5.15.4 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) --><path d=\"M240 96h64a16 16 0 0 0 16-16V48a16 16 0 0 0-16-16h-64a16 16 0 0 0-16 16v32a16 16 0 0 0 16 16zm0 128h128a16 16 0 0 0 16-16v-32a16 16 0 0 0-16-16H240a16 16 0 0 0-16 16v32a16 16 0 0 0 16 16zm256 192H240a16 16 0 0 0-16 16v32a16 16 0 0 0 16 16h256a16 16 0 0 0 16-16v-32a16 16 0 0 0-16-16zm-256-64h192a16 16 0 0 0 16-16v-32a16 16 0 0 0-16-16H240a16 16 0 0 0-16 16v32a16 16 0 0 0 16 16zm-64 0h-48V48a16 16 0 0 0-16-16H80a16 16 0 0 0-16 16v304H16c-14.19 0-21.37 17.24-11.29 27.31l80 96a16 16 0 0 0 22.62 0l80-96C197.35 369.26 190.22 352 176 352z\"/>\r\n                </svg>\r\n                <svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 512 512\"><!-- Font Awesome Pro 5.15.4 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) --><path d=\"M304 416h-64a16 16 0 0 0-16 16v32a16 16 0 0 0 16 16h64a16 16 0 0 0 16-16v-32a16 16 0 0 0-16-16zm-128-64h-48V48a16 16 0 0 0-16-16H80a16 16 0 0 0-16 16v304H16c-14.19 0-21.37 17.24-11.29 27.31l80 96a16 16 0 0 0 22.62 0l80-96C197.35 369.26 190.22 352 176 352zm256-192H240a16 16 0 0 0-16 16v32a16 16 0 0 0 16 16h192a16 16 0 0 0 16-16v-32a16 16 0 0 0-16-16zm-64 128H240a16 16 0 0 0-16 16v32a16 16 0 0 0 16 16h128a16 16 0 0 0 16-16v-32a16 16 0 0 0-16-16zM496 32H240a16 16 0 0 0-16 16v32a16 16 0 0 0 16 16h256a16 16 0 0 0 16-16V48a16 16 0 0 0-16-16z\"/>\r\n                </svg>\r\n              </div>\r\n              <label class=\"filter__sort-by\">\r\n                Сортувати за:\r\n                <select class=\"filter__select\" name=\"sort-select\">\r\n                  <option value=\"price\">Ціною</option>\r\n                  <option value=\"abv\">Міцністю</option>\r\n                  <option value=\"ibu\">Гіркотою</option>\r\n                  <option value=\"density\">Щільністю</option>\r\n                </select>\r\n              </label>\r\n            </div>\r\n            <!--/filter__sort-->\r\n            <label class=\"filter__input\">\r\n              <svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 512 512\"><!-- Font Awesome Pro 5.15.4 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) --><path d=\"M505 442.7L405.3 343c-4.5-4.5-10.6-7-17-7H372c27.6-35.3 44-79.7 44-128C416 93.1 322.9 0 208 0S0 93.1 0 208s93.1 208 208 208c48.3 0 92.7-16.4 128-44v16.3c0 6.4 2.5 12.5 7 17l99.7 99.7c9.4 9.4 24.6 9.4 33.9 0l28.3-28.3c9.4-9.4 9.4-24.6.1-34zM208 336c-70.7 0-128-57.2-128-128 0-70.7 57.2-128 128-128 70.7 0 128 57.2 128 128 0 70.7-57.2 128-128 128z\"/>\r\n              </svg>\r\n              <input type=\"text\" name=\"search\" placeholder=\"знайди улюблене пиво\">\r\n            </label>\r\n\r\n            <label class=\"filter__filter\">\r\n              Тип пива:\r\n              <select class=\"filter__select\" name=\"filter-select\">\r\n                <option value=\"light-filtered\">Світле фільтроване</option>\r\n                <option value=\"light-nonfiltered\">Світле нефільтроване</option>\r\n                <option value=\"dark-filtered\">Темне фільтроване</option>\r\n                <option value=\"cider\">Сидр</option>\r\n              </select>\r\n            </label>\r\n            <!--/filter__filter-->\r\n          </div>\r\n          <!--/filter-->\r\n          <div class=\"main__info\">\r\n\r\n          </div>\r\n          <!--/info-->\r\n\r\n          <!--/sidebar-->\r\n        </div>\r\n      </div>\r\n    </section>\r\n    <!--/js-tab-content-->\r\n    <section class=\"section js-tab-content souvenirs\">\r\n      <div class=\"container\">\r\n        <h2 class=\"section__title section__title--kran\">Сувеніри</h2>\r\n        <div class=\"main\">\r\n          <div class=\"filter\">\r\n            <div class=\"filter__sort\">\r\n              <div class=\"filter__sort-direction down\">\r\n                <svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 512 512\">\r\n                  <!-- Font Awesome Pro 5.15.4 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) --><path d=\"M240 96h64a16 16 0 0 0 16-16V48a16 16 0 0 0-16-16h-64a16 16 0 0 0-16 16v32a16 16 0 0 0 16 16zm0 128h128a16 16 0 0 0 16-16v-32a16 16 0 0 0-16-16H240a16 16 0 0 0-16 16v32a16 16 0 0 0 16 16zm256 192H240a16 16 0 0 0-16 16v32a16 16 0 0 0 16 16h256a16 16 0 0 0 16-16v-32a16 16 0 0 0-16-16zm-256-64h192a16 16 0 0 0 16-16v-32a16 16 0 0 0-16-16H240a16 16 0 0 0-16 16v32a16 16 0 0 0 16 16zm-64 0h-48V48a16 16 0 0 0-16-16H80a16 16 0 0 0-16 16v304H16c-14.19 0-21.37 17.24-11.29 27.31l80 96a16 16 0 0 0 22.62 0l80-96C197.35 369.26 190.22 352 176 352z\"/>\r\n                </svg>\r\n                <svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 512 512\"><!-- Font Awesome Pro 5.15.4 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) --><path d=\"M304 416h-64a16 16 0 0 0-16 16v32a16 16 0 0 0 16 16h64a16 16 0 0 0 16-16v-32a16 16 0 0 0-16-16zm-128-64h-48V48a16 16 0 0 0-16-16H80a16 16 0 0 0-16 16v304H16c-14.19 0-21.37 17.24-11.29 27.31l80 96a16 16 0 0 0 22.62 0l80-96C197.35 369.26 190.22 352 176 352zm256-192H240a16 16 0 0 0-16 16v32a16 16 0 0 0 16 16h192a16 16 0 0 0 16-16v-32a16 16 0 0 0-16-16zm-64 128H240a16 16 0 0 0-16 16v32a16 16 0 0 0 16 16h128a16 16 0 0 0 16-16v-32a16 16 0 0 0-16-16zM496 32H240a16 16 0 0 0-16 16v32a16 16 0 0 0 16 16h256a16 16 0 0 0 16-16V48a16 16 0 0 0-16-16z\"/>\r\n                </svg>\r\n              </div>\r\n              <label class=\"filter__sort-by\">\r\n                Сортувати за:\r\n                <select class=\"filter__select\" name=\"sort-select\">\r\n                  <option value=\"price\">Ціною</option>\r\n                  <option value=\"abv\">Міцністю</option>\r\n                  <option value=\"ibu\">Гіркотою</option>\r\n                  <option value=\"density\">Щільністю</option>\r\n                </select>\r\n              </label>\r\n            </div>\r\n            <!--/filter__sort-->\r\n            <label class=\"filter__input\">\r\n              <svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 512 512\"><!-- Font Awesome Pro 5.15.4 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) --><path d=\"M505 442.7L405.3 343c-4.5-4.5-10.6-7-17-7H372c27.6-35.3 44-79.7 44-128C416 93.1 322.9 0 208 0S0 93.1 0 208s93.1 208 208 208c48.3 0 92.7-16.4 128-44v16.3c0 6.4 2.5 12.5 7 17l99.7 99.7c9.4 9.4 24.6 9.4 33.9 0l28.3-28.3c9.4-9.4 9.4-24.6.1-34zM208 336c-70.7 0-128-57.2-128-128 0-70.7 57.2-128 128-128 70.7 0 128 57.2 128 128 0 70.7-57.2 128-128 128z\"/>\r\n              </svg>\r\n              <input type=\"text\" name=\"search\" placeholder=\"знайди улюблене пиво\">\r\n            </label>\r\n\r\n            <label class=\"filter__filter\">\r\n              Тип пива:\r\n              <select class=\"filter__select\" name=\"filter-select\">\r\n                <option value=\"light-filtered\">Світле фільтроване</option>\r\n                <option value=\"light-nonfiltered\">Світле нефільтроване</option>\r\n                <option value=\"dark-filtered\">Темне фільтроване</option>\r\n                <option value=\"cider\">Сидр</option>\r\n              </select>\r\n            </label>\r\n            <!--/filter__filter-->\r\n          </div>\r\n          <!--/filter-->\r\n          <div class=\"main__info\">\r\n          </div>\r\n          <!--/info-->\r\n          <!--/sidebar-->\r\n        </div>\r\n      </div>\r\n    </section>\r\n    <!--/js-tab-content-->\r\n  </main>\r\n\r\n  <footer class=\"footer\">\r\n    <div class=\"container\">\r\n      <p class=\"copyright\">© «Beer Station №1» 2023</p>\r\n      <a class=\"footer__item\" href=\"tel:+380971470077\">\r\n        <svg class=\"header__icon\" xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 512 512\"><!-- Font Awesome Pro 5.15.4 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) --><path d=\"M497.39 361.8l-112-48a24 24 0 0 0-28 6.9l-49.6 60.6A370.66 370.66 0 0 1 130.6 204.11l60.6-49.6a23.94 23.94 0 0 0 6.9-28l-48-112A24.16 24.16 0 0 0 122.6.61l-104 24A24 24 0 0 0 0 48c0 256.5 207.9 464 464 464a24 24 0 0 0 23.4-18.6l24-104a24.29 24.29 0 0 0-14.01-27.6z\"/></svg>\r\n        <span>+38(097)147-00-77</span>\r\n      </a>\r\n    </div>\r\n  </footer>\r\n\r\n  <div class=\"to-top hidden\" id=\"to-top\">\r\n    <svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 512 512\"><!-- Font Awesome Pro 5.15.4 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) --><path d=\"M256 504c137 0 248-111 248-248S393 8 256 8 8 119 8 256s111 248 248 248zm0-448c110.5 0 200 89.5 200 200s-89.5 200-200 200S56 366.5 56 256 145.5 56 256 56zm20 328h-40c-6.6 0-12-5.4-12-12V256h-67c-10.7 0-16-12.9-8.5-20.5l99-99c4.7-4.7 12.3-4.7 17 0l99 99c7.6 7.6 2.2 20.5-8.5 20.5h-67v116c0 6.6-5.4 12-12 12z\"/></svg>\r\n  </div>\r\n\r\n  <" + "script src=\"https://cdnjs.cloudflare.com/ajax/libs/basicLightbox/5.0.0/basicLightbox.min.js\" integrity=\"sha512-jIc3kBeyfyLXBTmzUIXnbGiVK2wgWGcDIkJwkFW4bQ6v2h/piOKLwIfy3wOmKHWIu8DgYSKVth0DMUvExMYcOw==\" crossorigin=\"anonymous\" referrerpolicy=\"no-referrer\"><" + "/script>\r\n</body>\r\n</html>";
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

/***/ "./node_modules/siema/dist/siema.min.js":
/*!**********************************************!*\
  !*** ./node_modules/siema/dist/siema.min.js ***!
  \**********************************************/
/***/ (function(module) {

!function(e,t){ true?module.exports=t():0}("undefined"!=typeof self?self:this,function(){return function(e){function t(r){if(i[r])return i[r].exports;var n=i[r]={i:r,l:!1,exports:{}};return e[r].call(n.exports,n,n.exports,t),n.l=!0,n.exports}var i={};return t.m=e,t.c=i,t.d=function(e,i,r){t.o(e,i)||Object.defineProperty(e,i,{configurable:!1,enumerable:!0,get:r})},t.n=function(e){var i=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(i,"a",i),i},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="",t(t.s=0)}([function(e,t,i){"use strict";function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(t,"__esModule",{value:!0});var n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},s=function(){function e(e,t){for(var i=0;i<t.length;i++){var r=t[i];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,i,r){return i&&e(t.prototype,i),r&&e(t,r),t}}(),l=function(){function e(t){var i=this;if(r(this,e),this.config=e.mergeSettings(t),this.selector="string"==typeof this.config.selector?document.querySelector(this.config.selector):this.config.selector,null===this.selector)throw new Error("Something wrong with your selector 😭");this.resolveSlidesNumber(),this.selectorWidth=this.selector.offsetWidth,this.innerElements=[].slice.call(this.selector.children),this.currentSlide=this.config.loop?this.config.startIndex%this.innerElements.length:Math.max(0,Math.min(this.config.startIndex,this.innerElements.length-this.perPage)),this.transformProperty=e.webkitOrNot(),["resizeHandler","touchstartHandler","touchendHandler","touchmoveHandler","mousedownHandler","mouseupHandler","mouseleaveHandler","mousemoveHandler","clickHandler"].forEach(function(e){i[e]=i[e].bind(i)}),this.init()}return s(e,[{key:"attachEvents",value:function(){window.addEventListener("resize",this.resizeHandler),this.config.draggable&&(this.pointerDown=!1,this.drag={startX:0,endX:0,startY:0,letItGo:null,preventClick:!1},this.selector.addEventListener("touchstart",this.touchstartHandler),this.selector.addEventListener("touchend",this.touchendHandler),this.selector.addEventListener("touchmove",this.touchmoveHandler),this.selector.addEventListener("mousedown",this.mousedownHandler),this.selector.addEventListener("mouseup",this.mouseupHandler),this.selector.addEventListener("mouseleave",this.mouseleaveHandler),this.selector.addEventListener("mousemove",this.mousemoveHandler),this.selector.addEventListener("click",this.clickHandler))}},{key:"detachEvents",value:function(){window.removeEventListener("resize",this.resizeHandler),this.selector.removeEventListener("touchstart",this.touchstartHandler),this.selector.removeEventListener("touchend",this.touchendHandler),this.selector.removeEventListener("touchmove",this.touchmoveHandler),this.selector.removeEventListener("mousedown",this.mousedownHandler),this.selector.removeEventListener("mouseup",this.mouseupHandler),this.selector.removeEventListener("mouseleave",this.mouseleaveHandler),this.selector.removeEventListener("mousemove",this.mousemoveHandler),this.selector.removeEventListener("click",this.clickHandler)}},{key:"init",value:function(){this.attachEvents(),this.selector.style.overflow="hidden",this.selector.style.direction=this.config.rtl?"rtl":"ltr",this.buildSliderFrame(),this.config.onInit.call(this)}},{key:"buildSliderFrame",value:function(){var e=this.selectorWidth/this.perPage,t=this.config.loop?this.innerElements.length+2*this.perPage:this.innerElements.length;this.sliderFrame=document.createElement("div"),this.sliderFrame.style.width=e*t+"px",this.enableTransition(),this.config.draggable&&(this.selector.style.cursor="-webkit-grab");var i=document.createDocumentFragment();if(this.config.loop)for(var r=this.innerElements.length-this.perPage;r<this.innerElements.length;r++){var n=this.buildSliderFrameItem(this.innerElements[r].cloneNode(!0));i.appendChild(n)}for(var s=0;s<this.innerElements.length;s++){var l=this.buildSliderFrameItem(this.innerElements[s]);i.appendChild(l)}if(this.config.loop)for(var o=0;o<this.perPage;o++){var a=this.buildSliderFrameItem(this.innerElements[o].cloneNode(!0));i.appendChild(a)}this.sliderFrame.appendChild(i),this.selector.innerHTML="",this.selector.appendChild(this.sliderFrame),this.slideToCurrent()}},{key:"buildSliderFrameItem",value:function(e){var t=document.createElement("div");return t.style.cssFloat=this.config.rtl?"right":"left",t.style.float=this.config.rtl?"right":"left",t.style.width=(this.config.loop?100/(this.innerElements.length+2*this.perPage):100/this.innerElements.length)+"%",t.appendChild(e),t}},{key:"resolveSlidesNumber",value:function(){if("number"==typeof this.config.perPage)this.perPage=this.config.perPage;else if("object"===n(this.config.perPage)){this.perPage=1;for(var e in this.config.perPage)window.innerWidth>=e&&(this.perPage=this.config.perPage[e])}}},{key:"prev",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1,t=arguments[1];if(!(this.innerElements.length<=this.perPage)){var i=this.currentSlide;if(this.config.loop){if(this.currentSlide-e<0){this.disableTransition();var r=this.currentSlide+this.innerElements.length,n=this.perPage,s=r+n,l=(this.config.rtl?1:-1)*s*(this.selectorWidth/this.perPage),o=this.config.draggable?this.drag.endX-this.drag.startX:0;this.sliderFrame.style[this.transformProperty]="translate3d("+(l+o)+"px, 0, 0)",this.currentSlide=r-e}else this.currentSlide=this.currentSlide-e}else this.currentSlide=Math.max(this.currentSlide-e,0);i!==this.currentSlide&&(this.slideToCurrent(this.config.loop),this.config.onChange.call(this),t&&t.call(this))}}},{key:"next",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1,t=arguments[1];if(!(this.innerElements.length<=this.perPage)){var i=this.currentSlide;if(this.config.loop){if(this.currentSlide+e>this.innerElements.length-this.perPage){this.disableTransition();var r=this.currentSlide-this.innerElements.length,n=this.perPage,s=r+n,l=(this.config.rtl?1:-1)*s*(this.selectorWidth/this.perPage),o=this.config.draggable?this.drag.endX-this.drag.startX:0;this.sliderFrame.style[this.transformProperty]="translate3d("+(l+o)+"px, 0, 0)",this.currentSlide=r+e}else this.currentSlide=this.currentSlide+e}else this.currentSlide=Math.min(this.currentSlide+e,this.innerElements.length-this.perPage);i!==this.currentSlide&&(this.slideToCurrent(this.config.loop),this.config.onChange.call(this),t&&t.call(this))}}},{key:"disableTransition",value:function(){this.sliderFrame.style.webkitTransition="all 0ms "+this.config.easing,this.sliderFrame.style.transition="all 0ms "+this.config.easing}},{key:"enableTransition",value:function(){this.sliderFrame.style.webkitTransition="all "+this.config.duration+"ms "+this.config.easing,this.sliderFrame.style.transition="all "+this.config.duration+"ms "+this.config.easing}},{key:"goTo",value:function(e,t){if(!(this.innerElements.length<=this.perPage)){var i=this.currentSlide;this.currentSlide=this.config.loop?e%this.innerElements.length:Math.min(Math.max(e,0),this.innerElements.length-this.perPage),i!==this.currentSlide&&(this.slideToCurrent(),this.config.onChange.call(this),t&&t.call(this))}}},{key:"slideToCurrent",value:function(e){var t=this,i=this.config.loop?this.currentSlide+this.perPage:this.currentSlide,r=(this.config.rtl?1:-1)*i*(this.selectorWidth/this.perPage);e?requestAnimationFrame(function(){requestAnimationFrame(function(){t.enableTransition(),t.sliderFrame.style[t.transformProperty]="translate3d("+r+"px, 0, 0)"})}):this.sliderFrame.style[this.transformProperty]="translate3d("+r+"px, 0, 0)"}},{key:"updateAfterDrag",value:function(){var e=(this.config.rtl?-1:1)*(this.drag.endX-this.drag.startX),t=Math.abs(e),i=this.config.multipleDrag?Math.ceil(t/(this.selectorWidth/this.perPage)):1,r=e>0&&this.currentSlide-i<0,n=e<0&&this.currentSlide+i>this.innerElements.length-this.perPage;e>0&&t>this.config.threshold&&this.innerElements.length>this.perPage?this.prev(i):e<0&&t>this.config.threshold&&this.innerElements.length>this.perPage&&this.next(i),this.slideToCurrent(r||n)}},{key:"resizeHandler",value:function(){this.resolveSlidesNumber(),this.currentSlide+this.perPage>this.innerElements.length&&(this.currentSlide=this.innerElements.length<=this.perPage?0:this.innerElements.length-this.perPage),this.selectorWidth=this.selector.offsetWidth,this.buildSliderFrame()}},{key:"clearDrag",value:function(){this.drag={startX:0,endX:0,startY:0,letItGo:null,preventClick:this.drag.preventClick}}},{key:"touchstartHandler",value:function(e){-1!==["TEXTAREA","OPTION","INPUT","SELECT"].indexOf(e.target.nodeName)||(e.stopPropagation(),this.pointerDown=!0,this.drag.startX=e.touches[0].pageX,this.drag.startY=e.touches[0].pageY)}},{key:"touchendHandler",value:function(e){e.stopPropagation(),this.pointerDown=!1,this.enableTransition(),this.drag.endX&&this.updateAfterDrag(),this.clearDrag()}},{key:"touchmoveHandler",value:function(e){if(e.stopPropagation(),null===this.drag.letItGo&&(this.drag.letItGo=Math.abs(this.drag.startY-e.touches[0].pageY)<Math.abs(this.drag.startX-e.touches[0].pageX)),this.pointerDown&&this.drag.letItGo){e.preventDefault(),this.drag.endX=e.touches[0].pageX,this.sliderFrame.style.webkitTransition="all 0ms "+this.config.easing,this.sliderFrame.style.transition="all 0ms "+this.config.easing;var t=this.config.loop?this.currentSlide+this.perPage:this.currentSlide,i=t*(this.selectorWidth/this.perPage),r=this.drag.endX-this.drag.startX,n=this.config.rtl?i+r:i-r;this.sliderFrame.style[this.transformProperty]="translate3d("+(this.config.rtl?1:-1)*n+"px, 0, 0)"}}},{key:"mousedownHandler",value:function(e){-1!==["TEXTAREA","OPTION","INPUT","SELECT"].indexOf(e.target.nodeName)||(e.preventDefault(),e.stopPropagation(),this.pointerDown=!0,this.drag.startX=e.pageX)}},{key:"mouseupHandler",value:function(e){e.stopPropagation(),this.pointerDown=!1,this.selector.style.cursor="-webkit-grab",this.enableTransition(),this.drag.endX&&this.updateAfterDrag(),this.clearDrag()}},{key:"mousemoveHandler",value:function(e){if(e.preventDefault(),this.pointerDown){"A"===e.target.nodeName&&(this.drag.preventClick=!0),this.drag.endX=e.pageX,this.selector.style.cursor="-webkit-grabbing",this.sliderFrame.style.webkitTransition="all 0ms "+this.config.easing,this.sliderFrame.style.transition="all 0ms "+this.config.easing;var t=this.config.loop?this.currentSlide+this.perPage:this.currentSlide,i=t*(this.selectorWidth/this.perPage),r=this.drag.endX-this.drag.startX,n=this.config.rtl?i+r:i-r;this.sliderFrame.style[this.transformProperty]="translate3d("+(this.config.rtl?1:-1)*n+"px, 0, 0)"}}},{key:"mouseleaveHandler",value:function(e){this.pointerDown&&(this.pointerDown=!1,this.selector.style.cursor="-webkit-grab",this.drag.endX=e.pageX,this.drag.preventClick=!1,this.enableTransition(),this.updateAfterDrag(),this.clearDrag())}},{key:"clickHandler",value:function(e){this.drag.preventClick&&e.preventDefault(),this.drag.preventClick=!1}},{key:"remove",value:function(e,t){if(e<0||e>=this.innerElements.length)throw new Error("Item to remove doesn't exist 😭");var i=e<this.currentSlide,r=this.currentSlide+this.perPage-1===e;(i||r)&&this.currentSlide--,this.innerElements.splice(e,1),this.buildSliderFrame(),t&&t.call(this)}},{key:"insert",value:function(e,t,i){if(t<0||t>this.innerElements.length+1)throw new Error("Unable to inset it at this index 😭");if(-1!==this.innerElements.indexOf(e))throw new Error("The same item in a carousel? Really? Nope 😭");var r=t<=this.currentSlide>0&&this.innerElements.length;this.currentSlide=r?this.currentSlide+1:this.currentSlide,this.innerElements.splice(t,0,e),this.buildSliderFrame(),i&&i.call(this)}},{key:"prepend",value:function(e,t){this.insert(e,0),t&&t.call(this)}},{key:"append",value:function(e,t){this.insert(e,this.innerElements.length+1),t&&t.call(this)}},{key:"destroy",value:function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=arguments[1];if(this.detachEvents(),this.selector.style.cursor="auto",e){for(var i=document.createDocumentFragment(),r=0;r<this.innerElements.length;r++)i.appendChild(this.innerElements[r]);this.selector.innerHTML="",this.selector.appendChild(i),this.selector.removeAttribute("style")}t&&t.call(this)}}],[{key:"mergeSettings",value:function(e){var t={selector:".siema",duration:200,easing:"ease-out",perPage:1,startIndex:0,draggable:!0,multipleDrag:!0,threshold:20,loop:!1,rtl:!1,onInit:function(){},onChange:function(){}},i=e;for(var r in i)t[r]=i[r];return t}},{key:"webkitOrNot",value:function(){return"string"==typeof document.documentElement.style.transform?"transform":"WebkitTransform"}}]),e}();t.default=l,e.exports=t.default}])});

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

/***/ "./src/img/anchous-m.jpg":
/*!*******************************!*\
  !*** ./src/img/anchous-m.jpg ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "img/anchous-m.jpg";

/***/ }),

/***/ "./src/img/anchous-m1.jpg":
/*!********************************!*\
  !*** ./src/img/anchous-m1.jpg ***!
  \********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "img/anchous-m1.jpg";

/***/ }),

/***/ "./src/img/anchous.JPG":
/*!*****************************!*\
  !*** ./src/img/anchous.JPG ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "img/anchous.JPG";

/***/ }),

/***/ "./src/img/arahis-m.jpg":
/*!******************************!*\
  !*** ./src/img/arahis-m.jpg ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "img/arahis-m.jpg";

/***/ }),

/***/ "./src/img/arahis.jpg":
/*!****************************!*\
  !*** ./src/img/arahis.jpg ***!
  \****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "img/arahis.jpg";

/***/ }),

/***/ "./src/img/berdychiv-m.jpg":
/*!*********************************!*\
  !*** ./src/img/berdychiv-m.jpg ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "img/berdychiv-m.jpg";

/***/ }),

/***/ "./src/img/berdychiv-m1.jpeg":
/*!***********************************!*\
  !*** ./src/img/berdychiv-m1.jpeg ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "img/berdychiv-m1.jpeg";

/***/ }),

/***/ "./src/img/berdychiv-pshen-m.jpg":
/*!***************************************!*\
  !*** ./src/img/berdychiv-pshen-m.jpg ***!
  \***************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "img/berdychiv-pshen-m.jpg";

/***/ }),

/***/ "./src/img/berdychiv-pshen.jpg":
/*!*************************************!*\
  !*** ./src/img/berdychiv-pshen.jpg ***!
  \*************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "img/berdychiv-pshen.jpg";

/***/ }),

/***/ "./src/img/berdychiv.png":
/*!*******************************!*\
  !*** ./src/img/berdychiv.png ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "img/berdychiv.png";

/***/ }),

/***/ "./src/img/bierwelle-m.JPG":
/*!*********************************!*\
  !*** ./src/img/bierwelle-m.JPG ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "img/bierwelle-m.JPG";

/***/ }),

/***/ "./src/img/bierwelle-m1.jpg":
/*!**********************************!*\
  !*** ./src/img/bierwelle-m1.jpg ***!
  \**********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "img/bierwelle-m1.jpg";

/***/ }),

/***/ "./src/img/bierwelle.png":
/*!*******************************!*\
  !*** ./src/img/bierwelle.png ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "img/bierwelle.png";

/***/ }),

/***/ "./src/img/blanche-de-kyiv-m.jpg":
/*!***************************************!*\
  !*** ./src/img/blanche-de-kyiv-m.jpg ***!
  \***************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "img/blanche-de-kyiv-m.jpg";

/***/ }),

/***/ "./src/img/blanche-de-kyiv-m1.jpg":
/*!****************************************!*\
  !*** ./src/img/blanche-de-kyiv-m1.jpg ***!
  \****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "img/blanche-de-kyiv-m1.jpg";

/***/ }),

/***/ "./src/img/blanche-de-kyiv.jpg":
/*!*************************************!*\
  !*** ./src/img/blanche-de-kyiv.jpg ***!
  \*************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "img/blanche-de-kyiv.jpg";

/***/ }),

/***/ "./src/img/bocal-m.jpg":
/*!*****************************!*\
  !*** ./src/img/bocal-m.jpg ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "img/bocal-m.jpg";

/***/ }),

/***/ "./src/img/bocal-m1.jpg":
/*!******************************!*\
  !*** ./src/img/bocal-m1.jpg ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "img/bocal-m1.jpg";

/***/ }),

/***/ "./src/img/bocal.jpg":
/*!***************************!*\
  !*** ./src/img/bocal.jpg ***!
  \***************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "img/bocal.jpg";

/***/ }),

/***/ "./src/img/chehon-m.jpg":
/*!******************************!*\
  !*** ./src/img/chehon-m.jpg ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "img/chehon-m.jpg";

/***/ }),

/***/ "./src/img/chehon-m1.jpg":
/*!*******************************!*\
  !*** ./src/img/chehon-m1.jpg ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "img/chehon-m1.jpg";

/***/ }),

/***/ "./src/img/chehon.jpg":
/*!****************************!*\
  !*** ./src/img/chehon.jpg ***!
  \****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "img/chehon.jpg";

/***/ }),

/***/ "./src/img/cheske-m.jpg":
/*!******************************!*\
  !*** ./src/img/cheske-m.jpg ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "img/cheske-m.jpg";

/***/ }),

/***/ "./src/img/cheske-m1.jpg":
/*!*******************************!*\
  !*** ./src/img/cheske-m1.jpg ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "img/cheske-m1.jpg";

/***/ }),

/***/ "./src/img/cheske.jpg":
/*!****************************!*\
  !*** ./src/img/cheske.jpg ***!
  \****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "img/cheske.jpg";

/***/ }),

/***/ "./src/img/chips-m.jpg":
/*!*****************************!*\
  !*** ./src/img/chips-m.jpg ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "img/chips-m.jpg";

/***/ }),

/***/ "./src/img/chips.jpg":
/*!***************************!*\
  !*** ./src/img/chips.jpg ***!
  \***************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "img/chips.jpg";

/***/ }),

/***/ "./src/img/cidr-cactus.jpg":
/*!*********************************!*\
  !*** ./src/img/cidr-cactus.jpg ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "img/cidr-cactus.jpg";

/***/ }),

/***/ "./src/img/cidr-strawberry-m.jpg":
/*!***************************************!*\
  !*** ./src/img/cidr-strawberry-m.jpg ***!
  \***************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "img/cidr-strawberry-m.jpg";

/***/ }),

/***/ "./src/img/cidre-logo-m.jpg":
/*!**********************************!*\
  !*** ./src/img/cidre-logo-m.jpg ***!
  \**********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "img/cidre-logo-m.jpg";

/***/ }),

/***/ "./src/img/cidre-logo-m.png":
/*!**********************************!*\
  !*** ./src/img/cidre-logo-m.png ***!
  \**********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "img/cidre-logo-m.png";

/***/ }),

/***/ "./src/img/cidre-logo.png":
/*!********************************!*\
  !*** ./src/img/cidre-logo.png ***!
  \********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "img/cidre-logo.png";

/***/ }),

/***/ "./src/img/cidre-manho-persyk.jpg":
/*!****************************************!*\
  !*** ./src/img/cidre-manho-persyk.jpg ***!
  \****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "img/cidre-manho-persyk.jpg";

/***/ }),

/***/ "./src/img/cidre-medusa.jpg":
/*!**********************************!*\
  !*** ./src/img/cidre-medusa.jpg ***!
  \**********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "img/cidre-medusa.jpg";

/***/ }),

/***/ "./src/img/dizhonski-m.jpg":
/*!*********************************!*\
  !*** ./src/img/dizhonski-m.jpg ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "img/dizhonski-m.jpg";

/***/ }),

/***/ "./src/img/dizhonski-m1.jpg":
/*!**********************************!*\
  !*** ./src/img/dizhonski-m1.jpg ***!
  \**********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "img/dizhonski-m1.jpg";

/***/ }),

/***/ "./src/img/dizhonski.jpg":
/*!*******************************!*\
  !*** ./src/img/dizhonski.jpg ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "img/dizhonski.jpg";

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

/***/ "./src/img/fistashka-m.jpg":
/*!*********************************!*\
  !*** ./src/img/fistashka-m.jpg ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "img/fistashka-m.jpg";

/***/ }),

/***/ "./src/img/fistashka-m1.jpg":
/*!**********************************!*\
  !*** ./src/img/fistashka-m1.jpg ***!
  \**********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "img/fistashka-m1.jpg";

/***/ }),

/***/ "./src/img/fistashka.jpg":
/*!*******************************!*\
  !*** ./src/img/fistashka.jpg ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "img/fistashka.jpg";

/***/ }),

/***/ "./src/img/fragolino-m.jpg":
/*!*********************************!*\
  !*** ./src/img/fragolino-m.jpg ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "img/fragolino-m.jpg";

/***/ }),

/***/ "./src/img/grinky-craft-m.jpg":
/*!************************************!*\
  !*** ./src/img/grinky-craft-m.jpg ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "img/grinky-craft-m.jpg";

/***/ }),

/***/ "./src/img/grinky-craft.jpg":
/*!**********************************!*\
  !*** ./src/img/grinky-craft.jpg ***!
  \**********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "img/grinky-craft.jpg";

/***/ }),

/***/ "./src/img/grinky-domashni-m.jpg":
/*!***************************************!*\
  !*** ./src/img/grinky-domashni-m.jpg ***!
  \***************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "img/grinky-domashni-m.jpg";

/***/ }),

/***/ "./src/img/grinky-domashni-m1.jpg":
/*!****************************************!*\
  !*** ./src/img/grinky-domashni-m1.jpg ***!
  \****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "img/grinky-domashni-m1.jpg";

/***/ }),

/***/ "./src/img/grinky-domashni.jpg":
/*!*************************************!*\
  !*** ./src/img/grinky-domashni.jpg ***!
  \*************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "img/grinky-domashni.jpg";

/***/ }),

/***/ "./src/img/grinky-m.jpg":
/*!******************************!*\
  !*** ./src/img/grinky-m.jpg ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "img/grinky-m.jpg";

/***/ }),

/***/ "./src/img/grinky.jpg":
/*!****************************!*\
  !*** ./src/img/grinky.jpg ***!
  \****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "img/grinky.jpg";

/***/ }),

/***/ "./src/img/gustira-m.jpg":
/*!*******************************!*\
  !*** ./src/img/gustira-m.jpg ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "img/gustira-m.jpg";

/***/ }),

/***/ "./src/img/gustira-m1.jpg":
/*!********************************!*\
  !*** ./src/img/gustira-m1.jpg ***!
  \********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "img/gustira-m1.jpg";

/***/ }),

/***/ "./src/img/gustira.jpg":
/*!*****************************!*\
  !*** ./src/img/gustira.jpg ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "img/gustira.jpg";

/***/ }),

/***/ "./src/img/hamon-m.jpg":
/*!*****************************!*\
  !*** ./src/img/hamon-m.jpg ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "img/hamon-m.jpg";

/***/ }),

/***/ "./src/img/hamon.jpg":
/*!***************************!*\
  !*** ./src/img/hamon.jpg ***!
  \***************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "img/hamon.jpg";

/***/ }),

/***/ "./src/img/hmelpyvo-m.jpg":
/*!********************************!*\
  !*** ./src/img/hmelpyvo-m.jpg ***!
  \********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "img/hmelpyvo-m.jpg";

/***/ }),

/***/ "./src/img/hmelpyvo-m1.png":
/*!*********************************!*\
  !*** ./src/img/hmelpyvo-m1.png ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "img/hmelpyvo-m1.png";

/***/ }),

/***/ "./src/img/hmelpyvo.JPG":
/*!******************************!*\
  !*** ./src/img/hmelpyvo.JPG ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "img/hmelpyvo.JPG";

/***/ }),

/***/ "./src/img/ikra-sudaka-m.jpg":
/*!***********************************!*\
  !*** ./src/img/ikra-sudaka-m.jpg ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "img/ikra-sudaka-m.jpg";

/***/ }),

/***/ "./src/img/ikra-sudaka-m1.jpg":
/*!************************************!*\
  !*** ./src/img/ikra-sudaka-m1.jpg ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "img/ikra-sudaka-m1.jpg";

/***/ }),

/***/ "./src/img/ikra-sudaka.JPG":
/*!*********************************!*\
  !*** ./src/img/ikra-sudaka.JPG ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "img/ikra-sudaka.JPG";

/***/ }),

/***/ "./src/img/ikrianyk-norvezkyi-m.jpg":
/*!******************************************!*\
  !*** ./src/img/ikrianyk-norvezkyi-m.jpg ***!
  \******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "img/ikrianyk-norvezkyi-m.jpg";

/***/ }),

/***/ "./src/img/ikrianyk-norvezkyi-m1.jpg":
/*!*******************************************!*\
  !*** ./src/img/ikrianyk-norvezkyi-m1.jpg ***!
  \*******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "img/ikrianyk-norvezkyi-m1.jpg";

/***/ }),

/***/ "./src/img/ikrianyk-norvezkyi.jpg":
/*!****************************************!*\
  !*** ./src/img/ikrianyk-norvezkyi.jpg ***!
  \****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "img/ikrianyk-norvezkyi.jpg";

/***/ }),

/***/ "./src/img/kabanosy-m.jpg":
/*!********************************!*\
  !*** ./src/img/kabanosy-m.jpg ***!
  \********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "img/kabanosy-m.jpg";

/***/ }),

/***/ "./src/img/kabanosy-m1.jpg":
/*!*********************************!*\
  !*** ./src/img/kabanosy-m1.jpg ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "img/kabanosy-m1.jpg";

/***/ }),

/***/ "./src/img/kabanosy.jpg":
/*!******************************!*\
  !*** ./src/img/kabanosy.jpg ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "img/kabanosy.jpg";

/***/ }),

/***/ "./src/img/kaktus-m.png":
/*!******************************!*\
  !*** ./src/img/kaktus-m.png ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "img/kaktus-m.png";

/***/ }),

/***/ "./src/img/kaktus.png":
/*!****************************!*\
  !*** ./src/img/kaktus.png ***!
  \****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "img/kaktus.png";

/***/ }),

/***/ "./src/img/kalmar-peruanskyi-m.jpg":
/*!*****************************************!*\
  !*** ./src/img/kalmar-peruanskyi-m.jpg ***!
  \*****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "img/kalmar-peruanskyi-m.jpg";

/***/ }),

/***/ "./src/img/kalmar-peruanskyi-m1.jpg":
/*!******************************************!*\
  !*** ./src/img/kalmar-peruanskyi-m1.jpg ***!
  \******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "img/kalmar-peruanskyi-m1.jpg";

/***/ }),

/***/ "./src/img/kalmar-peruanskyi.jpg":
/*!***************************************!*\
  !*** ./src/img/kalmar-peruanskyi.jpg ***!
  \***************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "img/kalmar-peruanskyi.jpg";

/***/ }),

/***/ "./src/img/kalmar-struzhka-krab-m.jpg":
/*!********************************************!*\
  !*** ./src/img/kalmar-struzhka-krab-m.jpg ***!
  \********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "img/kalmar-struzhka-krab-m.jpg";

/***/ }),

/***/ "./src/img/kalmar-struzhka-krab-m1.jpg":
/*!*********************************************!*\
  !*** ./src/img/kalmar-struzhka-krab-m1.jpg ***!
  \*********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "img/kalmar-struzhka-krab-m1.jpg";

/***/ }),

/***/ "./src/img/kalmar-struzhka-krab.jpg":
/*!******************************************!*\
  !*** ./src/img/kalmar-struzhka-krab.jpg ***!
  \******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "img/kalmar-struzhka-krab.jpg";

/***/ }),

/***/ "./src/img/kalmar-struzhka-m.jpg":
/*!***************************************!*\
  !*** ./src/img/kalmar-struzhka-m.jpg ***!
  \***************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "img/kalmar-struzhka-m.jpg";

/***/ }),

/***/ "./src/img/kalmar-struzhka-m1.jpg":
/*!****************************************!*\
  !*** ./src/img/kalmar-struzhka-m1.jpg ***!
  \****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "img/kalmar-struzhka-m1.jpg";

/***/ }),

/***/ "./src/img/kalmar-struzhka.jpg":
/*!*************************************!*\
  !*** ./src/img/kalmar-struzhka.jpg ***!
  \*************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "img/kalmar-struzhka.jpg";

/***/ }),

/***/ "./src/img/kilce-kalmara-m.jpg":
/*!*************************************!*\
  !*** ./src/img/kilce-kalmara-m.jpg ***!
  \*************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "img/kilce-kalmara-m.jpg";

/***/ }),

/***/ "./src/img/kilce-kalmara-m1.jpg":
/*!**************************************!*\
  !*** ./src/img/kilce-kalmara-m1.jpg ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "img/kilce-kalmara-m1.jpg";

/***/ }),

/***/ "./src/img/kilce-kalmara.jpg":
/*!***********************************!*\
  !*** ./src/img/kilce-kalmara.jpg ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "img/kilce-kalmara.jpg";

/***/ }),

/***/ "./src/img/koriushka-m.jpg":
/*!*********************************!*\
  !*** ./src/img/koriushka-m.jpg ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "img/koriushka-m.jpg";

/***/ }),

/***/ "./src/img/koriushka-m1.jpg":
/*!**********************************!*\
  !*** ./src/img/koriushka-m1.jpg ***!
  \**********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "img/koriushka-m1.jpg";

/***/ }),

/***/ "./src/img/koriushka.jpg":
/*!*******************************!*\
  !*** ./src/img/koriushka.jpg ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "img/koriushka.jpg";

/***/ }),

/***/ "./src/img/kranch-m.jpg":
/*!******************************!*\
  !*** ./src/img/kranch-m.jpg ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "img/kranch-m.jpg";

/***/ }),

/***/ "./src/img/kranch-m1.jpg":
/*!*******************************!*\
  !*** ./src/img/kranch-m1.jpg ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "img/kranch-m1.jpg";

/***/ }),

/***/ "./src/img/kranch-m2.jpg":
/*!*******************************!*\
  !*** ./src/img/kranch-m2.jpg ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "img/kranch-m2.jpg";

/***/ }),

/***/ "./src/img/kranch.jpg":
/*!****************************!*\
  !*** ./src/img/kranch.jpg ***!
  \****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "img/kranch.jpg";

/***/ }),

/***/ "./src/img/kukurudza-m.jpg":
/*!*********************************!*\
  !*** ./src/img/kukurudza-m.jpg ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "img/kukurudza-m.jpg";

/***/ }),

/***/ "./src/img/kukurudza-m1.jpg":
/*!**********************************!*\
  !*** ./src/img/kukurudza-m1.jpg ***!
  \**********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "img/kukurudza-m1.jpg";

/***/ }),

/***/ "./src/img/kukurudza.jpg":
/*!*******************************!*\
  !*** ./src/img/kukurudza.jpg ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "img/kukurudza.jpg";

/***/ }),

/***/ "./src/img/kvas-1.jpg":
/*!****************************!*\
  !*** ./src/img/kvas-1.jpg ***!
  \****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "img/kvas-1.jpg";

/***/ }),

/***/ "./src/img/kvas-m.jpg":
/*!****************************!*\
  !*** ./src/img/kvas-m.jpg ***!
  \****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "img/kvas-m.jpg";

/***/ }),

/***/ "./src/img/kvas.jpg":
/*!**************************!*\
  !*** ./src/img/kvas.jpg ***!
  \**************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "img/kvas.jpg";

/***/ }),

/***/ "./src/img/lemonade-m.jpg":
/*!********************************!*\
  !*** ./src/img/lemonade-m.jpg ***!
  \********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "img/lemonade-m.jpg";

/***/ }),

/***/ "./src/img/lemonade-m1.jpg":
/*!*********************************!*\
  !*** ./src/img/lemonade-m1.jpg ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "img/lemonade-m1.jpg";

/***/ }),

/***/ "./src/img/liasch-m.jpg":
/*!******************************!*\
  !*** ./src/img/liasch-m.jpg ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "img/liasch-m.jpg";

/***/ }),

/***/ "./src/img/liasch-m1.jpg":
/*!*******************************!*\
  !*** ./src/img/liasch-m1.jpg ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "img/liasch-m1.jpg";

/***/ }),

/***/ "./src/img/liasch.jpg":
/*!****************************!*\
  !*** ./src/img/liasch.jpg ***!
  \****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "img/liasch.jpg";

/***/ }),

/***/ "./src/img/limonad-m2.jpg":
/*!********************************!*\
  !*** ./src/img/limonad-m2.jpg ***!
  \********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "img/limonad-m2.jpg";

/***/ }),

/***/ "./src/img/limonad.jpg":
/*!*****************************!*\
  !*** ./src/img/limonad.jpg ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "img/limonad.jpg";

/***/ }),

/***/ "./src/img/logo.png":
/*!**************************!*\
  !*** ./src/img/logo.png ***!
  \**************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "img/logo.png";

/***/ }),

/***/ "./src/img/miaso-chipsy-m.jpg":
/*!************************************!*\
  !*** ./src/img/miaso-chipsy-m.jpg ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "img/miaso-chipsy-m.jpg";

/***/ }),

/***/ "./src/img/miaso-chipsy-m1.jpg":
/*!*************************************!*\
  !*** ./src/img/miaso-chipsy-m1.jpg ***!
  \*************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "img/miaso-chipsy-m1.jpg";

/***/ }),

/***/ "./src/img/miaso-chipsy.jpg":
/*!**********************************!*\
  !*** ./src/img/miaso-chipsy.jpg ***!
  \**********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "img/miaso-chipsy.jpg";

/***/ }),

/***/ "./src/img/mohito-1.jpg":
/*!******************************!*\
  !*** ./src/img/mohito-1.jpg ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "img/mohito-1.jpg";

/***/ }),

/***/ "./src/img/mohito-m.jpg":
/*!******************************!*\
  !*** ./src/img/mohito-m.jpg ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "img/mohito-m.jpg";

/***/ }),

/***/ "./src/img/mohito.jpg":
/*!****************************!*\
  !*** ./src/img/mohito.jpg ***!
  \****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "img/mohito.jpg";

/***/ }),

/***/ "./src/img/nalyvka-m.jpg":
/*!*******************************!*\
  !*** ./src/img/nalyvka-m.jpg ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "img/nalyvka-m.jpg";

/***/ }),

/***/ "./src/img/nalyvka-m1.jpg":
/*!********************************!*\
  !*** ./src/img/nalyvka-m1.jpg ***!
  \********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "img/nalyvka-m1.jpg";

/***/ }),

/***/ "./src/img/nalyvka-m2.jpg":
/*!********************************!*\
  !*** ./src/img/nalyvka-m2.jpg ***!
  \********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "img/nalyvka-m2.jpg";

/***/ }),

/***/ "./src/img/nalyvka.jpg":
/*!*****************************!*\
  !*** ./src/img/nalyvka.jpg ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "img/nalyvka.jpg";

/***/ }),

/***/ "./src/img/opillia-m.jpg":
/*!*******************************!*\
  !*** ./src/img/opillia-m.jpg ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "img/opillia-m.jpg";

/***/ }),

/***/ "./src/img/opillia-m1.jpg":
/*!********************************!*\
  !*** ./src/img/opillia-m1.jpg ***!
  \********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "img/opillia-m1.jpg";

/***/ }),

/***/ "./src/img/opillia.jpg":
/*!*****************************!*\
  !*** ./src/img/opillia.jpg ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "img/opillia.jpg";

/***/ }),

/***/ "./src/img/pautynka-kalmara-m.jpg":
/*!****************************************!*\
  !*** ./src/img/pautynka-kalmara-m.jpg ***!
  \****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "img/pautynka-kalmara-m.jpg";

/***/ }),

/***/ "./src/img/pautynka-kalmara-m1.jpg":
/*!*****************************************!*\
  !*** ./src/img/pautynka-kalmara-m1.jpg ***!
  \*****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "img/pautynka-kalmara-m1.jpg";

/***/ }),

/***/ "./src/img/pautynka-kalmara.jpg":
/*!**************************************!*\
  !*** ./src/img/pautynka-kalmara.jpg ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "img/pautynka-kalmara.jpg";

/***/ }),

/***/ "./src/img/plitka-m.jpg":
/*!******************************!*\
  !*** ./src/img/plitka-m.jpg ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "img/plitka-m.jpg";

/***/ }),

/***/ "./src/img/plitka-m1.jpg":
/*!*******************************!*\
  !*** ./src/img/plitka-m1.jpg ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "img/plitka-m1.jpg";

/***/ }),

/***/ "./src/img/plitka.jpg":
/*!****************************!*\
  !*** ./src/img/plitka.jpg ***!
  \****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "img/plitka.jpg";

/***/ }),

/***/ "./src/img/sik-bob-m.jpg":
/*!*******************************!*\
  !*** ./src/img/sik-bob-m.jpg ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "img/sik-bob-m.jpg";

/***/ }),

/***/ "./src/img/sik-bob.jpg":
/*!*****************************!*\
  !*** ./src/img/sik-bob.jpg ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "img/sik-bob.jpg";

/***/ }),

/***/ "./src/img/smuga-lososia-m.jpg":
/*!*************************************!*\
  !*** ./src/img/smuga-lososia-m.jpg ***!
  \*************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "img/smuga-lososia-m.jpg";

/***/ }),

/***/ "./src/img/smuga-lososia-m1.jpg":
/*!**************************************!*\
  !*** ./src/img/smuga-lososia-m1.jpg ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "img/smuga-lososia-m1.jpg";

/***/ }),

/***/ "./src/img/smuga-lososia.jpg":
/*!***********************************!*\
  !*** ./src/img/smuga-lososia.jpg ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "img/smuga-lososia.jpg";

/***/ }),

/***/ "./src/img/smugastyk-m.jpg":
/*!*********************************!*\
  !*** ./src/img/smugastyk-m.jpg ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "img/smugastyk-m.jpg";

/***/ }),

/***/ "./src/img/smugastyk-m1.JPG":
/*!**********************************!*\
  !*** ./src/img/smugastyk-m1.JPG ***!
  \**********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "img/smugastyk-m1.JPG";

/***/ }),

/***/ "./src/img/smugastyk.JPG":
/*!*******************************!*\
  !*** ./src/img/smugastyk.JPG ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "img/smugastyk.JPG";

/***/ }),

/***/ "./src/img/stella-m.jpg":
/*!******************************!*\
  !*** ./src/img/stella-m.jpg ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "img/stella-m.jpg";

/***/ }),

/***/ "./src/img/stella.jpg":
/*!****************************!*\
  !*** ./src/img/stella.jpg ***!
  \****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "img/stella.jpg";

/***/ }),

/***/ "./src/img/syr-solomka-m.jpg":
/*!***********************************!*\
  !*** ./src/img/syr-solomka-m.jpg ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "img/syr-solomka-m.jpg";

/***/ }),

/***/ "./src/img/syr-solomka-m1.jpg":
/*!************************************!*\
  !*** ./src/img/syr-solomka-m1.jpg ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "img/syr-solomka-m1.jpg";

/***/ }),

/***/ "./src/img/syr-solomka.jpg":
/*!*********************************!*\
  !*** ./src/img/syr-solomka.jpg ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "img/syr-solomka.jpg";

/***/ }),

/***/ "./src/img/taran-m.jpg":
/*!*****************************!*\
  !*** ./src/img/taran-m.jpg ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "img/taran-m.jpg";

/***/ }),

/***/ "./src/img/taran-m1.jpg":
/*!******************************!*\
  !*** ./src/img/taran-m1.jpg ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "img/taran-m1.jpg";

/***/ }),

/***/ "./src/img/taran.jpg":
/*!***************************!*\
  !*** ./src/img/taran.jpg ***!
  \***************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "img/taran.jpg";

/***/ }),

/***/ "./src/img/tunec-m.jpg":
/*!*****************************!*\
  !*** ./src/img/tunec-m.jpg ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "img/tunec-m.jpg";

/***/ }),

/***/ "./src/img/tunec-m1.jpg":
/*!******************************!*\
  !*** ./src/img/tunec-m1.jpg ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "img/tunec-m1.jpg";

/***/ }),

/***/ "./src/img/tunec.jpg":
/*!***************************!*\
  !*** ./src/img/tunec.jpg ***!
  \***************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "img/tunec.jpg";

/***/ }),

/***/ "./src/img/uman-medove-m-1.jpg":
/*!*************************************!*\
  !*** ./src/img/uman-medove-m-1.jpg ***!
  \*************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "img/uman-medove-m-1.jpg";

/***/ }),

/***/ "./src/img/uman-medove-m.jpg":
/*!***********************************!*\
  !*** ./src/img/uman-medove-m.jpg ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "img/uman-medove-m.jpg";

/***/ }),

/***/ "./src/img/uman-medove.jpg":
/*!*********************************!*\
  !*** ./src/img/uman-medove.jpg ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "img/uman-medove.jpg";

/***/ }),

/***/ "./src/img/vuha-m.jpg":
/*!****************************!*\
  !*** ./src/img/vuha-m.jpg ***!
  \****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "img/vuha-m.jpg";

/***/ }),

/***/ "./src/img/vuha-m1.jpg":
/*!*****************************!*\
  !*** ./src/img/vuha-m1.jpg ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "img/vuha-m1.jpg";

/***/ }),

/***/ "./src/img/vuha-m2.jpg":
/*!*****************************!*\
  !*** ./src/img/vuha-m2.jpg ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "img/vuha-m2.jpg";

/***/ }),

/***/ "./src/img/vuha-m3.jpg":
/*!*****************************!*\
  !*** ./src/img/vuha-m3.jpg ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "img/vuha-m3.jpg";

/***/ }),

/***/ "./src/img/vuha.jpg":
/*!**************************!*\
  !*** ./src/img/vuha.jpg ***!
  \**************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "img/vuha.jpg";

/***/ }),

/***/ "./src/img/vyno-m.jpg":
/*!****************************!*\
  !*** ./src/img/vyno-m.jpg ***!
  \****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "img/vyno-m.jpg";

/***/ }),

/***/ "./src/img/vyno-m1.jpg":
/*!*****************************!*\
  !*** ./src/img/vyno-m1.jpg ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "img/vyno-m1.jpg";

/***/ }),

/***/ "./src/img/vyno-m2.jpg":
/*!*****************************!*\
  !*** ./src/img/vyno-m2.jpg ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "img/vyno-m2.jpg";

/***/ }),

/***/ "./src/img/vyno-m3.jpg":
/*!*****************************!*\
  !*** ./src/img/vyno-m3.jpg ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "img/vyno-m3.jpg";

/***/ }),

/***/ "./src/img/vyno-m4.jpg":
/*!*****************************!*\
  !*** ./src/img/vyno-m4.jpg ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "img/vyno-m4.jpg";

/***/ }),

/***/ "./src/img/vyno-m5.jpg":
/*!*****************************!*\
  !*** ./src/img/vyno-m5.jpg ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "img/vyno-m5.jpg";

/***/ }),

/***/ "./src/img/vyno.jpg":
/*!**************************!*\
  !*** ./src/img/vyno.jpg ***!
  \**************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "img/vyno.jpg";

/***/ }),

/***/ "./src/img/waiisburg-blanche.jpg":
/*!***************************************!*\
  !*** ./src/img/waiisburg-blanche.jpg ***!
  \***************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "img/waiisburg-blanche.jpg";

/***/ }),

/***/ "./src/img/waissburg-blanche-m.JPG":
/*!*****************************************!*\
  !*** ./src/img/waissburg-blanche-m.JPG ***!
  \*****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "img/waissburg-blanche-m.JPG";

/***/ }),

/***/ "./src/img/waissburg-dunke-m1.png":
/*!****************************************!*\
  !*** ./src/img/waissburg-dunke-m1.png ***!
  \****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "img/waissburg-dunke-m1.png";

/***/ }),

/***/ "./src/img/waissburg-dunkel-m.png":
/*!****************************************!*\
  !*** ./src/img/waissburg-dunkel-m.png ***!
  \****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "img/waissburg-dunkel-m.png";

/***/ }),

/***/ "./src/img/waissburg-lager-m.jpg":
/*!***************************************!*\
  !*** ./src/img/waissburg-lager-m.jpg ***!
  \***************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "img/waissburg-lager-m.jpg";

/***/ }),

/***/ "./src/img/waissburg-lager-m1.jpg":
/*!****************************************!*\
  !*** ./src/img/waissburg-lager-m1.jpg ***!
  \****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "img/waissburg-lager-m1.jpg";

/***/ }),

/***/ "./src/img/waissburg-lager.jpg":
/*!*************************************!*\
  !*** ./src/img/waissburg-lager.jpg ***!
  \*************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "img/waissburg-lager.jpg";

/***/ }),

/***/ "./src/img/wasiiburg-blanche-m1.jpeg":
/*!*******************************************!*\
  !*** ./src/img/wasiiburg-blanche-m1.jpeg ***!
  \*******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "img/wasiiburg-blanche-m1.jpeg";

/***/ }),

/***/ "./src/img/weissburg-dunkel.jpg":
/*!**************************************!*\
  !*** ./src/img/weissburg-dunkel.jpg ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "img/weissburg-dunkel.jpg";

/***/ }),

/***/ "./src/img/yantarna-m.jpg":
/*!********************************!*\
  !*** ./src/img/yantarna-m.jpg ***!
  \********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "img/yantarna-m.jpg";

/***/ }),

/***/ "./src/img/yantarna-m1.jpg":
/*!*********************************!*\
  !*** ./src/img/yantarna-m1.jpg ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "img/yantarna-m1.jpg";

/***/ }),

/***/ "./src/img/yantarna.jpg":
/*!******************************!*\
  !*** ./src/img/yantarna.jpg ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "img/yantarna.jpg";

/***/ }),

/***/ "./src/products.json":
/*!***************************!*\
  !*** ./src/products.json ***!
  \***************************/
/***/ ((module) => {

"use strict";
module.exports = JSON.parse('[{"name":"lemonade","type":"ba","imgPreview":"img/limonad.jpg","title":"Напій безалкогольний «Лимонад» в кегах","subtitle":"Вінницька харчосмакова фабрика","price":"27₴","metering":"1кг","isInShop":"true","modalImages":[{"src":"img/lemonade-m.jpg","alt":"лимонад,зображення"},{"src":"img/lemonade-m1.jpg","alt":"лимонад,зображення"}],"desc":["Лимонад - легкий освіжаючий напій, який виготовляється в найкращих традиціях вітчизняної безалкогольної промисловості.","Цей напій прийшов до нас із Франції - країни з багатою кулінарною історією (саме від французького «limonade», що означає щось на кшталт «лімонізований», і виникло слово «лимонад»).","З\'явившись у епоху Петра I, лимонад отримав розповсюдження в усіх пострадянський країнах. Згадуючи цю назву, ми - дорослі - поринаємо у дитинство, згадуємо прогулянки з батьками в парках, сімейні свята."]},{"name":"mohito","type":"ba","imgPreview":"img/mohito.jpg","title":"Напій безалкогольний «Мохіто» в кегах","subtitle":"Вінницька харчосмакова фабрика","price":"27₴","metering":"1кг","isInShop":"true","modalImages":[{"src":"img/mohito-1.jpg","alt":"мохіто,зображення"},{"src":"img/mohito-m.jpg","alt":"мохіто,зображення"}],"desc":["Мохіто — натуральний газирований напій на основі соку лайма та м’яти.","Батьківщина напою Мохіто — Куба, де він вважається неофіційним національним напоєм. Комбінація солодкого та освіжаючого цитрусу з м’ятою робить цей напій одним з найпопулярніших літніх напоїв у світі.","Ми пропонуємо Вам насолодитися чудовим смаком освіжаючого напою, який чудово втамовує спрагу."]},{"name":"kvas","type":"ba","imgPreview":"img/kvas.jpg","title":"Квас «Хлібний» в кегах","subtitle":"Вінницька харчосмакова фабрика","price":"30₴","metering":"1кг","isInShop":"true","modalImages":[{"src":"img/kvas-m.jpg","alt":"мохіто,зображення"},{"src":"img/kvas-1.jpg","alt":"мохіто,зображення"}],"desc":["Квас — безалкогольний напій, що ідеально утамовує спрагу. По смакових і поживних властивостях квас перевершує усі напої.","Вперше квас був виготовлений більше тисячі років тому, але і в наші дні залишається дуже популярним.","Квас, виготовлений із зернової сировини, має не тільки відмінні смакові якості, але і нормалізує процеси обміну в організмі людини, регулює діяльність шлунково-кишкового тракту, перешкоджає розмноженню шкідливих мікробів, позитивно впливає на сердечно-судинну систему."]},{"name":"stella","type":"ba","imgPreview":"img/stella.jpg","title":"Пиво Stella Artois","subtitle":"Пиво безалкогольне 0.0%, Ж/Б 0.33","price":"50₴","metering":"1шт","isInShop":"true","modalImages":[{"src":"img/stella-m.jpg","alt":"Стелла Артуа,зображення"}],"desc":["Легкий преміальний табір від всесвітньо відомого бренду Stella  Artois . Пиво світло-солом\'яного кольору, із приємним зерновим ароматом. Смак пива Stella  Artois  поєднує легку зернову кислинку та слабку гіркоту хмелю. При наливанні у склянку дає дуже стійку піну."]},{"name":"sik-bob","type":"ba","imgPreview":"img/sik-bob.jpg","title":"Сік SpongeBob","subtitle":"Сік без цукру 200 мл, в асортименті","price":"20₴","metering":"1шт","isInShop":"true","modalImages":[{"src":"img/sik-bob-m.jpg","alt":"сік боб,зображення"}],"desc":["Натуральний концентрований сік.","В асортименті: яблуко-виноград, яблуко-персик, яблуко-полуниця, мультифрукт"]},{"name":"cidr-mango-peach","type":"alcohol","imgPreview":"img/cidre-logo.png","title":"Cidre Royal, манго-персик","subtitle":"Роял Фрут Гарден, кисло-солодкий сидр","alcohol":"5","price":"55₴","metering":"1кг","isInShop":"true","modalImages":[{"src":"img/cidre-manho-persyk.jpg","alt":"сидр,зображення"},{"src":"img/cidre-logo-m.png","alt":"сидр,зображення"}],"desc":["Напій має приємний свіжий смак , в якому приємна яблучна кислинка ідеально поєднується з екзотичною солодкістю манго та персика."]},{"name":"cidr-cactus","type":"alcohol","imgPreview":"img/kaktus.png","title":"Сидр ЕДЕМ, лонгер Кактус","subtitle":"Пікантний та яскравий смаковий букет","alcohol":"5","price":"55₴","metering":"1кг","isInShop":"true","modalImages":[{"src":"img/kaktus-m.png","alt":"сидр,зображення"}],"desc":["Колючі бульбашки піднімають настрій. Після келиха сидру, швидше за все, захочеться одягнутись у сомбреро і зіграти на укулелі, так що кличте друзів і влаштовуйте галасливі посиденьки. Відмінно освіжає і вгамовує спрагу."]},{"name":"cidr-medusa","type":"alcohol","imgPreview":"img/cidre-logo.png","title":"Cidre Royal, фруктель Медуза","subtitle":"Роял Фрут Гарден, пікантний та яскравий сидр","alcohol":"5","price":"55₴","metering":"1кг","isInShop":"true","modalImages":[{"src":"img/cidre-medusa.jpg","alt":"сидр,зображення"},{"src":"img/cidre-logo-m.png","alt":"сидр,зображення"}],"desc":["Напій \\"Медуза\\" – вишуканий, авторський, крафтовий коктейль. Він характеризується ананасово-журавлинним смаком з легким персиковим відтінком."]},{"name":"cidr-fragolino","type":"alcohol","imgPreview":"img/cidre-logo.png","title":"Cidre Royal, фраголіно","subtitle":"Роял Фрут Гарден, купажний напівсолодкий сидр","alcohol":"5","price":"55₴","metering":"1кг","isInShop":"true","modalImages":[{"src":"img/fragolino-m.jpg","alt":"сидр,зображення"},{"src":"img/cidre-logo-m.png","alt":"сидр,зображення"}],"desc":["Fragolino Cidre Royal - якісний розливний сидр. Історія створення сидру Fragolino Cidre Royal бере свій початок у мальовничому місті Золотоноша, розташованому в центральній частині України. Оточений садами та фруктовими плантаціями, Золотоноша стала ідеальним місцем для розвитку виробництва сидру.","Створення сидру Fragolino Cidre Royal почалося з акуратного відбору сортів яблук та вивчення їх характеристик. Було розроблено рецепт, заснований на традиційних методах виробництва сидру, а також впроваджено інноваційні рішення, що дозволяють досягти виняткового смаку та аромату напою.","Процес виробництва сидру Fragolino Cidre Royal суворо контролюється на всіх етапах - від збирання яблук до розливу напою в кегі. Використовується лише свіжий сік високоякісних яблук, а також передові технології та обладнання для ферментації, дозрівання та фільтрації сидру."]},{"name":"beer-cheske","type":"alcohol","imgPreview":"img/cheske.jpg","title":"Чеське світле","subtitle":"Український пивний холдинг, світле пастеризоване пиво","alcohol":"5.1","density":"12","bitterness":"12","price":"62₴","metering":"1кг","isInShop":"true","modalImages":[{"src":"img/cheske-m1.jpg","alt":"пиво чеське,зображення"},{"src":"img/cheske-m.jpg","alt":"пиво чеське,зображення"}],"desc":["Пиво має незабутній легкий смак солодового напою в поєднанні з хмільною гіркотою. Прозорий ячмінний колір, відмінно скомбінований і яскраво виражений букет смакових якостей пінистого пива «Чеське» не залишить байдужим самого прискіпливого гурмана."]},{"name":"beer-opillia","type":"alcohol","imgPreview":"img/opillia.jpg","title":"Опілля корифей","subtitle":"Тернопільська пивоварня \\"Опілля\\", світлий лагер","alcohol":"4.2","density":"11","bitterness":"15","price":"65₴","metering":"1кг","isInShop":"true","modalImages":[{"src":"img/opillia-m.jpg","alt":"пиво опілля,зображення"},{"src":"img/opillia-m1.jpg","alt":"пиво опілля,зображення"}],"desc":["\\"Корифей\\" - це особливий сорт українського пива. Він поєднує у собі всі найкращі якості справжнього класичного пива Європи лагерного типу.","Пиво \\"Опілля Корифей\\" має солодовий смак із помірною хмелевою гіркотою. Дарує приємний післясмак із нотками солодової солодинки. Це класичне пиво старої Європи, зварене за традиційною рецептурою \\"Баварського пивного закону\\" 1516 року. Воно дарує чистий смак пива і тільки пива."]},{"name":"beer-berdychiv","type":"alcohol","imgPreview":"img/berdychiv.png","title":"Бердичівське пшеничне GOLD","subtitle":"Бердичівський пивний завод, пшеничне нефільтроване","alcohol":"3.4","density":"12","bitterness":"11.6","price":"62₴","metering":"1кг","isInShop":"true","modalImages":[{"src":"img/berdychiv-m1.jpeg","alt":"пиво Бердичыв GOLD,зображення"},{"src":"img/berdychiv-pshen-m.jpg","alt":"пиво Бердичыв GOLD,зображення"}],"desc":["Світле пиво, з м’яким солодовим смаком, легким тоном пшениці та пряними відтінками.","Має слабку хмельову гіркоту, з приємно вираженими цитрусовими нотками та кислуватим після смаком.","Витримане в підвалах заводу 30 днів, при температурі +2ºC."]},{"name":"beer-pshen-berdychiv","type":"alcohol","imgPreview":"img/berdychiv-pshen.jpg","title":"Бердичівське пшеничне світле","subtitle":"Бердичівський пивний завод, пшеничне світле непастеризоване","alcohol":"4.5","density":"12","bitterness":"10","price":"62₴","metering":"1кг","isInShop":"true","modalImages":[{"src":"img/berdychiv-m.jpg","alt":"пиво опілля,зображення"},{"src":"img/berdychiv-pshen-m.jpg","alt":"пиво опілля,зображення"}],"desc":["Світле пиво, що має чистий смак солоду та хмелю.","Не пастеризоване, без консервантів.","Витримане в підвалах заводу 30 днів, при температурі +2ºC."]},{"name":"beer-bierwelle","type":"alcohol","imgPreview":"img/bierwelle.png","title":"Bierwelle PORTER","subtitle":"Бердичівський пивний завод, темний портер","alcohol":"5.6","density":"15.5","bitterness":"20","price":"74₴","metering":"1кг","isInShop":"true","modalImages":[{"src":"img/bierwelle-m.JPG","alt":"пиво  ,зображення"},{"src":"img/bierwelle-m1.jpg","alt":"пиво  ,зображення"}],"desc":["Світле пиво, з м’яким солодовим смаком, легким тоном пшениці та пряними відтінками.","Має слабку хмельову гіркоту, з приємно вираженими цитрусовими нотками та кислуватим після смаком.","Витримане в підвалах заводу 30 днів, при температурі +2ºC."]},{"name":"beer-blanche-kyiv","type":"alcohol","imgPreview":"img/blanche-de-kyiv.jpg","title":"Blanche De Kyiv","subtitle":"Український пивний холдинг, пшеничне світле нефільтроване","alcohol":"4.9","density":"11","bitterness":"11","price":"68₴","metering":"1кг","isInShop":"true","modalImages":[{"src":"img/blanche-de-kyiv-m.jpg","alt":"пиво,зображення"},{"src":"img/blanche-de-kyiv-m1.jpg","alt":"пиво,зображення"}],"desc":["Пиво «Бланш де Київ» — це унікальний сорт світлого пива верхового бродіння, при виготовленні якого додають пшеницю. Кожен ковток пива «Бланш де Київ» дуже легко п’ється і не дуже п’янить, при цьому воно добре освіжає в спеку. Також, м’який смак напою з ніжною кислинкою і відсутністю гіркоти дивно гармонує з будь-якими салатами, морепродуктами, м’ясом, сирами і овочами."]},{"name":"beer-uman-medove","type":"alcohol","imgPreview":"img/uman-medove.jpg","title":"Уманське медове","subtitle":"Уманьпиво, світле фільтроване","alcohol":"6.5","density":"16","bitterness":"17","price":"65₴","metering":"1кг","isInShop":"true","modalImages":[{"src":"img/uman-medove-m.jpg","alt":"пиво,зображення"},{"src":"img/uman-medove-m-1.jpg","alt":"пиво,зображення"}],"desc":["Світле фільтроване пиво низового бродіння із солодово-медовим ароматом з квітковими нотками. Пиво золотистого кольору із середньозернистою, стійкою піною. Повнота смаку відчувається із першого ковтка. Пиво виготовляється зі світло-ячмінного солоду із додаванням квіткового меду"]},{"name":"beer-waissburg-dunkel","type":"alcohol","imgPreview":"img/weissburg-dunkel.jpg","title":"Waissburg Dunkel","subtitle":"Уманьпиво, темний лагер","alcohol":"4.7","density":"11","bitterness":"18","price":"65₴","metering":"1кг","isInShop":"true","modalImages":[{"src":"img/waissburg-dunkel-m.png","alt":"пиво,зображення"},{"src":"img/waissburg-dunke-m1.png","alt":"пиво,зображення"}],"desc":["Темне пиво з палено-солодовим смаком та ароматом, виготовлене за класичною технологією темних лагерів.","Waissburg Dunkel має насичений шоколадний колір. Аромат пива солодовий з нотками міцної кави. Смак злегка солодкуватий з різноманітними тонами солодових зерен та карамелі, що переходить в легкий хмелевий післясмак. Темне пиво виготовляється з солоду типу Pilsner, Munich, карамельного та паленого солоду. Для охмелення пива використовується тонко ароматичний хміль з трав’яними та квітковими ароматами."]},{"name":"beer-waissburg-blanche","type":"alcohol","imgPreview":"img/waiisburg-blanche.jpg","title":"Waissburg Blanche","subtitle":"Уманьпиво, нефільтроване пшеничне світле пиво","alcohol":"4.7","density":"11.5","bitterness":"12","price":"68₴","metering":"1кг","isInShop":"true","modalImages":[{"src":"img/waissburg-blanche-m.JPG","alt":"пиво,зображення"},{"src":"img/wasiiburg-blanche-m1.jpeg","alt":"пиво,зображення"}],"desc":["Світле нефільтроване пиво виготовлене за бельгійською технологією пшеничного пива типу Wit (Віт)","Нефільтроване пшеничне світле пиво верхового бродіння молочно-жовтого кольору, що має складний і багатий аромат солоду та спецій в поєднанні з нотками фруктів. Смак злегка солодкуватий, пряно-солодовий з пікантним акцентом апельсину та коріандру. Для виготовлення цього унікального та витонченого пива використовується відбірний ячмінний солод (типу Pilsner) в поєднанні з більше ніж як 50% пшеничного солоду та з додаванням хмелю, що має цитрусовий аромат. Під час варіння додаються зерна коріандру та цедра апельсину."]},{"name":"beer-waissburg-lager","type":"alcohol","imgPreview":"img/waissburg-lager.jpg","title":"Waissburg Lager","subtitle":"Уманьпиво, світлий лагер","alcohol":"4.7","density":"11","bitterness":"11","price":"62₴","metering":"1кг","isInShop":"true","modalImages":[{"src":"img/waissburg-lager-m.jpg","alt":"пиво,зображення"},{"src":"img/waissburg-lager-m1.jpg","alt":"пиво,зображення"}],"desc":["Світле пиво, виготовлене за німецькою рецептурою відповідно до «Закону про чистоту пивоваріння»","Пиво солом’яного кольору зі стійкою піною. У вираженому ароматі домінує зернова солодкість. Помірна щільність. У смаку переважає все та ж чітка зернова солодкість із легкими фруктовими відтінками. У післясмаку добре виражена хмельова гіркота, яку можна сміливо назвати благородною, нетиповою для пива інших виробників на українському ринку. Напій зварений за німецькою технологією."]},{"name":"beer-proskurivske","type":"alcohol","imgPreview":"img/hmelpyvo.JPG","title":"Проскурівське світле фільтроване","subtitle":"Хмельпиво, світле фільтроване","alcohol":"3.7","density":"11","bitterness":"12","price":"62₴","metering":"1кг","isInShop":"true","modalImages":[{"src":"img/hmelpyvo-m.jpg","alt":"пиво,зображення"},{"src":"img/hmelpyvo-m1.png","alt":"пиво,зображення"}],"desc":["Легке пиво для повсякденного вгамування спраги з солодовим, слабовираженим солодкуватим, притаманним цикорію смаком та приємною гіркотою хмелю. На міжнародних дегустаціях нагороджений Гран-Прі, трьома золотими та одною бронзовою медалями."]},{"name":"nalyvka","type":"alcohol","imgPreview":"img/nalyvka.jpg","title":"Наливка в асортименті","subtitle":"Наливки Royal Fruit Garden, пані Слива, пані Вишня","alcohol":"8.4","density":"","bitterness":"","price":"85₴","metering":"1л","isInShop":"true","modalImages":[{"src":"img/nalyvka-m.jpg","alt":"Наливка,зображення"},{"src":"img/nalyvka-m1.jpg","alt":"Наливка,зображення"},{"src":"img/nalyvka-m2.jpg","alt":"Наливка,зображення"}],"desc":["Витончені настоянки з яскравими смаками стиглої вишні та сливи. Виготовлені за оригінальною рецептурою, що дозволяє зберегти не тільки натуральний смак, а й легкий присмак  кісточок та злегка помітні свіжі фруктові ноти. Солодкість напоїв відчутна, але помірна. Настоянки «Пані Вишня» та «Пані Слива» слід вживати злегка охолодженими й пити, смакуючи, невеличкими ковтками.","«Пані Вишня» та «Пані Слива» в першу чергу, звісно, жіночі напої, але й чоловіків не залишать байдужими."]},{"name":"vynp","type":"alcohol","imgPreview":"img/vyno.jpg","title":"Вино CRAFFTOVA в асортименті","subtitle":"Каберне, Гранд Нуар, Велюто Нуар, Бело Россо, Емілія Б\'янко, Мускат Білий, Фльор де Блан, Дольче Бела","alcohol":"10","density":"","bitterness":"","price":"82₴","metering":"1л","isInShop":"true","modalImages":[{"src":"img/vyno-m.jpg","alt":"Вино CRAFFTOVA,зображення"},{"src":"img/vyno-m1.jpg","alt":"Вино CRAFFTOVA,зображення"},{"src":"img/vyno-m2.jpg","alt":"Вино CRAFFTOVA,зображення"},{"src":"img/vyno-m3.jpg","alt":"Вино CRAFFTOVA,зображення"},{"src":"img/vyno-m4.jpg","alt":"Вино CRAFFTOVA,зображення"},{"src":"img/vyno-m5.jpg","alt":"Вино CRAFFTOVA,зображення"}],"desc":["Каберне - сортове сухе червоне, Гранд Нуар - гранат (напівсолодке червоне), Велюто Нуар - напівсолодке червоне, Бело Россо - смородина (напівсолодке червоне), Емілія Б\'янко - манго-абрикос (напівсолодке біле), Мускат Білий - напівсолодке біле, Фльор де Блан - персик (напівсолодке біле), Дольче Бела - слива-мигдаль (напівсолодке біле)","Для виробництва вин Крафтова використовують виноградники, які розташовані на «виноградній широті» між 46 і 47 градусами – саме на тій самій широті, що й відомі французькі регіони Бордо та Бургундія. У горбистій місцевості Українська Бессарабія природно поєднує в собі довге сонячне літо та коротку порівняно м\'яку зиму з частими снігопадами, що дозволяє вирощувати рясні високоякісні врожаї. Поєднання чорноземів та піщаних ґрунтів з горбистій місцевістю забезпечує природну основу для виноробства з незапам\'ятних часів.","Історія виноробства регіону налічує щонайменше 1500 років. На площі 1200 га вирощуємо найбільш підходящі сорти винограду. Виноробня обладнана сучасним європейським обладнанням для переробки винограду, зберігання виноматеріалів та розливу вина. Найкращі фахівці галузі докладають зусиль для створення чудового продукту, який буде відповідати очікуванням навіть найвишуканіших шанувальників вина. Ми об\'єднали багаторічні традиції виноробства нашої країни із сучасними всесвітніми технологіями. Наш бездоганний продукт доповнюється креативними та дизайнерськими ідеями та спирається на ретельно продуману стратегію."]},{"name":"chips-assortment","type":"appetizer","imgPreview":"img/chips.jpg","title":"Чипси картопляні","subtitle":"Зі смаками сиру, бекону, паприки, зелень, курка гриль","price":"25₴","metering":"1уп","isInShop":"true","modalImages":[{"src":"img/chips-m.jpg","alt":"чіпси,зображення"},{"src":"img/chips.jpg","alt":"чіпси,зображення"}],"desc":["Чудово смакують під пінне. Далі даммі тескст Далі даммі тескст Далі даммі тескст Далі даммі тескст Далі даммі тескст Далі даммі тескст Далі даммі тескст","Чудово смакують під пінне. Далі даммі тескст Далі даммі тескст Далі даммі тескст Далі даммі тескст Далі даммі тескст Далі даммі тескст Далі даммі тескст"]},{"name":"grinky-hvyliasti","type":"appetizer","imgPreview":"img/grinky.jpg","title":"Грінки \\"Хвилясті\\"","subtitle":"Хрін, бекон, сир, паприка, сметана з зеленню, часник, смажений стейк, копчений лосось, креветка в вершковому соусі, васабі, томат-базилік, гриби в сметанному соусі.","price":"35₴","metering":"1уп","isInShop":"true","modalImages":[{"src":"img/grinky-m.jpg","alt":"Грінки хвилясті,зображення"}],"desc":["Сухарики-грінки Хвилясті, які вони?","Свіжий хліб, приправи виготовлені на натуральній основі або натуральних ароматизаторах, унікальна форма, великий асортимент смаків, якість, поживність","Не вірите, що все це можливо поєднати в одному продукті? Спробуйте і переконайтесь самі."]},{"name":"grinky-craft","type":"appetizer","imgPreview":"img/grinky-craft.jpg","title":"Грінки КРАФТ Шумер","subtitle":"В асортименті","price":"35₴","metering":"1уп","isInShop":"true","modalImages":[{"src":"img/grinky-craft-m.jpg","alt":"Грінки хвилясті,зображення"}],"desc":["Грінки житньо-пшеничні зі смаками: часник, холодець і хрін, томат, качка по пекінські, сало і гірчиця, гриби в сметані, телятина з аджикою, мюнхенські ковбаски. Пакування по 100 грам."]},{"name":"grinky-domashni","type":"appetizer","imgPreview":"img/grinky-domashni.jpg","title":"Домашні гріночки","subtitle":"В асортименті","price":"32₴","metering":"1уп","isInShop":"true","modalImages":[{"src":"img/grinky-domashni-m.jpg","alt":"Грінки домашні,зображення"},{"src":"img/grinky-domashni-m1.jpg","alt":"Грінки домашні,зображення"}],"desc":["Грінки Домашні, гріночки житньо-пшеничні по 100гр в упаковці, в асортименті."]},{"name":"vuha","type":"appetizer","imgPreview":"img/vuha.jpg","title":"Вуха свинячі, в асортименті","subtitle":"М\'ясокомбінат РІАЛ. Часник, хрон, паприка, пряні.","price":"50₴","metering":"1уп","isInShop":"true","modalImages":[{"src":"img/vuha-m.jpg","alt":"Вуха свинячі,зображення"},{"src":"img/vuha-m1.jpg","alt":"Вуха свинячі, зображення"},{"src":"img/vuha-m2.jpg","alt":"Вуха свинячі, зображення"},{"src":"img/vuha-m3.jpg","alt":"Вуха свинячі, зображення"}],"desc":["Грінки Домашні, гріночки житньо-пшеничні по 100гр в упаковці, в асортименті."]},{"name":"anchous","type":"appetizer","imgPreview":"img/anchous.JPG","title":"Анчоус солено-сушений","subtitle":"Снеки закуски до пива, рибні снеки","price":"35₴","metering":"50гр","isInShop":"true","modalImages":[{"src":"img/anchous-m.jpg","alt":"Анчоус,зображення"},{"src":"img/anchous-m1.jpg","alt":"Анчоус, зображення"}],"desc":["Анчоус солоно-сушений — це сама дрібна рибка в лінійці сушених морепродуктів. Незважаючи на свій маленький розмір, вона користується великим попитом. Раніше незнайомий, екзотичний смак цього морського делікатесу навіяний нас із заходу, незважаючи на те, що добувається риба в Андаманському морі біля узбережжя Таїланду.","Це дрібна рибка сріблястого кольору відноситься до сильно солоних закусок і доходить до споживача вже без голови. Анчоус сушений дуже маленького розміру, тому його часто їдять «як насіння»."]},{"name":"arahis","type":"appetizer","imgPreview":"img/arahis.jpg","title":"Арахіс смажений в асортименті","subtitle":"Закуска до пива. Смаки: сіль, сир","price":"13₴","metering":"50гр","isInShop":"true","modalImages":[{"src":"img/arahis-m.jpg","alt":"Арахіс,зображення"},{"src":"img/arahis.jpg","alt":"Арахіс, зображення"}],"desc":["Арахіс солоний виготовляється зі звичайного арахісу за допомогою легкого обсмажування з додаванням солі та спецій.","Арахіс – це смачний горіх, але ще смачніше, коли він обсмажений і солоний. Такі ласощі оцінять справжні гурмани."]},{"name":"gustira","type":"appetizer","imgPreview":"img/gustira.jpg","title":"Густіра в\'ялена","subtitle":"Риба в\'ялена солона.","price":"18₴","metering":"50гр","isInShop":"true","modalImages":[{"src":"img/gustira-m1.jpg","alt":"Густіра,зображення"},{"src":"img/gustira-m.jpg","alt":"Густіра, зображення"}],"desc":["Шанувальники в\'яленої риби в курсі, наскільки смачна в\'ялена густера. Ця риба стане в нагоді як для оформлення столу, так і як пивна добавка.","Густера хороша у будь-якому вигляді, але особливо шанована серед народу у в\'яленому вигляді як незмінна складова пивної тарілки.","Густера - невелика прісноводна риба сімейства карпоподібних. В\'ялення цієї риби – процес, що дозволяє одержати продукт без додавання хімічних речовин. Біле ніжне м\'ясо густери вважається дієтичним завдяки невисокому вмісту жирів"]},{"name":"smugastyk","type":"appetizer","imgPreview":"img/smugastyk.JPG","title":"Жовтий смугастик","subtitle":"Ставрида малосольона засушена","price":"38₴","metering":"50гр","isInShop":"true","modalImages":[{"src":"img/smugastyk-m.jpg","alt":"Смугастик жовтий,зображення"},{"src":"img/smugastyk-m1.JPG","alt":"Смугастик жовтий, зображення"}],"desc":["Жовтий смугастик- улюблена закуска до свіжого охолодженого пива. Його можна сміливо назвати найпопулярнішим снеком.","Якщо ви не пробували цей снек - рекомендуємо, адже смак цієї риби перевірений часом"]},{"name":"taran","type":"appetizer","imgPreview":"img/taran.jpg","title":"Тарань в\'ялена","subtitle":"Риба в\'ялена солона","price":"30₴","metering":"50гр","isInShop":"true","modalImages":[{"src":"img/taran-m.jpg","alt":"тарань,зображення"},{"src":"img/taran-m1.jpg","alt":"тарань, зображення"}],"desc":["У тарані міститься дуже багато білка, який легко засвоюється організмом людини. Також у ній є хром, фтор, нікель, молібден, сірка, хлор. Білок із сушеної риби допомагає регулювати обмін речовин в організмі. Риб\'ячий жир регулює згортання крові, тому що в ньому містяться жирні кислоти, які допомагають знижувати рівень «поганого» холестерину, тому ризик отримати інсульт знижується. Йод сприяє правильній роботі щитовидки. У в\'яленій рибі містяться вітаміни групи В, вітамін А, Е, магній, залізо, фтор, які є важливими для нормальної роботи мозку, серця.","Багато людей вважають за краще вживати сушену рибку як делікатес до пива. Класикою вважається в\'ялена вобла. Але не кожен любитель може відрізнити смачну рибу на вигляд. Смачна і хороша таранка має приємний в\'ялений смак, гарний колір, без плісняви, вона не надто м\'яка, але й не пересушена, без жовтизни. Слід затулити рибкою джерело світла, і тоді можна побачити, як вона засвітиться."]},{"name":"ikra-sudaka","type":"appetizer","imgPreview":"img/ikra-sudaka.JPG","title":"Ікра судака сушена","subtitle":"Продукт рибний солоний, сушений","price":"55₴","metering":"50гр","isInShop":"true","modalImages":[{"src":"img/ikra-sudaka-m.jpg","alt":"Ікра судака,зображення"},{"src":"img/ikra-sudaka-m1.jpg","alt":"Ікра судака, зображення"}],"desc":["Неповторний смак цього делікатесу доповнить будь-яку вечірку. Ідеально підходить для світлих сортів пива. Має зернисту структуру з легким солодкуватим присмаком.","Ікра судака - це джерело білка, йоду, поліненасичених кислот. Ікра судака багата на вітаміни А, D, C, PP, групи В, містить кальцій, калій, цинк, фосфор, йод, залізо та інші корисні речовини. Практично не містить вуглеводів, а багата на білки, поліненасичені жирні кислоти Омега-3, антиоксиданти. Ікра судака засвоюється організмом людини майже повністю. Ікра судака - це справжній делікатес, який часто використовується в кулінарії. Вона солиться, пресується, потім твердне, після чого виходять маленькі брусочки, що вживаються в їжу або додають інші страви. Ікра судака - це дуже поживний продукт, причому як у в\'яленому, так і у свіжому вигляді."]},{"name":"ikrianyk-norvezkyi","type":"appetizer","imgPreview":"img/ikrianyk-norvezkyi.jpg","title":"Ікряник \\"Норвезький\\"","subtitle":"Продукт рибний солоний, сушений","price":"25₴","metering":"50гр","isInShop":"true","modalImages":[{"src":"img/ikrianyk-norvezkyi-m.jpg","alt":"Ікряник Норвезький,зображення"},{"src":"img/ikrianyk-norvezkyi-m1.jpg","alt":"Ікряник Норвезький, зображення"}],"desc":["Ікряники – палички з лосося та морського Азовського Бичка. Надзвичайно смачні та корисні. Чудова закуска до пива. Смачний, корисний, натуральний снек."]},{"name":"kabanosy","type":"appetizer","imgPreview":"img/kabanosy.jpg","title":"Кабаноси","subtitle":"Класичні кабаноси, виготовлені з відбірної свинини","price":"35₴","metering":"50гр","isInShop":"true","modalImages":[{"src":"img/kabanosy-m.jpg","alt":"Кабаноси,зображення"},{"src":"img/kabanosy-m1.jpg","alt":"Кабаноси, зображення"}],"desc":["Класичні кабаноси, виготовлені з відбірної свинини, які мають легкий солонуватий та копчений смак. Довгі та тонкі ковбаски походять з Польщі та з самого початку з’явились як закуска для мисливців, які могли би їсти їх на ходу, де б вони не були. Їх було зручно повісити на шию або руку, що дозволяло швидко підкріпитись."]},{"name":"kalmar-struzhka","type":"appetizer","imgPreview":"img/kalmar-struzhka.jpg","title":"Кальмар стружка","subtitle":"Солено-сушений морепродукт","price":"50₴","metering":"50гр","isInShop":"true","modalImages":[{"src":"img/kalmar-struzhka-m1.jpg","alt":"Кальмар стружка,зображення"},{"src":"img/kalmar-struzhka-m.jpg","alt":"Кальмар стружка, зображення"}],"desc":["Кальмар - закуска, яка має найніжнішим смаком і просто тане на язиці. Вона відрізняється білим кольором з невеликим жовтуватим відтінком і містить величезну кількість білка, вітамінів і корисних мікроелементів. Делікатний смак стружки кальмара і його особливий аромат подобається не тільки дітям, а й багатьом дорослим. За рахунок солоного присмаку і виняткового аромату її вживають як закуску під пиво."]},{"name":"kalmar-struzhka-krab","type":"appetizer","imgPreview":"img/kalmar-struzhka-krab.jpg","title":"Кальмар стружка зі смаком краба","subtitle":"Солено-сушений морепродукт","price":"50₴","metering":"50гр","isInShop":"true","modalImages":[{"src":"img/kalmar-struzhka-krab-m1.jpg","alt":"Кальмар стружка зі смаком краба,зображення"},{"src":"img/kalmar-struzhka-krab-m.jpg","alt":"Кальмар стружка зі смаком краба, зображення"}],"desc":["Крабова стружка – ароматна, ніжна та просто дуже смачна – це вона, стружка кальмара зі смаком краба!\\n\\nСмак кальмара чудово гармонує з тонкими нотками краба, і це поєднання народжує приємний, солодкувато-солоний смак. Закуска, яка буквально тане у роті. Неможливо відірватися! Натурально та смачно. Без добавок."]},{"name":"kilce-kalmara","type":"appetizer","imgPreview":"img/kilce-kalmara.jpg","title":"Кільце кальмара","subtitle":"Солено-сушений морепродукт","price":"50₴","metering":"50гр","isInShop":"true","modalImages":[{"src":"img/kilce-kalmara-m.jpg","alt":"Кільце кальмара,зображення"},{"src":"img/kilce-kalmara-m1.jpg","alt":"Кільце кальмара, зображення"}],"desc":["Кільця кальмара – це кільця, що зберегли природну ніжну текстуру кальмара, із золотавим кольором та копченим ароматом.","У своєму складі Кільця кальмару містять вітаміни:  С ,  Е ,  групи В ,  РР  та мінеральні речовини:  кальцій ,  магній ,  мідь ,  залізо ,  йод ,  молібден ,  кобальт ,  нікель ,  фосфор  і  натрій , багато білка. Крім цього в кальмарі копченим міститься найважливіша амінокислота таурин, яка сприятливо на серцево-судинну систему, бере участь в обмінних процесах у тканинах очей (calorizator). Продукт сприяє швидкому насиченню та легко засвоюється людським організмом."]},{"name":"koriushka","type":"appetizer","imgPreview":"img/koriushka.jpg","title":"Корюшка","subtitle":"Солено-сушений морепродукт","price":"44₴","metering":"50гр","isInShop":"true","modalImages":[{"src":"img/koriushka-m.jpg","alt":"Корюшка,зображення"},{"src":"img/koriushka-m1.jpg","alt":"Корюшка, зображення"}],"desc":["Корюшка - рід сімейства Корюшкові, що входить в загін Лососеподібні. Насичений рибний смак, що досягається шляхом ретельного просушування, однозначно здивує та порадує будь-якого цінителя. До позитивних якостей балтійської корюшки також відноситься практично повна відсутність дрібних кісточок. За рахунок цього очищення не займе занадто багато часу і насолоджуватися насиченим смаком риби можна буде вже практично відразу."]},{"name":"kranch","type":"appetizer","imgPreview":"img/kranch.jpg","title":"Кранч мікс смаків","subtitle":"Арахіс в оболонці зі смаком васабі, бекону, сиру","price":"12₴","metering":"50гр","isInShop":"true","modalImages":[{"src":"img/kranch-m.jpg","alt":"Кранч,зображення"}],"desc":["Кранч мікс – це арахіс в оболонці зі смаком васабі, бекону, сиру. Кранч припаде до смаку любителям горіхів. Завдяки новим способам нанесення різних смаків, арахіс поступово посідає почесне місце серед улюблених ласощів.","Ідеальна закуска для літніх вечорів, в подорожах, та за будь-якої нагоди.","Що до стереотипу, що кранч, це виключно снек до пива, давно минулому. І ще трішки статистики у 2016р., КРАНЧ здобув - \\"Золоту медаль\\" на дегустаційному конкурсі \\"WorldFood Ukraine\\"."]},{"name":"kukurudza","type":"appetizer","imgPreview":"img/kukurudza.jpg","title":"Кукурудза","subtitle":"Зі смаками: мед і гірчиця, барбек\'ю, сир","price":"13₴","metering":"50гр","isInShop":"true","modalImages":[{"src":"img/kukurudza-m.jpg","alt":"Кукурудза,зображення"},{"src":"img/kukurudza-m1.jpg","alt":"Кукурудза,зображення"}],"desc":["Хрустка солона закуска, виготовлена з обсмажених зерен кукурудзи.","Ароматні зерна кукурудзи ідеально поєднуються з різними сортами світлого та темного пива. Така закуска чудово замінить звичний попкорн під час перегляду фільму. Кукурудза відмінно урізноманітнить смакові уподобання."]},{"name":"pautynka-kalmara","type":"appetizer","imgPreview":"img/pautynka-kalmara.jpg","title":"Павутинка кальмара","subtitle":"Солено-сушений морепродукт","price":"55₴","metering":"50гр","isInShop":"true","modalImages":[{"src":"img/pautynka-kalmara-m.jpg","alt":"Павутинка кальмара,зображення"},{"src":"img/pautynka-kalmara-m1.jpg","alt":"Павутинка кальмара,зображення"}],"desc":["Кальмар павутинка - ніжний, ситний і смачний снек, який може виступати як в якості закуски, так і самостійним продуктом для перекусу на ходу. Закуска виготовлена з цільної сушеної тушки кальмара, розділеної на тонкі смужки, що створюють ефект павутини. Цей снек успішно доповнить своїм смаком більшість популярних сортів пива."]},{"name":"kalmar-peruanskyi","type":"appetizer","imgPreview":"img/kalmar-peruanskyi.jpg","title":"Пласт кальмара перуанський","subtitle":"Солено-сушений морепродукт","price":"55₴","metering":"50гр","isInShop":"true","modalImages":[{"src":"img/kalmar-peruanskyi-m.jpg","alt":"Пласт кальмара перуанський,зображення"},{"src":"img/kalmar-peruanskyi-m1.jpg","alt":"Пласт кальмара перуанський,зображення"}],"desc":["М\'ясо кальмара волокнисте і насичене білками. Смажиться на арахісовій олії, що надає йому особливого солодкуватого смаку з копченим ароматом. Ідеально доповнить класичні сорти пива і сорти з високим рівнем гіркоти."]},{"name":"plitka","type":"appetizer","imgPreview":"img/plitka.jpg","title":"Плітка вʼялена","subtitle":"Риба вʼялена прісноводна","price":"24₴","metering":"50гр","isInShop":"true","modalImages":[{"src":"img/plitka-m.jpg","alt":"Плітка вʼялена,зображення"},{"src":"img/plitka-m1.jpg","alt":"Плітка вʼялена,зображення"}],"desc":["ПЛІТКА один із найсмачніших річкових представників закуски до пива. М\'ясо плотви жирне, соковите та дуже смачне. Часто трапляється із ікрою. Добре підходить до пива із класичним смаком."]},{"name":"syr-solomka","type":"appetizer","imgPreview":"img/syr-solomka.jpg","title":"Сир соломка копчена","subtitle":"Сир сичужний м\'який сулугуні \\"Соломка\\"","price":"20₴","metering":"50гр","isInShop":"true","modalImages":[{"src":"img/syr-solomka-m.jpg","alt":"Сир соломка копчена,зображення"},{"src":"img/syr-solomka-m1.jpg","alt":"Сир соломка копчена,зображення"}],"desc":["Сир соломка копчена - це смачний і ароматний сир, який має неперевершений смак і текстуру. Зроблена за традиціним рецепотом сирів сулугуні","Сулугуні називають грузинські сири, у яких яскраво виражений кисломолочний, трохи солонуватий смак і аромат. Його консистенція повинна бути еластичною і щільною."]},{"name":"smuga-lososia","type":"appetizer","imgPreview":"img/smuga-lososia.jpg","title":"Смуга лосося ікряна","subtitle":"Палички з лосося сушено-підкопчені","price":"30₴","metering":"50гр","isInShop":"true","modalImages":[{"src":"img/smuga-lososia-m.jpg","alt":"Смуга лосося ікряна,зображення"},{"src":"img/smuga-lososia-m1.jpg","alt":"Смуга лосося ікряна,зображення"}],"desc":["Рибна паличка з лосося на даний момент є одним з найпопулярніших снеків в нашій країні, користуючись попитом багатьох споживачів в якості закуски до пива. Продукту не потрібні спеціальні умови для зберігання. Снек виробляється з якісної сировини на високотехнологічному обладнанні. Через насичений і оригінальний смак даний снек є прекрасною закускою до пива."]},{"name":"tunec","type":"appetizer","imgPreview":"img/tunec.jpg","title":"Тунець","subtitle":"Рибна закуска, засолена, сушена","price":"35₴","metering":"50гр","isInShop":"true","modalImages":[{"src":"img/tunec-m.jpg","alt":"Тунець,зображення"},{"src":"img/tunec-m1.jpg","alt":"Тунець,зображення"}],"desc":["Стружка тунця — це рибна закуска, засолена, оброблена, що надає їй особливий колорит, популярну в усіх шанувальників сушених снеків до пива. Тунець дуже корисний, для багатьох функцій організму людини, оскільки багатий на вітаміни С, D і групи B, містить багато мікро- та макроелементів і нежирні кислоти, корисні нашому організму, яких так бракує щодня в нашому раціоні."]},{"name":"fistashka","type":"appetizer","imgPreview":"img/fistashka.jpg","title":"Фісташка","subtitle":"Фісташка “Каліфорнія” смажена з сіллю","price":"40₴","metering":"50гр","isInShop":"true","modalImages":[{"src":"img/fistashka-m.jpg","alt":"Фісташка,зображення"},{"src":"img/fistashka-m1.jpg","alt":"Фісташка,зображення"}],"desc":["Фісташки служать відмінним джерелом міді, марганцю та вітаміну В6, а також білків, дієтичної клітковини, тіаміну та фосфору.","Фісташки містять до 90% \\"хороших\\" жирів, які знижують рівень холестерину в крові та ризик серцевих захворювань. Вчені з Державного університету Пенсільванії з\'ясували, що вживання двох жменьок фісташок на день допомагає знизити рівень холестерину на 9-12%."]},{"name":"hamon","type":"appetizer","imgPreview":"img/hamon.jpg","title":"Хамон по-Козацьки","subtitle":"Слайси свинячі солено-сушені","price":"55₴","metering":"50гр","isInShop":"true","modalImages":[{"src":"img/hamon-m.jpg","alt":"Хамон по-Козацьки,зображення"}],"desc":["Хамон - це сиров\'ялена свиняча задня нога, яка характеризується щільним мармуровим м\'ясом, приємним ароматом та насиченим смаком. Для створення продукції вирощують в Іспанії спеціальні породи свиней та виготовують їх за продуманим раціоном."]},{"name":"chehon","type":"appetizer","imgPreview":"img/chehon.jpg","title":"Чехонь в\'ялена","subtitle":"Риба вʼялена прісноводна","price":"35₴","metering":"50гр","isInShop":"true","modalImages":[{"src":"img/chehon-m.jpg","alt":"Хамон по-Козацьки,зображення"}],"desc":["Хамон - це сиров\'ялена свиняча задня нога, яка характеризується щільним мармуровим м\'ясом, приємним ароматом та насиченим смаком. Для створення продукції вирощують в Іспанії спеціальні породи свиней та виготовують їх за продуманим раціоном."]},{"name":"dizhonski","type":"appetizer","imgPreview":"img/dizhonski.jpg","title":"Чипси курячі \\"По-Діжонськи\\"","subtitle":"Чипси з мʼяса курки \\"по-Діжонськи\\"","price":"45₴","metering":"50гр","isInShop":"true","modalImages":[{"src":"img/dizhonski-m.jpg","alt":"Чипси курячі по-Діжонськи,зображення"},{"src":"img/dizhonski-m1.jpg","alt":"Чипси курячі по-Діжонськи,зображення"}],"desc":["Курячі чипси з додаванням Діжонської гірчиці – це смачна натуральна закуска до пива, виготовлена з куриного філе з додаванням натуральних спецій.","М’ясні джерки, виготовлені особливим способом, мають міцну текстуру, відмінний смак і бездоганний аромат. Завдяки добавленню паприки м’ясо стає більш пікантним."]},{"name":"miaso-chipsy","type":"appetizer","imgPreview":"img/miaso-chipsy.jpg","title":"Чипси курячі з часником","subtitle":"М\'ясні чипси","price":"45₴","metering":"50гр","isInShop":"true","modalImages":[{"src":"img/miaso-chipsy-m.jpg","alt":"Чипси курячі з часником,зображення"},{"src":"img/miaso-chipsy-m1.jpg","alt":"Чипси курячі з часником,зображення"}],"desc":["Чіпси курки з часником - це смачна популярна м\'ясна закуска до пива. Чіпси являють собою тонко нарізані пластини сиров\'яленого курячого м\'яса."]},{"name":"yantarna","type":"appetizer","imgPreview":"img/yantarna.jpg","title":"Рибка янтарна з перцем","subtitle":"Янтарна рибка з перцем, шматочки","price":"44₴","metering":"50гр","isInShop":"true","modalImages":[{"src":"img/yantarna-m.jpg","alt":"Рибка янтарна з перцем,зображення"},{"src":"img/yantarna-m1.jpg","alt":"Рибка янтарна з перцем,зображення"}],"desc":["Янтарна рибка з перцем - сама популярна закуска до пива! В міру солі, солодощі та гостроти. Тоненька шкірка, багато основного продукту, досить м\'ясиста, в міру суха. Те, що потрібно до пінному! Зазвичай для виробництва цього снека використовують філе путасу або минтая. При виготовленні такої закуски готове філе формують, нарізки соломкою або шматочки однакового розміру і форми."]},{"name":"liasch","type":"appetizer","imgPreview":"img/liasch.jpg","title":"Лящ в\'ялений","subtitle":"Риба в\'ялена річкова","price":"17₴","metering":"50гр","isInShop":"true","modalImages":[{"src":"img/liasch-m.jpg","alt":"Лящ в`ялений,зображення"},{"src":"img/liasch-m1.jpg","alt":"Лящ в`ялений,зображення"}],"desc":["Лящ в\'ялений є дуже корисним продуктом. Має багатий вітамінний склад:  B1 ,  B2 ,  E ,  PP . Що ж до мінеральних речовин, у лящі присутні багато  заліза ,  кальцію . Високий вміст  молібдену ,  нікелю ,  фосфору ,  фтору ,  хлору ,  хрому  та  цинку."]},{"name":"bocal-glass","type":"souvenirs","imgPreview":"img/bocal.jpg","title":"Келихи для пива","subtitle":"Гарний подарунок для поціновувачів вишуканого посуду.","price":"150₴","metering":"1шт","isInShop":"true","modalImages":[{"src":"img/bocal-m.jpg","alt":"бокал,зображення"},{"src":"img/bocal-m1.jpg","alt":"бокал,зображення"}],"desc":["Келихи для пива для поціновувачів пінного."]}]');

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
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
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
/* harmony import */ var _scss_style_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./scss/style.scss */ "./src/scss/style.scss");
/* harmony import */ var _index_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.html */ "./src/index.html");
/* harmony import */ var _js_sort__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./js/sort */ "./src/js/sort.js");
/* harmony import */ var _js_sort__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_js_sort__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _js_scrollToTop__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./js/scrollToTop */ "./src/js/scrollToTop.js");
/* harmony import */ var _js_generateProductsTemplate__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./js/generateProductsTemplate */ "./src/js/generateProductsTemplate.js");
/* harmony import */ var _js_modal__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./js/modal */ "./src/js/modal.js");
/* harmony import */ var _js_tabs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./js/tabs */ "./src/js/tabs.js");
/* harmony import */ var _js_tabs__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_js_tabs__WEBPACK_IMPORTED_MODULE_6__);
const body = document.body;
body.style.display = 'block';







})();

/******/ })()
;
//# sourceMappingURL=index.js.map