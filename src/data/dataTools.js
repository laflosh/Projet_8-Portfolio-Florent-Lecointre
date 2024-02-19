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