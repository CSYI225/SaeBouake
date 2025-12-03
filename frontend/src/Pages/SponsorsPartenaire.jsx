import { useState } from "react";
import { useTranslation } from "react-i18next";
import Baniere from "../Images/baniere.png";

export default function SponsorPartenaire() {
  const { t } = useTranslation();

  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    choix: "",
    typeSponsoring: "",
    typePartenariat: "",
    objectifs: "",
    contribution: "",
    pack: "",
    nomEntreprise: "",
    presentation: "",
    nomRepresentant: "",
    fonctionRepresentant: "",
    statut: "",
    creation: "",
    RCCM: "",
    numContribuable: "",
    pays: "",
    adresse: "",
    ville: "",
    telephone: "",
    email: "",
    web: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const nextStep = () => step < 3 && setStep(step + 1);
  const prevStep = () => step > 1 && setStep(step - 1);

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Form submitted!");
  };

  return (
  <>
    <div className="formulaires">
      <div className="container-formulaires">
        <div className="form-header">
          <div className="form-title">{t("form.title")}</div>
          <img className="baniere" src={Baniere} alt="" />
        </div>

        <form className="form-body" onSubmit={handleSubmit}>

          {/* ========== ÉTAPE 1 ========== */}
          {step === 1 && (
            <div className="form-step">
              <h2 className="sous-titre-form">{t("form.step1")}</h2>

              <div className="row">
                <select name="choix" value={formData.choix} onChange={handleChange} required>
                  <option value="">{t("form.choix.label")}</option>
                  <option value="sponsor">{t("form.choix.sponsor")}</option>
                  <option value="partenaire">{t("form.choix.partenaire")}</option>
                </select>
              </div>

              {formData.choix === "sponsor" && (
                <div className="row-colomn">
                  <select name="typeSponsoring" value={formData.typeSponsoring} onChange={handleChange}>
                    <option value="">{t("form.typeSponsoring.label")}</option>
                    <option value="SFinancier">{t("form.typeSponsoring.financier")}</option>
                    <option value="STechnique">{t("form.typeSponsoring.technique")}</option>
                    <option value="SMedia">{t("form.typeSponsoring.communication")}</option>
                    <option value="SPrestataire">{t("form.typeSponsoring.prestataire")}</option>
                    <option value="SAutres">{t("form.typeSponsoring.autres")}</option>
                  </select>

                  <textarea
                    name="objectifs"
                    className="form-description"
                    placeholder={t("form.objectifsSponsor")}
                    value={formData.objectifs}
                    onChange={handleChange}
                  />

                  <textarea
                    name="contribution"
                    className="form-description"
                    placeholder={t("form.contribution")}
                    value={formData.contribution}
                    onChange={handleChange}
                  />

                  <select name="pack" value={formData.pack} onChange={handleChange}>
                    <option value="">{t("form.pack.label")}</option>
                    <option value="Diamant">{t("form.pack.diamant")}</option>
                    <option value="Or">{t("form.pack.or")}</option>
                    <option value="Argent">{t("form.pack.argent")}</option>
                    <option value="Bronze">{t("form.pack.bronze")}</option>
                    <option value="Technique">{t("form.pack.technique")}</option>
                  </select>
                </div>
              )}

              {formData.choix === "partenaire" && (
                <div className="row-colomn">
                  <select name="typePartenariat" value={formData.typePartenariat} onChange={handleChange}>
                    <option value="">{t("form.typePartenariat.label")}</option>
                    <option value="PFinancier">{t("form.typePartenariat.financier")}</option>
                    <option value="PTechnique">{t("form.typePartenariat.technique")}</option>
                    <option value="PMedia">{t("form.typePartenariat.communication")}</option>
                    <option value="PPrestataire">{t("form.typePartenariat.prestataire")}</option>
                    <option value="PAutres">{t("form.typePartenariat.autres")}</option>
                  </select>

                  <textarea
                    name="objectifs"
                    className="form-description"
                    placeholder={t("form.objectifsPartenaire")}
                    value={formData.objectifs}
                    onChange={handleChange}
                  />

                  <textarea
                    name="contribution"
                    className="form-description"
                    placeholder={t("form.contribution")}
                    value={formData.contribution}
                    onChange={handleChange}
                  />

                  <select name="pack" value={formData.pack} onChange={handleChange}>
                    <option value="">{t("form.pack.label")}</option>
                    <option value="Diamant">{t("form.pack.diamant")}</option>
                    <option value="Or">{t("form.pack.or")}</option>
                    <option value="Argent">{t("form.pack.argent")}</option>
                    <option value="Bronze">{t("form.pack.bronze")}</option>
                    <option value="Technique">{t("form.pack.technique")}</option>
                  </select>
                </div>
              )}

              <div className="btn-group">
                <button type="button" className="btn" onClick={nextStep}>
                  {t("form.buttons.next")}
                </button>
              </div>
            </div>
          )}

          {/* ========== ÉTAPE 2 ========== */}
          {step === 2 && (
            <div className="form-step">
              <h2 className="sous-titre-form">{t("form.step2")}</h2>

              <div className="row">
                <input
                  type="text"
                  name="nomEntreprise"
                  placeholder={t("form.entreprise.nom")}
                  value={formData.nomEntreprise}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="row">
                <textarea
                  name="presentation"
                  className="form-description"
                  placeholder={t("form.entreprise.presentation")}
                  value={formData.presentation}
                  onChange={handleChange}
                />
              </div>

              <div className="row2">
                <input
                  type="text"
                  name="nomRepresentant"
                  placeholder={t("form.entreprise.representantNom")}
                  value={formData.nomRepresentant}
                  onChange={handleChange}
                  required
                />
                <input
                  type="text"
                  name="fonctionRepresentant"
                  placeholder={t("form.entreprise.representantFonction")}
                  value={formData.fonctionRepresentant}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="row2">
                <input
                  type="text"
                  name="statut"
                  placeholder={t("form.entreprise.statut")}
                  value={formData.statut}
                  onChange={handleChange}
                  required
                />
                <input
                  type="text"
                  name="creation"
                  placeholder={t("form.entreprise.creation")}
                  value={formData.creation}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="row2">
                <input
                  type="text"
                  name="RCCM"
                  placeholder={t("form.entreprise.rccm")}
                  value={formData.RCCM}
                  onChange={handleChange}
                  required
                />
                <input
                  type="text"
                  name="numContribuable"
                  placeholder={t("form.entreprise.contribuable")}
                  value={formData.numContribuable}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="btn-group">
                <button type="button" className="btn prev" onClick={prevStep}>
                  {t("form.buttons.prev")}
                </button>
                <button type="button" className="btn" onClick={nextStep}>
                  {t("form.buttons.next")}
                </button>
              </div>
            </div>
          )}

          {/* ========== ÉTAPE 3 ========== */}
          {step === 3 && (
            <div className="form-step">
              <h2 className="sous-titre-form">{t("form.step3")}</h2>

              <div className="row">
                <input
                  type="text"
                  name="pays"
                  placeholder={t("form.contact.pays")}
                  value={formData.pays}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="row">
                <input
                  type="text"
                  name="adresse"
                  placeholder={t("form.contact.adresse")}
                  value={formData.adresse}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="row">
                <input
                  type="text"
                  name="ville"
                  placeholder={t("form.contact.ville")}
                  value={formData.ville}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="row">
                <input
                  type="tel"
                  name="telephone"
                  placeholder={t("form.contact.telephone")}
                  value={formData.telephone}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="row">
                <input
                  type="email"
                  name="email"
                  placeholder={t("form.contact.courriel")}
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="row">
                <input
                  type="text"
                  name="web"
                  placeholder={t("form.contact.web")}
                  value={formData.web}
                  onChange={handleChange}
                />
              </div>

              <div className="btn-group">
                <button type="button" className="btn prev" onClick={prevStep}>
                  {t("form.buttons.prev")}
                </button>
                <button type="submit" className="btn submit">
                  {t("form.buttons.submit")}
                </button>
              </div>
            </div>
          )}
        </form>
      </div>
    </div>
  </>
  );
}
