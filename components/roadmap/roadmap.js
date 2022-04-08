//Import of roadmap styles storage
import { RoadmapStyles } from "./roadmap.config";

//This function generates the roadmap for the Roadmap Component => receives (styles and render values) => returns the structure
export default function Roadmap({ values = [], styles = RoadmapStyles }) {
  //First checks if the current section is a link or a logo, then prints it. Repeats with each section
  return (
    <>
      <h2 className="no-underline font-semibold text-4xl text-center text-stone-200 drop-shadow-[4px_4px_4px_#000000]">
        Roadmap
      </h2>
      <div className={styles.wrapper}>
        {values.map((checkpoint) => {
          return (
            <div key={checkpoint.key} className={styles.checkpoint}>
              <div className={styles.checkpoint_line}>
                <div className={styles.checkpoint_circle}>
                  <div className={styles.checkpoint_inner + (checkpoint.state == 'complete' ? ' bg-[#1A1A1A]' : ' bg-black/30')}></div>
                </div>
              </div>
              <div className={styles.text_box}>
                <h2 className={styles.text}>{checkpoint.quarter} {checkpoint.year}</h2>
                <p className={styles.description}>{checkpoint.description}</p>
                <div className={styles.shadow}></div>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}
