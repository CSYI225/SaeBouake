import { useEffect, useState } from "react";
import Femme from "../Images/badge.png"
import Courbejaune from "../Images/courbejaune.png"
import Plante from "../Images/plante-badge.png"
import { useTranslation } from "react-i18next";
import LangSwitcher  from "../BtnTraduction";


const BagbePopup = () => {

  const [isOpen, setIsOpen] = useState(false);
  // Ouvre le popup dès que la page charge
  useEffect(() => {
    setIsOpen(true);
  }, []);

  const { t } = useTranslation();
  
  if (!isOpen) return null;

  return (
<>
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
    <LangSwitcher />
          <div className="titre-form-bagde">{t("titre-badge1")} <br />{t("titre-badge2")} </div>
          <form className="popup-form">
            <div className="row">
              <input type="text" placeholder={t("nom")}/>
              <input type="text" placeholder={t("prenoms")}/>
            </div>

            <select>
              <option value="">{t("selection1")}</option>
              <option value="Visiteur">{t("link8")}</option>
              <option value="Media/Presse">{t("link10")}</option>
              <option value="Délégation">{t("link9")}</option>
              <option value="Exposant">{t("link7")}</option>
            </select>

            <div className="row">
              <input type="text" placeholder={t("tel")} />
              <input type="email" placeholder={t("email")} />
            </div>

          </form>
          <button type="submit" className="btn-valider">Valider</button>
        </div>
      </div>
    </div>
</>

  );
};

export default BagbePopup;