using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Numerics;

namespace Madera.Models
{
    public class Module
    {

        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        [Key]
        public int ID { get; set; }
        public string LibelleModule { get; set; }

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
        public virtual List<ModuleComposant> ModuleComposant { get; set; }
        public virtual ICollection<ModuleGamme> ModuleGamme { get; set; }
        public virtual ICollection<ModulePlan> ModulePlan { get; set; }
        public virtual ICollection<ModuleSlot> ModuleSlots { get; set; }
        public virtual ICollection<ModuleModele> ModuleModeles { get; set; }

        [NotMapped]
        public decimal prixModule
        {
            get
            {
                return ModuleComposant.Sum(x => x.PrixTotal);
            }
            set { }
        }
    }

    public class SearchingModule : Module
    {

        public SearchingModule(Module module)
        {
            this.ID = module.ID;
            this.LibelleModule = module.LibelleModule;
        }

    }

    public class SaveModule
    {
        public int ID { get; set; }
        public string LibelleModule { get; set; }
        public IEnumerable<int> ListeIdComposant { get; set; }
    }


    public class RechercheModule
    {
        public int ID { get; set; }
        public string LibelleModule { get; set; }

        public decimal DebutPointX { get; set; }
        public decimal FinPointX { get; set; }
        public decimal DdebutPointY { get; set; }
        public decimal FinPointY { get; set; }
    }

}
