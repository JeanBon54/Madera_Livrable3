using System;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace Madera.Models
{
    public class Module
    {
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        [Key]
        public int ID_MODULE { get; set; }
        public String LIBELLE_MODULE { get; set; }
        public decimal PRIX_HT_MODULE { get; set; }
        public decimal DEBUT_POINT_X { get; set; }
        public decimal FIN_POINT_X { get; set; }
        public decimal DEBUT_POINT_Y { get; set; }
        public decimal FIN_POINT_Y { get; set; }
    }
}
