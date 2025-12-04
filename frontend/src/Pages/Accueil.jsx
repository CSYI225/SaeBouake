import { useState, useEffect,useRef } from "react";
import "../App.css"
import "../Styles/Accueil.css"
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
import Carte from "../Images/carte.png"
import Camera from "../Images/camera.png"
import Ampoule from "../Images/ampoule.png"
import Fleche from "../Images/fleche.png"
import Opport from "../Images/opport.png"
import { motion, AnimatePresence } from "framer-motion";
import Maquis from "../Images/maquis.jpg"
import Balade from "../Images/balade.png"
import Cloture from "../Images/cloture.png"
import Hackathon from "../Images/visuelhackaton.jpg"
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
import Actus1 from "../Images/ACTUSAE1.jpg"
import Actus2 from "../Images/ACTUSAE2.jpg"
import Actus3 from "../Images/ACTUSAE3.jpg"
import Actus4 from "../Images/ACTUSAE4.jpg"
import { useTranslation } from "react-i18next";
import LangSwitcher  from "../BtnTraduction";





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
    title: "slides.slide1.title",
    text: "slides.slide1.text",
    images: [Maquis]
  },
  {
    id: 2,
    title: "slides.slide2.title",
    text: "slides.slide2.text",
    images: [Hackathon]
  },
  {
    id: 3,
    title: "slides.slide3.title",
    text: "slides.slide3.text",
    images: [Pitch]
  },
  {
    id: 4,
    title: "slides.slide4.title",
    text: "slides.slide4.text",
    images: [Cloture]
  },
  {
    id: 5,
    title: "slides.slide5.title",
    text: "slides.slide5.text",
    images: [Balade]
  }
];


const speakers = [
  {
    id: 1,
    nom: "speakers.speaker1.nom",
    prenoms: "speakers.speaker1.prenoms",
    fonction: "speakers.speaker1.fonction",
    images: [Speaker1]
  },
  {
    id: 2,
    nom: "speakers.speaker2.nom",
    prenoms: "speakers.speaker2.prenoms",
    fonction: "speakers.speaker2.fonction",
    images: [Speaker2]
  },
  {
    id: 3,
    nom: "speakers.speaker3.nom",
    prenoms: "speakers.speaker3.prenoms",
    fonction: "speakers.speaker3.fonction",
    images: [Speaker3]
  },
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
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 7000); // 7000 ms = 7 secondes
    // Nettoyage à chaque changement d’index ou à la destruction du composant
    return () => clearInterval(interval);
  }, [index]); // dépendance sur index pour redémarrer à chaque fois

  const [index2, setIndex2] = useState(0);
  const [currentIndex, setCurrentIndex] = useState(0);
  const itemsPerSlide = 6;
  const totalSlides = Math.ceil(sponsors.length / itemsPerSlide);
  const svtSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % totalSlides);
  };
  const precSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + totalSlides) % totalSlides);
  };
 useEffect(() => {
    const interval = setInterval(() => {
      svtSlide();
    }, 3000);
    return () => clearInterval(interval);
  }, [index2]); // redémarre le timer à chaque changement
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
 useEffect(() => {
    const interval = setInterval(() => {
      svtSlideMobile();
    }, 5000); // 5000 ms = 5 secondes
    // Nettoyage à chaque changement d’index ou à la destruction du composant
    return () => clearInterval(interval);
  }, [index]); // dépendance sur index pour redémarrer à chaque fois


const [index3, setIndex3] = useState(0); // index du 1er speaker affiché
const groupSize = 4; // nombre de speakers affichés simultanément
const totalGroups = Math.max(1, Math.ceil(speakers.length / groupSize));
const len = speakers.length;  // navigation groupes
const lastGroupStart = (totalGroups - 1) * groupSize
const nextSlide3 = () => {
  setIndex3(prev => {
    const next = prev + groupSize;
    // si on dépasse la longueur, on revient au début (0)
    return next >= len ? 0 : next;
  });
};
const prevSlide3 = () => {
  setIndex3(prev => {
    const prevIndex = prev - groupSize;
    // si on devient négatif, on va au dernier groupe
    return prevIndex < 0 ? lastGroupStart : prevIndex;
  });
};
useEffect(() => {
  const interval = setInterval(() => {
    nextSlide3();
  }, 5000);
    // Nettoyage à chaque changement d’index ou à la destruction du composant
    return () => clearInterval(interval);
  }, [index3]); // dépendance sur index pour redémarrer à chaque fois
  // groupe courant (0-based)
  const currentGroup = Math.floor(index3 / groupSize) % totalGroups;
  // groupe d'éléments à afficher (avec wrapping si nécessaire)
  const currentSpeakers = speakers.slice(index3, index3 + groupSize);
  const displayedSpeakers =
    currentSpeakers.length < groupSize
      ? [...currentSpeakers, ...speakers.slice(0, groupSize - currentSpeakers.length)]
      : currentSpeakers;

