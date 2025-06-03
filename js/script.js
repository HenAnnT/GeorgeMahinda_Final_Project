function toggleMenu() {
    document.getElementById('navLeft').classList.toggle('open');
    document.getElementById('navRight').classList.toggle('open');
}


document.querySelectorAll('.faq-question').forEach(q => {
    q.addEventListener('click', () => {
        const answer = q.nextElementSibling;
        answer.classList.toggle('show');
    });
});


    let prevScrollPos = window.pageYOffset;
    const header = document.querySelector("header");

    window.addEventListener("scroll", () => {
    const currentScrollPos = window.pageYOffset;
    header.style.top = (prevScrollPos > currentScrollPos) ? "0" : "-100px";
    prevScrollPos = currentScrollPos;
});

