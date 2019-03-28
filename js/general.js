$( window ).scroll(function() {
  pY=$(document).scrollTop();
  if(pY >= 50 && $( window ).width() > 768)
  {
    $(".row.card-perfil").addClass("hide");
  }
  else{
    $(".row.card-perfil").removeClass("hide");
  }
});