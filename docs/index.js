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
  return `
         <div class="main__col">
              <div data-name=${prod.name} class="card">
                <a class="card__img" href="#">
                  <img class="js-img" src=${prod.imgPreview} alt=${prod.title}>
                </a>
                <div class="card__info">
                  <div class="card__main-info">
                    <div class="card__name">
                      <a class="card__title" href="#">${prod.title}</a>
                      <p class="card__beertype">${prod.title}</p>
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
                        <span>за 1кг</span>
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
                       <span>${productInfo.price}₴</span>
                       <span>за 1кг</span>
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
/***/ (() => {

const arrow = document.querySelector('#to-top');
const header = document.querySelector('.header');
const headerHeight = header.clientHeight;
let scrollOffset = document.documentElement.scrollTop;
checkScroll(scrollOffset);
window.addEventListener('scroll', e => {
  scrollOffset = document.documentElement.scrollTop;
  checkScroll(scrollOffset);
});
function checkScroll(scrollOffset) {
  if (scrollOffset >= headerHeight) {
    arrow.classList.remove("hidden");
  }
  if (scrollOffset < headerHeight) {
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
var ___CSS_LOADER_URL_IMPORT_4___ = new URL(/* asset import */ __webpack_require__(/*! ../img/cidre-logo-m.jpg */ "./src/img/cidre-logo-m.jpg"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_5___ = new URL(/* asset import */ __webpack_require__(/*! ../img/cidre-manho-persyk.jpg */ "./src/img/cidre-manho-persyk.jpg"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_6___ = new URL(/* asset import */ __webpack_require__(/*! ../img/cidr-cactus.jpg */ "./src/img/cidr-cactus.jpg"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_7___ = new URL(/* asset import */ __webpack_require__(/*! ../img/cidre-medusa.jpg */ "./src/img/cidre-medusa.jpg"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_8___ = new URL(/* asset import */ __webpack_require__(/*! ../img/bocal.jpg */ "./src/img/bocal.jpg"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_9___ = new URL(/* asset import */ __webpack_require__(/*! ../img/chips.jpg */ "./src/img/chips.jpg"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_10___ = new URL(/* asset import */ __webpack_require__(/*! ../img/chips-m.jpg */ "./src/img/chips-m.jpg"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_11___ = new URL(/* asset import */ __webpack_require__(/*! ../img/limonad.jpg */ "./src/img/limonad.jpg"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_12___ = new URL(/* asset import */ __webpack_require__(/*! ../img/cidre-logo.png */ "./src/img/cidre-logo.png"), __webpack_require__.b);
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
// Module
___CSS_LOADER_EXPORT___.push([module.id, `@charset "UTF-8";
.bg-radial, .cat-card {
  border-radius: 16px;
  -webkit-backdrop-filter: blur(15px) saturate(86%);
          backdrop-filter: blur(15px) saturate(86%);
  background: radial-gradient(circle at 100% 0, hsla(0, 0%, 100%, 0.6) 0, hsla(0, 0%, 96.1%, 0.13) 183%);
}

.flex-items-center, .footer__item, .header__time, .header__item {
  display: flex;
  align-items: center;
}

