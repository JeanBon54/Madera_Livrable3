export class Devis {

    ID: number;
    LibelleDevis: string;
    EtatDevis: string;
    PlanID: number;
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
    ID: number;
    LibelleDevis : string;
    DateCreation : Date;

  }
