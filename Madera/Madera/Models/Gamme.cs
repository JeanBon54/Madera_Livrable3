using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace Madera.Models
{
    public class Gamme
    {
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        [Key]
        public int ID { get; set; }
        public string LibelleGamme { get; set; }
        public string TypeGamme { get; set; }
        public string TypeIsolantGamme { get; set; }
        [Column(TypeName = "decimal(10, 2)")]
        public decimal QualiteHuisserieGamme { get; set; }

        public ICollection<Module> Modules { get; set; }
        public ICollection<ModuleGamme> ModuleGamme { get; set; }
    }
}
