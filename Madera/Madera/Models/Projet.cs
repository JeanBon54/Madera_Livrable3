using System;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Diagnostics.CodeAnalysis;

namespace Madera.Models
{
    [Table("PROJET")]
    public class Projet
    {
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        [Key]
        public int ID { get; set; }
        [Required]
        [ForeignKey("CommercialID")]
        public int CommercialID { get; set; }
        [Required]
        [ForeignKey("ClientID")]
        public int ClientID { get; set; }
        [Required]
        [ForeignKey("PlanID")]
        public int PlanID { get; set; }
        [Required]
        public string LibelleProjet { get; set; }
        [Required]
        public string LibelleNom { get; set; }
        public string LibelleRemarque { get; set; }
        public DateTime DateDebutProjet { get; set; }
        public int IdUtilisateurCreation { get; set; }
        public DateTime DateCreation { get; set; }
        public int IdUtilisateurModification { get; set; }
        public DateTime DateModification { get; set; }
        public DateTime? DateArchivage { get; set; }

        //Propriétés de navigation
        public virtual Client client { get; set; }
        public virtual Commercial commercial { get; set; }
        public Plan Plan { get; set; }

    }

    public class ProjetCommercial : Projet
    {
        public string NomCommercial => this.commercial == null ? string.Empty : this.commercial.NomCommercial;
        public string NomClient => this.client == null ? string.Empty : this.client.NomClient;

        public ProjetCommercial(Projet projet)
        {
            this.ID = projet.ID;
            this.CommercialID = projet.CommercialID;
            this.ClientID = projet.ClientID;
            this.LibelleProjet = projet.LibelleProjet;
            this.LibelleNom = projet.LibelleNom;
            this.LibelleRemarque = projet.LibelleRemarque;
            this.DateDebutProjet = projet.DateDebutProjet;
            this.IdUtilisateurCreation = projet.IdUtilisateurCreation;
            this.DateCreation = projet.DateCreation;
            this.IdUtilisateurModification = projet.IdUtilisateurModification;
            this.DateModification = projet.DateModification;
            this.DateArchivage = projet.DateArchivage;
            //this.client = projet.client;
            //this.commercial = projet.commercial;
        }

    }

}
