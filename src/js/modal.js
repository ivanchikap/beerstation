import Siema from 'siema';

const cards = document.querySelectorAll('.card');


cards.forEach((card) => {
    card.addEventListener('click', onCardClick);
})


function onCardClick(e) {
    e.preventDefault();

    const body = document.body;
    const card = e.currentTarget;
    const cardImgSrc = card.querySelector('.js-img').src;
    const cardImgAlt = card.querySelector('.js-img').alt
    const title = card.querySelector('.card__title').textContent;

    if (!(e.target.classList.contains('js-img')
        || e.target.classList.contains('card__img')
        || e.target.classList.contains('card__title')
        || e.target.classList.contains('card__details')
    )) {
        return
    }

    body.classList.add('no-scroll');

    const instance = basicLightbox.create(`        
        <div class="modal">
            <svg class="modal__close" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--! Font Awesome Pro 6.4.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path d="M256 48a208 208 0 1 1 0 416 208 208 0 1 1 0-416zm0 464A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM175 175c-9.4 9.4-9.4 24.6 0 33.9l47 47-47 47c-9.4 9.4-9.4 24.6 0 33.9s24.6 9.4 33.9 0l47-47 47 47c9.4 9.4 24.6 9.4 33.9 0s9.4-24.6 0-33.9l-47-47 47-47c9.4-9.4 9.4-24.6 0-33.9s-24.6-9.4-33.9 0l-47 47-47-47c-9.4-9.4-24.6-9.4-33.9 0z"/>
            </svg>
            <div class="modal__left">
                <div class="siema">
                    <div class="modal__img">
                        <img class="js-img" src="${cardImgSrc}" alt="${cardImgAlt}">
                    </div>
                     <div class="modal__img">
                        <img class="js-img" src="${cardImgSrc}" alt="${cardImgAlt}">
                    </div>
                     <div class="modal__img">
                        <img class="js-img" src="${cardImgSrc}" alt="${cardImgAlt}">
                    </div>     
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
                <h2 class="modal__title">${title}</h2>
                <h3 class="modal__beertype">Уманьпиво, світле нефільтроване</h3>
                
                 <div class="modal__price-wrapper">
                     <div class="modal__price">
                       <span>64₴</span>
                       <span>за 1кг</span>
                     </div>                   
                      <button class="btn btn--default">Придбати</button>
                 </div>
                    
                <div class="modal__testimonial">
                  <div class="modal__test-item">
                    <h6 class="modal__test-title">Міцність</h6>
                    <p class="modal__test-value">5 %</p>
                    <div class="modal__test-progress">
                      <div style="width: 30%"  class="modal__test-progress-value"></div>
                    </div>
                  </div>
                  <div class="modal__test-item">
                    <h6 class="modal__test-title">Гіркота</h6>
                    <p class="modal__test-value">16</p>
                    <div class="modal__test-progress">
                      <div style="width: 60%"  class="modal__test-progress-value"></div>
                    </div>
                  </div>
                  <div class="modal__test-item">
                    <h6 class="modal__test-title">Щільність</h6>
                    <p class="modal__test-value">13 %</p>
                    <div class="modal__test-progress">
                      <div style="width: 80%"  class="modal__test-progress-value"></div>
                    </div>
                  </div>
                </div>
                <!--/card__testimonial-->
                <div class="modal__description">
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad aliquam amet autem dignissimos dolor dolore et explicabo fugiat hic incidunt neque nostrum nulla quas quia, recusandae rem repellendus tempore voluptate?</p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad aliquam amet autem dignissimos dolor dolore et explicabo fugiat hic incidunt neque nostrum nulla quas quia, recusandae rem repellendus tempore voluptate?</p><p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad aliquam amet autem dignissimos dolor dolore et explicabo fugiat hic incidunt neque nostrum nulla quas quia, recusandae rem repellendus tempore voluptate?</p><p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad aliquam amet autem dignissimos dolor dolore et explicabo fugiat hic incidunt neque nostrum nulla quas quia, recusandae rem repellendus tempore voluptate?</p><p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad aliquam amet autem dignissimos dolor dolore et explicabo fugiat hic incidunt neque nostrum nulla quas quia, recusandae rem repellendus tempore voluptate?</p><p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad aliquam amet autem dignissimos dolor dolore et explicabo fugiat hic incidunt neque nostrum nulla quas quia, recusandae rem repellendus tempore voluptate?</p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad aliquam amet autem dignissimos dolor dolore et explicabo fugiat hic incidunt neque nostrum nulla quas quia, recusandae rem repellendus tempore voluptate?</p><p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad aliquam amet autem dignissimos dolor dolore et explicabo fugiat hic incidunt neque nostrum nulla quas quia, recusandae rem repellendus tempore voluptate?</p><p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad aliquam amet autem dignissimos dolor dolore et explicabo fugiat hic incidunt neque nostrum nulla quas quia, recusandae rem repellendus tempore voluptate?</p><p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad aliquam amet autem dignissimos dolor dolore et explicabo fugiat hic incidunt neque nostrum nulla quas quia, recusandae rem repellendus tempore voluptate?</p><p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad aliquam amet autem dignissimos dolor dolore et explicabo fugiat hic incidunt neque nostrum nulla quas quia, recusandae rem repellendus tempore voluptate?</p>
                </div>
            </div>
        </div>
    `, {
        onShow: (instance) => {
            instance.element().querySelector('.modal__close').onclick = instance.close
            document.onkeydown = function (evt) {
                evt = evt || window.event;
                let isEscape = false;
                if ("key" in evt) {
                    isEscape = (evt.key === "Escape" || evt.key === "Esc");
                } else {
                    isEscape = (evt.keyCode === 27);
                }
                if (isEscape) {
                    instance.close();
                }
            };

            const angleLeft = instance.element().querySelector('.modal__angle--left');
            const angleRight = instance.element().querySelector('.modal__angle--right');

            angleLeft.addEventListener('click', () => {
                siema.prev(1);
            });
            angleRight.addEventListener('click', () => {
                siema.next(1);
            });
        },
        onClose: (instance) => {
            body.classList.remove('no-scroll')
        }
    })

    instance.show();

    const siema = new Siema({
        selector: '.siema',
        duration: 200,
        easing: 'ease-out',
        perPage: 1,
        startIndex: 1,
        draggable: true,
        multipleDrag: true,
        threshold: 20,
        loop: false,
        rtl: false,
        onInit: () => {
        },
        onChange: () => {
            const angleLeft = instance.element().querySelector('.modal__angle--left');
            const angleRight = instance.element().querySelector('.modal__angle--right');
            const siemaChildrenCount = document.querySelector('.siema > div').children.length - 1;

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
        },
    });

}






