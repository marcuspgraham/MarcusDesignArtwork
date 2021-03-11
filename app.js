const navSlides = () => {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav-links ');
    const navLinks = document.querySelectorAll('.nav-links li');

    var mainOne = document.getElementById("main");
    
    burger.addEventListener('click', () => {
        //Toggle Nav
        nav.classList.toggle('nav-active');
        // Animate Links
        navLinks.forEach((link, index) => {
            if(link.style.animation) {
                link.style.animation = '';
            } else {
                link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.5}s`
            }

            if (mainOne.style.display === "none") {
                mainOne.style.display = "block";
              } else {
                mainOne.style.display = "none";
              }
        });
        // burger animation
        burger.classList.toggle('toggle');
    });
}

navSlides();


