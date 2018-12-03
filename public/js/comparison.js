// Waiting for the document to load and run the function
$(document).ready(function() {
  //varibles used to store the data in arrays
  var currentSelection = 0;
  var arrayClothSelection = [];
  var arrayCurrentObj = [];
  var arrayBrandObj = [];
  //variable referencing the firebase database
  var starCountRef = firebase.database().ref('/Clothing');
  var dbUsers = firebase.database().ref('/users');
  //populating the Brand sizes data retrieved form firebase to the array variables
  function runUser() {
    dbUsers.on('value', function(snapshot) {
      var userObj = snapshot.val();
      var bandAddiasSize = userObj.yourAddiasSize;
      var bandGapSize = userObj.yourGapSize;
      var bandNikeSize = userObj.yourNikeSize;

      arrayBrandObj.push(bandAddiasSize);
      arrayBrandObj.push(bandGapSize);
      arrayBrandObj.push(bandNikeSize);

    });
  }
  //populating the clothing selection data retrieved form firebase to the array variables
  function run(callback) {
    starCountRef.on('value', function(snapshot) {
      var clothingObject = snapshot.val();

      for (var currentObj in clothingObject) {
        var clothing = clothingObject[currentObj];
        //finding the firebase database if the clothing is set to true
        if (clothing.fittingRoom == "true") {
          //if true populate the arrays.
          arrayClothSelection.push(clothing);
          arrayCurrentObj.push(currentObj);
        }
      }
      callback();
    });
  }
  //Adding the data from array to website when on the comparsion page
  function initalizeAddingClothing() {
    //change the images if no images found
    if (arrayClothSelection.length == 0) {
      $('#right').attr('src', "./images/noItemFound.png");
      $('#left').attr('src', "./images/yourSize.PNG");
      $('#brandName').text("None Selected");
    } else {
      var clothObj = arrayClothSelection[currentSelection];
      var urlClothObj = clothObj.url;
      var bandName = clothObj.Brand;
      var urlModel = clothObj.model;
      //url of the images is pulled from array and replace src
      $('#right').attr('src', urlClothObj);
      $('#left').attr('src', urlModel);
      $('#brandName').text(bandName);
      //changing the brand name to correspond to the clothing current viewing
      switch (bandName) {
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
  //initalizing functions
  runUser();
  run(initalizeAddingClothing);

  //removeButton removes the current clothing fromt the database
  $("#removeButton").on("click", function(event) {
    console.log("clicked", $(this));
    var shirt = arrayCurrentObj[currentSelection];
    //update the database the selected clothing to false when removed
    firebase.database().ref("/Clothing/" + shirt).update({
      fittingRoom: "false"
    });

    arrayClothSelection.splice(currentSelection, 1);
    arrayCurrentObj.splice(currentSelection, 1);

    //change the images if no images found
    if (arrayClothSelection.length == 0) {
      $('#right').attr('src', "./images/noItemFound.png");
      $('#left').attr('src', "./images/yourSize.PNG");
      $('#brandName').text("None Selected");
    } else {
      var clothObj = arrayClothSelection[currentSelection];
      var urlClothObj = clothObj.url;
      var bandName = clothObj.Brand;
      var urlModel = clothObj.model;
      //url of the images is pulled from array and replace src
      $('#right').attr('src', urlClothObj);
      $('#left').attr('src', urlModel);
      $('#brandName').text(bandName);
      //changing the brand name to correspond to the clothing current viewing
      switch (bandName) {
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
    //reloads the page
    document.location.reload(true);
  });
  //lastButton goes back to the pervious clothing
  $("#lastButton").on("click", function(event) {
    console.log("clicked", $(this));
    if (currentSelection != 0) {
      currentSelection--;
      var shirt = arrayCurrentObj[currentSelection];
      //change the images if no images found
      if (arrayClothSelection.length == 0) {
        $('#right').attr('src', "./images/noItemFound.png");
        $('#left').attr('src', "./images/yourSize.PNG");
        $('#brandName').text("None Selected");

      } else {
        var clothObj = arrayClothSelection[currentSelection];
        var urlClothObj = clothObj.url;
        var bandName = clothObj.Brand;
        var urlModel = clothObj.model;
        //url of the images is pulled from array and replace src
        $('#right').attr('src', urlClothObj);
        $('#left').attr('src', urlModel);
        $('#brandName').text(bandName);
        //changing the brand name to correspond to the clothing current viewing
        switch (bandName) {
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
  //nextButton goes to the next clothing
  $("#nextButton").on("click", function(event) {
    console.log("clicked", $(this));

    if (currentSelection != (arrayClothSelection.length - 1)) {
      currentSelection++;
      var shirt = arrayCurrentObj[currentSelection];
      //change the images if no images found
      if (arrayClothSelection.length == 0) {
        $('#right').attr('src', "./images/noItemFound.png");
        $('#left').attr('src', "./images/yourSize.PNG");
        $('#brandName').text("None Selected");
      } else {
        var clothObj = arrayClothSelection[currentSelection];
        var urlClothObj = clothObj.url;
        var bandName = clothObj.Brand;
        var urlModel = clothObj.model;
        //url of the images is pulled from array and replace src
        $('#right').attr('src', urlClothObj);
        $('#left').attr('src', urlModel);
        $('#brandName').text(bandName);
        //changing the brand name to correspond to the clothing current viewing
        switch (bandName) {
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