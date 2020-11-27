export class Client {
    id?: number;
    NomClient: string;
    PrenomClient: string;
    DateNaissanceClient : Date;
    AdresseClient : string;
    VilleClient :string;
    CpClient :number;
    Telephone:number;
    EmailClient:string;
    IdUtilisateurCreation?: number;
    DateCreation :Date;
    IdUtilisateurModification?:number;
    DateModification :Date;
    DateArchivage :Date;

}

export class SearchingClient extends Client {
    ID?: number;
    NomClient : string;
    PrenomClient : string;
    DateCreation : Date;
    DateModification : Date;
  }
