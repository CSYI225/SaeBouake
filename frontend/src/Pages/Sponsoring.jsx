import { useState, useEffect,useRef } from "react";
import LogoSAE from "../Images/logoSAE.png"
import LogoSAE2 from "../Images/logoSAEFooter.png"
import Diamant from "../Images/diamant.png"
import Or from "../Images/or.png"
import Argent from "../Images/argent.png"
import Bronze from "../Images/bronze.png"
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
import { motion, AnimatePresence } from "framer-motion";
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
  
  return (
    <>

      {/* Navbar */}
      <nav className={`navbar-container ${scrolled ? "scrolled" : ""}`}>
        <div className="navbar" ref={menuRef}>
            <img onClick={()=>navigate('/')} className="logo" src={LogoSAE} alt="SAE Logo" />
          <ul className="nav-links">
            <Link to= "/" className="liens-header">Accueil</Link>
            <Link to= "/Sponsoring" className="lien-actif">Sponsoring & Partenariat</Link>
            <Link to= "/Programme" className="liens-header">Programme</Link>
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
        <div className="baniere-sponsoring">
          <div className="titre-baniere-sponsoring">SPONSORING & PARTENARIAT</div>
          <div className="description-baniere-sponsoring">Soutenir le SAE Bouaké, c’est gagner en visibilité, accéder aux décideurs et valoriser l’entrepreneuriat ivoirien.</div>
        </div>
      </div>
    </section>

    <section className="propositions">
      <div className="propositions-titre">Nos packs sponsoring exclusifs</div>
      <div className="propositions-container">
        <div className="propositions-range">
          <div className="propositions-range-left">
            <img className="diamant-img" src={Diamant} alt="" />
            <div className="packs">PACK DIAMANT</div>
            <div className="tarifs">15 000 000</div>
          </div>
            <nav className="propositions-range-right">
              <ul>
                <li> <span className="propositions-gras">- Logo en tête d’affiche</span> sur tous les supports (affiches, banderoles, site  web)</li>
                <li><span className="propositions-gras">- Prise de parole</span>  lors de la cérémonie d’ouverture</li>
                <li><span className="propositions-gras">- Stand premium</span>  de 20m² en position stratgique</li>
                <li><span className="propositions-gras">- Interview média exclusive</span> pour mettre en lumière votre engagement</li>
                <li><span className="propositions-gras">- 10 passes VIP</span>  pour les cocktails privés avec les personnalités présentes</li>
              </ul>
            </nav>
        </div>
        <div className="propositions-range">
          <div className="propositions-range-left">
            <img className="pieces-img" src={Or} alt="" />
            <div className="packs">PACK OR</div>
            <div className="tarifs">9 500 000</div>
          </div>
            <nav className="propositions-range-right">
              <ul>
                <li> <span className="propositions-gras">- Logo sur les bâches et supports digitaux </span></li>
                <li><span className="propositions-gras">- Animation d’un atelier thématique</span>  pour présenter vos solutions</li>
                <li><span className="propositions-gras">- Stand de 15m²</span></li>
                <li><span className="propositions-gras">- 5 passes VIP</span>  pour des rencontres privilégiées</li>
              </ul>
            </nav>
        </div>
        <div className="propositions-range">
          <div className="propositions-range-left">
            <img className="pieces-img" src={Argent} alt="" />
            <div className="packs">PACK ARGENT</div>
            <div className="tarifs">6 000 000</div>
          </div>
            <nav className="propositions-range-right">
              <ul>
                <li> <span className="propositions-gras">- Visibilité sur les réseaux sociaux</span> et dans le catalogue officiel</li>
                <li><span className="propositions-gras">- Stand de 10m²</span></li>
                <li><span className="propositions-gras">- 3 passes VIP</span>  pour accéder aux conférence</li>
              </ul>
            </nav>
        </div>
        <div className="propositions-range">
          <div className="propositions-range-left">
            <img className="pieces-img" src={Bronze} alt="" />
            <div className="packs">PACK BRONZE</div>
            <div className="tarifs">3 000 000</div>
          </div>
            <nav className="propositions-range-right">
              <ul>
                <li> <span className="propositions-gras">- Logo dans le catalogue officiel</span></li>
                <li><span className="propositions-gras">- 2 invitations</span>pour les conférences</li>
                <li><span className="propositions-gras">- Stand de 6m²</span></li>
              </ul>
            </nav>
        </div>
        <div className="packs-institutionnel">
          <div className="packs-institutionnel-top">
          <div className="propositions-range-left">
            <img className="intitutionnel-img" src={Bronze} alt="" />
          </div>
            <nav className="propositions-range-right">
              <ul>
                <li> <span className="propositions-gras">- Logo dans le catalogue officiel</span></li>
                <li><span className="propositions-gras">- 2 invitations</span>pour les conférences</li>
                <li><span className="propositions-gras">- Stand de 6m²</span></li>
              </ul>
            </nav>
          </div>
          <div className="packs-institutionnel-bottom">
            <div className="packs-texte"> PARTENARIAT INSTITUTIONNEL / TECHNIQUE</div>
            <div className="contreparties">
              <div className="contreparties-texte">• Salle de Conference</div>
              <div className="contreparties-texte">• Appui logistique ou technique</div>
              <div className="contreparties-texte">• Hébergement ou transport VIP</div>
              <div className="contreparties-texte">• Appui financier</div>
              <div className="contreparties-texte">• Diffusion média (TV / radio / presse écrite)</div>
            </div>
            <div className="contreparties">
              <div className="contreparties-texte">• Salle de Conference</div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section className="sponsors">
      <div className="titre">Sponsors & Partenaires</div>
      <div className="sponsors-container">
        <div className="sponsors-range">
          <div className="sponsor">
            <img src={Nestle} alt="" />
          </div>
          <div className="sponsor">
            <img src={Greeno} alt="" />
          </div>
          <div className="sponsor">
            <img src={Cemoi} alt="" />
          </div>
          <div className="sponsor">
            <img src={Techna} alt="" />
          </div>
          <div className="sponsor">
            <img src={Callivoire} alt="" />
          </div>
          <div className="sponsor">
            <img src={BanqueAtlantique} alt="" />
          </div>
        </div>
        <div className="sponsors-range">
          <div className="sponsor">
            <img src={Nestle} alt="" />
          </div>
          <div className="sponsor">
            <img src={Greeno} alt="" />
          </div>
          <div className="sponsor">
            <img src={Cemoi} alt="" />
          </div>
          <div className="sponsor">
            <img src={Techna} alt="" />
          </div>
          <div className="sponsor">
            <img src={Callivoire} alt="" />
          </div>
          <div className="sponsor">
            <img src={BanqueAtlantique} alt="" />
          </div>
        </div>
        <div className="sponsors-range">
          <div className="sponsor">
            <img src={Nestle} alt="" />
          </div>
          <div className="sponsor">
            <img src={Greeno} alt="" />
          </div>
          <div className="sponsor">
            <img src={Cemoi} alt="" />
          </div>
          <div className="sponsor">
            <img src={Techna} alt="" />
          </div>
          <div className="sponsor">
            <img src={Callivoire} alt="" />
          </div>
          <div className="sponsor">
            <img src={BanqueAtlantique} alt="" />
          </div>
        </div>
      </div>
      <button className="btn-sponsors" onClick={()=>navigate('/SponsorPartenaire')}>Devenir Sponsor / Partenaire</button>
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
export default Sponsoring