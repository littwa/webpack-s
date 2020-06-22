import './styles.css';

import countries from './countries.js';
import countriesinjson from './countriesinjson.json';
import tmpl from './tmp.hbs';
import phones from './phones.js';
let _ = require('lodash');
import PuzzleGame from './PuzzleGame.js';
//=================================================================================
// //файл index.js
// import { q } from './module.js';
// console.log(q); //undefined
// //файл module.js
// export let q = 777;
//================TANK.JS==========================================================
import { Mehanika, Enemy } from './tank/Mehanika.js';
import { Tanchik } from './tank/Tanchik.js';
import SuperEnemy from './tank/Superenemy.js';
SuperEnemy;

let canv = document.querySelector('.canv');
let score = document.createElement('div');
canv.insertAdjacentElement('beforebegin', score);
score.style.height = '20px';
score.style.width = '650px';
score.style.background = '#f00';
score.textContent = `exterminated: 0 | diesel: 0`;
score.style.padding = '2px';

let enem = new Enemy();
let tan = new Tanchik();
let superEnem = new SuperEnemy();
export function fntd() {
  enem = new Enemy();
  console.log(this);
}
export function fntds() {
  superEnem = new SuperEnemy();
  console.log(this);
}
export { canv, enem, superEnem, score };

// console.log(enem.divEnemy);

//=================================================================================

//==========================PRACTIKA-13-06============================================================
//-----https://github.com/goitacademy/javascript-homework/tree/master/homework-03---------------------

// import Account from './engine/Account.js';
// import Transaction from './engine/Transaction.js';

// const bankAccount = new Account();

// bankAccount.deposit(100);
// bankAccount.deposit(50);
// bankAccount.withdraw(200); //Not enough money!
// bankAccount.deposit(50);
// bankAccount.withdraw(150);

// console.log(bankAccount.balance); //50
// console.log(bankAccount.getTransactionDetails(1)); //Transaction {id: 1, amount: 100, type: "deposit"}
// console.log(bankAccount.getTransactionTotal(Transaction.DEPOSIT)); //200
// console.log(bankAccount.balance); //50

//--------------------------Calculator-----------------------------------------------------------------------

// //   index.js

// import { Calculator } from './calc/Calculator.js';
// import { Operations } from './calc/Operations.js';

// console.log(new Calculator(2, 3, Operations.PLUS).count()); // 5
// console.log(new Calculator(5, 3, Operations.MINUS).count()); // 2
// console.log(new Calculator(2, 3, Operations.MULTY).count()); // 6
// console.log(new Calculator(4, 2, Operations.DEL).count()); // 2

//=============================RECURSIYA===================================================

// const numbers = [
//   1,
//   4,
//   5,
//   3,
//   7,
//   8,
//   3,
//   2,
//   [2, 5, 2, 4, 8, [2, 3, 4, 2, [7, [1, 2, 3], 9], 6], 9],
//   6,
//   2,
// ];

// let step = 0;
// console.log(countAllNumbers(numbers));
// function countAllNumbers(arr, sum = 0) {
//   step++;

//   let total = sum;

//   for (let i = 0; i < arr.length; i++) {
//     let prefix = '';
//     for (let i = 0; i < step - 1; i++) {
//       prefix += ' ->';
//     }
//     const cValue = arr[i];
//     const isValueIsNumber = !Number.isNaN(Number(cValue));

//     if (isValueIsNumber) {
//       total += cValue;
//       console.log(`${prefix} ${cValue} - ${total}`);
//     } else {
//       total += countAllNumbers(cValue, total);
//     }
//   }
//   step--;
//   return total - sum;
// }
//-------------------------------------------------------------------------------------
// let step = 0;
// function fn(numbers) {
//   return numbers.reduce((ac, el) => {
//     if (!Number.isNaN(Number(el))) {
//       console.log('Число:', el, 'Сума', ac + el, 'Step', step);
//     }

//     if (!Number.isNaN(Number(el))) {
//       ac += el;
//     } else {
//       step++;
//       ac += fn(el);

//       step--;
//     }

//     return ac;
//   }, 0);
// }
// // console.log(fn(numbers));
// console.log(Number.POSITIVE_INFINITY);

// console.log(Number.isNaN(Number(5)));

//==================PIXOBAY PAGINATION AUTO-SCROLL===========================================

// let pixicont = document.querySelector('.pixib');
// let templateForPixibayFatch = document.querySelector('#pixik').innerHTML.trim();
// let temFn = Handlebars.compile(templateForPixibayFatch);
// let formSerch = document.querySelector('#serch-form');
// let buttonLoadMore = document.querySelector('[data-action="loadmore"]');
// buttonLoadMore.addEventListener('click', cbLoadMore);
// formSerch.addEventListener('submit', cbl);

// let opt = {};
// function onEntr(enries, obs) {
//   console.log(enries, 12121);
//   enries.forEach(en => {
//     if (en.isIntersecting) {
//       console.log(enries, 'ITERSEC!!!');
//       obs.unobserve(pixicont.lastElementChild);
//       cbLoadMore();
//     }
//   });
// }

// let obs = new IntersectionObserver(onEntr, opt);

