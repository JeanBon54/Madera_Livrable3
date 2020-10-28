using System;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace Madera.Models
{
    [Table("PROJET")]
    public class Projet
    {
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        [Key]
        public int ID { get; set; }
        [Required]
        public int CommercialID { get; set; }
        [Required]
        public int ClientID { get; set; }
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

        public Client client;
        public Commercial commercial;

    }
}
