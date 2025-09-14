import Baniere from "../Images/baniere.png"


const Delegation=()=>{
    return (
    <>
    <div className="formulaires">
    <div className="container-formulaires">
        <div className="form-header">
            <div className="form-title">FORMULAIRE DELEGATION</div>
            <img className="baniere" src={Baniere} alt="" />
        </div>
        <form className="form-body">
            <div className="row">
              <input type="text" placeholder="Nom de la délégation" />
            </div>
            <div className="row">
              <input type="text" placeholder="Nom de l'institution représentée" />
            </div>
            <select>
              <option value="">Objectifs de participation</option>
              <option value="Partenariat">Partenariat</option>
              <option value="Intervention">Intervention</option>
            </select>

            <div className="row">
              <textarea className="form-description" type="text" placeholder="Composition de la délégation" />
            </div>
            <div className="row2">
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
export default Delegation
