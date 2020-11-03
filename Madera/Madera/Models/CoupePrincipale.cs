using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace Madera.Models
{
    public class CoupePrincipale
    {
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        [Key]
        public int ID { get; set; }
        public string LibelleCoupePrincipale { get; set; }
        [Column(TypeName = "decimal(10, 2)")]
        public decimal LongueurCoupePrincipale { get; set; }
        [Column(TypeName = "decimal(10, 2)")]
        public decimal LargeurCoupePrincipale { get; set; }

        public Plan plan;
    }
}
