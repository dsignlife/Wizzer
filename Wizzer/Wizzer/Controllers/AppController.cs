using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Server.Kestrel.Core.Internal.Http;
using Wizzer.Data;
using Wizzer.Data.Repositories;
using Wizzer.Services;
using Wizzer.ViewModels;

namespace Wizzer.Controllers
{
    public class AppController : Controller
    {
        private readonly IWizzerRepository _repository;
        private readonly IMailService _mailService;

        public AppController(IWizzerRepository repository, IMailService mailService)
        {
            _repository = repository;
            _mailService = mailService;
        }

        public IActionResult Index()
        {
            ViewBag.Title = "Index Page";

            return View();
        }

        [HttpGet("contact")]
        public IActionResult Contact()
        {
            ViewBag.Title = "Contact Page";

            return View();
        }
        
        [HttpPost("contact")]
        public IActionResult Contact(ContactViewModel model)
        {
            if (ModelState.IsValid) {
                _mailService.SendMessage("wizzerproj@gmail.com", model.Subject,
                    $"From: {model.Name} - {model.Email}, Message: {model.Message}");
                ViewBag.UserMessage = "Mail Sent";
                ModelState.Clear();
            }
                else
            {
                
            }

            return View();
        }

        [HttpGet("about")]
        public IActionResult About()
        {
            ViewBag.Title = "About Page";

            return View();
        }

        public IActionResult Shop()
        {
            var results = _repository.GetAllProducts();

            return View(results);
        }

    }
}
