const menuBtn = document.querySelector('.menu-btn');
const nav = document.querySelector('.pages');
const cadVaga = document.querySelector('#cadastro-vaga');
const buscVaga = document.querySelector('#busca-vaga');
const myInfo = document.querySelector('#my-info');
const activePage = window.location.pathname;

menuBtn.addEventListener('click', () => {
    nav.classList.toggle("ext");
})

cadVaga.addEventListener('click', () => {
    window.alert("Você precisa estar logado para utilizar essa função!");
    cadVaga.href = '/assets/pages/login.html'
})

myInfo.addEventListener('click', () => {
    window.alert("Você precisa estar logado para utilizar essa função!");
    myInfo.href = "/assets/pages/login.html";
})