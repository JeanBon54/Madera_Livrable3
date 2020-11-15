using System;
using Microsoft.EntityFrameworkCore.Migrations;

namespace Madera.Migrations
{
    public partial class FixLibelleComposant : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.RenameColumn(
                name: "quatite",
                table: "ModuleComposants",
                newName: "quantite");

            migrationBuilder.AlterColumn<DateTime>(
                name: "DateArchivage",
                table: "Devis",
                type: "datetime2",
                nullable: false,
                defaultValue: new DateTime(1, 1, 1, 0, 0, 0, 0, DateTimeKind.Unspecified),
                oldClrType: typeof(DateTime),
                oldType: "datetime2",
                oldNullable: true);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.RenameColumn(
                name: "quantite",
                table: "ModuleComposants",
                newName: "quatite");

            migrationBuilder.AlterColumn<DateTime>(
                name: "DateArchivage",
                table: "Devis",
                type: "datetime2",
                nullable: true,
                oldClrType: typeof(DateTime),
                oldType: "datetime2");
        }
    }
}
