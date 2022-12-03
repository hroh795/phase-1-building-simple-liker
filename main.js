// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!

document.getElementById("modal").setAttribute("class","hidden");

for (let i =0; i<document.getElementsByClassName("like-glyph").length, i++;) {
  const heartShape = document.getElementsByClassName("like-glyph")[i].innerHTML;
  document.getElementsByClassName("like-glyph")[i].innerHTML.addEventListener("click", heart);

  function heart() {
    if (heartShape ==EMPTY_HEART){
    fetch(mimicServerCall())
    .then(function (data) {
      // Use the actual data to do DOM manipulation
      heartShape.replaceWith(FULL_HEART);
      document.getElementsByClassName("like-glyph")[i].setAttribute("class","activated-heart")
    })
    .catch(function(error){
      document.getElementById("modal").removeAttribute("hidden");
      document.getElementById("modal-message").innerHTML = error.message;
      setTimeout(() => {
        document.getElementById("modal").setAttribute("class","hidden")
      }, 3000);
    })
  } else {
    heartShape.replaceWith(EMPTY_HEART);
    document.getElementsByClassName("like-glyph")[i].removeAttribute("activated-heart")
  }
  };


};







//------------------------------------------------------------------------------
// Don't change the code below: this function mocks the server response
//------------------------------------------------------------------------------

function mimicServerCall(url="http://mimicServer.like-glyph.com", config={}) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      let isRandomFailure = Math.random() < .2
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}
