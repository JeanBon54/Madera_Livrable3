using Madera.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Madera._Helpers
{
    public static class ExtensionMethods
    {
        public static IEnumerable<Commercial> WithoutPasswords(this IEnumerable<Commercial> commercials)
        {
            return commercials.Select(x => x.WithoutPassword());
        }

        public static Commercial WithoutPassword(this Commercial commercials)
        {
            commercials.MdpCommercial = null;
            return commercials;
        }
    }
}
