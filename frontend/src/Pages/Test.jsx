// import { useState } from "react";
// import Volaye from "../Images/volaye.jpg"

// export default function Test() {
//   const [isOpen, setIsOpen] = useState(false);

//   const openPopup = () => setIsOpen(true);
//   const closePopup = () => setIsOpen(false);

//   return (
//     <div className="actus-box">
//       <div className="actus-img"></div>
//       <div className="actus-description">
//         <div className="actus-texte">
//           <span className="actus-texte-titre">Actualités</span>
//           Le SAE 2026 propose panels, ateliers et un espace startups autour
//           du financement vert, de l’agrotechnologie et des énergies
//           renouvelables, réunissant experts et dirigeants pour inspirer, former
//           et connecter les participants en vue de projets concrets.
//         </div>
//         <button className="actus-details-btn" onClick={openPopup}>
//           Détails
//         </button>
//       </div>

//       {/* POPUP */}
// {isOpen && (
//   <div className="popup-container">
//   <div className="popup">
//     <button className="close-btn" onClick={closePopup}>×</button>

//     <div className="popup-content">
//       <div className="popup-text">
//         {/* L'image est dans le texte et flotte à gauche */}
//         <img src={Volaye} alt="actualité" className="wrap-img"/>
//         <h2>Actualités</h2>
//         <p>
//           Pour la première fois, le SAE intégrera un maquis géant, véritable lieu de vie où les
//           participants pourront…
//         </p>
//         <p>
//           Cette initiative vise à démocratiser l’accès à l’événement tout en mettant en valeur
//           le patrimoine culinaire ivoirien…
//           Cette initiative vise à démocratiser l’accès à l’événement tout en mettant en valeur
//           le patrimoine culinaire ivoirien…
//           Cette initiative vise à démocratiser l’accès à l’événement tout en mettant en valeur
//           le patrimoine culinaire ivoirien…
//           Cette initiative vise à démocratiser l’accès à l’événement tout en mettant en valeur
//           le patrimoine culinaire ivoirien…
//           Cette initiative vise à démocratiser l’accès à l’événement tout en mettant en valeur
//           le patrimoine culinaire ivoirien…
//         </p>
//         <p>
//           (ajoute autant de texte que nécessaire pour voir l’effet d’enrobage autour de l’image)
//         </p>
//       </div>
//     </div>
//   </div>
//   </div>
// )}    </div>
//   );
// }


// import { useState } from "react";
// import Baniere from "../Images/baniere.png";

// export default function Test() {
//   const [step, setStep] = useState(1);
//   const [formData, setFormData] = useState({
//     // Étape 1
//     choix: "",
//     typeSponsoring: "",
//     typePartenariat: "",
//     objectifs: "",
//     contribution: "",
//     pack: "",

//     // Étape 2
//     nomEntreprise: "",
//     presentation: "",
//     nomRepresentant: "",
//     fonctionRepresentant: "",
//     statut: "",
//     creation: "",
//     RCCM: "",
//     numContribuable: "",

//     // Étape 3
//     pays: "",
//     adresse: "",
//     ville: "",
//     telephone: "",
//     email: "",
//     web: "",
//   });

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({ ...formData, [name]: value });
//   };

//   const nextStep = () => {
//     if (step < 3) setStep(step + 1);
//   };

//   const prevStep = () => {
//     if (step > 1) setStep(step - 1);
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     console.log("Données envoyées :", formData);
//     alert("Formulaire soumis avec succès !");
//   };

//   return (
//     <div className="formulaires">
//       <div className="container-formulaires">
//         <div className="form-header">
//           <div className="form-title">FORMULAIRE MEDIA / PRESSE</div>
//           <img className="baniere" src={Baniere} alt="" />
//         </div>

//         <form className="form-body" onSubmit={handleSubmit}>
//           {step === 1 && (
//             <div className="form-step">
//               <h2 className="sous-titre-form">INFORMATION SUR VOTRE PACK</h2>

//               <div className="row">
//                 <select
//                   name="choix"
//                   value={formData.choix}
//                   onChange={handleChange}
//                   required
//                 >
//                   <option value="">Devenir sponsor / partenaire</option>
//                   <option value="sponsor">Sponsor</option>
//                   <option value="partenaire">Partenaire</option>
//                 </select>
//               </div>

//               {/* Champs spécifiques selon sponsor / partenaire */}
//               {formData.choix === "sponsor" && (
//                 <div className="row-colomn">
//                   <select
//                     name="typeSponsoring"
//                     value={formData.typeSponsoring}
//                     onChange={handleChange}
//                   >
//                     <option value="">Type de sponsoring</option>
//                     <option value="SFinancier">Sponsor Financier</option>
//                     <option value="STechnique">Sponsor Technique</option>
//                     <option value="SMedia">Sponsor Média</option>
//                     <option value="SPrestataire">Sponsor Prestataire</option>
//                     <option value="SAutres">Autres</option>
//                   </select>
//                   <textarea
//                     name="objectifs"
//                     className="form-description"
//                     placeholder="Vos objectifs en tant que sponsor"
//                     value={formData.objectifs}
//                     onChange={handleChange}
//                   />
//                   <textarea
//                     name="contribution"
//                     className="form-description"
//                     placeholder="Votre contribution à l'évènement"
//                     value={formData.contribution}
//                     onChange={handleChange}
//                   />
//                   <select
//                     name="pack"
//                     value={formData.pack}
//                     onChange={handleChange}
//                   >
//                     <option value="">Sélectionnez votre pack</option>
//                     <option value="Diamant">Pack Diamant</option>
//                     <option value="Or">Pack Or</option>
//                     <option value="Argent">Pack Argent</option>
//                     <option value="Bronze">Pack Bronze</option>
//                     <option value="Technique">Pack Technique</option>
//                   </select>
//                 </div>
//               )}

