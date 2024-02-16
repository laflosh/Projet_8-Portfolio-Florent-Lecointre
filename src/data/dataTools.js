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
    let object = document.getElementById("object");
    let message = document.getElementById("message");

    let contentMail = [];
    
    contentMail.push(
        {
            "object" : object.value,
            "message" : `${message.value}%0A%0A${firstname.value} ${name.value}`
        }
    );

    return contentMail;
};