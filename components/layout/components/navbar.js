import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Link from 'next/link'
import { useRouter } from 'next/router'

const Web3 = require("web3");

//This function generates the links of the Navbar Component => receives (styles and render values) => returns the structure
export default function Navbar({ values, styles }) {
  //This calls a router item (returns actual route)
  const router = useRouter();
  /*Handlers
  enableWallet => Handles click on the icon and connects to the wallet
  */
  const enableWallet = async () => {
    if (window.ethereum) {
      await window.ethereum.request({ method: 'eth_requestAccounts' });
      window.web3 = new Web3(window.ethereum);
      toast(`Wallet connected successfully!`, 
        {
          position: "top-right",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: false,
          draggable: false,
          progress: undefined,
          theme: 'dark'
        }
      );
      values.pop();
      values.push({ href: '/profile', text: '05.User' });
      values.push({ href: '/wishlist', text: '06.Wishlist' });
      return true;
    }
    toast(`Couldn't connext to your wallet, please try again`, 
      {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: false,
        progress: undefined,
        theme: 'dark'
      }
    );
    return false;
  }

  //First checks if the current section is a link or a dropdown, then prints it. Repeats with each section
  return (
    <div className={styles.wrapper}>
      <div className={styles.left_spacer}></div>
      <div className={styles.wrapper_inner}>
        {values.map((section, i) => {
          if (section.text !== '05.Wallet') {
            return (
              <Link key={i} href={section.href}>
                <a className={styles.sections + (router.pathname === section.href ? ' text-white drop-shadow-[0_0_5px_#FFFFFF]' : ' text-stone-400 drop-shadow-[0_2px_4px_#F8F8F8F] hover:text-white hover:drop-shadow-[0_0_5px_#FFFFFF]')} title={section.text}>{section.text}</a>
              </Link>
            );
          } else {
            return (
              <a key={i} className={styles.sections + ' text-stone-400 drop-shadow-[0_2px_4px_#F8F8F8F] hover:text-white hover:drop-shadow-[0_0_5px_#FFFFFF]'} onClick={enableWallet} title={section.text}>{section.text}</a>
            );
          }
        })}
      </div>
      <div className={styles.right_spacer}></div>
      <ToastContainer/>
    </div>
  );
}
