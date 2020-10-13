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
        public int ID_COMPOSANT { get; set; }
        public String LIBELLE_COMPOSANT { get; set; }
        public String NATURE_COMPOSANT { get; set; }
        public String CARACT_COMPOSANT { get; set; }
        public String UNITE_USAGE_COMPOSANT { get; set; }
    }
}
