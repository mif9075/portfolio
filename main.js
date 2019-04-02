window.onload = init;

function init(){
for (let i = 0; i < data_portfolio.length; i++){
    let dataUl = document.querySelector('#bio');

    let dataLi = document.createElement('li');
    dataLi.innerText = data_portfolio[i].id;
    dataUl.appendChild(dataLi);
}
}


for (let i = 0; i < education.length; i++){
    displayEducation(education[i]);
}

for (let i = 0; i < experience.length; i++){
    displayExperience(experience[i]);
}

//Helper Functions
function displayEducation(education){
    const educationUl = document.querySelector('#education');
}

function displayExperience(experience){
    const experienceUl = document.querySelector('#experience');
}