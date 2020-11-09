using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace Madera.Models
{
    public class Plancher
    {
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        [Key]
        public int ID { get; set; }
        public string TypePlancher { get; set; }
        [Column(TypeName = "decimal(10, 2)")]
        public decimal PrixPlancher { get; set; }

        //Propriétés de navigation
        [ForeignKey("ID")]
        public ICollection<Plan> plans;
    }
}
