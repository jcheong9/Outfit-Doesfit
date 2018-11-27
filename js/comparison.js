$(document).ready(function(){
  var currentSelection = 0;
  var arrayClothSelection = [];
  var arrayCurrentObj= [];
  var arrayBrandObj= [];
  var starCountRef = firebase.database().ref('/Clothing');
  var dbUsers = firebase.database().ref('/users');

  function runUser(){
    dbUsers.on('value', function(snapshot){
      var userObj = snapshot.val();
      console.log(userObj);
      var bandAddiasSize = userObj.yourAddiasSize;
      var bandGapSize = userObj.yourGapSize;
      var bandNikeSize = userObj.yourNikeSize;
      console.log(bandAddiasSize);
      arrayBrandObj.push(bandAddiasSize);
      arrayBrandObj.push(bandGapSize);
      arrayBrandObj.push(bandNikeSize);
      console.log(arrayBrandObj);
      // $('#size').text(bandSize);

    });
  }

  function run(callback) {
  starCountRef.on('value', function(snapshot) {
    var clothingObject = snapshot.val();
    // console.log(clothingObject);

    for(var currentObj in clothingObject) {
      var clothing = clothingObject[currentObj];
      console.log(clothing.fittingRoom);
      if(clothing.fittingRoom == "true") {
        // console.log(clothing);
        arrayClothSelection.push(clothing);
        arrayCurrentObj.push(currentObj);

      }
    }
    callback();

  });
}
  // var clothObj = arrayClothSelection[0];
  // console.log(clothObj);

  // console.log(arrayClothSelection);

  // function sleep(ms) {
  //   return new Promise(resolve => setTimeout(resolve, ms));
  // };
  // async function demo() {
  //   console.log('Taking a break...');
  //   await sleep(1000);
  //   console.log('one seconds later');
  //
  //   if (arrayClothSelection.length == 0){
  //     $('#right').attr('src', "./images/noItemFound.png");
  //
  //   }else{
  //   var clothObj = arrayClothSelection[currentSelection];
  //   var urlClothObj = clothObj.url;
  //   console.log(arrayClothSelection);
  //   $('#right').attr('src', urlClothObj);
  // }
  // };

  function initalizeAddingClothing(){
    if (arrayClothSelection.length == 0){
      $('#right').attr('src', "./images/noItemFound.png");
      $('#left').attr('src', "./images/yourSize.PNG");
      $('#brandName').text("None Selected");
    }else{
      var clothObj = arrayClothSelection[currentSelection];
      var urlClothObj = clothObj.url;
      var bandName = clothObj.Brand;
      var urlModel = clothObj.model;
      console.log(arrayClothSelection);
      $('#right').attr('src', urlClothObj);
      $('#left').attr('src', urlModel);
      $('#brandName').text(bandName);
      console.log(bandName);
      console.log(arrayBrandObj[0]);
      switch(bandName) {
          case 'Adidas':
              $('#size').text(arrayBrandObj[0]);
              break;
          case 'GAP':
              $('#size').text(arrayBrandObj[1]);
              break;
          default:
              $('#size').text(arrayBrandObj[2]);
      };

  }
};
  runUser();
  run(initalizeAddingClothing);
  // demo();
  console.log(arrayCurrentObj);

  $("#removeButton").on("click", function(event){
    console.log("clicked",$(this));
    var shirt = arrayCurrentObj[currentSelection];
    firebase.database().ref("/Clothing/" + shirt).update({
      fittingRoom: "false"
    });

    arrayClothSelection.splice(currentSelection, 1);
    arrayCurrentObj.splice(currentSelection, 1);
    console.log(arrayClothSelection);
    console.log(arrayCurrentObj);

    if (arrayClothSelection.length == 0){
      $('#right').attr('src', "./images/noItemFound.png");
      $('#left').attr('src', "./images/yourSize.PNG");
      $('#brandName').text("None Selected");
    }else{
      var clothObj = arrayClothSelection[currentSelection];
      var urlClothObj = clothObj.url;
      var bandName = clothObj.Brand;
      var urlModel = clothObj.model;
      console.log(clothObj);
      $('#right').attr('src', urlClothObj);
      $('#left').attr('src', urlModel);
      $('#brandName').text(bandName);
      switch(bandName) {
          case 'Adidas':
              $('#size').text(arrayBrandObj[0]);
              break;
          case 'GAP':
              $('#size').text(arrayBrandObj[1]);
              break;
          default:
              $('#size').text(arrayBrandObj[2]);
      };
    }
    document.location.reload(true);
  });

  $("#lastButton").on("click", function(event){
    console.log("clicked",$(this));
    if (currentSelection != 0){
      currentSelection --;
      var shirt = arrayCurrentObj[currentSelection];

      if (arrayClothSelection.length == 0){
        $('#right').attr('src', "./images/noItemFound.png");
        $('#left').attr('src', "./images/yourSize.PNG");
        $('#brandName').text("None Selected");

      }else{
        var clothObj = arrayClothSelection[currentSelection];
        var urlClothObj = clothObj.url;
        var bandName = clothObj.Brand;
        var urlModel = clothObj.model;
        console.log(clothObj);
        console.log(currentSelection);
        $('#right').attr('src', urlClothObj);
        $('#left').attr('src', urlModel);
        $('#brandName').text(bandName);
        switch(bandName) {
            case 'Adidas':
                $('#size').text(arrayBrandObj[0]);
                break;
            case 'GAP':
                $('#size').text(arrayBrandObj[1]);
                break;
            default:
                $('#size').text(arrayBrandObj[2]);
        };
      }

    }

  });

  $("#nextButton").on("click", function(event){
    console.log("clicked",$(this));

    if (currentSelection != (arrayClothSelection.length - 1)){
      currentSelection ++;
      var shirt = arrayCurrentObj[currentSelection];

      if (arrayClothSelection.length == 0){
        $('#right').attr('src', "./images/noItemFound.png");
        $('#left').attr('src', "./images/yourSize.PNG");
        $('#brandName').text("None Selected");
      }else{
        var clothObj = arrayClothSelection[currentSelection];
        var urlClothObj = clothObj.url;
        var bandName = clothObj.Brand;
        var urlModel = clothObj.model;
        console.log(clothObj);
        console.log(currentSelection);
        $('#right').attr('src', urlClothObj);
        $('#left').attr('src', urlModel);
        $('#brandName').text(bandName);
        switch(bandName) {
            case 'Adidas':
                $('#size').text(arrayBrandObj[0]);
                break;
            case 'GAP':
                $('#size').text(arrayBrandObj[1]);
                break;
            default:
                $('#size').text(arrayBrandObj[2]);
        };
      }
    }
  });

});
