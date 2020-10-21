using System;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace Madera.Models
{
    public class familleComposant
    {
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        [Key]
        public int ID_FAMILLE_COMPOSANT { get; set; }
        public int ID_COMPOSANT { get; set; }
        public String LIBELLE_FAMILLE_COMPOSANT { get; set; }

    }
}
