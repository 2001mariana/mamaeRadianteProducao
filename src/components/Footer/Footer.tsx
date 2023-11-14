import Image from "next/image";
import logo from '../../assets/img/logo-azul.svg'
import { BsFacebook, BsInstagram, BsWhatsapp } from "react-icons/bs";
import Link from "next/link";
import Contato__link from "../Contato__link";

interface FooterProps {
  deveExibirLogo: boolean
}

function Footer({deveExibirLogo}: FooterProps) {
  return (
    <footer className="Footer">
      {
        deveExibirLogo ? 
          <div className="Footer__logo">
            <Image priority={true} src={logo} alt='100%' />
          </div> 
        : null
      }
      <div className="Footer__copy">© Mamãe Radiante | Copyright © 2023 Todos os Direitos Reservados.</div>
      <div className="Footer__contato">
        <Contato__link exibirNomeRedeSocial={false} redeSocial='Whatsapp' href='https://api.whatsapp.com/send?phone=5524993230596'>
          <BsWhatsapp size={30}  /> 
        </Contato__link>
        <Contato__link exibirNomeRedeSocial={false} redeSocial='Facebook' href='https://www.facebook.com/profile.php?id=61552364163685'>
          <BsFacebook size={30}  />
        </Contato__link>
        <Contato__link exibirNomeRedeSocial={false} redeSocial='Instagram' href='https://www.instagram.com/mamae_radiante/'>
          <BsInstagram size={30} />
        </Contato__link>
        {/* <Link href='https://www.facebook.com/profile.php?id=61552364163685' target="blank">
          <BsFacebook size={30}  />
        </Link>
        <Link href='https://www.instagram.com/mamae_radiante/' target="blank">
          <BsInstagram size={30} />
        </Link>
        <Link href='https://api.whatsapp.com/send?phone=5524993230596' target="blank">
          <BsWhatsapp size={30}  /> 
        </Link> */}
      </div>
    </footer>
    
  );
}

export default Footer;
