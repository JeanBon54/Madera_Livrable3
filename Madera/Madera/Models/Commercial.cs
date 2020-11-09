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
        public string EmailCommercial { get; set; }
        public string MdpCommercial { get; set; }
        public int IdUtilisateurCreation { get; set; }
        public DateTime DateCreation { get; set; }
        public int IdUtilisateurModification { get; set; }
        public DateTime DateModification { get; set; }
        public DateTime? DateArchivage { get; set; }

        //Propriétés de navigation
        [ForeignKey("CommercialID")]
        public virtual ICollection<Projet> Projets { get; set; }
    }

    public class SearchingCommercial : Commercial
    {

        public SearchingCommercial(Commercial commercial)
        {
            this.NomCommercial = commercial.NomCommercial;
            this.PrenomCommercial = commercial.PrenomCommercial;
            this.EmailCommerce = commercial.EmailCommerce;
        }

    }
}
