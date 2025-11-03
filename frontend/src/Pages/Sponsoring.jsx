import { useState, useEffect,useRef } from "react";
import "../Styles/Sponsoring.css"
import LogoSAE from "../Images/logoSAE.png"
import LogoSAE2 from "../Images/logoSAEFooter.png"
import Carte from "../Images/carte.png"
import Phone from "../Images/phone.png"
import Email from "../Images/email.png"
import Map from "../Images/carte.jpg"
import Fb from "../Images/facebook.png"
import Insta from "../Images/insta.png"
import In from "../Images/linkedin.png"
import Nestle from "../Images/nestle.png"
import Greeno from "../Images/greeno.png"
import Techna from "../Images/techna.png"
import Callivoire from "../Images/callivoire.png"
import BanqueAtlantique from "../Images/banque.png"
import Cemoi from "../Images/cemoi.png"
import { motion} from "framer-motion";
import { Link } from "react-router-dom"
import { useNavigate } from "react-router-dom"

const Sponsoring=()=>{
    const [scrolled, setScrolled] = useState(false);
  
    useEffect(() => {
      const handleScroll = () => setScrolled(window.scrollY > 50);
      window.addEventListener("scroll", handleScroll);
      return () => window.removeEventListener("scroll", handleScroll);
    }, []);
    const navigate=useNavigate();
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

const [menu, setMenu] = useState(false);    
const [affichermenurejoindre, setAffichermenurejoindre] = useState(false);
  
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
              <Link to= "/" className="liens-tel-header">Accueil</Link>
              <Link to= "/Sponsoring" className="lien-tel-actif">Sponsoring & Partenariat</Link>
              <Link to= "/Programme" className="liens-tel-header">Programme</Link>
              <Link to= "/Actualites"className="liens-tel-header">Actualités</Link>
            </div>
            <button className="btn-rejoindre"  onClick={() => setAffichermenurejoindre(!affichermenurejoindre)}>Rejoingnez nous</button>
              {affichermenurejoindre && (
                <div className="menu-rejoindre-tel">
                  <div className="menu-rejoindre-tel-item">Exposant</div>
                  <div onClick={()=>navigate('/Visiteur')} className="menu-rejoindre-tel-item">Visiteur</div>
                  <div onClick={()=>navigate('/Delegation')} className="menu-rejoindre-tel-item">Délégation</div>
                  <div onClick={()=>navigate('/MediaPresse')}className="menu-rejoindre-tel-item">Média/Presse</div>
                </div>
              )}
        </div>
      )}


          <ul className="nav-links">
            <Link to= "/" className="liens-header">Accueil</Link>
            <Link to= "/Sponsoring" className="lien-actif">Sponsoring & Partenariat</Link>
            <Link to= "/Programme" className="liens-header">Programme</Link>
            <Link to= "/Exposant" className="liens-header">Exposants</Link>
            <Link to= "/Actualites"className="liens-header">Actualités</Link>
            <Link to= "/Info" className="liens-header">Plus d'infos</Link>
          </ul>
          <button className="btn-ticket"  onClick={() => setAffichermenu(!affichermenu)}>Rejoingnez nous</button>
          {affichermenu && (
        <div className="menu-deroulant">
          <div className="menu-item">Exposant</div>
          <div onClick={()=>navigate('/Visiteur')} className="menu-item">Visiteur</div>
          <div onClick={()=>navigate('/Delegation')} className="menu-item">Délégation</div>
          <div onClick={()=>navigate('/MediaPresse')}className="menu-item">Média/Presse</div>
        </div>
      )}

        </div>
    </nav>
    <section className="sponsoring-bg">
      <div className="overlay">
      </div>
    </section>
<motion.section initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.4 }} variants={containerVariants} className="propositions">
    <motion.div variants={apparition} className="propositions-titre">Pourquoi devenir sponsor et Partenaire du SAE</motion.div>
    <div className="propositions-container">
                <div className="pourquoi-sponsor">
                    <motion.img variants={apparition} className="pourquoi-icon" src={Carte} alt="" />
                    <motion.div variants={versbas} className="pourquoi-sponsor-description">
                      <span className="pourquoi-sponsor-description-titre">Un Hub d’Opportunités Unique</span>
                        <span className="pourquoi-sponsor-description-text">Le SAE 2026 à Bouaké accueillera 50 000 visiteurs et favorisera des
                        partenariats Afrique de l’Ouest–Égypte dans les secteurs agricole,
                        agro-pastoral et énergétique, grâce à la position stratégique de
                        la ville et à son fort potentiel économique.</span>
                    </motion.div>
                </div>
                <div className="pourquoi-sponsor">
                    <motion.img variants={apparition} className="pourquoi-icon" src={Carte} alt="" />
                    <motion.div variants={versbas} className="pourquoi-sponsor-description">
                      <span className="pourquoi-sponsor-description-titre">Un Hub d’Opportunités Unique</span>
                        <span className="pourquoi-sponsor-description-text">Le SAE 2026 à Bouaké accueillera 50 000 visiteurs et favorisera des
                        partenariats Afrique de l’Ouest–Égypte dans les secteurs agricole,
                        agro-pastoral et énergétique, grâce à la position stratégique de
                        la ville et à son fort potentiel économique.</span>
                    </motion.div>
                </div>
                <div className="pourquoi-sponsor">
                    <motion.img variants={apparition} className="pourquoi-icon" src={Carte} alt="" />
                    <motion.div variants={versbas} className="pourquoi-sponsor-description">
                      <span className="pourquoi-sponsor-description-titre">Un Hub d’Opportunités Unique</span>
                        <span className="pourquoi-sponsor-description-text">Le SAE 2026 à Bouaké accueillera 50 000 visiteurs et favorisera des
                        partenariats Afrique de l’Ouest–Égypte dans les secteurs agricole,
                        agro-pastoral et énergétique, grâce à la position stratégique de
                        la ville et à son fort potentiel économique.</span>
                    </motion.div>
                </div>        
    </div>
    <motion.button variants={zoom} className="btn-doc-sponsoring">Télécharger le document de sponsoring</motion.button>
