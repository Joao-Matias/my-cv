const getEducationOptions = () => {
  return [
    {
      institution: 'Udemy',
      studiedTitle: 'React',
      from: '2022',
      to: '2023',
      studiedTopics: [
        'React fundamentals: components, JSX, props, events, forms, state',
        'React Hooks',
        'How to debug React apps',
        'Class-based components and functional components',
        'Redux & Redux Toolkit',
      ],
    },
    {
      institution: 'Udemy',
      studiedTitle: 'Javascript',
      from: '2021',
      to: '2022',
      studiedTopics: [
        'Javascript fundamentals: variables, if/else, operators, boolean logic, functions, arrays, objects, loops, strings',
        'Modern ES6+: arrow functions, destructuring, spread operator, optional chaining',
        'Modern OOP: Classes, constructors, prototypal inheritance, encapsulation',
        'This keyword',
        'Asynchronous JavaScript: Event loop, promises, async/await, AJAX calls and APIs',
      ],
    },
    {
      institution: 'Udemy',
      studiedTitle: 'Html & Css',
      from: '2022',
      to: '2022',
      studiedTopics: [
        'Modern, semantic and accessible HTML5',
        'Flexbox and CSS Grid for layout',
        'How to plan, sketch, design, build, test, and optimize a professional website',
        'How to make websites work on every possible mobile device (responsive design)',
      ],
    },
    {
      institution: 'IADE - Creative University, Lisbon',
      studiedTitle: 'Marketing & Advserting BA',
      from: '2013',
      to: '2016',
      studiedTopics: [
        'Prospecting market',
        'Target definition',
        'Strategy',
        'Media planning',
        'Contingency',
        'Market Research',
        'Product Management',
        'Web Design',
      ],
    },
  ];
};

export default getEducationOptions;
