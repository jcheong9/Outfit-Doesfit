//Bottom- Back, Skip, Analyze Buttons;
var skipBtn = document.getElementById('skip');
var analyzeBtn = document.getElementById('analyze');
skipBtn.onclick = function() {
  location.href = 'Sizing.html';
}
analyzeBtn.onclick = function() {
  location.href = 'Sizing.html';
}
//Side Photo Upload Buttons
var manside1 = document.getElementsByClassName('photoBtn')[0];
var manside2 = document.getElementsByClassName('photoBtn')[1];

manside1.onclick = function() {
  document.getElementById('sidephoto').src = './images/man1side.png';
  modal.style.display = 'none';
}
manside2.onclick = function() {
  document.getElementById('sidephoto').src = './images/man2side.png';
  modal.style.display = 'none';
}

//Front Photo Upload Buttons
var manfront1 = document.getElementsByClassName('photoBtn')[2];
var manfront2 = document.getElementsByClassName('photoBtn')[3];

manfront1.onclick = function() {
  document.getElementById('frontphoto').src = './images/man1front.png';
  modal2.style.display = 'none';
}
manfront2.onclick = function() {
  document.getElementById('frontphoto').src = './images/man2front.png';
  modal2.style.display = 'none';
}


// Get the modal
var modal = document.getElementById('myModal');
var modal2 = document.getElementById('myModal2');

// Get the button that opens the modal
var btn = document.getElementById("myBtn");
var btn2 = document.getElementById("myBtn2");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];
var span2 = document.getElementsByClassName("close")[1];

// When the user clicks the button, open the modal 
btn.onclick = function() {
  modal.style.display = "block";
}
btn2.onclick = function() {
  modal2.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}
span2.onclick = function() {
  modal2.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
  if (event.target == modal2) {
    modal2.style.display = "none";
  }
}