using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Madera.Data
{
    public class DbInitializer
    {
        public static void Initialize(SchoolContext context)
        {
            context.Database.EnsureCreated();

            // Look for any students.
            if (context.Clients.Any())
            {
                return;   // DB has been seeded
            }

            var commercials = new Commercial[]
            {
                new Commercial{ NomCommercial="Giroud",PrenomCommercial="Gabriel",EmailCommercial="g.gabriel@madera.fr",MdpCommercial="toto"},
            };
            foreach (Commercial c in commercials)
            {
                context.Commercials.Add(c);
            }
            context.SaveChanges();


            var clients = new Client[]
            {
                new Client{NomClient="Doudou",PrenomClient="Atipo",DateNaissanceClient=DateTime.Parse("1985-11-16"),AdresseClient="15 rue Philippe Lebon",VilleClient="Metz",CpClient=57000,Telephone=0387250106,EmailClient=@"thomas.atipo@gmail.fr",IdUtilisateurCreation=0,DateCreation=DateTime.Parse("00-00-00"),IdUtilisateurModification=0,DateModification=DateTime.Parse("00-00-00"),DateArchivage=DateTime.Parse("00-00-00")},
                new Client{NomClient="Nick",PrenomClient="Alexandre",DateNaissanceClient=DateTime.Parse("1995-08-19"),AdresseClient="18 rue Aristide Briand",VilleClient="Nancy",CpClient=54000,Telephone=0383219176,EmailClient=@"nick.alexandre@yahoo.fr",IdUtilisateurCreation=0,DateCreation=DateTime.Parse("00-00-00"),IdUtilisateurModification=0,DateModification=DateTime.Parse("00-00-00"),DateArchivage=DateTime.Parse("00-00-00")},
                new Client{NomClient="Miroff",PrenomClient="Sylvie",DateNaissanceClient=DateTime.Parse("1990-04-15"),AdresseClient="145 avenue de Strasbourg",VilleClient="Nancy",CpClient=54000,Telephone=0383456384,EmailClient=@"sylvie.miroff@yahoo.fr",IdUtilisateurCreation=0,DateCreation=DateTime.Parse("00-00-00"),IdUtilisateurModification=0,DateModification=DateTime.Parse("00-00-00"),DateArchivage=DateTime.Parse("00-00-00")},
                new Client{NomClient="Giroud",PrenomClient="Monique",DateNaissanceClient=DateTime.Parse("2019-08-19"),AdresseClient="155 rue Aristide Briand",VilleClient="Levallois-Perret",CpClient=92300,Telephone=0183219176,EmailClient=@"monique.giroud@yahoo.fr",IdUtilisateurCreation=0,DateCreation=DateTime.Parse("00-00-00"),IdUtilisateurModification=0,DateModification=DateTime.Parse("00-00-00"),DateArchivage=DateTime.Parse("00-00-00")},
                new Client{NomClient="zamos",PrenomClient="Michel",DateNaissanceClient=DateTime.Parse("1995-11-15"),AdresseClient="11 rue Michelet",VilleClient="Nancy",CpClient=54000,Telephone=0383214976,EmailClient=@"michel.zamos@hotmail.fr",IdUtilisateurCreation=0,DateCreation=DateTime.Parse("00-00-00"),IdUtilisateurModification=0,DateModification=DateTime.Parse("00-00-00"),DateArchivage=DateTime.Parse("00-00-00")},
                new Client{NomClient="Nickos",PrenomClient="Alex",DateNaissanceClient=DateTime.Parse("1975-08-11"),AdresseClient="155 rue Aristide Briand",VilleClient="Nancy",CpClient=54000,Telephone=0383458512,EmailClient=@"nickos.alex@hotmal.fr",IdUtilisateurCreation=0,DateCreation=DateTime.Parse("00-00-00"),IdUtilisateurModification=0,DateModification=DateTime.Parse("00-00-00"),DateArchivage=DateTime.Parse("00-00-00")},
                new Client{NomClient="Nicole",PrenomClient="Marie",DateNaissanceClient=DateTime.Parse("1985-09-19"),AdresseClient="45 rue Vic",VilleClient="Metz",CpClient=57000,Telephone=0383278176,EmailClient=@"marie.nicole@hotmail.fr",IdUtilisateurCreation=0,DateCreation=DateTime.Parse("00-00-00"),IdUtilisateurModification=0,DateModification=DateTime.Parse("00-00-00"),DateArchivage=DateTime.Parse("00-00-00")},
                new Client{NomClient="Dupond",PrenomClient="Thèrese",DateNaissanceClient=DateTime.Parse("1985-11-21"),AdresseClient="25 rue Mairaie Atipo",VilleClient="Bagnolet",CpClient=93170,Telephone=0143219176,EmailClient=@"therese.dupond@gmail.fr",IdUtilisateurCreation=0,DateCreation=DateTime.Parse("00-00-00"),IdUtilisateurModification=0,DateModification=DateTime.Parse("00-00-00"),DateArchivage=DateTime.Parse("00-00-00")},
                new Client{NomClient="Venk",PrenomClient="Mamadou",DateNaissanceClient=DateTime.Parse("1996-07-10"),AdresseClient="112 rue Micheal Jordan",VilleClient="Paris",CpClient=75016,Telephone=0145219176,EmailClient=@"mamadou.venk@yahoo.fr",IdUtilisateurCreation=0,DateCreation=DateTime.Parse("00-00-00"),IdUtilisateurModification=0,DateModification=DateTime.Parse("00-00-00"),DateArchivage=DateTime.Parse("00-00-00")},
                new Client{NomClient="Florent",PrenomClient="Cléa",DateNaissanceClient=DateTime.Parse("1998-08-19"),AdresseClient="15 rue Aristide Briand",VilleClient="Nancy",CpClient=54000,Telephone=0383219176,EmailClient=@"clea.florent@yahoo.fr",IdUtilisateurCreation=0,DateCreation=DateTime.Parse("00-00-00"),IdUtilisateurModification=0,DateModification=DateTime.Parse("00-00-00"),DateArchivage=DateTime.Parse("00-00-00")},
            };
            foreach (Client c in clients)
            {
                context.Clients.Add(c);
            }
            context.SaveChanges();
        }
    }
}
