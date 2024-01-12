document.addEventListener('scroll', function() {
    const scrollIndicator = document.getElementById('scrollIndicator');
    const windowHeight = window.innerHeight;
    const fullHeight = document.documentElement.scrollHeight;
    const scrolled = window.scrollY;

    const scrollPercent = (scrolled / (fullHeight - windowHeight)) * 100;
    scrollIndicator.style.width = scrollPercent + '%';
});




  document.addEventListener("DOMContentLoaded", function () {
    setTimeout(function () {
      document.getElementById("loader").style.opacity = "0";
      document.getElementById("content").style.opacity = "1";
    }, 3000); // 3000 milliseconds (3 seconds)
  });

  document.addEventListener("DOMContentLoaded", function () {
    // Obtener el elemento del loader
    const loader = document.getElementById('loader');

    // Establecer un temporizador para ocultar el loader después de 3 segundos
    setTimeout(() => {
        loader.style.opacity = '0'; // Hacer que el loader sea transparente
        loader.style.display = 'none'; // Ocultar el loader
    }, 3000); // 3000 milisegundos = 3 segundos

    // Mostrar el loader inicialmente
    loader.style.display = 'flex';
});



