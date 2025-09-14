// import { useState, useEffect,useRef } from "react";
// import Diamant from "../Images/diamant.png"
// import Or from "../Images/or.png"
// import Argent from "../Images/argent.png"
// import Bronze from "../Images/bronze.png"
// import Plante from "../Images/plante.png"
// import Plante2 from "../Images/planteJaune.png"




// const Test=()=>{
//   const [openPropositions, setOpenPropositions] = useState("diamond");

//   const togglePropositions = (PropositionsName) => {
//     setOpenPropositions(openPropositions === PropositionsName ? null : PropositionsName);
//   };
//   return(
//   <>
// <section className="propositions">
//     <div className="propositions-titre">Nos packs sponsoring exclusifs</div>
//     <div className="propositions-container">
//         <div className="proposition-header">
//             <div className="onglet" onClick={() => togglePropositions("diamond")}>
//                 <div className="img-box"><img className="icon-diamond" src={Diamant} alt="" /></div>
//                 <div className="onglet-title">PACK DIAMOND 10.000.000</div>
//             </div>
// {openPropositions === "diamond" && (
//         <div className="propositions-body">
//             <div className="proposition-box1">
//                 <div className="propositions-title">Avant</div>
//                 <div className="propositions-content">
//                     <div className="propositions-content-box">
//                         <div className="item">
//                             <img className="plante-sponsoring" src={Plante2} alt="" />
//                             <div className="decript-sponsoring">Votre logo inséré sur le site officiel de l’évènement pendant 1an</div>
//                         </div>
//                         <div className="item">
//                             <img className="plante-sponsoring" src={Plante2} alt="" />
//                             <div className="decript-sponsoring">Votre logo en tête d'affiche et de banderole</div>
//                         </div>
//                         <div className="item">
//                             <img className="plante-sponsoring" src={Plante2} alt="" />
//                             <div className="decript-sponsoring">Votre logo dans les vidéos promotionnels de l'évenement</div>
//                         </div>
//                     </div>

//                     <div className="propositions-content-box">
//                         <div className="item">
//                             <img className="plante-sponsoring" src={Plante2} alt="" />
//                             <div className="decript-sponsoring">Votre logo sur tous les contenus diffusés sur les réseaux sociaux</div>
//                         </div>
//                         <div className="item">
//                             <img className="plante-sponsoring" src={Plante2} alt="" />
//                             <div className="decript-sponsoring">Distribution de vos gadgets pendant les activations terrains à Bouaké et villes environnantes</div>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//             <div className="proposition-box2">
//                 <div className="propositions-title">Pendant</div>
//                 <div className="propositions-content">
//                     <div className="propositions-content-box">
//                         <div className="item">
//                             <img className="plante-sponsoring" src={Plante} alt="" />
//                             <div className="decript-sponsoring">Votre logo inséré sur le site officiel de l’évènement pendant 1an</div>
//                         </div>
//                         <div className="item">
//                             <img className="plante-sponsoring" src={Plante} alt="" />
//                             <div className="decript-sponsoring">Votre logo inséré sur le site officiel de l’évènement pendant 1an</div>
//                         </div>
//                         <div className="item">
//                             <img className="plante-sponsoring" src={Plante} alt="" />
//                             <div className="decript-sponsoring">Votre logo inséré sur le site officiel de l’évènement pendant 1an</div>
//                         </div>
//                     </div>
                    
//                     <div className="propositions-content-box">
//                         <div className="item">
//                             <img className="plante-sponsoring" src={Plante} alt="" />
//                             <div className="decript-sponsoring">Votre logo inséré sur le site officiel de l’évènement pendant 1an</div>
//                         </div>
//                         <div className="item">
//                             <img className="plante-sponsoring" src={Plante} alt="" />
//                             <div className="decript-sponsoring">Votre logo inséré sur le site officiel de l’évènement pendant 1an</div>
//                         </div>
//                         <div className="item">
//                             <img className="plante-sponsoring" src={Plante} alt="" />
//                             <div className="decript-sponsoring">Votre logo inséré sur le site officiel de l’évènement pendant 1an</div>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//             <div className="proposition-box1">
//                 <div className="propositions-title">Après</div>
//                 <div className="propositions-content">
//                     <div className="propositions-content-box">
//                         <div className="item">
//                             <img className="plante-sponsoring" src={Plante2} alt="" />
//                             <div className="decript-sponsoring">Votre logo inséré sur le site officiel de l’évènement pendant 1an</div>
//                         </div>
//                         <div className="item">
//                             <img className="plante-sponsoring" src={Plante2} alt="" />
//                             <div className="decript-sponsoring">Votre logo inséré sur le site officiel de l’évènement pendant 1an</div>
//                         </div>
//                         <div className="item">
//                             <img className="plante-sponsoring" src={Plante2} alt="" />
//                             <div className="decript-sponsoring">Votre logo inséré sur le site officiel de l’évènement pendant 1an</div>
//                         </div>
//                     </div>
                    
