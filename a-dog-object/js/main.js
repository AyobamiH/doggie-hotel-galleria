//Get a dog photo from the dog.ceo api and place the photo in the DOM

// get api endpoint
function showPic(){
    fetch('https://dog.ceo/api/breeds/image/random')
    
  .then(response => response.json())
  .then(data => document.querySelector('.imageshere').src = data.message);
}
let click = document.querySelector('button').addEventListener('click', showPic)

// let user choose the option of how many pictures to display

// 