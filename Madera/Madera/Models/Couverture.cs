using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace Madera.Models
{
    public class Couverture
    {
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        [Key]
        public int ID { get; set; }
        public string TypeCouverture {  get; set; }
        [Column(TypeName = "decimal(10, 2)")]
        public decimal PrixHtCouverture { get; set; }

        [ForeignKey("CouvertureID")]
        public virtual ICollection<Plan> plans { get; set; }

        [NotMapped]
        public decimal PrixHtCouvertureTtc
        {

            get
            {
                decimal tva = Convert.ToDecimal("1,2");
                return PrixHtCouverture * tva;
            }
            set { }
        }
    }


    public class RechercherCouverture
    {

        public int ID { get; set; }
        public string TypeCouverture { get; set; }

        public decimal PrixHtCouverture { get; set; }


    }
}