//                     <div className="propositions-content-box">
//                         <div className="item">
//                             <img className="plante-sponsoring" src={Plante2} alt="" />
//                             <div className="decript-sponsoring">Votre logo inséré sur le site officiel de l’évènement pendant 1an</div>
//                         </div>
//                         <div className="item">
//                             <img className="plante-sponsoring" src={Plante2} alt="" />
//                             <div className="decript-sponsoring">Votre logo inséré sur le site officiel de l’évènement pendant 1an</div>
//                         </div>
//                         <div className="item">
//                             <img className="plante-sponsoring" src={Plante2} alt="" />
//                             <div className="decript-sponsoring">Votre logo inséré sur le site officiel de l’évènement pendant 1an</div>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </div>
//           )}
//             <div className="onglet" onClick={() => togglePropositions("gold")}>
//                 <div className="img-box"><img className="icon-pieces" src={Or} alt="" /></div>
//                 <div className="onglet-title">PACK GOLD 7.000.000</div>
//             </div>
// {openPropositions === "gold" && (
//         <div className="propositions-body">
//             <div className="proposition-box1">
//                 <div className="propositions-title">Avant</div>
//                 <div className="propositions-content">
//                     <div className="propositions-content-box">
//                         <div className="item">
//                             <img className="plante-sponsoring" src={Plante2} alt="" />
//                             <div className="decript-sponsoring">Votre logo inséré sur le site officiel de l’évènement pendant 1an</div>
//                         </div>
//                         <div className="item">
//                             <img className="plante-sponsoring" src={Plante2} alt="" />
//                             <div className="decript-sponsoring">Votre logo inséré sur le site officiel de l’évènement pendant 1an</div>
//                         </div>
//                         <div className="item">
//                             <img className="plante-sponsoring" src={Plante2} alt="" />
//                             <div className="decript-sponsoring">Votre logo inséré sur le site officiel de l’évènement pendant 1an</div>
//                         </div>
//                     </div>

//                     <div className="propositions-content-box">
//                         <div className="item">
//                             <img className="plante-sponsoring" src={Plante2} alt="" />
//                             <div className="decript-sponsoring">Votre logo inséré sur le site officiel de l’évènement pendant 1an</div>
//                         </div>
//                         <div className="item">
//                             <img className="plante-sponsoring" src={Plante2} alt="" />
//                             <div className="decript-sponsoring">Votre logo inséré sur le site officiel de l’évènement pendant 1an</div>
//                         </div>
//                         <div className="item">
//                             <img className="plante-sponsoring" src={Plante2} alt="" />
//                             <div className="decript-sponsoring">Votre logo inséré sur le site officiel de l’évènement pendant 1an</div>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//             <div className="proposition-box2">
//                 <div className="propositions-title">Pendant</div>
//                 <div className="propositions-content">
//                     <div className="propositions-content-box">
//                         <div className="item">
//                             <img className="plante-sponsoring" src={Plante} alt="" />
//                             <div className="decript-sponsoring">Votre logo inséré sur le site officiel de l’évènement pendant 1an</div>
//                         </div>
//                         <div className="item">
//                             <img className="plante-sponsoring" src={Plante} alt="" />
//                             <div className="decript-sponsoring">Votre logo inséré sur le site officiel de l’évènement pendant 1an</div>
//                         </div>
//                         <div className="item">
//                             <img className="plante-sponsoring" src={Plante} alt="" />
//                             <div className="decript-sponsoring">Votre logo inséré sur le site officiel de l’évènement pendant 1an</div>
//                         </div>
//                     </div>
                    
