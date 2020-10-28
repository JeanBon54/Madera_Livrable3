using System;
using Microsoft.EntityFrameworkCore;

namespace Madera.Models
{
    public class AppDbContext:DbContext
    {
        public AppDbContext(DbContextOptions<AppDbContext>options)
            :base(options)
        {

        }

        public DbSet<Client> Clients { get; set; }
        public DbSet<Commercial> Commercials { get; set; }
        public DbSet<Projet> Projets { get; set; }
        public DbSet<Composant> Composants { get; set; }
        public DbSet<CoupePrincipale> CoupePrincipales { get; set; }
        public DbSet<Couverture> Couvertures { get; set; }
        public DbSet<FamilleComposant> FamilleComposants { get; set; }
        public DbSet<Gamme> Gammes { get; set; }
        public DbSet<Modele> Modeles { get; set; }
        public DbSet<Module> Modules { get; set; }
        public DbSet<Plan> Plans { get; set; }
        public DbSet<Plancher> Planchers { get; set; }
        public DbSet<Devis> Devis { get; set; }
        public DbSet<Slot> Slots { get; set; }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<Client>().ToTable("Client");
            modelBuilder.Entity<Commercial>().ToTable("Commercial");
            modelBuilder.Entity<Composant>().ToTable("Composant");
            modelBuilder.Entity<CoupePrincipale>().ToTable("CoupePrincipale");
            modelBuilder.Entity<Couverture>().ToTable("Couverture");
            modelBuilder.Entity<FamilleComposant>().ToTable("FamilleComposant");
            modelBuilder.Entity<Modele>().ToTable("Modele");
            modelBuilder.Entity<Module>().ToTable("Module");
            modelBuilder.Entity<Plan>().ToTable("Plan");
            modelBuilder.Entity<Plancher>().ToTable("Plancher");
            modelBuilder.Entity<Gamme>().ToTable("Gamme");
            modelBuilder.Entity<Projet>().ToTable("Projet");
            modelBuilder.Entity<Devis>().ToTable("Devis");
            modelBuilder.Entity<Slot>().ToTable("Slot");
        }
    }
}
