using System;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace Madera.Models
{
    public class Gamme
    {
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        [Key]
        public int ID_GAMME { get; set; }
        public String LIBELLE_GAMME { get; set; }
        public String TYPE_GAMME { get; set; }
        public decimal QUALITE_HUISSERIE_GAMME { get; set; }
    }
}
