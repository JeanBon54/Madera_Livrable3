using System;
using Microsoft.EntityFrameworkCore.Migrations;

namespace Madera.Migrations
{
    public partial class fixnullable : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.RenameColumn(
                name: "libelleModele",
                table: "Modele",
                newName: "LibelleModele");

            migrationBuilder.RenameColumn(
                name: "longueurCoupePrincipale",
                table: "CoupePrincipale",
                newName: "LongueurCoupePrincipale");

            migrationBuilder.RenameColumn(
                name: "libelleCoupePrincipale",
                table: "CoupePrincipale",
                newName: "LibelleCoupePrincipale");

            migrationBuilder.RenameColumn(
                name: "largeurCoupePrincipale",
                table: "CoupePrincipale",
                newName: "LargeurCoupePrincipale");

            migrationBuilder.AlterColumn<decimal>(
                name: "PrixPlancher",
                table: "Plancher",
                type: "decimal(10, 2)",
                nullable: false,
                oldClrType: typeof(decimal),
                oldType: "decimal(18,2)");

            migrationBuilder.AlterColumn<decimal>(
                name: "PrixHtModule",
                table: "Module",
                type: "decimal(10 2)",
                nullable: false,
                oldClrType: typeof(decimal),
                oldType: "decimal(18,2)");

            migrationBuilder.AlterColumn<decimal>(
                name: "FinPointY",
                table: "Module",
                type: "decimal(5, 2)",
                nullable: false,
                oldClrType: typeof(decimal),
                oldType: "decimal(18,2)");

            migrationBuilder.AlterColumn<decimal>(
                name: "FinPointX",
                table: "Module",
                type: "decimal(5, 2)",
                nullable: false,
                oldClrType: typeof(decimal),
                oldType: "decimal(18,2)");

            migrationBuilder.AlterColumn<decimal>(
                name: "DebutPointX",
                table: "Module",
                type: "decimal(5, 2)",
                nullable: false,
                oldClrType: typeof(decimal),
                oldType: "decimal(18,2)");

            migrationBuilder.AlterColumn<decimal>(
                name: "DdebutPointY",
                table: "Module",
                type: "decimal(5, 2)",
                nullable: false,
                oldClrType: typeof(decimal),
                oldType: "decimal(18,2)");

            migrationBuilder.AlterColumn<decimal>(
                name: "QualiteHuisserieGamme",
                table: "Gamme",
                type: "decimal(10 2)",
                nullable: false,
                oldClrType: typeof(decimal),
                oldType: "decimal(18,2)");

            migrationBuilder.AlterColumn<DateTime>(
                name: "DateArchivage",
                table: "Devis",
                nullable: true,
                oldClrType: typeof(DateTime),
                oldType: "datetime2");

            migrationBuilder.AlterColumn<decimal>(
                name: "LongueurCoupePrincipale",
                table: "CoupePrincipale",
                type: "decimal(10 2)",
                nullable: false,
                oldClrType: typeof(decimal),
                oldType: "decimal(18,2)");

            migrationBuilder.AlterColumn<decimal>(
                name: "LargeurCoupePrincipale",
                table: "CoupePrincipale",
                type: "decimal(10 2)",
                nullable: false,
                oldClrType: typeof(decimal),
                oldType: "decimal(18,2)");

            migrationBuilder.AlterColumn<DateTime>(
                name: "DateArchivage",
                table: "Composant",
                nullable: true,
                oldClrType: typeof(DateTime),
                oldType: "datetime2");

            migrationBuilder.AlterColumn<DateTime>(
                name: "DateArchivage",
                table: "Commercial",
                nullable: true,
                oldClrType: typeof(DateTime),
                oldType: "datetime2");

            migrationBuilder.AlterColumn<DateTime>(
                name: "DateArchivage",
                table: "Client",
                nullable: true,
                oldClrType: typeof(DateTime),
                oldType: "datetime2");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.RenameColumn(
                name: "LibelleModele",
                table: "Modele",
                newName: "libelleModele");

            migrationBuilder.RenameColumn(
                name: "LongueurCoupePrincipale",
                table: "CoupePrincipale",
                newName: "longueurCoupePrincipale");

            migrationBuilder.RenameColumn(
                name: "LibelleCoupePrincipale",
                table: "CoupePrincipale",
                newName: "libelleCoupePrincipale");

            migrationBuilder.RenameColumn(
                name: "LargeurCoupePrincipale",
                table: "CoupePrincipale",
                newName: "largeurCoupePrincipale");

            migrationBuilder.AlterColumn<decimal>(
                name: "PrixPlancher",
                table: "Plancher",
                type: "decimal(18,2)",
                nullable: false,
                oldClrType: typeof(decimal),
                oldType: "decimal(10, 2)");

            migrationBuilder.AlterColumn<decimal>(
                name: "PrixHtModule",
                table: "Module",
                type: "decimal(18,2)",
                nullable: false,
                oldClrType: typeof(decimal),
                oldType: "decimal(10 2)");

            migrationBuilder.AlterColumn<decimal>(
                name: "FinPointY",
                table: "Module",
                type: "decimal(18,2)",
                nullable: false,
                oldClrType: typeof(decimal),
                oldType: "decimal(5, 2)");

            migrationBuilder.AlterColumn<decimal>(
                name: "FinPointX",
                table: "Module",
                type: "decimal(18,2)",
                nullable: false,
                oldClrType: typeof(decimal),
                oldType: "decimal(5, 2)");

            migrationBuilder.AlterColumn<decimal>(
                name: "DebutPointX",
                table: "Module",
                type: "decimal(18,2)",
                nullable: false,
                oldClrType: typeof(decimal),
                oldType: "decimal(5, 2)");

            migrationBuilder.AlterColumn<decimal>(
                name: "DdebutPointY",
                table: "Module",
                type: "decimal(18,2)",
                nullable: false,
                oldClrType: typeof(decimal),
                oldType: "decimal(5, 2)");

            migrationBuilder.AlterColumn<decimal>(
                name: "QualiteHuisserieGamme",
                table: "Gamme",
                type: "decimal(18,2)",
                nullable: false,
                oldClrType: typeof(decimal),
                oldType: "decimal(10 2)");

            migrationBuilder.AlterColumn<DateTime>(
                name: "DateArchivage",
                table: "Devis",
                type: "datetime2",
                nullable: false,
                oldClrType: typeof(DateTime),
                oldNullable: true);

            migrationBuilder.AlterColumn<decimal>(
                name: "longueurCoupePrincipale",
                table: "CoupePrincipale",
                type: "decimal(18,2)",
                nullable: false,
                oldClrType: typeof(decimal),
                oldType: "decimal(10 2)");

            migrationBuilder.AlterColumn<decimal>(
                name: "largeurCoupePrincipale",
                table: "CoupePrincipale",
                type: "decimal(18,2)",
                nullable: false,
                oldClrType: typeof(decimal),
                oldType: "decimal(10 2)");

            migrationBuilder.AlterColumn<DateTime>(
                name: "DateArchivage",
                table: "Composant",
                type: "datetime2",
                nullable: false,
                oldClrType: typeof(DateTime),
                oldNullable: true);

            migrationBuilder.AlterColumn<DateTime>(
                name: "DateArchivage",
                table: "Commercial",
                type: "datetime2",
                nullable: false,
                oldClrType: typeof(DateTime),
                oldNullable: true);

            migrationBuilder.AlterColumn<DateTime>(
                name: "DateArchivage",
                table: "Client",
                type: "datetime2",
                nullable: false,
                oldClrType: typeof(DateTime),
                oldNullable: true);
        }
    }
}
