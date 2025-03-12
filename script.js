document.addEventListener('DOMContentLoaded', () => {
    const contactLink = document.querySelector('#contact a');

    contactLink.addEventListener('click', (e) => {
        e.preventDefault();
        alert('Email: vinay.ainala@sasi.ac.in\nFeel free to reach out!');
    });
});
