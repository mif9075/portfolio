window.onload = init;

function init(){
// for (let i = 0; i < data_portfolio.length; i++){
//     let dataUl = document.querySelector('#bio');

//     let dataLi = document.createElement('li');
//     dataLi.innerText = data_portfolio[i].id;
//     dataUl.appendChild(dataLi);
// }

for (let i = 0; i < education.length; i++){
    displayEducation(education[i]);
}

for (let i = 0; i < experience.length; i++){
    displayExperience(experience[i]);
}
}
//Helper Functions
function displayEducation(education){
    const educationUl = document.querySelector('#education');
    
    const educationLi = document.createElement('li');
    const educationData = document.createElement('ul');
    educationLi.appendChild(educationData);
    educationUl.appendChild(educationLi);

    const degree = document.createElement('li');
    degree.innerText = `Degree: ${education.degree}`;
    educationData.appendChild(degree);

    const year = document.createElement('li');
    year.innerText = `Year: ${education.year}`;
    educationData.appendChild(year);

    const school = document.createElement('li');
    school.innerText = `Year: ${education.school}`;
    educationData.appendChild(school);

    const address = document.createElement('li');
    address.innerText = `Address: ${education.address}`;
    educationData.appendChild(address);
}

function displayExperience(experience){
    const experienceUl = document.querySelector('#experience');
    
    const experienceLi = document.createElement('li');
    const experienceData = document.createElement('ul');
    experienceLi.appendChild(experienceData);
    experienceUl.appendChild(experienceLi);

    const title = document.createElement('li');
    title.innerText = `Position: ${experience.title}`;
    experienceData.appendChild(title);

    const year = document.createElement('li');
    year.innerText = `Year: ${experience.year}`;
    experienceData.appendChild(year);

    const employer = document.createElement('li');
    employer.innerText = `Employer: ${experience.employer}`;
    experienceData.appendChild(employer);

    const address = document.createElement('li');
    address.innerText = `Address: ${experience.address}`;
    experienceData.appendChild(address);
}