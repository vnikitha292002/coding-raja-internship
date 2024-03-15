
function addNewWEField() {
    //console.log("Adding new field");
    let newNode = document.createElement('textarea');
    newNode.classList.add('form-control');
    newNode.classList.add('weField');
    newNode.classList.add("mt-2");
    newNode.setAttribute("rows", 3);
    newNode.setAttribute('placeholder', 'Enter here');

    let weob = document.getElementById("we");
    let weAddButtonOb = document.getElementById('weAddButton');

    weob.insertBefore(newNode, weAddButtonOb);
}

function addNewAQField() {
    let newNode = document.createElement('textarea');
    newNode.classList.add('form-control');
    newNode.classList.add('eqField');
    newNode.classList.add("mt-2");
    newNode.setAttribute('rows', '3');
    newNode.setAttribute('placeholder', 'Enter here');

    let aqOb = document.getElementById('aq');
    let eqAddButtonOb = document.getElementById('eqAddButton');
    aqOb.insertBefore(newNode, eqAddButtonOb);
}

function addNewSkillField() {
    let newNode = document.createElement('textarea');
    newNode.classList.add('form-control', 'skillField', 'mt-2');
    newNode.setAttribute('rows', 3);
    newNode.setAttribute('placeholder', 'Enter another skill');

    let skillOb = document.getElementById('skills');
    skillOb.insertBefore(newNode, skillOb.lastElementChild);
}

//generating cv
function generateCV() {

    let nameField = document.getElementById("nameField").value;

    let nameT1 = document.getElementById('nameT1')

    nameT1.innerHTML = nameField;

    //direct

    document.getElementById('nameT2').innerHTML = nameField;

    //contact
    document.getElementById("contactT").innerHTML = document.getElementById("contactField").value;

    //address
    document.getElementById("addressT").innerHTML = document.getElementById("addressField").value;

    document.getElementById("fbT").innerHTML = document.getElementById("fbField").value;

    document.getElementById("instaT").innerHTML = document.getElementById("instaField").value;

    document.getElementById("linkedT").innerHTML = document.getElementById("linkedField").value;

    //objective
    document.getElementById('objectiveT').innerHTML = document.getElementById('objectiveField').value;


    //we

    let wes = document.getElementsByClassName('weField')

    let str = ''

    for (let e of wes) {
        str = str + `<li> ${e.value}</li>`;
    }

    document.getElementById('weT').innerHTML = str;

    //aq

    let aqs = document.getElementsByClassName('eqField');

    let str1 = '';

    for (let e of aqs) {
        str1 = str1 + `<li> ${e.value} </li>`;
    }

    document.getElementById("aqT").innerHTML = str1;


    // Skills
    let skills = document.getElementsByClassName('skillField');
    let skillsStr = '';
    for (let e of skills) {
        if (e.value.trim() !== '') { // Adding this check to skip empty fields
            skillsStr += `<li>${e.value}</li>`;
        }
    }
    document.getElementById('skillsT').innerHTML = skillsStr;

    // Languages - Assuming you want to show it directly without the 'Add More' functionality
    let language = document.getElementById('languageField').value;
    if (language.trim() !== '') {
        document.getElementById('languagesT').innerHTML = `<li>${language}</li>`;
    }

    // Hobbies - Assuming you want to show it directly without the 'Add More' functionality
    let hobby = document.getElementById('hobbiesField').value;
    if (hobby.trim() !== '') {
        document.getElementById('hobbiesT').innerHTML = `<li>${hobby}</li>`;
    }


    //code for setting profile pic

    let file = document.getElementById('imgField').files[0];

    console.log(file);

    let reader = new FileReader()

    reader.readAsDataURL(file);

    console.log(reader.result);

    //set the image to template

    //   reader.onloadend = function () {
    //   document.getElementById('imgTemplate').src = reader.result;
    //}


    document.getElementById('cv-form').style.display = 'none'
    document.getElementById('cv-template').style.display = "block";

}
//print cv

function printCV() {
    window.print();
}
