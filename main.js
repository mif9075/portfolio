window.onload = init;

function init() {

    addClick('#projects', projectAll);

    displayBio();
    displayCert();
    displayIntro();
    displayLanguages();
    displaySkills();
    displaySocialMedia();

    for (let i = 0; i < education.length; i++) {
        displayEducation(education[i]);
    }

    for (let i = 0; i < experience.length; i++) {
        displayExperience(experience[i]);
    }

}

//Helper Functions
function addClick(selector, func) {
    document.querySelector(selector)
        .addEventListener('click', func);
}

function projectAll(event) {

    event.preventDefault();
    clearList();
    printDisplay();

    // addClick('#projects', clearList());

}

function clearList() {
    event.preventDefault();
    removeAllChildrenOfOl();
}

function removeAllChildrenOfOl() {

    const ul = document.querySelector('#list');

    while (ul.hasChildNodes()) {
        ul.removeChild(ul.firstChild);
    }
}

function displayBio() {
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

    bioUl.style.fontSize = "large";
}

function displayIntro() {
    const introUl = document.querySelector('#intro');
    document.querySelector("#intro").style.fontSize = "large";

    const introData = document.createElement('ul');
    introUl.appendChild(introData);

    const intro = document.createElement('li');
    intro.innerText = `Objective: ${data[2].summary}`;
    introData.appendChild(intro);

    const intro2 = document.createElement('li');
    intro2.innerText = `Objective: ${data[2].summary2}`;
    introData.appendChild(intro2);

    
}

function displayCert() {
    const certUl = document.querySelector('#cert');

    const certData = document.createElement('ul');
    certUl.appendChild(certData);

    const title = document.createElement('li');
    title.innerText = `Title: ${data[3].title}`;
    certData.appendChild(title);

    const cert = document.createElement('li');
    cert.innerText = `Organization: ${data[3].organization}`;
    certData.appendChild(cert);
}

function displaySocialMedia() {
    const socialUl = document.querySelector('#social_media');
    document.querySelector("#social_media").style.fontSize = "large";

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

function displayLanguages() {
    const languageUl = document.querySelector('#language');

    const languageData = document.createElement('ul');
    languageUl.appendChild(languageData);

    const language = document.createElement('li');
    language.innerText = `${data[4].language[0]}`;
    languageData.appendChild(language);

    const language2 = document.createElement('li');
    language2.innerText = `${data[4].language[1]}`;
    languageData.appendChild(language2);
    
}

function displaySkills() {
    const skillUl = document.querySelector('#skills');

    const skillData = document.createElement('ul');
    skillUl.appendChild(skillData);

    const skill = document.createElement('li');
    skill.innerText = `${data[5].skill}`;
    skillData.appendChild(skill);

    const skill2 = document.createElement('li');
    skill2.innerText = `${data[5].skill2}`;
    skillData.appendChild(skill2);

    const skill3 = document.createElement('li');
    skill3.innerText = `${data[5].skill3}`;
    skillData.appendChild(skill3);

}

function displayEducation(education) {
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
    school.innerText = `School: ${education.school}`;
    educationData.appendChild(school);

    const address = document.createElement('li');
    address.innerText = `Address: ${education.address}`;
    educationData.appendChild(address);
}

function displayExperience(experience) {
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

function printDisplay() {
    for (let i = 0; i < project.length; i++) {

        const projectUl = document.querySelector('#list');
        const projectData = document.createElement('ul');
        projectUl.appendChild(projectData);

        const name = document.createElement('li');
        name.innerText = `Name of Project: ${project[i].name}`;
        projectData.appendChild(name);

        const date = document.createElement('li');
        date.innerText = `Date Project Started: ${project[i].date}`;
        projectData.appendChild(date);

        const description = document.createElement('li');
        description.innerText = `Project Description: ${project[i].description}`;
        projectData.appendChild(description);

        const website = document.createElement('li');
        website.innerText = `Github: ${project[i].website}`;
        projectData.appendChild(website);


        
    }
}