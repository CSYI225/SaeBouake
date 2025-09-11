import { useEffect, useState } from "react";
import Femme from "../Images/badge.png"
import Courbejaune from "../Images/courbejaune.png"
import Plante from "../Images/plante-badge.png"


const BagbePopup = () => {
  const [isOpen, setIsOpen] = useState(false);

  // Ouvre le popup dès que la page charge
  useEffect(() => {
    setIsOpen(true);
  }, []);

  if (!isOpen) return null;

  return (
    <div className="popup-overlay">
        {/* Bouton fermeture */}
        <button className="close-btn" onClick={() => setIsOpen(false)}>
          ✕
        </button>
      <div className="popup-container">

        {/* Image à gauche */}
        <div className="popup-left">
          <img src={Femme} alt="Femme au champ" />
        </div>

        <img className="plante-bagde" src={Plante} alt="" />
        <img className="courbe-jaune" src={Courbejaune} alt="" />
        {/* Formulaire à droite */}
        <div className="popup-right">
          <div className="titre-form-bagde">OBTENIR SON BADGE <br />GRATUITEMENT</div>
          <form className="popup-form">
            <div className="row">
              <input type="text" placeholder="Nom" />
              <input type="text" placeholder="Prénoms" />
            </div>

            <select>
              <option value="">Selectionez le type de votre bagbe</option>
              <option value="Visiteur">Visiteur</option>
              <option value="Media/Presse">Media/Presse</option>
              <option value="Délégation">Délégation</option>
              <option value="Exposant">Exposant</option>
            </select>

            <div className="row">
              <input type="text" placeholder="Téléphone" />
              <input type="email" placeholder="Email" />
            </div>

          </form>
          <button type="submit" className="btn-valider">Valider</button>
        </div>
      </div>
    </div>
  );
};

export default BagbePopup;