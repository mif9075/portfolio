window.onload = init;

function init(){

for (let i = 0; i < education.length; i++){
    displayEducation(education[i]);
}

for (let i = 0; i < experience.length; i++){
    displayExperience(experience[i]);
}

displayBio();
displaySocialMedia();

}


//Helper Functions
function displayBio(){
    const bioUl = document.querySelector('#bio');

    const bioData = document.createElement('ul');
    bioUl.appendChild(bioData);

    const name = document.createElement('li');
    name.innerText = `Name: ${data[0].name}`;
    bioData.appendChild(name);

    const address = document.createElement('li');
    address.innerText = `Address: ${data[0].address}`;
    bioData.appendChild(address);

    const city = document.createElement('li');
    city.innerText = `Address: ${data[0].city}`;
    bioData.appendChild(city);
}

function displaySocialMedia(){
    const socialUl = document.querySelector('#social_media');

    const socialData = document.createElement('ul');
    socialUl.appendChild(socialData);

    const email = document.createElement('li');
    email.innerText = `Email: ${data[1].email}`;
    socialData.appendChild(email);

    const phone = document.createElement('li');
    phone.innerText = `Phone: ${data[1].phone}`;
    socialData.appendChild(phone);

    const git = document.createElement('li');
    git.innerText = `Github: ${data[1].github}`;
    socialData.appendChild(git);
}


function displayEducation(education){
    const educationUl = document.querySelector('#education');
    
    // const educationLi = document.createElement('li');
    const educationData = document.createElement('ul');
    educationUl.appendChild(educationData);
    // educationUl.appendChild(educationLi);

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
    
    // const experienceLi = document.createElement('li');
    const experienceData = document.createElement('ul');
    experienceUl.appendChild(experienceData);
    // experienceUl.appendChild(experienceLi);

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