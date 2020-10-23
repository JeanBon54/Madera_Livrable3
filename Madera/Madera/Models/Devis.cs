using System;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace Madera.Models
{
    public class Devis
    {
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        [Key]
        public int ID { get; set; }
        public int PlanID { get; set; }
        public String LibelleDevis { get; set; }
        public String EtatDevis { get; set; }
        public DateTime DateDebutDevis { get; set; }
        public decimal PrixTotalHtDevis { get; set; }
        public decimal PrixTotalTtcDevis { get; set; }
        public decimal MargeCommercialDevis { get; set; }
        public decimal MargeEntrepriseDevis { get; set; }
        public int IdUtilisateurCreation { get; set; }
        public DateTime DateCreation { get; set; }
        public int IdUtilisateurModification { get; set; }
        public DateTime DateModification { get; set; }
        public DateTime DateArchivage { get; set; }
    }
}
