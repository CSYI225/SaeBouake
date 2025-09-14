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
import Plante from "../Images/plante.png"

import Plante2 from "../Images/planteJaune.png"

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

  const [openPropositions, setOpenPropositions] = useState("diamond");

  const togglePropositions = (PropositionsName) => {
    setOpenPropositions(PropositionsName);
  };

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
        <div className="proposition-header">
            <div className={`onglet ${openPropositions === "diamond" ? "onglet-active" : ""}`} onClick={() => togglePropositions("diamond")}>
                <div className="img-box"><img className="icon-diamond" src={Diamant} alt="" /></div>
                <div className="onglet-title">PACK DIAMOND 10.000.000</div>
            </div>
{openPropositions === "diamond" && (
        <div className="propositions-body">
            <div className="proposition-box1">
                <div className="propositions-title">Avant</div>
                <div className="propositions-content">
                    <div className="propositions-content-box">
                        <div className="item">
                            <img className="plante-sponsoring" src={Plante2} alt="" />
                            <div className="decript-sponsoring">Votre logo inséré sur le site officiel de l’évènement pendant 1an</div>
                        </div>
                        <div className="item">
                            <img className="plante-sponsoring" src={Plante2} alt="" />
                            <div className="decript-sponsoring">Votre logo en tête d'affiche et de banderole</div>
                        </div>
                        <div className="item">
                            <img className="plante-sponsoring" src={Plante2} alt="" />
                            <div className="decript-sponsoring">Votre logo dans les vidéos promotionnels de l'évenement</div>
                        </div>
                    </div>

                    <div className="propositions-content-box">
                        <div className="item">
                            <img className="plante-sponsoring" src={Plante2} alt="" />
                            <div className="decript-sponsoring">Votre logo sur tous les contenus diffusés sur les réseaux sociaux</div>
                        </div>
                        <div className="item">
                            <img className="plante-sponsoring" src={Plante2} alt="" />
                            <div className="decript-sponsoring">Distribution de vos gadgets pendant les activations terrains à Bouaké et villes environnantes</div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="proposition-box2">
                <div className="propositions-title">Pendant</div>
                <div className="propositions-content">
                    <div className="propositions-content-box">
                        <div className="item">
                            <img className="plante-sponsoring" src={Plante} alt="" />
                            <div className="decript-sponsoring">Votre logo inséré sur le site officiel de l’évènement pendant 1an</div>
                        </div>
                        <div className="item">
                            <img className="plante-sponsoring" src={Plante} alt="" />
                            <div className="decript-sponsoring">Votre logo inséré sur le site officiel de l’évènement pendant 1an</div>
                        </div>
                        <div className="item">
                            <img className="plante-sponsoring" src={Plante} alt="" />
                            <div className="decript-sponsoring">Votre logo inséré sur le site officiel de l’évènement pendant 1an</div>
                        </div>
                    </div>
                    
                    <div className="propositions-content-box">
                        <div className="item">
                            <img className="plante-sponsoring" src={Plante} alt="" />
                            <div className="decript-sponsoring">Votre logo inséré sur le site officiel de l’évènement pendant 1an</div>
                        </div>
                        <div className="item">
                            <img className="plante-sponsoring" src={Plante} alt="" />
                            <div className="decript-sponsoring">Votre logo inséré sur le site officiel de l’évènement pendant 1an</div>
                        </div>
                        <div className="item">
                            <img className="plante-sponsoring" src={Plante} alt="" />
                            <div className="decript-sponsoring">Votre logo inséré sur le site officiel de l’évènement pendant 1an</div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="proposition-box1">
                <div className="propositions-title">Après</div>
                <div className="propositions-content">
                    <div className="propositions-content-box">
                        <div className="item">
                            <img className="plante-sponsoring" src={Plante2} alt="" />
                            <div className="decript-sponsoring">Votre logo inséré sur le site officiel de l’évènement pendant 1an</div>
                        </div>
                        <div className="item">
                            <img className="plante-sponsoring" src={Plante2} alt="" />
                            <div className="decript-sponsoring">Votre logo inséré sur le site officiel de l’évènement pendant 1an</div>
                        </div>
                        <div className="item">
                            <img className="plante-sponsoring" src={Plante2} alt="" />
                            <div className="decript-sponsoring">Votre logo inséré sur le site officiel de l’évènement pendant 1an</div>
                        </div>
                    </div>
                    
                    <div className="propositions-content-box">
                        <div className="item">
                            <img className="plante-sponsoring" src={Plante2} alt="" />
                            <div className="decript-sponsoring">Votre logo inséré sur le site officiel de l’évènement pendant 1an</div>
                        </div>
                        <div className="item">
                            <img className="plante-sponsoring" src={Plante2} alt="" />
                            <div className="decript-sponsoring">Votre logo inséré sur le site officiel de l’évènement pendant 1an</div>
                        </div>
                        <div className="item">
                            <img className="plante-sponsoring" src={Plante2} alt="" />
                            <div className="decript-sponsoring">Votre logo inséré sur le site officiel de l’évènement pendant 1an</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
          )}
            <div className={`onglet ${openPropositions === "gold" ? "onglet-active" : ""}`} onClick={() => togglePropositions("gold")}>
                <div className="img-box"><img className="icon-pieces" src={Or} alt="" /></div>
                <div className="onglet-title">PACK GOLD 7.000.000</div>
            </div>
{openPropositions === "gold" && (
        <div className="propositions-body">
            <div className="proposition-box1">
                <div className="propositions-title">Avant</div>
                <div className="propositions-content">
                    <div className="propositions-content-box">
                        <div className="item">
                            <img className="plante-sponsoring" src={Plante2} alt="" />
                            <div className="decript-sponsoring">Votre logo inséré sur le site officiel de l’évènement pendant 1an</div>
                        </div>
                        <div className="item">
                            <img className="plante-sponsoring" src={Plante2} alt="" />
                            <div className="decript-sponsoring">Votre logo inséré sur le site officiel de l’évènement pendant 1an</div>
                        </div>
                        <div className="item">
                            <img className="plante-sponsoring" src={Plante2} alt="" />
                            <div className="decript-sponsoring">Votre logo inséré sur le site officiel de l’évènement pendant 1an</div>
                        </div>
                    </div>

                    <div className="propositions-content-box">
                        <div className="item">
                            <img className="plante-sponsoring" src={Plante2} alt="" />
                            <div className="decript-sponsoring">Votre logo inséré sur le site officiel de l’évènement pendant 1an</div>
                        </div>
                        <div className="item">
                            <img className="plante-sponsoring" src={Plante2} alt="" />
                            <div className="decript-sponsoring">Votre logo inséré sur le site officiel de l’évènement pendant 1an</div>
                        </div>
                        <div className="item">
                            <img className="plante-sponsoring" src={Plante2} alt="" />
                            <div className="decript-sponsoring">Votre logo inséré sur le site officiel de l’évènement pendant 1an</div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="proposition-box2">
                <div className="propositions-title">Pendant</div>
                <div className="propositions-content">
                    <div className="propositions-content-box">
                        <div className="item">
                            <img className="plante-sponsoring" src={Plante} alt="" />
                            <div className="decript-sponsoring">Votre logo inséré sur le site officiel de l’évènement pendant 1an</div>
                        </div>
                        <div className="item">
                            <img className="plante-sponsoring" src={Plante} alt="" />
                            <div className="decript-sponsoring">Votre logo inséré sur le site officiel de l’évènement pendant 1an</div>
                        </div>
                        <div className="item">
                            <img className="plante-sponsoring" src={Plante} alt="" />
                            <div className="decript-sponsoring">Votre logo inséré sur le site officiel de l’évènement pendant 1an</div>
                        </div>
                    </div>
                    
                    <div className="propositions-content-box">
                        <div className="item">
                            <img className="plante-sponsoring" src={Plante} alt="" />
                            <div className="decript-sponsoring">Votre logo inséré sur le site officiel de l’évènement pendant 1an</div>
                        </div>
                        <div className="item">
                            <img className="plante-sponsoring" src={Plante} alt="" />
                            <div className="decript-sponsoring">Votre logo inséré sur le site officiel de l’évènement pendant 1an</div>
                        </div>
                        <div className="item">
                            <img className="plante-sponsoring" src={Plante} alt="" />
                            <div className="decript-sponsoring">Votre logo inséré sur le site officiel de l’évènement pendant 1an</div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="proposition-box1">
                <div className="propositions-title">Après</div>
                <div className="propositions-content">
                    <div className="propositions-content-box">
                        <div className="item">
                            <img className="plante-sponsoring" src={Plante2} alt="" />
                            <div className="decript-sponsoring">Votre logo inséré sur le site officiel de l’évènement pendant 1an</div>
                        </div>
                        <div className="item">
                            <img className="plante-sponsoring" src={Plante2} alt="" />
                            <div className="decript-sponsoring">Votre logo inséré sur le site officiel de l’évènement pendant 1an</div>
                        </div>
                        <div className="item">
                            <img className="plante-sponsoring" src={Plante2} alt="" />
                            <div className="decript-sponsoring">Votre logo inséré sur le site officiel de l’évènement pendant 1an</div>
                        </div>
                    </div>
                    
                    <div className="propositions-content-box">
                        <div className="item">
                            <img className="plante-sponsoring" src={Plante2} alt="" />
                            <div className="decript-sponsoring">Votre logo inséré sur le site officiel de l’évènement pendant 1an</div>
                        </div>
                        <div className="item">
                            <img className="plante-sponsoring" src={Plante2} alt="" />
                            <div className="decript-sponsoring">Votre logo inséré sur le site officiel de l’évènement pendant 1an</div>
                        </div>
                        <div className="item">
                            <img className="plante-sponsoring" src={Plante2} alt="" />
                            <div className="decript-sponsoring">Votre logo inséré sur le site officiel de l’évènement pendant 1an</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
          )}
            <div className={`onglet ${openPropositions === "silver" ? "onglet-active" : ""}`} onClick={() => togglePropositions("silver")}>
                <div className="img-box"><img className="icon-pieces" src={Argent} alt="" /></div>
                <div className="onglet-title">PACK SILVER 5.000.000</div>
            </div>
{openPropositions === "silver" && (
        <div className="propositions-body">
            <div className="proposition-box1">
                <div className="propositions-title">Avant</div>
                <div className="propositions-content">
                    <div className="propositions-content-box">
                        <div className="item">
                            <img className="plante-sponsoring" src={Plante2} alt="" />
                            <div className="decript-sponsoring">Votre logo inséré sur le site officiel de l’évènement pendant 1an</div>
                        </div>
                        <div className="item">
                            <img className="plante-sponsoring" src={Plante2} alt="" />
                            <div className="decript-sponsoring">Votre logo inséré sur le site officiel de l’évènement pendant 1an</div>
                        </div>
                        <div className="item">
                            <img className="plante-sponsoring" src={Plante2} alt="" />
                            <div className="decript-sponsoring">Votre logo inséré sur le site officiel de l’évènement pendant 1an</div>
                        </div>
                    </div>

                    <div className="propositions-content-box">
                        <div className="item">
                            <img className="plante-sponsoring" src={Plante2} alt="" />
                            <div className="decript-sponsoring">Votre logo inséré sur le site officiel de l’évènement pendant 1an</div>
                        </div>
                        <div className="item">
                            <img className="plante-sponsoring" src={Plante2} alt="" />
                            <div className="decript-sponsoring">Votre logo inséré sur le site officiel de l’évènement pendant 1an</div>
                        </div>
                        <div className="item">
                            <img className="plante-sponsoring" src={Plante2} alt="" />
                            <div className="decript-sponsoring">Votre logo inséré sur le site officiel de l’évènement pendant 1an</div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="proposition-box2">
                <div className="propositions-title">Pendant</div>
                <div className="propositions-content">
                    <div className="propositions-content-box">
                        <div className="item">
                            <img className="plante-sponsoring" src={Plante} alt="" />
                            <div className="decript-sponsoring">Votre logo inséré sur le site officiel de l’évènement pendant 1an</div>
                        </div>
                        <div className="item">
                            <img className="plante-sponsoring" src={Plante} alt="" />
                            <div className="decript-sponsoring">Votre logo inséré sur le site officiel de l’évènement pendant 1an</div>
                        </div>
                        <div className="item">
                            <img className="plante-sponsoring" src={Plante} alt="" />
                            <div className="decript-sponsoring">Votre logo inséré sur le site officiel de l’évènement pendant 1an</div>
                        </div>
                    </div>
                    
                    <div className="propositions-content-box">
                        <div className="item">
                            <img className="plante-sponsoring" src={Plante} alt="" />
                            <div className="decript-sponsoring">Votre logo inséré sur le site officiel de l’évènement pendant 1an</div>
                        </div>
                        <div className="item">
                            <img className="plante-sponsoring" src={Plante} alt="" />
                            <div className="decript-sponsoring">Votre logo inséré sur le site officiel de l’évènement pendant 1an</div>
                        </div>
                        <div className="item">
                            <img className="plante-sponsoring" src={Plante} alt="" />
                            <div className="decript-sponsoring">Votre logo inséré sur le site officiel de l’évènement pendant 1an</div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="proposition-box1">
                <div className="propositions-title">Après</div>
                <div className="propositions-content">
                    <div className="propositions-content-box">
                        <div className="item">
                            <img className="plante-sponsoring" src={Plante2} alt="" />
                            <div className="decript-sponsoring">Votre logo inséré sur le site officiel de l’évènement pendant 1an</div>
                        </div>
                        <div className="item">
                            <img className="plante-sponsoring" src={Plante2} alt="" />
                            <div className="decript-sponsoring">Votre logo inséré sur le site officiel de l’évènement pendant 1an</div>
                        </div>
                        <div className="item">
                            <img className="plante-sponsoring" src={Plante2} alt="" />
                            <div className="decript-sponsoring">Votre logo inséré sur le site officiel de l’évènement pendant 1an</div>
                        </div>
                    </div>
                    
                    <div className="propositions-content-box">
                        <div className="item">
                            <img className="plante-sponsoring" src={Plante2} alt="" />
                            <div className="decript-sponsoring">Votre logo inséré sur le site officiel de l’évènement pendant 1an</div>
                        </div>
                        <div className="item">
                            <img className="plante-sponsoring" src={Plante2} alt="" />
                            <div className="decript-sponsoring">Votre logo inséré sur le site officiel de l’évènement pendant 1an</div>
                        </div>
                        <div className="item">
                            <img className="plante-sponsoring" src={Plante2} alt="" />
                            <div className="decript-sponsoring">Votre logo inséré sur le site officiel de l’évènement pendant 1an</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
          )}
            <div className={`onglet ${openPropositions === "bronze" ? "onglet-active" : ""}`} onClick={() => togglePropositions("bronze")}>
                <div className="img-box"><img className="icon-piece-bronze" src={Bronze} alt="" /></div>
                <div className="onglet-title">PACK BRONZE 3.000.000</div>
            </div>
{openPropositions === "bronze" && (
        <div className="propositions-body">
            <div className="proposition-box1">
                <div className="propositions-title">Avant</div>
                <div className="propositions-content">
                    <div className="propositions-content-box">
                        <div className="item">
                            <img className="plante-sponsoring" src={Plante2} alt="" />
                            <div className="decript-sponsoring">Votre logo inséré sur le site officiel de l’évènement pendant 1an</div>
                        </div>
                        <div className="item">
                            <img className="plante-sponsoring" src={Plante2} alt="" />
                            <div className="decript-sponsoring">Votre logo inséré sur le site officiel de l’évènement pendant 1an</div>
                        </div>
                        <div className="item">
                            <img className="plante-sponsoring" src={Plante2} alt="" />
                            <div className="decript-sponsoring">Votre logo inséré sur le site officiel de l’évènement pendant 1an</div>
                        </div>
                    </div>

                    <div className="propositions-content-box">
                        <div className="item">
                            <img className="plante-sponsoring" src={Plante2} alt="" />
                            <div className="decript-sponsoring">Votre logo inséré sur le site officiel de l’évènement pendant 1an</div>
                        </div>
                        <div className="item">
                            <img className="plante-sponsoring" src={Plante2} alt="" />
                            <div className="decript-sponsoring">Votre logo inséré sur le site officiel de l’évènement pendant 1an</div>
                        </div>
                        <div className="item">
                            <img className="plante-sponsoring" src={Plante2} alt="" />
                            <div className="decript-sponsoring">Votre logo inséré sur le site officiel de l’évènement pendant 1an</div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="proposition-box2">
                <div className="propositions-title">Pendant</div>
                <div className="propositions-content">
                    <div className="propositions-content-box">
                        <div className="item">
                            <img className="plante-sponsoring" src={Plante} alt="" />
                            <div className="decript-sponsoring">Votre logo inséré sur le site officiel de l’évènement pendant 1an</div>
                        </div>
                        <div className="item">
                            <img className="plante-sponsoring" src={Plante} alt="" />
                            <div className="decript-sponsoring">Votre logo inséré sur le site officiel de l’évènement pendant 1an</div>
                        </div>
                        <div className="item">
                            <img className="plante-sponsoring" src={Plante} alt="" />
                            <div className="decript-sponsoring">Votre logo inséré sur le site officiel de l’évènement pendant 1an</div>
                        </div>
                    </div>
                    
                    <div className="propositions-content-box">
                        <div className="item">
                            <img className="plante-sponsoring" src={Plante} alt="" />
                            <div className="decript-sponsoring">Votre logo inséré sur le site officiel de l’évènement pendant 1an</div>
                        </div>
                        <div className="item">
                            <img className="plante-sponsoring" src={Plante} alt="" />
                            <div className="decript-sponsoring">Votre logo inséré sur le site officiel de l’évènement pendant 1an</div>
                        </div>
                        <div className="item">
                            <img className="plante-sponsoring" src={Plante} alt="" />
                            <div className="decript-sponsoring">Votre logo inséré sur le site officiel de l’évènement pendant 1an</div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="proposition-box1">
                <div className="propositions-title">Après</div>
                <div className="propositions-content">
                    <div className="propositions-content-box">
                        <div className="item">
                            <img className="plante-sponsoring" src={Plante2} alt="" />
                            <div className="decript-sponsoring">Votre logo inséré sur le site officiel de l’évènement pendant 1an</div>
                        </div>
                        <div className="item">
                            <img className="plante-sponsoring" src={Plante2} alt="" />
                            <div className="decript-sponsoring">Votre logo inséré sur le site officiel de l’évènement pendant 1an</div>
                        </div>
                        <div className="item">
                            <img className="plante-sponsoring" src={Plante2} alt="" />
                            <div className="decript-sponsoring">Votre logo inséré sur le site officiel de l’évènement pendant 1an</div>
                        </div>
                    </div>
                    
                    <div className="propositions-content-box">
                        <div className="item">
                            <img className="plante-sponsoring" src={Plante2} alt="" />
                            <div className="decript-sponsoring">Votre logo inséré sur le site officiel de l’évènement pendant 1an</div>
                        </div>
                        <div className="item">
                            <img className="plante-sponsoring" src={Plante2} alt="" />
                            <div className="decript-sponsoring">Votre logo inséré sur le site officiel de l’évènement pendant 1an</div>
                        </div>
                        <div className="item">
                            <img className="plante-sponsoring" src={Plante2} alt="" />
                            <div className="decript-sponsoring">Votre logo inséré sur le site officiel de l’évènement pendant 1an</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
          )}
            <div className={`onglet ${openPropositions === "institutionnel" ? "onglet-active" : ""}`} onClick={() => togglePropositions("institutionnel")}>
                <div className="onglet-title">PACK INSTITUTIONEL / TECHNIQUE </div>
            </div>
{openPropositions === "institutionnel" && (
        <div className="propositions-body">
            <div className="proposition-box1">
                <div className="propositions-title">Avant</div>
                <div className="propositions-content">
                    <div className="propositions-content-box">
                        <div className="item">
                            <img className="plante-sponsoring" src={Plante2} alt="" />
                            <div className="decript-sponsoring">Votre logo inséré sur le site officiel de l’évènement pendant 1an</div>
                        </div>
                        <div className="item">
                            <img className="plante-sponsoring" src={Plante2} alt="" />
                            <div className="decript-sponsoring">Votre logo inséré sur le site officiel de l’évènement pendant 1an</div>
                        </div>
                        <div className="item">
                            <img className="plante-sponsoring" src={Plante2} alt="" />
                            <div className="decript-sponsoring">Votre logo inséré sur le site officiel de l’évènement pendant 1an</div>
                        </div>
                    </div>

                    <div className="propositions-content-box">
                        <div className="item">
                            <img className="plante-sponsoring" src={Plante2} alt="" />
                            <div className="decript-sponsoring">Votre logo inséré sur le site officiel de l’évènement pendant 1an</div>
                        </div>
                        <div className="item">
                            <img className="plante-sponsoring" src={Plante2} alt="" />
                            <div className="decript-sponsoring">Votre logo inséré sur le site officiel de l’évènement pendant 1an</div>
                        </div>
                        <div className="item">
                            <img className="plante-sponsoring" src={Plante2} alt="" />
                            <div className="decript-sponsoring">Votre logo inséré sur le site officiel de l’évènement pendant 1an</div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="proposition-box2">
                <div className="propositions-title">Pendant</div>
                <div className="propositions-content">
                    <div className="propositions-content-box">
                        <div className="item">
                            <img className="plante-sponsoring" src={Plante} alt="" />
                            <div className="decript-sponsoring">Votre logo inséré sur le site officiel de l’évènement pendant 1an</div>
                        </div>
                        <div className="item">
                            <img className="plante-sponsoring" src={Plante} alt="" />
                            <div className="decript-sponsoring">Votre logo inséré sur le site officiel de l’évènement pendant 1an</div>
                        </div>
                        <div className="item">
                            <img className="plante-sponsoring" src={Plante} alt="" />
                            <div className="decript-sponsoring">Votre logo inséré sur le site officiel de l’évènement pendant 1an</div>
                        </div>
                    </div>
                    
                    <div className="propositions-content-box">
                        <div className="item">
                            <img className="plante-sponsoring" src={Plante} alt="" />
                            <div className="decript-sponsoring">Votre logo inséré sur le site officiel de l’évènement pendant 1an</div>
                        </div>
                        <div className="item">
                            <img className="plante-sponsoring" src={Plante} alt="" />
                            <div className="decript-sponsoring">Votre logo inséré sur le site officiel de l’évènement pendant 1an</div>
                        </div>
                        <div className="item">
                            <img className="plante-sponsoring" src={Plante} alt="" />
                            <div className="decript-sponsoring">Votre logo inséré sur le site officiel de l’évènement pendant 1an</div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="proposition-box1">
                <div className="propositions-title">Après</div>
                <div className="propositions-content">
                    <div className="propositions-content-box">
                        <div className="item">
                            <img className="plante-sponsoring" src={Plante2} alt="" />
                            <div className="decript-sponsoring">Votre logo inséré sur le site officiel de l’évènement pendant 1an</div>
                        </div>
                        <div className="item">
                            <img className="plante-sponsoring" src={Plante2} alt="" />
                            <div className="decript-sponsoring">Votre logo inséré sur le site officiel de l’évènement pendant 1an</div>
                        </div>
                        <div className="item">
                            <img className="plante-sponsoring" src={Plante2} alt="" />
                            <div className="decript-sponsoring">Votre logo inséré sur le site officiel de l’évènement pendant 1an</div>
                        </div>
                    </div>
                    
                    <div className="propositions-content-box">
                        <div className="item">
                            <img className="plante-sponsoring" src={Plante2} alt="" />
                            <div className="decript-sponsoring">Votre logo inséré sur le site officiel de l’évènement pendant 1an</div>
                        </div>
                        <div className="item">
                            <img className="plante-sponsoring" src={Plante2} alt="" />
                            <div className="decript-sponsoring">Votre logo inséré sur le site officiel de l’évènement pendant 1an</div>
                        </div>
                        <div className="item">
                            <img className="plante-sponsoring" src={Plante2} alt="" />
                            <div className="decript-sponsoring">Votre logo inséré sur le site officiel de l’évènement pendant 1an</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
          )}
        </div>
    </div>
    </section>
    <section className="sponsors">
      <div className="titre">Sponsors & Partenaires</div>
      <div className="sponsors-container">
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