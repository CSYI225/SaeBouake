import { useState, useEffect,useRef } from "react";
import "../App.css"
import LogoSAE from "../Images/logoSAE.png"
import LogoSAE2 from "../Images/logoSAEFooter.png"
import Sae from "../Images/sae.png"
import Phone from "../Images/phone.png"
import Email from "../Images/email.png"
import Map from "../Images/carte.jpg"
import Fb from "../Images/facebook.png"
import Insta from "../Images/insta.png"
import In from "../Images/linkedin.png"
import Doc from "../Images/doc.jpg"
import Plante from "../Images/plante.png"
import Courbes1 from "../Images/courbes.png"
import Courbes2 from "../Images/courbes2.png"
import Carte from "../Images/carte.png"
import Camera from "../Images/camera.png"
import Ampoule from "../Images/ampoule.png"
import Fleche from "../Images/fleche.png"
import { motion, AnimatePresence } from "framer-motion";
import Maquis from "../Images/maquis.jpg"
import Balade from "../Images/balade.png"
import Cloture from "../Images/cloture.png"
import Hackathon from "../Images/hackathon.png"
import Pitch from "../Images/pitch.png"
import Speaker1 from "../Images/speaker1.png"
import Speaker2 from "../Images/speaker2.png"
import Speaker3 from "../Images/speaker3.png"
import Nestle from "../Images/nestle.png"
import Greeno from "../Images/greeno.png"
import Techna from "../Images/techna.png"
import Callivoire from "../Images/callivoire.png"
import BanqueAtlantique from "../Images/banque.png"
import Cemoi from "../Images/cemoi.png"
import { Link } from "react-router-dom"
import BagbePopup from "./BagbePopup";
import { useNavigate } from "react-router-dom"




const sponsors = [
  { id: 1, logo: Nestle, name: "Nestlé" },
  { id: 2, logo: Greeno, name: "Greeno" },
  { id: 3, logo: Cemoi, name: "Cémoi" },
  { id: 4, logo: Techna, name: "Techna" },
  { id: 5, logo: Callivoire, name: "Callivoire" },
  { id: 6, logo: BanqueAtlantique, name: "Banque Atlantique" },
  { id: 7, logo: Nestle, name: "Nestlé" },
  { id: 8, logo: Greeno, name: "Greeno" },
  { id: 9, logo: Cemoi, name: "Cémoi" },
  { id: 10, logo: Techna, name: "Techna" },
  { id: 11, logo: Callivoire, name: "Callivoire" },
  { id: 12, logo: BanqueAtlantique, name: "Banque Atlantique" },
  { id: 13, logo: Nestle, name: "Nestlé" },
  { id: 14, logo: Greeno, name: "Greeno" },
  { id: 15, logo: Cemoi, name: "Cémoi" },
  { id: 16, logo: Techna, name: "Techna" },
  { id: 17, logo: Callivoire, name: "Callivoire" },
  { id: 18, logo: BanqueAtlantique, name: "Banque Atlantique" },
];


