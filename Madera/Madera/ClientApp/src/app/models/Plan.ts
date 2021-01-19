export class Plan {
    id?;
    PlancherID: number;
    CoupePrincipaleID: number;
    CouvertureID: number;
    ReferencePlan?: string;
    LibellePlan: string;
    AdressPlan: string;
    CpPlan: number;
    VillePlan: string;
    IdUtilisateurCreation? :number;
    DateCreation :Date;
    IdUtilisateurModification?:number;
    DateModification :Date;
    DateArchivage :Date;
    ListeIdModule: SelectedQuantite[];
    ProjetID?;
    idProjetPlan?;
  }

  export class SelectedQuantite {

    public constructor(id: number, quantite: number) {
      this.id = id;
      this.quantite = quantite;
    }

    id: number;
    quantite: number;
  }
  