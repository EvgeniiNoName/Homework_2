tabs = document.querySelectorAll(`.tab`);
tabContent = document.querySelectorAll(`.tab__content`);

tabs.forEach ((tab, index) => {
    tab.addEventListener(`click`, () => {     
        tabs.forEach(t => t.classList.remove('tab_active'));
        tab.classList.add('tab_active');
        tabContent.forEach(t => t.classList.remove('tab__content_active'));
        tabContent[index].classList.add('tab__content_active');
        })
    });