const slides = [
  {
    id: 1,
    title: "Maquis Géant ou soirée gastronomique",
    text: "Pour la première fois, le SAE intégrera un maquis géant, véritable lieu de vie où les  participants pourront : Cette initiative vise à démocratiser l’accès à l’événement tout en mettant en valeur le  patrimoine culinaire ivoirien",
    images: [Maquis]
  },
  {
    id: 2,
    title: "Hackathon",
    text: "Un hackathon dédié à l’innovation agro-énergétique réunira des étudiants développeurs, agronomes et ingénieurs en énergie pour concevoir des solutions innovantes dans ce domaine. Les meilleures idées seront récompensées et bénéficieront d’un accompagnement pour leur mise en œuvre concrète sur le terrain.",
    images: [Hackathon]
  },
  {
    id: 3,
    title: " Concours Pitch Agricole",
    text: "Le Concours Pitch Agricole offrira aux startups et jeunes entrepreneurs l’opportunité de présenter leurs innovations devant un jury d’experts, de gagner en visibilité médiatique, et de remporter des financements ainsi qu’un accompagnement pour développer leurs projets.",
    images: [Pitch]
  },
  {
    id: 4,
    title: "Cérémonie de Clôture",
    text: "La cérémonie de clôture comprendra un discours de synthèse, la signature des partenariats établis durant le salon, et un spectacle culturel valorisant les traditions du Gbêkê.",
    images: [Cloture]
  },
  {
    id: 5,
    title: "Balade Touristique dans le Gbêkê",
    text: "Une balade touristique à travers le Gbêkê offrira aux participants l’occasion de découvrir autrement la région de Bouaké, en visitant ses sites agricoles emblématiques, ses lieux culturels marquants, tout en profitant d’une dégustation de produits locaux.",
    images: [Balade]
  }
];

const sponsorsMobile = [
  {
    id: 1,
    nom: "JEAN",
    prenoms: "MICHEL DOYIRI",
    fonction: "Ingénieur agronomme",
    images: [Speaker1]
  },
  {
    id: 2,
    nom: "JEAN",
    prenoms: "MICHEL DOYIRI",
    fonction: "Ingénieur agronomme",
    images: [Speaker2]
  },
  {
    id: 3,
    nom: "JEAN",
    prenoms: "MICHEL DOYIRI",
    fonction: "Ingénieur agronomme",
    images: [Speaker3]
  }
];


