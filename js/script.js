// code of userName

const placeUserName = document.getElementById('userName');

setTimeout(() => {
    const userName = prompt('Please write your name:');
    if (userName && userName.trim() !== "") {
        placeUserName.innerText = `${userName.trim()}!`;
    } else {
        placeUserName.innerText = "ms";
    }
}, 300);

// the events of scrolling in ones place

const topBtn = document.getElementById('top');
const menuBtn = document.getElementById('menu-btn');
const menu = document.getElementById('nav-menu');

// varibiles of skills sections

let article = document.querySelector('.skills');
let coloredRatio = document.querySelectorAll('.colored-ratio');
let rate = document.querySelectorAll('.rate');
let started = false;

// varibiles to display elements on scrolling

const containerCards = document.querySelector('.parent');
const cards = document.querySelectorAll('.card');
const sectionContact = document.getElementById('contact');
const form = document.querySelector('form');


topBtn.onclick = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
};

window.addEventListener('scroll', () => {
    // code of btn to top
    if (window.scrollY >= 500) {
        topBtn.classList.add('active');
    } else {
        topBtn.classList.remove('active');
    };
    // code of close menu automatic in scroll
    if (window.scrollY >= 10 && menu.classList.contains('active')) {
        menu.classList.remove('active');
        menuBtn.innerHTML = '<i class="fa-solid fa-bars"></i>';
    };
    //code of skills section
    if (window.scrollY >= article.offsetTop - 200) {
        if (!started) {
            coloredRatio.forEach(span => {
                span.style.width = span.dataset.width;
            });
            rate.forEach(span => {
                let spanValue = parseInt(span.dataset.num);
                let currentValue = 0;
                let counter = setInterval(() => {
                    currentValue++;
                    span.innerText = `${currentValue}%`;
                    if (currentValue === spanValue) {
                        clearInterval(counter);
                    };
                }, 1000 / spanValue);
            });
        };
        started = true;
    };
    // code to display cards during scrolling
    if (window.scrollY >= containerCards.offsetTop - 400) {
        cards.forEach(card => {
            card.style.opacity = `1`;
            card.style.transform = `translatex(0%)`;
        });
    }
    // display form
    if (window.scrollY >= sectionContact.offsetTop - 200) {
        form.style.opacity = '1';
    }
});


// code of menu

menuBtn.onclick = () => {
    const isActive = menu.classList.toggle('active');
    menuBtn.innerHTML = isActive
        ? '<i class="fa-solid fa-xmark"></i>'
        : '<i class="fa-solid fa-bars"></i>';
};

// code of search

const searchBtn = document.getElementById('search-btn');
const searchInput = document.getElementById('search-input');

searchBtn.addEventListener('click', () => {
    let inputValue = searchInput.value;
    // we make sure the input is full
    if (inputValue.trim() !== '') {
        const placeSearch = document.querySelectorAll('h1, h2, h3, p, span, a, li');
        // operation status
        let found = false;
        placeSearch.forEach(element => {
            if (element.innerText.includes(inputValue)) {
                element.style.backgroundColor = "#ff0";
                element.scrollIntoView({ behavior: 'smooth', block: 'center' });
                found = true;
                setTimeout(() => {
                    element.style.backgroundColor = "inherit";
                }, 1000);
            }
        });
        if (!found) {
            alert(`we couldn't find the word`);
        };
    } else {
        alert('Please enter a search term.');
    }
});
