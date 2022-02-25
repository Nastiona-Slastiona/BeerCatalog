﻿using System.IO;
using System.Net.Mime;
using Microsoft.AspNetCore.Mvc;


namespace beer_catalog.backend.Controllers
{
    public class FallbackController : Controller
    {
        public IActionResult Index()
        {
            return PhysicalFile(
                Path.Combine
                (
                    Directory.GetCurrentDirectory(), "wwwroot", "index.html"
                ),
                MediaTypeNames.Text.Html);
        }
    }
}
