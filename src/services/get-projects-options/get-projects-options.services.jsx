import meaListImg from '../../img/MeaList-img.PNG';

import pigGameImg from '../../img/PigGame-img.PNG';

import maptyImg from '../../img/Mapty-img.PNG';

const getProjectsOptions = () => {
  return [
    {
      title: 'MeaList',
      link: 'https://react-meal-list.netlify.app/',
      description:
        'A food app divided in two sections, creating recipes and shopping lists. When creating your recipe you can add a picture to better identify this recipe. Add,remove and edit ingredients as you need to make that masterpiece. When creating a shopping list add, remove, edit and shuffle items to better organize it. If you already created your favorite recipe, select it and transfer the ingredients to the list. ',
      icon: meaListImg,
      git: 'https://github.com/Joao-Matias/meal-list-react',
      alt: 'Front page of MeaList Website with a someone holding a pen and a notebook, and vegetables in the other image ',
    },
    {
      title: 'Mapty',
      link: 'https://mapty-jdmatias.netlify.app/',
      description:
        'Tracking app that records your training. By clicking anywhere on the map you can record, either a running or cycling practice. When you do that you can input some stats of that session. After registering that session, you can see it on the map, check where it happened and the metrics',
      icon: maptyImg,
      git: 'https://github.com/Joao-Matias/Mapty',
      alt: 'A map with possibility of loggin trainings',
    },
    {
      title: 'PigGame',
      link: 'https://pig-game-jdmatias.netlify.app/',
      description:
        'A simple game app where the goal is to get to one hundred points by rolling the dice and adding the value of the dice to your current points. When you feel ready you can hold on to the points gathered through rolling the dice and pass the turn to your opponent. If you ever roll a one all the current points are lost and it is your oppenents turn.',
      icon: pigGameImg,
      git: 'https://github.com/Joao-Matias/PigGame',
      alt: 'Website application game',
    },
  ];
};

export default getProjectsOptions;
