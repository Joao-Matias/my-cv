import meaListImg from "../../img/MeaList-img.PNG";

import pigGameImg from "../../img/PigGame-img.PNG";

import maptyImg from "../../img/Mapty-img.PNG";

const getProjectsOptions = () => {
  return [
    {
      title: "MeaList",
      link: "https://react-meal-list.netlify.app/",

      appDescription: [
        { text: "2 section app with recipe creating & shopping list" },
        { text: "Add pictures to your created recipe" },
        {
          text: "Add,remove and edit ingredients as you need to make that masterpiece",
        },
        {
          text: "When creating your shopping list add, remove, edit and shuffle items to organize it",
        },
      ],

      techDescription: [
        { text: "REACT/CSS" },
        { text: "First project after learning how to use React" },
        { text: "Much more reactive and intuitive to use than vanila JS" },
        {
          text: "Opted to use context instead of redux since the state managment of this app was not that complex",
        },
      ],
      icon: meaListImg,
      git: "https://github.com/Joao-Matias/meal-list-react",
      alt: "Front page of MeaList Website with a someone holding a pen and a notebook, and vegetables in the other image ",
    },
    {
      title: "Mapty",
      link: "https://mapty-jdmatias.netlify.app/",
      appDescription: [
        { text: "Tracking app that records your training" },
        {
          text: "Click the map and add a training and add the stats of that session",
        },
        { text: "Go back to a session by clicking on the recorded training" },
      ],
      techDescription: [
        { text: "JAVASCRIPT/HTML/CSS" },
        {
          text: "Super interesting project done when I first was introduced to function programming using Classes",
        },
        {
          text: "A more updated approach to the way that code can be written and in my opinion more clear, structured and concise",
        },
      ],
      icon: maptyImg,
      git: "https://github.com/Joao-Matias/Mapty",
      alt: "A map with possibility of loggin trainings",
    },
    {
      title: "PigGame",
      link: "https://pig-game-jdmatias.netlify.app/",
      appDescription: [
        { text: "Get to 100 point by rolling the dice and add the value" },
        {
          text: "You can choose to hold to your current points at any point and pass the turn",
        },
        {
          text: "If you roll a 1 you loose your current points and pass the turn",
        },
      ],
      techDescription: [
        { text: "JAVASCRIPT/HTML/CSS" },
        { text: "First project done while attending the course" },
        {
          text: "I have decided to include this project here since it was the first time I really got excited and tuned with the idea of coding.",
        },
        {
          text: "Simple and basic code but the way data get manipulated dependent on a result is what characterizes a simple app like this or the most robust one",
        },
      ],
      icon: pigGameImg,
      git: "https://github.com/Joao-Matias/PigGame",
      alt: "Website application game",
    },
  ];
};

export default getProjectsOptions;
