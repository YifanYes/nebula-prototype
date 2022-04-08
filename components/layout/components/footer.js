import Link from 'next/link'
import { useRouter } from 'next/router'

//This function generates the links of the Footer => receives (styles and render values) => returns the structure
export default function Footer({ values, styles }) {
  //This calls a router item (returns actual route)
  const router = useRouter();
  //First checks if the current section is a link or a logo, then prints it. Repeats with each section
  return (
     <div className={styles.wrapper}>
      <div className={styles.left_spacer}></div>
      <div className={styles.wrapper_inner}>
        {values.map((section, i) => {
          return (
            <Link key={i} href={section.href}>
              <a className={styles.sections + (router.pathname === section.href ? ' text-white drop-shadow-[0_0_5px_#FFFFFF]' : ' text-stone-400 drop-shadow-[0_2px_4px_#F8F8F8F] hover:text-white hover:drop-shadow-[0_0_5px_#FFFFFF]')} title={section.text}>{section.text}</a>
            </Link>
          );
        })}
      </div>
      <div className={styles.right_spacer}></div>
    </div>
  );
}
