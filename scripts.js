const title = document.querySelector(".title_container");
const logo = document.querySelector(".logo");
const html = document.querySelector(".html");
const textHtml = document.querySelector(".text_html");
const proyectSection = document.querySelector(".proyect_container");
const illustrator = document.querySelector(".illustrator");
const photoshop = document.querySelector(".photoshop");
const python = document.querySelector(".python");
    function hover(object, action) {
      object.addEventListener('mouseenter', function() {
        action.classList.add('visible');
      });
    
      object.addEventListener('mouseleave', function() {
        action.classList.remove('visible');
      });
      if (action === illustrator || action === python || action=== photoshop) { 
        object.addEventListener('mouseleave', function() {
          action.classList.add('visible');
      } )
    }}



hover(title, logo);
hover(textHtml, html);
hover(proyectSection, illustrator) 
hover(proyectSection, photoshop)
hover(proyectSection, python)

