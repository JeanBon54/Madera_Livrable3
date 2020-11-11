using System;
using System.Collections.Generic;
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

        //Propriétés de navigation
        public virtual ICollection<Gamme> Gammes { get; set; }
        public virtual ICollection<Slot> Slot { get; set; }
        public virtual ICollection<Plan> Plans { get; set; }
        public virtual ICollection<Modele> Modeles { get; set; }
        public virtual ICollection<Composant> Composants { get; set; }

        public virtual ICollection<ModuleComposant> ModuleComposant { get; set; }
        public virtual ICollection<ModuleGamme> ModuleGamme { get; set; }
        public virtual ICollection<ModulePlan> ModulePlan { get; set; }
        public virtual ICollection<ModuleSlot> ModuleSlots { get; set; }
        public virtual ICollection<ModuleModele> ModuleModeles { get; set; }



    }
}
