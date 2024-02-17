import allData from "./data";

export function getDataPresentation(){
    let data = allData.find((data) => {
        return data.id === "presentation"
    });

    return data;
};

export function getDataFormation(){
    let data = allData.find((data) => {
        return data.id === "formation"
    });

    return data;
};

export function getDataAbout(){
    let data = allData.find((data) => {
        return data.id === "about"
    });

    return data;
};

export function getDataCompetence(){
    let data = allData.find((data) => {
        return data.id === "competence"
    });

    return data;
};

export function getDataProject(){
    let data = allData.find((data) => {
        return data.id === "project"
    });

    return data;
};

export function getElementMail(){

    let firstname = document.getElementById("firstname");
    let name = document.getElementById("name");
    let subject = document.getElementById("subject");
    let message = document.getElementById("message");
    message = message.value;
    console.log(message)
    message = message.replace(/\r\n|\r|\n/g, "%0D%0A");
    console.log(message)

    let contentMail = [];
    
    contentMail.push(
        {
            "subject" : subject.value,
            "message" : `${message}%0A%0A${firstname.value} ${name.value}`
        }
    );

    return contentMail;
};