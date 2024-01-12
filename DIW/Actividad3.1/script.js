document.addEventListener("scroll", function () {
  const scrollIndicator = document.getElementById("scrollIndicator");
  const windowHeight = window.innerHeight;
  const fullHeight = document.documentElement.scrollHeight;
  const scrolled = window.scrollY;

  const scrollPercent = (scrolled / (fullHeight - windowHeight)) * 100;
  scrollIndicator.style.width = scrollPercent + "%";
});

document.addEventListener("DOMContentLoaded", function () {
  setTimeout(function () {
    document.getElementById("loader").style.opacity = "0";
    document.getElementById("content").style.opacity = "1";
  }, 3000); 
});

document.addEventListener("DOMContentLoaded", function () {
  
  const loader = document.getElementById("loader");

  
  setTimeout(() => {
    loader.style.opacity = "0"; 
    loader.style.display = "none"; 
  }, 3000);

  loader.style.display = "flex";
});
