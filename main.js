// Defining text characters for the empty and full hearts for you to use later.
document.getElementById("modal").className = "hidden"
document.addEventListener("DOMContentLoaded", () => {
  const EMPTY_HEART = '♡'
  const FULL_HEART = '♥'
  
  
  
  // Your JavaScript code goes here!
  // Grabs the like-glyph (heart icon)
  const like = document.querySelectorAll("span.like-glyph")
  //const like2 = document.getElementById("201811190.span.like-glyph")
  //console.log(like2)
  
  like.forEach(thing => thing.addEventListener("click", changeHeart))
  //like2.addEventListener("click", changeHeart)
  console.log(like.target)

  function changeHeart(heart){
    //change the heart from empty to full, 
    //if heart is full, click changes to empty and vice versa
    mimicServerCall()
   
    .then(() => {
      console.log("there is a click", heart.target.textContent)
      if(heart.target.textContent === EMPTY_HEART){
        heart.target.textContent = FULL_HEART
      }else if(heart.target.textContent === FULL_HEART){
        heart.target.textContent = EMPTY_HEART
      }
    })
    .catch(() => {
      const modal1 = document.getElementById("modal")
      console.log("there was an error")
      modal1.className = "show"   
    setTimeout(() => {
      modal1.className = "hidden"}, 3000)
    })
    }
  })


//------------------------------------------------------------------------------
// Don't change the code below: this function mocks the server response
//------------------------------------------------------------------------------

function mimicServerCall(url="http://mimicServer.example.com", config={}) {
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