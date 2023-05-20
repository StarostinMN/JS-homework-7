// 1. Ко всем элементам, имеющим класс "dropdown-item" добавить еще один класс "super-dropdown", необходимо использовать методы forEach и querySelectorAll и свойство classList у элементов.
const dropdownItemElem = document.querySelectorAll('.dropdown-item');
//console.log(dropdownItemElem);
dropdownItemElem.forEach(elem=>elem.classList.add('super-dropdown'));
//console.log(dropdownItemElem);
//dropdownItemElem.forEach(elem=>elem.classList.remove('super-dropdown'));
//console.log(dropdownItemElem);

// 2. У элемента с классом btn необходимо убрать класс "btn-secondary", если он присутствует у этого элемента, либо добавить, если такого класса у элемента не было.
const btnElem = document.querySelectorAll('.btn');
//console.log(btnElem);
btnElem.forEach(elem=>elem.classList.toggle('btn-secondary'));
//console.log(btnElem);

// 3. Необходимо удалить класс "dropdown-menu" у элемента, у которого присутствует класс "menu".
const dropdownMenu = document.querySelectorAll('.menu');
console.log(dropdownMenu);
dropdownMenu.forEach(elem=>elem.classList.remove('dropdown-menu'));
console.log(dropdownMenu);

// 4. Используя метод insertAdjacentHTML добавьте после div'a с классом "dropdown" следующую разметку:
// `<a href="#">link</a>`

/* const dropdownDivElem = document.querySelector('div.dropdown');
console.log(dropdownDivElem);
dropdownDivElem.insertAdjacentHTML('afterend','<a href="#">link</a>'); */

const dropdownDivElem = document.querySelectorAll('div.dropdown');
//console.log(dropdownDivElem);
dropdownDivElem.forEach(elem=>elem.insertAdjacentHTML('afterend','<a href="#">link</a>'));

// 5. У элемента с id "dropdownMenuButton" замените id на "superDropdown".
const dropdownMenuButton = document.querySelector('#dropdownMenuButton');
dropdownMenuButton.setAttribute('id','superDropdown');

// 6. Добавьте атрибут data-dd со значением 3 элементу у которого существует атрибут "aria-labelledby" равный "dropdownMenuButton" используя dataset.
const ariaLabelledby = document.querySelectorAll('[aria-labelledby = "dropdownMenuButton"]');
//console.log(ariaLabelledby);
ariaLabelledby.forEach(elem=>elem.setAttribute('data-dd','3'));//спросить нужны ли кавычки для числового значения - в браузере все равно одинаково отображается

// 7. Удалите атрибут type у элемента с классом "dropdown-toggle".
const dropdownToggle  = document.querySelectorAll('[type]');
console.log(dropdownToggle);
dropdownToggle.forEach(elem=>elem.removeAttribute('type'));
console.log(dropdownToggle);
