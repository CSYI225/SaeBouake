import Baniere from "../Images/baniere.png"
import { useTranslation } from "react-i18next";


const MediaPresse=()=>{

    const { t } = useTranslation();


    return (
    <>
    <div className="formulaires">
    <div className="container-formulaires">
        <div className="form-header">
            <div className="form-title">{t("media")}</div>
            <img className="baniere" src={Baniere} alt="" />
        </div>
        <form className="form-body">
            <div className="row">
              <input type="text" placeholder={t("nom-media")} />
            </div>
            <div className="row">
              <input type="text" placeholder={t("nom-reporter")}/>
            </div>
            <div className="row">
            <select>
              <option value="">{t("audiance")}</option>
              <option value="Etudiant">Local</option>
              <option value="Professionel">National</option>
              <option value="SimpleVisiteur">International</option>
            </select>
            <select>
              <option value="">{t("couverture")}</option>
              <option value="Agriculture">{t("reportage")}</option>
              <option value="Elevage">Interview</option>
              <option value="Energie">Live Streaming</option>
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
export default MediaPresse