.text-nowrap, .header__item:first-child span {
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

/* http://meyerweb.com/eric/tools/css/reset/
   v2.0 | 20110126
   License: none (public domain)
*/
html, body, div, span, applet, object, iframe,
h1, h2, h3, h4, h5, h6, p, blockquote, pre,
a, abbr, acronym, address, big, cite, code,
del, dfn, em, img, ins, kbd, q, s, samp,
small, strike, strong, sub, sup, tt, var,
b, u, i, center,
dl, dt, dd, ol, ul, li,
fieldset, form, label, legend,
table, caption, tbody, tfoot, thead, tr, th, td,
article, aside, canvas, details, embed,
figure, figcaption, footer, header, hgroup,
menu, nav, output, ruby, section, summary,
time, mark, audio, video {
  margin: 0;
  padding: 0;
  border: 0;
  outline: none;
  font-size: 100%;
  font: inherit;
  vertical-align: baseline;
}

/* HTML5 display-role reset for older browsers */
article, aside, details, figcaption, figure,
footer, header, hgroup, menu, nav, section {
  display: block;
}

*, *::before, *::after {
  box-sizing: border-box;
}

a {
  color: inherit;
  text-decoration: none;
  cursor: pointer;
  display: inline-block;
}

img {
  max-width: 100%;
  height: auto;
}

ol, ul {
  list-style: none;
}

blockquote, q {
  quotes: none;
}

blockquote:before, blockquote:after,
q:before, q:after {
  content: "";
}

input, textarea, button {
  outline: none;
  border: none;
}

textarea {
  resize: vertical;
}

button {
  cursor: pointer;
}

table {
  border-collapse: collapse;
  border-spacing: 0;
}

.container {
  padding: 0 15px;
  max-width: 1470px;
  margin: 0 auto;
}
.container--header {
  max-width: 1430px;
  padding: 0 15px;
  margin: 0 auto;
}

.container-fluid {
  width: 100%;
  padding: 0 15px;
}

.row {
  display: flex;
  flex-wrap: wrap;
  margin-right: -15px;
  margin-left: -15px;
}

.no-gutters {
  margin-right: 0;
  margin-left: 0;
}

.no-gutters > .col,
.no-gutters > [class*=col-] {
  padding-right: 0;
  padding-left: 0;
}

.col-1, .col-2, .col-3, .col-4, .col-5, .col-6, .col-7, .col-8, .col-9, .col-10, .col-11, .col-12, .col,
.col-auto, .col-sm-1, .col-sm-2, .col-sm-3, .col-sm-4, .col-sm-5, .col-sm-6, .col-sm-7, .col-sm-8, .col-sm-9, .col-sm-10, .col-sm-11, .col-sm-12, .col-sm,
.col-sm-auto, .col-md-1, .col-md-2, .col-md-3, .col-md-4, .col-md-5, .col-md-6, .col-md-7, .col-md-8, .col-md-9, .col-md-10, .col-md-11, .col-md-12, .col-md,
.col-md-auto, .col-lg-1, .col-lg-2, .col-lg-3, .col-lg-4, .col-lg-5, .col-lg-6, .col-lg-7, .col-lg-8, .col-lg-9, .col-lg-10, .col-lg-11, .col-lg-12, .col-lg,
.col-lg-auto, .col-xs-1, .col-xs-2, .col-xs-3, .col-xs-4, .col-xs-5, .col-xs-6, .col-xs-7, .col-xs-8, .col-xs-9, .col-xs-10, .col-xs-11, .col-xs-12, .col-xs,
.col-xs-auto {
  width: 100%;
  max-width: 100%;
  min-height: 1px;
  flex-shrink: 0;
  padding-right: 15px;
  padding-left: 15px;
}

.col {
  flex-basis: 0;
  flex-grow: 1;
  max-width: 100%;
}

.col-auto {
  flex: 0 0 auto;
  width: auto;
  max-width: none;
}

.col-1 {
  flex: 0 0 8.333333%;
  max-width: 8.333333%;
}

.col-2 {
  flex: 0 0 16.666667%;
  max-width: 16.666667%;
}

.col-3 {
  flex: 0 0 25%;
  max-width: 25%;
}

.col-4 {
  flex: 0 0 33.333333%;
  max-width: 33.333333%;
}

.col-5 {
  flex: 0 0 41.666667%;
  max-width: 41.666667%;
}

.col-6 {
  flex: 0 0 50%;
  max-width: 50%;
}

.col-7 {
  flex: 0 0 58.333333%;
  max-width: 58.333333%;
}

.col-8 {
  flex: 0 0 66.666667%;
  max-width: 66.666667%;
}

.col-9 {
  flex: 0 0 75%;
  max-width: 75%;
}

.col-10 {
  flex: 0 0 83.333333%;
  max-width: 83.333333%;
}

.col-11 {
  flex: 0 0 91.666667%;
  max-width: 91.666667%;
}

.col-12 {
  flex: 0 0 100%;
  max-width: 100%;
}

.order-first {
  order: -1;
}

.order-last {
  order: 13;
}

.order-0 {
  order: 0;
}

.order-1 {
  order: 1;
}

.order-2 {
  order: 2;
}

.order-3 {
  order: 3;
}

.order-4 {
  order: 4;
}

.order-5 {
  order: 5;
}

.order-6 {
  order: 6;
}

.order-7 {
  order: 7;
}

.order-8 {
  order: 8;
}

.order-9 {
  order: 9;
}

.order-10 {
  order: 10;
}

.order-11 {
  order: 11;
}

.order-12 {
  order: 12;
}

.offset-1 {
  margin-left: 8.33333%;
}

.offset-2 {
  margin-left: 16.66667%;
}

.offset-3 {
  margin-left: 25%;
}

.offset-4 {
  margin-left: 33.33333%;
}

.offset-5 {
  margin-left: 41.66667%;
}

.offset-6 {
  margin-left: 50%;
}

.offset-7 {
  margin-left: 58.33333%;
}

.offset-8 {
  margin-left: 66.66667%;
}

.offset-9 {
  margin-left: 75%;
}

.offset-10 {
  margin-left: 83.33333%;
}

.offset-11 {
  margin-left: 91.66667%;
}

.m-0 {
  margin: 0 !important;
}

.mt-0,
.my-0 {
  margin-top: 0 !important;
}

.mr-0,
.mx-0 {
  margin-right: 0 !important;
}

.mb-0,
.my-0 {
  margin-bottom: 0 !important;
}

.ml-0,
.mx-0 {
  margin-left: 0 !important;
}

.m-1 {
  margin: 0.25rem !important;
}

.mt-1,
.my-1 {
  margin-top: 0.25rem !important;
}

.mr-1,
.mx-1 {
  margin-right: 0.25rem !important;
}

.mb-1,
.my-1 {
  margin-bottom: 0.25rem !important;
}

.ml-1,
.mx-1 {
  margin-left: 0.25rem !important;
}

.m-2 {
  margin: 0.5rem !important;
}

.mt-2,
.my-2 {
  margin-top: 0.5rem !important;
}

.mr-2,
.mx-2 {
  margin-right: 0.5rem !important;
}

.mb-2,
.my-2 {
  margin-bottom: 0.5rem !important;
}

.ml-2,
.mx-2 {
  margin-left: 0.5rem !important;
}

.m-3 {
  margin: 1rem !important;
}

.mt-3,
.my-3 {
  margin-top: 1rem !important;
}

.mr-3,
.mx-3 {
  margin-right: 1rem !important;
}

.mb-3,
.my-3 {
  margin-bottom: 1rem !important;
}

.ml-3,
.mx-3 {
  margin-left: 1rem !important;
}

.m-4 {
  margin: 1.5rem !important;
}

.mt-4,
.my-4 {
  margin-top: 1.5rem !important;
}

.mr-4,
.mx-4 {
  margin-right: 1.5rem !important;
}

.mb-4,
.my-4 {
  margin-bottom: 1.5rem !important;
}

.ml-4,
.mx-4 {
  margin-left: 1.5rem !important;
}

.m-5 {
  margin: 3rem !important;
}

.mt-5,
.my-5 {
  margin-top: 3rem !important;
}

.mr-5,
.mx-5 {
  margin-right: 3rem !important;
}

.mb-5,
.my-5 {
  margin-bottom: 3rem !important;
}

.ml-5,
.mx-5 {
  margin-left: 3rem !important;
}

.mt-auto {
  margin-top: auto;
}

.mb-auto {
  margin-bottom: auto;
}

.ml-auto {
  margin-left: auto;
}

.mr-auto {
  margin-right: auto;
}

.mx-auto {
  margin-left: auto;
  margin-right: auto;
}

.my-auto {
  margin-top: auto;
  margin-bottom: auto;
}
.p-0 {
  padding: 0 !important;
}

.pt-0,
.py-0 {
  padding-top: 0 !important;
}

.pr-0,
.px-0 {
  padding-right: 0 !important;
}

.pb-0,
.py-0 {
  padding-bottom: 0 !important;
}

.pl-0,
.px-0 {
  padding-left: 0 !important;
}

.p-1 {
  padding: 0.25rem !important;
}

.pt-1,
.py-1 {
  padding-top: 0.25rem !important;
}

.pr-1,
.px-1 {
  padding-right: 0.25rem !important;
}

.pb-1,
.py-1 {
  padding-bottom: 0.25rem !important;
}

.pl-1,
.px-1 {
  padding-left: 0.25rem !important;
}

.p-2 {
  padding: 0.5rem !important;
}

.pt-2,
.py-2 {
  padding-top: 0.5rem !important;
}

.pr-2,
.px-2 {
  padding-right: 0.5rem !important;
}

.pb-2,
.py-2 {
  padding-bottom: 0.5rem !important;
}

.pl-2,
.px-2 {
  padding-left: 0.5rem !important;
}

.p-3 {
  padding: 1rem !important;
}

.pt-3,
.py-3 {
  padding-top: 1rem !important;
}

.pr-3,
.px-3 {
  padding-right: 1rem !important;
}

.pb-3,
.py-3 {
  padding-bottom: 1rem !important;
}

.pl-3,
.px-3 {
  padding-left: 1rem !important;
}

.p-4 {
  padding: 1.5rem !important;
}

.pt-4,
.py-4 {
  padding-top: 1.5rem !important;
}

.pr-4,
.px-4 {
  padding-right: 1.5rem !important;
}

.pb-4,
.py-4 {
  padding-bottom: 1.5rem !important;
}

.pl-4,
.px-4 {
  padding-left: 1.5rem !important;
}

.p-5 {
  padding: 3rem !important;
}

.pt-5,
.py-5 {
  padding-top: 3rem !important;
}

.pr-5,
.px-5 {
  padding-right: 3rem !important;
}

.pb-5,
.py-5 {
  padding-bottom: 3rem !important;
}

.pl-5,
.px-5 {
  padding-left: 3rem !important;
}
html {
  font-size: 62.5%;
}

body {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  min-height: 100vh;
  font-family: "Open Sans", sans-serif;
  color: #212121;
  font-weight: 400;
  font-size: 1.6rem;
  line-height: 1.2;
  background-color: #efefef;
}
body.no-scroll {
  overflow-y: hidden;
}

main {
  padding: 40px 0;
}

footer {
  margin-top: auto;
}

.hidden-title {
  visibility: hidden;
  height: 0;
}

.d-none {
  display: none !important;
}

.burger {
  display: none;
  width: 3rem;
  height: 2rem;
  padding: 0;
  font-size: 0;
  color: transparent;
  position: absolute;
  top: 50%;
  left: 1.5rem;
  transform: translateY(-50%);
  background: none;
  border: none;
}
.burger::before, .burger::after, .burger span {
  display: block;
  width: 100%;
  height: 2px;
  background-color: #212121;
  position: absolute;
  left: 0;
}
.burger::before, .burger::after {
  content: "";
  transition: transform 0.2s linear;
}
.burger::before {
  top: 0;
}
.burger::after {
  bottom: 0;
}
.burger span {
  top: 50%;
  transform: translateY(-50%);
  transition: opacity 0.2s linear;
}
.show-sidebar .burger span {
  opacity: 0;
}
.show-sidebar .burger::before, .show-sidebar .burger::after {
  top: 50%;
}
.show-sidebar .burger::before {
  transform: rotate(45deg);
}
.show-sidebar .burger::after {
  transform: rotate(-45deg);
}

.js-tab-content {
  display: none;
}
.js-tab-content.active {
  display: block;
  animation: 0.5s linear appear;
}
@keyframes appear {
  from {
    transform: scale3d(0.95, 0.95, 1);
    opacity: 0.5;
  }
  to {
    transform: scale3d(1, 1, 1);
    opacity: 1;
  }
}

.logo {
  max-width: 130px;
}
.logo img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.to-top {
  cursor: pointer;
  width: 30px;
  height: 30px;
  fill: #F9A825;
  position: fixed;
  right: 20px;
  bottom: 100px;
  opacity: 1;
  visibility: visible;
  transition: opacity 0.2s linear;
}
.to-top.hidden {
  opacity: 0;
  visibility: hidden;
}

.section {
  padding: 40px 0;
}
.section--nopading {
  padding: 0;
}
.section__title {
  text-align: center;
  font-family: "Montserrat", sans-serif;
  font-weight: 500;
  font-size: 46px;
  margin-bottom: 14px;
  text-shadow: -2px 2px 2px rgba(206, 89, 55, 0.4);
}

.card {
  overflow: hidden;
  box-shadow: -4px 4px 2px rgba(216, 216, 216, 0.75);
  position: relative;
  display: block;
  border-radius: 8px;
  width: 100%;
  max-width: 460px;
  margin: 0 auto;
  background-color: #fff;
}
.card__img {
  height: 300px;
  width: 100%;
  overflow: hidden;
}
.card__img img {
  width: 100%;
  height: 100%;
  object-fit: contain;
  transition: transform 3s ease-in;
}
.card__img:hover img {
  transform: scale(1.2);
}
.card__info {
  padding: 12px 12px 16px 12px;
}
.card__main-info {
  font-size: 20px;
  font-weight: 500;
}
.card__beertype, .modal__beertype {
  color: #8bc34a;
  margin: 4px 0;
  min-height: 48px;
}
.card__title {
  font-size: 24px;
  font-weight: 600;
  font-family: "Montserrat", sans-serif;
  min-height: 58px;
}
.card__title:hover {
  text-decoration: underline;
}
.card__testimonial, .modal__testimonial {
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 15px;
  margin: 6px -10px;
  padding: 12px 0;
  border-top: 1px dashed #90a4ae;
  border-bottom: 1px dashed #90a4ae;
}
.card__test-item, .modal__test-item {
  width: 33.3333%;
  padding: 0 10px;
}
.card__test-value, .modal__test-value {
  font-size: 20px;
  font-weight: 600;
  margin-top: 12px;
  margin-bottom: 4px;
}
.card__test-progress, .modal__test-progress {
  position: relative;
  height: 8px;
  background-color: #bbb;
}
.card__test-progress-value, .modal__test-progress-value {
  position: absolute;
  left: 0;
  top: 0;
  bottom: 0;
  height: 100%;
  background-color: #F9A825;
}
.card__price, .modal__price {
  font-size: 34px;
  line-height: 1;
  font-weight: 600;
  margin-top: 12px;
}
.card__price span, .modal__price span {
  display: block;
}
.card__price span:last-child, .modal__price span:last-child {
  font-size: 20px;
  color: #90a4ae;
}
.card__price-wrapper, .modal__price-wrapper {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.card__cart, .modal__cart {
  display: none;
  cursor: pointer;
  height: 48px;
  width: 48px;
  transition: fill 0.2s linear;
}
.card__cart:hover, .modal__cart:hover {
  fill: #71a436;
}
.card__bottom {
  padding-top: 12px;
  text-align: right;
}
.card__details {
  font-size: 22px;
  font-weight: 600;
  text-decoration: underline;
  color: #8bc34a;
}
.card__details:hover {
  text-decoration: none;
}

.filter {
  display: none;
  justify-content: space-between;
  align-items: center;
  font-size: 20px;
  padding: 18px;
  border: 1px solid #d7d7d7;
  background-color: #ffffff;
  margin-bottom: 20px;
  border-radius: 8px;
}
.filter__sort {
  width: 35%;
  display: flex;
  align-items: center;
  padding-right: 18px;
  overflow: hidden;
}
.filter__sort-by {
  display: flex;
  align-items: center;
  -webkit-user-select: none;
     -moz-user-select: none;
          user-select: none;
}
.filter__sort-direction {
  cursor: pointer;
  margin-right: 8px;
}
.filter__sort-direction svg {
  padding-top: 4px;
  width: 22px;
  height: 22px;
  cursor: pointer;
  fill: #222;
  transition: fill 0.2s linear;
}
.filter__sort-direction svg:hover {
  fill: #8bc34a;
}
.filter__sort-direction.down svg:last-child {
  display: none;
}
.filter__sort-direction.up svg:first-child {
  display: none;
}
.filter__input {
  width: 30%;
  display: flex;
  align-items: center;
  border-left: 1px solid #90a4ae;
  border-right: 1px solid #90a4ae;
  background-color: transparent;
  padding: 0 22px;
  font-family: "Roboto", sans-serif;
  color: #707070;
  font-size: 15px;
}
.filter__input input {
  width: 100%;
  font-size: 20px;
  padding-bottom: 4px;
  margin-left: 12px;
  border-bottom: 2px dashed #90a4ae;
}
.filter__input input:focus {
  border-color: #8bc34a;
}
.filter__input svg {
  width: 20px;
  height: 20px;
  cursor: pointer;
  fill: #222;
}
.filter__filter {
  display: flex;
  align-items: center;
  padding-left: 12px;
  width: 35%;
  -webkit-user-select: none;
     -moz-user-select: none;
          user-select: none;
  overflow: hidden;
}
.filter__select {
  padding: 4px 8px;
  border: 2px solid #444;
  border-radius: 8px;
  font-size: 16px;
  font-family: inherit;
  margin-left: 8px;
}
.filter__select:focus {
  border-color: #8bc34a;
}
.filter__select.focus-visible {
  border-color: #8bc34a;
  outline: none;
}
.filter__select:focus-visible {
  border-color: #8bc34a;
  outline: none;
}

.modal {
  position: relative;
  display: flex;
  background-color: #fff;
  width: 90%;
  max-width: 1500px;
  max-height: 80vh;
  min-height: 60vh;
  margin: 0 auto;
  border-radius: 12px;
  overflow: hidden;
}
.modal__close {
  z-index: 111;
  cursor: pointer;
  width: 30px;
  height: 30px;
  position: absolute;
  top: 10px;
  right: 10px;
  fill: #90a4ae;
  transition: fill 0.2s linear;
}
.modal__close:hover {
  fill: #F9A825;
}
.modal__angle {
  cursor: pointer;
  position: absolute;
  top: 50%;
  transform: translateY(-50);
  background-color: #bbb;
  padding: 6px 4px;
  fill: rgba(255, 255, 255, 0.7);
  width: 28px;
  transition: fill 0.2s linear, background-color 0.2s linear;
}
.modal__angle--left {
  left: 8px;
  border-radius: 10px 0 0 10px;
}
.modal__angle--right {
  right: 8px;
  border-radius: 0 10px 10px 0;
}
.modal__angle:hover {
  background-color: #999;
  fill: #fff;
}
.modal__left {
  position: relative;
  width: 540px;
  min-height: 100%;
  overflow: hidden;
}
.modal__left .siema {
  height: 100%;
}
.modal__left .siema div {
  height: 100%;
}
.modal__img {
  width: 100%;
  height: 100%;
}
.modal__img img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center center;
}
.modal__right {
  width: calc(100% - 540px);
  padding: 20px;
  max-height: 100%;
  overflow-y: auto;
  scrollbar-width: thin;
  scrollbar-color: #ccc #71a436;
  /* Работает в Chrome, Edge и Safari */
}
.modal__right::-webkit-scrollbar {
  width: 8px;
}
.modal__right::-webkit-scrollbar-track {
  background: #ccc;
  padding: 4px 0;
}
.modal__right::-webkit-scrollbar-thumb {
  background-color: #71a436;
  border-radius: 28px;
}
.modal__title {
  font-size: 36px;
  font-family: "Montserrat", sans-serif;
  font-weight: 600;
  padding-right: 16px;
}
.modal__beertype {
  font-size: 20px;
  min-height: 1px;
}
.modal__price-wrapper {
  margin: 10px 0;
}
.modal__price-wrapper .btn {
  display: none;
}
.modal__testimonial {
  margin-bottom: 12px;
}
.modal__test-title {
  font-size: 20px;
}
.modal__test-value {
  font-size: 22px;
}
.modal__description h1, .modal__description h2, .modal__description h3, .modal__description h4, .modal__description h5, .modal__description h6, .modal__description p, .modal__description pre, .modal__description div, .modal__description table, .modal__description iframe, .modal__description blockquote, .modal__description dl, .modal__description ul, .modal__description ol {
  margin-bottom: 8px;
}
.modal .someclass {
  background-image: url(${___CSS_LOADER_URL_REPLACEMENT_0___}), url(${___CSS_LOADER_URL_REPLACEMENT_1___}), url(${___CSS_LOADER_URL_REPLACEMENT_2___}), url(${___CSS_LOADER_URL_REPLACEMENT_3___});
}
.modal .someclass1 {
  background-image: url(${___CSS_LOADER_URL_REPLACEMENT_4___}), url(${___CSS_LOADER_URL_REPLACEMENT_5___}), url(${___CSS_LOADER_URL_REPLACEMENT_6___}), url(${___CSS_LOADER_URL_REPLACEMENT_7___}), url(${___CSS_LOADER_URL_REPLACEMENT_8___}), url(${___CSS_LOADER_URL_REPLACEMENT_9___}), url(${___CSS_LOADER_URL_REPLACEMENT_10___}), url(${___CSS_LOADER_URL_REPLACEMENT_11___}), url(${___CSS_LOADER_URL_REPLACEMENT_12___});
}

.btn {
  font-family: "Montserrat", sans-serif;
  padding: 10px 20px;
  font-size: 20px;
  font-weight: 600;
  border-radius: 8px;
  border: 2px solid #8bc34a;
  background-color: transparent;
  transition: color 0.2s linear, background-color 0.2s linear;
}
.btn:hover {
  color: #fff;
  background-color: #8bc34a;
}

.header {
  padding: 10px 0;
  font-size: 20px;
  background-color: #fff;
  box-shadow: -10px 10px 10px rgba(0, 0, 0, 0.3);
  border-radius: 0 0 10px 10px;
}
.header__inner {
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 22px;
  font-family: "Montserrat", sans-serif;
}
.header__info {
  max-width: calc(80% - 130px);
  padding: 0 14px;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
}
.header__icon {
  height: 24px;
  margin-right: 6px;
  fill: #333;
  flex-shrink: 0;
  transition: fill 0.2s linear;
}
.header__item {
  transition: color 0.2s linear;
  padding-right: 20px;
  max-width: 50%;
}
.header__item:last-child {
  padding-right: 0;
  padding-left: 20px;
  border-left: 1px dashed #333;
  max-width: 60%;
}
.header__item:hover {
  color: #8bc34a;
}
.header__item:hover svg {
  fill: #8bc34a;
}
.footer .header__item:hover {
  color: #ccc;
}
.footer .header__item:hover svg {
  fill: #ccc;
}
.header__time {
  max-width: 20%;
}

.categories {
  margin: 0 -15px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  overflow: hidden;
  padding: 10px 20px 10px 20px;
}
.categories__item {
  padding: 20px;
  width: 50%;
  margin: 0 auto;
}

.cat-card {
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 312px;
  color: #fff;
  background-color: #8bc34a;
  border-radius: 10px;
  box-shadow: -6px 6px 6px rgba(0, 0, 0, 0.2);
  overflow: hidden;
  cursor: pointer;
  transition: scale 0.2s cubic-bezier(0.32, 0.08, 0.24, 1), box-shadow 0.2s cubic-bezier(0.32, 0.08, 0.24, 1), scale 0.2s cubic-bezier(0.32, 0.08, 0.24, 1), color 0.2s cubic-bezier(0.32, 0.08, 0.24, 1);
}
.cat-card:hover {
  scale: 1.05;
  box-shadow: -10px 10px 10px rgba(0, 0, 0, 0.18);
}
.cat-card.active {
  box-shadow: -10px 10px 10px rgba(0, 0, 0, 0.18);
  text-decoration: underline;
}
.cat-card.active svg {
  padding: 10px 0;
  fill: rgba(249, 168, 37, 0.7);
}
.cat-card svg {
  height: 100%;
  width: 37%;
  padding: 10px 0;
  margin: 0 auto;
  fill: rgba(0, 0, 0, 0.7);
  transition: fill 0.2s linear;
}
.cat-card__bottom {
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  font-family: "Montserrat", sans-serif;
  text-transform: uppercase;
  padding: 8px;
  background-color: rgba(0, 0, 0, 0.2);
  border-radius: 0 0 16px 16px;
  min-height: 98.4px;
  overflow: hidden;
}
.cat-card h2, .cat-card h3, .cat-card h4, .cat-card h5 {
  font-size: 26px;
  text-align: center;
  padding: 10px;
}

.main__info {
  display: flex;
  flex-wrap: wrap;
  margin: 0 -10px;
}
.main__col {
  display: flex;
  width: 33.3333%;
  padding: 0 10px;
}
.main__col:not(:nth-child(-n+3)) {
  margin-top: 20px;
}

.footer {
  padding: 34px 0;
  font-size: 20px;
  font-family: "Montserrat", sans-serif;
  font-weight: 600;
  background: linear-gradient(181deg, rgba(255, 255, 255, 0.95) 0%, rgba(67, 160, 71, 0.6306897759) 100%);
  border-radius: 10px 10px 0 0;
}
.footer .container {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.footer__item {
  transition: color 0.2s linear;
}
.footer__item:hover {
  color: #000;
}
@media screen and (max-width: 1200px){
  .container--header {
    max-width: 100%;
  }
  .container {
    max-width: 960px;
  }
  .filter {
    font-size: 18px;
    padding: 12px;
  }
  .filter__input {
    padding: 0 12px;
  }
  .filter__input svg {
    width: 18px;
    height: 18px;
  }
  .filter__select {
    font-size: 15px;
    padding: 4px;
  }
  .header__info {
    flex-direction: column;
  }
  .header__item {
    padding-right: 0;
    max-width: 100%;
  }
  .header__item:first-child {
    margin-bottom: 18px;
  }
  .header__item:last-child {
    border-left: none;
    padding-left: 0;
    max-width: 100%;
  }
  .categories__item {
    padding: 10px;
  }
  .cat-card {
    height: 250px;
  }
  .cat-card svg {
    width: 33%;
  }
  .cat-card__bottom {
    min-height: 68px;
  }
  .cat-card__bottom {
    min-height: 63.4px;
  }
  .cat-card h2, .cat-card h3, .cat-card h4, .cat-card h5 {
    font-size: 22px;
  }
}
@media screen and (max-width: 992px){
  .container--header {
    max-width: 100%;
  }
  .container {
    max-width: 720px;
  }
  .burger {
    display: block;
  }
  .logo {
    max-width: 120px;
  }
  .filter__sort {
    width: 50%;
    padding-right: 12px;
  }
  .filter__input {
    display: none;
  }
  .filter__filter {
    width: 50%;
    justify-content: flex-end;
  }
  .modal {
    flex-direction: column;
    max-height: 90vh;
  }
  .modal__left {
    width: 100%;
    border-radius: 0;
    min-height: 360px;
    height: 360px;
    margin: 0 auto;
  }
  .modal__img img {
    object-fit: contain;
  }
  .modal__right {
    width: 100%;
  }
  .header__inner {
    font-size: 20px;
  }
  .header__info {
    max-width: calc(78% - 120px);
  }
  .header__icon {
    height: 22px;
  }
  .header__time {
    max-width: 22%;
  }
  .categories {
    max-width: 90%;
    margin: 0 auto;
  }
  .cat-card {
    height: 220px;
  }
  .cat-card h2, .cat-card h3, .cat-card h4, .cat-card h5 {
    font-size: 20px;
  }
  .main__col {
    width: 50%;
  }
  .main__col:not(:nth-child(-n+2)) {
    margin-top: 20px;
  }
}
@media screen and (max-width: 768px){
  .container--header {
    max-width: 100%;
  }
  .container {
    max-width: 540px;
  }
  .mx-sm-auto {
    margin-left: auto;
    margin-right: auto;
  }
  main {
    padding: 30px 0;
  }
  .logo {
    max-width: 100px;
  }
  .section {
    padding: 14px 0;
  }
  .section__title {
    font-size: 40px;
  }
  .filter {
    flex-direction: column-reverse;
    align-items: flex-start;
  }
  .filter__sort {
    width: 100%;
  }
  .filter__filter {
    width: 100%;
    padding-left: 0;
    margin-bottom: 14px;
    justify-content: flex-start;
  }
  .filter__select {
    padding: 2px 4px;
  }
  .header__inner {
    font-size: 18px;
  }
  .header__info {
    max-width: calc(78% - 100px);
    align-items: start;
    padding: 0 8px;
  }
  .header__icon {
    height: 20px;
  }
  .header__item:first-child {
    margin-bottom: 12px;
  }
  .categories {
    max-width: 100%;
  }
  .categories__item {
    width: 100%;
  }
  .cat-card {
    margin: 0 auto;
  }
  .cat-card {
    flex-direction: row;
    align-items: center;
    max-width: 90%;
    width: 80%;
    height: 100px;
  }
  .cat-card svg {
    height: 75%;
    width: 20%;
    margin: 0 14px;
  }
  .cat-card__bottom {
    padding-left: 0;
    min-height: 0;
    background: none;
  }
  .cat-card h2, .cat-card h3, .cat-card h4, .cat-card h5 {
    text-align: left;
  }
}
@media screen and (max-width: 576px){
  .container--header {
    max-width: 100%;
    padding: 0 10px;
  }
  .container {
    max-width: 100%;
    padding: 0 10px;
  }
  .container-fluid {
    padding: 0 10px;
  }
  .row {
    margin-right: -10px;
    margin-left: -10px;
  }
  .section__title {
    font-size: 36px;
  }
  .card {
    max-width: 360px;
  }
  .filter {
    font-size: 16px;
    padding: 8px;
  }
  .filter__select {
    padding: 1px 2px;
    margin-left: 4px;
  }
  .modal {
    width: 96%;
  }
  .modal__left {
    min-height: 280px;
    height: 280px;
  }
  .modal__right {
    padding: 14px 10px;
  }
  .modal__title {
    font-size: 30px;
  }
  .modal__beertype {
    font-size: 18px;
  }
  .modal__test-title {
    font-size: 16px;
  }
  .modal__test-value {
    font-size: 18px;
  }
  .header__info {
    max-width: 100%;
    padding-right: 0;
  }
  .header__time {
    display: none;
  }
  .cat-card {
    max-width: 100%;
    width: 100%;
  }
  .main__col {
    width: 100%;
  }
  .main__col:not(:nth-child(-n+1)) {
    margin-top: 20px;
  }
  .footer .container {
    justify-content: center;
  }
  .footer__item {
    display: none;
  }
}
@media screen and (max-width: 1440px){
  .container {
    max-width: 1230px;
  }
  .filter__sort {
    padding-right: 12px;
  }
  .filter__input input {
    font-size: 18px;
    padding-bottom: 2px;
    margin-left: 8px;
  }
}
@media (max-width: 1200px){
  .col-lg {
    flex-basis: 0;
    flex-grow: 1;
    max-width: 100%;
  }
  .col-lg-auto {
    flex: 0 0 auto;
    width: auto;
    max-width: none;
  }
  .col-lg-1 {
    flex: 0 0 8.333333%;
    max-width: 8.333333%;
  }
  .col-lg-2 {
    flex: 0 0 16.666667%;
    max-width: 16.666667%;
  }
  .col-lg-3 {
    flex: 0 0 25%;
    max-width: 25%;
  }
  .col-lg-4 {
    flex: 0 0 33.333333%;
    max-width: 33.333333%;
  }
  .col-lg-5 {
    flex: 0 0 41.666667%;
    max-width: 41.666667%;
  }
  .col-lg-6 {
    flex: 0 0 50%;
    max-width: 50%;
  }
  .col-lg-7 {
    flex: 0 0 58.333333%;
    max-width: 58.333333%;
  }
  .col-lg-8 {
    flex: 0 0 66.666667%;
    max-width: 66.666667%;
  }
  .col-lg-9 {
    flex: 0 0 75%;
    max-width: 75%;
  }
  .col-lg-10 {
    flex: 0 0 83.333333%;
    max-width: 83.333333%;
  }
  .col-lg-11 {
    flex: 0 0 91.666667%;
    max-width: 91.666667%;
  }
  .col-lg-12 {
    flex: 0 0 100%;
    max-width: 100%;
  }
  .order-lg-first {
    order: -1;
  }
  .order-lg-last {
    order: 13;
  }
  .order-lg-0 {
    order: 0;
  }
  .order-lg-1 {
    order: 1;
  }
  .order-lg-2 {
    order: 2;
  }
  .order-lg-3 {
    order: 3;
  }
  .order-lg-4 {
    order: 4;
  }
  .order-lg-5 {
    order: 5;
  }
  .order-lg-6 {
    order: 6;
  }
  .order-lg-7 {
    order: 7;
  }
  .order-lg-8 {
    order: 8;
  }
  .order-lg-9 {
    order: 9;
  }
  .order-lg-10 {
    order: 10;
  }
  .order-lg-11 {
    order: 11;
  }
  .order-lg-12 {
    order: 12;
  }
  .offset-lg-1 {
    margin-left: 8.33333%;
  }
  .offset-lg-2 {
    margin-left: 16.66667%;
  }
  .offset-lg-3 {
    margin-left: 25%;
  }
  .offset-lg-4 {
    margin-left: 33.33333%;
  }
  .offset-lg-5 {
    margin-left: 41.66667%;
  }
  .offset-lg-6 {
    margin-left: 50%;
  }
  .offset-lg-7 {
    margin-left: 58.33333%;
  }
  .offset-lg-8 {
    margin-left: 66.66667%;
  }
  .offset-lg-9 {
    margin-left: 75%;
  }
  .offset-lg-10 {
    margin-left: 83.33333%;
  }
  .offset-lg-11 {
    margin-left: 91.66667%;
  }
}
@media (max-width: 992px){
  .col-md {
    flex-basis: 0;
    flex-grow: 1;
    max-width: 100%;
  }
  .col-md-auto {
    flex: 0 0 auto;
    width: auto;
    max-width: none;
  }
  .col-md-1 {
    flex: 0 0 8.333333%;
    max-width: 8.333333%;
  }
  .col-md-2 {
    flex: 0 0 16.666667%;
    max-width: 16.666667%;
  }
  .col-md-3 {
    flex: 0 0 25%;
    max-width: 25%;
  }
  .col-md-4 {
    flex: 0 0 33.333333%;
    max-width: 33.333333%;
  }
  .col-md-5 {
    flex: 0 0 41.666667%;
    max-width: 41.666667%;
  }
  .col-md-6 {
    flex: 0 0 50%;
    max-width: 50%;
  }
  .col-md-7 {
    flex: 0 0 58.333333%;
    max-width: 58.333333%;
  }
  .col-md-8 {
    flex: 0 0 66.666667%;
    max-width: 66.666667%;
  }
  .col-md-9 {
    flex: 0 0 75%;
    max-width: 75%;
  }
  .col-md-10 {
    flex: 0 0 83.333333%;
    max-width: 83.333333%;
  }
  .col-md-11 {
    flex: 0 0 91.666667%;
    max-width: 91.666667%;
  }
  .col-md-12 {
    flex: 0 0 100%;
    max-width: 100%;
  }
  .order-md-first {
    order: -1;
  }
  .order-md-last {
    order: 13;
  }
  .order-md-0 {
    order: 0;
  }
  .order-md-1 {
    order: 1;
  }
  .order-md-2 {
    order: 2;
  }
  .order-md-3 {
    order: 3;
  }
  .order-md-4 {
    order: 4;
  }
  .order-md-5 {
    order: 5;
  }
  .order-md-6 {
    order: 6;
  }
  .order-md-7 {
    order: 7;
  }
  .order-md-8 {
    order: 8;
  }
  .order-md-9 {
    order: 9;
  }
  .order-md-10 {
    order: 10;
  }
  .order-md-11 {
    order: 11;
  }
  .order-md-12 {
    order: 12;
  }
  .offset-md-1 {
    margin-left: 8.33333%;
  }
  .offset-md-2 {
    margin-left: 16.66667%;
  }
  .offset-md-3 {
    margin-left: 25%;
  }
  .offset-md-4 {
    margin-left: 33.33333%;
  }
  .offset-md-5 {
    margin-left: 41.66667%;
  }
  .offset-md-6 {
    margin-left: 50%;
  }
  .offset-md-7 {
    margin-left: 58.33333%;
  }
  .offset-md-8 {
    margin-left: 66.66667%;
  }
  .offset-md-9 {
    margin-left: 75%;
  }
  .offset-md-10 {
    margin-left: 83.33333%;
  }
  .offset-md-11 {
    margin-left: 91.66667%;
  }
  .m-md-0 {
    margin: 0 !important;
  }
  .mt-md-0,
  .my-md-0 {
    margin-top: 0 !important;
  }
  .mr-md-0,
  .mx-md-0 {
    margin-right: 0 !important;
  }
  .mb-md-0,
  .my-md-0 {
    margin-bottom: 0 !important;
  }
  .ml-md-0,
  .mx-md-0 {
    margin-left: 0 !important;
  }
  .m-md-1 {
    margin: 0.25rem !important;
  }
  .mt-md-1,
  .my-md-1 {
    margin-top: 0.25rem !important;
  }
  .mr-md-1,
  .mx-md-1 {
    margin-right: 0.25rem !important;
  }
  .mb-md-1,
  .my-md-1 {
    margin-bottom: 0.25rem !important;
  }
  .ml-md-1,
  .mx-md-1 {
    margin-left: 0.25rem !important;
  }
  .m-md-2 {
    margin: 0.5rem !important;
  }
  .mt-md-2,
  .my-md-2 {
    margin-top: 0.5rem !important;
  }
  .mr-md-2,
  .mx-md-2 {
    margin-right: 0.5rem !important;
  }
  .mb-md-2,
  .my-md-2 {
    margin-bottom: 0.5rem !important;
  }
  .ml-md-2,
  .mx-md-2 {
    margin-left: 0.5rem !important;
  }
  .m-md-3 {
    margin: 1rem !important;
  }
  .mt-md-3,
  .my-md-3 {
    margin-top: 1rem !important;
  }
  .mr-md-3,
  .mx-md-3 {
    margin-right: 1rem !important;
  }
  .mb-md-3,
  .my-md-3 {
    margin-bottom: 1rem !important;
  }
  .ml-md-3,
  .mx-md-3 {
    margin-left: 1rem !important;
  }
  .m-md-4 {
    margin: 1.5rem !important;
  }
  .mt-md-4,
  .my-md-4 {
    margin-top: 1.5rem !important;
  }
  .mr-md-4,
  .mx-md-4 {
    margin-right: 1.5rem !important;
  }
  .mb-md-4,
  .my-md-4 {
    margin-bottom: 1.5rem !important;
  }
  .ml-md-4,
  .mx-md-4 {
    margin-left: 1.5rem !important;
  }
  .m-md-5 {
    margin: 3rem !important;
  }
  .mt-md-5,
  .my-md-5 {
    margin-top: 3rem !important;
  }
  .mr-md-5,
  .mx-md-5 {
    margin-right: 3rem !important;
  }
  .mb-md-5,
  .my-md-5 {
    margin-bottom: 3rem !important;
  }
  .ml-md-5,
  .mx-md-5 {
    margin-left: 3rem !important;
  }
}
@media (max-width: 768px){
  .col-sm {
    flex-basis: 0;
    flex-grow: 1;
    max-width: 100%;
  }
  .col-sm-auto {
    flex: 0 0 auto;
    width: auto;
    max-width: none;
  }
  .col-sm-1 {
    flex: 0 0 8.333333%;
    max-width: 8.333333%;
  }
  .col-sm-2 {
    flex: 0 0 16.666667%;
    max-width: 16.666667%;
  }
  .col-sm-3 {
    flex: 0 0 25%;
    max-width: 25%;
  }
  .col-sm-4 {
    flex: 0 0 33.333333%;
    max-width: 33.333333%;
  }
  .col-sm-5 {
    flex: 0 0 41.666667%;
    max-width: 41.666667%;
  }
  .col-sm-6 {
    flex: 0 0 50%;
    max-width: 50%;
  }
  .col-sm-7 {
    flex: 0 0 58.333333%;
    max-width: 58.333333%;
  }
  .col-sm-8 {
    flex: 0 0 66.666667%;
    max-width: 66.666667%;
  }
  .col-sm-9 {
    flex: 0 0 75%;
    max-width: 75%;
  }
  .col-sm-10 {
    flex: 0 0 83.333333%;
    max-width: 83.333333%;
  }
  .col-sm-11 {
    flex: 0 0 91.666667%;
    max-width: 91.666667%;
  }
  .col-sm-12 {
    flex: 0 0 100%;
    max-width: 100%;
  }
  .order-sm-first {
    order: -1;
  }
  .order-sm-last {
    order: 13;
  }
  .order-sm-0 {
    order: 0;
  }
  .order-sm-1 {
    order: 1;
  }
  .order-sm-2 {
    order: 2;
  }
  .order-sm-3 {
    order: 3;
  }
  .order-sm-4 {
    order: 4;
  }
  .order-sm-5 {
    order: 5;
  }
  .order-sm-6 {
    order: 6;
  }
  .order-sm-7 {
    order: 7;
  }
  .order-sm-8 {
    order: 8;
  }
  .order-sm-9 {
    order: 9;
  }
  .order-sm-10 {
    order: 10;
  }
  .order-sm-11 {
    order: 11;
  }
  .order-sm-12 {
    order: 12;
  }
  .offset-sm-0 {
    margin-left: 0;
  }
  .offset-sm-1 {
    margin-left: 8.33333%;
  }
  .offset-sm-2 {
    margin-left: 16.66667%;
  }
  .offset-sm-3 {
    margin-left: 25%;
  }
  .offset-sm-4 {
    margin-left: 33.33333%;
  }
  .offset-sm-5 {
    margin-left: 41.66667%;
  }
  .offset-sm-6 {
    margin-left: 50%;
  }
  .offset-sm-7 {
    margin-left: 58.33333%;
  }
  .offset-sm-8 {
    margin-left: 66.66667%;
  }
  .offset-sm-9 {
    margin-left: 75%;
  }
  .offset-sm-10 {
    margin-left: 83.33333%;
  }
  .offset-sm-11 {
    margin-left: 91.66667%;
  }
  .m-sm-0 {
    margin: 0 !important;
  }
  .mt-sm-0,
  .my-sm-0 {
    margin-top: 0 !important;
  }
  .mr-sm-0,
  .mx-sm-0 {
    margin-right: 0 !important;
  }
  .mb-sm-0,
  .my-sm-0 {
    margin-bottom: 0 !important;
  }
  .ml-sm-0,
  .mx-sm-0 {
    margin-left: 0 !important;
  }
  .m-sm-1 {
    margin: 0.25rem !important;
  }
  .mt-1,
  .my-1 {
    margin-top: 0.25rem !important;
  }
  .mr-sm-1,
  .mx-sm-1 {
    margin-right: 0.25rem !important;
  }
  .mb-sm-1,
  .my-sm-1 {
    margin-bottom: 0.25rem !important;
  }
  .ml-sm-1,
  .mx-sm-1 {
    margin-left: 0.25rem !important;
  }
  .m-sm-2 {
    margin: 0.5rem !important;
  }
  .mt-sm-2,
  .my-sm-2 {
    margin-top: 0.5rem !important;
  }
  .mr-2,
  .mx-2 {
    margin-right: 0.5rem !important;
  }
  .mb-sm-2,
  .my-sm-2 {
    margin-bottom: 0.5rem !important;
  }
  .ml-sm-2,
  .mx-sm-2 {
    margin-left: 0.5rem !important;
  }
  .m-sm-3 {
    margin: 1rem !important;
  }
  .mt-sm-3,
  .my-sm-3 {
    margin-top: 1rem !important;
  }
  .mr-sm-3,
  .mx-sm-3 {
    margin-right: 1rem !important;
  }
  .mb-sm-3,
  .my-sm-3 {
    margin-bottom: 1rem !important;
  }
  .ml-sm-3,
  .mx-sm-3 {
    margin-left: 1rem !important;
  }
  .m-sm-4 {
    margin: 1.5rem !important;
  }
  .mt-sm-4,
  .my-sm-4 {
    margin-top: 1.5rem !important;
  }
  .mr-sm-4,
  .mx-sm-4 {
    margin-right: 1.5rem !important;
  }
  .mb-sm-4,
  .my-sm-4 {
    margin-bottom: 1.5rem !important;
  }
  .ml-sm-4,
  .mx-sm-4 {
    margin-left: 1.5rem !important;
  }
  .m-sm-5 {
    margin: 3rem !important;
  }
  .mt-sm-5,
  .my-sm-5 {
    margin-top: 3rem !important;
  }
  .mr-sm-5,
  .mx-sm-5 {
    margin-right: 3rem !important;
  }
  .mb-sm-5,
  .my-sm-5 {
    margin-bottom: 3rem !important;
  }
  .ml-sm-5,
  .mx-sm-5 {
    margin-left: 3rem !important;
  }
}
@media (max-width: 576px){
  .col-xs {
    flex-basis: 0;
    flex-grow: 1;
    max-width: 100%;
  }
  .col-xs-auto {
    flex: 0 0 auto;
    width: auto;
    max-width: none;
  }
  .col-xs-1 {
    flex: 0 0 8.333333%;
    max-width: 8.333333%;
  }
  .col-xs-2 {
    flex: 0 0 16.666667%;
    max-width: 16.666667%;
  }
  .col-xs-3 {
    flex: 0 0 25%;
    max-width: 25%;
  }
  .col-xs-4 {
    flex: 0 0 33.333333%;
    max-width: 33.333333%;
  }
  .col-xs-5 {
    flex: 0 0 41.666667%;
    max-width: 41.666667%;
  }
  .col-xs-6 {
    flex: 0 0 50%;
    max-width: 50%;
  }
  .col-xs-7 {
    flex: 0 0 58.333333%;
    max-width: 58.333333%;
  }
  .col-xs-8 {
    flex: 0 0 66.666667%;
    max-width: 66.666667%;
  }
  .col-xs-9 {
    flex: 0 0 75%;
    max-width: 75%;
  }
  .col-xs-10 {
    flex: 0 0 83.333333%;
    max-width: 83.333333%;
  }
  .col-xs-11 {
    flex: 0 0 91.666667%;
    max-width: 91.666667%;
  }
  .col-xs-12 {
    flex: 0 0 100%;
    max-width: 100%;
  }
  .pr-xs-0 {
    padding-right: 0 !important;
  }
  .pr-xs-1 {
    padding-right: 0.25rem !important;
  }
  .order-xs-first {
    order: -1;
  }
  .order-xs-last {
    order: 13;
  }
  .order-xs-0 {
    order: 0;
  }
  .order-xs-1 {
    order: 1;
  }
  .order-xs-2 {
    order: 2;
  }
  .order-xs-3 {
    order: 3;
  }
  .order-xs-4 {
    order: 4;
  }
  .order-xs-5 {
    order: 5;
  }
  .order-xs-6 {
    order: 6;
  }
  .order-xs-7 {
    order: 7;
  }
  .order-xs-8 {
    order: 8;
  }
  .order-xs-9 {
    order: 9;
  }
  .order-xs-10 {
    order: 10;
  }
  .order-xs-11 {
    order: 11;
  }
  .order-xs-12 {
    order: 12;
  }
  .offset-xs-0 {
    margin-left: 0;
  }
  .offset-xs-1 {
    margin-left: 8.33333%;
  }
  .offset-xs-2 {
    margin-left: 16.66667%;
  }
  .offset-xs-3 {
    margin-left: 25%;
  }
  .offset-xs-4 {
    margin-left: 33.33333%;
  }
  .offset-xs-5 {
    margin-left: 41.66667%;
  }
  .offset-xs-6 {
    margin-left: 50%;
  }
  .offset-xs-7 {
    margin-left: 58.33333%;
  }
  .offset-xs-8 {
    margin-left: 66.66667%;
  }
  .offset-xs-9 {
    margin-left: 75%;
  }
  .offset-xs-10 {
    margin-left: 83.33333%;
  }
  .offset-xs-11 {
    margin-left: 91.66667%;
  }
  .mb-xs-3,
  .my-xs-3 {
    margin-bottom: 1rem !important;
  }
  .mb-xs-2,
  .my-xs-2 {
    margin-bottom: 0.5rem !important;
  }
  .mb-xs-1,
  .my-xs-1 {
    margin-bottom: 0.25rem !important;
  }
  .mt-xs-0 {
    margin-top: 0 !important;
  }
}`, "",{"version":3,"sources":["webpack://./src/scss/style.scss","webpack://./src/scss/_mixins.scss","webpack://./src/scss/_reset.scss","webpack://./src/scss/_grid.scss","webpack://./src/scss/_base.scss","webpack://./src/scss/_vars.scss","webpack://./src/scss/default-elements/_burger.scss","webpack://./src/scss/default-elements/_js-tab-content.scss","webpack://./src/scss/default-elements/_logo.scss","webpack://./src/scss/default-elements/_to-top.scss","webpack://./src/scss/default-elements/_section.scss","webpack://./src/scss/default-elements/_card.scss","webpack://./src/scss/default-elements/_filter.scss","webpack://./src/scss/default-elements/_modal.scss","webpack://./src/scss/default-elements/_btn.scss","webpack://./src/scss/header/_header.scss","webpack://./src/scss/categories/_categories.scss","webpack://./src/scss/default-elements/_cat-card.scss","webpack://./src/scss/main/_main.scss","webpack://./src/scss/footer/_footer.scss","webpack://./<no source>"],"names":[],"mappings":"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E,cAAA;IACA,eAAA;EH8DF;EG5DA;IACE,SAAA;EH8DF;EG5DA;IACE,SAAA;EH8DF;EG5DA;IACE,QAAA;EH8DF;EG5DA;IACE,QAAA;EH8DF;EG5DA;IACE,QAAA;EH8DF;EG5DA;IACE,QAAA;EH8DF;EG5DA;IACE,QAAA;EH8DF;EG5DA;IACE,QAAA;EH8DF;EG5DA;IACE,QAAA;EH8DF;EG5DA;IACE,QAAA;EH8DF;EG5DA;IACE,QAAA;EH8DF;EG5DA;IACE,QAAA;EH8DF;EG5DA;IACE,SAAA;EH8DF;EG5DA;IACE,SAAA;EH8DF;EG5DA;IACE,SAAA;EH8DF;EG5DA;IACE,cAAA;EH8DF;EG5DA;IACE,qBAAA;EH8DF;EG3DA;IACE,sBAAA;EH6DF;EG1DA;IACE,gBAAA;EH4DF;EGzDA;IACE,sBAAA;EH2DF;EGxDA;IACE,sBAAA;EH0DF;EGvDA;IACE,gBAAA;EHyDF;EGtDA;IACE,sBAAA;EHwDF;EGrDA;IACE,sBAAA;EHuDF;EGpDA;IACE,gBAAA;EHsDF;EGnDA;IACE,sBAAA;EHqDF;EGlDA;IACE,sBAAA;EHoDF;EGjDC;IACC,oBAAA;EHmDF;EGhDA;;IAEE,wBAAA;EHkDF;EG/CA;;IAEE,0BAAA;EHiDF;EG9CA;;IAEE,2BAAA;EHgDF;EG7CA;;IAEE,yBAAA;EH+CF;EG5CA;IACE,0BAAA;EH8CF;EG3CA;;IAEE,8BAAA;EH6CF;EG1CA;;IAEE,gCAAA;EH4CF;EGzCA;;IAEE,iCAAA;EH2CF;EGxCA;;IAEE,+BAAA;EH0CF;EGvCA;IACE,yBAAA;EHyCF;EGtCA;;IAEE,6BAAA;EHwCF;EGrCA;;IAEE,+BAAA;EHuCF;EGpCA;;IAEE,gCAAA;EHsCF;EGnCA;;IAEE,8BAAA;EHqCF;EGlCA;IACE,uBAAA;EHoCF;EGjCA;;IAEE,2BAAA;EHmCF;EGhCA;;IAEE,6BAAA;EHkCF;EG/BA;;IAEE,8BAAA;EHiCF;EG9BA;;IAEE,4BAAA;EHgCF;EG7BA;IACE,yBAAA;EH+BF;EG5BA;;IAEE,6BAAA;EH8BF;EG3BA;;IAEE,+BAAA;EH6BF;EG1BA;;IAEE,gCAAA;EH4BF;EGzBA;;IAEE,8BAAA;EH2BF;EGxBA;IACE,uBAAA;EH0BF;EGvBA;;IAEE,2BAAA;EHyBF;EGtBA;;IAEE,6BAAA;EHwBF;EGrBA;;IAEE,8BAAA;EHuBF;EGpBA;;IAEE,4BAAA;EHsBF;AA43BF;AoB3rEA;EjBgzCE;IACE,aAAA;IACA,YAAA;IACA,eAAA;EHmBF;EGjBA;IACE,cAAA;IACA,WAAA;IACA,eAAA;EHmBF;EGjBA;IACE,mBAAA;IACA,oBAAA;EHmBF;EGjBA;IACE,oBAAA;IACA,qBAAA;EHmBF;EGjBA;IACE,aAAA;IACA,cAAA;EHmBF;EGjBA;IACE,oBAAA;IACA,qBAAA;EHmBF;EGjBA;IACE,oBAAA;IACA,qBAAA;EHmBF;EGjBA;IACE,aAAA;IACA,cAAA;EHmBF;EGjBA;IACE,oBAAA;IACA,qBAAA;EHmBF;EGjBA;IACE,oBAAA;IACA,qBAAA;EHmBF;EGjBA;IACE,aAAA;IACA,cAAA;EHmBF;EGjBA;IACE,oBAAA;IACA,qBAAA;EHmBF;EGjBA;IACE,oBAAA;IACA,qBAAA;EHmBF;EGjBA;IACE,cAAA;IACA,eAAA;EHmBF;EGjBA;IACE,2BAAA;EHmBF;EGjBA;IACE,iCAAA;EHmBF;EGjBA;IACE,SAAA;EHmBF;EGjBA;IACE,SAAA;EHmBF;EGjBA;IACE,QAAA;EHmBF;EGjBA;IACE,QAAA;EHmBF;EGjBA;IACE,QAAA;EHmBF;EGjBA;IACE,QAAA;EHmBF;EGjBA;IACE,QAAA;EHmBF;EGjBA;IACE,QAAA;EHmBF;EGjBA;IACE,QAAA;EHmBF;EGjBA;IACE,QAAA;EHmBF;EGjBA;IACE,QAAA;EHmBF;EGjBA;IACE,QAAA;EHmBF;EGjBA;IACE,SAAA;EHmBF;EGjBA;IACE,SAAA;EHmBF;EGjBA;IACE,SAAA;EHmBF;EGjBA;IACE,cAAA;EHmBF;EGjBA;IACE,qBAAA;EHmBF;EGhBA;IACE,sBAAA;EHkBF;EGfA;IACE,gBAAA;EHiBF;EGdA;IACE,sBAAA;EHgBF;EGbA;IACE,sBAAA;EHeF;EGZA;IACE,gBAAA;EHcF;EGXA;IACE,sBAAA;EHaF;EGVA;IACE,sBAAA;EHYF;EGTA;IACE,gBAAA;EHWF;EGRA;IACE,sBAAA;EHUF;EGPA;IACE,sBAAA;EHSF;EGPA;;IAEE,8BAAA;EHSF;EGPA;;IAEE,gCAAA;EHSF;EGPA;;IAEE,iCAAA;EHSF;EGPA;IACE,wBAAA;EHSF;AA43BF","sourcesContent":["@charset \"UTF-8\";\n.bg-radial, .cat-card {\n  border-radius: 16px;\n  backdrop-filter: blur(15px) saturate(86%);\n  background: radial-gradient(circle at 100% 0, hsla(0, 0%, 100%, 0.6) 0, hsla(0, 0%, 96.1%, 0.13) 183%);\n}\n\n.flex-items-center, .footer__item, .header__time, .header__item {\n  display: flex;\n  align-items: center;\n}\n\n.text-nowrap, .header__item:first-child span {\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n\n/* http://meyerweb.com/eric/tools/css/reset/\n   v2.0 | 20110126\n   License: none (public domain)\n*/\nhtml, body, div, span, applet, object, iframe,\nh1, h2, h3, h4, h5, h6, p, blockquote, pre,\na, abbr, acronym, address, big, cite, code,\ndel, dfn, em, img, ins, kbd, q, s, samp,\nsmall, strike, strong, sub, sup, tt, var,\nb, u, i, center,\ndl, dt, dd, ol, ul, li,\nfieldset, form, label, legend,\ntable, caption, tbody, tfoot, thead, tr, th, td,\narticle, aside, canvas, details, embed,\nfigure, figcaption, footer, header, hgroup,\nmenu, nav, output, ruby, section, summary,\ntime, mark, audio, video {\n  margin: 0;\n  padding: 0;\n  border: 0;\n  outline: none;\n  font-size: 100%;\n  font: inherit;\n  vertical-align: baseline;\n}\n\n/* HTML5 display-role reset for older browsers */\narticle, aside, details, figcaption, figure,\nfooter, header, hgroup, menu, nav, section {\n  display: block;\n}\n\n*, *::before, *::after {\n  box-sizing: border-box;\n}\n\na {\n  color: inherit;\n  text-decoration: none;\n  cursor: pointer;\n  display: inline-block;\n}\n\nimg {\n  max-width: 100%;\n  height: auto;\n}\n\nol, ul {\n  list-style: none;\n}\n\nblockquote, q {\n  quotes: none;\n}\n\nblockquote:before, blockquote:after,\nq:before, q:after {\n  content: \"\";\n}\n\ninput, textarea, button {\n  outline: none;\n  border: none;\n}\n\ntextarea {\n  resize: vertical;\n}\n\nbutton {\n  cursor: pointer;\n}\n\ntable {\n  border-collapse: collapse;\n  border-spacing: 0;\n}\n\n.container {\n  padding: 0 15px;\n  max-width: 1470px;\n  margin: 0 auto;\n}\n.container--header {\n  max-width: 1430px;\n  padding: 0 15px;\n  margin: 0 auto;\n}\n@media screen and (max-width: 1200px) {\n  .container--header {\n    max-width: 100%;\n  }\n}\n@media screen and (max-width: 992px) {\n  .container--header {\n    max-width: 100%;\n  }\n}\n@media screen and (max-width: 768px) {\n  .container--header {\n    max-width: 100%;\n  }\n}\n@media screen and (max-width: 576px) {\n  .container--header {\n    max-width: 100%;\n    padding: 0 10px;\n  }\n}\n@media screen and (max-width: 1440px) {\n  .container {\n    max-width: 1230px;\n  }\n}\n@media screen and (max-width: 1200px) {\n  .container {\n    max-width: 960px;\n  }\n}\n@media screen and (max-width: 992px) {\n  .container {\n    max-width: 720px;\n  }\n}\n@media screen and (max-width: 768px) {\n  .container {\n    max-width: 540px;\n  }\n}\n@media screen and (max-width: 576px) {\n  .container {\n    max-width: 100%;\n    padding: 0 10px;\n  }\n}\n\n.container-fluid {\n  width: 100%;\n  padding: 0 15px;\n}\n@media screen and (max-width: 576px) {\n  .container-fluid {\n    padding: 0 10px;\n  }\n}\n\n.row {\n  display: flex;\n  flex-wrap: wrap;\n  margin-right: -15px;\n  margin-left: -15px;\n}\n@media screen and (max-width: 576px) {\n  .row {\n    margin-right: -10px;\n    margin-left: -10px;\n  }\n}\n\n.no-gutters {\n  margin-right: 0;\n  margin-left: 0;\n}\n\n.no-gutters > .col,\n.no-gutters > [class*=col-] {\n  padding-right: 0;\n  padding-left: 0;\n}\n\n.col-1, .col-2, .col-3, .col-4, .col-5, .col-6, .col-7, .col-8, .col-9, .col-10, .col-11, .col-12, .col,\n.col-auto, .col-sm-1, .col-sm-2, .col-sm-3, .col-sm-4, .col-sm-5, .col-sm-6, .col-sm-7, .col-sm-8, .col-sm-9, .col-sm-10, .col-sm-11, .col-sm-12, .col-sm,\n.col-sm-auto, .col-md-1, .col-md-2, .col-md-3, .col-md-4, .col-md-5, .col-md-6, .col-md-7, .col-md-8, .col-md-9, .col-md-10, .col-md-11, .col-md-12, .col-md,\n.col-md-auto, .col-lg-1, .col-lg-2, .col-lg-3, .col-lg-4, .col-lg-5, .col-lg-6, .col-lg-7, .col-lg-8, .col-lg-9, .col-lg-10, .col-lg-11, .col-lg-12, .col-lg,\n.col-lg-auto, .col-xs-1, .col-xs-2, .col-xs-3, .col-xs-4, .col-xs-5, .col-xs-6, .col-xs-7, .col-xs-8, .col-xs-9, .col-xs-10, .col-xs-11, .col-xs-12, .col-xs,\n.col-xs-auto {\n  width: 100%;\n  max-width: 100%;\n  min-height: 1px;\n  flex-shrink: 0;\n  padding-right: 15px;\n  padding-left: 15px;\n}\n\n.col {\n  flex-basis: 0;\n  flex-grow: 1;\n  max-width: 100%;\n}\n\n.col-auto {\n  flex: 0 0 auto;\n  width: auto;\n  max-width: none;\n}\n\n.col-1 {\n  flex: 0 0 8.333333%;\n  max-width: 8.333333%;\n}\n\n.col-2 {\n  flex: 0 0 16.666667%;\n  max-width: 16.666667%;\n}\n\n.col-3 {\n  flex: 0 0 25%;\n  max-width: 25%;\n}\n\n.col-4 {\n  flex: 0 0 33.333333%;\n  max-width: 33.333333%;\n}\n\n.col-5 {\n  flex: 0 0 41.666667%;\n  max-width: 41.666667%;\n}\n\n.col-6 {\n  flex: 0 0 50%;\n  max-width: 50%;\n}\n\n.col-7 {\n  flex: 0 0 58.333333%;\n  max-width: 58.333333%;\n}\n\n.col-8 {\n  flex: 0 0 66.666667%;\n  max-width: 66.666667%;\n}\n\n.col-9 {\n  flex: 0 0 75%;\n  max-width: 75%;\n}\n\n.col-10 {\n  flex: 0 0 83.333333%;\n  max-width: 83.333333%;\n}\n\n.col-11 {\n  flex: 0 0 91.666667%;\n  max-width: 91.666667%;\n}\n\n.col-12 {\n  flex: 0 0 100%;\n  max-width: 100%;\n}\n\n.order-first {\n  order: -1;\n}\n\n.order-last {\n  order: 13;\n}\n\n.order-0 {\n  order: 0;\n}\n\n.order-1 {\n  order: 1;\n}\n\n.order-2 {\n  order: 2;\n}\n\n.order-3 {\n  order: 3;\n}\n\n.order-4 {\n  order: 4;\n}\n\n.order-5 {\n  order: 5;\n}\n\n.order-6 {\n  order: 6;\n}\n\n.order-7 {\n  order: 7;\n}\n\n.order-8 {\n  order: 8;\n}\n\n.order-9 {\n  order: 9;\n}\n\n.order-10 {\n  order: 10;\n}\n\n.order-11 {\n  order: 11;\n}\n\n.order-12 {\n  order: 12;\n}\n\n.offset-1 {\n  margin-left: 8.33333%;\n}\n\n.offset-2 {\n  margin-left: 16.66667%;\n}\n\n.offset-3 {\n  margin-left: 25%;\n}\n\n.offset-4 {\n  margin-left: 33.33333%;\n}\n\n.offset-5 {\n  margin-left: 41.66667%;\n}\n\n.offset-6 {\n  margin-left: 50%;\n}\n\n.offset-7 {\n  margin-left: 58.33333%;\n}\n\n.offset-8 {\n  margin-left: 66.66667%;\n}\n\n.offset-9 {\n  margin-left: 75%;\n}\n\n.offset-10 {\n  margin-left: 83.33333%;\n}\n\n.offset-11 {\n  margin-left: 91.66667%;\n}\n\n.m-0 {\n  margin: 0 !important;\n}\n\n.mt-0,\n.my-0 {\n  margin-top: 0 !important;\n}\n\n.mr-0,\n.mx-0 {\n  margin-right: 0 !important;\n}\n\n.mb-0,\n.my-0 {\n  margin-bottom: 0 !important;\n}\n\n.ml-0,\n.mx-0 {\n  margin-left: 0 !important;\n}\n\n.m-1 {\n  margin: 0.25rem !important;\n}\n\n.mt-1,\n.my-1 {\n  margin-top: 0.25rem !important;\n}\n\n.mr-1,\n.mx-1 {\n  margin-right: 0.25rem !important;\n}\n\n.mb-1,\n.my-1 {\n  margin-bottom: 0.25rem !important;\n}\n\n.ml-1,\n.mx-1 {\n  margin-left: 0.25rem !important;\n}\n\n.m-2 {\n  margin: 0.5rem !important;\n}\n\n.mt-2,\n.my-2 {\n  margin-top: 0.5rem !important;\n}\n\n.mr-2,\n.mx-2 {\n  margin-right: 0.5rem !important;\n}\n\n.mb-2,\n.my-2 {\n  margin-bottom: 0.5rem !important;\n}\n\n.ml-2,\n.mx-2 {\n  margin-left: 0.5rem !important;\n}\n\n.m-3 {\n  margin: 1rem !important;\n}\n\n.mt-3,\n.my-3 {\n  margin-top: 1rem !important;\n}\n\n.mr-3,\n.mx-3 {\n  margin-right: 1rem !important;\n}\n\n.mb-3,\n.my-3 {\n  margin-bottom: 1rem !important;\n}\n\n.ml-3,\n.mx-3 {\n  margin-left: 1rem !important;\n}\n\n.m-4 {\n  margin: 1.5rem !important;\n}\n\n.mt-4,\n.my-4 {\n  margin-top: 1.5rem !important;\n}\n\n.mr-4,\n.mx-4 {\n  margin-right: 1.5rem !important;\n}\n\n.mb-4,\n.my-4 {\n  margin-bottom: 1.5rem !important;\n}\n\n.ml-4,\n.mx-4 {\n  margin-left: 1.5rem !important;\n}\n\n.m-5 {\n  margin: 3rem !important;\n}\n\n.mt-5,\n.my-5 {\n  margin-top: 3rem !important;\n}\n\n.mr-5,\n.mx-5 {\n  margin-right: 3rem !important;\n}\n\n.mb-5,\n.my-5 {\n  margin-bottom: 3rem !important;\n}\n\n.ml-5,\n.mx-5 {\n  margin-left: 3rem !important;\n}\n\n.mt-auto {\n  margin-top: auto;\n}\n\n.mb-auto {\n  margin-bottom: auto;\n}\n\n.ml-auto {\n  margin-left: auto;\n}\n\n.mr-auto {\n  margin-right: auto;\n}\n\n.mx-auto {\n  margin-left: auto;\n  margin-right: auto;\n}\n\n.my-auto {\n  margin-top: auto;\n  margin-bottom: auto;\n}\n\n@media screen and (max-width: 768px) {\n  .mx-sm-auto {\n    margin-left: auto;\n    margin-right: auto;\n  }\n}\n.p-0 {\n  padding: 0 !important;\n}\n\n.pt-0,\n.py-0 {\n  padding-top: 0 !important;\n}\n\n.pr-0,\n.px-0 {\n  padding-right: 0 !important;\n}\n\n.pb-0,\n.py-0 {\n  padding-bottom: 0 !important;\n}\n\n.pl-0,\n.px-0 {\n  padding-left: 0 !important;\n}\n\n.p-1 {\n  padding: 0.25rem !important;\n}\n\n.pt-1,\n.py-1 {\n  padding-top: 0.25rem !important;\n}\n\n.pr-1,\n.px-1 {\n  padding-right: 0.25rem !important;\n}\n\n.pb-1,\n.py-1 {\n  padding-bottom: 0.25rem !important;\n}\n\n.pl-1,\n.px-1 {\n  padding-left: 0.25rem !important;\n}\n\n.p-2 {\n  padding: 0.5rem !important;\n}\n\n.pt-2,\n.py-2 {\n  padding-top: 0.5rem !important;\n}\n\n.pr-2,\n.px-2 {\n  padding-right: 0.5rem !important;\n}\n\n.pb-2,\n.py-2 {\n  padding-bottom: 0.5rem !important;\n}\n\n.pl-2,\n.px-2 {\n  padding-left: 0.5rem !important;\n}\n\n.p-3 {\n  padding: 1rem !important;\n}\n\n.pt-3,\n.py-3 {\n  padding-top: 1rem !important;\n}\n\n.pr-3,\n.px-3 {\n  padding-right: 1rem !important;\n}\n\n.pb-3,\n.py-3 {\n  padding-bottom: 1rem !important;\n}\n\n.pl-3,\n.px-3 {\n  padding-left: 1rem !important;\n}\n\n.p-4 {\n  padding: 1.5rem !important;\n}\n\n.pt-4,\n.py-4 {\n  padding-top: 1.5rem !important;\n}\n\n.pr-4,\n.px-4 {\n  padding-right: 1.5rem !important;\n}\n\n.pb-4,\n.py-4 {\n  padding-bottom: 1.5rem !important;\n}\n\n.pl-4,\n.px-4 {\n  padding-left: 1.5rem !important;\n}\n\n.p-5 {\n  padding: 3rem !important;\n}\n\n.pt-5,\n.py-5 {\n  padding-top: 3rem !important;\n}\n\n.pr-5,\n.px-5 {\n  padding-right: 3rem !important;\n}\n\n.pb-5,\n.py-5 {\n  padding-bottom: 3rem !important;\n}\n\n.pl-5,\n.px-5 {\n  padding-left: 3rem !important;\n}\n\n@media (max-width: 1200px) {\n  .col-lg {\n    flex-basis: 0;\n    flex-grow: 1;\n    max-width: 100%;\n  }\n  .col-lg-auto {\n    flex: 0 0 auto;\n    width: auto;\n    max-width: none;\n  }\n  .col-lg-1 {\n    flex: 0 0 8.333333%;\n    max-width: 8.333333%;\n  }\n  .col-lg-2 {\n    flex: 0 0 16.666667%;\n    max-width: 16.666667%;\n  }\n  .col-lg-3 {\n    flex: 0 0 25%;\n    max-width: 25%;\n  }\n  .col-lg-4 {\n    flex: 0 0 33.333333%;\n    max-width: 33.333333%;\n  }\n  .col-lg-5 {\n    flex: 0 0 41.666667%;\n    max-width: 41.666667%;\n  }\n  .col-lg-6 {\n    flex: 0 0 50%;\n    max-width: 50%;\n  }\n  .col-lg-7 {\n    flex: 0 0 58.333333%;\n    max-width: 58.333333%;\n  }\n  .col-lg-8 {\n    flex: 0 0 66.666667%;\n    max-width: 66.666667%;\n  }\n  .col-lg-9 {\n    flex: 0 0 75%;\n    max-width: 75%;\n  }\n  .col-lg-10 {\n    flex: 0 0 83.333333%;\n    max-width: 83.333333%;\n  }\n  .col-lg-11 {\n    flex: 0 0 91.666667%;\n    max-width: 91.666667%;\n  }\n  .col-lg-12 {\n    flex: 0 0 100%;\n    max-width: 100%;\n  }\n  .order-lg-first {\n    order: -1;\n  }\n  .order-lg-last {\n    order: 13;\n  }\n  .order-lg-0 {\n    order: 0;\n  }\n  .order-lg-1 {\n    order: 1;\n  }\n  .order-lg-2 {\n    order: 2;\n  }\n  .order-lg-3 {\n    order: 3;\n  }\n  .order-lg-4 {\n    order: 4;\n  }\n  .order-lg-5 {\n    order: 5;\n  }\n  .order-lg-6 {\n    order: 6;\n  }\n  .order-lg-7 {\n    order: 7;\n  }\n  .order-lg-8 {\n    order: 8;\n  }\n  .order-lg-9 {\n    order: 9;\n  }\n  .order-lg-10 {\n    order: 10;\n  }\n  .order-lg-11 {\n    order: 11;\n  }\n  .order-lg-12 {\n    order: 12;\n  }\n  .offset-lg-1 {\n    margin-left: 8.33333%;\n  }\n  .offset-lg-2 {\n    margin-left: 16.66667%;\n  }\n  .offset-lg-3 {\n    margin-left: 25%;\n  }\n  .offset-lg-4 {\n    margin-left: 33.33333%;\n  }\n  .offset-lg-5 {\n    margin-left: 41.66667%;\n  }\n  .offset-lg-6 {\n    margin-left: 50%;\n  }\n  .offset-lg-7 {\n    margin-left: 58.33333%;\n  }\n  .offset-lg-8 {\n    margin-left: 66.66667%;\n  }\n  .offset-lg-9 {\n    margin-left: 75%;\n  }\n  .offset-lg-10 {\n    margin-left: 83.33333%;\n  }\n  .offset-lg-11 {\n    margin-left: 91.66667%;\n  }\n}\n@media (max-width: 992px) {\n  .col-md {\n    flex-basis: 0;\n    -webkit-box-flex: 1;\n    flex-grow: 1;\n    max-width: 100%;\n  }\n  .col-md-auto {\n    flex: 0 0 auto;\n    width: auto;\n    max-width: none;\n  }\n  .col-md-1 {\n    flex: 0 0 8.333333%;\n    max-width: 8.333333%;\n  }\n  .col-md-2 {\n    flex: 0 0 16.666667%;\n    max-width: 16.666667%;\n  }\n  .col-md-3 {\n    flex: 0 0 25%;\n    max-width: 25%;\n  }\n  .col-md-4 {\n    flex: 0 0 33.333333%;\n    max-width: 33.333333%;\n  }\n  .col-md-5 {\n    flex: 0 0 41.666667%;\n    max-width: 41.666667%;\n  }\n  .col-md-6 {\n    flex: 0 0 50%;\n    max-width: 50%;\n  }\n  .col-md-7 {\n    flex: 0 0 58.333333%;\n    max-width: 58.333333%;\n  }\n  .col-md-8 {\n    flex: 0 0 66.666667%;\n    max-width: 66.666667%;\n  }\n  .col-md-9 {\n    flex: 0 0 75%;\n    max-width: 75%;\n  }\n  .col-md-10 {\n    flex: 0 0 83.333333%;\n    max-width: 83.333333%;\n  }\n  .col-md-11 {\n    flex: 0 0 91.666667%;\n    max-width: 91.666667%;\n  }\n  .col-md-12 {\n    flex: 0 0 100%;\n    max-width: 100%;\n  }\n  .order-md-first {\n    order: -1;\n  }\n  .order-md-last {\n    order: 13;\n  }\n  .order-md-0 {\n    order: 0;\n  }\n  .order-md-1 {\n    order: 1;\n  }\n  .order-md-2 {\n    order: 2;\n  }\n  .order-md-3 {\n    order: 3;\n  }\n  .order-md-4 {\n    order: 4;\n  }\n  .order-md-5 {\n    order: 5;\n  }\n  .order-md-6 {\n    order: 6;\n  }\n  .order-md-7 {\n    order: 7;\n  }\n  .order-md-8 {\n    order: 8;\n  }\n  .order-md-9 {\n    order: 9;\n  }\n  .order-md-10 {\n    order: 10;\n  }\n  .order-md-11 {\n    order: 11;\n  }\n  .order-md-12 {\n    order: 12;\n  }\n  .offset-md-1 {\n    margin-left: 8.33333%;\n  }\n  .offset-md-2 {\n    margin-left: 16.66667%;\n  }\n  .offset-md-3 {\n    margin-left: 25%;\n  }\n  .offset-md-4 {\n    margin-left: 33.33333%;\n  }\n  .offset-md-5 {\n    margin-left: 41.66667%;\n  }\n  .offset-md-6 {\n    margin-left: 50%;\n  }\n  .offset-md-7 {\n    margin-left: 58.33333%;\n  }\n  .offset-md-8 {\n    margin-left: 66.66667%;\n  }\n  .offset-md-9 {\n    margin-left: 75%;\n  }\n  .offset-md-10 {\n    margin-left: 83.33333%;\n  }\n  .offset-md-11 {\n    margin-left: 91.66667%;\n  }\n  .m-md-0 {\n    margin: 0 !important;\n  }\n  .mt-md-0,\n  .my-md-0 {\n    margin-top: 0 !important;\n  }\n  .mr-md-0,\n  .mx-md-0 {\n    margin-right: 0 !important;\n  }\n  .mb-md-0,\n  .my-md-0 {\n    margin-bottom: 0 !important;\n  }\n  .ml-md-0,\n  .mx-md-0 {\n    margin-left: 0 !important;\n  }\n  .m-md-1 {\n    margin: 0.25rem !important;\n  }\n  .mt-md-1,\n  .my-md-1 {\n    margin-top: 0.25rem !important;\n  }\n  .mr-md-1,\n  .mx-md-1 {\n    margin-right: 0.25rem !important;\n  }\n  .mb-md-1,\n  .my-md-1 {\n    margin-bottom: 0.25rem !important;\n  }\n  .ml-md-1,\n  .mx-md-1 {\n    margin-left: 0.25rem !important;\n  }\n  .m-md-2 {\n    margin: 0.5rem !important;\n  }\n  .mt-md-2,\n  .my-md-2 {\n    margin-top: 0.5rem !important;\n  }\n  .mr-md-2,\n  .mx-md-2 {\n    margin-right: 0.5rem !important;\n  }\n  .mb-md-2,\n  .my-md-2 {\n    margin-bottom: 0.5rem !important;\n  }\n  .ml-md-2,\n  .mx-md-2 {\n    margin-left: 0.5rem !important;\n  }\n  .m-md-3 {\n    margin: 1rem !important;\n  }\n  .mt-md-3,\n  .my-md-3 {\n    margin-top: 1rem !important;\n  }\n  .mr-md-3,\n  .mx-md-3 {\n    margin-right: 1rem !important;\n  }\n  .mb-md-3,\n  .my-md-3 {\n    margin-bottom: 1rem !important;\n  }\n  .ml-md-3,\n  .mx-md-3 {\n    margin-left: 1rem !important;\n  }\n  .m-md-4 {\n    margin: 1.5rem !important;\n  }\n  .mt-md-4,\n  .my-md-4 {\n    margin-top: 1.5rem !important;\n  }\n  .mr-md-4,\n  .mx-md-4 {\n    margin-right: 1.5rem !important;\n  }\n  .mb-md-4,\n  .my-md-4 {\n    margin-bottom: 1.5rem !important;\n  }\n  .ml-md-4,\n  .mx-md-4 {\n    margin-left: 1.5rem !important;\n  }\n  .m-md-5 {\n    margin: 3rem !important;\n  }\n  .mt-md-5,\n  .my-md-5 {\n    margin-top: 3rem !important;\n  }\n  .mr-md-5,\n  .mx-md-5 {\n    margin-right: 3rem !important;\n  }\n  .mb-md-5,\n  .my-md-5 {\n    margin-bottom: 3rem !important;\n  }\n  .ml-md-5,\n  .mx-md-5 {\n    margin-left: 3rem !important;\n  }\n}\n@media (max-width: 768px) {\n  .col-sm {\n    flex-basis: 0;\n    flex-grow: 1;\n    max-width: 100%;\n  }\n  .col-sm-auto {\n    flex: 0 0 auto;\n    width: auto;\n    max-width: none;\n  }\n  .col-sm-1 {\n    flex: 0 0 8.333333%;\n    max-width: 8.333333%;\n  }\n  .col-sm-2 {\n    flex: 0 0 16.666667%;\n    max-width: 16.666667%;\n  }\n  .col-sm-3 {\n    flex: 0 0 25%;\n    max-width: 25%;\n  }\n  .col-sm-4 {\n    flex: 0 0 33.333333%;\n    max-width: 33.333333%;\n  }\n  .col-sm-5 {\n    flex: 0 0 41.666667%;\n    max-width: 41.666667%;\n  }\n  .col-sm-6 {\n    flex: 0 0 50%;\n    max-width: 50%;\n  }\n  .col-sm-7 {\n    flex: 0 0 58.333333%;\n    max-width: 58.333333%;\n  }\n  .col-sm-8 {\n    flex: 0 0 66.666667%;\n    max-width: 66.666667%;\n  }\n  .col-sm-9 {\n    flex: 0 0 75%;\n    max-width: 75%;\n  }\n  .col-sm-10 {\n    flex: 0 0 83.333333%;\n    max-width: 83.333333%;\n  }\n  .col-sm-11 {\n    flex: 0 0 91.666667%;\n    max-width: 91.666667%;\n  }\n  .col-sm-12 {\n    flex: 0 0 100%;\n    max-width: 100%;\n  }\n  .order-sm-first {\n    order: -1;\n  }\n  .order-sm-last {\n    order: 13;\n  }\n  .order-sm-0 {\n    order: 0;\n  }\n  .order-sm-1 {\n    order: 1;\n  }\n  .order-sm-2 {\n    order: 2;\n  }\n  .order-sm-3 {\n    order: 3;\n  }\n  .order-sm-4 {\n    order: 4;\n  }\n  .order-sm-5 {\n    order: 5;\n  }\n  .order-sm-6 {\n    order: 6;\n  }\n  .order-sm-7 {\n    order: 7;\n  }\n  .order-sm-8 {\n    order: 8;\n  }\n  .order-sm-9 {\n    order: 9;\n  }\n  .order-sm-10 {\n    order: 10;\n  }\n  .order-sm-11 {\n    order: 11;\n  }\n  .order-sm-12 {\n    order: 12;\n  }\n  .offset-sm-0 {\n    margin-left: 0;\n  }\n  .offset-sm-1 {\n    margin-left: 8.33333%;\n  }\n  .offset-sm-2 {\n    margin-left: 16.66667%;\n  }\n  .offset-sm-3 {\n    margin-left: 25%;\n  }\n  .offset-sm-4 {\n    margin-left: 33.33333%;\n  }\n  .offset-sm-5 {\n    margin-left: 41.66667%;\n  }\n  .offset-sm-6 {\n    margin-left: 50%;\n  }\n  .offset-sm-7 {\n    margin-left: 58.33333%;\n  }\n  .offset-sm-8 {\n    margin-left: 66.66667%;\n  }\n  .offset-sm-9 {\n    margin-left: 75%;\n  }\n  .offset-sm-10 {\n    margin-left: 83.33333%;\n  }\n  .offset-sm-11 {\n    margin-left: 91.66667%;\n  }\n  .m-sm-0 {\n    margin: 0 !important;\n  }\n  .mt-sm-0,\n  .my-sm-0 {\n    margin-top: 0 !important;\n  }\n  .mr-sm-0,\n  .mx-sm-0 {\n    margin-right: 0 !important;\n  }\n  .mb-sm-0,\n  .my-sm-0 {\n    margin-bottom: 0 !important;\n  }\n  .ml-sm-0,\n  .mx-sm-0 {\n    margin-left: 0 !important;\n  }\n  .m-sm-1 {\n    margin: 0.25rem !important;\n  }\n  .mt-1,\n  .my-1 {\n    margin-top: 0.25rem !important;\n  }\n  .mr-sm-1,\n  .mx-sm-1 {\n    margin-right: 0.25rem !important;\n  }\n  .mb-sm-1,\n  .my-sm-1 {\n    margin-bottom: 0.25rem !important;\n  }\n  .ml-sm-1,\n  .mx-sm-1 {\n    margin-left: 0.25rem !important;\n  }\n  .m-sm-2 {\n    margin: 0.5rem !important;\n  }\n  .mt-sm-2,\n  .my-sm-2 {\n    margin-top: 0.5rem !important;\n  }\n  .mr-2,\n  .mx-2 {\n    margin-right: 0.5rem !important;\n  }\n  .mb-sm-2,\n  .my-sm-2 {\n    margin-bottom: 0.5rem !important;\n  }\n  .ml-sm-2,\n  .mx-sm-2 {\n    margin-left: 0.5rem !important;\n  }\n  .m-sm-3 {\n    margin: 1rem !important;\n  }\n  .mt-sm-3,\n  .my-sm-3 {\n    margin-top: 1rem !important;\n  }\n  .mr-sm-3,\n  .mx-sm-3 {\n    margin-right: 1rem !important;\n  }\n  .mb-sm-3,\n  .my-sm-3 {\n    margin-bottom: 1rem !important;\n  }\n  .ml-sm-3,\n  .mx-sm-3 {\n    margin-left: 1rem !important;\n  }\n  .m-sm-4 {\n    margin: 1.5rem !important;\n  }\n  .mt-sm-4,\n  .my-sm-4 {\n    margin-top: 1.5rem !important;\n  }\n  .mr-sm-4,\n  .mx-sm-4 {\n    margin-right: 1.5rem !important;\n  }\n  .mb-sm-4,\n  .my-sm-4 {\n    margin-bottom: 1.5rem !important;\n  }\n  .ml-sm-4,\n  .mx-sm-4 {\n    margin-left: 1.5rem !important;\n  }\n  .m-sm-5 {\n    margin: 3rem !important;\n  }\n  .mt-sm-5,\n  .my-sm-5 {\n    margin-top: 3rem !important;\n  }\n  .mr-sm-5,\n  .mx-sm-5 {\n    margin-right: 3rem !important;\n  }\n  .mb-sm-5,\n  .my-sm-5 {\n    margin-bottom: 3rem !important;\n  }\n  .ml-sm-5,\n  .mx-sm-5 {\n    margin-left: 3rem !important;\n  }\n}\n@media (max-width: 576px) {\n  .col-xs {\n    flex-basis: 0;\n    flex-grow: 1;\n    max-width: 100%;\n  }\n  .col-xs-auto {\n    flex: 0 0 auto;\n    width: auto;\n    max-width: none;\n  }\n  .col-xs-1 {\n    flex: 0 0 8.333333%;\n    max-width: 8.333333%;\n  }\n  .col-xs-2 {\n    flex: 0 0 16.666667%;\n    max-width: 16.666667%;\n  }\n  .col-xs-3 {\n    flex: 0 0 25%;\n    max-width: 25%;\n  }\n  .col-xs-4 {\n    flex: 0 0 33.333333%;\n    max-width: 33.333333%;\n  }\n  .col-xs-5 {\n    flex: 0 0 41.666667%;\n    max-width: 41.666667%;\n  }\n  .col-xs-6 {\n    flex: 0 0 50%;\n    max-width: 50%;\n  }\n  .col-xs-7 {\n    flex: 0 0 58.333333%;\n    max-width: 58.333333%;\n  }\n  .col-xs-8 {\n    flex: 0 0 66.666667%;\n    max-width: 66.666667%;\n  }\n  .col-xs-9 {\n    flex: 0 0 75%;\n    max-width: 75%;\n  }\n  .col-xs-10 {\n    flex: 0 0 83.333333%;\n    max-width: 83.333333%;\n  }\n  .col-xs-11 {\n    flex: 0 0 91.666667%;\n    max-width: 91.666667%;\n  }\n  .col-xs-12 {\n    flex: 0 0 100%;\n    max-width: 100%;\n  }\n  .pr-xs-0 {\n    padding-right: 0 !important;\n  }\n  .pr-xs-1 {\n    padding-right: 0.25rem !important;\n  }\n  .order-xs-first {\n    order: -1;\n  }\n  .order-xs-last {\n    order: 13;\n  }\n  .order-xs-0 {\n    order: 0;\n  }\n  .order-xs-1 {\n    order: 1;\n  }\n  .order-xs-2 {\n    order: 2;\n  }\n  .order-xs-3 {\n    order: 3;\n  }\n  .order-xs-4 {\n    order: 4;\n  }\n  .order-xs-5 {\n    order: 5;\n  }\n  .order-xs-6 {\n    order: 6;\n  }\n  .order-xs-7 {\n    order: 7;\n  }\n  .order-xs-8 {\n    order: 8;\n  }\n  .order-xs-9 {\n    order: 9;\n  }\n  .order-xs-10 {\n    order: 10;\n  }\n  .order-xs-11 {\n    order: 11;\n  }\n  .order-xs-12 {\n    order: 12;\n  }\n  .offset-xs-0 {\n    margin-left: 0;\n  }\n  .offset-xs-1 {\n    margin-left: 8.33333%;\n  }\n  .offset-xs-2 {\n    margin-left: 16.66667%;\n  }\n  .offset-xs-3 {\n    margin-left: 25%;\n  }\n  .offset-xs-4 {\n    margin-left: 33.33333%;\n  }\n  .offset-xs-5 {\n    margin-left: 41.66667%;\n  }\n  .offset-xs-6 {\n    margin-left: 50%;\n  }\n  .offset-xs-7 {\n    margin-left: 58.33333%;\n  }\n  .offset-xs-8 {\n    margin-left: 66.66667%;\n  }\n  .offset-xs-9 {\n    margin-left: 75%;\n  }\n  .offset-xs-10 {\n    margin-left: 83.33333%;\n  }\n  .offset-xs-11 {\n    margin-left: 91.66667%;\n  }\n  .mb-xs-3,\n  .my-xs-3 {\n    margin-bottom: 1rem !important;\n  }\n  .mb-xs-2,\n  .my-xs-2 {\n    margin-bottom: 0.5rem !important;\n  }\n  .mb-xs-1,\n  .my-xs-1 {\n    margin-bottom: 0.25rem !important;\n  }\n  .mt-xs-0 {\n    margin-top: 0 !important;\n  }\n}\nhtml {\n  font-size: 62.5%;\n}\n\nbody {\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n  min-height: 100vh;\n  font-family: \"Open Sans\", sans-serif;\n  color: #212121;\n  font-weight: 400;\n  font-size: 1.6rem;\n  line-height: 1.2;\n  background-color: #efefef;\n}\nbody.no-scroll {\n  overflow-y: hidden;\n}\n\nmain {\n  padding: 40px 0;\n}\n@media screen and (max-width: 768px) {\n  main {\n    padding: 30px 0;\n  }\n}\n\nfooter {\n  margin-top: auto;\n}\n\n.hidden-title {\n  visibility: hidden;\n  height: 0;\n}\n\n.d-none {\n  display: none !important;\n}\n\n.burger {\n  display: none;\n  width: 3rem;\n  height: 2rem;\n  padding: 0;\n  font-size: 0;\n  color: transparent;\n  position: absolute;\n  top: 50%;\n  left: 1.5rem;\n  transform: translateY(-50%);\n  background: none;\n  border: none;\n}\n.burger::before, .burger::after, .burger span {\n  display: block;\n  width: 100%;\n  height: 2px;\n  background-color: #212121;\n  position: absolute;\n  left: 0;\n}\n.burger::before, .burger::after {\n  content: \"\";\n  transition: transform 0.2s linear;\n}\n.burger::before {\n  top: 0;\n}\n.burger::after {\n  bottom: 0;\n}\n.burger span {\n  top: 50%;\n  transform: translateY(-50%);\n  transition: opacity 0.2s linear;\n}\n.show-sidebar .burger span {\n  opacity: 0;\n}\n.show-sidebar .burger::before, .show-sidebar .burger::after {\n  top: 50%;\n}\n.show-sidebar .burger::before {\n  transform: rotate(45deg);\n}\n.show-sidebar .burger::after {\n  transform: rotate(-45deg);\n}\n@media screen and (max-width: 992px) {\n  .burger {\n    display: block;\n  }\n}\n\n.js-tab-content {\n  display: none;\n}\n.js-tab-content.active {\n  display: block;\n  animation: 0.5s linear appear;\n}\n@keyframes appear {\n  from {\n    transform: scale3d(0.95, 0.95, 1);\n    opacity: 0.5;\n  }\n  to {\n    transform: scale3d(1, 1, 1);\n    opacity: 1;\n  }\n}\n\n.logo {\n  max-width: 130px;\n}\n.logo img {\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n}\n@media screen and (max-width: 992px) {\n  .logo {\n    max-width: 120px;\n  }\n}\n@media screen and (max-width: 768px) {\n  .logo {\n    max-width: 100px;\n  }\n}\n\n.to-top {\n  cursor: pointer;\n  width: 30px;\n  height: 30px;\n  fill: #F9A825;\n  position: fixed;\n  right: 20px;\n  bottom: 100px;\n  opacity: 1;\n  visibility: visible;\n  transition: opacity 0.2s linear;\n}\n.to-top.hidden {\n  opacity: 0;\n  visibility: hidden;\n}\n\n.section {\n  padding: 40px 0;\n}\n@media screen and (max-width: 768px) {\n  .section {\n    padding: 14px 0;\n  }\n}\n.section--nopading {\n  padding: 0;\n}\n.section__title {\n  text-align: center;\n  font-family: \"Montserrat\", sans-serif;\n  font-weight: 500;\n  font-size: 46px;\n  margin-bottom: 14px;\n  text-shadow: -2px 2px 2px rgba(206, 89, 55, 0.4);\n}\n@media screen and (max-width: 768px) {\n  .section__title {\n    font-size: 40px;\n  }\n}\n@media screen and (max-width: 576px) {\n  .section__title {\n    font-size: 36px;\n  }\n}\n\n.card {\n  overflow: hidden;\n  box-shadow: -4px 4px 2px rgba(216, 216, 216, 0.75);\n  position: relative;\n  display: block;\n  border-radius: 8px;\n  width: 100%;\n  max-width: 460px;\n  margin: 0 auto;\n  background-color: #fff;\n}\n@media screen and (max-width: 576px) {\n  .card {\n    max-width: 360px;\n  }\n}\n.card__img {\n  height: 300px;\n  width: 100%;\n  overflow: hidden;\n}\n.card__img img {\n  width: 100%;\n  height: 100%;\n  object-fit: contain;\n  transition: transform 3s ease-in;\n}\n.card__img:hover img {\n  transform: scale(1.2);\n}\n.card__info {\n  padding: 12px 12px 16px 12px;\n}\n.card__main-info {\n  font-size: 20px;\n  font-weight: 500;\n}\n.card__beertype, .modal__beertype {\n  color: #8bc34a;\n  margin: 4px 0;\n  min-height: 48px;\n}\n.card__title {\n  font-size: 24px;\n  font-weight: 600;\n  font-family: \"Montserrat\", sans-serif;\n  min-height: 58px;\n}\n.card__title:hover {\n  text-decoration: underline;\n}\n.card__testimonial, .modal__testimonial {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  font-size: 15px;\n  margin: 6px -10px;\n  padding: 12px 0;\n  border-top: 1px dashed #90a4ae;\n  border-bottom: 1px dashed #90a4ae;\n}\n.card__test-item, .modal__test-item {\n  width: 33.3333%;\n  padding: 0 10px;\n}\n.card__test-value, .modal__test-value {\n  font-size: 20px;\n  font-weight: 600;\n  margin-top: 12px;\n  margin-bottom: 4px;\n}\n.card__test-progress, .modal__test-progress {\n  position: relative;\n  height: 8px;\n  background-color: #bbb;\n}\n.card__test-progress-value, .modal__test-progress-value {\n  position: absolute;\n  left: 0;\n  top: 0;\n  bottom: 0;\n  height: 100%;\n  background-color: #F9A825;\n}\n.card__price, .modal__price {\n  font-size: 34px;\n  line-height: 1;\n  font-weight: 600;\n  margin-top: 12px;\n}\n.card__price span, .modal__price span {\n  display: block;\n}\n.card__price span:last-child, .modal__price span:last-child {\n  font-size: 20px;\n  color: #90a4ae;\n}\n.card__price-wrapper, .modal__price-wrapper {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n}\n.card__cart, .modal__cart {\n  display: none;\n  cursor: pointer;\n  height: 48px;\n  width: 48px;\n  transition: fill 0.2s linear;\n}\n.card__cart:hover, .modal__cart:hover {\n  fill: #71a436;\n}\n.card__bottom {\n  padding-top: 12px;\n  text-align: right;\n}\n.card__details {\n  font-size: 22px;\n  font-weight: 600;\n  text-decoration: underline;\n  color: #8bc34a;\n}\n.card__details:hover {\n  text-decoration: none;\n}\n\n.filter {\n  display: none;\n  justify-content: space-between;\n  align-items: center;\n  font-size: 20px;\n  padding: 18px;\n  border: 1px solid #d7d7d7;\n  background-color: #ffffff;\n  margin-bottom: 20px;\n  border-radius: 8px;\n}\n@media screen and (max-width: 1200px) {\n  .filter {\n    font-size: 18px;\n    padding: 12px;\n  }\n}\n@media screen and (max-width: 768px) {\n  .filter {\n    flex-direction: column-reverse;\n    align-items: flex-start;\n  }\n}\n@media screen and (max-width: 576px) {\n  .filter {\n    font-size: 16px;\n    padding: 8px;\n  }\n}\n.filter__sort {\n  width: 35%;\n  display: flex;\n  align-items: center;\n  padding-right: 18px;\n  overflow: hidden;\n}\n@media screen and (max-width: 1440px) {\n  .filter__sort {\n    padding-right: 12px;\n  }\n}\n@media screen and (max-width: 992px) {\n  .filter__sort {\n    width: 50%;\n    padding-right: 12px;\n  }\n}\n@media screen and (max-width: 768px) {\n  .filter__sort {\n    width: 100%;\n  }\n}\n.filter__sort-by {\n  display: flex;\n  align-items: center;\n  user-select: none;\n}\n.filter__sort-direction {\n  cursor: pointer;\n  margin-right: 8px;\n}\n.filter__sort-direction svg {\n  padding-top: 4px;\n  width: 22px;\n  height: 22px;\n  cursor: pointer;\n  fill: #222;\n  transition: fill 0.2s linear;\n}\n.filter__sort-direction svg:hover {\n  fill: #8bc34a;\n}\n.filter__sort-direction.down svg:last-child {\n  display: none;\n}\n.filter__sort-direction.up svg:first-child {\n  display: none;\n}\n.filter__input {\n  width: 30%;\n  display: flex;\n  align-items: center;\n  border-left: 1px solid #90a4ae;\n  border-right: 1px solid #90a4ae;\n  background-color: transparent;\n  padding: 0 22px;\n  font-family: \"Roboto\", sans-serif;\n  color: #707070;\n  font-size: 15px;\n}\n@media screen and (max-width: 1200px) {\n  .filter__input {\n    padding: 0 12px;\n  }\n}\n@media screen and (max-width: 992px) {\n  .filter__input {\n    display: none;\n  }\n}\n.filter__input input {\n  width: 100%;\n  font-size: 20px;\n  padding-bottom: 4px;\n  margin-left: 12px;\n  border-bottom: 2px dashed #90a4ae;\n}\n.filter__input input:focus {\n  border-color: #8bc34a;\n}\n@media screen and (max-width: 1440px) {\n  .filter__input input {\n    font-size: 18px;\n    padding-bottom: 2px;\n    margin-left: 8px;\n  }\n}\n.filter__input svg {\n  width: 20px;\n  height: 20px;\n  cursor: pointer;\n  fill: #222;\n}\n@media screen and (max-width: 1200px) {\n  .filter__input svg {\n    width: 18px;\n    height: 18px;\n  }\n}\n.filter__filter {\n  display: flex;\n  align-items: center;\n  padding-left: 12px;\n  width: 35%;\n  user-select: none;\n  overflow: hidden;\n}\n@media screen and (max-width: 992px) {\n  .filter__filter {\n    width: 50%;\n    justify-content: flex-end;\n  }\n}\n@media screen and (max-width: 768px) {\n  .filter__filter {\n    width: 100%;\n    padding-left: 0;\n    margin-bottom: 14px;\n    justify-content: flex-start;\n  }\n}\n.filter__select {\n  padding: 4px 8px;\n  border: 2px solid #444;\n  border-radius: 8px;\n  font-size: 16px;\n  font-family: inherit;\n  margin-left: 8px;\n}\n@media screen and (max-width: 1200px) {\n  .filter__select {\n    font-size: 15px;\n    padding: 4px;\n  }\n}\n@media screen and (max-width: 768px) {\n  .filter__select {\n    padding: 2px 4px;\n  }\n}\n@media screen and (max-width: 576px) {\n  .filter__select {\n    padding: 1px 2px;\n    margin-left: 4px;\n  }\n}\n.filter__select:focus {\n  border-color: #8bc34a;\n}\n.filter__select:focus-visible {\n  border-color: #8bc34a;\n  outline: none;\n}\n\n.modal {\n  position: relative;\n  display: flex;\n  background-color: #fff;\n  width: 90%;\n  max-width: 1500px;\n  max-height: 80vh;\n  min-height: 60vh;\n  margin: 0 auto;\n  border-radius: 12px;\n  overflow: hidden;\n}\n@media screen and (max-width: 992px) {\n  .modal {\n    flex-direction: column;\n    max-height: 90vh;\n  }\n}\n@media screen and (max-width: 576px) {\n  .modal {\n    width: 96%;\n  }\n}\n.modal__close {\n  z-index: 111;\n  cursor: pointer;\n  width: 30px;\n  height: 30px;\n  position: absolute;\n  top: 10px;\n  right: 10px;\n  fill: #90a4ae;\n  transition: fill 0.2s linear;\n}\n.modal__close:hover {\n  fill: #F9A825;\n}\n.modal__angle {\n  cursor: pointer;\n  position: absolute;\n  top: 50%;\n  transform: translateY(-50);\n  background-color: #bbb;\n  padding: 6px 4px;\n  fill: rgba(255, 255, 255, 0.7);\n  width: 28px;\n  transition: fill 0.2s linear, background-color 0.2s linear;\n}\n.modal__angle--left {\n  left: 8px;\n  border-radius: 10px 0 0 10px;\n}\n.modal__angle--right {\n  right: 8px;\n  border-radius: 0 10px 10px 0;\n}\n.modal__angle:hover {\n  background-color: #999;\n  fill: #fff;\n}\n.modal__left {\n  position: relative;\n  width: 540px;\n  min-height: 100%;\n  overflow: hidden;\n}\n@media screen and (max-width: 992px) {\n  .modal__left {\n    width: 100%;\n    border-radius: 0;\n    min-height: 360px;\n    height: 360px;\n    margin: 0 auto;\n  }\n}\n@media screen and (max-width: 576px) {\n  .modal__left {\n    min-height: 280px;\n    height: 280px;\n  }\n}\n.modal__left .siema {\n  height: 100%;\n}\n.modal__left .siema div {\n  height: 100%;\n}\n.modal__img {\n  width: 100%;\n  height: 100%;\n}\n.modal__img img {\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n  object-position: center center;\n}\n@media screen and (max-width: 992px) {\n  .modal__img img {\n    object-fit: contain;\n  }\n}\n.modal__right {\n  width: calc(100% - 540px);\n  padding: 20px;\n  max-height: 100%;\n  overflow-y: auto;\n  scrollbar-width: thin;\n  scrollbar-color: #ccc #71a436;\n  /* Работает в Chrome, Edge и Safari */\n}\n.modal__right::-webkit-scrollbar {\n  width: 8px;\n}\n.modal__right::-webkit-scrollbar-track {\n  background: #ccc;\n  padding: 4px 0;\n}\n.modal__right::-webkit-scrollbar-thumb {\n  background-color: #71a436;\n  border-radius: 28px;\n}\n@media screen and (max-width: 992px) {\n  .modal__right {\n    width: 100%;\n  }\n}\n@media screen and (max-width: 576px) {\n  .modal__right {\n    padding: 14px 10px;\n  }\n}\n.modal__title {\n  font-size: 36px;\n  font-family: \"Montserrat\", sans-serif;\n  font-weight: 600;\n  padding-right: 16px;\n}\n@media screen and (max-width: 576px) {\n  .modal__title {\n    font-size: 30px;\n  }\n}\n.modal__beertype {\n  font-size: 20px;\n  min-height: 1px;\n}\n@media screen and (max-width: 576px) {\n  .modal__beertype {\n    font-size: 18px;\n  }\n}\n.modal__price-wrapper {\n  margin: 10px 0;\n}\n.modal__price-wrapper .btn {\n  display: none;\n}\n.modal__testimonial {\n  margin-bottom: 12px;\n}\n.modal__test-title {\n  font-size: 20px;\n}\n@media screen and (max-width: 576px) {\n  .modal__test-title {\n    font-size: 16px;\n  }\n}\n.modal__test-value {\n  font-size: 22px;\n}\n@media screen and (max-width: 576px) {\n  .modal__test-value {\n    font-size: 18px;\n  }\n}\n.modal__description h1, .modal__description h2, .modal__description h3, .modal__description h4, .modal__description h5, .modal__description h6, .modal__description p, .modal__description pre, .modal__description div, .modal__description table, .modal__description iframe, .modal__description blockquote, .modal__description dl, .modal__description ul, .modal__description ol {\n  margin-bottom: 8px;\n}\n.modal .someclass {\n  background-image: url(\"../../img/lemonade-m.jpg\"), url(\"../../img/lemonade-m1.jpg\"), url(\"../../img/cidre-logo-m.png\"), url(\"../../img/cidr-strawberry-m.jpg\");\n}\n.modal .someclass1 {\n  background-image: url(\"../../img/cidre-logo-m.jpg\"), url(\"../../img/cidre-manho-persyk.jpg\"), url(\"../../img/cidr-cactus.jpg\"), url(\"../../img/cidre-medusa.jpg\"), url(\"../../img/bocal.jpg\"), url(\"../../img/chips.jpg\"), url(\"../../img/chips-m.jpg\"), url(\"../../img/limonad.jpg\"), url(\"../../img/cidre-logo.png\");\n}\n\n.btn {\n  font-family: \"Montserrat\", sans-serif;\n  padding: 10px 20px;\n  font-size: 20px;\n  font-weight: 600;\n  border-radius: 8px;\n  border: 2px solid #8bc34a;\n  background-color: transparent;\n  transition: color 0.2s linear, background-color 0.2s linear;\n}\n.btn:hover {\n  color: #fff;\n  background-color: #8bc34a;\n}\n\n.header {\n  padding: 10px 0;\n  font-size: 20px;\n  background-color: #fff;\n  box-shadow: -10px 10px 10px rgba(0, 0, 0, 0.3);\n  border-radius: 0 0 10px 10px;\n}\n.header__inner {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  font-size: 22px;\n  font-family: \"Montserrat\", sans-serif;\n}\n@media screen and (max-width: 992px) {\n  .header__inner {\n    font-size: 20px;\n  }\n}\n@media screen and (max-width: 768px) {\n  .header__inner {\n    font-size: 18px;\n  }\n}\n.header__info {\n  max-width: calc(80% - 130px);\n  padding: 0 14px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  overflow: hidden;\n}\n@media screen and (max-width: 1200px) {\n  .header__info {\n    flex-direction: column;\n  }\n}\n@media screen and (max-width: 992px) {\n  .header__info {\n    max-width: calc(78% - 120px);\n  }\n}\n@media screen and (max-width: 768px) {\n  .header__info {\n    max-width: calc(78% - 100px);\n    align-items: start;\n    padding: 0 8px;\n  }\n}\n@media screen and (max-width: 576px) {\n  .header__info {\n    max-width: 100%;\n    padding-right: 0;\n  }\n}\n.header__icon {\n  height: 24px;\n  margin-right: 6px;\n  fill: #333;\n  flex-shrink: 0;\n  transition: fill 0.2s linear;\n}\n@media screen and (max-width: 992px) {\n  .header__icon {\n    height: 22px;\n  }\n}\n@media screen and (max-width: 768px) {\n  .header__icon {\n    height: 20px;\n  }\n}\n.header__item {\n  transition: color 0.2s linear;\n  padding-right: 20px;\n  max-width: 50%;\n}\n@media screen and (max-width: 1200px) {\n  .header__item {\n    padding-right: 0;\n    max-width: 100%;\n  }\n}\n@media screen and (max-width: 1200px) {\n  .header__item:first-child {\n    margin-bottom: 18px;\n  }\n}\n@media screen and (max-width: 768px) {\n  .header__item:first-child {\n    margin-bottom: 12px;\n  }\n}\n.header__item:last-child {\n  padding-right: 0;\n  padding-left: 20px;\n  border-left: 1px dashed #333;\n  max-width: 60%;\n}\n@media screen and (max-width: 1200px) {\n  .header__item:last-child {\n    border-left: none;\n    padding-left: 0;\n    max-width: 100%;\n  }\n}\n.header__item:hover {\n  color: #8bc34a;\n}\n.header__item:hover svg {\n  fill: #8bc34a;\n}\n.footer .header__item:hover {\n  color: #ccc;\n}\n.footer .header__item:hover svg {\n  fill: #ccc;\n}\n.header__time {\n  max-width: 20%;\n}\n@media screen and (max-width: 992px) {\n  .header__time {\n    max-width: 22%;\n  }\n}\n@media screen and (max-width: 576px) {\n  .header__time {\n    display: none;\n  }\n}\n\n.categories {\n  margin: 0 -15px;\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: center;\n  overflow: hidden;\n  padding: 10px 20px 10px 20px;\n}\n@media screen and (max-width: 992px) {\n  .categories {\n    max-width: 90%;\n    margin: 0 auto;\n  }\n}\n@media screen and (max-width: 768px) {\n  .categories {\n    max-width: 100%;\n  }\n}\n.categories__item {\n  padding: 20px;\n  width: 50%;\n  margin: 0 auto;\n}\n@media screen and (max-width: 1200px) {\n  .categories__item {\n    padding: 10px;\n  }\n}\n@media screen and (max-width: 768px) {\n  .categories__item {\n    width: 100%;\n  }\n}\n\n.cat-card {\n  display: flex;\n  flex-direction: column;\n  width: 100%;\n  height: 312px;\n  color: #fff;\n  background-color: #8bc34a;\n  border-radius: 10px;\n  box-shadow: -6px 6px 6px rgba(0, 0, 0, 0.2);\n  overflow: hidden;\n  cursor: pointer;\n  transition: scale 0.2s cubic-bezier(0.32, 0.08, 0.24, 1), box-shadow 0.2s cubic-bezier(0.32, 0.08, 0.24, 1), scale 0.2s cubic-bezier(0.32, 0.08, 0.24, 1), color 0.2s cubic-bezier(0.32, 0.08, 0.24, 1);\n}\n@media screen and (max-width: 768px) {\n  .cat-card {\n    margin: 0 auto;\n  }\n}\n.cat-card:hover {\n  scale: 1.05;\n  box-shadow: -10px 10px 10px rgba(0, 0, 0, 0.18);\n}\n.cat-card.active {\n  box-shadow: -10px 10px 10px rgba(0, 0, 0, 0.18);\n  text-decoration: underline;\n}\n.cat-card.active svg {\n  padding: 10px 0;\n  fill: rgba(249, 168, 37, 0.7);\n}\n@media screen and (max-width: 1200px) {\n  .cat-card {\n    height: 250px;\n  }\n}\n@media screen and (max-width: 992px) {\n  .cat-card {\n    height: 220px;\n  }\n}\n@media screen and (max-width: 768px) {\n  .cat-card {\n    flex-direction: row;\n    align-items: center;\n    max-width: 90%;\n    width: 80%;\n    height: 100px;\n  }\n}\n@media screen and (max-width: 576px) {\n  .cat-card {\n    max-width: 100%;\n    width: 100%;\n  }\n}\n.cat-card svg {\n  height: 100%;\n  width: 37%;\n  padding: 10px 0;\n  margin: 0 auto;\n  fill: rgba(0, 0, 0, 0.7);\n  transition: fill 0.2s linear;\n}\n@media screen and (max-width: 1200px) {\n  .cat-card svg {\n    width: 33%;\n  }\n}\n@media screen and (max-width: 768px) {\n  .cat-card svg {\n    height: 75%;\n    width: 20%;\n    margin: 0 14px;\n  }\n}\n.cat-card__bottom {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  text-align: center;\n  font-family: \"Montserrat\", sans-serif;\n  text-transform: uppercase;\n  padding: 8px;\n  background-color: rgba(0, 0, 0, 0.2);\n  border-radius: 0 0 16px 16px;\n  min-height: 98.4px;\n  overflow: hidden;\n}\n@media screen and (max-width: 1200px) {\n  .cat-card__bottom {\n    min-height: 68px;\n  }\n}\n@media screen and (max-width: 1200px) {\n  .cat-card__bottom {\n    min-height: 63.4px;\n  }\n}\n@media screen and (max-width: 768px) {\n  .cat-card__bottom {\n    padding-left: 0;\n    min-height: 0;\n    background: none;\n  }\n}\n.cat-card h2, .cat-card h3, .cat-card h4, .cat-card h5 {\n  font-size: 26px;\n  text-align: center;\n  padding: 10px;\n}\n@media screen and (max-width: 1200px) {\n  .cat-card h2, .cat-card h3, .cat-card h4, .cat-card h5 {\n    font-size: 22px;\n  }\n}\n@media screen and (max-width: 992px) {\n  .cat-card h2, .cat-card h3, .cat-card h4, .cat-card h5 {\n    font-size: 20px;\n  }\n}\n@media screen and (max-width: 768px) {\n  .cat-card h2, .cat-card h3, .cat-card h4, .cat-card h5 {\n    text-align: left;\n  }\n}\n\n.main__info {\n  display: flex;\n  flex-wrap: wrap;\n  margin: 0 -10px;\n}\n.main__col {\n  display: flex;\n  width: 33.3333%;\n  padding: 0 10px;\n}\n.main__col:not(:nth-child(-n+3)) {\n  margin-top: 20px;\n}\n@media screen and (max-width: 992px) {\n  .main__col {\n    width: 50%;\n  }\n  .main__col:not(:nth-child(-n+2)) {\n    margin-top: 20px;\n  }\n}\n@media screen and (max-width: 576px) {\n  .main__col {\n    width: 100%;\n  }\n  .main__col:not(:nth-child(-n+1)) {\n    margin-top: 20px;\n  }\n}\n\n.footer {\n  padding: 34px 0;\n  font-size: 20px;\n  font-family: \"Montserrat\", sans-serif;\n  font-weight: 600;\n  background: linear-gradient(181deg, rgba(255, 255, 255, 0.95) 0%, rgba(67, 160, 71, 0.6306897759) 100%);\n  border-radius: 10px 10px 0 0;\n}\n.footer .container {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\n@media screen and (max-width: 576px) {\n  .footer .container {\n    justify-content: center;\n  }\n}\n.footer__item {\n  transition: color 0.2s linear;\n}\n@media screen and (max-width: 576px) {\n  .footer__item {\n    display: none;\n  }\n}\n.footer__item:hover {\n  color: #000;\n}","// 1440px - widescreen\r\n// 1200px - laptop\r\n// 992px - tablet\r\n// 768px - mobile-large\r\n// 576px - mobile\r\n\r\n@mixin widescreen {\r\n  @media screen and (max-width: $widescreen) {\r\n    @content;\r\n  }\r\n}\r\n@mixin laptop {\r\n  @media screen and (max-width: $laptop) {\r\n    @content;\r\n  }\r\n}\r\n@mixin tablet {\r\n  @media screen and (max-width: $tablet) {\r\n    @content;\r\n  }\r\n}\r\n@mixin mobile-large {\r\n  @media screen and (max-width: $mobile-large) {\r\n    @content;\r\n  }\r\n}\r\n@mixin mobile {\r\n  @media screen and (max-width: $mobile) {\r\n    @content;\r\n  }\r\n}\r\n\r\n.bg-radial {\r\n  border-radius: 16px;\r\n  //background-color: rgba(248,248,252,.85);\r\n  backdrop-filter: blur(15px) saturate(86%);\r\n  background: radial-gradient(circle at 100% 0,hsla(0,0%,100%,.6) 0,hsla(0,0%,96.1%,.13) 183%);\r\n}\r\n\r\n.flex-items-center {\r\n  display: flex;\r\n  align-items: center;\r\n}\r\n\r\n.text-nowrap {\r\n  white-space: nowrap;\r\n  overflow: hidden;\r\n  text-overflow: ellipsis;\r\n}","/* http://meyerweb.com/eric/tools/css/reset/\r\n   v2.0 | 20110126\r\n   License: none (public domain)\r\n*/\r\n\r\nhtml, body, div, span, applet, object, iframe,\r\nh1, h2, h3, h4, h5, h6, p, blockquote, pre,\r\na, abbr, acronym, address, big, cite, code,\r\ndel, dfn, em, img, ins, kbd, q, s, samp,\r\nsmall, strike, strong, sub, sup, tt, var,\r\nb, u, i, center,\r\ndl, dt, dd, ol, ul, li,\r\nfieldset, form, label, legend,\r\ntable, caption, tbody, tfoot, thead, tr, th, td,\r\narticle, aside, canvas, details, embed,\r\nfigure, figcaption, footer, header, hgroup,\r\nmenu, nav, output, ruby, section, summary,\r\ntime, mark, audio, video {\r\n  margin: 0;\r\n  padding: 0;\r\n  border: 0;\r\n  outline: none;\r\n  font-size: 100%;\r\n  font: inherit;\r\n  vertical-align: baseline;\r\n}\r\n/* HTML5 display-role reset for older browsers */\r\narticle, aside, details, figcaption, figure,\r\nfooter, header, hgroup, menu, nav, section {\r\n  display: block;\r\n}\r\n*, *::before, *::after {\r\n  box-sizing: border-box;\r\n}\r\na {\r\n  color: inherit;\r\n  text-decoration: none;\r\n  cursor: pointer;\r\n  display: inline-block;\r\n}\r\nimg {\r\n  max-width: 100%;\r\n  height: auto;\r\n}\r\nol, ul {\r\n  list-style: none;\r\n}\r\nblockquote, q {\r\n  quotes: none;\r\n}\r\nblockquote:before, blockquote:after,\r\nq:before, q:after {\r\n  content: '';\r\n}\r\ninput, textarea, button {\r\n  outline: none;\r\n  border: none;\r\n}\r\ntextarea {\r\n  resize: vertical;\r\n}\r\nbutton {\r\n  cursor: pointer;\r\n}\r\ntable {\r\n  border-collapse: collapse;\r\n  border-spacing: 0;\r\n}",".container {\r\n  padding: 0 15px;\r\n  max-width: 1470px;\r\n  margin: 0 auto;\r\n\r\n  &--header {\r\n    max-width: 1430px;\r\n    padding: 0 15px;\r\n    margin: 0 auto;\r\n\r\n    @include laptop {\r\n      max-width: 100%;\r\n    }\r\n\r\n    @include tablet {\r\n      max-width: 100%;\r\n    }\r\n    @include mobile-large {\r\n      max-width: 100%;\r\n    }\r\n    @include mobile {\r\n      max-width: 100%;\r\n      padding: 0 10px;\r\n    }\r\n  }\r\n\r\n  @include widescreen {\r\n    max-width: 1230px;\r\n  }\r\n\r\n  @include laptop {\r\n    max-width: 960px;\r\n  }\r\n  @include tablet {\r\n    max-width: 720px;\r\n  }\r\n  @include mobile-large {\r\n    max-width: 540px;\r\n  }\r\n  @include mobile {\r\n    max-width: 100%;\r\n    padding: 0 10px;\r\n  }\r\n}\r\n\r\n.container-fluid {\r\n  width: 100%;\r\n  padding: 0 15px;\r\n  @include mobile {\r\n    padding: 0 10px;\r\n  }\r\n}\r\n\r\n.row {\r\n  display: flex;\r\n  flex-wrap: wrap;\r\n  margin-right: -15px;\r\n  margin-left: -15px;\r\n  @include mobile {\r\n    margin-right: -10px;\r\n    margin-left: -10px;\r\n  }\r\n}\r\n\r\n.no-gutters {\r\n  margin-right: 0;\r\n  margin-left: 0; }\r\n.no-gutters > .col,\r\n.no-gutters > [class*=\"col-\"] {\r\n  padding-right: 0;\r\n  padding-left: 0; }\r\n\r\n.col-1, .col-2, .col-3, .col-4, .col-5, .col-6, .col-7, .col-8, .col-9, .col-10, .col-11, .col-12, .col,\r\n.col-auto, .col-sm-1, .col-sm-2, .col-sm-3, .col-sm-4, .col-sm-5, .col-sm-6, .col-sm-7, .col-sm-8, .col-sm-9, .col-sm-10, .col-sm-11, .col-sm-12, .col-sm,\r\n.col-sm-auto, .col-md-1, .col-md-2, .col-md-3, .col-md-4, .col-md-5, .col-md-6, .col-md-7, .col-md-8, .col-md-9, .col-md-10, .col-md-11, .col-md-12, .col-md,\r\n.col-md-auto, .col-lg-1, .col-lg-2, .col-lg-3, .col-lg-4, .col-lg-5, .col-lg-6, .col-lg-7, .col-lg-8, .col-lg-9, .col-lg-10, .col-lg-11, .col-lg-12, .col-lg,\r\n.col-lg-auto, .col-xs-1, .col-xs-2, .col-xs-3, .col-xs-4, .col-xs-5, .col-xs-6, .col-xs-7, .col-xs-8, .col-xs-9, .col-xs-10, .col-xs-11, .col-xs-12, .col-xs,\r\n.col-xs-auto {\r\n  width: 100%;\r\n  max-width: 100%;\r\n  min-height: 1px;\r\n  flex-shrink: 0;\r\n  padding-right: 15px;\r\n  padding-left: 15px;\r\n}\r\n\r\n.col {\r\n  flex-basis: 0;\r\n  flex-grow: 1;\r\n  max-width: 100%;\r\n}\r\n\r\n.col-auto {\r\n  flex: 0 0 auto;\r\n  width: auto;\r\n  max-width: none;\r\n}\r\n\r\n.col-1 {\r\n  flex: 0 0 8.333333%;\r\n  max-width: 8.333333%;\r\n}\r\n\r\n.col-2 {\r\n  flex: 0 0 16.666667%;\r\n  max-width: 16.666667%;\r\n}\r\n\r\n.col-3 {\r\n  flex: 0 0 25%;\r\n  max-width: 25%;\r\n}\r\n\r\n.col-4 {\r\n  flex: 0 0 33.333333%;\r\n  max-width: 33.333333%;\r\n}\r\n\r\n.col-5 {\r\n  flex: 0 0 41.666667%;\r\n  max-width: 41.666667%;\r\n}\r\n\r\n.col-6 {\r\n  flex: 0 0 50%;\r\n  max-width: 50%;\r\n}\r\n\r\n.col-7 {\r\n  flex: 0 0 58.333333%;\r\n  max-width: 58.333333%;\r\n}\r\n\r\n.col-8 {\r\n  flex: 0 0 66.666667%;\r\n  max-width: 66.666667%;\r\n}\r\n\r\n.col-9 {\r\n  flex: 0 0 75%;\r\n  max-width: 75%;\r\n}\r\n\r\n.col-10 {\r\n  flex: 0 0 83.333333%;\r\n  max-width: 83.333333%;\r\n}\r\n\r\n.col-11 {\r\n  flex: 0 0 91.666667%;\r\n  max-width: 91.666667%;\r\n}\r\n\r\n.col-12 {\r\n  flex: 0 0 100%;\r\n  max-width: 100%;\r\n}\r\n\r\n.order-first {\r\n  order: -1;\r\n}\r\n\r\n.order-last {\r\n  order: 13;\r\n}\r\n\r\n.order-0 {\r\n  order: 0;\r\n}\r\n\r\n.order-1 {\r\n  order: 1;\r\n}\r\n\r\n.order-2 {\r\n  order: 2;\r\n}\r\n\r\n.order-3 {\r\n  order: 3;\r\n}\r\n\r\n.order-4 {\r\n  order: 4;\r\n}\r\n\r\n.order-5 {\r\n  order: 5;\r\n}\r\n\r\n.order-6 {\r\n  order: 6;\r\n}\r\n\r\n.order-7 {\r\n  order: 7;\r\n}\r\n\r\n.order-8 {\r\n  order: 8;\r\n}\r\n\r\n.order-9 {\r\n  order: 9;\r\n}\r\n\r\n.order-10 {\r\n  order: 10;\r\n}\r\n\r\n.order-11 {\r\n  order: 11;\r\n}\r\n\r\n.order-12 {\r\n  order: 12;\r\n}\r\n.offset-1 {\r\n  margin-left: 8.33333%;\r\n}\r\n\r\n.offset-2 {\r\n  margin-left: 16.66667%;\r\n}\r\n\r\n.offset-3 {\r\n  margin-left: 25%;\r\n}\r\n\r\n.offset-4 {\r\n  margin-left: 33.33333%;\r\n}\r\n\r\n.offset-5 {\r\n  margin-left: 41.66667%;\r\n}\r\n\r\n.offset-6 {\r\n  margin-left: 50%;\r\n}\r\n\r\n.offset-7 {\r\n  margin-left: 58.33333%;\r\n}\r\n\r\n.offset-8 {\r\n  margin-left: 66.66667%;\r\n}\r\n\r\n.offset-9 {\r\n  margin-left: 75%;\r\n}\r\n\r\n.offset-10 {\r\n  margin-left: 83.33333%;\r\n}\r\n\r\n.offset-11 {\r\n  margin-left: 91.66667%;\r\n}\r\n.m-0 {\r\n  margin: 0 !important;\r\n}\r\n\r\n.mt-0,\r\n.my-0 {\r\n  margin-top: 0 !important;\r\n}\r\n\r\n.mr-0,\r\n.mx-0 {\r\n  margin-right: 0 !important;\r\n}\r\n\r\n.mb-0,\r\n.my-0 {\r\n  margin-bottom: 0 !important;\r\n}\r\n\r\n.ml-0,\r\n.mx-0 {\r\n  margin-left: 0 !important;\r\n}\r\n\r\n.m-1 {\r\n  margin: 0.25rem !important;\r\n}\r\n\r\n.mt-1,\r\n.my-1 {\r\n  margin-top: 0.25rem !important;\r\n}\r\n\r\n.mr-1,\r\n.mx-1 {\r\n  margin-right: 0.25rem !important;\r\n}\r\n\r\n.mb-1,\r\n.my-1 {\r\n  margin-bottom: 0.25rem !important;\r\n}\r\n\r\n.ml-1,\r\n.mx-1 {\r\n  margin-left: 0.25rem !important;\r\n}\r\n\r\n.m-2 {\r\n  margin: 0.5rem !important;\r\n}\r\n\r\n.mt-2,\r\n.my-2 {\r\n  margin-top: 0.5rem !important;\r\n}\r\n\r\n.mr-2,\r\n.mx-2 {\r\n  margin-right: 0.5rem !important;\r\n}\r\n\r\n.mb-2,\r\n.my-2 {\r\n  margin-bottom: 0.5rem !important;\r\n}\r\n\r\n.ml-2,\r\n.mx-2 {\r\n  margin-left: 0.5rem !important;\r\n}\r\n\r\n.m-3 {\r\n  margin: 1rem !important;\r\n}\r\n\r\n.mt-3,\r\n.my-3 {\r\n  margin-top: 1rem !important;\r\n}\r\n\r\n.mr-3,\r\n.mx-3 {\r\n  margin-right: 1rem !important;\r\n}\r\n\r\n.mb-3,\r\n.my-3 {\r\n  margin-bottom: 1rem !important;\r\n}\r\n\r\n.ml-3,\r\n.mx-3 {\r\n  margin-left: 1rem !important;\r\n}\r\n\r\n.m-4 {\r\n  margin: 1.5rem !important;\r\n}\r\n\r\n.mt-4,\r\n.my-4 {\r\n  margin-top: 1.5rem !important;\r\n}\r\n\r\n.mr-4,\r\n.mx-4 {\r\n  margin-right: 1.5rem !important;\r\n}\r\n\r\n.mb-4,\r\n.my-4 {\r\n  margin-bottom: 1.5rem !important;\r\n}\r\n\r\n.ml-4,\r\n.mx-4 {\r\n  margin-left: 1.5rem !important;\r\n}\r\n\r\n.m-5 {\r\n  margin: 3rem !important;\r\n}\r\n\r\n.mt-5,\r\n.my-5 {\r\n  margin-top: 3rem !important;\r\n}\r\n\r\n.mr-5,\r\n.mx-5 {\r\n  margin-right: 3rem !important;\r\n}\r\n\r\n.mb-5,\r\n.my-5 {\r\n  margin-bottom: 3rem !important;\r\n}\r\n\r\n.ml-5,\r\n.mx-5 {\r\n  margin-left: 3rem !important;\r\n}\r\n\r\n.mt-auto {\r\n  margin-top: auto;\r\n}\r\n\r\n.mb-auto {\r\n  margin-bottom: auto;\r\n}\r\n\r\n.ml-auto {\r\n  margin-left: auto;\r\n}\r\n\r\n.mr-auto {\r\n  margin-right: auto;\r\n}\r\n\r\n.mx-auto {\r\n  margin-left: auto;\r\n  margin-right: auto;\r\n}\r\n\r\n.my-auto {\r\n  margin-top: auto;\r\n  margin-bottom: auto;\r\n}\r\n\r\n@include mobile-large {\r\n  .mx-sm-auto {\r\n    margin-left: auto;\r\n    margin-right: auto;\r\n  }\r\n\r\n}\r\n\r\n//padding start\r\n.p-0 {\r\n  padding: 0 !important;\r\n}\r\n\r\n.pt-0,\r\n.py-0 {\r\n  padding-top: 0 !important;\r\n}\r\n\r\n.pr-0,\r\n.px-0 {\r\n  padding-right: 0 !important;\r\n}\r\n\r\n.pb-0,\r\n.py-0 {\r\n  padding-bottom: 0 !important;\r\n}\r\n\r\n.pl-0,\r\n.px-0 {\r\n  padding-left: 0 !important;\r\n}\r\n\r\n.p-1 {\r\n  padding: 0.25rem !important;\r\n}\r\n\r\n.pt-1,\r\n.py-1 {\r\n  padding-top: 0.25rem !important;\r\n}\r\n\r\n.pr-1,\r\n.px-1 {\r\n  padding-right: 0.25rem !important;\r\n}\r\n\r\n.pb-1,\r\n.py-1 {\r\n  padding-bottom: 0.25rem !important;\r\n}\r\n\r\n.pl-1,\r\n.px-1 {\r\n  padding-left: 0.25rem !important;\r\n}\r\n\r\n.p-2 {\r\n  padding: 0.5rem !important;\r\n}\r\n\r\n.pt-2,\r\n.py-2 {\r\n  padding-top: 0.5rem !important;\r\n}\r\n\r\n.pr-2,\r\n.px-2 {\r\n  padding-right: 0.5rem !important;\r\n}\r\n\r\n.pb-2,\r\n.py-2 {\r\n  padding-bottom: 0.5rem !important;\r\n}\r\n\r\n.pl-2,\r\n.px-2 {\r\n  padding-left: 0.5rem !important;\r\n}\r\n\r\n.p-3 {\r\n  padding: 1rem !important;\r\n}\r\n\r\n.pt-3,\r\n.py-3 {\r\n  padding-top: 1rem !important;\r\n}\r\n\r\n.pr-3,\r\n.px-3 {\r\n  padding-right: 1rem !important;\r\n}\r\n\r\n.pb-3,\r\n.py-3 {\r\n  padding-bottom: 1rem !important;\r\n}\r\n\r\n.pl-3,\r\n.px-3 {\r\n  padding-left: 1rem !important;\r\n}\r\n\r\n.p-4 {\r\n  padding: 1.5rem !important;\r\n}\r\n\r\n.pt-4,\r\n.py-4 {\r\n  padding-top: 1.5rem !important;\r\n}\r\n\r\n.pr-4,\r\n.px-4 {\r\n  padding-right: 1.5rem !important;\r\n}\r\n\r\n.pb-4,\r\n.py-4 {\r\n  padding-bottom: 1.5rem !important;\r\n}\r\n\r\n.pl-4,\r\n.px-4 {\r\n  padding-left: 1.5rem !important;\r\n}\r\n\r\n.p-5 {\r\n  padding: 3rem !important;\r\n}\r\n\r\n.pt-5,\r\n.py-5 {\r\n  padding-top: 3rem !important;\r\n}\r\n\r\n.pr-5,\r\n.px-5 {\r\n  padding-right: 3rem !important;\r\n}\r\n\r\n.pb-5,\r\n.py-5 {\r\n  padding-bottom: 3rem !important;\r\n}\r\n\r\n.pl-5,\r\n.px-5 {\r\n  padding-left: 3rem !important;\r\n}\r\n//padding end\r\n\r\n@media (max-width: $laptop) {\r\n  .col-lg {\r\n    flex-basis: 0;\r\n    flex-grow: 1;\r\n    max-width: 100%;\r\n  }\r\n  .col-lg-auto {\r\n    flex: 0 0 auto;\r\n    width: auto;\r\n    max-width: none;\r\n  }\r\n  .col-lg-1 {\r\n    flex: 0 0 8.333333%;\r\n    max-width: 8.333333%;\r\n  }\r\n  .col-lg-2 {\r\n    flex: 0 0 16.666667%;\r\n    max-width: 16.666667%;\r\n  }\r\n  .col-lg-3 {\r\n    flex: 0 0 25%;\r\n    max-width: 25%;\r\n  }\r\n  .col-lg-4 {\r\n    flex: 0 0 33.333333%;\r\n    max-width: 33.333333%;\r\n  }\r\n  .col-lg-5 {\r\n    flex: 0 0 41.666667%;\r\n    max-width: 41.666667%;\r\n  }\r\n  .col-lg-6 {\r\n    flex: 0 0 50%;\r\n    max-width: 50%;\r\n  }\r\n  .col-lg-7 {\r\n    flex: 0 0 58.333333%;\r\n    max-width: 58.333333%;\r\n  }\r\n  .col-lg-8 {\r\n    flex: 0 0 66.666667%;\r\n    max-width: 66.666667%;\r\n  }\r\n  .col-lg-9 {\r\n    flex: 0 0 75%;\r\n    max-width: 75%;\r\n  }\r\n  .col-lg-10 {\r\n    flex: 0 0 83.333333%;\r\n    max-width: 83.333333%;\r\n  }\r\n  .col-lg-11 {\r\n    flex: 0 0 91.666667%;\r\n    max-width: 91.666667%;\r\n  }\r\n  .col-lg-12 {\r\n    flex: 0 0 100%;\r\n    max-width: 100%;\r\n  }\r\n  .order-lg-first {\r\n    order: -1;\r\n  }\r\n  .order-lg-last {\r\n    order: 13;\r\n  }\r\n  .order-lg-0 {\r\n    order: 0;\r\n  }\r\n  .order-lg-1 {\r\n    order: 1;\r\n  }\r\n  .order-lg-2 {\r\n    order: 2;\r\n  }\r\n  .order-lg-3 {\r\n    order: 3;\r\n  }\r\n  .order-lg-4 {\r\n    order: 4;\r\n  }\r\n  .order-lg-5 {\r\n    order: 5;\r\n  }\r\n  .order-lg-6 {\r\n    order: 6;\r\n  }\r\n  .order-lg-7 {\r\n    order: 7;\r\n  }\r\n  .order-lg-8 {\r\n    order: 8;\r\n  }\r\n  .order-lg-9 {\r\n    order: 9;\r\n  }\r\n  .order-lg-10 {\r\n    order: 10;\r\n  }\r\n  .order-lg-11 {\r\n    order: 11;\r\n  }\r\n  .order-lg-12 {\r\n    order: 12;\r\n  }\r\n\r\n  .offset-lg-1 {\r\n    margin-left: 8.33333%;\r\n  }\r\n\r\n  .offset-lg-2 {\r\n    margin-left: 16.66667%;\r\n  }\r\n\r\n  .offset-lg-3 {\r\n    margin-left: 25%;\r\n  }\r\n\r\n  .offset-lg-4 {\r\n    margin-left: 33.33333%;\r\n  }\r\n\r\n  .offset-lg-5 {\r\n    margin-left: 41.66667%;\r\n  }\r\n\r\n  .offset-lg-6 {\r\n    margin-left: 50%;\r\n  }\r\n\r\n  .offset-lg-7 {\r\n    margin-left: 58.33333%;\r\n  }\r\n\r\n  .offset-lg-8 {\r\n    margin-left: 66.66667%;\r\n  }\r\n\r\n  .offset-lg-9 {\r\n    margin-left: 75%;\r\n  }\r\n\r\n  .offset-lg-10 {\r\n    margin-left: 83.33333%;\r\n  }\r\n\r\n  .offset-lg-11 {\r\n    margin-left: 91.66667%;\r\n  }\r\n}\r\n\r\n@media (max-width: $tablet) {\r\n  .col-md {\r\n    flex-basis: 0;\r\n    -webkit-box-flex: 1;\r\n    flex-grow: 1;\r\n    max-width: 100%;\r\n  }\r\n  .col-md-auto {\r\n    flex: 0 0 auto;\r\n    width: auto;\r\n    max-width: none;\r\n  }\r\n  .col-md-1 {\r\n    flex: 0 0 8.333333%;\r\n    max-width: 8.333333%;\r\n  }\r\n  .col-md-2 {\r\n    flex: 0 0 16.666667%;\r\n    max-width: 16.666667%;\r\n  }\r\n  .col-md-3 {\r\n    flex: 0 0 25%;\r\n    max-width: 25%;\r\n  }\r\n  .col-md-4 {\r\n    flex: 0 0 33.333333%;\r\n    max-width: 33.333333%;\r\n  }\r\n  .col-md-5 {\r\n    flex: 0 0 41.666667%;\r\n    max-width: 41.666667%;\r\n  }\r\n  .col-md-6 {\r\n    flex: 0 0 50%;\r\n    max-width: 50%;\r\n  }\r\n  .col-md-7 {\r\n    flex: 0 0 58.333333%;\r\n    max-width: 58.333333%;\r\n  }\r\n  .col-md-8 {\r\n    flex: 0 0 66.666667%;\r\n    max-width: 66.666667%;\r\n  }\r\n  .col-md-9 {\r\n    flex: 0 0 75%;\r\n    max-width: 75%;\r\n  }\r\n  .col-md-10 {\r\n    flex: 0 0 83.333333%;\r\n    max-width: 83.333333%;\r\n  }\r\n  .col-md-11 {\r\n    flex: 0 0 91.666667%;\r\n    max-width: 91.666667%;\r\n  }\r\n  .col-md-12 {\r\n    flex: 0 0 100%;\r\n    max-width: 100%;\r\n  }\r\n  .order-md-first {\r\n    order: -1;\r\n  }\r\n  .order-md-last {\r\n    order: 13;\r\n  }\r\n  .order-md-0 {\r\n    order: 0;\r\n  }\r\n  .order-md-1 {\r\n    order: 1;\r\n  }\r\n  .order-md-2 {\r\n    order: 2;\r\n  }\r\n  .order-md-3 {\r\n    order: 3;\r\n  }\r\n  .order-md-4 {\r\n    order: 4;\r\n  }\r\n  .order-md-5 {\r\n    order: 5;\r\n  }\r\n  .order-md-6 {\r\n    order: 6;\r\n  }\r\n  .order-md-7 {\r\n    order: 7;\r\n  }\r\n  .order-md-8 {\r\n    order: 8;\r\n  }\r\n  .order-md-9 {\r\n    order: 9;\r\n  }\r\n  .order-md-10 {\r\n    order: 10;\r\n  }\r\n  .order-md-11 {\r\n    order: 11;\r\n  }\r\n  .order-md-12 {\r\n    order: 12;\r\n  }\r\n\r\n  .offset-md-1 {\r\n    margin-left: 8.33333%;\r\n  }\r\n\r\n  .offset-md-2 {\r\n    margin-left: 16.66667%;\r\n  }\r\n\r\n  .offset-md-3 {\r\n    margin-left: 25%;\r\n  }\r\n\r\n  .offset-md-4 {\r\n    margin-left: 33.33333%;\r\n  }\r\n\r\n  .offset-md-5 {\r\n    margin-left: 41.66667%;\r\n  }\r\n\r\n  .offset-md-6 {\r\n    margin-left: 50%;\r\n  }\r\n\r\n  .offset-md-7 {\r\n    margin-left: 58.33333%;\r\n  }\r\n\r\n  .offset-md-8 {\r\n    margin-left: 66.66667%;\r\n  }\r\n\r\n  .offset-md-9 {\r\n    margin-left: 75%;\r\n  }\r\n\r\n  .offset-md-10 {\r\n    margin-left: 83.33333%;\r\n  }\r\n\r\n  .offset-md-11 {\r\n    margin-left: 91.66667%;\r\n  }\r\n\r\n  .m-md-0 {\r\n    margin: 0 !important;\r\n  }\r\n\r\n  .mt-md-0,\r\n  .my-md-0 {\r\n    margin-top: 0 !important;\r\n  }\r\n\r\n  .mr-md-0,\r\n  .mx-md-0 {\r\n    margin-right: 0 !important;\r\n  }\r\n\r\n  .mb-md-0,\r\n  .my-md-0 {\r\n    margin-bottom: 0 !important;\r\n  }\r\n\r\n  .ml-md-0,\r\n  .mx-md-0 {\r\n    margin-left: 0 !important;\r\n  }\r\n\r\n  .m-md-1 {\r\n    margin: 0.25rem !important;\r\n  }\r\n\r\n  .mt-md-1,\r\n  .my-md-1 {\r\n    margin-top: 0.25rem !important;\r\n  }\r\n\r\n  .mr-md-1,\r\n  .mx-md-1 {\r\n    margin-right: 0.25rem !important;\r\n  }\r\n\r\n  .mb-md-1,\r\n  .my-md-1 {\r\n    margin-bottom: 0.25rem !important;\r\n  }\r\n\r\n  .ml-md-1,\r\n  .mx-md-1 {\r\n    margin-left: 0.25rem !important;\r\n  }\r\n\r\n  .m-md-2 {\r\n    margin: 0.5rem !important;\r\n  }\r\n\r\n  .mt-md-2,\r\n  .my-md-2 {\r\n    margin-top: 0.5rem !important;\r\n  }\r\n\r\n  .mr-md-2,\r\n  .mx-md-2 {\r\n    margin-right: 0.5rem !important;\r\n  }\r\n\r\n  .mb-md-2,\r\n  .my-md-2 {\r\n    margin-bottom: 0.5rem !important;\r\n  }\r\n\r\n  .ml-md-2,\r\n  .mx-md-2 {\r\n    margin-left: 0.5rem !important;\r\n  }\r\n\r\n  .m-md-3 {\r\n    margin: 1rem !important;\r\n  }\r\n\r\n  .mt-md-3,\r\n  .my-md-3 {\r\n    margin-top: 1rem !important;\r\n  }\r\n\r\n  .mr-md-3,\r\n  .mx-md-3 {\r\n    margin-right: 1rem !important;\r\n  }\r\n\r\n  .mb-md-3,\r\n  .my-md-3 {\r\n    margin-bottom: 1rem !important;\r\n  }\r\n\r\n  .ml-md-3,\r\n  .mx-md-3 {\r\n    margin-left: 1rem !important;\r\n  }\r\n\r\n  .m-md-4 {\r\n    margin: 1.5rem !important;\r\n  }\r\n\r\n  .mt-md-4,\r\n  .my-md-4 {\r\n    margin-top: 1.5rem !important;\r\n  }\r\n\r\n  .mr-md-4,\r\n  .mx-md-4 {\r\n    margin-right: 1.5rem !important;\r\n  }\r\n\r\n  .mb-md-4,\r\n  .my-md-4 {\r\n    margin-bottom: 1.5rem !important;\r\n  }\r\n\r\n  .ml-md-4,\r\n  .mx-md-4 {\r\n    margin-left: 1.5rem !important;\r\n  }\r\n\r\n  .m-md-5 {\r\n    margin: 3rem !important;\r\n  }\r\n\r\n  .mt-md-5,\r\n  .my-md-5 {\r\n    margin-top: 3rem !important;\r\n  }\r\n\r\n  .mr-md-5,\r\n  .mx-md-5 {\r\n    margin-right: 3rem !important;\r\n  }\r\n\r\n  .mb-md-5,\r\n  .my-md-5 {\r\n    margin-bottom: 3rem !important;\r\n  }\r\n\r\n  .ml-md-5,\r\n  .mx-md-5 {\r\n    margin-left: 3rem !important;\r\n  }\r\n}\r\n\r\n@media (max-width: $mobile-large) {\r\n  .col-sm {\r\n    flex-basis: 0;\r\n    flex-grow: 1;\r\n    max-width: 100%;\r\n  }\r\n  .col-sm-auto {\r\n    flex: 0 0 auto;\r\n    width: auto;\r\n    max-width: none;\r\n  }\r\n  .col-sm-1 {\r\n    flex: 0 0 8.333333%;\r\n    max-width: 8.333333%;\r\n  }\r\n  .col-sm-2 {\r\n    flex: 0 0 16.666667%;\r\n    max-width: 16.666667%;\r\n  }\r\n  .col-sm-3 {\r\n    flex: 0 0 25%;\r\n    max-width: 25%;\r\n  }\r\n  .col-sm-4 {\r\n    flex: 0 0 33.333333%;\r\n    max-width: 33.333333%;\r\n  }\r\n  .col-sm-5 {\r\n    flex: 0 0 41.666667%;\r\n    max-width: 41.666667%;\r\n  }\r\n  .col-sm-6 {\r\n    flex: 0 0 50%;\r\n    max-width: 50%;\r\n  }\r\n  .col-sm-7 {\r\n    flex: 0 0 58.333333%;\r\n    max-width: 58.333333%;\r\n  }\r\n  .col-sm-8 {\r\n    flex: 0 0 66.666667%;\r\n    max-width: 66.666667%;\r\n  }\r\n  .col-sm-9 {\r\n    flex: 0 0 75%;\r\n    max-width: 75%;\r\n  }\r\n  .col-sm-10 {\r\n    flex: 0 0 83.333333%;\r\n    max-width: 83.333333%;\r\n  }\r\n  .col-sm-11 {\r\n    flex: 0 0 91.666667%;\r\n    max-width: 91.666667%;\r\n  }\r\n  .col-sm-12 {\r\n    flex: 0 0 100%;\r\n    max-width: 100%;\r\n  }\r\n  .order-sm-first {\r\n    order: -1;\r\n  }\r\n  .order-sm-last {\r\n    order: 13;\r\n  }\r\n  .order-sm-0 {\r\n    order: 0;\r\n  }\r\n  .order-sm-1 {\r\n    order: 1;\r\n  }\r\n  .order-sm-2 {\r\n    order: 2;\r\n  }\r\n  .order-sm-3 {\r\n    order: 3;\r\n  }\r\n  .order-sm-4 {\r\n    order: 4;\r\n  }\r\n  .order-sm-5 {\r\n    order: 5;\r\n  }\r\n  .order-sm-6 {\r\n    order: 6;\r\n  }\r\n  .order-sm-7 {\r\n    order: 7;\r\n  }\r\n  .order-sm-8 {\r\n    order: 8;\r\n  }\r\n  .order-sm-9 {\r\n    order: 9;\r\n  }\r\n  .order-sm-10 {\r\n    order: 10;\r\n  }\r\n  .order-sm-11 {\r\n    order: 11;\r\n  }\r\n  .order-sm-12 {\r\n    order: 12;\r\n  }\r\n  .offset-sm-0 {\r\n    margin-left: 0;\r\n  }\r\n  .offset-sm-1 {\r\n    margin-left: 8.33333%;\r\n  }\r\n\r\n  .offset-sm-2 {\r\n    margin-left: 16.66667%;\r\n  }\r\n\r\n  .offset-sm-3 {\r\n    margin-left: 25%;\r\n  }\r\n\r\n  .offset-sm-4 {\r\n    margin-left: 33.33333%;\r\n  }\r\n\r\n  .offset-sm-5 {\r\n    margin-left: 41.66667%;\r\n  }\r\n\r\n  .offset-sm-6 {\r\n    margin-left: 50%;\r\n  }\r\n\r\n  .offset-sm-7 {\r\n    margin-left: 58.33333%;\r\n  }\r\n\r\n  .offset-sm-8 {\r\n    margin-left: 66.66667%;\r\n  }\r\n\r\n  .offset-sm-9 {\r\n    margin-left: 75%;\r\n  }\r\n\r\n  .offset-sm-10 {\r\n    margin-left: 83.33333%;\r\n  }\r\n\r\n  .offset-sm-11 {\r\n    margin-left: 91.66667%;\r\n  }\r\n\r\n   .m-sm-0 {\r\n    margin: 0 !important;\r\n  }\r\n\r\n  .mt-sm-0,\r\n  .my-sm-0 {\r\n    margin-top: 0 !important;\r\n  }\r\n\r\n  .mr-sm-0,\r\n  .mx-sm-0 {\r\n    margin-right: 0 !important;\r\n  }\r\n\r\n  .mb-sm-0,\r\n  .my-sm-0 {\r\n    margin-bottom: 0 !important;\r\n  }\r\n\r\n  .ml-sm-0,\r\n  .mx-sm-0 {\r\n    margin-left: 0 !important;\r\n  }\r\n\r\n  .m-sm-1 {\r\n    margin: 0.25rem !important;\r\n  }\r\n\r\n  .mt-1,\r\n  .my-1 {\r\n    margin-top: 0.25rem !important;\r\n  }\r\n\r\n  .mr-sm-1,\r\n  .mx-sm-1 {\r\n    margin-right: 0.25rem !important;\r\n  }\r\n\r\n  .mb-sm-1,\r\n  .my-sm-1 {\r\n    margin-bottom: 0.25rem !important;\r\n  }\r\n\r\n  .ml-sm-1,\r\n  .mx-sm-1 {\r\n    margin-left: 0.25rem !important;\r\n  }\r\n\r\n  .m-sm-2 {\r\n    margin: 0.5rem !important;\r\n  }\r\n\r\n  .mt-sm-2,\r\n  .my-sm-2 {\r\n    margin-top: 0.5rem !important;\r\n  }\r\n\r\n  .mr-2,\r\n  .mx-2 {\r\n    margin-right: 0.5rem !important;\r\n  }\r\n\r\n  .mb-sm-2,\r\n  .my-sm-2 {\r\n    margin-bottom: 0.5rem !important;\r\n  }\r\n\r\n  .ml-sm-2,\r\n  .mx-sm-2 {\r\n    margin-left: 0.5rem !important;\r\n  }\r\n\r\n  .m-sm-3 {\r\n    margin: 1rem !important;\r\n  }\r\n\r\n  .mt-sm-3,\r\n  .my-sm-3 {\r\n    margin-top: 1rem !important;\r\n  }\r\n\r\n  .mr-sm-3,\r\n  .mx-sm-3 {\r\n    margin-right: 1rem !important;\r\n  }\r\n\r\n  .mb-sm-3,\r\n  .my-sm-3 {\r\n    margin-bottom: 1rem !important;\r\n  }\r\n\r\n  .ml-sm-3,\r\n  .mx-sm-3 {\r\n    margin-left: 1rem !important;\r\n  }\r\n\r\n  .m-sm-4 {\r\n    margin: 1.5rem !important;\r\n  }\r\n\r\n  .mt-sm-4,\r\n  .my-sm-4 {\r\n    margin-top: 1.5rem !important;\r\n  }\r\n\r\n  .mr-sm-4,\r\n  .mx-sm-4 {\r\n    margin-right: 1.5rem !important;\r\n  }\r\n\r\n  .mb-sm-4,\r\n  .my-sm-4 {\r\n    margin-bottom: 1.5rem !important;\r\n  }\r\n\r\n  .ml-sm-4,\r\n  .mx-sm-4 {\r\n    margin-left: 1.5rem !important;\r\n  }\r\n\r\n  .m-sm-5 {\r\n    margin: 3rem !important;\r\n  }\r\n\r\n  .mt-sm-5,\r\n  .my-sm-5 {\r\n    margin-top: 3rem !important;\r\n  }\r\n\r\n  .mr-sm-5,\r\n  .mx-sm-5 {\r\n    margin-right: 3rem !important;\r\n  }\r\n\r\n  .mb-sm-5,\r\n  .my-sm-5 {\r\n    margin-bottom: 3rem !important;\r\n  }\r\n\r\n  .ml-sm-5,\r\n  .mx-sm-5 {\r\n    margin-left: 3rem !important;\r\n  }\r\n\r\n\r\n}\r\n\r\n@media (max-width: $mobile) {\r\n  .col-xs {\r\n    flex-basis: 0;\r\n    flex-grow: 1;\r\n    max-width: 100%;\r\n  }\r\n  .col-xs-auto {\r\n    flex: 0 0 auto;\r\n    width: auto;\r\n    max-width: none;\r\n  }\r\n  .col-xs-1 {\r\n    flex: 0 0 8.333333%;\r\n    max-width: 8.333333%;\r\n  }\r\n  .col-xs-2 {\r\n    flex: 0 0 16.666667%;\r\n    max-width: 16.666667%;\r\n  }\r\n  .col-xs-3 {\r\n    flex: 0 0 25%;\r\n    max-width: 25%;\r\n  }\r\n  .col-xs-4 {\r\n    flex: 0 0 33.333333%;\r\n    max-width: 33.333333%;\r\n  }\r\n  .col-xs-5 {\r\n    flex: 0 0 41.666667%;\r\n    max-width: 41.666667%;\r\n  }\r\n  .col-xs-6 {\r\n    flex: 0 0 50%;\r\n    max-width: 50%;\r\n  }\r\n  .col-xs-7 {\r\n    flex: 0 0 58.333333%;\r\n    max-width: 58.333333%;\r\n  }\r\n  .col-xs-8 {\r\n    flex: 0 0 66.666667%;\r\n    max-width: 66.666667%;\r\n  }\r\n  .col-xs-9 {\r\n    flex: 0 0 75%;\r\n    max-width: 75%;\r\n  }\r\n  .col-xs-10 {\r\n    flex: 0 0 83.333333%;\r\n    max-width: 83.333333%;\r\n  }\r\n  .col-xs-11 {\r\n    flex: 0 0 91.666667%;\r\n    max-width: 91.666667%;\r\n  }\r\n  .col-xs-12 {\r\n    flex: 0 0 100%;\r\n    max-width: 100%;\r\n  }\r\n  .pr-xs-0 {\r\n    padding-right: 0 !important\r\n  }\r\n  .pr-xs-1 {\r\n    padding-right: 0.25rem !important\r\n  }\r\n  .order-xs-first {\r\n    order: -1;\r\n  }\r\n  .order-xs-last {\r\n    order: 13;\r\n  }\r\n  .order-xs-0 {\r\n    order: 0;\r\n  }\r\n  .order-xs-1 {\r\n    order: 1;\r\n  }\r\n  .order-xs-2 {\r\n    order: 2;\r\n  }\r\n  .order-xs-3 {\r\n    order: 3;\r\n  }\r\n  .order-xs-4 {\r\n    order: 4;\r\n  }\r\n  .order-xs-5 {\r\n    order: 5;\r\n  }\r\n  .order-xs-6 {\r\n    order: 6;\r\n  }\r\n  .order-xs-7 {\r\n    order: 7;\r\n  }\r\n  .order-xs-8 {\r\n    order: 8;\r\n  }\r\n  .order-xs-9 {\r\n    order: 9;\r\n  }\r\n  .order-xs-10 {\r\n    order: 10;\r\n  }\r\n  .order-xs-11 {\r\n    order: 11;\r\n  }\r\n  .order-xs-12 {\r\n    order: 12;\r\n  }\r\n  .offset-xs-0 {\r\n    margin-left: 0;\r\n  }\r\n  .offset-xs-1 {\r\n    margin-left: 8.33333%;\r\n  }\r\n\r\n  .offset-xs-2 {\r\n    margin-left: 16.66667%;\r\n  }\r\n\r\n  .offset-xs-3 {\r\n    margin-left: 25%;\r\n  }\r\n\r\n  .offset-xs-4 {\r\n    margin-left: 33.33333%;\r\n  }\r\n\r\n  .offset-xs-5 {\r\n    margin-left: 41.66667%;\r\n  }\r\n\r\n  .offset-xs-6 {\r\n    margin-left: 50%;\r\n  }\r\n\r\n  .offset-xs-7 {\r\n    margin-left: 58.33333%;\r\n  }\r\n\r\n  .offset-xs-8 {\r\n    margin-left: 66.66667%;\r\n  }\r\n\r\n  .offset-xs-9 {\r\n    margin-left: 75%;\r\n  }\r\n\r\n  .offset-xs-10 {\r\n    margin-left: 83.33333%;\r\n  }\r\n\r\n  .offset-xs-11 {\r\n    margin-left: 91.66667%;\r\n  }\r\n  .mb-xs-3,\r\n  .my-xs-3 {\r\n    margin-bottom: 1rem !important;\r\n  }\r\n  .mb-xs-2,\r\n  .my-xs-2 {\r\n    margin-bottom: 0.5rem !important;\r\n  }\r\n  .mb-xs-1,\r\n  .my-xs-1 {\r\n    margin-bottom: 0.25rem !important;\r\n  }\r\n  .mt-xs-0 {\r\n    margin-top: 0 !important;\r\n  }\r\n}","html {\r\n  font-size: 62.5%;\r\n}\r\nbody {\r\n  display: flex;\r\n  flex-direction: column;\r\n  justify-content: space-between;\r\n  min-height: 100vh;\r\n\r\n  font-family: $open-sans;\r\n  color: #212121;\r\n  font-weight: 400;\r\n  font-size: 1.6rem;\r\n  line-height: 1.2;\r\n  background-color:#efefef;\r\n\r\n  &.no-scroll {\r\n    overflow-y: hidden;\r\n  }\r\n}\r\n\r\nmain {\r\n  padding: 40px 0;\r\n\r\n  @include mobile-large {\r\n    padding: 30px 0;\r\n  }\r\n}\r\n\r\nfooter {\r\n  margin-top: auto;\r\n}\r\n\r\n.hidden-title {\r\n  visibility: hidden;\r\n  height: 0;\r\n}\r\n\r\n.d-none {\r\n  display: none !important;\r\n}","//breakpoints\r\n$widescreen: 1440px;\r\n$laptop: 1200px;\r\n$tablet: 992px;\r\n$mobile-large: 768px;\r\n$mobile: 576px;\r\n\r\n//colors\r\n\r\n\r\n//fonts\r\n$base-fonts: system-ui, -apple-system, \"Segoe UI\", Roboto, \"Helvetica Neue\", \"Noto Sans\", \"Liberation Sans\", Arial, sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\", \"Noto Color Emoji\";\r\n$open-sans: 'Open Sans', sans-serif;\r\n$montserrat: 'Montserrat', sans-serif;\r\n\r\n//colors\r\n//$primary-color: #F6A200;\r\n$primary-color: #F9A825;\r\n$secondary-color: #8bc34a;\r\n//$secondary-color: #43a047;\r\n$gray: #90a4ae;",".burger {\r\n  display: none;\r\n  width: 3rem;\r\n  height: 2rem;\r\n  padding: 0;\r\n\r\n  font-size: 0;\r\n  color: transparent;\r\n\r\n  position: absolute;\r\n  top: 50%;\r\n  left: 1.5rem;\r\n  transform: translateY(-50%);\r\n  background: none;\r\n  border: none;\r\n\r\n  &::before, &::after, span {\r\n    display: block;\r\n    width: 100%;\r\n    height: 2px;\r\n    background-color: #212121;\r\n    position: absolute;\r\n    left: 0;\r\n  }\r\n\r\n  &::before, &::after {\r\n    content: \"\";\r\n    transition: transform .2s linear;\r\n  }\r\n\r\n  &::before {\r\n    top: 0;\r\n  }\r\n\r\n  &::after {\r\n    bottom: 0;\r\n  }\r\n\r\n  span {\r\n    top: 50%;\r\n    transform: translateY(-50%);\r\n    transition: opacity .2s linear;\r\n  }\r\n\r\n  .show-sidebar & {\r\n    span {\r\n      opacity: 0;\r\n    }\r\n\r\n    &::before, &::after {\r\n      top: 50%;\r\n    }\r\n\r\n    &::before {\r\n      transform: rotate(45deg);\r\n    }\r\n\r\n    &::after {\r\n      transform: rotate(-45deg);\r\n    }\r\n  }\r\n\r\n  @include tablet {\r\n    display: block;\r\n  }\r\n}",".js-tab-content {\r\n  display: none;\r\n\r\n  &.active {\r\n    display: block;\r\n    animation: .5s linear appear;\r\n  }\r\n\r\n  @keyframes appear {\r\n    from {\r\n      transform: scale3d(.95, .95, 1);\r\n      opacity: .5;\r\n    }\r\n    to {\r\n      transform: scale3d(1, 1, 1);\r\n      opacity: 1;\r\n    }\r\n  }\r\n}",".logo {\r\n  max-width: 130px;\r\n\r\n  img {\r\n    width: 100%;\r\n    height: 100%;\r\n    object-fit: cover;\r\n  }\r\n\r\n  @include tablet {\r\n    max-width: 120px;\r\n  }\r\n\r\n  @include mobile-large {\r\n    max-width: 100px;\r\n  }\r\n}",".to-top {\r\n  cursor: pointer;\r\n  width: 30px;\r\n  height: 30px;\r\n  fill: $primary-color;\r\n  position: fixed;\r\n  right: 20px;\r\n  bottom: 100px;\r\n  opacity: 1;\r\n  visibility: visible;\r\n  transition: opacity .2s linear;\r\n\r\n  &.hidden {\r\n    opacity: 0;\r\n    visibility: hidden;\r\n  }\r\n}",".section {\r\n  padding: 40px 0;\r\n\r\n  @include mobile-large {\r\n    padding: 14px 0;\r\n  }\r\n\r\n  &--nopading {\r\n    padding: 0;\r\n  }\r\n\r\n  &__title {\r\n    text-align: center;\r\n    font-family: $montserrat;\r\n    font-weight: 500;\r\n    font-size: 46px;\r\n    margin-bottom: 14px;\r\n    text-shadow: -2px 2px 2px rgba(206,89,55,0.4);\r\n\r\n    @include mobile-large {\r\n      font-size: 40px;\r\n    }\r\n\r\n    @include mobile {\r\n      font-size: 36px;\r\n    }\r\n  }\r\n}",".card {\r\n  overflow: hidden;\r\n  box-shadow: -4px 4px 2px rgba(216,216,216,0.75);\r\n  position: relative;\r\n  display: block;\r\n  border-radius: 8px;\r\n  width: 100%;\r\n  max-width: 460px;\r\n  margin: 0 auto;\r\n  background-color: #fff;\r\n\r\n  @include mobile {\r\n    max-width: 360px;\r\n  }\r\n\r\n  &__img {\r\n    height: 300px;\r\n    width: 100%;\r\n    overflow: hidden;\r\n\r\n    img {\r\n      width: 100%;\r\n      height: 100%;\r\n      object-fit: contain;\r\n      transition: transform 3s ease-in;\r\n    }\r\n\r\n    &:hover {\r\n      img {\r\n        transform: scale(1.2);\r\n      }\r\n    }\r\n  }\r\n\r\n  &__info {\r\n    padding: 12px 12px 16px 12px;\r\n  }\r\n\r\n  &__main-info {\r\n    font-size: 20px;\r\n    font-weight: 500;\r\n  }\r\n\r\n  &__beertype {\r\n    color: $secondary-color;\r\n    margin: 4px 0;\r\n    min-height: 48px;\r\n  }\r\n\r\n  &__title {\r\n    font-size: 24px;\r\n    font-weight: 600;\r\n    font-family: $montserrat;\r\n    min-height: 58px;\r\n    \r\n    &:hover {\r\n      text-decoration: underline;\r\n    }\r\n  }\r\n\r\n  &__testimonial {\r\n    display: flex;\r\n    justify-content: space-between;\r\n    align-items: center;\r\n    font-size: 15px;\r\n    margin: 6px  -10px;\r\n    padding: 12px 0;\r\n    border-top: 1px dashed $gray;\r\n    border-bottom: 1px dashed $gray;\r\n  }\r\n\r\n  &__test-item {\r\n    width: 33.3333%;\r\n    padding: 0 10px;\r\n  }\r\n\r\n  &__test-value {\r\n    font-size: 20px;\r\n    font-weight: 600;\r\n    margin-top: 12px;\r\n    margin-bottom: 4px;\r\n  }\r\n\r\n  &__test-progress {\r\n    position: relative;\r\n    height: 8px;\r\n    background-color: #bbb;\r\n  }\r\n\r\n  &__test-progress-value {\r\n    position: absolute;\r\n    left: 0;\r\n    top: 0;\r\n    bottom: 0;\r\n    height: 100%;\r\n    background-color: $primary-color;\r\n  }\r\n\r\n  &__price {\r\n    font-size: 34px;\r\n    line-height: 1;\r\n    font-weight: 600;\r\n    margin-top: 12px;\r\n\r\n    span {\r\n      display: block;\r\n\r\n      &:last-child {\r\n        font-size: 20px;\r\n        color: $gray;\r\n      }\r\n    }\r\n  }\r\n\r\n  &__price-wrapper {\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: space-between;\r\n  }\r\n\r\n  &__cart {\r\n    display: none;\r\n    cursor: pointer;\r\n    height: 48px;\r\n    width: 48px;\r\n    transition: fill .2s linear;\r\n\r\n    &:hover {\r\n      fill: darken($secondary-color, 10%);\r\n    }\r\n  }\r\n\r\n  &__bottom {\r\n    padding-top: 12px;\r\n    text-align: right;\r\n  }\r\n\r\n  &__details {\r\n    font-size: 22px;\r\n    font-weight: 600;\r\n    text-decoration: underline;\r\n    color: $secondary-color;\r\n    \r\n    &:hover {\r\n      text-decoration: none;\r\n    }\r\n  }\r\n}",".filter {\r\n  display: none;\r\n  //display: flex;\r\n  justify-content: space-between;\r\n  align-items: center;\r\n  font-size: 20px;\r\n  padding: 18px;\r\n  border: 1px solid #d7d7d7;\r\n  background-color: #ffffff;\r\n  margin-bottom: 20px;\r\n  border-radius: 8px;\r\n\r\n  @include laptop {\r\n    font-size: 18px;\r\n    padding: 12px;\r\n  }\r\n\r\n  @include mobile-large {\r\n    flex-direction: column-reverse;\r\n    align-items: flex-start;\r\n  }\r\n\r\n  @include mobile {\r\n    font-size: 16px;\r\n    padding: 8px;\r\n  }\r\n\r\n  &__sort {\r\n    width: 35%;\r\n    display: flex;\r\n    align-items: center;\r\n    padding-right: 18px;\r\n    overflow: hidden;\r\n\r\n    @include widescreen {\r\n      padding-right: 12px;\r\n    }\r\n\r\n    @include tablet {\r\n      width: 50%;\r\n      padding-right: 12px;\r\n    }\r\n\r\n    @include mobile-large {\r\n      width: 100%;\r\n    }\r\n  }\r\n\r\n  &__sort-by {\r\n    display: flex;\r\n    align-items: center;\r\n    user-select: none;\r\n  }\r\n\r\n  &__sort-direction {\r\n    cursor: pointer;\r\n    margin-right: 8px;\r\n    \r\n    svg {\r\n      padding-top: 4px;\r\n      width: 22px;\r\n      height: 22px;\r\n      cursor: pointer;\r\n      fill: #222;\r\n      transition: fill .2s linear;\r\n\r\n      &:hover {\r\n        fill: $secondary-color;\r\n      }\r\n    }\r\n    \r\n    &.down {\r\n      svg {\r\n        &:last-child {\r\n          display: none;\r\n        }\r\n      }\r\n    }\r\n    &.up {\r\n      svg {\r\n        &:first-child {\r\n          display: none;\r\n        }\r\n      }\r\n    }\r\n  }\r\n\r\n  &__input {\r\n    width: 30%;\r\n    display: flex;\r\n    align-items: center;\r\n    border-left: 1px solid $gray;\r\n    border-right: 1px solid $gray;\r\n    background-color: transparent;\r\n    padding: 0 22px;\r\n    font-family: 'Roboto', sans-serif;\r\n    color: #707070;\r\n    font-size: 15px;\r\n\r\n    @include laptop {\r\n      padding: 0 12px;\r\n    }\r\n\r\n    @include tablet {\r\n      display: none;\r\n    }\r\n\r\n    input {\r\n      width: 100%;\r\n      font-size: 20px;\r\n      padding-bottom: 4px;\r\n      margin-left: 12px;\r\n      border-bottom: 2px dashed $gray;\r\n\r\n      &:focus {\r\n        border-color: $secondary-color;\r\n      }\r\n\r\n      @include widescreen {\r\n        font-size: 18px;\r\n        padding-bottom: 2px;\r\n        margin-left: 8px;\r\n      }\r\n    }\r\n\r\n    svg {\r\n      width: 20px;\r\n      height: 20px;\r\n      cursor: pointer;\r\n      fill: #222;\r\n\r\n      @include laptop {\r\n        width: 18px;\r\n        height: 18px;\r\n      }\r\n    }\r\n  }\r\n\r\n  &__filter {\r\n    display: flex;\r\n    align-items: center;\r\n    padding-left: 12px;\r\n    width: 35%;\r\n    user-select: none;\r\n    overflow: hidden;\r\n\r\n    @include tablet {\r\n      width: 50%;\r\n      justify-content: flex-end;\r\n    }\r\n\r\n    @include mobile-large {\r\n      width: 100%;\r\n      padding-left: 0;\r\n      margin-bottom: 14px;\r\n      justify-content: flex-start;\r\n    }\r\n  }\r\n\r\n  &__select {\r\n    padding: 4px  8px;\r\n    border: 2px solid #444;\r\n    border-radius: 8px;\r\n    font-size: 16px;\r\n    font-family: inherit;\r\n    margin-left: 8px;\r\n\r\n    @include laptop {\r\n      font-size: 15px;\r\n      padding: 4px;\r\n    }\r\n\r\n    @include mobile-large {\r\n      padding: 2px 4px;\r\n    }\r\n\r\n    @include mobile {\r\n      padding: 1px 2px;\r\n      margin-left: 4px;\r\n    }\r\n\r\n    &:focus {\r\n      border-color: $secondary-color;\r\n    }\r\n\r\n    &:focus-visible {\r\n      border-color: $secondary-color;\r\n      outline: none;\r\n    }\r\n  }\r\n}",".modal {\r\n  position: relative;\r\n  display: flex;\r\n  background-color: #fff;\r\n  width: 90%;\r\n  max-width: 1500px;\r\n  max-height: 80vh;\r\n  min-height: 60vh;\r\n  margin: 0 auto;\r\n  border-radius: 12px;\r\n  overflow: hidden;\r\n\r\n  @include tablet {\r\n    flex-direction: column;\r\n    max-height: 90vh;\r\n  }\r\n\r\n  @include mobile {\r\n    width: 96%;\r\n  }\r\n\r\n  &__close {\r\n    z-index: 111;\r\n    cursor: pointer;\r\n    width: 30px;\r\n    height: 30px;\r\n    position: absolute;\r\n    top: 10px;\r\n    right: 10px;\r\n    fill: $gray;\r\n    transition: fill .2s linear;\r\n\r\n    &:hover {\r\n      fill: $primary-color;\r\n    }\r\n  }\r\n\r\n\r\n  &__angle {\r\n    cursor: pointer;\r\n    position: absolute;\r\n    top: 50%;\r\n    transform: translateY(-50);\r\n    background-color: #bbb;\r\n    padding: 6px 4px;\r\n    fill: rgba(#fff, .7);\r\n    width: 28px;\r\n    transition: fill .2s linear, background-color .2s linear;\r\n\r\n    &--left {\r\n      left: 8px;\r\n      border-radius: 10px 0 0 10px;\r\n    }\r\n\r\n    &--right {\r\n      right: 8px;\r\n      border-radius: 0 10px 10px 0;\r\n    }\r\n\r\n    &:hover {\r\n      background-color: #999;\r\n      fill: #fff;\r\n    }\r\n  }\r\n\r\n  $siema-width: 540px;\r\n\r\n  &__left {\r\n    position: relative;\r\n    width: $siema-width;\r\n    min-height: 100%;\r\n    overflow: hidden;\r\n\r\n    @include tablet {\r\n      width: 100%;\r\n      border-radius: 0;\r\n      min-height: 360px;\r\n      height: 360px;\r\n      margin: 0 auto;\r\n    }\r\n\r\n    @include mobile {\r\n      min-height: 280px;\r\n      height: 280px;\r\n    }\r\n\r\n    .siema {\r\n      height: 100%;\r\n\r\n      div {\r\n        height: 100%;\r\n      }\r\n    }\r\n  }\r\n\r\n  &__img {\r\n    width: 100%;\r\n    height: 100%;\r\n\r\n    img {\r\n      width: 100%;\r\n      height: 100%;\r\n      object-fit: cover;\r\n      object-position: center center;\r\n\r\n      @include tablet {\r\n        object-fit: contain;\r\n      }\r\n    }\r\n  }\r\n\r\n  &__right {\r\n    width: calc(100% - $siema-width);\r\n    padding: 20px;\r\n    max-height: 100%;\r\n    overflow-y: auto;\r\n    scrollbar-width: thin;\r\n    scrollbar-color: #ccc darken($secondary-color, 10%);\r\n\r\n    /* Работает в Chrome, Edge и Safari */\r\n    &::-webkit-scrollbar {\r\n      width: 8px;\r\n    }\r\n\r\n    &::-webkit-scrollbar-track {\r\n      background: #ccc;\r\n      padding: 4px 0;\r\n    }\r\n\r\n    &::-webkit-scrollbar-thumb {\r\n      background-color: darken($secondary-color, 10%);\r\n      border-radius: 28px;\r\n    }\r\n\r\n    @include tablet {\r\n      width: 100%;\r\n    }\r\n\r\n    @include mobile {\r\n      padding: 14px 10px;\r\n    }\r\n  }\r\n\r\n  &__title {\r\n    font-size: 36px;\r\n    font-family: $montserrat;\r\n    font-weight: 600;\r\n    padding-right: 16px;\r\n\r\n    @include mobile {\r\n      font-size: 30px;\r\n    }\r\n  }\r\n\r\n  &__beertype {\r\n    @extend .card__beertype;\r\n    font-size: 20px;\r\n    min-height: 1px;\r\n\r\n    @include mobile {\r\n      font-size: 18px;\r\n    }\r\n  }\r\n\r\n  &__price-wrapper {\r\n    @extend .card__price-wrapper;\r\n    margin: 10px 0;\r\n\r\n    .btn {\r\n      display: none;\r\n    }\r\n  }\r\n\r\n  &__price {\r\n    @extend .card__price;\r\n  }\r\n\r\n  &__cart {\r\n    @extend .card__cart;\r\n  }\r\n\r\n  &__testimonial {\r\n    @extend .card__testimonial;\r\n    margin-bottom: 12px;\r\n  }\r\n\r\n  &__test-item {\r\n    @extend .card__test-item;\r\n  }\r\n\r\n  &__test-title {\r\n    font-size: 20px;\r\n\r\n    @include mobile {\r\n      font-size: 16px;\r\n    }\r\n  }\r\n\r\n  &__test-value {\r\n    @extend .card__test-value;\r\n    font-size: 22px;\r\n\r\n    @include mobile {\r\n      font-size: 18px;\r\n    }\r\n  }\r\n\r\n  &__test-progress {\r\n    @extend .card__test-progress;\r\n  }\r\n\r\n  &__test-progress-value {\r\n    @extend .card__test-progress-value;\r\n  }\r\n\r\n  &__description {\r\n    h1, h2, h3, h4, h5, h6, p, pre, div, table, iframe, blockquote, dl, ul, ol {\r\n      margin-bottom: 8px;\r\n    }\r\n  }\r\n  \r\n  .someclass {\r\n    background-image: url(\"../../img/lemonade-m.jpg\"), url(\"../../img/lemonade-m1.jpg\"), url(\"../../img/cidre-logo-m.png\"), url(\"../../img/cidr-strawberry-m.jpg\");\r\n  }\r\n  .someclass1 {\r\n    background-image:url(\"../../img/cidre-logo-m.jpg\"),  url(\"../../img/cidre-manho-persyk.jpg\"), url(\"../../img/cidr-cactus.jpg\"), url(\"../../img/cidre-medusa.jpg\"), url(\"../../img/bocal.jpg\"), url(\"../../img/chips.jpg\"), url(\"../../img/chips-m.jpg\"), url(\"../../img/limonad.jpg\"), url(\"../../img/cidre-logo.png\");\r\n  }\r\n}",".btn {\r\n  font-family: $montserrat;\r\n  padding: 10px 20px;\r\n  font-size: 20px;\r\n  font-weight: 600;\r\n  border-radius: 8px;\r\n  border: 2px solid $secondary-color;\r\n  background-color: transparent;\r\n  transition: color .2s linear, background-color .2s linear;\r\n\r\n  &:hover {\r\n    color: #fff;\r\n    background-color: $secondary-color;\r\n  }\r\n}",".header {\r\n  padding: 10px 0;\r\n  font-size: 20px;\r\n  background-color: #fff;\r\n  box-shadow: -10px 10px 10px rgba(#000, .3);\r\n  border-radius: 0 0 10px 10px;\r\n\r\n  &__inner {\r\n    display: flex;\r\n    justify-content: space-between;\r\n    align-items: center;\r\n    font-size: 22px;\r\n    font-family: $montserrat;\r\n\r\n    @include tablet {\r\n      font-size: 20px;\r\n    }\r\n\r\n    @include mobile-large {\r\n      font-size: 18px;\r\n    }\r\n  }\r\n\r\n  &__info {\r\n    max-width: calc(80% - 130px);\r\n    padding: 0 14px;\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: center;\r\n    overflow: hidden;\r\n\r\n    @include laptop {\r\n      flex-direction: column;\r\n    }\r\n\r\n    @include tablet {\r\n      max-width: calc(78% - 120px);\r\n    }\r\n\r\n    @include mobile-large {\r\n      max-width: calc(78% - 100px);\r\n      align-items: start;\r\n      padding: 0 8px;\r\n    }\r\n\r\n    @include mobile {\r\n      max-width: 100%;\r\n      padding-right: 0;\r\n    }\r\n  }\r\n\r\n  &__icon {\r\n    height: 24px;\r\n    margin-right: 6px;\r\n    fill: #333;\r\n    flex-shrink: 0;\r\n    transition: fill .2s linear;\r\n\r\n    @include tablet {\r\n      height: 22px;\r\n    }\r\n\r\n    @include mobile-large {\r\n      height: 20px;\r\n    }\r\n  }\r\n\r\n  &__item {\r\n    @extend .flex-items-center;\r\n    transition: color .2s linear;\r\n    padding-right: 20px;\r\n    max-width: 50%;\r\n\r\n    @include laptop {\r\n      padding-right: 0;\r\n      max-width: 100%;\r\n    }\r\n\r\n    &:first-child {\r\n      @include laptop {\r\n        margin-bottom: 18px;\r\n      }\r\n      @include mobile-large {\r\n        margin-bottom: 12px;\r\n      }\r\n      span {\r\n        @extend .text-nowrap;\r\n      }\r\n    }\r\n\r\n    &:last-child {\r\n      padding-right: 0;\r\n      padding-left: 20px;\r\n      border-left: 1px dashed #333;\r\n      max-width: 60%;\r\n\r\n      @include laptop {\r\n        border-left: none;\r\n        padding-left: 0;\r\n        max-width: 100%;\r\n      }\r\n    }\r\n\r\n    &:hover {\r\n      color: $secondary-color;\r\n\r\n      svg {\r\n        fill: $secondary-color;\r\n      }\r\n    }\r\n\r\n    .footer & {\r\n      &:hover {\r\n        color: #ccc;\r\n\r\n        svg {\r\n          fill: #ccc;\r\n        }\r\n      }\r\n    }\r\n  }\r\n\r\n  &__time {\r\n    @extend .flex-items-center;\r\n    max-width: 20%;\r\n\r\n    @include tablet {\r\n      max-width: 22%;\r\n    }\r\n\r\n    @include mobile {\r\n      display: none;\r\n    }\r\n  }\r\n}",".categories {\r\n  margin: 0 -15px;\r\n  display: flex;\r\n  flex-wrap: wrap;\r\n  justify-content: center;\r\n  overflow: hidden;\r\n  padding: 10px 20px 10px 20px;\r\n\r\n  @include tablet {\r\n    max-width: 90%;\r\n    margin: 0 auto;\r\n  }\r\n\r\n  @include mobile-large {\r\n    max-width: 100%;\r\n  }\r\n\r\n  &__item {\r\n    padding: 20px;\r\n    width: 50%;\r\n    margin: 0 auto;\r\n\r\n    @include laptop {\r\n      padding: 10px;\r\n    }\r\n\r\n    @include mobile-large {\r\n      width: 100%;\r\n    }\r\n  }\r\n}",".cat-card {\r\n  $root: &;\r\n  display: flex;\r\n  flex-direction: column;\r\n  width: 100%;\r\n  //max-width: 320px;\r\n  height: 312px;\r\n  color: #fff;\r\n  background-color: $secondary-color;\r\n  border-radius: 10px;\r\n  box-shadow: -6px 6px 6px rgba(0, 0, 0, .2);\r\n  @extend .bg-radial;\r\n  overflow: hidden;\r\n  cursor: pointer;\r\n  transition: scale .2s cubic-bezier(.32,.08,.24,1), box-shadow .2s cubic-bezier(.32,.08,.24,1), scale .2s cubic-bezier(.32,.08,.24,1),color .2s cubic-bezier(.32,.08,.24,1);\r\n\r\n  @include mobile-large {\r\n    margin: 0 auto;\r\n  }\r\n\r\n  &:hover {\r\n    scale: 1.05;\r\n    box-shadow: -10px 10px 10px rgba(0, 0, 0, .18);\r\n  }\r\n\r\n  &.active {\r\n    box-shadow: -10px 10px 10px rgba(0, 0, 0, .18);\r\n    text-decoration: underline;\r\n\r\n    svg {\r\n      padding: 10px 0;\r\n      fill: rgba($primary-color, .7);\r\n    }\r\n  }\r\n\r\n  @include laptop {\r\n    height: 250px;\r\n  }\r\n\r\n  @include tablet {\r\n    height: 220px;\r\n  }\r\n\r\n  @include mobile-large {\r\n    flex-direction: row;\r\n    align-items: center;\r\n    max-width: 90%;\r\n    width: 80%;\r\n    height: 100px;\r\n  }\r\n\r\n  @include mobile {\r\n    max-width: 100%;\r\n    width: 100%;\r\n  }\r\n\r\n  svg {\r\n    height: 100%;\r\n    width: 37%;\r\n    padding: 10px 0;\r\n    margin: 0 auto;\r\n    fill: rgb(#000, .7);\r\n    transition: fill .2s linear;\r\n\r\n    @include laptop {\r\n      width: 33%;\r\n    }\r\n\r\n    @include mobile-large {\r\n      height: 75%;\r\n      width: 20%;\r\n      margin: 0 14px;\r\n    }\r\n  }\r\n\r\n  &__bottom {\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: center;\r\n    text-align: center;\r\n    font-family: $montserrat;\r\n    text-transform: uppercase;\r\n    padding: 8px;\r\n    background-color: rgba(0, 0, 0, .2);\r\n    border-radius: 0 0 16px 16px;\r\n    min-height: 98.4px;\r\n    overflow: hidden;\r\n\r\n    @include laptop {\r\n      min-height: 68px;\r\n    }\r\n\r\n    @include laptop {\r\n      min-height: 63.4px;\r\n    }\r\n\r\n    @include mobile-large {\r\n      padding-left: 0;\r\n      min-height: 0;\r\n      background: none;\r\n    }\r\n  }\r\n\r\n  h2, h3, h4, h5 {\r\n    font-size: 26px;\r\n    text-align: center;\r\n    padding: 10px;\r\n\r\n    @include laptop {\r\n      font-size: 22px;\r\n    }\r\n\r\n    @include tablet {\r\n      font-size: 20px;\r\n    }\r\n    \r\n    @include mobile-large {\r\n      text-align: left;\r\n    }\r\n  }\r\n}",".main {\r\n\r\n  &__info {\r\n    display: flex;\r\n    flex-wrap: wrap;\r\n    margin: 0 -10px;\r\n  }\r\n\r\n  &__col {\r\n    display: flex;\r\n    width: 33.3333%;\r\n    padding: 0 10px;\r\n\r\n    &:not(:nth-child(-n + 3)) {\r\n      margin-top: 20px;\r\n    }\r\n\r\n    @include tablet {\r\n      width: 50%;\r\n\r\n\r\n      &:not(:nth-child(-n + 2)) {\r\n        margin-top: 20px;\r\n      }\r\n    }\r\n\r\n    @include mobile {\r\n      width: 100%;\r\n\r\n      &:not(:nth-child(-n + 1)) {\r\n        margin-top: 20px;\r\n      }\r\n    }\r\n  }\r\n}",".footer {\r\n  padding: 34px 0;\r\n  font-size: 20px;\r\n  font-family: $montserrat;\r\n  font-weight: 600;\r\n  background: linear-gradient(181deg, rgba(255,255,255,.95) 0%, rgba(67,160,71,0.6306897759103641) 100%);\r\n  border-radius: 10px 10px 0 0;\r\n\r\n  .container {\r\n    display: flex;\r\n    justify-content: space-between;\r\n    align-items: center;\r\n\r\n    @include mobile {\r\n      justify-content: center;\r\n    }\r\n  }\r\n\r\n  &__item {\r\n    @extend .flex-items-center;\r\n    transition: color .2s linear;\r\n\r\n    @include mobile {\r\n      display: none;\r\n    }\r\n\r\n    &:hover {\r\n      color: #000;\r\n    }\r\n  }\r\n}",null],"sourceRoot":""}]);
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
var code = "<!DOCTYPE html>\r\n<html lang=\"ru\">\r\n<head>\r\n  <meta charset=\"UTF-8\">\r\n  <meta http-equiv=\"X-UA-Compatible\" content=\"IE=edge\">\r\n  <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\r\n\r\n  <link rel=\"icon\" href=\"" + ___HTML_LOADER_REPLACEMENT_0___ + "\" type=\"image/svg+xml\">\r\n  <link rel=\"icon\" href=\"" + ___HTML_LOADER_REPLACEMENT_1___ + "\" type=\"image/png\">\r\n\r\n  <link rel=\"stylesheet\" href=\"https://cdnjs.cloudflare.com/ajax/libs/basicLightbox/5.0.0/basicLightbox.min.css\" integrity=\"sha512-C+KPK958JmUdU8B9SVr8YpEZtQ1T1XrFX/OLvE/lt336DFWXFHL5Y9/tUewMEU+Uy3dUAS363XXLdBine0WDyQ==\" crossorigin=\"anonymous\" referrerpolicy=\"no-referrer\" />\r\n  <link rel=\"preconnect\" href=\"https://fonts.googleapis.com\">\r\n  <link rel=\"preconnect\" href=\"https://fonts.gstatic.com\" crossorigin>\r\n  <link href=\"https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;500;600;700&family=Open+Sans:wght@300;400;500;600;700&display=swap\" rel=\"stylesheet\">\r\n\r\n  <title>Beer Station №1</title>\r\n</head>\r\n<body>\r\n  <header class=\"header\" id=\"header\">\r\n    <div class=\"container--header\">\r\n      <div class=\"header__inner\">\r\n        <a href=\"#\" class=\"logo\">\r\n          <img src=\"" + ___HTML_LOADER_REPLACEMENT_2___ + "\" alt=\"beer station logo\">\r\n        </a>\r\n        <!--/logo-->\r\n\r\n        <div class=\"header__info\">\r\n          <a class=\"header__item\" href=\"tel:+380971470077\">\r\n            <svg class=\"header__icon\" xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 512 512\"><!-- Font Awesome Pro 5.15.4 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) --><path d=\"M497.39 361.8l-112-48a24 24 0 0 0-28 6.9l-49.6 60.6A370.66 370.66 0 0 1 130.6 204.11l60.6-49.6a23.94 23.94 0 0 0 6.9-28l-48-112A24.16 24.16 0 0 0 122.6.61l-104 24A24 24 0 0 0 0 48c0 256.5 207.9 464 464 464a24 24 0 0 0 23.4-18.6l24-104a24.29 24.29 0 0 0-14.01-27.6z\"/></svg>\r\n            <span>+38(097)147-00-77</span>\r\n          </a>\r\n          <!--/header__phone-->\r\n          <a class=\"header__item\" target=\"_blank\" href=\"https://www.google.com/maps/search/%D0%BF%D1%96%D1%81%D0%BA%D1%96%D0%B2%D0%BA%D0%B0+%D1%81%D1%82%D0%B0%D0%BD%D1%86%D1%96%D1%8F+%D1%82%D0%B5%D1%82%D0%B5%D1%80%D1%96%D0%B2/@50.6992069,29.5986911,20.75z\">\r\n            <svg class=\"header__icon\" xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 384 512\"><!-- Font Awesome Pro 5.15.4 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) --><path d=\"M172.268 501.67C26.97 291.031 0 269.413 0 192 0 85.961 85.961 0 192 0s192 85.961 192 192c0 77.413-26.97 99.031-172.268 309.67-9.535 13.774-29.93 13.773-39.464 0zM192 272c44.183 0 80-35.817 80-80s-35.817-80-80-80-80 35.817-80 80 35.817 80 80 80z\"/></svg>\r\n            <span>вул. Привокзальна 2</span>\r\n          </a>\r\n          <!--/header__location-->\r\n        </div>\r\n        <!--/header__info-->\r\n        <div class=\"header__time\">\r\n          <svg class=\"header__icon\" xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 512 512\"><!-- Font Awesome Pro 5.15.4 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) --><path d=\"M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8zm0 448c-110.5 0-200-89.5-200-200S145.5 56 256 56s200 89.5 200 200-89.5 200-200 200zm61.8-104.4l-84.9-61.7c-3.1-2.3-4.9-5.9-4.9-9.7V116c0-6.6 5.4-12 12-12h32c6.6 0 12 5.4 12 12v141.7l66.8 48.6c5.4 3.9 6.5 11.4 2.6 16.8L334.6 349c-3.9 5.3-11.4 6.5-16.8 2.6z\"/></svg>\r\n          <span>11:00 - 21:00</span>\r\n        </div>\r\n        <!--/header__routine-->\r\n      </div>\r\n      <!--/header__top-->\r\n    </div>\r\n  </header>\r\n\r\n  <main>\r\n    <div class=\"section section--nopading\">\r\n      <div class=\"container\">\r\n        <div class=\"categories\">\r\n          <div class=\"categories__item\">\r\n            <div data-tab=\"beer\" class=\"cat-card js-tab\">\r\n              <svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 512 512\"><!-- Font Awesome Pro 5.15.4 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) --><path d=\"M352,256H313.39c-15.71-13.44-35.46-23.07-57.39-28V180.44l-32-3.38-32,3.38V228c-21.93,5-41.68,14.6-57.39,28H16A16,16,0,0,0,0,272v96a16,16,0,0,0,16,16h92.79C129.38,421.73,173,448,224,448s94.62-26.27,115.21-64H352a32,32,0,0,1,32,32,32,32,0,0,0,32,32h64a32,32,0,0,0,32-32A160,160,0,0,0,352,256ZM81.59,159.91l142.41-15,142.41,15c9.42,1,17.59-6.81,17.59-16.8V112.89c0-10-8.17-17.8-17.59-16.81L256,107.74V80a16,16,0,0,0-16-16H208a16,16,0,0,0-16,16v27.74L81.59,96.08C72.17,95.09,64,102.9,64,112.89v30.22C64,153.1,72.17,160.91,81.59,159.91Z\"/></svg>\r\n              <div class=\"cat-card__bottom\">\r\n                <h3>Сьогодні на кранах</h3>\r\n              </div>\r\n            </div>\r\n          </div>\r\n          <div class=\"categories__item\">\r\n            <div data-tab=\"ba\" class=\"cat-card js-tab\">\r\n              <svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 384 512\"><!-- Font Awesome Pro 5.15.4 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) --><path d=\"M120 72c0-39.765 32.235-72 72-72s72 32.235 72 72c0 39.764-32.235 72-72 72s-72-32.236-72-72zm254.627 1.373c-12.496-12.497-32.758-12.497-45.254 0L242.745 160H141.254L54.627 73.373c-12.496-12.497-32.758-12.497-45.254 0-12.497 12.497-12.497 32.758 0 45.255L104 213.254V480c0 17.673 14.327 32 32 32h16c17.673 0 32-14.327 32-32V368h16v112c0 17.673 14.327 32 32 32h16c17.673 0 32-14.327 32-32V213.254l94.627-94.627c12.497-12.497 12.497-32.757 0-45.254z\"/></svg>\r\n              <div class=\"cat-card__bottom\">\r\n                <h3>Б/А пиво та соки</h3>\r\n              </div>\r\n            </div>\r\n          </div>\r\n          <div class=\"categories__item\">\r\n            <div data-tab=\"appetizer\" class=\"cat-card js-tab\">\r\n              <svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 512 512\"><!-- Font Awesome Pro 5.15.4 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) --><path d=\"M510.37 254.79l-12.08-76.26a132.493 132.493 0 0 0-37.16-72.95l-54.76-54.75c-19.73-19.72-45.18-32.7-72.71-37.05l-76.7-12.15c-27.51-4.36-55.69.11-80.52 12.76L107.32 49.6a132.25 132.25 0 0 0-57.79 57.8l-35.1 68.88a132.602 132.602 0 0 0-12.82 80.94l12.08 76.27a132.493 132.493 0 0 0 37.16 72.95l54.76 54.75a132.087 132.087 0 0 0 72.71 37.05l76.7 12.14c27.51 4.36 55.69-.11 80.52-12.75l69.12-35.21a132.302 132.302 0 0 0 57.79-57.8l35.1-68.87c12.71-24.96 17.2-53.3 12.82-80.96zM176 368c-17.67 0-32-14.33-32-32s14.33-32 32-32 32 14.33 32 32-14.33 32-32 32zm32-160c-17.67 0-32-14.33-32-32s14.33-32 32-32 32 14.33 32 32-14.33 32-32 32zm160 128c-17.67 0-32-14.33-32-32s14.33-32 32-32 32 14.33 32 32-14.33 32-32 32z\"/></svg>\r\n              <div class=\"cat-card__bottom\">\r\n                <h3>Смаколики</h3>\r\n              </div>\r\n            </div>\r\n          </div>\r\n          <div class=\"categories__item\">\r\n            <div data-tab=\"souvenirs\" class=\"cat-card  js-tab\">\r\n              <svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 448 512\"><!-- Font Awesome Pro 5.15.4 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) --><path d=\"M368 96h-48V56c0-13.255-10.745-24-24-24H24C10.745 32 0 42.745 0 56v400c0 13.255 10.745 24 24 24h272c13.255 0 24-10.745 24-24v-42.11l80.606-35.977C429.396 365.063 448 336.388 448 304.86V176c0-44.112-35.888-80-80-80zm16 208.86a16.018 16.018 0 0 1-9.479 14.611L320 343.805V160h48c8.822 0 16 7.178 16 16v128.86zM208 384c-8.836 0-16-7.164-16-16V144c0-8.836 7.164-16 16-16s16 7.164 16 16v224c0 8.836-7.164 16-16 16zm-96 0c-8.836 0-16-7.164-16-16V144c0-8.836 7.164-16 16-16s16 7.164 16 16v224c0 8.836-7.164 16-16 16z\"/></svg>\r\n              <div class=\"cat-card__bottom\">\r\n                <h3>Сувеніри</h3>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <!--/section-->\r\n    <section class=\"section js-tab-content beer\">\r\n      <div class=\"container\">\r\n        <h2 class=\"section__title section__title--kran\">Сьогодні на кранах</h2>\r\n        <div class=\"main\">\r\n          <div class=\"filter\">\r\n            <div class=\"filter__sort\">\r\n              <div class=\"filter__sort-direction down\">\r\n                <svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 512 512\">\r\n                  <!-- Font Awesome Pro 5.15.4 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) --><path d=\"M240 96h64a16 16 0 0 0 16-16V48a16 16 0 0 0-16-16h-64a16 16 0 0 0-16 16v32a16 16 0 0 0 16 16zm0 128h128a16 16 0 0 0 16-16v-32a16 16 0 0 0-16-16H240a16 16 0 0 0-16 16v32a16 16 0 0 0 16 16zm256 192H240a16 16 0 0 0-16 16v32a16 16 0 0 0 16 16h256a16 16 0 0 0 16-16v-32a16 16 0 0 0-16-16zm-256-64h192a16 16 0 0 0 16-16v-32a16 16 0 0 0-16-16H240a16 16 0 0 0-16 16v32a16 16 0 0 0 16 16zm-64 0h-48V48a16 16 0 0 0-16-16H80a16 16 0 0 0-16 16v304H16c-14.19 0-21.37 17.24-11.29 27.31l80 96a16 16 0 0 0 22.62 0l80-96C197.35 369.26 190.22 352 176 352z\"/>\r\n                </svg>\r\n                <svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 512 512\"><!-- Font Awesome Pro 5.15.4 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) --><path d=\"M304 416h-64a16 16 0 0 0-16 16v32a16 16 0 0 0 16 16h64a16 16 0 0 0 16-16v-32a16 16 0 0 0-16-16zm-128-64h-48V48a16 16 0 0 0-16-16H80a16 16 0 0 0-16 16v304H16c-14.19 0-21.37 17.24-11.29 27.31l80 96a16 16 0 0 0 22.62 0l80-96C197.35 369.26 190.22 352 176 352zm256-192H240a16 16 0 0 0-16 16v32a16 16 0 0 0 16 16h192a16 16 0 0 0 16-16v-32a16 16 0 0 0-16-16zm-64 128H240a16 16 0 0 0-16 16v32a16 16 0 0 0 16 16h128a16 16 0 0 0 16-16v-32a16 16 0 0 0-16-16zM496 32H240a16 16 0 0 0-16 16v32a16 16 0 0 0 16 16h256a16 16 0 0 0 16-16V48a16 16 0 0 0-16-16z\"/>\r\n                </svg>\r\n              </div>\r\n              <label class=\"filter__sort-by\">\r\n               Сортувати за:\r\n                <select class=\"filter__select\" name=\"sort-select\">\r\n                  <option value=\"price\">Ціною</option>\r\n                  <option value=\"abv\">Міцністю</option>\r\n                  <option value=\"ibu\">Гіркотою</option>\r\n                  <option value=\"density\">Щільністю</option>\r\n                </select>\r\n              </label>\r\n            </div>\r\n            <!--/filter__sort-->\r\n            <label class=\"filter__input\">\r\n              <svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 512 512\"><!-- Font Awesome Pro 5.15.4 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) --><path d=\"M505 442.7L405.3 343c-4.5-4.5-10.6-7-17-7H372c27.6-35.3 44-79.7 44-128C416 93.1 322.9 0 208 0S0 93.1 0 208s93.1 208 208 208c48.3 0 92.7-16.4 128-44v16.3c0 6.4 2.5 12.5 7 17l99.7 99.7c9.4 9.4 24.6 9.4 33.9 0l28.3-28.3c9.4-9.4 9.4-24.6.1-34zM208 336c-70.7 0-128-57.2-128-128 0-70.7 57.2-128 128-128 70.7 0 128 57.2 128 128 0 70.7-57.2 128-128 128z\"/>\r\n              </svg>\r\n              <input type=\"text\" name=\"search\" placeholder=\"знайди улюблене пиво\">\r\n            </label>\r\n\r\n            <label class=\"filter__filter\">\r\n              Тип пива:\r\n              <select class=\"filter__select\" name=\"filter-select\">\r\n                <option value=\"light-filtered\">Світле фільтроване</option>\r\n                <option value=\"light-nonfiltered\">Світле нефільтроване</option>\r\n                <option value=\"dark-filtered\">Темне фільтроване</option>\r\n                <option value=\"cider\">Сидр</option>\r\n              </select>\r\n            </label>\r\n            <!--/filter__filter-->\r\n          </div>\r\n          <!--/filter-->\r\n          <div class=\"main__info\">\r\n\r\n\r\n          </div>\r\n          <!--/info-->\r\n\r\n          <!--/sidebar-->\r\n        </div>\r\n      </div>\r\n    </section>\r\n    <!--/js-tab-content-->\r\n    <section class=\"section js-tab-content ba\">\r\n      <div class=\"container\">\r\n        <h2 class=\"section__title section__title--kran\">Б/А пиво та соки</h2>\r\n        <div class=\"main\">\r\n          <div class=\"filter\">\r\n            <div class=\"filter__sort\">\r\n              <div class=\"filter__sort-direction down\">\r\n                <svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 512 512\">\r\n                  <!-- Font Awesome Pro 5.15.4 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) --><path d=\"M240 96h64a16 16 0 0 0 16-16V48a16 16 0 0 0-16-16h-64a16 16 0 0 0-16 16v32a16 16 0 0 0 16 16zm0 128h128a16 16 0 0 0 16-16v-32a16 16 0 0 0-16-16H240a16 16 0 0 0-16 16v32a16 16 0 0 0 16 16zm256 192H240a16 16 0 0 0-16 16v32a16 16 0 0 0 16 16h256a16 16 0 0 0 16-16v-32a16 16 0 0 0-16-16zm-256-64h192a16 16 0 0 0 16-16v-32a16 16 0 0 0-16-16H240a16 16 0 0 0-16 16v32a16 16 0 0 0 16 16zm-64 0h-48V48a16 16 0 0 0-16-16H80a16 16 0 0 0-16 16v304H16c-14.19 0-21.37 17.24-11.29 27.31l80 96a16 16 0 0 0 22.62 0l80-96C197.35 369.26 190.22 352 176 352z\"/>\r\n                </svg>\r\n                <svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 512 512\"><!-- Font Awesome Pro 5.15.4 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) --><path d=\"M304 416h-64a16 16 0 0 0-16 16v32a16 16 0 0 0 16 16h64a16 16 0 0 0 16-16v-32a16 16 0 0 0-16-16zm-128-64h-48V48a16 16 0 0 0-16-16H80a16 16 0 0 0-16 16v304H16c-14.19 0-21.37 17.24-11.29 27.31l80 96a16 16 0 0 0 22.62 0l80-96C197.35 369.26 190.22 352 176 352zm256-192H240a16 16 0 0 0-16 16v32a16 16 0 0 0 16 16h192a16 16 0 0 0 16-16v-32a16 16 0 0 0-16-16zm-64 128H240a16 16 0 0 0-16 16v32a16 16 0 0 0 16 16h128a16 16 0 0 0 16-16v-32a16 16 0 0 0-16-16zM496 32H240a16 16 0 0 0-16 16v32a16 16 0 0 0 16 16h256a16 16 0 0 0 16-16V48a16 16 0 0 0-16-16z\"/>\r\n                </svg>\r\n              </div>\r\n              <label class=\"filter__sort-by\">\r\n                Сортувати за:\r\n                <select class=\"filter__select\" name=\"sort-select\">\r\n                  <option value=\"price\">Ціною</option>\r\n                  <option value=\"abv\">Міцністю</option>\r\n                  <option value=\"ibu\">Гіркотою</option>\r\n                  <option value=\"density\">Щільністю</option>\r\n                </select>\r\n              </label>\r\n            </div>\r\n            <!--/filter__sort-->\r\n            <label class=\"filter__input\">\r\n              <svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 512 512\"><!-- Font Awesome Pro 5.15.4 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) --><path d=\"M505 442.7L405.3 343c-4.5-4.5-10.6-7-17-7H372c27.6-35.3 44-79.7 44-128C416 93.1 322.9 0 208 0S0 93.1 0 208s93.1 208 208 208c48.3 0 92.7-16.4 128-44v16.3c0 6.4 2.5 12.5 7 17l99.7 99.7c9.4 9.4 24.6 9.4 33.9 0l28.3-28.3c9.4-9.4 9.4-24.6.1-34zM208 336c-70.7 0-128-57.2-128-128 0-70.7 57.2-128 128-128 70.7 0 128 57.2 128 128 0 70.7-57.2 128-128 128z\"/>\r\n              </svg>\r\n              <input type=\"text\" name=\"search\" placeholder=\"знайди улюблене пиво\">\r\n            </label>\r\n\r\n            <label class=\"filter__filter\">\r\n              Тип пива:\r\n              <select class=\"filter__select\" name=\"filter-select\">\r\n                <option value=\"light-filtered\">Світле фільтроване</option>\r\n                <option value=\"light-nonfiltered\">Світле нефільтроване</option>\r\n                <option value=\"dark-filtered\">Темне фільтроване</option>\r\n                <option value=\"cider\">Сидр</option>\r\n              </select>\r\n            </label>\r\n            <!--/filter__filter-->\r\n          </div>\r\n          <!--/filter-->\r\n          <div class=\"main__info\">\r\n\r\n          </div>\r\n          <!--/info-->\r\n          <!--/sidebar-->\r\n        </div>\r\n      </div>\r\n    </section>\r\n    <!--/js-tab-content-->\r\n    <section class=\"section js-tab-content appetizer\">\r\n      <div class=\"container\">\r\n        <h2 class=\"section__title section__title--kran\">Смаколики</h2>\r\n        <div class=\"main\">\r\n          <div class=\"filter\">\r\n            <div class=\"filter__sort\">\r\n              <div class=\"filter__sort-direction down\">\r\n                <svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 512 512\">\r\n                  <!-- Font Awesome Pro 5.15.4 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) --><path d=\"M240 96h64a16 16 0 0 0 16-16V48a16 16 0 0 0-16-16h-64a16 16 0 0 0-16 16v32a16 16 0 0 0 16 16zm0 128h128a16 16 0 0 0 16-16v-32a16 16 0 0 0-16-16H240a16 16 0 0 0-16 16v32a16 16 0 0 0 16 16zm256 192H240a16 16 0 0 0-16 16v32a16 16 0 0 0 16 16h256a16 16 0 0 0 16-16v-32a16 16 0 0 0-16-16zm-256-64h192a16 16 0 0 0 16-16v-32a16 16 0 0 0-16-16H240a16 16 0 0 0-16 16v32a16 16 0 0 0 16 16zm-64 0h-48V48a16 16 0 0 0-16-16H80a16 16 0 0 0-16 16v304H16c-14.19 0-21.37 17.24-11.29 27.31l80 96a16 16 0 0 0 22.62 0l80-96C197.35 369.26 190.22 352 176 352z\"/>\r\n                </svg>\r\n                <svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 512 512\"><!-- Font Awesome Pro 5.15.4 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) --><path d=\"M304 416h-64a16 16 0 0 0-16 16v32a16 16 0 0 0 16 16h64a16 16 0 0 0 16-16v-32a16 16 0 0 0-16-16zm-128-64h-48V48a16 16 0 0 0-16-16H80a16 16 0 0 0-16 16v304H16c-14.19 0-21.37 17.24-11.29 27.31l80 96a16 16 0 0 0 22.62 0l80-96C197.35 369.26 190.22 352 176 352zm256-192H240a16 16 0 0 0-16 16v32a16 16 0 0 0 16 16h192a16 16 0 0 0 16-16v-32a16 16 0 0 0-16-16zm-64 128H240a16 16 0 0 0-16 16v32a16 16 0 0 0 16 16h128a16 16 0 0 0 16-16v-32a16 16 0 0 0-16-16zM496 32H240a16 16 0 0 0-16 16v32a16 16 0 0 0 16 16h256a16 16 0 0 0 16-16V48a16 16 0 0 0-16-16z\"/>\r\n                </svg>\r\n              </div>\r\n              <label class=\"filter__sort-by\">\r\n                Сортувати за:\r\n                <select class=\"filter__select\" name=\"sort-select\">\r\n                  <option value=\"price\">Ціною</option>\r\n                  <option value=\"abv\">Міцністю</option>\r\n                  <option value=\"ibu\">Гіркотою</option>\r\n                  <option value=\"density\">Щільністю</option>\r\n                </select>\r\n              </label>\r\n            </div>\r\n            <!--/filter__sort-->\r\n            <label class=\"filter__input\">\r\n              <svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 512 512\"><!-- Font Awesome Pro 5.15.4 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) --><path d=\"M505 442.7L405.3 343c-4.5-4.5-10.6-7-17-7H372c27.6-35.3 44-79.7 44-128C416 93.1 322.9 0 208 0S0 93.1 0 208s93.1 208 208 208c48.3 0 92.7-16.4 128-44v16.3c0 6.4 2.5 12.5 7 17l99.7 99.7c9.4 9.4 24.6 9.4 33.9 0l28.3-28.3c9.4-9.4 9.4-24.6.1-34zM208 336c-70.7 0-128-57.2-128-128 0-70.7 57.2-128 128-128 70.7 0 128 57.2 128 128 0 70.7-57.2 128-128 128z\"/>\r\n              </svg>\r\n              <input type=\"text\" name=\"search\" placeholder=\"знайди улюблене пиво\">\r\n            </label>\r\n\r\n            <label class=\"filter__filter\">\r\n              Тип пива:\r\n              <select class=\"filter__select\" name=\"filter-select\">\r\n                <option value=\"light-filtered\">Світле фільтроване</option>\r\n                <option value=\"light-nonfiltered\">Світле нефільтроване</option>\r\n                <option value=\"dark-filtered\">Темне фільтроване</option>\r\n                <option value=\"cider\">Сидр</option>\r\n              </select>\r\n            </label>\r\n            <!--/filter__filter-->\r\n          </div>\r\n          <!--/filter-->\r\n          <div class=\"main__info\">\r\n\r\n          </div>\r\n          <!--/info-->\r\n\r\n          <!--/sidebar-->\r\n        </div>\r\n      </div>\r\n    </section>\r\n    <!--/js-tab-content-->\r\n    <section class=\"section js-tab-content souvenirs\">\r\n      <div class=\"container\">\r\n        <h2 class=\"section__title section__title--kran\">Сувеніри</h2>\r\n        <div class=\"main\">\r\n          <div class=\"filter\">\r\n            <div class=\"filter__sort\">\r\n              <div class=\"filter__sort-direction down\">\r\n                <svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 512 512\">\r\n                  <!-- Font Awesome Pro 5.15.4 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) --><path d=\"M240 96h64a16 16 0 0 0 16-16V48a16 16 0 0 0-16-16h-64a16 16 0 0 0-16 16v32a16 16 0 0 0 16 16zm0 128h128a16 16 0 0 0 16-16v-32a16 16 0 0 0-16-16H240a16 16 0 0 0-16 16v32a16 16 0 0 0 16 16zm256 192H240a16 16 0 0 0-16 16v32a16 16 0 0 0 16 16h256a16 16 0 0 0 16-16v-32a16 16 0 0 0-16-16zm-256-64h192a16 16 0 0 0 16-16v-32a16 16 0 0 0-16-16H240a16 16 0 0 0-16 16v32a16 16 0 0 0 16 16zm-64 0h-48V48a16 16 0 0 0-16-16H80a16 16 0 0 0-16 16v304H16c-14.19 0-21.37 17.24-11.29 27.31l80 96a16 16 0 0 0 22.62 0l80-96C197.35 369.26 190.22 352 176 352z\"/>\r\n                </svg>\r\n                <svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 512 512\"><!-- Font Awesome Pro 5.15.4 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) --><path d=\"M304 416h-64a16 16 0 0 0-16 16v32a16 16 0 0 0 16 16h64a16 16 0 0 0 16-16v-32a16 16 0 0 0-16-16zm-128-64h-48V48a16 16 0 0 0-16-16H80a16 16 0 0 0-16 16v304H16c-14.19 0-21.37 17.24-11.29 27.31l80 96a16 16 0 0 0 22.62 0l80-96C197.35 369.26 190.22 352 176 352zm256-192H240a16 16 0 0 0-16 16v32a16 16 0 0 0 16 16h192a16 16 0 0 0 16-16v-32a16 16 0 0 0-16-16zm-64 128H240a16 16 0 0 0-16 16v32a16 16 0 0 0 16 16h128a16 16 0 0 0 16-16v-32a16 16 0 0 0-16-16zM496 32H240a16 16 0 0 0-16 16v32a16 16 0 0 0 16 16h256a16 16 0 0 0 16-16V48a16 16 0 0 0-16-16z\"/>\r\n                </svg>\r\n              </div>\r\n              <label class=\"filter__sort-by\">\r\n                Сортувати за:\r\n                <select class=\"filter__select\" name=\"sort-select\">\r\n                  <option value=\"price\">Ціною</option>\r\n                  <option value=\"abv\">Міцністю</option>\r\n                  <option value=\"ibu\">Гіркотою</option>\r\n                  <option value=\"density\">Щільністю</option>\r\n                </select>\r\n              </label>\r\n            </div>\r\n            <!--/filter__sort-->\r\n            <label class=\"filter__input\">\r\n              <svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 512 512\"><!-- Font Awesome Pro 5.15.4 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) --><path d=\"M505 442.7L405.3 343c-4.5-4.5-10.6-7-17-7H372c27.6-35.3 44-79.7 44-128C416 93.1 322.9 0 208 0S0 93.1 0 208s93.1 208 208 208c48.3 0 92.7-16.4 128-44v16.3c0 6.4 2.5 12.5 7 17l99.7 99.7c9.4 9.4 24.6 9.4 33.9 0l28.3-28.3c9.4-9.4 9.4-24.6.1-34zM208 336c-70.7 0-128-57.2-128-128 0-70.7 57.2-128 128-128 70.7 0 128 57.2 128 128 0 70.7-57.2 128-128 128z\"/>\r\n              </svg>\r\n              <input type=\"text\" name=\"search\" placeholder=\"знайди улюблене пиво\">\r\n            </label>\r\n\r\n            <label class=\"filter__filter\">\r\n              Тип пива:\r\n              <select class=\"filter__select\" name=\"filter-select\">\r\n                <option value=\"light-filtered\">Світле фільтроване</option>\r\n                <option value=\"light-nonfiltered\">Світле нефільтроване</option>\r\n                <option value=\"dark-filtered\">Темне фільтроване</option>\r\n                <option value=\"cider\">Сидр</option>\r\n              </select>\r\n            </label>\r\n            <!--/filter__filter-->\r\n          </div>\r\n          <!--/filter-->\r\n          <div class=\"main__info\">\r\n          </div>\r\n          <!--/info-->\r\n          <!--/sidebar-->\r\n        </div>\r\n      </div>\r\n    </section>\r\n    <!--/js-tab-content-->\r\n  </main>\r\n\r\n  <footer class=\"footer\">\r\n    <div class=\"container\">\r\n      <p class=\"copyright\">© «Beer Station №1» 2023</p>\r\n      <a class=\"footer__item\" href=\"tel:+380971470077\">\r\n        <svg class=\"header__icon\" xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 512 512\"><!-- Font Awesome Pro 5.15.4 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) --><path d=\"M497.39 361.8l-112-48a24 24 0 0 0-28 6.9l-49.6 60.6A370.66 370.66 0 0 1 130.6 204.11l60.6-49.6a23.94 23.94 0 0 0 6.9-28l-48-112A24.16 24.16 0 0 0 122.6.61l-104 24A24 24 0 0 0 0 48c0 256.5 207.9 464 464 464a24 24 0 0 0 23.4-18.6l24-104a24.29 24.29 0 0 0-14.01-27.6z\"/></svg>\r\n        <span>+38(097)147-00-77</span>\r\n      </a>\r\n    </div>\r\n  </footer>\r\n  <!--<div class=\"d-none\">\r\n    <img src=\"img/lemonade-m.jpg\" alt=\"\">\r\n  </div>-->\r\n\r\n\r\n  <div class=\"to-top hidden\" id=\"to-top\">\r\n    <svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 512 512\"><!-- Font Awesome Pro 5.15.4 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) --><path d=\"M256 504c137 0 248-111 248-248S393 8 256 8 8 119 8 256s111 248 248 248zm0-448c110.5 0 200 89.5 200 200s-89.5 200-200 200S56 366.5 56 256 145.5 56 256 56zm20 328h-40c-6.6 0-12-5.4-12-12V256h-67c-10.7 0-16-12.9-8.5-20.5l99-99c4.7-4.7 12.3-4.7 17 0l99 99c7.6 7.6 2.2 20.5-8.5 20.5h-67v116c0 6.6-5.4 12-12 12z\"/></svg>\r\n  </div>\r\n\r\n  <" + "script src=\"https://cdnjs.cloudflare.com/ajax/libs/basicLightbox/5.0.0/basicLightbox.min.js\" integrity=\"sha512-jIc3kBeyfyLXBTmzUIXnbGiVK2wgWGcDIkJwkFW4bQ6v2h/piOKLwIfy3wOmKHWIu8DgYSKVth0DMUvExMYcOw==\" crossorigin=\"anonymous\" referrerpolicy=\"no-referrer\"><" + "/script>\r\n</body>\r\n</html>";
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

/***/ "./src/img/bocal.jpg":
/*!***************************!*\
  !*** ./src/img/bocal.jpg ***!
  \***************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "img/bocal.jpg";

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

/***/ "./src/products.json":
/*!***************************!*\
  !*** ./src/products.json ***!
  \***************************/
/***/ ((module) => {

"use strict";
module.exports = JSON.parse('[{"name":"lemonade","type":"ba","imgPreview":"img/limonad.jpg","title":"Напій безалкогольний «Лимонад» в кегах","subtitle":"Вінницька харчосмакова фабрика","price":"34","modalImages":[{"src":"img/lemonade-m.jpg","alt":"лимонад,зображення"},{"src":"img/lemonade-m1.jpg","alt":"лимонад,зображення"}],"desc":["Лимонад - легкий освіжаючий напій, який виготовляється в найкращих традиціях вітчизняної безалкогольної промисловості.","Цей напій прийшов до нас із Франції - країни з багатою кулінарною історією (саме від французького «limonade», що означає щось на кшталт «лімонізований», і виникло слово «лимонад»).","З\'явившись у епоху Петра I, лимонад отримав розповсюдження в усіх пострадянський країнах. Згадуючи цю назву, ми - дорослі - поринаємо у дитинство, згадуємо прогулянки з батьками в парках, сімейні свята."]},{"name":"cidr-strawberry","type":"alcohol","imgPreview":"img/cidre-logo.png","title":"Cidre Royal з Полуницею","subtitle":"Роял Фрут Гарден, солодкий сидр","alcohol":"5","price":"64","modalImages":[{"src":"img/cidr-strawberry-m.jpg","alt":"сидр,зображення"},{"src":"img/cidre-logo-m.png","alt":"сидр,зображення"}],"desc":["Яблучний купажний сидр із додаванням соку стиглої ароматної полуниці стане примою кожного святкового столу. Поціновувачі нових та оригінальних смаків можуть сміливо замінити цим напоєм деякі види ігристих вин. Приємний смак сидру допоможе підняти настрій та залишить приємні враження від дегустації"]},{"name":"cidr-mango-peach","type":"alcohol","imgPreview":"img/cidre-logo.png","title":"Cidre Royal Манго-Персик","subtitle":"Роял Фрут Гарден, кисло-солодкий сидр","alcohol":"5","price":"64","modalImages":[{"src":"img/cidre-manho-persyk.jpg","alt":"сидр,зображення"},{"src":"img/cidre-logo-m.png","alt":"сидр,зображення"}],"desc":["Напій має приємний свіжий смак , в якому приємна яблучна кислинка ідеально поєднується з екзотичною солодкістю манго та персика."]},{"name":"cidr-cactus","type":"alcohol","imgPreview":"img/cidre-logo.png","title":"Cidre Royal Кактус","subtitle":"Роял Фрут Гарден, пікантний та яскравий смаковий букет","alcohol":"5","price":"62","modalImages":[{"src":"img/cidr-cactus.jpg","alt":"сидр,зображення"},{"src":"img/cidre-logo-m.png","alt":"сидр,зображення"}],"desc":["Колючі бульбашки піднімають настрій. Після келиха сидру, швидше за все, захочеться одягнутись у сомбреро і зіграти на укулелі, так що кличте друзів і влаштовуйте галасливі посиденьки. Відмінно освіжає і вгамовує спрагу."]},{"name":"cidr-medusa","type":"alcohol","imgPreview":"img/cidre-logo.png","title":"Cidre Royal - Медуза","subtitle":"Роял Фрут Гарден, пікантний та яскравий сидр","alcohol":"6","price":"58","modalImages":[{"src":"img/cidre-medusa.jpg","alt":"сидр,зображення"},{"src":"img/cidre-logo-m.png","alt":"сидр,зображення"}],"desc":["Напій \\"Медуза\\" – вишуканий, авторський, крафтовий коктейль. Він характеризується ананасово-журавлинним смаком з легким персиковим відтінком."]},{"name":"chips-assortment","type":"appetizer","imgPreview":"img/chips.jpg","title":"Чіпси в асортименті","subtitle":"Сіль, сир, бекон, паприка","price":"25","modalImages":[{"src":"img/chips-m.jpg","alt":"чіпси,зображення"},{"src":"img/chips.jpg","alt":"чіпси,зображення"}],"desc":["Чудово смакують під пінне. Далі даммі тескст Далі даммі тескст Далі даммі тескст Далі даммі тескст Далі даммі тескст Далі даммі тескст Далі даммі тескст","Чудово смакують під пінне. Далі даммі тескст Далі даммі тескст Далі даммі тескст Далі даммі тескст Далі даммі тескст Далі даммі тескст Далі даммі тескст"]},{"name":"bocal-glass","type":"souvenirs","imgPreview":"img/bocal.jpg","title":"Келих для пива Франциск Spiegelau Beer Classics 500 мл","subtitle":"Гарний подарунок для поціновувачів вишуканого посуду.","price":"50","modalImages":[{"src":"img/bocal.jpg","alt":"бокал,зображення"},{"src":"img/bocal.jpg","alt":"бокал,зображення"}],"desc":["Німецька компанія Spiegelau виготовляє вишуканий безсвинцевий кришталь преміум якості.\\nПерша згадка про завод скляних дзеркал у Spiegelau датується 1521 роком.","Сьогодні бренд із багатовіковою історією виготовляє келихи, декантери, графини, поєднуючи традиції з інноваціями. Вся продукція має високу прозорість поверхні, стійкість до ударів, впливу світла та хімічного впливу.\\nОсобливість продукції бренду – в ідеальному сяйві поверхні навіть після 1500 циклів у посудомийній машині.\\nДовговічність виробів досягається завдяки технології Platinum Glass – на етапі виробництва рідке скло проходить очистку від домішок у платинових трубах."]}]');

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
/* harmony import */ var _index_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.html */ "./src/index.html");
/* harmony import */ var _scss_style_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./scss/style.scss */ "./src/scss/style.scss");
/* harmony import */ var _js_sort__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./js/sort */ "./src/js/sort.js");
/* harmony import */ var _js_sort__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_js_sort__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _js_scrollToTop__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./js/scrollToTop */ "./src/js/scrollToTop.js");
/* harmony import */ var _js_scrollToTop__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_js_scrollToTop__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _js_generateProductsTemplate__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./js/generateProductsTemplate */ "./src/js/generateProductsTemplate.js");
/* harmony import */ var _js_modal__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./js/modal */ "./src/js/modal.js");
/* harmony import */ var _js_tabs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./js/tabs */ "./src/js/tabs.js");
/* harmony import */ var _js_tabs__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_js_tabs__WEBPACK_IMPORTED_MODULE_6__);







})();

/******/ })()
;
//# sourceMappingURL=index.js.map