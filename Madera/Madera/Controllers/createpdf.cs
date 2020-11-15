using System.IO;

namespace Madera.Controllers
{
    internal class createpdf
    {
        public createpdf()
        {


        }

        public string getTemplate()
        {
            string templatePath = File.ReadAllText(Path.Combine("Views", "TemplatePDF", "Template.html"));
            return templatePath;
        }
    }
}