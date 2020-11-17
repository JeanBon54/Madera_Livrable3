export class Projet {
  ID?: number;
  CommercialID?: number;
  ClientID?: number;
  LibelleProjet: string;
  LibelleNom: string;
  libelleRemarque: string;
  DateDebutProjet: Date;
  IdUtilisateurCreation: number;
  DateCreation: Date;
  IdUtilisateurModification: number;
  DateModification: Date;
  DateArchivage: Date;
}

export class ProjetCommercial extends Projet {
  NomCommercial: string;
  NomClient: string;
}
