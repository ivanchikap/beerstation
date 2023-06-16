import products from '../products.json';

const alcoholProducts = products.filter(product => product.type === 'alcohol');
const baProducts = products.filter(product => product.type === 'ba');
const appetizerProducts = products.filter(product => product.type === 'appetizer');
const souvenirsProducts = products.filter(product => product.type === 'souvenirs');


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

    const alcoholPercentage = Math.round((prod.alcohol / maxAlcohol) * 100) || 0;
    const alcoholStyle = `width: ${alcoholPercentage}%`;

    const bitternessPercentage = Math.round((prod.bitterness / maxBitterness) * 100) || 0;
    const bitternessStyle = `width: ${bitternessPercentage}%`;

    const densityPercentage = Math.round((prod.density / maxDensity) * 100) || 0;
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
        </div>`
}