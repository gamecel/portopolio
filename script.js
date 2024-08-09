document.querySelector('button').addEventListener('click', function() {
    alert('Thanks for reaching out!');
});
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});
document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();
    alert('Formulir berhasil dikirim!');
});
document.getElementById('search-form').addEventListener('submit', function(event) {
    event.preventDefault();
    var query = document.getElementById('search-input').value.toLowerCase();
    var elements = document.querySelectorAll('h2, h3, p');
    elements.forEach(function(element) {
        if (element.textContent.toLowerCase().includes(query)) {
            element.style.backgroundColor = 'yellow';
        } else {
            element.style.backgroundColor = '';
        }
    });
});
