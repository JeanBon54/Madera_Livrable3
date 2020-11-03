using System;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Diagnostics.CodeAnalysis;

namespace Madera.Models
{
    public class Plan
    {
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        [Key]
        public int ID { get; set; }
        [Required]
        public int PlancherID { get; set; }
        public int CoupePrincipaleID { get; set; }
        public int CouvertureID { get; set; }
        public string ReferencePlan { get; set; }
        public string libellePlan { get; set; }
        public string AdressPlan { get; set; }
        public int CpPlan { get; set; }
        public string VillePlan { get; set; }
        public int IdUtilisateurCreation { get; set; }
        public DateTime DateCreation { get; set; }
        public int IdUtilisateurModification { get; set; }
        public DateTime DateModification { get; set; }
        [AllowNull]
        public DateTime DateArchivage { get; set; }

        //Classe associée 
        public Plancher plancher;
        public Couverture couverture;
        public CoupePrincipale coupePrincipales;
    }
}
