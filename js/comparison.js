$(document).ready(function(){
  var currentSelection = 0;
  var arrayClothSelection = [];
  var arrayCurrentObj= [];
  var starCountRef = firebase.database().ref('/Clothing');
  var dbUsers = firebase.database().ref('/users');

  function runUser(){
    dbUsers.on('value', function(snapshot){
      var userObj = snapshot.val();
      console.log(userObj);
      var bandSize = userObj.yourAddiasSize;
      $('#size').text(bandSize);
      console.log(bandSize);
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
      $('#brandName').text("None Selected");
    }else{
      var clothObj = arrayClothSelection[currentSelection];
      var urlClothObj = clothObj.url;
      var bandName = clothObj.Brand;
      console.log(arrayClothSelection);
      $('#right').attr('src', urlClothObj);
      $('#brandName').text(bandName);

  }
};
  run(initalizeAddingClothing);
  runUser();
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
      $('#brandName').text("None Selected");
    }else{
      var clothObj = arrayClothSelection[currentSelection];
      var urlClothObj = clothObj.url;
      var bandName = clothObj.Brand;
      console.log(clothObj);
      $('#right').attr('src', urlClothObj);
      $('#brandName').text(bandName);
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
        $('#brandName').text("None Selected");

      }else{
        var clothObj = arrayClothSelection[currentSelection];
        var urlClothObj = clothObj.url;
        var bandName = clothObj.Brand;
        console.log(clothObj);
        console.log(currentSelection);
        $('#right').attr('src', urlClothObj);
        $('#brandName').text(bandName);
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
        $('#brandName').text("None Selected");
      }else{
        var clothObj = arrayClothSelection[currentSelection];
        var urlClothObj = clothObj.url;
        var bandName = clothObj.Brand;
        console.log(clothObj);
        console.log(currentSelection);
        $('#right').attr('src', urlClothObj);
        $('#brandName').text(bandName);
      }
    }
  });

});
