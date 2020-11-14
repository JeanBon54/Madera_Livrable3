export class Composant {

    ID?:number;
    FamilleComposantID : number;
    LibelleComposant : string;
    NatureComposant : string;
    CaractComposant :string;
    UniteUsageComposant :number;
    IdUtilisateurCreation?: number;
    DateCreation :Date;
    IdUtilisateurModification?:number;
    DateModification :Date;
    DateArchivage :Date;

}

export class SearchingComposant extends Composant {
    // FamilleComposantID:number;
    LibelleComposant : string; 
    NatureComposant: string;
    CaractComposant :string;
  }