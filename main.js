// start
$(document).ready(
  function (){

// Se schiacciamo su" fa-angle-right l'immagine va avanti

$(".next").click(
  function(){

    var imgActive = $("img.active");
    imgActive.removeClass("active");

    // togliamo la classe alla first-img
    if(imgActive.hasClass("last")== true){
      var nextImg = $("img.first")

    // ri-attiviamo la classe di first-img
    } else{
      var nextImg = imgActive.next();

    }

    // attiviamo la sequenza di immagini
    nextImg.addClass("active");
  }
);

  }
);
