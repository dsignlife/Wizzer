using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using Wizzer.Data.Entities;
using Wizzer.Data.Repositories;

namespace Wizzer.Controllers
{
    [Route("api/[Controller]")]
    public class ProductsController : Controller
    {
        private readonly IWizzerRepository _repository;
        private readonly ILogger<ProductsController> _logger;

        public ProductsController(IWizzerRepository repository, ILogger<ProductsController> logger)
        {
            _repository = repository;
            _logger = logger;
        }

        [HttpGet]
        public IActionResult Get()
        {
            try {
                return Ok(_repository.GetAllProducts());
            }
            catch (Exception e) {
                _logger.LogError($"Failed to : GetAllProducts {e}");
                return BadRequest("Failed to GetAllProducts");
            }
        }
    }
}
