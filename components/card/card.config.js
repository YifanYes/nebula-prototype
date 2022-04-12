//This constant stores the styles of all the elements of the Card Component
export const ProductCardStyles = {
  card_box: 'z-10 basis-[25%] grow-0 shrink relative backdrop-blur-[2px] bg-gradient-to-tl from-black/20 to-white/20 rounded-xl transition-all duration-[0.5s] ease-in-out',
  image_box: 'm-4 rounded-2xl flex justify-center items-center min-h-[180px]',
  info_box: 'w-full px-5 pb-4 pt-0 text-stone-400',
  card_block: 'w-full relative',
  distributor: 'max-w-[32ch] text-sm font-medium mb-2 truncate',
  price: 'absolute right-0 top-0 text-sm font-medium break-words',
  text: 'w-[calc(100%-50px)] text-sm font-medium break-words',
  button: 'absolute cursor-pointer text-stone-200 p-2 w-fit h-fit text-lg font-normal bg-black/40 rounded-lg transition-all duration-[0.25s] ease-in-out hover:text-orange-600',
  shadow: 'absolute top-3 left-3 bg-gradient-to-tl from-black/5 to-white/5 w-full h-full rounded-xl -z-10 shadow-[6px_6px_6px_0_rgba(0,0,0,0.5)] transition-all duration-[0.2s] ease-in-out',
};

//This constant stores the styles of all the elements of the Card Component
export const MemberCardStyles = {
  member_card: 'flex basis-[25%] grow-0 shrink flex-col items-center backdrop-blur-[2px] bg-gradient-to-tl from-black/20 to-white/20 rounded-xl py-5',
  member_image: 'my-2',
  member_text: 'font-medium text-xl mb-4 text-gray-200',
  member_description: 'font-normal text-sm mx-6 text-justify text-stone-400',
  shadow: 'absolute top-4 left-4 bg-gradient-to-tl from-black/5 to-white/5 w-full h-full rounded-xl -z-10 shadow-[6px_6px_6px_0_rgba(0,0,0,0.5)] transition-all duration-[0.2s] ease-in-out',
};


//This constant stores the values of all the elements of the NFTs Page
export const nftsValues = [
  {
    id: '2572',
    image: '/Nebula_White.png',
    product_name: 'O volante do accidente',
    price: '10'
  },
  {
    id: '4032',
    image: '/Nebula_White.png',
    product_name: 'O volante do accidente',
    price: '10'
  },
  {
    id: '5506',
    image: '/Nebula_White.png',
    product_name: 'O volante do accidente',
    price: '10'
  },
  {
    id: '9070',
    image: '/Nebula_White.png',
    product_name: 'O volante do accidente',
    price: '10'
  },
  {
    id: '8595',
    image: '/Nebula_White.png',
    product_name: 'O volante do accidente',
    price: '10'
  },
  {
    id: '2909',
    image: '/Nebula_White.png',
    product_name: 'O volante do accidente',
    price: '10'
  },
  {
    id: '6748',
    image: '/Nebula_White.png',
    product_name: 'O volante do accidente',
    price: '10'
  },
  {
    id: '3824',
    image: '/Nebula_White.png',
    product_name: 'O volante do accidente',
    price: '10'
  },
  {
    id: '9803',
    image: '/Nebula_White.png',
    product_name: 'O volante do accidente',
    price: '10'
  },
  {
    id: '5272',
    image: '/Nebula_White.png',
    product_name: 'O volante do accidente',
    price: '10'
  },
  {
    id: '9435',
    image: '/Nebula_White.png',
    product_name: 'O volante do accidente',
    price: '10'
  },
  {
    id: '8135',
    image: '/Nebula_White.png',
    product_name: 'O volante do accidente',
    price: '10 '
  },
];

//This constant stores the values of all the elements of the About Us Page
export const membersValues = [
  {
    image: '/yifan.jpg',
    text: 'Yifan Ye Zhang',
    description: 'Un chico sano, aborrece el tabaco y le encanta el frontend, dice que es para hombres de verdad. Disfruta de un historial de relaciones sentimentales muy sanas, sin dependencia emocional.'
  },
  {
    image: '/bento.jpg',
    text: 'Alex Bento',
    description: 'Nunca tiene frío, la termodinámica de este ser humano es una incógnita de la física. Intenta esconder su perro de las garras de Yifan pero sabe que está atrasando lo intevitable.'
  },
  {
    image: '/denis.jpg',
    text: 'Denis Gudiña',
    description: 'Esos ojos faltos de vida, esa baja autoestima, esa mala suerte, esa tolerancia al gluten, esas tendencias autodestructivas... es sin duda alguna la forma completa del ultra maricón.'
  }
];


//This constant stores the values of all the elements of the Landing Page Blockchain Block
export const blockchainValues = [
  {
    image: '/blockchain_1.png',
    text: 'Blockchain',
    description: 'Es un registro distribuido inmutable. De esta manera aseguramos que las transacciones se han producido de manera correcta.'
  },
  {
    image: '/blockchain_2.png',
    text: 'Smart contracts',
    description: 'Estos contratos ejecutan acciones de manera automática según la lógica y las condiciones expresadas en su código. De esta manera se eliminan muchos intermediarios.'
  },
  {
    image: '/blockchain_3.png',
    text: 'Seguridad criptográfica',
    description: 'La criptografía y las matemáticas hacen que la tecnología sea fiable, segura, y a prueba de ataques fraudulentos.'
  }
];


//This constant stores the values of all the elements of the Landing Page Economy Block
export const economyValues = [
  {
    image: '/economy_1.png',
    text: 'Token nativo',
    description: 'Nuestra propia divisa nos permite gestionar el valor dentro de la plataforma para los intercambios y almacenamientos.'
  },
  {
    image: '/economy_2.png',
    text: 'Tokenomics',
    description: 'Mediante las tokenomics, la DAO y los Automated Market Makers conseguirmos crear un ecosistema con funcionalidades únicas.'
  },
  {
    image: '/economy_3.png',
    text: 'Web 3.0',
    description: 'Somos una plataforma pionera en la siguiente era de internet, la web 3.0. Sin duda tendrá un gran impacto en nuestras vidas.'
  }
];