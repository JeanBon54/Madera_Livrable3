using System;
using Microsoft.EntityFrameworkCore;
using Madera.Models;

namespace Madera
{
    public class DefaultContext : DbContext
    {
        public DefaultContext(DbContextOptions options) : base(options)
        {
        }

        protected DefaultContext()
        {
        }


        public DbSet<Commercial> Commercial { get; set; }
        public DbSet<Client> Client { get; set; }

        //public DbSet<Utilisateur> Utilisateurs { }

    }
}
