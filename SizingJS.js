      //More Sizes- Update button
      var moreUpBtn = document.getElementById("moreUpdate");
      moreUpBtn.onclick = function(){
      modal.style.display="none";
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
      // Get the modal
      var modal = document.getElementById('myModal');
      
      // Get the button that opens the modal
      var btn = document.getElementById("more");
      
      // Get the <span> element that closes the modal
      var span = document.getElementsByClassName("close")[0];
      
      // When the user clicks the button, open the modal
      btn.onclick = function() {
          modal.style.display = "block";
      }
      
      // When the user clicks on <span> (x), close the modal
      span.onclick = function() {
          modal.style.display = "none";
      }
      
      // When the user clicks anywhere outside of the modal, close it
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
      console.log(firebase);
      
      function saveFirebase(){
        const fb = firebase.database().ref();
        //get field val
        armSize = document.getElementById('armsize').value;
        neckSize = document.getElementById("necksize").value;
        data = {neckSize, armSize};
        //update firebase
        fb.child('users/').set(data);
      }
      //Uploads user size to fire base
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
      
      //Uploads user size to fire base MODAL VERISON
      function updateFirebase2(){
        console.log("update 2 ran");
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
        
      function getData(selectedData){
          var refNike = firebase.database().ref(selectedData).child("nike");
          refNike.on('value', function(snapshot){
          document.getElementById("nikeTop").innerHTML = snapshot.val();
             });
          var refAddias = firebase.database().ref(selectedData).child("addias");
          refAddias.on('value', function(snapshot){
          document.getElementById("addiasTop").innerHTML = snapshot.val();
             });
          var refGap = firebase.database().ref(selectedData).child("gap");
          refGap.on('value', function(snapshot){
          document.getElementById("gapTop").innerHTML = snapshot.val();
             });
      }
      
      
      //Your sizing results drop down menu
      
      function getData(size, brand){
        console.log("size and brand:" + size + brand);
        if(brand == "Addias"){
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
            document.getElementById('brand-size').innerHTML = "Large"
          } else if (size == "Medium"){
            document.getElementById('resultBodyPart1').innerHTML = 
            '37 - 40"';
            document.getElementById('resultBodyPart2').innerHTML = 
            '32 - 35"'
            document.getElementById('resultBodyPart3').innerHTML = 
            '37 - 40"'
            document.getElementById('brand-size').innerHTML = "Medium"
            
          } else {
            document.getElementById('resultBodyPart1').innerHTML = 
            '34 - 37"';
            document.getElementById('resultBodyPart2').innerHTML = 
            '30 - 32"'
            document.getElementById('resultBodyPart3').innerHTML = 
            '35 - 37"'
            document.getElementById('brand-size').innerHTML = "Small"
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
            document.getElementById('brand-size').innerHTML = "Large"
          } else if (size == "Medium"){
            document.getElementById('resultBodyPart1').innerHTML = 
            '39 - 41"';
            document.getElementById('resultBodyPart2').innerHTML = 
            '15 - 15.5"'
            document.getElementById('resultBodyPart3').innerHTML = 
            '33.5"'
            document.getElementById('brand-size').innerHTML = "Medium"
            
          } else {
            document.getElementById('resultBodyPart1').innerHTML = 
            '36 - 38"';
            document.getElementById('resultBodyPart2').innerHTML = 
            '14 - 14.5"'
            document.getElementById('resultBodyPart3').innerHTML = 
            '32.5"'
            document.getElementById('brand-size').innerHTML = "Small"
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
                  document.getElementById('brand-size').innerHTML = "Large"
                } else if (size == "Medium"){
                  document.getElementById('resultBodyPart1').innerHTML = 
                  '37.5 - 41"';
                  document.getElementById('resultBodyPart2').innerHTML = 
                  '32 - 35"'
                  document.getElementById('resultBodyPart3').innerHTML = 
                  '37.5 - 41"'
                  document.getElementById('brand-size').innerHTML = "Medium"
                  
                } else {
                  document.getElementById('resultBodyPart1').innerHTML = 
                  '35 - 37.5"';
                  document.getElementById('resultBodyPart2').innerHTML = 
                  '29 - 32"'
                  document.getElementById('resultBodyPart3').innerHTML = 
                  '35 - 37.5"'
                  document.getElementById('brand-size').innerHTML = "Small"
                }
              }
         
      }
      
      function getSelectValue(){
        var selectedValue = document.getElementById("topsList").value;
        var yourSize = firebase.database().ref("users/your"+selectedValue+"Size/");
        yourSize.on('value', function(snapshot){
          console.log(snapshot.val());
          if (snapshot.val() == "Large"){
            getData("Large", selectedValue);
          } else if (snapshot.val() == "Medium"){
            getData("Medium", selectedValue);
          } else{
            getData("Small", selectedValue)
          }                 
        })
      }
      
      // Finds your Addias Size
      function addiasTopSize(){
       var refChestSize = firebase.database().ref("users/").child("chestSize");
        var fb = firebase.database().ref();
        refChestSize.on('value', function(snapshot){
          var testing = snapshot.val();
          console.log(testing);
          if(testing > 38){
            console.log("youre large");
            yourAddiasSize = "Large";
          }else if (testing > 34){
            console.log("youre medium");
            yourAddiasSize = "Medium";
          } else {
          console.log("youre small")
          yourAddiasSize = "Small";
          };
          chestSize = {yourAddiasSize}
          fb.child('users/').update(chestSize);
          
        });
      }
      
      // Finds your Gap size
      function gapTopSize(){
      var yourGapSize;
      var refChestSize = firebase.database().ref("users/").child("chestSize");
        var fb = firebase.database().ref();
        refChestSize.on('value', function(snapshot){
          var testing = snapshot.val();
          console.log(testing);
          if(testing > 42){
            console.log("youre large");
            yourGapSize = "Large";
          }else if (testing > 39){
            console.log("youre medium");
            yourGapSize = "Medium";
          } else {
          console.log("youre small")
          yourGapSize = "Small";
          };
          chestSize = {yourGapSize}
          fb.child('users/').update(chestSize);
          
        });
      }
            // Finds your Nike size
            function nikeTopSize(){
            var yourNikeSize;
             var refChestSize = firebase.database().ref("users/").child("chestSize");
              var fb = firebase.database().ref();
              refChestSize.on('value', function(snapshot){
                var testing = snapshot.val();
                console.log(testing);
                if(testing > 41){
                  console.log("youre large");
                  yourNikeSize = "Large";
                }else if (testing > 37.5){
                  console.log("youre medium");
                  yourNikeSize = "Medium";
                } else {
                console.log("youre small")
                yourNikeSize = "Small";
                };
                chestSize = {yourGapSize}
                fb.child('users/').update(chestSize);
                
              });
            }
      //Updates the sizes in the input fields
      function getSizes(size){
        var refNike = firebase.database().ref("users/").child(size);
          refNike.on('value', function(snapshot){
          document.getElementById(size).value = snapshot.val();
      
             });
      }
      //Updates the sizes in the input fields MODAL
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
      // Call the Functions
      getSizes2();
      getSizes("armSize");
      getSizes("chestSize");
      getSizes("legLength");
      getSizes("neckSize");
      getSizes("waistSize");
      addiasTopSize();
      gapTopSize();
      getSelectValue();