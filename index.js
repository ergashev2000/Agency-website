const filterButtons = document.querySelectorAll('.filter-buttons button');
const filterItems = document.querySelectorAll('.filter-item');
filterItems.forEach(item => item.classList.add('show'));

filterButtons.forEach(button => {
    button.addEventListener('click', () => {
        const filter = button.dataset.filter;
        filterItems.forEach(item => {
            if (filter === 'all' || item.dataset.id === filter) {
                item.classList.add('show');
            } else {
                item.classList.remove('show');
            }
        });
    });
});



const buttons = document.querySelectorAll('.filter-buttons button');
buttons[0].classList.add('active');
buttons.forEach(button => {
    button.addEventListener('click', function () {
        buttons.forEach(btn => btn.classList.remove('active'));
        this.classList.add('active');
    });
});



const toggleMenu = document.querySelector('.toggle-menu');
const navItems = document.querySelector('.nav__items');

toggleMenu.addEventListener('click', function () {
    navItems.classList.toggle('show');
});