import meaListImg from '../../img/MeaList-img.PNG';

import omnifoodImg from '../../img/Omnifood-img.png';

import pigGameImg from '../../img/PigGame-img.PNG';

import maptyImg from '../../img/Mapty-img.PNG';

const getProjectsOptions = () => {
  return [
    {
      title: 'MeaList',
      link: 'https://react-meal-list.netlify.app/',
      description:
        'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Natus, illum, distinctio nam dignissimos eligendi quo et est dolores amet possimus assumenda fugiat voluptatem deserunt temporibus? Molestias numquam exercitationem nostrum ratione!',
      icon: meaListImg,
      git: 'https://github.com/Joao-Matias/meal-list-react',
      alt: 'Front page of MeaList Website with a someone holding a pen and a notebook, and vegetables in the other image ',
    },
    {
      title: 'Omnifood',
      link: 'https://omnifood-jdmatias.netlify.app/',
      description:
        'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Natus, illum, distinctio nam dignissimos eligendi quo et est dolores amet possimus assumenda fugiat voluptatem deserunt temporibus? Molestias numquam exercitationem nostrum ratione!',
      icon: omnifoodImg,
      alt: 'Landing page for the website omnifood, a website about a food app',
    },
    {
      title: 'PigGame',
      link: 'https://pig-game-jdmatias.netlify.app/',
      description:
        'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Natus, illum, distinctio nam dignissimos eligendi quo et est dolores amet possimus assumenda fugiat voluptatem deserunt temporibus? Molestias numquam exercitationem nostrum ratione!',
      icon: pigGameImg,
      git: 'https://github.com/Joao-Matias/PigGame',
      alt: 'Website application game',
    },
    {
      title: 'Mapty',
      link: 'https://mapty-jdmatias.netlify.app/',
      description:
        'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Natus, illum, distinctio nam dignissimos eligendi quo et est dolores amet possimus assumenda fugiat voluptatem deserunt temporibus? Molestias numquam exercitationem nostrum ratione!',
      icon: maptyImg,
      git: 'https://github.com/Joao-Matias/Mapty',
      alt: 'A map with possibility of loggin trainings',
    },
  ];
};

export default getProjectsOptions;
