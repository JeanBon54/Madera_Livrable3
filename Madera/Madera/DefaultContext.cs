using System;
using Microsoft.EntityFrameworkCore;
using Madera.Models;

namespace Madera
{
    public class DefaultContext : DbContext
    {

        public DefaultContext()
        {
        }

        public DefaultContext(DbContextOptions<DefaultContext> options)
            : base(options)
        {
        }


        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            if (!optionsBuilder.IsConfigured)
            {
                optionsBuilder.UseSqlServer("Server=kaktux.com;Database=master;User Id=sa;Password=Password7757");
            }
        }


        public DbSet<Commercial> Commercial { get; set; }
        public DbSet<Client> Client { get; set; }
        public DbSet<Projet> Projet { get; set; }
        public DbSet<Composant> Composant { get; set; }

    }
}
