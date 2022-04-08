//This function generates the info of the Background Component => receives (styles and render values) => returns the structure
export default function Background({ values, styles }) {
  //Returns the structure
  return (
    <>
      {values.map((layer, i) => {
        return <div key={"background-" + i} className={layer.image + ' ' + styles} style={{ transform: layer.position}}></div>
      })}
    </>
  );
}
