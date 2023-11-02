const initialState = {
  language: {},

  projects: [
    {
      id: 1,
      tech: 'react',
      title: 'devlinks',
      web: 'https://devlinks.litewskidev.usermd.net',
      moc1: '/assets/mocs/devlinksMOC.webp',
      techs: [
        '/assets/icons/react.svg',
        '/assets/icons/redux.svg',
        '/assets/icons/sass.svg',
        '/assets/icons/node-js.svg',
        '/assets/icons/mongodb.svg',
        '/assets/icons/responsive-design.svg'
      ],
      git: 'https://github.com/litewskidev/link-sharing-app'
    },
    {
      id: 2,
      tech: 'react',
      title: 'watchmore',
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
      tech: 'react',
      title: 'audiophile',
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
      id: 4,
      tech: 'javascript',
      title: 'memory',
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
      id: 5,
      tech: 'javascript',
      title: 'pathfinder',
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
      id: 6,
      tech: 'javascript',
      title: 'invaders',
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
    }
  ]
};

export default initialState;
