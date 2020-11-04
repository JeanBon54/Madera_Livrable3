using System;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Numerics;

namespace Madera.Models
{
    public class Module
    {
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        [Key]
        public int ID { get; set; }
        [ForeignKey("GammeID")]
        public int GammeID { get; set; }
        public int PlanID { get; set; }
        public string LibelleModule { get; set; }
        [Column(TypeName = "decimal(10, 2)")]
        public decimal PrixHtModule { get; set; }
        [Column(TypeName = "decimal(5, 2)")]
        public decimal DebutPointX { get; set; }
        [Column(TypeName = "decimal(5, 2)")]
        public decimal FinPointX { get; set; }
        [Column(TypeName = "decimal(5, 2)")]
        public decimal DdebutPointY { get; set; }
        [Column(TypeName = "decimal(5, 2)")]
        public decimal FinPointY { get; set; }
        public int IdUtilisateurCreation { get; set; }
        public DateTime DateCreation { get; set; }
        public int IdUtilisateurModification { get; set; }
        public DateTime DateModification { get; set; }
        public DateTime? DateArchivage { get; set; }


        public virtual Gamme gamme { get; set; }

    }
}
