using System;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace Madera.Models
{
    public class Commercial
    {
       [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
       [Key]
        public int ID { get; set; }
        public String NomCommercial { get; set; }
        public String PrenomCommercial { get; set; }
        public String EmailCommerce { get; set; }
        public String MdpCommercial { get; set; }
        public int IdUtilisateurCreation { get; set; }
        public DateTime DateCreation { get; set; }
        public int IdUtilisateurModification { get; set; }
        public DateTime DateModification { get; set; }
        public DateTime DateArchivage { get; set; }
    }
}
