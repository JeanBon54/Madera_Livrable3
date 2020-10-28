using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace Madera.Models
{
    [Table("FAMILLE_COMPOSANT")]
    public class familleComposant
    {
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        [Key]
        public int ID { get; set; }
        public String LIBELLE_FAMILLE_COMPOSANT { get; set; }

        public ICollection<Composant> Composants { get; set; }

    }
}
