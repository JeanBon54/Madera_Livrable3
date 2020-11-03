using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Diagnostics.CodeAnalysis;

namespace Madera.Models
{
    [Table("COMMERCIAL")]
    public class Commercial
    {
       [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
       [Key]
        public int ID { get; set; }
        public string NomCommercial { get; set; }
        public string PrenomCommercial { get; set; }
        public string EmailCommerce { get; set; }
        public string MdpCommercial { get; set; }
        public int IdUtilisateurCreation { get; set; }
        public DateTime DateCreation { get; set; }
        public int IdUtilisateurModification { get; set; }
        public DateTime DateModification { get; set; }
        public DateTime? DateArchivage { get; set; }

        public ICollection<Projet> Projets { get; set; }
    }
}
