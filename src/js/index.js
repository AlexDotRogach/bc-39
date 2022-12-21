// fetch('https://pokeapi.co/api/v2/pokemon/?limit=20&offset=20')

/* <div class="pokemon__item">
  <span>name of pokemon</span>
  <button>load more info</button>
  <div class="more-info"></div>
</div> */

import pokemonApi from './api/pokemonApi.js';
const contEl = document.querySelector('.pokemon__wrapper');
const loadMore = document.querySelector('.load__more');
let URL = 'https://pokeapi.co/api/v2/pokemon/?limit=20';
pokemonApiRenderPokemons(URL);

const pokemonApiRenderPokemonsWithParam = () => pokemonApiRenderPokemons(URL);

loadMore.addEventListener('click', pokemonApiRenderPokemonsWithParam);

// more info
// 1. Получаешь элемент

// 2. Вешаешь обработчик
contEl.addEventListener('click', clickItem);
// 3. Проверяешь кнопка или нет (по класу)
// 4. Достаем url
// 5. Делаем запрос
// 6. Рендерим данные на основе запроса
function renderMoreInfo(obj, target) {
  const { nextElementSibling: moreInfo } = target;
  if (moreInfo.classList.contains('show')) {
    moreInfo.classList.remove('show');
    return '';
  }
  moreInfo.classList.add('show');
  moreInfo.innerHTML = '';
  moreInfo.insertAdjacentHTML('beforeend', createMarkupPokemon(obj));
}
// 7. Если еще раз нажали на кнопку скрываем
function createMarkupPokemon({ height, weight, sprites: { front_default } }) {
  return `<img src=${front_default} alt="pokemon">
  <span class="height">${height}</span>
  <span class="weight">${weight}</span>`;
}
function clickItem(event) {
  if (event.target.dataset.url) {
    const btnUrl = event.target.dataset.url;
    pokemonApi(btnUrl).then(data => renderMoreInfo(data, event.target));
  }
}
// end more info

// load more and first rendering
function pokemonApiRenderPokemons(url) {
  pokemonApi(url).then(data => {
    if (!data) {
      loadMore.style.display = 'none';
      return '';
    }

    URL = data.next;
    renderPokemons(contEl, data.results);
  });
}

function createMarkup({ name, url }) {
  return ` <div class="pokemon__item">
  <span>${name}</span>
  <button data-url=${url}>load more info</button>
  <div class="more-info"></div>
</div> `;
}

function renderPokemons(parent, arr) {
  parent.insertAdjacentHTML(
    'beforeend',
    arr.map(obj => createMarkup(obj)).join('')
  );
}

// end load more
