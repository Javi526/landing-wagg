import Logo from "../../assets/footer/logo.svg";
import LogoTwitter from "../../assets/footer/logo-twitter.svg";
import LogoMedium from "../../assets/footer/logo-medium.svg";
import LogoInstagram from "../../assets/footer/logo-instagram.svg";
import Image from "next/image";
import { useRouter } from "next/router"

export default function Footer() {
    const router = useRouter()
    return (
        <div className={"footer-container"}>
          <div className={"footer-content-container"}>
              <div className={"footer-content-follow"}>
                 <div className={"footer-logo-container"}>
                     <Image src={Logo} width={76} height={26} alt={"logo-footer"} />
                 </div>
                  <p className={"footer-content-follow-p"}>Seguinos!</p>
                  <div className={"footer-social-media-logo"}>
                      <Image src={LogoTwitter} width={24} height={24} alt={"LogoTwitter"} />
                      <Image src={LogoMedium} width={24} height={24} alt={"LogoMedium"} />
                      <Image src={LogoInstagram} width={24} height={24} alt={"LogoInstagram"} />
                  </div>
                  <p className={"footer-all-rights-reserved"}>© 2020 - Todos los derechos reservados v12.0.24</p>
              </div>
              <div className={"footer-contact-container"}>
                 <div className={"footer-contact-content-container"}>
                      <div className={"footer-contact-content"}>
                          <p className={"footer-contact-content-title"}>Unite a Wagg</p>
                          <p className={"footer-contact-content-item"}>Carrera</p>
                          <p className={"footer-contact-content-item"}>FAQS</p>
                      </div>
                     <div className={"footer-contact-content"}>
                         <p className={"footer-contact-content-title"}>Contacto</p>
                         <p className={"footer-contact-content-item"}>+5412345678</p>
                         <p className={"footer-contact-content-item"}>info@wagg.com</p>
                     </div>
                 </div>
                  <p className={"footer-term-and-conditions"} onClick={() => router.push("/terms-conditions")}>Términos y condiciones  |  Política de privacidad </p>
              </div>
          </div>
        </div>
    )
}