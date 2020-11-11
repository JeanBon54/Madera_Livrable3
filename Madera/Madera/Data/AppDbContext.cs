using System;
using System.Diagnostics;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;

namespace Madera.Models
{
    public class AppDbContext:DbContext
    {
        public AppDbContext(DbContextOptions<AppDbContext> options, IConfiguration configuration)
            :base(options)   
        {
            Configuration = configuration;
        }

        public IConfiguration Configuration { get; }

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

            modelBuilder.Entity<ModuleComposant>()
            .HasKey(mc => new { mc.ModuleID, mc.ComposantID });
            modelBuilder.Entity<ModuleComposant>()
                .HasOne(mc => mc.Module)
                .WithMany(m => m.ModuleComposant)
                .HasForeignKey(mc => mc.ModuleID);
            modelBuilder.Entity<ModuleComposant>()
                .HasOne(mc => mc.Composant)
                .WithMany(c => c.ModuleComposant)
                .HasForeignKey(mc => mc.ComposantID);

            modelBuilder.Entity<ModuleGamme>()
            .HasKey(mc => new { mc.ModuleID, mc.GammeID });
            modelBuilder.Entity<ModuleGamme>()
                .HasOne(mc => mc.Module)
                .WithMany(m => m.ModuleGamme)
                .HasForeignKey(mc => mc.ModuleID);
            modelBuilder.Entity<ModuleGamme>()
                .HasOne(mc => mc.Gamme)
                .WithMany(c => c.ModuleGamme)
                .HasForeignKey(mc => mc.GammeID);


            modelBuilder.Entity<ModulePlan>()
            .HasKey(mc => new { mc.ModuleID, mc.PlanID });
            modelBuilder.Entity<ModulePlan>()
                .HasOne(mc => mc.Module)
                .WithMany(m => m.ModulePlan)
                .HasForeignKey(mc => mc.ModuleID);
            modelBuilder.Entity<ModulePlan>()
                .HasOne(mc => mc.Plan)
                .WithMany(c => c.ModulePlan)
                .HasForeignKey(mc => mc.PlanID);


            modelBuilder.Entity<ProjetPlan>()
            .HasKey(mc => new { mc.ProjetID, mc.PlanID });
            modelBuilder.Entity<ProjetPlan>()
                .HasOne(mc => mc.Projet)
                .WithMany(m => m.ProjetPlans)
                .HasForeignKey(mc => mc.ProjetID);
            modelBuilder.Entity<ProjetPlan>()
                .HasOne(mc => mc.Plan)
                .WithMany(c => c.ProjetPlans)
                .HasForeignKey(mc => mc.PlanID);



            modelBuilder.Entity<ModuleSlot>()
        .HasKey(ms => new { ms.ModuleID, ms.SlotID });
            modelBuilder.Entity<ModuleSlot>()
                .HasOne(ms => ms.Module)
                .WithMany(m => m.ModuleSlots)
                .HasForeignKey(ms => ms.ModuleID);
            modelBuilder.Entity<ModuleSlot>()
                .HasOne(ms => ms.Slot)
                .WithMany(s => s.ModuleSlots)
                .HasForeignKey(ms => ms.SlotID);

            modelBuilder.Entity<ModuleModele>()
        .HasKey(ms => new { ms.ModuleID, ms.ModeleID });
            modelBuilder.Entity<ModuleModele>()
                .HasOne(ms => ms.Module)
                .WithMany(m => m.ModuleModeles)
                .HasForeignKey(ms => ms.ModuleID);
            modelBuilder.Entity<ModuleModele>()
                .HasOne(ms => ms.Modele)
                .WithMany(s => s.ModuleModeles)
                .HasForeignKey(ms => ms.ModeleID);

        }

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            optionsBuilder.UseSqlServer("Server=kaktux.com;Database=Madera;User Id=sa;Password=Password7757;");
            optionsBuilder.UseLazyLoadingProxies();
        }

    }
}
    