// function cbLoadMore() {
//   cool.nextPage();
//   cool.generate();
//   console.log(cool.page);
// }

// function cbl(e) {
//   e.preventDefault();
//   cool.resetPage();

//   let inputText = e.currentTarget.elements.inputserch.value;
//   cool.serchQw = inputText;

//   e.currentTarget.elements.inputserch.value = '';

//   pixicont.innerHTML = '';
//   cool.generate();
// }

// let cool = {
//   qw: '',
//   page: 1,
//   nextPage() {
//     this.page += 1;
//   },
//   resetPage() {
//     this.page = 1;
//   },
//   set serchQw(v) {
//     this.qw = v;
//   },
//   generate() {
//     fetch(
//       'https://pixabay.com/api/?key=16717692-bb141906bc5c82eed9886cf8d&q=' +
//         this.qw +
//         '&page=' +
//         this.page,
//     )
//       .then(r => {
//         console.log(r);
//         return r.json();
//       })
//       .then(rb => {
//         console.log(rb);
//         rb.hits.forEach(hit => {
//           pixicont.insertAdjacentHTML('beforeend', temFn(hit));
//         });
//         console.log(pixicont.lastElementChild);
//         obs.observe(pixicont.lastElementChild);
//       })
//       .catch(er => console.log(er));
//   },
// };
//===============================TEST-SERV==============================

// fetch('http://localhost:3000/users')
//   .then(resp => resp.json())
//   .then(data => console.log(data));

// // POST - создание
// const add = (name, email) => {
//   const url = 'http://localhost:3000/users';
//   const options = {
//     method: 'POST',
//     headers: {
//       'Content-Type': 'application/json',
//     },
//     body: JSON.stringify({ name, email }),
//   };

//   return fetch(url, options)
//     .then(res => res.json())
//     .then(console.log)
//     .catch(console.warn);
// };

// add('ddd', 'xxx');

// // PATCH - обновление
// const updateUser = (userId, update) => {
//   const url = `http://localhost:4040/users/${userId}`;
//   const options = {
//     method: 'PATCH',
//     headers: {
//       'Content-Type': 'application/json',
//     },
//     body: JSON.stringify(update),
//   };

//   return fetch(url, options)
//     .then(res => res.json())
//     .then(console.log)
//     .catch(console.warn);
// };

//========================FLAGI========================================

// let conteiner = document.querySelector('.con');
// let message = 'Ukraine, Germany, is a capital. Usa is same! France is Good.';
// let punctuationless = message.replace(/[\[\].,\/#!$%\^&\*;:{}=\-_`~()]/g, '');
// punctuationless.split(' ').map(w => {
//   let u = w[0].toUpperCase() === w[0];
//   if (u) {
//     fetch('https://restcountries.eu/rest/v2/name/' + w)
//       .then(r => {
//         console.log(r);
//         return r.json();
//       })
//       .then(b => {
//         message = message.replace(
//           w,
//           w + `<img src="${b[0].flag}" width=16px alt="flag">`,
//         );
//         conteiner.innerHTML = message;
//       })
//       .catch(rj => rj);
//   }
// });

//======================PAZZLE=============================================

// const gallery = {
//   title: 'Gallery',
//   items: [
//     { img: 'https://placeimg.com/300/150/animals', text: 'animals' },
//     { img: 'https://placeimg.com/300/150/arch', text: 'architecture' },
//     { img: 'https://placeimg.com/300/150/nature', text: 'nature' },
//     { img: 'https://placeimg.com/300/150/people', text: 'people' },
//     { img: 'https://placeimg.com/300/150/tech', text: 'tech' },
//     { img: 'https://placeimg.com/300/150/any', text: 'random' },
//   ],
// };
// const source = document.querySelector('#gallery').innerHTML.trim();
// const tmp = Handlebars.compile(source);
// const mark = tmp(gallery);
// const root = document.querySelector('.gallery-content');
// root.innerHTML = mark;
// root.addEventListener('click', cbb);

// function cbb(e) {
//   console.log(e);
//   if (e.target.nodeName === 'IMG' && e.target.alt === 'pic') {
//     new PuzzleGame(3, 3, '#js_puzzle_game', e.target.src);
//   }
// }

// let ddd = document.querySelector('.ddd').innerHTML.trim();
// let dddt = Handlebars.compile(ddd);

// let im = document.querySelector('.gall');
// im.addEventListener('click', cb);

// function cb(e) {
//   let fff = e.target.getAttribute('alt');

//   fetch(
//     'https://pixabay.com/api/?per_page=10&key=16179074-af34e20a8a718610998880cf4&image_type=photo&q=' +
//       fff,
//   )
//     .then(r => {
//       return r.json();
//     })
//     .then(data => {
//       data.hits.forEach(el => {
//         root.insertAdjacentHTML('beforeend', dddt(el));
//       });
//     });
// }

//========================PHONES============================================

// phones.forEach(el =>
//   document
//     .querySelector('.container')
//     .insertAdjacentHTML('afterbegin', tmpl(el)),
// );

// document.querySelector('.container').insertAdjacentHTML('afterbegin', markup);