//                     <div className="propositions-content-box">
//                         <div className="item">
//                             <img className="plante-sponsoring" src={Plante} alt="" />
//                             <div className="decript-sponsoring">Votre logo inséré sur le site officiel de l’évènement pendant 1an</div>
//                         </div>
//                         <div className="item">
//                             <img className="plante-sponsoring" src={Plante} alt="" />
//                             <div className="decript-sponsoring">Votre logo inséré sur le site officiel de l’évènement pendant 1an</div>
//                         </div>
//                         <div className="item">
//                             <img className="plante-sponsoring" src={Plante} alt="" />
//                             <div className="decript-sponsoring">Votre logo inséré sur le site officiel de l’évènement pendant 1an</div>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//             <div className="proposition-box1">
//                 <div className="propositions-title">Après</div>
//                 <div className="propositions-content">
//                     <div className="propositions-content-box">
//                         <div className="item">
//                             <img className="plante-sponsoring" src={Plante2} alt="" />
//                             <div className="decript-sponsoring">Votre logo inséré sur le site officiel de l’évènement pendant 1an</div>
//                         </div>
//                         <div className="item">
//                             <img className="plante-sponsoring" src={Plante2} alt="" />
//                             <div className="decript-sponsoring">Votre logo inséré sur le site officiel de l’évènement pendant 1an</div>
//                         </div>
//                         <div className="item">
//                             <img className="plante-sponsoring" src={Plante2} alt="" />
//                             <div className="decript-sponsoring">Votre logo inséré sur le site officiel de l’évènement pendant 1an</div>
//                         </div>
//                     </div>
                    
//                     <div className="propositions-content-box">
//                         <div className="item">
//                             <img className="plante-sponsoring" src={Plante2} alt="" />
//                             <div className="decript-sponsoring">Votre logo inséré sur le site officiel de l’évènement pendant 1an</div>
//                         </div>
//                         <div className="item">
//                             <img className="plante-sponsoring" src={Plante2} alt="" />
//                             <div className="decript-sponsoring">Votre logo inséré sur le site officiel de l’évènement pendant 1an</div>
//                         </div>
//                         <div className="item">
//                             <img className="plante-sponsoring" src={Plante2} alt="" />
//                             <div className="decript-sponsoring">Votre logo inséré sur le site officiel de l’évènement pendant 1an</div>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </div>
//           )}
//             <div className="onglet" onClick={() => togglePropositions("silver")}>
//                 <div className="img-box"><img className="icon-pieces" src={Argent} alt="" /></div>
//                 <div className="onglet-title">PACK SILVER 5.000.000</div>
//             </div>
//             <div className="onglet" onClick={() => togglePropositions("bronze")}>
//                 <div className="img-box"><img className="icon-piece-bronze" src={Bronze} alt="" /></div>
//                 <div className="onglet-title">PACK BRONZE 3.000.000</div>
//             </div>
//             <div className="onglet" onClick={() => togglePropositions("gold")}>
//                 <div className="onglet-title">PACK INSTITUTIONEL / TECHNIQUE </div>
//             </div>
//         </div>
//     </div>
//     </section>
//     </>
//     )
// }
// export default Test

import { useState,useEffect } from "react";
import { Link } from "react-router-dom"
import { useNavigate } from "react-router-dom"
import { motion, AnimatePresence } from "framer-motion";
import Speaker1 from "../Images/speaker1.png"
import Speaker2 from "../Images/speaker2.png"
import Speaker3 from "../Images/speaker3.png"


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


const Test=()=>{

    const [index, setIndex] = useState(0);
  
    const nextSlide2 = () => setIndex((prev) => (prev + 1) % sponsorsMobile.length);
    const prevSlide2 = () => setIndex((prev) => (prev - 1 + sponsorsMobile.length) % sponsorsMobile.length);

  return (
    <>
      <div className="speakers-mobile">
        <div className="speakers-title">Speakers</div>
        <div className="speakers-bottom">
          <div className="speakers-arrow" onClick={prevSlide2}>&#8249;</div>
          <div className="speakers-box-mobile">
            <div className="speaker-photo">
              {sponsorsMobile[index].images.map((src, i) => (
                <motion.img key={i} src={src} alt={`slide-${i}`} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.8, delay: i * 0.1 }}/>
              ))}
            </div>
          <motion.div className="speaker-description-mobile" key={sponsorsMobile[index].id} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }} transition={{ duration: 0.8 }}>
              <div className="nompeaker">{sponsorsMobile[index].nom}</div>
              <div className="prenomspeaker">{sponsorsMobile[index].prenoms}</div>
              <div className="fonctionspeaker">{sponsorsMobile[index].fonction}</div>
          </motion.div>
          </div>
          <div className="speakers-arrow" onClick={nextSlide2}>&#8250;</div>
        </div>
      </div>

    </>
    )
}
export default Test