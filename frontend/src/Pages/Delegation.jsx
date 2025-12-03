import Baniere from "../Images/baniere.png"
import { useTranslation } from "react-i18next";


const Delegation=()=>{

    const { t } = useTranslation();


    return (
    <>
    <div className="formulaires">
    <div className="container-formulaires">
        <div className="form-header">
            <div className="form-title">{t("delegation")}</div>
            <img className="baniere" src={Baniere} alt="" />
        </div>
        <form className="form-body">
            <div className="row">
              <input type="text" placeholder={t("nomdel")} />
            </div>
            <div className="row">
              <input type="text" placeholder={t("nominst")}/>
            </div>
            <select>
              <option value="">{t("goal")}</option>
              <option value="Partenariat">{t("partenariat")}</option>
              <option value="Intervention">Intervention</option>
            </select>

            <div className="row">
              <textarea className="form-description" type="text" placeholder={t("composition")} />
            </div>
            <div className="row2">
              <input type="text" placeholder={t("tel")}/>
              <input type="text" placeholder={t("email")} />
            </div>
        </form>
        <button type="submit" className="btn-valider">{t("valider")}</button>
    </div>
    </div>
    </>

  );

}
export default Delegation
