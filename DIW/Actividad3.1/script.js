document.addEventListener('scroll', function() {
    const scrollIndicator = document.getElementById('scrollIndicator');
    const windowHeight = window.innerHeight;
    const fullHeight = document.documentElement.scrollHeight;
    const scrolled = window.scrollY;

    const scrollPercent = (scrolled / (fullHeight - windowHeight)) * 100;
    scrollIndicator.style.width = scrollPercent + '%';
});
