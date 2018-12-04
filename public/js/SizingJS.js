      //More Sizes Update button 
      //    Gets the users sizes from the database and displays it.
      var moreUpBtn = document.getElementById("moreUpdate");
      moreUpBtn.onclick = function(){
      modal.style.display="none";
      var fb2 = firebase.database().ref();
        armSize = document.getElementById('modalArmSize').value;
        neckSize = document.getElementById("modalNeckSize").value;
        chestSize= document.getElementById('modalChestSize').value;
        bellySize = document.getElementById('modalBellySize').value;
        topLength = document.getElementById('modalLengthSize').value;
        var data2 = {neckSize, armSize, chestSize, bellySize,topLength};
        fb2.child('users/').update(data2);
      }
      
      //The Modal Functions
      //    Makes the Modal appear and disappear.
      var modal = document.getElementById('myModal');
      var btn = document.getElementById("more");
      var span = document.getElementsByClassName("close")[0];

      btn.onclick = function() {
          modal.style.display = "block";
      }
      span.onclick = function() {
          modal.style.display = "none";
      }
      window.onclick = function(event) {
          if (event.target == modal) {
              modal.style.display = "none";
          }
      }
      
      // Initialize Firebase
      var config = {
        apiKey: "AIzaSyAvz3wtF_zua_MODBHMJ47fngkypJ65nck",
        authDomain: "outfit-doesfit.firebaseapp.com",
        databaseURL: "https://outfit-doesfit.firebaseio.com",
        projectId: "outfit-doesfit",
        storageBucket: "outfit-doesfit.appspot.com",
        messagingSenderId: "59868218098"
      };
      firebase.initializeApp(config);
      
      //Uploads and Updates the user dimensions to firebase
      function updateFirebase(){
        const fb = firebase.database().ref();
        //get field val
        armSize = document.getElementById('armSize').value;
        neckSize = document.getElementById("neckSize").value;
        chestSize= document.getElementById('chestSize').value;
        waistSize = document.getElementById('waistSize').value;
        legLength = document.getElementById('legLength').value;
        data = {neckSize, armSize,chestSize,waistSize,legLength};
        //update firebase
        fb.child('users/').update(data);
      }
      
      //Uploads and Updates the user dimensions to firebase MODAL VERISON
      function updateFirebase2(){
        var fb2 = firebase.database().ref();
      //          //get field val
        armSize = document.getElementById('modalArmSize').value;
        neckSize = document.getElementById("modalNeckSize").value;
        chestSize= document.getElementById('modalChestSize').value;
        bellySize = document.getElementById('modalBellySize').value;
        topLength = document.getElementById('modalLengthSize').value;
        var data2 = {neckSize, armSize, chestSize, bellySize,topLength};
        //update firebase
        fb2.child('users/').update(data2);
      }
      
      //Your sizing results drop down menu
      //    Caluclates your brand size based on what brand is chosen.      
      function getData(size, brand){
        if(brand == "Adidas"){
          document.getElementById("bodyPart1").innerHTML="Chest";
          document.getElementById("bodyPart2").innerHTML="Waist";
          document.getElementById("bodyPart3").innerHTML="Hip";
          if (size == "Large"){
            document.getElementById('resultBodyPart1').innerHTML = 
            '40 - 44"';
            document.getElementById('resultBodyPart2').innerHTML = 
            '35 - 39"'
            document.getElementById('resultBodyPart3').innerHTML = 
            '40 - 44"'
            document.getElementById('brand-size').innerHTML = "Adidas - Large"
          } else if (size == "Medium"){
            document.getElementById('resultBodyPart1').innerHTML = 
            '37 - 40"';
            document.getElementById('resultBodyPart2').innerHTML = 
            '32 - 35"'
            document.getElementById('resultBodyPart3').innerHTML = 
            '37 - 40"'
            document.getElementById('brand-size').innerHTML = "Adidas - Medium"
            
          } else {
            document.getElementById('resultBodyPart1').innerHTML = 
            '34 - 37"';
            document.getElementById('resultBodyPart2').innerHTML = 
            '30 - 32"'
            document.getElementById('resultBodyPart3').innerHTML = 
            '35 - 37"'
            document.getElementById('brand-size').innerHTML = "Adidas - Small"
          }
        }
        if(brand == "Gap"){
          document.getElementById("bodyPart1").innerHTML="Chest";
          document.getElementById("bodyPart2").innerHTML="Neck";
          document.getElementById("bodyPart3").innerHTML="Sleeve";
          if (size == "Large"){
            document.getElementById('resultBodyPart1').innerHTML = 
            '42 - 44"';
            document.getElementById('resultBodyPart2').innerHTML = 
            '16 - 16.5"'
            document.getElementById('resultBodyPart3').innerHTML = 
            '34.5"'
            document.getElementById('brand-size').innerHTML = "Gap - Large"
          } else if (size == "Medium"){
            document.getElementById('resultBodyPart1').innerHTML = 
            '39 - 41"';
            document.getElementById('resultBodyPart2').innerHTML = 
            '15 - 15.5"'
            document.getElementById('resultBodyPart3').innerHTML = 
            '33.5"'
            document.getElementById('brand-size').innerHTML = "Gap - Medium"
            
          } else {
            document.getElementById('resultBodyPart1').innerHTML = 
            '36 - 38"';
            document.getElementById('resultBodyPart2').innerHTML = 
            '14 - 14.5"'
            document.getElementById('resultBodyPart3').innerHTML = 
            '32.5"'
            document.getElementById('brand-size').innerHTML = "Gap - Small"
          }
        }
        if(brand == "Nike"){
                document.getElementById("bodyPart1").innerHTML="Chest";
                document.getElementById("bodyPart2").innerHTML="Waist";
                document.getElementById("bodyPart3").innerHTML="Hips";
                if (size == "Large"){
                  document.getElementById('resultBodyPart1').innerHTML = 
                  '41 - 44"';
                  document.getElementById('resultBodyPart2').innerHTML = 
                  '35 - 38"'
                  document.getElementById('resultBodyPart3').innerHTML = 
                  '41-44"'
                  document.getElementById('brand-size').innerHTML = "Nike - Large"
                } else if (size == "Medium"){
                  document.getElementById('resultBodyPart1').innerHTML = 
                  '37.5 - 41"';
                  document.getElementById('resultBodyPart2').innerHTML = 
                  '32 - 35"'
                  document.getElementById('resultBodyPart3').innerHTML = 
                  '37.5 - 41"'
                  document.getElementById('brand-size').innerHTML = "Nike - Medium"
                  
                } else {
                  document.getElementById('resultBodyPart1').innerHTML = 
                  '35 - 37.5"';
                  document.getElementById('resultBodyPart2').innerHTML = 
                  '29 - 32"'
                  document.getElementById('resultBodyPart3').innerHTML = 
                  '35 - 37.5"'
                  document.getElementById('brand-size').innerHTML = "Nike - Small"
                }
              }
         
      }
      
      function getSelectValue(){
        var selectedValue = document.getElementById("topsList").value;
        var yourSize = firebase.database().ref("users/your"+selectedValue+"Size/");
        yourSize.on('value', function(snapshot){
          if (snapshot.val() == "Large"){
            getData("Large", selectedValue);
          } else if (snapshot.val() == "Medium"){
            getData("Medium", selectedValue);
          } else{
            getData("Small", selectedValue)
          }                 
        })
      }
      
      //Determines your Adidas Size
      function adidasTopSize(){
       var refChestSize = firebase.database().ref("users/").child("chestSize");
        var fb = firebase.database().ref();
        refChestSize.on('value', function(snapshot){
          var testing = snapshot.val();
          if(testing > 39){
            yourAdidasSize = "Large";
          }else if (testing > 38){
            yourAdidasSize = "Medium";
          } else {
          yourAdidasSize = "Small";
          };
          chestSize = {yourAdidasSize}
          fb.child('users/').update(chestSize);
          
        });
      }
      
      //Determines your Gap size
      function gapTopSize(){
      var yourGapSize;
      var refChestSize = firebase.database().ref("users/").child("chestSize");
        var fb = firebase.database().ref();
        refChestSize.on('value', function(snapshot){
          var testing = snapshot.val();
          if(testing >= 42){
            yourGapSize = "Large";
          }else if (testing >= 39){
            yourGapSize = "Medium";
          } else {
          yourGapSize = "Small";
          };
          chestSize = {yourGapSize}
          fb.child('users/').update(chestSize);
          
        });
      }
            //Determines your Nike size
            function nikeTopSize(){
            var yourNikeSize;
             var refChestSize = firebase.database().ref("users/").child("chestSize");
              var fb = firebase.database().ref();
              refChestSize.on('value', function(snapshot){
                var testing = snapshot.val();
                if(testing >= 41){
                  yourNikeSize = "Large";
                }else if (testing >= 37.5){
                  yourNikeSize = "Medium";
                } else {
                yourNikeSize = "Small";
                };
                chestSize = {yourNikeSize}
                fb.child('users/').update(chestSize);
                
              });
            }
      //Gets your sizes to display in the input fields when initally webpage loads
      function getSizes(size){
        var refNike = firebase.database().ref("users/").child(size);
          refNike.on('value', function(snapshot){
          document.getElementById(size).value = snapshot.val();
      
             });
      }
      //Gets your sizes to display in the input fields when initally webpage loads MODAL
      function getSizes2(){
        var refNike = firebase.database().ref("users/").child("armSize");
          refNike.on('value', function(snapshot){
          document.getElementById('modalArmSize').value = snapshot.val(); 
             });
        var refNike = firebase.database().ref("users/").child("chestSize");
          refNike.on('value', function(snapshot){
          document.getElementById('modalChestSize').value = snapshot.val(); 
             });
        var refNike = firebase.database().ref("users/").child("neckSize");
          refNike.on('value', function(snapshot){
          document.getElementById('modalNeckSize').value = snapshot.val(); 
             });
        var refNike = firebase.database().ref("users/").child("bellySize");
          refNike.on('value', function(snapshot){
          document.getElementById('modalBellySize').value = snapshot.val(); 
             });
        
        var refNike = firebase.database().ref("users/").child("topLength");
          refNike.on('value', function(snapshot){
          document.getElementById('modalLengthSize').value = snapshot.val(); 
             });
        
      }
      //Initializes the page.
      getSizes2();
      getSizes("armSize");
      getSizes("chestSize");
      getSizes("legLength");
      getSizes("neckSize");
      getSizes("waistSize");
      adidasTopSize();
      gapTopSize();
      nikeTopSize();
      getSelectValue();