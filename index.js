const openNav = document.querySelector('.open')
const navBar = document.querySelector('nav')
const closeNav = document.querySelector('.close')
const menuOpen = document.getElementById('open')
const menuClose = document.getElementById('close')


menuOpen.addEventListener("click", ()=>{
 
    navBar.classList.add("openNav")
    closeNav.style.display = "block"
    openNav.style.display= "none"

 })

menuClose.addEventListener('click',()=> {
    navBar.classList.remove('openNav');
    closeNav.style.display = "none"
    openNav.style.display= "block"
})


// If both icons are put insise a button

// menuOpen.addEventListener("click", ()=>{
 
//     if(navBar.classList.contains('openNav')){
//    navBar.classList.remove('openNav');
//    closeNav.style.display = "none"
//    openNav.style.display= "block"
//     }else {
//        navBar.classList.add("openNav")
//        closeNav.style.display = "block"
//        openNav.style.display= "none"
   
//     }
//    })



