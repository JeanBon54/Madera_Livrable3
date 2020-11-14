using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace Madera.Models
{
    public class Composant
    {
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        [Key]
        public int ID { get; set; }

        [Required]
        [ForeignKey("FamilleComposantID")]
        public int FamilleComposantID { get; set; }
        public string LibelleComposant { get; set; }
        public string NatureComposant { get; set; }
        public string CaractComposant { get; set; }
        public int UniteUsageComposant { get; set; }
        public int IdUtilisateurCreation { get; set; }
        public DateTime DateCreation { get; set; }
        public int IdUtilisateurModification { get; set; }
        public DateTime DateModification { get; set; }
        public DateTime? DateArchivage { get; set; }


        public virtual FamilleComposant FamilleComposant { get; set; }
        public virtual ICollection<ModuleComposant> ModuleComposant { get; set; }
    }

    public class SearchingComposant : Composant
    {
        public string LibelleFamilleComposant => this.FamilleComposant == null ? string.Empty : this.FamilleComposant.LibelleFamilleComposant;

        public SearchingComposant(Composant composant)
        {
            this.ID = composant.ID;
            this.FamilleComposant = composant.FamilleComposant;
            this.LibelleComposant = composant.LibelleComposant;
            this.NatureComposant = composant.NatureComposant;
            this.CaractComposant = composant.CaractComposant;
        }

    }
}
