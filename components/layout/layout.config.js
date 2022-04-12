//This constant stores the styles of all the elements of the navbar and footer
export const layoutStyles = {
  background: "bg-repeat min-w-[calc(100%+100px)] min-h-full fixed",
  navbar: {
    wrapper: 'backdrop-blur-sm fixed z-40 left-1/2 translate-x-[-50%] flex items-center justify-center w-full top-0',
    left_spacer: 'drop-shadow-[0_1px_3px_#d6d3d1] border-t-2 border-[#d6d3d1]/50 h-px w-full relative ml-[40px]',
    right_spacer: 'drop-shadow-[0_1px_3px_#d6d3d1] border-t-2 border-[#d6d3d1]/50 h-px w-full relative mr-[40px]',
    wrapper_inner: 'h-0 mx-[30px] w-fit text-sm font-light flex items-center justify-center border-solid border-t-black/40 border-l-transparent border-r-transparent border-t-[40px] border-l-[25px] border-r-[25px]',
    sections: 'mx-[20px] mt-[-40px] cursor-pointer transition-all duration-[0.4s] ease-in-out'
  },

  footer: {
    wrapper: 'backdrop-blur-sm fixed z-40 left-1/2 translate-x-[-50%] flex items-center justify-center w-full bottom-0',
    left_spacer: 'drop-shadow-[0_1px_3px_#d6d3d1] border-t-2 border-[#d6d3d1]/50 h-px w-full relative ml-[40px]',
    right_spacer: 'drop-shadow-[0_1px_3px_#d6d3d1] border-t-2 border-[#d6d3d1]/50 h-px w-full relative mr-[40px]',
    wrapper_inner: 'h-0 mx-[30px] w-fit text-sm font-light flex items-center justify-center border-solid border-b-black/40 border-l-transparent border-r-transparent border-b-[35px] border-l-[25px] border-r-[25px]',
    sections: 'mx-[20px] mb-[-35px] cursor-pointer transition-all duration-[0.4s] ease-in-out'
  }
};


//This constant stores the values of all the elements of the navbar and footer
export const layoutValues = {
  background: [
    { image: "bg-[url('/bg_geometry_medium.png')] z-[2] bg-[#1A1A1A]", position: '', speed: 2 },
    { image: "bg-[url('/bg_rings.png')] z-[3]", position: '', speed: 4 },
    { image: "bg-[url('/bg_cross.png')] z-[4]", position: '', speed: 6 },
  ],

  navbar: [
    { href: '/', text: '00.Inicio' },
    { href: '/products', text: '01.Productos' },
    { href: '/nft', text: '02.NFTs' }, 
    { href: '/chat', text: '03.Chat' },
    { href: '/dao', text: '04.DAO' },
    { href: '/profile', text: '05.Wallet' },
    { href: '/wishlist', text: '06.Wishlist' }
  ],

  footer: [
    { href: '/faq', text: 'FAQ' },
    { href: '/aboutus', text: 'About_Us' },
    { href: '/contact', text: 'Contacto' },
    { href: '/cookies', text: 'Cookies' },
    { href: '/privacy', text: 'Privacidad' }
  ]
};