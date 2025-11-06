import { useState, useEffect,useRef } from "react";
import "../Styles/Exposant.css"
import LogoSAE from "../Images/logoSAE.png"
import LogoSAE2 from "../Images/logoSAEFooter.png"
import Phone from "../Images/phone.png"
import Email from "../Images/email.png"
import Map from "../Images/carte.jpg"
import Fb from "../Images/facebook.png"
import Insta from "../Images/insta.png"
import In from "../Images/linkedin.png"
import { motion} from "framer-motion";
import { Link } from "react-router-dom"
import { useNavigate } from "react-router-dom"



export default function Exposant() {

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


  return(
    <>
    <nav className={`navbar-container ${scrolled ? "scrolled" : ""}`}>
        <div className="navbar" ref={menuRef}>
            <img onClick={()=>navigate('/')} className="logo" src={LogoSAE} alt="SAE Logo" />

           <button className="menu-tel" onClick={() => setMenu(!menu)}> ☰ </button>
          {menu && (
        <div className="menu-deroulant-tel">
            <div className="tel-close" onClick={() => setMenu(false)}>✕</div>
            <div className="tel-links">
              <Link to= "/" className="liens-tel-header">Accueil</Link>
              <Link to= "/Sponsoring" className="liens-tel-header">Sponsoring & Partenariat</Link>
              <Link to= "/Programme" className="liens-tel-header">Programme</Link>
              <Link to= "/Exposant"className="lien-tel-actif">Exposants</Link>
              <Link to= "/Actualites"className="liens-tel-header">Actualités</Link>
              <Link to= "/Info"className="liens-tel-header">Plus d'infos</Link>
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
            <Link to= "/Sponsoring" className="liens-header">Sponsoring & Partenariat</Link>
            <Link to= "/Programme" className="liens-header">Programme</Link>
            <Link to= "/Exposant" className="lien-actif">Exposants</Link>
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

    <section className="header-bg">
      <div className="overlay">
      </div>
    </section>
    <motion.section initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.4 }} variants={containerVariants} className="Exposant">
        <motion.div variants={apparition} className="Exposant-titre">Pourquoi exposer au SAE</motion.div>
        <div className="Pourquoi-exposer">
            <motion.div variants={vershaut} className="exposer-box">
                <div className="exposer-box-top">
                    <div className="exposer-box-top-cercle"><img src="" alt="" /></div>
                    <motion.div variants={left} className="exposer-box-titre">Un hub d’opportunités unique pour développer son réseau et ses affaires</motion.div>
                </div>
                <motion.div variants={vershaut} className="exposer-box-bottom">
                  Le SAE 2026 attend plus de 50 000 visiteurs et plus de 100 exposants, dont 20 % internationaux.
                  C’est une vitrine exceptionnelle pour les entreprises des secteurs agricole, agro-pastoral et énergétique, permettant de rencontrer des décideurs, investisseurs et partenaires institutionnels.
                  En exposant, tu accèdes à un réseau qualifié et à des opportunités concrètes de collaboration interafricaine (notamment avec l’Égypte, pays hôte de cette édition).
                </motion.div>
            </motion.div>
            <motion.div variants={vershaut} className="exposer-box">
                <div className="exposer-box-top">
                    <div className="exposer-box-top-cercle"><img src="" alt="" /></div>
                    <motion.div variants={left} className="exposer-box-titre">Une visibilité nationale et internationale renforcée</motion.div>
                </div>
                <motion.div variants={vershaut} className="exposer-box-bottom">
                  Le salon bénéficie d’une large couverture médiatique (TV, radios, presse, réseaux sociaux) et offre aux exposants une visibilité sur tous les supports de communication.
                  En participant, tu renforces l’image de ta marque auprès d’un public professionnel et grand public, tout en valorisant ton engagement pour un développement durable.
                </motion.div>
            </motion.div>
            <motion.div variants={vershaut} className="exposer-box">
                <div className="exposer-box-top">
                    <div className="exposer-box-top-cercle"><img src="" alt="" /></div>
                    <motion.div variants={left} className="exposer-box-titre">Un événement innovant et fédérateur pour valoriser ton savoir-faire</motion.div>
                </div>
                <motion.div variants={vershaut} className="exposer-box-bottom">
                  Le SAE 2026 propose une programmation riche : panels de haut niveau, ateliers sur les énergies renouvelables, hackathon, concours de pitch agricole, et un maquis géant pour les rencontres informelles.
                  Ces formats favorisent l’échange, la découverte et la mise en avant des innovations des exposants.
                  C’est une occasion unique de présenter tes produits, services et solutions dans un cadre attractif, convivial et porteur d’impact socio-économique.
                </motion.div>
            </motion.div>
        </div>
        <motion.button variants={zoom} className="btn-doc-sponsoring">Réservez votre stand</motion.button>
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
  )

}
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
const left = {
  hidden: { opacity: 0, x: -100 },
  visible: { opacity: 1, x: 0, transition: { duration: 1, ease: "easeOut" } },
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
const vershaut = {
  hidden: { opacity: 0, y: 150 },
  visible: { opacity: 1, y: 0, transition: { duration: 1, ease: "easeOut" } },
};

    
