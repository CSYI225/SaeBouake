import { useState, useEffect,useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom"
import LogoSAE from "../Images/logoSAE.png"
import LogoSAE2 from "../Images/logoSAEFooter.png"
import Phone from "../Images/phone.png"
import Email from "../Images/email.png"
import Map from "../Images/carte.jpg"
import Fb from "../Images/facebook.png"
import Insta from "../Images/insta.png"
import In from "../Images/linkedin.png"
import { useNavigate } from "react-router-dom"




const Programme=()=>{

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


    return (
    <>
      {/* Navbar */}
      <nav className={`navbar-container ${scrolled ? "scrolled" : ""}`}>
        <div className="navbar" ref={menuRef}>
            <img onClick={()=>navigate('/')} className="logo" src={LogoSAE} alt="SAE Logo" />
          <ul className="nav-links">
            <Link to= "/" className="liens-header">Accueil</Link>
            <Link to= "/Sponsoring" className="liens-header">Sponsoring & Partenariat</Link>
            <Link to= "/Programme" className="lien-actif">Programme</Link>
            <Link to= "/Actualites"className="liens-header">Actualités</Link>
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
        <div className="baniere-programme">
          <div className="titre-baniere-programme">PROGRAMME</div>
          <div className="description-baniere-programme">Découvrez le déroulement complet du SAE Bouaké, étape par étape</div>
        </div>
      </div>
    </section>
    <section className="programme">
      <div className="programme-range">
        <div className="programme-range-top">
          <div className="titre">JOUR 1</div>
          <div className="date">Lundi 22 Septembre 2025</div>
        </div>
        <div className="programme-range-bottom">
          <div className="activites-programme1">
            <div className="actuvites-programme-left">8h-12h</div>
            <div className="actuvites-programme-right">
              <div className="actuvites-programme-titre">Session d’ouverture</div>
              <div className="actuvites-programme-description">Discours des ministres, des sponsors et partenaires</div>
            </div>
          </div>
          <div className="activites-programme2">
            <div className="actuvites-programme-left">8h-12h</div>
            <div className="actuvites-programme-right">
              <div className="actuvites-programme-titre">Session d’ouverture</div>
              <div className="actuvites-programme-description">Discours des ministres, des sponsors et partenaires</div>
            </div>
          </div>
          
        </div>
      </div>
      <div className="programme-range">
        <div className="programme-range-top">
          <div className="titre">JOUR 2</div>
          <div className="date">Mardi 23 Septembre 2025</div>
        </div>
        <div className="programme-range-bottom">
          <div className="activites-programme1">
            <div className="actuvites-programme-left">8h-12h</div>
            <div className="actuvites-programme-right">
              <div className="actuvites-programme-titre">Session d’ouverture</div>
              <div className="actuvites-programme-description">Discours des ministres, des sponsors et partenaires</div>
            </div>
          </div>
          <div className="activites-programme2">
            <div className="actuvites-programme-left">8h-12h</div>
            <div className="actuvites-programme-right">
              <div className="actuvites-programme-titre">Session d’ouverture</div>
              <div className="actuvites-programme-description">Discours des ministres, des sponsors et partenaires</div>
            </div>
          </div>
          <div className="activites-programme1">
            <div className="actuvites-programme-left">8h-12h</div>
            <div className="actuvites-programme-right">
              <div className="actuvites-programme-titre">Session d’ouverture</div>
              <div className="actuvites-programme-description">Discours des ministres, des sponsors et partenaires</div>
            </div>
          </div>
        </div>
      </div>
      <div className="programme-range">
        <div className="programme-range-top">
          <div className="titre">JOUR 3</div>
          <div className="date">Mercredi 24 Septembre 2025</div>
        </div>
        <div className="programme-range-bottom">
          <div className="activites-programme1">
            <div className="actuvites-programme-left">8h-12h</div>
            <div className="actuvites-programme-right">
              <div className="actuvites-programme-titre">Session d’ouverture</div>
              <div className="actuvites-programme-description">Discours des ministres, des sponsors et partenaires</div>
            </div>
          </div>
          <div className="activites-programme2">
            <div className="actuvites-programme-left">8h-12h</div>
            <div className="actuvites-programme-right">
              <div className="actuvites-programme-titre">Session d’ouverture</div>
              <div className="actuvites-programme-description">Discours des ministres, des sponsors et partenaires</div>
            </div>
          </div>
          
        </div>
      </div>
    </section>


    <section className="newsletter">
      <div className="newsletter-container">
        <h3 className="newsletter-title">Newsletters</h3>
        <div className="newsletter-text">
          Abonnez-vous à notre newsletter pour être parmi les premiers à recevoir
          toutes les informations sur le SAE.
        </div>
        <div className="newsletter-input">
          <input
            type="email"
            placeholder="Veuillez entrer votre adresse email"
          />
          <button className="newsletter-btn">&#8594;</button>
        </div>
      </div>
      </section>
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
          <div className="footer-right">
            <div className="footer-right-top">
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
export default Programme