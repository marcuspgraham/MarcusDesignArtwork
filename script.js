
const menuToggle = document.querySelector('.toggle')
const showcase = document.querySelector('.showcase')

menuToggle.addEventListener('click', () => {
    menuToggle.classList.toggle('active')
    showcase.classList.toggle('active')
})



mainOne.addEventListener('click', () => {
    mainOne.style.display = 'none';
    console.log('mainOne');
})