</motion.section>
<motion.section initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.4 }} variants={containerVariants} className="sponsors">
      <motion.div variants={apparition} className="titre">Sponsors & Partenaires</motion.div>
      <div className="sponsors-container">
          <motion.div variants={apparition} className="sponsor">
            <img src={Nestle} alt="" />
          </motion.div>
          <motion.div variants={apparition} className="sponsor">
            <img src={Greeno} alt="" />
          </motion.div>
          <motion.div variants={apparition} className="sponsor">
            <img src={Cemoi} alt="" />
          </motion.div>
          <motion.div variants={apparition} className="sponsor">
            <img src={Techna} alt="" />
          </motion.div>
          <motion.div variants={apparition} className="sponsor">
            <img src={Callivoire} alt="" />
          </motion.div>
          <motion.div variants={apparition} className="sponsor">
            <img src={BanqueAtlantique} alt="" />
          </motion.div>
          <motion.div variants={apparition} className="sponsor">
            <img src={Nestle} alt="" />
          </motion.div>
          <motion.div variants={apparition} className="sponsor">
            <img src={Greeno} alt="" />
          </motion.div>
          <motion.div variants={apparition} className="sponsor">
            <img src={Cemoi} alt="" />
          </motion.div>
          <motion.div variants={apparition} className="sponsor">
            <img src={Techna} alt="" />
          </motion.div>
          <motion.div variants={apparition} className="sponsor">
            <img src={Callivoire} alt="" />
          </motion.div>
          <motion.div variants={apparition} className="sponsor">
            <img src={BanqueAtlantique} alt="" />
          </motion.div>
          <motion.div variants={apparition} className="sponsor">
            <img src={Nestle} alt="" />
          </motion.div>
          <motion.div variants={apparition} className="sponsor">
            <img src={Greeno} alt="" />
          </motion.div>
          <motion.div variants={apparition} className="sponsor">
            <img src={Cemoi} alt="" />
          </motion.div>
          <motion.div variants={apparition} className="sponsor">
            <img src={Techna} alt="" />
          </motion.div>
          <motion.div variants={apparition} className="sponsor">
            <img src={Callivoire} alt="" />
          </motion.div>
          <motion.div variants={apparition} className="sponsor">
            <img src={BanqueAtlantique} alt="" />
          </motion.div>
      </div>
      <motion.button variants={zoom} className="btn-sponsors" onClick={()=>navigate('/SponsorPartenaire')}>Devenir Sponsor / Partenaire</motion.button>
</motion.section>
<motion.section initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.4 }} variants={containerVariants} className="newsletter">
      <motion.div variants={zoom} className="newsletter-container">
        <h3 className="newsletter-title">Newsletters</h3>
        <div className="newsletter-text">
          Abonnez-vous à notre newsletter pour être parmi les premiers à recevoir
          toutes les informations sur le SAE.
        </div>
        <div className="champnewsletter">
        <div className="newsletter-input">
          <input
            type="nom"
            placeholder="Nom & prénoms"
          />
        </div>
          <div className="newsletter-input">
          <input
            type="tel"
            placeholder="Numéro de téléphone"
          />
        </div>
        <div className="newsletter-input">
          <input
            type="email"
            placeholder="Adresse email"
          />
        </div>
        </div>
        <button className="newsletter-btn">Envoyer</button>
      </motion.div>
</motion.section>
      <section className="footer">
        <div className="footer-container">
          <div className="footer-left">
            <div className="footer-left-top">
              <img className="footer-logo" src={LogoSAE2} alt="" />
              <div className="footer-texte">Abonnez-vous à notre newsletter pour être parmi les premiers à recevoir toutes les informations sur le SAE.</div>
            </div>
            <div className="footer-left-bottom">
              <div className="footer-titres">Suivez-nous</div>
              <div className="footer-left-bottom-bottom">
                <img className="fb-icon" src={Fb} alt="fb" />
                <img className="insta-icon" src={Insta} alt="insta" />
                <img className="in-icon" src={In} alt="in" />
              </div>
            </div>
          </div>
          <div className="footer-centre">
            <div className="footer-centre-box">
              <div className="footer-titres">Liens utiles</div>
              <nav className="footer-liens">
                  <ul>
                    <Link to="/" className="link">Accueil</Link>
                    <Link to="/Sponsoring"className="link">Sponsoring & Partenariat</Link>
                    <Link to="/Programme" className="link">Programme</Link>
                    <Link to="/Actualites"className="link">Actualités</Link>
                  </ul>
              </nav>
            </div>
          </div>
                    <div className="footer-right">
            <div className="footer-right-center">
              <div className="footer-titres">Coordonnées</div>
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
              <div>Esplanade du stade de Bouaké</div>
            </div>
          </div>

        </div>
      </section>
  </>
);


}
export default Sponsoring


const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.3,
    },
  },
};


const apparition = {
  hidden: { opacity: 0,},
  visible: { opacity: 1, transition: { duration: 2, ease: "easeOut" } },
};

const versbas = {
  hidden: { opacity: 0, y: -50 },
  visible: { opacity: 1, y: 0, transition: { duration: 1, ease: "easeOut" } },
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
