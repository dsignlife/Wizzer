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
        private readonly IProductRepository _repository;
        private readonly ILogger<ProductsController> _logger;

        public ProductsController(IProductRepository repository, ILogger<ProductsController> logger)
        {
            _repository = repository;
            _logger = logger;
        }

        [HttpGet]
        public async Task<IActionResult> Get()
        {
            try {
                var products = await _repository.GetAllProductsAsync();
                return Ok(products);
            }
            catch (Exception e) {
                _logger.LogError($"Failed to : GetAllProductsAsync {e}");
                return BadRequest("Failed to GetAllProductsAsync");
            }
        }
    }
}
