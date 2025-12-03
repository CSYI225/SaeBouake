import Baniere from "../Images/baniere.png"
import { useTranslation } from "react-i18next";


const Visiteur=()=>{
    const { t } = useTranslation();


    return (
    <>
    <div className="formulaires">
    <div className="container-formulaires">
        <div className="form-header">
            <div className="form-title">{t("form-visiteur")}</div>
            <img className="baniere" src={Baniere} alt="" />
        </div>
        <form className="form-body">
            <div className="row">
              <input type="text" placeholder={t("newsletter-nom")} />
            </div>
            <div className="row">
            <select>
              <option value="">{t("status")}</option>
              <option value="Etudiant">{t("etudiant")}</option>
              <option value="Professionel">{t("pro")}</option>
              <option value="SimpleVisiteur">{t("svisiteur")}</option>
            </select>
            <select>
              <option value="">{t("interet")}</option>
              <option value="Agriculture">{t("agriculture")}</option>
              <option value="Elevage">{t("elevage")}</option>
              <option value="Energie">{t("energie")}</option>
            </select>
            </div>
            <div className="row2">
              <input type="text" placeholder={t("tel")} />
              <input type="text" placeholder={t("email")} />
            </div>
        </form>
        <button type="submit" className="btn-valider">{t("valider")}</button>
    </div>
    </div>
    </>

  );

}
export default Visiteur
