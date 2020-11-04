using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Madera.Models.Search
{
    public class SearchProjet
    {
        /// <summary>
        /// Filtre sur le libellé de projet
        /// </summary>
        public string LibelleProjet { get; set; }

        public int? ClientId { get; set; }

        public DateTime? DateCreation { get; set; }

    }
}
