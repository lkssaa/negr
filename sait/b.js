// Declare navLinks outside of the DOMContentLoaded event listener
let navLinks;

document.addEventListener('DOMContentLoaded', () => {
    const contentDiv = document.querySelector('.content');
    // Assign navLinks here so it's accessible outside
    navLinks = document.querySelectorAll('.ruButton');
});

const loadPage = (url) => {
    fetch(url)
       .then(response => response.text())
       .then(html => {
            const parser = new DOMParser();
            const doc = parser.parseFromString(html, 'text/html');
            const newContent = doc.querySelector('.content').innerHTML;
            contentDiv.innerHTML = newContent;
        })
}

// Now navLinks is accessible here
navLinks.forEach(el => {
    el.addEventListener('click', (e) => {
        e.preventDefault();
        const url = e.currentTarget.getAttribute('href');
        loadPage(url);
    });
});
