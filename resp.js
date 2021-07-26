var burger = document.querySelector('.burger');
var navbar = document.querySelector('.navbar') 
var navlist =document.querySelector('.navlist')
var rightnav = document.querySelector('.rightnav')
burger.addEventListener('click',()=>{
    navlist.classList.toggle('v-class')
    rightnav.classList.toggle('v-class')
    navbar.classList.toggle('h-nav')
})