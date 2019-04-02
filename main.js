window.onload = init;

function init(){
for (let i = 0; i < data_portfolio.length; i++){
    let dataUl = document.querySelector('#bio');

    let dataLi = document.createElement('li');
    dataLi.innerText = data_portfolio[i].id;
    dataUl.appendChild(dataLi);
}
}


