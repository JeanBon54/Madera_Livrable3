using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace Madera.Models
{

    public class FamilleComposant
    {
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        [Key]
        public int ID { get; set; }
        public string LibelleFamilleComposant { get; set; }


        [ForeignKey("FamilleComposantID")]
        public virtual ICollection<Composant> Composants { get; set; }

    }

    public class SearchingFamilleComposant : FamilleComposant
    {

        public SearchingFamilleComposant(FamilleComposant familleComposant)
        {
            this.ID = familleComposant.ID;
            this.LibelleFamilleComposant = familleComposant.LibelleFamilleComposant;
        }

    }
}
