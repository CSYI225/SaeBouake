import { useState } from "react";
import { motion } from "framer-motion";
import Speaker1 from "../Images/speaker1.png";
import Speaker2 from "../Images/speaker2.png";
import Speaker3 from "../Images/speaker3.png";

const speaker= [
  { id: 1, nom: "JEAN1", prenoms: "MICHEL DOYIRI", fonction: "Ingénieur agronome", images: [Speaker1] },
  { id: 2, nom: "JEAN2", prenoms: "EMILY SORO", fonction: "Ingénieur agronome", images: [Speaker2] },
  { id: 3, nom: "JEAN3", prenoms: "SARAH ADJE", fonction: "Ingénieur agronome", images: [Speaker3] },
  { id: 4, nom: "JEAN4", prenoms: "MICHEL DOYIRI", fonction: "Ingénieur agronome", images: [Speaker1] },
  { id: 5, nom: "JEAN5", prenoms: "EMILY SORO", fonction: "Ingénieur agronome", images: [Speaker2] },
  { id: 6, nom: "JEAN6", prenoms: "SARAH ADJE", fonction: "Ingénieur agronome", images: [Speaker3] },
  { id: 7, nom: "JEAN7", prenoms: "EMILY SORO", fonction: "Ingénieur agronome", images: [Speaker2] },
  { id: 8, nom: "JEAN8", prenoms: "SARAH ADJE", fonction: "Ingénieur agronome", images: [Speaker3] },
];

const Test = () => {
  const [index3, setIndex3] = useState(0); // index du 1er speaker affiché
  const groupSize = 4; // nombre de speakers affichés simultanément
  const totalGroups = Math.ceil(speaker.length / groupSize);
  const len = speaker.length;

  // navigation groupes
  const nextSlide3= () => setIndex3(prev => (prev + groupSize) % len);
  const prevSlide3 = () => setIndex3(prev => (prev - groupSize + len) % len);

  // groupe courant (0-based)
  const currentGroup = Math.floor(index3 / groupSize) % totalGroups;

  // groupe d'éléments à afficher (avec wrapping si nécessaire)
  const currentSpeakers = speaker.slice(index3, index3 + groupSize);
  const displayedSpeakers =
    currentSpeakers.length < groupSize
      ? [...currentSpeakers, ...speaker.slice(0, groupSize - currentSpeakers.length)]
      : currentSpeakers;

  return (
    <div className="speakers2">
      <div className="speakers-title2">Speakers</div>

      <div className="speakers-bottom2">
        <div className="speakers-arrow2" onClick={prevSlide3}>&#8249;</div>

        <div className="speakers-box2">
          {displayedSpeakers.map((speaker) => (
            <motion.div
              key={speaker.id}
              className="speaker-item2"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <div className="speaker-photo2">
                <img src={speaker.images[0]} alt={speaker.nom} />
              </div>
              <div className="speaker-description2">
                <div className="nomspeaker2">{speaker.nom}</div>
                <div className="prenomspeaker2">{speaker.prenoms}</div>
                <div className="fonctionspeaker2">{speaker.fonction}</div>
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
    </div>
  );
};

export default Test;
