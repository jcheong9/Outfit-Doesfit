/*Filter slider valu changes*/
  var slider1 = document.getElementById("range1");
  var output1 = document.getElementById("value1");
  output1.innerHTML = slider1.value;

  slider1.oninput = function() {
  output1.innerHTML = this.value;
  }
  var slider2 = document.getElementById("range2");
  var output2 = document.getElementById("value2");
  output2.innerHTML = slider2.value;

  slider2.oninput = function() {
  output2.innerHTML = this.value;
  }
  var slider3 = document.getElementById("range3");
  var output3 = document.getElementById("value3");
  output3.innerHTML = slider3.value;

  slider3.oninput = function() {
  output3.innerHTML = this.value;
  }
  var slider4 = document.getElementById("range4");
  var output4 = document.getElementById("value4");
  output4.innerHTML = slider4.value;

  slider4.oninput = function() {
  output4.innerHTML = this.value;
  }
  var slider5 = document.getElementById("range5");
  var output5 = document.getElementById("value5");
  output5.innerHTML = slider5.value;

  slider5.oninput = function() {
  output5.innerHTML = this.value;
  }
  
  /*Pop-Up annotation for adding and removing clothes*/
  var addPressed = false;

  $("#Shirt1btnAdd").click(function(){
      if(!addPressed) {
          addPressed = true;
          $("#addpopup1").fadeIn().delay(1500).fadeOut();
          addPressed = false;
      }
  });

  $("#Shirt1btnRemove").click(function() {
    $("#removepopup1").fadeIn().delay(1500).fadeOut();
  })

  $("#Shirt2btnAdd").click(function() {
    $("#addpopup2").fadeIn().delay(1500).fadeOut();
  })

  $("#Shirt2btnRemove").click(function() {
    $("#removepopup2").fadeIn().delay(1500).fadeOut();
  })

  $("#Shirt3btnAdd").click(function() {
    $("#addpopup3").fadeIn().delay(1500).fadeOut();
  })

  $("#Shirt3btnRemove").click(function() {
    $("#removepopup3").fadeIn().delay(1500).fadeOut();
  })

  $("#Shirt4btnAdd").click(function() {
    $("#addpopup4").fadeIn().delay(1500).fadeOut();
  })

  $("#Shirt4btnRemove").click(function() {
    $("#removepopup4").fadeIn().delay(1500).fadeOut();
  })

  $("#Shirt5btnAdd").click(function() {
    $("#addpopup5").fadeIn().delay(1500).fadeOut();
  })

  $("#Shirt5btnRemove").click(function() {
    $("#removepopup5").fadeIn().delay(1500).fadeOut();
  })

  $("#Shirt6btnAdd").click(function() {
    $("#addpopup6").fadeIn().delay(1500).fadeOut();
  })

  $("#Shirt5btnRemove").click(function() {
    $("#removepopup5").fadeIn().delay(1500).fadeOut();
  })
