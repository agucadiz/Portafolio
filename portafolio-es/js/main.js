window.onload = function () {
  var barraCarga = document.getElementById('barra-carga');

  barraCarga.style.visibility = 'hidden';
  barraCarga.style.display = 'none';
}
$('document').ready(function () {
  //ANIMACIÓN DE "REVELACIÓN" DE TEXTO.

  /* Guardo en la variable "profesion" la etiqueta que contiene el texto 
  al cual quiero aplicar el efecto de revelado.*/
  const profesion = baffle(".profesion");

  /* Le asigno a la variable profesión (que contiene el texto que quiero animar) los caracteres a utilizar para 
  la animación del texto revelado (puedes utilizar cualquier tipo de carácteres). También asigno la velocidad que tendrá el efecto de las letras*/
  profesion.set({
    characters: '█▓▓ ░░>██ ▓█▓>▓ ▓<█ ░<▒░▓ █░<█ █▒> ▓░▓< ▒▓░░',
    speed: 90
  });

  // Ejecuto el inicio de la animacion.
  profesion.start();
  // Establezco la duración que tendrá la animación antes de revelar el texto.
  profesion.reveal(3000);

  var boton = document.getElementById('boton');

  $('#tagline').t({
    beep: false,
    caret: '<span style="color:hotpink;">•</span>',
    typing: function (elm, chr) {
      if (chr.match(/\-trigger/))
        $('#pow-txt').show().delay(500).fadeOut(0);
    }
  });

  // Control del botón para desplazarse hacia arriba en la página
  $('#boton-arriba').click(function () {
    $('body, html').animate({
      scrollTop: '0px'
    }, 300);
  });

  // Control del botón de desplazamiento hacia arriba basado en el desplazamiento vertical de la página
  $(window).scroll(function () {
    if ($(this).scrollTop() > 0) {
      $('#boton-arriba').slideDown(300);
    } else {
      $('#boton-arriba').slideUp(300);
    }
  });
});

document.addEventListener('DOMContentLoaded', function () {
  const menuItems = document.querySelectorAll('.menu a');

  window.addEventListener('scroll', function () {
    let currentSection = '';

    // Determinar la sección actual
    for (const section of document.querySelectorAll('section')) {
      const rect = section.getBoundingClientRect();
      if (rect.top <= 150 && rect.bottom > 150) {
        currentSection = section.id;
        break;
      }
    }

    // Remover la clase 'activo' de todos los elementos del menú
    menuItems.forEach(item => item.classList.remove('activo'));

    // Agregar la clase 'activo' al elemento del menú correspondiente a la sección actual
    menuItems.forEach(item => {
      if (item.getAttribute('href').slice(1) === currentSection) {
        item.classList.add('activo');
      }
    });
  });
});