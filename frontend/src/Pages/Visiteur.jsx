import Baniere from "../Images/baniere.png"


const Visiteur=()=>{
    return (
    <>
    <div className="formulaires">
    <div className="container-formulaires">
        <div className="form-header">
            <div className="form-title">FORMULAIRE VISITEUR</div>
            <img className="baniere" src={Baniere} alt="" />
        </div>
        <form className="form-body">
            <div className="row">
              <input type="text" placeholder="Nom & Prénoms" />
            </div>
            <div className="row">
            <select>
              <option value="">Status</option>
              <option value="Etudiant">Etudiant</option>
              <option value="Professionel">Professionel</option>
              <option value="SimpleVisiteur">Simple visiteur</option>
            </select>
            <select>
              <option value="">Centre d'intérêt</option>
              <option value="Agriculture">Agriculture</option>
              <option value="Elevage">Elevage</option>
              <option value="Energie">Energie</option>
            </select>
            </div>
            <div className="row">
              <input type="text" placeholder="Téléphone" />
              <input type="text" placeholder="Email" />
            </div>
        </form>
        <button type="submit" className="btn-valider">Valider</button>
    </div>
    </div>
    </>

  );

}
export default Visiteur
