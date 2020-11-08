using System;
namespace Madera.Models.Search
{
    public class SearchClient
    {
        public string NomClient { get; set; }
        public string PrenomCommercial { get; set; }
        public DateTime? DateCreation { get; set; }
        public DateTime? DateModification { get; set; }
    }
}
