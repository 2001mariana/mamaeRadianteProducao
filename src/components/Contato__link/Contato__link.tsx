import Link from "next/link";

interface ContatoLinkProps {
  redeSocial: 'Instagram' | 'Whatsapp' | 'Facebook'
  href: string,
  exibirNomeRedeSocial: boolean
  children: JSX.Element
}

function Contato__link({redeSocial, href, exibirNomeRedeSocial, children}: ContatoLinkProps) {
    const dynamicStyle = `Contato__link ${redeSocial} Contato__exibirNomeRedeSocial--${exibirNomeRedeSocial}`

    return (
      <Link className={dynamicStyle} href={href} target="blank">
        {children}
        { exibirNomeRedeSocial ? <span>{redeSocial}</span> : null }        
      </Link>
    );
}
  
export default Contato__link;
  