export default function Accueil() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

    const [index, setIndex] = useState(0);
  
    const nextSlide = () => setIndex((prev) => (prev + 1) % slides.length);
    const prevSlide = () => setIndex((prev) => (prev - 1 + slides.length) % slides.length);

    const [index2, setIndex2] = useState(0);

    const nextSlide2 = () => setIndex2((prev) => (prev + 1) % sponsorsMobile.length);
    const prevSlide2 = () => setIndex2((prev) => (prev - 1 + sponsorsMobile.length) % sponsorsMobile.length);
    

  const [currentIndex, setCurrentIndex] = useState(0);
  const itemsPerSlide = 6;
  const totalSlides = Math.ceil(sponsors.length / itemsPerSlide);

  const svtSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % totalSlides);
  };

  const precSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + totalSlides) % totalSlides);
  };

  const startIndex = currentIndex * itemsPerSlide;
  const visibleSponsors = sponsors.slice(startIndex, startIndex + itemsPerSlide);

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

  const [currentIndexMobile, setCurrentIndexMobile] = useState(0);
  const itemsPerSlideMobile = 3;
  const totalSlidesMobile = Math.ceil(sponsors.length / itemsPerSlideMobile);

  const svtSlideMobile = () => {
    setCurrentIndexMobile((prev) => (prev + 1) % totalSlidesMobile);
  };

  const precSlideMobile = () => {
    setCurrentIndexMobile((prev) => (prev - 1 + totalSlidesMobile) % totalSlidesMobile);
  };

  const startIndexMobile = currentIndexMobile * itemsPerSlideMobile;
  const visibleSponsorsMobile = sponsors.slice(startIndexMobile, startIndexMobile + itemsPerSlideMobile);




  return (
    <>
    <BagbePopup/>
      {/* Navbar */}
      <nav className={`navbar-container ${scrolled ? "scrolled" : ""}`}>
        <div className="navbar" ref={menuRef}>
            <img onClick={()=>navigate('/')} className="logo" src={LogoSAE} alt="SAE Logo" />

           <button className="menu-tel" onClick={() => setMenu(!menu)}> ☰ </button>
          {menu && (
        <div className="menu-deroulant-tel">
            <div className="tel-close" onClick={() => setMenu(false)}>✕</div>
            <div className="tel-links">
              <Link to= "/" className="lien-tel-actif">Accueil</Link>
              <Link to= "/Sponsoring" className="liens-tel-header">Sponsoring & Partenariat</Link>
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
            <Link to= "/" className="lien-actif">Accueil</Link>
            <Link to= "/Sponsoring" className="liens-header">Sponsoring & Partenariat</Link>
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
        <div className="baniere-accueil">
          <div className="titre-baniere-accueil">THEME</div>
          <div className="description-baniere-accueil">Innover pour une Souveraineté Durable : <br /> Agriculture, Élevage et Énergie en Synergie </div>
        </div>
      </div>
    </section>
    <section className="presentation">
      <div className="sae-presentation">
        <img className="sae-img" src={Sae} alt="" />
        <div className="sae-description">
          <div className="titre">Le SAE , qu’est ce que c’est ?</div>
          <div className="sae-description-texte">
          Le <span className="gras">Salon de l’Agriculture, de l’Élevage et de l’Énergie</span>
          (SAE) s’impose comme la
          plateforme  incontournable pour tous les acteurs engagés dans le développement des
          filières agricoles,  agro-pastorales et énergétiques. En effet, face aux enjeux mondiaux
          tels que la sécurité  alimentaire et la transition énergétique, le SAE 2026 se positionne
          comme un catalyseur  d’innovations et de synergies.  Cette année, l’événement prend
          une dimension encore plus ambitieuse en se déroulant à  Bouaké, cœur économique et agricole de la Côte d’Ivoire, et en accueillant l’Égypte comme  pays hôte, renforçant
          ainsi les échanges interafricains
          </div>
        </div>
      </div>
      <div className="document-container">
          <img className="doc-img" src={Doc} alt="" />
          <div className="doc-description">
            <div className="doc-description-top">Document <br /> téléchargeable</div>
            <div className="doc-description-bottom">
              <div className="doc-weight">PDF - 3,3Mo</div>
              <button className="download">Télécharger</button>
            </div>
          </div>
      </div>
      <div className="chiffres">
        <div className="chiffres-plante">
          <img className="plante-chiffre" src={Plante} alt="" />
        </div>
        <div className="chiffres-container">
          <div className="chiffres-container-left">
            <div className="chiffres-container-left-top">Chifrres <br /> Clés 2025</div>
            <div className="chiffres-container-left-bottom"><img className="chiffres-courbes" src={Courbes1} alt="" /></div>
          </div>
          <div className="chiffres-container-right">
            <div className="slider-container">
              <div className="slides">
                <div className="slide">
                  <div className="stat">
                    <div className="stat-chiffre">+100</div>
                    <div className="stat-texte">Exposants</div>
                  </div>
                  <div className="stat">
                    <div className="stat-chiffre">50 000</div>
                    <div className="stat-texte">Visiteurs</div>
                  </div>
                  <div className="stat">
                    <div className="stat-chiffre">+20</div>
                    <div className="stat-texte">Sponsors</div>
                  </div>
                </div>
                <div className="slide">
                  <div className="stat">
                    <div className="stat-chiffre">+100</div>
                    <div className="stat-texte">Exposants</div>
                  </div>
                  <div className="stat">
                    <div className="stat-chiffre">50 000</div>
                    <div className="stat-texte">Visiteurs</div>
                  </div>
                  <div className="stat">
                    <div className="stat-chiffre">+20</div>
                    <div className="stat-texte">Sponsors</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section className="pourquoi">
      <div className="pourquoi-container">
      <div className="titre">Pourquoi ne pas manquer le SAE 2025</div>
      <div className="pourquoi-details">
        <div className="pourquoi-range">
          <div className="pourquoi-range-box">
            <img className="carte-icon" src={Carte} alt="" />
            <div className="pourquoi-description">
              <span className="pourquoi-description-titre">Un Hub d’Opportunités Unique</span>
                Le SAE 2026 à Bouaké accueillera 50 000 visiteurs et favorisera des
                partenariats Afrique de l’Ouest–Égypte dans les secteurs agricole,
                agro-pastoral et énergétique, grâce à la position stratégique de
                la ville et à son fort potentiel économique.
            </div>
          </div>
          <div className="pourquoi-range-box">
            <img className="ampoule-icon" src={Ampoule} alt="" />
            <div className="pourquoi-description">
              <span className="pourquoi-description-titre">Des Contenus Exclusifs et Innovants</span>
              Le SAE 2026 propose panels, ateliers et un espace startups autour
              du financement vert, de l’agrotechnologie et des énergies
              renouvelables, réunissant experts et dirigeants pour inspirer, former
              et connecter les participants en vue de projets concrets.
            </div>
          </div>
        </div>
        <div className="pourquoi-range">
          <div className="pourquoi-range-box">
            <img className="camera-icon" src={Camera} alt="" />
            <div className="pourquoi-description">
              <span className="pourquoi-description-titre">Visibilité Maximale pour les Participants</span>
              Le SAE 2026 propose panels, ateliers et un espace startups autour
              du financement vert, de l’agrotechnologie et des énergies
              renouvelables, réunissant experts et dirigeants pour inspirer, former
              et connecter les participants en vue de projets concrets.
            </div>
          </div>
          <div className="pourquoi-range-box">
            <img className="fleche-icon" src={Fleche} alt="" />
            <div className="pourquoi-description">
              <span className="pourquoi-description-titre">Impact Socio-Économique Majeur</span>
              Le SAE 2026 propose panels, ateliers et un espace startups autour
              du financement vert, de l’agrotechnologie et des énergies
              renouvelables, réunissant experts et dirigeants pour inspirer, former
              et connecter les participants en vue de projets concrets.
            </div>
          </div>
        </div>
        <div className="pourquoi-range2">
          <div className="pourquoi-range-box2">
            <img className="carte-icon" src={Carte} alt="" />
            <div className="pourquoi-description">
              <span className="pourquoi-description-titre">Une opportunité unique de</span>
              Le SAE 2026 propose panels, ateliers et un espace startups autour
              du financement vert, de l’agrotechnologie et des énergies
              renouvelables, réunissant experts et dirigeants pour inspirer, former
              et connecter les participants en vue de projets concrets.
            </div>
          </div>
        </div>
      </div>
      </div>
    </section>
    <section className="slider">
      <div className="gauche">
      <div className="slider-text">
        <AnimatePresence mode="wait">
          <motion.div key={slides[index].id} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }} transition={{ duration: 0.8 }}>
            <div className="slider-title">{slides[index].title}</div>
            <div className="slider-description">{slides[index].text}</div>
          </motion.div>
        </AnimatePresence>
      </div>
      <div className="btns">
        <div className="slider-buttons">
          <button onClick={prevSlide}>&#8249;</button>
          <button onClick={nextSlide}>&#8250;</button>
        </div>
      </div>
      </div>
      <div className="slider-images">
        {slides[index].images.map((src, i) => (
          <motion.img key={i} src={src} alt={`slide-${i}`} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.8, delay: i * 0.1 }}/>
        ))}
      </div>
    </section>

      <div className="ticket-container">
        <div className="ticket">Ticket maquis géant</div>
      </div>



    <section className="actus">
      <div className="actus-container">
        <div className="actus-top">
          <div className="titre">Actualités</div>
          <Link to="./Actualites" className="actu-btn">TOUTES LES ACTUALITES</Link>
        </div>
        <div className="actus-actualites-container">
          <div className="actualites-range">
            <div className="actus-box">
              <div className="actus-img"></div>
              <div className="actus-description">
                <div className="actus-texte">
                  <span className="actus-texte-titre">Actualités</span>
                  Le SAE 2026 propose panels, ateliers et un espace startups autour
                  du financement vert, de l’agrotechnologie et des énergies
                  renouvelables, réunissant experts et dirigeants pour inspirer, former
                  et connecter les participants en vue de projets concrets.
                </div>
              </div>
            </div>
            <div className="actus-box">
              <div className="actus-img"></div>
              <div className="actus-description">
                <div className="actus-texte">
                  <span className="actus-texte-titre">Actualités</span>
                  Le SAE 2026 propose panels, ateliers et un espace startups autour
                  du financement vert, de l’agrotechnologie et des énergies
                  renouvelables, réunissant experts et dirigeants pour inspirer, former
                  et connecter les participants en vue de projets concrets.
                </div>
              </div>
            </div>
          </div>
          <div className="actualites-range">
            <div className="actus-box">
              <div className="actus-img"></div>
              <div className="actus-description">
                <div className="actus-texte">
                  <span className="actus-texte-titre">Actualités</span>
                  Le SAE 2026 propose panels, ateliers et un espace startups autour
                  du financement vert, de l’agrotechnologie et des énergies
                  renouvelables, réunissant experts et dirigeants pour inspirer, former
                  et connecter les participants en vue de projets concrets.
                </div>
              </div>
            </div>
            <div className="actus-box">
              <div className="actus-img"></div>
              <div className="actus-description">
                <div className="actus-texte">
                  <span className="actus-texte-titre">Actualités</span>
                  Le SAE 2026 propose panels, ateliers et un espace startups autour
                  du financement vert, de l’agrotechnologie et des énergies
                  renouvelables, réunissant experts et dirigeants pour inspirer, former
                  et connecter les participants en vue de projets concrets.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section className="speakers-container">
      <div className="speakers-container-left">
        <img className="speakers-courbes-left" src={Courbes2} alt="" />
      </div>
      <div className="speakers">
        <div className="speakers-titre">Speakers</div>
        <div className="speakers-range">
          <div className="speaker-box">
            <img className="speaker1" src={Speaker1} alt="" />
            <div className="speaker-box-description">
              <div className="nom1">JEAN</div>
              <div className="prenom1">MICHEL DOYIRI</div>
              <div className="fonction1">Ingénieur agronomme</div>
            </div>
          </div>
          <div className="speaker-box">
            <img className="speaker2" src={Speaker2} alt="" />
            <div className="speaker-box-description">
              <div className="nom2">JEAN</div>
              <div className="prenom2">MICHEL DOYIRI</div>
              <div className="fonction3">Ingénieur agronomme</div>
            </div>
          </div>
          <div className="speaker-box">
            <img className="speaker3" src={Speaker3} alt="" />
            <div className="speaker-box-description">
              <div className="nom3">JEAN</div>
              <div className="prenom3">MICHEL DOYIRI</div>
              <div className="fonction3">Ingénieur agronomme</div>
            </div>
          </div>
          <div className="speaker-box">
            <img className="speaker1" src={Speaker1} alt="" />
            <div className="speaker-box-description">
              <div className="nom1">JEAN</div>
              <div className="prenom1">MICHEL DOYIRI</div>
              <div className="fonction1">Ingénieur agronomme</div>
            </div>
          </div>
        </div>
        <div className="speakers-range">
          <div className="speaker-box">
            <img className="speaker1" src={Speaker1} alt="" />
            <div className="speaker-box-description">
              <div className="nom1">JEAN</div>
              <div className="prenom1">MICHEL DOYIRI</div>
              <div className="fonction1">Ingénieur agronomme</div>
            </div>
          </div>
          <div className="speaker-box">
            <img className="speaker1" src={Speaker1} alt="" />
            <div className="speaker-box-description">
              <div className="nom1">JEAN</div>
              <div className="prenom1">MICHEL DOYIRI</div>
              <div className="fonction1">Ingénieur agronomme</div>
            </div>
          </div>
          <div className="speaker-box">
            <img className="speaker1" src={Speaker1} alt="" />
            <div className="speaker-box-description">
              <div className="nom1">JEAN</div>
              <div className="prenom1">MICHEL DOYIRI</div>
              <div className="fonction1">Ingénieur agronomme</div>
            </div>
          </div>
          <div className="speaker-box">
            <img className="speaker1" src={Speaker1} alt="" />
            <div className="speaker-box-description">
              <div className="nom1">JEAN</div>
              <div className="prenom1">MICHEL DOYIRI</div>
              <div className="fonction1">Ingénieur agronomme</div>
            </div>
          </div>
        </div>
      </div>
      <div className="speakers-container-right">
        <img className="speakers-courbes-right" src={Courbes1} alt="" />
      </div>
    </section>

      <div className="speakers-mobile">
        <div className="speakers-title">Speakers</div>
        <div className="speakers-bottom">
          <div className="speakers-arrow" onClick={prevSlide2}>&#8249;</div>
          <div className="speakers-box-mobile">
            <div className="speaker-photo">
              {sponsorsMobile[index2].images.map((src, i) => (
                <motion.img key={i} src={src} alt={`slide-${i}`} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.8, delay: i * 0.1 }}/>
              ))}
            </div>
          <motion.div className="speaker-description-mobile" key={sponsorsMobile[index2].id} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }} transition={{ duration: 0.8 }}>
              <div className="nompeaker">{sponsorsMobile[index2].nom}</div>
              <div className="prenomspeaker">{sponsorsMobile[index2].prenoms}</div>
              <div className="fonctionspeaker">{sponsorsMobile[index2].fonction}</div>
          </motion.div>
          </div>
          <div className="speakers-arrow" onClick={nextSlide2}>&#8250;</div>
        </div>
      </div>

    <section className="sponsors-section">
      <div className="titre">Sponsors & Partenaires</div>
      <div className="sponsors-slider">
        <button className="arrow" onClick={precSlide}>&#8249;</button>
        <div className="sponsors-track-wrapper">
          <AnimatePresence mode="wait">
            <motion.div key={currentIndex} className="sponsors-track" initial={{ opacity: 0, x: 50 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -50 }} transition={{ duration: 0.2, ease: [0.25, 0.1, 0.25, 1] }}>
              {visibleSponsors.map((sponsor) => (
                <div className="sponsor-card" key={sponsor.id}>
                  <img src={sponsor.logo} alt={sponsor.name} />
                </div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
        <button className="arrow" onClick={svtSlide}>&#8250;</button>
      </div>
<div className="position">
    {Array.from({ length: totalSlides }).map((_, index) => (
      <div
        key={index}
        className={`cercle ${index === currentIndex ? "active" : ""}`}
        onClick={() => setCurrentIndex(index)}
      ></div>
    ))}
  </div>
  </section>
            <section className="mobile-sponsors-section">
      <div className="titre">Sponsors & Partenaires</div>
      <div className="mobile-sponsors-slider">
        <button className="mobile-arrow-left" onClick={precSlideMobile}>&#8249;</button>
        <div className="mobile-sponsors-track-wrapper">
          <AnimatePresence mode="wait">
            <motion.div key={currentIndexMobile} className="mobile-sponsors-track" initial={{ opacity: 0, x: 50 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -50 }} transition={{ duration: 0.2, ease: [0.25, 0.1, 0.25, 1] }}>
              {visibleSponsorsMobile.map((sponsor) => (
                <div className="sponsor-card" key={sponsor.id}>
                  <img src={sponsor.logo} alt={sponsor.name} />
                </div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
        <button className="mobile-arrow-right" onClick={svtSlideMobile}>&#8250;</button>
      </div>
<div className="position">
    {Array.from({ length: totalSlidesMobile }).map((_, index) => (
      <div
        key={index}
        className={`cercle ${index === currentIndexMobile ? "active" : ""}`}
        onClick={() => setCurrentIndexMobile(index)}
      ></div>
    ))}
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