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
        public string LibelleDevis { get; set; }
        public string EtatDevis { get; set; }
        [ForeignKey("PlanID")]
        public int PlanID { get; set; }
        public DateTime DateDebutDevis { get; set; }
        [Column(TypeName = "decimal(10, 2)")]
        public decimal PrixTotalHtDevis { get; set; }
        [Column(TypeName = "decimal(10, 2)")]
        public decimal PrixTotalTtcDevis { get; set; }
        [Column(TypeName = "decimal(10, 2)")]
        public decimal MargeCommercialDevis { get; set; }
        [Column(TypeName = "decimal(10, 2)")]
        public decimal MargeEntrepriseDevis { get; set; }
        public int IdUtilisateurCreation { get; set; }
        public DateTime DateCreation { get; set; }
        public int IdUtilisateurModification { get; set; }
        public DateTime DateModification { get; set; }
        public DateTime? DateArchivage { get; set; }

        public virtual Plan Plan { get; set; }
    }
}
