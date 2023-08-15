const initialState = {
  language: {},

  projects: [
    {
      id: 1,
      tech: 'react',
      title: 'watchmore',
      img: '/assets/covers/1.webp',
      web: 'http://watchmore.litewskidev.usermd.net',
      moc1: '/assets/mocs/watchMOC1.webp',
      moc2: '/assets/mocs/watchMOC2.webp',
      techs: [
        '/assets/icons/react.svg',
        '/assets/icons/redux.svg',
        '/assets/icons/sass.svg',
        '/assets/icons/firebase.svg',
        '/assets/icons/responsive-design.svg'
      ],
      desc: 'Watch More! Multi-page "streaming" app with login, sign up, watch list, movies, TV shows, collections, hubs and search.',
      git: 'https://github.com/litewskidev/watchmore-app'
    },
    {
      id: 2,
      tech: 'javascript',
      title: 'pathfinder',
      img: '/assets/covers/2.webp',
      web: 'http://pathfinder.litewskidev.usermd.net',
      moc1: '/assets/mocs/pathMOC1.webp',
      moc2: '/assets/mocs/pathMOC2.webp',
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
      id: 3,
      tech: 'react',
      title: 'audiophile',
      img: '/assets/covers/3.webp',
      web: 'http://audiophile.litewskidev.usermd.net',
      moc1: '/assets/mocs/audioMOC1.webp',
      moc2: '/assets/mocs/audioMOC2.webp',
      techs: [
        '/assets/icons/react.svg',
        '/assets/icons/redux.svg',
        '/assets/icons/sass.svg',
        '/assets/icons/responsive-design.svg'
      ],
      desc: 'Multi-page E-commerce App for audiophiles. Category and product page. Cart with quantity input. Checkout page, confirming-order-modal with order ID and ordered products dropdown.',
      git: 'https://github.com/litewskidev/audiophile-ecom'
    },
    {
      id: 4,
      tech: 'javascript',
      title: 'memory',
      img: '/assets/covers/4.webp',
      web: 'http://memory.litewskidev.usermd.net',
      moc1: '/assets/mocs/memoryMOC1.webp',
      moc2: '/assets/mocs/memoryMOC2.webp',
      techs: [
        '/assets/icons/js.svg',
        '/assets/icons/html5.svg',
        '/assets/icons/sass.svg',
        '/assets/icons/responsive-design.svg'
      ],
      desc: 'Try to match pairs. Solo or Multiplayer (Up to 4 Players) Game. Set the theme to use numbers or icons within the tiles. Choose to play on either a 6x6 or 4x4 grid.',
      git: 'https://github.com/litewskidev/memory-game'
    },
    {
      id: 5,
      tech: 'javascript',
      title: 'miaumamia',
      img: '/assets/covers/5.webp',
      web: 'http://miaumamia.litewskidev.usermd.net',
      moc1: '/assets/mocs/memoryMOC1.webp',
      moc2: '/assets/mocs/memoryMOC2.webp',
      techs: [
        '/assets/icons/js.svg',
        '/assets/icons/html5.svg',
        '/assets/icons/sass.svg',
        '/assets/icons/responsive-design.svg'
      ],
      git: 'https://github.com/litewskidev/project-pizzeria'
    },
    {
      id: 6,
      tech: 'react',
      title: 'dine',
      img: '/assets/covers/5.webp',
      web: 'http://dine.litewskidev.usermd.net',
      moc1: '/assets/mocs/memoryMOC1.webp',
      moc2: '/assets/mocs/memoryMOC2.webp',
      techs: [
        '/assets/icons/react.svg',
        '/assets/icons/redux.svg',
        '/assets/icons/sass.svg',
        '/assets/icons/responsive-design.svg'
      ],
      git: 'https://github.com/litewskidev/dine-restaurant'
    },
    {
      id: 7,
      tech: 'javascript',
      title: 'blog',
      img: '/assets/covers/5.webp',
      web: 'http://blog.litewskidev.usermd.net',
      moc1: '/assets/mocs/memoryMOC1.webp',
      moc2: '/assets/mocs/memoryMOC2.webp',
      techs: [
        '/assets/icons/js.svg',
        '/assets/icons/html5.svg',
        '/assets/icons/sass.svg',
        '/assets/icons/responsive-design.svg'
      ],
      git: 'https://github.com/litewskidev/javascript-blog'
    }
  ]
};

export default initialState;
