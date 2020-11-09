using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace Madera.Models
{
    [Table("FAMILLE_COMPOSANT")]
    public class FamilleComposant
    {
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        [Key]
        public int ID { get; set; }
        public string LIBELLE_FAMILLE_COMPOSANT { get; set; }

        [ForeignKey("FamilleComposantID")]
        public virtual ICollection<Composant> Composants { get; set; }

    }

    public class SearchingFamilleComposant : FamilleComposant
    {

        public SearchingFamilleComposant(FamilleComposant familleComposant)
        {
            this.LIBELLE_FAMILLE_COMPOSANT = familleComposant.LIBELLE_FAMILLE_COMPOSANT;
        }

    }
}
