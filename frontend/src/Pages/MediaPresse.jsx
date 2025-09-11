import Baniere from "../Images/baniere.png"


const MediaPresse=()=>{
    return (
    <>
    <div className="formulaires">
    <div className="container-formulaires">
        <div className="form-header">
            <div className="form-title">FORMULAIRE MEDIA / PRESSE</div>
            <img className="baniere" src={Baniere} alt="" />
        </div>
        <form className="form-body">
            <div className="row">
              <input type="text" placeholder="Nom du média" />
            </div>
            <div className="row">
              <input type="text" placeholder="Nom & Prénoms du reporter" />
            </div>
            <div className="row">
            <select>
              <option value="">Audiance du média</option>
              <option value="Etudiant">Local</option>
              <option value="Professionel">National</option>
              <option value="SimpleVisiteur">International</option>
            </select>
            <select>
              <option value="">Type de couverture</option>
              <option value="Agriculture">Reportage</option>
              <option value="Elevage">Interview</option>
              <option value="Energie">Live Streaming</option>
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
export default MediaPresse
