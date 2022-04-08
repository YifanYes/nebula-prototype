//This constant stores the styles of all the elements of the Error Component
export const ErrorStyles = {
  wrapper: 'my-16 p-6 flex flex-col justify-center items-center text-center z-10 grow-0 shrink relative backdrop-blur-[2px] bg-gradient-to-tl from-black/20 to-white/20 rounded-xl',
  icon: 'text-stone-300 text-[80px]',
  title: 'text-[36px] font-medium break-words text-stone-300 max-w-[500px]',
  description: 'text-[18px] font-medium break-words text-stone-400 max-w-[500px]',
  shadow: 'absolute top-4 left-4 bg-gradient-to-tl from-black/5 to-white/5 w-full h-full rounded-xl -z-10 shadow-[6px_6px_6px_0_rgba(0,0,0,0.5)]',
};

//This constant stores the values of all the elements of the 404 Page
export const error404Values = {
  code: '404',
  title: 'Página no encontrada',
  description: 'Esto pasa porque además de feo eres un maricón de mierda'
};

//This constant stores the values of all the elements of the 404 Page
export const error403Values = {
  code: '403',
  title: 'Error de autentificación',
  description: 'Esto pasa porque además de feo eres un maricón de mierda'
};

//This constant stores the values of all the elements of the 404 Page
export const error500Values = {
  code: '500',
  title: 'Error de servidor',
  description: 'Esto pasa porque además de feo eres un maricón de mierda'
};
