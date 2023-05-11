const icons = document.querySelectorAll('.type__list-icons');

icons.forEach((icon) => {
    icon.addEventListener('click', (e) => {
        icons.forEach((icon) => {
            icon.classList.remove('clicked');
        })
        const target = e.currentTarget;
        target.classList.add('clicked');
        const isDownPresent = target.classList.contains('down');
        const isUpPresent = target.classList.contains('up');
        if (isDownPresent) {
            target.classList.remove('down');
            target.classList.add('up');
        }
        if (isUpPresent) {
            target.classList.remove('up');
            target.classList.add('down');
        }
    })
})