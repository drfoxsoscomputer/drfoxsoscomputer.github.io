const config = {
  github: {
    username: 'drfoxsoscomputer', // Your GitHub org/user name. (Required)
    sortBy: 'stars', // stars | updated
    limit: 10, // How many projects to display.
    exclude: {
      forks: true, // Forked projects will not be displayed if set to true.
      projects: [
        // PFGrupo4FrontEnd,
        // PFGrupo4Backend,
        // Prep-Course,
        // fe-ct-prepcourse-fs,
        // Learn-Next-js,
        // drfoxsoscomputer.github.io,
        // IA-en-Practica,
      ], // These projects will not be displayed. example: ['my-project1', 'my-project2']
    },
  },
  social: {
    linkedin: 'denis-drfox',
    twitter: '',
    mastodon: '',
    facebook: '',
    instagram: '',
    youtube: '', // example: 'pewdiepie'
    dribbble: '',
    behance: '',
    medium: '',
    dev: '',
    stackoverflow: '', // example: '1/jeff-atwood'
    skype: '',
    telegram: '',
    website: '',
    phone: '',
    email: 'daprthefox@gmail.com',
  },
  resume: {
    fileUrl:
      'https://drive.google.com/file/d/13pXOS71R4LiRukh_mJBiGnLjS68K8MYm/view?usp=drive_link', // Empty fileUrl will hide the `Download Resume` button.
  },
  skills: [
    'JavaScript',
    'React',
    'Redux',
    'Node',
    'Express',
    'Sequelize',
    'PostgreSQL',
    'Git/Github',
    'SCRUM',
    'HTML',
    'CSS',
  ],
  experiences: [
    // {
    //   company: 'Company Name',
    //   position: 'Position',
    //   from: 'September 2021',
    //   to: 'Present',
    //   companyLink: 'https://example.com',
    // },
    // {
    //   company: 'Company Name',
    //   position: 'Position',
    //   from: 'July 2019',
    //   to: 'August 2021',
    //   companyLink: 'https://example.com',
    // },
  ],
  certifications: [
    {
      name: 'Programación desde Cero',
      body: 'Fundamentos de la Programación, Lógica Algorítmica, Pensamiento Lógico Matemático',
      year: '04/2023',
      link: 'https://production-egg-certificates.s3.amazonaws.com/DenisPina/programaci%C3%B3ndesdecerolatam/thumbnail_c24e1ba5c8bd61e8696a3a9bdbc72a95de247dcaaf26fdd29ed9cb6173ffe673.jpeg',
    },
  ],
  education: [
    {
      institution: 'Henry',
      degree: 'Desarrollador Full Stack',
      from: '05/2023',
      to: '01/2024',
    },
    {
      institution: 'Instituto Universitario de Tecnología "Andrés Eloy Blanco"',
      degree: 'Técnico Superior Universitario en Información y Documentación',
      from: '2002',
      to: '2005',
    },
  ],

  // To hide the `My Projects` section, keep it empty.
  externalProjects: [
    {
      title: 'GameWorld ecommerce',
      description:
        'Proyecto Final del bootcam Soy Henry. Desarrollo de un ecommerce especializado en la venta de videojuegos en formatos físicos y digitales. El proyecto fue ejecutado por un equipo de 7 integrantes utilizando la tecnología ágil SCRUM, con sprints de una semana presentándole a un Product Owner avances sobre el progreso de la app, destacando las siguientes características: características básicas de un ecommerce (CRUD de productos, auth, catálogo, checkout, entre otros). ',
      imageUrl:
        'https://res.cloudinary.com/dmhxl1rpc/image/upload/v1701669208/gameworld/logo.png',
      videoUrl: 'https://youtu.be/mdVWtYZtcfM',
      githubRepo: 'https://github.com/drfoxsoscomputer/Proyecto_Final',
      deployedLink: 'https://gameworldeccomerce.vercel.app',
      link: '',
    },
    {
      title: 'Pokedex APP',
      description:
        'Durante este proyecto individual en el Bootcamp SoyHenry, creé una Pokedex utilizando React. La aplicación cuenta con funcionalidades como paginación, filtros, ordenamiento en el lado del frontend y búsqueda por nombre exacto. Además, implementé la capacidad de crear Pokémon mediante un formulario controlado con JavaScript, integrándolo con la API PokeApi para recopilar datos en tiempo real.',
      imageUrl:
        'https://res.cloudinary.com/dmhxl1rpc/image/upload/v1704499730/images/Pokedex_Logo.png',
      videoUrl: '',
      githubRepo: 'https://github.com/drfoxsoscomputer/PI-Pokemon',
      deployedLink: 'https://pi-pokemon-drfoxsoscomputer.vercel.app',
      link: '',
    },
    {
      title: 'Rick And Morty APP',
      description:
        'Desarrollé una aplicación web (SPA) como parte del proyecto integrador en el Bootcamp SoyHenry.  La aplicación ofrece información detallada sobre los personajes de la famosa serie televisiva estadounidense "Rick and Morty", aprovechando la API pública de la serie.',
      imageUrl:
        'https://res.cloudinary.com/dmhxl1rpc/image/upload/v1704500472/images/Rick_And_Morty_Logo.png',
      videoUrl: 'https://www.youtube.com/watch?v=76-2ecqBvZk',
      githubRepo: 'https://github.com/drfoxsoscomputer/Rick-And-Morty',
      deployedLink: '',
      link: '',
    },
  ],
  // Display blog posts from your medium or dev account. (Optional)
  blog: {
    source: 'dev', // medium | dev
    username: '', // to hide blog section, keep it empty
    limit: 2, // How many posts to display. Max is 10.
  },
  googleAnalytics: {
    id: '', // GA3 tracking id/GA4 tag id UA-XXXXXXXXX-X | G-XXXXXXXXXX
  },
  // Track visitor interaction and behavior. https://www.hotjar.com
  hotjar: {
    id: '',
    snippetVersion: 6,
  },
  themeConfig: {
    defaultTheme: 'dark',

    // Hides the switch in the navbar
    // Useful if you want to support a single color mode
    disableSwitch: false,

    // Should use the prefers-color-scheme media-query,
    // using user system preferences, instead of the hardcoded defaultTheme
    respectPrefersColorScheme: false,

    // Hide the ring in Profile picture
    hideAvatarRing: false,

    // Available themes. To remove any theme, exclude from here.
    themes: [
      'light',
      'dark',
      'cupcake',
      'bumblebee',
      'emerald',
      'corporate',
      'synthwave',
      'retro',
      'cyberpunk',
      'valentine',
      'halloween',
      'garden',
      'forest',
      'aqua',
      'lofi',
      'pastel',
      'fantasy',
      'wireframe',
      'black',
      'luxury',
      'dracula',
      'cmyk',
      'autumn',
      'business',
      'acid',
      'lemonade',
      'night',
      'coffee',
      'winter',
      'procyon',
    ],

    // Custom theme
    customTheme: {
      primary: '#fc055b',
      secondary: '#219aaf',
      accent: '#e8d03a',
      neutral: '#2A2730',
      'base-100': '#E3E3ED',
      '--rounded-box': '3rem',
      '--rounded-btn': '3rem',
    },
  },

  // Optional Footer. Supports plain text or HTML.
  footer: `Made with <a 
      class="text-primary" href="https://github.com/arifszn/gitprofile"
      target="_blank"
      rel="noreferrer"
    >GitProfile</a> and ❤️`,
};

export default config;
