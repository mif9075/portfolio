   
const newLI = document.createElement('li');
newLI.innerText = data[0].summary;
const ul = document.querySelector('#bio');
ul.appendChild(newLI);



