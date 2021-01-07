using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Diagnostics.CodeAnalysis;

namespace Madera.Models
{

    public class Client
    {
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        [Key]
        public int ID { get; set; }
        [Required]
        public string NomClient { get; set; }
        [Required]
        public string PrenomClient { get; set; }
        [Required]
        public DateTime DateNaissanceClient { get; set; }
        [Required]
        public string AdresseClient { get; set; }
        [Required]
        public string VilleClient { get; set; }
        [Required]
        public int CpClient { get; set; }
        [Required]
        public int Telephone { get; set; }
        [Required]
        public string EmailClient { get; set; }
        public int IdUtilisateurCreation { get; set; }
        public DateTime DateCreation { get; set; }
        public int IdUtilisateurModification { get; set; }
        public DateTime DateModification { get; set; }
        public DateTime? DateArchivage { get; set; }
        [ForeignKey("ClientID")]
        public virtual ICollection<Projet> Projets { get; set; }

       
    }

    public class SearchingClient : Client
    {

        public SearchingClient(Client client)
        {
            this.ID = client.ID;
            this.NomClient = client.NomClient;
            this.PrenomClient = client.PrenomClient;
            this.DateNaissanceClient = client.DateNaissanceClient;
            this.AdresseClient = client.AdresseClient;
            this.VilleClient = client.VilleClient;
            this.CpClient = client.CpClient;
            this.Telephone = client.Telephone;
            this.EmailClient = client.EmailClient;
            this.DateCreation = client.DateCreation;
            this.DateModification = client.DateModification;
        }

    }

    public class RechercheClient 
    {
        public int ID { get; set; }
        public string NomClient { get; set; }
        public string PrenomClient { get; set; }
        public DateTime DateNaissanceClient { get; set; }
        public string AdresseClient { get; set; }
        public string VilleClient { get; set; }
        public int CpClient { get; set; }  
        public int Telephone { get; set; }  
        public string EmailClient { get; set; }
        public int IdUtilisateurCreation { get; set; }


    }

    public class AutoCompleteClient
    {
        public int ID { get; set; }
        public string labelAttribute { get; set; }
    }
}
