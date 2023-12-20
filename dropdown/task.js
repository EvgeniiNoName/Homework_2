let value = document.getElementsByClassName(`dropdown__value`)[0];
let list = document.getElementsByClassName(`dropdown__list`)[0];
let linkList = document.querySelectorAll(`.dropdown__link`);

value.onclick = () => {
        list.classList.toggle('dropdown__list_active');
    }

linkList.forEach(function (link) {
    link.addEventListener(`click`, function(event) {
        event.preventDefault();
        value.textContent = link.textContent
        list.classList.toggle('dropdown__list_active');
    })
})
