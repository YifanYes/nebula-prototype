import Head from 'next/head'
import Navbar from "./components/navbar";
import Footer from "./components/footer";
import Background from "./components/background";
import { ToastContainer } from 'react-toastify';
import { useState } from "react";
//Import of layout values and styles storage
import { layoutValues, layoutStyles } from "./layout.config";

//This function generates the links of the Layout Component => receives (children components, head title and head description) => returns the structure
export default function Layout({ children, title = '?', description = '?', header = '?', styles = layoutStyles, values = layoutValues}) {
  const [layers, setLayers] = useState(values.background);

  const handleMouseMove = (event) => {
    setLayers(layers.map((layer) => {
      layer.position = 'translateX(' + (event.clientX * layer.speed * -1) / 200 + 'px)';
      return layer;
    }));
  }

  //Returns the structure
  return (
    <div onMouseMove={handleMouseMove}>
      <Background values={values.background} styles={styles.background}/>
      <Navbar values={values.navbar} styles={styles.navbar}/>
      <ToastContainer/>
      <div className="p-0 w-full">
        <Head>
          <title>Nebula | {title}</title>
          <meta name="description" content={description} />
        </Head>
        <main className="flex-1 flex flex-col items-center min-h-screen">
          <div className="flex flex-col items-center justify-center max-w-[1400px] mb-20 mt-20 z-10">
            <h1 className="font-bold text-5xl text-center text-stone-200 drop-shadow-[4px_4px_4px_#000000]">
              {header}
            </h1>
            {children}
          </div>
        </main>
      </div>
      <Footer values={values.footer} styles={styles.footer}/>
    </div>
  );
}
