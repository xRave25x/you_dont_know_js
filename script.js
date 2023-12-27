'use strict';

const book = document.querySelectorAll('.book');
const bookH2 = document.querySelectorAll('.book > h2')
const chapter = document.querySelectorAll('.book > ul > li');
const adv = document.querySelector('.adv');

const newElem = document.createElement('li');
newElem.textContent = 'Глава 8: За пределами ES6';

document.body.style.backgroundImage = 'url(./image/you-dont-know-js.jpg)';

book[0].before(book[1]);
book[4].after(book[2]);
book[3].before(book[4]);
book[2].before(book[5]);

bookH2[4].innerHTML = '<a href="https://github.com/azat-io/you-dont-know-js-ru/blob/master/this%20%26%20object%20prototypes/README.md#you-dont-know-js-this--object-prototypes"target="_blank">Книга 3. this и Прототипы Объектов</a>'

adv.remove();

chapter[4].before(chapter[6]);
chapter[4].before(chapter[8]);
chapter[9].after(chapter[2])

chapter[47].after(chapter[55]);
chapter[55].after(chapter[49]);
chapter[49].after(chapter[50]);
chapter[49].after(chapter[50]);
chapter[54].before(chapter[51]);
// 25 <li>Глава 8: За пределами ES6</li>
chapter[25].after(newElem);