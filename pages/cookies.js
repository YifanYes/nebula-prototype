import Text from '../components/text/text'
import { cookiesValues } from "../components/text/text.config"

const Cookies = () => {
  return <Text values={cookiesValues}/>
}

Cookies.title = 'Cookies';
Cookies.description = 'Generated by create next app';
Cookies.header = 'Política de Cookies';


export default Cookies;