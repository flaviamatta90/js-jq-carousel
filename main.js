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

$(".next").click(
  function(){
    var pallinoActive = $("i.active");
    pallinoActive.removeClass("active");

    if(pallinoActive.hasClass("last") == true){
      var nextPallino = $("i.first")
    }else{
      var nextPallino = pallinoActive.next();
    }

    nextPallino.addClass("active");
  }
);

// Se schiacciamo su" fa-angle-left l'immagine va avanti ma in senso opposto

$(".prev").click(
  function(){
    var imgActive = $("img.active");
    imgActive.removeClass("active");

    // togliamo la classe all' "img-last"
    if(imgActive.hasClass("first")== true){
      var nextImg = $("img.last")

    // ri-attiviamo la classe di first-img
    } else{
      var nextImg = imgActive.prev();

    }

    // attiviamo la sequenza di immagini
    nextImg.addClass("active");
  }
);

$(".prev").click(
  function(){
    var pallinoActive = $("i.active");
    pallinoActive.removeClass("active");

    if(pallinoActive.hasClass("first") == true){
      var nextPallino = $("i.last")
    }else{
      var nextPallino = pallinoActive.prev();
    }

    nextPallino.addClass("active");
  }
);



  }
);
