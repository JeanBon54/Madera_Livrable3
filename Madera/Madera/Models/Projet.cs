using System;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace Madera.Models
{
    public class Projet
    {
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        [Key]
        public int ID_PROJET { get; set; }
        public int ID_COMMERCIAL { get; set; }
        public int ID_CLIENT { get; set; }
        public String LIBELLE_PROJET { get; set; }
        public String NOM_PROJET { get; set; }
    }
}
