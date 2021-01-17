export class Devis {

    id?: number;
    LibelleDevis: string;
    EtatDevis: string;
    planID: number;
    DebutDateDevis: Date;
    PrixTotalHtDevis: number;
    PrixTotalTtcDevis: number;
    MargeCommercialDevis: number;
    MargeEntrepriseDevis: number;
    IdUtilisateurCreation: number;
    DateCreation: Date;
    IdUtilisateurModification: number;
    DateModification: Date;
    DateArchivage: Date;

}

export class SearchingDevis extends Devis {
    id?: number;
    LibelleDevis : string;
    DateCreation : Date;

  }
