using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace Madera.Models
{
    public class ModuleComposant
    {
        public int ModuleID { get; set; }
        public virtual Module Module { get; set; }
        public int ComposantID { get; set; }
        public virtual Composant Composant { get; set; }
        [Column(TypeName = "decimal(10, 2)")]
        public decimal PrixHt { get; set; }
        [Column(TypeName = "decimal(10, 2)")]
        public decimal PrixTtc { get; set; }
        [Column(TypeName = "decimal(10, 2)")]
        public decimal PrixTotal { get; set; }


        public int Quantite { get; set; }
    }
}
