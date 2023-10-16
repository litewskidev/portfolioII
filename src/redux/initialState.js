const initialState = {
  language: {},

  projects: [
    {
      id: 1,
      tech: 'react',
      title: 'audiophile',
      date: '005/0023',
      img: '/assets/covers/3.webp',
      web: 'https://audiophile.litewskidev.usermd.net',
      moc1: '/assets/mocs/audiophileMOC.webp',
      techs: [
        '/assets/icons/react.svg',
        '/assets/icons/redux.svg',
        '/assets/icons/sass.svg',
        '/assets/icons/node-js.svg',
        '/assets/icons/expressjs.svg',
        '/assets/icons/responsive-design.svg'
      ],
      desc: 'Multi-page E-commerce App for audiophiles. Category and product pages. Cart with quantity input. Checkout page, confirming order modal with order ID and ordered products dropdown.',
      git: 'https://github.com/litewskidev/audiophile-ecom'
    },
    {
      id: 2,
      tech: 'react',
      title: 'watchmore',
      date: '007/0023',
      img: '/assets/covers/1.webp',
      web: 'https://watchmore.litewskidev.usermd.net',
      moc1: '/assets/mocs/watchmoreMOC.webp',
      techs: [
        '/assets/icons/react.svg',
        '/assets/icons/redux.svg',
        '/assets/icons/sass.svg',
        '/assets/icons/node-js.svg',
        '/assets/icons/firebase.svg',
        '/assets/icons/responsive-design.svg'
      ],
      desc: 'Watch more! Multi-page "streaming" app with Login, Sign up, Watch list, Movies, TV shows, Collections, Hubs and Search.',
      git: 'https://github.com/litewskidev/watchmore-app'
    },
    {
      id: 3,
      tech: 'javascript',
      title: 'memory',
      date: '006/0023',
      img: '/assets/covers/4.webp',
      web: 'https://memory.litewskidev.usermd.net',
      moc1: '/assets/mocs/memoryMOC.webp',
      techs: [
        '/assets/icons/js.svg',
        '/assets/icons/html5.svg',
        '/assets/icons/sass.svg',
        '/assets/icons/responsive-design.svg'
      ],
      desc: 'Try to match pairs. Solo or multiplayer (up to 4 Players) game. Set the theme to use numbers or icons within the tiles. Choose to play on either a 6x6 or 4x4 grid.',
      git: 'https://github.com/litewskidev/memory-game'
    },
    {
      id: 4,
      tech: 'javascript',
      title: 'pathfinder',
      date: '004/0023',
      img: '/assets/covers/2.webp',
      web: 'https://pathfinder.litewskidev.usermd.net',
      moc1: '/assets/mocs/pathfinderMOC.webp',
      techs: [
        '/assets/icons/js.svg',
        '/assets/icons/html5.svg',
        '/assets/icons/sass.svg',
        '/assets/icons/responsive-design.svg'
      ],
      desc: 'Find the best path! Draw your available routes on grid and Pathfinder will find the best path for You.',
      git: 'https://github.com/litewskidev/pathfinder-app'
    },
    {
      id: 5,
      tech: 'javascript',
      title: 'invaders',
      date: '009/0023',
      img: '/assets/covers/7.webp',
      web: 'https://invaders.litewskidev.usermd.net',
      moc1: '/assets/mocs/invadersMOC.webp',
      techs: [
        '/assets/icons/js.svg',
        '/assets/icons/html5.svg',
        '/assets/icons/sass.svg',
        '/assets/icons/node-js.svg',
        '/assets/icons/firebase.svg',
        '/assets/icons/responsive-design.svg'
      ],
      git: 'https://github.com/litewskidev/invaders-game'
    },
    {
      id: 6,
      tech: 'javascript',
      title: 'miaumamia',
      date: '001/0023',
      img: '/assets/covers/5.webp',
      web: 'https://miaumamia.litewskidev.usermd.net',
      moc1: '/assets/mocs/miaumamiaMOC.webp',
      techs: [
        '/assets/icons/js.svg',
        '/assets/icons/html5.svg',
        '/assets/icons/sass.svg',
        '/assets/icons/node-js.svg',
        '/assets/icons/expressjs.svg',
        '/assets/icons/responsive-design.svg'
      ],
      git: 'https://github.com/litewskidev/project-pizzeria'
    }
  ]
};

export default initialState;
