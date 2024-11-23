

function myFunction(x) {
x.classList.toggle("change");
}

$(".toggle").on("click", function(){
  $('.header-menu ul').slideToggle();
})