//               {formData.choix === "partenaire" && (
//                 <div className="row-colomn">
//                   <select
//                     name="typePartenariat"
//                     value={formData.typeSponsoring}
//                     onChange={handleChange}
//                   >
//                     <option value="">Type de Partenariat</option>
//                     <option value="PFinancier">Sponsor Financier</option>
//                     <option value="PTechnique">Sponsor Technique</option>
//                     <option value="PMedia">Sponsor Média</option>
//                     <option value="PPrestataire">Sponsor Prestataire</option>
//                     <option value="PAutres">Autres</option>
//                   </select>
//                   <textarea
//                     name="objectifs"
//                     className="form-description"
//                     placeholder="Vos objectifs en tant que partenaire"
//                     value={formData.objectifs}
//                     onChange={handleChange}
//                   />
//                   <textarea
//                     name="contribution"
//                     className="form-description"
//                     placeholder="Votre contribution à l'évènement"
//                     value={formData.contribution}
//                     onChange={handleChange}
//                   />
//                   <select
//                     name="pack"
//                     value={formData.pack}
//                     onChange={handleChange}
//                   >
//                     <option value="">Sélectionnez votre pack</option>
//                     <option value="Diamant">Pack Diamant</option>
//                     <option value="Or">Pack Or</option>
//                     <option value="Argent">Pack Argent</option>
//                     <option value="Bronze">Pack Bronze</option>
//                     <option value="Technique">Pack Technique</option>
//                   </select>
//                 </div>
//               )}
//               <div className="btn-group">
//               <button type="button" className="btn" onClick={nextStep}>
//                 Suivant →
//               </button>
//               </div>
//             </div>
//           )}

//           {step === 2 && (
//             <div className="form-step">
//               <h2 className="sous-titre-form">INFORMATION VOTRE ENTREPRISE</h2>
//               <div className="row">
//                 <input
//                   type="text"
//                   name="nomEntreprise"
//                   placeholder="Nom de l'entreprise"
//                   value={formData.nomEntreprise}
//                   onChange={handleChange}
//                   required
//                 />
//               </div>
//               <div className="row">
//                 <textarea
//                   name="presentation"
//                   className="form-description"
//                   placeholder="Présentation de l'entreprise"
//                   value={formData.presentation}
//                   onChange={handleChange}
//                 />
//               </div>
//               <div className="row">
//                 <input
//                   type="text"
//                   name="nomRepresentant"
//                   placeholder="Nom du représentant légal"
//                   value={formData.nomRepresentant}
//                   onChange={handleChange}
//                   required
//                 />
//                 <input
//                   type="text"
//                   name="fonctionRepresentant"
//                   placeholder="Fonction du représentant"
//                   value={formData.fonctionRepresentant}
//                   onChange={handleChange}
//                   required
//                 />
//               </div>
//               <div className="row">
//                 <input
//                   type="text"
//                   name="statut"
//                   placeholder="Statut juridique"
//                   value={formData.statut}
//                   onChange={handleChange}
//                   required
//                 />
//                 <input
//                   type="text"
//                   name="creation"
//                   placeholder="Date création"
//                   value={formData.creation}
//                   onChange={handleChange}
//                   required
//                 />
//               </div>
//               <div className="row">
//                 <input
//                   type="text"
//                   name="RCCM"
//                   placeholder="Numéro RCCM"
//                   value={formData.RCCM}
//                   onChange={handleChange}
//                   required
//                 />
//                 <input
//                   type="text"
//                   name="numContribuable"
//                   placeholder="Numéro de contribuable"
//                   value={formData.numContribuable}
//                   onChange={handleChange}
//                   required
//                 />
//               </div>
//               <div className="btn-group">
//                 <button type="button" className="btn prev" onClick={prevStep}>
//                   ← Précédent
//                 </button>
//                 <button type="button" className="btn" onClick={nextStep}>
//                   Suivant →
//                 </button>
//               </div>
//             </div>
//           )}

//           {step === 3 && (
//             <div className="form-step">
//               <h2 className="sous-titre-form">INFORMATION VOTRE ENTREPRISE</h2>
//               <div className="row">
//                 <input
//                   type="text"
//                   name="pays"
//                   placeholder="Pays"
//                   value={formData.pays}
//                   onChange={handleChange}
//                   required
//                 />
//               </div>
//               <div className="row">
//                 <input
//                   type="text"
//                   name="adresse"
//                   placeholder="Adresse du siège social"
//                   value={formData.adresse}
//                   onChange={handleChange}
//                   required
//                 />
//               </div>
//               <div className="row">
//                 <input
//                   type="text"
//                   name="ville"
//                   placeholder="Ville"
//                   value={formData.ville}
//                   onChange={handleChange}
//                   required
//                 />
//               </div>
//               <div className="row">
//                 <input
//                   type="tel"
//                   name="telephone"
//                   placeholder="Téléphone"
//                   value={formData.telephone}
//                   onChange={handleChange}
//                   required
//                 />
//               </div>
//               <div className="row">
//                 <input
//                   type="email"
//                   name="email"
//                   placeholder="Email"
//                   value={formData.email}
//                   onChange={handleChange}
//                   required
//                 />
//               </div>
//               <div className="row">
//                 <input
//                   type="text"
//                   name="web"
//                   placeholder="Site web"
//                   value={formData.web}
//                   onChange={handleChange}
//                 />
//               </div>
//               <div className="btn-group">
//                 <button type="button" className="btn prev" onClick={prevStep}>
//                   ← Précédent
//                 </button>
//                 <button type="submit" className="btn submit">
//                   Soumettre
//                 </button>
//               </div>
//             </div>
//           )}
//         </form>
//       </div>
//     </div>
//   );
// }