import logoFrontEnd from "../assets/logo-front-end.png";
import logoBackEnd from "../assets/logo-back-end.png";
import logoTool from "../assets/logo-outils.png";
import sophieBluel_1 from "../assets/imagesProjects/portfolioSophieBluel/sophie-bluel-1.PNG";
import sophieBluel_2 from "../assets/imagesProjects/portfolioSophieBluel/sophie-bluel-2.PNG";
import sophieBluel_3 from "../assets/imagesProjects/portfolioSophieBluel/sophie-bluel-3.PNG";
import sophieBluel_4 from "../assets/imagesProjects/portfolioSophieBluel/sophie-bluel-4.PNG";
import kasa_1 from "../assets/imagesProjects/Kasa/kasa-1.PNG";
import kasa_2 from "../assets/imagesProjects/Kasa/kasa-2.PNG";
import kasa_3 from "../assets/imagesProjects/Kasa/kasa-3.PNG";
import kasa_4 from "../assets/imagesProjects/Kasa/kasa-4.PNG";
import mvg_1 from "../assets/imagesProjects/monVieuxGrimoire/mvg-1.PNG";
import mvg_2 from "../assets/imagesProjects/monVieuxGrimoire/mvg-2.PNG";
import mvg_3 from "../assets/imagesProjects/monVieuxGrimoire/mvg-3.PNG";
import mvg_4 from "../assets/imagesProjects/monVieuxGrimoire/mvg-4.PNG";

export const allData =[
    {
        "id" : "presentation",
        "name" : "Florent Lecointre",
        "age" : "23 ans",
        "description" : [
            "Récement diplômé du parcour developpeur web de chez OpenClassrooms, ça à déclenché un révélation pour mon futur. Motivé et déterminé à en apprendre toujours plus dans le monde de la programmation, je compte suivre leur formation de développeur d'application Java.",
            "Ma volonté d'intégré le monde professionnel du développement est grandissante. Cela me permettra de consolider mes connaissances actuelles et de découvrir de nouvelles manières de faire et penser. Je suis trés enthousiaste à l'idée de découvrir de nouveaux langages, libariries et frameworks."
        ]
    },
    {
        "id" : "formation",
        "formation" : [
            {
                "degree" : "OpenClassrooms développeur Web",
                "description" : "Front-end / Initiation\nBack-end Diplôme de niveau 5 (Bac +2)",
                "year" : "2023-2024"
            },
            {
                "degree" : "Baccalauréat Scientifique",
                "description" : "Option science de l'ingénieur",
                "year" : "2019"
            }
        ]
    },
    {
        "id" : "about",
        "about" :[
            "Passionné de basket, je pratique ce sport depuis une dizaine d'années, j'ai pu être amener à entrainer et coacher une équipe de joueur de 13 à 15ans. J'apprécie aussi les sport de glisse comme le ski et le snowboard en hiver et le surf et body-board l'été. Je pratique depuis peu la streatluge, sport à forte sensation, dans les routes sinueuses des Pyrénées.",
            "Je possède une autre passion qui me suit depuis toujours qui est le jeu vidéo. C'est celle-ci qui m'a amené sur le chemin de la programmation informatique. Ayant pour but de pouvoir créer mes propres jeux, une fois mes compétences consolidés, je compte me tourner vers l'apprentissage du C, C++ ou encore le Java et des logiciels comme Unity 3D ou Unreal Engine."
        ]
    },
    {
        "id" : "competence",
        "skills" : [
            {
                "title" : "Front-End",
                "competence" : [
                    "Html / CSS",
                    "JavaScript / JSX",
                    "ReactJS",
                    "Sass / Scss",
                    "Responsive design"
                ],
                "imageUrl" : logoFrontEnd
            },
            {
                "title" : "Back-end",
                "competence" : [
                    "NodeJS",
                    "ExpressJS",
                    "MangoDB",
                    "API Rest"
                ],
                "imageUrl" : logoBackEnd
            },
            {
                "title" : "Outils",
                "competence" : [
                    "npm / yarn",
                    "Git / GitHub",
                    "Confluence / Jira",
                    "Figma",
                    "Postman",
                    "Visual Studio Code / NotePad++"
                ],
                "imageUrl" : logoTool
            }
        ]
    },
    {
        "id" : "project",
        "allProject" : [
            {
                "titleProject" : "Sophie Bluel",
                "imageUrl" : [
                    sophieBluel_1,
                    sophieBluel_2,
                    sophieBluel_3,
                    sophieBluel_4
                ],
                "title" : "Portfolio de l'architecte d'intérieur Sophie Bluel",
                "description" : "Réalisation du front-end du portfolio de Sophie Bluel en Html/CSS et JavaScript avec une API pour l'envoie et le stockage des données.",
                "mission" : [
                    "Afichage des projets dynamique",
                    "Filtrer les projets en fonction de leur catégorie",
                    "Connexion à un compte admin pour gestion des projets (authentification/token)",
                    "Réalisation d'une modal pour la gestion",
                    "Suppression d'un projet de la base de données",
                    "Ajouter un projet à la base de données"
                ]
            },
            {
                "titleProject" : "Kasa",
                "imageUrl" : [
                    kasa_1,
                    kasa_2,
                    kasa_3,
                    kasa_4
                ],
                "title" : "Application de location immobilière de particulier à particulier Kasa",
                "description" : "Réalisation du front-end de l'application Kasa avec le framework React JS et en ayant les données nécessaire dans un fichier JSON.",
                "mission" : [
                    "Gestion des pages de l'application à l'aide de la librairie react router",
                    "Décomposition de l'aplication en composant réutilisable",
                    "Mettre en œuvre des animations CSS",
                    "Création de l'interface web à l'aide du précompilateur Sass",
                    "Gestion des erreurs sur la navigation"
                ]
            },
            {
                "titleProject" : "Mon vieux grimoire",
                "imageUrl" : [
                    mvg_1,
                    mvg_2,
                    mvg_3,
                    mvg_4
                ],
                "title" : "Application de notation de livre Mon Vieux Grimoire",
                "description" : "Réalisation du back-end de l'application mon vieux grimoire avec NodeJS, le framework ExpressJS et MangoDB pour la base de données, le front-end étant déjà réaliser à l'aide de ReactJS.",
                "mission" : [
                    "Création de compte utilisateur et connexion à un compte existant",
                    "Gestion de l'authentification grâce au token",
                    "Mis en œuvre des opérations CRUD de manière sécurisée",
                    "Implémenter un modèle logique de données conformément à la demande client",
                    "Stocker des données de manière sécurisée"
                ]
            }
        ]
    }
]