const listItems = document.querySelectorAll('li');
listItems.forEach(item => {
    item.addEventListener('click', function () {
        listItems.forEach(li => {
            li.style.backgroundColor = '';
        });
        this.style.backgroundColor = 'lightblue';
    });
});    