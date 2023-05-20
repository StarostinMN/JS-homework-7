// 1. Ко всем элементам, имеющим класс "dropdown-item" добавить еще один класс "super-dropdown", необходимо использовать методы forEach и querySelectorAll и свойство classList у элементов.
const dropdownItemElem = document.querySelectorAll('.dropdown-item');
dropdownItemElem.forEach(elem=>elem.classList.add('super-dropdown'));

// 2. У элемента с классом btn необходимо убрать класс "btn-secondary", если он присутствует у этого элемента, либо добавить, если такого класса у элемента не было.
const btnElem = document.querySelectorAll('.btn');
btnElem.forEach(elem=>elem.classList.toggle('btn-secondary'));

// 3. Необходимо удалить класс "dropdown-menu" у элемента, у которого присутствует класс "menu".
const dropdownMenu = document.querySelectorAll('.menu');
dropdownMenu.forEach(elem=>elem.classList.remove('dropdown-menu'));

// 4. Используя метод insertAdjacentHTML добавьте после div'a с классом "dropdown" следующую разметку:
// `<a href="#">link</a>`

/* const dropdownDivElem = document.querySelector('div.dropdown');
dropdownDivElem.insertAdjacentHTML('afterend','<a href="#">link</a>'); */

const dropdownDivElem = document.querySelectorAll('div.dropdown');
dropdownDivElem.forEach(elem=>elem.insertAdjacentHTML('afterend','<a href="#">link</a>'));

// 5. У элемента с id "dropdownMenuButton" замените id на "superDropdown".
const dropdownMenuButton = document.querySelector('#dropdownMenuButton');
dropdownMenuButton.setAttribute('id','superDropdown');

// 6. Добавьте атрибут data-dd со значением 3 элементу у которого существует атрибут "aria-labelledby" равный "dropdownMenuButton" используя dataset.
const ariaLabelledby = document.querySelectorAll('[aria-labelledby = "dropdownMenuButton"]');
ariaLabelledby.forEach(elem=>elem.setAttribute('data-dd','3'));

// 7. Удалите атрибут type у элемента с классом "dropdown-toggle".
const dropdownToggle  = document.querySelectorAll('[type]');
dropdownToggle.forEach(elem=>elem.removeAttribute('type'));

