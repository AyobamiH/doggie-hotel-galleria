//Get a dog photo from the dog.ceo api and place the photo in the DOM

//A function that gets the api endpoint 
function showPic(){
    fetch('https://dog.ceo/api/breeds/image/random')
    
  .then(response => response.json())

  // place the response data message in the src attrs of .imageshere class in the dom
  .then(data => document.querySelector('.imageshere').src = data.message);
}

// A button-click event Listener
let click = document.querySelector('button').addEventListener('click', showPic)

// let user choose the option of how many pictures to display

// 