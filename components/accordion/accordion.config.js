//This constant stores the styles of all the elements of the Accordion Component
export const AccordionStyles = {
  wrapper: 'mt-16 text-left',
  accordion_box: 'cursor-pointer shadow-[6px_6px_6px_0_rgba(0,0,0,0.5)] mb-6 relative w-[800px] backdrop-blur-[2px] bg-gradient-to-tl from-black/20 to-white/20 rounded-lg transition-all duration-[0.5s] ease-in-out hover:brightness-[3] hover:hue-rotate-30',
  accordion: 'flex flex-col relative ml-3 py-2 w-[calc(100%-62px)]',
  title: 'text-xl text-stone-200 font-medium block relative mt-[-2px] break-words',
  text: 'text-sm font-medium text-stone-400 mt-2 w-full text-clip break-words',
  icon: 'absolute right-[15px] top-[52%] translate-x-0 translate-y-[-52%] text-xl text-stone-200 text-clip',
};

//This constant stores the values of all the elements of the FAQ Page
export const FAQValues = [
  {
    question: '¿Esto es una estafa?',
    answer: 'Definitivamente, solo queremos hacernos ricos a costa vuestra para hincharnos a putas y a cocaína. Seremos feos, seremos desagradables pero nos follamos a tu puta madre.',
    open: false
  },
  {
    question: '¿Que si quiero o que si tengo?',
    answer: 'Generalmente quiero y tengo, la cosa es saber cuánto quieres tú para decirle a Ibrahim que te traiga un poco.',
    open: false
  },
  {
    question: '¿Cómo saber que tengo depresión?',
    answer: '¿Te han entrado ganas alguna vez de morir? ¿Quieres dispararte en el pecho? Entonces es que tienes depresión y quieres morir.',
    open: false
  },
  {
    question: '¿Cómo saber si eres puta?',
    answer: 'Pues muy fácil, si te gritan cumbu y te ofendes pues eres puta y cumbu.',
    open: false
  },
  {
    question: '¿Cómo saber si eres criptofascista?',
    answer: 'No participamos, no participamos en burbujas mediáticas de la ultraderecha.',
    open: false
  },
  {
    question: '¿Cómo saber si eres un rojo de mierda?',
    answer: 'Si hueles a requesón, no sabes de historia o no sabes leer, la política es una caja negra para ti y vale más una promesa que un conjunto de datos, no sabes de aritmética básica, no sabes qué significa la palabra aritmética, te defines como "Working Class" sin saber hablar inglés, no has dado un palo al agua en tu puta vida, vives en el sótano de tus padres, escuchas grupos indie porque crees que eso te hace más interesante y tu actividad favorita es beber cerveza artesanal mientras twitteas basura, enhorabuena, no solo eres un trozo de mierda, sino que además eres rojo.',
    open: false
  },
];