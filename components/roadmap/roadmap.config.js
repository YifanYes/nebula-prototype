//This constant stores the styles of the Roadmap Component
export const RoadmapStyles = {
  wrapper: 'flex mt-20',
  checkpoint: 'flex basis-1/5 flex-col items-center',
  checkpoint_line: 'mb-6 drop-shadow-[0_1px_3px_#d6d3d1] border-t-2 border-[#d6d3d1]/50 h-px w-full relative',
  checkpoint_circle: 'rounded-full w-[80px] h-[80px] backdrop-blur-[2px] bg-white/20 border-2 border-[#d6d3d1]/50 absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]',
  checkpoint_inner: 'rounded-full w-[50px] h-[50px] absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]',
  text_box: 'p-6 pt-5 backdrop-blur-[2px] bg-gradient-to-tl from-black/20 to-white/20 rounded-xl mx-6 mt-14',
  text: 'font-medium text-xl mb-4 text-stone-200 text-center',
  description: 'font-normal text-sm text-justify text-stone-400 break-words',
  shadow: 'absolute top-4 left-4 bg-gradient-to-tl from-black/5 to-white/5 w-full h-full rounded-xl -z-10 shadow-[6px_6px_6px_0_rgba(0,0,0,0.5)]',
};

//This constant stores the values of all the elements of the roadmap of the About Us Page
export const roadmapValues = [
  {
    key: 'checkpoint_1',
    quarter: 'Q2',
    year: '2022',
    description: 'Publicación de la primera versión de Nébula. ICO de token de Nébula. Joker recupera las ganas de vivir. Es broma, eso nunca va a pasar.',
    state: 'complete'
  },
  {
    key: 'checkpoint_2',
    quarter: 'Q3',
    year: '2022',
    description: 'Primeras propuestas de la DAO y primeros cambios de la plataforma votados por los miembros de Nébula.',
    state: 'complete'
  },
  {
    key: 'checkpoint_3',
    quarter: 'Q4',
    year: '2022',
    description: 'Primer millar de usuarios activos diariamente en Nébula. Amazon hace una propuesta de adquisición y Yifan piensa cuántos pitis se puede comprar con eso.',
    state: 'in_progress'
  },
  {
    key: 'checkpoint_4',
    quarter: 'Q1',
    year: '2023',
    description: 'Establecimiento de la sede de Nébula al lado de la sede de VOX por Bambú. En los descansos del café se van a apalear indigentes con un palo.',
    state: 'in_progress'
  },
  {
    key: 'checkpoint_5',
    quarter: 'Q2',
    year: '2023',
    description: 'Bento se compra un deoxys para ir a la oficina. Joker y Yifan mueren de sobredosis en el rellano de un puticlub.',
    state: 'in_progress'
  }
];