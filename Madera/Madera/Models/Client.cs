using System;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

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
        public DateTime DateArchivage { get; set; }
        
    }
}
