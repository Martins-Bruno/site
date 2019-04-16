/*

  Scripts JS da página https://martins-bruno.github.io/site
  Autor: Bruno Martins
  Contato: devbrunomartins@gmail.com

*/

// Declaração de constantes e variáveis globais;

// Pega os spans do btn;
const spans = document.querySelectorAll('.btn span');

// Pega o dropmenu, a lista e os items, respectivamente;
const menu = document.querySelector('.menu');
const menuUl = document.querySelector('.menu ul');
const menuLi = document.querySelectorAll('.menu li');

// Pega o elemento cover;
const cover = document.querySelector('.cover');

// Variável que indica se o dropmenu está aberto ou fechado;
let menuIsOpen = false;

// Função que abre ou fecha o dropmenu;
// Se dropmenuOpen == false então abre o menu, e vice-versa;
function openOrCloseMenu() {

  if (menuIsOpen == false) { // Caso o menu esteja fechado;

    spans[0].style.transform = "translate3d(0, 8px, 0)";
    spans[2].style.transform = "translate3d(0, -8px, 0)";
    cover.style.visibility = "visible";
    cover.style.opacity = "1";
    menu.style.visibility = "visible";
    menu.style.transform = "translate3d(0, 0, 0)";
    menuUl.style.transition = "800ms ease-in-out";
    menuUl.style.visibility = "visible";
    menuUl.style.opacity = "1";

    menuLi.forEach((element, i) => {
      setTimeout(function() {
        element.style.opacity = "1";
      });
    })
    
    // Muda o valor para aberto;
    menuIsOpen = true;

  }
  else if (menuIsOpen == true) { // Caso esteja aberto;

    spans[0].style.transform = "translate3d(0, 0, 0)";
    spans[2].style.transform = "translate3d(0, 0, 0)";
    cover.style.visibility = "hidden";
    cover.style.opacity = "0";
    menu.style.transform = "translate3d(0, 100%, 0)";
    menu.style.visibility = "hidden";
    menuUl.style.transition = "300ms ease-in-out";
    menuUl.style.visibility = "hidden";
    menuUl.style.opacity = "0";

    menuLi.forEach((element, i) => {
      setTimeout(function() {
        element.style.opacity = "0";
      });
    })

    // Muda o valor para fechado;
    menuIsOpen = false;
  }

}


// Função que apenas fecha o dropmenu;
function closeMenu() {

  if (menuIsOpen == true) {
    openOrCloseMenu();
  }

}

// Função chamada no evento scroll que fecha o menu, se aberto;
window.addEventListener('scroll', function() {
  closeMenu();
})
