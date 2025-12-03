import { useState, useEffect,useRef } from "react";
import "../Styles/Actualites.css"
import { motion} from "framer-motion";
import { Link } from "react-router-dom"
import LogoSAE from "../Images/logoSAE.png"
import LogoSAE2 from "../Images/logoSAEFooter.png"
import Phone from "../Images/phone.png"
import Email from "../Images/email.png"
import Map from "../Images/carte.jpg"
import Fb from "../Images/facebook.png"
import Insta from "../Images/insta.png"
import In from "../Images/linkedin.png"
import Actus1 from "../Images/ACTUSAE1.jpg"
import Actus2 from "../Images/ACTUSAE2.jpg"
import Actus3 from "../Images/ACTUSAE3.jpg"
import Actus4 from "../Images/ACTUSAE4.jpg"
import { useNavigate } from "react-router-dom"
import { useTranslation } from "react-i18next";
import LangSwitcher  from "../BtnTraduction";




const Actu=()=>{
    const [scrolled, setScrolled] = useState(false);
  
    useEffect(() => {
      const handleScroll = () => setScrolled(window.scrollY > 50);
      window.addEventListener("scroll", handleScroll);
      return () => window.removeEventListener("scroll", handleScroll);
    }, []);

  const [affichermenu, setAffichermenu] = useState(false);
  const menuRef = useRef(null);

  // Fermer le menu quand on clique à l'extérieur
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setAffichermenu(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);
    const navigate=useNavigate();

const [menu, setMenu] = useState(false);    
  const [affichermenurejoindre, setAffichermenurejoindre] = useState(false);


    const { t } = useTranslation();

    return (
      <>
      {/* Navbar */}
    <nav className={`navbar-container ${scrolled ? "scrolled" : ""}`}>
        <div className="navbar" ref={menuRef}>
            <img onClick={()=>navigate('/')} className="logo" src={LogoSAE} alt="SAE Logo" />

           <button className="menu-tel" onClick={() => setMenu(!menu)}> ☰ </button>
          {menu && (
        <div className="menu-deroulant-tel">
            <div className="tel-close" onClick={() => setMenu(false)}>✕</div>
            <div className="tel-links">
              <Link to= "/" className="liens-tel-header">{t("link1")}</Link>
              <Link to= "/Sponsoring" className="liens-tel-header">{t("link2")}</Link>
              <Link to= "/Programme" className="liens-tel-header">{t("link3")}</Link>
              <Link to= "/Exposant"className="liens-tel-header">{t("link4")}</Link>
              <Link to= "/Actualites"className="lien-tel-actif">{t("link5")}</Link>
              <Link to= "/Info"className="liens-tel-header">{t("link6")}</Link>
            </div>
            <button className="btn-rejoindre"  onClick={() => setAffichermenurejoindre(!affichermenurejoindre)}>{t("rejoindre")}</button>
              {affichermenurejoindre && (
                <div className="menu-rejoindre-tel">
                  <div className="menu-rejoindre-tel-item">{t("link7")}</div>
                  <div onClick={()=>navigate('/Visiteur')} className="menu-rejoindre-tel-item">{t("link8")}</div>
                  <div onClick={()=>navigate('/Delegation')} className="menu-rejoindre-tel-item">{t("link9")}</div>
                  <div onClick={()=>navigate('/MediaPresse')}className="menu-rejoindre-tel-item">{t("link10")}</div>
                </div>
              )}
        </div>
      )}
            
          <ul className="nav-links">
            <Link to= "/" className="liens-header">{t("link1")}</Link>
            <Link to= "/Sponsoring" className="liens-header">{t("link2")}</Link>
            <Link to= "/Programme" className="liens-header">{t("link3")}</Link>
            <Link to= "/Exposant" className="liens-header">{t("link4")}</Link>
            <Link to= "/Actualites"className="lien-actif">{t("link5")}</Link>
            <Link to= "/Info" className="liens-header">{t("link6")}</Link>
          </ul>
          <button className="btn-ticket"  onClick={() => setAffichermenu(!affichermenu)}>{t("rejoindre")}</button>
          <LangSwitcher />
          {affichermenu && (
        <div className="menu-deroulant">
          <div className="menu-item">{t("link7")}</div>
          <div onClick={()=>navigate('/Visiteur')} className="menu-item">{t("link8")}</div>
          <div onClick={()=>navigate('/Delegation')} className="menu-item">{t("link9")}</div>
          <div onClick={()=>navigate('/MediaPresse')}className="menu-item">{t("link10")}</div>
        </div>
      )}

        </div>
    </nav>

    <section className="header-bg">
      <div className="overlay">
      </div>
    </section>
    <motion.section initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.4 }} variants={containerVariants} className="actualites">
      <motion.div variants={apparition} className="titre">Actualités du SAE 2025</motion.div>
      <div className="actualites-container">
        <div className="actualites-range">
            <motion.div variants={left} className="actus-box">
              <img className="actus-img" src={Actus1} alt="" />
              <div className="actus-description">
                <div className="actus-texte">{t("actus-texte1")}</div>
              </div>
            </motion.div>
            <motion.div variants={right} className="actus-box">
              <img className="actus-img" src={Actus2} alt="" />
              <div className="actus-description">
                <div className="actus-texte">{t("actus-texte2-1")}<br />{t("actus-texte2-2")}</div>
              </div>
            </motion.div>
        </div>
        <div className="actualites-range">
            <motion.div variants={left} className="actus-box">
              <img className="actus-img" src={Actus3} alt="" />
              <div className="actus-description">
                <div className="actus-texte">{t("actus-texte3")}</div>
              </div>
            </motion.div>
            <motion.div variants={right} className="actus-box">
              <img className="actus-img" src={Actus4} alt="" />
              <div className="actus-description">
                <div className="actus-texte">{t("actus-texte4")}</div>
              </div>
            </motion.div>
        </div>
        <div className="actualites-range">
            <motion.div variants={left} className="actus-box">
              <img className="actus-img" src={Actus1} alt="" />
              <div className="actus-description">
                <div className="actus-texte">{t("actus-texte1")}</div>
              </div>
            </motion.div>
            <motion.div variants={right} className="actus-box">
              <img className="actus-img" src={Actus1} alt="" />
              <div className="actus-description">
                <div className="actus-texte">{t("actus-texte1")}</div>
              </div>
            </motion.div>
        </div>
        <div className="actualites-range">
            <motion.div variants={left} className="actus-box">
              <img className="actus-img" src={Actus1} alt="" />
              <div className="actus-description">
                <div className="actus-texte">{t("actus-texte1")}</div>
              </div>
            </motion.div>
            <motion.div variants={right} className="actus-box">
              <img className="actus-img" src={Actus1} alt="" />
              <div className="actus-description">
                <div className="actus-texte">{t("actus-texte1")}</div>
              </div>
            </motion.div>
        </div>
      </div>
    </motion.section>

  <motion.section initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.4 }} variants={containerVariants} className="newsletter">
    <motion.div variants={zoom} className="newsletter-container">
      <h3 className="newsletter-title">Newsletters</h3>
      <div className="newsletter-text">{t("newsletter-text")}</div>
      <div className="champnewsletter">
      <div className="newsletter-input">
        <input
          type="nom"
          placeholder={t("newsletter-nom")}
        />
        </div>
          <div className="newsletter-input">
          <input
            type="tel"
            placeholder={t("newsletter-tel")}
          />
        </div>
        <div className="newsletter-input">
          <input
            type="email"
            placeholder={t("newsletter-email")}
          />
        </div>
        </div>
        <button className="newsletter-btn">{t("newsletter-btn")}</button>
    </motion.div>
  </motion.section>
    <section className="footer">
        <div className="footer-container">
          <div className="footer-left">
            <div className="footer-left-top">
              <img className="footer-logo" src={LogoSAE2} alt="" />
              <div className="footer-texte">{t("footer-texte")}</div>
            </div>
            <div className="footer-left-bottom">
              <div className="footer-titres">{t("footer-titre1")}</div>
              <div className="footer-left-bottom-bottom">
                <img className="fb-icon" src={Fb} alt="fb" />
                <img className="insta-icon" src={Insta} alt="insta" />
                <img className="in-icon" src={In} alt="in" />
              </div>
            </div>
          </div>
          <div className="footer-centre">
            <div className="footer-centre-box">
              <div className="footer-titres">{t("footer-titre2")}</div>
              <nav className="footer-liens">
                  <ul>
                    <Link to="/" className="link">{t("link1")}</Link>
                    <Link to="/Sponsoring"className="link">{t("link2")}</Link>
                    <Link to="/Programme" className="link">{t("link3")}</Link>
                    <Link to="/Exposant"className="link">{t("link4")}</Link>
                    <Link to="/Actualites"className="link">{t("link5")}</Link>
                    <Link to="/Info" className="link">{t("link6")}</Link>
                  </ul>
              </nav>
            </div>
          </div>
                    <div className="footer-right">
            <div className="footer-right-center">
              <div className="footer-titres">{t("footer-titre3")}</div>
              <div className="coordonees">
                <div className="tel">
                  <img className="phone-icon" src={Phone} alt="tel" />
                  <div>+225 07 02 04 07 <br />+225 07 02 04 07</div>
                </div>
                <div className="email">
                  <img className="email-icon" src={Email} alt="email" />
                  <div>service.infosae@gmail.com</div>
                </div>
              </div>
            </div>
            <div className="footer-right-bottom">
              <img className="carte" src={Map} alt="map" />
              <div>{t("carte-texte")}</div>
            </div>
          </div>

        </div>
    </section>
    </>

  );

}
export default Actu

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.3,
    },
  },
};
const left = {
  hidden: { opacity: 0, x: -100 },
  visible: { opacity: 1, x: 0, transition: { duration: 1, ease: "easeOut" } },
};
const right = {
  hidden: { opacity: 0, x: 100 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.5, ease: "easeOut" } },
};
const apparition = {
  hidden: { opacity: 0,},
  visible: { opacity: 1, transition: { duration: 2, ease: "easeOut" } },
};
const zoom = {
  hidden: { opacity: 0, scale: 0.5 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};