const [mobileIndex, setMobileIndex] = useState(0);
const totalMobile = speakers.length;
const nextspeakersMobile = () => {
  setMobileIndex((prev) => (prev + 1) % totalMobile);
};
const prevspeakersMobile = () => {
  setMobileIndex((prev) => (prev - 1 + totalMobile) % totalMobile);
};
useEffect(() => {
  const interval = setInterval(nextspeakersMobile, 5000);
  return () => clearInterval(interval);
}, [mobileIndex]);
const displayedMobile = speakers[mobileIndex];


const { t } = useTranslation();



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
              <Link to= "/" className="lien-tel-actif">{t("link1")}</Link>
              <Link to= "/Sponsoring" className="liens-tel-header">{t("link2")}</Link>
              <Link to= "/Programme" className="liens-tel-header">{t("link3")}</Link>
              <Link to= "/Exposant"className="liens-tel-header">{t("link4")}</Link>
              <Link to= "/Actualites"className="liens-tel-header">{t("link5")}</Link>
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
            <Link to= "/" className="lien-actif">{t("link1")}</Link>
            <Link to= "/Sponsoring" className="liens-header">{t("link2")}</Link>
            <Link to= "/Programme" className="liens-header">{t("link3")}</Link>
            <Link to= "/Exposant" className="liens-header">{t("link4")}</Link>
            <Link to= "/Actualites"className="liens-header">{t("link5")}</Link>
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
    <section className="accueil-bg">
      <div className="overlay">
      </div>
    </section>
    <motion.section initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.4 }} variants={containerVariants} className="presentation">
      <div  className="sae-presentation">
        <motion.img variants={vershaut} className="sae-img" src={Sae} alt="" />
        <div className="sae-description">
          <motion.div variants={left} className="titre">{t("titre-sae-accueil")}</motion.div>
          <motion.div variants={apparition} className="sae-description-texte">{t("description-le")} <span className="gras">{t("description-gras-sae-accueil")} </span>{t("description-sae-accueil")}</motion.div>
        </div>
      </div>
      <motion.div variants={zoom} className="document-container">
          <img className="doc-img" src={Doc} alt="" />
          <div className="doc-description">
            <div className="doc-description-top">{t("doc-description-top")}</div>
            <div className="doc-description-bottom">
              <div className="doc-weight">PDF - 3,3Mo</div>
              <button className="download">{t("download")} <div>&#11123;</div></button>
            </div>
          </div>
      </motion.div>
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
    </motion.section>
    <motion.section initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.4 }} variants={containerVariants} className="pourquoi">
      <div className="pourquoi-container">
      <motion.div variants={apparition} className="titre">{t("titre-pourquoi")} </motion.div>
      <div className="pourquoi-details">
        <div className="pourquoi-range">
          <div className="pourquoi-range-box">
            <motion.img variants={left2} className="carte-icon" src={Carte} alt="" />
            <motion.div variants={zoom2} className="pourquoi-description">
              <span className="pourquoi-description-titre">{t("pourquoi-description-titre1")} </span>{t("pourquoi-description1")}</motion.div>
          </div>
          <div className="pourquoi-range-box">
            <motion.img variants={right} className="ampoule-icon" src={Ampoule} alt="" />
            <motion.div variants={zoom2} className="pourquoi-description">
              <span className="pourquoi-description-titre">{t("pourquoi-description-titre2")}</span>{t("pourquoi-description2")}</motion.div>
          </div>
        </div>
        <div className="pourquoi-range">
          <div className="pourquoi-range-box">
            <motion.img variants={left2} className="camera-icon" src={Camera} alt="" />
            <motion.div variants={zoom2} className="pourquoi-description">
              <span className="pourquoi-description-titre">{t("pourquoi-description-titre3")}</span>{t("pourquoi-description3")}</motion.div>
          </div>
          <div className="pourquoi-range-box">
            <motion.img variants={right} className="fleche-icon" src={Fleche} alt="" />
            <motion.div variants={zoom2} className="pourquoi-description">
              <span className="pourquoi-description-titre">{t("pourquoi-description-titre4")}</span>{t("pourquoi-description4")}</motion.div>
          </div>
        </div>
        <div className="pourquoi-range2">
          <div className="pourquoi-range-box2">
            <motion.img variants={left2} className="opport-icon" src={Opport} alt="" />
            <motion.div variants={zoom2} className="pourquoi-description">
              <span className="pourquoi-description-titre">{t("pourquoi-description-titre5")}</span>{t("pourquoi-description5-1")} <br />{t("pourquoi-description5-2")} <br />{t("pourquoi-description5-3")}</motion.div>
          </div>
        </div>
      </div>
      </div>
    </motion.section>
    <section className="slider">
      <div className="gauche">
      <div className="slider-text">
        <AnimatePresence mode="wait">
          <motion.div key={slides[index].id} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }} transition={{ duration: 0.8 }}>
            <div className="slider-title">{t(slides[index].title)}</div>
            <div className="slider-description">{t(slides[index].text)}</div>
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
        <div className="ticket">{t("ticket")}</div>
    </div>

    <motion.section initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.4 }} variants={containerVariants} className="actus">
      <div className="actus-container">
        <motion.div variants={apparition} className="actus-top">
          <div className="titre">{t("titre-actu")}</div>
          <Link to="./Actualites" className="actu-btn">{t("titre-btn-actu")}</Link>
        </motion.div>
        <motion.div variants={versbas} className="actus-actualites-container">
          <div className="actualites-range">
            <div className="actus-box">
              <img className="actus-img" src={Actus1} alt="" />
              <div className="actus-description">
                <div className="actus-texte">{t("actus-texte1")}</div>
              </div>
            </div>
            <div className="actus-box">
              <img className="actus-img" src={Actus2} alt="" />
              <div className="actus-description">
                <div className="actus-texte">{t("actus-texte2-1")}<br />{t("actus-texte2-2")}</div>
              </div>
            </div>
          </div>
          <div className="actualites-range">
            <div className="actus-box">
              <img className="actus-img" src={Actus3} alt="" />
              <div className="actus-description">
                <div className="actus-texte">{t("actus-texte3")}</div>
              </div>
            </div>
            <div className="actus-box">
              <img className="actus-img" src={Actus4} alt="" />
              <div className="actus-description">
                <div className="actus-texte">{t("actus-texte4")}</div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.section>
    <section className="speakers2">
      <div className="speakers-title2">Speakers</div>
      <div className="speakers-bottom2">
        <div className="speakers-arrow2" onClick={prevSlide3}>&#8249;</div>
        <div className="speakers-box2">
          {displayedSpeakers.map((speaker) => (
            <motion.div key={speaker.id} className="speaker-item2" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
              <div className="speaker-photo2">
                <img src={speaker.images[0]} alt={speaker.nom} />
              </div>
              <div className="speaker-description2">
                <div className="nomspeaker2">{t(speaker.nom)}</div>
                <div className="prenomspeaker2">{t(speaker.prenoms)}</div>
                <div className="fonctionspeaker2">{t(speaker.fonction)}</div>
              </div>
            </motion.div>
          ))}
        </div>
        <div className="speakers-arrow2" onClick={nextSlide3}>&#8250;</div>
      </div>
      <div className="position">
        {Array.from({ length: totalGroups }).map((_, gIndex) => (
          <div
            key={gIndex}
            className={`cercle ${gIndex === currentGroup ? "active" : ""}`}
            // quand on clique sur un cercle, on positionne index au début du groupe gIndex
            onClick={() => setIndex3((gIndex * groupSize) % len)}
          />
        ))}
      </div>
    </section>

