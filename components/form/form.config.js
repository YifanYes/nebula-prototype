//This constant stores the styles of all the elements of the Form Component
export const FormStyles = {
  wrapper: 'grid grid-cols-12 grid-flow-row mt-10 mb-8',
  input_wrapper: 'my-2 mx-4',
  label: 'w-full font-medium text-xl ml-[15px] text-stone-200',
  input: 'w-full text-lg text-stone-200 backdrop-blur-sm bg-gray-300/5 hover:bg-gray-300/20 focus:bg-gray-300/20 rounded-lg transition-all duration-[0.2s] ease-in-out shadow-[4px_4px_4px_0_rgba(0,0,0,0.5)] outline-none mt-1 px-4 py-1',
  textarea: 'h-[150px] resize-none',
  button: 'mx-4 float-right w-[100px] h-[40px] text-md font-normal text-stone-200 bg-gradient-to-tl from-black/20 to-white/20 rounded-lg transition-all duration-[0.2s] ease-in-out shadow-[4px_4px_4px_0_rgba(0,0,0,0.5)] hover:brightness-[3] hover:hue-rotate-30'
};

//This constant stores the values of all the elements of the Contact Page
export const contactValues = [
  {
    key: "issue",
    type: 'text',
    size: 'col-span-12',
    text: 'Asunto'
  },
  {
    key: "name",
    type: 'text',
    size: 'col-span-6',
    text: 'Nombre'
  },
  {
    key: "surname",
    type: 'text',
    size: 'col-span-6',
    text: 'Apellidos'
  },
  {
    key: "company_dao",
    type: 'text',
    size: 'col-span-6',
    text: 'Compañía/DAO'
  },
  {
    key: "tlf",
    type: 'text',
    size: 'col-span-6',
    text: 'Teléfono'
  },
  {
    key: "email",
    type: 'text',
    size: 'col-span-12',
    text: 'Email'
  },
  {
    key: "message",
    type: 'textarea',
    size: 'col-span-12',
    text: 'Mensaje'
  }
];