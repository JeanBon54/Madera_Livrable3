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
        [ForeignKey("PlancherID")]
        public int PlancherID { get; set; }
        [Required]
        [ForeignKey("CoupePrincipaleID")]
        public int CoupePrincipaleID { get; set; }
        [ForeignKey("CouvertureID")]
        public int CouvertureID { get; set; }
        public int ModuleID { get; set; }
        [Required]
        [ForeignKey("SlotID")]
        public int SlotID { get; set; }
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

        //Propriétés de navigation

        public virtual Plancher plancher { get; set; }
        public virtual Couverture couverture { get; set; }
        public virtual CoupePrincipale coupePrincipales { get; set; } 
        public Slot Slot { get; set; }
        public Module Module { get; set; }
    }
}
