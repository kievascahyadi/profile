//const barButton = document.getElementById ('bar-button')
//const navList = document.getElementsById ('menu-list')

//function toggleButton () {
//    navList.classList.toggle ('show')}

//barButton.addEventListener('click',toggleButton)

const barButton = document.getElementById ('hamburger')
const navList = document.getElementById ('nav-list')
function toggleButton(){
    navList.classList.toggle('show')
}
barButton.addEventListener('click',toggleButton)