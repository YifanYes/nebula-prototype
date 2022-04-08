//This constant stores the styles of all the elements of the Jumbotron Component
export const JumbotronStyles = {
  wrapper: 'flex justify-center items-center basis-[65%] z-10 relative backdrop-blur-[2px] bg-gradient-to-tl from-black/20 to-white/20 rounded-xl',
  image_box: 'my-10 w-1/2 flex items-center justify-center flex-col drop-shadow-md',
  info_box: 'm-10 w-1/2 flex items-center justify-center flex-col',
  title: 'text-4xl font-semibold break-words mb-4 text-stone-200',
  text: 'text-md font-medium break-words text-stone-400',
  button: 'p-4 w-fit h-fit bg-gradient-to-tl from-black/20 to-white/20 hover:brightness-[3] hover:hue-rotate-30 rounded-xl transition-all duration-[0.5s] ease-in-out',
  shadow: 'absolute top-4 left-4 bg-gradient-to-tl from-black/5 to-white/5 w-full h-full rounded-xl -z-10 shadow-[6px_6px_6px_0_rgba(0,0,0,0.5)] transition-all duration-[0.2s] ease-in-out'
};

//This constant stores the values of all the elements of the Jumbotron Page
export const jumboLandingValues_1 = {
  src: '/Nebula_White.png',
  image_h: 305,
  image_w: 303,
  text_position: 'left',
  title: 'La mayor comunidad de comercio descentralizado',
  text: 'Nébula es una plataforma descentralizada y autogobernada para el intercambio de productos, servicios y activos digitales. Gana recompensas únicas con nuestro token NEB.',
  button: ['Explorar']
};

//This constant stores the values of all the elements of the Jumbotron Page
export const jumboLandingValues_2 = {
  src: '/mockup_2.png',
  image_h: 340,
  image_w: 300,
  text_position: 'right',
  title: 'Productos, servicios y activos digitales al alcance de un dedo',
  text: 'De manera sencilla y rápida dentrás acceso a todos los servicios de la plataforma. Todo lo que necesitas esta en un único lugar. El comercio online simplificado, como debería ser.',
  button: ''
};

//This constant stores the values of all the elements of the Jumbotron Page
export const jumboLandingValues_3 = {
  src: '/mockup_3.png',
  image_h: 340,
  image_w: 340,
  text_position: 'left',
  title: 'Todo el poder de Nébula en tu bolsillo',
  text: '',
  button: ['Google Play', 'App Store']
};