{/* --- VERSION MOBILE --- */}
<section className="speakers-mobile">
  <div className="speakers-title2">Speakers</div>

  <div className="speakers-bottom2">
    <div className="speakers-arrow2" onClick={prevspeakersMobile}>
      &#8249;
    </div>

    <div className="speakers-box2">
      <motion.div
        key={displayedMobile.id}
        className="speaker-item2"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="speaker-photo2">
          <img src={displayedMobile.images[0]} alt={displayedMobile.nom} />
        </div>

        <div className="speaker-description2">
          <div className="nomspeaker2">{t(displayedMobile.nom)}</div>
          <div className="prenomspeaker2">{t(displayedMobile.prenoms)}</div>
          <div className="fonctionspeaker2">{t(displayedMobile.fonction)}</div>
        </div>
      </motion.div>
    </div>

    <div className="speakers-arrow2" onClick={nextspeakersMobile}>
      &#8250;
    </div>
  </div>

  <div className="position">
    {speakers.map((_, i) => (
      <div
        key={i}
        className={`cercle ${i === mobileIndex ? "active" : ""}`}
        onClick={() => setMobileIndex(i)}
      />
    ))}
  </div>
</section>
    <motion.section initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.4 }} variants={containerVariants} className="sponsors-section">
      <motion.div variants={apparition} className="titre">{t("titre-sponsors")}</motion.div>
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
  </motion.section>
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
const left2 = {
  hidden: { opacity: 0, x: -100 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

const right = {
  hidden: { opacity: 0, x: 100 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.5, ease: "easeOut" } },
};
const apparition = {
  hidden: { opacity: 0,},
  visible: { opacity: 1, transition: { duration: 2, ease: "easeOut" } },
};

const vershaut = {
  hidden: { opacity: 0, y: 150 },
  visible: { opacity: 1, y: 0, transition: { duration: 1, ease: "easeOut" } },
};
const versbas = {
  hidden: { opacity: 0, y: -100 },
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
const zoom2 = {
  hidden: { opacity: 0, scale: 0.5 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 1,
      ease: "easeOut",
    },
  },
};

