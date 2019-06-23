$(document).ready(function() {
  //Start Setting Variables
  // 1 BAG
  var oneBagReg = function() {
   $(".payment").html("(This is a one time payment)");
   $(".old-price").html("$59.95");
   $(".saving").html("$30");
   $(".big-price").html("$29.95");
   $(".cost").html("+$4.95 SHIPPING");
  }

// 3 BAG
  var threeBagReg = function () {
    $(".payment").html("(This is a one time payment)");
    $(".old-price").html("$179.85");
    $(".saving").html("$96");
    $(".big-price").html("$83.85");
    $(".cost").html("Free Shipping");
  }

// 6 BAG
  var sixBagReg = function () {
    $(".payment").html("(This is a one time payment)");
    $(".old-price").html("$359.70");
    $(".saving").html("$198");
    $(".big-price").html("$161.70");
    $(".cost").html("Free Shipping");
  }
// Start Adding class active
  $(".jar").click(function () {
    if(!$(this).hasClass("active")) {
      $(".jar").removeClass("active");
      $(this).addClass("active");
    }

    if($(".jar-tab.select1.jar").hasClass("active")){
      return oneBagReg();

    }

    if($(".jar-tab.select2.jar").hasClass("active")) {
      return threeBagReg();
    }

    if($(".jar-tab.select3.jar").hasClass("active")) {
      return sixBagReg();
    }

  })
});
