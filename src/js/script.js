window.addEventListener('DOMContentLoaded', () => {
    const menu = document.querySelector('.menu'),
    menuItem = document.querySelectorAll('.menu_item'),
    hamburger = document.querySelector('.hamburger');

    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('hamburger_active');
        menu.classList.toggle('menu_active');
    });

    menuItem.forEach(item => {
        item.addEventListener('click', () => {
            hamburger.classList.toggle('hamburger_active');
            menu.classList.toggle('menu_active');
        })
    })
})

$(document).ready(function(){ 

  function valideForms(form){
    $(form).validate({
      rules: {
        name: 'required',
        phone: 'required',
        email: {
          required:true,
          email:true,
        }
      },
      messages: {
        name: "Пожалуйста,введите своё имя",
        phone:'Пожалуйста,введите свой номер телефона',
        email: {
          required: "Нам нужен ваш адрес для того чтобы связаться с вами",
          email: "Ваш адрес не соответствует правильному формату"
        }
      }
    });
  };

  valideForms('#about-form');
  valideForms('#questions-form');

  $('input[name=phone]').mask("+7 (999) 999-99-99");

  $('form').submit(function(e) {
    e.preventDefault();

    if(!$(this).valid()) {
      return;
    };

    $.ajax({
      type: "POST",
      url: "mailer/smart.php",
      data: $(this).serialize()
    }).done(function() {
      $(this).find("input").val("");
      // $('#consultation, #order').fadeOut();
      // $('.overlay, #thanks').fadeIn('slow');

      $('form').trigger('reset');
    });
    return false;
  });

    $('.button').on('click', function() {
    $('.overlay, #thanks').fadeIn('slow');

  });
  });

  $('.modal__close').on('click', function() {
    $('.overlay, #consultation, #order, #thanks').fadeOut('slow');
});

